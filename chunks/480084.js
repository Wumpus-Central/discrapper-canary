"use strict";
n.d(t, { A: () => ev, x: () => eL });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(791332),
    o = n(939249),
    d = n(933832),
    c = n(624479),
    u = n(140735),
    _ = n(228366),
    E = n(9578),
    A = n(268218),
    h = n(159273),
    I = n(232042),
    f = n(906754),
    p = n(332173),
    T = n(37632),
    m = n(534890),
    g = n(375708),
    S = n(569417);
let N = function () {
    return (0, i.jsx)(m.o, {
        size: "md",
        color: "currentColor",
        className: S.K,
        "aria-label": g.intl.string(g.t.BAB0yK),
    });
};
var C = n(112107),
    R = n(930101),
    O = n(976860),
    L = n(302031),
    D = n(157941),
    y = n(696451),
    v = n(317525),
    b = n(71393),
    M = n(957565),
    P = n(143145),
    U = n(785562),
    w = n(192308),
    G = n(588975),
    x = n(442433),
    k = n(975807),
    F = n(235393),
    V = n(202803),
    B = n(652215),
    H = n(238999),
    j = n(995257),
    W = n(556300),
    Y = n(990474);
n(938796);
var K = n(380610),
    $ = n(435954),
    z = n(833291),
    q = n(333421),
    Z = n(100392),
    X = n(17928),
    Q = n(691540),
    J = n(97483),
    ee = n(173936),
    et = n(834730),
    en = n(331322),
    ei = n(776078),
    er = n(821609),
    ea = n(280450),
    es = n(287809),
    el = n(102609),
    eo = n(271478),
    ed = n(386976),
    ec = n(257433),
    eu = n(32523),
    e_ = n(688151),
    eE = n(919093);
function eA(e) {
    let { url: t } = e,
        n = r.useCallback(() => {
            (0, M.C)(t, () =>
                (0, Q.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: J.Ck.SUCCESS }),
            );
        }, [t]);
    return (0, i.jsx)(o.D, {
        className: eE.wp,
        onClick: n,
        children: (0, i.jsx)(ee.q, { size: "sm", color: "currentColor" }),
    });
}
function eh(e) {
    let { url: t } = e,
        n = (0, Z.OL)(t),
        a = (0, Z.Kb)(t),
        { experiments: s, overridesInfo: l } = (0, eu.hI)(),
        { experiments: o, overridesInfo: d } = (0, ed.op)(),
        c = r.useMemo(() => (null == n ? null : null != s[n] ? s[n] : o[n]), [s, o, n]),
        u = r.useMemo(() => {
            if (null == n);
            else if (null != l[n]) return l[n];
            else if (null != d[n]) return d[n];
        }, [l, d, n]),
        _ = ea.default.getId(),
        E = (0, ec.Fm)(c, _),
        A = r.useMemo(() => (0, Z.GI)(c, E), [E, c]),
        h = (0, X.bG)([es.default], () => {
            let e = es.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == c) return null;
    let I = (0, Z.hp)(c).find((e) => e.value === a),
        f = null != I ? e_.Ps.EXPERIMENT_TREATMENT : e_.Ps.EXPERIMENT,
        p = null != u && null != I && u.variantId === I.value,
        T = (0, i.jsx)(eA, { url: t }),
        m = null;
    return (f === e_.Ps.EXPERIMENT_TREATMENT && null != I
        ? (m = (0, i.jsx)(et.E, { variant: "text-xs/normal", color: "text-muted", children: I.label }))
        : null != E &&
          (m = (0, i.jsxs)(et.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", A] })),
    h)
        ? (0, i.jsxs)("div", {
              className: eE.zr,
              children: [
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("div", {
                          className: eE.wx,
                          children: (0, i.jsxs)(en.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, i.jsxs)(en.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, i.jsx)(ei.g, { size: "lg" }),
                                          (0, i.jsxs)(en.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, i.jsx)(et.E, { variant: "text-md/semibold", children: c.title }),
                                                  m,
                                              ],
                                          }),
                                      ],
                                  }),
                                  T,
                              ],
                          }),
                      }),
                  }),
                  null != I
                      ? (0, i.jsx)(er.$, {
                            fullWidth: !0,
                            variant: p ? "critical-primary" : "primary",
                            text: p ? `Clear Treatment ${I.value}` : `Apply Treatment ${I.value}`,
                            onClick: () => {
                                null != I && (p ? (0, el.t$)(c.system, n, null) : (0, el.t$)(c.system, n, I.value));
                            },
                        })
                      : (0, i.jsx)("div", {
                            className: eE.uh,
                            children: (0, i.jsx)(eo.g, { experiment: c, experimentId: n, overrideInfo: u }),
                        }),
              ],
          })
        : null;
}
var eI = n(836156);
let ef = r.lazy(() =>
        Promise.all([n.e("45609"), n.e("61764"), n.e("18126"), n.e("67696")])
            .then(n.bind(n, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    ep = r.lazy(() =>
        Promise.all([n.e("49491"), n.e("86456"), n.e("78078")])
            .then(n.bind(n, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    eT = RegExp("^" + z.st.source, z.st.flags);
var em = n(266645),
    eg = n(881140),
    eS = n(746080),
    eN = n(992595),
    eC = n(429128);
let eR = { display: "inline" };
function eO(e) {
    return e.stopPropagation();
}
function eL(e) {
    return {
        ...e,
        react: (t, n, r) => (0, i.jsx)("span", { style: eR, onClick: eO, children: e.react(t, n, r) }, r.key),
    };
}
function eD(e) {
    let { text: t } = e,
        [n, a] = r.useState(!1);
    return (0, i.jsx)(o.D, {
        onClick: function () {
            (0, M.C)(
                t,
                () => a(!0),
                () => a(!1),
            );
        },
        children: n
            ? (0, i.jsx)(d.A, { size: "xs", color: "currentColor" })
            : (0, i.jsx)(c.T, { size: "xs", color: "currentColor" }),
    });
}
let ey = {
    blockQuote: {
        react: (e, t, n) =>
            (0, i.jsxs)(
                "div",
                {
                    className: eN.h,
                    children: [
                        (0, i.jsx)("div", { className: eN.r }),
                        (0, i.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, i.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, i.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, i.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, i.jsx)("code", { className: "inline", children: (0, P.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, r) {
            function a() {
                return (0, i.jsx)("code", { className: s()(eC.kw, "hljs"), children: (0, P.t)(e, t, r) });
            }
            return (0, i.jsx)(
                "pre",
                {
                    children: (0, i.jsxs)("div", {
                        className: eN.Hy,
                        children: [
                            M.p5
                                ? (0, i.jsx)("div", { className: eN.lB, children: (0, i.jsx)(eD, { text: e.content }) })
                                : null,
                            (0, i.jsx)(D.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: s()(eC.kw, "hljs"),
                                children: (0, i.jsx)(A.c2, {
                                    createPromise: () =>
                                        Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                                    webpackId: 981776,
                                    renderFallback: a,
                                    render: (t) => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n
                                                ? a()
                                                : (0, i.jsx)("code", {
                                                      className: s()(eC.kw, "hljs", n.language),
                                                      dangerouslySetInnerHTML: { __html: n.value },
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
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, i.jsx)("span", { children: e.content }, n.key)
                : (0, i.jsx)("span", { children: t(e.content, n) }, n.key),
    },
    spoiler: {
        react: (e, t, n) =>
            (0, i.jsx)(
                L.Ay,
                {
                    type: L.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== E.A || t ? e : r.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, i.jsx)(C.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, P.d)(e.id)
                ? (0, i.jsxs)(
                      p.A,
                      {
                          role: "link",
                          onClick: function () {
                              !(function (e, t, n) {
                                  let i = b.A.getGuild(e);
                                  if (null == e || null == i) return;
                                  let r = (t) => {
                                      i.features.has(B.GuildFeatures.COMMUNITY) && (0, O.pX)(B.BVt.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case "home":
                                      case "guide":
                                          r(eS.VV.GUILD_HOME);
                                          break;
                                      case "browse":
                                          r(eS.VV.CHANNEL_BROWSER);
                                          break;
                                      case "customize":
                                          r(eS.VV.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case "linked-roles":
                                          if (null != n) {
                                              let t = y.Ay.getSelfMember(e);
                                              if (null == t) return;
                                              let i = v.A.getRole(e, n);
                                              null == i || t.roles.includes(i.id)
                                                  ? _.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                    })
                                                  : _.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                        role: i,
                                                    });
                                          } else
                                              _.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, i.jsx)(T.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null,
    },
    timestamp: { react: (e, t, n) => (0, i.jsx)(U.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? "ol" : "ul",
                a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, l.reactElement)(r, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? eN.tZ : null,
                style: { "--totalCharacters": a },
                children: e.items.map((e, r) => {
                    let a = (0, l.reactElement)("span", `${n.key}-${r}-innerSpan`, { children: t(e, n) });
                    return (0, l.reactElement)("li", `${n.key}-${r}` + r, {
                        children: [a, (0, i.jsx)(u.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let r = (0, l.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, l.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [r, (0, i.jsx)(u.A, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? eN.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let r = b.A.getGuild(e.guildId);
            return (0, i.jsx)(f.A, { guild: r, children: (0, P.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, i.jsx)(I.A, { iconType: e.iconType, children: (0, P.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, i.jsx)(N, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let i = (0, l.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, l.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: i,
                className: n.formatInline ? eN.tZ : null,
            });
        },
    },
    silentPrefix: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, i.jsx)("span", { children: e.content }, n.key)
                : (0, i.jsx)("span", { children: t(e.content, n) }, n.key),
    },
};
function ev(e) {
    let { shouldStopPropagation: t } = e;
    function a(e) {
        return !0 === t ? eL(e) : e;
    }
    return {
        ...ey,
        link: (0, eg.A)(e),
        devLink: {
            match: (e, t) => (t.allowLinks && t.allowDevLinks ? eT.exec(e) : null),
            parse: (e, t) => ({ target: e, type: "devLink" }),
            react: (e, t, n) => {
                let a = e.target[0];
                return (0, K.h4)(a)
                    ? (0, i.jsxs)(
                          r.Fragment,
                          { children: [(0, i.jsx)("span", { children: a }), (0, i.jsx)($.A, { url: a }, a)] },
                          n.key,
                      )
                    : (0, Z.W0)(a)
                      ? (0, i.jsxs)(
                            r.Fragment,
                            { children: [(0, i.jsx)("span", { children: a }), (0, i.jsx)(eh, { url: a })] },
                            n.key,
                        )
                      : (0, eI.i)(a)
                        ? (0, i.jsx)(
                              r.Fragment,
                              {
                                  children: (0, i.jsxs)(r.Suspense, {
                                      fallback: null,
                                      children: [(0, i.jsx)("span", { children: a }), (0, i.jsx)(ef, { url: a })],
                                  }),
                              },
                              n.key,
                          )
                        : (0, q.my)(a)
                          ? (0, i.jsx)(
                                r.Fragment,
                                {
                                    children: (0, i.jsxs)(r.Suspense, {
                                        fallback: null,
                                        children: [(0, i.jsx)("span", { children: a }), (0, i.jsx)(ep, { url: a })],
                                    }),
                                },
                                n.key,
                            )
                          : (0, i.jsx)("span", { children: a }, n.key);
            },
            order: 6,
        },
        emoji: a(
            (function (e) {
                let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
                return {
                    react(e, r, a) {
                        let { key: s, channelId: l, messageId: o } = a;
                        return e.src
                            ? (0, i.jsx)(
                                  R.H,
                                  { node: e, tooltipPosition: t, enableClick: n, channelId: l, messageId: o },
                                  s,
                              )
                            : (0, i.jsx)("span", { children: e.surrogate }, s);
                    },
                };
            })(e),
        ),
        customEmoji: a(
            (function (e) {
                let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
                return {
                    react(e, r, a) {
                        let { key: s, guildId: l, channelId: o, messageId: d } = a,
                            c = h.Ay.getDisambiguatedEmojiContext(l).getById(e.emojiId);
                        if (null != c) {
                            let t = c.require_colons;
                            e = { ...e, name: t ? `:${c.name}:` : c.name };
                        }
                        return (0, i.jsx)(
                            R.X,
                            { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: d },
                            s,
                        );
                    },
                };
            })(e),
        ),
        channelMention: (0, W.A)(e),
        commandMention: (0, Y.Ay)(e),
        attachmentLink: {
            react(t, r, a) {
                let l = a.noStyleAndInteraction
                        ? void 0
                        : async (n) => {
                              let i = await (0, V.AN)(t.attachmentUrl);
                              e.shouldStopPropagation && n?.stopPropagation(),
                                  F.A.trackLinkClicked(i),
                                  e.shouldCloseDefaultModals && (0, w.closeAllModals)(),
                                  (0, k.A)(i);
                          },
                    o = a.noStyleAndInteraction
                        ? B.tEg
                        : (e) => {
                              (0, x.L3)(e, async () => {
                                  let { default: e } = await n.e("62529").then(n.bind(n, 740024));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          attachmentUrl: t.attachmentUrl,
                                          attachmentName: t.attachmentName,
                                      });
                              });
                          };
                return (0, i.jsxs)(
                    p.A,
                    {
                        role: "link",
                        href: t.attachmentUrl,
                        onClick: l,
                        onContextMenu: o,
                        className: "attachmentLink",
                        children: [
                            (0, i.jsx)(G.P, { size: "xs", className: s()(j.Kk, H.K), color: "currentColor" }),
                            (0, P.t)(t, r, a),
                        ],
                    },
                    a.key,
                );
            },
        },
        soundboard: a(ey.soundboard),
        gameMention: {
            react(e, t, n) {
                let { gameId: r, channelId: a, gameName: s, gameIcon: l } = e;
                return (0, i.jsx)(
                    em.A,
                    { gameId: r, channelId: a, authorId: n.authorId, gameName: s, gameIcon: l },
                    n.key,
                );
            },
        },
    };
}
