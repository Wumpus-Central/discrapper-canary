t.d(n, { initNativeMarkdown: () => eJ, A: () => eO });
var l = t(477900),
    r = t(582128),
    i = t(5135),
    s = t(847873),
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
    v = t(441136),
    A = t(957565),
    k = t(165648),
    y = t(969490);
function b(e) {
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
var C = t(236285),
    w = t(7584),
    N = t(930101),
    S = t(78377),
    M = t(690521),
    E = t(487417),
    _ = t(307731);
let L = r.createContext(!1);
function z(e) {
    let { value: n, jumboable: t } = e,
        r = M.Ay.getURL(n),
        i = w.Ay.convertSurrogateToName(n),
        s = (0, S.p)();
    return (0, l.jsx)(N.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function P(e) {
    let { value: n, jumboable: t } = e,
        r = (0, S.p)(),
        i = r?.guildId,
        s = (0, d.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = s?.name ?? n.name;
    return (
        null != s && s.require_colons && (u = `:${s.name}:`),
        (0, l.jsx)(N.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
var T = t(588975),
    G = t(442433),
    $ = t(9578),
    q = t(975807),
    F = t(380610),
    B = t(235393),
    D = t(258072),
    H = t(332173),
    U = t(679164),
    J = t(734057),
    O = t(123917),
    K = t(376943),
    R = t(333421),
    X = t(100392),
    Q = t(836156);
let W = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    Z = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    V = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("218126"),
            t.e("60800"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    ee = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function en(e) {
    let { url: n } = e,
        t =
            (0, F.vS)(n) || (0, F.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, X.W0)(n)
                  ? (0, l.jsx)(Z, { url: n })
                  : (0, Q.i)(n)
                    ? (0, l.jsx)(V, { url: n })
                    : (0, R.my)(n)
                      ? (0, l.jsx)(ee, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var et = t(192308),
    el = t(47167),
    er = t(499211),
    ei = t(706083),
    es = t(78390),
    eu = t(392605),
    ea = t(990474),
    ec = t(232042),
    eo = t(266645),
    ed = t(906754),
    eh = t(37632),
    em = t(593284),
    ex = t(288539),
    ej = t(317525),
    eg = t(71393),
    ef = t(994500),
    ep = t(287809),
    eI = t(147036),
    ev = t(403362);
let eA = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var ek = t(73510),
    ey = t(105292);
function eb(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: s } = e,
        u = (0, er.A)(n),
        {
            name: a,
            iconType: c,
            isForumPost: o,
            hasAccess: h,
        } = (0, d.cf)(
            [J.A, ep.default, ef.A],
            () => {
                let e = J.A.getChannel(n);
                return {
                    name: null != e ? (0, el.m1)(e, ep.default, ef.A) : void 0,
                    iconType: (0, eI.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, K.nc)(e),
                };
            },
            [n],
        ),
        m = (0, S.p)();
    if (null == c) return;
    let x = r === m?.guildId || null == r,
        j =
            h || u.isSubscriptionGated
                ? x || null == a
                    ? (0, l.jsx)(ec.A, {
                          iconType: c,
                          children: a ?? (0, l.jsx)("em", { children: ey.intl.string(ey.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eC, { guildId: r, children: a })
                : (0, l.jsx)(ec.A, { iconType: "locked", children: ey.intl.string(ey.t["/YzI63"]) }),
        g = null;
    return (
        null != i &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(eh.A, {}), (0, l.jsx)(ec.A, { iconType: o ? "post" : "message" })],
            })),
        (0, l.jsxs)(H.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, ei.o)(r, n, i, s), (0, et.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = J.A.getChannel(n);
                (0, G.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                        t.bind(t, 254106),
                    );
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: i });
                });
            },
            className: "channelMention",
            children: [j, g],
        })
    );
}
function eC(e) {
    let { guildId: n, children: t } = e,
        r = (0, d.bG)([eg.A], () => eg.A.getGuild(n), [n]);
    return (0, l.jsxs)(ed.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(eh.A, {}) : null, t] });
}
function ew(e) {
    let { id: n } = e,
        t = (0, S.p)();
    return (0, l.jsx)(ex.A, {
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
        t = (0, S.p)(),
        r = t?.guildId,
        i = (0, d.bG)([ej.A], () => (null != r ? ej.A.getRole(r, n)?.name : null) ?? ey.intl.string(ey.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(em.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${i}` });
}
function eS(e) {
    let { id: n } = e,
        t = (0, S.p)();
    return (0, l.jsx)(eo.A, { gameId: n, authorId: t?.authorId });
}
function eM(e) {
    let { roleName: n } = e,
        t = (0, S.p)();
    return (0, l.jsx)(em.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eE(e) {
    let { route: n, itemId: t } = e,
        r = (0, S.p)(),
        i = r?.guildId,
        s = (0, es.Q)(n),
        u = (0, d.bG)([ej.A], () => (0, es.f)(ej.A, n, t, i), [n, t, i]);
    return null == s
        ? null
        : (0, l.jsxs)(H.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, eu.i)(i, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [s, null != u ? (0, l.jsx)(eh.A, {}) : null, u],
          });
}
function e_(e) {
    let { id: n, name: t } = e,
        i = (0, S.p)(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${ek.v4}${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(ea.gn, { node: u, children: t });
}
var eL = t(147190);
function ez(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: s } = e,
        u = (0, d.bG)([J.A], () => (null != i && null == J.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eb, { channelId: u, guildId: n, messageId: r, conversationId: s });
}
function eP(e) {
    let { url: n, name: i } = e,
        s = r.useCallback(async () => {
            let e = await U.AN(n);
            (B.A.trackLinkClicked(e), (0, q.A)(e));
        }, [n]),
        u = r.useCallback(
            (e) => {
                (0, G.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(H.A, {
        role: "link",
        href: n,
        onClick: s,
        onContextMenu: u,
        className: "attachmentLink",
        children: [(0, l.jsx)(T.P, { size: "xs", className: eL.Kk, color: "currentColor" }), i],
    });
}
var eT = t(302031),
    eG = t(785562),
    e$ = t(379418);
t(321073);
var eq = t(448767);
function eF(e) {
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
                i = r.useContext(L);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(z, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(P, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: i } = e,
                s = null == n || 0 === n.length;
            if (s) {
                let e = (function (e) {
                    let n = K.En.exec(e);
                    if (null != n) {
                        let [, e, t, l, r] = n;
                        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
                    }
                    let t = K.BM.exec(e);
                    if (null == t) return null;
                    let [, l, r, i, s] = t;
                    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
                        ? null
                        : {
                              guildId: l,
                              channelId: r,
                              messageId: i,
                              parentChannelId: void 0,
                              conversationId: (0, K.te)(s),
                          };
                })(t);
                if (null != e) return (0, l.jsx)(ez, { ...e });
                let n = (0, D.h)(t);
                if (null != n) return (0, l.jsx)(eP, { url: t, name: n.name });
            }
            return (0, F.vS)(t)
                ? (0, l.jsx)(en, { url: t })
                : W.test(t)
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(en, { url: t })],
                    })
                  : (0, l.jsx)($.A, {
                        title: r,
                        href: t,
                        trusted: s ? () => (0, O.m)(t, t) : void 0,
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
            let { language: n, content: t } = e;
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: k.Hy,
                    children: [
                        A.p5 ? (0, l.jsx)("div", { className: k.lB, children: (0, l.jsx)(b, { text: t }) }) : null,
                        (0, l.jsx)(v.E, { code: t, lang: n, className: g()(y.kw, "hljs") }),
                    ],
                }),
            });
        },
        quote: function (e) {
            let { children: n } = e;
            return (0, l.jsxs)("div", {
                className: k.h,
                children: [(0, l.jsx)("div", { className: k.r }), (0, l.jsx)("blockquote", { children: n })],
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
                    return (0, l.jsx)(ew, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eN, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eM, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eM, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eS, { id: String(t) });
                case "command":
                    return (0, l.jsx)(e_, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eE, {
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
                i = r.useMemo(() => Array.from((0, E.t)([t])).some((e) => "link" === e.type), [t]),
                s = (0, S.p)();
            return (
                r.useEffect(() => {
                    s?.setHasSpoilerEmbeds?.(i);
                }, [s, i]),
                (0, l.jsx)(eT.Ay, { type: eT.Ay.Types.TEXT, children: () => n })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, e$.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eG.A, { node: r });
        },
    },
    eH = !1,
    eU = null;
function eJ() {
    return (eU ??= (0, s.Ts)().then(() => {
        eH = !0;
    }));
}
function eO(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eR, { content: n, error: t });
        },
        children: (0, l.jsx)(eK, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eK(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: u } = e;
    eH || r.use(eJ());
    let a = (0, d.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        c = r.useMemo(() => (0, s.qg)(n, a), [n, a]),
        o = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, E.t)(e))
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
                    return n <= _.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [t, c],
        ),
        j = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eq.tq : (0, eq.dn)(n.value, eF);
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
                                      let t = eF(e) ? e.value.url : null;
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
    return (0, l.jsx)(L.Provider, { value: o, children: (0, l.jsx)(i.$, { nodes: j, renderers: eD }) });
}
function eR(e) {
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
