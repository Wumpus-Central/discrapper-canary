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
let f = (e) => {
        let { image: t, file: n, guildId: r, analyticsSource: l, isTryItOutFlow: f } = e;
        if (f) return void (0, c.c_)(t);
        let h = u.default.getCurrentUser(),
            g = null != r ? a.I5 : i.I5,
            m = d.ZP.canUseAnimatedAvatar(h);
        if (m || "image/gif" !== n.type) return void g(t);
        if (null == h) return;
        let b = (0, s.SD)({
            userId: h.id,
            image: t,
        });
        if (!m)
            return void (0, o.s)({
                uploadType: p.pC.AVATAR,
                imageSrc: b,
                analyticsSource: l,
            });
    },
    h = (e) => {
        let { image: t, guildId: n, analyticsSource: r, isTryItOutFlow: i } = e,
            l = t.imageUri;
        if (i) return void (0, c.f4)(l);
        let s = u.default.getCurrentUser(),
            f = null != n ? a.g_ : c.g_,
            h = d.ZP.canUsePremiumProfileCustomization(s);
        return d.ZP.canUsePremiumProfileCustomization(s)
            ? void f(l)
            : null == s || h
              ? void 0
              : void (0, o.s)({
                    uploadType: p.pC.BANNER,
                    imageSrc: l,
                    analyticsSource: r,
                });
    };
class g extends l.Z {
    _initialize() {
        r.Z.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        r.Z.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === p.pC.AVATAR ? f(e) : e.uploadType === p.pC.BANNER ? h(e) : void 0;
    }
}
let m = new g();
