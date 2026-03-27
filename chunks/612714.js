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
    _ = n(985018),
    g = n(27671);
function x(e) {
    let t,
        n,
        { currentUser: x, togglingSMS: A } = e,
        [h, p] = s.useState(!1),
        f = s.useCallback(
            (e) => {
                e.preventDefault(), p(!h);
            },
            [h],
        ),
        T = s.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, l.qfG)((t) => (0, i.jsx)(d.default, { reason: r.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: m.V,
            });
        }, []),
        S = s.useCallback(() => {
            T();
        }, [T]),
        E = s.useCallback(() => {
            null == x.phone ? T({ onAddedPhone: a.A.enableSMS }) : a.A.enableSMS();
        }, [x, T]),
        b = s.useCallback(() => {
            (0, l.qfG)((e) =>
                (0, i.jsx)(o.default, {
                    ...e,
                    handleSubmit: a.A.disableSMS,
                    title: _.intl.string(_.t.KLWnit),
                    children: _.intl.string(_.t["W0/Duf"]),
                }),
            );
        }, []),
        C = s.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        v = null != x.phone,
        N = x.hasFlag(u.nhx.MFA_SMS);
    if (v || N) {
        let e = h ? x.phone : C(x.phone);
        n = (0, i.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [
                _.intl.format(_.t.PXVoEO, { phoneNumber: e }),
                (0, i.jsx)(l.MzZ, {
                    onClick: f,
                    className: g.vN,
                    children: h ? _.intl.string(_.t.FfltIN) : _.intl.string(_.t.llArAg),
                }),
            ],
        });
    }
    if (N)
        t = (0, i.jsx)(l.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: _.intl.string(_.t.KLWnit),
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
                    text: e ?? _.intl.string(_.t.DZQe23),
                    onClick: E,
                    loading: A,
                    disabled: null != e,
                }),
                v
                    ? (0, i.jsx)(l.Button, {
                          variant: "secondary",
                          size: "sm",
                          text: _.intl.string(_.t.Ulqq6K),
                          onClick: S,
                      })
                    : null,
            ],
        });
    }
    return (0, i.jsxs)(l.D0$, {
        label: _.intl.string(_.t.uHAJ5v),
        description: _.intl.string(_.t.fspJ4H),
        children: [n, t],
    });
}
