n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(296182),
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e, t) {
    (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE)), c.Z.captureException(t);
}
function b(e, t, n) {
    if ((0, a.Z)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == e || !(0, l.gS)(e)) return null;
    let c = (0, l.s$)(e),
        b = async () => {
            try {
                await u.ZP.saveImage(c), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, m({}, (0, d.v)())), (0, r.showToast)((0, r.createToast)(g.intl.string(g.t.cqpdJS), r.ToastType.SUCCESS));
            } catch (e) {
                o.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, m({}, (0, d.v)())), p(g.intl.string(g.t['8Ve/S0']), e);
            }
        },
        h = async () => {
            try {
                await u.ZP.copyImage(c), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, m({}, (0, d.v)())), (0, r.showToast)((0, r.createToast)(g.intl.string(g.t.bhUpvL), r.ToastType.SUCCESS));
            } catch (e) {
                p(g.intl.string(g.t.PTPbj4), e), o.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, m({}, (0, d.v)()));
            }
        };
    return [
        (0, l.Lz)(e)
            ? (0, i.jsx)(
                  r.sNh,
                  {
                      id: 'copy-image',
                      label: g.intl.string(g.t.tvUqWl),
                      action: h
                  },
                  'copy-image'
              )
            : null,
        (0, i.jsx)(
            r.sNh,
            {
                id: 'save-image',
                label: g.intl.string(g.t.PeXhgI),
                action: b
            },
            'save-image'
        )
    ];
}
