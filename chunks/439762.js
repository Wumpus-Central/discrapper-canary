t.d(n, { A: () => e1 });
var l = t(477900),
    r = t(582128);
let i = (0, t(945810).mj)({
    name: "2025-04-native-markdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = t(323448),
    a = t(161879),
    u = t(292442),
    o = t(834730),
    c = t(791606),
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
    I = t(933832),
    A = t(624479),
    k = t(268218),
    v = t(586172),
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
            ? (0, l.jsx)(I.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(A.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var N = t(236285),
    E = t(7584),
    M = t(930101);
let w = r.createContext(null);
function _() {
    return r.useContext(w);
}
var L = t(690521),
    G = t(757804),
    P = t(307731);
let T = r.createContext(!1);
function z(e) {
    let { value: n, jumboable: t } = e,
        r = L.Ay.getURL(n),
        i = E.Ay.convertSurrogateToName(n),
        s = _();
    return (0, l.jsx)(M.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function U(e) {
    let { value: n, jumboable: t } = e,
        r = _(),
        i = r?.guildId,
        s = (0, h.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        a = s?.name ?? n.name;
    return (
        null != s && s.require_colons && (a = `:${s.name}:`),
        (0, l.jsx)(M.X, {
            node: { name: a, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var $ = t(588975),
    B = t(442433),
    F = t(9578),
    J = t(975807),
    D = t(380610),
    H = t(235393),
    R = t(258072),
    q = t(332173),
    O = t(679164),
    K = t(734057),
    W = t(123917),
    X = t(376943),
    Q = t(333421),
    Y = t(100392),
    Z = t(836156);
let V = /^dev:\/\//i,
    ee = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    en = r.lazy(() =>
        Promise.resolve()
            .then(t.bind(t, 950980))
            .then((e) => {
                let { ExperimentEmbed: n } = e;
                return { default: n };
            }),
    ),
    et = r.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => {
                let { PlaygroundEmbed: n } = e;
                return { default: n };
            }),
    ),
    el = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => {
                let { DevToolsLinkEmbed: n } = e;
                return { default: n };
            }),
    );
function er(e) {
    let { url: n } = e,
        t =
            (0, D.vS)(n) || (0, D.h4)(n)
                ? (0, l.jsx)(ee, { url: n })
                : (0, Y.W0)(n)
                  ? (0, l.jsx)(en, { url: n })
                  : (0, Z.i)(n)
                    ? (0, l.jsx)(et, { url: n })
                    : (0, Q.my)(n)
                      ? (0, l.jsx)(el, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var ei = t(192308),
    es = t(47167),
    ea = t(499211),
    eu = t(706083),
    eo = t(78390),
    ec = t(392605),
    ed = t(990474),
    eh = t(232042),
    em = t(266645),
    ex = t(906754),
    eg = t(37632),
    ej = t(593284),
    ef = t(288539),
    ep = t(317525),
    eI = t(71393),
    eA = t(994500),
    ek = t(287809),
    ev = t(147036),
    eb = t(403362);
let ey = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eC = t(73510),
    eS = t(375708);
function eN(e) {
    let { channelId: n, guildId: r, messageId: i } = e,
        s = (0, ea.A)(n),
        {
            name: a,
            iconType: u,
            isForumPost: o,
            hasAccess: c,
        } = (0, h.cf)(
            [K.A, ek.default, eA.A],
            () => {
                let e = K.A.getChannel(n);
                return {
                    name: null != e ? (0, es.m1)(e, ek.default, eA.A) : void 0,
                    iconType: (0, ev.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, X.nc)(e),
                };
            },
            [n],
        ),
        d = _();
    if (null == u) return;
    let m = r === d?.guildId || null == r,
        x =
            c || s.isSubscriptionGated
                ? m || null == a
                    ? (0, l.jsx)(eh.A, {
                          iconType: u,
                          children: a ?? (0, l.jsx)("em", { children: eS.intl.string(eS.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eE, { guildId: r, children: a })
                : (0, l.jsx)(eh.A, { iconType: "locked", children: eS.intl.string(eS.t["/YzI63"]) }),
        g = null;
    return (
        null != i &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(eg.A, {}), (0, l.jsx)(eh.A, { iconType: o ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, eu.o)(r, n, i), (0, ei.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = K.A.getChannel(n);
                (0, B.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                        t.bind(t, 254106),
                    );
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: i });
                });
            },
            className: "channelMention",
            children: [x, g],
        })
    );
}
function eE(e) {
    let { guildId: n, children: t } = e,
        r = (0, h.bG)([eI.A], () => eI.A.getGuild(n), [n]);
    return (0, l.jsxs)(ex.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(eg.A, {}) : null, t] });
}
function eM(e) {
    let { id: n } = e,
        t = _();
    return (0, l.jsx)(ef.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function ew(e) {
    let { id: n } = e,
        t = _(),
        r = t?.guildId,
        i = (0, h.bG)([ep.A], () => (null != r ? ep.A.getRole(r, n)?.name : null) ?? eS.intl.string(eS.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ej.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function e_(e) {
    let { id: n } = e,
        t = _();
    return (0, l.jsx)(em.A, { gameId: n, authorId: t?.authorId });
}
function eL(e) {
    let { roleName: n } = e,
        t = _();
    return (0, l.jsx)(ej.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eG(e) {
    let { route: n, itemId: t } = e,
        r = _(),
        i = r?.guildId,
        s = (0, eo.Q)(n),
        a = (0, h.bG)([ep.A], () => (0, eo.f)(ep.A, n, t, i), [n, t, i]);
    return null == s
        ? null
        : (0, l.jsxs)(q.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, ec.i)(i, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [s, null != a ? (0, l.jsx)(eg.A, {}) : null, a],
          });
}
function eP(e) {
    let { id: n, name: t } = e,
        i = _(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eC.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(ed.gn, { node: a, children: t });
}
var eT = t(147190);
function ez(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i } = e,
        s = (0, h.bG)([K.A], () => (null != i && null == K.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eN, { channelId: s, guildId: n, messageId: r });
}
function eU(e) {
    let { url: n, name: i } = e,
        s = r.useCallback(async () => {
            let e = await O.AN(n);
            (H.A.trackLinkClicked(e), (0, J.A)(e));
        }, [n]),
        a = r.useCallback(
            (e) => {
                (0, B.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(q.A, {
        role: "link",
        href: n,
        onClick: s,
        onContextMenu: a,
        className: "attachmentLink",
        children: [(0, l.jsx)($.P, { size: "xs", className: eT.Kk, color: "currentColor" }), i],
    });
}
var e$ = t(302031),
    eB = t(785562),
    eF = t(379418);
t(321073);
var eJ = t(448767);
function eD(e) {
    return "link" === e.type;
}
var eH = t(254221);
let eR = {
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
                i = r.useContext(T);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(z, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(U, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: i } = e,
                s = null == n || 0 === n.length;
            if (s) {
                let e = (function (e) {
                    let n = X.En.exec(e);
                    if (null != n) {
                        let [, e, t, l, r] = n;
                        return { guildId: e, channelId: l, messageId: r, parentChannelId: t };
                    }
                    let t = X.Ju.exec(e);
                    if (null == t) return null;
                    let [, l, r, i] = t;
                    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
                        ? null
                        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0 };
                })(t);
                if (null != e) return (0, l.jsx)(ez, { ...e });
                let n = (0, R.h)(t);
                if (null != n) return (0, l.jsx)(eU, { url: t, name: n.name });
            }
            return (0, D.vS)(t)
                ? (0, l.jsx)(er, { url: t })
                : V.test(t)
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(er, { url: t })],
                    })
                  : (0, l.jsx)(F.A, {
                        title: r,
                        href: t,
                        trusted: s ? () => (0, W.m)(t, t) : void 0,
                        children: (0, l.jsx)("span", { children: i }),
                    });
        },
        list: function (e) {
            let { type: n, children: t, value: r, items: i } = e;
            switch (n) {
                case "ordered":
                    let s = (r + i.length - 1).toString().length;
                    return (0, l.jsx)("ol", { start: r, style: { "--totalCharacters": s }, children: t });
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
                        (0, l.jsx)(v.l, {
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
                    return (0, l.jsx)(eN, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eM, { id: String(t) });
                case "role":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eL, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eL, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(e_, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eP, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eG, {
                        route: ey[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, eb.xb)(n);
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
                i = r.useMemo(() => Array.from((0, G.t)([t])).some((e) => "link" === e.type), [t]),
                s = _();
            return (
                r.useEffect(() => {
                    s?.setHasSpoilerEmbeds?.(i);
                }, [s, i]),
                (0, l.jsx)(e$.Ay, { type: e$.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eF.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eB.A, { node: r });
        },
    },
    eq = (0, a.Ts)();
function eO(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eW, { content: n, error: t });
        },
        children: (0, l.jsx)(eK, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eK(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: i } = e;
    r.use(eq);
    let u = (0, h.bG)([m.A], () => m.A.isDeveloper, []) ? g : x,
        o = r.useMemo(() => (0, a.qg)(n, u), [n, u]),
        c = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, G.t)(e))
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
                    return n <= P.MAX_EMOJI_TO_BE_JUMBO;
                })(o),
            [t, o],
        ),
        d = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eJ.tq : (0, eJ.dn)(n.value, eD);
                        })(e);
                    return t && (0, eJ.iz)(l)
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
                                      let t = eD(e) ? e.value.url : null;
                                      return null == t || !(0, eJ.c_)(t, n);
                                  });
                                  if (e.length === r.value.length) {
                                      t.push(r);
                                      continue;
                                  }
                                  ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                              }
                              return l ? t : e;
                          })(e, { onlyLinkContent: l.onlyLinks, stripGameServerShareLinks: !0 });
                })(o, { hideSingleLinkContent: i }),
            [o, i],
        );
    return (0, l.jsx)(T.Provider, { value: c, children: (0, l.jsx)(s.$, { nodes: d, renderers: eR }) });
}
function eW(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            d.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(o.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eH.g,
                    children: [(0, l.jsx)(c.A, { width: 16, height: 16 }), eS.intl.string(eS.t.dpFK4M)],
                }),
            ],
        })
    );
}
var eX = t(174459),
    eQ = t(903369),
    eY = t(521981),
    eZ = t(594808),
    eV = t(652215),
    e0 = t(910379);
function e1(e, n) {
    let {
            hideSimpleEmbedContent: s = !0,
            formatInline: a = !1,
            noStyleAndInteraction: u = !1,
            allowHeading: o = !1,
            allowList: c = !1,
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
                return { content: eS.intl.string(eS.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(eV.pr7.LOADING))
                return { content: (0, l.jsx)(eZ.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
            if (e.type === eV.lAJ.CHANGELOG) {
                let { renderChangelogMessageMarkup: n } = t(550997);
                return n(e, e0, {
                    track: (e, n) => {
                        eX.default.track(e, n);
                    },
                });
            }
            return j.enabled && null == g
                ? {
                      content: (0, l.jsx)(r.Suspense, {
                          children: (0, l.jsx)(w.Provider, {
                              value: {
                                  messageId: e.id,
                                  channelId: e.channel_id,
                                  viewingChannelId: x,
                                  guildId: (0, eQ.U)(e),
                                  authorId: e.author?.id,
                                  setHasSpoilerEmbeds: I,
                              },
                              children: (0, l.jsx)(eO, {
                                  content: e.content,
                                  allowJumboEmoji: e.type !== eV.lAJ.MEDIA_MENTION_MESSAGE,
                                  hideSingleLinkContent: s && (0, eJ.k5)(e.embeds),
                              }),
                          }),
                      }),
                      hasSpoilerEmbeds: f,
                      hasBailedAst: !1,
                  }
                : (0, eY.Ay)(e, {
                      hideSimpleEmbedContent: s,
                      formatInline: a,
                      noStyleAndInteraction: u,
                      allowHeading: o,
                      allowList: c,
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
            s,
            a,
            u,
            o,
            c,
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
