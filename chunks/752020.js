t.d(n, { initNativeMarkdown: () => eQ, A: () => eW });
var l = t(477900),
    r = t(582128),
    s = t(733004),
    i = t(776117),
    a = t(292442),
    u = t(834730),
    o = t(791606),
    c = t(38405),
    d = t(17928),
    h = t(540999);
let m = i.w4.ALL & ~i.w4.DEV_LINKS,
    x = i.w4.ALL;
var j = t(503698),
    f = t.n(j),
    g = t(939249),
    p = t(933832),
    v = t(624479),
    I = t(441136),
    A = t(957565),
    k = t(165648),
    y = t(969490);
function b(e) {
    let { text: n } = e,
        [t, s] = r.useState(!1);
    return (0, l.jsx)(g.D, {
        onClick: function () {
            (0, A.C)(
                n,
                () => s(!0),
                () => s(!1),
            );
        },
        children: t
            ? (0, l.jsx)(p.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(v.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var C = t(236285),
    S = t(7584),
    w = t(930101),
    N = t(78377),
    M = t(690521),
    L = t(307731);
let E = r.createContext(!1);
function P(e) {
    let { value: n, jumboable: t } = e,
        r = M.Ay.getURL(n),
        s = S.Ay.convertSurrogateToName(n),
        i = (0, N.p)();
    return (0, l.jsx)(w.H, {
        node: { name: s, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function _(e) {
    let { value: n, jumboable: t } = e,
        r = (0, N.p)(),
        s = r?.guildId,
        i = (0, d.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(s).getById(String(n.id)), [s, n.id]),
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
var z = t(588975),
    T = t(442433),
    $ = t(9578),
    G = t(975807),
    H = t(380610),
    D = t(235393),
    F = t(258072),
    J = t(332173),
    q = t(679164),
    B = t(734057),
    U = t(123917),
    K = t(376943),
    O = t(333421),
    R = t(100392),
    X = t(836156);
let Q = /^dev:\/\//i,
    W = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    V = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    Y = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    Z = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function ee(e) {
    let { url: n } = e,
        t =
            (0, H.vS)(n) || (0, H.h4)(n)
                ? (0, l.jsx)(W, { url: n })
                : (0, R.W0)(n)
                  ? (0, l.jsx)(V, { url: n })
                  : (0, X.i)(n)
                    ? (0, l.jsx)(Y, { url: n })
                    : (0, O.my)(n)
                      ? (0, l.jsx)(Z, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var en = t(192308),
    et = t(47167),
    el = t(499211),
    er = t(706083),
    es = t(78390),
    ei = t(392605),
    ea = t(990474),
    eu = t(232042),
    eo = t(266645),
    ec = t(906754),
    ed = t(37632),
    eh = t(593284),
    em = t(288539),
    ex = t(317525),
    ej = t(71393),
    ef = t(994500),
    eg = t(287809),
    ep = t(147036),
    ev = t(403362);
let eI = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eA = t(73510),
    ek = t(105292);
function ey(e) {
    let { channelId: n, guildId: r, messageId: s, conversationId: i } = e,
        a = (0, el.A)(n),
        {
            name: u,
            iconType: o,
            isForumPost: c,
            hasAccess: h,
        } = (0, d.cf)(
            [B.A, eg.default, ef.A],
            () => {
                let e = B.A.getChannel(n);
                return {
                    name: null != e ? (0, et.m1)(e, eg.default, ef.A) : void 0,
                    iconType: (0, ep.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, K.nc)(e),
                };
            },
            [n],
        ),
        m = (0, N.p)();
    if (null == o) return;
    let x = r === m?.guildId || null == r,
        j =
            h || a.isSubscriptionGated
                ? x || null == u
                    ? (0, l.jsx)(eu.A, {
                          iconType: o,
                          children: u ?? (0, l.jsx)("em", { children: ek.intl.string(ek.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eb, { guildId: r, children: u })
                : (0, l.jsx)(eu.A, { iconType: "locked", children: ek.intl.string(ek.t["/YzI63"]) }),
        f = null;
    return (
        null != s &&
            (f = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ed.A, {}), (0, l.jsx)(eu.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(J.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, er.o)(r, n, s, i), (0, en.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = B.A.getChannel(n);
                (0, T.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                        t.bind(t, 254106),
                    );
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: s });
                });
            },
            className: "channelMention",
            children: [j, f],
        })
    );
}
function eb(e) {
    let { guildId: n, children: t } = e,
        r = (0, d.bG)([ej.A], () => ej.A.getGuild(n), [n]);
    return (0, l.jsxs)(ec.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ed.A, {}) : null, t] });
}
function eC(e) {
    let { id: n } = e,
        t = (0, N.p)();
    return (0, l.jsx)(em.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function eS(e) {
    let { id: n } = e,
        t = (0, N.p)(),
        r = t?.guildId,
        s = (0, d.bG)([ex.A], () => (null != r ? ex.A.getRole(r, n)?.name : null) ?? ek.intl.string(ek.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(eh.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function ew(e) {
    let { id: n } = e,
        t = (0, N.p)();
    return (0, l.jsx)(eo.A, { gameId: n, authorId: t?.authorId });
}
function eN(e) {
    let { roleName: n } = e,
        t = (0, N.p)();
    return (0, l.jsx)(eh.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eM(e) {
    let { route: n, itemId: t } = e,
        r = (0, N.p)(),
        s = r?.guildId,
        i = (0, es.Q)(n),
        a = (0, d.bG)([ex.A], () => (0, es.f)(ex.A, n, t, s), [n, t, s]);
    return null == i
        ? null
        : (0, l.jsxs)(J.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, ei.i)(s, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [i, null != a ? (0, l.jsx)(ed.A, {}) : null, a],
          });
}
function eL(e) {
    let { id: n, name: t } = e,
        s = (0, N.p)(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eA.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: s?.channelId, commandId: n, commandName: t, commandKey: i }),
            [s?.channelId, i, n, t],
        );
    return (0, l.jsx)(ea.gn, { node: a, children: t });
}
var eE = t(147190);
function eP(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: s, conversationId: i } = e,
        a = (0, d.bG)([B.A], () => (null != s && null == B.A.getChannel(t) ? s : t), [t, s]);
    return (0, l.jsx)(ey, { channelId: a, guildId: n, messageId: r, conversationId: i });
}
function e_(e) {
    let { url: n, name: s } = e,
        i = r.useCallback(async () => {
            let e = await q.AN(n);
            (D.A.trackLinkClicked(e), (0, G.A)(e));
        }, [n]),
        a = r.useCallback(
            (e) => {
                (0, T.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: s });
                });
            },
            [s, n],
        );
    return (0, l.jsxs)(J.A, {
        role: "link",
        href: n,
        onClick: i,
        onContextMenu: a,
        className: "attachmentLink",
        children: [(0, l.jsx)(z.P, { size: "xs", className: eE.Kk, color: "currentColor" }), s],
    });
}
var ez = t(196765),
    eT = t(976245),
    e$ = t(302031);
function eG() {
    return (0, eT.y)()((e) => ({
        revealedIds: new Set(),
        hoveredId: null,
        reveal(n) {
            e((e) => (e.revealedIds.has(n) ? e : { revealedIds: new Set(e.revealedIds).add(n) }));
        },
        setHovered(n, t) {
            e((e) => (t ? { hoveredId: n } : e.hoveredId === n ? { hoveredId: null } : e));
        },
    }));
}
let eH = (0, eT.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eD = r.createContext(eH);
function eF(e) {
    let { children: n } = e,
        [t] = r.useState(eG);
    return (0, l.jsx)(eD.Provider, { value: t, children: n });
}
var eJ = t(785562),
    eq = t(379418);
t(321073);
var eB = t(448767);
function eU(e) {
    return "link" === e.type;
}
var eK = t(254221);
let eO = {
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
                s = r.useContext(E);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(P, { value: n, jumboable: s });
                case "custom":
                    return (0, l.jsx)(_, { value: n, jumboable: s });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: s } = e,
                i = null == n || 0 === n.length;
            if (i) {
                let e = (function (e) {
                    let n = K.En.exec(e);
                    if (null != n) {
                        let [, e, t, l, r] = n;
                        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
                    }
                    let t = K.BM.exec(e);
                    if (null == t) return null;
                    let [, l, r, s, i] = t;
                    return null == r || /\D/.test(r) || (null != s && /\D/.test(s))
                        ? null
                        : {
                              guildId: l,
                              channelId: r,
                              messageId: s,
                              parentChannelId: void 0,
                              conversationId: (0, K.te)(i),
                          };
                })(t);
                if (null != e) return (0, l.jsx)(eP, { ...e });
                let n = (0, F.h)(t);
                if (null != n) return (0, l.jsx)(e_, { url: t, name: n.name });
            }
            if ((0, H.vS)(t)) return (0, l.jsx)(ee, { url: t });
            if (Q.test(t))
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(ee, { url: t })],
                });
            let a = r;
            return (
                i ||
                    (a =
                        null != r && r.length > 0
                            ? `${r}

(${t})`
                            : t),
                (0, l.jsx)($.A, {
                    title: a,
                    href: t,
                    trusted: i ? () => (0, U.m)(t, t) : void 0,
                    children: (0, l.jsx)("span", { children: s }),
                })
            );
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
            let { language: n, content: t } = e;
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: k.Hy,
                    children: [
                        A.p5 ? (0, l.jsx)("div", { className: k.lB, children: (0, l.jsx)(b, { text: t }) }) : null,
                        (0, l.jsx)(I.E, { code: t, lang: n, className: f()(y.kw, "hljs") }),
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
                    return (0, l.jsx)(ey, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eC, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eS, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eN, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eN, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eL, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eM, {
                        route: eI[t.type],
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
            let { children: n, node: t, id: s } = e,
                a = r.useMemo(() => Array.from((0, i.tJ)([t])).some((e) => "link" === e.type), [t]),
                u = (0, N.p)(),
                o = r.useContext(eD),
                c = (0, ez.P)(o, (e) => e.revealedIds.has(s)),
                d = (0, ez.P)(o, (e) => e.hoveredId === s),
                h = r.useCallback(() => o.getState().reveal(s), [o, s]),
                m = r.useCallback(() => o.getState().setHovered(s, !0), [o, s]),
                x = r.useCallback(() => o.getState().setHovered(s, !1), [o, s]);
            return (
                r.useEffect(() => {
                    u?.setHasSpoilerEmbeds?.(a);
                }, [u, a]),
                (0, l.jsx)(e$.Ay, {
                    type: e$.Ay.Types.TEXT,
                    obscured: !c,
                    hovered: d,
                    onReveal: h,
                    onMouseEnter: m,
                    onMouseLeave: x,
                    children: () => n,
                })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eq.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eJ.A, { node: r });
        },
    },
    eR = !1,
    eX = null;
function eQ() {
    return (eX ??= (0, i.Ts)().then(() => {
        eR = !0;
    }));
}
function eW(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(a.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eY, { content: n, error: t });
        },
        children: (0, l.jsx)(eV, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eV(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: a } = e;
    eR || r.use(eQ());
    let u = (0, d.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        o = r.useMemo(() => (0, i.qg)(n, u), [n, u]),
        c = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, i.tJ)(e))
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
                    return n <= L.MAX_EMOJI_TO_BE_JUMBO;
                })(o),
            [t, o],
        ),
        j = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eB.tq : (0, eB.dn)(n.value, eU);
                        })(e);
                    return t && (0, eB.iz)(l)
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
                                      let t = eU(e) ? e.value.url : null;
                                      return null == t || !(0, eB.c_)(t, n);
                                  });
                                  if (e.length === r.value.length) {
                                      t.push(r);
                                      continue;
                                  }
                                  ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                              }
                              return l ? t : e;
                          })(e, { onlyLinkContent: l.onlyLinks, stripGameServerShareLinks: !0 });
                })(o, { hideSingleLinkContent: a }),
            [o, a],
        );
    return (0, l.jsx)(E.Provider, {
        value: c,
        children: (0, l.jsx)(eF, { children: (0, l.jsx)(s.$, { nodes: j, renderers: eO }) }, n),
    });
}
function eY(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            c.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(u.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eK.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), ek.intl.string(ek.t.dpFK4M)],
                }),
            ],
        })
    );
}
