t.d(n, { A: () => eQ, N: () => eZ });
var l = t(477900),
    r = t(582128),
    i = t(733004),
    a = t(465632),
    u = t(292442),
    s = t(834730),
    o = t(791606),
    c = t(38405),
    d = t(997141),
    h = t(78377),
    m = t(954403),
    f = t(503698),
    p = t.n(f),
    g = t(939249),
    x = t(933832),
    v = t(624479),
    j = t(143145),
    I = t(441136),
    y = t(957565),
    A = t(165648),
    C = t(969490);
function k(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(g.D, {
        onClick: function () {
            (0, y.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, l.jsx)(x.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(v.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var b = t(17928),
    S = t(236285),
    w = t(7584),
    E = t(930101),
    N = t(690521),
    M = t(307731);
let P = r.createContext(!1);
function L(e) {
    let { value: n, jumboable: t } = e,
        r = N.Ay.getURL(n),
        i = w.Ay.convertSurrogateToName(n),
        a = (0, h.p)();
    return (0, l.jsx)(E.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function T(e) {
    let { value: n, jumboable: t } = e,
        r = (0, h.p)(),
        i = r?.guildId,
        a = (0, b.bG)([S.Ay], () => S.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (u = `:${a.name}:`),
        (0, l.jsx)(E.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function z() {
    return (0, h.p)()?.formatInline === !0 ? A.tZ : void 0;
}
var G = t(588975),
    _ = t(442433),
    $ = t(9578),
    R = t(975807),
    F = t(380610),
    U = t(235393),
    B = t(258072),
    D = t(694403),
    H = t(332173),
    J = t(679164),
    O = t(734057),
    q = t(123917),
    K = t(376943);
function W(e) {
    let n = K.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = K.BM.exec(e);
    if (null == t) return null;
    let [, l, r, i, a] = t;
    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
        ? null
        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, K.te)(a) };
}
var Z = t(333421),
    V = t(100392),
    Q = t(836156);
let X = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 325213))),
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
            (0, F.vS)(n) || (0, F.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, V.W0)(n)
                  ? (0, l.jsx)(ee, { url: n })
                  : (0, Q.i)(n)
                    ? (0, l.jsx)(en, { url: n })
                    : (0, Z.my)(n)
                      ? (0, l.jsx)(et, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var er = t(192308),
    ei = t(47167),
    ea = t(499211),
    eu = t(706083),
    es = t(78390),
    eo = t(392605),
    ec = t(990474),
    ed = t(232042),
    eh = t(266645),
    em = t(906754),
    ef = t(37632),
    ep = t(593284),
    eg = t(288539),
    ex = t(317525),
    ev = t(71393),
    ej = t(994500),
    eI = t(287809),
    ey = t(147036),
    eA = t(403362);
let eC = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var ek = t(73510),
    eb = t(105292);
function eS(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: a } = e,
        u = (0, ea.A)(n),
        {
            name: s,
            iconType: o,
            isForumPost: c,
            hasAccess: d,
        } = (0, b.cf)(
            [O.A, eI.default, ej.A],
            () => {
                let e = O.A.getChannel(n);
                return {
                    name: null != e ? (0, ei.m1)(e, eI.default, ej.A) : void 0,
                    iconType: (0, ey.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, K.nc)(e),
                };
            },
            [n],
        ),
        m = (0, h.p)(),
        f = m?.noStyleAndInteraction !== !0;
    if (null == o) return;
    let p = r === m?.guildId || null == r,
        g =
            d || u.isSubscriptionGated
                ? p || null == s
                    ? (0, l.jsx)(ed.A, {
                          iconType: o,
                          children: s ?? (0, l.jsx)("em", { children: eb.intl.string(eb.t.J90oLW) }),
                      })
                    : (0, l.jsx)(ew, { guildId: r, children: s })
                : (0, l.jsx)(ed.A, { iconType: "locked", children: eb.intl.string(eb.t["/YzI63"]) }),
        x = null;
    return (
        null != i &&
            (x = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ef.A, {}), (0, l.jsx)(ed.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(H.A, {
            role: "link",
            onClick: f
                ? function (e) {
                      (e?.stopPropagation(), (0, eu.o)(r, n, i, a), (0, er.closeAllModals)());
                  }
                : void 0,
            onContextMenu: f
                ? function (e) {
                      let r = O.A.getChannel(n);
                      (0, _.L3)(e, async () => {
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
            children: [g, x],
        })
    );
}
function ew(e) {
    let { guildId: n, children: t } = e,
        r = (0, b.bG)([ev.A], () => ev.A.getGuild(n), [n]);
    return (0, l.jsxs)(em.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ef.A, {}) : null, t] });
}
function eE(e) {
    let { id: n } = e,
        t = (0, h.p)();
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
function eN(e) {
    let { id: n } = e,
        t = (0, h.p)(),
        r = t?.guildId,
        i = (0, b.bG)([ex.A], () => (null != r ? ex.A.getRole(r, n)?.name : null) ?? eb.intl.string(eb.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ep.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eM(e) {
    let { id: n } = e,
        t = (0, h.p)();
    return (0, l.jsx)(eh.A, { gameId: n, authorId: t?.authorId });
}
function eP(e) {
    let { roleName: n } = e,
        t = (0, h.p)();
    return (0, l.jsx)(ep.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function eL(e) {
    let { route: n, itemId: t } = e,
        r = (0, h.p)(),
        i = r?.guildId,
        a = (0, es.Q)(n),
        u = (0, b.bG)([ex.A], () => (0, es.f)(ex.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(H.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eo.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, l.jsx)(ef.A, {}) : null, u],
          });
}
function eT(e) {
    let { id: n, name: t } = e,
        i = (0, h.p)(),
        a = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${ek.v4}${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: a }),
            [i?.channelId, a, n, t],
        );
    return (0, l.jsx)(ec.gn, { node: u, children: t });
}
var ez = t(147190);
function eG(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        u = (0, b.bG)([O.A], () => (null != i && null == O.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eS, { channelId: u, guildId: n, messageId: r, conversationId: a });
}
function e_(e) {
    let { url: n, name: i, interactive: a } = e,
        u = r.useCallback(async () => {
            let e = await J.AN(n);
            (U.A.trackLinkClicked(e), (0, R.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, _.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(H.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(G.P, { size: "xs", className: ez.Kk, color: "currentColor" }), i],
    });
}
var e$ = t(886609),
    eR = t(785562),
    eF = t(379418),
    eU = t(152959);
t(321073);
var eB = t(448767),
    eD = t(886737);
function eH(e) {
    return "link" === e.type;
}
function eJ(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eO(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eO(e.value.content) } };
        case "small":
            return { ...e, value: { content: eO(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eJ) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eJ) })) } };
        default:
            return e;
    }
}
function eO(e) {
    return e.map(eq);
}
function eq(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != W(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eD.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eO(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eO(e.value.content) } };
        default:
            return e;
    }
}
var eK = t(254221);
let eW = [];
function eZ(e, n) {
    let { enabled: t, formatInline: l } = n,
        i = (0, eU.n9)(t),
        u = (0, d.j)({ formatInline: l });
    return r.useMemo(() => {
        if (!t || !i || null == e) return null;
        try {
            return { ast: (0, a.qg)(e, u) };
        } catch (e) {
            return { error: e };
        }
    }, [t, i, e, u]);
}
let eV = {
    text: function (e) {
        let { node: n } = e;
        return (0, l.jsx)(m.z, { text: n.value });
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: r } = e,
            i = (0, h.p)()?.formatInline === !0,
            a = t === n.length - 1;
        return i
            ? (0, l.jsxs)(l.Fragment, { children: [r, a ? null : " "] })
            : (0, l.jsxs)("span", { children: [r, a ? null : (0, l.jsx)("br", {})] });
    },
    empty: function () {
        return (0, h.p)()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            i = r.useContext(P);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(L, { value: n, jumboable: i });
            case "custom":
                return (0, l.jsx)(T, { value: n, jumboable: i });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: i } = e,
            a = (0, h.p)(),
            u = a?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = W(t);
            if (null != e) return (0, l.jsx)(eG, { ...e });
            let n = (0, B.h)(t);
            if (null != n) return (0, l.jsx)(e_, { url: t, name: n.name, interactive: !u });
        }
        if ((0, F.vS)(t)) return (0, l.jsx)(el, { url: t });
        let o = (0, D.W1)(t),
            c = s
                ? (o?.displayTarget ?? t)
                : (function e(n) {
                      return n
                          .map((n) => {
                              switch (n.type) {
                                  case "text":
                                  case "code":
                                      return n.value;
                                  case "bold":
                                  case "italic":
                                  case "underline":
                                  case "strikethrough":
                                      return e(n.value);
                                  case "spoiler":
                                      return e(n.value.content);
                                  default:
                                      return "";
                              }
                          })
                          .join("");
                  })(n),
            d = s ? (0, l.jsx)(m.z, { text: c }) : i;
        if (X.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: d }), (0, l.jsx)(el, { url: t })],
            });
        let f = r;
        return (s ||
            (f =
                null != r && r.length > 0
                    ? `${r}

(${t})`
                    : t),
        u)
            ? (0, l.jsx)("span", { title: f ?? t, children: d })
            : (0, l.jsx)($.A, {
                  title: f,
                  href: t,
                  trusted: () => (0, q.m)(o?.target ?? t, null != r && r.length > 0 ? r : c),
                  messageId: a?.messageId,
                  channelId: a?.channelId,
                  children: (0, l.jsx)("span", { children: d }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: i } = e,
            a = (0, h.p)()?.formatInline === !0 ? A.tZ : void 0;
        switch (n) {
            case "ordered":
                let u = (r + i.length - 1).toString().length;
                return (0, l.jsx)("ol", {
                    start: r,
                    className: a,
                    style: { "--totalCharacters": u, "--olCounterStart": r - 1 },
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
        let { node: n } = e;
        return (0, l.jsx)("code", { className: "inline", children: (0, l.jsx)(m.z, { text: n.value }) });
    },
    code_block: function (e) {
        let { language: n, content: t } = e;
        if ((0, h.p)()?.formatInline === !0) {
            let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
            return (
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(j.Q0, "")),
                (0, l.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, l.jsx)("pre", {
            children: (0, l.jsxs)("div", {
                className: A.Hy,
                children: [
                    y.p5 ? (0, l.jsx)("div", { className: A.lB, children: (0, l.jsx)(k, { text: t }) }) : null,
                    (0, l.jsx)(I.E, { code: t, lang: n, className: p()(C.kw, "hljs") }),
                ],
            }),
        });
    },
    quote: function (e) {
        let { children: n } = e;
        return (0, l.jsxs)("div", {
            className: A.h,
            children: [(0, l.jsx)("div", { className: A.r }), (0, l.jsx)("blockquote", { children: n })],
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
                return (0, l.jsx)(eE, { id: String(t) });
            case "role":
                return (0, l.jsx)(eN, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eP, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eP, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eM, { id: String(t) });
            case "command":
                return (0, l.jsx)(eT, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(eL, {
                    route: eC[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, eA.xb)(n);
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
    spoiler: e$.dC,
    timestamp: function (e) {
        let { value: n, style: t } = e,
            r = (0, eF.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(eR.A, { node: r });
    },
};
function eQ(e) {
    let {
        content: n,
        parsed: t,
        allowJumboEmoji: r = !0,
        hideSingleLinkContent: i = !1,
        redactRestrictedContent: a = !1,
    } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eY, { content: n, error: t });
        },
        children: (0, l.jsx)(eX, {
            content: n,
            parsed: t,
            allowJumboEmoji: r,
            hideSingleLinkContent: i,
            redactRestrictedContent: a,
        }),
    });
}
function eX(e) {
    let { content: n, parsed: t, allowJumboEmoji: u, hideSingleLinkContent: s, redactRestrictedContent: o } = e;
    if (((0, eU.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? eW,
        d = r.useMemo(
            () =>
                u &&
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
                    return n <= M.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [u, c],
        ),
        h = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: l = !1 } = n,
                        r = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eB.tq : (0, eB.dn)(n.value, eH);
                        })(e);
                    if (t && (0, eB.iz)(r)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eH(e) ? e.value.url : null;
                                return null == t || !(0, eB.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? i.map(eJ) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(P.Provider, {
        value: d,
        children: (0, l.jsx)(e$.L1, { children: (0, l.jsx)(i.$, { nodes: h, renderers: eV }) }, n),
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
                (0, l.jsxs)(s.E, {
                    variant: "body-md/normal",
                    color: "text-feedback-critical",
                    className: eK.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), eb.intl.string(eb.t.dpFK4M)],
                }),
            ],
        })
    );
}
