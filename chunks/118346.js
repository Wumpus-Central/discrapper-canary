n.d(t, {
    B: () => f,
    b: () => m,
}),
    n(388685);
var r = n(951288),
    l = n(647438),
    i = n(28664),
    s = n(481060),
    a = n(893776),
    o = n(489813),
    c = n(388032),
    u = n(624463);
function d() {
    let [e, t] = l.useState(!1),
        [n, i] = l.useState(!1),
        [o, d] = l.useState(!1);
    l.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    i(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]);
    let m = async () => {
        if (!e) {
            t(!0);
            try {
                await a.Z.verifyResend(), i(!0), d(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(s.Text, {
              className: u.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: c.intl.string(c.t.H3Q7U1),
          })
        : (0, r.jsx)(s.Button, {
              variant: "primary",
              size: "sm",
              text: o ? c.intl.string(c.t.WnX4Jy) : c.intl.string(c.t["13ofGh"]),
              loading: e,
              onClick: m,
          });
}
function m() {
    return (0, r.jsx)(o.PU, {
        className: u.editableRequirementContainer,
        icon: s._XJ,
        text: c.intl.string(c.t.c6EUJC),
        footnote: c.intl.string(c.t["jMh+TU"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(i.u, {
            asContainer: !0,
            text: c.intl.string(c.t.mGlP39),
            children: (0, r.jsx)(s.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: c.intl.string(c.t["13ofGh"]),
            }),
        }),
    });
}
function f(e) {
    let { isUserVerified: t } = e,
        n = t ? c.intl.string(c.t.qY1jHB) : c.intl.string(c.t.c6EUJC);
    return (0, r.jsx)(o.PU, {
        className: u.editableRequirementContainer,
        icon: s._XJ,
        text: n,
        footnote: c.intl.string(c.t["jMh+TU"]),
        meetsRequirement: t,
        children: (0, r.jsx)(d, {}),
    });
}
