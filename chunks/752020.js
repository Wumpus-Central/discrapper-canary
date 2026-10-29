t.d(n, { initNativeMarkdown: () => eV, A: () => eY });
var l = t(477900),
    r = t(582128),
    i = t(733004),
    a = t(776117),
    s = t(292442),
    u = t(834730),
    o = t(78377),
    c = t(791606),
    d = t(38405),
    h = t(17928),
    m = t(540999);
let x = a.w4.ALL & ~a.w4.DEV_LINKS,
    f = a.w4.ALL,
    j = a.w4.QUOTES;
var g = t(503698),
    p = t.n(g),
    v = t(939249),
    I = t(933832),
    A = t(624479),
    y = t(143145),
    k = t(441136),
    b = t(957565),
    C = t(165648),
    S = t(969490);
function w(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(v.D, {
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
    M = t(7584),
    L = t(930101),
    P = t(690521),
    E = t(307731);
let T = r.createContext(!1);
function $(e) {
    let { value: n, jumboable: t } = e,
        r = P.Ay.getURL(n),
        i = M.Ay.convertSurrogateToName(n),
        a = (0, o.p)();
    return (0, l.jsx)(L.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function _(e) {
    let { value: n, jumboable: t } = e,
        r = (0, o.p)(),
        i = r?.guildId,
        a = (0, h.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        s = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (s = `:${a.name}:`),
        (0, l.jsx)(L.X, {
            node: { name: s, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function z() {
    return (0, o.p)()?.formatInline === !0 ? C.tZ : void 0;
}
var G = t(588975),
    H = t(442433),
    F = t(9578),
    D = t(975807),
    J = t(380610),
    U = t(235393),
    q = t(258072),
    B = t(332173),
    O = t(679164),
    K = t(734057),
    Q = t(123917),
    R = t(376943),
    X = t(333421),
    Z = t(100392),
    W = t(836156);
let V = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    ee = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    en = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    et = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function el(e) {
    let { url: n } = e,
        t =
            (0, J.vS)(n) || (0, J.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, Z.W0)(n)
                  ? (0, l.jsx)(ee, { url: n })
                  : (0, W.i)(n)
                    ? (0, l.jsx)(en, { url: n })
                    : (0, X.my)(n)
                      ? (0, l.jsx)(et, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var er = t(192308),
    ei = t(47167),
    ea = t(499211),
    es = t(706083),
    eu = t(78390),
    eo = t(392605),
    ec = t(990474),
    ed = t(232042),
    eh = t(266645),
    em = t(906754),
    ex = t(37632),
    ef = t(593284),
    ej = t(288539),
    eg = t(317525),
    ep = t(71393),
    ev = t(994500),
    eI = t(287809),
    eA = t(147036),
    ey = t(403362);
let ek = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eb = t(73510),
    eC = t(105292);
function eS(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: a } = e,
        s = (0, ea.A)(n),
        {
            name: u,
            iconType: c,
            isForumPost: d,
            hasAccess: m,
        } = (0, h.cf)(
            [K.A, eI.default, ev.A],
            () => {
                let e = K.A.getChannel(n);
                return {
                    name: null != e ? (0, ei.m1)(e, eI.default, ev.A) : void 0,
                    iconType: (0, eA.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, R.nc)(e),
                };
            },
            [n],
        ),
        x = (0, o.p)(),
        f = x?.noStyleAndInteraction !== !0;
    if (null == c) return;
    let j = r === x?.guildId || null == r,
        g =
            m || s.isSubscriptionGated
                ? j || null == u
                    ? (0, l.jsx)(ed.A, {
                          iconType: c,
                          children: u ?? (0, l.jsx)("em", { children: eC.intl.string(eC.t.J90oLW) }),
                      })
                    : (0, l.jsx)(ew, { guildId: r, children: u })
                : (0, l.jsx)(ed.A, { iconType: "locked", children: eC.intl.string(eC.t["/YzI63"]) }),
        p = null;
    return (
        null != i &&
            (p = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ex.A, {}), (0, l.jsx)(ed.A, { iconType: d ? "post" : "message" })],
            })),
        (0, l.jsxs)(B.A, {
            role: "link",
            onClick: f
                ? function (e) {
                      (e?.stopPropagation(), (0, es.o)(r, n, i, a), (0, er.closeAllModals)());
                  }
                : void 0,
            onContextMenu: f
                ? function (e) {
                      let r = K.A.getChannel(n);
                      (0, H.L3)(e, async () => {
                          let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                              t.bind(t, 254106),
                          );
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  channelId: r?.id ?? n,
                                  originalLink: null,
                                  messageId: i,
                              });
                      });
                  }
                : void 0,
            className: "channelMention",
            children: [g, p],
        })
    );
}
function ew(e) {
    let { guildId: n, children: t } = e,
        r = (0, h.bG)([ep.A], () => ep.A.getGuild(n), [n]);
    return (0, l.jsxs)(em.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ex.A, {}) : null, t] });
}
function eN(e) {
    let { id: n } = e,
        t = (0, o.p)();
    return (0, l.jsx)(ej.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
        inlinePreview: t?.noStyleAndInteraction,
    });
}
function eM(e) {
    let { id: n } = e,
        t = (0, o.p)(),
        r = t?.guildId,
        i = (0, h.bG)([eg.A], () => (null != r ? eg.A.getRole(r, n)?.name : null) ?? eC.intl.string(eC.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ef.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eL(e) {
    let { id: n } = e,
        t = (0, o.p)();
    return (0, l.jsx)(eh.A, { gameId: n, authorId: t?.authorId });
}
function eP(e) {
    let { roleName: n } = e,
        t = (0, o.p)();
    return (0, l.jsx)(ef.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function eE(e) {
    let { route: n, itemId: t } = e,
        r = (0, o.p)(),
        i = r?.guildId,
        a = (0, eu.Q)(n),
        s = (0, h.bG)([eg.A], () => (0, eu.f)(eg.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(B.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eo.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != s ? (0, l.jsx)(ex.A, {}) : null, s],
          });
}
function eT(e) {
    let { id: n, name: t } = e,
        i = (0, o.p)(),
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
function e_(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        s = (0, h.bG)([K.A], () => (null != i && null == K.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eS, { channelId: s, guildId: n, messageId: r, conversationId: a });
}
function ez(e) {
    let { url: n, name: i, interactive: a } = e,
        s = r.useCallback(async () => {
            let e = await O.AN(n);
            (U.A.trackLinkClicked(e), (0, D.A)(e));
        }, [n]),
        u = r.useCallback(
            (e) => {
                (0, H.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(B.A, {
        role: "link",
        href: n,
        onClick: a ? s : void 0,
        onContextMenu: a ? u : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(G.P, { size: "xs", className: e$.Kk, color: "currentColor" }), i],
    });
}
var eG = t(196765),
    eH = t(976245),
    eF = t(302031);
function eD() {
    return (0, eH.y)()((e) => ({
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
let eJ = (0, eH.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eU = r.createContext(eJ);
function eq(e) {
    let { children: n } = e,
        [t] = r.useState(eD);
    return (0, l.jsx)(eU.Provider, { value: t, children: n });
}
var eB = t(785562),
    eO = t(379418);
t(321073);
var eK = t(448767);
function eQ(e) {
    return "link" === e.type;
}
var eR = t(254221);
let eX = {
        text: function (e) {
            let { children: n } = e;
            return n;
        },
        paragraph: function (e) {
            let { siblings: n, index: t, children: r } = e,
                i = (0, o.p)()?.formatInline === !0,
                a = t === n.length - 1;
            return i
                ? (0, l.jsxs)(l.Fragment, { children: [r, a ? null : " "] })
                : (0, l.jsxs)("span", { children: [r, a ? null : (0, l.jsx)("br", {})] });
        },
        empty: function () {
            return (0, o.p)()?.formatInline === !0 ? " " : "\n";
        },
        emoji: function (e) {
            let { value: n, type: t } = e,
                i = r.useContext(T);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)($, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(_, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: i } = e,
                a = (0, o.p)()?.noStyleAndInteraction === !0,
                s = null == n || 0 === n.length;
            if (s) {
                let e = (function (e) {
                    let n = R.En.exec(e);
                    if (null != n) {
                        let [, e, t, l, r] = n;
                        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
                    }
                    let t = R.BM.exec(e);
                    if (null == t) return null;
                    let [, l, r, i, a] = t;
                    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
                        ? null
                        : {
                              guildId: l,
                              channelId: r,
                              messageId: i,
                              parentChannelId: void 0,
                              conversationId: (0, R.te)(a),
                          };
                })(t);
                if (null != e) return (0, l.jsx)(e_, { ...e });
                let n = (0, q.h)(t);
                if (null != n) return (0, l.jsx)(ez, { url: t, name: n.name, interactive: !a });
            }
            if ((0, J.vS)(t)) return (0, l.jsx)(el, { url: t });
            if (V.test(t))
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(el, { url: t })],
                });
            let u = r;
            return (s ||
                (u =
                    null != r && r.length > 0
                        ? `${r}

(${t})`
                        : t),
            a)
                ? (0, l.jsx)("span", { title: u ?? t, children: i })
                : (0, l.jsx)(F.A, {
                      title: u,
                      href: t,
                      trusted: s ? () => (0, Q.m)(t, t) : void 0,
                      children: (0, l.jsx)("span", { children: i }),
                  });
        },
        list: function (e) {
            let { type: n, children: t, value: r, items: i } = e,
                a = (0, o.p)()?.formatInline === !0 ? C.tZ : void 0;
            switch (n) {
                case "ordered":
                    let s = (r + i.length - 1).toString().length;
                    return (0, l.jsx)("ol", {
                        start: r,
                        className: a,
                        style: { "--totalCharacters": s, "--olCounterStart": r - 1 },
                        children: t,
                    });
                case "unordered":
                    return (0, l.jsx)("ul", { className: a, children: t });
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
            if ((0, o.p)()?.formatInline === !0) {
                let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
                return (
                    n?.toLowerCase() === "ansi" && (e = e.replaceAll(y.Q0, "")),
                    (0, l.jsx)("code", { className: "inline", children: e })
                );
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: C.Hy,
                    children: [
                        b.p5 ? (0, l.jsx)("div", { className: C.lB, children: (0, l.jsx)(w, { text: t }) }) : null,
                        (0, l.jsx)(k.E, { code: t, lang: n, className: p()(S.kw, "hljs") }),
                    ],
                }),
            });
        },
        quote: function (e) {
            let { children: n } = e;
            return (0, l.jsxs)("div", {
                className: C.h,
                children: [(0, l.jsx)("div", { className: C.r }), (0, l.jsx)("blockquote", { children: n })],
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
                    return (0, l.jsx)(eS, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eN, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eM, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eP, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eP, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eL, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eT, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eE, {
                        route: ek[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, ey.xb)(n);
        },
        heading: function (e) {
            let { level: n, children: t } = e,
                r = `h${n}`;
            return (0, l.jsx)(r, { className: z(), children: t });
        },
        small: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("small", { className: z(), children: n });
        },
        spoiler: function (e) {
            let { children: n, node: t, id: i } = e,
                s = r.useMemo(() => Array.from((0, a.tJ)([t])).some((e) => "link" === e.type), [t]),
                u = (0, o.p)(),
                c = r.useContext(eU),
                d = (0, eG.P)(c, (e) => e.revealedIds.has(i)),
                h = (0, eG.P)(c, (e) => e.hoveredId === i),
                m = r.useCallback(() => c.getState().reveal(i), [c, i]),
                x = r.useCallback(() => c.getState().setHovered(i, !0), [c, i]),
                f = r.useCallback(() => c.getState().setHovered(i, !1), [c, i]);
            return (
                r.useEffect(() => {
                    u?.setHasSpoilerEmbeds?.(s);
                }, [u, s]),
                (0, l.jsx)(eF.Ay, {
                    type: eF.Ay.Types.TEXT,
                    obscured: !d,
                    hovered: h,
                    onReveal: m,
                    onMouseEnter: x,
                    onMouseLeave: f,
                    children: () => n,
                })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eO.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eB.A, { node: r });
        },
    },
    eZ = !1,
    eW = null;
function eV() {
    return (eW ??= (0, a.Ts)().then(() => {
        eZ = !0;
    }));
}
function eY(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(s.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(e3, { content: n, error: t });
        },
        children: (0, l.jsx)(e0, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function e0(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: s } = e;
    eZ || r.use(eV());
    let u = (function (e) {
            let { formatInline: n } = e,
                t = (0, h.bG)([m.A], () => m.A.isDeveloper, []) ? f : x;
            return n ? t & ~j : t;
        })({ formatInline: (0, o.p)()?.formatInline === !0 }),
        c = r.useMemo(() => (0, a.qg)(n, u), [n, u]),
        d = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, a.tJ)(e))
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
                    return n <= E.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [t, c],
        ),
        g = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eK.tq : (0, eK.dn)(n.value, eQ);
                        })(e);
                    return t && (0, eK.iz)(l)
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
                                      let t = eQ(e) ? e.value.url : null;
                                      return null == t || !(0, eK.c_)(t, n);
                                  });
                                  if (e.length === r.value.length) {
                                      t.push(r);
                                      continue;
                                  }
                                  ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                              }
                              return l ? t : e;
                          })(e, { onlyLinkContent: l.onlyLinks, stripGameServerShareLinks: !0 });
                })(c, { hideSingleLinkContent: s }),
            [c, s],
        );
    return (0, l.jsx)(T.Provider, {
        value: d,
        children: (0, l.jsx)(eq, { children: (0, l.jsx)(i.$, { nodes: g, renderers: eX }) }, n),
    });
}
function e3(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            d.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(u.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eR.g,
                    children: [(0, l.jsx)(c.A, { width: 16, height: 16 }), eC.intl.string(eC.t.dpFK4M)],
                }),
            ],
        })
    );
}
