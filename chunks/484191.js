n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(956793),
    s = n(164617),
    o = n(202384),
    c = n(51758),
    u = n(141035),
    d = n(175203),
    f = n(426660),
    p = n(806931),
    h = n(985018),
    b = n(852887);
let g = function (e) {
    let { participants: t, channel: n, hasConnectPermission: g } = e,
        m = t.filter(p.Xw),
        A = (0, c.H)(n.guild_id),
        y = l.useCallback(() => {
            A ? (0, o.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id);
        }, [n.id, n.guild_id, A]),
        O = 4 === m.length ? 2 : 3;
    return (0, r.jsxs)("div", {
        className: b.kL,
        children: [
            (0, r.jsx)(f.A, {}),
            (0, r.jsx)("div", {
                className: b.os,
                style: {
                    maxWidth: 168 * O,
                },
                children: m.slice(0, 5).map((e) =>
                    (0, r.jsx)(
                        d.Ay,
                        {
                            participant: e,
                            channel: n,
                            className: b.Vs,
                            inCall: !0,
                            noVideoRender: !0,
                            popoutType: s.N.NO_POPOUT,
                            width: 48,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsx)(i.Heading, {
                className: b.HA,
                variant: "heading-xxl/semibold",
                children: n.name,
            }),
            (0, r.jsx)("div", {
                className: b.Nu,
                children: (0, r.jsx)(i.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children:
                        0 === m.length
                            ? h.intl.string(h.t.zSqdrS)
                            : 1 === m.length
                              ? h.intl.formatToPlainString(h.t.BUyJIG, {
                                    a: (0, u.A)(n, m[0]),
                                })
                              : 2 === m.length
                                ? h.intl.formatToPlainString(h.t["dcyZf/"], {
                                      a: (0, u.A)(n, m[0]),
                                      b: (0, u.A)(n, m[1]),
                                  })
                                : m.length > 2
                                  ? h.intl.formatToPlainString(h.t["44/Obu"], {
                                        a: (0, u.A)(n, m[0]),
                                        b: (0, u.A)(n, m[1]),
                                        n: m.length - 2,
                                    })
                                  : void 0,
                }),
            }),
            (0, r.jsx)("div", {
                className: b.PD,
                children: (0, r.jsx)(i.Button, {
                    variant: "overlay-primary",
                    text: g ? h.intl.string(h.t["96ANUN"]) : h.intl.string(h.t.TVBCKZ),
                    onClick: y,
                    disabled: !g,
                }),
            }),
        ],
    });
};
