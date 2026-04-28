"use strict";
n.d(t, { A: () => ej });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(791332),
    o = n(939249),
    c = n(933832),
    u = n(624479),
    d = n(140735),
    h = n(228366),
    m = n(9578),
    p = n(268218),
    f = n(159273),
    g = n(232042),
    x = n(906754),
    C = n(332173),
    A = n(37632),
    E = n(534890),
    I = n(985018),
    y = n(569417);
let v = function () {
    return (0, l.jsx)(E.o, {
        size: "md",
        color: "currentColor",
        className: y.K,
        "aria-label": I.intl.string(I.t.BAB0yK),
    });
};
var S = n(112107),
    N = n(930101),
    j = n(976860),
    _ = n(302031),
    T = n(157941),
    b = n(696451),
    R = n(317525),
    O = n(71393),
    L = n(957565),
    w = n(365526),
    M = n(785562),
    k = n(192308),
    P = n(588975),
    D = n(442433),
    U = n(975807),
    V = n(235393),
    G = n(202803),
    F = n(652215),
    H = n(238999),
    W = n(995257),
    B = n(556300),
    K = n(990474);
n(938796);
var z = n(380610),
    Z = n(435954),
    q = n(833291),
    J = n(333421),
    Y = n(100392),
    X = n(17928),
    $ = n(691540),
    Q = n(97483),
    ee = n(173936),
    et = n(834730),
    en = n(331322),
    el = n(776078),
    ei = n(821609),
    es = n(495544),
    ea = n(287809),
    er = n(102609),
    eo = n(271478),
    ec = n(386976),
    eu = n(257433),
    ed = n(32523),
    eh = n(688151),
    em = n(919093);
function ep(e) {
    let { url: t } = e,
        n = i.useCallback(() => {
            (0, L.C)(t, () =>
                (0, $.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: Q.Ck.SUCCESS }),
            );
        }, [t]);
    return (0, l.jsx)(o.D, {
        className: em.wp,
        onClick: n,
        children: (0, l.jsx)(ee.q, { size: "sm", color: "currentColor" }),
    });
}
function ef(e) {
    let { url: t } = e,
        n = (0, Y.OL)(t),
        s = (0, Y.Kb)(t),
        { experiments: a, overridesInfo: r } = (0, ed.hI)(),
        { experiments: o, overridesInfo: c } = (0, ec.op)(),
        u = i.useMemo(() => (null == n ? null : null != a[n] ? a[n] : o[n]), [a, o, n]),
        d = i.useMemo(() => {
            if (null == n);
            else if (null != r[n]) return r[n];
            else if (null != c[n]) return c[n];
        }, [r, c, n]),
        h = es.default.getId(),
        m = (0, eu.Fm)(u, h),
        p = i.useMemo(() => (0, Y.GI)(u, m), [m, u]),
        f = (0, X.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == u) return null;
    let g = (0, Y.hp)(u).find((e) => e.value === s),
        x = null != g ? eh.Ps.EXPERIMENT_TREATMENT : eh.Ps.EXPERIMENT,
        C = null != d && null != g && d.variantId === g.value,
        A = (0, l.jsx)(ep, { url: t }),
        E = null;
    return (x === eh.Ps.EXPERIMENT_TREATMENT && null != g
        ? (E = (0, l.jsx)(et.E, { variant: "text-xs/normal", color: "text-muted", children: g.label }))
        : null != m &&
          (E = (0, l.jsxs)(et.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", p] })),
    f)
        ? (0, l.jsxs)("div", {
              className: em.zr,
              children: [
                  (0, l.jsx)("div", {
                      children: (0, l.jsx)("div", {
                          className: em.wx,
                          children: (0, l.jsxs)(en.B, {
                              direction: "horizontal",
                              justify: "space-between",
                              children: [
                                  (0, l.jsxs)(en.B, {
                                      direction: "horizontal",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(el.g, { size: "lg" }),
                                          (0, l.jsxs)(en.B, {
                                              direction: "vertical",
                                              gap: 0,
                                              children: [
                                                  (0, l.jsx)(et.E, { variant: "text-md/semibold", children: u.title }),
                                                  E,
                                              ],
                                          }),
                                      ],
                                  }),
                                  A,
                              ],
                          }),
                      }),
                  }),
                  null != g
                      ? (0, l.jsx)(ei.$, {
                            fullWidth: !0,
                            variant: C ? "critical-primary" : "primary",
                            text: C ? `Clear Treatment ${g.value}` : `Apply Treatment ${g.value}`,
                            onClick: () => {
                                null != g && (C ? (0, er.t$)(u.system, n, null) : (0, er.t$)(u.system, n, g.value));
                            },
                        })
                      : (0, l.jsx)("div", {
                            className: em.uh,
                            children: (0, l.jsx)(eo.g, { experiment: u, experimentId: n, overrideInfo: d }),
                        }),
              ],
          })
        : null;
}
var eg = n(836156);
let ex = i.lazy(() =>
        Promise.all([n.e("45609"), n.e("61764"), n.e("18126"), n.e("67696")])
            .then(n.bind(n, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    eC = i.lazy(() =>
        Promise.all([n.e("49491"), n.e("86456"), n.e("78078")])
            .then(n.bind(n, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    eA = RegExp("^" + q.st.source, q.st.flags);
var eE = n(881140),
    eI = n(746080),
    ey = n(992595),
    ev = n(429128);
function eS(e) {
    let { text: t } = e,
        [n, s] = i.useState(!1);
    return (0, l.jsx)(o.D, {
        onClick: () => {
            (0, L.C)(
                t,
                () => s(!0),
                () => s(!1),
            );
        },
        children: n
            ? (0, l.jsx)(c.A, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(u.T, { size: "xs", color: "currentColor" }),
    });
}
let eN = {
    blockQuote: {
        react: (e, t, n) =>
            (0, l.jsxs)(
                "div",
                {
                    className: ey.h,
                    children: [
                        (0, l.jsx)("div", { className: ey.r }),
                        (0, l.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, l.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, l.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, l.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, l.jsx)("code", { className: "inline", children: (0, w.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, i) {
            let s = () => (0, l.jsx)("code", { className: a()(ev.kw, "hljs"), children: (0, w.t)(e, t, i) });
            return (0, l.jsx)(
                "pre",
                {
                    children: (0, l.jsxs)("div", {
                        className: ey.Hy,
                        children: [
                            L.p5
                                ? (0, l.jsx)("div", { className: ey.lB, children: (0, l.jsx)(eS, { text: e.content }) })
                                : null,
                            (0, l.jsx)(T.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: a()(ev.kw, "hljs"),
                                children: (0, l.jsx)(p.c2, {
                                    createPromise: () =>
                                        Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 981776)),
                                    webpackId: 981776,
                                    renderFallback: s,
                                    render: (t) => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n
                                                ? s()
                                                : (0, l.jsx)("code", {
                                                      className: a()(ev.kw, "hljs", n.language),
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
                _.Ay,
                {
                    type: _.Ay.Types.TEXT,
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
            (0, w.d)(e.id)
                ? (0, l.jsxs)(
                      C.A,
                      {
                          role: "link",
                          onClick: () => {
                              !(function (e, t, n) {
                                  let l = O.A.getGuild(e);
                                  if (null == e || null == l) return;
                                  let i = (t) => {
                                      l.features.has(F.GuildFeatures.COMMUNITY) && (0, j.pX)(F.BVt.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case "home":
                                      case "guide":
                                          i(eI.VV.GUILD_HOME);
                                          break;
                                      case "browse":
                                          i(eI.VV.CHANNEL_BROWSER);
                                          break;
                                      case "customize":
                                          i(eI.VV.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case "linked-roles":
                                          if (null != n) {
                                              let t = b.Ay.getSelfMember(e);
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
                                              h.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
                                  }
                              })(e.guildId, e.id, e.itemId);
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
    timestamp: { react: (e, t, n) => (0, l.jsx)(M.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, r.reactElement)(i, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? ey.tZ : null,
                style: { "--totalCharacters": s },
                children: e.items.map((e, i) => {
                    let s = (0, r.reactElement)("span", `${n.key}-${i}-innerSpan`, { children: t(e, n) });
                    return (0, r.reactElement)("li", `${n.key}-${i}` + i, {
                        children: [s, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, r.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, r.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [i, (0, l.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? ey.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = O.A.getGuild(e.guildId);
            return (0, l.jsx)(x.A, { guild: i, children: (0, w.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, l.jsx)(g.A, { iconType: e.iconType, children: (0, w.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, l.jsx)(v, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let l = (0, r.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, r.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: l,
                className: n.formatInline ? ey.tZ : null,
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
function ej(e) {
    return {
        ...eN,
        link: (0, eE.A)(e),
        devLink: {
            match: (e, t) => (t.allowLinks && t.allowDevLinks ? eA.exec(e) : null),
            parse: (e, t) => ({ target: e, type: "devLink" }),
            react: (e, t, n) => {
                let s = e.target[0];
                return (0, z.h4)(s)
                    ? (0, l.jsxs)(
                          i.Fragment,
                          { children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(Z.A, { url: s }, s)] },
                          n.key,
                      )
                    : (0, Y.W0)(s)
                      ? (0, l.jsxs)(
                            i.Fragment,
                            { children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(ef, { url: s })] },
                            n.key,
                        )
                      : (0, eg.i)(s)
                        ? (0, l.jsx)(
                              i.Fragment,
                              {
                                  children: (0, l.jsxs)(i.Suspense, {
                                      fallback: null,
                                      children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(ex, { url: s })],
                                  }),
                              },
                              n.key,
                          )
                        : (0, J.my)(s)
                          ? (0, l.jsx)(
                                i.Fragment,
                                {
                                    children: (0, l.jsxs)(i.Suspense, {
                                        fallback: null,
                                        children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(eC, { url: s })],
                                    }),
                                },
                                n.key,
                            )
                          : (0, l.jsx)("span", { children: s }, n.key);
            },
            order: 6,
        },
        emoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, s) {
                    let { key: a, channelId: r, messageId: o } = s;
                    return e.src
                        ? (0, l.jsx)(
                              N.H,
                              { node: e, tooltipPosition: t, enableClick: n, channelId: r, messageId: o },
                              a,
                          )
                        : (0, l.jsx)("span", { children: e.surrogate }, a);
                },
            };
        })(e),
        customEmoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, s) {
                    let { key: a, guildId: r, channelId: o, messageId: c } = s,
                        u = f.Ay.getDisambiguatedEmojiContext(r).getById(e.emojiId);
                    if (null != u) {
                        let t = u.require_colons;
                        e = { ...e, name: t ? `:${u.name}:` : u.name };
                    }
                    return (0, l.jsx)(
                        N.X,
                        { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: c },
                        a,
                    );
                },
            };
        })(e),
        channelMention: (0, B.A)(e),
        commandMention: (0, K.Ay)(e),
        attachmentLink: {
            react(t, i, s) {
                let r = s.noStyleAndInteraction
                        ? void 0
                        : async (n) => {
                              let l = await (0, G.AN)(t.attachmentUrl);
                              e.shouldStopPropagation && n?.stopPropagation(),
                                  V.A.trackLinkClicked(l),
                                  e.shouldCloseDefaultModals && (0, k.closeAllModals)(),
                                  (0, U.A)(l);
                          },
                    o = s.noStyleAndInteraction
                        ? F.tEg
                        : (e) => {
                              (0, D.L3)(e, async () => {
                                  let { default: e } = await n.e("62529").then(n.bind(n, 740024));
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          attachmentUrl: t.attachmentUrl,
                                          attachmentName: t.attachmentName,
                                      });
                              });
                          };
                return (0, l.jsxs)(
                    C.A,
                    {
                        role: "link",
                        href: t.attachmentUrl,
                        onClick: r,
                        onContextMenu: o,
                        className: "attachmentLink",
                        children: [
                            (0, l.jsx)(P.P, { size: "xs", className: a()(W.Kk, H.K), color: "currentColor" }),
                            (0, w.t)(t, i, s),
                        ],
                    },
                    s.key,
                );
            },
        },
    };
}
