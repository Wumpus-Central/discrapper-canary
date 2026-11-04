var i = t(477900),
    l = t(582128),
    s = t(855986),
    a = t(534514),
    r = t(834730),
    o = t(821609),
    c = t(597798),
    d = t(628983),
    u = t(164617),
    A = t(47167),
    h = t(202384),
    m = t(51758),
    g = t(175203),
    x = t(426660),
    C = t(403362),
    f = t(597886),
    p = t(110618),
    E = t(743115),
    j = t(792996),
    I = t(853325);
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
                y = (0, s.yK)([d.A], () => T.map((e) => d.A.getParticipant(t.id, e.id)).filter(C.Vq), [t.id, T]);
            return (0, i.jsxs)("div", {
                className: I.kL,
                children: [
                    (0, i.jsx)(x.A, {}),
                    (0, i.jsx)("div", {
                        className: I.os,
                        style: { maxWidth: 168 * S },
                        children: y
                            .slice(0, 5)
                            .map((e) =>
                                (0, i.jsx)(
                                    g.Ay,
                                    {
                                        participant: e,
                                        channel: t,
                                        className: I.Vs,
                                        inCall: !0,
                                        noVideoRender: !0,
                                        popoutType: u.N.NO_POPOUT,
                                        width: 48,
                                    },
                                    e.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)(a.D, { className: I.HA, variant: "heading-xxl/medium", children: b }),
                    (0, i.jsx)("div", {
                        className: I.Nu,
                        children: (0, i.jsx)(r.E, {
                            tag: "div",
                            color: "text-default",
                            variant: "heading-lg/medium",
                            children: (0, p.DO)(t, T),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: I.UD,
                        children: [
                            (0, i.jsx)("div", {
                                className: I.PD,
                                children: (0, i.jsx)(o.$, {
                                    variant: "overlay-primary",
                                    text: v ? j.intl.string(j.t["7vb2cc"]) : j.intl.string(j.t.TVBCKZ),
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
