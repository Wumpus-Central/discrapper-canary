n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(534514),
    s = n(834730),
    r = n(821609),
    o = n(730852),
    c = n(164617),
    d = n(47167),
    u = n(202384),
    h = n(51758),
    p = n(141035),
    m = n(175203),
    A = n(426660),
    x = n(806931),
    g = n(375708),
    C = n(376460);
let f = function (e) {
    let { participants: t, channel: n, hasConnectPermission: f } = e,
        E = t.filter(x.Xw),
        y = (0, h.H)(n.guild_id),
        N = l.useCallback(() => {
            y ? (0, u.Ze)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, y]),
        j = 4 === E.length ? 2 : 3,
        v = (0, d.Ay)(n);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)("div", {
                className: C.os,
                style: { maxWidth: 168 * j },
                children: E.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        m.Ay,
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
            (0, i.jsx)(a.D, { className: C.HA, variant: "heading-xxl/semibold", children: v }),
            (0, i.jsx)("div", {
                className: C.Nu,
                children: (0, i.jsx)(s.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === E.length
                            ? g.intl.string(g.t.zSqdrS)
                            : 1 === E.length
                              ? g.intl.formatToPlainString(g.t.BUyJIG, { a: (0, p.A)(n, E[0]) })
                              : 2 === E.length
                                ? g.intl.formatToPlainString(g.t["dcyZf/"], {
                                      a: (0, p.A)(n, E[0]),
                                      b: (0, p.A)(n, E[1]),
                                  })
                                : E.length > 2
                                  ? g.intl.formatToPlainString(g.t["44/Obu"], {
                                        a: (0, p.A)(n, E[0]),
                                        b: (0, p.A)(n, E[1]),
                                        n: E.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: C.PD,
                children: (0, i.jsx)(r.$, {
                    variant: "overlay-primary",
                    text: f ? g.intl.string(g.t["96ANUN"]) : g.intl.string(g.t.TVBCKZ),
                    onClick: N,
                    disabled: !f,
                }),
            }),
        ],
    });
};
