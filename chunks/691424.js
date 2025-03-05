n.d(t, { Z: () => q }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(477660),
    l = n(481060),
    c = n(570140),
    u = n(794295),
    d = n(663993),
    f = n(95398),
    _ = n(339085),
    p = n(818083),
    h = n(779699),
    g = n(359875),
    m = n(124072),
    E = n(692629),
    v = n(695503),
    b = n(628692),
    y = n(590956),
    O = n(703656),
    S = n(271383),
    I = n(430824),
    T = n(572004),
    N = n(746878),
    A = n(285063),
    C = n(943362),
    R = n(551452),
    P = n(69626),
    D = n(142990),
    w = n(532901),
    L = n(311739),
    x = n(981631),
    M = n(176505),
    k = n(509045),
    j = n(332952);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
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
function V(e, t) {
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
n(490448);
let F = i.lazy(() => Promise.all([n.e('72825'), n.e('53633')]).then(n.bind(n, 870718))),
    Z = (0, p.B)({
        id: '2025-03_latex',
        kind: 'user',
        label: 'LaTeX',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Disabled',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function H(e) {
    let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, o) {
            let { key: a, channelId: s, messageId: l } = o;
            return e.src
                ? (0, r.jsx)(
                      y.c,
                      {
                          node: e,
                          tooltipPosition: t,
                          enableClick: n,
                          channelId: s,
                          messageId: l
                      },
                      a
                  )
                : (0, r.jsx)('span', { children: e.surrogate }, a);
        }
    };
}
function W(e) {
    let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, o) {
            let { key: a, guildId: s, channelId: l, messageId: c, isInteracting: u } = o,
                d = _.ZP.getDisambiguatedEmojiContext(s).getById(e.emojiId);
            if (null != d) {
                let t = d.require_colons;
                e = V(G({}, e), { name: t ? ':'.concat(d.name, ':') : d.name });
            }
            return (0, r.jsx)(
                y.Y,
                {
                    isInteracting: u,
                    node: e,
                    tooltipPosition: t,
                    enableClick: n,
                    channelId: l,
                    messageId: c
                },
                a
            );
        }
    };
}
function Y(e, t, n) {
    let r = I.Z.getGuild(e);
    if (null == e || null == r) return;
    let i = (t) => {
        r.hasFeature(x.oNc.COMMUNITY) && (0, O.uL)(x.Z5c.CHANNEL(e, t));
    };
    switch (t) {
        case 'home':
        case 'guide':
            i(M.oC.GUILD_HOME);
            break;
        case 'browse':
            i(M.oC.CHANNEL_BROWSER);
            break;
        case 'customize':
            i(M.oC.CUSTOMIZE_COMMUNITY);
            break;
        case 'linked-roles':
            if (null != n) {
                let t = S.ZP.getSelfMember(e);
                if (null == t) return null;
                let r = I.Z.getRoles(e)[n];
                null == r || t.roles.includes(r.id)
                    ? c.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e
                      })
                    : c.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e,
                          role: r
                      });
            } else
                c.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                    guildId: e
                });
    }
}
function K(e) {
    let { text: t } = e,
        [n, o] = i.useState(!1),
        a = () => {
            try {
                (0, T.JG)(t), o(!0);
            } catch (e) {
                o(!1);
            }
        };
    return (0, r.jsx)(l.P3F, {
        onClick: a,
        children: n
            ? (0, r.jsx)(l.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, r.jsx)(l.TIy, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
let z = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                'div',
                {
                    className: k.blockquoteContainer,
                    children: [(0, r.jsx)('div', { className: k.blockquoteDivider }), (0, r.jsx)('blockquote', { children: t(e.content, n) })]
                },
                n.key
            )
    },
    s: { react: (e, t, n) => (0, r.jsx)('s', { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, r.jsx)(
                'span',
                {
                    className: 'highlight',
                    children: e.content
                },
                n.key
            )
    },
    paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, r.jsx)(
                'code',
                {
                    className: 'inline',
                    children: (0, N.S)(e, t, n)
                },
                n.key
            )
    },
    codeBlock: {
        react(e, t, o) {
            var s;
            let l = !0 === Z.getCurrentConfig({ location: 'codeBlock' }).enabled && (null === (s = e.lang) || void 0 === s ? void 0 : s.toLowerCase()) === 'katex',
                c = () =>
                    (0, r.jsx)('code', {
                        className: a()(j.scrollbarGhostHairline, 'hljs'),
                        children: (0, N.S)(e, t, o)
                    });
            return (0, r.jsx)(
                'pre',
                {
                    children: (0, r.jsxs)('div', {
                        className: k.codeContainer,
                        children: [
                            T.wS
                                ? (0, r.jsx)('div', {
                                      className: k.codeActions,
                                      children: (0, r.jsx)(K, { text: e.content })
                                  })
                                : null,
                            l
                                ? (0, r.jsx)('code', {
                                      className: a()(j.scrollbarGhostHairline, 'hljs'),
                                      children: (0, r.jsx)(i.Suspense, {
                                          fallback: c(),
                                          children: (0, r.jsx)(F, { code: e.content })
                                      })
                                  })
                                : (0, r.jsx)(d.GI, {
                                      createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                                      webpackId: 364964,
                                      renderFallback: c,
                                      render: (t) => {
                                          if (!(e.lang && t.hasLanguage(e.lang))) return c();
                                          {
                                              let n = t.highlight(e.lang, e.content, !0);
                                              return null == n
                                                  ? c()
                                                  : (0, r.jsx)('code', {
                                                        className: a()(j.scrollbarGhostHairline, 'hljs', n.language),
                                                        dangerouslySetInnerHTML: { __html: n.value }
                                                    });
                                          }
                                      }
                                  })
                        ]
                    })
                },
                o.key
            );
        }
    },
    text: { react: (e, t, n) => ('string' == typeof e.content ? (0, r.jsx)('span', { children: e.content }, n.key) : (0, r.jsx)('span', { children: t(e.content, n) }, n.key)) },
    spoiler: {
        react: (e, t, n) =>
            (0, r.jsx)(
                f.ZP,
                {
                    type: f.ZP.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) => (null == e || e.type !== u.Z || t ? e : i.cloneElement(e, { tabIndex: -1 })),
                    children: () => t(e.content, n)
                },
                n.key
            )
    },
    soundboard: {
        react: (e, t, n) =>
            (0, r.jsx)(b.ZP, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds
            })
    },
    staticRouteLink: {
        react(e, t, n) {
            let i = () => {
                Y(e.guildId, e.id, e.itemId);
            };
            return (0, N.k)(e.id)
                ? (0, r.jsxs)(
                      m.Z,
                      {
                          role: 'link',
                          onClick: i,
                          className: 'channelMention',
                          iconType: e.id,
                          children: [t(e.mainContent, n), null != e.itemContent ? (0, r.jsx)(E.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
                      },
                      n.key
                  )
                : null;
        }
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(A.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let r = e.ordered ? 'ol' : 'ul',
                i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, s.reactElement)(r, ''.concat(n.key), {
                start: e.start,
                className: n.formatInline ? k.inlineFormat : null,
                style: { '--totalCharacters': i },
                children: e.items.map((e, r) => {
                    let i = (0, s.reactElement)('span', ''.concat(n.key, '-').concat(r, '-innerSpan'), { children: t(e, n) });
                    return (0, s.reactElement)('li', ''.concat(n.key, '-').concat(r) + r, { children: i });
                })
            });
        }
    },
    heading: {
        react: (e, t, n) => {
            let r = (0, s.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, s.reactElement)('h' + e.level, (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? k.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, t, n) => {
            let i = I.Z.getGuild(e.guildId);
            return (0, r.jsx)(
                g.Z,
                {
                    guild: i,
                    children: (0, N.S)(e, t, n)
                },
                n.key
            );
        }
    },
    channel: {
        react: (e, t, n) =>
            (0, r.jsx)(
                h.Z,
                {
                    iconType: e.iconType,
                    children: (0, N.S)(e, t, n)
                },
                n.key
            )
    },
    message: { react: (e, t, n) => (0, r.jsx)(v.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, s.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, s.reactElement)('small', (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: r,
                className: n.formatInline ? k.inlineFormat : null
            });
        }
    },
    silentPrefix: { react: (e, t, n) => ('string' == typeof e.content ? (0, r.jsx)('span', { children: e.content }, n.key) : (0, r.jsx)('span', { children: t(e.content, n) }, n.key)) }
};
function q(e) {
    return V(G({}, z), {
        link: (0, w.Z)(e),
        devLink: (0, D.Z)(e),
        emoji: H(e),
        customEmoji: W(e),
        channelMention: (0, R.Z)(e),
        commandMention: (0, P.ZP)(e),
        attachmentLink: (0, C.Z)(e),
        shopLink: (0, L.Z)(e)
    });
}
