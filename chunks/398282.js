(t.r(n), t.d(n, { default: () => eT }));
var l = t(477900),
    r = t(582128),
    s = t(244377),
    i = t(610209),
    a = t(292442),
    c = t(834730),
    u = t(791606),
    d = t(38405),
    o = t(17928),
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
        [t, s] = r.useState(!1);
    return (0, l.jsx)(f.D, {
        onClick: function () {
            (0, k.C)(
                n,
                () => s(!0),
                () => s(!1),
            );
        },
        children: t
            ? (0, l.jsx)(p.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(I.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var S = t(236285),
    N = t(7584),
    w = t(930101),
    _ = t(78377),
    $ = t(690521);
let M = r.createContext([]);
function P(e) {
    let { value: n, jumboable: t } = e,
        r = $.Ay.getURL(n),
        s = N.Ay.convertSurrogateToName(n),
        i = (0, _.p)();
    return (0, l.jsx)(w.H, {
        node: { name: s, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function L(e) {
    let { value: n, jumboable: t } = e,
        r = (0, _.p)(),
        s = r?.guildId,
        i = (0, o.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(s).getById(String(n.id)), [s, n.id]),
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
var T = t(588975),
    z = t(442433),
    E = t(9578),
    H = t(975807),
    F = t(380610),
    G = t(235393),
    q = t(332173),
    B = t(679164),
    U = t(403362),
    D = t(333421),
    K = t(100392),
    R = t(836156);
let Z = /^dev:\/\//i,
    V = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    W = r.lazy(() =>
        Promise.resolve()
            .then(t.bind(t, 950980))
            .then((e) => {
                let { ExperimentEmbed: n } = e;
                return { default: n };
            }),
    ),
    X = r.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => {
                let { PlaygroundEmbed: n } = e;
                return { default: n };
            }),
    ),
    J = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => {
                let { DevToolsLinkEmbed: n } = e;
                return { default: n };
            }),
    );
function Q(e) {
    let { url: n } = e,
        t =
            (0, F.vS)(n) || (0, F.h4)(n)
                ? (0, l.jsx)(V, { url: n })
                : (0, K.W0)(n)
                  ? (0, l.jsx)(W, { url: n })
                  : (0, R.i)(n)
                    ? (0, l.jsx)(X, { url: n })
                    : (0, D.my)(n)
                      ? (0, l.jsx)(J, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var Y = t(192308),
    O = t(47167),
    ee = t(499211),
    en = t(376943),
    et = t(706083),
    el = t(990474),
    er = t(232042),
    es = t(266645),
    ei = t(906754),
    ea = t(37632),
    ec = t(593284),
    eu = t(288539),
    ed = t(734057),
    eo = t(317525),
    eh = t(71393),
    em = t(994500),
    ex = t(287809),
    ej = t(147036),
    eg = t(73510),
    ef = t(375708);
function ep(e) {
    let { channelId: n, guildId: r, messageId: s } = e,
        i = (0, ee.A)(n),
        {
            name: a,
            iconType: c,
            isForumPost: u,
            hasAccess: d,
        } = (0, o.cf)(
            [ed.A, ex.default, em.A],
            () => {
                let e = ed.A.getChannel(n);
                return {
                    name: null != e ? (0, O.m1)(e, ex.default, em.A) : void 0,
                    iconType: (0, ej.QG)(e),
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
            d || i.isSubscriptionGated
                ? m || null == a
                    ? (0, l.jsx)(er.A, {
                          iconType: c,
                          children: a ?? (0, l.jsx)("em", { children: ef.intl.string(ef.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eI, { guildId: r, children: a })
                : (0, l.jsx)(er.A, { iconType: "locked", children: ef.intl.string(ef.t["/YzI63"]) }),
        j = null;
    return (
        null != s &&
            (j = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ea.A, {}), (0, l.jsx)(er.A, { iconType: u ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, et.o)(r, n, s), (0, Y.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = ed.A.getChannel(n);
                (0, z.L3)(e, async () => {
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
function eI(e) {
    let { guildId: n, children: t } = e,
        r = (0, o.bG)([eh.A], () => eh.A.getGuild(n), [n]);
    return (0, l.jsxs)(ei.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ea.A, {}) : null, t] });
}
function ev(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(eu.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function eA(e) {
    let { id: n } = e,
        t = (0, _.p)(),
        r = t?.guildId,
        s = (0, o.bG)([eo.A], () => (null != r ? eo.A.getRole(r, n)?.name : null) ?? ef.intl.string(ef.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ec.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function ek(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(es.A, { gameId: n, authorId: t?.authorId });
}
function eb(e) {
    let { roleName: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(ec.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function ey(e) {
    let { id: n, name: t } = e,
        s = (0, _.p)(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eg.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: s?.channelId, commandId: n, commandName: t, commandKey: i }),
            [s?.channelId, i, n, t],
        );
    return (0, l.jsx)(el.gn, { node: a, children: t });
}
var eC = t(147190);
function eS(e) {
    let { domain: n, ephemeral: s, channelId: i, attachmentId: a, name: c } = e,
        u = `https://${n}/${s ? "ephemeral-attachments" : "attachments"}/${i}/${a}/${c}`,
        d = r.useCallback(async () => {
            let e = await B.AN(u);
            (G.A.trackLinkClicked(e), (0, H.A)(e));
        }, [u]),
        o = r.useCallback(
            (e) => {
                (0, z.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (n) => (0, l.jsx)(e, { ...n, attachmentUrl: u, attachmentName: c });
                });
            },
            [c, u],
        );
    return (0, l.jsxs)(q.A, {
        role: "link",
        href: u,
        onClick: d,
        onContextMenu: o,
        className: "attachmentLink",
        children: [(0, l.jsx)(T.P, { size: "xs", className: eC.Kk, color: "currentColor" }), c],
    });
}
var eN = t(407993),
    ew = t(302031),
    e_ = t(785562),
    e$ = t(379418),
    eM = t(254221);
let eP = {
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
                s = r.useContext(M),
                i =
                    1 === s.length &&
                    "paragraph" === s[0].type &&
                    1 === s[0].value.length &&
                    "emoji" === s[0].value[0].type;
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(P, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(L, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { type: n, value: t, children: r } = e;
            switch (n) {
                case "normal": {
                    let { url: e, title: n } = t;
                    if ((0, F.vS)(e)) return (0, l.jsx)(Q, { url: e });
                    if (Z.test(e))
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("span", { children: r }), (0, l.jsx)(Q, { url: e })],
                        });
                    return (0, l.jsx)(E.A, { title: n, href: e, children: (0, l.jsx)("span", { children: r }) });
                }
                case "mention":
                    switch (t.type) {
                        case "channel":
                        case "message":
                            let {
                                    value: { guild_id: s, channel_id: i },
                                } = t,
                                a = "message_id" in t.value ? t.value.message_id : void 0;
                            return (0, l.jsx)(ep, {
                                channelId: String(i),
                                guildId: String(s),
                                messageId: null != a ? String(a) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: c, bucket: u, channel_id: d, attachment_id: o, name: h },
                            } = t;
                            return (0, l.jsx)(eS, {
                                domain: c,
                                ephemeral: "ephemeral_attachments" === u,
                                channelId: String(d),
                                attachmentId: String(o),
                                name: h,
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
                                renderFallback: s,
                                render: (e) => {
                                    if (!(null != n && e.hasLanguage(n))) return s();
                                    {
                                        let t = e.highlight(n, r, !0);
                                        return null == t
                                            ? s()
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
                    return (0, l.jsx)(ep, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(ev, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eA, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eb, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eb, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(ek, { id: String(t) });
                case "command":
                    return (0, l.jsx)(ey, { id: String(t.id), name: t.name });
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
                s = r.useMemo(() => Array.from((0, eN.t)([t])).some((e) => "link" === e.type), [t]),
                i = (0, _.p)();
            return (
                r.useEffect(() => {
                    i?.setHasSpoilerEmbeds?.(s);
                }, [i, s]),
                (0, l.jsx)(ew.Ay, { type: ew.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, e$.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(e_.A, { node: r });
        },
    },
    eL = null;
function eT(e) {
    let { content: n } = e;
    return (0, l.jsx)(a.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eE, { content: n, error: t });
        },
        children: (0, l.jsx)(ez, { content: n }),
    });
}
function ez(e) {
    let { content: n } = e;
    ((eL ??= (0, i.Ts)()), r.use(eL));
    let t = (0, o.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        a = r.useMemo(() => (0, i.qg)(n, t), [n, t]);
    return (0, l.jsx)(M.Provider, { value: a, children: (0, l.jsx)(s.$, { nodes: a, renderers: eP }) });
}
function eE(e) {
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
                    className: eM.g,
                    children: [(0, l.jsx)(u.A, { width: 16, height: 16 }), ef.intl.string(ef.t.dpFK4M)],
                }),
            ],
        })
    );
}
