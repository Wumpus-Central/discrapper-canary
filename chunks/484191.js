var i = n(477900),
    l = n(582128),
    a = n(534514),
    s = n(834730),
    r = n(821609),
    o = n(597798),
    c = n(164617),
    d = n(47167),
    u = n(202384),
    h = n(51758),
    p = n(478752),
    m = n(141035),
    A = n(175203),
    f = n(426660),
    g = n(806931),
    x = n(792996),
    C = n(853325);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { participants: t, channel: n, hasConnectPermission: y } = e,
                I = t.filter(g.Xw),
                j = (0, h.H)(n.guild_id),
                v = l.useCallback(() => {
                    j
                        ? (0, u.Ze)(n.guild_id, () => o.default.selectVoiceChannel(n.id))
                        : o.default.selectVoiceChannel(n.id);
                }, [n.id, n.guild_id, j]),
                N = 4 === I.length ? 2 : 3,
                E = (0, d.Ay)(n),
                b = (0, p.R)("ChannelCallEmpty");
            return (0, i.jsxs)("div", {
                className: C.kL,
                children: [
                    (0, i.jsx)(f.A, { disableAnimation: b }),
                    (0, i.jsx)("div", {
                        className: C.os,
                        style: { maxWidth: 168 * N },
                        children: I.slice(0, 5).map((e) =>
                            (0, i.jsx)(
                                A.Ay,
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
                            variant: "body-sm/normal",
                            children:
                                0 === I.length
                                    ? x.intl.string(x.t.zSqdrS)
                                    : 1 === I.length
                                      ? x.intl.formatToPlainString(x.t.BUyJIG, { a: (0, m.A)(n, I[0]) })
                                      : 2 === I.length
                                        ? x.intl.formatToPlainString(x.t["dcyZf/"], {
                                              a: (0, m.A)(n, I[0]),
                                              b: (0, m.A)(n, I[1]),
                                          })
                                        : I.length > 2
                                          ? x.intl.formatToPlainString(x.t["44/Obu"], {
                                                a: (0, m.A)(n, I[0]),
                                                b: (0, m.A)(n, I[1]),
                                                n: I.length - 2,
                                            })
                                          : void 0,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: C.PD,
                        children: (0, i.jsx)(r.$, {
                            variant: "overlay-primary",
                            text: y ? x.intl.string(x.t["96ANUN"]) : x.intl.string(x.t.TVBCKZ),
                            onClick: v,
                            disabled: !y,
                        }),
                    }),
                ],
            });
        },
    },
);
