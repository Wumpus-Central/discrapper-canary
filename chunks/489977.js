n.d(t, { Z: () => h });
var r = n(570140),
    i = n(809206),
    l = n(317770),
    a = n(18438),
    s = n(378879),
    o = n(643879),
    c = n(350327),
    u = n(594174),
    d = n(74538),
    p = n(486324);
class f extends l.Z {
    _initialize() {
        r.Z.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        r.Z.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === p.pC.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: r, analyticsSource: l, isTryItOut: f } = e;
                  if (f) return void (0, c.c_)(t);
                  let h = u.default.getCurrentUser(),
                      g = null != r ? a.I5 : i.I5,
                      m = d.ZP.canUseAnimatedAvatar(h);
                  if (m || "image/gif" !== n.type) return void g(t);
                  if (null == h) return;
                  let _ = (0, o.SD)({
                      userId: h.id,
                      image: t,
                  });
                  if (!m)
                      return void (0, s.s)({
                          uploadType: p.pC.AVATAR,
                          imageSrc: _,
                          analyticsSource: l,
                      });
              })(e)
            : e.uploadType === p.pC.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, analyticsSource: r, isTryItOut: i } = e,
                        l = t.imageUri;
                    if (i) return void (0, c.f4)(l);
                    let o = u.default.getCurrentUser(),
                        f = null != n ? a.g_ : c.g_,
                        h = d.ZP.canUsePremiumProfileCustomization(o);
                    return d.ZP.canUsePremiumProfileCustomization(o)
                        ? void f(l)
                        : null == o || h
                          ? void 0
                          : void (0, s.s)({
                                uploadType: p.pC.BANNER,
                                imageSrc: l,
                                analyticsSource: r,
                            });
                })(e)
              : void 0;
    }
}
let h = new f();
