n.d(t, {
    B: () => f,
    b: () => c
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(893776),
    u = n(476770),
    o = n(388032),
    a = n(802044);
function d() {
    let [e, t] = l.useState(!1),
        [n, u] = l.useState(!1),
        [d, c] = l.useState(!1);
    l.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    u(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]);
    let f = async () => {
        if (!e) {
            t(!0);
            try {
                await s.Z.verifyResend(), u(!0), c(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, i.jsx)(r.Text, {
              className: a.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: o.intl.string(o.t.H3Q7U1)
          })
        : (0, i.jsx)(r.zxk, {
              size: r.zxk.Sizes.SMALL,
              submitting: e,
              onClick: f,
              children: d ? o.intl.string(o.t.WnX4Jy) : o.intl.string(o.t['13ofGh'])
          });
}
function c() {
    return (0, i.jsx)(u.PU, {
        className: a.editableRequirementContainer,
        icon: r._XJ,
        text: o.intl.string(o.t.c6EUJC),
        footnote: o.intl.string(o.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, i.jsx)(r.ua7, {
            text: o.intl.string(o.t.mGlP39),
            children: (e) =>
                (0, i.jsx)(r.zxk, {
                    ...e,
                    size: r.zxk.Sizes.SMALL,
                    disabled: !0,
                    children: o.intl.string(o.t['13ofGh'])
                })
        })
    });
}
function f(e) {
    let { isUserVerified: t } = e,
        n = t ? o.intl.string(o.t.qY1jHB) : o.intl.string(o.t.c6EUJC);
    return (0, i.jsx)(u.PU, {
        className: a.editableRequirementContainer,
        icon: r._XJ,
        text: n,
        footnote: o.intl.string(o.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, i.jsx)(d, {})
    });
}
