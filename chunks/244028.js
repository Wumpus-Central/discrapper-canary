l.d(t, { $: () => tI, default: () => tw });
var i = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    r = l(17928),
    d = l(990078),
    c = l(521489),
    o = l(231723),
    u = l(192308),
    m = l(534514),
    h = l(408278),
    p = l(405433),
    x = l(241326),
    g = l(972213),
    f = l(775602),
    v = l(793574),
    j = l(688810),
    C = l(274372),
    y = l(607814),
    b = l(582633),
    A = l(309777),
    N = l(429364),
    E = l(352527),
    I = l(280483);
l(321073);
var w = l(562708),
    k = l(834730),
    L = l(289873),
    M = l(139286),
    D = l(962125);
let S = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var T = l(175841),
    R = l(449543),
    P = l(152858),
    G = l(939249),
    _ = l(27232),
    z = l(505930),
    U = l(821609),
    O = l(933832),
    H = l(97808),
    F = l(778712),
    K = l(22231),
    B = l(429913),
    $ = l(607470),
    Q = l(137177),
    Y = l(495544),
    V = l(287809),
    X = l(372684),
    q = l(140423),
    W = l(602902),
    Z = l(665039),
    J = l(16590),
    ee = l(375708),
    et = l(296364);
let el = ["clowning around", "good times", "team vibes", "epic teamwork"];
function ei(e) {
    let { clip: t, moment: l, onEdit: s } = e,
        n = (0, Z.j)(t),
        { analyticsLocations: c } = (0, j.Ay)(),
        o = (0, B.h)(t.applicationId),
        u = Y.default.getId(),
        g = (0, r.bG)([V.default], () => {
            let e = t.users.find((e) => e !== u);
            return null != e ? V.default.getUser(e) : null;
        }, [t.users, u]),
        f = null != g,
        { Icon: v } = l,
        C = f ? ee.intl.formatToPlainString(J.default.QJ7i8Z, { username: g.username }) : l.title,
        b = f ? el[t.id.charCodeAt(0) % el.length] : l.subtitle,
        A = t.type === X.nQ.SCREENSHOT,
        N = t.type === X.nQ.VOICE_CLIP,
        E = !A && !N && null != n,
        I = a.useRef(null),
        w = a.useCallback(() => {
            let e = I.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        L = a.useCallback(
            (e) => {
                let l = I.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let i = document.activeElement;
                null != i && e.currentTarget.contains(i) && !i.matches(":focus-visible") && i.blur();
            },
            [t.editMetadata?.start],
        ),
        M = a.useCallback(() => {
            let e = I.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        D = a.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                let l = I.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start],
        ),
        S = a.useCallback(
            (e) => {
                e.stopPropagation(), s(t);
            },
            [s, t],
        ),
        T = a.useCallback(() => {
            s(t);
        }, [s, t]),
        R = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, W.K)([t], { analyticsLocations: c });
            },
            [t, c],
        ),
        P = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.w7)(t.id);
            },
            [t.id],
        ),
        ei = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, q.R)({ clips: [t] });
            },
            [t],
        ),
        ea = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.XK)(t);
            },
            [t],
        ),
        es = !0 !== t.isTemporary,
        en = ee.intl.string(!0 === t.isFavorite ? J.default.IZsalP : J.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: et.Ui,
        onMouseEnter: w,
        onMouseLeave: L,
        onFocus: M,
        onBlur: D,
        children: (0, i.jsxs)(G.D, {
            className: et.Nr,
            "aria-label": ee.intl.string(ee.t.bt75uw),
            onClick: T,
            children: [
                (0, i.jsxs)("div", {
                    className: et.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: et.xn })
                            : (0, i.jsx)("div", { className: et.$$ }),
                        E
                            ? (0, i.jsx)($.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: n ?? void 0,
                                  className: et.xn,
                                  ref: I,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: et.D7 }),
                null != o &&
                    (0, i.jsx)("div", {
                        className: et.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(Q.A, { game: o, size: Q.M.XXSMALL, className: et.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: et.Nv,
                    children: [
                        es
                            ? (0, i.jsx)(
                                  d.m,
                                  {
                                      text: en,
                                      position: "top",
                                      children: (0, i.jsx)(h.K, {
                                          onClick: ea,
                                          icon: !0 === t.isFavorite ? _.G : z.y,
                                          "aria-label": en,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(U.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: O.A,
                                  text: ee.intl.string(ee.t["R3BPH+"]),
                                  onClick: P,
                              }),
                        (0, i.jsx)(d.m, {
                            text: ee.intl.string(ee.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(h.K, {
                                onClick: ei,
                                icon: x.u,
                                "aria-label": ee.intl.string(ee.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: et.Lw,
                    children: [
                        f && null != g
                            ? (0, i.jsx)(H.eu, {
                                  src: g.getAvatarURL(void 0, 32),
                                  size: F._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: et.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(v, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: C }),
                        (0, i.jsx)(k.E, { variant: "text-sm/medium", color: "always-white", children: b }),
                        (0, i.jsx)("div", { className: et.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: et.o1,
                    children: [
                        (0, i.jsx)(U.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: K.R,
                            text: ee.intl.string(ee.t.bt75uw),
                            onClick: S,
                        }),
                        (0, i.jsx)(U.$, {
                            variant: "primary",
                            size: "sm",
                            icon: p.l,
                            text: ee.intl.string(ee.t.RDE0Sc),
                            onClick: R,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ea = l(369606),
    es = l(845798),
    en = l(825860),
    er = l(926268);
let ed = [
    { Icon: T.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: ea.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: es.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: en.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: _.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: er.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eo = l(452143);
function eu(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([C.A], () => C.A.getClips()),
        s = a.useMemo(() => ec(l), [l]),
        n = a.useMemo(
            () =>
                s
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return ed[Math.abs(t) % ed.length];
                    }),
            [s],
        );
    return 0 === s.length
        ? null
        : (0, i.jsxs)("section", {
              className: eo.uW,
              "aria-label": ee.intl.string(J.default.efLpNC),
              children: [
                  (0, i.jsxs)("div", {
                      className: eo.wx,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eo.UP,
                              children: [
                                  (0, i.jsx)(T.B, { size: "refresh_sm", color: "white" }),
                                  (0, i.jsx)(k.E, {
                                      variant: "text-md/medium",
                                      color: "always-white",
                                      children: ee.intl.string(J.default.I1h8uD),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(m.D, {
                              variant: "display-md",
                              color: "always-white",
                              children: ee.intl.string(J.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(R.A, {
                      className: eo.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: P.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": ee.intl.string(J.default.efLpNC),
                      children: s.map((e, l) => (0, i.jsx)(ei, { clip: e, moment: n[l], onEdit: t }, e.id)),
                  }),
              ],
          });
}
var em = l(989349),
    eh = l.n(em),
    ep = l(66455),
    ex = l(342952),
    eg = l(890856),
    ef = l(777666),
    ev = l(530005),
    ej = l(406810),
    eC = l(176781),
    ey = l(661531),
    eb = l(983851),
    eA = l(31300),
    eN = l(442433),
    eE = l(587895),
    eI = l(47167),
    ew = l(734057),
    ek = l(71393),
    eL = l(549685),
    eM = l(174459),
    eD = l(58703),
    eS = l(403362),
    eT = l(226421),
    eR = l(284009),
    eP = l.n(eR),
    eG = l(460905),
    e_ = l(713608),
    ez = l(562153),
    eU = l(788332);
function eO(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eP()(l?.type === X.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([V.default], () => V.default.getUser(l.remoteTriggerUserId)),
        s = (0, ez.tx)(t.guildId, null, a);
    return null == a
        ? null
        : (0, i.jsx)(d.m, {
              text: ee.intl.string(J.default.vTTkFF),
              children: (0, i.jsxs)("div", {
                  className: eU.S,
                  children: [
                      (0, i.jsx)("img", { src: a.getAvatarURL(t.guildId, 12, !1), className: eU.$, alt: s }),
                      (0, i.jsx)(k.E, {
                          color: "always-white",
                          variant: "text-xs/bold",
                          children: ee.intl.formatToPlainString(J.default.QJ7i8Z, { username: s }),
                      }),
                  ],
              }),
          });
}
function eH(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(d.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eU.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(k.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eF(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === X.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case X.Gy.DISTRIBUTED:
            return (0, i.jsx)(eO, { clip: t });
        case X.Gy.LAUGHTER:
            return (0, i.jsx)(eH, {
                icon: eG.n,
                text: ee.intl.string(J.default.bTC23D),
                tooltipText: ee.intl.string(J.default["ry+jxm"]),
            });
        case X.Gy.GAME_EVENT:
            return (0, i.jsx)(eH, {
                icon: e_.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ee.intl.string(J.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eK = l(718812),
    eB = l(652215),
    e$ = l(798594);
let eQ = function (e) {
    let { clip: t, actionsDisabled: s, isNew: d, onEdit: c, onClick: o } = e,
        u = (0, r.yK)([V.default], () => t.users.map((e) => V.default.getUser(e)).filter(eS.Vq)),
        m = (0, r.bG)([ew.A], () => (null != t.channelId ? ew.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([ek.A], () => (null != t.guildId ? ek.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, j.Ay)(v.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: f } = a.useContext(tI),
        [y, b] = a.useState(!1),
        A = a.useRef(null),
        N = (0, ep.A)(t.editMetadata?.start ?? 0),
        E = x.has(t.id),
        I = t.type === X.nQ.SCREENSHOT,
        w = (0, eI.Ay)(m),
        L = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        M = (0, eD.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === X.nQ.VOICE_CLIP
                    ? (h?.name != null && e.push(h.name), null != w && e.push(w))
                    : ("" !== L && null != L && e.push(L),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [L, h?.name, w, t.activity?.state, t.activity?.details, t.type]),
        S = a.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        T = a.useCallback(() => {
            if (!0 === I) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = N.current), A.current?.play());
        }, [I, N]),
        R = a.useCallback(() => {
            if (!0 === I) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start]),
        P = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && R();
            },
            [R],
        ),
        G = a.useCallback(() => {
            b(!1);
        }, []),
        _ = a.useCallback(
            (e) => {
                b(!0), A.current?.pause();
                let a =
                    f && x.size > 0
                        ? Array.from(x)
                              .map((e) => C.A.getClipById(e))
                              .filter(eS.Vq)
                        : [t];
                (0, eN.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("616"),
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
                                actionsDisabled: s,
                                onShare: () => {
                                    eM.default.track(eB.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), eM.default.track(eB.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: S,
                                onAfterDelete: () => {
                                    eM.default.track(eB.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: G },
                );
            },
            [t, f, x, s, S, G, c],
        ),
        z = a.useCallback(
            (e) => {
                s || (e.preventDefault(), e.stopPropagation(), _(e));
            },
            [s, _],
        ),
        U = a.useCallback(
            (e) => {
                s ||
                    (e.shiftKey ? (e.preventDefault(), g(t.id)) : f ? g(t.id) : null != o && o(t),
                    eM.default.track(eB.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, f, g, t, o],
        );
    return (0, i.jsx)(j.f5, {
        value: p,
        children: (0, i.jsxs)(eg.s, {
            "aria-disabled": s,
            "aria-label": ee.intl.string(!0 === I ? ee.t["HO/oXl"] : ee.t.bt75uw),
            onClick: s ? void 0 : U,
            onContextMenu: z,
            className: n()(e$.QN, { [e$.r9]: s, [e$.in]: y, [e$.wH]: E }),
            onBlur: P,
            onFocus: T,
            onMouseOver: T,
            onMouseLeave: R,
            children: [
                (0, i.jsx)(eY, { clip: t, isNew: d, videoRef: A, onOpenContextMenu: _, actionsDisabled: s }),
                (0, i.jsxs)("div", {
                    className: e$.wI,
                    children: [
                        (0, i.jsx)(eq, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: e$.i0,
                            children: [
                                (0, i.jsx)(eV, { clip: t }),
                                (0, i.jsx)(k.E, {
                                    className: e$.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: D,
                                }),
                                (0, i.jsx)(k.E, {
                                    className: e$.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: e$.jW,
                            children: (0, i.jsx)(ex.A, {
                                maxUsers: 3,
                                users: u,
                                size: F._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && T());
                                },
                                "aria-label": ee.intl.string(ee.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function eY(e) {
    let { clip: t, isNew: l, videoRef: s, onOpenContextMenu: n, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [u, m] = a.useState(0);
    a.useEffect(() => {
        let e = s.current;
        if (null == e || c) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    s = t.editMetadata?.end ?? e.duration,
                    n = ((e.currentTime - a) / (s - a)) * 100;
                m(isNaN(n) ? 0 : Math.max(0, Math.min(100, n))), (l = requestAnimationFrame(i));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            n = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", n),
            e.addEventListener("ended", n),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", n),
                    e.removeEventListener("ended", n);
            }
        );
    }, [s, c, t.editMetadata]);
    let { durationDisplay: p, isClipEdited: x } = a.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                i = !1;
            if (null != t.editMetadata) {
                let a = null != l && 1e3 * l < t.length,
                    s =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (i = a || s), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let a = eh().duration(e),
                s = a.minutes(),
                n = a.seconds();
            return 0 === s
                ? { durationDisplay: `${n}s`, isClipEdited: i }
                : { durationDisplay: `${s}:${n.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), y.XK(t);
            },
            [t],
        ),
        f = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || n(e);
            },
            [r, n],
        );
    return (0, i.jsxs)("div", {
        className: e$.QB,
        children: [
            (0, i.jsx)("div", { className: e$.ne }),
            (0, i.jsx)(eX, { clip: t, videoRef: s }),
            (0, i.jsxs)("div", {
                className: e$.ry,
                children: [
                    !o && l && (0, i.jsx)(ef.Lp, { text: ee.intl.string(ee.t.y2b7CA) }),
                    (0, i.jsx)(eF, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: e$.g3,
                    children: [
                        (0, i.jsx)(
                            d.m,
                            {
                                text: ee.intl.string(t.isFavorite ? J.default.IZsalP : J.default.ihBfyA),
                                position: "top",
                                children: (0, i.jsx)(h.K, {
                                    onClick: g,
                                    icon: t.isFavorite ? _.G : z.y,
                                    "aria-label": ee.intl.string(ee.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(h.K, {
                            onClick: f,
                            icon: ev.F,
                            "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: e$.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: e$.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(ej.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(k.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ee.intl.string(ee.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: e$.OH,
                            children: [
                                x && (0, i.jsx)(eL.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? ee.intl.string(ee.t["2Fp7OP"]) : p,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: e$.X7,
                    children: (0, i.jsx)("div", { className: e$.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eV(e) {
    let { clip: t } = e,
        l = (0, eK.h)(t),
        a = "" !== l;
    return (0, i.jsx)(k.E, {
        className: e$.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eX(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, Z.j)(t),
        s = t.type === X.nQ.SCREENSHOT;
    return t.type === X.nQ.VOICE_CLIP
        ? (0, i.jsx)(eT.A, { className: e$.fT })
        : s
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: e$.fT })
          : null != a
            ? (0, i.jsx)($.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: e$.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: e$.fT })
              : (0, i.jsx)("div", {
                    className: n()(e$.fT, e$.Is),
                    children: (0, i.jsx)(eC.x, { color: ey.A.colors.ICON_MUTED }),
                });
}
function eq(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eE.A], () => (null != t.applicationId ? eE.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: e$.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: e$.NH })
                : t.type === X.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eb.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eA.k, { size: "sm", color: "currentColor" }),
    });
}
function eW(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: s, width: n = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: n, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var eZ = l(702841),
    eJ = l(687966),
    e0 = l(475358),
    e2 = l(123292),
    e1 = l(292801),
    e3 = l(780964),
    e7 = l(766075),
    e6 = l(532624),
    e5 = l(350535),
    e8 = l(572164),
    e4 = l(953932),
    e9 = l(311162);
function te(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: e9.Nr,
        children: [t, (0, i.jsx)(k.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function tt() {
    let e = (0, eZ.bG)([e6.Ay], () => e6.Ay.getKeybindForAction(eB.hCu.SAVE_CLIP)),
        t = null != e ? e5.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: e9.kR,
        children: [
            (0, i.jsx)(te, {
                header: (0, i.jsx)(eJ._, { size: "refresh_sm", color: ey.A.colors.ICON_DEFAULT }),
                description: ee.intl.string(J.default["4K56sP"]),
            }),
            (0, i.jsx)(te, {
                header: null != t ? (0, i.jsx)(e0.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ee.intl.format(J.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: e9.JH,
                                      children: (0, i.jsx)(e2.Q, {
                                          text: ee.intl.string(J.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, e7.openUserSettings)(e3.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ee.intl.string(J.default.HOUDUm),
            }),
            (0, i.jsx)(te, {
                header: (0, i.jsx)(e1.t, { size: "refresh_sm", color: ey.A.colors.ICON_DEFAULT }),
                description: ee.intl.string(J.default.DLzdl7),
            }),
        ],
    });
}
function tl(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, e8.Et)();
    return (0, i.jsx)("div", {
        className: e9.kL,
        children: (0, i.jsxs)("div", {
            className: e9.Qs,
            children: [
                (0, i.jsx)(eW, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: e9.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ee.intl.string(J.default["+M2iLf"]) : ee.intl.string(J.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(k.E, {
                        className: e9.h_,
                        variant: "text-md/medium",
                        children: ee.intl.string(J.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: e9.SO, children: (0, i.jsx)(e4.A, {}) }),
                l && !t && (0, i.jsx)(tt, {}),
            ],
        }),
    });
}
let ti = 16 / 9;
var ta = l(792852),
    ts = l(352528);
let tn = [0, 16, 0, 16],
    tr = tn[1] + tn[3];
function td(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: n } = e,
        [d, c] = a.useState(!0),
        [o, u] = a.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        p = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        x = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        g = (0, r.bG)([C.A], () => ec(C.A.getClips()).length > 0),
        f = (0, ta.Pu)(ta.mp),
        { enableAutoClipsReview: v } = S.useConfig({ location: "ClipsGalleryContent" }),
        j = v && g && !f;
    (0, M.A)(
        {
            type: w.ImpressionTypes.MODAL,
            name: w.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: d },
        [t.length, d],
    );
    let b = a.useMemo(() => {
            let e = [],
                l = new Map(),
                i = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let s = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === s)) i.push(e);
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
                    title: ee.intl.string(ee.t["kB2R/0"]),
                    description: t ? ee.intl.string(ee.t["6AXirz"]) : void 0,
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
        { width: A } = o,
        { tileWidth: N, columns: E } = a.useMemo(() => {
            var e, l;
            let i, a, s;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = A - tr) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (s = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: s }
            );
        }, [t.length, A]);
    a.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await y.Fb(h);
            } finally {
                c(!1);
            }
        })();
    }, [h]);
    let I = a.useMemo(() => b.map((e) => Math.ceil(e.clips.length / E)), [b, E]),
        T = a.useMemo(() => I.reduce((e, t) => e + t, 0), [I]),
        R = Math.floor(N / ti),
        P = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = b[l];
                if (null == r) return null;
                let d = a * E,
                    c = r.clips.slice(d, d + E);
                return (0, i.jsx)(
                    "div",
                    {
                        className: ts.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: N },
                                    children: (0, i.jsx)(eQ, {
                                        actionsDisabled: x,
                                        isNew: p.includes(e.id),
                                        onClick: s ?? n,
                                        onEdit: n,
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
            [b, E, N, x, p, s, n],
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
                              className: ts.aE,
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
                                          className: ts.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [b],
        );
    return d || 0 !== b.length
        ? d
            ? (0, i.jsx)("div", { className: ts.dc, children: (0, i.jsx)(L.y, {}) })
            : (0, i.jsx)(D.A, {
                  listPadding: tn,
                  renderListHeader: j ? () => (0, i.jsx)(eu, { onEdit: n }) : void 0,
                  listHeaderHeight: 520 * !!j,
                  renderRow: P,
                  renderSectionHeader: _,
                  rowCount: T,
                  rowCountBySection: I,
                  rowHeight: R + 68 + 16,
                  sectionHeaderHeight: G,
                  onResize: u,
              })
        : (0, i.jsx)(tl, { isEmptyBecauseQuery: l > 0 });
}
var tc = l(922016),
    to = l(783977),
    tu = l(625903),
    tm = l(892547),
    th = l(364522),
    tp = l(91871),
    tx = l.n(tp),
    tg = l(980707),
    tf = l(477782),
    tv = l(583650);
function tj(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: s,
            selectedActivity: n,
            selectedGuildId: r,
            selectedYear: d,
            sortOrder: c,
            toggleUserId: o,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: h,
            setSortOrder: p,
            clearFilters: x,
        } = (0, ta.Pu)(),
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
        f = a.useMemo(
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
        v = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = ek.A.getGuild(e);
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
        I = a.useMemo(
            () => (0 === C.trim().length ? g : g.filter((e) => tx()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        w = a.useMemo(
            () => (0 === b.trim().length ? v : v.filter((e) => tx()(b.toLowerCase(), e.name.toLowerCase()))),
            [v, b],
        ),
        k = a.useMemo(
            () => (0 === N.trim().length ? f : f.filter((e) => tx()(N.toLowerCase(), e.toLowerCase()))),
            [f, N],
        ),
        L = s.size > 0 || null != n || null != r || null != d,
        M = a.useMemo(() => {
            if (0 !== s.size)
                return g
                    .filter((e) => s.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [s, g]),
        D = a.useMemo(() => {
            if (null == r) return;
            let e = v.find((e) => e.guildId === r);
            return e?.name;
        }, [r, v]),
        S = a.useMemo(() => n ?? void 0, [n]),
        T = a.useMemo(() => (null != d ? String(d) : void 0), [d]);
    return (0, i.jsxs)(tg.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ee.intl.string(ee.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tf.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(tf.Dr, {
                            id: "participants",
                            label: ee.intl.string(ee.t.YQ6dJg),
                            subtext: M,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(tf.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tv.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: ee.intl.string(ee.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tf.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, i.jsxs)(tf.Dr, {
                            id: "servers",
                            label: ee.intl.string(ee.t["5qyruI"]),
                            subtext: D,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tf.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tv.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ee.intl.string(ee.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tf.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ee.intl.string(ee.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                w.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tf.iD,
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
                    f.length > 0 &&
                        (0, i.jsxs)(tf.Dr, {
                            id: "activities",
                            label: ee.intl.string(ee.t.agRtPG),
                            subtext: S,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(tf.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tv.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ee.intl.string(ee.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tf.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ee.intl.string(ee.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == n,
                                }),
                                k.map((e) =>
                                    (0, i.jsx)(
                                        tf.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: n === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    j.length > 0 &&
                        (0, i.jsxs)(tf.Dr, {
                            id: "years",
                            label: ee.intl.string(ee.t.w9zd68),
                            subtext: T,
                            children: [
                                (0, i.jsx)(tf.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ee.intl.string(ee.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        tf.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => h(e),
                                            checked: d === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tf.rX, {
                label: ee.intl.string(ee.t.XvNMNk),
                children: [
                    (0, i.jsx)(tf.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ee.intl.string(ee.t["4LLKx3"]),
                        action: () => p("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(tf.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ee.intl.string(ee.t["0gitSE"]),
                        action: () => p("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            L &&
                (0, i.jsx)(tf.rX, {
                    children: (0, i.jsx)(tf.Dr, { id: "clear-filters", label: ee.intl.string(ee.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var tC = l(174726);
let ty = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = (0, ta.Pu)(),
            n = (0, eZ.bG)([e6.Ay], () => e6.Ay.getKeybindForAction(eB.hCu.SAVE_CLIP)),
            r = (0, ta.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = a.useCallback(() => {
                (0, e7.openUserSettings)(e3.X.CLIPS_PANEL);
            }, []),
            o = a.useCallback(() => s(""), [s]),
            u = null != n ? e5.dI(n.shortcut, !0) : null,
            p = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tC.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tC.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tC.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ee.intl.string(ee.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(e0.e, { className: tC.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tC.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: ee.intl.string(ee.t.X7yRDm),
                                    children: (0, i.jsx)(tc.Y, {
                                        position: "bottom",
                                        targetElementRef: p,
                                        renderPopout: (e) => (0, i.jsx)(tj, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: p,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(U.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: ee.intl.formatToPlainString(J.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: to.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(h.K, {
                                                              icon: to.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": ee.intl.string(ee.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: ee.intl.string(ee.t["3D5yo/"]),
                                    children: (0, i.jsx)(h.K, {
                                        onClick: c,
                                        icon: tu.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ee.intl.string(ee.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tC.MT,
                    children: (0, i.jsx)(tm.I, {
                        placeholder: ee.intl.string(ee.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: o,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    tb = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: s, onClick: r } = e;
        return (0, i.jsxs)(G.D, {
            className: n()(tC.MV, { [tC.wH]: s }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tC.tk,
                    children: [
                        a,
                        (0, i.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tC.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tC.z2,
                    children: (0, i.jsx)(k.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tA(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: n } = e,
        r = (0, ta.Pu)((e) => e.selectedGameId),
        d = (0, ta.Pu)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, B.A)(c),
        u = a.useCallback(() => d(null), [d]),
        h = a.useCallback(() => d("favorites"), [d]),
        p = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: tC.pz,
        children: [
            (0, i.jsx)(ty, { allClips: n }),
            (0, i.jsxs)("div", {
                className: tC.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tC.om,
                        children: (0, i.jsxs)("div", {
                            className: tC.Ep,
                            children: [
                                (0, i.jsx)(tb, {
                                    name: ee.intl.string(ee.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(eC.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(tb, {
                                    name: ee.intl.string(ee.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, i.jsx)(_.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(th.Ip, {
                            className: tC.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tC.a9,
                                    children: ee.intl.string(ee.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tC.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            tb,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(Q.A, { game: p.get(a), size: Q.M.XSMALL }),
                                                isSelected: r === a,
                                                onClick: () => d(a),
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
var tN = l(409067),
    tE = l(847455);
let tI = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function tw(e) {
    let { channelId: t, onClose: s, onClipClick: w, transitionState: k, initialEditingClipId: L, ...M } = e;
    (0, I.A)();
    let { analyticsLocations: D } = (0, j.Ay)(v.A.CLIPS_GALLERY),
        [S, T] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: P, favoriteClips: G, allClips: _ } = (0, tN.a)(),
        { onShareClick: z } = (0, E.A)(t),
        U = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [O, H] = a.useState(null != L ? "editing" : "gallery"),
        [F, K] = a.useState(L ?? null),
        B = (0, r.bG)([C.A], () => (null != F ? C.A.getClipById(F) : null), [F]),
        $ = a.useRef(O);
    ($.current = O), (a.useRef(F).current = F);
    let [Q, Y] = a.useState(null != L ? o.ip.ENTERED : o.ip.HIDDEN),
        V = a.useRef(null),
        X = (0, ta.Pu)((e) => e.selectedGameId),
        q = a.useMemo(
            () => (null == X || "favorites" === X ? null : (R.find((e) => e.applicationId === X) ?? null)),
            [X, R],
        ),
        W = a.useMemo(() => ("favorites" === X ? G : (q?.filteredClips ?? P)), [X, q, P, G]),
        Z = a.useMemo(
            () => ("favorites" === X ? ee.intl.string(ee.t["9rlCk1"]) : (q?.name ?? ee.intl.string(ee.t.dPVrEv))),
            [X, q],
        ),
        J = a.useCallback(() => {
            H("editing"), f.A.useReducedMotion && Y(o.ip.ENTERED);
        }, []),
        et = a.useCallback((e) => {
            T((t) => {
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
            f.A.useReducedMotion && K(null), H("gallery");
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
    }, [ei, s]),
        a.useEffect(
            () =>
                "editing" === O && null != F
                    ? void (0, y.YK)(F)
                    : ((0, y.jA)(),
                      () => {
                          (0, y.jA)();
                      }),
            [O, F],
        );
    let ea = a.useCallback(() => {
            T(new Set());
        }, []),
        es = S.size > 0,
        en = a.useCallback(() => {
            let e = _.filter((e) => S.has(e.id));
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
        }, [_, S, ea]),
        er = a.useCallback(async () => {
            let e = _.filter((e) => S.has(e.id));
            await z({ clips: e }), ea();
        }, [_, S, z, ea]),
        ed = a.useMemo(
            () => ({ selectedClipIds: S, toggleClipSelection: et, clearSelection: ea, isMultiSelectMode: es }),
            [S, et, ea, es],
        );
    return (0, i.jsx)(j.f5, {
        value: D,
        children: (0, i.jsx)(tI.Provider, {
            value: ed,
            children: (0, i.jsx)(c.N, {
                onClose: s,
                transitionState: k,
                ...M,
                children: (0, i.jsxs)("div", {
                    className: tE.jT,
                    ref: V,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n()(tE.PD, "gallery" === O && tE.vu),
                            "aria-hidden": "gallery" !== O,
                            children: [
                                (0, i.jsx)(tA, { clipsByGame: R, filteredClips: P, favoriteClips: G, allClips: _ }),
                                (0, i.jsxs)("div", {
                                    className: tE.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: tE.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: Z,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: tE.$s,
                                                    children: [
                                                        es &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: ee.intl.string(ee.t.RDE0Sc),
                                                                        children: (0, i.jsx)(h.K, {
                                                                            onClick: er,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ee.intl.string(ee.t.RDE0Sc),
                                                                            loading: U,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: ee.intl.string(ee.t.oyYWHE),
                                                                        children: (0, i.jsx)(h.K, {
                                                                            onClick: en,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ee.intl.string(ee.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(h.K, {
                                                            onClick: s,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
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
                                            onClipClick: w,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: n()(tE.jN, "editing" === O && tE.vu),
                            "aria-hidden": "editing" !== O,
                            onTransitionEnd: () => {
                                "gallery" === O ? (K(null), Y(o.ip.HIDDEN)) : "editing" === O && Y(o.ip.ENTERED);
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
