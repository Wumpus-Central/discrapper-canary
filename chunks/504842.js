n.d(t, {
    A: () => w,
});
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(108531),
    c = n(311907),
    o = n(582754),
    d = n(397927),
    u = n(736653),
    m = n(607470),
    h = n(947094),
    f = n(919577),
    g = n(892110),
    x = n(251766),
    b = n(997509),
    p = n(71393),
    j = n(975571),
    v = n(305182),
    y = n(652215),
    A = n(985018),
    C = n(231984),
    O = n(394350),
    N = n(488047),
    S = n(336127),
    T = n(964570);

function _(e) {
    let { handleHide: t } = e;
    return (0, l.jsx)(d.DUT, {
        onClick: t,
        className: C.b,
        "aria-label": A.intl.string(A.t.WAI6xu),
        children: (0, l.jsx)(d.PGe, {
            size: "md",
            color: "currentColor",
            className: C.ut,
        }),
    });
}

function E(e) {
    let { username: t, title: n, videoSrc: r, messageCount: a, reaction: s, reactionCount: c, classname: o } = e;
    return (0, l.jsxs)("div", {
        className: i()(C.IP, o),
        children: [
            (0, l.jsx)("div", {
                className: C.Y6,
                children: (0, l.jsxs)("div", {
                    className: C.wO,
                    children: [
                        (0, l.jsx)(d.Text, {
                            tag: "span",
                            className: C.cy,
                            variant: "text-sm/semibold",
                            children: t,
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: C.SD,
                            children: A.intl.string(A.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(d.Heading, {
                variant: "heading-md/extrabold",
                className: C.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, l.jsx)(d.hKd, {
                size: 10,
            }),
            (0, l.jsx)(m.A, {
                className: C.Ki,
                src: r,
                autoPlay: !0,
                loop: !0,
                muted: !0,
            }),
            (0, l.jsx)(d.hKd, {
                size: 10,
            }),
            (0, l.jsx)("div", {
                className: C.qr,
                children: (0, l.jsxs)("div", {
                    className: C.GD,
                    children: [
                        (0, l.jsxs)("div", {
                            className: C.Mv,
                            children: [
                                (0, l.jsx)("span", {
                                    className: C.SZ,
                                    children: (0, l.jsx)(d.oyn, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                                (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: a,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: C.vi,
                            children: [
                                (0, l.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: s,
                                }),
                                (0, l.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
let w = (e) => {
    var t, n;
    let { channel: a } = e,
        m = (0, u.Ay)(),
        w = (0, o.Mw)(m),
        R = (0, c.bG)([p.A], () => p.A.getGuild(a.guild_id)),
        k = (0, c.bG)([h.A], () => h.A.hasHidden(a.id)),
        P = (0, x.e)({
            guildId: a.guild_id,
            channelId: a.id,
        }),
        { transitions: I, setVisible: M } = (0, v.V)(),
        D = r.useCallback(() => {
            M(!1), f.A.hideAdminOnboarding(a.id, !0);
        }, [a, M]);
    r.useEffect(() => {
        (0, g.l)(a.id) || M(!k);
    }, [a, M, k]);
    let L = r.useMemo(
            () => [
                A.intl.string(A.t["8pEGAw"]),
                A.intl.string(A.t.jwfgDd),
                A.intl.string(A.t.mPKs27),
                A.intl.string(A.t.StRbvG),
            ],
            [],
        ),
        U = r.useMemo(
            () => [
                A.intl.string(A.t["m/b58M"]),
                A.intl.string(A.t.MuJSKw),
                A.intl.string(A.t["d/Wqvu"]),
                A.intl.string(A.t.GJklAw),
            ],
            [],
        ),
        F = () => {
            b.A.open(a.guild_id, y.BEX.ROLE_SUBSCRIPTIONS);
        },
        G =
            null !=
                (t = null == R ? void 0 : R.features.has(y.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) &&
            t
                ? A.intl.string(A.t.n0q7sI)
                : A.intl.string(A.t.QoYdie),
        z =
            null !=
                (n =
                    (null == R ? void 0 : R.features.has(y.GuildFeatures.CREATOR_MONETIZABLE)) ||
                    (null == R ? void 0 : R.features.has(y.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
        H = z ? A.intl.string(A.t["G/7ciZ"]) : A.intl.string(A.t.IFOiit),
        V = z ? A.intl.string(A.t.GjgQO1) : A.intl.string(A.t.E7AO6t);
    return (0, l.jsx)(l.Fragment, {
        children: I((e, t) =>
            t
                ? (0, l.jsxs)(s.animated.div, {
                      style: e,
                      className: C.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: C.U1,
                              children: [
                                  (0, l.jsxs)(d.Text, {
                                      variant: "text-xs/normal",
                                      className: C.l2,
                                      children: [
                                          (0, l.jsx)(d.mir, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: C.Kk,
                                          }),
                                          A.intl.string(A.t.znhX2R),
                                      ],
                                  }),
                                  (0, l.jsx)(_, {
                                      handleHide: D,
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: C.hQ,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: i()(C.CT, z && C.en),
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: C.F2,
                                              children: (0, l.jsxs)("div", {
                                                  className: C.IZ,
                                                  children: [
                                                      (0, l.jsx)(E, {
                                                          username: A.intl.string(A.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: A.intl.string(A.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: C.q6,
                                                      }),
                                                      (0, l.jsx)(E, {
                                                          username: A.intl.string(A.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: A.intl.string(A.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: C.q6,
                                                      }),
                                                      (0, l.jsx)(E, {
                                                          username: A.intl.string(A.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: A.intl.string(A.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: C.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, l.jsxs)("article", {
                                              className: C.n$,
                                              children: [
                                                  (0, l.jsx)(d.Heading, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: H,
                                                  }),
                                                  (0, l.jsx)(d.hKd, {
                                                      size: 8,
                                                  }),
                                                  (0, l.jsx)(d.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: V,
                                                  }),
                                                  (0, l.jsx)(d.hKd, {
                                                      size: 16,
                                                  }),
                                                  (0, l.jsxs)(d.DUT, {
                                                      onClick: () =>
                                                          open(j.A.getCreatorSupportArticleURL(y.MVz.MEDIA_CHANNEL)),
                                                      className: C.zy,
                                                      children: [
                                                          (0, l.jsx)(d.Text, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: A.intl.string(A.t.OahzBd),
                                                          }),
                                                          (0, l.jsx)(d.tfB, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: C.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(d.hKd, {
                                                      size: 16,
                                                  }),
                                                  (0, l.jsx)("div", {
                                                      className: C.Qq,
                                                      children: L.map((e) =>
                                                          (0, l.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: C.U0,
                                                                  children: e,
                                                              },
                                                              e,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  z &&
                                      (0, l.jsxs)("div", {
                                          className: i()(C.CT, C.Gw),
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: C.F2,
                                                  children: (0, l.jsxs)("div", {
                                                      className: C.kQ,
                                                      children: [
                                                          (0, l.jsx)("img", {
                                                              src: w ? S : T,
                                                              alt: "",
                                                              className: C.JM,
                                                          }),
                                                          (0, l.jsx)("img", {
                                                              src: w ? O : N,
                                                              alt: "",
                                                              className: C.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsxs)("article", {
                                                  className: C.n$,
                                                  children: [
                                                      (0, l.jsxs)(d.Text, {
                                                          variant: "text-xxs/bold",
                                                          className: C.X4,
                                                          children: [
                                                              A.intl.string(A.t.NChGwy),
                                                              " ",
                                                              (0, l.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(d.hKd, {
                                                          size: 10,
                                                      }),
                                                      (0, l.jsx)(d.Heading, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: A.intl.string(A.t["N/TRrT"]),
                                                      }),
                                                      (0, l.jsx)(d.hKd, {
                                                          size: 8,
                                                      }),
                                                      (0, l.jsx)(d.Text, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: A.intl.string(A.t.t3yWxG),
                                                      }),
                                                      (0, l.jsx)(d.hKd, {
                                                          size: 16,
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: C.Qq,
                                                          children: U.map((e) =>
                                                              (0, l.jsx)(
                                                                  d.Text,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: C.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, l.jsx)(d.hKd, {
                                                          size: 16,
                                                      }),
                                                      0 === P.length &&
                                                          (0, l.jsx)(d.Button, {
                                                              variant: "primary",
                                                              onClick: F,
                                                              text: G,
                                                          }),
                                                  ],
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      ],
                  })
                : null,
        ),
    });
};
