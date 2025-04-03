n.d(t, { Z: () => m });
var r = n(570140),
    i = n(809206),
    l = n(317770),
    a = n(18438),
    o = n(378879),
    s = n(643879),
    c = n(350327),
    u = n(594174),
    d = n(74538),
    p = n(486324);
let h = (e) => {
        let { image: t, file: n, guildId: r, isTryItOutFlow: l } = e;
        if (l) return void (0, c.c_)(t);
        let h = u.default.getCurrentUser(),
            f = null != r ? a.I5 : i.I5,
            g = d.ZP.canUseAnimatedAvatar(h);
        if (g || 'image/gif' !== n.type) return void f(t);
        if (null == h) return;
        let m = (0, s.SD)({
            userId: h.id,
            image: t
        });
        if (!g) return void (0, o.s)(p.pC.AVATAR, m);
    },
    f = (e) => {
        let { image: t, guildId: n, isTryItOutFlow: r } = e,
            i = t.imageUri;
        if (r) return void (0, c.f4)(i);
        let l = u.default.getCurrentUser(),
            s = null != n ? a.g_ : c.g_,
            h = d.ZP.canUsePremiumProfileCustomization(l);
        return d.ZP.canUsePremiumProfileCustomization(l) ? void s(i) : null == l || h ? void 0 : void (0, o.s)(p.pC.BANNER, i);
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
