var i = t(477900),
    l = t(582128),
    s = t(855986),
    a = t(534514),
    r = t(834730),
    o = t(821609),
    c = t(597798),
    u = t(628983),
    d = t(164617),
    A = t(47167),
    h = t(202384),
    m = t(51758),
    g = t(175203),
    x = t(426660),
    C = t(403362),
    f = t(597886),
    p = t(110618),
    E = t(743115),
    I = t(792996),
    j = t(853325);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { participants: n, channel: t, hasConnectPermission: v } = e,
                N = (0, m.H)(t.guild_id),
                _ = l.useCallback(() => {
                    N
                        ? (0, h.Ze)(t.guild_id, () => c.default.selectVoiceChannel(t.id))
                        : c.default.selectVoiceChannel(t.id);
                }, [t.id, t.guild_id, N]),
                T = n.filter((e) => e.type === f.wY.VOICE),
                b = (0, A.Ay)(t),
                S = 4 === T.length ? 2 : 3,
                y = (0, s.yK)([u.A], () => T.map((e) => u.A.getParticipant(t.id, e.id)).filter(C.Vq), [t.id, T]);
            return (0, i.jsxs)("div", {
                className: j.kL,
                children: [
                    (0, i.jsx)(x.A, {}),
                    (0, i.jsx)("div", {
                        className: j.os,
                        style: { maxWidth: 168 * S },
                        children: y
                            .slice(0, 5)
                            .map((e) =>
                                (0, i.jsx)(
                                    g.Ay,
                                    {
                                        participant: e,
                                        channel: t,
                                        className: j.Vs,
                                        inCall: !0,
                                        noVideoRender: !0,
                                        popoutType: d.N.NO_POPOUT,
                                        width: 48,
                                    },
                                    e.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)(a.D, { className: j.HA, variant: "heading-xxl/medium", children: b }),
                    (0, i.jsx)("div", {
                        className: j.Nu,
                        children: (0, i.jsx)(r.E, {
                            tag: "div",
                            color: "text-default",
                            variant: "heading-lg/medium",
                            children: (0, p.DO)(t, T),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.UD,
                        children: [
                            (0, i.jsx)("div", {
                                className: j.PD,
                                children: (0, i.jsx)(o.$, {
                                    variant: "overlay-primary",
                                    text: v ? I.intl.string(I.t["7vb2cc"]) : I.intl.string(I.t.TVBCKZ),
                                    onClick: _,
                                    disabled: !v,
                                }),
                            }),
                            (0, i.jsx)(E.l, { channel: t }),
                        ],
                    }),
                ],
            });
        },
    },
);
