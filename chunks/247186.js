t.d(n, { r3: () => et, Ay: () => em, xS: () => ec });
var l = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
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
    A = t(332173),
    y = t(37632),
    x = t(534890),
    E = t(375708),
    j = t(879386);
let I = function () {
    return (0, l.jsx)(x.ChatIcon, {
        size: "md",
        color: "currentColor",
        className: j.K,
        "aria-label": E.intl.string(E.t.BAB0yK),
    });
};
var C = t(112107),
    k = t(930101),
    v = t(302031),
    N = t(586172),
    S = t(71393),
    b = t(957565),
    T = t(143145),
    L = t(392605),
    M = t(785562),
    _ = t(192308),
    P = t(588975),
    R = t(442433),
    O = t(975807),
    w = t(235393),
    U = t(679164),
    D = t(652215),
    G = t(24686),
    V = t(147190),
    H = t(556300),
    B = t(990474);
t(938796);
var $ = t(380610),
    F = t(435954),
    K = t(721779),
    z = t(333421),
    X = t(100392),
    W = t(950980),
    Y = t(836156);
let q = r.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    Z = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    J = RegExp("^" + K.st.source, K.st.flags);
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
    er = t(279538),
    ea = t(165648),
    ei = t(969490);
let eo = { display: "inline" };
function es(e) {
    return e.stopPropagation();
}
function ec(e) {
    return {
        ...e,
        react: (n, t, r) => (0, l.jsx)("span", { style: eo, onClick: es, children: e.react(n, t, r) }, r.key),
    };
}
function eu(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(s.D, {
        onClick: function () {
            (0, b.C)(
                n,
                () => a(!0),
                () => a(!1),
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
    inlineCode: { react: (e, n, t) => (0, l.jsx)("code", { className: "inline", children: (0, T.t)(e, n, t) }, t.key) },
    codeBlock: {
        react(e, n, r) {
            function a() {
                return (0, l.jsx)("code", { className: i()(ei.kw, "hljs"), children: (0, T.t)(e, n, r) });
            }
            return (0, l.jsx)(
                "pre",
                {
                    children: (0, l.jsxs)("div", {
                        className: ea.Hy,
                        children: [
                            b.p5
                                ? (0, l.jsx)("div", { className: ea.lB, children: (0, l.jsx)(eu, { text: e.content }) })
                                : null,
                            (0, l.jsx)(N.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: i()(ei.kw, "hljs"),
                                highlightedClassName: er.H,
                                children: (0, l.jsx)(h.c2, {
                                    createPromise: () =>
                                        Promise.all([t.e("818449"), t.e("175134")]).then(t.bind(t, 981776)),
                                    webpackId: 981776,
                                    renderFallback: a,
                                    render: (n) => {
                                        if (!(e.lang && n.hasLanguage(e.lang))) return a();
                                        {
                                            let t = n.highlight(e.lang, e.content, !0);
                                            return null == t
                                                ? a()
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
                r.key,
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
                v.Ay,
                {
                    type: v.Ay.Types.TEXT,
                    inline: t.formatInline,
                    renderTextElement: (e, n) =>
                        null == e || e.type !== m.A || n ? e : r.cloneElement(e, { tabIndex: -1 }),
                    children: () => n(e.content, t),
                },
                t.key,
            ),
    },
    soundboard: {
        react: (e, n, t) =>
            (0, l.jsx)(C.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: t.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, n, t) =>
            (0, T.d)(e.id)
                ? (0, l.jsxs)(
                      A.A,
                      {
                          role: "link",
                          onClick: function () {
                              (0, L.i)(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              n(e.mainContent, t),
                              null != e.itemContent ? (0, l.jsx)(y.A, {}) : null,
                              null != e.itemContent ? n(e.itemContent, t) : null,
                          ],
                      },
                      t.key,
                  )
                : null,
    },
    timestamp: { react: (e, n, t) => (0, l.jsx)(M.A, { node: e }, t.key) },
    list: {
        react: (e, n, t) => {
            let r = e.ordered ? "ol" : "ul",
                a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(r, `${t.key}`, {
                start: e.start,
                className: t.formatInline ? ea.tZ : null,
                style: { "--totalCharacters": a, "--olCounterStart": null == e.start ? void 0 : e.start - 1 },
                children: e.items.map((e, r) => {
                    let a = (0, o.reactElement)("span", `${t.key}-${r}-innerSpan`, { children: n(e, t) });
                    return (0, o.reactElement)("li", `${t.key}-${r}` + r, {
                        children: [a, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, n, t) => {
            let r = (0, o.reactElement)("span", `${t.key}-innerSpan`, { children: n(e.content, t) });
            return (0, o.reactElement)("h" + e.level, t?.key != null ? `${t.key}` : null, {
                children: [r, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: t.formatInline ? ea.tZ : null,
            });
        },
    },
    guild: {
        react: (e, n, t) => {
            let r = S.A.getGuild(e.guildId);
            return (0, l.jsx)(f.A, { guild: r, children: (0, T.t)(e, n, t) }, t.key);
        },
    },
    channel: { react: (e, n, t) => (0, l.jsx)(g.A, { iconType: e.iconType, children: (0, T.t)(e, n, t) }, t.key) },
    message: { react: (e, n, t) => (0, l.jsx)(I, {}, t.key) },
    subtext: {
        react: (e, n, t) => {
            let l = (0, o.reactElement)("span", `${t.key}-innerSpan`, { children: n(e.content, t) });
            return (0, o.reactElement)("small", t?.key != null ? `${t.key}` : null, {
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
function em(e) {
    let { shouldStopPropagation: n } = e;
    function a(e) {
        return !0 === n ? ec(e) : e;
    }
    return {
        ...ed,
        link: (0, el.A)(e),
        devLink: {
            match: (e, n) => (n.allowLinks && n.allowDevLinks ? J.exec(e) : null),
            parse: (e, n) => ({ target: e, type: "devLink" }),
            react: (e, n, t) => {
                let a = e.target[0];
                return (0, $.h4)(a)
                    ? (0, l.jsxs)(
                          r.Fragment,
                          { children: [(0, l.jsx)("span", { children: a }), (0, l.jsx)(F.default, { url: a }, a)] },
                          t.key,
                      )
                    : (0, X.W0)(a)
                      ? (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, l.jsx)("span", { children: a }),
                                    (0, l.jsx)(W.ExperimentEmbed, { url: a }),
                                ],
                            },
                            t.key,
                        )
                      : (0, Y.i)(a)
                        ? (0, l.jsx)(
                              r.Fragment,
                              {
                                  children: (0, l.jsxs)(r.Suspense, {
                                      fallback: null,
                                      children: [(0, l.jsx)("span", { children: a }), (0, l.jsx)(q, { url: a })],
                                  }),
                              },
                              t.key,
                          )
                        : (0, z.my)(a)
                          ? (0, l.jsx)(
                                r.Fragment,
                                {
                                    children: (0, l.jsxs)(r.Suspense, {
                                        fallback: null,
                                        children: [(0, l.jsx)("span", { children: a }), (0, l.jsx)(Z, { url: a })],
                                    }),
                                },
                                t.key,
                            )
                          : (0, l.jsx)("span", { children: a }, t.key);
            },
            order: 6,
        },
        emoji: a(
            (function (e) {
                let { emojiTooltipPosition: n = "top", enableEmojiClick: t = !0, emojiFocusable: r = !0 } = e;
                return {
                    react(e, a, i) {
                        let { key: o, channelId: s, messageId: c } = i;
                        return e.src
                            ? (0, l.jsx)(
                                  k.H,
                                  {
                                      node: e,
                                      tooltipPosition: n,
                                      enableClick: t,
                                      focusable: r,
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
        customEmoji: a(
            (function (e) {
                let { emojiTooltipPosition: n = "top", enableEmojiClick: t = !0, emojiFocusable: r = !0 } = e;
                return {
                    react(e, a, i) {
                        let { key: o, guildId: s, channelId: c, messageId: u } = i,
                            d = p.Ay.getDisambiguatedEmojiContext(s).getById(e.emojiId);
                        if (null != d) {
                            let n = d.require_colons;
                            e = { ...e, name: n ? `:${d.name}:` : d.name };
                        }
                        return (0, l.jsx)(
                            k.X,
                            { node: e, tooltipPosition: n, enableClick: t, focusable: r, channelId: c, messageId: u },
                            o,
                        );
                    },
                };
            })(e),
        ),
        channelMention: (0, H.A)(e),
        commandMention: (0, B.Ay)(e),
        attachmentLink: {
            react(n, r, a) {
                let o = a.noStyleAndInteraction
                        ? void 0
                        : async (t) => {
                              let l = await U.AN(n.attachmentUrl);
                              (e.shouldStopPropagation && t?.stopPropagation(),
                                  w.A.trackLinkClicked(l),
                                  e.shouldCloseDefaultModals && (0, _.closeAllModals)(),
                                  (0, O.A)(l));
                          },
                    s = a.noStyleAndInteraction
                        ? D.tEg
                        : (e) => {
                              (0, R.L3)(e, async () => {
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
                    A.A,
                    {
                        role: "link",
                        href: n.attachmentUrl,
                        onClick: o,
                        onContextMenu: s,
                        className: "attachmentLink",
                        children: [
                            (0, l.jsx)(P.P, { size: "xs", className: i()(V.Kk, G.K), color: "currentColor" }),
                            (0, T.t)(n, r, a),
                        ],
                    },
                    a.key,
                );
            },
        },
        soundboard: a(ed.soundboard),
        gameMention: {
            react(e, n, t) {
                let { gameId: r } = e;
                return (0, l.jsx)(ee.A, { gameId: r, authorId: t.authorId }, t.key);
            },
        },
    };
}
