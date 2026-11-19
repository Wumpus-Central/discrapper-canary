t.d(n, { A: () => eU, N: () => eZ });
var l = t(477900),
    r = t(582128),
    a = t(621902),
    i = t(359787),
    u = t(292442),
    s = t(834730),
    o = t(791606),
    c = t(856383),
    d = t(78377),
    h = t(954403),
    f = t(503698),
    m = t.n(f),
    p = t(939249),
    x = t(933832),
    v = t(624479),
    g = t(143145),
    j = t(441136),
    I = t(957565),
    y = t(165648),
    A = t(969490);
function k(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(p.D, {
        onClick: function () {
            (0, I.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(x.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(v.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var C = t(855986),
    b = t(121681),
    w = t(7584),
    S = t(930101),
    N = t(690521);
t(307731);
let M = r.createContext(!1);
function P(e) {
    let { value: n, jumboable: t } = e,
        r = N.Ay.getURL(n),
        a = w.Ay.convertSurrogateToName(n),
        i = (0, d.p)();
    return (0, l.jsx)(S.H, {
        node: { name: a, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function E(e) {
    let { value: n, jumboable: t } = e,
        r = (0, d.p)(),
        a = r?.guildId,
        i = (0, C.bG)([b.Ay], () => b.Ay.getDisambiguatedEmojiContext(a).getById(String(n.id)), [a, n.id]),
        u = i?.name ?? n.name;
    return (
        null != i && i.require_colons && (u = `:${i.name}:`),
        (0, l.jsx)(S.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function L() {
    return (0, d.p)()?.formatInline === !0 ? y.tZ : void 0;
}
var z = t(588975),
    $ = t(442433),
    F = t(9578),
    G = t(975807),
    T = t(380610),
    H = t(235393),
    q = t(258072),
    J = t(694403),
    _ = t(332173),
    W = t(679164),
    B = t(734057),
    R = t(889558),
    D = t(376943);
function Q(e) {
    let n = D.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = D.BM.exec(e);
    if (null == t) return null;
    let [, l, r, a, i] = t;
    return null == r || /\D/.test(r) || (null != a && /\D/.test(a))
        ? null
        : { guildId: l, channelId: r, messageId: a, parentChannelId: void 0, conversationId: (0, D.te)(i) };
}
var Z = t(333421),
    K = t(100392),
    U = t(836156);
let V = /^dev:\/\//i,
    X = r.lazy(() => Promise.resolve().then(t.bind(t, 355435))),
    Y = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    O = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e(503634),
            t.e(761764),
            t.e(60800),
            t.e(218126),
            t.e(467696),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    ee = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e(378100), t.e(561065), t.e(886456), t.e(278078)]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function en(e) {
    let { url: n } = e,
        t =
            (0, T.vS)(n) || (0, T.h4)(n)
                ? (0, l.jsx)(X, { url: n })
                : (0, K.W0)(n)
                  ? (0, l.jsx)(Y, { url: n })
                  : (0, U.i)(n)
                    ? (0, l.jsx)(O, { url: n })
                    : (0, Z.my)(n)
                      ? (0, l.jsx)(ee, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var et = t(192308),
    el = t(47167),
    er = t(499211),
    ea = t(987877),
    ei = t(78390),
    eu = t(392605),
    es = t(990474),
    eo = t(232042),
    ec = t(654255),
    ed = t(906754),
    eh = t(37632),
    ef = t(665303),
    em = t(593284),
    ep = t(288539),
    ex = t(317525),
    ev = t(71393),
    eg = t(994500),
    ej = t(287809),
    eI = t(147036),
    ey = t(403362),
    eA = t(240248);
let ek = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
t(73510);
var eC = t(792996);
function eb(e) {
    let n,
        { channelId: t, guildId: r, messageId: a, conversationId: i } = e,
        u = (0, er.A)(t),
        s = (0, C.bG)([ev.A], () => ev.A.getGuild(r), [r]),
        {
            name: o,
            iconType: c,
            isForumPost: h,
            hasAccess: f,
            parentName: m,
            parentIconType: p,
        } = (0, C.cf)(
            [B.A, ej.default, eg.A],
            () => {
                let e = B.A.getChannel(t),
                    n = e?.isForumPost() ? B.A.getChannel(e.parent_id) : void 0;
                return {
                    name: null != e ? (0, eA.EJ)((0, el.m1)(e, ej.default, eg.A), 32) : void 0,
                    iconType: (0, eI.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, D.nc)(e),
                    parentName: null != n ? (0, eA.EJ)((0, el.m1)(n, ej.default, eg.A), 32) : void 0,
                    parentIconType: null != n ? (0, eI.QG)(n) : void 0,
                };
            },
            [t],
        ),
        x = (0, d.p)(),
        v = x?.noStyleAndInteraction !== !0,
        g = (0, ef.A)({ channelId: t, messageId: a });
    if (null == c) return;
    let j = r === x?.guildId || null == r,
        I = (0, l.jsx)(eo.A, {
            iconType: c,
            children: o ?? (0, l.jsx)("em", { children: eC.intl.string(eC.t.J90oLW) }),
        }),
        y = (0, l.jsx)(eo.A, { iconType: h ? "post" : "message" });
    if (f || u.isSubscriptionGated)
        if (j || null == s || null == o)
            if (null != a) {
                let e = h && null != m && null != p;
                n = (0, l.jsxs)(l.Fragment, {
                    children: [e ? (0, l.jsx)(eo.A, { iconType: p, children: m }) : I, (0, l.jsx)(eh.A, {}), e ? I : y],
                });
            } else n = I;
        else
            n = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ed.A, { guild: s, children: (0, eA.EJ)(s.name, 32) }),
                    (0, l.jsx)(eh.A, {}),
                    null == a || h ? I : y,
                ],
            });
    else n = (0, l.jsx)(eo.A, { iconType: "locked", children: eC.intl.string(eC.t["/YzI63"]) });
    return (0, l.jsx)(_.A, {
        role: "link",
        onClick: v
            ? function (e) {
                  (e?.stopPropagation(), (0, ea.o)(r, t, a, i), (0, et.s7)());
              }
            : void 0,
        onContextMenu: v ? g : void 0,
        className: "channelMention",
        children: n,
    });
}
function ew(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ep.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
        inlinePreview: t?.noStyleAndInteraction,
    });
}
function eS(e) {
    let { id: n } = e,
        t = (0, d.p)(),
        r = t?.guildId,
        a = (0, C.bG)([ex.A], () => (null != r ? ex.A.getRole(r, n)?.name : null) ?? eC.intl.string(eC.t["YV4F/n"]), [
            r,
            n,
        ]);
    return (0, l.jsx)(em.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${a}`,
    });
}
function eN(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ec.A, { gameId: n, authorId: t?.authorId });
}
function eM(e) {
    let { roleName: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(em.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function eP(e) {
    let { route: n, itemId: t } = e,
        r = (0, d.p)(),
        a = r?.guildId,
        i = (0, ei.Q)(n),
        u = (0, C.bG)([ex.A], () => (0, ei.f)(ex.A, n, t, a), [n, t, a]);
    return null == i
        ? null
        : (0, l.jsxs)(_.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eu.i)(a, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [i, null != u ? (0, l.jsx)(eh.A, {}) : null, u],
          });
}
function eE(e) {
    let { id: n, name: t } = e,
        a = (0, d.p)(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `\0${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: i }),
            [a?.channelId, i, n, t],
        );
    return (0, l.jsx)(es.gn, { node: u, children: t });
}
var eL = t(147190);
function ez(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: a, conversationId: i } = e,
        u = (0, C.bG)([B.A], () => (null != a && null == B.A.getChannel(t) ? a : t), [t, a]);
    return (0, l.jsx)(eb, { channelId: u, guildId: n, messageId: r, conversationId: i });
}
function e$(e) {
    let { url: n, name: a, interactive: i } = e,
        u = r.useCallback(async () => {
            let e = await W.AN(n);
            (H.A.trackLinkClicked(e), (0, G.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, $.L3)(e, async () => {
                    let { default: e } = await t.e(762529).then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: a });
                });
            },
            [a, n],
        );
    return (0, l.jsxs)(_.A, {
        role: "link",
        href: n,
        onClick: i ? u : void 0,
        onContextMenu: i ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(z.AttachmentIcon, { size: "xs", className: eL.Kk, color: "currentColor" }), a],
    });
}
var eF = t(886609),
    eG = t(678473),
    eT = t(379418),
    eH = t(152959);
t(321073);
var eq = t(448767),
    eJ = t(886737);
function e_(e) {
    return "link" === e.type;
}
function eW(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eB(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eB(e.value.content) } };
        case "subtext":
            return { ...e, value: { content: eB(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eW) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eW) })) } };
        default:
            return e;
    }
}
function eB(e) {
    return e.map(eR);
}
function eR(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != Q(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eJ.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eB(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eB(e.value.content) } };
        default:
            return e;
    }
}
var eD = t(254221);
let eQ = [];
function eZ(e, n) {
    let { enabled: t, syntax: l } = n,
        a = (0, eH.n9)(t);
    return r.useMemo(() => {
        if (!t || !a || null == e) return null;
        try {
            return { ast: (0, i.qg)(e, l) };
        } catch (e) {
            return { error: e };
        }
    }, [t, a, e, l]);
}
let eK = {
    text: function (e) {
        let { node: n } = e;
        return (0, l.jsx)(h.z, { text: n.value });
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: r } = e,
            a = (0, d.p)()?.formatInline === !0,
            i = t === n.length - 1;
        return a
            ? (0, l.jsxs)(l.Fragment, { children: [r, i ? null : " "] })
            : (0, l.jsxs)("span", { children: [r, i ? null : (0, l.jsx)("br", {})] });
    },
    empty: function () {
        return (0, d.p)()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            a = r.useContext(M);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(P, { value: n, jumboable: a });
            case "custom":
                return (0, l.jsx)(E, { value: n, jumboable: a });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: a } = e,
            i = (0, d.p)(),
            u = i?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = Q(t);
            if (null != e) return (0, l.jsx)(ez, { ...e });
            let n = (0, q.h)(t);
            if (null != n) return (0, l.jsx)(e$, { url: t, name: n.name, interactive: !u });
        }
        if ((0, T.vS)(t)) return (0, l.jsx)(en, { url: t });
        let o = (0, J.W1)(t),
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
            f = s ? (0, l.jsx)(h.z, { text: c }) : a;
        if (V.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: f }), (0, l.jsx)(en, { url: t })],
            });
        let m = r;
        return (s ||
            (m =
                null != r && r.length > 0
                    ? `${r}

(${t})`
                    : t),
        u)
            ? (0, l.jsx)("span", { title: m ?? t, children: f })
            : (0, l.jsx)(F.A, {
                  title: m,
                  href: t,
                  trusted: () => (0, R.m)(o?.target ?? t, null != r && r.length > 0 ? r : c),
                  messageId: i?.messageId,
                  channelId: i?.channelId,
                  children: (0, l.jsx)("span", { children: f }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: a } = e,
            i = (0, d.p)()?.formatInline === !0 ? y.tZ : void 0;
        switch (n) {
            case "ordered":
                let u = (r + a.length - 1).toString().length;
                return (0, l.jsx)("ol", {
                    start: r,
                    className: i,
                    style: { "--totalCharacters": u, "--olCounterStart": r - 1 },
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
        return (0, l.jsx)("code", { className: "inline", children: (0, l.jsx)(h.z, { text: n.value }) });
    },
    code_block: function (e) {
        let { language: n, content: t } = e;
        if ((0, d.p)()?.formatInline === !0) {
            let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
            return (
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(g.Q0, "")),
                (0, l.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, l.jsx)("pre", {
            children: (0, l.jsxs)("div", {
                className: y.Hy,
                children: [
                    I.p5 ? (0, l.jsx)("div", { className: y.lB, children: (0, l.jsx)(k, { text: t }) }) : null,
                    (0, l.jsx)(j.E, { code: t, lang: n, className: m()(A.kw, "hljs") }),
                ],
            }),
        });
    },
    quote: function (e) {
        let { children: n } = e;
        return (0, l.jsxs)("div", {
            className: y.h,
            children: [(0, l.jsx)("div", { className: y.r }), (0, l.jsx)("blockquote", { children: n })],
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
                return (0, l.jsx)(eS, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eM, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eM, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eN, { id: String(t) });
            case "command":
                return (0, l.jsx)(eE, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(eP, {
                    route: ek[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, ey.xb)(n);
    },
    heading: function (e) {
        let { level: n, children: t } = e,
            r = `h${n}`;
        return (0, l.jsx)(r, { className: L(), children: t });
    },
    subtext: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("small", { className: L(), children: n });
    },
    spoiler: eF.dC,
    timestamp: function (e) {
        let { value: n, style: t } = e,
            r = (0, eT.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(eG.A, { node: r });
    },
};
function eU(e) {
    let {
        content: n,
        parsed: t,
        allowJumboEmoji: r = !0,
        hideSingleLinkContent: a = !1,
        redactRestrictedContent: i = !1,
    } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eX, { content: n, error: t });
        },
        children: (0, l.jsx)(eV, {
            content: n,
            parsed: t,
            allowJumboEmoji: r,
            hideSingleLinkContent: a,
            redactRestrictedContent: i,
        }),
    });
}
function eV(e) {
    let { content: n, parsed: t, allowJumboEmoji: u, hideSingleLinkContent: s, redactRestrictedContent: o } = e;
    if (((0, eH.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? eQ,
        d = r.useMemo(
            () =>
                u &&
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
                    return n <= 30;
                })(c),
            [u, c],
        ),
        h = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: l = !1 } = n,
                        r = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eq.tq : (0, eq.dn)(n.value, e_);
                        })(e);
                    if (t && (0, eq.iz)(r)) return [];
                    let a = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = e_(e) ? e.value.url : null;
                                return null == t || !(0, eq.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? a.map(eW) : a;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(M.Provider, {
        value: d,
        children: (0, l.jsx)(eF.L1, { children: (0, l.jsx)(a.$, { nodes: h, renderers: eK }) }, n),
    });
}
function eX(e) {
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
                    className: eD.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), eC.intl.string(eC.t.dpFK4M)],
                }),
            ],
        })
    );
}
