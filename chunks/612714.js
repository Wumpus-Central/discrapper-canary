n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(98207),
    a = n(557722),
    o = n(662758),
    d = n(615715),
    c = n(87707),
    u = n(652215),
    m = n(53516),
    g = n(985018),
    _ = n(103579);
function x(e) {
    let t,
        n,
        { currentUser: x, togglingSMS: h } = e,
        [A, p] = s.useState(!1),
        T = s.useCallback(
            (e) => {
                e.preventDefault(), p(!A);
            },
            [A],
        ),
        f = s.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)((t) => (0, i.jsx)(d.default, { reason: a.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: m.V,
            });
        }, []),
        S = s.useCallback(() => {
            f();
        }, [f]),
        E = s.useCallback(() => {
            null == x.phone ? f({ onAddedPhone: r.A.enableSMS }) : r.A.enableSMS();
        }, [x, f]),
        b = s.useCallback(() => {
            (0, l.qfG)((e) =>
                (0, i.jsx)(o.default, {
                    ...e,
                    handleSubmit: r.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        C = s.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        v = null != x.phone,
        N = x.hasFlag(u.nhx.MFA_SMS);
    if (v || N) {
        let e = A ? x.phone : C(x.phone);
        n = (0, i.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, i.jsx)(l.MzZ, {
                    onClick: T,
                    className: _.vN,
                    children: A ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg),
                }),
            ],
        });
    }
    if (N)
        t = (0, i.jsx)(l.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: g.intl.string(g.t.KLWnit),
            loading: h,
            onClick: b,
        });
    else {
        let e = (0, c.BE)(x);
        t = (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [
                (0, i.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? g.intl.string(g.t.DZQe23),
                    onClick: E,
                    loading: h,
                    disabled: null != e,
                }),
                v
                    ? (0, i.jsx)(l.Button, {
                          variant: "secondary",
                          size: "sm",
                          text: g.intl.string(g.t.Ulqq6K),
                          onClick: S,
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsxs)(l.D0$, {
        label: g.intl.string(g.t.uHAJ5v),
        description: g.intl.string(g.t.fspJ4H),
        children: [n, t],
    });
}
