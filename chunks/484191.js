n.d(t, { A: () => g });
var i = n(627968),
    a = n(64700),
    l = n(534514),
    s = n(834730),
    r = n(821609),
    o = n(956793),
    c = n(164617),
    d = n(47167),
    u = n(202384),
    p = n(51758),
    h = n(141035),
    _ = n(175203),
    m = n(426660),
    A = n(806931),
    x = n(985018),
    f = n(376460);
let g = function (e) {
    let { participants: t, channel: n, hasConnectPermission: g } = e,
        C = t.filter(A.Xw),
        y = (0, p.H)(n.guild_id),
        v = a.useCallback(() => {
            y ? (0, u.Ze)(n.guild_id, () => o.default.selectVoiceChannel(n.id)) : o.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, y]),
        E = 4 === C.length ? 2 : 3,
        N = (0, d.Ay)(n);
    return (0, i.jsxs)("div", {
        className: f.kL,
        children: [
            (0, i.jsx)(m.A, {}),
            (0, i.jsx)("div", {
                className: f.os,
                style: { maxWidth: 168 * E },
                children: C.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        _.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: f.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: c.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsx)(l.D, { className: f.HA, variant: "heading-xxl/semibold", children: N }),
            (0, i.jsx)("div", {
                className: f.Nu,
                children: (0, i.jsx)(s.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === C.length
                            ? x.intl.string(x.t.zSqdrS)
                            : 1 === C.length
                              ? x.intl.formatToPlainString(x.t.BUyJIG, { a: (0, h.A)(n, C[0]) })
                              : 2 === C.length
                                ? x.intl.formatToPlainString(x.t["dcyZf/"], {
                                      a: (0, h.A)(n, C[0]),
                                      b: (0, h.A)(n, C[1]),
                                  })
                                : C.length > 2
                                  ? x.intl.formatToPlainString(x.t["44/Obu"], {
                                        a: (0, h.A)(n, C[0]),
                                        b: (0, h.A)(n, C[1]),
                                        n: C.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, i.jsx)("div", {
                className: f.PD,
                children: (0, i.jsx)(r.$, {
                    variant: "overlay-primary",
                    text: g ? x.intl.string(x.t["96ANUN"]) : x.intl.string(x.t.TVBCKZ),
                    onClick: v,
                    disabled: !g,
                }),
            }),
        ],
    });
};
