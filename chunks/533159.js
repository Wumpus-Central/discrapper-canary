l.d(e, {
    Z: function () {
        return s;
    }
});
var t = l(200651);
l(192379);
var i = l(794295),
    o = l(388032),
    r = l(83909);
function s(n) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: l } = n;
    return null == e && null == l
        ? null
        : (0, t.jsxs)('span', {
              className: r.text,
              children: [
                  null != e &&
                      (0, t.jsx)(i.Z, {
                          href: e,
                          children: o.intl.string(o.t['8S0kcH'])
                      }),
                  null != e &&
                      null != l &&
                      (0, t.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != l &&
                      (0, t.jsx)(i.Z, {
                          href: l,
                          children: o.intl.string(o.t.ZpyeCg)
                      })
              ]
          });
}
