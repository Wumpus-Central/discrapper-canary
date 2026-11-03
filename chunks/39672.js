t.d(n, { A: () => eV, N: () => eW });
var l = t(477900),
    r = t(582128),
    i = t(733004),
    a = t(465632),
    u = t(292442),
    s = t(834730),
    o = t(791606),
    c = t(38405),
    d = t(78377),
    h = t(954403),
    m = t(503698),
    f = t.n(m),
    p = t(939249),
    g = t(933832),
    x = t(624479),
    v = t(143145),
    j = t(441136),
    I = t(957565),
    y = t(165648),
    A = t(969490);
function C(e) {
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
            ? (0, l.jsx)(g.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(x.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var k = t(17928),
    b = t(236285),
    S = t(7584),
    w = t(930101),
    E = t(690521),
    N = t(307731);
let M = r.createContext(!1);
function P(e) {
    let { value: n, jumboable: t } = e,
        r = E.Ay.getURL(n),
        i = S.Ay.convertSurrogateToName(n),
        a = (0, d.p)();
    return (0, l.jsx)(w.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function L(e) {
    let { value: n, jumboable: t } = e,
        r = (0, d.p)(),
        i = r?.guildId,
        a = (0, k.bG)([b.Ay], () => b.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (u = `:${a.name}:`),
        (0, l.jsx)(w.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function T() {
    return (0, d.p)()?.formatInline === !0 ? y.tZ : void 0;
}
var z = t(588975),
    G = t(442433),
    _ = t(9578),
    $ = t(975807),
    R = t(380610),
    F = t(235393),
    U = t(258072),
    B = t(694403),
    D = t(332173),
    H = t(679164),
    J = t(734057),
    O = t(123917),
    q = t(376943);
function K(e) {
    let n = q.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = q.BM.exec(e);
    if (null == t) return null;
    let [, l, r, i, a] = t;
    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
        ? null
        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, q.te)(a) };
}
var W = t(333421),
    Z = t(100392),
    V = t(836156);
let Q = /^dev:\/\//i,
    X = r.lazy(() => Promise.resolve().then(t.bind(t, 325213))),
    Y = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    ee = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    en = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function et(e) {
    let { url: n } = e,
        t =
            (0, R.vS)(n) || (0, R.h4)(n)
                ? (0, l.jsx)(X, { url: n })
                : (0, Z.W0)(n)
                  ? (0, l.jsx)(Y, { url: n })
                  : (0, V.i)(n)
                    ? (0, l.jsx)(ee, { url: n })
                    : (0, W.my)(n)
                      ? (0, l.jsx)(en, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var el = t(192308),
    er = t(47167),
    ei = t(499211),
    ea = t(706083),
    eu = t(78390),
    es = t(392605),
    eo = t(990474),
    ec = t(232042),
    ed = t(266645),
    eh = t(906754),
    em = t(37632),
    ef = t(593284),
    ep = t(288539),
    eg = t(317525),
    ex = t(71393),
    ev = t(994500),
    ej = t(287809),
    eI = t(147036),
    ey = t(403362);
let eA = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eC = t(73510),
    ek = t(105292);
function eb(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: a } = e,
        u = (0, ei.A)(n),
        {
            name: s,
            iconType: o,
            isForumPost: c,
            hasAccess: h,
        } = (0, k.cf)(
            [J.A, ej.default, ev.A],
            () => {
                let e = J.A.getChannel(n);
                return {
                    name: null != e ? (0, er.m1)(e, ej.default, ev.A) : void 0,
                    iconType: (0, eI.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, q.nc)(e),
                };
            },
            [n],
        ),
        m = (0, d.p)(),
        f = m?.noStyleAndInteraction !== !0;
    if (null == o) return;
    let p = r === m?.guildId || null == r,
        g =
            h || u.isSubscriptionGated
                ? p || null == s
                    ? (0, l.jsx)(ec.A, {
                          iconType: o,
                          children: s ?? (0, l.jsx)("em", { children: ek.intl.string(ek.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eS, { guildId: r, children: s })
                : (0, l.jsx)(ec.A, { iconType: "locked", children: ek.intl.string(ek.t["/YzI63"]) }),
        x = null;
    return (
        null != i &&
            (x = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(em.A, {}), (0, l.jsx)(ec.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(D.A, {
            role: "link",
            onClick: f
                ? function (e) {
                      (e?.stopPropagation(), (0, ea.o)(r, n, i, a), (0, el.closeAllModals)());
                  }
                : void 0,
            onContextMenu: f
                ? function (e) {
                      let r = J.A.getChannel(n);
                      (0, G.L3)(e, async () => {
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
function eS(e) {
    let { guildId: n, children: t } = e,
        r = (0, k.bG)([ex.A], () => ex.A.getGuild(n), [n]);
    return (0, l.jsxs)(eh.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(em.A, {}) : null, t] });
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
function eE(e) {
    let { id: n } = e,
        t = (0, d.p)(),
        r = t?.guildId,
        i = (0, k.bG)([eg.A], () => (null != r ? eg.A.getRole(r, n)?.name : null) ?? ek.intl.string(ek.t.sKdZ6U), [
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
function eN(e) {
    let { id: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ed.A, { gameId: n, authorId: t?.authorId });
}
function eM(e) {
    let { roleName: n } = e,
        t = (0, d.p)();
    return (0, l.jsx)(ef.A, {
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
        i = r?.guildId,
        a = (0, eu.Q)(n),
        u = (0, k.bG)([eg.A], () => (0, eu.f)(eg.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(D.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, es.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, l.jsx)(em.A, {}) : null, u],
          });
}
function eL(e) {
    let { id: n, name: t } = e,
        i = (0, d.p)(),
        a = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eC.v4}${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: a }),
            [i?.channelId, a, n, t],
        );
    return (0, l.jsx)(eo.gn, { node: u, children: t });
}
var eT = t(147190);
function ez(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        u = (0, k.bG)([J.A], () => (null != i && null == J.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eb, { channelId: u, guildId: n, messageId: r, conversationId: a });
}
function eG(e) {
    let { url: n, name: i, interactive: a } = e,
        u = r.useCallback(async () => {
            let e = await H.AN(n);
            (F.A.trackLinkClicked(e), (0, $.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, G.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(D.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(z.P, { size: "xs", className: eT.Kk, color: "currentColor" }), i],
    });
}
var e_ = t(886609),
    e$ = t(785562),
    eR = t(379418),
    eF = t(152959);
t(321073);
var eU = t(448767),
    eB = t(886737);
function eD(e) {
    return "link" === e.type;
}
function eH(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eJ(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eJ(e.value.content) } };
        case "small":
            return { ...e, value: { content: eJ(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eH) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eH) })) } };
        default:
            return e;
    }
}
function eJ(e) {
    return e.map(eO);
}
function eO(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != K(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eB.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eJ(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eJ(e.value.content) } };
        default:
            return e;
    }
}
var eq = t(254221);
let eK = [];
function eW(e, n) {
    let { enabled: t, syntax: l } = n,
        i = (0, eF.n9)(t);
    return r.useMemo(() => {
        if (!t || !i || null == e) return null;
        try {
            return { ast: (0, a.qg)(e, l) };
        } catch (e) {
            return { error: e };
        }
    }, [t, i, e, l]);
}
let eZ = {
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
                return (0, l.jsx)(L, { value: n, jumboable: i });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: i } = e,
            a = (0, d.p)(),
            u = a?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = K(t);
            if (null != e) return (0, l.jsx)(ez, { ...e });
            let n = (0, U.h)(t);
            if (null != n) return (0, l.jsx)(eG, { url: t, name: n.name, interactive: !u });
        }
        if ((0, R.vS)(t)) return (0, l.jsx)(et, { url: t });
        let o = (0, B.W1)(t),
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
            m = s ? (0, l.jsx)(h.z, { text: c }) : i;
        if (Q.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: m }), (0, l.jsx)(et, { url: t })],
            });
        let f = r;
        return (s ||
            (f =
                null != r && r.length > 0
                    ? `${r}

(${t})`
                    : t),
        u)
            ? (0, l.jsx)("span", { title: f ?? t, children: m })
            : (0, l.jsx)(_.A, {
                  title: f,
                  href: t,
                  trusted: () => (0, O.m)(o?.target ?? t, null != r && r.length > 0 ? r : c),
                  messageId: a?.messageId,
                  channelId: a?.channelId,
                  children: (0, l.jsx)("span", { children: m }),
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
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(v.Q0, "")),
                (0, l.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, l.jsx)("pre", {
            children: (0, l.jsxs)("div", {
                className: y.Hy,
                children: [
                    I.p5 ? (0, l.jsx)("div", { className: y.lB, children: (0, l.jsx)(C, { text: t }) }) : null,
                    (0, l.jsx)(j.E, { code: t, lang: n, className: f()(A.kw, "hljs") }),
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
                return (0, l.jsx)(eE, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eM, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eM, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eN, { id: String(t) });
            case "command":
                return (0, l.jsx)(eL, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(eP, {
                    route: eA[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, ey.xb)(n);
    },
    heading: function (e) {
        let { level: n, children: t } = e,
            r = `h${n}`;
        return (0, l.jsx)(r, { className: T(), children: t });
    },
    small: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("small", { className: T(), children: n });
    },
    spoiler: e_.dC,
    timestamp: function (e) {
        let { value: n, style: t } = e,
            r = (0, eR.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(e$.A, { node: r });
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
            return (0, l.jsx)(eX, { content: n, error: t });
        },
        children: (0, l.jsx)(eQ, {
            content: n,
            parsed: t,
            allowJumboEmoji: r,
            hideSingleLinkContent: i,
            redactRestrictedContent: a,
        }),
    });
}
function eQ(e) {
    let { content: n, parsed: t, allowJumboEmoji: u, hideSingleLinkContent: s, redactRestrictedContent: o } = e;
    if (((0, eF.bf)(null == t), null != t && "error" in t)) throw t.error;
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
                    return n <= N.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [u, c],
        ),
        h = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: l = !1 } = n,
                        r = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eU.tq : (0, eU.dn)(n.value, eD);
                        })(e);
                    if (t && (0, eU.iz)(r)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eD(e) ? e.value.url : null;
                                return null == t || !(0, eU.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? i.map(eH) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(M.Provider, {
        value: d,
        children: (0, l.jsx)(e_.L1, { children: (0, l.jsx)(i.$, { nodes: h, renderers: eZ }) }, n),
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
                    className: eq.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), ek.intl.string(ek.t.dpFK4M)],
                }),
            ],
        })
    );
}
