i.d(e, { default: () => C });
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
    k = i(558076),
    p = i(189998),
    h = i(662731),
    b = i(375708),
    x = i(996621);
function C(t) {
    let { channelId: e, transitionState: i, onClose: s } = t,
        C = (0, u.bG)([k.A], () => k.A.getRoom(e)?.background ?? r.I.DEFAULT),
        [y, j] = (0, n.useState)(C),
        N = (0, n.useMemo)(
            () =>
                Object.entries(p.iX).map((t) => {
                    let [e, i] = t;
                    return { ...i, key: e };
                }),
            [],
        ),
        f = C === y;
    return (0, a.jsx)(c.Modal, {
        transitionState: i,
        title: b.intl.string(h.default.kmzWUc),
        subtitle: b.intl.string(h.default["Rqmi9/"]),
        actions: [
            { text: b.intl.string(b.t["ETE/oC"]), onClick: s, variant: "secondary" },
            {
                text: b.intl.string(b.t["1Qm822"]),
                variant: "primary",
                type: "submit",
                onClick: function () {
                    let t = m.A.getChannel(e)?.guild_id;
                    null == t || f || ((0, g.AQ)(t, e, { background: y }), s());
                },
                disabled: f,
            },
        ],
        onClose: s,
        children: (0, a.jsx)("div", {
            className: x.Qs,
            children: N.map((t) =>
                (0, a.jsxs)(
                    o.D,
                    {
                        onClick: () => {
                            j(Number(t.key));
                        },
                        className: l()(x.eh, { [x.wH]: y.toString() === t.key }),
                        children: [
                            (0, a.jsx)("img", {
                                src: t.background,
                                alt: t.getName(),
                                style: { aspectRatio: t.aspectRatio },
                                className: x.Sl,
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
