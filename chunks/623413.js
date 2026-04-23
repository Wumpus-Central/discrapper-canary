n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(534514),
    r = n(834730),
    o = n(821609),
    c = n(956793),
    d = n(313961),
    u = n(164617),
    _ = n(47167),
    A = n(202384),
    p = n(51758),
    h = n(175203),
    g = n(426660),
    m = n(403362),
    x = n(69407),
    f = n(110618),
    C = n(566388),
    E = n(985018),
    j = n(376460);
let b = function (e) {
    let { participants: t, channel: n, hasConnectPermission: b } = e,
        N = (0, p.H)(n.guild_id),
        T = l.useCallback(() => {
            N ? (0, A.Ze)(n.guild_id, () => c.default.selectVoiceChannel(n.id)) : c.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, N]),
        I = t.filter((e) => e.type === x.wY.VOICE),
        v = (0, _.Ay)(n),
        S = 4 === I.length ? 2 : 3,
        y = (0, a.yK)([d.A], () => I.map((e) => d.A.getParticipant(n.id, e.id)).filter(m.Vq), [n.id, I]);
    return (0, i.jsxs)("div", {
        className: j.kL,
        children: [
            (0, i.jsx)(g.A, {}),
            (0, i.jsx)("div", {
                className: j.os,
                style: { maxWidth: 168 * S },
                children: y
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            h.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: j.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: u.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(s.D, { className: j.HA, variant: "heading-xxl/normal", children: v }),
            (0, i.jsx)("div", {
                className: j.Nu,
                children: (0, i.jsx)(r.E, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, f.DO)(n, I),
                }),
            }),
            (0, i.jsxs)("div", {
                className: j.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: j.PD,
                        children: (0, i.jsx)(o.$, {
                            variant: "overlay-primary",
                            text: b ? E.intl.string(E.t["7vb2cc"]) : E.intl.string(E.t.TVBCKZ),
                            onClick: T,
                            disabled: !b,
                        }),
                    }),
                    (0, i.jsx)(C.StageChannelInviteButton, { channel: n }),
                ],
            }),
        ],
    });
};
