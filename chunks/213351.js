n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(192308),
    a = n(939249),
    o = n(245604),
    d = n(834730),
    c = n(219504),
    u = n(374084),
    m = n(199940),
    g = n(132514),
    h = n(520761),
    x = n(985018),
    _ = n(327084);
let p = [],
    A = function (e) {
        let { guildId: t } = e,
            A = (0, s.yK)([g.A], () => g.A.getSettings().resourceChannels ?? p),
            E = l.useMemo(() => A.map((e) => ({ ...e, id: e.channelId })), [A]),
            { handleDragStart: f, handleDragReset: j, handleDragComplete: N } = (0, c.A)(E, m.WA),
            I = l.useCallback(
                (e, n) => {
                    let i = g.A.getSettings();
                    null != i &&
                        ((0, m.px)(e),
                        (0, m.W5)(t, i).then(() => {
                            (0, m.E0)(t, e.channelId, n);
                        }));
                },
                [t],
            ),
            C = l.useCallback(() => {
                if (null != t)
                    return (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("36354").then(n.bind(n, 983161));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t, onSave: m.px, onIconUpload: I });
                    });
            }, [t, I]);
        return (0, i.jsxs)("div", {
            className: _.C5,
            children: [
                A.map((e, n) =>
                    (0, i.jsx)(
                        h.A,
                        { guildId: t, resourceChannel: e, index: n, onDragStart: f, onDragReset: j, onDragComplete: N },
                        e.channelId,
                    ),
                ),
                A.length < u.CW &&
                    (0, i.jsxs)(a.D, {
                        className: _.Bw,
                        onClick: C,
                        children: [
                            (0, i.jsx)(o.U, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "none",
                                children: x.intl.string(x.t["w9/qGY"]),
                            }),
                        ],
                    }),
            ],
        });
    };
