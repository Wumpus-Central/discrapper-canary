"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(397927),
    a = n(219504),
    o = n(374084),
    d = n(199940),
    c = n(132514),
    u = n(987957),
    m = n(985018),
    g = n(659233);
let x = [];
function h() {
    return (0, i.jsx)("div", {
        className: g.L8,
        children: (0, i.jsxs)("div", {
            className: g.kv,
            children: [
                (0, i.jsx)("div", {
                    className: g.zV,
                    children: (0, i.jsx)(r.B8Q, { size: "custom", color: "currentColor", height: 20, width: 22 }),
                }),
                (0, i.jsx)("div", {
                    className: g.tV,
                    children: (0, i.jsx)(r.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: m.intl.string(m.t["K/i3iQ"]),
                    }),
                }),
            ],
        }),
    });
}
function _(e) {
    let { guildId: t, onAddAction: l } = e,
        a = s.useCallback(() => {
            if (null != t)
                return (0, r.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
                    return (n) => (0, i.jsx)(e, { ...n, guildId: t, onSave: l });
                });
        }, [t, l]);
    return (0, i.jsxs)(r.DUT, {
        className: g.Bw,
        onClick: a,
        children: [
            (0, i.jsx)(r.U1e, { size: "xs", color: "currentColor" }),
            (0, i.jsx)(r.Text, { variant: "text-md/normal", color: "none", children: m.intl.string(m.t.qce3EM) }),
        ],
    });
}
let p = function (e) {
    let { guildId: t } = e,
        n = (0, l.yK)([c.A], () => c.A.getSettings().newMemberActions ?? x),
        r = s.useCallback((e, t) => {
            (0, d.G$)(e, t);
        }, []),
        m = s.useCallback(
            (e, i, s, l) => {
                let r = n[e]?.channelId,
                    a = i.channelId;
                null == r ||
                    null == c.A.getSettings() ||
                    (null == c.A.getPendingDataForChannel(a) && l && (0, d.Wh)(t, r, s), (0, d.A4)(r, i));
            },
            [n, t],
        ),
        p = s.useCallback(
            (e) => {
                let t = n[e]?.channelId;
                null != t && (0, d.sd)(t);
            },
            [n],
        ),
        A = n.map((e) => ({ ...e, id: e.channelId })),
        f = s.useCallback((e) => {
            (0, d.DE)(e);
        }, []),
        { handleDragStart: j, handleDragReset: N, handleDragComplete: E } = (0, a.A)(A, f);
    return (0, i.jsxs)("div", {
        className: g.uW,
        children: [
            n.map((e, n) =>
                (0, i.jsx)(
                    u.A,
                    {
                        guildId: t,
                        action: e,
                        actionIndex: n,
                        onChange: m,
                        onDelete: p,
                        onDragStart: j,
                        onDragReset: N,
                        onDragComplete: E,
                    },
                    e.channelId,
                ),
            ),
            (0, i.jsx)(h, {}),
            n.length < o._7 && (0, i.jsx)(_, { guildId: t, onAddAction: r }),
        ],
    });
};
