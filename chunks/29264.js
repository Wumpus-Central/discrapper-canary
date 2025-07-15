n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function p(e, t) {
    ((0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t));
}
function m(e, t, n) {
    if ((0, a.Z)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == e || !(0, l.gS)(e, null == n ? void 0 : n.contentType)) return null;
    let c = (0, l.s$)(e, null == n ? void 0 : n.contentType, l.wV),
        m = async () => {
            try {
                (await u.ZP.saveImage(c, null == n ? void 0 : n.contentType, l.wV), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, b({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.cqpdJS), i.ToastType.SUCCESS)));
            } catch (e) {
                (o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, b({}, (0, d.v)())), p(g.intl.string(g.t['8Ve/S0']), e));
            }
        },
        O = async () => {
            try {
                (await u.ZP.copyImage(c, null == n ? void 0 : n.contentType), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, b({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.intl.string(g.t.bhUpvL), i.ToastType.SUCCESS)));
            } catch (e) {
                (p(g.intl.string(g.t.PTPbj4), e), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, b({}, (0, d.v)())));
            }
        };
    return [
        (0, l.Lz)(e, null == n ? void 0 : n.contentType)
            ? (0, r.jsx)(
                  i.sNh,
                  {
                      id: 'copy-image',
                      label: g.intl.string(g.t.tvUqWl),
                      action: O
                  },
                  'copy-image'
              )
            : null,
        (0, r.jsx)(
            i.sNh,
            {
                id: 'save-image',
                label: g.intl.string(g.t.PeXhgI),
                action: m
            },
            'save-image'
        )
    ];
}
