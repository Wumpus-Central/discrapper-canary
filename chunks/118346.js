(n.d(t, {
    B: () => m,
    b: () => u
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(893776),
    s = n(489813),
    a = n(388032),
    c = n(667084);
function d() {
    let [e, t] = i.useState(!1),
        [n, s] = i.useState(!1),
        [d, u] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    s(!1);
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
                (await o.Z.verifyResend(), s(!0), u(!0));
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
              children: a.intl.string(a.t.H3Q7U1)
          })
        : (0, r.jsx)(l.zxk, {
              variant: 'primary',
              size: 'sm',
              text: d ? a.intl.string(a.t.WnX4Jy) : a.intl.string(a.t['13ofGh']),
              loading: e,
              onClick: m
          });
}
function u() {
    return (0, r.jsx)(s.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: a.intl.string(a.t.c6EUJC),
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.DY3, {
            text: a.intl.string(a.t.mGlP39),
            children: (0, r.jsx)(l.zxk, {
                variant: 'primary',
                size: 'sm',
                disabled: !0,
                text: a.intl.string(a.t['13ofGh'])
            })
        })
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? a.intl.string(a.t.qY1jHB) : a.intl.string(a.t.c6EUJC);
    return (0, r.jsx)(s.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: n,
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(d, {})
    });
}
