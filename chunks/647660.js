t.d(n, { A: () => eV, N: () => eO });
var r = t(477900),
    l = t(582128),
    i = t(516029),
    a = t(714414),
    u = t(292442),
    s = t(834730),
    o = t(791606),
    c = t(856383),
    d = t(78377),
    h = t(954403),
    m = t(503698),
    f = t.n(m),
    p = t(939249),
    x = t(933832),
    g = t(624479),
    v = t(143145),
    j = t(441136),
    I = t(957565),
    y = t(165648),
    A = t(969490);
function C(e) {
    let { text: n } = e,
        [t, i] = l.useState(!1);
    return (0, r.jsx)(p.D, {
        onClick: function () {
            (0, I.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, r.jsx)(x.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, r.jsx)(g.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var k = t(855986),
    b = t(121681),
    S = t(7584),
    w = t(930101),
    N = t(690521);
t(307731);
let E = l.createContext(!1);
function M(e) {
    let { value: n, jumboable: t } = e,
        l = N.Ay.getURL(n),
        i = S.Ay.convertSurrogateToName(n),
        a = (0, d.p)();
    return (0, r.jsx)(w.H, {
        node: { name: i, src: l, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function P(e) {
    let { value: n, jumboable: t } = e,
        l = (0, d.p)(),
        i = l?.guildId,
        a = (0, k.bG)([b.Ay], () => b.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (u = `:${a.name}:`),
        (0, r.jsx)(w.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: l?.channelId,
            messageId: l?.messageId,
        })
    );
}
function L() {
    return (0, d.p)()?.formatInline === !0 ? y.tZ : void 0;
}
var z = t(588975),
    G = t(442433),
    T = t(9578),
    $ = t(975807),
    F = t(380610),
    R = t(235393),
    _ = t(258072),
    D = t(694403),
    H = t(332173),
    J = t(679164),
    U = t(734057),
    q = t(889558),
    B = t(376943);
function W(e) {
    let n = B.En.exec(e);
    if (null != n) {
        let [, e, t, r, l] = n;
        return { guildId: e, channelId: r, messageId: l, parentChannelId: t, conversationId: void 0 };
    }
    let t = B.BM.exec(e);
    if (null == t) return null;
    let [, r, l, i, a] = t;
    return null == l || /\D/.test(l) || (null != i && /\D/.test(i))
        ? null
        : { guildId: r, channelId: l, messageId: i, parentChannelId: void 0, conversationId: (0, B.te)(a) };
}
var O = t(333421),
    K = t(100392),
    V = t(836156);
let Z = /^dev:\/\//i,
    Q = l.lazy(() => Promise.resolve().then(t.bind(t, 355435))),
    Y = l.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    X = l.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e(503634),
            t.e(761764),
            t.e(60800),
            t.e(218126),
            t.e(467696),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    ee = l.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e(378100), t.e(561065), t.e(886456), t.e(278078)]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function en(e) {
    let { url: n } = e,
        t =
            (0, F.vS)(n) || (0, F.h4)(n)
                ? (0, r.jsx)(Q, { url: n })
                : (0, K.W0)(n)
                  ? (0, r.jsx)(Y, { url: n })
                  : (0, V.i)(n)
                    ? (0, r.jsx)(X, { url: n })
                    : (0, O.my)(n)
                      ? (0, r.jsx)(ee, { url: n })
                      : null;
    return null == t ? null : (0, r.jsx)(l.Suspense, { fallback: null, children: t });
}
var et = t(192308),
    er = t(47167),
    el = t(499211),
    ei = t(987877),
    ea = t(78390),
    eu = t(392605),
    es = t(990474),
    eo = t(232042),
    ec = t(654255),
    ed = t(906754),
    eh = t(37632),
    em = t(665303),
    ef = t(593284),
    ep = t(288539),
    ex = t(317525),
    eg = t(71393),
    ev = t(994500),
    ej = t(287809),
    eI = t(147036),
    ey = t(403362);
let eA = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
t(73510);
var eC = t(792996);
function ek(e) {
    let { channelId: n, guildId: t, messageId: l, conversationId: i } = e,
        a = (0, el.A)(n),
        {
            name: u,
            iconType: s,
            isForumPost: o,
            hasAccess: c,
        } = (0, k.cf)(
            [U.A, ej.default, ev.A],
            () => {
                let e = U.A.getChannel(n);
                return {
                    name: null != e ? (0, er.m1)(e, ej.default, ev.A) : void 0,
                    iconType: (0, eI.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, B.nc)(e),
                };
            },
            [n],
        ),
        h = (0, d.p)(),
        m = h?.noStyleAndInteraction !== !0,
        f = (0, em.A)({ channelId: n, messageId: l });
    if (null == s) return;
    let p = t === h?.guildId || null == t,
        x =
            c || a.isSubscriptionGated
                ? p || null == u
                    ? (0, r.jsx)(eo.A, {
                          iconType: s,
                          children: u ?? (0, r.jsx)("em", { children: eC.intl.string(eC.t.J90oLW) }),
                      })
                    : (0, r.jsx)(eb, { guildId: t, children: u })
                : (0, r.jsx)(eo.A, { iconType: "locked", children: eC.intl.string(eC.t["/YzI63"]) }),
        g = null;
    return (
        null != l &&
            (g = (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(eh.A, {}), (0, r.jsx)(eo.A, { iconType: o ? "post" : "message" })],
            })),
        (0, r.jsxs)(H.A, {
            role: "link",
            onClick: m
                ? function (e) {
                      (e?.stopPropagation(), (0, ei.o)(t, n, l, i), (0, et.s7)());
                  }
                : void 0,
            onContextMenu: m ? f : void 0,
            className: "channelMention",
            children: [x, g],
        })
    );
}
function eb(e) {
    let { guildId: n, children: t } = e,
        l = (0, k.bG)([eg.A], () => eg.A.getGuild(n), [n]);
    return (0, r.jsxs)(ed.A, { guild: l, children: [l?.name, null != l ? (0, r.jsx)(eh.A, {}) : null, t] });
}
function eS(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, r.jsx)(ep.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
        inlinePreview: t?.noStyleAndInteraction,
    });
}
function ew(e) {
    let { id: n } = e,
        t = (0, d.p)(),
        l = t?.guildId,
        i = (0, k.bG)([ex.A], () => (null != l ? ex.A.getRole(l, n)?.name : null) ?? eC.intl.string(eC.t["YV4F/n"]), [
            l,
            n,
        ]);
    return (0, r.jsx)(ef.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eN(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, r.jsx)(ec.A, { gameId: n, authorId: t?.authorId });
}
function eE(e) {
    let { roleName: n } = e,
        t = (0, d.p)();
    return (0, r.jsx)(ef.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function eM(e) {
    let { route: n, itemId: t } = e,
        l = (0, d.p)(),
        i = l?.guildId,
        a = (0, ea.Q)(n),
        u = (0, k.bG)([ex.A], () => (0, ea.f)(ex.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, r.jsxs)(H.A, {
              role: "link",
              onClick:
                  l?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eu.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, r.jsx)(eh.A, {}) : null, u],
          });
}
function eP(e) {
    let { id: n, name: t } = e,
        i = (0, d.p)(),
        a = l.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `\0${e}`).join("")}`;
        }, [n, t]),
        u = l.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: a }),
            [i?.channelId, a, n, t],
        );
    return (0, r.jsx)(es.gn, { node: u, children: t });
}
var eL = t(147190);
function ez(e) {
    let { guildId: n, channelId: t, messageId: l, parentChannelId: i, conversationId: a } = e,
        u = (0, k.bG)([U.A], () => (null != i && null == U.A.getChannel(t) ? i : t), [t, i]);
    return (0, r.jsx)(ek, { channelId: u, guildId: n, messageId: l, conversationId: a });
}
function eG(e) {
    let { url: n, name: i, interactive: a } = e,
        u = l.useCallback(async () => {
            let e = await J.AN(n);
            (R.A.trackLinkClicked(e), (0, $.A)(e));
        }, [n]),
        s = l.useCallback(
            (e) => {
                (0, G.L3)(e, async () => {
                    let { default: e } = await t.e(762529).then(t.bind(t, 740024));
                    return (t) => (0, r.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, r.jsxs)(H.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, r.jsx)(z.AttachmentIcon, { size: "xs", className: eL.Kk, color: "currentColor" }), i],
    });
}
var eT = t(886609),
    e$ = t(678473),
    eF = t(379418),
    eR = t(152959);
t(321073);
var e_ = t(448767),
    eD = t(886737);
function eH(e) {
    return "link" === e.type;
}
function eJ(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eU(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eU(e.value.content) } };
        case "small":
            return { ...e, value: { content: eU(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eJ) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eJ) })) } };
        default:
            return e;
    }
}
function eU(e) {
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
            return { ...e, value: eU(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eU(e.value.content) } };
        default:
            return e;
    }
}
var eB = t(254221);
let eW = [];
function eO(e, n) {
    let { enabled: t, syntax: r } = n,
        i = (0, eR.n9)(t);
    return l.useMemo(() => {
        if (!t || !i || null == e) return null;
        try {
            return { ast: (0, a.qg)(e, r) };
        } catch (e) {
            return { error: e };
        }
    }, [t, i, e, r]);
}
let eK = {
    text: function (e) {
        let { node: n } = e;
        return (0, r.jsx)(h.z, { text: n.value });
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: l } = e,
            i = (0, d.p)()?.formatInline === !0,
            a = t === n.length - 1;
        return i
            ? (0, r.jsxs)(r.Fragment, { children: [l, a ? null : " "] })
            : (0, r.jsxs)("span", { children: [l, a ? null : (0, r.jsx)("br", {})] });
    },
    empty: function () {
        return (0, d.p)()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            i = l.useContext(E);
        switch (t) {
            case "unicode":
                return (0, r.jsx)(M, { value: n, jumboable: i });
            case "custom":
                return (0, r.jsx)(P, { value: n, jumboable: i });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: l, children: i } = e,
            a = (0, d.p)(),
            u = a?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = W(t);
            if (null != e) return (0, r.jsx)(ez, { ...e });
            let n = (0, _.h)(t);
            if (null != n) return (0, r.jsx)(eG, { url: t, name: n.name, interactive: !u });
        }
        if ((0, F.vS)(t)) return (0, r.jsx)(en, { url: t });
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
            m = s ? (0, r.jsx)(h.z, { text: c }) : i;
        if (Z.test(t))
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("span", { children: m }), (0, r.jsx)(en, { url: t })],
            });
        let f = l;
        return (s ||
            (f =
                null != l && l.length > 0
                    ? `${l}

(${t})`
                    : t),
        u)
            ? (0, r.jsx)("span", { title: f ?? t, children: m })
            : (0, r.jsx)(T.A, {
                  title: f,
                  href: t,
                  trusted: () => (0, q.m)(o?.target ?? t, null != l && l.length > 0 ? l : c),
                  messageId: a?.messageId,
                  channelId: a?.channelId,
                  children: (0, r.jsx)("span", { children: m }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: l, items: i } = e,
            a = (0, d.p)()?.formatInline === !0 ? y.tZ : void 0;
        switch (n) {
            case "ordered":
                let u = (l + i.length - 1).toString().length;
                return (0, r.jsx)("ol", {
                    start: l,
                    className: a,
                    style: { "--totalCharacters": u, "--olCounterStart": l - 1 },
                    children: t,
                });
            case "unordered":
                return (0, r.jsx)("ul", { className: a, children: t });
        }
    },
    listItem: function (e) {
        let { children: n } = e;
        return (0, r.jsx)("li", { children: n });
    },
    code: function (e) {
        let { node: n } = e;
        return (0, r.jsx)("code", { className: "inline", children: (0, r.jsx)(h.z, { text: n.value }) });
    },
    code_block: function (e) {
        let { language: n, content: t } = e;
        if ((0, d.p)()?.formatInline === !0) {
            let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
            return (
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(v.Q0, "")),
                (0, r.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, r.jsx)("pre", {
            children: (0, r.jsxs)("div", {
                className: y.Hy,
                children: [
                    I.p5 ? (0, r.jsx)("div", { className: y.lB, children: (0, r.jsx)(C, { text: t }) }) : null,
                    (0, r.jsx)(j.E, { code: t, lang: n, className: f()(A.kw, "hljs") }),
                ],
            }),
        });
    },
    quote: function (e) {
        let { children: n } = e;
        return (0, r.jsxs)("div", {
            className: y.h,
            children: [(0, r.jsx)("div", { className: y.r }), (0, r.jsx)("blockquote", { children: n })],
        });
    },
    bold: function (e) {
        let { children: n } = e;
        return (0, r.jsx)("strong", { children: n });
    },
    italic: function (e) {
        let { children: n } = e;
        return (0, r.jsx)("em", { children: n });
    },
    underline: function (e) {
        let { children: n } = e;
        return (0, r.jsx)("u", { children: n });
    },
    strikethrough: function (e) {
        let { children: n } = e;
        return (0, r.jsx)("s", { children: n });
    },
    mention: function (e) {
        let { type: n, value: t } = e;
        switch (n) {
            case "channel":
                return (0, r.jsx)(ek, { channelId: String(t) });
            case "user":
                return (0, r.jsx)(eS, { id: String(t) });
            case "role":
                return (0, r.jsx)(ew, { id: String(t) });
            case "everyone":
                return (0, r.jsx)(eE, { roleName: "@everyone" });
            case "here":
                return (0, r.jsx)(eE, { roleName: "@here" });
            case "game":
                return (0, r.jsx)(eN, { id: String(t) });
            case "command":
                return (0, r.jsx)(eP, { id: String(t.id), name: t.name });
            case "static":
                return (0, r.jsx)(eM, {
                    route: eA[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, ey.xb)(n);
    },
    heading: function (e) {
        let { level: n, children: t } = e,
            l = `h${n}`;
        return (0, r.jsx)(l, { className: L(), children: t });
    },
    small: function (e) {
        let { children: n } = e;
        return (0, r.jsx)("small", { className: L(), children: n });
    },
    spoiler: eT.dC,
    timestamp: function (e) {
        let { value: n, style: t } = e,
            l = (0, eF.EH)(String(n), t);
        return null == l ? null : (0, r.jsx)(e$.A, { node: l });
    },
};
function eV(e) {
    let {
        content: n,
        parsed: t,
        allowJumboEmoji: l = !0,
        hideSingleLinkContent: i = !1,
        redactRestrictedContent: a = !1,
    } = e;
    return (0, r.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, r.jsx)(eQ, { content: n, error: t });
        },
        children: (0, r.jsx)(eZ, {
            content: n,
            parsed: t,
            allowJumboEmoji: l,
            hideSingleLinkContent: i,
            redactRestrictedContent: a,
        }),
    });
}
function eZ(e) {
    let { content: n, parsed: t, allowJumboEmoji: u, hideSingleLinkContent: s, redactRestrictedContent: o } = e;
    if (((0, eR.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? eW,
        d = l.useMemo(
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
        h = l.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: r = !1 } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? e_.tq : (0, e_.dn)(n.value, eH);
                        })(e);
                    if (t && (0, e_.iz)(l)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            r = !1;
                        for (let l of e) {
                            if ("paragraph" !== l.type) {
                                t.push(l);
                                continue;
                            }
                            let e = l.value.filter((e) => {
                                let t = eH(e) ? e.value.url : null;
                                return null == t || !(0, e_.c_)(t, n);
                            });
                            if (e.length === l.value.length) {
                                t.push(l);
                                continue;
                            }
                            ((r = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return r ? t : e;
                    })(e, { onlyLinkContent: l.onlyLinks, stripGameServerShareLinks: !0 });
                    return r ? i.map(eJ) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, r.jsx)(E.Provider, {
        value: d,
        children: (0, r.jsx)(eT.L1, { children: (0, r.jsx)(i.$, { nodes: h, renderers: eK }) }, n),
    });
}
function eQ(e) {
    let { content: n, error: t } = e;
    return (
        l.useEffect(() => {
            c.A.captureException(t);
        }, [t]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("span", { children: n }),
                (0, r.jsxs)(s.E, {
                    variant: "body-md/normal",
                    color: "text-feedback-critical",
                    className: eB.g,
                    children: [(0, r.jsx)(o.A, { width: 16, height: 16 }), eC.intl.string(eC.t.dpFK4M)],
                }),
            ],
        })
    );
}
