t.d(n, { A: () => I });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(297264),
    r = t(834730),
    o = t(821609),
    c = t(730852),
    u = t(198052),
    d = t(164617),
    A = t(47167),
    h = t(202384),
    m = t(51758),
    g = t(175203),
    x = t(426660),
    C = t(403362),
    f = t(518769),
    p = t(110618),
    E = t(743115),
    j = t(660183),
    v = t(853325);
let I = function (e) {
    let { participants: n, channel: t, hasConnectPermission: I } = e,
        N = (0, m.H)(t.guild_id),
        T = l.useCallback(() => {
            N ? (0, h.Ze)(t.guild_id, () => c.default.selectVoiceChannel(t.id)) : c.default.selectVoiceChannel(t.id);
        }, [t.id, t.guild_id, N]),
        _ = n.filter((e) => e.type === f.wY.VOICE),
        b = (0, A.Ay)(t),
        S = 4 === _.length ? 2 : 3,
        y = (0, s.yK)([u.A], () => _.map((e) => u.A.getParticipant(t.id, e.id)).filter(C.Vq), [t.id, _]);
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsx)(x.A, {}),
            (0, i.jsx)("div", {
                className: v.os,
                style: { maxWidth: 168 * S },
                children: y
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            g.Ay,
                            {
                                participant: e,
                                channel: t,
                                className: v.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: d.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(a.D, { className: v.HA, variant: "heading-xxl/normal", children: b }),
            (0, i.jsx)("div", {
                className: v.Nu,
                children: (0, i.jsx)(r.E, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, p.DO)(t, _),
                }),
            }),
            (0, i.jsxs)("div", {
                className: v.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: v.PD,
                        children: (0, i.jsx)(o.$, {
                            variant: "overlay-primary",
                            text: I ? j.intl.string(j.t["7vb2cc"]) : j.intl.string(j.t.TVBCKZ),
                            onClick: T,
                            disabled: !I,
                        }),
                    }),
                    (0, i.jsx)(E.l, { channel: t }),
                ],
            }),
        ],
    });
};
