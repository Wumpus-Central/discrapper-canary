n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(775602),
    o = n(141468),
    d = n(963852),
    c = n(763754),
    u = n(20851),
    m = n(95701),
    g = n(486020),
    _ = n(253932),
    x = n(652215),
    h = n(985018),
    A = n(585001);
let p = new m.nA({ id: "1337", guild_id: "1337", type: x.rbe.GUILD_TEXT, name: "preview" }),
    T = [
        { status: r.clD.IDLE, discriminator: "2" },
        { status: r.clD.DND, discriminator: "3" },
        { status: r.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, o.rh)({ ...(0, d.Ay)({ channelId: p.id, content: e }), state: x.cmJ.SENT, reactions: t });
}
function S() {
    let e = _.hH.useSetting(),
        t = _.jW.useSetting(),
        n = s.useMemo(
            () => [
                f(
                    h.intl.formatToPlainString(h.t.BknJRT, {}),
                    t
                        ? [
                              {
                                  emoji: { id: null, name: "\uD83E\uDD40", animated: !1 },
                                  me: !0,
                                  count: 3,
                                  me_burst: !1,
                                  burst_count: 0,
                              },
                              {
                                  emoji: { id: null, name: "\uD83E\uDEA4", animated: !1 },
                                  me: !1,
                                  count: 1,
                                  me_burst: !1,
                                  burst_count: 0,
                              },
                          ]
                        : [],
                ),
                f(h.intl.formatToPlainString(h.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
            ],
            [t],
        ),
        o = (0, l.bG)([a.A], () => a.A.messageGroupSpacing);
    return (0, i.jsx)(r.M1G, {
        children: (0, i.jsxs)("section", {
            children: [
                (0, i.jsx)(r.Heading, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    className: A.Vf,
                    children: h.intl.string(h.t.RC22qg),
                }),
                (0, i.jsxs)(r.IpV, {
                    className: A.VH,
                    children: [
                        (0, i.jsx)("ol", {
                            className: A.DZ,
                            style: { gap: o },
                            "aria-label": h.intl.string(h.t.xfjsEV),
                            children: n.map((t) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        children: (0, i.jsx)(u.A, {
                                            message: t,
                                            channel: p,
                                            compact: e,
                                            author: { ...(0, c.p_)(t), colorString: "#dd80f4" },
                                        }),
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                        (0, i.jsxs)("div", {
                            className: A.Jb,
                            children: [
                                (0, i.jsx)("div", {
                                    className: A.HD,
                                    children: T.map((e) => {
                                        let { status: t, discriminator: n, mobile: s = !1 } = e;
                                        return (0, i.jsx)(
                                            r.euF,
                                            {
                                                status: t,
                                                isMobile: s,
                                                size: r._3J.SIZE_32,
                                                src: g.Ay.getDefaultAvatarURL(void 0, n),
                                                "aria-label": h.intl.string(h.t.VKE5TK),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, i.jsx)(r.Button, {
                                    text: h.intl.string(h.t["2RHHgz"]),
                                    size: "sm",
                                    variant: "primary",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
