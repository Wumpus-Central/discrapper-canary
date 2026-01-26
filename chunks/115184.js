n.d(t, {
    A: () => b,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(803316),
    a = n(207133),
    o = n(954571),
    c = n(723702),
    s = n(728458),
    d = n(837921),
    u = n(179581),
    g = n(652215),
    p = n(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function y(e, t) {
    (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), s.A.captureException(t);
}

function b(e, t, n) {
    if (
        (0, a.A)(null == t ? void 0 : t.getChannelId()) ||
        (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
        !c.isPlatformEmbedded ||
        null == e ||
        !(0, l.e7)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)
    )
        return null;
    let s = (0, l.XW)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType, l.N7),
        b = async () => {
            try {
                let e = await d.Ay.saveImage(s, null == n ? void 0 : n.contentType, l.N7);
                if (e === d._0.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(s));
                e === d._0.SAVED &&
                    (o.default.track(g.HAw.CONTEXT_MENU_IMAGE_SAVED, f({}, (0, u.N)())),
                    (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.cqpdJW), i.ToastType.SUCCESS)));
            } catch (e) {
                o.default.track(g.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, f({}, (0, u.N)())),
                    y(p.intl.string(p.t["8Ve/S0"]), e);
            }
        },
        A = async () => {
            try {
                await d.Ay.copyImage(s, null == n ? void 0 : n.contentType),
                    o.default.track(g.HAw.CONTEXT_MENU_IMAGE_COPIED, f({}, (0, u.N)())),
                    (0, i.showToast)((0, i.createToast)(p.intl.string(p.t.bhUpvC), i.ToastType.SUCCESS));
            } catch (e) {
                y(p.intl.string(p.t.PTPbjx), e),
                    o.default.track(g.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, f({}, (0, u.N)()));
            }
        };
    return [
        (0, l.PK)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)
            ? (0, r.jsx)(
                  i.Drp,
                  {
                      id: "copy-image",
                      label: p.intl.string(p.t.tvUqWn),
                      leadingAccessory: {
                          type: "icon",
                          icon: i.xfq,
                      },
                      action: A,
                  },
                  "copy-image",
              )
            : null,
        (0, r.jsx)(
            i.Drp,
            {
                id: "save-image",
                label: p.intl.string(p.t.PeXhgO),
                leadingAccessory: {
                    type: "icon",
                    icon: i.xfq,
                },
                action: b,
            },
            "save-image",
        ),
    ];
}
