var i = n(570140),
    r = n(809206),
    l = n(317770),
    a = n(18438),
    s = n(378879),
    o = n(350327),
    c = n(594174),
    d = n(74538),
    u = n(486324);
let h = (e) => {
        let { imageSrc: t, file: n, guildId: i, isTryItOutFlow: l } = e;
        if (l) {
            (0, o.c_)(t);
            return;
        }
        let h = c.default.getCurrentUser(),
            m = null != i ? a.I5 : r.I5,
            p = d.ZP.canUseAnimatedAvatar(h);
        if (p || 'image/gif' !== n.type) {
            m(t);
            return;
        }
        if (null != h) {
            if (!p) {
                (0, s.openProfileUpsellModal)(u.pC.AVATAR, t);
                return;
            }
        }
    },
    m = (e) => {
        let { imageSrc: t, guildId: n, isTryItOutFlow: i } = e;
        if (i) {
            (0, o.f4)(t);
            return;
        }
        let r = c.default.getCurrentUser(),
            l = null != n ? a.g_ : o.g_,
            h = d.ZP.canUsePremiumProfileCustomization(r);
        if (d.ZP.canUsePremiumProfileCustomization(r)) {
            l(t);
            return;
        }
        if (null != r) {
            if (!h) {
                (0, s.openProfileUpsellModal)(u.pC.BANNER, t);
                return;
            }
        }
    };
class p extends l.Z {
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
t.Z = new p();
