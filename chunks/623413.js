n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(956793),
    o = n(313961),
    c = n(164617),
    d = n(47167),
    u = n(202384),
    h = n(51758),
    A = n(175203),
    _ = n(426660),
    m = n(403362),
    g = n(69407),
    p = n(110618),
    f = n(566388),
    x = n(985018),
    E = n(616124);
let I = function (e) {
    let { participants: t, channel: n, hasConnectPermission: I } = e,
        C = (0, h.H)(n.guild_id),
        N = l.useCallback(() => {
            C ? (0, u.Ze)(n.guild_id, () => r.default.selectVoiceChannel(n.id)) : r.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, C]),
        T = t.filter((e) => e.type === g.wY.VOICE),
        S = (0, d.Ay)(n),
        b = 4 === T.length ? 2 : 3,
        y = (0, s.yK)([o.A], () => T.map((e) => o.A.getParticipant(n.id, e.id)).filter(m.Vq), [n.id, T]);
    return (0, i.jsxs)("div", {
        className: E.kL,
        children: [
            (0, i.jsx)(_.A, {}),
            (0, i.jsx)("div", {
                className: E.os,
                style: { maxWidth: 168 * b },
                children: y
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            A.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: E.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: c.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(a.Heading, { className: E.HA, variant: "heading-xxl/normal", children: S }),
            (0, i.jsx)("div", {
                className: E.Nu,
                children: (0, i.jsx)(a.Text, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, p.DO)(n, T),
                }),
            }),
            (0, i.jsxs)("div", {
                className: E.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: E.PD,
                        children: (0, i.jsx)(a.Button, {
                            variant: "overlay-primary",
                            text: I ? x.intl.string(x.t["7vb2cc"]) : x.intl.string(x.t.TVBCKZ),
                            onClick: N,
                            disabled: !I,
                        }),
                    }),
                    (0, i.jsx)(f.l, { channel: n }),
                ],
            }),
        ],
    });
};
