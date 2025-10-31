n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(794295),
    a = n(388032),
    o = n(94209);
function s(e) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("span", {
              className: o.text,
              children: [
                  null != t &&
                      (0, r.jsx)(i.Z, {
                          href: t,
                          children: a.intl.string(a.t["8S0kcM"]),
                      }),
                  null != t &&
                      null != n &&
                      (0, r.jsx)("span", {
                          "aria-disabled": "true",
                          children: "\u2022",
                      }),
                  null != n &&
                      (0, r.jsx)(i.Z, {
                          href: n,
                          children: a.intl.string(a.t.ZpyeCm),
                      }),
              ],
          });
}
