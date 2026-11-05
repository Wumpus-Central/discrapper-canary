var a = n(477900),
    t = n(582128),
    o = n(574211),
    s = n(31300),
    l = n(646270),
    i = n(687966),
    c = n(924895),
    h = n(140735),
    d = n(773669),
    m = n(418151),
    u = n(468039);
let x = {
    [o.Z.DESKTOP]: s.ScreenIcon,
    [o.Z.MOBILE]: l.MobilePhoneIcon,
    [o.Z.CONSOLE]: i.GameControllerIcon,
    [o.Z.ROBLOX]: c.RobloxNeutralIcon,
};
n.d(
    r,
    {},
    {
        A: function (e) {
            let { platforms: r } = e,
                n = t.useMemo(() => (0, m.RV)(r), [r]),
                o = t.useMemo(() => new Intl.ListFormat(d.default.locale).format(n.map(m.n7)), [n]);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("span", {
                        className: u.B,
                        "aria-hidden": !0,
                        children: n.map((e) => {
                            let r = x[e];
                            return (0, a.jsx)(
                                "span",
                                { className: u.t, children: (0, a.jsx)(r, { size: "xs", color: "currentColor" }) },
                                e,
                            );
                        }),
                    }),
                    n.length > 0 && (0, a.jsx)(h.A, { children: o }),
                ],
            });
        },
    },
);
