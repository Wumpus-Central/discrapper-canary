i.d(n, {
    Z: function () {
        return s;
    }
});
var e = i(200651);
i(192379);
var r = i(794295),
    a = i(388032),
    o = i(83909);
function s(t) {
    let { termsOfServiceUrl: n, privacyPolicyUrl: i } = t;
    return null == n && null == i
        ? null
        : (0, e.jsxs)('span', {
              className: o.text,
              children: [
                  null != n &&
                      (0, e.jsx)(r.Z, {
                          href: n,
                          children: a.intl.string(a.t['8S0kcH'])
                      }),
                  null != n &&
                      null != i &&
                      (0, e.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != i &&
                      (0, e.jsx)(r.Z, {
                          href: i,
                          children: a.intl.string(a.t.ZpyeCg)
                      })
              ]
          });
}
