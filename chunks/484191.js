n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(956793),
    r = n(164617),
    o = n(202384),
    d = n(51758),
    c = n(141035),
    u = n(175203),
    h = n(426660),
    A = n(806931),
    g = n(985018),
    m = n(852887);
let p = function (e) {
    let { participants: t, channel: n, hasConnectPermission: p } = e,
        _ = t.filter(A.Xw),
        x = (0, d.H)(n.guild_id),
        f = l.useCallback(() => {
            x ? (0, o.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, x]),
        E = 4 === _.length ? 2 : 3;
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)(h.A, {}),
            (0, i.jsx)("div", {
                className: m.os,
                style: { maxWidth: 168 * E },
                children: _.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        u.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: m.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: r.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(s.Heading, { className: m.HA, variant: "heading-xxl/semibold", children: n.name }),
            (0, i.jsx)("div", {
                className: m.Nu,
                children: (0, i.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === _.length
                            ? g.intl.string(g.t.zSqdrS)
                            : 1 === _.length
                              ? g.intl.formatToPlainString(g.t.BUyJIG, { a: (0, c.A)(n, _[0]) })
                              : 2 === _.length
                                ? g.intl.formatToPlainString(g.t["dcyZf/"], {
                                      a: (0, c.A)(n, _[0]),
                                      b: (0, c.A)(n, _[1]),
                                  })
                                : _.length > 2
                                  ? g.intl.formatToPlainString(g.t["44/Obu"], {
                                        a: (0, c.A)(n, _[0]),
                                        b: (0, c.A)(n, _[1]),
                                        n: _.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: m.PD,
                children: (0, i.jsx)(s.Button, {
                    variant: "overlay-primary",
                    text: p ? g.intl.string(g.t["96ANUN"]) : g.intl.string(g.t.TVBCKZ),
                    onClick: f,
                    disabled: !p,
                }),
            }),
        ],
    });
};
