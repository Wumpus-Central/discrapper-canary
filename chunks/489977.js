n.d(t, { Z: () => g });
var r = n(570140),
    i = n(809206),
    l = n(317770),
    o = n(18438),
    a = n(378879),
    s = n(350327),
    c = n(594174),
    u = n(74538),
    d = n(486324);
let p = (e) => {
        let { imageSrc: t, file: n, guildId: r, isTryItOutFlow: l } = e;
        if (l) {
            (0, s.c_)(t);
            return;
        }
        let p = c.default.getCurrentUser(),
            h = null != r ? o.I5 : i.I5,
            f = u.ZP.canUseAnimatedAvatar(p);
        if (f || 'image/gif' !== n.type) {
            h(t);
            return;
        }
        if (null != p && !f) {
            (0, a.s)(d.pC.AVATAR, t);
            return;
        }
    },
    h = (e) => {
        let { imageSrc: t, guildId: n, isTryItOutFlow: r } = e;
        if (r) {
            (0, s.f4)(t);
            return;
        }
        let i = c.default.getCurrentUser(),
            l = null != n ? o.g_ : s.g_,
            p = u.ZP.canUsePremiumProfileCustomization(i);
        if (u.ZP.canUsePremiumProfileCustomization(i)) {
            l(t);
            return;
        }
        if (null != i && !p) {
            (0, a.s)(d.pC.BANNER, t);
            return;
        }
    };
class f extends l.Z {
    _initialize() {
        r.Z.subscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        r.Z.unsubscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === d.pC.AVATAR ? p(e) : e.uploadType === d.pC.BANNER ? h(e) : void 0;
    }
}
let g = new f();
