t.d(n, { A: () => eX, N: () => eU });
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
    g = t(304072),
    j = t(143145),
    I = t(441136),
    y = t(957565),
    A = t(165648),
    C = t(969490);
function k(e) {
    let { text: n } = e,
        [t, r] = (0, g.A)(!1, 2e3);
    return (0, l.jsx)(p.D, {
        onClick: function () {
            (0, y.C)(
                n,
                () => r(!0),
                () => r(!1),
            );
        },
        children: t
            ? (0, l.jsx)(x.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(v.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var b = t(855986),
    w = t(121681),
    S = t(7584),
    N = t(930101),
    M = t(690521);
t(307731);
let P = r.createContext(!1);
function E(e) {
    let { value: n, jumboable: t } = e,
        r = M.Ay.getURL(n),
        i = S.Ay.convertSurrogateToName(n),
        a = (0, d.p)();
    return (0, l.jsx)(N.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function L(e) {
    let { value: n, jumboable: t } = e,
        r = (0, d.p)(),
        i = r?.guildId,
        a = (0, b.bG)([w.Ay], () => w.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (u = `:${a.name}:`),
        (0, l.jsx)(N.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function z() {
    return (0, d.p)()?.formatInline === !0 ? A.tZ : void 0;
}
var $ = t(588975),
    F = t(442433),
    G = t(9578),
    T = t(975807),
    H = t(380610),
    q = t(235393),
    J = t(258072),
    _ = t(694403),
    W = t(332173),
    B = t(679164),
    D = t(734057),
    R = t(889558),
    Q = t(376943);
function Z(e) {
    let n = Q.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = Q.BM.exec(e);
    if (null == t) return null;
    let [, l, r, i, a] = t;
    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
        ? null
        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, Q.te)(a) };
}
var K = t(333421),
    U = t(100392),
    V = t(836156);
let X = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 355435))),
    O = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    ee = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e(503634),
            t.e(761764),
            t.e(60800),
            t.e(218126),
            t.e(467696),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    en = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e(378100), t.e(561065), t.e(886456), t.e(278078)]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function et(e) {
    let { url: n } = e,
        t =
            (0, H.vS)(n) || (0, H.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, U.W0)(n)
                  ? (0, l.jsx)(O, { url: n })
                  : (0, V.i)(n)
                    ? (0, l.jsx)(ee, { url: n })
                    : (0, K.my)(n)
                      ? (0, l.jsx)(en, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var el = t(192308),
    er = t(47167),
    ei = t(499211),
    ea = t(987877),
    eu = t(78390),
    es = t(392605),
    eo = t(990474),
    ec = t(232042),
    ed = t(654255),
    eh = t(906754),
    ef = t(37632),
    em = t(665303),
    ep = t(593284),
    ex = t(288539),
    ev = t(897898),
    eg = t(317525),
    ej = t(71393),
    eI = t(994500),
    ey = t(287809),
    eA = t(147036),
    eC = t(403362),
    ek = t(240248);
let eb = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
t(73510);
var ew = t(792996);
function eS(e) {
    let n,
        { channelId: t, guildId: r, messageId: i, conversationId: a } = e,
        u = (0, ei.A)(t),
        s = (0, b.bG)([ej.A], () => ej.A.getGuild(r), [r]),
        {
            name: o,
            iconType: c,
            isForumPost: h,
            hasAccess: f,
            parentName: m,
            parentIconType: p,
        } = (0, b.cf)(
            [D.A, ey.default, eI.A],
            () => {
                let e = D.A.getChannel(t),
                    n = e?.isForumPost() ? D.A.getChannel(e.parent_id) : void 0;
                return {
                    name: null != e ? (0, ek.EJ)((0, er.m1)(e, ey.default, eI.A), 32) : void 0,
                    iconType: (0, eA.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, Q.nc)(e),
                    parentName: null != n ? (0, ek.EJ)((0, er.m1)(n, ey.default, eI.A), 32) : void 0,
                    parentIconType: null != n ? (0, eA.QG)(n) : void 0,
                };
            },
            [t],
        ),
        x = (0, d.p)(),
        v = x?.noStyleAndInteraction !== !0,
        g = (0, em.A)({ channelId: t, messageId: i }),
        j = v && null == i;
    function I(e) {
        let n = D.A.getChannel(t);
        null != n && (0, ev.A)(e, n);
    }
    if (null == c) return;
    let y = r === x?.guildId || null == r,
        A = (0, l.jsx)(ec.A, {
            iconType: c,
            children: o ?? (0, l.jsx)("em", { children: ew.intl.string(ew.t.J90oLW) }),
        }),
        C = (0, l.jsx)(ec.A, { iconType: h ? "post" : "message" });
    if (f || u.isSubscriptionGated)
        if (y || null == s || null == o)
            if (null != i) {
                let e = h && null != m && null != p;
                n = (0, l.jsxs)(l.Fragment, {
                    children: [e ? (0, l.jsx)(ec.A, { iconType: p, children: m }) : A, (0, l.jsx)(ef.A, {}), e ? A : C],
                });
            } else n = A;
        else
            n = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eh.A, { guild: s, children: (0, ek.EJ)(s.name, 32) }),
                    (0, l.jsx)(ef.A, {}),
                    null == i || h ? A : C,
                ],
            });
    else n = (0, l.jsx)(ec.A, { iconType: "locked", children: ew.intl.string(ew.t["/YzI63"]) });
    return (0, l.jsx)(W.A, {
        role: "link",
        onClick: v
            ? function (e) {
                  (e?.stopPropagation(), (0, ea.o)(r, t, i, a), (0, el.s7)());
              }
            : void 0,
        onContextMenu: v ? g : void 0,
        onMouseDown: j ? ev.q : void 0,
        onClickCapture: j ? I : void 0,
        onAuxClick: j ? I : void 0,
        className: "channelMention",
        children: n,
    });
}
function eN(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ex.A, {
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
        t = (0, d.p)(),
        r = t?.guildId,
        i = (0, b.bG)([eg.A], () => (null != r ? eg.A.getRole(r, n)?.name : null) ?? ew.intl.string(ew.t["YV4F/n"]), [
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
function eP(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ed.A, { gameId: n, authorId: t?.authorId });
}
function eE(e) {
    let { roleName: n } = e,
        t = (0, d.p)();
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
        r = (0, d.p)(),
        i = r?.guildId,
        a = (0, eu.Q)(n),
        u = (0, b.bG)([eg.A], () => (0, eu.f)(eg.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(W.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, es.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, l.jsx)(ef.A, {}) : null, u],
          });
}
function ez(e) {
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
    return (0, l.jsx)(eo.gn, { node: u, children: t });
}
var e$ = t(147190);
function eF(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        u = (0, b.bG)([D.A], () => (null != i && null == D.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eS, { channelId: u, guildId: n, messageId: r, conversationId: a });
}
function eG(e) {
    let { url: n, name: i, interactive: a } = e,
        u = r.useCallback(async () => {
            let e = await B.AN(n);
            (q.A.trackLinkClicked(e), (0, T.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, F.L3)(e, async () => {
                    let { default: e } = await t.e(762529).then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(W.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)($.AttachmentIcon, { size: "xs", className: e$.Kk, color: "currentColor" }), i],
    });
}
var eT = t(886609),
    eH = t(678473),
    eq = t(379418),
    eJ = t(152959);
t(321073);
var e_ = t(448767),
    eW = t(886737);
function eB(e) {
    return "link" === e.type;
}
function eD(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eR(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eR(e.value.content) } };
        case "subtext":
            return { ...e, value: { content: eR(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eD) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eD) })) } };
        default:
            return e;
    }
}
function eR(e) {
    return e.map(eQ);
}
function eQ(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != Z(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eW.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eR(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eR(e.value.content) } };
        default:
            return e;
    }
}
var eZ = t(254221);
let eK = [];
function eU(e, n) {
    let { enabled: t, syntax: l } = n,
        i = (0, eJ.n9)(t);
    return r.useMemo(() => {
        if (!t || !i || null == e) return null;
        try {
            return { ast: (0, a.qg)(e, l) };
        } catch (e) {
            return { error: e };
        }
    }, [t, i, e, l]);
}
let eV = {
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
            i = r.useContext(P);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(E, { value: n, jumboable: i });
            case "custom":
                return (0, l.jsx)(L, { value: n, jumboable: i });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: i } = e,
            a = (0, d.p)(),
            u = a?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = Z(t);
            if (null != e) return (0, l.jsx)(eF, { ...e });
            let n = (0, J.h)(t);
            if (null != n) return (0, l.jsx)(eG, { url: t, name: n.name, interactive: !u });
        }
        if ((0, H.vS)(t)) return (0, l.jsx)(et, { url: t });
        let o = (0, _.W1)(t),
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
        if (X.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: f }), (0, l.jsx)(et, { url: t })],
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
            : (0, l.jsx)(G.A, {
                  title: m,
                  href: t,
                  trusted: () => (0, R.m)(o?.target ?? t, null != r && r.length > 0 ? r : c),
                  messageId: a?.messageId,
                  channelId: a?.channelId,
                  children: (0, l.jsx)("span", { children: f }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: i } = e,
            a = (0, d.p)()?.formatInline === !0 ? A.tZ : void 0;
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
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(j.Q0, "")),
                (0, l.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, l.jsx)("pre", {
            children: (0, l.jsxs)("div", {
                className: A.Hy,
                children: [
                    y.p5 ? (0, l.jsx)("div", { className: A.lB, children: (0, l.jsx)(k, { text: t }) }) : null,
                    (0, l.jsx)(I.E, { code: t, lang: n, className: m()(C.kw, "hljs") }),
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
                return (0, l.jsx)(eN, { id: String(t) });
            case "role":
                return (0, l.jsx)(eM, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eE, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eE, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eP, { id: String(t) });
            case "command":
                return (0, l.jsx)(ez, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(eL, {
                    route: eb[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, eC.xb)(n);
    },
    heading: function (e) {
        let { level: n, children: t } = e,
            r = `h${n}`;
        return (0, l.jsx)(r, { className: z(), children: t });
    },
    subtext: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("small", { className: z(), children: n });
    },
    spoiler: eT.dC,
    timestamp: function (e) {
        let { value: n, style: t } = e,
            r = (0, eq.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(eH.A, { node: r });
    },
};
function eX(e) {
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
            return (0, l.jsx)(eO, { content: n, error: t });
        },
        children: (0, l.jsx)(eY, {
            content: n,
            parsed: t,
            allowJumboEmoji: r,
            hideSingleLinkContent: i,
            redactRestrictedContent: a,
        }),
    });
}
function eY(e) {
    let { content: n, parsed: t, allowJumboEmoji: u, hideSingleLinkContent: s, redactRestrictedContent: o } = e;
    if (((0, eJ.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? eK,
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
                            return 1 !== e.length || "paragraph" !== n.type ? e_.tq : (0, e_.dn)(n.value, eB);
                        })(e);
                    if (t && (0, e_.iz)(r)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eB(e) ? e.value.url : null;
                                return null == t || !(0, e_.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? i.map(eD) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(P.Provider, {
        value: d,
        children: (0, l.jsx)(eT.L1, { children: (0, l.jsx)(i.$, { nodes: h, renderers: eV }) }, n),
    });
}
function eO(e) {
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
                    className: eZ.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), ew.intl.string(ew.t.dpFK4M)],
                }),
            ],
        })
    );
}
