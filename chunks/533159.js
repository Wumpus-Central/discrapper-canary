n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(794295),
    o = n(388032),
    a = n(94209);
function s(e) {
    let { termsOfServiceUrl: t, privacyPolicyUrl: n } = e;
    return null == t && null == n
        ? null
        : (0, r.jsxs)("span", {
              className: a.text,
              children: [
                  null != t &&
                      (0, r.jsx)(i.Z, {
                          href: t,
                          children: o.intl.string(o.t["8S0kcM"]),
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
                          children: o.intl.string(o.t.ZpyeCm),
                      }),
              ],
          });
}
