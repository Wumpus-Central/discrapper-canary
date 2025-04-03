n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(794295),
    i = n(388032),
    o = n(71851);
function a(e) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)('span', {
              className: o.text,
              children: [
                  null != t &&
                      (0, r.jsx)(l.Z, {
                          href: t,
                          children: i.NW.string(i.t['8S0kcH'])
                      }),
                  null != t &&
                      null != n &&
                      (0, r.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != n &&
                      (0, r.jsx)(l.Z, {
                          href: n,
                          children: i.NW.string(i.t.ZpyeCg)
                      })
              ]
          });
}
