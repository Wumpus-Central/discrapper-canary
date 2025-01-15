n.d(e, {
    T: function () {
        return a;
    },
    s: function () {
        return c;
    }
});
var r = n(536285),
    i = n(703656),
    l = n(314897),
    u = n(358085),
    o = n(981631);
let a = u.isPlatformEmbedded
        ? o.dG4
        : (t, e) => {
              if (!(0, i.DB)())
                  return r.default.request(o.Etm.DEEP_LINK, {
                      type: t,
                      params: e
                  });
          },
    c = u.isPlatformEmbedded
        ? o.dG4
        : (t, e) => {
              if (!l.default.isAuthenticated())
                  return a(t, {
                      ...(e || {}),
                      fingerprint: l.default.getFingerprint()
                  });
          };
