n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(378409),
    a = n(976853),
    o = n(626135),
    s = n(358085),
    c = n(960048),
    u = n(998502),
    d = n(36998),
    f = n(981631),
    g = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE)), c.Z.captureException(t);
}
function p(e, t, n) {
    if ((0, a.Z)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == e || !(0, l.gS)(e)) return null;
    let c = (0, l.s$)(e),
        p = async () => {
            try {
                await u.ZP.saveImage(c), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, m({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.NW.string(g.t.cqpdJS), i.ToastType.SUCCESS));
            } catch (e) {
                o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, m({}, (0, d.v)())), b(g.NW.string(g.t['8Ve/S0']), e);
            }
        },
        h = async () => {
            try {
                await u.ZP.copyImage(c), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, m({}, (0, d.v)())), (0, i.showToast)((0, i.createToast)(g.NW.string(g.t.bhUpvL), i.ToastType.SUCCESS));
            } catch (e) {
                b(g.NW.string(g.t.PTPbj4), e), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, m({}, (0, d.v)()));
            }
        };
    return [
        u.ZP.canCopyImage() && (0, l.Lz)(e)
            ? (0, r.jsx)(
                  i.sNh,
                  {
                      id: 'copy-image',
                      label: g.NW.string(g.t.tvUqWl),
                      action: h
                  },
                  'copy-image'
              )
            : null,
        (0, r.jsx)(
            i.sNh,
            {
                id: 'save-image',
                label: g.NW.string(g.t.PeXhgI),
                action: p
            },
            'save-image'
        )
    ];
}
