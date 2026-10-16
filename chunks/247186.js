t.d(n, { r3: () => et, Ay: () => em, xS: () => ec });
var l = t(477900),
    a = t(582128),
    r = t(503698),
    i = t.n(r),
    o = t(478676),
    s = t(939249),
    c = t(933832),
    u = t(624479),
    d = t(140735),
    m = t(9578),
    h = t(268218),
    p = t(236285),
    g = t(232042),
    f = t(906754),
    x = t(332173),
    j = t(37632),
    y = t(534890),
    A = t(105292),
    C = t(879386);
let k = function () {
    return (0, l.jsx)(y.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: C.K,
        "aria-label": A.intl.string(A.t.BAB0yK),
    });
};
var I = t(112107),
    E = t(930101),
    N = t(302031),
    v = t(586172),
    b = t(71393),
    S = t(957565),
    L = t(143145),
    M = t(392605),
    T = t(785562),
    _ = t(192308),
    P = t(588975),
    O = t(442433),
    w = t(975807),
    D = t(235393),
    U = t(679164),
    R = t(652215),
    G = t(24686),
    H = t(147190),
    $ = t(556300),
    K = t(990474);
t(938796);
var B = t(380610),
    V = t(435954),
    z = t(721779),
    W = t(333421),
    F = t(100392),
    X = t(950980),
    q = t(836156);
let Y = a.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("60800"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    Z = a.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    J = RegExp("^" + z.st.source, z.st.flags);
var Q = t(569926),
    ee = t(266645);
function en(e) {
    let { gameId: n, authorId: t } = e;
    return ((0, Q.I)(n), (0, l.jsx)(ee.A, { gameId: n, authorId: t }));
}
function et() {
    return { gameMention: { react: (e, n, t) => (0, l.jsx)(en, { gameId: e.gameId, authorId: t.authorId }, t.key) } };
}
var el = t(881140),
    ea = t(279538),
    er = t(165648),
    ei = t(969490);
let eo = { display: "inline" };
function es(e) {
    return e.stopPropagation();
}
function ec(e) {
    return {
        ...e,
        react: (n, t, a) => (0, l.jsx)("span", { style: eo, onClick: es, children: e.react(n, t, a) }, a.key),
    };
}
function eu(e) {
    let { text: n } = e,
        [t, r] = a.useState(!1);
    return (0, l.jsx)(s.D, {
        onClick: function () {
            (0, S.C)(
                n,
                () => r(!0),
                () => r(!1),
            );
        },
        children: t
            ? (0, l.jsx)(c.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(u.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
let ed = {
    blockQuote: {
        react: (e, n, t) =>
            (0, l.jsxs)(
                "div",
                {
                    className: er.h,
                    children: [
                        (0, l.jsx)("div", { className: er.r }),
                        (0, l.jsx)("blockquote", { children: n(e.content, t) }),
                    ],
                },
                t.key,
            ),
    },
    s: { react: (e, n, t) => (0, l.jsx)("s", { children: n(e.content, t) }, t.key) },
    highlight: { react: (e, n, t) => (0, l.jsx)("span", { className: "highlight", children: e.content }, t.key) },
    paragraph: { react: (e, n, t) => (0, l.jsx)("p", { children: n(e.content, t) }, t.key) },
    inlineCode: { react: (e, n, t) => (0, l.jsx)("code", { className: "inline", children: (0, L.t)(e, n, t) }, t.key) },
    codeBlock: {
        react(e, n, a) {
            function r() {
                return (0, l.jsx)("code", { className: i()(ei.kw, "hljs"), children: (0, L.t)(e, n, a) });
            }
            return (0, l.jsx)(
                "pre",
                {
                    children: (0, l.jsxs)("div", {
                        className: er.Hy,
                        children: [
                            S.p5
                                ? (0, l.jsx)("div", { className: er.lB, children: (0, l.jsx)(eu, { text: e.content }) })
                                : null,
                            (0, l.jsx)(v.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: i()(ei.kw, "hljs"),
                                highlightedClassName: ea.H,
                                children: (0, l.jsx)(h.c2, {
                                    createPromise: () =>
                                        Promise.all([t.e("818449"), t.e("175134")]).then(t.bind(t, 752238)),
                                    webpackId: 752238,
                                    renderFallback: r,
                                    render: (n) => {
                                        if (!(e.lang && n.hasLanguage(e.lang))) return r();
                                        {
                                            let t = n.highlight(e.lang, e.content, !0);
                                            return null == t
                                                ? r()
                                                : (0, l.jsx)("code", {
                                                      className: i()(ei.kw, "hljs", t.language),
                                                      dangerouslySetInnerHTML: { __html: t.value },
                                                  });
                                        }
                                    },
                                }),
                            }),
                        ],
                    }),
                },
                a.key,
            );
        },
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
                N.Ay,
                {
                    type: N.Ay.Types.TEXT,
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
            (0, l.jsx)(I.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: t.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, n, t) =>
            (0, L.d)(e.id)
                ? (0, l.jsxs)(
                      x.A,
                      {
                          role: "link",
                          onClick: function () {
                              (0, M.i)(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              n(e.mainContent, t),
                              null != e.itemContent ? (0, l.jsx)(j.A, {}) : null,
                              null != e.itemContent ? n(e.itemContent, t) : null,
                          ],
                      },
                      t.key,
                  )
                : null,
    },
    timestamp: { react: (e, n, t) => (0, l.jsx)(T.A, { node: e }, t.key) },
    list: {
        react: (e, n, t) => {
            let a = e.ordered ? "ol" : "ul",
                r = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(a, `${t.key}`, {
                start: e.start,
                className: t.formatInline ? er.tZ : null,
                style: { "--totalCharacters": r, "--olCounterStart": null == e.start ? void 0 : e.start - 1 },
                children: e.items.map((e, a) => {
                    let r = (0, o.reactElement)("span", `${t.key}-${a}-innerSpan`, { children: n(e, t) });
                    return (0, o.reactElement)("li", `${t.key}-${a}` + a, {
                        children: [r, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, n, t) => {
            let a = (0, o.reactElement)("span", `${t.key}-innerSpan`, { children: n(e.content, t) });
            return (0, o.reactElement)("h" + e.level, t?.key != null ? `${t.key}` : null, {
                children: [a, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: t.formatInline ? er.tZ : null,
            });
        },
    },
    guild: {
        react: (e, n, t) => {
            let a = b.A.getGuild(e.guildId);
            return (0, l.jsx)(f.A, { guild: a, children: (0, L.t)(e, n, t) }, t.key);
        },
    },
    channel: { react: (e, n, t) => (0, l.jsx)(g.A, { iconType: e.iconType, children: (0, L.t)(e, n, t) }, t.key) },
    message: { react: (e, n, t) => (0, l.jsx)(k, {}, t.key) },
    subtext: {
        react: (e, n, t) => {
            let l = (0, o.reactElement)("span", `${t.key}-innerSpan`, { children: n(e.content, t) });
            return (0, o.reactElement)("small", t?.key != null ? `${t.key}` : null, {
                children: l,
                className: t.formatInline ? er.tZ : null,
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
function em(e) {
    let { shouldStopPropagation: n } = e;
    function r(e) {
        return !0 === n ? ec(e) : e;
    }
    return {
        ...ed,
        link: (0, el.A)(e),
        devLink: {
            match: (e, n) => (n.allowLinks && n.allowDevLinks ? J.exec(e) : null),
            parse: (e, n) => ({ target: e, type: "devLink" }),
            react: (e, n, t) => {
                let r = e.target[0];
                return (0, B.h4)(r)
                    ? (0, l.jsxs)(
                          a.Fragment,
                          { children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(V.default, { url: r }, r)] },
                          t.key,
                      )
                    : (0, F.W0)(r)
                      ? (0, l.jsxs)(
                            a.Fragment,
                            {
                                children: [
                                    (0, l.jsx)("span", { children: r }),
                                    (0, l.jsx)(X.ExperimentEmbed, { url: r }),
                                ],
                            },
                            t.key,
                        )
                      : (0, q.i)(r)
                        ? (0, l.jsx)(
                              a.Fragment,
                              {
                                  children: (0, l.jsxs)(a.Suspense, {
                                      fallback: null,
                                      children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(Y, { url: r })],
                                  }),
                              },
                              t.key,
                          )
                        : (0, W.my)(r)
                          ? (0, l.jsx)(
                                a.Fragment,
                                {
                                    children: (0, l.jsxs)(a.Suspense, {
                                        fallback: null,
                                        children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(Z, { url: r })],
                                    }),
                                },
                                t.key,
                            )
                          : (0, l.jsx)("span", { children: r }, t.key);
            },
            order: 6,
        },
        emoji: r(
            (function (e) {
                let { emojiTooltipPosition: n = "top", enableEmojiClick: t = !0, emojiFocusable: a = !0 } = e;
                return {
                    react(e, r, i) {
                        let { key: o, channelId: s, messageId: c } = i;
                        return e.src
                            ? (0, l.jsx)(
                                  E.H,
                                  {
                                      node: e,
                                      tooltipPosition: n,
                                      enableClick: t,
                                      focusable: a,
                                      channelId: s,
                                      messageId: c,
                                  },
                                  o,
                              )
                            : (0, l.jsx)("span", { children: e.surrogate }, o);
                    },
                };
            })(e),
        ),
        customEmoji: r(
            (function (e) {
                let { emojiTooltipPosition: n = "top", enableEmojiClick: t = !0, emojiFocusable: a = !0 } = e;
                return {
                    react(e, r, i) {
                        let { key: o, guildId: s, channelId: c, messageId: u } = i,
                            d = p.Ay.getDisambiguatedEmojiContext(s).getById(e.emojiId);
                        if (null != d) {
                            let n = d.require_colons;
                            e = { ...e, name: n ? `:${d.name}:` : d.name };
                        }
                        return (0, l.jsx)(
                            E.X,
                            { node: e, tooltipPosition: n, enableClick: t, focusable: a, channelId: c, messageId: u },
                            o,
                        );
                    },
                };
            })(e),
        ),
        channelMention: (0, $.A)(e),
        commandMention: (0, K.Ay)(e),
        attachmentLink: {
            react(n, a, r) {
                let o = r.noStyleAndInteraction
                        ? void 0
                        : async (t) => {
                              let l = await U.AN(n.attachmentUrl);
                              (e.shouldStopPropagation && t?.stopPropagation(),
                                  D.A.trackLinkClicked(l),
                                  e.shouldCloseDefaultModals && (0, _.closeAllModals)(),
                                  (0, w.A)(l));
                          },
                    s = r.noStyleAndInteraction
                        ? R.tEg
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
                    x.A,
                    {
                        role: "link",
                        href: n.attachmentUrl,
                        onClick: o,
                        onContextMenu: s,
                        className: "attachmentLink",
                        children: [
                            (0, l.jsx)(P.P, { size: "xs", className: i()(H.Kk, G.K), color: "currentColor" }),
                            (0, L.t)(n, a, r),
                        ],
                    },
                    r.key,
                );
            },
        },
        soundboard: r(ed.soundboard),
        gameMention: {
            react(e, n, t) {
                let { gameId: a } = e;
                return (0, l.jsx)(ee.A, { gameId: a, authorId: t.authorId }, t.key);
            },
        },
    };
}
