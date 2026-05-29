l.d(t, { $: () => tk, default: () => tL });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    c = l(990078),
    o = l(521489),
    d = l(231723),
    u = l(192308),
    m = l(534514),
    h = l(408278),
    p = l(405433),
    x = l(241326),
    g = l(972213),
    v = l(775602),
    f = l(793574),
    j = l(688810),
    C = l(274372),
    y = l(315240),
    b = l(582633),
    A = l(309777),
    N = l(429364),
    E = l(352527),
    w = l(280483);
l(321073);
var I = l(562708),
    k = l(834730),
    L = l(289873),
    M = l(139286),
    D = l(962125);
let T = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var S = l(175841),
    R = l(449543),
    P = l(152858),
    G = l(939249),
    _ = l(27232),
    z = l(505930),
    O = l(821609),
    U = l(933832),
    H = l(97808),
    F = l(778712),
    K = l(22231),
    B = l(429913),
    $ = l(607470),
    Q = l(137177),
    Y = l(495544),
    V = l(287809),
    X = l(427262),
    q = l(372684),
    W = l(140423),
    Z = l(602902),
    J = l(665039),
    ee = l(16590),
    et = l(375708),
    el = l(296364);
let ei = ["clowning around", "good times", "team vibes", "epic teamwork"];
function ea(e) {
    let { clip: t, moment: l, onEdit: n, onHoverChange: s } = e,
        o = (0, J.j)(t),
        { analyticsLocations: d } = (0, j.Ay)(),
        u = (0, B.h)(t.applicationId),
        g = Y.default.getId(),
        v = (0, r.bG)([V.default], () => {
            let e = t.users.find((e) => e !== g);
            return null != e ? V.default.getUser(e) : null;
        }, [t.users, g]),
        f = null != v,
        C = (0, X.tx)(v),
        { Icon: b } = l,
        A = f ? et.intl.formatToPlainString(ee.default.QJ7i8Z, { username: C }) : l.title,
        N = f ? ei[t.id.charCodeAt(0) % ei.length] : l.subtitle,
        E = t.type === q.nQ.SCREENSHOT,
        w = t.type === q.nQ.VOICE_CLIP,
        I = !E && !w && null != o,
        L = a.useRef(null),
        M = "" !== t.thumbnail ? t.thumbnail : null,
        D = a.useCallback(() => {
            s?.(M);
            let e = L.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, M]),
        T = a.useCallback(
            (e) => {
                s?.(null);
                let l = L.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let i = document.activeElement;
                null != i && e.currentTarget.contains(i) && !i.matches(":focus-visible") && i.blur();
            },
            [t.editMetadata?.start, s],
        ),
        S = a.useCallback(() => {
            s?.(M);
            let e = L.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, M]),
        R = a.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                s?.(null);
                let l = L.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start, s],
        ),
        P = a.useCallback(
            (e) => {
                e.stopPropagation(), n(t);
            },
            [n, t],
        ),
        ea = a.useCallback(() => {
            n(t);
        }, [n, t]),
        en = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, Z.K)([t], { analyticsLocations: d });
            },
            [t, d],
        ),
        es = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.w7)(t.id);
            },
            [t.id],
        ),
        er = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, W.R)({ clips: [t] });
            },
            [t],
        ),
        ec = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.XK)(t);
            },
            [t],
        ),
        eo = !0 !== t.isTemporary,
        ed = et.intl.string(!0 === t.isFavorite ? ee.default.IZsalP : ee.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: el.Ui,
        onMouseEnter: D,
        onMouseLeave: T,
        onFocus: S,
        onBlur: R,
        children: (0, i.jsxs)(G.D, {
            className: el.Nr,
            "aria-label": et.intl.string(et.t.bt75uw),
            onClick: ea,
            children: [
                (0, i.jsxs)("div", {
                    className: el.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: el.xn })
                            : (0, i.jsx)("div", { className: el.$$ }),
                        I
                            ? (0, i.jsx)($.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: o ?? void 0,
                                  className: el.xn,
                                  ref: L,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: el.D7 }),
                null != u &&
                    (0, i.jsx)("div", {
                        className: el.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(Q.A, { game: u, size: Q.M.XXSMALL, className: el.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: el.Nv,
                    children: [
                        eo
                            ? (0, i.jsx)(
                                  c.m,
                                  {
                                      text: ed,
                                      position: "top",
                                      children: (0, i.jsx)(h.K, {
                                          onClick: ec,
                                          icon: !0 === t.isFavorite ? _.G : z.y,
                                          "aria-label": ed,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(O.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: U.A,
                                  text: et.intl.string(et.t["R3BPH+"]),
                                  onClick: es,
                              }),
                        (0, i.jsx)(c.m, {
                            text: et.intl.string(et.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(h.K, {
                                onClick: er,
                                icon: x.u,
                                "aria-label": et.intl.string(et.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: el.Lw,
                    children: [
                        f && null != v
                            ? (0, i.jsx)(H.eu, {
                                  src: v.getAvatarURL(void 0, 32),
                                  size: F._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: el.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(b, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: A }),
                        (0, i.jsx)(k.E, { variant: "text-sm/medium", color: "always-white", children: N }),
                        (0, i.jsx)("div", { className: el.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: el.o1,
                    children: [
                        (0, i.jsx)(O.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: K.R,
                            text: et.intl.string(et.t.bt75uw),
                            onClick: P,
                        }),
                        (0, i.jsx)(O.$, {
                            variant: "primary",
                            size: "sm",
                            icon: p.l,
                            text: et.intl.string(et.t.RDE0Sc),
                            onClick: en,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var en = l(369606),
    es = l(845798),
    er = l(825860),
    ec = l(926268);
let eo = [
    { Icon: S.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: en.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: es.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: er.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: _.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: ec.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eu = l(452143);
function em(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([C.Ay], () => C.Ay.getClips()),
        n = a.useMemo(() => ed(l), [l]),
        s = a.useMemo(
            () =>
                n
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return eo[Math.abs(t) % eo.length];
                    }),
            [n],
        ),
        { backgroundComponent: c, handleHoverChange: o } = (function () {
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
                                { src: e.previousThumbnail, className: eu.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${eu.Tp} ${eu.h9}`, alt: "", "aria-hidden": !0 },
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
              className: eu.uW,
              "aria-label": et.intl.string(ee.default.efLpNC),
              children: [
                  c,
                  (0, i.jsxs)("div", {
                      className: eu.wx,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eu.UP,
                              children: [
                                  (0, i.jsx)(S.B, { size: "refresh_sm", color: "white" }),
                                  (0, i.jsx)(k.E, {
                                      variant: "text-md/medium",
                                      color: "always-white",
                                      children: et.intl.string(ee.default.I1h8uD),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(m.D, {
                              variant: "display-md",
                              color: "always-white",
                              children: et.intl.string(ee.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(R.A, {
                      className: eu.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: P.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": et.intl.string(ee.default.efLpNC),
                      children: n.map((e, l) =>
                          (0, i.jsx)(ea, { clip: e, moment: s[l], onEdit: t, onHoverChange: o }, e.id),
                      ),
                  }),
              ],
          });
}
var eh = l(989349),
    ep = l.n(eh),
    ex = l(66455),
    eg = l(342952),
    ev = l(890856),
    ef = l(777666),
    ej = l(530005),
    eC = l(406810),
    ey = l(176781),
    eb = l(661531),
    eA = l(983851),
    eN = l(31300),
    eE = l(442433),
    ew = l(587895),
    eI = l(47167),
    ek = l(734057),
    eL = l(71393),
    eM = l(549685),
    eD = l(174459),
    eT = l(58703),
    eS = l(403362),
    eR = l(974293),
    eP = l(226421),
    eG = l(284009),
    e_ = l.n(eG),
    ez = l(460905),
    eO = l(713608),
    eU = l(562153),
    eH = l(788332);
function eF(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    e_()(l?.type === q.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([V.default], () => V.default.getUser(l.remoteTriggerUserId)),
        n = (0, eU.tx)(t.guildId, null, a);
    return null == a
        ? null
        : (0, i.jsx)(c.m, {
              text: et.intl.string(ee.default.vTTkFF),
              children: (0, i.jsxs)("div", {
                  className: eH.S,
                  children: [
                      (0, i.jsx)("img", { src: a.getAvatarURL(t.guildId, 12, !1), className: eH.$, alt: n }),
                      (0, i.jsx)(k.E, {
                          color: "always-white",
                          variant: "text-xs/bold",
                          children: et.intl.formatToPlainString(ee.default.QJ7i8Z, { username: n }),
                      }),
                  ],
              }),
          });
}
function eK(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(c.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eH.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(k.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eB(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === q.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case q.Gy.DISTRIBUTED:
            return (0, i.jsx)(eF, { clip: t });
        case q.Gy.LAUGHTER:
            return (0, i.jsx)(eK, {
                icon: ez.n,
                text: et.intl.string(ee.default.bTC23D),
                tooltipText: et.intl.string(ee.default["ry+jxm"]),
            });
        case q.Gy.GAME_EVENT:
            return (0, i.jsx)(eK, {
                icon: eO.q,
                text: t.decision.signal.title ?? "",
                tooltipText: et.intl.string(ee.default["347DBb"]),
            });
        default:
            return null;
    }
}
var e$ = l(718812),
    eQ = l(652215),
    eY = l(798594);
let eV = function (e) {
    let { clip: t, actionsDisabled: n, isNew: c, onEdit: o, onClick: d } = e,
        u = (0, r.yK)([V.default], () => t.users.map((e) => V.default.getUser(e)).filter(eS.Vq)),
        m = (0, r.bG)([ek.A], () => (null != t.channelId ? ek.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([eL.A], () => (null != t.guildId ? eL.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, j.Ay)(f.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: v } = a.useContext(tk),
        [y, b] = a.useState(!1),
        A = a.useRef(null),
        N = (0, ex.A)(t.editMetadata?.start ?? 0),
        E = x.has(t.id),
        w = t.type === q.nQ.SCREENSHOT,
        I = (0, eI.Ay)(m),
        L = "" === t.applicationName && null != I && "" !== I ? I : t.applicationName,
        M = (0, eT.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === q.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != I && e.push(I))
                    : ("" !== L && null != L && e.push(L),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [L, h?.name, I, t.activity?.state, t.activity?.details, t.type]),
        T = a.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        S = a.useCallback(() => {
            if (!0 === w) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = N.current), A.current?.play());
        }, [w, N]),
        R = a.useCallback(() => {
            if (!0 === w) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [w, t.editMetadata?.start]),
        P = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || R();
            },
            [R],
        ),
        G = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        _ = a.useCallback(() => {
            b(!1);
        }, []),
        z = a.useCallback(
            (e) => {
                b(!0), A.current?.pause();
                let a =
                    v && x.size > 0
                        ? Array.from(x)
                              .map((e) => C.Ay.getClipById(e))
                              .filter(eS.Vq)
                        : [t];
                (0, eE.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("8101"),
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
                                    eD.default.track(eQ.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, eR.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    o(t),
                                        eD.default.track(eQ.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, eR.GN)(),
                                        });
                                },
                                onBeforeDelete: T,
                                onAfterDelete: () => {
                                    eD.default.track(eQ.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, eR.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: _ },
                );
            },
            [t, v, x, n, T, _, o],
        ),
        O = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), z(e));
            },
            [n, z],
        ),
        U = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), g(t.id)) : v ? g(t.id) : null != d && d(t),
                    eD.default.track(eQ.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, eR.GN)() }));
            },
            [n, v, g, t, d],
        );
    return (0, i.jsx)(j.f5, {
        value: p,
        children: (0, i.jsx)("div", {
            className: eY.o8,
            onBlur: P,
            children: (0, i.jsxs)(ev.s, {
                "aria-disabled": n,
                "aria-label": et.intl.string(!0 === w ? et.t["HO/oXl"] : et.t.bt75uw),
                onClick: n ? void 0 : U,
                onContextMenu: O,
                className: s()(eY.QN, { [eY.r9]: n, [eY.in]: y, [eY.wH]: E }),
                onFocus: S,
                onMouseOver: S,
                onMouseLeave: R,
                children: [
                    (0, i.jsx)(eX, { clip: t, isNew: c, videoRef: A, onOpenContextMenu: z, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: eY.wI,
                        children: [
                            (0, i.jsx)(eZ, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: eY.i0,
                                children: [
                                    (0, i.jsx)(eq, { clip: t }),
                                    (0, i.jsx)(k.E, {
                                        className: eY.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: D,
                                    }),
                                    (0, i.jsx)(k.E, {
                                        className: eY.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: M,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: eY.jW,
                                children: (0, i.jsx)(eg.A, {
                                    maxUsers: 3,
                                    users: u,
                                    size: F._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && S());
                                    },
                                    onClickOverflow: G,
                                    "aria-label": et.intl.string(et.t.WTozwe),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
function eX(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        o = 0 === t.length,
        d = !0 === t.pending,
        [u, m] = a.useState(0);
    a.useEffect(() => {
        let e = n.current;
        if (null == e || o) return;
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
    }, [n, o, t.editMetadata]);
    let { durationDisplay: p, isClipEdited: x } = a.useMemo(() => {
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
            let a = ep().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), y.XK(t);
            },
            [t],
        ),
        v = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, i.jsxs)("div", {
        className: eY.QB,
        children: [
            (0, i.jsx)("div", { className: eY.ne }),
            (0, i.jsx)(eW, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eY.ry,
                children: [
                    !d && l && (0, i.jsx)(ef.Lp, { text: et.intl.string(et.t.y2b7CA) }),
                    (0, i.jsx)(eB, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eY.g3,
                    children: [
                        (0, i.jsx)(c.m, {
                            text: et.intl.string(t.isFavorite ? ee.default.IZsalP : ee.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(h.K, {
                                onClick: g,
                                icon: t.isFavorite ? _.G : z.y,
                                "aria-label": et.intl.string(et.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(h.K, {
                            onClick: v,
                            icon: ej.F,
                            "aria-label": et.intl.string(et.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: eY.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eY.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(eC.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(k.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: et.intl.string(et.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, i.jsxs)("div", {
                            className: eY.OH,
                            children: [
                                x && (0, i.jsx)(eM.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: d ? et.intl.string(et.t["2Fp7OP"]) : p,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !o &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: eY.X7,
                    children: (0, i.jsx)("div", { className: eY.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eq(e) {
    let { clip: t } = e,
        l = (0, e$.h)(t),
        a = "" !== l;
    return (0, i.jsx)(k.E, {
        className: eY.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eW(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, J.j)(t),
        n = t.type === q.nQ.SCREENSHOT;
    return t.type === q.nQ.VOICE_CLIP
        ? (0, i.jsx)(eP.A, { className: eY.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eY.fT })
          : null != a
            ? (0, i.jsx)($.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eY.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eY.fT })
              : (0, i.jsx)("div", {
                    className: s()(eY.fT, eY.Is),
                    children: (0, i.jsx)(ey.x, { color: eb.A.colors.ICON_MUTED }),
                });
}
function eZ(e) {
    let { clip: t } = e,
        l = (0, r.bG)([ew.A], () => (null != t.applicationId ? ew.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eY.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eY.NH })
                : t.type === q.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eA.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eN.k, { size: "sm", color: "currentColor" }),
    });
}
function eJ(e) {
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
var e0 = l(702841),
    e2 = l(687966),
    e1 = l(475358),
    e3 = l(123292),
    e7 = l(292801),
    e6 = l(780964),
    e5 = l(766075),
    e8 = l(532624),
    e9 = l(350535),
    e4 = l(572164),
    te = l(953932),
    tt = l(311162);
function tl(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: tt.Nr,
        children: [t, (0, i.jsx)(k.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ti() {
    let e = (0, e0.bG)([e8.Ay], () => e8.Ay.getKeybindForAction(eQ.hCu.SAVE_CLIP)),
        t = null != e ? e9.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tt.kR,
        children: [
            (0, i.jsx)(tl, {
                header: (0, i.jsx)(e2._, { size: "refresh_sm", color: eb.A.colors.ICON_DEFAULT }),
                description: et.intl.string(ee.default["4K56sP"]),
            }),
            (0, i.jsx)(tl, {
                header: null != t ? (0, i.jsx)(e1.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  et.intl.format(ee.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: tt.JH,
                                      children: (0, i.jsx)(e3.Q, {
                                          text: et.intl.string(ee.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, e5.openUserSettings)(e6.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : et.intl.string(ee.default.HOUDUm),
            }),
            (0, i.jsx)(tl, {
                header: (0, i.jsx)(e7.t, { size: "refresh_sm", color: eb.A.colors.ICON_DEFAULT }),
                description: et.intl.string(ee.default.DLzdl7),
            }),
        ],
    });
}
function ta(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, e4.Et)();
    return (0, i.jsx)("div", {
        className: tt.kL,
        children: (0, i.jsxs)("div", {
            className: tt.Qs,
            children: [
                (0, i.jsx)(eJ, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: tt.wx,
                    variant: "heading-xl/semibold",
                    children: t ? et.intl.string(ee.default["+M2iLf"]) : et.intl.string(ee.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(k.E, {
                        className: tt.h_,
                        variant: "text-md/medium",
                        children: et.intl.string(ee.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: tt.SO, children: (0, i.jsx)(te.A, {}) }),
                l && !t && (0, i.jsx)(ti, {}),
            ],
        }),
    });
}
let tn = 16 / 9;
var ts = l(792852),
    tr = l(352528);
let tc = [0, 16, 0, 16],
    to = tc[1] + tc[3];
function td(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s } = e,
        [c, o] = a.useState(!0),
        [d, u] = a.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([C.Ay], () => C.Ay.getSettings().storageLocation),
        p = (0, r.yK)([C.Ay], () => C.Ay.getNewClipIds()),
        x = (0, r.bG)([C.Ay], () => C.Ay.getExportingClipIds().length > 0),
        g = (0, r.bG)([C.Ay], () => ed(C.Ay.getClips()).length > 0),
        v = (0, ts.Pu)(ts.mp),
        { enableAutoClipsReview: f } = T.useConfig({ location: "ClipsGalleryContent" }),
        j = f && g && !v;
    (0, M.A)(
        {
            type: I.ImpressionTypes.MODAL,
            name: I.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: c },
        [t.length, c],
    );
    let b = a.useMemo(() => {
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
                    title: et.intl.string(et.t["kB2R/0"]),
                    description: t ? et.intl.string(et.t["6AXirz"]) : void 0,
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
        { width: A } = d,
        { tileWidth: N, columns: E } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = A - to) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, A]);
    a.useEffect(() => {
        !(async function () {
            o(!0);
            try {
                await y.Fb(h);
            } finally {
                o(!1);
            }
        })();
    }, [h]);
    let w = a.useMemo(() => b.map((e) => Math.ceil(e.clips.length / E)), [b, E]),
        S = a.useMemo(() => w.reduce((e, t) => e + t, 0), [w]),
        R = Math.floor(N / tn),
        P = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = b[l];
                if (null == r) return null;
                let c = a * E,
                    o = r.clips.slice(c, c + E);
                return (0, i.jsx)(
                    "div",
                    {
                        className: tr.UX,
                        children: o.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: N },
                                    children: (0, i.jsx)(eV, {
                                        actionsDisabled: x,
                                        isNew: p.includes(e.id),
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
            [b, E, N, x, p, n, s],
        ),
        G = a.useCallback(
            (e) => {
                let t = b[e];
                return t?.description != null ? 66 : 44;
            },
            [b],
        ),
        _ = a.useCallback(
            (e) => {
                let t = b[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: tr.aE,
                              children: [
                                  (0, i.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tr.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [b],
        );
    return c || 0 !== b.length
        ? c
            ? (0, i.jsx)("div", { className: tr.dc, children: (0, i.jsx)(L.y, {}) })
            : (0, i.jsx)(D.A, {
                  listPadding: tc,
                  renderListHeader: j ? () => (0, i.jsx)(em, { onEdit: s }) : void 0,
                  listHeaderHeight: 520 * !!j,
                  renderRow: P,
                  renderSectionHeader: _,
                  rowCount: S,
                  rowCountBySection: w,
                  rowHeight: R + 68 + 16,
                  sectionHeaderHeight: G,
                  onResize: u,
              })
        : (0, i.jsx)(ta, { isEmptyBecauseQuery: l > 0 });
}
var tu = l(922016),
    tm = l(783977),
    th = l(625903),
    tp = l(892547),
    tx = l(364522),
    tg = l(91871),
    tv = l.n(tg),
    tf = l(980707),
    tj = l(477782),
    tC = l(583650);
function ty(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            selectedYear: c,
            sortOrder: o,
            toggleUserId: d,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: h,
            setSortOrder: p,
            clearFilters: x,
        } = (0, ts.Pu)(),
        g = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = V.default.getUser(e);
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
        f = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eL.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        j = a.useMemo(
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
        [C, y] = a.useState(""),
        [b, A] = a.useState(""),
        [N, E] = a.useState(""),
        w = a.useMemo(
            () => (0 === C.trim().length ? g : g.filter((e) => tv()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        I = a.useMemo(
            () => (0 === b.trim().length ? f : f.filter((e) => tv()(b.toLowerCase(), e.name.toLowerCase()))),
            [f, b],
        ),
        k = a.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => tv()(N.toLowerCase(), e.toLowerCase()))),
            [v, N],
        ),
        L = n.size > 0 || null != s || null != r || null != c,
        M = a.useMemo(() => {
            if (0 !== n.size)
                return g
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, g]),
        D = a.useMemo(() => {
            if (null == r) return;
            let e = f.find((e) => e.guildId === r);
            return e?.name;
        }, [r, f]),
        T = a.useMemo(() => s ?? void 0, [s]),
        S = a.useMemo(() => (null != c ? String(c) : void 0), [c]);
    return (0, i.jsxs)(tf.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": et.intl.string(et.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tj.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(tj.Dr, {
                            id: "participants",
                            label: et.intl.string(et.t.YQ6dJg),
                            subtext: M,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(tj.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tC.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: et.intl.string(et.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tj.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    f.length > 0 &&
                        (0, i.jsxs)(tj.Dr, {
                            id: "servers",
                            label: et.intl.string(et.t["5qyruI"]),
                            subtext: D,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(tj.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tC.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: et.intl.string(et.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tj.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: et.intl.string(et.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                I.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tj.iD,
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
                        (0, i.jsxs)(tj.Dr, {
                            id: "activities",
                            label: et.intl.string(et.t.agRtPG),
                            subtext: T,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tj.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tC.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: et.intl.string(et.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tj.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: et.intl.string(et.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                k.map((e) =>
                                    (0, i.jsx)(
                                        tj.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: s === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    j.length > 0 &&
                        (0, i.jsxs)(tj.Dr, {
                            id: "years",
                            label: et.intl.string(et.t.w9zd68),
                            subtext: S,
                            children: [
                                (0, i.jsx)(tj.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: et.intl.string(et.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == c,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        tj.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => h(e),
                                            checked: c === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tj.rX, {
                label: et.intl.string(et.t.XvNMNk),
                children: [
                    (0, i.jsx)(tj.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: et.intl.string(et.t["4LLKx3"]),
                        action: () => p("descending"),
                        checked: "descending" === o,
                    }),
                    (0, i.jsx)(tj.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: et.intl.string(et.t["0gitSE"]),
                        action: () => p("ascending"),
                        checked: "ascending" === o,
                    }),
                ],
            }),
            L &&
                (0, i.jsx)(tj.rX, {
                    children: (0, i.jsx)(tj.Dr, { id: "clear-filters", label: et.intl.string(et.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var tb = l(174726);
let tA = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: n } = (0, ts.Pu)(),
            s = (0, e0.bG)([e8.Ay], () => e8.Ay.getKeybindForAction(eQ.hCu.SAVE_CLIP)),
            r = (0, ts.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            o = a.useCallback(() => {
                (0, e5.openUserSettings)(e6.X.CLIPS_PANEL);
            }, []),
            d = a.useCallback(() => n(""), [n]),
            u = null != s ? e9.dI(s.shortcut, !0) : null,
            p = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tb.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tb.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tb.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: et.intl.string(et.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(e1.e, { className: tb.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tb.$s,
                            children: [
                                (0, i.jsx)(c.m, {
                                    text: et.intl.string(et.t.X7yRDm),
                                    children: (0, i.jsx)(tu.Y, {
                                        position: "bottom",
                                        targetElementRef: p,
                                        renderPopout: (e) => (0, i.jsx)(ty, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: p,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(O.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: et.intl.formatToPlainString(ee.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: tm.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(h.K, {
                                                              icon: tm.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": et.intl.string(et.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(c.m, {
                                    text: et.intl.string(et.t["3D5yo/"]),
                                    children: (0, i.jsx)(h.K, {
                                        onClick: o,
                                        icon: th.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": et.intl.string(et.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tb.MT,
                    children: (0, i.jsx)(tp.I, {
                        placeholder: et.intl.string(et.t["5h0QOP"]),
                        query: l,
                        onChange: n,
                        onClear: d,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    tN = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(G.D, {
            className: s()(tb.MV, { [tb.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tb.tk,
                    children: [
                        a,
                        (0, i.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tb.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tb.z2,
                    children: (0, i.jsx)(k.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tE(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: n, allClips: s } = e,
        r = (0, ts.Pu)((e) => e.selectedGameId),
        c = (0, ts.Pu)((e) => e.setSelectedGameId),
        o = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        d = (0, B.A)(o),
        u = a.useCallback(() => c(null), [c]),
        h = a.useCallback(() => c("favorites"), [c]),
        p = a.useMemo(() => new Map(d.map((e) => [e?.id, e])), [d]);
    return (0, i.jsxs)("div", {
        className: tb.pz,
        children: [
            (0, i.jsx)(tA, { allClips: s }),
            (0, i.jsxs)("div", {
                className: tb.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tb.om,
                        children: (0, i.jsxs)("div", {
                            className: tb.Ep,
                            children: [
                                (0, i.jsx)(tN, {
                                    name: et.intl.string(et.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(ey.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(tN, {
                                    name: et.intl.string(et.t["9rlCk1"]),
                                    count: n.length,
                                    icon: (0, i.jsx)(_.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(tx.Ip, {
                            className: tb.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tb.a9,
                                    children: et.intl.string(et.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tb.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            tN,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(Q.A, { game: p.get(a), size: Q.M.XSMALL }),
                                                isSelected: r === a,
                                                onClick: () => c(a),
                                            },
                                            a,
                                        );
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var tw = l(409067),
    tI = l(847455);
let tk = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function tL(e) {
    let { channelId: t, onClose: n, onClipClick: I, transitionState: k, initialEditingClipId: L, ...M } = e;
    (0, w.A)();
    let { analyticsLocations: D } = (0, j.Ay)(f.A.CLIPS_GALLERY),
        [T, S] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: P, favoriteClips: G, allClips: _ } = (0, tw.a)(),
        { onShareClick: z } = (0, E.A)(t),
        O = (0, r.bG)([C.Ay], () => C.Ay.getExportingClipIds().length > 0),
        [U, H] = a.useState(null != L ? "editing" : "gallery"),
        [F, K] = a.useState(L ?? null),
        B = (0, r.bG)([C.Ay], () => (null != F ? C.Ay.getClipById(F) : null), [F]),
        $ = a.useRef(U);
    ($.current = U), (a.useRef(F).current = F);
    let [Q, Y] = a.useState(null != L ? d.ip.ENTERED : d.ip.HIDDEN),
        V = a.useRef(null),
        X = (0, ts.Pu)((e) => e.selectedGameId),
        q = a.useMemo(
            () => (null == X || "favorites" === X ? null : (R.find((e) => e.applicationId === X) ?? null)),
            [X, R],
        ),
        W = a.useMemo(() => ("favorites" === X ? G : (q?.filteredClips ?? P)), [X, q, P, G]),
        Z = a.useMemo(
            () => ("favorites" === X ? et.intl.string(et.t["9rlCk1"]) : (q?.name ?? et.intl.string(et.t.dPVrEv))),
            [X, q],
        ),
        J = a.useCallback(() => {
            H("editing"), v.A.useReducedMotion && Y(d.ip.ENTERED);
        }, []),
        ee = a.useCallback((e) => {
            S((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        el = a.useCallback(
            (e) => {
                K(e.id), J();
            },
            [J],
        ),
        ei = a.useCallback(() => {
            v.A.useReducedMotion && K(null), H("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === $.current && (e.stopPropagation(), ei());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ei, n]),
        a.useEffect(
            () =>
                "editing" === U && null != F
                    ? void (0, y.YK)(F)
                    : ((0, y.jA)(),
                      () => {
                          (0, y.jA)();
                      }),
            [U, F],
        );
    let ea = a.useCallback(() => {
            S(new Set());
        }, []),
        en = T.size > 0,
        es = a.useCallback(() => {
            let e = _.filter((e) => T.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ea(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [_, T, ea]),
        er = a.useCallback(async () => {
            let e = _.filter((e) => T.has(e.id));
            await z({ clips: e }), ea();
        }, [_, T, z, ea]),
        ec = a.useMemo(
            () => ({ selectedClipIds: T, toggleClipSelection: ee, clearSelection: ea, isMultiSelectMode: en }),
            [T, ee, ea, en],
        );
    return (0, i.jsx)(j.f5, {
        value: D,
        children: (0, i.jsx)(tk.Provider, {
            value: ec,
            children: (0, i.jsx)(o.N, {
                onClose: n,
                transitionState: k,
                ...M,
                children: (0, i.jsxs)("div", {
                    className: tI.jT,
                    ref: V,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(tI.PD, "gallery" === U && tI.vu),
                            inert: "gallery" !== U,
                            children: [
                                (0, i.jsx)(tE, { clipsByGame: R, filteredClips: P, favoriteClips: G, allClips: _ }),
                                (0, i.jsxs)("div", {
                                    className: tI.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: tI.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: Z,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: tI.$s,
                                                    children: [
                                                        en &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(c.m, {
                                                                        text: et.intl.string(et.t.RDE0Sc),
                                                                        children: (0, i.jsx)(h.K, {
                                                                            onClick: er,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": et.intl.string(et.t.RDE0Sc),
                                                                            loading: O,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(c.m, {
                                                                        text: et.intl.string(et.t.oyYWHE),
                                                                        children: (0, i.jsx)(h.K, {
                                                                            onClick: es,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": et.intl.string(et.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(h.K, {
                                                            onClick: n,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": et.intl.string(et.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(td, {
                                            onEdit: el,
                                            channelId: t,
                                            filteredClips: W,
                                            totalClipCount: _.length,
                                            onClipClick: I,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(tI.jN, "editing" === U && tI.vu),
                            inert: "editing" !== U,
                            onTransitionEnd: () => {
                                "gallery" === U ? (K(null), Y(d.ip.HIDDEN)) : "editing" === U && Y(d.ip.ENTERED);
                            },
                            children:
                                null != B &&
                                (0, i.jsxs)(N.p, {
                                    clip: B,
                                    modalContainerRef: V,
                                    children: [
                                        (0, i.jsx)(b.A, { transitionState: Q, onClose: ei }),
                                        (0, i.jsx)(A.A, { channelId: t, onClose: ei }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
