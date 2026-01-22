n.d(t, { A: () => m }), n(65821);
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(803316),
    o = n(207133),
    a = n(954571),
    c = n(723702),
    s = n(728458),
    d = n(837921),
    u = n(179581),
    f = n(652215),
    g = n(985018);
function p(e) {
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
function b(e, t) {
    (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE)), s.A.captureException(t);
}
function m(e, t, n) {
    if (
        (0, o.A)(null == t ? void 0 : t.getChannelId()) ||
        (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
        !c.isPlatformEmbedded ||
        null == e ||
        !(0, i.e7)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)
    )
        return null;
    let s = (0, i.XW)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType, i.N7),
        m = async () => {
            try {
                let e = await d.Ay.saveImage(s, null == n ? void 0 : n.contentType, i.N7);
                if (e === d._0.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(s));
                e === d._0.SAVED &&
                    (a.default.track(f.HAw.CONTEXT_MENU_IMAGE_SAVED, p({}, (0, u.N)())),
                    (0, l.showToast)((0, l.createToast)(g.intl.string(g.t.cqpdJW), l.ToastType.SUCCESS)));
            } catch (e) {
                a.default.track(f.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, p({}, (0, u.N)())),
                    b(g.intl.string(g.t["8Ve/S0"]), e);
            }
        },
        y = async () => {
            try {
                await d.Ay.copyImage(s, null == n ? void 0 : n.contentType),
                    a.default.track(f.HAw.CONTEXT_MENU_IMAGE_COPIED, p({}, (0, u.N)())),
                    (0, l.showToast)((0, l.createToast)(g.intl.string(g.t.bhUpvC), l.ToastType.SUCCESS));
            } catch (e) {
                b(g.intl.string(g.t.PTPbjx), e),
                    a.default.track(f.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, p({}, (0, u.N)()));
            }
        };
    return [
        (0, i.PK)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)
            ? (0, r.jsx)(
                  l.Drp,
                  {
                      id: "copy-image",
                      label: g.intl.string(g.t.tvUqWn),
                      action: y,
                  },
                  "copy-image",
              )
            : null,
        (0, r.jsx)(
            l.Drp,
            {
                id: "save-image",
                label: g.intl.string(g.t.PeXhgO),
                action: m,
            },
            "save-image",
        ),
    ];
}
