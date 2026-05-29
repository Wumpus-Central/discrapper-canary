l.d(t, { $: () => ln, default: () => ls });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    o = l(990078),
    u = l(521489),
    c = l(231723),
    d = l(97808),
    m = l(778712),
    g = l(192308),
    h = l(534514),
    p = l(408278),
    x = l(405433),
    f = l(241326),
    j = l(972213),
    v = l(775602),
    y = l(793574),
    C = l(688810),
    b = l(429913),
    k = l(137177),
    A = l(287809),
    N = l(274372),
    L = l(945810);
let I = (0, L.mj)({
    kind: "user",
    name: "2026-05-clips-gallery-home",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var E = l(315240),
    w = l(582633),
    S = l(309777),
    P = l(429364),
    M = l(352527),
    D = l(280483),
    T = l(111994);
l(321073);
var F = l(562708),
    R = l(834730),
    z = l(289873),
    _ = l(139286),
    H = l(962125);
let O = (0, L.mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var G = l(175841),
    U = l(449543),
    K = l(152858),
    V = l(939249),
    Q = l(27232),
    W = l(505930),
    X = l(821609),
    $ = l(933832),
    Y = l(22231),
    B = l(607470),
    q = l(495544),
    Z = l(427262),
    J = l(372684),
    ee = l(140423),
    et = l(602902),
    el = l(665039),
    ei = l(16590),
    ea = l(375708),
    en = l(296364);
let es = ["clowning around", "good times", "team vibes", "epic teamwork"];
function er(e) {
    let { clip: t, moment: l, onEdit: n, onHoverChange: s } = e,
        u = (0, el.j)(t),
        { analyticsLocations: c } = (0, C.Ay)(),
        g = (0, b.h)(t.applicationId),
        j = q.default.getId(),
        v = (0, r.bG)([A.default], () => {
            let e = t.users.find((e) => e !== j);
            return null != e ? A.default.getUser(e) : null;
        }, [t.users, j]),
        y = null != v,
        N = (0, Z.tx)(v),
        { Icon: L } = l,
        I = y ? ea.intl.formatToPlainString(ei.default.QJ7i8Z, { username: N }) : l.title,
        w = y ? es[t.id.charCodeAt(0) % es.length] : l.subtitle,
        S = t.type === J.nQ.SCREENSHOT,
        P = t.type === J.nQ.VOICE_CLIP,
        M = !S && !P && null != u,
        D = a.useRef(null),
        T = "" !== t.thumbnail ? t.thumbnail : null,
        F = a.useCallback(() => {
            s?.(T);
            let e = D.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, T]),
        z = a.useCallback(
            (e) => {
                s?.(null);
                let l = D.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let i = document.activeElement;
                null != i && e.currentTarget.contains(i) && !i.matches(":focus-visible") && i.blur();
            },
            [t.editMetadata?.start, s],
        ),
        _ = a.useCallback(() => {
            s?.(T);
            let e = D.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, T]),
        H = a.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                s?.(null);
                let l = D.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start, s],
        ),
        O = a.useCallback(
            (e) => {
                e.stopPropagation(), n(t);
            },
            [n, t],
        ),
        G = a.useCallback(() => {
            n(t);
        }, [n, t]),
        U = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, et.K)([t], { analyticsLocations: c });
            },
            [t, c],
        ),
        K = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, E.w7)(t.id);
            },
            [t.id],
        ),
        er = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, ee.R)({ clips: [t] });
            },
            [t],
        ),
        eo = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, E.XK)(t);
            },
            [t],
        ),
        eu = !0 !== t.isTemporary,
        ec = ea.intl.string(!0 === t.isFavorite ? ei.default.IZsalP : ei.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: en.Ui,
        onMouseEnter: F,
        onMouseLeave: z,
        onFocus: _,
        onBlur: H,
        children: (0, i.jsxs)(V.D, {
            className: en.Nr,
            "aria-label": ea.intl.string(ea.t.bt75uw),
            onClick: G,
            children: [
                (0, i.jsxs)("div", {
                    className: en.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: en.xn })
                            : (0, i.jsx)("div", { className: en.$$ }),
                        M
                            ? (0, i.jsx)(B.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: u ?? void 0,
                                  className: en.xn,
                                  ref: D,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: en.D7 }),
                null != g &&
                    (0, i.jsx)("div", {
                        className: en.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(k.A, { game: g, size: k.M.XXSMALL, className: en.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: en.Nv,
                    children: [
                        eu
                            ? (0, i.jsx)(
                                  o.m,
                                  {
                                      text: ec,
                                      position: "top",
                                      children: (0, i.jsx)(p.K, {
                                          onClick: eo,
                                          icon: !0 === t.isFavorite ? Q.G : W.y,
                                          "aria-label": ec,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(X.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: $.A,
                                  text: ea.intl.string(ea.t["R3BPH+"]),
                                  onClick: K,
                              }),
                        (0, i.jsx)(o.m, {
                            text: ea.intl.string(ea.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(p.K, {
                                onClick: er,
                                icon: f.u,
                                "aria-label": ea.intl.string(ea.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: en.Lw,
                    children: [
                        y && null != v
                            ? (0, i.jsx)(d.eu, {
                                  src: v.getAvatarURL(void 0, 32),
                                  size: m._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: en.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(L, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(h.D, { variant: "heading-md/extrabold", color: "always-white", children: I }),
                        (0, i.jsx)(R.E, { variant: "text-sm/medium", color: "always-white", children: w }),
                        (0, i.jsx)("div", { className: en.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: en.o1,
                    children: [
                        (0, i.jsx)(X.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: Y.R,
                            text: ea.intl.string(ea.t.bt75uw),
                            onClick: O,
                        }),
                        (0, i.jsx)(X.$, {
                            variant: "primary",
                            size: "sm",
                            icon: x.l,
                            text: ea.intl.string(ea.t.RDE0Sc),
                            onClick: U,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eo = l(369606),
    eu = l(845798),
    ec = l(825860),
    ed = l(926268);
let em = [
    { Icon: G.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: eo.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: eu.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: ec.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: Q.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: ed.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eh = l(452143);
function ep(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([N.Ay], () => N.Ay.getClips()),
        n = a.useMemo(() => eg(l), [l]),
        s = a.useMemo(
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
        { backgroundComponent: o, handleHoverChange: u } = (function () {
            let [e, t] = a.useState({ previousThumbnail: null, thumbnail: null }),
                l = a.useRef(null);
            a.useEffect(
                () => () => {
                    null != l.current && window.clearTimeout(l.current);
                },
                [],
            );
            let n = a.useCallback((e) => {
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
                backgroundComponent: (0, i.jsxs)(i.Fragment, {
                    children: [
                        null != e.previousThumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.previousThumbnail, className: eh.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${eh.Tp} ${eh.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })();
    return 0 === n.length
        ? null
        : (0, i.jsxs)("section", {
              className: eh.uW,
              "aria-label": ea.intl.string(ei.default.efLpNC),
              children: [
                  o,
                  (0, i.jsxs)("div", {
                      className: eh.wx,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eh.UP,
                              children: [
                                  (0, i.jsx)(G.B, { size: "refresh_sm", color: "white" }),
                                  (0, i.jsx)(R.E, {
                                      variant: "text-md/medium",
                                      color: "always-white",
                                      children: ea.intl.string(ei.default.I1h8uD),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(h.D, {
                              variant: "display-md",
                              color: "always-white",
                              children: ea.intl.string(ei.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(U.A, {
                      className: eh.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: K.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": ea.intl.string(ei.default.efLpNC),
                      children: n.map((e, l) =>
                          (0, i.jsx)(er, { clip: e, moment: s[l], onEdit: t, onHoverChange: u }, e.id),
                      ),
                  }),
              ],
          });
}
var ex = l(989349),
    ef = l.n(ex),
    ej = l(66455),
    ev = l(342952),
    ey = l(890856),
    eC = l(777666),
    eb = l(530005),
    ek = l(406810),
    eA = l(176781),
    eN = l(661531),
    eL = l(983851),
    eI = l(31300),
    eE = l(442433),
    ew = l(587895),
    eS = l(47167),
    eP = l(734057),
    eM = l(71393),
    eD = l(549685),
    eT = l(174459),
    eF = l(58703),
    eR = l(403362),
    ez = l(974293),
    e_ = l(226421),
    eH = l(284009),
    eO = l.n(eH),
    eG = l(460905),
    eU = l(713608),
    eK = l(562153),
    eV = l(788332);
function eQ(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eO()(l?.type === J.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([A.default], () => A.default.getUser(l.remoteTriggerUserId)),
        n = (0, eK.tx)(t.guildId, null, a);
    return null == a
        ? null
        : (0, i.jsx)(o.m, {
              text: ea.intl.string(ei.default.vTTkFF),
              children: (0, i.jsxs)("div", {
                  className: eV.S,
                  children: [
                      (0, i.jsx)("img", { src: a.getAvatarURL(t.guildId, 12, !1), className: eV.$, alt: n }),
                      (0, i.jsx)(R.E, {
                          color: "always-white",
                          variant: "text-xs/bold",
                          children: ea.intl.formatToPlainString(ei.default.QJ7i8Z, { username: n }),
                      }),
                  ],
              }),
          });
}
function eW(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(o.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eV.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(R.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eX(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === J.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case J.Gy.DISTRIBUTED:
            return (0, i.jsx)(eQ, { clip: t });
        case J.Gy.LAUGHTER:
            return (0, i.jsx)(eW, {
                icon: eG.n,
                text: ea.intl.string(ei.default.bTC23D),
                tooltipText: ea.intl.string(ei.default["ry+jxm"]),
            });
        case J.Gy.GAME_EVENT:
            return (0, i.jsx)(eW, {
                icon: eU.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ea.intl.string(ei.default["347DBb"]),
            });
        default:
            return null;
    }
}
var e$ = l(718812),
    eY = l(652215),
    eB = l(798594);
let eq = function (e) {
    let { clip: t, actionsDisabled: n, isNew: o, onEdit: u, onClick: c } = e,
        d = (0, r.yK)([A.default], () => t.users.map((e) => A.default.getUser(e)).filter(eR.Vq)),
        g = (0, r.bG)([eP.A], () => (null != t.channelId ? eP.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([eM.A], () => (null != t.guildId ? eM.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, C.Ay)(y.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: f, isMultiSelectMode: j } = a.useContext(ln),
        [v, b] = a.useState(!1),
        k = a.useRef(null),
        L = (0, ej.A)(t.editMetadata?.start ?? 0),
        I = x.has(t.id),
        E = t.type === J.nQ.SCREENSHOT,
        w = (0, eS.Ay)(g),
        S = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        P = (0, eF.Fe)(new Date(t.createdAt)),
        M = a.useMemo(() => {
            let e = [];
            return (
                t.type === J.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != w && e.push(w))
                    : ("" !== S && null != S && e.push(S),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [S, h?.name, w, t.activity?.state, t.activity?.details, t.type]),
        D = a.useCallback(() => {
            let e = k.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        T = a.useCallback(() => {
            if (!0 === E) return;
            let e = k.current;
            null != e && e.paused && ((e.currentTime = L.current), k.current?.play());
        }, [E, L]),
        F = a.useCallback(() => {
            if (!0 === E) return;
            let e = k.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [E, t.editMetadata?.start]),
        z = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || F();
            },
            [F],
        ),
        _ = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        H = a.useCallback(() => {
            b(!1);
        }, []),
        O = a.useCallback(
            (e) => {
                b(!0), k.current?.pause();
                let a =
                    j && x.size > 0
                        ? Array.from(x)
                              .map((e) => N.Ay.getClipById(e))
                              .filter(eR.Vq)
                        : [t];
                (0, eE.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("36198"),
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
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: n,
                                onShare: () => {
                                    eT.default.track(eY.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, ez.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    u(t),
                                        eT.default.track(eY.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, ez.GN)(),
                                        });
                                },
                                onBeforeDelete: D,
                                onAfterDelete: () => {
                                    eT.default.track(eY.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, ez.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: H },
                );
            },
            [t, j, x, n, D, H, u],
        ),
        G = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), O(e));
            },
            [n, O],
        ),
        U = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), f(t.id)) : j ? f(t.id) : null != c && c(t),
                    eT.default.track(eY.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, ez.GN)() }));
            },
            [n, j, f, t, c],
        );
    return (0, i.jsx)(C.f5, {
        value: p,
        children: (0, i.jsx)("div", {
            className: eB.o8,
            onBlur: z,
            children: (0, i.jsxs)(ey.s, {
                "aria-disabled": n,
                "aria-label": ea.intl.string(!0 === E ? ea.t["HO/oXl"] : ea.t.bt75uw),
                onClick: n ? void 0 : U,
                onContextMenu: G,
                className: s()(eB.QN, { [eB.r9]: n, [eB.in]: v, [eB.wH]: I }),
                onFocus: T,
                onMouseOver: T,
                onMouseLeave: F,
                children: [
                    (0, i.jsx)(eZ, { clip: t, isNew: o, videoRef: k, onOpenContextMenu: O, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: eB.wI,
                        children: [
                            (0, i.jsx)(e1, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: eB.i0,
                                children: [
                                    (0, i.jsx)(eJ, { clip: t }),
                                    (0, i.jsx)(R.E, {
                                        className: eB.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: M,
                                    }),
                                    (0, i.jsx)(R.E, {
                                        className: eB.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: P,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: eB.jW,
                                children: (0, i.jsx)(ev.A, {
                                    maxUsers: 3,
                                    users: d,
                                    size: m._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && T());
                                    },
                                    onClickOverflow: _,
                                    "aria-label": ea.intl.string(ea.t.WTozwe),
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
        u = 0 === t.length,
        c = !0 === t.pending,
        [d, m] = a.useState(0);
    a.useEffect(() => {
        let e = n.current;
        if (null == e || u) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    n = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - a) / (n - a)) * 100;
                m(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(i));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [n, u, t.editMetadata]);
    let { durationDisplay: g, isClipEdited: h } = a.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                i = !1;
            if (null != t.editMetadata) {
                let a = null != l && 1e3 * l < t.length,
                    n =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (i = a || n), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let a = ef().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        x = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), E.XK(t);
            },
            [t],
        ),
        f = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, i.jsxs)("div", {
        className: eB.QB,
        children: [
            (0, i.jsx)("div", { className: eB.ne }),
            (0, i.jsx)(e0, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eB.ry,
                children: [
                    !c && l && (0, i.jsx)(eC.Lp, { text: ea.intl.string(ea.t.y2b7CA) }),
                    (0, i.jsx)(eX, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eB.g3,
                    children: [
                        (0, i.jsx)(o.m, {
                            text: ea.intl.string(t.isFavorite ? ei.default.IZsalP : ei.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(p.K, {
                                onClick: x,
                                icon: t.isFavorite ? Q.G : W.y,
                                "aria-label": ea.intl.string(ea.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(p.K, {
                            onClick: f,
                            icon: eb.F,
                            "aria-label": ea.intl.string(ea.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: eB.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eB.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(ek.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(R.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ea.intl.string(ea.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !u &&
                        (0, i.jsxs)("div", {
                            className: eB.OH,
                            children: [
                                h && (0, i.jsx)(eD.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(R.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: c ? ea.intl.string(ea.t["2Fp7OP"]) : g,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !u &&
                d > 0 &&
                (0, i.jsx)("div", {
                    className: eB.X7,
                    children: (0, i.jsx)("div", { className: eB.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eJ(e) {
    let { clip: t } = e,
        l = (0, e$.h)(t),
        a = "" !== l;
    return (0, i.jsx)(R.E, {
        className: eB.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function e0(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, el.j)(t),
        n = t.type === J.nQ.SCREENSHOT;
    return t.type === J.nQ.VOICE_CLIP
        ? (0, i.jsx)(e_.A, { className: eB.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eB.fT })
          : null != a
            ? (0, i.jsx)(B.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eB.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eB.fT })
              : (0, i.jsx)("div", {
                    className: s()(eB.fT, eB.Is),
                    children: (0, i.jsx)(eA.x, { color: eN.A.colors.ICON_MUTED }),
                });
}
function e1(e) {
    let { clip: t } = e,
        l = (0, r.bG)([ew.A], () => (null != t.applicationId ? ew.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eB.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eB.NH })
                : t.type === J.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eL.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eI.k, { size: "sm", color: "currentColor" }),
    });
}
function e2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: n, width: s = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: n ?? "img",
    });
}
var e3 = l(702841),
    e9 = l(687966),
    e7 = l(475358),
    e5 = l(123292),
    e6 = l(292801),
    e4 = l(780964),
    e8 = l(766075),
    te = l(532624),
    tt = l(350535),
    tl = l(572164),
    ti = l(953932),
    ta = l(311162);
function tn(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ta.Nr,
        children: [t, (0, i.jsx)(R.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ts() {
    let e = (0, e3.bG)([te.Ay], () => te.Ay.getKeybindForAction(eY.hCu.SAVE_CLIP)),
        t = null != e ? tt.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: ta.kR,
        children: [
            (0, i.jsx)(tn, {
                header: (0, i.jsx)(e9._, { size: "refresh_sm", color: eN.A.colors.ICON_DEFAULT }),
                description: ea.intl.string(ei.default["4K56sP"]),
            }),
            (0, i.jsx)(tn, {
                header: null != t ? (0, i.jsx)(e7.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ea.intl.format(ei.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: ta.JH,
                                      children: (0, i.jsx)(e5.Q, {
                                          text: ea.intl.string(ei.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, e8.openUserSettings)(e4.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ea.intl.string(ei.default.HOUDUm),
            }),
            (0, i.jsx)(tn, {
                header: (0, i.jsx)(e6.t, { size: "refresh_sm", color: eN.A.colors.ICON_DEFAULT }),
                description: ea.intl.string(ei.default.DLzdl7),
            }),
        ],
    });
}
function tr(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, tl.Et)();
    return (0, i.jsx)("div", {
        className: ta.kL,
        children: (0, i.jsxs)("div", {
            className: ta.Qs,
            children: [
                (0, i.jsx)(e2, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(h.D, {
                    className: ta.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ea.intl.string(ei.default["+M2iLf"]) : ea.intl.string(ei.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(R.E, {
                        className: ta.h_,
                        variant: "text-md/medium",
                        children: ea.intl.string(ei.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: ta.SO, children: (0, i.jsx)(ti.A, {}) }),
                l && !t && (0, i.jsx)(ts, {}),
            ],
        }),
    });
}
let to = 16 / 9;
var tu = l(792852),
    tc = l(352528);
let td = [0, 16, 0, 16],
    tm = td[1] + td[3];
function tg(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s } = e,
        [o, u] = a.useState(!0),
        [c, d] = a.useState({ width: 0, height: 0 }),
        m = (0, r.bG)([N.Ay], () => N.Ay.getSettings().storageLocation),
        g = (0, r.yK)([N.Ay], () => N.Ay.getNewClipIds()),
        p = (0, r.bG)([N.Ay], () => N.Ay.getExportingClipIds().length > 0),
        x = (0, r.bG)([N.Ay], () => eg(N.Ay.getClips()).length > 0),
        f = (0, tu.Pu)(tu.mp),
        j = (0, tu.Pu)((e) => e.activeMainLink),
        { enableAutoClipsReview: v } = O.useConfig({ location: "ClipsGalleryContent" }),
        y = v && x && !f && j === T.oH.HOME;
    (0, _.A)(
        {
            type: F.ImpressionTypes.MODAL,
            name: F.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: o },
        [t.length, o],
    );
    let C = a.useMemo(() => {
            let e = [],
                l = new Map(),
                i = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let n = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === n)) i.push(e);
                    else {
                        let i = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            a = l.get(i) ?? [];
                        l.set(i, [...a, e]);
                    }
                }),
                i.length > 0)
            ) {
                let t = i.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: ea.intl.string(ea.t["kB2R/0"]),
                    description: t ? ea.intl.string(ea.t["6AXirz"]) : void 0,
                    clips: i,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, i] = t;
                    e.push({ type: "monthyear", title: l, clips: i });
                }),
                e
            );
        }, [t]),
        { width: b } = c,
        { tileWidth: k, columns: A } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = b - tm) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, b]);
    a.useEffect(() => {
        !(async function () {
            u(!0);
            try {
                await E.Fb(m);
            } finally {
                u(!1);
            }
        })();
    }, [m]);
    let L = a.useMemo(() => C.map((e) => Math.ceil(e.clips.length / A)), [C, A]),
        I = a.useMemo(() => L.reduce((e, t) => e + t, 0), [L]),
        w = Math.floor(k / to),
        S = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = C[l];
                if (null == r) return null;
                let o = a * A,
                    u = r.clips.slice(o, o + A);
                return (0, i.jsx)(
                    "div",
                    {
                        className: tc.UX,
                        children: u.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: k },
                                    children: (0, i.jsx)(eq, {
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
                    `row-${l}-${a}`,
                );
            },
            [C, A, k, p, g, n, s],
        ),
        P = a.useCallback(
            (e) => {
                let t = C[e];
                return t?.description != null ? 66 : 44;
            },
            [C],
        ),
        M = a.useCallback(
            (e) => {
                let t = C[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: tc.aE,
                              children: [
                                  (0, i.jsx)(h.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(R.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tc.yV,
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
            ? (0, i.jsx)("div", { className: tc.dc, children: (0, i.jsx)(z.y, {}) })
            : (0, i.jsx)(H.A, {
                  listPadding: td,
                  renderListHeader: y ? () => (0, i.jsx)(ep, { onEdit: s }) : void 0,
                  listHeaderHeight: 520 * !!y,
                  renderRow: S,
                  renderSectionHeader: M,
                  rowCount: I,
                  rowCountBySection: L,
                  rowHeight: w + 68 + 16,
                  sectionHeaderHeight: P,
                  onResize: d,
              })
        : (0, i.jsx)(tr, { isEmptyBecauseQuery: l > 0 });
}
var th = l(922016),
    tp = l(783977),
    tx = l(625903),
    tf = l(892547),
    tj = l(364522),
    tv = l(91871),
    ty = l.n(tv),
    tC = l(980707),
    tb = l(477782),
    tk = l(583650);
function tA(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            dateFilter: o,
            sortOrder: u,
            toggleUserId: c,
            setSelectedActivity: d,
            setSelectedGuildId: m,
            setDateFilter: g,
            setSortOrder: h,
            clearFilters: p,
        } = (0, tu.Pu)(),
        x = a.useMemo(
            () =>
                (function (e) {
                    if (null == e || null == e.after || null == e.before) return null;
                    let t = new Date(e.after),
                        l = new Date(e.before);
                    return t.getFullYear() !== l.getFullYear() ||
                        0 !== t.getMonth() ||
                        1 !== t.getDate() ||
                        11 !== l.getMonth() ||
                        31 !== l.getDate()
                        ? null
                        : t.getFullYear();
                })(o),
            [o],
        ),
        f = a.useCallback(
            (e) => {
                null == e
                    ? g(null)
                    : g({
                          preset: "custom",
                          after: new Date(e, 0, 1, 0, 0, 0, 0).getTime(),
                          before: new Date(e, 11, 31, 23, 59, 59, 999).getTime(),
                      });
            },
            [g],
        ),
        j = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = A.default.getUser(e);
                        if (null != t) {
                            let i = t.globalName ?? t.username;
                            l.push({ userId: e, name: i });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        v = a.useMemo(
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
        y = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eM.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        C = a.useMemo(
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
        [b, k] = a.useState(""),
        [N, L] = a.useState(""),
        [I, E] = a.useState(""),
        w = a.useMemo(
            () => (0 === b.trim().length ? j : j.filter((e) => ty()(b.toLowerCase(), e.name.toLowerCase()))),
            [j, b],
        ),
        S = a.useMemo(
            () => (0 === N.trim().length ? y : y.filter((e) => ty()(N.toLowerCase(), e.name.toLowerCase()))),
            [y, N],
        ),
        P = a.useMemo(
            () => (0 === I.trim().length ? v : v.filter((e) => ty()(I.toLowerCase(), e.toLowerCase()))),
            [v, I],
        ),
        M = n.size > 0 || null != s || null != r || null != x,
        D = a.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        F = a.useMemo(() => {
            if (null == r) return;
            let e = y.find((e) => e.guildId === r);
            return e?.name;
        }, [r, y]),
        R = a.useMemo(() => s ?? void 0, [s]),
        z = a.useMemo(() => (null != x ? String(x) : void 0), [x]);
    return (0, i.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ea.intl.string(ea.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tb.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(tb.Dr, {
                            id: "participants",
                            label: ea.intl.string(ea.t.YQ6dJg),
                            subtext: D,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(tb.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tk.V, {
                                                ...e,
                                                query: b,
                                                onChange: k,
                                                ref: t,
                                                placeholder: ea.intl.string(ea.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tb.sL,
                                        { id: `participant-${t}`, label: l, action: () => c(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    y.length > 0 &&
                        (0, i.jsxs)(tb.Dr, {
                            id: "servers",
                            label: ea.intl.string(ea.t["5qyruI"]),
                            subtext: F,
                            children: [
                                y.length > 20 &&
                                    (0, i.jsx)(tb.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tk.V, {
                                                ...e,
                                                query: N,
                                                onChange: L,
                                                ref: t,
                                                placeholder: ea.intl.string(ea.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tb.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ea.intl.string(ea.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                S.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
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
                        (0, i.jsxs)(tb.Dr, {
                            id: "activities",
                            label: ea.intl.string(ea.t.agRtPG),
                            subtext: R,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tb.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tk.V, {
                                                ...e,
                                                query: I,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ea.intl.string(ea.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tb.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ea.intl.string(ea.t["2/yeUU"]),
                                    action: () => d(null),
                                    checked: null == s,
                                }),
                                P.map((e) =>
                                    (0, i.jsx)(
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
                    C.length > 0 &&
                        (0, i.jsxs)(tb.Dr, {
                            id: "years",
                            label: ea.intl.string(ea.t.w9zd68),
                            subtext: z,
                            children: [
                                (0, i.jsx)(tb.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ea.intl.string(ea.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == x,
                                }),
                                C.map((e) =>
                                    (0, i.jsx)(
                                        tb.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => f(e),
                                            checked: x === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tb.rX, {
                label: ea.intl.string(ea.t.XvNMNk),
                children: [
                    (0, i.jsx)(tb.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ea.intl.string(ea.t["4LLKx3"]),
                        action: () => h(T.mu.MOST_RECENT),
                        checked: u === T.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(tb.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ea.intl.string(ea.t["0gitSE"]),
                        action: () => h(T.mu.OLDEST),
                        checked: u === T.mu.OLDEST,
                    }),
                ],
            }),
            M &&
                (0, i.jsx)(tb.rX, {
                    children: (0, i.jsx)(tb.Dr, { id: "clear-filters", label: ea.intl.string(ea.t.FbDgiu), action: p }),
                }),
        ],
    });
}
var tN = l(332837),
    tL = l(724993);
function tI(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: o } = e,
        u = r && !n;
    return (0, i.jsxs)(V.D, {
        onClick: u ? void 0 : o,
        className: s()(tL.nM, { [tL.CZ]: n, [tL.lr]: u }),
        "aria-pressed": n,
        "aria-disabled": u,
        children: [
            (0, i.jsx)("span", { className: tL.aL, children: t }),
            (0, i.jsx)(R.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tL.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: tL.iP, children: a }),
        ],
    });
}
function tE() {
    let e = (0, r.bG)([te.Ay], () => te.Ay.getKeybindForAction(eY.hCu.SAVE_CLIP)),
        t = a.useCallback(() => {
            (0, e8.openUserSettings)(e4.X.CLIPS_PANEL);
        }, []),
        l = null != e ? tt.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tL.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tL.pR,
                children: [
                    (0, i.jsx)(h.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ea.intl.string(ea.t.z2jK6X),
                    }),
                    null != l && (0, i.jsx)(e7.e, { shortcut: l }),
                ],
            }),
            (0, i.jsx)(o.m, {
                text: ea.intl.string(ea.t["3D5yo/"]),
                children: (0, i.jsx)(p.K, {
                    onClick: t,
                    icon: tx.Z,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ea.intl.string(ea.t["3D5yo/"]),
                }),
            }),
        ],
    });
}
function tw(e) {
    let t,
        l,
        n,
        s,
        o,
        u,
        c,
        d,
        m,
        g,
        h,
        p,
        x,
        { mainLinkCounts: f } = e,
        j = (0, tu.Pu)((e) => e.activeMainLink),
        v =
            ((t = (0, tu.Pu)((e) => e.setActiveMainLink)),
            (l = (0, tu.Pu)((e) => e.setGameFacet)),
            (n = (0, tu.Pu)((e) => e.setClippedWithFacet)),
            (s = (0, tu.Pu)((e) => e.clearFilters)),
            (o = (0, tu.Pu)((e) => e.gameFacet)),
            (u = (0, tu.Pu)((e) => e.clippedWithFacet)),
            a.useCallback(
                (e) => {
                    let i = null != o || null != u;
                    t(e), i && (l(null), n(null), s());
                },
                [t, l, n, s, o, u],
            )),
        y = (0, tu.Pu)((e) => e.gameFacet),
        C = (0, tu.Pu)((e) => e.clippedWithFacet),
        b = null != y || null != C,
        k = (0, r.bG)([N.Ay], () => {
            let e = N.Ay.getLastClipsSession();
            return null != e && e.newClipIds.length > 0;
        });
    return (0, i.jsxs)("div", {
        className: tL.uW,
        children: [
            (0, i.jsx)(tI, {
                icon: (0, i.jsx)(tN.f, { size: "sm", color: "currentColor" }),
                label: ea.intl.string(ea.t.Ym2Ri6),
                trailer: k ? (0, i.jsx)(eC.Lp, { text: ea.intl.string(ea.t.y2b7CA) }) : null,
                isSelected: ((c = T.oH.HOME), !b && j === c),
                onClick: () => v(T.oH.HOME),
            }),
            (0, i.jsx)(tI, {
                icon: (0, i.jsx)(eA.x, { size: "sm", color: "currentColor" }),
                label: ea.intl.string(ea.t.dPVrEv),
                trailer: (0, i.jsx)(tS, { count: f.allClips }),
                isSelected: ((d = T.oH.ALL_CLIPS), !b && j === d),
                isDisabled: 0 === f.allClips && ((m = T.oH.ALL_CLIPS), !!b || j !== m),
                onClick: () => v(T.oH.ALL_CLIPS),
            }),
            (0, i.jsx)(tI, {
                icon: (0, i.jsx)(G.B, { size: "sm", color: "currentColor" }),
                label: ea.intl.string(ei.default.ikNKf1),
                trailer: (0, i.jsx)(tS, { count: f.autoClips }),
                isSelected: ((g = T.oH.AUTO_CLIPS), !b && j === g),
                isDisabled: 0 === f.autoClips && ((h = T.oH.AUTO_CLIPS), !!b || j !== h),
                onClick: () => v(T.oH.AUTO_CLIPS),
            }),
            (0, i.jsx)(tI, {
                icon: (0, i.jsx)(Q.G, { size: "sm", color: "currentColor" }),
                label: ea.intl.string(ea.t["9rlCk1"]),
                trailer: (0, i.jsx)(tS, { count: f.favorites }),
                isSelected: ((p = T.oH.FAVORITES), !b && j === p),
                isDisabled: 0 === f.favorites && ((x = T.oH.FAVORITES), !!b || j !== x),
                onClick: () => v(T.oH.FAVORITES),
            }),
        ],
    });
}
function tS(e) {
    let { count: t } = e;
    return (0, i.jsx)(R.E, { variant: "text-xs/semibold", color: "text-muted", tabularNumbers: !0, children: t });
}
function tP() {
    let e = (0, tu.Pu)((e) => e.setGameFacet),
        t = (0, tu.Pu)((e) => e.setClippedWithFacet),
        l = (0, tu.Pu)((e) => e.setActiveMainLink),
        i = (0, tu.Pu)((e) => e.clearFilters),
        n = (0, tu.Pu)((e) => e.gameFacet),
        s = (0, tu.Pu)((e) => e.clippedWithFacet);
    return a.useCallback(
        (a, r) => {
            if (null == r) return void ("game" === a ? e(null) : t(null));
            let o = null != n ? "game" : null != s ? "clippedWith" : "mainLink";
            "game" === a ? e(r) : t(r), o !== a && ("game" === a ? t(null) : e(null), l(T.oH.ALL_CLIPS), i());
        },
        [e, t, l, i, n, s],
    );
}
function tM(e) {
    let { initiatorsFacet: t } = e,
        l = (0, tu.Pu)((e) => e.clippedWithFacet),
        n = tP(),
        [r, o] = a.useState(!1),
        u = a.useMemo(
            () =>
                t
                    .map((e) => {
                        let t = A.default.getUser(e.key);
                        return null == t
                            ? null
                            : { ...e, name: t.globalName ?? t.username, avatarUrl: t.getAvatarURL(null, 32) };
                    })
                    .filter((e) => null != e),
            [t],
        );
    if (0 === u.length) return null;
    let c = u.length > 5,
        g = r || !c ? u : u.slice(0, 5);
    return (0, i.jsxs)(tj.Ip, {
        className: s()(tL.uW, tL.fC),
        fade: !0,
        children: [
            (0, i.jsx)(h.D, {
                variant: "heading-sm/medium",
                color: "text-muted",
                className: tL.a9,
                children: ea.intl.string(ei.default.s8OcXI),
            }),
            (0, i.jsx)("div", {
                className: tL._A,
                children: g.map((e) =>
                    (0, i.jsx)(
                        tI,
                        {
                            icon: (0, i.jsx)(d.eu, { src: e.avatarUrl, size: m._3.SIZE_20, "aria-hidden": !0 }),
                            label: e.name,
                            trailer: (0, i.jsx)(tS, { count: e.count }),
                            isSelected: l === e.key,
                            isDisabled: e.isDisabled,
                            onClick: () => n("clippedWith", l === e.key ? null : e.key),
                        },
                        e.key,
                    ),
                ),
            }),
            c &&
                (0, i.jsx)("div", {
                    className: tL.B2,
                    children: (0, i.jsx)(e5.Q, {
                        variant: "secondary",
                        textVariant: "text-sm/medium",
                        text: r
                            ? ea.intl.string(ei.default.BbeVTG)
                            : ea.intl.formatToPlainString(ei.default["Ona/4s"], { count: u.length }),
                        onClick: () => o(!r),
                    }),
                }),
        ],
    });
}
function tD(e) {
    let { gamesFacet: t } = e,
        l = (0, tu.Pu)((e) => e.gameFacet),
        n = tP(),
        r = a.useMemo(() => t.map((e) => e.key), [t]),
        o = (0, b.A)(r),
        u = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return 0 === t.length
        ? null
        : (0, i.jsxs)(tj.Ip, {
              className: s()(tL.uW, tL.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(h.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tL.a9,
                      children: ea.intl.string(ea.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tL._A,
                      children: t.map((e) =>
                          (0, i.jsx)(
                              tI,
                              {
                                  icon: (0, i.jsx)(k.A, { game: u.get(e.key), size: k.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tS, { count: e.count }),
                                  isSelected: l === e.key,
                                  isDisabled: e.isDisabled,
                                  onClick: () => n("game", l === e.key ? null : e.key),
                              },
                              e.key,
                          ),
                      ),
                  }),
              ],
          });
}
function tT(e) {
    let { gamesFacet: t, distributedClipInitiatorsFacet: l, mainLinkCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tL.pz,
        children: [
            (0, i.jsx)(tE, {}),
            (0, i.jsxs)("div", {
                className: tL.wp,
                children: [
                    (0, i.jsx)(tw, { mainLinkCounts: a }),
                    (0, i.jsx)(tM, { initiatorsFacet: l }),
                    (0, i.jsx)(tD, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tF = l(174726);
let tR = a.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, tu.Pu)((e) => e.query),
            s = (0, tu.Pu)((e) => e.setQuery),
            r = (0, tu.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            u = (0, e3.bG)([te.Ay], () => te.Ay.getKeybindForAction(eY.hCu.SAVE_CLIP)),
            c = a.useCallback(() => {
                (0, e8.openUserSettings)(e4.X.CLIPS_PANEL);
            }, []),
            d = a.useCallback(() => s(""), [s]),
            m = null != u ? tt.dI(u.shortcut, !0) : null,
            g = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tF.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tF.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tF.Pe,
                            children: [
                                (0, i.jsx)(h.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ea.intl.string(ea.t.z2jK6X),
                                }),
                                null != m && (0, i.jsx)(e7.e, { className: tF.P, shortcut: m }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tF.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(o.m, {
                                        text: ea.intl.string(ea.t.X7yRDm),
                                        children: (0, i.jsx)(th.Y, {
                                            position: "bottom",
                                            targetElementRef: g,
                                            renderPopout: (e) => (0, i.jsx)(tA, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: g,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(X.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ea.intl.formatToPlainString(ei.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tp.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(p.K, {
                                                                  icon: tp.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ea.intl.string(ea.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(o.m, {
                                    text: ea.intl.string(ea.t["3D5yo/"]),
                                    children: (0, i.jsx)(p.K, {
                                        onClick: c,
                                        icon: tx.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ea.intl.string(ea.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                t &&
                    (0, i.jsx)("div", {
                        className: tF.MT,
                        children: (0, i.jsx)(tf.I, {
                            placeholder: ea.intl.string(ea.t["5h0QOP"]),
                            query: n,
                            onChange: s,
                            onClear: d,
                            size: "md",
                        }),
                    }),
            ],
        });
    }),
    tz = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(V.D, {
            className: s()(tF.MV, { [tF.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tF.tk,
                    children: [
                        a,
                        (0, i.jsx)(R.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tF.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tF.z2,
                    children: (0, i.jsx)(R.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function t_(e) {
    let { enabled: t } = I.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tT, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
          })
        : (0, i.jsx)(tH, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tH(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, tu.Pu)((e) => e.gameFacet),
        r = (0, tu.Pu)((e) => e.activeMainLink),
        o = (0, tu.Pu)((e) => e.setGameFacet),
        u = (0, tu.Pu)((e) => e.setActiveMainLink),
        {
            legacyGames: c,
            allClipsCount: d,
            favoritesCount: m,
        } = a.useMemo(() => {
            let e = new Map(),
                i = new Set(l);
            for (let l of t) {
                if (null == l.applicationId) continue;
                let t = i.has(l),
                    a = e.get(l.applicationId);
                null == a
                    ? e.set(l.applicationId, {
                          name: l.applicationName,
                          count: +!!t,
                          mostRecentClipCreatedAt: l.createdAt,
                      })
                    : (t && (a.count += 1),
                      l.createdAt > a.mostRecentClipCreatedAt && (a.mostRecentClipCreatedAt = l.createdAt));
            }
            let a = 0;
            for (let e of l) e.isFavorite && (a += 1);
            return {
                legacyGames: Array.from(e.entries())
                    .map((e) => {
                        let [t, l] = e;
                        return { applicationId: t, ...l };
                    })
                    .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
                allClipsCount: l.length,
                favoritesCount: a,
            };
        }, [t, l]),
        g = a.useMemo(() => c.map((e) => e.applicationId), [c]),
        p = (0, b.A)(g),
        x = a.useMemo(() => new Map(p.map((e) => [e?.id, e])), [p]),
        f = a.useCallback(() => {
            u(T.oH.ALL_CLIPS), o(null);
        }, [u, o]),
        j = a.useCallback(() => {
            u(T.oH.FAVORITES), o(null);
        }, [u, o]),
        v = a.useCallback(
            (e) => {
                o(e), u(T.oH.ALL_CLIPS);
            },
            [o, u],
        ),
        y = null == s && r === T.oH.ALL_CLIPS,
        C = null == s && r === T.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: tF.pz,
        children: [
            (0, i.jsx)(tR, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: tF.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tF.om,
                        children: (0, i.jsxs)("div", {
                            className: tF.Ep,
                            children: [
                                (0, i.jsx)(tz, {
                                    name: ea.intl.string(ea.t.dPVrEv),
                                    count: d,
                                    icon: (0, i.jsx)(eA.x, {}),
                                    isSelected: y,
                                    onClick: f,
                                }),
                                (0, i.jsx)(tz, {
                                    name: ea.intl.string(ea.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)(Q.G, {}),
                                    isSelected: C,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    c.length > 0 &&
                        (0, i.jsxs)(tj.Ip, {
                            className: tF.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(h.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tF.a9,
                                    children: ea.intl.string(ea.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tF.Ep,
                                    children: c.map((e) =>
                                        (0, i.jsx)(
                                            tz,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(k.A, {
                                                    game: x.get(e.applicationId),
                                                    size: k.M.XSMALL,
                                                }),
                                                isSelected: s === e.applicationId,
                                                onClick: () => v(e.applicationId),
                                            },
                                            e.applicationId,
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
var tO = l(847374),
    tG = l(112173),
    tU = l(548118),
    tK = l(441349),
    tV = l(789645),
    tQ = l(939546),
    tW = l(99478);
function tX(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function t$(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function tY(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tQ.Xj)();
    return { preset: "custom", after: null != e ? tX(e.toDate(l)) : null, before: null != t ? t$(t.toDate(l)) : null };
}
function tB(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tW.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tq = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tZ(e) {
    return tq.format(new Date(e));
}
function tJ(e) {
    switch (e.preset) {
        case "today":
            return ea.intl.string(ei.default.yOAWWM);
        case "yesterday":
            return ea.intl.string(ei.default["PtV/Ti"]);
        case "last-3-days":
            return ea.intl.string(ei.default.xfmv7I);
        case "this-year":
            return ea.intl.string(ei.default["+eE7zX"]);
        case "last-year":
            return ea.intl.string(ei.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tZ(e.after) : null,
                l = null != e.before ? tZ(e.before) : null;
            if (null != t && null != l)
                return ea.intl.formatToPlainString(ei.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ea.intl.formatToPlainString(ei.default.k1FkTL, { date: t });
            if (null != l) return ea.intl.formatToPlainString(ei.default["4NlpHD"], { date: l });
            return ea.intl.string(ei.default.tv9apA);
        }
    }
}
var t0 = l(817480);
function t1(e) {
    let { closePopout: t } = e,
        l = (0, tu.Pu)((e) => e.dateFilter),
        n = (0, tu.Pu)((e) => e.setDateFilter),
        [r, u] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? tB(l.after) : null)),
        [m, g] = a.useState(() => (l?.preset === "custom" ? tB(l.before) : null)),
        h = a.useMemo(
            () => [
                { key: "today", label: ea.intl.string(ei.default.yOAWWM) },
                { key: "yesterday", label: ea.intl.string(ei.default["PtV/Ti"]) },
                { key: "last-3-days", label: ea.intl.string(ei.default.xfmv7I) },
                { key: "this-year", label: ea.intl.string(ei.default["+eE7zX"]) },
                { key: "last-year", label: ea.intl.string(ei.default.Nwj9v0) },
            ],
            [],
        ),
        x = l?.preset ?? null,
        f = r && "custom" !== x ? null : x,
        j = a.useMemo(() => (0, tQ.Ec)((0, tQ.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tX(new Date(t)), before: t$(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tX(new Date(l)), before: t$(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: tX(l), before: t$(new Date(t)) };
                            }
                            case "this-year": {
                                let l = t.getFullYear();
                                return {
                                    preset: e,
                                    after: new Date(l, 0, 1, 0, 0, 0, 0).getTime(),
                                    before: new Date(l, 11, 31, 23, 59, 59, 999).getTime(),
                                };
                            }
                            case "last-year": {
                                let l = t.getFullYear() - 1;
                                return {
                                    preset: e,
                                    after: new Date(l, 0, 1, 0, 0, 0, 0).getTime(),
                                    before: new Date(l, 11, 31, 23, 59, 59, 999).getTime(),
                                };
                            }
                        }
                    })(e),
                ),
                    t();
            },
            [n, t],
        ),
        y = a.useCallback(() => {
            u((e) => !e);
        }, []),
        C = a.useCallback(
            (e) => {
                d(e), n(tY(e, m));
            },
            [m, n],
        ),
        b = a.useCallback(
            (e) => {
                g(e), n(tY(c, e));
            },
            [c, n],
        ),
        k = a.useCallback(() => {
            d(null), g(null), n(null);
        }, [n]),
        A = null != c || null != m;
    return (0, i.jsxs)("div", {
        className: s()(t0.SW, r && t0.Td),
        children: [
            (0, i.jsxs)("div", {
                className: t0.sh,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: t0.a9,
                        children: ea.intl.string(ei.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: t0.eF,
                        children: [
                            h.map((e) =>
                                (0, i.jsx)(
                                    V.D,
                                    {
                                        className: s()(t0.zD, f === e.key && t0.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": f === e.key,
                                        children: (0, i.jsx)(R.E, {
                                            variant: "text-md/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, i.jsxs)(V.D, {
                                className: s()(t0.zD, t0.Kl, (r || "custom" === x) && t0.pH),
                                onClick: y,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "text-md/medium",
                                        color: "currentColor",
                                        children: ea.intl.string(ei.default.tv9apA),
                                    }),
                                    (0, i.jsx)(R.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: t0.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: t0.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: t0.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: t0._2,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t0.bk,
                                        "aria-hidden": !0,
                                        children: ea.intl.string(ei.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: t0.h0,
                                        children: [
                                            (0, i.jsx)(tK.l, {
                                                label: ea.intl.string(ei.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: c,
                                                onChange: C,
                                                maxValue: m ?? j,
                                            }),
                                            null != c &&
                                                (0, i.jsx)(o.m, {
                                                    text: ea.intl.string(ea.t.VkKicb),
                                                    children: (0, i.jsx)(p.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tV.P,
                                                        onClick: () => C(null),
                                                        "aria-label": ea.intl.string(ea.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: t0._2,
                                children: [
                                    (0, i.jsx)(R.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t0.bk,
                                        "aria-hidden": !0,
                                        children: ea.intl.string(ei.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: t0.h0,
                                        children: [
                                            (0, i.jsx)(tK.l, {
                                                label: ea.intl.string(ei.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: m,
                                                onChange: b,
                                                minValue: c ?? void 0,
                                                maxValue: j,
                                            }),
                                            null != m &&
                                                (0, i.jsx)(o.m, {
                                                    text: ea.intl.string(ea.t.VkKicb),
                                                    children: (0, i.jsx)(p.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tV.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ea.intl.string(ea.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    A &&
                        (0, i.jsx)("div", {
                            className: t0.dS,
                            children: (0, i.jsx)(e5.Q, { size: "sm", text: ea.intl.string(ea.t.VkKicb), onClick: k }),
                        }),
                ],
            }),
        ],
    });
}
var t2 = l(103552),
    t3 = l(914427),
    t9 = l(213424);
function t7(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: n,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: u,
        } = e,
        c = a.useRef(null),
        d = a.useMemo(() => new Set(n), [n]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => ty()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            t2.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: t9.H, children: e.icon }),
                                    (0, i.jsx)(t2.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(t2.x4.Checkbox, {}) : (0, i.jsx)(t2.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        g = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(th.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(t3.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: u ?? ea.intl.string(ea.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(X.$, {
                ...e,
                buttonRef: c,
                size: "sm",
                variant: "secondary",
                text: g,
                icon: tO.a,
                iconPosition: "end",
            }),
    });
}
var t5 = l(941886);
function t6(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: t5.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: t5.Kk, children: l }),
            (0, i.jsx)(R.E, {
                className: t5.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(V.D, {
                className: t5.DT,
                onClick: a,
                "aria-label": n ?? ea.intl.string(ea.t.N86XcP),
                children: (0, i.jsx)(tV.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t4 = l(841765);
function t8() {
    let e = (0, tu.Pu)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tJ(e) : ea.intl.string(ei.default.upqksT);
    return (0, i.jsx)(th.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t1, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(X.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tO.a,
                iconPosition: "end",
            }),
    });
}
function le() {
    let e = (0, tu.Pu)((e) => e.sortOrder),
        t = (0, tu.Pu)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = e === T.mu.OLDEST ? ea.intl.string(ea.t["0gitSE"]) : ea.intl.string(ea.t["4LLKx3"]);
    return (0, i.jsx)(th.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, i.jsx)(tC.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ea.intl.string(ea.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, i.jsxs)(tb.rX, {
                    children: [
                        (0, i.jsx)(tb.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ea.intl.string(ea.t["4LLKx3"]),
                            action: () => {
                                t(T.mu.MOST_RECENT), a();
                            },
                            checked: e === T.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(tb.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ea.intl.string(ea.t["0gitSE"]),
                            action: () => {
                                t(T.mu.OLDEST), a();
                            },
                            checked: e === T.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) => (0, i.jsx)(X.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: n, icon: tG.J }),
    });
}
function lt(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tu.Pu)((e) => e.query),
        r = (0, tu.Pu)((e) => e.setQuery),
        o = (0, tu.Pu)((e) => e.gameFacet),
        u = (0, tu.Pu)((e) => e.clippedWithFacet),
        c = (0, tu.Pu)((e) => e.selectedGameIds),
        g = (0, tu.Pu)((e) => e.selectedUserIds),
        h = (0, tu.Pu)((e) => e.selectedGuildId),
        p = (0, tu.Pu)((e) => e.selectedActivity),
        x = (0, tu.Pu)((e) => e.dateFilter),
        f = (0, tu.Pu)((e) => e.toggleGameId),
        j = (0, tu.Pu)((e) => e.toggleUserId),
        v = (0, tu.Pu)((e) => e.setSelectedGuildId),
        y = (0, tu.Pu)((e) => e.setSelectedActivity),
        C = (0, tu.Pu)((e) => e.setDateFilter),
        N = (0, tu.Pu)((e) => e.clearFilters),
        L = a.useMemo(() => l.map((e) => e.key), [l]),
        I = (0, b.A)(L),
        E = a.useMemo(() => new Map(I.map((e) => [e?.id, e])), [I]),
        w = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(k.A, { game: E.get(e.key), size: k.M.XSMALL }),
                })),
            [l, E],
        ),
        S = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eM.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        P = a.useMemo(
            () =>
                S.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(tU.Ay, { guild: e.guild, size: tU.Ay.Sizes.MINI }),
                })),
            [S],
        ),
        M = a.useMemo(() => new Map(S.map((e) => [e.key, e.guild])), [S]),
        D = a.useMemo(
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
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = A.default.getUser(l.key);
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
                    icon: (0, i.jsx)(d.eu, { src: e.avatarUrl, size: m._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        F = a.useMemo(() => (null != h ? new Set([h]) : new Set()), [h]),
        R = a.useMemo(() => (null != p ? new Set([p]) : new Set()), [p]),
        z = a.useCallback(
            (e) => {
                v(h === e ? null : e);
            },
            [h, v],
        ),
        _ = a.useCallback(
            (e) => {
                y(p === e ? null : e);
            },
            [p, y],
        ),
        H = null == o,
        O = null == u,
        G = (0, i.jsxs)(i.Fragment, {
            children: [
                H &&
                    Array.from(c).map((e) => {
                        let t = w.find((t) => t.key === e);
                        return (0, i.jsx)(
                            t6,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(k.A, { game: E.get(e), size: k.M.XSMALL }),
                                onRemove: () => f(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != x && (0, i.jsx)(t6, { label: tJ(x), onRemove: () => C(null) }, "date"),
                null != h &&
                    (0, i.jsx)(
                        t6,
                        {
                            label: P.find((e) => e.key === h)?.label ?? h,
                            icon:
                                null != M.get(h)
                                    ? (0, i.jsx)(tU.Ay, { guild: M.get(h), size: tU.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => v(null),
                        },
                        "guild",
                    ),
                O && Array.from(g).map((e) => (0, i.jsx)(ll, { userId: e, onRemove: () => j(e) }, `user-${e}`)),
                null != p && (0, i.jsx)(t6, { label: p, onRemove: () => y(null) }, "activity"),
            ],
        }),
        U = (H && c.size > 0) || null != x || null != h || (O && g.size > 0) || null != p;
    return (0, i.jsxs)("div", {
        className: t4.kT,
        children: [
            (0, i.jsxs)("div", {
                className: t4.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: t4.MT,
                        children: (0, i.jsx)(tf.I, {
                            placeholder: ea.intl.string(ea.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: t4.Zq,
                        children: [
                            H &&
                                w.length > 0 &&
                                (0, i.jsx)(t7, {
                                    triggerLabel: ea.intl.string(ea.t.URyqtP),
                                    options: w,
                                    selectedKeys: c,
                                    onToggle: f,
                                    multiSelect: !0,
                                    searchPlaceholder: ea.intl.string(ea.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(t8, {}),
                            P.length > 0 &&
                                (0, i.jsx)(t7, {
                                    triggerLabel: ea.intl.string(ea.t["5qyruI"]),
                                    options: P,
                                    selectedKeys: F,
                                    onToggle: z,
                                    multiSelect: !1,
                                    searchPlaceholder: ea.intl.string(ea.t["5h0QOP"]),
                                }),
                            O &&
                                T.length > 0 &&
                                (0, i.jsx)(t7, {
                                    triggerLabel: ea.intl.string(ea.t.YQ6dJg),
                                    options: T,
                                    selectedKeys: g,
                                    onToggle: (e) => j(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ea.intl.string(ea.t["5h0QOP"]),
                                }),
                            D.length > 0 &&
                                (0, i.jsx)(t7, {
                                    triggerLabel: ea.intl.string(ea.t.agRtPG),
                                    options: D,
                                    selectedKeys: R,
                                    onToggle: _,
                                    multiSelect: !1,
                                    searchPlaceholder: ea.intl.string(ea.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: t4.QZ, children: (0, i.jsx)(le, {}) }),
                ],
            }),
            U &&
                (0, i.jsxs)("div", {
                    className: t4.eH,
                    children: [G, (0, i.jsx)(e5.Q, { size: "sm", text: ea.intl.string(ea.t.O8k7O4), onClick: N })],
                }),
        ],
    });
}
function ll(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, r.bG)([A.default], () => A.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(t6, {
        label: n,
        icon: (0, i.jsx)(d.eu, { src: a.getAvatarURL(null, 32), size: m._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var li = l(409067),
    la = l(847455);
let ln = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function ls(e) {
    let { channelId: t, onClose: n, onClipClick: L, transitionState: F, initialEditingClipId: R, ...z } = e;
    (0, D.A)();
    let { analyticsLocations: _ } = (0, C.Ay)(y.A.CLIPS_GALLERY),
        [H, O] = a.useState(new Set()),
        {
            gamesFacet: G,
            participantsFacet: U,
            distributedClipInitiatorsFacet: K,
            filteredClips: V,
            mainLinkCounts: Q,
            allClips: W,
        } = (0, li.a)(),
        { enabled: X } = I.useConfig({ location: "ClipsGalleryModal" }),
        { onShareClick: $ } = (0, M.A)(t);
    a.useEffect(
        () => () => {
            tu.Pu.getState().resetAll();
        },
        [],
    );
    let Y = (0, r.bG)([N.Ay], () => N.Ay.getExportingClipIds().length > 0),
        [B, q] = a.useState(null != R ? "editing" : "gallery"),
        [Z, J] = a.useState(R ?? null),
        ee = (0, r.bG)([N.Ay], () => (null != Z ? N.Ay.getClipById(Z) : null), [Z]),
        et = a.useRef(B);
    (et.current = B), (a.useRef(Z).current = Z);
    let [el, en] = a.useState(null != R ? c.ip.ENTERED : c.ip.HIDDEN),
        es = a.useRef(null),
        er = (0, tu.Pu)((e) => e.gameFacet),
        eo = (0, tu.Pu)((e) => e.clippedWithFacet),
        eu = (0, tu.Pu)((e) => e.activeMainLink),
        ec = (0, tu.Pu)(
            (e) =>
                "" !== e.query.trim() ||
                e.selectedGameIds.size > 0 ||
                e.selectedUserIds.size > 0 ||
                null != e.selectedGuildId ||
                null != e.selectedActivity ||
                null != e.dateFilter,
        );
    a.useEffect(() => {
        eu === T.oH.HOME && ec && tu.Pu.getState().setActiveMainLink(T.oH.ALL_CLIPS);
    }, [eu, ec]);
    let ed = a.useMemo(() => (null != er ? [er] : []), [er]),
        em = (0, b.A)(ed)[0] ?? null,
        eg = (0, r.bG)([A.default], () => (null != eo ? A.default.getUser(eo) : null), [eo]),
        eh = a.useMemo(() => {
            if (null != er) {
                let e = G.find((e) => e.key === er)?.name ?? ea.intl.string(ea.t.dPVrEv);
                return { icon: (0, i.jsx)(k.A, { game: em, size: k.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != eo) {
                let e = null != eg ? (eg.globalName ?? eg.username) : eo;
                return {
                    icon:
                        null != eg
                            ? (0, i.jsx)(d.eu, {
                                  src: eg.getAvatarURL(null, 32),
                                  size: m._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eu === T.oH.FAVORITES
                ? { icon: null, title: ea.intl.string(ea.t["9rlCk1"]) }
                : eu === T.oH.AUTO_CLIPS
                  ? { icon: null, title: ea.intl.string(ei.default.ikNKf1) }
                  : eu === T.oH.HOME
                    ? { icon: null, title: ea.intl.string(ea.t.Ym2Ri6) }
                    : { icon: null, title: ea.intl.string(ea.t.dPVrEv) };
        }, [er, eo, eu, G, em, eg]),
        ep = a.useCallback(() => {
            q("editing"), v.A.useReducedMotion && en(c.ip.ENTERED);
        }, []),
        ex = a.useCallback((e) => {
            O((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        ef = a.useCallback(
            (e) => {
                J(e.id), ep();
            },
            [ep],
        ),
        ej = a.useCallback(() => {
            v.A.useReducedMotion && J(null), q("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === et.current && (e.stopPropagation(), ej());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ej, n]),
        a.useEffect(
            () =>
                "editing" === B && null != Z
                    ? void (0, E.YK)(Z)
                    : ((0, E.jA)(),
                      () => {
                          (0, E.jA)();
                      }),
            [B, Z],
        );
    let ev = a.useCallback(() => {
            O(new Set());
        }, []),
        ey = H.size > 0,
        eC = a.useCallback(() => {
            let e = W.filter((e) => H.has(e.id));
            (0, g.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ev(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [W, H, ev]),
        eb = a.useCallback(async () => {
            let e = W.filter((e) => H.has(e.id));
            await $({ clips: e }), ev();
        }, [W, H, $, ev]),
        ek = a.useMemo(
            () => ({ selectedClipIds: H, toggleClipSelection: ex, clearSelection: ev, isMultiSelectMode: ey }),
            [H, ex, ev, ey],
        );
    return (0, i.jsx)(C.f5, {
        value: _,
        children: (0, i.jsx)(ln.Provider, {
            value: ek,
            children: (0, i.jsx)(u.N, {
                onClose: n,
                transitionState: F,
                ...z,
                children: (0, i.jsxs)("div", {
                    className: la.jT,
                    ref: es,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(la.PD, "gallery" === B && la.vu),
                            inert: "gallery" !== B,
                            children: [
                                (0, i.jsx)(t_, {
                                    gamesFacet: G,
                                    participantsFacet: U,
                                    distributedClipInitiatorsFacet: K,
                                    mainLinkCounts: Q,
                                    allClips: W,
                                    filteredClips: V,
                                    withHeaderFilters: !X,
                                }),
                                (0, i.jsxs)("div", {
                                    className: la.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: la.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: la.Rj,
                                                    children: [
                                                        eh.icon,
                                                        (0, i.jsx)(h.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eh.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: la.$s,
                                                    children: [
                                                        ey &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ea.intl.string(ea.t.RDE0Sc),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: eb,
                                                                            icon: x.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ea.intl.string(ea.t.RDE0Sc),
                                                                            loading: Y,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ea.intl.string(ea.t.oyYWHE),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: eC,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ea.intl.string(ea.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(p.K, {
                                                            onClick: n,
                                                            icon: j.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ea.intl.string(ea.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        X && (0, i.jsx)(lt, { allClips: W, gamesFacet: G, participantsFacet: U }),
                                        (0, i.jsx)(tg, {
                                            onEdit: ef,
                                            channelId: t,
                                            filteredClips: V,
                                            totalClipCount: W.length,
                                            onClipClick: L,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(la.jN, "editing" === B && la.vu),
                            inert: "editing" !== B,
                            onTransitionEnd: () => {
                                "gallery" === B ? (J(null), en(c.ip.HIDDEN)) : "editing" === B && en(c.ip.ENTERED);
                            },
                            children:
                                null != ee &&
                                (0, i.jsxs)(P.p, {
                                    clip: ee,
                                    modalContainerRef: es,
                                    children: [
                                        (0, i.jsx)(w.A, { transitionState: el, onClose: ej }),
                                        (0, i.jsx)(S.A, { channelId: t, onClose: ej }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
