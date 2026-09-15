(t.r(n), t.d(n, { default: () => eC }));
var l = t(477900),
    r = t(582128),
    i = t(244377),
    s = t(610209),
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
    p = t(939249),
    f = t(933832),
    I = t(624479),
    A = t(268218),
    k = t(586172),
    v = t(957565),
    b = t(165648),
    C = t(969490);
function y(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(p.D, {
        onClick: function () {
            (0, v.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, l.jsx)(f.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(I.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var N = t(236285),
    w = t(7584),
    S = t(930101),
    _ = t(78377),
    $ = t(690521);
let M = r.createContext([]);
function L(e) {
    let { value: n, jumboable: t } = e,
        r = $.Ay.getURL(n),
        i = w.Ay.convertSurrogateToName(n),
        s = (0, _.p)();
    return (0, l.jsx)(S.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function T(e) {
    let { value: n, jumboable: t } = e,
        r = (0, _.p)(),
        i = r?.guildId,
        s = (0, o.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        a = s?.name ?? n.name;
    return (
        null != s && s.require_colons && (a = `:${s.name}:`),
        (0, l.jsx)(S.X, {
            node: { name: a, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var E = t(588975),
    H = t(442433),
    P = t(9578),
    G = t(975807),
    F = t(235393),
    q = t(332173),
    z = t(679164),
    B = t(403362),
    U = t(192308),
    D = t(47167),
    K = t(499211),
    R = t(376943),
    Z = t(706083),
    V = t(990474),
    X = t(232042),
    J = t(266645),
    Q = t(906754),
    W = t(37632),
    Y = t(593284),
    O = t(288539),
    ee = t(734057),
    en = t(317525),
    et = t(71393),
    el = t(994500),
    er = t(287809),
    ei = t(147036),
    es = t(73510),
    ea = t(375708);
function ec(e) {
    let { channelId: n, guildId: r, messageId: i } = e,
        s = (0, K.A)(n),
        {
            name: a,
            iconType: c,
            isForumPost: u,
            hasAccess: d,
        } = (0, o.cf)(
            [ee.A, er.default, el.A],
            () => {
                let e = ee.A.getChannel(n);
                return {
                    name: null != e ? (0, D.m1)(e, er.default, el.A) : void 0,
                    iconType: (0, ei.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, R.nc)(e),
                };
            },
            [n],
        ),
        h = (0, _.p)();
    if (null == c) return;
    let m = r === h?.guildId || null == r,
        x =
            d || s.isSubscriptionGated
                ? m || null == a
                    ? (0, l.jsx)(X.A, {
                          iconType: c,
                          children: a ?? (0, l.jsx)("em", { children: ea.intl.string(ea.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eu, { guildId: r, children: a })
                : (0, l.jsx)(X.A, { iconType: "locked", children: ea.intl.string(ea.t["/YzI63"]) }),
        j = null;
    return (
        null != i &&
            (j = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(W.A, {}), (0, l.jsx)(X.A, { iconType: u ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, Z.o)(r, n, i), (0, U.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = ee.A.getChannel(n);
                (0, H.L3)(e, async () => {
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
function eu(e) {
    let { guildId: n, children: t } = e,
        r = (0, o.bG)([et.A], () => et.A.getGuild(n), [n]);
    return (0, l.jsxs)(Q.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(W.A, {}) : null, t] });
}
function ed(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(O.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function eo(e) {
    let { id: n } = e,
        t = (0, _.p)(),
        r = t?.guildId,
        i = (0, o.bG)([en.A], () => (null != r ? en.A.getRole(r, n)?.name : null) ?? ea.intl.string(ea.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(Y.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function eh(e) {
    let { id: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(J.A, { gameId: n, authorId: t?.authorId });
}
function em(e) {
    let { roleName: n } = e,
        t = (0, _.p)();
    return (0, l.jsx)(Y.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function ex(e) {
    let { id: n, name: t } = e,
        i = (0, _.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${es.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(V.gn, { node: a, children: t });
}
var ej = t(147190);
function eg(e) {
    let { domain: n, ephemeral: i, channelId: s, attachmentId: a, name: c } = e,
        u = `https://${n}/${i ? "ephemeral-attachments" : "attachments"}/${s}/${a}/${c}`,
        d = r.useCallback(async () => {
            let e = await z.AN(u);
            (F.A.trackLinkClicked(e), (0, G.A)(e));
        }, [u]),
        o = r.useCallback(
            (e) => {
                (0, H.L3)(e, async () => {
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
        children: [(0, l.jsx)(E.P, { size: "xs", className: ej.Kk, color: "currentColor" }), c],
    });
}
var ep = t(407993),
    ef = t(302031),
    eI = t(785562),
    eA = t(379418),
    ek = t(254221);
let ev = {
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
                    return (0, l.jsx)(L, { value: n, jumboable: s });
                case "custom":
                    return (0, l.jsx)(T, { value: n, jumboable: s });
            }
        },
        link: function (e) {
            let { type: n, value: t, children: r } = e;
            switch (n) {
                case "normal":
                    return (0, l.jsx)(P.A, {
                        title: t.title,
                        href: t.url,
                        children: (0, l.jsx)("span", { children: r }),
                    });
                case "mention":
                    switch (t.type) {
                        case "channel":
                        case "message":
                            let {
                                    value: { guild_id: i, channel_id: s },
                                } = t,
                                a = "message_id" in t.value ? t.value.message_id : void 0;
                            return (0, l.jsx)(ec, {
                                channelId: String(s),
                                guildId: String(i),
                                messageId: null != a ? String(a) : void 0,
                            });
                        case "attachment":
                            let {
                                value: { domain: c, bucket: u, channel_id: d, attachment_id: o, name: h },
                            } = t;
                            return (0, l.jsx)(eg, {
                                domain: c,
                                ephemeral: "ephemeral_attachments" === u,
                                channelId: String(d),
                                attachmentId: String(o),
                                name: h,
                            });
                        default:
                            (0, B.xb)(t);
                    }
                    break;
                default:
                    (0, B.xb)(n);
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
                return (0, l.jsx)("code", { className: g()(C.kw, "hljs"), children: r });
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: b.Hy,
                    children: [
                        v.p5 ? (0, l.jsx)("div", { className: b.lB, children: (0, l.jsx)(y, { text: r }) }) : null,
                        (0, l.jsx)(k.l, {
                            location: "CodeBlock",
                            code: r,
                            lang: n,
                            className: g()(C.kw, "hljs"),
                            children: (0, l.jsx)(A.c2, {
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
                                                  className: g()(C.kw, "hljs", t.language),
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
                    return (0, l.jsx)(ec, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(ed, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eo, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(em, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(em, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eh, { id: String(t) });
                case "command":
                    return (0, l.jsx)(ex, { id: String(t.id), name: t.name });
            }
            (0, B.xb)(n);
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
                i = r.useMemo(() => Array.from((0, ep.t)([t])).some((e) => "link" === e.type), [t]),
                s = (0, _.p)();
            return (
                r.useEffect(() => {
                    s?.setHasSpoilerEmbeds?.(i);
                }, [s, i]),
                (0, l.jsx)(ef.Ay, { type: ef.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eA.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eI.A, { node: r });
        },
    },
    eb = null;
function eC(e) {
    let { content: n } = e;
    return (0, l.jsx)(a.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eN, { content: n, error: t });
        },
        children: (0, l.jsx)(ey, { content: n }),
    });
}
function ey(e) {
    let { content: n } = e;
    ((eb ??= (0, s.Ts)()), r.use(eb));
    let t = (0, o.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        a = r.useMemo(() => (0, s.qg)(n, t), [n, t]);
    return (0, l.jsx)(M.Provider, { value: a, children: (0, l.jsx)(i.$, { nodes: a, renderers: ev }) });
}
function eN(e) {
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
                    className: ek.g,
                    children: [(0, l.jsx)(u.A, { width: 16, height: 16 }), ea.intl.string(ea.t.dpFK4M)],
                }),
            ],
        })
    );
}
