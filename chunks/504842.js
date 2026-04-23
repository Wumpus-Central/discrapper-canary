"use strict";
n.d(t, { A: () => F });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(419354),
    o = n(311907),
    d = n(462887),
    c = n(939249),
    u = n(789645),
    m = n(834730),
    h = n(534514),
    g = n(696986),
    x = n(534890),
    f = n(885574),
    _ = n(811893),
    p = n(821609),
    j = n(736653),
    b = n(303136),
    v = n(947094),
    C = n(919577),
    A = n(892110),
    N = n(251766),
    S = n(997509),
    E = n(71393),
    T = n(975571),
    y = n(305182),
    I = n(652215),
    w = n(985018),
    R = n(388803),
    k = n(394350),
    M = n(488047),
    L = n(336127),
    D = n(964570);
function P(e) {
    let { handleHide: t } = e;
    return (0, l.jsx)(c.D, {
        onClick: t,
        className: R.b,
        "aria-label": w.intl.string(w.t.WAI6xu),
        children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: R.ut }),
    });
}
function O(e) {
    let { username: t, title: n, videoSrc: a, messageCount: s, reaction: r, reactionCount: o, classname: d } = e;
    return (0, l.jsxs)("div", {
        className: i()(R.IP, d),
        children: [
            (0, l.jsx)("div", {
                className: R.Y6,
                children: (0, l.jsxs)("div", {
                    className: R.wO,
                    children: [
                        (0, l.jsx)(m.E, { tag: "span", className: R.cy, variant: "text-sm/semibold", children: t }),
                        (0, l.jsx)(m.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: R.SD,
                            children: w.intl.string(w.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(h.D, {
                variant: "heading-md/extrabold",
                className: R.DD,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, l.jsx)(g.h, { size: 10 }),
            (0, l.jsx)(b.A, { className: R.Ki, src: a }),
            (0, l.jsx)(g.h, { size: 10 }),
            (0, l.jsx)("div", {
                className: R.qr,
                children: (0, l.jsxs)("div", {
                    className: R.GD,
                    children: [
                        (0, l.jsxs)("div", {
                            className: R.Mv,
                            children: [
                                (0, l.jsx)("span", {
                                    className: R.SZ,
                                    children: (0, l.jsx)(x.o, { size: "xs", color: "currentColor" }),
                                }),
                                (0, l.jsx)(m.E, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: s,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: R.vi,
                            children: [
                                (0, l.jsx)("span", { role: "img", "aria-label": "", children: r }),
                                (0, l.jsx)(m.E, {
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
let F = (e) => {
    let { channel: t } = e,
        n = (0, j.Ay)(),
        s = (0, d.M)(n),
        u = (0, o.bG)([E.A], () => E.A.getGuild(t.guild_id)),
        x = (0, o.bG)([v.A], () => v.A.hasHidden(t.id)),
        b = (0, N.e)({ guildId: t.guild_id, channelId: t.id }),
        { transitions: F, setVisible: U } = (0, y.V)(),
        z = a.useCallback(() => {
            U(!1), C.A.hideAdminOnboarding(t.id, !0);
        }, [t, U]);
    a.useEffect(() => {
        (0, A.l)(t.id) || U(!x);
    }, [t, U, x]);
    let G = a.useMemo(
            () => [
                w.intl.string(w.t["8pEGAw"]),
                w.intl.string(w.t.jwfgDd),
                w.intl.string(w.t.mPKs27),
                w.intl.string(w.t.StRbvG),
            ],
            [],
        ),
        B = a.useMemo(
            () => [
                w.intl.string(w.t["m/b58M"]),
                w.intl.string(w.t.MuJSKw),
                w.intl.string(w.t["d/Wqvu"]),
                w.intl.string(w.t.GJklAw),
            ],
            [],
        ),
        H = () => {
            S.A.open(t.guild_id, I.BEX.ROLE_SUBSCRIPTIONS);
        },
        V = u?.features.has(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)
            ? w.intl.string(w.t.n0q7sI)
            : w.intl.string(w.t.QoYdie),
        W =
            (u?.features.has(I.GuildFeatures.CREATOR_MONETIZABLE) ||
                u?.features.has(I.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) ??
            !1,
        q = W ? w.intl.string(w.t["G/7ciZ"]) : w.intl.string(w.t.IFOiit),
        $ = W ? w.intl.string(w.t.GjgQO1) : w.intl.string(w.t.E7AO6t);
    return (0, l.jsx)(l.Fragment, {
        children: F((e, t) =>
            t
                ? (0, l.jsxs)(r.animated.div, {
                      style: e,
                      className: R.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: R.U1,
                              children: [
                                  (0, l.jsxs)(m.E, {
                                      variant: "text-xs/normal",
                                      className: R.l2,
                                      children: [
                                          (0, l.jsx)(f.m, { size: "xxs", color: "currentColor", className: R.Kk }),
                                          w.intl.string(w.t.znhX2R),
                                      ],
                                  }),
                                  (0, l.jsx)(P, { handleHide: z }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: R.hQ,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: i()(R.CT, W && R.en),
                                      children: [
                                          (0, l.jsx)("div", {
                                              className: R.F2,
                                              children: (0, l.jsxs)("div", {
                                                  className: R.IZ,
                                                  children: [
                                                      (0, l.jsx)(O, {
                                                          username: w.intl.string(w.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: w.intl.string(w.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: R.q6,
                                                      }),
                                                      (0, l.jsx)(O, {
                                                          username: w.intl.string(w.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: w.intl.string(w.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: R.q6,
                                                      }),
                                                      (0, l.jsx)(O, {
                                                          username: w.intl.string(w.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: w.intl.string(w.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "⚡️",
                                                          reactionCount: "724",
                                                          classname: R.Ob,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, l.jsxs)("article", {
                                              className: R.n$,
                                              children: [
                                                  (0, l.jsx)(h.D, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
                                                      children: q,
                                                  }),
                                                  (0, l.jsx)(g.h, { size: 8 }),
                                                  (0, l.jsx)(m.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: $,
                                                  }),
                                                  (0, l.jsx)(g.h, { size: 16 }),
                                                  (0, l.jsxs)(c.D, {
                                                      onClick: () =>
                                                          open(T.A.getCreatorSupportArticleURL(I.MVz.MEDIA_CHANNEL)),
                                                      className: R.zy,
                                                      children: [
                                                          (0, l.jsx)(m.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: w.intl.string(w.t.OahzBd),
                                                          }),
                                                          (0, l.jsx)(_.t, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: R.QI,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsx)(g.h, { size: 16 }),
                                                  (0, l.jsx)("div", {
                                                      className: R.Qq,
                                                      children: G.map((e) =>
                                                          (0, l.jsx)(
                                                              m.E,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: R.U0,
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
                                  W &&
                                      (0, l.jsxs)("div", {
                                          className: i()(R.CT, R.Gw),
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: R.F2,
                                                  children: (0, l.jsxs)("div", {
                                                      className: R.kQ,
                                                      children: [
                                                          (0, l.jsx)("img", {
                                                              src: s ? L : D,
                                                              alt: "",
                                                              className: R.JM,
                                                          }),
                                                          (0, l.jsx)("img", {
                                                              src: s ? k : M,
                                                              alt: "",
                                                              className: R.JM,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, l.jsxs)("article", {
                                                  className: R.n$,
                                                  children: [
                                                      (0, l.jsxs)(m.E, {
                                                          variant: "text-xxs/bold",
                                                          className: R.X4,
                                                          children: [
                                                              w.intl.string(w.t.NChGwy),
                                                              " ",
                                                              (0, l.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)(g.h, { size: 10 }),
                                                      (0, l.jsx)(h.D, {
                                                          variant: "heading-lg/semibold",
                                                          color: "text-strong",
                                                          children: w.intl.string(w.t["N/TRrT"]),
                                                      }),
                                                      (0, l.jsx)(g.h, { size: 8 }),
                                                      (0, l.jsx)(m.E, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: w.intl.string(w.t.t3yWxG),
                                                      }),
                                                      (0, l.jsx)(g.h, { size: 16 }),
                                                      (0, l.jsx)("div", {
                                                          className: R.Qq,
                                                          children: B.map((e) =>
                                                              (0, l.jsx)(
                                                                  m.E,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: R.U0,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, l.jsx)(g.h, { size: 16 }),
                                                      0 === b.length &&
                                                          (0, l.jsx)(p.$, { variant: "primary", onClick: H, text: V }),
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
