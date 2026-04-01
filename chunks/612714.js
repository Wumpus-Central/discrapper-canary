n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(98207),
    r = n(557722),
    o = n(662758),
    d = n(615715),
    c = n(87707),
    u = n(652215),
    m = n(53516),
    g = n(985018),
    _ = n(27671);
function x(e) {
    let t,
        n,
        { currentUser: x, togglingSMS: A } = e,
        [h, p] = s.useState(!1),
        T = s.useCallback(
            (e) => {
                e.preventDefault(), p(!h);
            },
            [h],
        ),
        f = s.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)((t) => (0, i.jsx)(d.default, { reason: r.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: m.V,
            });
        }, []),
        S = s.useCallback(() => {
            f();
        }, [f]),
        E = s.useCallback(() => {
            null == x.phone ? f({ onAddedPhone: a.A.enableSMS }) : a.A.enableSMS();
        }, [x, f]),
        b = s.useCallback(() => {
            (0, l.qfG)((e) =>
                (0, i.jsx)(o.default, {
                    ...e,
                    handleSubmit: a.A.disableSMS,
                    title: g.intl.string(g.t.KLWnit),
                    children: g.intl.string(g.t["W0/Duf"]),
                }),
            );
        }, []),
        C = s.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        N = null != x.phone,
        v = x.hasFlag(u.nhx.MFA_SMS);
    if (N || v) {
        let e = h ? x.phone : C(x.phone);
        n = (0, i.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [
                g.intl.format(g.t.PXVoEO, { phoneNumber: e }),
                (0, i.jsx)(l.MzZ, {
                    onClick: T,
                    className: _.vN,
                    children: h ? g.intl.string(g.t.FfltIN) : g.intl.string(g.t.llArAg),
                }),
            ],
        });
    }
    if (v)
        t = (0, i.jsx)(l.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: g.intl.string(g.t.KLWnit),
            loading: A,
            onClick: b,
        });
    else {
        let e = (0, c.B)(x);
        t = (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [
                (0, i.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? g.intl.string(g.t.DZQe23),
                    onClick: E,
                    loading: A,
                    disabled: null != e,
                }),
                N
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
