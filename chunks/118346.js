n.d(t, {
    B: () => m,
    b: () => u,
}),
    n(388685);
var r = n(951288),
    l = n(647438),
    i = n(481060),
    s = n(893776),
    a = n(489813),
    o = n(388032),
    c = n(624463);
function d() {
    let [e, t] = l.useState(!1),
        [n, a] = l.useState(!1),
        [d, u] = l.useState(!1);
    l.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    a(!1);
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
                await s.Z.verifyResend(), a(!0), u(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(i.Text, {
              className: c.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: o.intl.string(o.t.H3Q7U1),
          })
        : (0, r.jsx)(i.zxk, {
              variant: "primary",
              size: "sm",
              text: d ? o.intl.string(o.t.WnX4Jy) : o.intl.string(o.t["13ofGh"]),
              loading: e,
              onClick: m,
          });
}
function u() {
    return (0, r.jsx)(a.PU, {
        className: c.editableRequirementContainer,
        icon: i._XJ,
        text: o.intl.string(o.t.c6EUJC),
        footnote: o.intl.string(o.t["jMh+TU"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(i.DY3, {
            text: o.intl.string(o.t.mGlP39),
            children: (0, r.jsx)(i.zxk, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: o.intl.string(o.t["13ofGh"]),
            }),
        }),
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? o.intl.string(o.t.qY1jHB) : o.intl.string(o.t.c6EUJC);
    return (0, r.jsx)(a.PU, {
        className: c.editableRequirementContainer,
        icon: i._XJ,
        text: n,
        footnote: o.intl.string(o.t["jMh+TU"]),
        meetsRequirement: t,
        children: (0, r.jsx)(d, {}),
    });
}
