"use strict";
n.d(t, { A: () => R });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(880013),
    o = n(311907),
    d = n(582754),
    c = n(397927),
    u = n(736653),
    m = n(303136),
    h = n(947094),
    x = n(919577),
    g = n(892110),
    f = n(251766),
    _ = n(997509),
    p = n(71393),
    j = n(975571),
    b = n(305182),
    v = n(652215),
    A = n(985018),
    C = n(924930),
    T = n(394350),
    N = n(488047),
    S = n(336127),
    y = n(964570);
function E(e) {
    let { handleHide: t } = e;
    return (0, l.jsx)(c.DUT, {
        onClick: t,
        className: C.b,
        "aria-label": A.intl.string(A.t.WAI6xu),
        children: (0, l.jsx)(c.PGe, { size: "md", color: "currentColor", className: C.ut }),
    });
}
function I(e) {
    let { username: t, title: n, videoSrc: i, messageCount: s, reaction: r, reactionCount: o, classname: d } = e;
    return (0, l.jsxs)("div", {
        className: a()(C.IP, d),
        children: [
            (0, l.jsx)("div", {
                className: C.Y6,
                children: (0, l.jsxs)("div", {
                    className: C.wO,
                    children: [
                        (0, l.jsx)(c.Text, { tag: "span", className: C.cy, variant: "text-sm/semibold", children: t }),
                        (0, l.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: C.SD,
                            children: A.intl.string(A.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(c.Heading, {
                variant: "heading-md/extrabold",
                className: C.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, l.jsx)(c.hKd, { size: 10 }),
            (0, l.jsx)(m.A, { className: C.Ki, src: i }),
            (0, l.jsx)(c.hKd, { size: 10 }),
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
                                    children: (0, l.jsx)(c.oyn, { size: "xs", color: "currentColor" }),
                                }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: C.vi,
                            children: [
                                (0, l.jsx)("span", { role: "img", "aria-label": "", children: r }),
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
}
let R = (e) => {
    let { channel: t } = e,
        n = (0, u.Ay)(),
        s = (0, d.Mw)(n),
        m = (0, o.bG)([p.A], () => p.A.getGuild(t.guild_id)),
        R = (0, o.bG)([h.A], () => h.A.hasHidden(t.id)),
        M = (0, f.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: w, setVisible: k } = (0, b.V)(),
        L = i.useCallback(() => {
            k(!1), x.A.hideAdminOnboarding(t.id, !0);
        }, [t, k]);
    i.useEffect(() => {
        (0, g.l)(t.id) || k(!R);
    }, [t, k, R]);
    let P = i.useMemo(
            () => [
                A.intl.string(A.t["8pEGAw"]),
                A.intl.string(A.t.jwfgDd),
                A.intl.string(A.t.mPKs27),
                A.intl.string(A.t.StRbvG),
            ],
            [],
        ),
        D = i.useMemo(
            () => [
                A.intl.string(A.t["m/b58M"]),
                A.intl.string(A.t.MuJSKw),
                A.intl.string(A.t["d/Wqvu"]),
                A.intl.string(A.t.GJklAw),
            ],
            [],
        ),
        O = () => {
            _.A.open(t.guild_id, v.BEX.ROLE_SUBSCRIPTIONS);
        },
        F = m?.features.has(v.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? A.intl.string(A.t.n0q7sI)
            : A.intl.string(A.t.QoYdie),
        U =
            (m?.features.has(v.GuildFeatures.CREATOR_MONETIZABLE) ||
                m?.features.has(v.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        G = U ? A.intl.string(A.t["G/7ciZ"]) : A.intl.string(A.t.IFOiit),
        z = U ? A.intl.string(A.t.GjgQO1) : A.intl.string(A.t.E7AO6t);
    return (0, l.jsx)(l.Fragment, {
        children: w((e, t) =>
            t
                ? (0, l.jsxs)(r.animated.div, {
                      style: e,
                      className: C.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: C.U1,
                              children: [
                                  (0, l.jsxs)(c.Text, {
                                      variant: "text-xs/normal",
                                      className: C.l2,
                                      children: [
                                          (0, l.jsx)(c.mir, { size: "xxs", color: "currentColor", className: C.Kk }),
                                          A.intl.string(A.t.znhX2R),
                                      ],
                                  }),
                                  (0, l.jsx)(E, { handleHide: L }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: C.hQ,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: a()(C.CT, U && C.en),
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: C.F2,
                                              children: (0, l.jsxs)("div", {
                                                  className: C.IZ,
                                                  children: [
                                                      (0, l.jsx)(I, {
                                                          username: A.intl.string(A.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: A.intl.string(A.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: C.q6,
                                                      }),
                                                      (0, l.jsx)(I, {
                                                          username: A.intl.string(A.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: A.intl.string(A.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: C.q6,
                                                      }),
                                                      (0, l.jsx)(I, {
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
                                                  (0, l.jsx)(c.Heading, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: G,
                                                  }),
                                                  (0, l.jsx)(c.hKd, { size: 8 }),
                                                  (0, l.jsx)(c.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: z,
                                                  }),
                                                  (0, l.jsx)(c.hKd, { size: 16 }),
                                                  (0, l.jsxs)(c.DUT, {
                                                      onClick: () =>
                                                          open(j.A.getCreatorSupportArticleURL(v.MVz.MEDIA_CHANNEL)),
                                                      className: C.zy,
                                                      children: [
                                                          (0, l.jsx)(c.Text, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: A.intl.string(A.t.OahzBd),
                                                          }),
                                                          (0, l.jsx)(c.tfB, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: C.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(c.hKd, { size: 16 }),
                                                  (0, l.jsx)("div", {
                                                      className: C.Qq,
                                                      children: P.map((e) =>
                                                          (0, l.jsx)(
                                                              c.Text,
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
                                  U &&
                                      (0, l.jsxs)("div", {
                                          className: a()(C.CT, C.Gw),
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: C.F2,
                                                  children: (0, l.jsxs)("div", {
                                                      className: C.kQ,
                                                      children: [
                                                          (0, l.jsx)("img", {
                                                              src: s ? S : y,
                                                              alt: "",
                                                              className: C.JM,
                                                          }),
                                                          (0, l.jsx)("img", {
                                                              src: s ? T : N,
                                                              alt: "",
                                                              className: C.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsxs)("article", {
                                                  className: C.n$,
                                                  children: [
                                                      (0, l.jsxs)(c.Text, {
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
                                                      (0, l.jsx)(c.hKd, { size: 10 }),
                                                      (0, l.jsx)(c.Heading, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: A.intl.string(A.t["N/TRrT"]),
                                                      }),
                                                      (0, l.jsx)(c.hKd, { size: 8 }),
                                                      (0, l.jsx)(c.Text, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: A.intl.string(A.t.t3yWxG),
                                                      }),
                                                      (0, l.jsx)(c.hKd, { size: 16 }),
                                                      (0, l.jsx)("div", {
                                                          className: C.Qq,
                                                          children: D.map((e) =>
                                                              (0, l.jsx)(
                                                                  c.Text,
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
                                                      (0, l.jsx)(c.hKd, { size: 16 }),
                                                      0 === M.length &&
                                                          (0, l.jsx)(c.Button, {
                                                              variant: "primary",
                                                              onClick: O,
                                                              text: F,
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
