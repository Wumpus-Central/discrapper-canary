t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(378409),
    a = t(976853),
    o = t(626135),
    s = t(358085),
    u = t(960048),
    d = t(998502),
    c = t(36998),
    g = t(981631),
    f = t(388032);
function m(e, n) {
    (0, l.showToast)((0, l.createToast)(e, l.ToastType.FAILURE)), u.Z.captureException(n);
}
function h(e, n, t) {
    if ((0, a.Z)(null == n ? void 0 : n.getChannelId()) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == e || !(0, r.gS)(e)) return null;
    let u = (0, r.s$)(e),
        h = async () => {
            try {
                await d.ZP.saveImage(u), o.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVED, { ...(0, c.v)() }), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.cqpdJS), l.ToastType.SUCCESS));
            } catch (e) {
                o.default.track(g.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, c.v)() }), m(f.intl.string(f.t['8Ve/S0']), e);
            }
        },
        E = async () => {
            try {
                await d.ZP.copyImage(u), o.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPIED, { ...(0, c.v)() }), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.bhUpvL), l.ToastType.SUCCESS));
            } catch (e) {
                m(f.intl.string(f.t.PTPbj4), e), o.default.track(g.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, c.v)() });
            }
        };
    return [
        d.ZP.canCopyImage() && (0, r.Lz)(e)
            ? (0, i.jsx)(
                  l.MenuItem,
                  {
                      id: 'copy-image',
                      label: f.intl.string(f.t.tvUqWl),
                      action: E
                  },
                  'copy-image'
              )
            : null,
        (0, i.jsx)(
            l.MenuItem,
            {
                id: 'save-image',
                label: f.intl.string(f.t.PeXhgI),
                action: h
            },
            'save-image'
        )
    ];
}
