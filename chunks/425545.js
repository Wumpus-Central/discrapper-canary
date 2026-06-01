l.d(t, { $: () => lg, default: () => lf });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    o = l(990078),
    c = l(521489),
    u = l(231723),
    d = l(97808),
    m = l(778712),
    h = l(192308),
    p = l(534514),
    x = l(408278),
    g = l(405433),
    f = l(241326),
    j = l(972213),
    v = l(775602),
    C = l(793574),
    y = l(688810),
    b = l(429913),
    A = l(137177),
    k = l(287809),
    N = l(274372),
    L = l(334686),
    E = l(315240),
    I = l(582633),
    w = l(309777),
    S = l(429364),
    P = l(352527),
    D = l(280483),
    M = l(111994);
l(321073);
var T = l(562708),
    F = l(834730),
    R = l(289873),
    _ = l(139286),
    O = l(962125);
let z = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var H = l(175841),
    G = l(449543),
    U = l(152858),
    K = l(939249),
    V = l(27232),
    Y = l(505930),
    Q = l(821609),
    W = l(933832),
    $ = l(22231),
    X = l(607470),
    B = l(495544),
    q = l(427262),
    Z = l(372684),
    J = l(140423),
    ee = l(602902),
    et = l(665039),
    el = l(16590),
    ei = l(375708),
    ea = l(296364);
let en = ["clowning around", "good times", "team vibes", "epic teamwork"];
function es(e) {
    let { clip: t, moment: l, onEdit: n, onHoverChange: s } = e,
        c = (0, et.j)(t),
        { analyticsLocations: u } = (0, y.Ay)(),
        h = (0, b.h)(t.applicationId),
        j = B.default.getId(),
        v = (0, r.bG)([k.default], () => {
            let e = t.users.find((e) => e !== j);
            return null != e ? k.default.getUser(e) : null;
        }, [t.users, j]),
        C = null != v,
        N = (0, q.tx)(v),
        { Icon: L } = l,
        I = C ? ei.intl.formatToPlainString(el.default.QJ7i8Z, { username: N }) : l.title,
        w = C ? en[t.id.charCodeAt(0) % en.length] : l.subtitle,
        S = t.type === Z.nQ.SCREENSHOT,
        P = t.type === Z.nQ.VOICE_CLIP,
        D = !S && !P && null != c,
        M = a.useRef(null),
        T = "" !== t.thumbnail ? t.thumbnail : null,
        R = a.useCallback(() => {
            s?.(T);
            let e = M.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, T]),
        _ = a.useCallback(
            (e) => {
                s?.(null);
                let l = M.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
                let i = document.activeElement;
                null != i && e.currentTarget.contains(i) && !i.matches(":focus-visible") && i.blur();
            },
            [t.editMetadata?.start, s],
        ),
        O = a.useCallback(() => {
            s?.(T);
            let e = M.current;
            null != e && e.paused && ((e.currentTime = t.editMetadata?.start ?? 0), e.play().catch(() => void 0));
        }, [t.editMetadata?.start, s, T]),
        z = a.useCallback(
            (e) => {
                if (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return;
                s?.(null);
                let l = M.current;
                null != l && (l.pause(), (l.currentTime = t.editMetadata?.start ?? 0));
            },
            [t.editMetadata?.start, s],
        ),
        H = a.useCallback(
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
                e.stopPropagation(), (0, ee.K)([t], { analyticsLocations: u });
            },
            [t, u],
        ),
        es = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, E.w7)(t.id);
            },
            [t.id],
        ),
        er = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, J.R)({ clips: [t] });
            },
            [t],
        ),
        eo = a.useCallback(
            (e) => {
                e.stopPropagation(), (0, E.XK)(t);
            },
            [t],
        ),
        ec = !0 !== t.isTemporary,
        eu = ei.intl.string(!0 === t.isFavorite ? el.default.IZsalP : el.default.ihBfyA);
    return (0, i.jsx)("div", {
        className: ea.Ui,
        onMouseEnter: R,
        onMouseLeave: _,
        onFocus: O,
        onBlur: z,
        children: (0, i.jsxs)(K.D, {
            className: ea.Nr,
            "aria-label": ei.intl.string(ei.t.bt75uw),
            onClick: G,
            children: [
                (0, i.jsxs)("div", {
                    className: ea.hz,
                    children: [
                        "" !== t.thumbnail
                            ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: ea.xn })
                            : (0, i.jsx)("div", { className: ea.$$ }),
                        D
                            ? (0, i.jsx)(X.A, {
                                  preload: "none",
                                  poster: t.thumbnail,
                                  muted: !0,
                                  loop: !0,
                                  src: c ?? void 0,
                                  className: ea.xn,
                                  ref: M,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)("div", { className: ea.D7 }),
                null != h &&
                    (0, i.jsx)("div", {
                        className: ea.uv,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(A.A, { game: h, size: A.M.XXSMALL, className: ea.ns }),
                    }),
                (0, i.jsxs)("div", {
                    className: ea.Nv,
                    children: [
                        ec
                            ? (0, i.jsx)(
                                  o.m,
                                  {
                                      text: eu,
                                      position: "top",
                                      children: (0, i.jsx)(x.K, {
                                          onClick: eo,
                                          icon: !0 === t.isFavorite ? V.G : Y.y,
                                          "aria-label": eu,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                      }),
                                  },
                                  `${t.id}:favorite:${t.isFavorite}`,
                              )
                            : (0, i.jsx)(Q.$, {
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: W.A,
                                  text: ei.intl.string(ei.t["R3BPH+"]),
                                  onClick: es,
                              }),
                        (0, i.jsx)(o.m, {
                            text: ei.intl.string(ei.t.oyYWHE),
                            position: "top",
                            children: (0, i.jsx)(x.K, {
                                onClick: er,
                                icon: f.u,
                                "aria-label": ei.intl.string(ei.t.oyYWHE),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ea.Lw,
                    children: [
                        C && null != v
                            ? (0, i.jsx)(d.eu, {
                                  src: v.getAvatarURL(void 0, 32),
                                  size: m._3.SIZE_32,
                                  "aria-hidden": !0,
                              })
                            : (0, i.jsx)("div", {
                                  className: ea.bG,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(L, { size: "md", color: "currentColor" }),
                              }),
                        (0, i.jsx)(p.D, { variant: "heading-md/extrabold", color: "always-white", children: I }),
                        (0, i.jsx)(F.E, { variant: "text-sm/medium", color: "always-white", children: w }),
                        (0, i.jsx)("div", { className: ea.nP, "aria-hidden": "true" }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ea.o1,
                    children: [
                        (0, i.jsx)(Q.$, {
                            variant: "overlay-secondary",
                            size: "sm",
                            icon: $.R,
                            text: ei.intl.string(ei.t.bt75uw),
                            onClick: H,
                        }),
                        (0, i.jsx)(Q.$, {
                            variant: "primary",
                            size: "sm",
                            icon: g.l,
                            text: ei.intl.string(ei.t.RDE0Sc),
                            onClick: U,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var er = l(369606),
    eo = l(845798),
    ec = l(825860),
    eu = l(926268);
let ed = [
    { Icon: H.B, title: "LOL", subtitle: "lot of laughter" },
    { Icon: er.O, title: "ACE", subtitle: "5 kills in 26 sec" },
    { Icon: eo.S, title: "WITH FRIENDS", subtitle: "clowning around" },
    { Icon: ec.Y, title: "ON FIRE", subtitle: "3 wins in a row" },
    { Icon: V.G, title: "HIGHLIGHT", subtitle: "epic moment" },
    { Icon: eu.C, title: "GOOD VIBES", subtitle: "fun with the squad" },
];
function em(e) {
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
        n = a.useMemo(() => em(l), [l]),
        s = a.useMemo(
            () =>
                n
                    .map((e) => e.id)
                    .map((e) => {
                        let t = 0;
                        for (let l = 0; l < e.length; l++) t = (31 * t + e.charCodeAt(l)) | 0;
                        return ed[Math.abs(t) % ed.length];
                    }),
            [n],
        ),
        { backgroundComponent: o, handleHoverChange: c } = (function () {
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
              "aria-label": ei.intl.string(el.default.efLpNC),
              children: [
                  o,
                  (0, i.jsxs)("div", {
                      className: eh.wx,
                      children: [
                          (0, i.jsxs)("div", {
                              className: eh.UP,
                              children: [
                                  (0, i.jsx)(H.B, { size: "refresh_sm", color: "white" }),
                                  (0, i.jsx)(F.E, {
                                      variant: "text-md/medium",
                                      color: "always-white",
                                      children: ei.intl.string(el.default.I1h8uD),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(p.D, {
                              variant: "display-md",
                              color: "always-white",
                              children: ei.intl.string(el.default.efLpNC),
                          }),
                      ],
                  }),
                  (0, i.jsx)(G.A, {
                      className: eh.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: U.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": ei.intl.string(el.default.efLpNC),
                      children: n.map((e, l) =>
                          (0, i.jsx)(es, { clip: e, moment: s[l], onEdit: t, onHoverChange: c }, e.id),
                      ),
                  }),
              ],
          });
}
var ex = l(989349),
    eg = l.n(ex),
    ef = l(66455),
    ej = l(342952),
    ev = l(890856),
    eC = l(777666),
    ey = l(530005),
    eb = l(406810),
    eA = l(176781),
    ek = l(661531),
    eN = l(983851),
    eL = l(31300),
    eE = l(442433),
    eI = l(587895),
    ew = l(47167),
    eS = l(734057),
    eP = l(71393),
    eD = l(549685),
    eM = l(174459),
    eT = l(58703),
    eF = l(403362),
    eR = l(974293),
    e_ = l(226421),
    eO = l(284009),
    ez = l.n(eO),
    eH = l(460905),
    eG = l(713608),
    eU = l(788332);
function eK(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    ez()(l?.type === Z.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([k.default], () => k.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(o.m, {
        text: ei.intl.string(el.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: eU.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eU.$, alt: n }),
                (0, i.jsx)(F.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ei.intl.formatToPlainString(el.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eV(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(o.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eU.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(F.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eY(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === Z.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case Z.Gy.DISTRIBUTED:
            return (0, i.jsx)(eK, { clip: t });
        case Z.Gy.LAUGHTER:
            return (0, i.jsx)(eV, {
                icon: eH.n,
                text: ei.intl.string(el.default.bTC23D),
                tooltipText: ei.intl.string(el.default["ry+jxm"]),
            });
        case Z.Gy.GAME_EVENT:
            return (0, i.jsx)(eV, {
                icon: eG.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ei.intl.string(el.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eQ = l(718812),
    eW = l(652215),
    e$ = l(798594);
let eX = function (e) {
    let { clip: t, actionsDisabled: n, isNew: o, onEdit: c, onClick: u } = e,
        d = (0, r.yK)([k.default], () => t.users.map((e) => k.default.getUser(e)).filter(eF.Vq)),
        h = (0, r.bG)([eS.A], () => (null != t.channelId ? eS.A.getChannel(t.channelId) : null)),
        p = (0, r.bG)([eP.A], () => (null != t.guildId ? eP.A.getGuild(t.guildId) : null)),
        { analyticsLocations: x } = (0, y.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: g, toggleClipSelection: f, isMultiSelectMode: j } = a.useContext(lg),
        [v, b] = a.useState(!1),
        A = a.useRef(null),
        L = (0, ef.A)(t.editMetadata?.start ?? 0),
        E = g.has(t.id),
        I = t.type === Z.nQ.SCREENSHOT,
        w = (0, ew.Ay)(h),
        S = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        P = (0, eT.Fe)(new Date(t.createdAt)),
        D = a.useMemo(() => {
            let e = [];
            return (
                t.type === Z.nQ.VOICE_CLIP
                    ? (p?.name != null && e.push(p.name), null != w && e.push(w))
                    : ("" !== S && null != S && e.push(S),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [S, p?.name, w, t.activity?.state, t.activity?.details, t.type]),
        M = a.useCallback(() => {
            let e = A.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        T = a.useCallback(() => {
            if (!0 === I) return;
            let e = A.current;
            null != e && e.paused && ((e.currentTime = L.current), A.current?.play());
        }, [I, L]),
        R = a.useCallback(() => {
            if (!0 === I) return;
            let e = A.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start]),
        _ = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || R();
            },
            [R],
        ),
        O = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        z = a.useCallback(() => {
            b(!1);
        }, []),
        H = a.useCallback(
            (e) => {
                b(!0), A.current?.pause();
                let a =
                    j && g.size > 0
                        ? Array.from(g)
                              .map((e) => N.Ay.getClipById(e))
                              .filter(eF.Vq)
                        : [t];
                (0, eE.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("86653"),
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
                                    eM.default.track(eW.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, eR.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        eM.default.track(eW.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, eR.GN)(),
                                        });
                                },
                                onBeforeDelete: M,
                                onAfterDelete: () => {
                                    eM.default.track(eW.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, eR.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: z },
                );
            },
            [t, j, g, n, M, z, c],
        ),
        G = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), H(e));
            },
            [n, H],
        ),
        U = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), f(t.id)) : j ? f(t.id) : null != u && u(t),
                    eM.default.track(eW.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, eR.GN)() }));
            },
            [n, j, f, t, u],
        );
    return (0, i.jsx)(y.f5, {
        value: x,
        children: (0, i.jsx)("div", {
            className: e$.o8,
            onBlur: _,
            children: (0, i.jsxs)(ev.s, {
                "aria-disabled": n,
                "aria-label": ei.intl.string(!0 === I ? ei.t["HO/oXl"] : ei.t.bt75uw),
                onClick: n ? void 0 : U,
                onContextMenu: G,
                className: s()(e$.QN, { [e$.r9]: n, [e$.in]: v, [e$.wH]: E }),
                onFocus: T,
                onMouseOver: T,
                onMouseLeave: R,
                children: [
                    (0, i.jsx)(eB, { clip: t, isNew: o, videoRef: A, onOpenContextMenu: H, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: e$.wI,
                        children: [
                            (0, i.jsx)(eJ, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: e$.i0,
                                children: [
                                    (0, i.jsx)(eq, { clip: t }),
                                    (0, i.jsx)(F.E, {
                                        className: e$.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: D,
                                    }),
                                    (0, i.jsx)(F.E, {
                                        className: e$.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: P,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: e$.jW,
                                children: (0, i.jsx)(ej.A, {
                                    maxUsers: 3,
                                    users: d,
                                    size: m._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && T());
                                    },
                                    onClickOverflow: O,
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
function eB(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        c = 0 === t.length,
        u = !0 === t.pending,
        [d, m] = a.useState(0);
    a.useEffect(() => {
        let e = n.current;
        if (null == e || c) return;
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
    }, [n, c, t.editMetadata]);
    let { durationDisplay: h, isClipEdited: p } = a.useMemo(() => {
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
            let a = eg().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        g = a.useCallback(
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
        className: e$.QB,
        children: [
            (0, i.jsx)("div", { className: e$.ne }),
            (0, i.jsx)(eZ, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: e$.ry,
                children: [
                    !u && l && (0, i.jsx)(eC.Lp, { text: ei.intl.string(ei.t.y2b7CA) }),
                    (0, i.jsx)(eY, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: e$.g3,
                    children: [
                        (0, i.jsx)(o.m, {
                            text: ei.intl.string(t.isFavorite ? el.default.IZsalP : el.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(x.K, {
                                onClick: g,
                                icon: t.isFavorite ? V.G : Y.y,
                                "aria-label": ei.intl.string(ei.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(x.K, {
                            onClick: f,
                            icon: ey.F,
                            "aria-label": ei.intl.string(ei.t["UKOtz+"]),
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
                                t.isTemporary && (0, i.jsx)(eb.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(F.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ei.intl.string(ei.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: e$.OH,
                            children: [
                                p && (0, i.jsx)(eD.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(F.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: u ? ei.intl.string(ei.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                d > 0 &&
                (0, i.jsx)("div", {
                    className: e$.X7,
                    children: (0, i.jsx)("div", { className: e$.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eq(e) {
    let { clip: t } = e,
        l = (0, eQ.h)(t),
        a = "" !== l;
    return (0, i.jsx)(F.E, {
        className: e$.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eZ(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, et.j)(t),
        n = t.type === Z.nQ.SCREENSHOT;
    return t.type === Z.nQ.VOICE_CLIP
        ? (0, i.jsx)(e_.A, { className: e$.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: e$.fT })
          : null != a
            ? (0, i.jsx)(X.A, {
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
                    className: s()(e$.fT, e$.Is),
                    children: (0, i.jsx)(eA.x, { color: ek.A.colors.ICON_MUTED }),
                });
}
function eJ(e) {
    let { clip: t } = e,
        l = (0, r.bG)([eI.A], () => (null != t.applicationId ? eI.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: e$.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: e$.NH })
                : t.type === Z.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eN.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eL.k, { size: "sm", color: "currentColor" }),
    });
}
function e0(e) {
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
var e1 = l(702841),
    e2 = l(687966),
    e3 = l(475358),
    e9 = l(123292),
    e6 = l(292801),
    e7 = l(780964),
    e4 = l(766075),
    e5 = l(532624),
    e8 = l(350535),
    te = l(572164),
    tt = l(953932),
    tl = l(311162);
function ti(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: tl.Nr,
        children: [t, (0, i.jsx)(F.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ta() {
    let e = (0, e1.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(eW.hCu.SAVE_CLIP)),
        t = null != e ? e8.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tl.kR,
        children: [
            (0, i.jsx)(ti, {
                header: (0, i.jsx)(e2._, { size: "refresh_sm", color: ek.A.colors.ICON_DEFAULT }),
                description: ei.intl.string(el.default["4K56sP"]),
            }),
            (0, i.jsx)(ti, {
                header: null != t ? (0, i.jsx)(e3.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ei.intl.format(el.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: tl.JH,
                                      children: (0, i.jsx)(e9.Q, {
                                          text: ei.intl.string(el.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, e4.openUserSettings)(e7.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ei.intl.string(el.default.HOUDUm),
            }),
            (0, i.jsx)(ti, {
                header: (0, i.jsx)(e6.t, { size: "refresh_sm", color: ek.A.colors.ICON_DEFAULT }),
                description: ei.intl.string(el.default.DLzdl7),
            }),
        ],
    });
}
function tn(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, te.Et)();
    return (0, i.jsx)("div", {
        className: tl.kL,
        children: (0, i.jsxs)("div", {
            className: tl.Qs,
            children: [
                (0, i.jsx)(e0, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(p.D, {
                    className: tl.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ei.intl.string(el.default["+M2iLf"]) : ei.intl.string(el.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(F.E, {
                        className: tl.h_,
                        variant: "text-md/medium",
                        children: ei.intl.string(el.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: tl.SO, children: (0, i.jsx)(tt.A, {}) }),
                l && !t && (0, i.jsx)(ta, {}),
            ],
        }),
    });
}
let ts = 16 / 9;
var tr = l(609174),
    to = l(226870),
    tc = l(285072),
    tu = l(742007);
function td(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(tr.Cl, {
        clip: t,
        children: (0, i.jsx)(tm, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function tm(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: o } = e,
        c = (0, tr.Y_)(),
        { analyticsLocations: u } = (0, y.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: d, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(lg),
        [p, x] = a.useState(!1),
        [g, f] = a.useState(!1),
        j = d.has(c.id),
        v = c.type === Z.nQ.SCREENSHOT,
        b = a.useRef(null),
        A = a.useCallback(() => {
            b.current?.releaseSource();
        }, []),
        k = a.useCallback(() => x(!1), []),
        L = a.useCallback(
            (e) => {
                x(!0);
                let a =
                    h && d.size > 0
                        ? Array.from(d)
                              .map((e) => N.Ay.getClipById(e))
                              .filter(eF.Vq)
                        : [c];
                (0, eE.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("86653"),
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
                                actionsDisabled: t,
                                onShare: () => {
                                    eM.default.track(eW.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    o(c), eM.default.track(eW.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: A,
                                onAfterDelete: () => {
                                    eM.default.track(eW.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: k },
                );
            },
            [c, h, d, t, k, o, A],
        ),
        E = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), L(e));
            },
            [t, L],
        ),
        I = a.useCallback(
            (e) => {
                t ||
                    (e.shiftKey ? (e.preventDefault(), m(c.id)) : h ? m(c.id) : null != r && r(c),
                    eM.default.track(eW.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [t, h, m, c, r],
        );
    return (0, i.jsx)(y.f5, {
        value: u,
        children: (0, i.jsxs)(ev.s, {
            "aria-disabled": t,
            "aria-label": ei.intl.string(v ? ei.t["HO/oXl"] : ei.t.bt75uw),
            onClick: t ? void 0 : I,
            onContextMenu: E,
            className: s()(tu.Nr, { [tu.r9]: t, [tu.in]: p, [tu.wH]: j }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: tu.w7,
                    children: (0, i.jsxs)(th, {
                        ref: b,
                        isPlaying: g && !v,
                        children: [
                            (0, i.jsx)("div", { className: tu.Fv }),
                            (0, i.jsx)(tp, { isNew: n }),
                            !t && (0, i.jsx)(tx, { onOpenContextMenu: L }),
                            (0, i.jsx)(tg, {}),
                        ],
                    }),
                }),
                (0, i.jsx)(tf, {}),
            ],
        }),
    });
}
let th = a.forwardRef((e, t) => {
    let { isPlaying: l, children: n } = e,
        [s, r] = a.useState(0);
    return (0, i.jsx)(to.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: r,
        children: (0, i.jsxs)(tc.h, {
            isVisible: !0,
            children: [
                n,
                s > 0 &&
                    (0, i.jsx)("div", {
                        className: tu.hr,
                        children: (0, i.jsx)("div", { className: tu.TE, style: { width: `${s}%` } }),
                    }),
            ],
        }),
    });
});
function tp(e) {
    let { isNew: t } = e,
        l = (0, tr.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: tu.zV,
        children: [!a && t && (0, i.jsx)(eC.Lp, { text: ei.intl.string(ei.t.y2b7CA) }), (0, i.jsx)(eY, { clip: l })],
    });
}
function tx(e) {
    let { onOpenContextMenu: t } = e,
        l = (0, tr.Y_)(),
        n = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), E.XK(l);
            },
            [l],
        ),
        s = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), t(e);
            },
            [t],
        );
    return (0, i.jsxs)("div", {
        className: tu.Mw,
        children: [
            (0, i.jsx)(o.m, {
                text: ei.intl.string(l.isFavorite ? el.default.IZsalP : el.default.ihBfyA),
                position: "top",
                children: (0, i.jsx)(x.K, {
                    onClick: n,
                    icon: l.isFavorite ? V.G : Y.y,
                    "aria-label": ei.intl.string(ei.t.k8fFjp),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(x.K, {
                onClick: s,
                icon: ey.F,
                "aria-label": ei.intl.string(ei.t["UKOtz+"]),
                variant: "overlay-secondary",
                size: "sm",
            }),
        ],
    });
}
function tg() {
    let e = (0, tr.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        { durationDisplay: n, isClipEdited: s } = a.useMemo(() => {
            let t = e.length,
                l = null != e.editMetadata ? e.editMetadata.end - e.editMetadata.start : null,
                i = !1;
            if (null != e.editMetadata) {
                let a = null != l && 1e3 * l < e.length,
                    n =
                        !1 === e.editMetadata.applicationAudio ||
                        !1 === e.editMetadata.voiceAudio ||
                        !1 === e.editMetadata.soundboardAudio;
                (i = a || n), null != l && 1e3 * l < e.length && (t = 1e3 * l);
            }
            let a = eg().duration(t),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [e.length, e.editMetadata]);
    return (0, i.jsxs)("div", {
        className: tu.kC,
        children: [
            "auto" === e.clipMethod &&
                (0, i.jsxs)("div", {
                    className: tu._s,
                    children: [
                        e.isTemporary && (0, i.jsx)(eb.O, { color: "white", size: "xs" }),
                        (0, i.jsx)(F.E, {
                            variant: "text-sm/semibold",
                            color: "always-white",
                            children: ei.intl.string(ei.t["3Y2DJ8"]),
                        }),
                    ],
                }),
            !t &&
                (0, i.jsxs)("div", {
                    className: tu._s,
                    children: [
                        s && (0, i.jsx)(eD.A, { color: "white", width: 16, height: 16 }),
                        (0, i.jsx)("span", {
                            children: (0, i.jsx)(F.E, {
                                variant: "text-sm/semibold",
                                color: "always-white",
                                tabularNumbers: !0,
                                children: l ? ei.intl.string(ei.t["2Fp7OP"]) : n,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function tf() {
    let e = (0, tr.Y_)(),
        t = (0, r.yK)([k.default], () => e.users.map((e) => k.default.getUser(e)).filter(eF.Vq)),
        l = (0, r.bG)([eS.A], () => (null != e.channelId ? eS.A.getChannel(e.channelId) : null)),
        n = (0, r.bG)([eP.A], () => (null != e.guildId ? eP.A.getGuild(e.guildId) : null)),
        s = (0, ew.Ay)(l),
        o = "" === e.applicationName && null != s && "" !== s ? s : e.applicationName,
        c = (0, eT.Fe)(new Date(e.createdAt)),
        u = a.useMemo(() => {
            let t = [];
            return (
                e.type === Z.nQ.VOICE_CLIP
                    ? (n?.name != null && t.push(n.name), null != s && t.push(s))
                    : ("" !== o && null != o && t.push(o),
                      e.activity?.state != null && "" !== e.activity.state && t.push(e.activity.state),
                      e.activity?.details != null && "" !== e.activity.details && t.push(e.activity.details)),
                t.join(" \u203A ")
            );
        }, [o, n, s, e.activity, e.type]);
    return (0, i.jsxs)("div", {
        className: tu.yu,
        children: [
            (0, i.jsx)(tv, {}),
            (0, i.jsxs)("div", {
                className: tu.yR,
                children: [
                    (0, i.jsx)(tj, {}),
                    (0, i.jsx)(F.E, { className: tu.VA, color: "text-subtle", variant: "text-sm/normal", children: u }),
                    (0, i.jsx)(F.E, { className: tu.VA, color: "text-subtle", variant: "text-sm/normal", children: c }),
                ],
            }),
            (0, i.jsx)("div", {
                className: tu.HD,
                children: (0, i.jsx)(ej.A, {
                    maxUsers: 3,
                    users: t,
                    size: m._3.SIZE_24,
                    "aria-label": ei.intl.string(ei.t.WTozwe),
                }),
            }),
        ],
    });
}
function tj() {
    let e = (0, tr.Y_)(),
        t = (0, eQ.h)(e),
        l = "" !== t;
    return (0, i.jsx)(F.E, {
        className: tu.DD,
        variant: "text-md/normal",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function tv() {
    let e = (0, tr.Y_)(),
        t = (0, r.bG)([eI.A], () => (null != e.applicationId ? eI.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: tu.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: tu.T_ })
                : e.type === Z.nQ.VOICE_CLIP
                  ? (0, i.jsx)(eN.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(eL.k, { size: "sm", color: "currentColor" }),
    });
}
th.displayName = "CardThumbnail";
var tC = l(792852),
    ty = l(352528);
let tb = [0, 16, 0, 16],
    tA = tb[1] + tb[3];
function tk(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s } = e,
        [o, c] = a.useState(!0),
        [u, d] = a.useState({ width: 0, height: 0 }),
        m = (0, r.bG)([N.Ay], () => N.Ay.getSettings().storageLocation),
        h = (0, r.yK)([N.Ay], () => N.Ay.getNewClipIds()),
        x = (0, r.bG)([N.Ay], () => N.Ay.getExportingClipIds().length > 0),
        g = (0, r.bG)([N.Ay], () => em(N.Ay.getClips()).length > 0),
        f = (0, tC.Pu)(tC.mp),
        j = (0, tC.Pu)((e) => e.activeMainLink),
        { enableAutoClipsReview: v } = z.useConfig({ location: "ClipsGalleryContent" }),
        { enabled: C } = L.O.useConfig({ location: "ClipsGalleryContent" }),
        y = C ? td : eX,
        b = v && g && !f && j === M.oH.HOME;
    (0, _.A)(
        {
            type: T.ImpressionTypes.MODAL,
            name: T.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: o },
        [t.length, o],
    );
    let A = a.useMemo(() => {
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
                    title: ei.intl.string(ei.t["kB2R/0"]),
                    description: t ? ei.intl.string(ei.t["6AXirz"]) : void 0,
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
        { width: k } = u,
        { tileWidth: I, columns: w } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = k - tA) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, k]);
    a.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await E.Fb(m);
            } finally {
                c(!1);
            }
        })();
    }, [m]);
    let S = a.useMemo(() => A.map((e) => Math.ceil(e.clips.length / w)), [A, w]),
        P = a.useMemo(() => S.reduce((e, t) => e + t, 0), [S]),
        D = Math.floor(I / ts),
        H = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = A[l];
                if (null == r) return null;
                let o = a * w,
                    c = r.clips.slice(o, o + w);
                return (0, i.jsx)(
                    "div",
                    {
                        className: ty.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: I },
                                    children: (0, i.jsx)(y, {
                                        actionsDisabled: x,
                                        isNew: h.includes(e.id),
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
            [A, w, I, x, h, n, s, y],
        ),
        G = a.useCallback(
            (e) => {
                let t = A[e];
                return t?.description != null ? 66 : 44;
            },
            [A],
        ),
        U = a.useCallback(
            (e) => {
                let t = A[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: ty.aE,
                              children: [
                                  (0, i.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(F.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: ty.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [A],
        );
    return o || 0 !== A.length
        ? o
            ? (0, i.jsx)("div", { className: ty.dc, children: (0, i.jsx)(R.y, {}) })
            : (0, i.jsx)(O.A, {
                  listPadding: tb,
                  renderListHeader: b ? () => (0, i.jsx)(ep, { onEdit: s }) : void 0,
                  listHeaderHeight: 520 * !!b,
                  renderRow: H,
                  renderSectionHeader: U,
                  rowCount: P,
                  rowCountBySection: S,
                  rowHeight: D + 68 + 16,
                  sectionHeaderHeight: G,
                  onResize: d,
              })
        : (0, i.jsx)(tn, { isEmptyBecauseQuery: l > 0 });
}
var tN = l(922016),
    tL = l(783977),
    tE = l(625903),
    tI = l(892547),
    tw = l(364522),
    tS = l(91871),
    tP = l.n(tS),
    tD = l(980707),
    tM = l(477782),
    tT = l(583650);
function tF(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            dateFilter: o,
            sortOrder: c,
            toggleUserId: u,
            setSelectedActivity: d,
            setSelectedGuildId: m,
            setDateFilter: h,
            setSortOrder: p,
            clearFilters: x,
        } = (0, tC.Pu)(),
        g = a.useMemo(
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
                    ? h(null)
                    : h({
                          preset: "custom",
                          after: new Date(e, 0, 1, 0, 0, 0, 0).getTime(),
                          before: new Date(e, 11, 31, 23, 59, 59, 999).getTime(),
                      });
            },
            [h],
        ),
        j = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = k.default.getUser(e);
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
        C = a.useMemo(
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
        y = a.useMemo(
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
        [b, A] = a.useState(""),
        [N, L] = a.useState(""),
        [E, I] = a.useState(""),
        w = a.useMemo(
            () => (0 === b.trim().length ? j : j.filter((e) => tP()(b.toLowerCase(), e.name.toLowerCase()))),
            [j, b],
        ),
        S = a.useMemo(
            () => (0 === N.trim().length ? C : C.filter((e) => tP()(N.toLowerCase(), e.name.toLowerCase()))),
            [C, N],
        ),
        P = a.useMemo(
            () => (0 === E.trim().length ? v : v.filter((e) => tP()(E.toLowerCase(), e.toLowerCase()))),
            [v, E],
        ),
        D = n.size > 0 || null != s || null != r || null != g,
        T = a.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        F = a.useMemo(() => {
            if (null == r) return;
            let e = C.find((e) => e.guildId === r);
            return e?.name;
        }, [r, C]),
        R = a.useMemo(() => s ?? void 0, [s]),
        _ = a.useMemo(() => (null != g ? String(g) : void 0), [g]);
    return (0, i.jsxs)(tD.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ei.intl.string(ei.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tM.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(tM.Dr, {
                            id: "participants",
                            label: ei.intl.string(ei.t.YQ6dJg),
                            subtext: T,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(tM.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tT.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tM.sL,
                                        { id: `participant-${t}`, label: l, action: () => u(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(tM.Dr, {
                            id: "servers",
                            label: ei.intl.string(ei.t["5qyruI"]),
                            subtext: F,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(tM.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tT.V, {
                                                ...e,
                                                query: N,
                                                onChange: L,
                                                ref: t,
                                                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tM.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ei.intl.string(ei.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                S.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tM.iD,
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
                        (0, i.jsxs)(tM.Dr, {
                            id: "activities",
                            label: ei.intl.string(ei.t.agRtPG),
                            subtext: R,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tM.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tT.V, {
                                                ...e,
                                                query: E,
                                                onChange: I,
                                                ref: t,
                                                placeholder: ei.intl.string(ei.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tM.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ei.intl.string(ei.t["2/yeUU"]),
                                    action: () => d(null),
                                    checked: null == s,
                                }),
                                P.map((e) =>
                                    (0, i.jsx)(
                                        tM.iD,
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
                    y.length > 0 &&
                        (0, i.jsxs)(tM.Dr, {
                            id: "years",
                            label: ei.intl.string(ei.t.w9zd68),
                            subtext: _,
                            children: [
                                (0, i.jsx)(tM.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ei.intl.string(ei.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == g,
                                }),
                                y.map((e) =>
                                    (0, i.jsx)(
                                        tM.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => f(e),
                                            checked: g === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(tM.rX, {
                label: ei.intl.string(ei.t.XvNMNk),
                children: [
                    (0, i.jsx)(tM.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ei.intl.string(ei.t["4LLKx3"]),
                        action: () => p(M.mu.MOST_RECENT),
                        checked: c === M.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(tM.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ei.intl.string(ei.t["0gitSE"]),
                        action: () => p(M.mu.OLDEST),
                        checked: c === M.mu.OLDEST,
                    }),
                ],
            }),
            D &&
                (0, i.jsx)(tM.rX, {
                    children: (0, i.jsx)(tM.Dr, { id: "clear-filters", label: ei.intl.string(ei.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var tR = l(332837),
    t_ = l(724993);
function tO(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: o } = e,
        c = r && !n;
    return (0, i.jsxs)(K.D, {
        onClick: c ? void 0 : o,
        className: s()(t_.nM, { [t_.CZ]: n, [t_.lr]: c }),
        "aria-pressed": n,
        "aria-disabled": c,
        children: [
            (0, i.jsx)("span", { className: t_.aL, children: t }),
            (0, i.jsx)(F.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: t_.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: t_.iP, children: a }),
        ],
    });
}
function tz() {
    let e = (0, r.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(eW.hCu.SAVE_CLIP)),
        t = a.useCallback(() => {
            (0, e4.openUserSettings)(e7.X.CLIPS_PANEL);
        }, []),
        l = null != e ? e8.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: t_.aN,
        children: [
            (0, i.jsxs)("div", {
                className: t_.pR,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ei.intl.string(ei.t.z2jK6X),
                    }),
                    null != l && (0, i.jsx)(e3.e, { shortcut: l }),
                ],
            }),
            (0, i.jsx)(o.m, {
                text: ei.intl.string(ei.t["3D5yo/"]),
                children: (0, i.jsx)(x.K, {
                    onClick: t,
                    icon: tE.Z,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ei.intl.string(ei.t["3D5yo/"]),
                }),
            }),
        ],
    });
}
function tH(e) {
    let t,
        l,
        n,
        s,
        o,
        c,
        u,
        d,
        m,
        h,
        p,
        x,
        g,
        { mainLinkCounts: f } = e,
        j = (0, tC.Pu)((e) => e.activeMainLink),
        v =
            ((t = (0, tC.Pu)((e) => e.setActiveMainLink)),
            (l = (0, tC.Pu)((e) => e.setGameFacet)),
            (n = (0, tC.Pu)((e) => e.setClippedWithFacet)),
            (s = (0, tC.Pu)((e) => e.clearFilters)),
            (o = (0, tC.Pu)((e) => e.gameFacet)),
            (c = (0, tC.Pu)((e) => e.clippedWithFacet)),
            a.useCallback(
                (e) => {
                    let i = null != o || null != c;
                    t(e), i && (l(null), n(null), s());
                },
                [t, l, n, s, o, c],
            )),
        C = (0, tC.Pu)((e) => e.gameFacet),
        y = (0, tC.Pu)((e) => e.clippedWithFacet),
        b = null != C || null != y,
        A = (0, r.bG)([N.Ay], () => {
            let e = N.Ay.getLastClipsSession();
            return null != e && e.newClipIds.length > 0;
        });
    return (0, i.jsxs)("div", {
        className: t_.uW,
        children: [
            (0, i.jsx)(tO, {
                icon: (0, i.jsx)(tR.f, { size: "sm", color: "currentColor" }),
                label: ei.intl.string(ei.t.Ym2Ri6),
                trailer: A ? (0, i.jsx)(eC.Lp, { text: ei.intl.string(ei.t.y2b7CA) }) : null,
                isSelected: ((u = M.oH.HOME), !b && j === u),
                onClick: () => v(M.oH.HOME),
            }),
            (0, i.jsx)(tO, {
                icon: (0, i.jsx)(eA.x, { size: "sm", color: "currentColor" }),
                label: ei.intl.string(ei.t.dPVrEv),
                trailer: (0, i.jsx)(tG, { count: f.allClips }),
                isSelected: ((d = M.oH.ALL_CLIPS), !b && j === d),
                isDisabled: 0 === f.allClips && ((m = M.oH.ALL_CLIPS), !!b || j !== m),
                onClick: () => v(M.oH.ALL_CLIPS),
            }),
            (0, i.jsx)(tO, {
                icon: (0, i.jsx)(H.B, { size: "sm", color: "currentColor" }),
                label: ei.intl.string(el.default.ikNKf1),
                trailer: (0, i.jsx)(tG, { count: f.autoClips }),
                isSelected: ((h = M.oH.AUTO_CLIPS), !b && j === h),
                isDisabled: 0 === f.autoClips && ((p = M.oH.AUTO_CLIPS), !!b || j !== p),
                onClick: () => v(M.oH.AUTO_CLIPS),
            }),
            (0, i.jsx)(tO, {
                icon: (0, i.jsx)(V.G, { size: "sm", color: "currentColor" }),
                label: ei.intl.string(ei.t["9rlCk1"]),
                trailer: (0, i.jsx)(tG, { count: f.favorites }),
                isSelected: ((x = M.oH.FAVORITES), !b && j === x),
                isDisabled: 0 === f.favorites && ((g = M.oH.FAVORITES), !!b || j !== g),
                onClick: () => v(M.oH.FAVORITES),
            }),
        ],
    });
}
function tG(e) {
    let { count: t } = e;
    return (0, i.jsx)(F.E, { variant: "text-xs/semibold", color: "text-muted", tabularNumbers: !0, children: t });
}
function tU() {
    let e = (0, tC.Pu)((e) => e.setGameFacet),
        t = (0, tC.Pu)((e) => e.setClippedWithFacet),
        l = (0, tC.Pu)((e) => e.setActiveMainLink),
        i = (0, tC.Pu)((e) => e.clearFilters),
        n = (0, tC.Pu)((e) => e.gameFacet),
        s = (0, tC.Pu)((e) => e.clippedWithFacet);
    return a.useCallback(
        (a, r) => {
            if (null == r) return void ("game" === a ? e(null) : t(null));
            let o = null != n ? "game" : null != s ? "clippedWith" : "mainLink";
            "game" === a ? e(r) : t(r), o !== a && ("game" === a ? t(null) : e(null), l(M.oH.ALL_CLIPS), i());
        },
        [e, t, l, i, n, s],
    );
}
function tK(e) {
    let { initiatorsFacet: t } = e,
        l = (0, tC.Pu)((e) => e.clippedWithFacet),
        n = tU(),
        [r, o] = a.useState(!1),
        c = a.useMemo(
            () =>
                t
                    .map((e) => {
                        let t = k.default.getUser(e.key);
                        return null == t
                            ? null
                            : { ...e, name: t.globalName ?? t.username, avatarUrl: t.getAvatarURL(null, 32) };
                    })
                    .filter((e) => null != e),
            [t],
        );
    if (0 === c.length) return null;
    let u = c.length > 5,
        h = r || !u ? c : c.slice(0, 5);
    return (0, i.jsxs)(tw.Ip, {
        className: s()(t_.uW, t_.fC),
        fade: !0,
        children: [
            (0, i.jsx)(p.D, {
                variant: "heading-sm/medium",
                color: "text-muted",
                className: t_.a9,
                children: ei.intl.string(el.default.s8OcXI),
            }),
            (0, i.jsx)("div", {
                className: t_._A,
                children: h.map((e) =>
                    (0, i.jsx)(
                        tO,
                        {
                            icon: (0, i.jsx)(d.eu, { src: e.avatarUrl, size: m._3.SIZE_20, "aria-hidden": !0 }),
                            label: e.name,
                            trailer: (0, i.jsx)(tG, { count: e.count }),
                            isSelected: l === e.key,
                            isDisabled: e.isDisabled,
                            onClick: () => n("clippedWith", l === e.key ? null : e.key),
                        },
                        e.key,
                    ),
                ),
            }),
            u &&
                (0, i.jsx)("div", {
                    className: t_.B2,
                    children: (0, i.jsx)(e9.Q, {
                        variant: "secondary",
                        textVariant: "text-sm/medium",
                        text: r
                            ? ei.intl.string(el.default.BbeVTG)
                            : ei.intl.formatToPlainString(el.default["Ona/4s"], { count: c.length }),
                        onClick: () => o(!r),
                    }),
                }),
        ],
    });
}
function tV(e) {
    let { gamesFacet: t } = e,
        l = (0, tC.Pu)((e) => e.gameFacet),
        n = tU(),
        r = a.useMemo(() => t.map((e) => e.key), [t]),
        o = (0, b.A)(r),
        c = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return 0 === t.length
        ? null
        : (0, i.jsxs)(tw.Ip, {
              className: s()(t_.uW, t_.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(p.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: t_.a9,
                      children: ei.intl.string(ei.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: t_._A,
                      children: t.map((e) =>
                          (0, i.jsx)(
                              tO,
                              {
                                  icon: (0, i.jsx)(A.A, { game: c.get(e.key), size: A.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tG, { count: e.count }),
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
function tY(e) {
    let { gamesFacet: t, distributedClipInitiatorsFacet: l, mainLinkCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: t_.pz,
        children: [
            (0, i.jsx)(tz, {}),
            (0, i.jsxs)("div", {
                className: t_.wp,
                children: [
                    (0, i.jsx)(tH, { mainLinkCounts: a }),
                    (0, i.jsx)(tK, { initiatorsFacet: l }),
                    (0, i.jsx)(tV, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tQ = l(174726);
let tW = a.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, tC.Pu)((e) => e.query),
            s = (0, tC.Pu)((e) => e.setQuery),
            r = (0, tC.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            c = (0, e1.bG)([e5.Ay], () => e5.Ay.getKeybindForAction(eW.hCu.SAVE_CLIP)),
            u = a.useCallback(() => {
                (0, e4.openUserSettings)(e7.X.CLIPS_PANEL);
            }, []),
            d = a.useCallback(() => s(""), [s]),
            m = null != c ? e8.dI(c.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tQ.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tQ.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tQ.Pe,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ei.intl.string(ei.t.z2jK6X),
                                }),
                                null != m && (0, i.jsx)(e3.e, { className: tQ.P, shortcut: m }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tQ.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(o.m, {
                                        text: ei.intl.string(ei.t.X7yRDm),
                                        children: (0, i.jsx)(tN.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tF, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(Q.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ei.intl.formatToPlainString(el.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tL.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(x.K, {
                                                                  icon: tL.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ei.intl.string(ei.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(o.m, {
                                    text: ei.intl.string(ei.t["3D5yo/"]),
                                    children: (0, i.jsx)(x.K, {
                                        onClick: u,
                                        icon: tE.Z,
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
                    (0, i.jsx)("div", {
                        className: tQ.MT,
                        children: (0, i.jsx)(tI.I, {
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
    t$ = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(K.D, {
            className: s()(tQ.MV, { [tQ.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tQ.tk,
                    children: [
                        a,
                        (0, i.jsx)(F.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tQ.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tQ.z2,
                    children: (0, i.jsx)(F.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tX(e) {
    let { enabled: t } = L.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tY, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
          })
        : (0, i.jsx)(tB, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tB(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, tC.Pu)((e) => e.gameFacet),
        r = (0, tC.Pu)((e) => e.activeMainLink),
        o = (0, tC.Pu)((e) => e.setGameFacet),
        c = (0, tC.Pu)((e) => e.setActiveMainLink),
        {
            legacyGames: u,
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
        h = a.useMemo(() => u.map((e) => e.applicationId), [u]),
        x = (0, b.A)(h),
        g = a.useMemo(() => new Map(x.map((e) => [e?.id, e])), [x]),
        f = a.useCallback(() => {
            c(M.oH.ALL_CLIPS), o(null);
        }, [c, o]),
        j = a.useCallback(() => {
            c(M.oH.FAVORITES), o(null);
        }, [c, o]),
        v = a.useCallback(
            (e) => {
                o(e), c(M.oH.ALL_CLIPS);
            },
            [o, c],
        ),
        C = null == s && r === M.oH.ALL_CLIPS,
        y = null == s && r === M.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: tQ.pz,
        children: [
            (0, i.jsx)(tW, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: tQ.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tQ.om,
                        children: (0, i.jsxs)("div", {
                            className: tQ.Ep,
                            children: [
                                (0, i.jsx)(t$, {
                                    name: ei.intl.string(ei.t.dPVrEv),
                                    count: d,
                                    icon: (0, i.jsx)(eA.x, {}),
                                    isSelected: C,
                                    onClick: f,
                                }),
                                (0, i.jsx)(t$, {
                                    name: ei.intl.string(ei.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)(V.G, {}),
                                    isSelected: y,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    u.length > 0 &&
                        (0, i.jsxs)(tw.Ip, {
                            className: tQ.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tQ.a9,
                                    children: ei.intl.string(ei.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tQ.Ep,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            t$,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(A.A, {
                                                    game: g.get(e.applicationId),
                                                    size: A.M.XSMALL,
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
var tq = l(847374),
    tZ = l(112173),
    tJ = l(548118),
    t0 = l(441349),
    t1 = l(789645),
    t2 = l(939546),
    t3 = l(99478);
function t9(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function t6(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function t7(e, t) {
    if (null == e && null == t) return null;
    let l = (0, t2.Xj)();
    return { preset: "custom", after: null != e ? t9(e.toDate(l)) : null, before: null != t ? t6(t.toDate(l)) : null };
}
function t4(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t3.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t5 = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t8(e) {
    return t5.format(new Date(e));
}
function le(e) {
    switch (e.preset) {
        case "today":
            return ei.intl.string(el.default.yOAWWM);
        case "yesterday":
            return ei.intl.string(el.default["PtV/Ti"]);
        case "last-3-days":
            return ei.intl.string(el.default.xfmv7I);
        case "this-year":
            return ei.intl.string(el.default["+eE7zX"]);
        case "last-year":
            return ei.intl.string(el.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? t8(e.after) : null,
                l = null != e.before ? t8(e.before) : null;
            if (null != t && null != l)
                return ei.intl.formatToPlainString(el.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ei.intl.formatToPlainString(el.default.k1FkTL, { date: t });
            if (null != l) return ei.intl.formatToPlainString(el.default["4NlpHD"], { date: l });
            return ei.intl.string(el.default.tv9apA);
        }
    }
}
var lt = l(817480);
function ll(e) {
    let { closePopout: t } = e,
        l = (0, tC.Pu)((e) => e.dateFilter),
        n = (0, tC.Pu)((e) => e.setDateFilter),
        [r, c] = a.useState(l?.preset === "custom"),
        [u, d] = a.useState(() => (l?.preset === "custom" ? t4(l.after) : null)),
        [m, h] = a.useState(() => (l?.preset === "custom" ? t4(l.before) : null)),
        p = a.useMemo(
            () => [
                { key: "today", label: ei.intl.string(el.default.yOAWWM) },
                { key: "yesterday", label: ei.intl.string(el.default["PtV/Ti"]) },
                { key: "last-3-days", label: ei.intl.string(el.default.xfmv7I) },
                { key: "this-year", label: ei.intl.string(el.default["+eE7zX"]) },
                { key: "last-year", label: ei.intl.string(el.default.Nwj9v0) },
            ],
            [],
        ),
        g = l?.preset ?? null,
        f = r && "custom" !== g ? null : g,
        j = a.useMemo(() => (0, t2.Ec)((0, t2.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: t9(new Date(t)), before: t6(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: t9(new Date(l)), before: t6(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: t9(l), before: t6(new Date(t)) };
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
        C = a.useCallback(() => {
            c((e) => !e);
        }, []),
        y = a.useCallback(
            (e) => {
                d(e), n(t7(e, m));
            },
            [m, n],
        ),
        b = a.useCallback(
            (e) => {
                h(e), n(t7(u, e));
            },
            [u, n],
        ),
        A = a.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        k = null != u || null != m;
    return (0, i.jsxs)("div", {
        className: s()(lt.SW, r && lt.Td),
        children: [
            (0, i.jsxs)("div", {
                className: lt.sh,
                children: [
                    (0, i.jsx)(F.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: lt.a9,
                        children: ei.intl.string(el.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: lt.eF,
                        children: [
                            p.map((e) =>
                                (0, i.jsx)(
                                    K.D,
                                    {
                                        className: s()(lt.zD, f === e.key && lt.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": f === e.key,
                                        children: (0, i.jsx)(F.E, {
                                            variant: "text-md/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, i.jsxs)(K.D, {
                                className: s()(lt.zD, lt.Kl, (r || "custom" === g) && lt.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(F.E, {
                                        variant: "text-md/medium",
                                        color: "currentColor",
                                        children: ei.intl.string(el.default.tv9apA),
                                    }),
                                    (0, i.jsx)(F.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: lt.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lt.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: lt.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: lt._2,
                                children: [
                                    (0, i.jsx)(F.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: lt.bk,
                                        "aria-hidden": !0,
                                        children: ei.intl.string(el.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: lt.h0,
                                        children: [
                                            (0, i.jsx)(t0.l, {
                                                label: ei.intl.string(el.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: u,
                                                onChange: y,
                                                maxValue: m ?? j,
                                            }),
                                            null != u &&
                                                (0, i.jsx)(o.m, {
                                                    text: ei.intl.string(ei.t.VkKicb),
                                                    children: (0, i.jsx)(x.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: t1.P,
                                                        onClick: () => y(null),
                                                        "aria-label": ei.intl.string(ei.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: lt._2,
                                children: [
                                    (0, i.jsx)(F.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: lt.bk,
                                        "aria-hidden": !0,
                                        children: ei.intl.string(el.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: lt.h0,
                                        children: [
                                            (0, i.jsx)(t0.l, {
                                                label: ei.intl.string(el.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: m,
                                                onChange: b,
                                                minValue: u ?? void 0,
                                                maxValue: j,
                                            }),
                                            null != m &&
                                                (0, i.jsx)(o.m, {
                                                    text: ei.intl.string(ei.t.VkKicb),
                                                    children: (0, i.jsx)(x.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: t1.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ei.intl.string(ei.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    k &&
                        (0, i.jsx)("div", {
                            className: lt.dS,
                            children: (0, i.jsx)(e9.Q, { size: "sm", text: ei.intl.string(ei.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var li = l(103552),
    la = l(914427),
    ln = l(213424);
function ls(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: n,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        u = a.useRef(null),
        d = a.useMemo(() => new Set(n), [n]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tP()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            li.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: ln.H, children: e.icon }),
                                    (0, i.jsx)(li.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(li.x4.Checkbox, {}) : (0, i.jsx)(li.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(tN.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(la.p, {
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
            (0, i.jsx)(Q.$, {
                ...e,
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tq.a,
                iconPosition: "end",
            }),
    });
}
var lr = l(941886);
function lo(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: lr.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: lr.Kk, children: l }),
            (0, i.jsx)(F.E, {
                className: lr.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(K.D, {
                className: lr.DT,
                onClick: a,
                "aria-label": n ?? ei.intl.string(ei.t.N86XcP),
                children: (0, i.jsx)(t1.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lc = l(841765);
function lu() {
    let e = (0, tC.Pu)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? le(e) : ei.intl.string(el.default.upqksT);
    return (0, i.jsx)(tN.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ll, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(Q.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tq.a,
                iconPosition: "end",
            }),
    });
}
function ld() {
    let e = (0, tC.Pu)((e) => e.sortOrder),
        t = (0, tC.Pu)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = e === M.mu.OLDEST ? ei.intl.string(ei.t["0gitSE"]) : ei.intl.string(ei.t["4LLKx3"]);
    return (0, i.jsx)(tN.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, i.jsx)(tD.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ei.intl.string(ei.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, i.jsxs)(tM.rX, {
                    children: [
                        (0, i.jsx)(tM.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ei.intl.string(ei.t["4LLKx3"]),
                            action: () => {
                                t(M.mu.MOST_RECENT), a();
                            },
                            checked: e === M.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(tM.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ei.intl.string(ei.t["0gitSE"]),
                            action: () => {
                                t(M.mu.OLDEST), a();
                            },
                            checked: e === M.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) => (0, i.jsx)(Q.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: n, icon: tZ.J }),
    });
}
function lm(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tC.Pu)((e) => e.query),
        r = (0, tC.Pu)((e) => e.setQuery),
        o = (0, tC.Pu)((e) => e.gameFacet),
        c = (0, tC.Pu)((e) => e.clippedWithFacet),
        u = (0, tC.Pu)((e) => e.selectedGameIds),
        h = (0, tC.Pu)((e) => e.selectedUserIds),
        p = (0, tC.Pu)((e) => e.selectedGuildId),
        x = (0, tC.Pu)((e) => e.selectedActivity),
        g = (0, tC.Pu)((e) => e.dateFilter),
        f = (0, tC.Pu)((e) => e.toggleGameId),
        j = (0, tC.Pu)((e) => e.toggleUserId),
        v = (0, tC.Pu)((e) => e.setSelectedGuildId),
        C = (0, tC.Pu)((e) => e.setSelectedActivity),
        y = (0, tC.Pu)((e) => e.setDateFilter),
        N = (0, tC.Pu)((e) => e.clearFilters),
        L = a.useMemo(() => l.map((e) => e.key), [l]),
        E = (0, b.A)(L),
        I = a.useMemo(() => new Map(E.map((e) => [e?.id, e])), [E]),
        w = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(A.A, { game: I.get(e.key), size: A.M.XSMALL }),
                })),
            [l, I],
        ),
        S = a.useMemo(
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
        P = a.useMemo(
            () =>
                S.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(tJ.Ay, { guild: e.guild, size: tJ.Ay.Sizes.MINI }),
                })),
            [S],
        ),
        D = a.useMemo(() => new Map(S.map((e) => [e.key, e.guild])), [S]),
        M = a.useMemo(
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
                        let e = k.default.getUser(l.key);
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
        F = a.useMemo(() => (null != p ? new Set([p]) : new Set()), [p]),
        R = a.useMemo(() => (null != x ? new Set([x]) : new Set()), [x]),
        _ = a.useCallback(
            (e) => {
                v(p === e ? null : e);
            },
            [p, v],
        ),
        O = a.useCallback(
            (e) => {
                C(x === e ? null : e);
            },
            [x, C],
        ),
        z = null == o,
        H = null == c,
        G = (0, i.jsxs)(i.Fragment, {
            children: [
                z &&
                    Array.from(u).map((e) => {
                        let t = w.find((t) => t.key === e);
                        return (0, i.jsx)(
                            lo,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(A.A, { game: I.get(e), size: A.M.XSMALL }),
                                onRemove: () => f(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != g && (0, i.jsx)(lo, { label: le(g), onRemove: () => y(null) }, "date"),
                null != p &&
                    (0, i.jsx)(
                        lo,
                        {
                            label: P.find((e) => e.key === p)?.label ?? p,
                            icon:
                                null != D.get(p)
                                    ? (0, i.jsx)(tJ.Ay, { guild: D.get(p), size: tJ.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => v(null),
                        },
                        "guild",
                    ),
                H && Array.from(h).map((e) => (0, i.jsx)(lh, { userId: e, onRemove: () => j(e) }, `user-${e}`)),
                null != x && (0, i.jsx)(lo, { label: x, onRemove: () => C(null) }, "activity"),
            ],
        }),
        U = (z && u.size > 0) || null != g || null != p || (H && h.size > 0) || null != x;
    return (0, i.jsxs)("div", {
        className: lc.kT,
        children: [
            (0, i.jsxs)("div", {
                className: lc.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: lc.MT,
                        children: (0, i.jsx)(tI.I, {
                            placeholder: ei.intl.string(ei.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: lc.Zq,
                        children: [
                            z &&
                                w.length > 0 &&
                                (0, i.jsx)(ls, {
                                    triggerLabel: ei.intl.string(ei.t.URyqtP),
                                    options: w,
                                    selectedKeys: u,
                                    onToggle: f,
                                    multiSelect: !0,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(lu, {}),
                            P.length > 0 &&
                                (0, i.jsx)(ls, {
                                    triggerLabel: ei.intl.string(ei.t["5qyruI"]),
                                    options: P,
                                    selectedKeys: F,
                                    onToggle: _,
                                    multiSelect: !1,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            H &&
                                T.length > 0 &&
                                (0, i.jsx)(ls, {
                                    triggerLabel: ei.intl.string(ei.t.YQ6dJg),
                                    options: T,
                                    selectedKeys: h,
                                    onToggle: (e) => j(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                            M.length > 0 &&
                                (0, i.jsx)(ls, {
                                    triggerLabel: ei.intl.string(ei.t.agRtPG),
                                    options: M,
                                    selectedKeys: R,
                                    onToggle: O,
                                    multiSelect: !1,
                                    searchPlaceholder: ei.intl.string(ei.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: lc.QZ, children: (0, i.jsx)(ld, {}) }),
                ],
            }),
            U &&
                (0, i.jsxs)("div", {
                    className: lc.eH,
                    children: [
                        G,
                        (0, i.jsx)(e9.Q, {
                            size: "sm",
                            variant: "secondary",
                            text: ei.intl.string(ei.t.O8k7O4),
                            onClick: N,
                        }),
                    ],
                }),
        ],
    });
}
function lh(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, r.bG)([k.default], () => k.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(lo, {
        label: n,
        icon: (0, i.jsx)(d.eu, { src: a.getAvatarURL(null, 32), size: m._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var lp = l(409067),
    lx = l(847455);
let lg = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lf(e) {
    let { channelId: t, onClose: n, onClipClick: T, transitionState: F, initialEditingClipId: R, ..._ } = e;
    (0, D.A)();
    let { analyticsLocations: O } = (0, y.Ay)(C.A.CLIPS_GALLERY),
        [z, H] = a.useState(new Set()),
        {
            gamesFacet: G,
            participantsFacet: U,
            distributedClipInitiatorsFacet: K,
            filteredClips: V,
            mainLinkCounts: Y,
            allClips: Q,
        } = (0, lp.a)(),
        { enabled: W } = L.O.useConfig({ location: "ClipsGalleryModal" }),
        { onShareClick: $ } = (0, P.A)(t);
    a.useEffect(
        () => () => {
            tC.Pu.getState().resetAll();
        },
        [],
    ),
        a.useEffect(() => {
            if (!W) return;
            let e = tC.Pu.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(M.oH.HOME);
        }, [W]);
    let X = (0, r.bG)([N.Ay], () => N.Ay.getExportingClipIds().length > 0),
        [B, q] = a.useState(null != R ? "editing" : "gallery"),
        [Z, J] = a.useState(R ?? null),
        ee = (0, r.bG)([N.Ay], () => (null != Z ? N.Ay.getClipById(Z) : null), [Z]),
        et = a.useRef(B);
    (et.current = B), (a.useRef(Z).current = Z);
    let [ea, en] = a.useState(null != R ? u.ip.ENTERED : u.ip.HIDDEN),
        es = a.useRef(null),
        er = (0, tC.Pu)((e) => e.gameFacet),
        eo = (0, tC.Pu)((e) => e.clippedWithFacet),
        ec = (0, tC.Pu)((e) => e.activeMainLink),
        eu = (0, tC.Pu)(
            (e) =>
                "" !== e.query.trim() ||
                e.selectedGameIds.size > 0 ||
                e.selectedUserIds.size > 0 ||
                null != e.selectedGuildId ||
                null != e.selectedActivity ||
                null != e.dateFilter,
        );
    a.useEffect(() => {
        ec === M.oH.HOME && eu && tC.Pu.getState().setActiveMainLink(M.oH.ALL_CLIPS);
    }, [ec, eu]);
    let ed = a.useMemo(() => (null != er ? [er] : []), [er]),
        em = (0, b.A)(ed)[0] ?? null,
        eh = (0, r.bG)([k.default], () => (null != eo ? k.default.getUser(eo) : null), [eo]),
        ep = a.useMemo(() => {
            if (null != er) {
                let e = G.find((e) => e.key === er)?.name ?? ei.intl.string(ei.t.dPVrEv);
                return { icon: (0, i.jsx)(A.A, { game: em, size: A.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != eo) {
                let e = null != eh ? (eh.globalName ?? eh.username) : eo;
                return {
                    icon:
                        null != eh
                            ? (0, i.jsx)(d.eu, {
                                  src: eh.getAvatarURL(null, 32),
                                  size: m._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return ec === M.oH.FAVORITES
                ? { icon: null, title: ei.intl.string(ei.t["9rlCk1"]) }
                : ec === M.oH.AUTO_CLIPS
                  ? { icon: null, title: ei.intl.string(el.default.ikNKf1) }
                  : ec === M.oH.HOME
                    ? { icon: null, title: ei.intl.string(ei.t.Ym2Ri6) }
                    : { icon: null, title: ei.intl.string(ei.t.dPVrEv) };
        }, [er, eo, ec, G, em, eh]),
        ex = a.useCallback(() => {
            q("editing"), v.A.useReducedMotion && en(u.ip.ENTERED);
        }, []),
        eg = a.useCallback((e) => {
            H((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        ef = a.useCallback(
            (e) => {
                J(e.id), ex();
            },
            [ex],
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
            H(new Set());
        }, []),
        eC = z.size > 0,
        ey = a.useCallback(() => {
            let e = Q.filter((e) => z.has(e.id));
            (0, h.openModalLazy)(
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
        }, [Q, z, ev]),
        eb = a.useCallback(async () => {
            let e = Q.filter((e) => z.has(e.id));
            await $({ clips: e }), ev();
        }, [Q, z, $, ev]),
        eA = a.useMemo(
            () => ({ selectedClipIds: z, toggleClipSelection: eg, clearSelection: ev, isMultiSelectMode: eC }),
            [z, eg, ev, eC],
        );
    return (0, i.jsx)(y.f5, {
        value: O,
        children: (0, i.jsx)(lg.Provider, {
            value: eA,
            children: (0, i.jsx)(c.N, {
                onClose: n,
                transitionState: F,
                ..._,
                children: (0, i.jsxs)("div", {
                    className: lx.jT,
                    ref: es,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(lx.PD, "gallery" === B && lx.vu),
                            inert: "gallery" !== B,
                            children: [
                                (0, i.jsx)(tX, {
                                    gamesFacet: G,
                                    participantsFacet: U,
                                    distributedClipInitiatorsFacet: K,
                                    mainLinkCounts: Y,
                                    allClips: Q,
                                    filteredClips: V,
                                    withHeaderFilters: !W,
                                }),
                                (0, i.jsxs)("div", {
                                    className: lx.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: lx.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: lx.Rj,
                                                    children: [
                                                        ep.icon,
                                                        (0, i.jsx)(p.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: ep.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: lx.$s,
                                                    children: [
                                                        eC &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ei.intl.string(ei.t.RDE0Sc),
                                                                        children: (0, i.jsx)(x.K, {
                                                                            onClick: eb,
                                                                            icon: g.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ei.intl.string(ei.t.RDE0Sc),
                                                                            loading: X,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ei.intl.string(ei.t.oyYWHE),
                                                                        children: (0, i.jsx)(x.K, {
                                                                            onClick: ey,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ei.intl.string(ei.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(x.K, {
                                                            onClick: n,
                                                            icon: j.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ei.intl.string(ei.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        W && (0, i.jsx)(lm, { allClips: Q, gamesFacet: G, participantsFacet: U }),
                                        (0, i.jsx)(tk, {
                                            onEdit: ef,
                                            channelId: t,
                                            filteredClips: V,
                                            totalClipCount: Q.length,
                                            onClipClick: T,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(lx.jN, "editing" === B && lx.vu),
                            inert: "editing" !== B,
                            onTransitionEnd: () => {
                                "gallery" === B ? (J(null), en(u.ip.HIDDEN)) : "editing" === B && en(u.ip.ENTERED);
                            },
                            children:
                                null != ee &&
                                (0, i.jsxs)(S.p, {
                                    clip: ee,
                                    modalContainerRef: es,
                                    children: [
                                        (0, i.jsx)(I.A, { transitionState: ea, onClose: ej }),
                                        (0, i.jsx)(w.A, { channelId: t, onClose: ej }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
