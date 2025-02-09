n.d(t, {
    T: () => s,
    s: () => c
});
var i = n(536285),
    r = n(703656),
    l = n(314897),
    a = n(358085),
    o = n(981631);
let s = a.isPlatformEmbedded
        ? o.dG4
        : (e, t) => {
              if (!(0, r.DB)())
                  return i.default.request(o.Etm.DEEP_LINK, {
                      type: e,
                      params: t
                  });
          },
    c = a.isPlatformEmbedded
        ? o.dG4
        : (e, t) => {
              if (!l.default.isAuthenticated())
                  return s(e, {
                      ...(t || {}),
                      fingerprint: l.default.getFingerprint()
                  });
          };
