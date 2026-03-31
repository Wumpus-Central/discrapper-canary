n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(956793),
    r = n(164617),
    o = n(47167),
    c = n(202384),
    d = n(51758),
    u = n(141035),
    h = n(175203),
    A = n(426660),
    _ = n(806931),
    m = n(985018),
    g = n(616124);
let p = function (e) {
    let { participants: t, channel: n, hasConnectPermission: p } = e,
        f = t.filter(_.Xw),
        x = (0, d.H)(n.guild_id),
        E = l.useCallback(() => {
            x ? (0, c.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, x]),
        I = 4 === f.length ? 2 : 3,
        C = (0, o.Ay)(n);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)(A.A, {}),
            (0, i.jsx)("div", {
                className: g.os,
                style: { maxWidth: 168 * I },
                children: f
                    .slice(0, 5)
                    .map((e) =>
                        (0, i.jsx)(
                            h.Ay,
                            {
                                participant: e,
                                channel: n,
                                className: g.Vs,
                                inCall: !0,
                                noVideoRender: !0,
                                popoutType: r.N.NO_POPOUT,
                                width: 48,
                            },
                            e.id,
                        ),
                    ),
            }),
            (0, i.jsx)(s.Heading, { className: g.HA, variant: "heading-xxl/semibold", children: C }),
            (0, i.jsx)("div", {
                className: g.Nu,
                children: (0, i.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === f.length
                            ? m.intl.string(m.t.zSqdrS)
                            : 1 === f.length
                              ? m.intl.formatToPlainString(m.t.BUyJIG, { a: (0, u.A)(n, f[0]) })
                              : 2 === f.length
                                ? m.intl.formatToPlainString(m.t["dcyZf/"], {
                                      a: (0, u.A)(n, f[0]),
                                      b: (0, u.A)(n, f[1]),
                                  })
                                : f.length > 2
                                  ? m.intl.formatToPlainString(m.t["44/Obu"], {
                                        a: (0, u.A)(n, f[0]),
                                        b: (0, u.A)(n, f[1]),
                                        n: f.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: g.PD,
                children: (0, i.jsx)(s.Button, {
                    variant: "overlay-primary",
                    text: p ? m.intl.string(m.t["96ANUN"]) : m.intl.string(m.t.TVBCKZ),
                    onClick: E,
                    disabled: !p,
                }),
            }),
        ],
    });
};
