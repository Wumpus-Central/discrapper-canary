t.d(n, { initNativeMarkdown: () => eW, A: () => eY });
var l = t(477900),
    r = t(582128),
    s = t(5135),
    i = t(847873),
    a = t(292442),
    u = t(834730),
    o = t(791606),
    c = t(38405),
    d = t(17928),
    h = t(540999);
let m = [
        "bold",
        "code",
        "code_block",
        "emoji",
        "heading",
        "italic",
        "link",
        "list",
        "mention",
        "quote",
        "small",
        "spoiler",
        "strikethrough",
        "timestamp",
        "underline",
    ],
    x = [...m, "dev_link"];
var j = t(503698),
    g = t.n(j),
    f = t(939249),
    p = t(933832),
    v = t(624479),
    I = t(441136),
    k = t(957565),
    A = t(165648),
    y = t(969490);
function b(e) {
    let { text: n } = e,
        [t, s] = r.useState(!1);
    return (0, l.jsx)(f.D, {
        onClick: function () {
            (0, k.C)(
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
    M = t(78377),
    N = t(690521),
    E = t(487417),
    P = t(307731);
let L = r.createContext(!1);
function _(e) {
    let { value: n, jumboable: t } = e,
        r = N.Ay.getURL(n),
        s = S.Ay.convertSurrogateToName(n),
        i = (0, M.p)();
    return (0, l.jsx)(w.H, {
        node: { name: s, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function z(e) {
    let { value: n, jumboable: t } = e,
        r = (0, M.p)(),
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
var T = t(588975),
    G = t(442433),
    H = t(9578),
    $ = t(975807),
    q = t(380610),
    F = t(235393),
    B = t(258072),
    D = t(332173),
    U = t(679164),
    J = t(734057),
    O = t(123917),
    R = t(376943),
    K = t(333421),
    X = t(100392),
    Q = t(836156);
let W = /^dev:\/\//i,
    Y = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    Z = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    V = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("218126"),
            t.e("60800"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    ee = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function en(e) {
    let { url: n } = e,
        t =
            (0, q.vS)(n) || (0, q.h4)(n)
                ? (0, l.jsx)(Y, { url: n })
                : (0, X.W0)(n)
                  ? (0, l.jsx)(Z, { url: n })
                  : (0, Q.i)(n)
                    ? (0, l.jsx)(V, { url: n })
                    : (0, K.my)(n)
                      ? (0, l.jsx)(ee, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var et = t(192308),
    el = t(47167),
    er = t(499211),
    es = t(706083),
    ei = t(78390),
    ea = t(392605),
    eu = t(990474),
    eo = t(232042),
    ec = t(266645),
    ed = t(906754),
    eh = t(37632),
    em = t(593284),
    ex = t(288539),
    ej = t(317525),
    eg = t(71393),
    ef = t(994500),
    ep = t(287809),
    ev = t(147036),
    eI = t(403362);
let ek = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eA = t(73510),
    ey = t(105292);
function eb(e) {
    let { channelId: n, guildId: r, messageId: s, conversationId: i } = e,
        a = (0, er.A)(n),
        {
            name: u,
            iconType: o,
            isForumPost: c,
            hasAccess: h,
        } = (0, d.cf)(
            [J.A, ep.default, ef.A],
            () => {
                let e = J.A.getChannel(n);
                return {
                    name: null != e ? (0, el.m1)(e, ep.default, ef.A) : void 0,
                    iconType: (0, ev.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, R.nc)(e),
                };
            },
            [n],
        ),
        m = (0, M.p)();
    if (null == o) return;
    let x = r === m?.guildId || null == r,
        j =
            h || a.isSubscriptionGated
                ? x || null == u
                    ? (0, l.jsx)(eo.A, {
                          iconType: o,
                          children: u ?? (0, l.jsx)("em", { children: ey.intl.string(ey.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eC, { guildId: r, children: u })
                : (0, l.jsx)(eo.A, { iconType: "locked", children: ey.intl.string(ey.t["/YzI63"]) }),
        g = null;
    return (
        null != s &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(eh.A, {}), (0, l.jsx)(eo.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(D.A, {
            role: "link",
            onClick: function (e) {
                (e?.stopPropagation(), (0, es.o)(r, n, s, i), (0, et.closeAllModals)());
            },
            onContextMenu: function (e) {
                let r = J.A.getChannel(n);
                (0, G.L3)(e, async () => {
                    let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                        t.bind(t, 254106),
                    );
                    return (t) =>
                        (0, l.jsx)(e, { ...t, channel: r, channelId: r?.id ?? n, originalLink: null, messageId: s });
                });
            },
            className: "channelMention",
            children: [j, g],
        })
    );
}
function eC(e) {
    let { guildId: n, children: t } = e,
        r = (0, d.bG)([eg.A], () => eg.A.getGuild(n), [n]);
    return (0, l.jsxs)(ed.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(eh.A, {}) : null, t] });
}
function eS(e) {
    let { id: n } = e,
        t = (0, M.p)();
    return (0, l.jsx)(ex.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
    });
}
function ew(e) {
    let { id: n } = e,
        t = (0, M.p)(),
        r = t?.guildId,
        s = (0, d.bG)([ej.A], () => (null != r ? ej.A.getRole(r, n)?.name : null) ?? ey.intl.string(ey.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(em.A, { roleId: n, channelId: t?.channelId, guildId: t?.guildId, children: `@${s}` });
}
function eM(e) {
    let { id: n } = e,
        t = (0, M.p)();
    return (0, l.jsx)(ec.A, { gameId: n, authorId: t?.authorId });
}
function eN(e) {
    let { roleName: n } = e,
        t = (0, M.p)();
    return (0, l.jsx)(em.A, { roleName: n, channelId: t?.channelId, guildId: t?.guildId, children: n });
}
function eE(e) {
    let { route: n, itemId: t } = e,
        r = (0, M.p)(),
        s = r?.guildId,
        i = (0, ei.Q)(n),
        a = (0, d.bG)([ej.A], () => (0, ei.f)(ej.A, n, t, s), [n, t, s]);
    return null == i
        ? null
        : (0, l.jsxs)(D.A, {
              role: "link",
              onClick: function (e) {
                  (e?.stopPropagation(), (0, ea.i)(s, n, t));
              },
              className: "channelMention",
              iconType: n,
              children: [i, null != a ? (0, l.jsx)(eh.A, {}) : null, a],
          });
}
function eP(e) {
    let { id: n, name: t } = e,
        s = (0, M.p)(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eA.v4}${e}`).join("")}`;
        }, [n, t]),
        a = r.useMemo(
            () => ({ type: "commandMention", channelId: s?.channelId, commandId: n, commandName: t, commandKey: i }),
            [s?.channelId, i, n, t],
        );
    return (0, l.jsx)(eu.gn, { node: a, children: t });
}
var eL = t(147190);
function e_(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: s, conversationId: i } = e,
        a = (0, d.bG)([J.A], () => (null != s && null == J.A.getChannel(t) ? s : t), [t, s]);
    return (0, l.jsx)(eb, { channelId: a, guildId: n, messageId: r, conversationId: i });
}
function ez(e) {
    let { url: n, name: s } = e,
        i = r.useCallback(async () => {
            let e = await U.AN(n);
            (F.A.trackLinkClicked(e), (0, $.A)(e));
        }, [n]),
        a = r.useCallback(
            (e) => {
                (0, G.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: s });
                });
            },
            [s, n],
        );
    return (0, l.jsxs)(D.A, {
        role: "link",
        href: n,
        onClick: i,
        onContextMenu: a,
        className: "attachmentLink",
        children: [(0, l.jsx)(T.P, { size: "xs", className: eL.Kk, color: "currentColor" }), s],
    });
}
var eT = t(196765),
    eG = t(976245),
    eH = t(302031);
function e$() {
    return (0, eG.y)()((e) => ({
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
let eq = (0, eG.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eF = r.createContext(eq);
function eB(e) {
    let { children: n } = e,
        [t] = r.useState(e$);
    return (0, l.jsx)(eF.Provider, { value: t, children: n });
}
var eD = t(785562),
    eU = t(379418);
t(321073);
var eJ = t(448767);
function eO(e) {
    return "link" === e.type;
}
var eR = t(254221);
let eK = {
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
                s = r.useContext(L);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)(_, { value: n, jumboable: s });
                case "custom":
                    return (0, l.jsx)(z, { value: n, jumboable: s });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: s } = e,
                i = null == n || 0 === n.length;
            if (i) {
                let e = (function (e) {
                    let n = R.En.exec(e);
                    if (null != n) {
                        let [, e, t, l, r] = n;
                        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
                    }
                    let t = R.BM.exec(e);
                    if (null == t) return null;
                    let [, l, r, s, i] = t;
                    return null == r || /\D/.test(r) || (null != s && /\D/.test(s))
                        ? null
                        : {
                              guildId: l,
                              channelId: r,
                              messageId: s,
                              parentChannelId: void 0,
                              conversationId: (0, R.te)(i),
                          };
                })(t);
                if (null != e) return (0, l.jsx)(e_, { ...e });
                let n = (0, B.h)(t);
                if (null != n) return (0, l.jsx)(ez, { url: t, name: n.name });
            }
            return (0, q.vS)(t)
                ? (0, l.jsx)(en, { url: t })
                : W.test(t)
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(en, { url: t })],
                    })
                  : (0, l.jsx)(H.A, {
                        title: r,
                        href: t,
                        trusted: i ? () => (0, O.m)(t, t) : void 0,
                        children: (0, l.jsx)("span", { children: s }),
                    });
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
                    className: A.Hy,
                    children: [
                        k.p5 ? (0, l.jsx)("div", { className: A.lB, children: (0, l.jsx)(b, { text: t }) }) : null,
                        (0, l.jsx)(I.E, { code: t, lang: n, className: g()(y.kw, "hljs") }),
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
                    return (0, l.jsx)(eb, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eS, { id: String(t) });
                case "role":
                    return (0, l.jsx)(ew, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eN, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eN, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eM, { id: String(t) });
                case "command":
                    return (0, l.jsx)(eP, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eE, {
                        route: ek[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, eI.xb)(n);
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
                i = r.useMemo(() => Array.from((0, E.t)([t])).some((e) => "link" === e.type), [t]),
                a = (0, M.p)(),
                u = r.useContext(eF),
                o = (0, eT.P)(u, (e) => e.revealedIds.has(s)),
                c = (0, eT.P)(u, (e) => e.hoveredId === s),
                d = r.useCallback(() => u.getState().reveal(s), [u, s]),
                h = r.useCallback(() => u.getState().setHovered(s, !0), [u, s]),
                m = r.useCallback(() => u.getState().setHovered(s, !1), [u, s]);
            return (
                r.useEffect(() => {
                    a?.setHasSpoilerEmbeds?.(i);
                }, [a, i]),
                (0, l.jsx)(eH.Ay, {
                    type: eH.Ay.Types.TEXT,
                    obscured: !o,
                    hovered: c,
                    onReveal: d,
                    onMouseEnter: h,
                    onMouseLeave: m,
                    children: () => n,
                })
            );
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eU.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eD.A, { node: r });
        },
    },
    eX = !1,
    eQ = null;
function eW() {
    return (eQ ??= (0, i.Ts)().then(() => {
        eX = !0;
    }));
}
function eY(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1 } = e;
    return (0, l.jsx)(a.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(eV, { content: n, error: t });
        },
        children: (0, l.jsx)(eZ, { content: n, allowJumboEmoji: t, hideSingleLinkContent: r }),
    });
}
function eZ(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: a } = e;
    eX || r.use(eW());
    let u = (0, d.bG)([h.A], () => h.A.isDeveloper, []) ? x : m,
        o = r.useMemo(() => (0, i.qg)(n, u), [n, u]),
        c = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, E.t)(e))
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
                })(o),
            [t, o],
        ),
        j = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t } = n,
                        l = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eJ.tq : (0, eJ.dn)(n.value, eO);
                        })(e);
                    return t && (0, eJ.iz)(l)
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
                                      let t = eO(e) ? e.value.url : null;
                                      return null == t || !(0, eJ.c_)(t, n);
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
    return (0, l.jsx)(L.Provider, {
        value: c,
        children: (0, l.jsx)(eB, { children: (0, l.jsx)(s.$, { nodes: j, renderers: eK }) }, n),
    });
}
function eV(e) {
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
                    className: eR.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), ey.intl.string(ey.t.dpFK4M)],
                }),
            ],
        })
    );
}
