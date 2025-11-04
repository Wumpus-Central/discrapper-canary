n.d(t, { Z: () => m });
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
                  let m = u.default.getCurrentUser(),
                      h = null != r ? a.I5 : i.I5,
                      g = d.ZP.canUseAnimatedAvatar(m);
                  if (g || "image/gif" !== n.type) return void h(t);
                  if (null == m) return;
                  let _ = (0, o.SD)({
                      userId: m.id,
                      image: t,
                  });
                  if (!g)
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
                        m = d.ZP.canUsePremiumProfileCustomization(o);
                    return d.ZP.canUsePremiumProfileCustomization(o)
                        ? void f(l)
                        : null == o || m
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
let m = new f();
