"use strict";
n.d(t, { A: () => eO });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(791332),
    l = n(939249),
    d = n(933832),
    _ = n(624479),
    u = n(140735),
    c = n(228366),
    E = n(9578),
    h = n(268218),
    m = n(159273),
    f = n(232042),
    g = n(906754),
    p = n(332173),
    A = n(37632),
    I = n(534890),
    T = n(985018),
    S = n(569417);
let N = function () {
    return (0, i.jsx)(I.o, {
        size: "md",
        color: "currentColor",
        className: S.K,
        "aria-label": T.intl.string(T.t.BAB0yK),
    });
};
var C = n(112107),
    R = n(930101),
    O = n(976860),
    y = n(302031),
    v = n(157941),
    D = n(696451),
    L = n(317525),
    b = n(71393),
    w = n(957565),
    P = n(365526),
    k = n(785562),
    M = n(192308),
    U = n(588975),
    x = n(442433),
    G = n(975807),
    V = n(235393),
    F = n(202803),
    B = n(652215),
    H = n(238999),
    j = n(995257),
    W = n(556300),
    Y = n(990474);
n(938796);
var K = n(380610),
    z = n(435954),
    $ = n(833291),
    q = n(333421),
    X = n(100392),
    Z = n(17928),
    Q = n(691540),
    J = n(97483),
    ee = n(173936),
    et = n(834730),
    en = n(331322),
    ei = n(776078),
    er = n(821609),
    es = n(495544),
    ea = n(287809),
    eo = n(102609),
    el = n(271478),
    ed = n(386976),
    e_ = n(257433),
    eu = n(32523),
    ec = n(688151),
    eE = n(919093);
function eh(e) {
    let { url: t } = e,
        n = r.useCallback(() => {
            (0, w.C)(t, () =>
                (0, Q.P0)({ id: "experiment-link-copied", message: "Copied experiment link", type: J.Ck.SUCCESS }),
            );
        }, [t]);
    return (0, i.jsx)(l.D, {
        className: eE.wp,
        onClick: n,
        children: (0, i.jsx)(ee.q, { size: "sm", color: "currentColor" }),
    });
}
function em(e) {
    let { url: t } = e,
        n = (0, X.OL)(t),
        s = (0, X.Kb)(t),
        { experiments: a, overridesInfo: o } = (0, eu.hI)(),
        { experiments: l, overridesInfo: d } = (0, ed.op)(),
        _ = r.useMemo(() => (null == n ? null : null != a[n] ? a[n] : l[n]), [a, l, n]),
        u = r.useMemo(() => {
            if (null == n);
            else if (null != o[n]) return o[n];
            else if (null != d[n]) return d[n];
        }, [o, d, n]),
        c = es.default.getId(),
        E = (0, e_.Fm)(_, c),
        h = r.useMemo(() => (0, X.GI)(_, E), [E, _]),
        m = (0, Z.bG)([ea.default], () => {
            let e = ea.default.getCurrentUser();
            return e?.isStaff() || e?.isStaffPersonal();
        });
    if (null == n || null == _) return null;
    let f = (0, X.hp)(_).find((e) => e.value === s),
        g = null != f ? ec.Ps.EXPERIMENT_TREATMENT : ec.Ps.EXPERIMENT,
        p = null != u && null != f && u.variantId === f.value,
        A = (0, i.jsx)(eh, { url: t }),
        I = null;
    return (g === ec.Ps.EXPERIMENT_TREATMENT && null != f
        ? (I = (0, i.jsx)(et.E, { variant: "text-xs/normal", color: "text-muted", children: f.label }))
        : null != E &&
          (I = (0, i.jsxs)(et.E, { variant: "text-xs/normal", color: "text-muted", children: ["Server Config: ", h] })),
    m)
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
                                                  (0, i.jsx)(et.E, { variant: "text-md/semibold", children: _.title }),
                                                  I,
                                              ],
                                          }),
                                      ],
                                  }),
                                  A,
                              ],
                          }),
                      }),
                  }),
                  null != f
                      ? (0, i.jsx)(er.$, {
                            fullWidth: !0,
                            variant: p ? "critical-primary" : "primary",
                            text: p ? `Clear Treatment ${f.value}` : `Apply Treatment ${f.value}`,
                            onClick: () => {
                                null != f && (p ? (0, eo.t$)(_.system, n, null) : (0, eo.t$)(_.system, n, f.value));
                            },
                        })
                      : (0, i.jsx)("div", {
                            className: eE.uh,
                            children: (0, i.jsx)(el.g, { experiment: _, experimentId: n, overrideInfo: u }),
                        }),
              ],
          })
        : null;
}
var ef = n(836156);
let eg = r.lazy(() =>
        n
            .e("67696")
            .then(n.bind(n, 881267))
            .then((e) => ({ default: e.PlaygroundEmbed })),
    ),
    ep = r.lazy(() =>
        n
            .e("78078")
            .then(n.bind(n, 909261))
            .then((e) => ({ default: e.DevToolsLinkEmbed })),
    ),
    eA = RegExp("^" + $.st.source, $.st.flags);
var eI = n(881140),
    eT = n(746080),
    eS = n(992595),
    eN = n(429128);
function eC(e) {
    let { text: t } = e,
        [n, s] = r.useState(!1);
    return (0, i.jsx)(l.D, {
        onClick: () => {
            (0, w.C)(
                t,
                () => s(!0),
                () => s(!1),
            );
        },
        children: n
            ? (0, i.jsx)(d.A, { size: "xs", color: "currentColor" })
            : (0, i.jsx)(_.T, { size: "xs", color: "currentColor" }),
    });
}
let eR = {
    blockQuote: {
        react: (e, t, n) =>
            (0, i.jsxs)(
                "div",
                {
                    className: eS.h,
                    children: [
                        (0, i.jsx)("div", { className: eS.r }),
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
            let s = () => (0, i.jsx)("code", { className: a()(eN.kw, "hljs"), children: (0, P.t)(e, t, r) });
            return (0, i.jsx)(
                "pre",
                {
                    children: (0, i.jsxs)("div", {
                        className: eS.Hy,
                        children: [
                            w.p5
                                ? (0, i.jsx)("div", { className: eS.lB, children: (0, i.jsx)(eC, { text: e.content }) })
                                : null,
                            (0, i.jsx)(v.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: a()(eN.kw, "hljs"),
                                children: (0, i.jsx)(h.c2, {
                                    createPromise: () => Promise.resolve().then(n.bind(n, 981776)),
                                    webpackId: 981776,
                                    renderFallback: s,
                                    render: (t) => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n
                                                ? s()
                                                : (0, i.jsx)("code", {
                                                      className: a()(eN.kw, "hljs", n.language),
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
                y.Ay,
                {
                    type: y.Ay.Types.TEXT,
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
                          onClick: () => {
                              !(function (e, t, n) {
                                  let i = b.A.getGuild(e);
                                  if (null == e || null == i) return;
                                  let r = (t) => {
                                      i.features.has(B.GuildFeatures.COMMUNITY) && (0, O.pX)(B.BVt.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case "home":
                                      case "guide":
                                          r(eT.VV.GUILD_HOME);
                                          break;
                                      case "browse":
                                          r(eT.VV.CHANNEL_BROWSER);
                                          break;
                                      case "customize":
                                          r(eT.VV.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case "linked-roles":
                                          if (null != n) {
                                              let t = D.Ay.getSelfMember(e);
                                              if (null == t) return;
                                              let i = L.A.getRole(e, n);
                                              null == i || t.roles.includes(i.id)
                                                  ? c.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                    })
                                                  : c.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                        role: i,
                                                    });
                                          } else
                                              c.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, i.jsx)(A.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null,
    },
    timestamp: { react: (e, t, n) => (0, i.jsx)(k.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(r, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? eS.tZ : null,
                style: { "--totalCharacters": s },
                children: e.items.map((e, r) => {
                    let s = (0, o.reactElement)("span", `${n.key}-${r}-innerSpan`, { children: t(e, n) });
                    return (0, o.reactElement)("li", `${n.key}-${r}` + r, {
                        children: [s, (0, i.jsx)(u.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, o.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [r, (0, i.jsx)(u.A, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? eS.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let r = b.A.getGuild(e.guildId);
            return (0, i.jsx)(g.A, { guild: r, children: (0, P.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, i.jsx)(f.A, { iconType: e.iconType, children: (0, P.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, i.jsx)(N, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let i = (0, o.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, o.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: i,
                className: n.formatInline ? eS.tZ : null,
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
function eO(e) {
    return {
        ...eR,
        link: (0, eI.A)(e),
        devLink: {
            match: (e, t) => (t.allowLinks && t.allowDevLinks ? eA.exec(e) : null),
            parse: (e, t) => ({ target: e, type: "devLink" }),
            react: (e, t, n) => {
                let s = e.target[0];
                return (0, K.h4)(s)
                    ? (0, i.jsxs)(
                          r.Fragment,
                          { children: [(0, i.jsx)("span", { children: s }), (0, i.jsx)(z.A, { url: s }, s)] },
                          n.key,
                      )
                    : (0, X.W0)(s)
                      ? (0, i.jsxs)(
                            r.Fragment,
                            { children: [(0, i.jsx)("span", { children: s }), (0, i.jsx)(em, { url: s })] },
                            n.key,
                        )
                      : (0, ef.i)(s)
                        ? (0, i.jsx)(
                              r.Fragment,
                              {
                                  children: (0, i.jsxs)(r.Suspense, {
                                      fallback: null,
                                      children: [(0, i.jsx)("span", { children: s }), (0, i.jsx)(eg, { url: s })],
                                  }),
                              },
                              n.key,
                          )
                        : (0, q.my)(s)
                          ? (0, i.jsx)(
                                r.Fragment,
                                {
                                    children: (0, i.jsxs)(r.Suspense, {
                                        fallback: null,
                                        children: [(0, i.jsx)("span", { children: s }), (0, i.jsx)(ep, { url: s })],
                                    }),
                                },
                                n.key,
                            )
                          : (0, i.jsx)("span", { children: s }, n.key);
            },
            order: 6,
        },
        emoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, r, s) {
                    let { key: a, channelId: o, messageId: l } = s;
                    return e.src
                        ? (0, i.jsx)(
                              R.H,
                              { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: l },
                              a,
                          )
                        : (0, i.jsx)("span", { children: e.surrogate }, a);
                },
            };
        })(e),
        customEmoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, r, s) {
                    let { key: a, guildId: o, channelId: l, messageId: d } = s,
                        _ = m.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                    if (null != _) {
                        let t = _.require_colons;
                        e = { ...e, name: t ? `:${_.name}:` : _.name };
                    }
                    return (0, i.jsx)(
                        R.X,
                        { node: e, tooltipPosition: t, enableClick: n, channelId: l, messageId: d },
                        a,
                    );
                },
            };
        })(e),
        channelMention: (0, W.A)(e),
        commandMention: (0, Y.Ay)(e),
        attachmentLink: {
            react(t, r, s) {
                let o = s.noStyleAndInteraction
                        ? void 0
                        : async (n) => {
                              let i = await (0, F.AN)(t.attachmentUrl);
                              e.shouldStopPropagation && n?.stopPropagation(),
                                  V.A.trackLinkClicked(i),
                                  e.shouldCloseDefaultModals && (0, M.closeAllModals)(),
                                  (0, G.A)(i);
                          },
                    l = s.noStyleAndInteraction
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
                        onClick: o,
                        onContextMenu: l,
                        className: "attachmentLink",
                        children: [
                            (0, i.jsx)(U.P, { size: "xs", className: a()(j.Kk, H.K), color: "currentColor" }),
                            (0, P.t)(t, r, s),
                        ],
                    },
                    s.key,
                );
            },
        },
    };
}
