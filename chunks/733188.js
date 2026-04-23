n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(652215),
    r = n(247928),
    o = n(534514),
    d = n(573613),
    u = n(97808),
    c = n(778712),
    g = n(821609),
    m = n(775602),
    _ = n(141468),
    A = n(963852),
    h = n(763754),
    p = n(20851),
    x = n(95701),
    E = n(486020),
    T = n(253932),
    S = n(985018),
    f = n(585001);
let b = new x.nA({ id: "1337", guild_id: "1337", type: a.rbe.GUILD_TEXT, name: "preview" }),
    C = [
        { status: a.clD.IDLE, discriminator: "2" },
        { status: a.clD.DND, discriminator: "3" },
        { status: a.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, _.rh)({ ...(0, A.Ay)({ channelId: b.id, content: e }), state: a.cmJ.SENT, reactions: t });
}
function N() {
    let e = T.hH.useSetting(),
        t = T.jW.useSetting(),
        n = s.useMemo(
            () => [
                v(
                    S.intl.formatToPlainString(S.t.BknJRT, {}),
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
                v(S.intl.formatToPlainString(S.t["4rDfgM"], { link: "https://discord.com/accessibility" })),
            ],
            [t],
        ),
        a = (0, l.bG)([m.A], () => m.A.messageGroupSpacing);
    return (0, i.jsx)(r.M, {
        children: (0, i.jsxs)("section", {
            children: [
                (0, i.jsx)(o.D, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    className: f.Vf,
                    children: S.intl.string(S.t.RC22qg),
                }),
                (0, i.jsxs)(d.Ip, {
                    className: f.VH,
                    children: [
                        (0, i.jsx)("ol", {
                            className: f.DZ,
                            style: { gap: a },
                            "aria-label": S.intl.string(S.t.xfjsEV),
                            children: n.map((t) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        children: (0, i.jsx)(p.A, {
                                            message: t,
                                            channel: b,
                                            compact: e,
                                            author: { ...(0, h.p_)(t), colorString: "#dd80f4" },
                                        }),
                                    },
                                    t.id,
                                ),
                            ),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.Jb,
                            children: [
                                (0, i.jsx)("div", {
                                    className: f.HD,
                                    children: C.map((e) => {
                                        let { status: t, discriminator: n, mobile: s = !1 } = e;
                                        return (0, i.jsx)(
                                            u.eu,
                                            {
                                                status: t,
                                                isMobile: s,
                                                size: c._3.SIZE_32,
                                                src: E.Ay.getDefaultAvatarURL(void 0, n),
                                                "aria-label": S.intl.string(S.t.VKE5TK),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, i.jsx)(g.$, { text: S.intl.string(S.t["2RHHgz"]), size: "sm", variant: "primary" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
