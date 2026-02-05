n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(98207),
    l = n(557722),
    o = n(662758),
    c = n(615715),
    d = n(87707),
    u = n(652215),
    _ = n(53516),
    m = n(985018),
    A = n(139674);
function g(e) {
    let t,
        n,
        { currentUser: g, togglingSMS: E } = e,
        [h, p] = s.useState(!1),
        C = s.useCallback(
            (e) => {
                e.preventDefault(), p(!h);
            },
            [h],
        ),
        x = s.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, r.qfG)((t) => (0, i.jsx)(c.default, { reason: l.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: _.V,
            });
        }, []),
        T = s.useCallback(() => {
            x();
        }, [x]),
        I = s.useCallback(() => {
            null == g.phone ? x({ onAddedPhone: a.A.enableSMS }) : a.A.enableSMS();
        }, [g, x]),
        S = s.useCallback(() => {
            (0, r.qfG)((e) =>
                (0, i.jsx)(o.default, {
                    ...e,
                    handleSubmit: a.A.disableSMS,
                    title: m.intl.string(m.t.KLWnit),
                    children: m.intl.string(m.t["W0/Duf"]),
                }),
            );
        }, []),
        f = s.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        N = null != g.phone,
        b = g.hasFlag(u.nhx.MFA_SMS);
    if (N || b) {
        let e = h ? g.phone : f(g.phone);
        n = (0, i.jsxs)(r.Text, {
            variant: "text-sm/normal",
            children: [
                m.intl.format(m.t.PXVoEO, { phoneNumber: e }),
                (0, i.jsx)(r.MzZ, {
                    onClick: C,
                    className: A.vN,
                    children: h ? m.intl.string(m.t.FfltIN) : m.intl.string(m.t.llArAg),
                }),
            ],
        });
    }
    if (b)
        t = (0, i.jsx)(r.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: m.intl.string(m.t.KLWnit),
            loading: E,
            onClick: S,
        });
    else {
        let e = (0, d.B)(g);
        t = (0, i.jsxs)(r.ButtonGroup, {
            size: "sm",
            children: [
                (0, i.jsx)(r.Button, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? m.intl.string(m.t.DZQe23),
                    onClick: I,
                    loading: E,
                    disabled: null != e,
                }),
                N
                    ? (0, i.jsx)(r.Button, {
                          variant: "secondary",
                          size: "sm",
                          text: m.intl.string(m.t.Ulqq6K),
                          onClick: T,
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsxs)(r.D0$, {
        label: m.intl.string(m.t.uHAJ5v),
        description: m.intl.string(m.t.fspJ4H),
        children: [n, t],
    });
}
