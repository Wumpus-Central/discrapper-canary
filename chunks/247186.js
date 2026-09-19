n.d(t, { r3: () => en, Ay: () => eh, xS: () => eu });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(478676),
    o = n(939249),
    u = n(933832),
    c = n(624479),
    d = n(140735),
    h = n(9578),
    m = n(268218),
    f = n(236285),
    p = n(232042),
    g = n(906754),
    x = n(332173),
    A = n(37632),
    C = n(534890),
    E = n(375708),
    I = n(879386);
let y = function () {
    return (0, l.jsx)(C.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: I.K,
        "aria-label": E.intl.string(E.t.BAB0yK),
    });
};
var S = n(112107),
    v = n(930101),
    N = n(302031),
    _ = n(586172),
    j = n(71393),
    b = n(957565),
    T = n(143145),
    R = n(392605),
    O = n(785562),
    M = n(192308),
    L = n(588975),
    k = n(442433),
    w = n(975807),
    P = n(235393),
    D = n(679164),
    U = n(652215),
    V = n(24686),
    G = n(147190),
    F = n(556300),
    H = n(990474);
n(938796);
var B = n(380610),
    W = n(435954),
    K = n(721779),
    z = n(333421),
    Z = n(100392),
    Y = n(950980),
    q = n(836156);
let J = i.lazy(() =>
        Promise.all([n.e("503634"), n.e("761764"), n.e("218126"), n.e("467696")])
            .then(n.bind(n, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    $ = i.lazy(() =>
        Promise.all([n.e("378100"), n.e("886456"), n.e("278078")])
            .then(n.bind(n, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    X = RegExp("^" + K.st.source, K.st.flags);
var Q = n(569926),
    ee = n(266645);
function et(e) {
    let { gameId: t, authorId: n } = e;
    return ((0, Q.I)(t), (0, l.jsx)(ee.A, { gameId: t, authorId: n }));
}
function en() {
    return { gameMention: { react: (e, t, n) => (0, l.jsx)(et, { gameId: e.gameId, authorId: n.authorId }, n.key) } };
}
var el = n(881140),
    ei = n(279538),
    es = n(165648),
    er = n(969490);
let ea = { display: "inline" };
function eo(e) {
    return e.stopPropagation();
}
function eu(e) {
    return {
        ...e,
        react: (t, n, i) => (0, l.jsx)("span", { style: ea, onClick: eo, children: e.react(t, n, i) }, i.key),
    };
}
function ec(e) {
    let { text: t } = e,
        [n, s] = i.useState(!1);
    return (0, l.jsx)(o.D, {
        onClick: function () {
            (0, b.C)(
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
let ed = {
    blockQuote: {
        react: (e, t, n) =>
            (0, l.jsxs)(
                "div",
                {
                    className: es.h,
                    children: [
                        (0, l.jsx)("div", { className: es.r }),
                        (0, l.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, l.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, l.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, l.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, l.jsx)("code", { className: "inline", children: (0, T.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, i) {
            function s() {
                return (0, l.jsx)("code", { className: r()(er.kw, "hljs"), children: (0, T.t)(e, t, i) });
            }
            return (0, l.jsx)(
                "pre",
                {
                    children: (0, l.jsxs)("div", {
                        className: es.Hy,
                        children: [
                            b.p5
                                ? (0, l.jsx)("div", { className: es.lB, children: (0, l.jsx)(ec, { text: e.content }) })
                                : null,
                            (0, l.jsx)(_.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: r()(er.kw, "hljs"),
                                highlightedClassName: ei.H,
                                children: (0, l.jsx)(m.c2, {
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
                                                      className: r()(er.kw, "hljs", n.language),
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
                N.Ay,
                {
                    type: N.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== h.A || t ? e : i.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, l.jsx)(S.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, T.d)(e.id)
                ? (0, l.jsxs)(
                      x.A,
                      {
                          role: "link",
                          onClick: function () {
                              (0, R.i)(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, l.jsx)(A.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null,
    },
    timestamp: { react: (e, t, n) => (0, l.jsx)(O.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, a.reactElement)(i, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? es.tZ : null,
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
                className: n.formatInline ? es.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = j.A.getGuild(e.guildId);
            return (0, l.jsx)(g.A, { guild: i, children: (0, T.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, l.jsx)(p.A, { iconType: e.iconType, children: (0, T.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, l.jsx)(y, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let l = (0, a.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, a.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: l,
                className: n.formatInline ? es.tZ : null,
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
function eh(e) {
    let { shouldStopPropagation: t } = e;
    function s(e) {
        return !0 === t ? eu(e) : e;
    }
    return {
        ...ed,
        link: (0, el.A)(e),
        devLink: {
            match: (e, t) => (t.allowLinks && t.allowDevLinks ? X.exec(e) : null),
            parse: (e, t) => ({ target: e, type: "devLink" }),
            react: (e, t, n) => {
                let s = e.target[0];
                return (0, B.h4)(s)
                    ? (0, l.jsxs)(
                          i.Fragment,
                          { children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(W.default, { url: s }, s)] },
                          n.key,
                      )
                    : (0, Z.W0)(s)
                      ? (0, l.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, l.jsx)("span", { children: s }),
                                    (0, l.jsx)(Y.ExperimentEmbed, { url: s }),
                                ],
                            },
                            n.key,
                        )
                      : (0, q.i)(s)
                        ? (0, l.jsx)(
                              i.Fragment,
                              {
                                  children: (0, l.jsxs)(i.Suspense, {
                                      fallback: null,
                                      children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(J, { url: s })],
                                  }),
                              },
                              n.key,
                          )
                        : (0, z.my)(s)
                          ? (0, l.jsx)(
                                i.Fragment,
                                {
                                    children: (0, l.jsxs)(i.Suspense, {
                                        fallback: null,
                                        children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)($, { url: s })],
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
                                  v.H,
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
                            d = f.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                        if (null != d) {
                            let t = d.require_colons;
                            e = { ...e, name: t ? `:${d.name}:` : d.name };
                        }
                        return (0, l.jsx)(
                            v.X,
                            { node: e, tooltipPosition: t, enableClick: n, focusable: i, channelId: u, messageId: c },
                            a,
                        );
                    },
                };
            })(e),
        ),
        channelMention: (0, F.A)(e),
        commandMention: (0, H.Ay)(e),
        attachmentLink: {
            react(t, i, s) {
                let a = s.noStyleAndInteraction
                        ? void 0
                        : async (n) => {
                              let l = await D.AN(t.attachmentUrl);
                              (e.shouldStopPropagation && n?.stopPropagation(),
                                  P.A.trackLinkClicked(l),
                                  e.shouldCloseDefaultModals && (0, M.closeAllModals)(),
                                  (0, w.A)(l));
                          },
                    o = s.noStyleAndInteraction
                        ? U.tEg
                        : (e) => {
                              (0, k.L3)(e, async () => {
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
                    x.A,
                    {
                        role: "link",
                        href: t.attachmentUrl,
                        onClick: a,
                        onContextMenu: o,
                        className: "attachmentLink",
                        children: [
                            (0, l.jsx)(L.P, { size: "xs", className: r()(G.Kk, V.K), color: "currentColor" }),
                            (0, T.t)(t, i, s),
                        ],
                    },
                    s.key,
                );
            },
        },
        soundboard: s(ed.soundboard),
        gameMention: {
            react(e, t, n) {
                let { gameId: i } = e;
                return (0, l.jsx)(ee.A, { gameId: i, authorId: n.authorId }, n.key);
            },
        },
    };
}
