t.d(n, { A: () => e2 });
var l = t(477900),
    r = t(582128),
    i = t(146849),
    s = t(733004),
    a = t(28640),
    o = t(292442),
    u = t(834730);
let c = r.createContext(null);
function d() {
    return r.useContext(c);
}
var h = t(791606),
    m = t(38405),
    x = t(997141),
    f = t(503698),
    j = t.n(f),
    g = t(939249),
    v = t(933832),
    I = t(624479),
    p = t(143145),
    A = t(441136),
    y = t(957565),
    b = t(165648),
    k = t(969490);
function C(e) {
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
            ? (0, l.jsx)(v.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(I.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var S = t(17928),
    w = t(236285),
    N = t(7584),
    M = t(930101),
    E = t(690521),
    P = t(307731);
let L = r.createContext(!1);
function _(e) {
    let { value: n, jumboable: t } = e,
        r = E.Ay.getURL(n),
        i = N.Ay.convertSurrogateToName(n),
        s = d();
    return (0, l.jsx)(M.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: s?.channelId,
        messageId: s?.messageId,
    });
}
function G(e) {
    let { value: n, jumboable: t } = e,
        r = d(),
        i = r?.guildId,
        s = (0, S.bG)([w.Ay], () => w.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        a = s?.name ?? n.name;
    return (
        null != s && s.require_colons && (a = `:${s.name}:`),
        (0, l.jsx)(M.X, {
            node: { name: a, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function T() {
    return d()?.formatInline === !0 ? b.tZ : void 0;
}
var $ = t(588975),
    z = t(442433),
    H = t(9578),
    J = t(975807),
    U = t(380610),
    B = t(235393),
    F = t(258072),
    R = t(332173),
    D = t(679164),
    O = t(734057),
    q = t(123917),
    K = t(376943),
    Q = t(333421),
    W = t(100392),
    X = t(836156);
let Z = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    V = r.lazy(async () => {
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
            (0, U.vS)(n) || (0, U.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, W.W0)(n)
                  ? (0, l.jsx)(V, { url: n })
                  : (0, X.i)(n)
                    ? (0, l.jsx)(ee, { url: n })
                    : (0, Q.my)(n)
                      ? (0, l.jsx)(en, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var el = t(192308),
    er = t(47167),
    ei = t(499211),
    es = t(706083),
    ea = t(78390),
    eo = t(392605),
    eu = t(990474),
    ec = t(232042),
    ed = t(266645),
    eh = t(906754),
    em = t(37632),
    ex = t(593284),
    ef = t(288539),
    ej = t(317525),
    eg = t(71393),
    ev = t(994500),
    eI = t(287809),
    ep = t(147036),
    eA = t(403362);
let ey = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eb = t(73510),
    ek = t(105292);
function eC(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: s } = e,
        a = (0, ei.A)(n),
        {
            name: o,
            iconType: u,
            isForumPost: c,
            hasAccess: h,
        } = (0, S.cf)(
            [O.A, eI.default, ev.A],
            () => {
                let e = O.A.getChannel(n);
                return {
                    name: null != e ? (0, er.m1)(e, eI.default, ev.A) : void 0,
                    iconType: (0, ep.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, K.nc)(e),
                };
            },
            [n],
        ),
        m = d(),
        x = m?.noStyleAndInteraction !== !0;
    if (null == u) return;
    let f = r === m?.guildId || null == r,
        j =
            h || a.isSubscriptionGated
                ? f || null == o
                    ? (0, l.jsx)(ec.A, {
                          iconType: u,
                          children: o ?? (0, l.jsx)("em", { children: ek.intl.string(ek.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eS, { guildId: r, children: o })
                : (0, l.jsx)(ec.A, { iconType: "locked", children: ek.intl.string(ek.t["/YzI63"]) }),
        g = null;
    return (
        null != i &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(em.A, {}), (0, l.jsx)(ec.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(R.A, {
            role: "link",
            onClick: x
                ? function (e) {
                      (e?.stopPropagation(), (0, es.o)(r, n, i, s), (0, el.closeAllModals)());
                  }
                : void 0,
            onContextMenu: x
                ? function (e) {
                      let r = O.A.getChannel(n);
                      (0, z.L3)(e, async () => {
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
            children: [j, g],
        })
    );
}
function eS(e) {
    let { guildId: n, children: t } = e,
        r = (0, S.bG)([eg.A], () => eg.A.getGuild(n), [n]);
    return (0, l.jsxs)(eh.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(em.A, {}) : null, t] });
}
function ew(e) {
    let { id: n } = e,
        t = d();
    return (0, l.jsx)(ef.A, {
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
        t = d(),
        r = t?.guildId,
        i = (0, S.bG)([ej.A], () => (null != r ? ej.A.getRole(r, n)?.name : null) ?? ek.intl.string(ek.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ex.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eM(e) {
    let { id: n } = e,
        t = d();
    return (0, l.jsx)(ed.A, { gameId: n, authorId: t?.authorId });
}
function eE(e) {
    let { roleName: n } = e,
        t = d();
    return (0, l.jsx)(ex.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function eP(e) {
    let { route: n, itemId: t } = e,
        r = d(),
        i = r?.guildId,
        s = (0, ea.Q)(n),
        a = (0, S.bG)([ej.A], () => (0, ea.f)(ej.A, n, t, i), [n, t, i]);
    return null == s
        ? null
        : (0, l.jsxs)(R.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eo.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [s, null != a ? (0, l.jsx)(em.A, {}) : null, a],
          });
}
function eL(e) {
    let { id: n, name: t } = e,
        i = d(),
        s = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eb.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: s }),
            [i?.channelId, s, n, t],
        );
    return (0, l.jsx)(eu.gn, { node: a, children: t });
}
var e_ = t(147190);
function eG(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: s } = e,
        a = (0, S.bG)([O.A], () => (null != i && null == O.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eC, { channelId: a, guildId: n, messageId: r, conversationId: s });
}
function eT(e) {
    let { url: n, name: i, interactive: s } = e,
        a = r.useCallback(async () => {
            let e = await D.AN(n);
            (B.A.trackLinkClicked(e), (0, J.A)(e));
        }, [n]),
        o = r.useCallback(
            (e) => {
                (0, z.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(R.A, {
        role: "link",
        href: n,
        onClick: s ? a : void 0,
        onContextMenu: s ? o : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)($.P, { size: "xs", className: e_.Kk, color: "currentColor" }), i],
    });
}
var e$ = t(196765),
    ez = t(976245),
    eH = t(302031);
function eJ() {
    return (0, ez.y)()((e) => ({
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
let eU = (0, ez.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eB = r.createContext(eU);
function eF(e) {
    let { children: n } = e,
        [t] = r.useState(eJ);
    return (0, l.jsx)(eB.Provider, { value: t, children: n });
}
var eR = t(785562),
    eD = t(379418),
    eO = t(152959);
t(321073);
var eq = t(448767);
function eK(e) {
    return "link" === e.type;
}
var eQ = t(254221);
let eW = {
    text: function (e) {
        let { children: n } = e;
        return n;
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: r } = e,
            i = d()?.formatInline === !0,
            s = t === n.length - 1;
        return i
            ? (0, l.jsxs)(l.Fragment, { children: [r, s ? null : " "] })
            : (0, l.jsxs)("span", { children: [r, s ? null : (0, l.jsx)("br", {})] });
    },
    empty: function () {
        return d()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            i = r.useContext(L);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(_, { value: n, jumboable: i });
            case "custom":
                return (0, l.jsx)(G, { value: n, jumboable: i });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: i } = e,
            s = d()?.noStyleAndInteraction === !0,
            a = null == n || 0 === n.length;
        if (a) {
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
                    : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, K.te)(s) };
            })(t);
            if (null != e) return (0, l.jsx)(eG, { ...e });
            let n = (0, F.h)(t);
            if (null != n) return (0, l.jsx)(eT, { url: t, name: n.name, interactive: !s });
        }
        if ((0, U.vS)(t)) return (0, l.jsx)(et, { url: t });
        if (Z.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: i }), (0, l.jsx)(et, { url: t })],
            });
        let o = r;
        return (a ||
            (o =
                null != r && r.length > 0
                    ? `${r}

(${t})`
                    : t),
        s)
            ? (0, l.jsx)("span", { title: o ?? t, children: i })
            : (0, l.jsx)(H.A, {
                  title: o,
                  href: t,
                  trusted: a ? () => (0, q.m)(t, t) : void 0,
                  children: (0, l.jsx)("span", { children: i }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: i } = e,
            s = d()?.formatInline === !0 ? b.tZ : void 0;
        switch (n) {
            case "ordered":
                let a = (r + i.length - 1).toString().length;
                return (0, l.jsx)("ol", {
                    start: r,
                    className: s,
                    style: { "--totalCharacters": a, "--olCounterStart": r - 1 },
                    children: t,
                });
            case "unordered":
                return (0, l.jsx)("ul", { className: s, children: t });
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
        if (d()?.formatInline === !0) {
            let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
            return (
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(p.Q0, "")),
                (0, l.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, l.jsx)("pre", {
            children: (0, l.jsxs)("div", {
                className: b.Hy,
                children: [
                    y.p5 ? (0, l.jsx)("div", { className: b.lB, children: (0, l.jsx)(C, { text: t }) }) : null,
                    (0, l.jsx)(A.E, { code: t, lang: n, className: j()(k.kw, "hljs") }),
                ],
            }),
        });
    },
    quote: function (e) {
        let { children: n } = e;
        return (0, l.jsxs)("div", {
            className: b.h,
            children: [(0, l.jsx)("div", { className: b.r }), (0, l.jsx)("blockquote", { children: n })],
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
                return (0, l.jsx)(eC, { channelId: String(t) });
            case "user":
                return (0, l.jsx)(ew, { id: String(t) });
            case "role":
                return (0, l.jsx)(eN, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(eE, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(eE, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eM, { id: String(t) });
            case "command":
                return (0, l.jsx)(eL, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(eP, {
                    route: ey[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, eA.xb)(n);
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
    spoiler: function (e) {
        let { children: n, node: t, id: i } = e,
            s = r.useMemo(() => Array.from((0, a.tJ)([t])).some((e) => "link" === e.type), [t]),
            o = d(),
            u = r.useContext(eB),
            c = (0, e$.P)(u, (e) => e.revealedIds.has(i)),
            h = (0, e$.P)(u, (e) => e.hoveredId === i),
            m = r.useCallback(() => u.getState().reveal(i), [u, i]),
            x = r.useCallback(() => u.getState().setHovered(i, !0), [u, i]),
            f = r.useCallback(() => u.getState().setHovered(i, !1), [u, i]);
        return (
            r.useEffect(() => {
                o?.setHasSpoilerEmbeds?.(s);
            }, [o, s]),
            (0, l.jsx)(eH.Ay, {
                type: eH.Ay.Types.TEXT,
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
            r = (0, eD.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(eR.A, { node: r });
    },
};
function eX(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(o.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eY, { content: n, error: t });
        },
        children: (0, l.jsx)(eZ, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eZ(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: i } = e;
    (0, eO.b)(!0);
    let o = d()?.formatInline === !0,
        u = (0, x.j)({ formatInline: o }),
        c = r.useMemo(() => (0, a.qg)(n, u), [n, u]),
        h = r.useMemo(
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
                    return n <= P.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [t, c],
        ),
        m = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eq.tq : (0, eq.dn)(n.value, eK);
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
                                      let t = eK(e) ? e.value.url : null;
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
                })(c, { hideSingleLinkContent: i }),
            [c, i],
        );
    return (0, l.jsx)(L.Provider, {
        value: h,
        children: (0, l.jsx)(eF, { children: (0, l.jsx)(s.$, { nodes: m, renderers: eW }) }, n),
    });
}
function eY(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            m.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(u.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: eQ.g,
                    children: [(0, l.jsx)(h.A, { width: 16, height: 16 }), ek.intl.string(ek.t.dpFK4M)],
                }),
            ],
        })
    );
}
var eV = t(174459),
    e0 = t(903369),
    e1 = t(521981),
    e3 = t(594808),
    e9 = t(652215),
    e4 = t(910379);
function e2(e, n) {
    let {
            hideSimpleEmbedContent: s = !0,
            formatInline: a = !1,
            noStyleAndInteraction: o = !1,
            allowHeading: u = !1,
            allowList: d = !1,
            allowLinks: h = !1,
            allowDevLinks: m = !1,
            previewLinkTarget: x = !1,
            viewingChannelId: f,
            postProcessor: j,
        } = n,
        g = (0, i.I2)({ location: "useMessageRenderedContent" }),
        [v, I] = r.useState(!1),
        p = r.useCallback((e) => {
            e && I(!0);
        }, []);
    r.useEffect(() => {
        I(!1);
    }, [e.content]);
    let A = e.id,
        y = e.channel_id,
        b = (0, e0.U)(e),
        k = e.author?.id,
        C = r.useMemo(
            () => ({
                messageId: A,
                channelId: y,
                viewingChannelId: f,
                guildId: b,
                authorId: k,
                setHasSpoilerEmbeds: p,
                formatInline: a,
                noStyleAndInteraction: o,
            }),
            [A, y, f, b, k, p, a, o],
        );
    return r.useMemo(() => {
        if (null != e.customRenderedContent) return e.customRenderedContent;
        if (e.isUnsupported) return { content: ek.intl.string(ek.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
        if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(e9.pr7.LOADING))
            return { content: (0, l.jsx)(e3.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
        if (e.type === e9.lAJ.CHANGELOG) {
            let { renderChangelogMessageMarkup: n } = t(550997);
            return n(e, e4, {
                track: (e, n) => {
                    eV.default.track(e, n);
                },
            });
        }
        return g.enabled && null == j
            ? {
                  content: (0, l.jsx)(r.Suspense, {
                      children: (0, l.jsx)(c.Provider, {
                          value: C,
                          children: (0, l.jsx)(eX, {
                              content: e.content,
                              allowJumboEmoji: !a && e.type !== e9.lAJ.MEDIA_MENTION_MESSAGE,
                              hideSingleLinkContent: s && (0, eq.k5)(e.embeds),
                          }),
                      }),
                  }),
                  hasSpoilerEmbeds: v,
                  hasBailedAst: !1,
              }
            : (0, e1.Ay)(e, {
                  hideSimpleEmbedContent: s,
                  formatInline: a,
                  noStyleAndInteraction: o,
                  allowHeading: u,
                  allowList: d,
                  allowLinks: h,
                  allowDevLinks: m,
                  previewLinkTarget: x,
                  viewingChannelId: f,
                  allowGameMentions: !0,
                  postProcessor: j,
              });
    }, [
        e.content,
        e.customRenderedContent,
        e.embeds,
        e.interaction,
        e.state,
        e.type,
        s,
        a,
        o,
        u,
        d,
        h,
        x,
        m,
        f,
        j,
        g.enabled,
        v,
        C,
    ]);
}
