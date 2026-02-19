"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(956793),
    o = n(313961),
    c = n(164617),
    d = n(202384),
    u = n(51758),
    h = n(175203),
    A = n(426660),
    p = n(403362),
    g = n(69407),
    m = n(110618),
    _ = n(566388),
    f = n(985018),
    x = n(852887);
let C = function (e) {
    let { participants: t, channel: n, hasConnectPermission: C } = e,
        E = (0, u.H)(n.guild_id),
        I = s.useCallback(() => {
            E ? (0, d.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, E]),
        b = t.filter((e) => e.type === g.wY.VOICE),
        N = 4 === b.length ? 2 : 3,
        S = (0, l.yK)([o.A], () => b.map((e) => o.A.getParticipant(n.id, e.id)).filter(p.Vq), [n.id, b]);
    return (0, i.jsxs)("div", {
        className: x.kL,
        children: [
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)("div", {
                className: x.os,
                style: { maxWidth: 168 * N },
                children: S.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        h.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: x.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: c.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(r.Heading, { className: x.HA, variant: "heading-xxl/normal", children: n.name }),
            (0, i.jsx)("div", {
                className: x.Nu,
                children: (0, i.jsx)(r.Text, {
                    tag: "div",
                    color: "text-default",
                    variant: "heading-lg/normal",
                    children: (0, m.DO)(n, b),
                }),
            }),
            (0, i.jsxs)("div", {
                className: x.UD,
                children: [
                    (0, i.jsx)("div", {
                        className: x.PD,
                        children: (0, i.jsx)(r.Button, {
                            variant: "overlay-primary",
                            text: C ? f.intl.string(f.t["7vb2cc"]) : f.intl.string(f.t.TVBCKZ),
                            onClick: I,
                            disabled: !C,
                        }),
                    }),
                    (0, i.jsx)(_.l, { channel: n }),
                ],
            }),
        ],
    });
};
