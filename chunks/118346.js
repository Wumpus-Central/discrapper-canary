n.d(t, {
    B: () => m,
    b: () => d
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(893776),
    o = n(489813),
    a = n(388032),
    u = n(119866);
function c() {
    let [e, t] = l.useState(!1),
        [n, o] = l.useState(!1),
        [c, d] = l.useState(!1);
    l.useEffect(() => {
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
                await s.Z.verifyResend(), o(!0), d(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, i.jsx)(r.Text, {
              className: u.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: a.intl.string(a.t.H3Q7U1)
          })
        : (0, i.jsx)(r.zxk, {
              size: r.zxk.Sizes.SMALL,
              submitting: e,
              onClick: m,
              children: c ? a.intl.string(a.t.WnX4Jy) : a.intl.string(a.t['13ofGh'])
          });
}
function d() {
    return (0, i.jsx)(o.PU, {
        icon: r._XJ,
        text: a.intl.string(a.t.c6EUJC),
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, i.jsx)(r.ua7, {
            text: a.intl.string(a.t.mGlP39),
            children: (e) =>
                (0, i.jsx)(r.zxk, {
                    ...e,
                    size: r.zxk.Sizes.SMALL,
                    disabled: !0,
                    children: a.intl.string(a.t['13ofGh'])
                })
        })
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? a.intl.string(a.t.qY1jHB) : a.intl.string(a.t.c6EUJC);
    return (0, i.jsx)(o.PU, {
        icon: r._XJ,
        text: n,
        footnote: a.intl.string(a.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, i.jsx)(c, {})
    });
}
