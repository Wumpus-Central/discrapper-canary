t.d(n, { A: () => eV, N: () => eK });
var l = t(477900),
    r = t(582128),
    i = t(621902),
    a = t(359787),
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
        [t, i] = r.useState(!1);
    return (0, l.jsx)(p.D, {
        onClick: function () {
            (0, I.C)(
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
        i = w.Ay.convertSurrogateToName(n),
        a = (0, d.p)();
    return (0, l.jsx)(S.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function E(e) {
    let { value: n, jumboable: t } = e,
        r = (0, d.p)(),
        i = r?.guildId,
        a = (0, C.bG)([b.Ay], () => b.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (u = `:${a.name}:`),
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
    D = t(889558),
    R = t(376943);
function Q(e) {
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
        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, R.te)(a) };
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
    ei = t(987877),
    ea = t(78390),
    eu = t(392605),
    es = t(990474),
    eo = t(232042),
    ec = t(654255),
    ed = t(906754),
    eh = t(37632),
    ef = t(665303),
    em = t(593284),
    ep = t(288539),
    ex = t(897898),
    ev = t(317525),
    eg = t(71393),
    ej = t(994500),
    eI = t(287809),
    ey = t(147036),
    eA = t(403362),
    ek = t(240248);
let eC = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
t(73510);
var eb = t(792996);
function ew(e) {
    let n,
        { channelId: t, guildId: r, messageId: i, conversationId: a } = e,
        u = (0, er.A)(t),
        s = (0, C.bG)([eg.A], () => eg.A.getGuild(r), [r]),
        {
            name: o,
            iconType: c,
            isForumPost: h,
            hasAccess: f,
            parentName: m,
            parentIconType: p,
        } = (0, C.cf)(
            [B.A, eI.default, ej.A],
            () => {
                let e = B.A.getChannel(t),
                    n = e?.isForumPost() ? B.A.getChannel(e.parent_id) : void 0;
                return {
                    name: null != e ? (0, ek.EJ)((0, el.m1)(e, eI.default, ej.A), 32) : void 0,
                    iconType: (0, ey.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, R.nc)(e),
                    parentName: null != n ? (0, ek.EJ)((0, el.m1)(n, eI.default, ej.A), 32) : void 0,
                    parentIconType: null != n ? (0, ey.QG)(n) : void 0,
                };
            },
            [t],
        ),
        x = (0, d.p)(),
        v = x?.noStyleAndInteraction !== !0,
        g = (0, ef.A)({ channelId: t, messageId: i }),
        j = v && null == i;
    if (null == c) return;
    let I = r === x?.guildId || null == r,
        y = (0, l.jsx)(eo.A, {
            iconType: c,
            children: o ?? (0, l.jsx)("em", { children: eb.intl.string(eb.t.J90oLW) }),
        }),
        A = (0, l.jsx)(eo.A, { iconType: h ? "post" : "message" });
    if (f || u.isSubscriptionGated)
        if (I || null == s || null == o)
            if (null != i) {
                let e = h && null != m && null != p;
                n = (0, l.jsxs)(l.Fragment, {
                    children: [e ? (0, l.jsx)(eo.A, { iconType: p, children: m }) : y, (0, l.jsx)(eh.A, {}), e ? y : A],
                });
            } else n = y;
        else
            n = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ed.A, { guild: s, children: (0, ek.EJ)(s.name, 32) }),
                    (0, l.jsx)(eh.A, {}),
                    null == i || h ? y : A,
                ],
            });
    else n = (0, l.jsx)(eo.A, { iconType: "locked", children: eb.intl.string(eb.t["/YzI63"]) });
    return (0, l.jsx)(_.A, {
        role: "link",
        onClick: v
            ? function (e) {
                  (e?.stopPropagation(), (0, ei.o)(r, t, i, a), (0, et.s7)());
              }
            : void 0,
        onContextMenu: v ? g : void 0,
        onMouseDown: j ? ex.q : void 0,
        onAuxClick: j
            ? function (e) {
                  let n = B.A.getChannel(t);
                  null != n && (0, ex.A)(e, n);
              }
            : void 0,
        className: "channelMention",
        children: n,
    });
}
function eS(e) {
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
function eN(e) {
    let { id: n } = e,
        t = (0, d.p)(),
        r = t?.guildId,
        i = (0, C.bG)([ev.A], () => (null != r ? ev.A.getRole(r, n)?.name : null) ?? eb.intl.string(eb.t["YV4F/n"]), [
            r,
            n,
        ]);
    return (0, l.jsx)(em.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eM(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ec.A, { gameId: n, authorId: t?.authorId });
}
function eP(e) {
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
function eE(e) {
    let { route: n, itemId: t } = e,
        r = (0, d.p)(),
        i = r?.guildId,
        a = (0, ea.Q)(n),
        u = (0, C.bG)([ev.A], () => (0, ea.f)(ev.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(_.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eu.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, l.jsx)(eh.A, {}) : null, u],
          });
}
function eL(e) {
    let { id: n, name: t } = e,
        i = (0, d.p)(),
        a = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `\0${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: a }),
            [i?.channelId, a, n, t],
        );
    return (0, l.jsx)(es.gn, { node: u, children: t });
}
var ez = t(147190);
function e$(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        u = (0, C.bG)([B.A], () => (null != i && null == B.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(ew, { channelId: u, guildId: n, messageId: r, conversationId: a });
}
function eF(e) {
    let { url: n, name: i, interactive: a } = e,
        u = r.useCallback(async () => {
            let e = await W.AN(n);
            (H.A.trackLinkClicked(e), (0, G.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, $.L3)(e, async () => {
                    let { default: e } = await t.e(762529).then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(_.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(z.AttachmentIcon, { size: "xs", className: ez.Kk, color: "currentColor" }), i],
    });
}
var eG = t(886609),
    eT = t(678473),
    eH = t(379418),
    eq = t(152959);
t(321073);
var eJ = t(448767),
    e_ = t(886737);
function eW(e) {
    return "link" === e.type;
}
function eB(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eD(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eD(e.value.content) } };
        case "subtext":
            return { ...e, value: { content: eD(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eB) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eB) })) } };
        default:
            return e;
    }
}
function eD(e) {
    return e.map(eR);
}
function eR(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != Q(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, e_.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eD(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eD(e.value.content) } };
        default:
            return e;
    }
}
var eQ = t(254221);
let eZ = [];
function eK(e, n) {
    let { enabled: t, syntax: l } = n,
        i = (0, eq.n9)(t);
    return r.useMemo(() => {
        if (!t || !i || null == e) return null;
        try {
            return { ast: (0, a.qg)(e, l) };
        } catch (e) {
            return { error: e };
        }
    }, [t, i, e, l]);
}
let eU = {
    text: function (e) {
        let { node: n } = e;
        return (0, l.jsx)(h.z, { text: n.value });
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: r } = e,
            i = (0, d.p)()?.formatInline === !0,
            a = t === n.length - 1;
        return i
            ? (0, l.jsxs)(l.Fragment, { children: [r, a ? null : " "] })
            : (0, l.jsxs)("span", { children: [r, a ? null : (0, l.jsx)("br", {})] });
    },
    empty: function () {
        return (0, d.p)()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            i = r.useContext(M);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(P, { value: n, jumboable: i });
            case "custom":
                return (0, l.jsx)(E, { value: n, jumboable: i });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: i } = e,
            a = (0, d.p)(),
            u = a?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = Q(t);
            if (null != e) return (0, l.jsx)(e$, { ...e });
            let n = (0, q.h)(t);
            if (null != n) return (0, l.jsx)(eF, { url: t, name: n.name, interactive: !u });
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
            f = s ? (0, l.jsx)(h.z, { text: c }) : i;
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
                  trusted: () => (0, D.m)(o?.target ?? t, null != r && r.length > 0 ? r : c),
                  messageId: a?.messageId,
                  channelId: a?.channelId,
                  children: (0, l.jsx)("span", { children: f }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: i } = e,
            a = (0, d.p)()?.formatInline === !0 ? y.tZ : void 0;
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
                return (0, l.jsx)(ew, { channelId: String(t) });
            case "user":
                return (0, l.jsx)(eS, { id: String(t) });
            case "role":
                return (0, l.jsx)(eN, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eP, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eP, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eM, { id: String(t) });
            case "command":
                return (0, l.jsx)(eL, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(eE, {
                    route: eC[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, eA.xb)(n);
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
    spoiler: eG.dC,
    timestamp: function (e) {
        let { value: n, style: t } = e,
            r = (0, eH.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(eT.A, { node: r });
    },
};
function eV(e) {
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
    if (((0, eq.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? eZ,
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
                            return 1 !== e.length || "paragraph" !== n.type ? eJ.tq : (0, eJ.dn)(n.value, eW);
                        })(e);
                    if (t && (0, eJ.iz)(r)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eW(e) ? e.value.url : null;
                                return null == t || !(0, eJ.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? i.map(eB) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(M.Provider, {
        value: d,
        children: (0, l.jsx)(eG.L1, { children: (0, l.jsx)(i.$, { nodes: h, renderers: eU }) }, n),
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
                    className: eQ.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), eb.intl.string(eb.t.dpFK4M)],
                }),
            ],
        })
    );
}
