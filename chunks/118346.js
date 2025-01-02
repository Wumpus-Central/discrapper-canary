n.d(t, {
    B: function () {
        return m;
    },
    b: function () {
        return c;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(893776),
    a = n(489813),
    o = n(388032),
    d = n(119866);
function u() {
    let [e, t] = i.useState(!1),
        [n, a] = i.useState(!1),
        [u, c] = i.useState(!1);
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
                await r.Z.verifyResend(), a(!0), c(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, l.jsx)(s.Text, {
              className: d.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: o.intl.string(o.t.H3Q7U1)
          })
        : (0, l.jsx)(s.Button, {
              size: s.Button.Sizes.SMALL,
              submitting: e,
              onClick: m,
              children: u ? o.intl.string(o.t.WnX4Jy) : o.intl.string(o.t['13ofGh'])
          });
}
function c() {
    return (0, l.jsx)(a.PU, {
        icon: s.EnvelopeIcon,
        text: o.intl.string(o.t.c6EUJC),
        footnote: o.intl.string(o.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, l.jsx)(s.Tooltip, {
            text: o.intl.string(o.t.mGlP39),
            children: (e) =>
                (0, l.jsx)(s.Button, {
                    ...e,
                    size: s.Button.Sizes.SMALL,
                    disabled: !0,
                    children: o.intl.string(o.t['13ofGh'])
                })
        })
    });
}
function m(e) {
    let { isUserVerified: t } = e,
        n = t ? o.intl.string(o.t.qY1jHB) : o.intl.string(o.t.c6EUJC);
    return (0, l.jsx)(a.PU, {
        icon: s.EnvelopeIcon,
        text: n,
        footnote: o.intl.string(o.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, l.jsx)(u, {})
    });
}
