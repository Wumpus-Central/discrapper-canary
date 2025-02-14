n.d(t, { Z: () => g });
var i = n(570140),
    l = n(809206),
    r = n(317770),
    a = n(18438),
    s = n(378879),
    o = n(350327),
    d = n(594174),
    c = n(74538),
    u = n(486324);
let h = (e) => {
        let { imageSrc: t, file: n, guildId: i, isTryItOutFlow: r } = e;
        if (r) {
            (0, o.c_)(t);
            return;
        }
        let h = d.default.getCurrentUser(),
            m = null != i ? a.I5 : l.I5,
            p = c.ZP.canUseAnimatedAvatar(h);
        if (p || 'image/gif' !== n.type) {
            m(t);
            return;
        }
        if (null != h && !p) {
            (0, s.s)(u.pC.AVATAR, t);
            return;
        }
    },
    m = (e) => {
        let { imageSrc: t, guildId: n, isTryItOutFlow: i } = e;
        if (i) {
            (0, o.f4)(t);
            return;
        }
        let l = d.default.getCurrentUser(),
            r = null != n ? a.g_ : o.g_,
            h = c.ZP.canUsePremiumProfileCustomization(l);
        if (c.ZP.canUsePremiumProfileCustomization(l)) {
            r(t);
            return;
        }
        if (null != l && !h) {
            (0, s.s)(u.pC.BANNER, t);
            return;
        }
    };
class p extends r.Z {
    _initialize() {
        i.Z.subscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        i.Z.unsubscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === u.pC.AVATAR ? h(e) : e.uploadType === u.pC.BANNER ? m(e) : void 0;
    }
}
let g = new p();
