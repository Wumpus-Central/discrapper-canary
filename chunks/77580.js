i.d(e, { default: () => j });
var n = i(477900),
    a = i(582128),
    s = i(503698),
    l = i.n(s),
    r = i(821578),
    c = i(189213),
    o = i(939249),
    d = i(834730),
    u = i(17928),
    m = i(964486),
    p = i(734057),
    g = i(446243),
    k = i(920639),
    b = i(538638),
    h = i(558076),
    y = i(739820),
    x = i(270103),
    C = i(375708),
    A = i(692772);
function j(t) {
    let { channelId: e, transitionState: i, onClose: s } = t,
        j = (0, u.bG)([h.A], () => h.A.getRoom(e)?.background ?? r.I.DEFAULT),
        [N, f] = (0, a.useState)(j),
        v = (0, a.useMemo)(
            () =>
                Object.entries(y.iX).map((t) => {
                    let [e, i] = t;
                    return { ...i, key: e };
                }),
            [],
        ),
        _ = (0, u.bG)([p.A], () => p.A.getChannel(e)?.guild_id),
        E = j === N;
    return (
        (0, m.Ay)(() => {
            (0, k.n0)({ guildId: _, channelId: e, interactionType: "room_selector_opened" });
        }),
        (0, n.jsx)(c.Modal, {
            transitionState: i,
            title: C.intl.string(x.default.kmzWUc),
            subtitle: C.intl.string(x.default["Rqmi9/"]),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: s, variant: "secondary" },
                {
                    text: C.intl.string(C.t["1Qm822"]),
                    variant: "primary",
                    type: "submit",
                    onClick: function () {
                        null == _ || E || ((0, g.AQ)(_, e, { background: N }).catch((t) => (0, b.b)()), s());
                    },
                    disabled: E,
                },
            ],
            onClose: s,
            children: (0, n.jsx)("div", {
                className: A.Qs,
                children: v.map((t) =>
                    (0, n.jsxs)(
                        o.D,
                        {
                            onClick: () => {
                                f(Number(t.key));
                            },
                            className: l()(A.eh, { [A.wH]: N.toString() === t.key }),
                            children: [
                                (0, n.jsx)("img", {
                                    src: t.background,
                                    alt: t.getName(),
                                    style: { aspectRatio: t.aspectRatio },
                                    className: A.Sl,
                                }),
                                (0, n.jsx)(d.E, { variant: "text-sm/semibold", children: t.getName() }),
                            ],
                        },
                        t.key,
                    ),
                ),
            }),
        })
    );
}
