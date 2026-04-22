n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(622629),
    a = n(834730),
    o = n(192308),
    d = n(939249),
    c = n(245604),
    u = n(219504),
    m = n(374084),
    g = n(199940),
    h = n(132514),
    x = n(987957),
    _ = n(985018),
    p = n(327084);
let A = [];
function E() {
    return (0, i.jsx)("div", {
        className: p.L8,
        children: (0, i.jsxs)("div", {
            className: p.kv,
            children: [
                (0, i.jsx)("div", {
                    className: p.zV,
                    children: (0, i.jsx)(r.B, { size: "custom", color: "currentColor", height: 20, width: 22 }),
                }),
                (0, i.jsx)("div", {
                    className: p.tV,
                    children: (0, i.jsx)(a.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: _.intl.string(_.t["K/i3iQ"]),
                    }),
                }),
            ],
        }),
    });
}
function f(e) {
    let { guildId: t, onAddAction: s } = e,
        r = l.useCallback(() => {
            if (null != t)
                return (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("58203")]).then(n.bind(n, 251632));
                    return (n) => (0, i.jsx)(e, { ...n, guildId: t, onSave: s });
                });
        }, [t, s]);
    return (0, i.jsxs)(d.D, {
        className: p.Bw,
        onClick: r,
        children: [
            (0, i.jsx)(c.U, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(a.E, { variant: "text-md/normal", color: "none", children: _.intl.string(_.t.qce3EM) }),
        ],
    });
}
let j = function (e) {
    let { guildId: t } = e,
        n = (0, s.yK)([h.A], () => h.A.getSettings().newMemberActions ?? A),
        r = l.useCallback((e, t) => {
            (0, g.G$)(e, t);
        }, []),
        a = l.useCallback(
            (e, i, l, s) => {
                let r = n[e]?.channelId,
                    a = i.channelId;
                null == r ||
                    null == h.A.getSettings() ||
                    (null == h.A.getPendingDataForChannel(a) && s && (0, g.Wh)(t, r, l), (0, g.A4)(r, i));
            },
            [n, t],
        ),
        o = l.useCallback(
            (e) => {
                let t = n[e]?.channelId;
                null != t && (0, g.sd)(t);
            },
            [n],
        ),
        d = n.map((e) => ({ ...e, id: e.channelId })),
        c = l.useCallback((e) => {
            (0, g.DE)(e);
        }, []),
        { handleDragStart: _, handleDragReset: j, handleDragComplete: N } = (0, u.A)(d, c);
    return (0, i.jsxs)("div", {
        className: p.uW,
        children: [
            n.map((e, n) =>
                (0, i.jsx)(
                    x.A,
                    {
                        guildId: t,
                        action: e,
                        actionIndex: n,
                        onChange: a,
                        onDelete: o,
                        onDragStart: _,
                        onDragReset: j,
                        onDragComplete: N,
                    },
                    e.channelId,
                ),
            ),
            (0, i.jsx)(E, {}),
            n.length < m._7 && (0, i.jsx)(f, { guildId: t, onAddAction: r }),
        ],
    });
};
