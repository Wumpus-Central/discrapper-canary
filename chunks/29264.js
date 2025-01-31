n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(378409),
    s = n(976853),
    r = n(626135),
    o = n(358085),
    d = n(960048),
    c = n(998502),
    u = n(36998),
    g = n(981631),
    f = n(388032);
function m(e, t) {
    (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE)), d.Z.captureException(t);
}
function h(e, t, n) {
    if ((0, s.Z)(null == t ? void 0 : t.getChannelId()) || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !o.isPlatformEmbedded || null == e || !(0, a.gS)(e)) return null;
    let d = (0, a.s$)(e),
        h = async () => {
            try {
                await c.ZP.saveImage(d), r.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVED, { ...(0, u.v)() }), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.cqpdJS), l.ToastType.SUCCESS));
            } catch (e) {
                r.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, u.v)() }), m(f.intl.string(f.t['8Ve/S0']), e);
            }
        },
        E = async () => {
            try {
                await c.ZP.copyImage(d), r.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPIED, { ...(0, u.v)() }), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.bhUpvL), l.ToastType.SUCCESS));
            } catch (e) {
                m(f.intl.string(f.t.PTPbj4), e), r.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, u.v)() });
            }
        };
    return [
        c.ZP.canCopyImage() && (0, a.Lz)(e)
            ? (0, i.jsx)(
                  l.sNh,
                  {
                      id: 'copy-image',
                      label: f.intl.string(f.t.tvUqWl),
                      action: E
                  },
                  'copy-image'
              )
            : null,
        (0, i.jsx)(
            l.sNh,
            {
                id: 'save-image',
                label: f.intl.string(f.t.PeXhgI),
                action: h
            },
            'save-image'
        )
    ];
}
