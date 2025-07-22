(n.d(t, {
    B: () => m,
    b: () => d
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(893776),
    o = n(489813),
    a = n(388032),
    c = n(667084);
function u() {
    let [e, t] = i.useState(!1),
        [n, o] = i.useState(!1),
        [u, d] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    o(!1);
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
                (await s.Z.verifyResend(), o(!0), d(!0));
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
              text: u ? a.intl.string(a.t.WnX4Jy) : a.intl.string(a.t['13ofGh']),
              loading: e,
              onClick: m
          });
}
function d() {
    return (0, r.jsx)(o.PU, {
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
    return (0, r.jsx)(o.PU, {
        className: c.editableRequirementContainer,
        icon: l._XJ,
        text: n,
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, r.jsx)(u, {})
    });
}
