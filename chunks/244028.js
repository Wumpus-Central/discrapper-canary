l.d(t, { $: () => tw, default: () => tk });
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
    y = l(315240),
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
    let { clip: t, moment: l, onEdit: s } = e,
        n = (0, J.j)(t),
        { analyticsLocations: c } = (0, j.Ay)(),
        o = (0, B.h)(t.applicationId),
        u = Y.default.getId(),
        g = (0, r.bG)([V.default], () => {
            let e = t.users.find((e) => e !== u);
            return null != e ? V.default.getUser(e) : null;
        }, [t.users, u]),
        f = null != g,
        v = (0, X.tx)(g),
        { Icon: C } = l,
        b = f ? et.intl.formatToPlainString(ee.default.QJ7i8Z, { username: v }) : l.title,
        A = f ? ei[t.id.charCodeAt(0) % ei.length] : l.subtitle,
        N = t.type === q.nQ.SCREENSHOT,
        E = t.type === q.nQ.VOICE_CLIP,
        I = !N && !E && null != n,
        w = a.useRef(null),
        L = a.useCallback(() => {
            let e = w.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        M = a.useCallback(
            (e) => {
                let l = w.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let i = document.activeElement;
                null != i && e.currentTarget.contains(i) && !i.matches(":focus-visible") && i.blur();
            },
            [t.editMetadata?.start],
        ),
        D = a.useCallback(() => {
            let e = w.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start]),
        S = a.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                let l = w.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start],
        ),
        T = a.useCallback(
            (e) => {
                e.stopPropagation(), s(t);
            },
            [s, t],
        ),
        R = a.useCallback(() => {
            s(t);
        }, [s, t]),
        P = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, Z.K)([t], { analyticsLocations: c });
            },
            [t, c],
        ),
        ea = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.w7)(t.id);
            },
            [t.id],
        ),
        es = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, W.R)({ clips: [t] });
            },
            [t],
        ),
        en = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, y.XK)(t);
            },
            [t],
        ),
        er = !0 !== t.isTemporary,
        ed = et.intl.string(!0 === t.isFavorite ? ee.default.IZsalP : ee.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: el.Ui,
        onMouseEnter: L,
        onMouseLeave: M,
        onFocus: D,
        onBlur: S,
        children: (0, i.jsxs)(G.D, {
            className: el.Nr,
            "aria-label": et.intl.string(et.t.bt75uw),
            onClick: R,
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
                                  src: n ?? void 0,
                                  className: el.xn,
                                  ref: w,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: el.D7 }),
                null != o &&
                    (0, i.jsx)("div", {
                        className: el.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(Q.A, { game: o, size: Q.M.XXSMALL, className: el.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: el.Nv,
                    children: [
                        er
                            ? (0, i.jsx)(
                                  d.m,
                                  {
                                      text: ed,
                                      position: "top",
                                      children: (0, i.jsx)(h.K, {
                                          onClick: en,
                                          icon: !0 === t.isFavorite ? _.G : z.y,
                                          "aria-label": ed,
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
                                  text: et.intl.string(et.t["R3BPH+"]),
                                  onClick: ea,
                              }),
                        (0, i.jsx)(d.m, {
                            text: et.intl.string(et.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(h.K, {
                                onClick: es,
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
                        f && null != g
                            ? (0, i.jsx)(H.eu, {
                                  src: g.getAvatarURL(void 0, 32),
                                  size: F._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: el.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(C, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(m.D, { variant: "heading-md/extrabold", color: "always-white", children: b }),
                        (0, i.jsx)(k.E, { variant: "text-sm/medium", color: "always-white", children: A }),
                        (0, i.jsx)("div", { className: el.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: el.o1,
                    children: [
                        (0, i.jsx)(U.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: K.R,
                            text: et.intl.string(et.t.bt75uw),
                            onClick: T,
                        }),
                        (0, i.jsx)(U.$, {
                            variant: "primary",
                            size: "sm",
                            icon: p.l,
                            text: et.intl.string(et.t.RDE0Sc),
                            onClick: P,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var es = l(369606),
    en = l(845798),
    er = l(825860),
    ed = l(926268);
let ec = [
    { Icon: T.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: es.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: en.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: er.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: _.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: ed.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eu = l(452143);
function em(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([C.A], () => C.A.getClips()),
        s = a.useMemo(() => eo(l), [l]),
        n = a.useMemo(
            () =>
                s
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return ec[Math.abs(t) % ec.length];
                    }),
            [s],
        );
    return 0 === s.length
        ? null
        : (0, i.jsxs)("section", {
              className: eu.uW,
              "aria-label": et.intl.string(ee.default.efLpNC),
              children: [
                  (0, i.jsxs)("div", {
                      className: eu.wx,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eu.UP,
                              children: [
                                  (0, i.jsx)(T.B, { size: "refresh_sm", color: "white" }),
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
                      children: s.map((e, l) => (0, i.jsx)(ea, { clip: e, moment: n[l], onEdit: t }, e.id)),
                  }),
              ],
          });
}
var eh = l(989349),
    ep = l.n(eh),
    ex = l(66455),
    eg = l(342952),
    ef = l(890856),
    ev = l(777666),
    ej = l(530005),
    eC = l(406810),
    ey = l(176781),
    eb = l(661531),
    eA = l(983851),
    eN = l(31300),
    eE = l(442433),
    eI = l(587895),
    ew = l(47167),
    ek = l(734057),
    eL = l(71393),
    eM = l(549685),
    eD = l(174459),
    eS = l(58703),
    eT = l(403362),
    eR = l(226421),
    eP = l(284009),
    eG = l.n(eP),
    e_ = l(460905),
    ez = l(713608),
    eU = l(562153),
    eO = l(788332);
function eH(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eG()(l?.type === q.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([V.default], () => V.default.getUser(l.remoteTriggerUserId)),
        s = (0, eU.tx)(t.guildId, null, a);
    return null == a
        ? null
        : (0, i.jsx)(d.m, {
              text: et.intl.string(ee.default.vTTkFF),
              children: (0, i.jsxs)("div", {
                  className: eO.S,
                  children: [
                      (0, i.jsx)("img", { src: a.getAvatarURL(t.guildId, 12, !1), className: eO.$, alt: s }),
                      (0, i.jsx)(k.E, {
                          color: "always-white",
                          variant: "text-xs/bold",
                          children: et.intl.formatToPlainString(ee.default.QJ7i8Z, { username: s }),
                      }),
                  ],
              }),
          });
}
function eF(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(d.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eO.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(k.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eK(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === q.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case q.Gy.DISTRIBUTED:
            return (0, i.jsx)(eH, { clip: t });
        case q.Gy.LAUGHTER:
            return (0, i.jsx)(eF, {
                icon: e_.n,
                text: et.intl.string(ee.default.bTC23D),
                tooltipText: et.intl.string(ee.default["ry+jxm"]),
            });
        case q.Gy.GAME_EVENT:
            return (0, i.jsx)(eF, {
                icon: ez.q,
                text: t.decision.signal.title ?? "",
                tooltipText: et.intl.string(ee.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eB = l(718812),
    e$ = l(652215),
    eQ = l(798594);
let eY = function (e) {
    let { clip: t, actionsDisabled: s, isNew: d, onEdit: c, onClick: o } = e,
        u = (0, r.yK)([V.default], () => t.users.map((e) => V.default.getUser(e)).filter(eT.Vq)),
        m = (0, r.bG)([ek.A], () => (null != t.channelId ? ek.A.getChannel(t.channelId) : null)),
        h = (0, r.bG)([eL.A], () => (null != t.guildId ? eL.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, j.Ay)(v.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: f } = a.useContext(tw),
        [y, b] = a.useState(!1),
        A = a.useRef(null),
        N = (0, ex.A)(t.editMetadata?.start ?? 0),
        E = x.has(t.id),
        I = t.type === q.nQ.SCREENSHOT,
        w = (0, ew.Ay)(m),
        L = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        M = (0, eS.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === q.nQ.VOICE_CLIP
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
                              .filter(eT.Vq)
                        : [t];
                (0, eE.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("78900"),
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
                                    eD.default.track(e$.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), eD.default.track(e$.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: S,
                                onAfterDelete: () => {
                                    eD.default.track(e$.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
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
                    eD.default.track(e$.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, f, g, t, o],
        );
    return (0, i.jsx)(j.f5, {
        value: p,
        children: (0, i.jsxs)(ef.s, {
            "aria-disabled": s,
            "aria-label": et.intl.string(!0 === I ? et.t["HO/oXl"] : et.t.bt75uw),
            onClick: s ? void 0 : U,
            onContextMenu: z,
            className: n()(eQ.QN, { [eQ.r9]: s, [eQ.in]: y, [eQ.wH]: E }),
            onBlur: P,
            onFocus: T,
            onMouseOver: T,
            onMouseLeave: R,
            children: [
                (0, i.jsx)(eV, { clip: t, isNew: d, videoRef: A, onOpenContextMenu: _, actionsDisabled: s }),
                (0, i.jsxs)("div", {
                    className: eQ.wI,
                    children: [
                        (0, i.jsx)(eW, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: eQ.i0,
                            children: [
                                (0, i.jsx)(eX, { clip: t }),
                                (0, i.jsx)(k.E, {
                                    className: eQ.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: D,
                                }),
                                (0, i.jsx)(k.E, {
                                    className: eQ.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: eQ.jW,
                            children: (0, i.jsx)(eg.A, {
                                maxUsers: 3,
                                users: u,
                                size: F._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && T());
                                },
                                "aria-label": et.intl.string(et.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function eV(e) {
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
            let a = ep().duration(e),
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
        className: eQ.QB,
        children: [
            (0, i.jsx)("div", { className: eQ.ne }),
            (0, i.jsx)(eq, { clip: t, videoRef: s }),
            (0, i.jsxs)("div", {
                className: eQ.ry,
                children: [
                    !o && l && (0, i.jsx)(ev.Lp, { text: et.intl.string(et.t.y2b7CA) }),
                    (0, i.jsx)(eK, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eQ.g3,
                    children: [
                        (0, i.jsx)(
                            d.m,
                            {
                                text: et.intl.string(t.isFavorite ? ee.default.IZsalP : ee.default.ihBfyA),
                                position: "top",
                                children: (0, i.jsx)(h.K, {
                                    onClick: g,
                                    icon: t.isFavorite ? _.G : z.y,
                                    "aria-label": et.intl.string(et.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(h.K, {
                            onClick: f,
                            icon: ej.F,
                            "aria-label": et.intl.string(et.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: eQ.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eQ.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(eC.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(k.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: et.intl.string(et.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: eQ.OH,
                            children: [
                                x && (0, i.jsx)(eM.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? et.intl.string(et.t["2Fp7OP"]) : p,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: eQ.X7,
                    children: (0, i.jsx)("div", { className: eQ.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eX(e) {
    let { clip: t } = e,
        l = (0, eB.h)(t),
        a = "" !== l;
    return (0, i.jsx)(k.E, {
        className: eQ.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eq(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, J.j)(t),
        s = t.type === q.nQ.SCREENSHOT;
    return t.type === q.nQ.VOICE_CLIP
        ? (0, i.jsx)(eR.A, { className: eQ.fT })
        : s
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eQ.fT })
          : null != a
            ? (0, i.jsx)($.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eQ.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eQ.fT })
              : (0, i.jsx)("div", {
                    className: n()(eQ.fT, eQ.Is),
                    children: (0, i.jsx)(ey.x, { color: eb.A.colors.ICON_MUTED }),
                });
}
function eW(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eI.A], () => (null != t.applicationId ? eI.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eQ.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eQ.NH })
                : t.type === q.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eA.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eN.k, { size: "sm", color: "currentColor" }),
    });
}
function eZ(e) {
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
var eJ = l(702841),
    e0 = l(687966),
    e2 = l(475358),
    e1 = l(123292),
    e3 = l(292801),
    e7 = l(780964),
    e6 = l(766075),
    e5 = l(532624),
    e8 = l(350535),
    e4 = l(572164),
    e9 = l(953932),
    te = l(311162);
function tt(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: te.Nr,
        children: [t, (0, i.jsx)(k.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function tl() {
    let e = (0, eJ.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(e$.hCu.SAVE_CLIP)),
        t = null != e ? e8.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: te.kR,
        children: [
            (0, i.jsx)(tt, {
                header: (0, i.jsx)(e0._, { size: "refresh_sm", color: eb.A.colors.ICON_DEFAULT }),
                description: et.intl.string(ee.default["4K56sP"]),
            }),
            (0, i.jsx)(tt, {
                header: null != t ? (0, i.jsx)(e2.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  et.intl.format(ee.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: te.JH,
                                      children: (0, i.jsx)(e1.Q, {
                                          text: et.intl.string(ee.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, e6.openUserSettings)(e7.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : et.intl.string(ee.default.HOUDUm),
            }),
            (0, i.jsx)(tt, {
                header: (0, i.jsx)(e3.t, { size: "refresh_sm", color: eb.A.colors.ICON_DEFAULT }),
                description: et.intl.string(ee.default.DLzdl7),
            }),
        ],
    });
}
function ti(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, e4.Et)();
    return (0, i.jsx)("div", {
        className: te.kL,
        children: (0, i.jsxs)("div", {
            className: te.Qs,
            children: [
                (0, i.jsx)(eZ, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: te.wx,
                    variant: "heading-xl/semibold",
                    children: t ? et.intl.string(ee.default["+M2iLf"]) : et.intl.string(ee.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(k.E, {
                        className: te.h_,
                        variant: "text-md/medium",
                        children: et.intl.string(ee.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: te.SO, children: (0, i.jsx)(e9.A, {}) }),
                l && !t && (0, i.jsx)(tl, {}),
            ],
        }),
    });
}
let ta = 16 / 9;
var ts = l(792852),
    tn = l(352528);
let tr = [0, 16, 0, 16],
    td = tr[1] + tr[3];
function tc(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: s, onEdit: n } = e,
        [d, c] = a.useState(!0),
        [o, u] = a.useState({ width: 0, height: 0 }),
        h = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        p = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        x = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        g = (0, r.bG)([C.A], () => eo(C.A.getClips()).length > 0),
        f = (0, ts.Pu)(ts.mp),
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
        { width: A } = o,
        { tileWidth: N, columns: E } = a.useMemo(() => {
            var e, l;
            let i, a, s;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = A - td) + 16) / 336))),
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
        R = Math.floor(N / ta),
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
                        className: tn.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: N },
                                    children: (0, i.jsx)(eY, {
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
                              className: tn.aE,
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
                                          className: tn.yV,
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
            ? (0, i.jsx)("div", { className: tn.dc, children: (0, i.jsx)(L.y, {}) })
            : (0, i.jsx)(D.A, {
                  listPadding: tr,
                  renderListHeader: j ? () => (0, i.jsx)(em, { onEdit: n }) : void 0,
                  listHeaderHeight: 520 * !!j,
                  renderRow: P,
                  renderSectionHeader: _,
                  rowCount: T,
                  rowCountBySection: I,
                  rowHeight: R + 68 + 16,
                  sectionHeaderHeight: G,
                  onResize: u,
              })
        : (0, i.jsx)(ti, { isEmptyBecauseQuery: l > 0 });
}
var to = l(922016),
    tu = l(783977),
    tm = l(625903),
    th = l(892547),
    tp = l(364522),
    tx = l(91871),
    tg = l.n(tx),
    tf = l(980707),
    tv = l(477782),
    tj = l(583650);
function tC(e) {
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
        I = a.useMemo(
            () => (0 === C.trim().length ? g : g.filter((e) => tg()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        w = a.useMemo(
            () => (0 === b.trim().length ? v : v.filter((e) => tg()(b.toLowerCase(), e.name.toLowerCase()))),
            [v, b],
        ),
        k = a.useMemo(
            () => (0 === N.trim().length ? f : f.filter((e) => tg()(N.toLowerCase(), e.toLowerCase()))),
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
    return (0, i.jsxs)(tf.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": et.intl.string(et.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tv.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(tv.Dr, {
                            id: "participants",
                            label: et.intl.string(et.t.YQ6dJg),
                            subtext: M,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(tv.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tj.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: et.intl.string(et.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tv.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: s.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, i.jsxs)(tv.Dr, {
                            id: "servers",
                            label: et.intl.string(et.t["5qyruI"]),
                            subtext: D,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tv.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tj.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: et.intl.string(et.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tv.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: et.intl.string(et.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                w.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tv.iD,
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
                        (0, i.jsxs)(tv.Dr, {
                            id: "activities",
                            label: et.intl.string(et.t.agRtPG),
                            subtext: S,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(tv.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tj.V, {
                                                ...e,
                                                query: N,
                                                onChange: E,
                                                ref: t,
                                                placeholder: et.intl.string(et.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tv.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: et.intl.string(et.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == n,
                                }),
                                k.map((e) =>
                                    (0, i.jsx)(
                                        tv.iD,
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
                        (0, i.jsxs)(tv.Dr, {
                            id: "years",
                            label: et.intl.string(et.t.w9zd68),
                            subtext: T,
                            children: [
                                (0, i.jsx)(tv.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: et.intl.string(et.t["2/yeUU"]),
                                    action: () => h(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        tv.iD,
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
            (0, i.jsxs)(tv.rX, {
                label: et.intl.string(et.t.XvNMNk),
                children: [
                    (0, i.jsx)(tv.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: et.intl.string(et.t["4LLKx3"]),
                        action: () => p("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(tv.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: et.intl.string(et.t["0gitSE"]),
                        action: () => p("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            L &&
                (0, i.jsx)(tv.rX, {
                    children: (0, i.jsx)(tv.Dr, { id: "clear-filters", label: et.intl.string(et.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var ty = l(174726);
let tb = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: s } = (0, ts.Pu)(),
            n = (0, eJ.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(e$.hCu.SAVE_CLIP)),
            r = (0, ts.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = a.useCallback(() => {
                (0, e6.openUserSettings)(e7.X.CLIPS_PANEL);
            }, []),
            o = a.useCallback(() => s(""), [s]),
            u = null != n ? e8.dI(n.shortcut, !0) : null,
            p = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: ty.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: ty.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: ty.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: et.intl.string(et.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(e2.e, { className: ty.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: ty.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: et.intl.string(et.t.X7yRDm),
                                    children: (0, i.jsx)(to.Y, {
                                        position: "bottom",
                                        targetElementRef: p,
                                        renderPopout: (e) => (0, i.jsx)(tC, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: p,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(U.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: et.intl.formatToPlainString(ee.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: tu.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(h.K, {
                                                              icon: tu.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": et.intl.string(et.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: et.intl.string(et.t["3D5yo/"]),
                                    children: (0, i.jsx)(h.K, {
                                        onClick: c,
                                        icon: tm.Z,
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
                    className: ty.MT,
                    children: (0, i.jsx)(th.I, {
                        placeholder: et.intl.string(et.t["5h0QOP"]),
                        query: l,
                        onChange: s,
                        onClear: o,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    tA = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: s, onClick: r } = e;
        return (0, i.jsxs)(G.D, {
            className: n()(ty.MV, { [ty.wH]: s }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: ty.tk,
                    children: [
                        a,
                        (0, i.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: ty.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ty.z2,
                    children: (0, i.jsx)(k.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tN(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: s, allClips: n } = e,
        r = (0, ts.Pu)((e) => e.selectedGameId),
        d = (0, ts.Pu)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, B.A)(c),
        u = a.useCallback(() => d(null), [d]),
        h = a.useCallback(() => d("favorites"), [d]),
        p = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: ty.pz,
        children: [
            (0, i.jsx)(tb, { allClips: n }),
            (0, i.jsxs)("div", {
                className: ty.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: ty.om,
                        children: (0, i.jsxs)("div", {
                            className: ty.Ep,
                            children: [
                                (0, i.jsx)(tA, {
                                    name: et.intl.string(et.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(ey.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(tA, {
                                    name: et.intl.string(et.t["9rlCk1"]),
                                    count: s.length,
                                    icon: (0, i.jsx)(_.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: h,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(tp.Ip, {
                            className: ty.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: ty.a9,
                                    children: et.intl.string(et.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: ty.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            tA,
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
var tE = l(409067),
    tI = l(847455);
let tw = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function tk(e) {
    let { channelId: t, onClose: s, onClipClick: w, transitionState: k, initialEditingClipId: L, ...M } = e;
    (0, I.A)();
    let { analyticsLocations: D } = (0, j.Ay)(v.A.CLIPS_GALLERY),
        [S, T] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: P, favoriteClips: G, allClips: _ } = (0, tE.a)(),
        { onShareClick: z } = (0, E.A)(t),
        U = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [O, H] = a.useState(null != L ? "editing" : "gallery"),
        [F, K] = a.useState(L ?? null),
        B = (0, r.bG)([C.A], () => (null != F ? C.A.getClipById(F) : null), [F]),
        $ = a.useRef(O);
    ($.current = O), (a.useRef(F).current = F);
    let [Q, Y] = a.useState(null != L ? o.ip.ENTERED : o.ip.HIDDEN),
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
            H("editing"), f.A.useReducedMotion && Y(o.ip.ENTERED);
        }, []),
        ee = a.useCallback((e) => {
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
            () => ({ selectedClipIds: S, toggleClipSelection: ee, clearSelection: ea, isMultiSelectMode: es }),
            [S, ee, ea, es],
        );
    return (0, i.jsx)(j.f5, {
        value: D,
        children: (0, i.jsx)(tw.Provider, {
            value: ed,
            children: (0, i.jsx)(c.N, {
                onClose: s,
                transitionState: k,
                ...M,
                children: (0, i.jsxs)("div", {
                    className: tI.jT,
                    ref: V,
                    children: [
                        (0, i.jsxs)("div", {
                            className: n()(tI.PD, "gallery" === O && tI.vu),
                            "aria-hidden": "gallery" !== O,
                            children: [
                                (0, i.jsx)(tN, { clipsByGame: R, filteredClips: P, favoriteClips: G, allClips: _ }),
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
                                                        es &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: et.intl.string(et.t.RDE0Sc),
                                                                        children: (0, i.jsx)(h.K, {
                                                                            onClick: er,
                                                                            icon: p.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": et.intl.string(et.t.RDE0Sc),
                                                                            loading: U,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: et.intl.string(et.t.oyYWHE),
                                                                        children: (0, i.jsx)(h.K, {
                                                                            onClick: en,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": et.intl.string(et.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(h.K, {
                                                            onClick: s,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": et.intl.string(et.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(tc, {
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
                            className: n()(tI.jN, "editing" === O && tI.vu),
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
