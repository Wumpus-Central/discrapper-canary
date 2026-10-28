t.d(n, { r3: () => en, Ay: () => ed, xS: () => eo });
var l = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(478676),
    o = t(939249),
    c = t(933832),
    u = t(624479),
    d = t(140735),
    m = t(9578),
    h = t(236285),
    p = t(232042),
    g = t(906754),
    f = t(332173),
    x = t(37632),
    j = t(534890),
    A = t(105292),
    y = t(879386);
let C = function () {
    return (0, l.jsx)(j.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: y.K,
        "aria-label": A.intl.string(A.t.BAB0yK),
    });
};
var E = t(112107),
    I = t(930101),
    k = t(302031),
    N = t(441136),
    v = t(71393),
    b = t(957565),
    S = t(143145),
    M = t(392605),
    L = t(785562),
    T = t(192308),
    _ = t(588975),
    O = t(442433),
    P = t(975807),
    w = t(235393),
    D = t(679164),
    U = t(652215),
    R = t(24686),
    G = t(147190),
    H = t(556300),
    $ = t(990474);
t(938796);
var B = t(380610),
    K = t(435954),
    V = t(721779),
    z = t(333421),
    W = t(100392),
    F = t(950980),
    X = t(836156);
let Z = a.lazy(async () => ({
        default: (
            await Promise.all([t.e("503634"), t.e("761764"), t.e("60800"), t.e("218126"), t.e("467696")]).then(
                t.bind(t, 881267),
            )
        ).PlaygroundEmbed,
    })),
    q = a.lazy(async () => ({
        default: (await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(t.bind(t, 909261)))
            .DevToolsLinkEmbed,
    })),
    Y = RegExp("^" + V.st.source, V.st.flags);
var J = t(454908),
    Q = t(266645);
function ee(e) {
    let { gameId: n, authorId: t } = e;
    return ((0, J.I)(n), (0, l.jsx)(Q.A, { gameId: n, authorId: t }));
}
function en() {
    return { gameMention: { react: (e, n, t) => (0, l.jsx)(ee, { gameId: e.gameId, authorId: t.authorId }, t.key) } };
}
var et = t(881140),
    el = t(279538),
    ea = t(165648),
    ei = t(969490);
let er = { display: "inline" };
function es(e) {
    return e.stopPropagation();
}
function eo(e) {
    return {
        ...e,
        react: (n, t, a) => (0, l.jsx)("span", { style: er, onClick: es, children: e.react(n, t, a) }, a.key),
    };
}
function ec(e) {
    let { text: n } = e,
        [t, i] = a.useState(!1);
    return (0, l.jsx)(o.D, {
        onClick: function () {
            (0, b.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, l.jsx)(c.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(u.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
let eu = {
    blockQuote: {
        react: (e, n, t) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ea.h,
                    children: [
                        (0, l.jsx)("div", { className: ea.r }),
                        (0, l.jsx)("blockquote", { children: n(e.content, t) }),
                    ],
                },
                t.key,
            ),
    },
    s: { react: (e, n, t) => (0, l.jsx)("s", { children: n(e.content, t) }, t.key) },
    highlight: { react: (e, n, t) => (0, l.jsx)("span", { className: "highlight", children: e.content }, t.key) },
    paragraph: { react: (e, n, t) => (0, l.jsx)("p", { children: n(e.content, t) }, t.key) },
    inlineCode: {
        react: (e, n, t) => (0, l.jsx)("code", { className: "inline", children: (0, S.tj)(e, n, t) }, t.key),
    },
    codeBlock: {
        react: (e, n, t) =>
            (0, l.jsx)(
                "pre",
                {
                    children: (0, l.jsxs)("div", {
                        className: ea.Hy,
                        children: [
                            b.p5
                                ? (0, l.jsx)("div", { className: ea.lB, children: (0, l.jsx)(ec, { text: e.content }) })
                                : null,
                            (0, l.jsx)(N.E, {
                                code: e.content,
                                lang: e.lang,
                                className: r()(ei.kw, "hljs"),
                                highlightedClassName: el.H,
                            }),
                        ],
                    }),
                },
                t.key,
            ),
    },
    text: {
        react: (e, n, t) =>
            "string" == typeof e.content
                ? (0, l.jsx)("span", { children: e.content }, t.key)
                : (0, l.jsx)("span", { children: n(e.content, t) }, t.key),
    },
    spoiler: {
        react: (e, n, t) =>
            (0, l.jsx)(
                k.Ay,
                {
                    type: k.Ay.Types.TEXT,
                    inline: t.formatInline,
                    renderTextElement: (e, n) =>
                        null == e || e.type !== m.A || n ? e : a.cloneElement(e, { tabIndex: -1 }),
                    children: () => n(e.content, t),
                },
                t.key,
            ),
    },
    soundboard: {
        react: (e, n, t) =>
            (0, l.jsx)(E.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: t.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, n, t) =>
            (0, S.dq)(e.id)
                ? (0, l.jsxs)(
                      f.A,
                      {
                          role: "link",
                          onClick: function () {
                              (0, M.i)(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              n(e.mainContent, t),
                              null != e.itemContent ? (0, l.jsx)(x.A, {}) : null,
                              null != e.itemContent ? n(e.itemContent, t) : null,
                          ],
                      },
                      t.key,
                  )
                : null,
    },
    timestamp: { react: (e, n, t) => (0, l.jsx)(L.A, { node: e }, t.key) },
    list: {
        react: (e, n, t) => {
            let a = e.ordered ? "ol" : "ul",
                i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, s.reactElement)(a, `${t.key}`, {
                start: e.start,
                className: t.formatInline ? ea.tZ : null,
                style: { "--totalCharacters": i, "--olCounterStart": null == e.start ? void 0 : e.start - 1 },
                children: e.items.map((e, a) => {
                    let i = (0, s.reactElement)("span", `${t.key}-${a}-innerSpan`, { children: n(e, t) });
                    return (0, s.reactElement)("li", `${t.key}-${a}` + a, {
                        children: [i, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, n, t) => {
            let a = (0, s.reactElement)("span", `${t.key}-innerSpan`, { children: n(e.content, t) });
            return (0, s.reactElement)("h" + e.level, t?.key != null ? `${t.key}` : null, {
                children: [a, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: t.formatInline ? ea.tZ : null,
            });
        },
    },
    guild: {
        react: (e, n, t) => {
            let a = v.A.getGuild(e.guildId);
            return (0, l.jsx)(g.A, { guild: a, children: (0, S.tj)(e, n, t) }, t.key);
        },
    },
    channel: { react: (e, n, t) => (0, l.jsx)(p.A, { iconType: e.iconType, children: (0, S.tj)(e, n, t) }, t.key) },
    message: { react: (e, n, t) => (0, l.jsx)(C, {}, t.key) },
    subtext: {
        react: (e, n, t) => {
            let l = (0, s.reactElement)("span", `${t.key}-innerSpan`, { children: n(e.content, t) });
            return (0, s.reactElement)("small", t?.key != null ? `${t.key}` : null, {
                children: l,
                className: t.formatInline ? ea.tZ : null,
            });
        },
    },
    silentPrefix: {
        react: (e, n, t) =>
            "string" == typeof e.content
                ? (0, l.jsx)("span", { children: e.content }, t.key)
                : (0, l.jsx)("span", { children: n(e.content, t) }, t.key),
    },
};
function ed(e) {
    let { shouldStopPropagation: n } = e;
    function i(e) {
        return !0 === n ? eo(e) : e;
    }
    return {
        ...eu,
        link: (0, et.A)(e),
        devLink: {
            match: (e, n) => (n.allowLinks && n.allowDevLinks ? Y.exec(e) : null),
            parse: (e, n) => ({ target: e, type: "devLink" }),
            react: (e, n, t) => {
                let i = e.target[0];
                return (0, B.h4)(i)
                    ? (0, l.jsxs)(
                          a.Fragment,
                          { children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(K.default, { url: i }, i)] },
                          t.key,
                      )
                    : (0, W.W0)(i)
                      ? (0, l.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    (0, l.jsx)("span", { children: i }),
                                    (0, l.jsx)(F.ExperimentEmbed, { url: i }),
                                ],
                            },
                            t.key,
                        )
                      : (0, X.i)(i)
                        ? (0, l.jsx)(
                              a.Fragment,
                              {
                                  children: (0, l.jsxs)(a.Suspense, {
                                      fallback: null,
                                      children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(Z, { url: i })],
                                  }),
                              },
                              t.key,
                          )
                        : (0, z.my)(i)
                          ? (0, l.jsx)(
                                a.Fragment,
                                {
                                    children: (0, l.jsxs)(a.Suspense, {
                                        fallback: null,
                                        children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(q, { url: i })],
                                    }),
                                },
                                t.key,
                            )
                          : (0, l.jsx)("span", { children: i }, t.key);
            },
            order: 6,
        },
        emoji: i(
            (function (e) {
                let { emojiTooltipPosition: n = "top", enableEmojiClick: t = !0, emojiFocusable: a = !0 } = e;
                return {
                    react(e, i, r) {
                        let { key: s, channelId: o, messageId: c } = r;
                        return e.src
                            ? (0, l.jsx)(
                                  I.H,
                                  {
                                      node: e,
                                      tooltipPosition: n,
                                      enableClick: t,
                                      focusable: a,
                                      channelId: o,
                                      messageId: c,
                                  },
                                  s,
                              )
                            : (0, l.jsx)("span", { children: e.surrogate }, s);
                    },
                };
            })(e),
        ),
        customEmoji: i(
            (function (e) {
                let { emojiTooltipPosition: n = "top", enableEmojiClick: t = !0, emojiFocusable: a = !0 } = e;
                return {
                    react(e, i, r) {
                        let { key: s, guildId: o, channelId: c, messageId: u } = r,
                            d = h.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                        if (null != d) {
                            let n = d.require_colons;
                            e = { ...e, name: n ? `:${d.name}:` : d.name };
                        }
                        return (0, l.jsx)(
                            I.X,
                            { node: e, tooltipPosition: n, enableClick: t, focusable: a, channelId: c, messageId: u },
                            s,
                        );
                    },
                };
            })(e),
        ),
        channelMention: (0, H.A)(e),
        commandMention: (0, $.Ay)(e),
        attachmentLink: {
            react(n, a, i) {
                let s = i.noStyleAndInteraction
                        ? void 0
                        : async (t) => {
                              let l = await D.AN(n.attachmentUrl);
                              (e.shouldStopPropagation && t?.stopPropagation(),
                                  w.A.trackLinkClicked(l),
                                  e.shouldCloseDefaultModals && (0, T.closeAllModals)(),
                                  (0, P.A)(l));
                          },
                    o = i.noStyleAndInteraction
                        ? U.tEg
                        : (e) => {
                              (0, O.L3)(e, async () => {
                                  let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                                  return (t) =>
                                      (0, l.jsx)(e, {
                                          ...t,
                                          attachmentUrl: n.attachmentUrl,
                                          attachmentName: n.attachmentName,
                                      });
                              });
                          };
                return (0, l.jsxs)(
                    f.A,
                    {
                        role: "link",
                        href: n.attachmentUrl,
                        onClick: s,
                        onContextMenu: o,
                        className: "attachmentLink",
                        children: [
                            (0, l.jsx)(_.P, { size: "xs", className: r()(G.Kk, R.K), color: "currentColor" }),
                            (0, S.tj)(n, a, i),
                        ],
                    },
                    i.key,
                );
            },
        },
        soundboard: i(eu.soundboard),
        gameMention: {
            react(e, n, t) {
                let { gameId: a } = e;
                return (0, l.jsx)(Q.A, { gameId: a, authorId: t.authorId }, t.key);
            },
        },
    };
}
