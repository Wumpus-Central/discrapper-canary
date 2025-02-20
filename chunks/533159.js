t.d(r, { Z: () => a });
var n = t(200651);
t(192379);
var l = t(794295),
    s = t(388032),
    o = t(632942);
function a(e) {
    let { termsOfServiceUrl: r, privacyPolicyUrl: t } = e;
    return null == r && null == t
        ? null
        : (0, n.jsxs)('span', {
              className: o.text,
              children: [
                  null != r &&
                      (0, n.jsx)(l.Z, {
                          href: r,
                          children: s.NW.string(s.t['8S0kcH'])
                      }),
                  null != r &&
                      null != t &&
                      (0, n.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != t &&
                      (0, n.jsx)(l.Z, {
                          href: t,
                          children: s.NW.string(s.t.ZpyeCg)
                      })
              ]
          });
}
