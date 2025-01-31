i.d(e, { Z: () => a });
var n = i(200651);
i(192379);
var r = i(794295),
    s = i(388032),
    l = i(83909);
function a(t) {
    let { termsOfServiceUrl: e, privacyPolicyUrl: i } = t;
    return null == e && null == i
        ? null
        : (0, n.jsxs)('span', {
              className: l.text,
              children: [
                  null != e &&
                      (0, n.jsx)(r.Z, {
                          href: e,
                          children: s.intl.string(s.t['8S0kcH'])
                      }),
                  null != e &&
                      null != i &&
                      (0, n.jsx)('span', {
                          'aria-disabled': 'true',
                          children: '\u2022'
                      }),
                  null != i &&
                      (0, n.jsx)(r.Z, {
                          href: i,
                          children: s.intl.string(s.t.ZpyeCg)
                      })
              ]
          });
}
