r.d(n, {
    Z: function () {
        return H;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(477660);
var c = r(481060),
    d = r(570140),
    f = r(794295),
    p = r(663993),
    h = r(95398),
    _ = r(339085),
    m = r(779699),
    g = r(359875),
    E = r(124072),
    v = r(692629),
    y = r(695503),
    b = r(628692),
    I = r(590956),
    T = r(703656),
    S = r(271383),
    A = r(430824),
    C = r(572004),
    N = r(746878),
    R = r(285063),
    O = r(943362),
    D = r(551452),
    x = r(69626),
    L = r(142990),
    w = r(532901),
    P = r(311739),
    M = r(981631),
    k = r(176505),
    U = r(665162),
    B = r(763971);
function G(e) {
    let { emojiTooltipPosition: n = 'top', enableEmojiClick: r = !0 } = e;
    return {
        react(e, i, o) {
            let { key: s, channelId: l, messageId: u } = o;
            return e.src
                ? (0, a.jsx)(
                      I.c,
                      {
                          node: e,
                          tooltipPosition: n,
                          enableClick: r,
                          channelId: l,
                          messageId: u
                      },
                      s
                  )
                : (0, a.jsx)('span', { children: e.surrogate }, s);
        }
    };
}
function Z(e) {
    let { emojiTooltipPosition: n = 'top', enableEmojiClick: r = !0 } = e;
    return {
        react(e, i, o) {
            let { key: s, guildId: l, channelId: u, messageId: c, isInteracting: d } = o,
                f = _.ZP.getDisambiguatedEmojiContext(l).getById(e.emojiId);
            if (null != f) {
                let n = f.require_colons;
                e = {
                    ...e,
                    name: n ? ':'.concat(f.name, ':') : f.name
                };
            }
            return (0, a.jsx)(
                I.Y,
                {
                    isInteracting: d,
                    node: e,
                    tooltipPosition: n,
                    enableClick: r,
                    channelId: u,
                    messageId: c
                },
                s
            );
        }
    };
}
function F(e, n, r) {
    let i = A.Z.getGuild(e);
    if (null == e || null == i) return;
    let a = (n) => {
        i.hasFeature(M.oNc.COMMUNITY) && (0, T.uL)(M.Z5c.CHANNEL(e, n));
    };
    switch (n) {
        case 'home':
        case 'guide':
            a(k.oC.GUILD_HOME);
            break;
        case 'browse':
            a(k.oC.CHANNEL_BROWSER);
            break;
        case 'customize':
            a(k.oC.CUSTOMIZE_COMMUNITY);
            break;
        case 'linked-roles':
            if (null != r) {
                let n = S.ZP.getSelfMember(e);
                if (null == n) return null;
                let i = A.Z.getRoles(e)[r];
                null == i || n.roles.includes(i.id)
                    ? d.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e
                      })
                    : d.Z.dispatch({
                          type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                          guildId: e,
                          role: i
                      });
            } else
                d.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_MODAL_SHOW',
                    guildId: e
                });
    }
}
function V(e) {
    let { text: n } = e,
        [r, i] = o.useState(!1),
        s = () => {
            try {
                (0, C.JG)(n), i(!0);
            } catch (e) {
                i(!1);
            }
        };
    return (0, a.jsx)(c.Clickable, {
        onClick: s,
        children: r
            ? (0, a.jsx)(c.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, a.jsx)(c.CopyIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
    });
}
r(896715);
let j = {
    blockQuote: {
        react: (e, n, r) =>
            (0, a.jsxs)(
                'div',
                {
                    className: U.blockquoteContainer,
                    children: [(0, a.jsx)('div', { className: U.blockquoteDivider }), (0, a.jsx)('blockquote', { children: n(e.content, r) })]
                },
                r.key
            )
    },
    s: { react: (e, n, r) => (0, a.jsx)('s', { children: n(e.content, r) }, r.key) },
    highlight: {
        react: (e, n, r) =>
            (0, a.jsx)(
                'span',
                {
                    className: 'highlight',
                    children: e.content
                },
                r.key
            )
    },
    paragraph: { react: (e, n, r) => (0, a.jsx)('p', { children: n(e.content, r) }, r.key) },
    inlineCode: {
        react: (e, n, r) =>
            (0, a.jsx)(
                'code',
                {
                    className: 'inline',
                    children: (0, N.S)(e, n, r)
                },
                r.key
            )
    },
    codeBlock: {
        react(e, n, i) {
            let o = () =>
                (0, a.jsx)('code', {
                    className: l()(B.scrollbarGhostHairline, 'hljs'),
                    children: (0, N.S)(e, n, i)
                });
            return (0, a.jsx)(
                'pre',
                {
                    children: (0, a.jsxs)('div', {
                        className: U.codeContainer,
                        children: [
                            C.wS
                                ? (0, a.jsx)('div', {
                                      className: U.codeActions,
                                      children: (0, a.jsx)(V, { text: e.content })
                                  })
                                : null,
                            (0, a.jsx)(p.GI, {
                                createPromise: () => Promise.resolve().then(r.bind(r, 364964)),
                                webpackId: 364964,
                                renderFallback: o,
                                render: (n) => {
                                    if (!(e.lang && n.hasLanguage(e.lang))) return o();
                                    {
                                        let r = n.highlight(e.lang, e.content, !0);
                                        return null == r
                                            ? o()
                                            : (0, a.jsx)('code', {
                                                  className: l()(B.scrollbarGhostHairline, 'hljs', r.language),
                                                  dangerouslySetInnerHTML: { __html: r.value }
                                              });
                                    }
                                }
                            })
                        ]
                    })
                },
                i.key
            );
        }
    },
    text: { react: (e, n, r) => ('string' == typeof e.content ? (0, a.jsx)('span', { children: e.content }, r.key) : (0, a.jsx)('span', { children: n(e.content, r) }, r.key)) },
    spoiler: {
        react: (e, n, r) =>
            (0, a.jsx)(
                h.Z,
                {
                    type: h.Z.Types.TEXT,
                    inline: r.formatInline,
                    renderTextElement: (e, n) => (null == e || e.type !== f.Z || n ? e : o.cloneElement(e, { tabIndex: -1 })),
                    children: () => n(e.content, r)
                },
                r.key
            )
    },
    soundboard: {
        react: (e) =>
            (0, a.jsx)(b.ZP, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable
            })
    },
    staticRouteLink: {
        react(e, n, r) {
            let i = () => {
                F(e.guildId, e.id, e.itemId);
            };
            return (0, N.k)(e.id)
                ? (0, a.jsxs)(
                      E.Z,
                      {
                          role: 'link',
                          onClick: i,
                          className: 'channelMention',
                          iconType: e.id,
                          children: [n(e.mainContent, r), null != e.itemContent ? (0, a.jsx)(v.Z, {}) : null, null != e.itemContent ? n(e.itemContent, r) : null]
                      },
                      r.key
                  )
                : null;
        }
    },
    timestamp: { react: (e, n, r) => (0, a.jsx)(R.Z, { node: e }, r.key) },
    list: {
        react: (e, n, r) => {
            let i = e.ordered ? 'ol' : 'ul',
                a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, u.reactElement)(i, ''.concat(r.key), {
                start: e.start,
                className: r.formatInline ? U.inlineFormat : null,
                style: { '--totalCharacters': a },
                children: e.items.map((e, i) => {
                    let a = (0, u.reactElement)('span', ''.concat(r.key, '-').concat(i, '-innerSpan'), { children: n(e, r) });
                    return (0, u.reactElement)('li', ''.concat(r.key, '-').concat(i) + i, { children: a });
                })
            });
        }
    },
    heading: {
        react: (e, n, r) => {
            let i = (0, u.reactElement)('span', ''.concat(r.key, '-innerSpan'), { children: n(e.content, r) });
            return (0, u.reactElement)('h' + e.level, (null == r ? void 0 : r.key) != null ? ''.concat(r.key) : null, {
                children: i,
                className: r.formatInline ? U.inlineFormat : null
            });
        }
    },
    guild: {
        react: (e, n, r) => {
            let i = A.Z.getGuild(e.guildId);
            return (0, a.jsx)(
                g.Z,
                {
                    guild: i,
                    children: (0, N.S)(e, n, r)
                },
                r.key
            );
        }
    },
    channel: {
        react: (e, n, r) =>
            (0, a.jsx)(
                m.Z,
                {
                    iconType: e.iconType,
                    children: (0, N.S)(e, n, r)
                },
                r.key
            )
    },
    message: { react: (e, n, r) => (0, a.jsx)(y.Z, {}, r.key) },
    subtext: {
        react: (e, n, r) => {
            let i = (0, u.reactElement)('span', ''.concat(r.key, '-innerSpan'), { children: n(e.content, r) });
            return (0, u.reactElement)('small', (null == r ? void 0 : r.key) != null ? ''.concat(r.key) : null, {
                children: i,
                className: r.formatInline ? U.inlineFormat : null
            });
        }
    },
    silentPrefix: { react: (e, n, r) => ('string' == typeof e.content ? (0, a.jsx)('span', { children: e.content }, r.key) : (0, a.jsx)('span', { children: n(e.content, r) }, r.key)) }
};
function H(e) {
    return {
        ...j,
        link: (0, w.Z)(e),
        devLink: (0, L.Z)(e),
        emoji: G(e),
        customEmoji: Z(e),
        channelMention: (0, D.Z)(e),
        commandMention: (0, x.ZP)(e),
        attachmentLink: (0, O.Z)(e),
        shopLink: (0, P.Z)(e)
    };
}
