r.d(n, {
    Z: function () {
        return H;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(477660);
var c = r(481060),
    d = r(570140),
    f = r(794295),
    _ = r(663993),
    h = r(95398),
    p = r(339085),
    m = r(779699),
    g = r(359875),
    E = r(124072),
    v = r(692629),
    I = r(695503),
    T = r(628692),
    b = r(590956),
    y = r(703656),
    S = r(271383),
    A = r(430824),
    N = r(572004),
    C = r(746878),
    R = r(285063),
    O = r(943362),
    D = r(551452),
    L = r(69626),
    x = r(142990),
    w = r(532901),
    P = r(311739),
    M = r(981631),
    k = r(176505),
    U = r(665162),
    B = r(763971);
function G(e) {
    let { emojiTooltipPosition: n = 'top', enableEmojiClick: r = !0 } = e;
    return {
        react(e, i, s) {
            let { key: o, channelId: l, messageId: u } = s;
            return e.src
                ? (0, a.jsx)(
                      b.c,
                      {
                          node: e,
                          tooltipPosition: n,
                          enableClick: r,
                          channelId: l,
                          messageId: u
                      },
                      o
                  )
                : (0, a.jsx)('span', { children: e.surrogate }, o);
        }
    };
}
function Z(e) {
    let { emojiTooltipPosition: n = 'top', enableEmojiClick: r = !0 } = e;
    return {
        react(e, i, s) {
            let { key: o, guildId: l, channelId: u, messageId: c, isInteracting: d } = s,
                f = p.ZP.getDisambiguatedEmojiContext(l).getById(e.emojiId);
            if (null != f) {
                let n = f.require_colons;
                e = {
                    ...e,
                    name: n ? ':'.concat(f.name, ':') : f.name
                };
            }
            return (0, a.jsx)(
                b.Y,
                {
                    isInteracting: d,
                    node: e,
                    tooltipPosition: n,
                    enableClick: r,
                    channelId: u,
                    messageId: c
                },
                o
            );
        }
    };
}
function F(e, n, r) {
    let i = A.Z.getGuild(e);
    if (null == e || null == i) return;
    let a = (n) => {
        i.hasFeature(M.oNc.COMMUNITY) && (0, y.uL)(M.Z5c.CHANNEL(e, n));
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
        [r, i] = s.useState(!1),
        o = () => {
            try {
                (0, N.JG)(n), i(!0);
            } catch (e) {
                i(!1);
            }
        };
    return (0, a.jsx)(c.Clickable, {
        onClick: o,
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
                    children: (0, C.S)(e, n, r)
                },
                r.key
            )
    },
    codeBlock: {
        react(e, n, i) {
            let s = () =>
                (0, a.jsx)('code', {
                    className: l()(B.scrollbarGhostHairline, 'hljs'),
                    children: (0, C.S)(e, n, i)
                });
            return (0, a.jsx)(
                'pre',
                {
                    children: (0, a.jsxs)('div', {
                        className: U.codeContainer,
                        children: [
                            N.wS
                                ? (0, a.jsx)('div', {
                                      className: U.codeActions,
                                      children: (0, a.jsx)(V, { text: e.content })
                                  })
                                : null,
                            (0, a.jsx)(_.GI, {
                                createPromise: () => Promise.resolve().then(r.bind(r, 364964)),
                                webpackId: 364964,
                                renderFallback: s,
                                render: (n) => {
                                    if (!(e.lang && n.hasLanguage(e.lang))) return s();
                                    {
                                        let r = n.highlight(e.lang, e.content, !0);
                                        return null == r
                                            ? s()
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
                    renderTextElement: (e, n) => (null == e || e.type !== f.Z || n ? e : s.cloneElement(e, { tabIndex: -1 })),
                    children: () => n(e.content, r)
                },
                r.key
            )
    },
    soundboard: {
        react: (e) =>
            (0, a.jsx)(T.ZP, {
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
            return (0, C.k)(e.id)
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
                    children: (0, C.S)(e, n, r)
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
                    children: (0, C.S)(e, n, r)
                },
                r.key
            )
    },
    message: { react: (e, n, r) => (0, a.jsx)(I.Z, {}, r.key) },
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
        devLink: (0, x.Z)(e),
        emoji: G(e),
        customEmoji: Z(e),
        channelMention: (0, D.Z)(e),
        commandMention: (0, L.ZP)(e),
        attachmentLink: (0, O.Z)(e),
        shopLink: (0, P.Z)(e)
    };
}
