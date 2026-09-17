(t.r(n), t.d(n, { default: () => eH }));
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
    v = t(268218),
    A = t(586172),
    k = t(957565),
    b = t(165648),
    y = t(969490);
function C(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(f.D, {
        onClick: function () {
            (0, k.C)(
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
var S = t(236285),
    w = t(7584),
    N = t(930101),
    _ = t(78377),
    $ = t(690521);
let M = r.createContext([]);
function P(e) {
    let { value: n, jumboable: t } = e,
        r = $.Ay.getURL(n),
        i = w.Ay.convertSurrogateToName(n),
        s = (0, _.p)();
    return (0, l.jsx)(N.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function T(e) {
    let { value: n, jumboable: t } = e,
        r = (0, _.p)(),
        i = r?.guildId,
        s = (0, d.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
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
var z = t(588975),
    L = t(442433),
    E = t(9578),
    G = t(975807),
    H = t(380610),
    F = t(235393),
    q = t(332173),
    B = t(679164),
    U = t(403362),
    D = t(333421),
    K = t(100392),
    R = t(836156);
let Z = /^dev:\/\//i,
    Q = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    V = r.lazy(() =>
        Promise.resolve()
            .then(t.bind(t, 950980))
            .then((e) => {
                let { ExperimentEmbed: n } = e;
                return { default: n };
            }),
    ),
    W = r.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => {
                let { PlaygroundEmbed: n } = e;
                return { default: n };
            }),
    ),
    X = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => {
                let { DevToolsLinkEmbed: n } = e;
                return { default: n };
            }),
    );
function J(e) {
    let { url: n } = e,
        t =
            (0, H.vS)(n) || (0, H.h4)(n)
                ? (0, l.jsx)(Q, { url: n })
                : (0, K.W0)(n)
                  ? (0, l.jsx)(V, { url: n })
                  : (0, R.i)(n)
                    ? (0, l.jsx)(W, { url: n })
                    : (0, D.my)(n)
                      ? (0, l.jsx)(X, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var Y = t(192308),
    O = t(47167),
    ee = t(499211),
    en = t(376943),
    et = t(706083),
    el = t(78390),
    er = t(392605),
    ei = t(990474),
    es = t(232042),
    ea = t(266645),
    ec = t(906754),
    eu = t(37632),
    eo = t(593284),
    ed = t(288539),
    eh = t(734057),
    em = t(317525),
    ex = t(71393),
    ej = t(994500),
    eg = t(287809),
    ef = t(147036);
let ep = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eI = t(73510),
    ev = t(375708);
function eA(e) {
    let { channelId: n, guildId: r, messageId: i } = e,
        s = (0, ee.A)(n),
        {
            name: a,
            iconType: c,
            isForumPost: u,
            hasAccess: o,
        } = (0, d.cf)(
            [eh.A, eg.default, ej.A],
            () => {
                let e = eh.A.getChannel(n);
                return {
                    name: null != e ? (0, O.m1)(e, eg.default, ej.A) : void 0,
                    iconType: (0, ef.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, en.nc)(e),
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
                    ? (0, l.jsx)(es.A, {
                          iconType: c,
                          children: a ?? (0, l.jsx)("em", { children: ev.intl.string(ev.t.J90oLW) }),
                      })
                    : (0, l.jsx)(ek, { guildId: r, children: a })
                : (0, l.jsx)(es.A, { iconType: "locked", children: ev.intl.string(ev.t["/YzI63"]) }),
        j = null;
    return (
        null != i &&
            (j = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(eu.A, {}), (0, l.jsx)(es.A, { iconType: u ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, et.o)(r, n, i), (0, Y.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = eh.A.getChannel(n);
                (0, L.L3)(e, async () => {
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
function ek(e) {
    let { guildId: n, children: t } = e,
        r = (0, d.bG)([ex.A], () => ex.A.getGuild(n), [n]);
    return (0, l.jsxs)(ec.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(eu.A, {}) : null, t] });
}
function eb(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(ed.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function ey(e) {
    let { id: n } = e,
        t = (0, _.p)(),
        r = t?.guildId,
        i = (0, d.bG)([em.A], () => (null != r ? em.A.getRole(r, n)?.name : null) ?? ev.intl.string(ev.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(eo.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function eC(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(ea.A, { gameId: n, authorId: t?.authorId });
}
function eS(e) {
    let { roleName: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(eo.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function ew(e) {
    let { route: n, itemId: t } = e,
        r = (0, _.p)(),
        i = r?.guildId,
        s = (0, el.Q)(n),
        a = (0, d.bG)([em.A], () => (0, el.f)(em.A, n, t, i), [n, t, i]);
    return null == s
        ? null
        : (0, l.jsxs)(q.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, er.i)(i, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [s, null != a ? (0, l.jsx)(eu.A, {}) : null, a],
          });
}
function eN(e) {
    let { id: n, name: t } = e,
        i = (0, _.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eI.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(ei.gn, { node: a, children: t });
}
var e_ = t(147190);
function e$(e) {
    let { domain: n, ephemeral: i, channelId: s, attachmentId: a, name: c, query: u } = e,
        o = `https://${n}/${i ? "ephemeral-attachments" : "attachments"}/${s}/${a}/${c}${null != u ? `?${u}` : ""}`,
        d = r.useCallback(async () => {
            let e = await B.AN(o);
            (F.A.trackLinkClicked(e), (0, G.A)(e));
        }, [o]),
        h = r.useCallback(
            (e) => {
                (0, L.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (n) => (0, l.jsx)(e, { ...n, attachmentUrl: o, attachmentName: c });
                });
            },
            [c, o],
        );
    return (0, l.jsxs)(q.A, {
        role: "link",
        href: o,
        onClick: d,
        onContextMenu: h,
        className: "attachmentLink",
        children: [(0, l.jsx)(z.P, { size: "xs", className: e_.Kk, color: "currentColor" }), c],
    });
}
var eM = t(163651),
    eP = t(302031),
    eT = t(785562),
    ez = t(379418),
    eL = t(254221);
let eE = {
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
                i = r.useContext(M),
                s =
                    1 === i.length &&
                    "paragraph" === i[0].type &&
                    1 === i[0].value.length &&
                    "emoji" === i[0].value[0].type;
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(P, { value: n, jumboable: s });
                case "custom":
                    return (0, l.jsx)(T, { value: n, jumboable: s });
            }
        },
        link: function (e) {
            let { type: n, value: t, children: r } = e;
            switch (n) {
                case "normal": {
                    let { url: e, title: n } = t;
                    if ((0, H.vS)(e)) return (0, l.jsx)(J, { url: e });
                    if (Z.test(e))
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(J, { url: e })],
                        });
                    return (0, l.jsx)(E.A, { title: n, href: e, children: (0, l.jsx)("span", { children: r }) });
                }
                case "mention":
                    switch (t.type) {
                        case "channel":
                        case "message":
                            let {
                                    value: { guild_id: i, channel_id: s },
                                } = t,
                                a = "message_id" in t.value ? t.value.message_id : void 0;
                            return (0, l.jsx)(eA, {
                                channelId: String(s),
                                guildId: String(i),
                                messageId: null != a ? String(a) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: c, bucket: u, channel_id: o, attachment_id: d, name: h, query: m },
                            } = t;
                            return (0, l.jsx)(e$, {
                                domain: c,
                                ephemeral: "ephemeral_attachments" === u,
                                channelId: String(o),
                                attachmentId: String(d),
                                name: h,
                                query: m,
                            });
                        default:
                            (0, U.xb)(t);
                    }
                    break;
                default:
                    (0, U.xb)(n);
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
                        k.p5 ? (0, l.jsx)("div", { className: b.lB, children: (0, l.jsx)(C, { text: r }) }) : null,
                        (0, l.jsx)(A.l, {
                            location: "CodeBlock",
                            code: r,
                            lang: n,
                            className: g()(y.kw, "hljs"),
                            children: (0, l.jsx)(v.c2, {
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
                    return (0, l.jsx)(eA, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eb, { id: String(t) });
                case "role":
                    return (0, l.jsx)(ey, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eS, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eS, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eC, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eN, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(ew, {
                        route: ep[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, U.xb)(n);
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
                i = r.useMemo(() => Array.from((0, eM.t)([t])).some((e) => "link" === e.type), [t]),
                s = (0, _.p)();
            return (
                r.useEffect(() => {
                    s?.setHasSpoilerEmbeds?.(i);
                }, [s, i]),
                (0, l.jsx)(eP.Ay, { type: eP.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, ez.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eT.A, { node: r });
        },
    },
    eG = null;
function eH(e) {
    let { content: n } = e;
    return (0, l.jsx)(a.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eq, { content: n, error: t });
        },
        children: (0, l.jsx)(eF, { content: n }),
    });
}
function eF(e) {
    let { content: n } = e;
    ((eG ??= (0, s.Ts)()), r.use(eG));
    let t = (0, d.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        a = r.useMemo(() => (0, s.qg)(n, t), [n, t]);
    return (0, l.jsx)(M.Provider, { value: a, children: (0, l.jsx)(i.$, { nodes: a, renderers: eE }) });
}
function eq(e) {
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
