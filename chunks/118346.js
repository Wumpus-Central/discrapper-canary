(n.d(t, {
    B: () => m,
    b: () => d
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(893776),
    a = n(489813),
    o = n(388032),
    c = n(667084);
function u() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [u, d] = i.useState(!1);
    i.useEffect(() => {
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
                (await s.Z.verifyResend(), a(!0), d(!0));
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, r.jsx)(l.Text, {
              className: c.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-feedback-positive',
              children: o.intl.string(o.t.H3Q7U1)
          })
        : (0, r.jsx)(l.zxk, {
              variant: 'primary',
              size: 'sm',
              text: u ? o.intl.string(o.t.WnX4Jy) : o.intl.string(o.t['13ofGh']),
              loading: e,
              onClick: m
          });
}
function d() {
    return (0, r.jsx)(a.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: o.intl.string(o.t.c6EUJC),
        footnote: o.intl.string(o.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.DY3, {
            text: o.intl.string(o.t.mGlP39),
            children: (0, r.jsx)(l.zxk, {
                variant: 'primary',
                size: 'sm',
                disabled: !0,
                text: o.intl.string(o.t['13ofGh'])
            })
        })
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? o.intl.string(o.t.qY1jHB) : o.intl.string(o.t.c6EUJC);
    return (0, r.jsx)(a.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: n,
        footnote: o.intl.string(o.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(u, {})
    });
}
