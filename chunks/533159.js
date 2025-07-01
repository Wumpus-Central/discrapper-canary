n.d(e, { Z: () => a });
var i = n(255367);
n(73800);
var r = n(794295),
    l = n(388032),
    o = n(71851);
function a(t) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: n } = t;
    return null == e && null == n
        ? null
        : (0, i.jsxs)('span', {
              className: o.text,
              children: [
                  null != e &&
                      (0, i.jsx)(r.Z, {
                          href: e,
                          children: l.intl.string(l.t['8S0kcH'])
                      }),
                  null != e &&
                      null != n &&
                      (0, i.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != n &&
                      (0, i.jsx)(r.Z, {
                          href: n,
                          children: l.intl.string(l.t.ZpyeCg)
                      })
              ]
          });
}
