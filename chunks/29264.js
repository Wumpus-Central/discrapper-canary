n.d(t, { Z: () => y }), n(415506);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(296182),
    a = n(976853),
    o = n(626135),
    s = n(358085),
    c = n(960048),
    u = n(998502),
    d = n(36998),
    f = n(981631),
    g = n(388032);
function b(e) {
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
function p(e, t) {
    (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t);
}
function y(e, t, n) {
    if (
        (0, a.Z)(null == t ? void 0 : t.getChannelId()) ||
        (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
        !s.isPlatformEmbedded ||
        null == e ||
        !(0, l.gS)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)
    )
        return null;
    let c = (0, l.s$)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType, l.wV),
        y = async () => {
            try {
                let e = await u.ZP.saveImage(c, null == n ? void 0 : n.contentType, l.wV);
                if (e === u.mQ.ERRORED) throw Error("NativeUtils.saveImage errored for ".concat(c));
                e === u.mQ.SAVED &&
                    (o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, b({}, (0, d.v)())),
                    (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.cqpdJW), i.ToastType.SUCCESS)));
            } catch (e) {
                o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, b({}, (0, d.v)())),
                    p(g.intl.string(g.t["8Ve/S0"]), e);
            }
        },
        O = async () => {
            try {
                await u.ZP.copyImage(c, null == n ? void 0 : n.contentType),
                    o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, b({}, (0, d.v)())),
                    (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.bhUpvC), i.ToastType.SUCCESS));
            } catch (e) {
                p(g.intl.string(g.t.PTPbjx), e),
                    o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, b({}, (0, d.v)()));
            }
        };
    return [
        (0, l.Lz)(e, null == n ? void 0 : n.contentType, null == n ? void 0 : n.originalContentType)
            ? (0, r.jsx)(
                  i.sNh,
                  {
                      id: "copy-image",
                      label: g.intl.string(g.t.tvUqWn),
                      action: O,
                  },
                  "copy-image",
              )
            : null,
        (0, r.jsx)(
            i.sNh,
            {
                id: "save-image",
                label: g.intl.string(g.t.PeXhgO),
                action: y,
            },
            "save-image",
        ),
    ];
}
