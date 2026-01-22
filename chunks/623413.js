n.d(t, { A: () => O });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(956793),
    o = n(313961),
    c = n(164617),
    u = n(202384),
    d = n(51758),
    f = n(175203),
    p = n(426660),
    h = n(403362),
    b = n(69407),
    g = n(110618),
    m = n(566388),
    A = n(985018),
    y = n(852887);
let O = function (e) {
    let { participants: t, channel: n, hasConnectPermission: O } = e,
        j = (0, d.H)(n.guild_id),
        v = l.useCallback(() => {
            j ? (0, u.Ze)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, j]),
        x = t.filter((e) => e.type === b.wY.VOICE),
        E = 4 === x.length ? 2 : 3,
        _ = (0, i.yK)([o.A], () => x.map((e) => o.A.getParticipant(n.id, e.id)).filter(h.Vq), [n.id, x]);
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [
            (0, r.jsx)(p.A, {}),
            (0, r.jsx)("div", {
                className: y.os,
                style: { maxWidth: 168 * E },
                children: _.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        f.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: y.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: c.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsx)(a.Heading, {
                className: y.HA,
                variant: "heading-xxl/normal",
                children: n.name,
            }),
            (0, r.jsx)("div", {
                className: y.Nu,
                children: (0, r.jsx)(a.Text, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, g.DO)(n, x),
                }),
            }),
            (0, r.jsxs)("div", {
                className: y.UD,
                children: [
                    (0, r.jsx)("div", {
                        className: y.PD,
                        children: (0, r.jsx)(a.Button, {
                            variant: "overlay-primary",
                            text: O ? A.intl.string(A.t["7vb2cc"]) : A.intl.string(A.t.TVBCKZ),
                            onClick: v,
                            disabled: !O,
                        }),
                    }),
                    (0, r.jsx)(m.l, { channel: n }),
                ],
            }),
        ],
    });
};
