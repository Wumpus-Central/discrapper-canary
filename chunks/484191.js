n.d(t, { A: () => y });
var i = n(477900),
    l = n(582128),
    a = n(297264),
    s = n(834730),
    r = n(821609),
    o = n(730852),
    c = n(164617),
    d = n(47167),
    u = n(202384),
    h = n(51758),
    p = n(478752),
    m = n(141035),
    f = n(175203),
    A = n(426660),
    x = n(806931),
    g = n(375708),
    C = n(419172);
let y = function (e) {
    let { participants: t, channel: n, hasConnectPermission: y } = e,
        j = t.filter(x.Xw),
        I = (0, h.H)(n.guild_id),
        v = l.useCallback(() => {
            I ? (0, u.Ze)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, I]),
        N = 4 === j.length ? 2 : 3,
        E = (0, d.Ay)(n),
        b = (0, p.R)("ChannelCallEmpty");
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)(A.A, { disableAnimation: b }),
            (0, i.jsx)("div", {
                className: C.os,
                style: { maxWidth: 168 * N },
                children: j
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            f.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: C.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: c.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(a.D, { className: C.HA, variant: "heading-xxl/semibold", children: E }),
            (0, i.jsx)("div", {
                className: C.Nu,
                children: (0, i.jsx)(s.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === j.length
                            ? g.intl.string(g.t.zSqdrS)
                            : 1 === j.length
                              ? g.intl.formatToPlainString(g.t.BUyJIG, { a: (0, m.A)(n, j[0]) })
                              : 2 === j.length
                                ? g.intl.formatToPlainString(g.t["dcyZf/"], {
                                      a: (0, m.A)(n, j[0]),
                                      b: (0, m.A)(n, j[1]),
                                  })
                                : j.length > 2
                                  ? g.intl.formatToPlainString(g.t["44/Obu"], {
                                        a: (0, m.A)(n, j[0]),
                                        b: (0, m.A)(n, j[1]),
                                        n: j.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: C.PD,
                children: (0, i.jsx)(r.$, {
                    variant: "overlay-primary",
                    text: y ? g.intl.string(g.t["96ANUN"]) : g.intl.string(g.t.TVBCKZ),
                    onClick: v,
                    disabled: !y,
                }),
            }),
        ],
    });
};
