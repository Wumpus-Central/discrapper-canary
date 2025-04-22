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
        let { image: t, file: n, guildId: r, analyticsSource: l, isTryItOutFlow: h } = e;
        if (h) return void (0, c.c_)(t);
        let f = u.default.getCurrentUser(),
            g = null != r ? a.I5 : i.I5,
            m = d.ZP.canUseAnimatedAvatar(f);
        if (m || 'image/gif' !== n.type) return void g(t);
        if (null == f) return;
        let b = (0, s.SD)({
            userId: f.id,
            image: t
        });
        if (!m)
            return void (0, o.s)({
                uploadType: p.pC.AVATAR,
                imageSrc: b,
                analyticsSource: l
            });
    },
    f = (e) => {
        let { image: t, guildId: n, analyticsSource: r, isTryItOutFlow: i } = e,
            l = t.imageUri;
        if (i) return void (0, c.f4)(l);
        let s = u.default.getCurrentUser(),
            h = null != n ? a.g_ : c.g_,
            f = d.ZP.canUsePremiumProfileCustomization(s);
        return d.ZP.canUsePremiumProfileCustomization(s)
            ? void h(l)
            : null == s || f
              ? void 0
              : void (0, o.s)({
                    uploadType: p.pC.BANNER,
                    imageSrc: l,
                    analyticsSource: r
                });
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
