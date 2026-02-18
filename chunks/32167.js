e.d(i, { default: () => x });
var s = e(627968),
    l = e(64700),
    n = e(158954),
    a = e(311907),
    r = e(71393),
    d = e(546351),
    c = e(704037),
    u = e(985018),
    o = e(339451);
function m(t) {
    let { guildIds: i, direction: e } = t,
        l = (0, a.bG)([r.A], () => r.A.getGuild(i[0])),
        m = e === d.AI.RESTRICTING ? u.intl.string(u.t.e6Kpa7) : u.intl.string(u.t.cy4G4y),
        x = l?.name ?? "",
        h =
            null != l && i.length > 1
                ? u.intl.format(u.t.UPWFEu, { guildName: x })
                : u.intl.format(u.t.xYCTVQ, { guildName: x });
    return (0, s.jsxs)("div", {
        className: o.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: o.Bj,
                children: [
                    (0, s.jsx)(n.DZT, {
                        variant: "text-md/semibold",
                        children: u.intl.format(u.t["0fkj8J"], { count: i.length }),
                    }),
                    (0, s.jsxs)("div", {
                        className: o.jf,
                        children: [
                            (0, s.jsx)(n.EYj, {
                                variant: "text-sm/medium",
                                color: e === d.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: o.Rh,
                                children: m,
                            }),
                            (0, s.jsxs)(n.EYj, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: o.SI,
                                children: ["\xb7 ", h],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(c.l, { guildIds: i, iconSize: 24 }),
        ],
    });
}
function x(t) {
    let { direction: i, affectedGuildIds: e, settingName: a, onClose: r, transitionState: c } = t,
        o = i === d.AI.RESTRICTING,
        x = o ? u.intl.string(u.t.jRx1Aa) : u.intl.string(u.t.S0Y0bh),
        h = o ? u.intl.format(u.t.Fs96LO, { settingName: a }) : u.intl.format(u.t.GcoYX8, { settingName: a }),
        f = o ? u.intl.string(u.t["4DM5HJ"]) : u.intl.string(u.t.WRrDtI),
        j = (0, l.useMemo)(
            () => () => {
                (0, d.gF)(i, e);
            },
            [i, e],
        );
    return (0, s.jsx)(n.ConfirmModal, {
        title: x,
        subtitle: h,
        confirmText: f,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: j,
        onClose: r,
        transitionState: c,
        children: (0, s.jsx)(m, { guildIds: e, direction: i }),
    });
}
