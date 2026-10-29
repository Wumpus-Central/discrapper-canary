t.d(n, { A: () => nn });
var l = t(477900),
    r = t(582128),
    a = t(146849),
    i = t(733004),
    s = t(28640),
    u = t(292442),
    o = t(834730);
let c = r.createContext(null);
function d() {
    return r.useContext(c);
}
var h = t(791606),
    m = t(38405),
    x = t(997141),
    f = t(954403),
    v = t(503698),
    g = t.n(v),
    j = t(939249),
    p = t(933832),
    I = t(624479),
    y = t(143145),
    A = t(441136),
    k = t(957565),
    C = t(165648),
    b = t(969490);
function S(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(j.D, {
        onClick: function () {
            (0, k.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(p.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(I.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var w = t(17928),
    N = t(236285),
    E = t(7584),
    M = t(930101),
    L = t(690521),
    P = t(307731);
let _ = r.createContext(!1);
function z(e) {
    let { value: n, jumboable: t } = e,
        r = L.Ay.getURL(n),
        a = E.Ay.convertSurrogateToName(n),
        i = d();
    return (0, l.jsx)(M.H, {
        node: { name: a, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function G(e) {
    let { value: n, jumboable: t } = e,
        r = d(),
        a = r?.guildId,
        i = (0, w.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(a).getById(String(n.id)), [a, n.id]),
        s = i?.name ?? n.name;
    return (
        null != i && i.require_colons && (s = `:${i.name}:`),
        (0, l.jsx)(M.X, {
            node: { name: s, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function $() {
    return d()?.formatInline === !0 ? C.tZ : void 0;
}
var T = t(588975),
    H = t(442433),
    R = t(9578),
    F = t(975807),
    J = t(380610),
    U = t(235393),
    B = t(258072),
    q = t(332173),
    D = t(679164),
    O = t(734057),
    K = t(123917),
    Q = t(376943);
function W(e) {
    let n = Q.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = Q.BM.exec(e);
    if (null == t) return null;
    let [, l, r, a, i] = t;
    return null == r || /\D/.test(r) || (null != a && /\D/.test(a))
        ? null
        : { guildId: l, channelId: r, messageId: a, parentChannelId: void 0, conversationId: (0, Q.te)(i) };
}
var X = t(333421),
    Z = t(100392),
    Y = t(836156);
let V = /^dev:\/\//i,
    ee = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    en = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    et = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    el = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function er(e) {
    let { url: n } = e,
        t =
            (0, J.vS)(n) || (0, J.h4)(n)
                ? (0, l.jsx)(ee, { url: n })
                : (0, Z.W0)(n)
                  ? (0, l.jsx)(en, { url: n })
                  : (0, Y.i)(n)
                    ? (0, l.jsx)(et, { url: n })
                    : (0, X.my)(n)
                      ? (0, l.jsx)(el, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var ea = t(192308),
    ei = t(47167),
    es = t(499211),
    eu = t(706083),
    eo = t(78390),
    ec = t(392605),
    ed = t(990474),
    eh = t(232042),
    em = t(266645),
    ex = t(906754),
    ef = t(37632),
    ev = t(593284),
    eg = t(288539),
    ej = t(317525),
    ep = t(71393),
    eI = t(994500),
    ey = t(287809),
    eA = t(147036),
    ek = t(403362);
let eC = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eb = t(73510),
    eS = t(105292);
function ew(e) {
    let { channelId: n, guildId: r, messageId: a, conversationId: i } = e,
        s = (0, es.A)(n),
        {
            name: u,
            iconType: o,
            isForumPost: c,
            hasAccess: h,
        } = (0, w.cf)(
            [O.A, ey.default, eI.A],
            () => {
                let e = O.A.getChannel(n);
                return {
                    name: null != e ? (0, ei.m1)(e, ey.default, eI.A) : void 0,
                    iconType: (0, eA.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, Q.nc)(e),
                };
            },
            [n],
        ),
        m = d(),
        x = m?.noStyleAndInteraction !== !0;
    if (null == o) return;
    let f = r === m?.guildId || null == r,
        v =
            h || s.isSubscriptionGated
                ? f || null == u
                    ? (0, l.jsx)(eh.A, {
                          iconType: o,
                          children: u ?? (0, l.jsx)("em", { children: eS.intl.string(eS.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eN, { guildId: r, children: u })
                : (0, l.jsx)(eh.A, { iconType: "locked", children: eS.intl.string(eS.t["/YzI63"]) }),
        g = null;
    return (
        null != a &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ef.A, {}), (0, l.jsx)(eh.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: x
                ? function (e) {
                      (e?.stopPropagation(), (0, eu.o)(r, n, a, i), (0, ea.closeAllModals)());
                  }
                : void 0,
            onContextMenu: x
                ? function (e) {
                      let r = O.A.getChannel(n);
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
                                  messageId: a,
                              });
                      });
                  }
                : void 0,
            className: "channelMention",
            children: [v, g],
        })
    );
}
function eN(e) {
    let { guildId: n, children: t } = e,
        r = (0, w.bG)([ep.A], () => ep.A.getGuild(n), [n]);
    return (0, l.jsxs)(ex.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ef.A, {}) : null, t] });
}
function eE(e) {
    let { id: n } = e,
        t = d();
    return (0, l.jsx)(eg.A, {
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
        t = d(),
        r = t?.guildId,
        a = (0, w.bG)([ej.A], () => (null != r ? ej.A.getRole(r, n)?.name : null) ?? eS.intl.string(eS.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ev.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${a}`,
    });
}
function eL(e) {
    let { id: n } = e,
        t = d();
    return (0, l.jsx)(em.A, { gameId: n, authorId: t?.authorId });
}
function eP(e) {
    let { roleName: n } = e,
        t = d();
    return (0, l.jsx)(ev.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function e_(e) {
    let { route: n, itemId: t } = e,
        r = d(),
        a = r?.guildId,
        i = (0, eo.Q)(n),
        s = (0, w.bG)([ej.A], () => (0, eo.f)(ej.A, n, t, a), [n, t, a]);
    return null == i
        ? null
        : (0, l.jsxs)(q.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, ec.i)(a, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [i, null != s ? (0, l.jsx)(ef.A, {}) : null, s],
          });
}
function ez(e) {
    let { id: n, name: t } = e,
        a = d(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eb.v4}${e}`).join("")}`;
        }, [n, t]),
        s = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: i }),
            [a?.channelId, i, n, t],
        );
    return (0, l.jsx)(ed.gn, { node: s, children: t });
}
var eG = t(147190);
function e$(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: a, conversationId: i } = e,
        s = (0, w.bG)([O.A], () => (null != a && null == O.A.getChannel(t) ? a : t), [t, a]);
    return (0, l.jsx)(ew, { channelId: s, guildId: n, messageId: r, conversationId: i });
}
function eT(e) {
    let { url: n, name: a, interactive: i } = e,
        s = r.useCallback(async () => {
            let e = await D.AN(n);
            (U.A.trackLinkClicked(e), (0, F.A)(e));
        }, [n]),
        u = r.useCallback(
            (e) => {
                (0, H.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: a });
                });
            },
            [a, n],
        );
    return (0, l.jsxs)(q.A, {
        role: "link",
        href: n,
        onClick: i ? s : void 0,
        onContextMenu: i ? u : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(T.P, { size: "xs", className: eG.Kk, color: "currentColor" }), a],
    });
}
var eH = t(196765),
    eR = t(976245),
    eF = t(302031);
function eJ() {
    return (0, eR.y)()((e) => ({
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
let eU = (0, eR.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eB = r.createContext(eU);
function eq(e) {
    let { children: n } = e,
        [t] = r.useState(eJ);
    return (0, l.jsx)(eB.Provider, { value: t, children: n });
}
var eD = t(785562),
    eO = t(379418),
    eK = t(152959);
t(321073);
var eQ = t(448767),
    eW = t(886737);
function eX(e) {
    return "link" === e.type;
}
function eZ(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eY(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eY(e.value.content) } };
        case "small":
            return { ...e, value: { content: eY(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eZ) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eZ) })) } };
        default:
            return e;
    }
}
function eY(e) {
    return e.map(eV);
}
function eV(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != W(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eW.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eY(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eY(e.value.content) } };
        default:
            return e;
    }
}
var e0 = t(254221);
let e1 = {
    text: function (e) {
        let { node: n } = e;
        return (0, l.jsx)(f.z, { text: n.value });
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: r } = e,
            a = d()?.formatInline === !0,
            i = t === n.length - 1;
        return a
            ? (0, l.jsxs)(l.Fragment, { children: [r, i ? null : " "] })
            : (0, l.jsxs)("span", { children: [r, i ? null : (0, l.jsx)("br", {})] });
    },
    empty: function () {
        return d()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            a = r.useContext(_);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(z, { value: n, jumboable: a });
            case "custom":
                return (0, l.jsx)(G, { value: n, jumboable: a });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: a } = e,
            i = d()?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = W(t);
            if (null != e) return (0, l.jsx)(e$, { ...e });
            let n = (0, B.h)(t);
            if (null != n) return (0, l.jsx)(eT, { url: t, name: n.name, interactive: !i });
        }
        if ((0, J.vS)(t)) return (0, l.jsx)(er, { url: t });
        let u = s ? (0, l.jsx)(f.z, { text: t }) : a;
        if (V.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: u }), (0, l.jsx)(er, { url: t })],
            });
        let o = r;
        return (s ||
            (o =
                null != r && r.length > 0
                    ? `${r}

(${t})`
                    : t),
        i)
            ? (0, l.jsx)("span", { title: o ?? t, children: u })
            : (0, l.jsx)(R.A, {
                  title: o,
                  href: t,
                  trusted: s ? () => (0, K.m)(t, t) : void 0,
                  children: (0, l.jsx)("span", { children: u }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: a } = e,
            i = d()?.formatInline === !0 ? C.tZ : void 0;
        switch (n) {
            case "ordered":
                let s = (r + a.length - 1).toString().length;
                return (0, l.jsx)("ol", {
                    start: r,
                    className: i,
                    style: { "--totalCharacters": s, "--olCounterStart": r - 1 },
                    children: t,
                });
            case "unordered":
                return (0, l.jsx)("ul", { className: i, children: t });
        }
    },
    listItem: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("li", { children: n });
    },
    code: function (e) {
        let { node: n } = e;
        return (0, l.jsx)("code", { className: "inline", children: (0, l.jsx)(f.z, { text: n.value }) });
    },
    code_block: function (e) {
        let { language: n, content: t } = e;
        if (d()?.formatInline === !0) {
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
                    k.p5 ? (0, l.jsx)("div", { className: C.lB, children: (0, l.jsx)(S, { text: t }) }) : null,
                    (0, l.jsx)(A.E, { code: t, lang: n, className: g()(b.kw, "hljs") }),
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
                return (0, l.jsx)(ew, { channelId: String(t) });
            case "user":
                return (0, l.jsx)(eE, { id: String(t) });
            case "role":
                return (0, l.jsx)(eM, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eP, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eP, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eL, { id: String(t) });
            case "command":
                return (0, l.jsx)(ez, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(e_, {
                    route: eC[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, ek.xb)(n);
    },
    heading: function (e) {
        let { level: n, children: t } = e,
            r = `h${n}`;
        return (0, l.jsx)(r, { className: $(), children: t });
    },
    small: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("small", { className: $(), children: n });
    },
    spoiler: function (e) {
        let { children: n, node: t, id: a } = e,
            i = r.useMemo(() => Array.from((0, s.tJ)([t])).some((e) => "link" === e.type), [t]),
            u = d(),
            o = r.useContext(eB),
            c = (0, eH.P)(o, (e) => e.revealedIds.has(a)),
            h = (0, eH.P)(o, (e) => e.hoveredId === a),
            m = r.useCallback(() => o.getState().reveal(a), [o, a]),
            x = r.useCallback(() => o.getState().setHovered(a, !0), [o, a]),
            f = r.useCallback(() => o.getState().setHovered(a, !1), [o, a]);
        return (
            r.useEffect(() => {
                u?.setHasSpoilerEmbeds?.(i);
            }, [u, i]),
            (0, l.jsx)(eF.Ay, {
                type: eF.Ay.Types.TEXT,
                obscured: !c,
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
        return null == r ? null : (0, l.jsx)(eD.A, { node: r });
    },
};
function e3(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1, redactRestrictedContent: a = !1 } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(e4, { content: n, error: t });
        },
        children: (0, l.jsx)(e9, {
            content: n,
            allowJumboEmoji: t,
            hideSingleLinkContent: r,
            redactRestrictedContent: a,
        }),
    });
}
function e9(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: a, redactRestrictedContent: u } = e;
    (0, eK.b)(!0);
    let o = d()?.formatInline === !0,
        c = (0, x.j)({ formatInline: o }),
        h = r.useMemo(() => (0, s.qg)(n, c), [n, c]),
        m = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, s.tJ)(e))
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
                })(h),
            [t, h],
        ),
        f = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: l = !1 } = n,
                        r = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eQ.tq : (0, eQ.dn)(n.value, eX);
                        })(e);
                    if (t && (0, eQ.iz)(r)) return [];
                    let a = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eX(e) ? e.value.url : null;
                                return null == t || !(0, eQ.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? a.map(eZ) : a;
                })(h, { hideSingleLinkContent: a, redactRestrictedContent: u }),
            [h, a, u],
        );
    return (0, l.jsx)(_.Provider, {
        value: m,
        children: (0, l.jsx)(eq, { children: (0, l.jsx)(i.$, { nodes: f, renderers: e1 }) }, n),
    });
}
function e4(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            m.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(o.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: e0.g,
                    children: [(0, l.jsx)(h.A, { width: 16, height: 16 }), eS.intl.string(eS.t.dpFK4M)],
                }),
            ],
        })
    );
}
var e7 = t(174459),
    e2 = t(903369),
    e6 = t(521981),
    e5 = t(594808),
    e8 = t(652215),
    ne = t(910379);
function nn(e, n) {
    let {
            hideSimpleEmbedContent: i = !0,
            formatInline: s = !1,
            noStyleAndInteraction: u = !1,
            allowHeading: o = !1,
            allowList: d = !1,
            allowLinks: h = !1,
            allowDevLinks: m = !1,
            previewLinkTarget: x = !1,
            viewingChannelId: f,
            postProcessor: v,
            restrictedPreview: g = !1,
        } = n,
        j = (0, a.I2)({ location: "useMessageRenderedContent" }),
        [p, I] = r.useState(!1),
        y = r.useCallback((e) => {
            e && I(!0);
        }, []);
    r.useEffect(() => {
        I(!1);
    }, [e.content]);
    let A = e.id,
        k = e.channel_id,
        C = (0, e2.U)(e),
        b = e.author?.id,
        S = r.useMemo(
            () => ({
                messageId: A,
                channelId: k,
                viewingChannelId: f,
                guildId: C,
                authorId: b,
                setHasSpoilerEmbeds: y,
                formatInline: s,
                noStyleAndInteraction: u,
            }),
            [A, k, f, C, b, y, s, u],
        );
    return r.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported) return { content: eS.intl.string(eS.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(e8.pr7.LOADING))
            return { content: (0, l.jsx)(e5.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
        if (e.type === e8.lAJ.CHANGELOG) {
            let { renderChangelogMessageMarkup: n } = t(550997);
            return n(e, ne, {
                track: (e, n) => {
                    e7.default.track(e, n);
                },
            });
        }
        if (j.enabled && null == v)
            return {
                content: (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(c.Provider, {
                        value: S,
                        children: (0, l.jsx)(e3, {
                            content: e.content,
                            allowJumboEmoji: !s && e.type !== e8.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: i && (0, eQ.k5)(e.embeds),
                            redactRestrictedContent: g,
                        }),
                    }),
                }),
                hasSpoilerEmbeds: p,
                hasBailedAst: !1,
            };
        let n = g ? (e, n) => (0, eW.A)(v?.(e, n) ?? e) : v;
        return (0, e6.Ay)(e, {
            hideSimpleEmbedContent: i,
            formatInline: s,
            noStyleAndInteraction: u,
            allowHeading: o,
            allowList: d,
            allowLinks: h,
            allowDevLinks: m,
            previewLinkTarget: x,
            viewingChannelId: f,
            allowGameMentions: !0,
            postProcessor: n,
        });
    }, [
        e.content,
        e.customRenderedContent,
        e.embeds,
        e.interaction,
        e.state,
        e.type,
        i,
        s,
        u,
        o,
        d,
        h,
        x,
        m,
        f,
        v,
        g,
        j.enabled,
        p,
        S,
    ]);
}
