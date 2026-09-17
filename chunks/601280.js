t.d(n, { A: () => eQ });
var l = t(477900),
    r = t(582128);
let s = (0, t(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var i = t(244377),
    a = t(609541),
    u = t(292442),
    c = t(834730),
    o = t(791606),
    d = t(38405),
    h = t(17928),
    m = t(540999);
let x = [
        "bold",
        "code",
        "code_block",
        "emoji",
        "heading",
        "italic",
        "link",
        "list",
        "mention",
        "quote",
        "small",
        "spoiler",
        "strikethrough",
        "timestamp",
        "underline",
    ],
    j = [...x, "dev_link"];
var g = t(503698),
    f = t.n(g),
    p = t(939249),
    I = t(933832),
    A = t(624479),
    b = t(268218),
    k = t(586172),
    v = t(957565),
    y = t(165648),
    C = t(969490);
function S(e) {
    let { text: n } = e,
        [t, s] = r.useState(!1);
    return (0, l.jsx)(p.D, {
        onClick: function () {
            (0, v.C)(
                n,
                () => s(!0),
                () => s(!1),
            );
        },
        children: t
            ? (0, l.jsx)(I.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(A.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var _ = t(236285),
    N = t(7584),
    w = t(930101);
let E = r.createContext(null);
function M() {
    return r.useContext(E);
}
var $ = t(690521),
    P = t(163651),
    T = t(307731);
let G = r.createContext(!1);
function L(e) {
    let { value: n, jumboable: t } = e,
        r = $.Ay.getURL(n),
        s = N.Ay.convertSurrogateToName(n),
        i = M();
    return (0, l.jsx)(w.H, {
        node: { name: s, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function z(e) {
    let { value: n, jumboable: t } = e,
        r = M(),
        s = r?.guildId,
        i = (0, h.bG)([_.Ay], () => _.Ay.getDisambiguatedEmojiContext(s).getById(String(n.id)), [s, n.id]),
        a = i?.name ?? n.name;
    return (
        null != i && i.require_colons && (a = `:${i.name}:`),
        (0, l.jsx)(w.X, {
            node: { name: a, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var U = t(588975),
    B = t(442433),
    F = t(9578),
    H = t(975807),
    J = t(380610),
    R = t(235393),
    q = t(332173),
    O = t(679164),
    D = t(403362),
    K = t(333421),
    W = t(100392),
    X = t(836156);
let Q = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    Z = r.lazy(() =>
        Promise.resolve()
            .then(t.bind(t, 950980))
            .then((e) => {
                let { ExperimentEmbed: n } = e;
                return { default: n };
            }),
    ),
    V = r.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => {
                let { PlaygroundEmbed: n } = e;
                return { default: n };
            }),
    ),
    ee = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => {
                let { DevToolsLinkEmbed: n } = e;
                return { default: n };
            }),
    );
function en(e) {
    let { url: n } = e,
        t =
            (0, J.vS)(n) || (0, J.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, W.W0)(n)
                  ? (0, l.jsx)(Z, { url: n })
                  : (0, X.i)(n)
                    ? (0, l.jsx)(V, { url: n })
                    : (0, K.my)(n)
                      ? (0, l.jsx)(ee, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var et = t(192308),
    el = t(47167),
    er = t(499211),
    es = t(376943),
    ei = t(706083),
    ea = t(78390),
    eu = t(392605),
    ec = t(990474),
    eo = t(232042),
    ed = t(266645),
    eh = t(906754),
    em = t(37632),
    ex = t(593284),
    ej = t(288539),
    eg = t(734057),
    ef = t(317525),
    ep = t(71393),
    eI = t(994500),
    eA = t(287809),
    eb = t(147036);
let ek = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var ev = t(73510),
    ey = t(375708);
function eC(e) {
    let { channelId: n, guildId: r, messageId: s } = e,
        i = (0, er.A)(n),
        {
            name: a,
            iconType: u,
            isForumPost: c,
            hasAccess: o,
        } = (0, h.cf)(
            [eg.A, eA.default, eI.A],
            () => {
                let e = eg.A.getChannel(n);
                return {
                    name: null != e ? (0, el.m1)(e, eA.default, eI.A) : void 0,
                    iconType: (0, eb.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, es.nc)(e),
                };
            },
            [n],
        ),
        d = M();
    if (null == u) return;
    let m = r === d?.guildId || null == r,
        x =
            o || i.isSubscriptionGated
                ? m || null == a
                    ? (0, l.jsx)(eo.A, {
                          iconType: u,
                          children: a ?? (0, l.jsx)("em", { children: ey.intl.string(ey.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eS, { guildId: r, children: a })
                : (0, l.jsx)(eo.A, { iconType: "locked", children: ey.intl.string(ey.t["/YzI63"]) }),
        j = null;
    return (
        null != s &&
            (j = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(em.A, {}), (0, l.jsx)(eo.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, ei.o)(r, n, s), (0, et.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = eg.A.getChannel(n);
                (0, B.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("343266"), t.e("404391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: s });
                });
            },
            className: "channelMention",
            children: [x, j],
        })
    );
}
function eS(e) {
    let { guildId: n, children: t } = e,
        r = (0, h.bG)([ep.A], () => ep.A.getGuild(n), [n]);
    return (0, l.jsxs)(eh.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(em.A, {}) : null, t] });
}
function e_(e) {
    let { id: n } = e,
        t = M();
    return (0, l.jsx)(ej.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function eN(e) {
    let { id: n } = e,
        t = M(),
        r = t?.guildId,
        s = (0, h.bG)([ef.A], () => (null != r ? ef.A.getRole(r, n)?.name : null) ?? ey.intl.string(ey.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ex.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function ew(e) {
    let { id: n } = e,
        t = M();
    return (0, l.jsx)(ed.A, { gameId: n, authorId: t?.authorId });
}
function eE(e) {
    let { roleName: n } = e,
        t = M();
    return (0, l.jsx)(ex.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eM(e) {
    let { route: n, itemId: t } = e,
        r = M(),
        s = r?.guildId,
        i = (0, ea.Q)(n),
        a = (0, h.bG)([ef.A], () => (0, ea.f)(ef.A, n, t, s), [n, t, s]);
    return null == i
        ? null
        : (0, l.jsxs)(q.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, eu.i)(s, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [i, null != a ? (0, l.jsx)(em.A, {}) : null, a],
          });
}
function e$(e) {
    let { id: n, name: t } = e,
        s = M(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${ev.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: s?.channelId, commandId: n, commandName: t, commandKey: i }),
            [s?.channelId, i, n, t],
        );
    return (0, l.jsx)(ec.gn, { node: a, children: t });
}
var eP = t(147190);
function eT(e) {
    let { domain: n, ephemeral: s, channelId: i, attachmentId: a, name: u, query: c } = e,
        o = `https://${n}/${s ? "ephemeral-attachments" : "attachments"}/${i}/${a}/${u}${null != c ? `?${c}` : ""}`,
        d = r.useCallback(async () => {
            let e = await O.AN(o);
            (R.A.trackLinkClicked(e), (0, H.A)(e));
        }, [o]),
        h = r.useCallback(
            (e) => {
                (0, B.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (n) => (0, l.jsx)(e, { ...n, attachmentUrl: o, attachmentName: u });
                });
            },
            [u, o],
        );
    return (0, l.jsxs)(q.A, {
        role: "link",
        href: o,
        onClick: d,
        onContextMenu: h,
        className: "attachmentLink",
        children: [(0, l.jsx)(U.P, { size: "xs", className: eP.Kk, color: "currentColor" }), u],
    });
}
var eG = t(302031),
    eL = t(785562),
    ez = t(379418),
    eU = t(254221);
let eB = {
        text: function (e) {
            let { children: n } = e;
            return n;
        },
        paragraph: function (e) {
            let { siblings: n, index: t, children: r } = e;
            return (0, l.jsxs)("span", { children: [r, t < n.length - 1 ? (0, l.jsx)("br", {}) : null] });
        },
        empty: function () {
            return "\n";
        },
        emoji: function (e) {
            let { value: n, type: t } = e,
                s = r.useContext(G);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(L, { value: n, jumboable: s });
                case "custom":
                    return (0, l.jsx)(z, { value: n, jumboable: s });
            }
        },
        link: function (e) {
            let { type: n, value: t, children: r } = e;
            switch (n) {
                case "normal": {
                    let { url: e, title: n } = t;
                    if ((0, J.vS)(e)) return (0, l.jsx)(en, { url: e });
                    if (Q.test(e))
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(en, { url: e })],
                        });
                    return (0, l.jsx)(F.A, { title: n, href: e, children: (0, l.jsx)("span", { children: r }) });
                }
                case "mention":
                    switch (t.type) {
                        case "channel":
                        case "message":
                            let {
                                    value: { guild_id: s, channel_id: i },
                                } = t,
                                a = "message_id" in t.value ? t.value.message_id : void 0;
                            return (0, l.jsx)(eC, {
                                channelId: String(i),
                                guildId: String(s),
                                messageId: null != a ? String(a) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: u, bucket: c, channel_id: o, attachment_id: d, name: h, query: m },
                            } = t;
                            return (0, l.jsx)(eT, {
                                domain: u,
                                ephemeral: "ephemeral_attachments" === c,
                                channelId: String(o),
                                attachmentId: String(d),
                                name: h,
                                query: m,
                            });
                        default:
                            (0, D.xb)(t);
                    }
                    break;
                default:
                    (0, D.xb)(n);
            }
        },
        list: function (e) {
            let { type: n, children: t, value: r, items: s } = e;
            switch (n) {
                case "ordered":
                    let i = (r + s.length - 1).toString().length;
                    return (0, l.jsx)("ol", { start: r, style: { "--totalCharacters": i }, children: t });
                case "unordered":
                    return (0, l.jsx)("ul", { children: t });
            }
        },
        listItem: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("li", { children: n });
        },
        code: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("code", { className: "inline", children: n });
        },
        code_block: function (e) {
            let { language: n, content: r } = e;
            function s() {
                return (0, l.jsx)("code", { className: f()(C.kw, "hljs"), children: r });
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: y.Hy,
                    children: [
                        v.p5 ? (0, l.jsx)("div", { className: y.lB, children: (0, l.jsx)(S, { text: r }) }) : null,
                        (0, l.jsx)(k.l, {
                            location: "CodeBlock",
                            code: r,
                            lang: n,
                            className: f()(C.kw, "hljs"),
                            children: (0, l.jsx)(b.c2, {
                                createPromise: () =>
                                    Promise.all([t.e("818449"), t.e("175134")]).then(t.bind(t, 981776)),
                                webpackId: 981776,
                                renderFallback: s,
                                render: (e) => {
                                    if (!(null != n && e.hasLanguage(n))) return s();
                                    {
                                        let t = e.highlight(n, r, !0);
                                        return null == t
                                            ? s()
                                            : (0, l.jsx)("code", {
                                                  className: f()(C.kw, "hljs", t.language),
                                                  dangerouslySetInnerHTML: { __html: t.value },
                                              });
                                    }
                                },
                            }),
                        }),
                    ],
                }),
            });
        },
        quote: function (e) {
            let { children: n } = e;
            return (0, l.jsxs)("div", {
                className: y.h,
                children: [(0, l.jsx)("div", { className: y.r }), (0, l.jsx)("blockquote", { children: n })],
            });
        },
        bold: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("strong", { children: n });
        },
        italic: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("em", { children: n });
        },
        underline: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("u", { children: n });
        },
        strikethrough: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("s", { children: n });
        },
        mention: function (e) {
            let { type: n, value: t } = e;
            switch (n) {
                case "channel":
                    return (0, l.jsx)(eC, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(e_, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eN, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eE, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eE, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "command":
                    return (0, l.jsx)(e$, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eM, {
                        route: ek[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, D.xb)(n);
        },
        heading: function (e) {
            let { level: n, children: t } = e,
                r = `h${n}`;
            return (0, l.jsx)(r, { children: t });
        },
        small: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("small", { children: n });
        },
        spoiler: function (e) {
            let { children: n, node: t } = e,
                s = r.useMemo(() => Array.from((0, P.t)([t])).some((e) => "link" === e.type), [t]),
                i = M();
            return (
                r.useEffect(() => {
                    i?.setHasSpoilerEmbeds?.(s);
                }, [i, s]),
                (0, l.jsx)(eG.Ay, { type: eG.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, ez.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eL.A, { node: r });
        },
    },
    eF = (0, a.Ts)();
function eH(e) {
    let { content: n, allowJumboEmoji: t = !0 } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eR, { content: n, error: t });
        },
        children: (0, l.jsx)(eJ, { content: n, allowJumboEmoji: t }),
    });
}
function eJ(e) {
    let { content: n, allowJumboEmoji: t } = e;
    r.use(eF);
    let s = (0, h.bG)([m.A], () => m.A.isDeveloper, []) ? j : x,
        u = r.useMemo(() => (0, a.qg)(n, s), [n, s]),
        c = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, P.t)(e))
                        switch (t.type) {
                            case "emoji":
                                n += 1;
                                break;
                            case "paragraph":
                            case "empty":
                                break;
                            case "text":
                                if ("" !== t.value.trim()) return !1;
                                break;
                            default:
                                return !1;
                        }
                    return n <= T.MAX_EMOJI_TO_BE_JUMBO;
                })(u),
            [t, u],
        );
    return (0, l.jsx)(G.Provider, { value: c, children: (0, l.jsx)(i.$, { nodes: u, renderers: eB }) });
}
function eR(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            d.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(c.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eU.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), ey.intl.string(ey.t.dpFK4M)],
                }),
            ],
        })
    );
}
var eq = t(174459),
    eO = t(903369),
    eD = t(521981),
    eK = t(594808),
    eW = t(652215),
    eX = t(910379);
function eQ(e, n) {
    let {
            hideSimpleEmbedContent: i,
            formatInline: a = !1,
            noStyleAndInteraction: u = !1,
            allowHeading: c = !1,
            allowList: o = !1,
            allowLinks: d = !1,
            allowDevLinks: h = !1,
            previewLinkTarget: m = !1,
            viewingChannelId: x,
            postProcessor: j,
        } = n,
        g = (function (e) {
            let { location: n } = e;
            return s.useConfig({ location: n });
        })({ location: "useMessageRenderedContent" }),
        [f, p] = r.useState(!1),
        I = r.useCallback((e) => {
            e && p(!0);
        }, []);
    return (
        r.useEffect(() => {
            p(!1);
        }, [e.content]),
        r.useMemo(() => {
            if (null != e.customRenderedContent) return e.customRenderedContent;
            if (e.isUnsupported)
                return { content: ey.intl.string(ey.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(eW.pr7.LOADING))
                return { content: (0, l.jsx)(eK.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === eW.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, eX, {
                    track: (e, n) => {
                        eq.default.track(e, n);
                    },
                });
            }
            return g.enabled && null == j
                ? {
                      content: (0, l.jsx)(r.Suspense, {
                          children: (0, l.jsx)(E.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: x,
                                  guildId: (0, eO.U)(e),
                                  authorId: e.author?.id,
                                  setHasSpoilerEmbeds: I,
                              },
                              children: (0, l.jsx)(eH, {
                                  content: e.content,
                                  allowJumboEmoji: e.type !== eW.lAJ.MEDIA_MENTION_MESSAGE,
                              }),
                          }),
                      }),
                      hasSpoilerEmbeds: f,
                      hasBailedAst: !1,
                  }
                : (0, eD.Ay)(e, {
                      hideSimpleEmbedContent: i,
                      formatInline: a,
                      noStyleAndInteraction: u,
                      allowHeading: c,
                      allowList: o,
                      allowLinks: d,
                      allowDevLinks: h,
                      previewLinkTarget: m,
                      viewingChannelId: x,
                      allowGameMentions: !0,
                      postProcessor: j,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            i,
            a,
            u,
            c,
            o,
            d,
            m,
            h,
            x,
            j,
            g.enabled,
            f,
        ])
    );
}
