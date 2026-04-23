n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(192308),
    a = n(834730),
    r = n(349288),
    o = n(821609),
    d = n(825484),
    u = n(452027),
    c = n(98207),
    g = n(557722),
    m = n(662758),
    _ = n(615715),
    A = n(87707),
    h = n(652215),
    p = n(53516),
    x = n(985018),
    E = n(103579);
function T(e) {
    let t,
        n,
        { currentUser: T, togglingSMS: S } = e,
        [f, b] = s.useState(!1),
        C = s.useCallback(
            (e) => {
                e.preventDefault(), b(!f);
            },
            [f],
        ),
        v = s.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.openModal)((t) => (0, i.jsx)(_.default, { reason: g.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: p.V,
            });
        }, []),
        N = s.useCallback(() => {
            v();
        }, [v]),
        I = s.useCallback(() => {
            null == T.phone ? v({ onAddedPhone: c.A.enableSMS }) : c.A.enableSMS();
        }, [T, v]),
        y = s.useCallback(() => {
            (0, l.openModal)((e) =>
                (0, i.jsx)(m.default, {
                    ...e,
                    handleSubmit: c.A.disableSMS,
                    title: x.intl.string(x.t.KLWnit),
                    children: x.intl.string(x.t["W0/Duf"]),
                }),
            );
        }, []),
        j = s.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        O = null != T.phone,
        R = T.hasFlag(h.nhx.MFA_SMS);
    if (O || R) {
        let e = f ? T.phone : j(T.phone);
        n = (0, i.jsxs)(a.E, {
            variant: "text-sm/normal",
            children: [
                x.intl.format(x.t.PXVoEO, { phoneNumber: e }),
                (0, i.jsx)(r.Anchor, {
                    onClick: C,
                    className: E.vN,
                    children: f ? x.intl.string(x.t.FfltIN) : x.intl.string(x.t.llArAg),
                }),
            ],
        });
    }
    if (R)
        t = (0, i.jsx)(o.$, {
            variant: "critical-secondary",
            size: "sm",
            text: x.intl.string(x.t.KLWnit),
            loading: S,
            onClick: y,
        });
    else {
        let e = (0, A.BE)(T);
        t = (0, i.jsxs)(d.e, {
            size: "sm",
            children: [
                (0, i.jsx)(o.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? x.intl.string(x.t.DZQe23),
                    onClick: I,
                    loading: S,
                    disabled: null != e,
                }),
                O
                    ? (0, i.jsx)(o.$, { variant: "secondary", size: "sm", text: x.intl.string(x.t.Ulqq6K), onClick: N })
                    : null,
            ],
        });
    }
    return (0, i.jsxs)(u.D, {
        label: x.intl.string(x.t.uHAJ5v),
        description: x.intl.string(x.t.fspJ4H),
        children: [n, t],
    });
}
