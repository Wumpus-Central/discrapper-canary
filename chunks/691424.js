n.d(t, { Z: () => V }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477660),
    l = n(481060),
    u = n(570140),
    c = n(794295),
    d = n(663993),
    f = n(95398),
    _ = n(339085),
    p = n(779699),
    h = n(359875),
    m = n(124072),
    g = n(692629),
    E = n(695503),
    v = n(628692),
    y = n(590956),
    I = n(703656),
    T = n(271383),
    b = n(430824),
    S = n(572004),
    A = n(746878),
    N = n(285063),
    C = n(943362),
    R = n(551452),
    O = n(69626),
    D = n(142990),
    L = n(532901),
    x = n(311739),
    P = n(981631),
    w = n(176505),
    M = n(642367),
    k = n(595468);
function U(e) {
    let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
    return {
        react(e, r, a) {
            let { key: s, channelId: o, messageId: l } = a;
            return e.src
                ? (0, i.jsx)(
                      y.c,
                      {
                          node: e,
                          tooltipPosition: t,
                          enableClick: n,
                          channelId: o,
                          messageId: l
                      },
                      s
                  )
                : (0, i.jsx)('span', { children: e.surrogate }, s);
        }
    };
}
function G(e) {
    let { emojiTooltipPosition: t = 'top', enableEmojiClick: n = !0 } = e;
    return {
        react(e, r, a) {
            let { key: s, guildId: o, channelId: l, messageId: u, isInteracting: c } = a,
                d = _.ZP.getDisambiguatedEmojiContext(o).getById(e.emojiId);
            if (null != d) {
                let t = d.require_colons;
                e = {
                    ...e,
                    name: t ? ':'.concat(d.name, ':') : d.name
                };
            }
            return (0, i.jsx)(
                y.Y,
                {
                    isInteracting: c,
                    node: e,
                    tooltipPosition: t,
                    enableClick: n,
                    channelId: l,
                    messageId: u
                },
                s
            );
        }
    };
}
function B(e, t, n) {
    let i = b.Z.getGuild(e);
    if (null == e || null == i) return;
    let r = (t) => {
        i.hasFeature(P.oNc.COMMUNITY) && (0, I.uL)(P.Z5c.CHANNEL(e, t));
    };
    switch (t) {
        case 'home':
        case 'guide':
            r(w.oC.GUILD_HOME);
            break;
        case 'browse':
            r(w.oC.CHANNEL_BROWSER);
            break;
        case 'customize':
            r(w.oC.CUSTOMIZE_COMMUNITY);
            break;
        case 'linked-roles':
            if (null != n) {
                let t = T.ZP.getSelfMember(e);
                if (null == t) return null;
                let i = b.Z.getRoles(e)[n];
                null == i || t.roles.includes(i.id)
                    ? u.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e
                      })
                    : u.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e,
                          role: i
                      });
            } else
                u.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                    guildId: e
                });
    }
}
function Z(e) {
    let { text: t } = e,
        [n, a] = r.useState(!1),
        s = () => {
            try {
                (0, S.JG)(t), a(!0);
            } catch (e) {
                a(!1);
            }
        };
    return (0, i.jsx)(l.P3F, {
        onClick: s,
        children: n
            ? (0, i.jsx)(l.dz2, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, i.jsx)(l.TIy, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
n(229925);
let F = {
    blockQuote: {
        react: (e, t, n) =>
            (0, i.jsxs)(
                'div',
                {
                    className: M.blockquoteContainer,
                    children: [(0, i.jsx)('div', { className: M.blockquoteDivider }), (0, i.jsx)('blockquote', { children: t(e.content, n) })]
                },
                n.key
            )
    },
    s: { react: (e, t, n) => (0, i.jsx)('s', { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, i.jsx)(
                'span',
                {
                    className: 'highlight',
                    children: e.content
                },
                n.key
            )
    },
    paragraph: { react: (e, t, n) => (0, i.jsx)('p', { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, i.jsx)(
                'code',
                {
                    className: 'inline',
                    children: (0, A.S)(e, t, n)
                },
                n.key
            )
    },
    codeBlock: {
        react(e, t, r) {
            let a = () =>
                (0, i.jsx)('code', {
                    className: s()(k.scrollbarGhostHairline, 'hljs'),
                    children: (0, A.S)(e, t, r)
                });
            return (0, i.jsx)(
                'pre',
                {
                    children: (0, i.jsxs)('div', {
                        className: M.codeContainer,
                        children: [
                            S.wS
                                ? (0, i.jsx)('div', {
                                      className: M.codeActions,
                                      children: (0, i.jsx)(Z, { text: e.content })
                                  })
                                : null,
                            (0, i.jsx)(d.GI, {
                                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                                webpackId: 364964,
                                renderFallback: a,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? a()
                                            : (0, i.jsx)('code', {
                                                  className: s()(k.scrollbarGhostHairline, 'hljs', n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value }
                                              });
                                    }
                                }
                            })
                        ]
                    })
                },
                r.key
            );
        }
    },
    text: { react: (e, t, n) => ('string' == typeof e.content ? (0, i.jsx)('span', { children: e.content }, n.key) : (0, i.jsx)('span', { children: t(e.content, n) }, n.key)) },
    spoiler: {
        react: (e, t, n) =>
            (0, i.jsx)(
                f.Z,
                {
                    type: f.Z.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) => (null == e || e.type !== c.Z || t ? e : r.cloneElement(e, { tabIndex: -1 })),
                    children: () => t(e.content, n)
                },
                n.key
            )
    },
    soundboard: {
        react: (e, t, n) =>
            (0, i.jsx)(v.ZP, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds
            })
    },
    staticRouteLink: {
        react(e, t, n) {
            let r = () => {
                B(e.guildId, e.id, e.itemId);
            };
            return (0, A.k)(e.id)
                ? (0, i.jsxs)(
                      m.Z,
                      {
                          role: 'link',
                          onClick: r,
                          className: 'channelMention',
                          iconType: e.id,
                          children: [t(e.mainContent, n), null != e.itemContent ? (0, i.jsx)(g.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
                      },
                      n.key
                  )
                : null;
        }
    },
    timestamp: { react: (e, t, n) => (0, i.jsx)(N.Z, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? 'ol' : 'ul',
                r = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(i, ''.concat(n.key), {
                start: e.start,
                className: n.formatInline ? M.inlineFormat : null,
                style: { '--totalCharacters': r },
                children: e.items.map((e, i) => {
                    let r = (0, o.reactElement)('span', ''.concat(n.key, '-').concat(i, '-innerSpan'), { children: t(e, n) });
                    return (0, o.reactElement)('li', ''.concat(n.key, '-').concat(i) + i, { children: r });
                })
            });
        }
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('h' + e.level, (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: i,
                className: n.formatInline ? M.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, t, n) => {
            let r = b.Z.getGuild(e.guildId);
            return (0, i.jsx)(
                h.Z,
                {
                    guild: r,
                    children: (0, A.S)(e, t, n)
                },
                n.key
            );
        }
    },
    channel: {
        react: (e, t, n) =>
            (0, i.jsx)(
                p.Z,
                {
                    iconType: e.iconType,
                    children: (0, A.S)(e, t, n)
                },
                n.key
            )
    },
    message: { react: (e, t, n) => (0, i.jsx)(E.Z, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let i = (0, o.reactElement)('span', ''.concat(n.key, '-innerSpan'), { children: t(e.content, n) });
            return (0, o.reactElement)('small', (null == n ? void 0 : n.key) != null ? ''.concat(n.key) : null, {
                children: i,
                className: n.formatInline ? M.inlineFormat : null
            });
        }
    },
    silentPrefix: { react: (e, t, n) => ('string' == typeof e.content ? (0, i.jsx)('span', { children: e.content }, n.key) : (0, i.jsx)('span', { children: t(e.content, n) }, n.key)) }
};
function V(e) {
    return {
        ...F,
        link: (0, L.Z)(e),
        devLink: (0, D.Z)(e),
        emoji: U(e),
        customEmoji: G(e),
        channelMention: (0, R.Z)(e),
        commandMention: (0, O.ZP)(e),
        attachmentLink: (0, C.Z)(e),
        shopLink: (0, x.Z)(e)
    };
}
