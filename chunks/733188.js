n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(775602),
    o = n(141468),
    d = n(963852),
    c = n(763754),
    u = n(20851),
    _ = n(95701),
    m = n(486020),
    g = n(253932),
    A = n(652215),
    h = n(985018),
    x = n(709214);
let p = new _.nA({ id: "1337", guild_id: "1337", type: A.rbe.GUILD_TEXT, name: "preview" }),
    T = [
        { status: a.clD.IDLE, discriminator: "2" },
        { status: a.clD.DND, discriminator: "3" },
        { status: a.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, o.rh)({ ...(0, d.Ay)({ channelId: p.id, content: e }), state: A.cmJ.SENT, reactions: t });
}
function S() {
    let e = g.hH.useSetting(),
        t = g.jW.useSetting(),
        n = s.useMemo(
            () => [
                E(
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
                E(h.intl.formatToPlainString(h.t["4rDfgM"], {})),
            ],
            [t],
        ),
        o = (0, l.bG)([r.A], () => r.A.messageGroupSpacing);
    return (0, i.jsx)(a.M1G, {
        children: (0, i.jsxs)("section", {
            children: [
                (0, i.jsx)(a.Heading, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    className: x.Vf,
                    children: h.intl.string(h.t.RC22qg),
                }),
                (0, i.jsxs)(a.IpV, {
                    className: x.VH,
                    children: [
                        (0, i.jsx)("ol", {
                            className: x.DZ,
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
                            className: x.Jb,
                            children: [
                                (0, i.jsx)("div", {
                                    className: x.HD,
                                    children: T.map((e) => {
                                        let { status: t, discriminator: n, mobile: s = !1 } = e;
                                        return (0, i.jsx)(
                                            a.euF,
                                            {
                                                status: t,
                                                isMobile: s,
                                                size: a._3J.SIZE_32,
                                                src: m.Ay.getDefaultAvatarURL(void 0, n),
                                                "aria-label": h.intl.string(h.t.VKE5TK),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, i.jsx)(a.Button, {
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
