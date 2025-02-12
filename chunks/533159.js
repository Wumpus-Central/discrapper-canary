n.d(e, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(794295),
    t = n(388032),
    r = n(46907);
function a(l) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: n } = l;
    return null == e && null == n
        ? null
        : (0, i.jsxs)('span', {
              className: r.text,
              children: [
                  null != e &&
                      (0, i.jsx)(s.Z, {
                          href: e,
                          children: t.intl.string(t.t['8S0kcH'])
                      }),
                  null != e &&
                      null != n &&
                      (0, i.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != n &&
                      (0, i.jsx)(s.Z, {
                          href: n,
                          children: t.intl.string(t.t.ZpyeCg)
                      })
              ]
          });
}
