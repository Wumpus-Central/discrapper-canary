t.d(n, { A: () => eZ });
var l = t(477900),
    r = t(582128);
let i = (0, t(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var a = t(244377),
    s = t(609541),
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
    g = [...x, "dev_link"];
var j = t(503698),
    f = t.n(j),
    p = t(939249),
    v = t(933832),
    I = t(624479),
    k = t(268218),
    A = t(586172),
    b = t(957565),
    y = t(165648),
    C = t(969490);
function S(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(p.D, {
        onClick: function () {
            (0, b.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, l.jsx)(v.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(I.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var _ = t(236285),
    N = t(7584),
    w = t(930101);
let M = r.createContext(null);
function E() {
    return r.useContext(M);
}
var L = t(690521),
    $ = t(163651),
    G = t(307731);
let P = r.createContext(!1);
function T(e) {
    let { value: n, jumboable: t } = e,
        r = L.Ay.getURL(n),
        i = N.Ay.convertSurrogateToName(n),
        a = E();
    return (0, l.jsx)(w.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function z(e) {
    let { value: n, jumboable: t } = e,
        r = E(),
        i = r?.guildId,
        a = (0, h.bG)([_.Ay], () => _.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        s = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (s = `:${a.name}:`),
        (0, l.jsx)(w.X, {
            node: { name: s, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var U = t(588975),
    B = t(442433),
    F = t(9578),
    q = t(975807),
    H = t(380610),
    J = t(235393),
    R = t(332173),
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
            (0, H.vS)(n) || (0, H.h4)(n)
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
    ei = t(376943),
    ea = t(706083),
    es = t(78390),
    eu = t(392605),
    ec = t(990474),
    eo = t(232042),
    ed = t(266645),
    eh = t(906754),
    em = t(37632),
    ex = t(593284),
    eg = t(288539),
    ej = t(734057),
    ef = t(317525),
    ep = t(71393),
    ev = t(994500),
    eI = t(287809),
    ek = t(147036);
let eA = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eb = t(73510),
    ey = t(375708);
function eC(e) {
    let { channelId: n, guildId: r, messageId: i } = e,
        a = (0, er.A)(n),
        {
            name: s,
            iconType: u,
            isForumPost: c,
            hasAccess: o,
        } = (0, h.cf)(
            [ej.A, eI.default, ev.A],
            () => {
                let e = ej.A.getChannel(n);
                return {
                    name: null != e ? (0, el.m1)(e, eI.default, ev.A) : void 0,
                    iconType: (0, ek.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, ei.nc)(e),
                };
            },
            [n],
        ),
        d = E();
    if (null == u) return;
    let m = r === d?.guildId || null == r,
        x =
            o || a.isSubscriptionGated
                ? m || null == s
                    ? (0, l.jsx)(eo.A, {
                          iconType: u,
                          children: s ?? (0, l.jsx)("em", { children: ey.intl.string(ey.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eS, { guildId: r, children: s })
                : (0, l.jsx)(eo.A, { iconType: "locked", children: ey.intl.string(ey.t["/YzI63"]) }),
        g = null;
    return (
        null != i &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(em.A, {}), (0, l.jsx)(eo.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(R.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, ea.o)(r, n, i), (0, et.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = ej.A.getChannel(n);
                (0, B.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("343266"), t.e("404391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: i });
                });
            },
            className: "channelMention",
            children: [x, g],
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
        t = E();
    return (0, l.jsx)(eg.A, {
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
        t = E(),
        r = t?.guildId,
        i = (0, h.bG)([ef.A], () => (null != r ? ef.A.getRole(r, n)?.name : null) ?? ey.intl.string(ey.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ex.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function ew(e) {
    let { id: n } = e,
        t = E();
    return (0, l.jsx)(ed.A, { gameId: n, authorId: t?.authorId });
}
function eM(e) {
    let { roleName: n } = e,
        t = E();
    return (0, l.jsx)(ex.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eE(e) {
    let { route: n, itemId: t } = e,
        r = E(),
        i = r?.guildId,
        a = (0, es.Q)(n),
        s = (0, h.bG)([ef.A], () => (0, es.f)(ef.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(R.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, eu.i)(i, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [a, null != s ? (0, l.jsx)(em.A, {}) : null, s],
          });
}
function eL(e) {
    let { id: n, name: t } = e,
        i = E(),
        a = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eb.v4}${e}`).join("")}`;
        }, [n, t]),
        s = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: a }),
            [i?.channelId, a, n, t],
        );
    return (0, l.jsx)(ec.gn, { node: s, children: t });
}
var e$ = t(147190);
function eG(e) {
    let { domain: n, ephemeral: i, channelId: a, attachmentId: s, name: u, query: c } = e,
        o = `https://${n}/${i ? "ephemeral-attachments" : "attachments"}/${a}/${s}/${u}${null != c ? `?${c}` : ""}`,
        d = r.useCallback(async () => {
            let e = await O.AN(o);
            (J.A.trackLinkClicked(e), (0, q.A)(e));
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
    return (0, l.jsxs)(R.A, {
        role: "link",
        href: o,
        onClick: d,
        onContextMenu: h,
        className: "attachmentLink",
        children: [(0, l.jsx)(U.P, { size: "xs", className: e$.Kk, color: "currentColor" }), u],
    });
}
var eP = t(302031),
    eT = t(785562),
    ez = t(379418);
t(321073);
var eU = t(448767);
function eB(e) {
    return "link" === e.type;
}
var eF = t(254221);
let eq = {
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
                i = r.useContext(P);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(T, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(z, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { type: n, value: t, children: r } = e;
            switch (n) {
                case "normal": {
                    let { url: e, title: n } = t;
                    if ((0, H.vS)(e)) return (0, l.jsx)(en, { url: e });
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
                                    value: { guild_id: i, channel_id: a },
                                } = t,
                                s = "message_id" in t.value ? t.value.message_id : void 0;
                            return (0, l.jsx)(eC, {
                                channelId: String(a),
                                guildId: String(i),
                                messageId: null != s ? String(s) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: u, bucket: c, channel_id: o, attachment_id: d, name: h, query: m },
                            } = t;
                            return (0, l.jsx)(eG, {
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
            let { type: n, children: t, value: r, items: i } = e;
            switch (n) {
                case "ordered":
                    let a = (r + i.length - 1).toString().length;
                    return (0, l.jsx)("ol", { start: r, style: { "--totalCharacters": a }, children: t });
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
            function i() {
                return (0, l.jsx)("code", { className: f()(C.kw, "hljs"), children: r });
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: y.Hy,
                    children: [
                        b.p5 ? (0, l.jsx)("div", { className: y.lB, children: (0, l.jsx)(S, { text: r }) }) : null,
                        (0, l.jsx)(A.l, {
                            location: "CodeBlock",
                            code: r,
                            lang: n,
                            className: f()(C.kw, "hljs"),
                            children: (0, l.jsx)(k.c2, {
                                createPromise: () =>
                                    Promise.all([t.e("818449"), t.e("175134")]).then(t.bind(t, 981776)),
                                webpackId: 981776,
                                renderFallback: i,
                                render: (e) => {
                                    if (!(null != n && e.hasLanguage(n))) return i();
                                    {
                                        let t = e.highlight(n, r, !0);
                                        return null == t
                                            ? i()
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
                    return (0, l.jsx)(eM, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eM, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eL, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eE, {
                        route: eA[t.type],
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
                i = r.useMemo(() => Array.from((0, $.t)([t])).some((e) => "link" === e.type), [t]),
                a = E();
            return (
                r.useEffect(() => {
                    a?.setHasSpoilerEmbeds?.(i);
                }, [a, i]),
                (0, l.jsx)(eP.Ay, { type: eP.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, ez.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eT.A, { node: r });
        },
    },
    eH = (0, s.Ts)();
function eJ(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eO, { content: n, error: t });
        },
        children: (0, l.jsx)(eR, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eR(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: i } = e;
    r.use(eH);
    let u = (0, h.bG)([m.A], () => m.A.isDeveloper, []) ? g : x,
        c = r.useMemo(() => (0, s.qg)(n, u), [n, u]),
        o = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, $.t)(e))
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
                    return n <= G.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [t, c],
        ),
        d = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eU.tq : (0, eU.dn)(n.value, eB);
                        })(e);
                    return t && (0, eU.iz)(l)
                        ? []
                        : (function (e, n) {
                              let t = [],
                                  l = !1;
                              for (let r of e) {
                                  if ("paragraph" !== r.type) {
                                      t.push(r);
                                      continue;
                                  }
                                  let e = r.value.filter((e) => {
                                      let t = eB(e) && "normal" === e.value.type ? e.value.value.url : null;
                                      return null == t || !(0, eU.c_)(t, n);
                                  });
                                  if (e.length === r.value.length) {
                                      t.push(r);
                                      continue;
                                  }
                                  ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                              }
                              return l ? t : e;
                          })(e, { onlyLinkContent: l.onlyLinks, stripGameServerShareLinks: !0 });
                })(c, { hideSingleLinkContent: i }),
            [c, i],
        );
    return (0, l.jsx)(P.Provider, { value: o, children: (0, l.jsx)(a.$, { nodes: d, renderers: eq }) });
}
function eO(e) {
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
                    className: eF.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), ey.intl.string(ey.t.dpFK4M)],
                }),
            ],
        })
    );
}
var eD = t(174459),
    eK = t(903369),
    eW = t(521981),
    eX = t(594808),
    eQ = t(652215),
    eY = t(910379);
function eZ(e, n) {
    let {
            hideSimpleEmbedContent: a = !0,
            formatInline: s = !1,
            noStyleAndInteraction: u = !1,
            allowHeading: c = !1,
            allowList: o = !1,
            allowLinks: d = !1,
            allowDevLinks: h = !1,
            previewLinkTarget: m = !1,
            viewingChannelId: x,
            postProcessor: g,
        } = n,
        j = (function (e) {
            let { location: n } = e;
            return i.useConfig({ location: n });
        })({ location: "useMessageRenderedContent" }),
        [f, p] = r.useState(!1),
        v = r.useCallback((e) => {
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
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(eQ.pr7.LOADING))
                return { content: (0, l.jsx)(eX.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === eQ.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, eY, {
                    track: (e, n) => {
                        eD.default.track(e, n);
                    },
                });
            }
            return j.enabled && null == g
                ? {
                      content: (0, l.jsx)(r.Suspense, {
                          children: (0, l.jsx)(M.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: x,
                                  guildId: (0, eK.U)(e),
                                  authorId: e.author?.id,
                                  setHasSpoilerEmbeds: v,
                              },
                              children: (0, l.jsx)(eJ, {
                                  content: e.content,
                                  allowJumboEmoji: e.type !== eQ.lAJ.MEDIA_MENTION_MESSAGE,
                                  hideSingleLinkContent: a && (0, eU.k5)(e.embeds),
                              }),
                          }),
                      }),
                      hasSpoilerEmbeds: f,
                      hasBailedAst: !1,
                  }
                : (0, eW.Ay)(e, {
                      hideSimpleEmbedContent: a,
                      formatInline: s,
                      noStyleAndInteraction: u,
                      allowHeading: c,
                      allowList: o,
                      allowLinks: d,
                      allowDevLinks: h,
                      previewLinkTarget: m,
                      viewingChannelId: x,
                      allowGameMentions: !0,
                      postProcessor: g,
                  });
        }, [
            e.content,
            e.customRenderedContent,
            e.embeds,
            e.interaction,
            e.state,
            e.type,
            a,
            s,
            u,
            c,
            o,
            d,
            m,
            h,
            x,
            g,
            j.enabled,
            f,
        ])
    );
}
