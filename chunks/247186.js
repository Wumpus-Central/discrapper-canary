n.d(t, { r3: () => es, Ay: () => eg, xS: () => em });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(478676),
    o = n(939249),
    u = n(933832),
    c = n(624479),
    d = n(140735),
    h = n(228366),
    m = n(9578),
    f = n(268218),
    p = n(236285),
    g = n(232042),
    x = n(906754),
    A = n(332173),
    C = n(37632),
    E = n(534890),
    I = n(375708),
    y = n(879386);
let S = function () {
    return (0, l.jsx)(E.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: y.K,
        "aria-label": I.intl.string(I.t.BAB0yK),
    });
};
var v = n(112107),
    N = n(930101),
    _ = n(976860),
    j = n(302031),
    b = n(586172),
    T = n(696451),
    R = n(317525),
    O = n(71393),
    M = n(957565),
    L = n(143145),
    k = n(785562),
    w = n(192308),
    P = n(588975),
    D = n(442433),
    U = n(975807),
    G = n(235393),
    V = n(679164),
    F = n(652215),
    H = n(24686),
    B = n(147190),
    W = n(556300),
    K = n(990474);
n(938796);
var z = n(380610),
    Z = n(435954),
    Y = n(721779),
    q = n(333421),
    J = n(100392),
    $ = n(950980),
    X = n(836156);
let Q = i.lazy(() =>
        Promise.all([n.e("503634"), n.e("761764"), n.e("218126"), n.e("467696")])
            .then(n.bind(n, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    ee = i.lazy(() =>
        Promise.all([n.e("378100"), n.e("886456"), n.e("278078")])
            .then(n.bind(n, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    et = RegExp("^" + Y.st.source, Y.st.flags);
var en = n(569926),
    el = n(266645);
function ei(e) {
    let { gameId: t, authorId: n } = e;
    return ((0, en.I)(t), (0, l.jsx)(el.A, { gameId: t, authorId: n }));
}
function es() {
    return { gameMention: { react: (e, t, n) => (0, l.jsx)(ei, { gameId: e.gameId, authorId: n.authorId }, n.key) } };
}
var er = n(881140),
    ea = n(746080),
    eo = n(279538),
    eu = n(165648),
    ec = n(969490);
let ed = { display: "inline" };
function eh(e) {
    return e.stopPropagation();
}
function em(e) {
    return {
        ...e,
        react: (t, n, i) => (0, l.jsx)("span", { style: ed, onClick: eh, children: e.react(t, n, i) }, i.key),
    };
}
function ef(e) {
    let { text: t } = e,
        [n, s] = i.useState(!1);
    return (0, l.jsx)(o.D, {
        onClick: function () {
            (0, M.C)(
                t,
                () => s(!0),
                () => s(!1),
            );
        },
        children: n
            ? (0, l.jsx)(u.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(c.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
let ep = {
    blockQuote: {
        react: (e, t, n) =>
            (0, l.jsxs)(
                "div",
                {
                    className: eu.h,
                    children: [
                        (0, l.jsx)("div", { className: eu.r }),
                        (0, l.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, l.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, l.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, l.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, l.jsx)("code", { className: "inline", children: (0, L.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, i) {
            function s() {
                return (0, l.jsx)("code", { className: r()(ec.kw, "hljs"), children: (0, L.t)(e, t, i) });
            }
            return (0, l.jsx)(
                "pre",
                {
                    children: (0, l.jsxs)("div", {
                        className: eu.Hy,
                        children: [
                            M.p5
                                ? (0, l.jsx)("div", { className: eu.lB, children: (0, l.jsx)(ef, { text: e.content }) })
                                : null,
                            (0, l.jsx)(b.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: r()(ec.kw, "hljs"),
                                highlightedClassName: eo.H,
                                children: (0, l.jsx)(f.c2, {
                                    createPromise: () =>
                                        Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 981776)),
                                    webpackId: 981776,
                                    renderFallback: s,
                                    render: (t) => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n
                                                ? s()
                                                : (0, l.jsx)("code", {
                                                      className: r()(ec.kw, "hljs", n.language),
                                                      dangerouslySetInnerHTML: { __html: n.value },
                                                  });
                                        }
                                    },
                                }),
                            }),
                        ],
                    }),
                },
                i.key,
            );
        },
    },
    text: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, l.jsx)("span", { children: e.content }, n.key)
                : (0, l.jsx)("span", { children: t(e.content, n) }, n.key),
    },
    spoiler: {
        react: (e, t, n) =>
            (0, l.jsx)(
                j.Ay,
                {
                    type: j.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== m.A || t ? e : i.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, l.jsx)(v.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, L.d)(e.id)
                ? (0, l.jsxs)(
                      A.A,
                      {
                          role: "link",
                          onClick: function () {
                              !(function (e, t, n) {
                                  let l = O.A.getGuild(e);
                                  if (null != e && null != l)
                                      switch (t) {
                                          case "home":
                                          case "guide":
                                              i(ea.VV.GUILD_HOME);
                                              break;
                                          case "browse":
                                              i(ea.VV.CHANNEL_BROWSER);
                                              break;
                                          case "customize":
                                              i(ea.VV.CUSTOMIZE_COMMUNITY);
                                              break;
                                          case "linked-roles":
                                              if (null != n) {
                                                  let t = T.Ay.getSelfMember(e);
                                                  if (null == t) return;
                                                  let l = R.A.getRole(e, n);
                                                  null == l || t.roles.includes(l.id)
                                                      ? h.h.dispatch({
                                                            type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                            guildId: e,
                                                        })
                                                      : h.h.dispatch({
                                                            type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                            guildId: e,
                                                            role: l,
                                                        });
                                              } else
                                                  h.h.dispatch({
                                                      type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                      guildId: e,
                                                  });
                                      }
                                  function i(t) {
                                      null != e &&
                                          null != l &&
                                          l.features.has(F.GuildFeatures.COMMUNITY) &&
                                          (0, _.pX)(F.BVt.CHANNEL(e, t));
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, l.jsx)(C.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null,
    },
    timestamp: { react: (e, t, n) => (0, l.jsx)(k.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, a.reactElement)(i, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? eu.tZ : null,
                style: { "--totalCharacters": s, "--olCounterStart": null == e.start ? void 0 : e.start - 1 },
                children: e.items.map((e, i) => {
                    let s = (0, a.reactElement)("span", `${n.key}-${i}-innerSpan`, { children: t(e, n) });
                    return (0, a.reactElement)("li", `${n.key}-${i}` + i, {
                        children: [s, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, a.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, a.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [i, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? eu.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = O.A.getGuild(e.guildId);
            return (0, l.jsx)(x.A, { guild: i, children: (0, L.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, l.jsx)(g.A, { iconType: e.iconType, children: (0, L.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, l.jsx)(S, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let l = (0, a.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, a.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: l,
                className: n.formatInline ? eu.tZ : null,
            });
        },
    },
    silentPrefix: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, l.jsx)("span", { children: e.content }, n.key)
                : (0, l.jsx)("span", { children: t(e.content, n) }, n.key),
    },
};
function eg(e) {
    let { shouldStopPropagation: t } = e;
    function s(e) {
        return !0 === t ? em(e) : e;
    }
    return {
        ...ep,
        link: (0, er.A)(e),
        devLink: {
            match: (e, t) => (t.allowLinks && t.allowDevLinks ? et.exec(e) : null),
            parse: (e, t) => ({ target: e, type: "devLink" }),
            react: (e, t, n) => {
                let s = e.target[0];
                return (0, z.h4)(s)
                    ? (0, l.jsxs)(
                          i.Fragment,
                          { children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(Z.default, { url: s }, s)] },
                          n.key,
                      )
                    : (0, J.W0)(s)
                      ? (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)("span", { children: s }),
                                    (0, l.jsx)($.ExperimentEmbed, { url: s }),
                                ],
                            },
                            n.key,
                        )
                      : (0, X.i)(s)
                        ? (0, l.jsx)(
                              i.Fragment,
                              {
                                  children: (0, l.jsxs)(i.Suspense, {
                                      fallback: null,
                                      children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(Q, { url: s })],
                                  }),
                              },
                              n.key,
                          )
                        : (0, q.my)(s)
                          ? (0, l.jsx)(
                                i.Fragment,
                                {
                                    children: (0, l.jsxs)(i.Suspense, {
                                        fallback: null,
                                        children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(ee, { url: s })],
                                    }),
                                },
                                n.key,
                            )
                          : (0, l.jsx)("span", { children: s }, n.key);
            },
            order: 6,
        },
        emoji: s(
            (function (e) {
                let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0, emojiFocusable: i = !0 } = e;
                return {
                    react(e, s, r) {
                        let { key: a, channelId: o, messageId: u } = r;
                        return e.src
                            ? (0, l.jsx)(
                                  N.H,
                                  {
                                      node: e,
                                      tooltipPosition: t,
                                      enableClick: n,
                                      focusable: i,
                                      channelId: o,
                                      messageId: u,
                                  },
                                  a,
                              )
                            : (0, l.jsx)("span", { children: e.surrogate }, a);
                    },
                };
            })(e),
        ),
        customEmoji: s(
            (function (e) {
                let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0, emojiFocusable: i = !0 } = e;
                return {
                    react(e, s, r) {
                        let { key: a, guildId: o, channelId: u, messageId: c } = r,
                            d = p.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                        if (null != d) {
                            let t = d.require_colons;
                            e = { ...e, name: t ? `:${d.name}:` : d.name };
                        }
                        return (0, l.jsx)(
                            N.X,
                            { node: e, tooltipPosition: t, enableClick: n, focusable: i, channelId: u, messageId: c },
                            a,
                        );
                    },
                };
            })(e),
        ),
        channelMention: (0, W.A)(e),
        commandMention: (0, K.Ay)(e),
        attachmentLink: {
            react(t, i, s) {
                let a = s.noStyleAndInteraction
                        ? void 0
                        : async (n) => {
                              let l = await V.AN(t.attachmentUrl);
                              (e.shouldStopPropagation && n?.stopPropagation(),
                                  G.A.trackLinkClicked(l),
                                  e.shouldCloseDefaultModals && (0, w.closeAllModals)(),
                                  (0, U.A)(l));
                          },
                    o = s.noStyleAndInteraction
                        ? F.tEg
                        : (e) => {
                              (0, D.L3)(e, async () => {
                                  let { default: e } = await n.e("762529").then(n.bind(n, 740024));
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          attachmentUrl: t.attachmentUrl,
                                          attachmentName: t.attachmentName,
                                      });
                              });
                          };
                return (0, l.jsxs)(
                    A.A,
                    {
                        role: "link",
                        href: t.attachmentUrl,
                        onClick: a,
                        onContextMenu: o,
                        className: "attachmentLink",
                        children: [
                            (0, l.jsx)(P.P, { size: "xs", className: r()(B.Kk, H.K), color: "currentColor" }),
                            (0, L.t)(t, i, s),
                        ],
                    },
                    s.key,
                );
            },
        },
        soundboard: s(ep.soundboard),
        gameMention: {
            react(e, t, n) {
                let { gameId: i } = e;
                return (0, l.jsx)(el.A, { gameId: i, authorId: n.authorId }, n.key);
            },
        },
    };
}
