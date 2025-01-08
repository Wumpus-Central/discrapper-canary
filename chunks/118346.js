t.d(n, {
    B: function () {
        return f;
    },
    b: function () {
        return d;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    l = t(481060),
    s = t(893776),
    o = t(489813),
    u = t(388032),
    c = t(119866);
function a() {
    let [e, n] = r.useState(!1),
        [t, o] = r.useState(!1),
        [a, d] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            t &&
                (e = setTimeout(() => {
                    o(!1);
                }, 2000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [t]);
    let f = async () => {
        if (!e) {
            n(!0);
            try {
                await s.Z.verifyResend(), o(!0), d(!0);
            } catch (e) {
            } finally {
                n(!1);
            }
        }
    };
    return t
        ? (0, i.jsx)(l.Text, {
              className: c.verifyConfirmText,
              variant: 'text-sm/normal',
              color: 'text-positive',
              children: u.intl.string(u.t.H3Q7U1)
          })
        : (0, i.jsx)(l.Button, {
              size: l.Button.Sizes.SMALL,
              submitting: e,
              onClick: f,
              children: a ? u.intl.string(u.t.WnX4Jy) : u.intl.string(u.t['13ofGh'])
          });
}
function d() {
    return (0, i.jsx)(o.PU, {
        icon: l.EnvelopeIcon,
        text: u.intl.string(u.t.c6EUJC),
        footnote: u.intl.string(u.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, i.jsx)(l.Tooltip, {
            text: u.intl.string(u.t.mGlP39),
            children: (e) =>
                (0, i.jsx)(l.Button, {
                    ...e,
                    size: l.Button.Sizes.SMALL,
                    disabled: !0,
                    children: u.intl.string(u.t['13ofGh'])
                })
        })
    });
}
function f(e) {
    let { isUserVerified: n } = e,
        t = n ? u.intl.string(u.t.qY1jHB) : u.intl.string(u.t.c6EUJC);
    return (0, i.jsx)(o.PU, {
        icon: l.EnvelopeIcon,
        text: t,
        footnote: u.intl.string(u.t['jMh+TU']),
        meetsRequirement: n,
        children: (0, i.jsx)(a, {})
    });
}
