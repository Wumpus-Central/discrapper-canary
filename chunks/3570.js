n.d(t, {
    T: () => o,
    s: () => c
});
var i = n(536285),
    r = n(703656),
    a = n(314897),
    l = n(358085),
    s = n(981631);
let o = l.isPlatformEmbedded
        ? s.dG4
        : (e, t) => {
              if (!(0, r.DB)())
                  return i.default.request(s.Etm.DEEP_LINK, {
                      type: e,
                      params: t
                  });
          },
    c = l.isPlatformEmbedded
        ? s.dG4
        : (e, t) => {
              if (!a.default.isAuthenticated())
                  return o(e, {
                      ...(t || {}),
                      fingerprint: a.default.getFingerprint()
                  });
          };
