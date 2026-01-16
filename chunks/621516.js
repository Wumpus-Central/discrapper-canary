n.d(t, { Z: () => E });
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(81239),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(70097),
    h = n(961675),
    f = n(883429),
    g = n(432771),
    x = n(406074),
    b = n(434404),
    p = n(430824),
    j = n(63063),
    v = n(595433),
    C = n(981631),
    y = n(388032),
    T = n(993843),
    S = n(906739),
    N = n(965358),
    w = n(420196),
    O = n(433075);
function P(e) {
    let { handleHide: t } = e;
    return (0, r.jsx)(d.P3F, {
        onClick: t,
        className: T.closeButton,
        "aria-label": y.intl.string(y.t.WAI6xu),
        children: (0, r.jsx)(d.Dio, {
            size: "md",
            color: "currentColor",
            className: T.closeIcon,
        }),
    });
}
function I(e) {
    let { username: t, title: n, videoSrc: a, messageCount: i, reaction: s, reactionCount: o, classname: c } = e;
    return (0, r.jsxs)("div", {
        className: l()(T.videoPreview, c),
        children: [
            (0, r.jsx)("div", {
                className: T.authorRow,
                children: (0, r.jsxs)("div", {
                    className: T.rowGroup,
                    children: [
                        (0, r.jsx)(d.Text, {
                            tag: "span",
                            className: T.author,
                            variant: "text-sm/semibold",
                            children: t,
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: T.postCreationTimestamp,
                            children: y.intl.string(y.t.mA0IvI),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/extrabold",
                className: T.title,
                color: "text-strong",
                "aria-hidden": !0,
                children: n,
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)(m.Z, {
                className: T.video,
                src: a,
                autoPlay: !0,
                loop: !0,
                muted: !0,
            }),
            (0, r.jsx)(d.LZC, { size: 10 }),
            (0, r.jsx)("div", {
                className: T.footer,
                children: (0, r.jsxs)("div", {
                    className: T.forumPostControls,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.messageCountBox,
                            children: [
                                (0, r.jsx)("span", {
                                    className: T.messageCountIcon,
                                    children: (0, r.jsx)(d.kBi, {
                                        size: "xs",
                                        color: "currentColor",
                                    }),
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-text-default",
                                    children: i,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: T.reactionBox,
                            children: [
                                (0, r.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: s,
                                }),
                                (0, r.jsx)(d.Text, {
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
let E = (e) => {
    var t, n;
    let { channel: i } = e,
        m = (0, u.ZP)(),
        E = (0, c.wj)(m),
        _ = (0, o.e7)([p.Z], () => p.Z.getGuild(i.guild_id)),
        R = (0, o.e7)([h.Z], () => h.Z.hasHidden(i.id)),
        M = (0, x.C)({
            guildId: i.guild_id,
            channelId: i.id,
        }),
        { transitions: Z, setVisible: k } = (0, v.H)(),
        A = a.useCallback(() => {
            k(!1), f.Z.hideAdminOnboarding(i.id, !0);
        }, [i, k]);
    a.useEffect(() => {
        (0, g.c)(i.id) || k(!R);
    }, [i, k, R]);
    let L = a.useMemo(
            () => [
                y.intl.string(y.t["8pEGAw"]),
                y.intl.string(y.t.jwfgDd),
                y.intl.string(y.t.mPKs27),
                y.intl.string(y.t.StRbvG),
            ],
            [],
        ),
        F = a.useMemo(
            () => [
                y.intl.string(y.t["m/b58M"]),
                y.intl.string(y.t.MuJSKw),
                y.intl.string(y.t["d/Wqvu"]),
                y.intl.string(y.t.GJklAw),
            ],
            [],
        ),
        D = () => {
            b.Z.open(i.guild_id, C.pNK.ROLE_SUBSCRIPTIONS);
        },
        H =
            null !=
                (t = null == _ ? void 0 : _.features.has(C.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) &&
            t
                ? y.intl.string(y.t.n0q7sI)
                : y.intl.string(y.t.QoYdie),
        z =
            null !=
                (n =
                    (null == _ ? void 0 : _.features.has(C.GuildFeatures.CREATOR_MONETIZABLE)) ||
                    (null == _ ? void 0 : _.features.has(C.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
        B = z ? y.intl.string(y.t["G/7ciZ"]) : y.intl.string(y.t.IFOiit),
        U = z ? y.intl.string(y.t.GjgQO1) : y.intl.string(y.t.E7AO6t);
    return (0, r.jsx)(r.Fragment, {
        children: Z((e, t) =>
            t
                ? (0, r.jsxs)(s.animated.div, {
                      style: e,
                      className: T.container,
                      children: [
                          (0, r.jsxs)("div", {
                              className: T.headerRow,
                              children: [
                                  (0, r.jsxs)(d.Text, {
                                      variant: "text-xs/normal",
                                      className: T.visibilityInfo,
                                      children: [
                                          (0, r.jsx)(d.d3s, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: T.icon,
                                          }),
                                          y.intl.string(y.t.znhX2R),
                                      ],
                                  }),
                                  (0, r.jsx)(P, { handleHide: A }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: T.contentContainer,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: l()(T.contentRow, z && T.contentRowOne),
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: T.contentMediaContainer,
                                              children: (0, r.jsxs)("div", {
                                                  className: T.contentVideoContainer,
                                                  children: [
                                                      (0, r.jsx)(I, {
                                                          username: y.intl.string(y.t.AkORco),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                          title: y.intl.string(y.t.yO6Fxu),
                                                          messageCount: "34",
                                                          reaction: "\u26A1️",
                                                          reactionCount: "724",
                                                          classname: T.backgroundVideo,
                                                      }),
                                                      (0, r.jsx)(I, {
                                                          username: y.intl.string(y.t.DPg3YM),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                          title: y.intl.string(y.t["R5XnC/"]),
                                                          messageCount: "34",
                                                          reactionCount: "84",
                                                          reaction: "\uD83D\uDC9E",
                                                          classname: T.backgroundVideo,
                                                      }),
                                                      (0, r.jsx)(I, {
                                                          username: y.intl.string(y.t.KIelex),
                                                          videoSrc:
                                                              "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                          title: y.intl.string(y.t.pt88Vb),
                                                          messageCount: "7,103",
                                                          reaction: "\u26A1️",
                                                          reactionCount: "724",
                                                          classname: T.highlightVideo,
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          (0, r.jsxs)("article", {
                                              className: T.contentTextContainer,
                                              children: [
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-lg/semibold",
                                                      color: "text-strong",
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
                                                          open(j.Z.getCreatorSupportArticleURL(C.BhN.MEDIA_CHANNEL)),
                                                      className: T.helpCenterLink,
                                                      children: [
                                                          (0, r.jsx)(d.Text, {
                                                              variant: "text-sm/medium",
                                                              color: "text-link",
                                                              children: y.intl.string(y.t.OahzBd),
                                                          }),
                                                          (0, r.jsx)(d.rgF, {
                                                              size: "xs",
                                                              color: "currentColor",
                                                              className: T.helpCenterLinkIcon,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)(d.LZC, { size: 16 }),
                                                  (0, r.jsx)("div", {
                                                      className: T.mediaChannelTagsContainer,
                                                      children: L.map((e) =>
                                                          (0, r.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: "text-sm/medium",
                                                                  color: "text-default",
                                                                  className: T.mediaChannelTag,
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
                                          className: l()(T.contentRow, T.contentRowTwo),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: T.contentMediaContainer,
                                                  children: (0, r.jsxs)("div", {
                                                      className: T.contentImageContainer,
                                                      children: [
                                                          (0, r.jsx)("img", {
                                                              src: E ? w : O,
                                                              alt: "",
                                                              className: T.previewEmbedImage,
                                                          }),
                                                          (0, r.jsx)("img", {
                                                              src: E ? S : N,
                                                              alt: "",
                                                              className: T.previewEmbedImage,
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                              (0, r.jsxs)("article", {
                                                  className: T.contentTextContainer,
                                                  children: [
                                                      (0, r.jsxs)(d.Text, {
                                                          variant: "text-xxs/bold",
                                                          className: T.serverSubPill,
                                                          children: [
                                                              y.intl.string(y.t.NChGwy),
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
                                                          color: "text-strong",
                                                          children: y.intl.string(y.t["N/TRrT"]),
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 8 }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: "text-md/normal",
                                                          color: "text-muted",
                                                          children: y.intl.string(y.t.t3yWxG),
                                                      }),
                                                      (0, r.jsx)(d.LZC, { size: 16 }),
                                                      (0, r.jsx)("div", {
                                                          className: T.mediaChannelTagsContainer,
                                                          children: F.map((e) =>
                                                              (0, r.jsx)(
                                                                  d.Text,
                                                                  {
                                                                      variant: "text-sm/medium",
                                                                      color: "text-default",
                                                                      className: T.mediaChannelTag,
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
