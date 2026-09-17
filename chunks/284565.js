(t.r(n), t.d(n, { default: () => eF }));
var l = t(477900),
    r = t(582128),
    i = t(244377),
    s = t(609541),
    a = t(292442),
    c = t(834730),
    u = t(791606),
    o = t(38405),
    d = t(17928),
    h = t(540999);
let m = [
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
    x = [...m, "dev_link"];
var j = t(503698),
    g = t.n(j),
    f = t(939249),
    p = t(933832),
    I = t(624479),
    k = t(268218),
    A = t(586172),
    v = t(957565),
    b = t(165648),
    y = t(969490);
function C(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(f.D, {
        onClick: function () {
            (0, v.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, l.jsx)(p.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(I.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var w = t(236285),
    S = t(7584),
    N = t(930101),
    _ = t(78377),
    M = t(690521),
    $ = t(163651),
    P = t(307731);
let T = r.createContext(!1);
function E(e) {
    let { value: n, jumboable: t } = e,
        r = M.Ay.getURL(n),
        i = S.Ay.convertSurrogateToName(n),
        s = (0, _.p)();
    return (0, l.jsx)(N.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function z(e) {
    let { value: n, jumboable: t } = e,
        r = (0, _.p)(),
        i = r?.guildId,
        s = (0, d.bG)([w.Ay], () => w.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        a = s?.name ?? n.name;
    return (
        null != s && s.require_colons && (a = `:${s.name}:`),
        (0, l.jsx)(N.X, {
            node: { name: a, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var L = t(588975),
    G = t(442433),
    H = t(9578),
    F = t(975807),
    q = t(380610),
    B = t(235393),
    U = t(332173),
    J = t(679164),
    D = t(403362),
    K = t(333421),
    O = t(100392),
    R = t(836156);
let X = /^dev:\/\//i,
    Z = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    Q = r.lazy(() =>
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
    W = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => {
                let { DevToolsLinkEmbed: n } = e;
                return { default: n };
            }),
    );
function Y(e) {
    let { url: n } = e,
        t =
            (0, q.vS)(n) || (0, q.h4)(n)
                ? (0, l.jsx)(Z, { url: n })
                : (0, O.W0)(n)
                  ? (0, l.jsx)(Q, { url: n })
                  : (0, R.i)(n)
                    ? (0, l.jsx)(V, { url: n })
                    : (0, K.my)(n)
                      ? (0, l.jsx)(W, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var ee = t(192308),
    en = t(47167),
    et = t(499211),
    el = t(376943),
    er = t(706083),
    ei = t(78390),
    es = t(392605),
    ea = t(990474),
    ec = t(232042),
    eu = t(266645),
    eo = t(906754),
    ed = t(37632),
    eh = t(593284),
    em = t(288539),
    ex = t(734057),
    ej = t(317525),
    eg = t(71393),
    ef = t(994500),
    ep = t(287809),
    eI = t(147036);
let ek = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eA = t(73510),
    ev = t(375708);
function eb(e) {
    let { channelId: n, guildId: r, messageId: i } = e,
        s = (0, et.A)(n),
        {
            name: a,
            iconType: c,
            isForumPost: u,
            hasAccess: o,
        } = (0, d.cf)(
            [ex.A, ep.default, ef.A],
            () => {
                let e = ex.A.getChannel(n);
                return {
                    name: null != e ? (0, en.m1)(e, ep.default, ef.A) : void 0,
                    iconType: (0, eI.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, el.nc)(e),
                };
            },
            [n],
        ),
        h = (0, _.p)();
    if (null == c) return;
    let m = r === h?.guildId || null == r,
        x =
            o || s.isSubscriptionGated
                ? m || null == a
                    ? (0, l.jsx)(ec.A, {
                          iconType: c,
                          children: a ?? (0, l.jsx)("em", { children: ev.intl.string(ev.t.J90oLW) }),
                      })
                    : (0, l.jsx)(ey, { guildId: r, children: a })
                : (0, l.jsx)(ec.A, { iconType: "locked", children: ev.intl.string(ev.t["/YzI63"]) }),
        j = null;
    return (
        null != i &&
            (j = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ed.A, {}), (0, l.jsx)(ec.A, { iconType: u ? "post" : "message" })],
            })),
        (0, l.jsxs)(U.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, er.o)(r, n, i), (0, ee.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = ex.A.getChannel(n);
                (0, G.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("343266"), t.e("404391")]).then(t.bind(t, 254106));
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: i });
                });
            },
            className: "channelMention",
            children: [x, j],
        })
    );
}
function ey(e) {
    let { guildId: n, children: t } = e,
        r = (0, d.bG)([eg.A], () => eg.A.getGuild(n), [n]);
    return (0, l.jsxs)(eo.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ed.A, {}) : null, t] });
}
function eC(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(em.A, {
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
        t = (0, _.p)(),
        r = t?.guildId,
        i = (0, d.bG)([ej.A], () => (null != r ? ej.A.getRole(r, n)?.name : null) ?? ev.intl.string(ev.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(eh.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function eS(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(eu.A, { gameId: n, authorId: t?.authorId });
}
function eN(e) {
    let { roleName: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(eh.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function e_(e) {
    let { route: n, itemId: t } = e,
        r = (0, _.p)(),
        i = r?.guildId,
        s = (0, ei.Q)(n),
        a = (0, d.bG)([ej.A], () => (0, ei.f)(ej.A, n, t, i), [n, t, i]);
    return null == s
        ? null
        : (0, l.jsxs)(U.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, es.i)(i, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [s, null != a ? (0, l.jsx)(ed.A, {}) : null, a],
          });
}
function eM(e) {
    let { id: n, name: t } = e,
        i = (0, _.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eA.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(ea.gn, { node: a, children: t });
}
var e$ = t(147190);
function eP(e) {
    let { domain: n, ephemeral: i, channelId: s, attachmentId: a, name: c, query: u } = e,
        o = `https://${n}/${i ? "ephemeral-attachments" : "attachments"}/${s}/${a}/${c}${null != u ? `?${u}` : ""}`,
        d = r.useCallback(async () => {
            let e = await J.AN(o);
            (B.A.trackLinkClicked(e), (0, F.A)(e));
        }, [o]),
        h = r.useCallback(
            (e) => {
                (0, G.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (n) => (0, l.jsx)(e, { ...n, attachmentUrl: o, attachmentName: c });
                });
            },
            [c, o],
        );
    return (0, l.jsxs)(U.A, {
        role: "link",
        href: o,
        onClick: d,
        onContextMenu: h,
        className: "attachmentLink",
        children: [(0, l.jsx)(L.P, { size: "xs", className: e$.Kk, color: "currentColor" }), c],
    });
}
var eT = t(302031),
    eE = t(785562),
    ez = t(379418),
    eL = t(254221);
let eG = {
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
                    return (0, l.jsx)(E, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(z, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { type: n, value: t, children: r } = e;
            switch (n) {
                case "normal": {
                    let { url: e, title: n } = t;
                    if ((0, q.vS)(e)) return (0, l.jsx)(Y, { url: e });
                    if (X.test(e))
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(Y, { url: e })],
                        });
                    return (0, l.jsx)(H.A, { title: n, href: e, children: (0, l.jsx)("span", { children: r }) });
                }
                case "mention":
                    switch (t.type) {
                        case "channel":
                        case "message":
                            let {
                                    value: { guild_id: i, channel_id: s },
                                } = t,
                                a = "message_id" in t.value ? t.value.message_id : void 0;
                            return (0, l.jsx)(eb, {
                                channelId: String(s),
                                guildId: String(i),
                                messageId: null != a ? String(a) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: c, bucket: u, channel_id: o, attachment_id: d, name: h, query: m },
                            } = t;
                            return (0, l.jsx)(eP, {
                                domain: c,
                                ephemeral: "ephemeral_attachments" === u,
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
                return (0, l.jsx)("code", { className: g()(y.kw, "hljs"), children: r });
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: b.Hy,
                    children: [
                        v.p5 ? (0, l.jsx)("div", { className: b.lB, children: (0, l.jsx)(C, { text: r }) }) : null,
                        (0, l.jsx)(A.l, {
                            location: "CodeBlock",
                            code: r,
                            lang: n,
                            className: g()(y.kw, "hljs"),
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
                                                  className: g()(y.kw, "hljs", t.language),
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
                className: b.h,
                children: [(0, l.jsx)("div", { className: b.r }), (0, l.jsx)("blockquote", { children: n })],
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
                    return (0, l.jsx)(eb, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eC, { id: String(t) });
                case "role":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eN, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eN, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eS, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eM, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(e_, {
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
                i = r.useMemo(() => Array.from((0, $.t)([t])).some((e) => "link" === e.type), [t]),
                s = (0, _.p)();
            return (
                r.useEffect(() => {
                    s?.setHasSpoilerEmbeds?.(i);
                }, [s, i]),
                (0, l.jsx)(eT.Ay, { type: eT.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, ez.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eE.A, { node: r });
        },
    },
    eH = null;
function eF(e) {
    let { content: n, allowJumboEmoji: t = !0 } = e;
    return (0, l.jsx)(a.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eB, { content: n, error: t });
        },
        children: (0, l.jsx)(eq, { content: n, allowJumboEmoji: t }),
    });
}
function eq(e) {
    let { content: n, allowJumboEmoji: t } = e;
    ((eH ??= (0, s.Ts)()), r.use(eH));
    let a = (0, d.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        c = r.useMemo(() => (0, s.qg)(n, a), [n, a]),
        u = r.useMemo(
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
                    return n <= P.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [t, c],
        );
    return (0, l.jsx)(T.Provider, { value: u, children: (0, l.jsx)(i.$, { nodes: c, renderers: eG }) });
}
function eB(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            o.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(c.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eL.g,
                    children: [(0, l.jsx)(u.A, { width: 16, height: 16 }), ev.intl.string(ev.t.dpFK4M)],
                }),
            ],
        })
    );
}
