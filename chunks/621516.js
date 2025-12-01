n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(666917),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(70097),
    h = n(961675),
    g = n(883429),
    f = n(432771),
    x = n(406074),
    p = n(434404),
    b = n(430824),
    j = n(63063),
    v = n(595433),
    _ = n(981631),
    C = n(388032),
    y = n(220179),
    T = n(906739),
    w = n(965358),
    S = n(420196),
    N = n(433075);
function O(e) {
    let { handleHide: t } = e;
    return (0, r.jsx)(d.P3F, {
        onClick: t,
        className: y.closeButton,
        "aria-label": C.intl.string(C.t.WAI6xu),
        children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor",
            className: y.closeIcon,
        }),
    });
}
function P(e) {
    let { username: t, title: n, videoSrc: i, messageCount: a, reaction: s, reactionCount: o, classname: c } = e;
    return (0, r.jsxs)("div", {
        className: l()(y.videoPreview, c),
        children: [
            (0, r.jsx)("div", {
                className: y.authorRow,
                children: (0, r.jsxs)("div", {
                    className: y.rowGroup,
                    children: [
                        (0, r.jsx)(d.Text, {
                            tag: "span",
                            className: y.author,
                            variant: "text-sm/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: y.postCreationTimestamp,
                            children: C.intl.string(C.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/extrabold",
                className: y.title,
                color: "header-primary",
                "aria-hidden": !0,
                children: n,
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)(m.Z, {
                className: y.video,
                src: i,
                autoPlay: !0,
                loop: !0,
                muted: !0,
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)("div", {
                className: y.footer,
                children: (0, r.jsxs)("div", {
                    className: y.forumPostControls,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.messageCountBox,
                            children: [
                                (0, r.jsx)("span", {
                                    className: y.messageCountIcon,
                                    children: (0, r.jsx)(d.kBi, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: a,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: y.reactionBox,
                            children: [
                                (0, r.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: s,
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
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
let I = (e) => {
    var t, n;
    let { channel: a } = e,
        m = (0, u.ZP)(),
        I = (0, c.wj)(m),
        E = (0, o.e7)([b.Z], () => b.Z.getGuild(a.guild_id)),
        R = (0, o.e7)([h.Z], () => h.Z.hasHidden(a.id)),
        M = (0, x.C)({
            guildId: a.guild_id,
            channelId: a.id,
        }),
        { transitions: Z, setVisible: k } = (0, v.H)(),
        A = i.useCallback(() => {
            k(!1), g.Z.hideAdminOnboarding(a.id, !0);
        }, [a, k]);
    i.useEffect(() => {
        (0, f.c)(a.id) || k(!R);
    }, [a, k, R]);
    let L = i.useMemo(
            () => [
                C.intl.string(C.t["8pEGAw"]),
                C.intl.string(C.t.jwfgDd),
                C.intl.string(C.t.mPKs27),
                C.intl.string(C.t.StRbvG),
            ],
            [],
        ),
        F = i.useMemo(
            () => [
                C.intl.string(C.t["m/b58M"]),
                C.intl.string(C.t.MuJSKw),
                C.intl.string(C.t["d/Wqvu"]),
                C.intl.string(C.t.GJklAw),
            ],
            [],
        ),
        D = () => {
            p.Z.open(a.guild_id, _.pNK.ROLE_SUBSCRIPTIONS);
        },
        H =
            null !=
                (t = null == E ? void 0 : E.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) &&
            t
                ? C.intl.string(C.t.n0q7sI)
                : C.intl.string(C.t.QoYdie),
        z =
            null !=
                (n =
                    (null == E ? void 0 : E.features.has(_.GuildFeatures.CREATOR_MONETIZABLE)) ||
                    (null == E ? void 0 : E.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
        B = z ? C.intl.string(C.t["G/7ciZ"]) : C.intl.string(C.t.IFOiit),
        U = z ? C.intl.string(C.t.GjgQO1) : C.intl.string(C.t.E7AO6t);
    return (0, r.jsx)(r.Fragment, {
        children: Z((e, t) =>
            t
                ? (0, r.jsxs)(s.animated.div, {
                      style: e,
                      className: y.container,
                      children: [
                          (0, r.jsxs)("div", {
                              className: y.headerRow,
                              children: [
                                  (0, r.jsxs)(d.Text, {
                                      variant: "text-xs/normal",
                                      className: y.visibilityInfo,
                                      children: [
                                          (0, r.jsx)(d.d3s, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: y.icon,
                                          }),
                                          C.intl.string(C.t.znhX2R),
                                      ],
                                  }),
                                  (0, r.jsx)(O, { handleHide: A }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: y.contentContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: l()(y.contentRow, z && y.contentRowOne),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: y.contentMediaContainer,
                                              children: (0, r.jsxs)("div", {
                                                  className: y.contentVideoContainer,
                                                  children: [
                                                      (0, r.jsx)(P, {
                                                          username: C.intl.string(C.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: C.intl.string(C.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1️",
                                                          reactionCount: "724",
                                                          classname: y.backgroundVideo,
                                                      }),
                                                      (0, r.jsx)(P, {
                                                          username: C.intl.string(C.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: C.intl.string(C.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: y.backgroundVideo,
                                                      }),
                                                      (0, r.jsx)(P, {
                                                          username: C.intl.string(C.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: C.intl.string(C.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1️",
                                                          reactionCount: "724",
                                                          classname: y.highlightVideo,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, r.jsxs)("article", {
                                              className: y.contentTextContainer,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-lg/semibold",
                                                      color: "header-primary",
                                                      children: B,
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 8 }),
                                                  (0, r.jsx)(d.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: U,
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsxs)(d.P3F, {
                                                      onClick: () =>
                                                          open(j.Z.getCreatorSupportArticleURL(_.BhN.MEDIA_CHANNEL)),
                                                      className: y.helpCenterLink,
                                                      children: [
                                                          (0, r.jsx)(d.Text, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: C.intl.string(C.t.OahzBd),
                                                          }),
                                                          (0, r.jsx)(d.rgF, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: y.helpCenterLinkIcon,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsx)("div", {
                                                      className: y.mediaChannelTagsContainer,
                                                      children: L.map((e) =>
                                                          (0, r.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: y.mediaChannelTag,
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
                                      (0, r.jsxs)("div", {
                                          className: l()(y.contentRow, y.contentRowTwo),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: y.contentMediaContainer,
                                                  children: (0, r.jsxs)("div", {
                                                      className: y.contentImageContainer,
                                                      children: [
                                                          (0, r.jsx)("img", {
                                                              src: I ? S : N,
                                                              alt: "",
                                                              className: y.previewEmbedImage,
                                                          }),
                                                          (0, r.jsx)("img", {
                                                              src: I ? T : w,
                                                              alt: "",
                                                              className: y.previewEmbedImage,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsxs)("article", {
                                                  className: y.contentTextContainer,
                                                  children: [
                                                      (0, r.jsxs)(d.Text, {
                                                          variant: "text-xxs/bold",
                                                          className: y.serverSubPill,
                                                          children: [
                                                              C.intl.string(C.t.NChGwy),
                                                              " ",
                                                              (0, r.jsx)("span", {
                                                                  role: "img",
                                                                  "aria-label": "",
                                                                  children: "\uD83D\uDD25",
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 10 }),
                                                      (0, r.jsx)(d.Heading, {
                                                          variant: "heading-lg/semibold",
                                                          color: "header-primary",
                                                          children: C.intl.string(C.t["N/TRrT"]),
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 8 }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: C.intl.string(C.t.t3yWxG),
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 16 }),
                                                      (0, r.jsx)("div", {
                                                          className: y.mediaChannelTagsContainer,
                                                          children: F.map((e) =>
                                                              (0, r.jsx)(
                                                                  d.Text,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: y.mediaChannelTag,
                                                                      children: e,
                                                                  },
                                                                  e,
                                                              ),
                                                          ),
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 16 }),
                                                      0 === M.length &&
                                                          (0, r.jsx)(d.Button, {
                                                              variant: "primary",
                                                              onClick: D,
                                                              text: H,
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
