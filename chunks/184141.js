l.d(t, { $: () => tQ, default: () => t$ });
var a = l(627968),
    i = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    o = l(990078),
    c = l(521489),
    u = l(231723),
    d = l(192308),
    m = l(534514),
    h = l(408278),
    g = l(405433),
    p = l(241326),
    x = l(972213),
    v = l(775602),
    f = l(793574),
    j = l(688810),
    y = l(274372),
    C = l(945810);
let b = (0, C.mj)({
    kind: "user",
    name: "2026-05-clips-gallery-home",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var A = l(315240),
    N = l(582633),
    E = l(309777),
    k = l(429364),
    w = l(352527),
    L = l(280483),
    S = l(111994);
l(321073);
var I = l(562708),
    M = l(834730),
    P = l(289873),
    T = l(139286),
    D = l(962125);
let R = (0, C.mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var F = l(175841),
    O = l(449543),
    _ = l(152858),
    z = l(939249),
    G = l(27232),
    H = l(505930),
    U = l(821609),
    K = l(933832),
    Q = l(97808),
    $ = l(778712),
    Y = l(22231),
    V = l(429913),
    X = l(607470),
    B = l(137177),
    q = l(495544),
    W = l(287809),
    Z = l(427262),
    J = l(372684),
    ee = l(140423),
    et = l(602902),
    el = l(665039),
    ea = l(16590),
    ei = l(375708),
    en = l(296364);
let es = ["clowning around", "good times", "team vibes", "epic teamwork"];
function er(e) {
    let { clip: t, moment: l, onEdit: n, onHoverChange: s } = e,
        c = (0, el.j)(t),
        { analyticsLocations: u } = (0, j.Ay)(),
        d = (0, V.h)(t.applicationId),
        x = q.default.getId(),
        v = (0, r.bG)([W.default], () => {
            let e = t.users.find((e) => e !== x);
            return null != e ? W.default.getUser(e) : null;
        }, [t.users, x]),
        f = null != v,
        y = (0, Z.tx)(v),
        { Icon: C } = l,
        b = f ? ei.intl.formatToPlainString(ea.default.QJ7i8Z, { username: y }) : l.title,
        N = f ? es[t.id.charCodeAt(0) % es.length] : l.subtitle,
        E = t.type === J.nQ.SCREENSHOT,
        k = t.type === J.nQ.VOICE_CLIP,
        w = !E && !k && null != c,
        L = i.useRef(null),
        S = "" !== t.thumbnail ? t.thumbnail : null,
        I = i.useCallback(() => {
            s?.(S);
            let e = L.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, S]),
        P = i.useCallback(
            (e) => {
                s?.(null);
                let l = L.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let a = document.activeElement;
                null != a && e.currentTarget.contains(a) && !a.matches(":focus-visible") && a.blur();
            },
            [t.editMetadata?.start, s],
        ),
        T = i.useCallback(() => {
            s?.(S);
            let e = L.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, S]),
        D = i.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                s?.(null);
                let l = L.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start, s],
        ),
        R = i.useCallback(
            (e) => {
                e.stopPropagation(), n(t);
            },
            [n, t],
        ),
        F = i.useCallback(() => {
            n(t);
        }, [n, t]),
        O = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, et.K)([t], { analyticsLocations: u });
            },
            [t, u],
        ),
        _ = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, A.w7)(t.id);
            },
            [t.id],
        ),
        er = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, ee.R)({ clips: [t] });
            },
            [t],
        ),
        eo = i.useCallback(
            (e) => {
                e.stopPropagation(), (0, A.XK)(t);
            },
            [t],
        ),
        ec = !0 !== t.isTemporary,
        eu = ei.intl.string(!0 === t.isFavorite ? ea.default.IZsalP : ea.default.ihBfyA);
    return (0, a.jsx)("div", {
        className: en.Ui,
        onMouseEnter: I,
        onMouseLeave: P,
        onFocus: T,
        onBlur: D,
        children: (0, a.jsxs)(z.D, {
            className: en.Nr,
            "aria-label": ei.intl.string(ei.t.bt75uw),
            onClick: F,
            children: [
                (0, a.jsxs)("div", {
                    className: en.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: en.xn })
                            : (0, a.jsx)("div", { className: en.$$ }),
                        w
                            ? (0, a.jsx)(X.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: c ?? void 0,
                                  className: en.xn,
                                  ref: L,
                              })
                            : null,
                    ],
                }),
                (0, a.jsx)("div", { className: en.D7 }),
                null != d &&
                    (0, a.jsx)("div", {
                        className: en.uv,
                        "aria-hidden": "true",
                        children: (0, a.jsx)(B.A, { game: d, size: B.M.XXSMALL, className: en.ns }),
                    }),
                (0, a.jsxs)("div", {
                    className: en.Nv,
                    children: [
                        ec
                            ? (0, a.jsx)(
                                  o.m,
                                  {
                                      text: eu,
                                      position: "top",
                                      children: (0, a.jsx)(h.K, {
                                          onClick: eo,
                                          icon: !0 === t.isFavorite ? G.G : H.y,
                                          "aria-label": eu,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, a.jsx)(U.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: K.A,
                                  text: ei.intl.string(ei.t["R3BPH+"]),
                                  onClick: _,
                              }),
                        (0, a.jsx)(o.m, {
                            text: ei.intl.string(ei.t.oyYWHE),
                            position: "top",
                            children: (0, a.jsx)(h.K, {
                                onClick: er,
                                icon: p.u,
                                "aria-label": ei.intl.string(ei.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: en.Lw,
                    children: [
                        f && null != v
                            ? (0, a.jsx)(Q.eu, {
                                  src: v.getAvatarURL(void 0, 32),
                                  size: $._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, a.jsx)("div", {
                                  className: en.bG,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(C, { size: "md", color: "currentColor" }),
                              }),
                        (0, a.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: b }),
                        (0, a.jsx)(M.E, { variant: "text-sm/medium", color: "always-white", children: N }),
                        (0, a.jsx)("div", { className: en.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: en.o1,
                    children: [
                        (0, a.jsx)(U.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: Y.R,
                            text: ei.intl.string(ei.t.bt75uw),
                            onClick: R,
                        }),
                        (0, a.jsx)(U.$, {
                            variant: "primary",
                            size: "sm",
                            icon: g.l,
                            text: ei.intl.string(ei.t.RDE0Sc),
                            onClick: O,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eo = l(369606),
    ec = l(845798),
    eu = l(825860),
    ed = l(926268);
let em = [
    { Icon: F.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: eo.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: ec.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: eu.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: G.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: ed.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function eh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eg = l(452143);
function ep(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([y.Ay], () => y.Ay.getClips()),
        n = i.useMemo(() => eh(l), [l]),
        s = i.useMemo(
            () =>
                n
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return em[Math.abs(t) % em.length];
                    }),
            [n],
        ),
        { backgroundComponent: o, handleHoverChange: c } = (function () {
            let [e, t] = i.useState({ previousThumbnail: null, thumbnail: null }),
                l = i.useRef(null);
            i.useEffect(
                () => () => {
                    null != l.current && window.clearTimeout(l.current);
                },
                [],
            );
            let n = i.useCallback((e) => {
                null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                    null != e
                        ? t((t) => {
                              let l = t.thumbnail ?? t.previousThumbnail;
                              return { previousThumbnail: l !== e ? l : null, thumbnail: e };
                          })
                        : (l.current = window.setTimeout(() => {
                              t((e) => ({ previousThumbnail: e.thumbnail ?? e.previousThumbnail, thumbnail: null })),
                                  (l.current = null);
                          }, 2e3));
            }, []);
            return {
                backgroundComponent: (0, a.jsxs)(a.Fragment, {
                    children: [
                        null != e.previousThumbnail &&
                            (0, a.jsx)(
                                "img",
                                { src: e.previousThumbnail, className: eg.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, a.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${eg.Tp} ${eg.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })();
    return 0 === n.length
        ? null
        : (0, a.jsxs)("section", {
              className: eg.uW,
              "aria-label": ei.intl.string(ea.default.efLpNC),
              children: [
                  o,
                  (0, a.jsxs)("div", {
                      className: eg.wx,
                      children: [
                          (0, a.jsxs)("div", {
                              className: eg.UP,
                              children: [
                                  (0, a.jsx)(F.B, { size: "refresh_sm", color: "white" }),
                                  (0, a.jsx)(M.E, {
                                      variant: "text-md/medium",
                                      color: "always-white",
                                      children: ei.intl.string(ea.default.I1h8uD),
                                  }),
                              ],
                          }),
                          (0, a.jsx)(m.D, {
                              variant: "display-md",
                              color: "always-white",
                              children: ei.intl.string(ea.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, a.jsx)(O.A, {
                      className: eg.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: _.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": ei.intl.string(ea.default.efLpNC),
                      children: n.map((e, l) =>
                          (0, a.jsx)(er, { clip: e, moment: s[l], onEdit: t, onHoverChange: c }, e.id),
                      ),
                  }),
              ],
          });
}
var ex = l(989349),
    ev = l.n(ex),
    ef = l(66455),
    ej = l(342952),
    ey = l(890856),
    eC = l(777666),
    eb = l(530005),
    eA = l(406810),
    eN = l(176781),
    eE = l(661531),
    ek = l(983851),
    ew = l(31300),
    eL = l(442433),
    eS = l(587895),
    eI = l(47167),
    eM = l(734057),
    eP = l(71393),
    eT = l(549685),
    eD = l(174459),
    eR = l(58703),
    eF = l(403362),
    eO = l(974293),
    e_ = l(226421),
    ez = l(284009),
    eG = l.n(ez),
    eH = l(460905),
    eU = l(713608),
    eK = l(562153),
    eQ = l(788332);
function e$(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eG()(l?.type === J.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, r.bG)([W.default], () => W.default.getUser(l.remoteTriggerUserId)),
        n = (0, eK.tx)(t.guildId, null, i);
    return null == i
        ? null
        : (0, a.jsx)(o.m, {
              text: ei.intl.string(ea.default.vTTkFF),
              children: (0, a.jsxs)("div", {
                  className: eQ.S,
                  children: [
                      (0, a.jsx)("img", { src: i.getAvatarURL(t.guildId, 12, !1), className: eQ.$, alt: n }),
                      (0, a.jsx)(M.E, {
                          color: "always-white",
                          variant: "text-xs/bold",
                          children: ei.intl.formatToPlainString(ea.default.QJ7i8Z, { username: n }),
                      }),
                  ],
              }),
          });
}
function eY(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, a.jsx)(o.m, {
        text: i,
        children: (0, a.jsxs)("div", {
            className: eQ.S,
            children: [
                (0, a.jsx)(t, { size: "xxs", color: "white" }),
                (0, a.jsx)(M.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eV(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === J.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case J.Gy.DISTRIBUTED:
            return (0, a.jsx)(e$, { clip: t });
        case J.Gy.LAUGHTER:
            return (0, a.jsx)(eY, {
                icon: eH.n,
                text: ei.intl.string(ea.default.bTC23D),
                tooltipText: ei.intl.string(ea.default["ry+jxm"]),
            });
        case J.Gy.GAME_EVENT:
            return (0, a.jsx)(eY, {
                icon: eU.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ei.intl.string(ea.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eX = l(718812),
    eB = l(652215),
    eq = l(798594);
let eW = function (e) {
    let { clip: t, actionsDisabled: n, isNew: o, onEdit: c, onClick: u } = e,
        d = (0, r.yK)([W.default], () => t.users.map((e) => W.default.getUser(e)).filter(eF.Vq)),
        m = (0, r.bG)([eM.A], () => (null != t.channelId ? eM.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([eP.A], () => (null != t.guildId ? eP.A.getGuild(t.guildId) : null)),
        { analyticsLocations: g } = (0, j.Ay)(f.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: p, toggleClipSelection: x, isMultiSelectMode: v } = i.useContext(tQ),
        [C, b] = i.useState(!1),
        A = i.useRef(null),
        N = (0, ef.A)(t.editMetadata?.start ?? 0),
        E = p.has(t.id),
        k = t.type === J.nQ.SCREENSHOT,
        w = (0, eI.Ay)(m),
        L = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        S = (0, eR.Fe)(new Date(t.createdAt)),
        I = i.useMemo(() => {
            let e = [];
            return (
                t.type === J.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != w && e.push(w))
                    : ("" !== L && null != L && e.push(L),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [L, h?.name, w, t.activity?.state, t.activity?.details, t.type]),
        P = i.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        T = i.useCallback(() => {
            if (!0 === k) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = N.current), A.current?.play());
        }, [k, N]),
        D = i.useCallback(() => {
            if (!0 === k) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [k, t.editMetadata?.start]),
        R = i.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || D();
            },
            [D],
        ),
        F = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        O = i.useCallback(() => {
            b(!1);
        }, []),
        _ = i.useCallback(
            (e) => {
                b(!0), A.current?.pause();
                let i =
                    v && p.size > 0
                        ? Array.from(p)
                              .map((e) => y.Ay.getClipById(e))
                              .filter(eF.Vq)
                        : [t];
                (0, eL.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("19790"),
                            l.e("6619"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("38601"),
                            l.e("69006"),
                            l.e("18307"),
                            l.e("86456"),
                            l.e("24043"),
                        ]).then(l.bind(l, 197126));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: i,
                                actionsDisabled: n,
                                onShare: () => {
                                    eD.default.track(eB.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, eO.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        eD.default.track(eB.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, eO.GN)(),
                                        });
                                },
                                onBeforeDelete: P,
                                onAfterDelete: () => {
                                    eD.default.track(eB.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, eO.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: O },
                );
            },
            [t, v, p, n, P, O, c],
        ),
        z = i.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), _(e));
            },
            [n, _],
        ),
        G = i.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), x(t.id)) : v ? x(t.id) : null != u && u(t),
                    eD.default.track(eB.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, eO.GN)() }));
            },
            [n, v, x, t, u],
        );
    return (0, a.jsx)(j.f5, {
        value: g,
        children: (0, a.jsx)("div", {
            className: eq.o8,
            onBlur: R,
            children: (0, a.jsxs)(ey.s, {
                "aria-disabled": n,
                "aria-label": ei.intl.string(!0 === k ? ei.t["HO/oXl"] : ei.t.bt75uw),
                onClick: n ? void 0 : G,
                onContextMenu: z,
                className: s()(eq.QN, { [eq.r9]: n, [eq.in]: C, [eq.wH]: E }),
                onFocus: T,
                onMouseOver: T,
                onMouseLeave: D,
                children: [
                    (0, a.jsx)(eZ, { clip: t, isNew: o, videoRef: A, onOpenContextMenu: _, actionsDisabled: n }),
                    (0, a.jsxs)("div", {
                        className: eq.wI,
                        children: [
                            (0, a.jsx)(e2, { clip: t }),
                            (0, a.jsxs)("div", {
                                className: eq.i0,
                                children: [
                                    (0, a.jsx)(eJ, { clip: t }),
                                    (0, a.jsx)(M.E, {
                                        className: eq.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: I,
                                    }),
                                    (0, a.jsx)(M.E, {
                                        className: eq.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: S,
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: eq.jW,
                                children: (0, a.jsx)(ej.A, {
                                    maxUsers: 3,
                                    users: d,
                                    size: $._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && T());
                                    },
                                    onClickOverflow: F,
                                    "aria-label": ei.intl.string(ei.t.WTozwe),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
function eZ(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        c = 0 === t.length,
        u = !0 === t.pending,
        [d, m] = i.useState(0);
    i.useEffect(() => {
        let e = n.current;
        if (null == e || c) return;
        let l = null,
            a = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let i = t.editMetadata?.start ?? 0,
                    n = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - i) / (n - i)) * 100;
                m(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(a));
            },
            i = () => {
                null == l && (l = requestAnimationFrame(a));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", i),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || i(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", i),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [n, c, t.editMetadata]);
    let { durationDisplay: g, isClipEdited: p } = i.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                a = !1;
            if (null != t.editMetadata) {
                let i = null != l && 1e3 * l < t.length,
                    n =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (a = i || n), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let i = ev().duration(e),
                n = i.minutes(),
                s = i.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: a }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: a };
        }, [t.length, t.editMetadata]),
        x = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), A.XK(t);
            },
            [t],
        ),
        v = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, a.jsxs)("div", {
        className: eq.QB,
        children: [
            (0, a.jsx)("div", { className: eq.ne }),
            (0, a.jsx)(e0, { clip: t, videoRef: n }),
            (0, a.jsxs)("div", {
                className: eq.ry,
                children: [
                    !u && l && (0, a.jsx)(eC.Lp, { text: ei.intl.string(ei.t.y2b7CA) }),
                    (0, a.jsx)(eV, { clip: t }),
                ],
            }),
            !r &&
                (0, a.jsxs)("div", {
                    className: eq.g3,
                    children: [
                        (0, a.jsx)(o.m, {
                            text: ei.intl.string(t.isFavorite ? ea.default.IZsalP : ea.default.ihBfyA),
                            position: "top",
                            children: (0, a.jsx)(h.K, {
                                onClick: x,
                                icon: t.isFavorite ? G.G : H.y,
                                "aria-label": ei.intl.string(ei.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, a.jsx)(h.K, {
                            onClick: v,
                            icon: eb.F,
                            "aria-label": ei.intl.string(ei.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: eq.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: eq.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(eA.O, { color: "white", size: "xs" }),
                                (0, a.jsx)(M.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ei.intl.string(ei.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, a.jsxs)("div", {
                            className: eq.OH,
                            children: [
                                p && (0, a.jsx)(eT.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(M.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: u ? ei.intl.string(ei.t["2Fp7OP"]) : g,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                d > 0 &&
                (0, a.jsx)("div", {
                    className: eq.X7,
                    children: (0, a.jsx)("div", { className: eq.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eJ(e) {
    let { clip: t } = e,
        l = (0, eX.h)(t),
        i = "" !== l;
    return (0, a.jsx)(M.E, {
        className: eq.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: i ? l : t.name,
    });
}
function e0(e) {
    let { clip: t, videoRef: l } = e,
        i = (0, el.j)(t),
        n = t.type === J.nQ.SCREENSHOT;
    return t.type === J.nQ.VOICE_CLIP
        ? (0, a.jsx)(e_.A, { className: eq.fT })
        : n
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: eq.fT })
          : null != i
            ? (0, a.jsx)(X.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: i,
                  loop: !0,
                  className: eq.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: eq.fT })
              : (0, a.jsx)("div", {
                    className: s()(eq.fT, eq.Is),
                    children: (0, a.jsx)(eN.x, { color: eE.A.colors.ICON_MUTED }),
                });
}
function e2(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eS.A], () => (null != t.applicationId ? eS.A.getApplication(t.applicationId) : null)),
        i = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: eq.gS,
        "aria-hidden": "true",
        children:
            null != i
                ? (0, a.jsx)("img", { src: i, alt: "", className: eq.NH })
                : t.type === J.nQ.VOICE_CLIP
                  ? (0, a.jsx)(ek.H, { size: "sm", color: "currentColor" })
                  : (0, a.jsx)(ew.k, { size: "sm", color: "currentColor" }),
    });
}
function e1(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: n, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var e3 = l(702841),
    e7 = l(687966),
    e6 = l(475358),
    e4 = l(123292),
    e5 = l(292801),
    e8 = l(780964),
    e9 = l(766075),
    te = l(532624),
    tt = l(350535),
    tl = l(572164),
    ta = l(953932),
    ti = l(311162);
function tn(e) {
    let { header: t, description: l } = e;
    return (0, a.jsxs)("div", {
        className: ti.Nr,
        children: [t, (0, a.jsx)(M.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ts() {
    let e = (0, e3.bG)([te.Ay], () => te.Ay.getKeybindForAction(eB.hCu.SAVE_CLIP)),
        t = null != e ? tt.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: ti.kR,
        children: [
            (0, a.jsx)(tn, {
                header: (0, a.jsx)(e7._, { size: "refresh_sm", color: eE.A.colors.ICON_DEFAULT }),
                description: ei.intl.string(ea.default["4K56sP"]),
            }),
            (0, a.jsx)(tn, {
                header: null != t ? (0, a.jsx)(e6.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ei.intl.format(ea.default.BIwQis, { keybind: t }),
                                  (0, a.jsx)("div", {
                                      className: ti.JH,
                                      children: (0, a.jsx)(e4.Q, {
                                          text: ei.intl.string(ea.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, e9.openUserSettings)(e8.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ei.intl.string(ea.default.HOUDUm),
            }),
            (0, a.jsx)(tn, {
                header: (0, a.jsx)(e5.t, { size: "refresh_sm", color: eE.A.colors.ICON_DEFAULT }),
                description: ei.intl.string(ea.default.DLzdl7),
            }),
        ],
    });
}
function tr(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, tl.Et)();
    return (0, a.jsx)("div", {
        className: ti.kL,
        children: (0, a.jsxs)("div", {
            className: ti.Qs,
            children: [
                (0, a.jsx)(e1, { width: 213, height: 135, alt: "" }),
                (0, a.jsx)(m.D, {
                    className: ti.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ei.intl.string(ea.default["+M2iLf"]) : ei.intl.string(ea.default.m2GEpP),
                }),
                t &&
                    (0, a.jsx)(M.E, {
                        className: ti.h_,
                        variant: "text-md/medium",
                        children: ei.intl.string(ea.default.xkY5xS),
                    }),
                !l && (0, a.jsx)("div", { className: ti.SO, children: (0, a.jsx)(ta.A, {}) }),
                l && !t && (0, a.jsx)(ts, {}),
            ],
        }),
    });
}
let to = 16 / 9;
var tc = l(792852),
    tu = l(352528);
let td = [0, 16, 0, 16],
    tm = td[1] + td[3];
function th(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s } = e,
        [o, c] = i.useState(!0),
        [u, d] = i.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([y.Ay], () => y.Ay.getSettings().storageLocation),
        g = (0, r.yK)([y.Ay], () => y.Ay.getNewClipIds()),
        p = (0, r.bG)([y.Ay], () => y.Ay.getExportingClipIds().length > 0),
        x = (0, r.bG)([y.Ay], () => eh(y.Ay.getClips()).length > 0),
        v = (0, tc.Pu)(tc.mp),
        { enableAutoClipsReview: f } = R.useConfig({ location: "ClipsGalleryContent" }),
        j = f && x && !v;
    (0, T.A)(
        {
            type: I.ImpressionTypes.MODAL,
            name: I.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: o },
        [t.length, o],
    );
    let C = i.useMemo(() => {
            let e = [],
                l = new Map(),
                a = [],
                i = new Date();
            i.setHours(0, 0, 0, 0);
            let n = i.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        i = new Date(t);
                    if ((i.setHours(0, 0, 0, 0), i.getTime() === n)) a.push(e);
                    else {
                        let a = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            i = l.get(a) ?? [];
                        l.set(a, [...i, e]);
                    }
                }),
                a.length > 0)
            ) {
                let t = a.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: ei.intl.string(ei.t["kB2R/0"]),
                    description: t ? ei.intl.string(ei.t["6AXirz"]) : void 0,
                    clips: a,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, a] = t;
                    e.push({ type: "monthyear", title: l, clips: a });
                }),
                e
            );
        }, [t]),
        { width: b } = u,
        { tileWidth: N, columns: E } = i.useMemo(() => {
            var e, l;
            let a, i, n;
            return (
                (e = t.length),
                (a = Math.max(1, Math.floor(((l = b - tm) + 16) / 336))),
                (i = Math.max(320, (l - 16 * (a - 1)) / a)),
                (n = Math.ceil(e / a)),
                { tileWidth: i, columns: a, rows: n }
            );
        }, [t.length, b]);
    i.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await A.Fb(h);
            } finally {
                c(!1);
            }
        })();
    }, [h]);
    let k = i.useMemo(() => C.map((e) => Math.ceil(e.clips.length / E)), [C, E]),
        w = i.useMemo(() => k.reduce((e, t) => e + t, 0), [k]),
        L = Math.floor(N / to),
        S = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = C[l];
                if (null == r) return null;
                let o = i * E,
                    c = r.clips.slice(o, o + E);
                return (0, a.jsx)(
                    "div",
                    {
                        className: tu.UX,
                        children: c.map((e) =>
                            (0, a.jsx)(
                                "div",
                                {
                                    style: { width: N },
                                    children: (0, a.jsx)(eW, {
                                        actionsDisabled: p,
                                        isNew: g.includes(e.id),
                                        onClick: n ?? s,
                                        onEdit: s,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${i}`,
                );
            },
            [C, E, N, p, g, n, s],
        ),
        F = i.useCallback(
            (e) => {
                let t = C[e];
                return t?.description != null ? 66 : 44;
            },
            [C],
        ),
        O = i.useCallback(
            (e) => {
                let t = C[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: tu.aE,
                              children: [
                                  (0, a.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(M.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tu.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [C],
        );
    return o || 0 !== C.length
        ? o
            ? (0, a.jsx)("div", { className: tu.dc, children: (0, a.jsx)(P.y, {}) })
            : (0, a.jsx)(D.A, {
                  listPadding: td,
                  renderListHeader: j ? () => (0, a.jsx)(ep, { onEdit: s }) : void 0,
                  listHeaderHeight: 520 * !!j,
                  renderRow: S,
                  renderSectionHeader: O,
                  rowCount: w,
                  rowCountBySection: k,
                  rowHeight: L + 68 + 16,
                  sectionHeaderHeight: F,
                  onResize: d,
              })
        : (0, a.jsx)(tr, { isEmptyBecauseQuery: l > 0 });
}
var tg = l(922016),
    tp = l(783977),
    tx = l(625903),
    tv = l(892547),
    tf = l(364522),
    tj = l(91871),
    ty = l.n(tj),
    tC = l(980707),
    tb = l(477782),
    tA = l(583650);
function tN(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            selectedYear: o,
            sortOrder: c,
            toggleUserId: u,
            setSelectedActivity: d,
            setSelectedGuildId: m,
            setSelectedYear: h,
            setSortOrder: g,
            clearFilters: p,
        } = (0, tc.Pu)(),
        x = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = W.default.getUser(e);
                        if (null != t) {
                            let a = t.globalName ?? t.username;
                            l.push({ userId: e, name: a });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        v = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e)
                        l.activity?.state != null && t.add(l.activity.state),
                            l.activity?.details != null && t.add(l.activity.details);
                    return Array.from(t).sort((e, t) => e.localeCompare(t));
                })(l),
            [l],
        ),
        f = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eP.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        j = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) {
                        let e = new Date(l.createdAt).getFullYear();
                        t.add(e);
                    }
                    return Array.from(t).sort((e, t) => t - e);
                })(l),
            [l],
        ),
        [y, C] = i.useState(""),
        [b, A] = i.useState(""),
        [N, E] = i.useState(""),
        k = i.useMemo(
            () => (0 === y.trim().length ? x : x.filter((e) => ty()(y.toLowerCase(), e.name.toLowerCase()))),
            [x, y],
        ),
        w = i.useMemo(
            () => (0 === b.trim().length ? f : f.filter((e) => ty()(b.toLowerCase(), e.name.toLowerCase()))),
            [f, b],
        ),
        L = i.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => ty()(N.toLowerCase(), e.toLowerCase()))),
            [v, N],
        ),
        I = n.size > 0 || null != s || null != r || null != o,
        M = i.useMemo(() => {
            if (0 !== n.size)
                return x
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, x]),
        P = i.useMemo(() => {
            if (null == r) return;
            let e = f.find((e) => e.guildId === r);
            return e?.name;
        }, [r, f]),
        T = i.useMemo(() => s ?? void 0, [s]),
        D = i.useMemo(() => (null != o ? String(o) : void 0), [o]);
    return (0, a.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ei.intl.string(ei.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(tb.rX, {
                label: "Filter",
                children: [
                    x.length > 0 &&
                        (0, a.jsxs)(tb.Dr, {
                            id: "participants",
                            label: ei.intl.string(ei.t.YQ6dJg),
                            subtext: M,
                            children: [
                                x.length > 20 &&
                                    (0, a.jsx)(tb.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tA.V, {
                                                ...e,
                                                query: y,
                                                onChange: C,
                                                ref: t,
                                                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                                            }),
                                    }),
                                k.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        tb.sL,
                                        { id: `participant-${t}`, label: l, action: () => u(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, a.jsxs)(tb.Dr, {
                            id: "servers",
                            label: ei.intl.string(ei.t["5qyruI"]),
                            subtext: P,
                            children: [
                                f.length > 20 &&
                                    (0, a.jsx)(tb.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tA.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(tb.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ei.intl.string(ei.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                w.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        tb.iD,
                                        {
                                            id: `server-${t}`,
                                            group: "server",
                                            label: l,
                                            action: () => m(t),
                                            checked: r === t,
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, a.jsxs)(tb.Dr, {
                            id: "activities",
                            label: ei.intl.string(ei.t.agRtPG),
                            subtext: T,
                            children: [
                                v.length > 20 &&
                                    (0, a.jsx)(tb.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tA.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(tb.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ei.intl.string(ei.t["2/yeUU"]),
                                    action: () => d(null),
                                    checked: null == s,
                                }),
                                L.map((e) =>
                                    (0, a.jsx)(
                                        tb.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => d(e),
                                            checked: s === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    j.length > 0 &&
                        (0, a.jsxs)(tb.Dr, {
                            id: "years",
                            label: ei.intl.string(ei.t.w9zd68),
                            subtext: D,
                            children: [
                                (0, a.jsx)(tb.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ei.intl.string(ei.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == o,
                                }),
                                j.map((e) =>
                                    (0, a.jsx)(
                                        tb.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => h(e),
                                            checked: o === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsxs)(tb.rX, {
                label: ei.intl.string(ei.t.XvNMNk),
                children: [
                    (0, a.jsx)(tb.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ei.intl.string(ei.t["4LLKx3"]),
                        action: () => g(S.mu.MOST_RECENT),
                        checked: c === S.mu.MOST_RECENT,
                    }),
                    (0, a.jsx)(tb.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ei.intl.string(ei.t["0gitSE"]),
                        action: () => g(S.mu.OLDEST),
                        checked: c === S.mu.OLDEST,
                    }),
                ],
            }),
            I &&
                (0, a.jsx)(tb.rX, {
                    children: (0, a.jsx)(tb.Dr, { id: "clear-filters", label: ei.intl.string(ei.t.FbDgiu), action: p }),
                }),
        ],
    });
}
var tE = l(174726);
let tk = i.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, tc.Pu)((e) => e.query),
            s = (0, tc.Pu)((e) => e.setQuery),
            r = (0, tc.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = (0, e3.bG)([te.Ay], () => te.Ay.getKeybindForAction(eB.hCu.SAVE_CLIP)),
            u = i.useCallback(() => {
                (0, e9.openUserSettings)(e8.X.CLIPS_PANEL);
            }, []),
            d = i.useCallback(() => s(""), [s]),
            g = null != c ? tt.dI(c.shortcut, !0) : null,
            p = i.useRef(null);
        return (0, a.jsxs)("div", {
            className: tE.aN,
            children: [
                (0, a.jsxs)("div", {
                    className: tE.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tE.Pe,
                            children: [
                                (0, a.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ei.intl.string(ei.t.z2jK6X),
                                }),
                                null != g && (0, a.jsx)(e6.e, { className: tE.P, shortcut: g }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tE.$s,
                            children: [
                                t &&
                                    (0, a.jsx)(o.m, {
                                        text: ei.intl.string(ei.t.X7yRDm),
                                        children: (0, a.jsx)(tg.Y, {
                                            position: "bottom",
                                            targetElementRef: p,
                                            renderPopout: (e) => (0, a.jsx)(tN, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, a.jsx)("div", {
                                                    ref: p,
                                                    children:
                                                        r > 0
                                                            ? (0, a.jsx)(U.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ei.intl.formatToPlainString(ea.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tp.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, a.jsx)(h.K, {
                                                                  icon: tp.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ei.intl.string(ei.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, a.jsx)(o.m, {
                                    text: ei.intl.string(ei.t["3D5yo/"]),
                                    children: (0, a.jsx)(h.K, {
                                        onClick: u,
                                        icon: tx.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ei.intl.string(ei.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                t &&
                    (0, a.jsx)("div", {
                        className: tE.MT,
                        children: (0, a.jsx)(tv.I, {
                            placeholder: ei.intl.string(ei.t["5h0QOP"]),
                            query: n,
                            onChange: s,
                            onClear: d,
                            size: "md",
                        }),
                    }),
            ],
        });
    }),
    tw = i.memo(function (e) {
        let { name: t, count: l, icon: i, isSelected: n, onClick: r } = e;
        return (0, a.jsxs)(z.D, {
            className: s()(tE.MV, { [tE.wH]: n }),
            onClick: r,
            children: [
                (0, a.jsxs)("div", {
                    className: tE.tk,
                    children: [
                        i,
                        (0, a.jsx)(M.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tE.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: tE.z2,
                    children: (0, a.jsx)(M.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tL(e) {
    let { gamesFacet: t, mainLinkCounts: l, allClips: n, withHeaderFilters: s } = e,
        r = (0, tc.Pu)((e) => e.gameFacet),
        o = (0, tc.Pu)((e) => e.activeMainLink),
        c = (0, tc.Pu)((e) => e.setGameFacet),
        u = (0, tc.Pu)((e) => e.setActiveMainLink),
        d = i.useMemo(() => t.map((e) => e.key), [t]),
        h = (0, V.A)(d),
        g = i.useMemo(() => new Map(h.map((e) => [e?.id, e])), [h]),
        p = i.useCallback(() => {
            u(S.oH.ALL_CLIPS), c(null);
        }, [u, c]),
        x = i.useCallback(() => {
            u(S.oH.FAVORITES), c(null);
        }, [u, c]),
        v = i.useCallback(
            (e) => {
                c(e), u(S.oH.ALL_CLIPS);
            },
            [c, u],
        ),
        f = null == r && o === S.oH.ALL_CLIPS,
        j = null == r && o === S.oH.FAVORITES;
    return (0, a.jsxs)("div", {
        className: tE.pz,
        children: [
            (0, a.jsx)(tk, { withHeaderFilters: s, allClips: n }),
            (0, a.jsxs)("div", {
                className: tE.wp,
                children: [
                    (0, a.jsx)("div", {
                        className: tE.om,
                        children: (0, a.jsxs)("div", {
                            className: tE.Ep,
                            children: [
                                (0, a.jsx)(tw, {
                                    name: ei.intl.string(ei.t.dPVrEv),
                                    count: l.allClips,
                                    icon: (0, a.jsx)(eN.x, {}),
                                    isSelected: f,
                                    onClick: p,
                                }),
                                (0, a.jsx)(tw, {
                                    name: ei.intl.string(ei.t["9rlCk1"]),
                                    count: l.favorites,
                                    icon: (0, a.jsx)(G.G, {}),
                                    isSelected: j,
                                    onClick: x,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, a.jsxs)(tf.Ip, {
                            className: tE.om,
                            fade: !0,
                            children: [
                                (0, a.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tE.a9,
                                    children: ei.intl.string(ei.t.URyqtP),
                                }),
                                (0, a.jsx)("div", {
                                    className: tE.Ep,
                                    children: t.map((e) =>
                                        (0, a.jsx)(
                                            tw,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, a.jsx)(B.A, { game: g.get(e.key), size: B.M.XSMALL }),
                                                isSelected: e.isSelected,
                                                onClick: () => v(e.key),
                                            },
                                            e.key,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var tS = l(847374),
    tI = l(548118),
    tM = l(103552),
    tP = l(914427),
    tT = l(213424);
function tD(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: n,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        u = i.useRef(null),
        d = i.useMemo(() => new Set(n), [n]),
        m = i.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => ty()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, a.jsxs)(
                            tM.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, a.jsx)("span", { className: tT.H, children: e.icon }),
                                    (0, a.jsx)(tM.x4.Label, { children: e.label }),
                                    r ? (0, a.jsx)(tM.x4.Checkbox, {}) : (0, a.jsx)(tM.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, a.jsx)(tg.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(tP.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? ei.intl.string(ei.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, a.jsx)(U.$, {
                ...e,
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tS.a,
                iconPosition: "end",
            }),
    });
}
var tR = l(789645),
    tF = l(941886);
function tO(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: n } = e;
    return (0, a.jsxs)("div", {
        className: tF.Io,
        children: [
            null != l && (0, a.jsx)("span", { className: tF.Kk, children: l }),
            (0, a.jsx)(M.E, {
                className: tF.Pf,
                variant: "text-sm/medium",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, a.jsx)(z.D, {
                className: tF.DT,
                onClick: i,
                "aria-label": n ?? ei.intl.string(ei.t.N86XcP),
                children: (0, a.jsx)(tR.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t_ = l(841765);
function tz() {
    let e = (0, tc.Pu)((e) => e.sortOrder),
        t = (0, tc.Pu)((e) => e.setSortOrder),
        l = i.useRef(null),
        n = e === S.mu.OLDEST ? ei.intl.string(ei.t["0gitSE"]) : ei.intl.string(ei.t["4LLKx3"]);
    return (0, a.jsx)(tg.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, a.jsx)(tC.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ei.intl.string(ei.t.XvNMNk),
                onClose: i,
                onSelect: void 0,
                children: (0, a.jsxs)(tb.rX, {
                    children: [
                        (0, a.jsx)(tb.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ei.intl.string(ei.t["4LLKx3"]),
                            action: () => {
                                t(S.mu.MOST_RECENT), i();
                            },
                            checked: e === S.mu.MOST_RECENT,
                        }),
                        (0, a.jsx)(tb.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ei.intl.string(ei.t["0gitSE"]),
                            action: () => {
                                t(S.mu.OLDEST), i();
                            },
                            checked: e === S.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(U.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: n,
                icon: tS.a,
                iconPosition: "end",
            }),
    });
}
function tG(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tc.Pu)((e) => e.query),
        r = (0, tc.Pu)((e) => e.setQuery),
        o = (0, tc.Pu)((e) => e.gameFacet),
        c = (0, tc.Pu)((e) => e.clippedWithFacet),
        u = (0, tc.Pu)((e) => e.selectedGameIds),
        d = (0, tc.Pu)((e) => e.selectedUserIds),
        m = (0, tc.Pu)((e) => e.selectedGuildId),
        h = (0, tc.Pu)((e) => e.selectedActivity),
        g = (0, tc.Pu)((e) => e.selectedYear),
        p = (0, tc.Pu)((e) => e.toggleGameId),
        x = (0, tc.Pu)((e) => e.toggleUserId),
        v = (0, tc.Pu)((e) => e.setSelectedGuildId),
        f = (0, tc.Pu)((e) => e.setSelectedActivity),
        j = (0, tc.Pu)((e) => e.setSelectedYear),
        y = i.useMemo(() => l.map((e) => e.key), [l]),
        C = (0, V.A)(y),
        b = i.useMemo(() => new Map(C.map((e) => [e?.id, e])), [C]),
        A = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, a.jsx)(B.A, { game: b.get(e.key), size: B.M.XSMALL }),
                })),
            [l, b],
        ),
        N = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) t.add(new Date(l.createdAt).getFullYear());
                    return Array.from(t).sort((e, t) => t - e);
                })(t).map((e) => ({ key: String(e), label: String(e) })),
            [t],
        ),
        E = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eP.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        k = i.useMemo(
            () =>
                E.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, a.jsx)(tI.Ay, { guild: e.guild, size: tI.Ay.Sizes.MINI }),
                })),
            [E],
        ),
        w = i.useMemo(() => new Map(E.map((e) => [e.key, e.guild])), [E]),
        L = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e)
                        l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                            l.activity?.details != null && "" !== l.activity.details && t.add(l.activity.details);
                    return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                })(t).map((e) => ({ key: e, label: e })),
            [t],
        ),
        S = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = W.default.getUser(l.key);
                        null != e &&
                            t.push({
                                key: l.key,
                                label: e.globalName ?? e.username,
                                avatarUrl: e.getAvatarURL(null, 32),
                            });
                    }
                    return t.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), t;
                })(n).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, a.jsx)(Q.eu, { src: e.avatarUrl, size: $._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        I = i.useMemo(() => (null != g ? new Set([String(g)]) : new Set()), [g]),
        M = i.useMemo(() => (null != m ? new Set([m]) : new Set()), [m]),
        P = i.useMemo(() => (null != h ? new Set([h]) : new Set()), [h]),
        T = i.useCallback(
            (e) => {
                let t = Number(e);
                j(g === t ? null : t);
            },
            [g, j],
        ),
        D = i.useCallback(
            (e) => {
                v(m === e ? null : e);
            },
            [m, v],
        ),
        R = i.useCallback(
            (e) => {
                f(h === e ? null : e);
            },
            [h, f],
        ),
        F = null == o,
        O = null == c,
        _ = (0, a.jsxs)(a.Fragment, {
            children: [
                F &&
                    Array.from(u).map((e) => {
                        let t = A.find((t) => t.key === e);
                        return (0, a.jsx)(
                            tO,
                            {
                                label: t?.label ?? e,
                                icon: (0, a.jsx)(B.A, { game: b.get(e), size: B.M.XSMALL }),
                                onRemove: () => p(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != g && (0, a.jsx)(tO, { label: String(g), onRemove: () => j(null) }, "year"),
                null != m &&
                    (0, a.jsx)(
                        tO,
                        {
                            label: k.find((e) => e.key === m)?.label ?? m,
                            icon:
                                null != w.get(m)
                                    ? (0, a.jsx)(tI.Ay, { guild: w.get(m), size: tI.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => v(null),
                        },
                        "guild",
                    ),
                O && Array.from(d).map((e) => (0, a.jsx)(tH, { userId: e, onRemove: () => x(e) }, `user-${e}`)),
                null != h && (0, a.jsx)(tO, { label: h, onRemove: () => f(null) }, "activity"),
            ],
        }),
        z = (F && u.size > 0) || null != g || null != m || (O && d.size > 0) || null != h;
    return (0, a.jsxs)("div", {
        className: t_.kT,
        children: [
            (0, a.jsxs)("div", {
                className: t_.HL,
                children: [
                    (0, a.jsx)("div", {
                        className: t_.MT,
                        children: (0, a.jsx)(tv.I, {
                            placeholder: ei.intl.string(ei.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: t_.Zq,
                        children: [
                            F &&
                                A.length > 0 &&
                                (0, a.jsx)(tD, {
                                    triggerLabel: ei.intl.string(ei.t.URyqtP),
                                    options: A,
                                    selectedKeys: u,
                                    onToggle: p,
                                    multiSelect: !0,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            N.length > 0 &&
                                (0, a.jsx)(tD, {
                                    triggerLabel: ei.intl.string(ei.t.w9zd68),
                                    options: N,
                                    selectedKeys: I,
                                    onToggle: T,
                                    multiSelect: !1,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            k.length > 0 &&
                                (0, a.jsx)(tD, {
                                    triggerLabel: ei.intl.string(ei.t["5qyruI"]),
                                    options: k,
                                    selectedKeys: M,
                                    onToggle: D,
                                    multiSelect: !1,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            O &&
                                S.length > 0 &&
                                (0, a.jsx)(tD, {
                                    triggerLabel: ei.intl.string(ei.t.YQ6dJg),
                                    options: S,
                                    selectedKeys: d,
                                    onToggle: (e) => x(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            L.length > 0 &&
                                (0, a.jsx)(tD, {
                                    triggerLabel: ei.intl.string(ei.t.agRtPG),
                                    options: L,
                                    selectedKeys: P,
                                    onToggle: R,
                                    multiSelect: !1,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: t_.QZ, children: (0, a.jsx)(tz, {}) }),
                ],
            }),
            z && (0, a.jsx)("div", { className: t_.eH, children: _ }),
        ],
    });
}
function tH(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, r.bG)([W.default], () => W.default.getUser(t), [t]);
    if (null == i) return null;
    let n = i.globalName ?? i.username;
    return (0, a.jsx)(tO, {
        label: n,
        icon: (0, a.jsx)(Q.eu, { src: i.getAvatarURL(null, 32), size: $._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tU = l(409067),
    tK = l(847455);
let tQ = i.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function t$(e) {
    let { channelId: t, onClose: n, onClipClick: C, transitionState: I, initialEditingClipId: M, ...P } = e;
    (0, L.A)();
    let { analyticsLocations: T } = (0, j.Ay)(f.A.CLIPS_GALLERY),
        [D, R] = i.useState(new Set()),
        { gamesFacet: F, participantsFacet: O, filteredClips: _, mainLinkCounts: z, allClips: G } = (0, tU.a)(),
        { enabled: H } = b.useConfig({ location: "ClipsGalleryModal" }),
        { onShareClick: U } = (0, w.A)(t);
    i.useEffect(
        () => () => {
            tc.Pu.getState().resetAll();
        },
        [],
    );
    let K = (0, r.bG)([y.Ay], () => y.Ay.getExportingClipIds().length > 0),
        [Q, $] = i.useState(null != M ? "editing" : "gallery"),
        [Y, V] = i.useState(M ?? null),
        X = (0, r.bG)([y.Ay], () => (null != Y ? y.Ay.getClipById(Y) : null), [Y]),
        B = i.useRef(Q);
    (B.current = Q), (i.useRef(Y).current = Y);
    let [q, W] = i.useState(null != M ? u.ip.ENTERED : u.ip.HIDDEN),
        Z = i.useRef(null),
        J = (0, tc.Pu)((e) => e.gameFacet),
        ee = (0, tc.Pu)((e) => e.activeMainLink),
        et = i.useMemo(
            () =>
                null != J
                    ? (F.find((e) => e.key === J)?.name ?? ei.intl.string(ei.t.dPVrEv))
                    : ee === S.oH.FAVORITES
                      ? ei.intl.string(ei.t["9rlCk1"])
                      : ei.intl.string(ei.t.dPVrEv),
            [J, ee, F],
        ),
        el = i.useCallback(() => {
            $("editing"), v.A.useReducedMotion && W(u.ip.ENTERED);
        }, []),
        ea = i.useCallback((e) => {
            R((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        en = i.useCallback(
            (e) => {
                V(e.id), el();
            },
            [el],
        ),
        es = i.useCallback(() => {
            v.A.useReducedMotion && V(null), $("gallery");
        }, []);
    i.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === B.current && (e.stopPropagation(), es());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [es, n]),
        i.useEffect(
            () =>
                "editing" === Q && null != Y
                    ? void (0, A.YK)(Y)
                    : ((0, A.jA)(),
                      () => {
                          (0, A.jA)();
                      }),
            [Q, Y],
        );
    let er = i.useCallback(() => {
            R(new Set());
        }, []),
        eo = D.size > 0,
        ec = i.useCallback(() => {
            let e = G.filter((e) => D.has(e.id));
            (0, d.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                er(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [G, D, er]),
        eu = i.useCallback(async () => {
            let e = G.filter((e) => D.has(e.id));
            await U({ clips: e }), er();
        }, [G, D, U, er]),
        ed = i.useMemo(
            () => ({ selectedClipIds: D, toggleClipSelection: ea, clearSelection: er, isMultiSelectMode: eo }),
            [D, ea, er, eo],
        );
    return (0, a.jsx)(j.f5, {
        value: T,
        children: (0, a.jsx)(tQ.Provider, {
            value: ed,
            children: (0, a.jsx)(c.N, {
                onClose: n,
                transitionState: I,
                ...P,
                children: (0, a.jsxs)("div", {
                    className: tK.jT,
                    ref: Z,
                    children: [
                        (0, a.jsxs)("div", {
                            className: s()(tK.PD, "gallery" === Q && tK.vu),
                            inert: "gallery" !== Q,
                            children: [
                                (0, a.jsx)(tL, {
                                    gamesFacet: F,
                                    participantsFacet: O,
                                    mainLinkCounts: z,
                                    allClips: G,
                                    withHeaderFilters: !H,
                                }),
                                (0, a.jsxs)("div", {
                                    className: tK.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: tK.$Q,
                                            children: [
                                                (0, a.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: et,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: tK.$s,
                                                    children: [
                                                        eo &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(o.m, {
                                                                        text: ei.intl.string(ei.t.RDE0Sc),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: eu,
                                                                            icon: g.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ei.intl.string(ei.t.RDE0Sc),
                                                                            loading: K,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(o.m, {
                                                                        text: ei.intl.string(ei.t.oyYWHE),
                                                                        children: (0, a.jsx)(h.K, {
                                                                            onClick: ec,
                                                                            icon: p.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ei.intl.string(ei.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(h.K, {
                                                            onClick: n,
                                                            icon: x.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ei.intl.string(ei.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        H && (0, a.jsx)(tG, { allClips: G, gamesFacet: F, participantsFacet: O }),
                                        (0, a.jsx)(th, {
                                            onEdit: en,
                                            channelId: t,
                                            filteredClips: _,
                                            totalClipCount: G.length,
                                            onClipClick: C,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: s()(tK.jN, "editing" === Q && tK.vu),
                            inert: "editing" !== Q,
                            onTransitionEnd: () => {
                                "gallery" === Q ? (V(null), W(u.ip.HIDDEN)) : "editing" === Q && W(u.ip.ENTERED);
                            },
                            children:
                                null != X &&
                                (0, a.jsxs)(k.p, {
                                    clip: X,
                                    modalContainerRef: Z,
                                    children: [
                                        (0, a.jsx)(N.A, { transitionState: q, onClose: es }),
                                        (0, a.jsx)(E.A, { channelId: t, onClose: es }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
