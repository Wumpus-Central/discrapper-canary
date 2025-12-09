n.d(t, { Z: () => z }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(159635),
    l = n(481060),
    c = n(570140),
    u = n(794295),
    d = n(663993),
    f = n(339085),
    p = n(779699),
    _ = n(359875),
    m = n(124072),
    h = n(891984),
    g = n(695503),
    E = n(628692),
    b = n(590956),
    y = n(703656),
    O = n(411405),
    v = n(271383),
    S = n(485386),
    I = n(430824),
    T = n(572004),
    A = n(746878),
    C = n(285063),
    N = n(943362),
    P = n(551452),
    R = n(69626),
    D = n(142990),
    w = n(382056),
    x = n(532901),
    L = n(311739),
    j = n(981631),
    M = n(176505),
    k = n(430864),
    U = n(154257);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, a) {
            let { key: o, channelId: s, messageId: l } = a;
            return e.src
                ? (0, r.jsx)(
                      b.c,
                      {
                          node: e,
                          tooltipPosition: t,
                          enableClick: n,
                          channelId: s,
                          messageId: l,
                      },
                      o,
                  )
                : (0, r.jsx)("span", { children: e.surrogate }, o);
        },
    };
}
function H(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, a) {
            let { key: o, guildId: s, channelId: l, messageId: c, isInteracting: u } = a,
                d = f.ZP.getDisambiguatedEmojiContext(s).getById(e.emojiId);
            if (null != d) {
                let t = d.require_colons;
                e = F(Z({}, e), { name: t ? ":".concat(d.name, ":") : d.name });
            }
            return (0, r.jsx)(
                b.Y,
                {
                    isInteracting: u,
                    node: e,
                    tooltipPosition: t,
                    enableClick: n,
                    channelId: l,
                    messageId: c,
                },
                o,
            );
        },
    };
}
function Y(e, t, n) {
    let r = I.Z.getGuild(e);
    if (null == e || null == r) return;
    let i = (t) => {
        r.features.has(j.GuildFeatures.COMMUNITY) && (0, y.uL)(j.Z5c.CHANNEL(e, t));
    };
    switch (t) {
        case "home":
        case "guide":
            i(M.oC.GUILD_HOME);
            break;
        case "browse":
            i(M.oC.CHANNEL_BROWSER);
            break;
        case "customize":
            i(M.oC.CUSTOMIZE_COMMUNITY);
            break;
        case "linked-roles":
            if (null != n) {
                let t = v.ZP.getSelfMember(e);
                if (null == t) return null;
                let r = S.Z.getRole(e, n);
                null == r || t.roles.includes(r.id)
                    ? c.Z.dispatch({
                          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                          guildId: e,
                      })
                    : c.Z.dispatch({
                          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                          guildId: e,
                          role: r,
                      });
            } else
                c.Z.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                    guildId: e,
                });
    }
}
function W(e) {
    let { text: t } = e,
        [n, a] = i.useState(!1),
        o = () => {
            (0, T.JG)(
                t,
                () => a(!0),
                () => a(!1),
            );
        };
    return (0, r.jsx)(l.P3F, {
        onClick: o,
        children: n
            ? (0, r.jsx)(l.dz2, {
                  size: "xs",
                  color: "currentColor",
              })
            : (0, r.jsx)(l.TIy, {
                  size: "xs",
                  color: "currentColor",
              }),
    });
}
n(324509);
let K = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                "div",
                {
                    className: k.blockquoteContainer,
                    children: [
                        (0, r.jsx)("div", { className: k.blockquoteDivider }),
                        (0, r.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, r.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, r.jsx)(
                "span",
                {
                    className: "highlight",
                    children: e.content,
                },
                n.key,
            ),
    },
    paragraph: { react: (e, t, n) => (0, r.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, r.jsx)(
                "code",
                {
                    className: "inline",
                    children: (0, A.S)(e, t, n),
                },
                n.key,
            ),
    },
    codeBlock: {
        react(e, t, i) {
            let a = () =>
                (0, r.jsx)("code", {
                    className: o()(U.scrollbarGhostHairline, "hljs"),
                    children: (0, A.S)(e, t, i),
                });
            return (0, r.jsx)(
                "pre",
                {
                    children: (0, r.jsxs)("div", {
                        className: k.codeContainer,
                        children: [
                            T.wS
                                ? (0, r.jsx)("div", {
                                      className: k.codeActions,
                                      children: (0, r.jsx)(W, { text: e.content }),
                                  })
                                : null,
                            (0, r.jsx)(d.GI, {
                                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                                webpackId: 364964,
                                renderFallback: a,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? a()
                                            : (0, r.jsx)("code", {
                                                  className: o()(U.scrollbarGhostHairline, "hljs", n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value },
                                              });
                                    }
                                },
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
                ? (0, r.jsx)("span", { children: e.content }, n.key)
                : (0, r.jsx)("span", { children: t(e.content, n) }, n.key),
    },
    spoiler: {
        react: (e, t, n) =>
            (0, r.jsx)(
                O.ZP,
                {
                    type: O.ZP.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== u.Z || t ? e : i.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, r.jsx)(E.ZP, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react(e, t, n) {
            let i = () => {
                Y(e.guildId, e.id, e.itemId);
            };
            return (0, A.k)(e.id)
                ? (0, r.jsxs)(
                      m.Z,
                      {
                          role: "link",
                          onClick: i,
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, r.jsx)(h.Z, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null;
        },
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(C.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, s.reactElement)(i, "".concat(n.key), {
                start: e.start,
                className: n.formatInline ? k.inlineFormat : null,
                style: { "--totalCharacters": a },
                children: e.items.map((e, i) => {
                    let a = (0, s.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
                        children: t(e, n),
                    });
                    return (0, s.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
                        children: [a, (0, r.jsx)(l.nn4, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, s.reactElement)("span", "".concat(n.key, "-innerSpan"), { children: t(e.content, n) });
            return (0, s.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                children: [i, (0, r.jsx)(l.nn4, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? k.inlineFormat : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = I.Z.getGuild(e.guildId);
            return (0, r.jsx)(
                _.Z,
                {
                    guild: i,
                    children: (0, A.S)(e, t, n),
                },
                n.key,
            );
        },
    },
    channel: {
        react: (e, t, n) =>
            (0, r.jsx)(
                p.Z,
                {
                    iconType: e.iconType,
                    children: (0, A.S)(e, t, n),
                },
                n.key,
            ),
    },
    message: { react: (e, t, n) => (0, r.jsx)(g.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, s.reactElement)("span", "".concat(n.key, "-innerSpan"), { children: t(e.content, n) });
            return (0, s.reactElement)("small", (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                children: r,
                className: n.formatInline ? k.inlineFormat : null,
            });
        },
    },
    silentPrefix: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, r.jsx)("span", { children: e.content }, n.key)
                : (0, r.jsx)("span", { children: t(e.content, n) }, n.key),
    },
};
function z(e) {
    return F(Z({}, K), {
        link: (0, x.Z)(e),
        devLink: (0, D.Z)(e),
        emoji: V(e),
        customEmoji: H(e),
        channelMention: (0, P.Z)(e),
        commandMention: (0, R.ZP)(e),
        attachmentLink: (0, N.Z)(e),
        shopLink: (0, L.Z)(e),
        gameMention: w.Z,
    });
}
