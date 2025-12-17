n.d(t, {
    B: () => f,
    b: () => m,
}),
    n(388685);
var r = n(54381),
    l = n(473749),
    i = n(28664),
    a = n(481060),
    s = n(893776),
    o = n(489813),
    c = n(388032),
    u = n(888327);
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
                await s.Z.verifyResend(), i(!0), d(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(a.Text, {
              className: u.verifyConfirmText,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: c.intl.string(c.t.H3Q7U8),
          })
        : (0, r.jsx)(a.Button, {
              variant: "primary",
              size: "sm",
              text: o ? c.intl.string(c.t.WnX4J2) : c.intl.string(c.t["13ofGu"]),
              loading: e,
              onClick: m,
          });
}
function m() {
    return (0, r.jsx)(o.PU, {
        className: u.editableRequirementContainer,
        icon: a._XJ,
        text: c.intl.string(c.t.c6EUJI),
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(i.u, {
            asContainer: !0,
            text: c.intl.string(c.t.mGlP30),
            children: (0, r.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: c.intl.string(c.t["13ofGu"]),
            }),
        }),
    });
}
function f(e) {
    let { isUserVerified: t } = e,
        n = t ? c.intl.string(c.t.qY1jHN) : c.intl.string(c.t.c6EUJI);
    return (0, r.jsx)(o.PU, {
        className: u.editableRequirementContainer,
        icon: a._XJ,
        text: n,
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, r.jsx)(d, {}),
    });
}
