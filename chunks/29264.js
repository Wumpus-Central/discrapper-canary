n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(296182),
    a = n(976853),
    s = n(626135),
    l = n(358085),
    c = n(960048),
    u = n(998502),
    d = n(36998),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t);
}
function g(e, t, n) {
    if (
        (0, a.Z)(null == t ? void 0 : t.getChannelId()) ||
        (null == n ? void 0 : n.shouldHideMediaOptions) === !0 ||
        !l.isPlatformEmbedded ||
        null == e ||
        !(0, o.gS)(e, null == n ? void 0 : n.contentType)
    )
        return null;
    let c = (0, o.s$)(e, null == n ? void 0 : n.contentType, o.wV),
        p = async () => {
            try {
                await u.ZP.saveImage(c, null == n ? void 0 : n.contentType, o.wV),
                    s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, h({}, (0, d.v)())),
                    (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.cqpdJS), i.ToastType.SUCCESS));
            } catch (e) {
                s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, h({}, (0, d.v)())),
                    m(_.intl.string(_.t["8Ve/S0"]), e);
            }
        },
        g = async () => {
            try {
                await u.ZP.copyImage(c, null == n ? void 0 : n.contentType),
                    s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, h({}, (0, d.v)())),
                    (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.bhUpvL), i.ToastType.SUCCESS));
            } catch (e) {
                m(_.intl.string(_.t.PTPbj4), e),
                    s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, h({}, (0, d.v)()));
            }
        };
    return [
        (0, o.Lz)(e, null == n ? void 0 : n.contentType)
            ? (0, r.jsx)(
                  i.sNh,
                  {
                      id: "copy-image",
                      label: _.intl.string(_.t.tvUqWl),
                      action: g,
                  },
                  "copy-image",
              )
            : null,
        (0, r.jsx)(
            i.sNh,
            {
                id: "save-image",
                label: _.intl.string(_.t.PeXhgI),
                action: p,
            },
            "save-image",
        ),
    ];
}
