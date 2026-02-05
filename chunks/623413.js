n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(956793),
    o = n(313961),
    d = n(164617),
    c = n(202384),
    u = n(51758),
    h = n(175203),
    A = n(426660),
    g = n(403362),
    m = n(69407),
    p = n(110618),
    _ = n(566388),
    x = n(985018),
    f = n(852887);
let E = function (e) {
    let { participants: t, channel: n, hasConnectPermission: E } = e,
        C = (0, u.H)(n.guild_id),
        I = l.useCallback(() => {
            C ? (0, c.Ze)(n.guild_id, () => r.default.selectVoiceChannel(n.id)) : r.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, C]),
        S = t.filter((e) => e.type === m.wY.VOICE),
        b = 4 === S.length ? 2 : 3,
        N = (0, s.yK)([o.A], () => S.map((e) => o.A.getParticipant(n.id, e.id)).filter(g.Vq), [n.id, S]);
    return (0, i.jsxs)("div", {
        className: f.kL,
        children: [
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)("div", {
                className: f.os,
                style: { maxWidth: 168 * b },
                children: N.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        h.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: f.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: d.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(a.Heading, { className: f.HA, variant: "heading-xxl/normal", children: n.name }),
            (0, i.jsx)("div", {
                className: f.Nu,
                children: (0, i.jsx)(a.Text, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, p.DO)(n, S),
                }),
            }),
            (0, i.jsxs)("div", {
                className: f.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: f.PD,
                        children: (0, i.jsx)(a.Button, {
                            variant: "overlay-primary",
                            text: E ? x.intl.string(x.t["7vb2cc"]) : x.intl.string(x.t.TVBCKZ),
                            onClick: I,
                            disabled: !E,
                        }),
                    }),
                    (0, i.jsx)(_.l, { channel: n }),
                ],
            }),
        ],
    });
};
