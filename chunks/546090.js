n.d(t, { Z: () => l });
var r = n(54381),
    i = n(28664),
    a = n(481060),
    o = n(96011),
    s = n(388032);
let l = (e) => {
    let { onInvite: t, disabled: n } = e;
    return (0, r.jsx)(a.P3F, {
        onClick: n ? void 0 : t,
        children: (0, r.jsx)(i.u, {
            text: s.intl.string(o.default["U/DzKb"]),
            shouldShow: !n,
            children: (0, r.jsx)(a.oLu, {
                size: "sm",
                color: n ? a.TVs.colors.ICON_SUBTLE : a.TVs.colors.ICON_STRONG,
            }),
        }),
    });
};
