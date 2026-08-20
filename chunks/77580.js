i.d(e, { default: () => y });
var a = i(477900),
    n = i(582128),
    s = i(503698),
    l = i.n(s),
    r = i(821578),
    c = i(189213),
    o = i(939249),
    d = i(834730),
    u = i(17928),
    m = i(734057),
    g = i(446243),
    k = i(538638),
    p = i(558076),
    h = i(189998),
    b = i(665802),
    x = i(375708),
    C = i(692772);
function y(t) {
    let { channelId: e, transitionState: i, onClose: s } = t,
        y = (0, u.bG)([p.A], () => p.A.getRoom(e)?.background ?? r.I.DEFAULT),
        [j, N] = (0, n.useState)(y),
        f = (0, n.useMemo)(
            () =>
                Object.entries(h.iX).map((t) => {
                    let [e, i] = t;
                    return { ...i, key: e };
                }),
            [],
        ),
        v = y === j;
    return (0, a.jsx)(c.Modal, {
        transitionState: i,
        title: x.intl.string(b.default.kmzWUc),
        subtitle: x.intl.string(b.default["Rqmi9/"]),
        actions: [
            { text: x.intl.string(x.t["ETE/oC"]), onClick: s, variant: "secondary" },
            {
                text: x.intl.string(x.t["1Qm822"]),
                variant: "primary",
                type: "submit",
                onClick: function () {
                    let t = m.A.getChannel(e)?.guild_id;
                    null == t || v || ((0, g.AQ)(t, e, { background: j }).catch((t) => (0, k.b)()), s());
                },
                disabled: v,
            },
        ],
        onClose: s,
        children: (0, a.jsx)("div", {
            className: C.Qs,
            children: f.map((t) =>
                (0, a.jsxs)(
                    o.D,
                    {
                        onClick: () => {
                            N(Number(t.key));
                        },
                        className: l()(C.eh, { [C.wH]: j.toString() === t.key }),
                        children: [
                            (0, a.jsx)("img", {
                                src: t.background,
                                alt: t.getName(),
                                style: { aspectRatio: t.aspectRatio },
                                className: C.Sl,
                            }),
                            (0, a.jsx)(d.E, { variant: "text-sm/semibold", children: t.getName() }),
                        ],
                    },
                    t.key,
                ),
            ),
        }),
    });
}
