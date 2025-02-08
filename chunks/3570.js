n.d(t, {
    T: () => s,
    s: () => c
});
var i = n(536285),
    r = n(703656),
    a = n(314897),
    l = n(358085),
    o = n(981631);
let s = l.isPlatformEmbedded
        ? o.dG4
        : (e, t) => {
              if (!(0, r.DB)())
                  return i.default.request(o.Etm.DEEP_LINK, {
                      type: e,
                      params: t
                  });
          },
    c = l.isPlatformEmbedded
        ? o.dG4
        : (e, t) => {
              if (!a.default.isAuthenticated())
                  return s(e, {
                      ...(t || {}),
                      fingerprint: a.default.getFingerprint()
                  });
          };
