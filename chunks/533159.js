e.d(n, {
    Z: function () {
        return o;
    }
});
var i = e(200651);
e(192379);
var r = e(794295),
    a = e(388032),
    s = e(83909);
function o(t) {
    let { termsOfServiceUrl: n, privacyPolicyUrl: e } = t;
    return null == n && null == e
        ? null
        : (0, i.jsxs)('span', {
              className: s.text,
              children: [
                  null != n &&
                      (0, i.jsx)(r.Z, {
                          href: n,
                          children: a.intl.string(a.t['8S0kcH'])
                      }),
                  null != n &&
                      null != e &&
                      (0, i.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != e &&
                      (0, i.jsx)(r.Z, {
                          href: e,
                          children: a.intl.string(a.t.ZpyeCg)
                      })
              ]
          });
}
