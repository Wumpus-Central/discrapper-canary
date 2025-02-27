n.d(t, { Z: () => m });
var r = n(570140),
    i = n(809206),
    l = n(317770),
    o = n(18438),
    a = n(378879),
    s = n(643879),
    c = n(350327),
    u = n(594174),
    d = n(74538),
    p = n(486324);
let h = (e) => {
        let { image: t, file: n, guildId: r, isTryItOutFlow: l } = e;
        if (l) {
            (0, c.US)(t);
            return;
        }
        let h = u.default.getCurrentUser(),
            f = null != r ? o.Re : i.Re,
            g = d.ZP.canUseAnimatedAvatar(h);
        if (g || 'image/gif' !== n.type) {
            f(t);
            return;
        }
        if (null == h) return;
        let m = (0, s.SD)({
            userId: h.id,
            image: t
        });
        if (!g) {
            (0, a.s)(p.pC.AVATAR, m);
            return;
        }
    },
    f = (e) => {
        let { image: t, guildId: n, isTryItOutFlow: r } = e,
            i = t.imageUri;
        if (r) {
            (0, c.f4)(i);
            return;
        }
        let l = u.default.getCurrentUser(),
            s = null != n ? o.g_ : c.g_,
            h = d.ZP.canUsePremiumProfileCustomization(l);
        if (d.ZP.canUsePremiumProfileCustomization(l)) {
            s(i);
            return;
        }
        if (null != l && !h) {
            (0, a.s)(p.pC.BANNER, i);
            return;
        }
    };
class g extends l.Z {
    _initialize() {
        r.Z.subscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        r.Z.unsubscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === p.pC.AVATAR ? h(e) : e.uploadType === p.pC.BANNER ? f(e) : void 0;
    }
}
let m = new g();
