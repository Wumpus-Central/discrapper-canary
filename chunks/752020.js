t.d(n, { initNativeMarkdown: () => eO, A: () => eK });
var l = t(477900),
    r = t(582128),
    i = t(323448),
    s = t(997544),
    u = t(292442),
    a = t(834730),
    c = t(791606),
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
    v = t(586172),
    A = t(957565),
    b = t(165648),
    y = t(969490);
function C(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(f.D, {
        onClick: function () {
            (0, A.C)(
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
var N = t(236285),
    S = t(7584),
    w = t(930101),
    M = t(78377),
    _ = t(690521),
    L = t(945716),
    P = t(307731);
let E = r.createContext(!1);
function T(e) {
    let { value: n, jumboable: t } = e,
        r = _.Ay.getURL(n),
        i = S.Ay.convertSurrogateToName(n),
        s = (0, M.p)();
    return (0, l.jsx)(w.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function z(e) {
    let { value: n, jumboable: t } = e,
        r = (0, M.p)(),
        i = r?.guildId,
        s = (0, d.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = s?.name ?? n.name;
    return (
        null != s && s.require_colons && (u = `:${s.name}:`),
        (0, l.jsx)(w.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var G = t(588975),
    $ = t(442433),
    F = t(9578),
    q = t(975807),
    H = t(380610),
    B = t(235393),
    D = t(258072),
    J = t(332173),
    U = t(679164),
    O = t(734057),
    K = t(123917),
    R = t(376943),
    X = t(333421),
    Q = t(100392),
    W = t(836156);
let Y = /^dev:\/\//i,
    Z = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    V = r.lazy(() =>
        Promise.resolve()
            .then(t.bind(t, 950980))
            .then((e) => {
                let { ExperimentEmbed: n } = e;
                return { default: n };
            }),
    ),
    ee = r.lazy(() =>
        Promise.all([t.e("503634"), t.e("761764"), t.e("218126"), t.e("60800"), t.e("467696")])
            .then(t.bind(t, 881267))
            .then((e) => {
                let { PlaygroundEmbed: n } = e;
                return { default: n };
            }),
    ),
    en = r.lazy(() =>
        Promise.all([t.e("378100"), t.e("886456"), t.e("278078")])
            .then(t.bind(t, 909261))
            .then((e) => {
                let { DevToolsLinkEmbed: n } = e;
                return { default: n };
            }),
    );
function et(e) {
    let { url: n } = e,
        t =
            (0, H.vS)(n) || (0, H.h4)(n)
                ? (0, l.jsx)(Z, { url: n })
                : (0, Q.W0)(n)
                  ? (0, l.jsx)(V, { url: n })
                  : (0, W.i)(n)
                    ? (0, l.jsx)(ee, { url: n })
                    : (0, X.my)(n)
                      ? (0, l.jsx)(en, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var el = t(192308),
    er = t(47167),
    ei = t(499211),
    es = t(706083),
    eu = t(78390),
    ea = t(392605),
    ec = t(990474),
    eo = t(232042),
    ed = t(266645),
    eh = t(906754),
    em = t(37632),
    ex = t(593284),
    ej = t(288539),
    eg = t(317525),
    ef = t(71393),
    ep = t(994500),
    eI = t(287809),
    ek = t(147036),
    ev = t(403362);
let eA = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eb = t(73510),
    ey = t(660183);
function eC(e) {
    let { channelId: n, guildId: r, messageId: i } = e,
        s = (0, ei.A)(n),
        {
            name: u,
            iconType: a,
            isForumPost: c,
            hasAccess: o,
        } = (0, d.cf)(
            [O.A, eI.default, ep.A],
            () => {
                let e = O.A.getChannel(n);
                return {
                    name: null != e ? (0, er.m1)(e, eI.default, ep.A) : void 0,
                    iconType: (0, ek.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, R.nc)(e),
                };
            },
            [n],
        ),
        h = (0, M.p)();
    if (null == a) return;
    let m = r === h?.guildId || null == r,
        x =
            o || s.isSubscriptionGated
                ? m || null == u
                    ? (0, l.jsx)(eo.A, {
                          iconType: a,
                          children: u ?? (0, l.jsx)("em", { children: ey.intl.string(ey.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eN, { guildId: r, children: u })
                : (0, l.jsx)(eo.A, { iconType: "locked", children: ey.intl.string(ey.t["/YzI63"]) }),
        j = null;
    return (
        null != i &&
            (j = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(em.A, {}), (0, l.jsx)(eo.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(J.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, es.o)(r, n, i), (0, el.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = O.A.getChannel(n);
                (0, $.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                        t.bind(t, 254106),
                    );
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: i });
                });
            },
            className: "channelMention",
            children: [x, j],
        })
    );
}
function eN(e) {
    let { guildId: n, children: t } = e,
        r = (0, d.bG)([ef.A], () => ef.A.getGuild(n), [n]);
    return (0, l.jsxs)(eh.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(em.A, {}) : null, t] });
}
function eS(e) {
    let { id: n } = e,
        t = (0, M.p)();
    return (0, l.jsx)(ej.A, {
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
        t = (0, M.p)(),
        r = t?.guildId,
        i = (0, d.bG)([eg.A], () => (null != r ? eg.A.getRole(r, n)?.name : null) ?? ey.intl.string(ey.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ex.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function eM(e) {
    let { id: n } = e,
        t = (0, M.p)();
    return (0, l.jsx)(ed.A, { gameId: n, authorId: t?.authorId });
}
function e_(e) {
    let { roleName: n } = e,
        t = (0, M.p)();
    return (0, l.jsx)(ex.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eL(e) {
    let { route: n, itemId: t } = e,
        r = (0, M.p)(),
        i = r?.guildId,
        s = (0, eu.Q)(n),
        u = (0, d.bG)([eg.A], () => (0, eu.f)(eg.A, n, t, i), [n, t, i]);
    return null == s
        ? null
        : (0, l.jsxs)(J.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, ea.i)(i, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [s, null != u ? (0, l.jsx)(em.A, {}) : null, u],
          });
}
function eP(e) {
    let { id: n, name: t } = e,
        i = (0, M.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eb.v4}${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(ec.gn, { node: u, children: t });
}
var eE = t(147190);
function eT(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i } = e,
        s = (0, d.bG)([O.A], () => (null != i && null == O.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eC, { channelId: s, guildId: n, messageId: r });
}
function ez(e) {
    let { url: n, name: i } = e,
        s = r.useCallback(async () => {
            let e = await U.AN(n);
            (B.A.trackLinkClicked(e), (0, q.A)(e));
        }, [n]),
        u = r.useCallback(
            (e) => {
                (0, $.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(J.A, {
        role: "link",
        href: n,
        onClick: s,
        onContextMenu: u,
        className: "attachmentLink",
        children: [(0, l.jsx)(G.P, { size: "xs", className: eE.Kk, color: "currentColor" }), i],
    });
}
var eG = t(302031),
    e$ = t(785562),
    eF = t(379418);
t(321073);
var eq = t(448767);
function eH(e) {
    return "link" === e.type;
}
var eB = t(254221);
let eD = {
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
                i = r.useContext(E);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(T, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(z, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: i } = e,
                s = null == n || 0 === n.length;
            if (s) {
                let e = (function (e) {
                    let n = R.En.exec(e);
                    if (null != n) {
                        let [, e, t, l, r] = n;
                        return { guildId: e, channelId: l, messageId: r, parentChannelId: t };
                    }
                    let t = R.Ju.exec(e);
                    if (null == t) return null;
                    let [, l, r, i] = t;
                    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
                        ? null
                        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0 };
                })(t);
                if (null != e) return (0, l.jsx)(eT, { ...e });
                let n = (0, D.h)(t);
                if (null != n) return (0, l.jsx)(ez, { url: t, name: n.name });
            }
            return (0, H.vS)(t)
                ? (0, l.jsx)(et, { url: t })
                : Y.test(t)
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(et, { url: t })],
                    })
                  : (0, l.jsx)(F.A, {
                        title: r,
                        href: t,
                        trusted: s ? () => (0, K.m)(t, t) : void 0,
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
                return (0, l.jsx)("code", { className: g()(y.kw, "hljs"), children: r });
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: b.Hy,
                    children: [
                        A.p5 ? (0, l.jsx)("div", { className: b.lB, children: (0, l.jsx)(C, { text: r }) }) : null,
                        (0, l.jsx)(v.l, {
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
                    return (0, l.jsx)(eC, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eS, { id: String(t) });
                case "role":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(e_, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(e_, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eM, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eP, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eL, {
                        route: eA[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, ev.xb)(n);
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
                i = r.useMemo(() => Array.from((0, L.t)([t])).some((e) => "link" === e.type), [t]),
                s = (0, M.p)();
            return (
                r.useEffect(() => {
                    s?.setHasSpoilerEmbeds?.(i);
                }, [s, i]),
                (0, l.jsx)(eG.Ay, { type: eG.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eF.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(e$.A, { node: r });
        },
    },
    eJ = !1,
    eU = null;
function eO() {
    return (eU ??= (0, s.Ts)().then(() => {
        eJ = !0;
    }));
}
function eK(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eX, { content: n, error: t });
        },
        children: (0, l.jsx)(eR, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eR(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: u } = e;
    eJ || r.use(eO());
    let a = (0, d.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        c = r.useMemo(() => (0, s.qg)(n, a), [n, a]),
        o = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, L.t)(e))
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
        ),
        j = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eq.tq : (0, eq.dn)(n.value, eH);
                        })(e);
                    return t && (0, eq.iz)(l)
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
                                      let t = eH(e) ? e.value.url : null;
                                      return null == t || !(0, eq.c_)(t, n);
                                  });
                                  if (e.length === r.value.length) {
                                      t.push(r);
                                      continue;
                                  }
                                  ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                              }
                              return l ? t : e;
                          })(e, { onlyLinkContent: l.onlyLinks, stripGameServerShareLinks: !0 });
                })(c, { hideSingleLinkContent: u }),
            [c, u],
        );
    return (0, l.jsx)(E.Provider, { value: o, children: (0, l.jsx)(i.$, { nodes: j, renderers: eD }) });
}
function eX(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            o.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(a.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eB.g,
                    children: [(0, l.jsx)(c.A, { width: 16, height: 16 }), ey.intl.string(ey.t.dpFK4M)],
                }),
            ],
        })
    );
}
