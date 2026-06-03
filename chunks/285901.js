l.d(t, { $: () => la, default: () => ln });
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
    h = l(192308),
    p = l(534514),
    g = l(408278),
    x = l(405433),
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
    E = l(116671),
    w = l(582633),
    I = l(309777),
    D = l(429364),
    S = l(352527),
    P = l(280483),
    M = l(111994);
l(321073);
var T = l(562708),
    F = l(834730),
    _ = l(289873),
    R = l(139286),
    O = l(962125);
let z = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var H = l(505124),
    G = l(43990),
    U = l(175841),
    K = l(821609),
    V = l(449543),
    Y = l(152858),
    Q = l(989349),
    W = l.n(Q),
    X = l(66455),
    B = l(342952),
    $ = l(890856),
    q = l(777666),
    Z = l(27232),
    J = l(505930),
    ee = l(530005),
    et = l(406810),
    el = l(176781),
    ei = l(661531),
    ea = l(983851),
    en = l(31300),
    es = l(442433),
    er = l(587895),
    eo = l(47167),
    eu = l(607470),
    ec = l(734057),
    ed = l(71393),
    em = l(549685),
    eh = l(174459),
    ep = l(58703),
    eg = l(403362),
    ex = l(372684),
    ef = l(974293),
    ej = l(226421),
    ev = l(284009),
    eC = l.n(ev),
    ey = l(460905),
    eb = l(713608),
    eA = l(16590),
    ek = l(375708),
    eN = l(788332);
function eL(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eC()(l?.type === ex.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, r.bG)([k.default], () => k.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(o.m, {
        text: ek.intl.string(eA.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: eN.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eN.$, alt: n }),
                (0, i.jsx)(F.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ek.intl.formatToPlainString(eA.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eE(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(o.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eN.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(F.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function ew(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === ex.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case ex.Gy.DISTRIBUTED:
            return (0, i.jsx)(eL, { clip: t });
        case ex.Gy.LAUGHTER:
            return (0, i.jsx)(eE, {
                icon: ey.n,
                text: ek.intl.string(eA.default.bTC23D),
                tooltipText: ek.intl.string(eA.default["ry+jxm"]),
            });
        case ex.Gy.GAME_EVENT:
            return (0, i.jsx)(eE, {
                icon: eb.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ek.intl.string(eA.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eI = l(665039),
    eD = l(718812),
    eS = l(652215),
    eP = l(798594);
let eM = function (e) {
    let { clip: t, actionsDisabled: n, isNew: o, onEdit: u, onClick: c, onHoverChange: d } = e,
        h = (0, r.yK)([k.default], () => t.users.map((e) => k.default.getUser(e)).filter(eg.Vq)),
        p = (0, r.bG)([ec.A], () => (null != t.channelId ? ec.A.getChannel(t.channelId) : null)),
        g = (0, r.bG)([ed.A], () => (null != t.guildId ? ed.A.getGuild(t.guildId) : null)),
        { analyticsLocations: x } = (0, y.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = a.useContext(la),
        [b, A] = a.useState(!1),
        L = a.useRef(null),
        E = (0, X.A)(t.editMetadata?.start ?? 0),
        w = f.has(t.id),
        I = t.type === ex.nQ.SCREENSHOT,
        D = (0, eo.Ay)(p),
        S = "" === t.applicationName && null != D && "" !== D ? D : t.applicationName,
        P = (0, ep.Fe)(new Date(t.createdAt)),
        M = a.useMemo(() => {
            let e = [];
            return (
                t.type === ex.nQ.VOICE_CLIP
                    ? (g?.name != null && e.push(g.name), null != D && e.push(D))
                    : ("" !== S && null != S && e.push(S),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [S, g?.name, D, t.activity?.state, t.activity?.details, t.type]),
        T = a.useCallback(() => {
            let e = L.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        _ = a.useCallback(() => {
            if ((d?.("" !== t.thumbnail ? t.thumbnail : null), !0 === I)) return;
            let e = L.current;
            null != e && e.paused && ((e.currentTime = E.current), L.current?.play());
        }, [I, E, d, t.thumbnail]),
        R = a.useCallback(() => {
            if ((d?.(null), !0 === I)) return;
            let e = L.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start, d]),
        O = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || R();
            },
            [R],
        ),
        z = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        H = a.useCallback(() => {
            A(!1);
        }, []),
        G = a.useCallback(
            (e) => {
                A(!0), L.current?.pause();
                let a =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => N.Ay.getClipById(e))
                              .filter(eg.Vq)
                        : [t];
                (0, es.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("66559"),
                            l.e("56024"),
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
                                    eh.default.track(eS.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        clip_runtime: (0, ef.GN)(),
                                    });
                                },
                                onEdit: () => {
                                    u(t),
                                        eh.default.track(eS.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            clip_runtime: (0, ef.GN)(),
                                        });
                                },
                                onBeforeDelete: T,
                                onAfterDelete: () => {
                                    eh.default.track(eS.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        clip_runtime: (0, ef.GN)(),
                                    });
                                },
                            });
                    },
                    { onClose: H },
                );
            },
            [t, v, f, n, T, H, u],
        ),
        U = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), G(e));
            },
            [n, G],
        ),
        K = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), j(t.id)) : v ? j(t.id) : null != c && c(t),
                    eh.default.track(eS.HAw.CLIP_GALLERY_CARD_CLICKED, { clip_runtime: (0, ef.GN)() }));
            },
            [n, v, j, t, c],
        );
    return (0, i.jsx)(y.f5, {
        value: x,
        children: (0, i.jsx)("div", {
            className: eP.o8,
            onBlur: O,
            children: (0, i.jsxs)($.s, {
                "aria-disabled": n,
                "aria-label": ek.intl.string(!0 === I ? ek.t["HO/oXl"] : ek.t.bt75uw),
                onClick: n ? void 0 : K,
                onContextMenu: U,
                className: s()(eP.QN, { [eP.r9]: n, [eP.in]: b, [eP.wH]: w }),
                onFocus: _,
                onMouseOver: _,
                onMouseLeave: R,
                children: [
                    (0, i.jsx)(eT, { clip: t, isNew: o, videoRef: L, onOpenContextMenu: G, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: eP.wI,
                        children: [
                            (0, i.jsx)(eR, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: eP.i0,
                                children: [
                                    (0, i.jsx)(eF, { clip: t }),
                                    (0, i.jsx)(F.E, {
                                        className: eP.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: M,
                                    }),
                                    (0, i.jsx)(F.E, {
                                        className: eP.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: P,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: eP.jW,
                                children: (0, i.jsx)(B.A, {
                                    maxUsers: 3,
                                    users: h,
                                    size: m._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && _());
                                    },
                                    onClickOverflow: z,
                                    "aria-label": ek.intl.string(ek.t.WTozwe),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
function eT(e) {
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
            let a = W().duration(e),
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
        className: eP.QB,
        children: [
            (0, i.jsx)("div", { className: eP.ne }),
            (0, i.jsx)(e_, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eP.ry,
                children: [
                    !c && l && (0, i.jsx)(q.Lp, { text: ek.intl.string(ek.t.y2b7CA) }),
                    (0, i.jsx)(ew, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eP.g3,
                    children: [
                        (0, i.jsx)(o.m, {
                            text: ek.intl.string(t.isFavorite ? eA.default.IZsalP : eA.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(g.K, {
                                onClick: x,
                                icon: t.isFavorite ? Z.G : J.y,
                                "aria-label": ek.intl.string(ek.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(g.K, {
                            onClick: f,
                            icon: ee.F,
                            "aria-label": ek.intl.string(ek.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                className: eP.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eP.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(et.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(F.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ek.intl.string(ek.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !u &&
                        (0, i.jsxs)("div", {
                            className: eP.OH,
                            children: [
                                p && (0, i.jsx)(em.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(F.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: c ? ek.intl.string(ek.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !u &&
                d > 0 &&
                (0, i.jsx)("div", {
                    className: eP.X7,
                    children: (0, i.jsx)("div", { className: eP.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eF(e) {
    let { clip: t } = e,
        l = (0, eD.h)(t),
        a = "" !== l;
    return (0, i.jsx)(F.E, {
        className: eP.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function e_(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, eI.j)(t),
        n = t.type === ex.nQ.SCREENSHOT;
    return t.type === ex.nQ.VOICE_CLIP
        ? (0, i.jsx)(ej.A, { className: eP.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eP.fT })
          : null != a
            ? (0, i.jsx)(eu.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eP.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eP.fT })
              : (0, i.jsx)("div", {
                    className: s()(eP.fT, eP.Is),
                    children: (0, i.jsx)(el.x, { color: ei.A.colors.ICON_MUTED }),
                });
}
function eR(e) {
    let { clip: t } = e,
        l = (0, r.bG)([er.A], () => (null != t.applicationId ? er.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eP.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eP.NH })
                : t.type === ex.nQ.VOICE_CLIP
                  ? (0, i.jsx)(ea.H, { size: "sm" })
                  : (0, i.jsx)(en.k, { size: "sm" }),
    });
}
var eO = l(792852);
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var eH = l(452143);
function eG(e) {
    let { onEdit: t } = e,
        l = (0, r.yK)([N.Ay], () => N.Ay.getClips()),
        n = a.useMemo(() => ez(l), [l]),
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
                              if (t.thumbnail === e) return t;
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
                                { src: e.previousThumbnail, className: eH.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${eH.Tp} ${eH.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        { enabled: c } = L.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, eO.Pu)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, i.jsx)(G.N, {
              theme: H.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(eH.uW, e),
                      "aria-label": ek.intl.string(eA.default.efLpNC),
                      children: [
                          o,
                          (0, i.jsxs)("div", {
                              className: eH.wx,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: eH.mX,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: eH.UP,
                                              children: [
                                                  (0, i.jsx)(U.B, { size: "refresh_sm", color: "white" }),
                                                  (0, i.jsx)(F.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: ek.intl.string(eA.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(p.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: eH.DD,
                                              children: ek.intl.string(eA.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  c &&
                                      (0, i.jsx)("div", {
                                          className: eH.BX,
                                          children: (0, i.jsx)(K.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(M.oH.AUTO_CLIPS),
                                              text: ek.intl.string(eA.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsx)(V.A, {
                              className: eH.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: Y.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ek.intl.string(eA.default.efLpNC),
                              children: n.map((e) =>
                                  (0, i.jsx)(
                                      "div",
                                      {
                                          className: eH.cW,
                                          onFocus: () => u("" !== e.thumbnail ? e.thumbnail : null),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  u(null);
                                          },
                                          children: (0, i.jsx)(eM, {
                                              clip: e,
                                              actionsDisabled: !1,
                                              isNew: !1,
                                              onEdit: t,
                                              onClick: t,
                                              onHoverChange: u,
                                          }),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  }),
          });
}
function eU(e) {
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
var eK = l(702841),
    eV = l(687966),
    eY = l(475358),
    eQ = l(123292),
    eW = l(292801),
    eX = l(780964),
    eB = l(766075),
    e$ = l(532624),
    eq = l(350535),
    eZ = l(572164),
    eJ = l(953932),
    e0 = l(311162);
function e1(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: e0.Nr,
        children: [t, (0, i.jsx)(F.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function e2() {
    let e = (0, eK.bG)([e$.Ay], () => e$.Ay.getKeybindForAction(eS.hCu.SAVE_CLIP)),
        t = null != e ? eq.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: e0.kR,
        children: [
            (0, i.jsx)(e1, {
                header: (0, i.jsx)(eV._, { size: "refresh_sm", color: ei.A.colors.ICON_DEFAULT }),
                description: ek.intl.string(eA.default["4K56sP"]),
            }),
            (0, i.jsx)(e1, {
                header: null != t ? (0, i.jsx)(eY.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ek.intl.format(eA.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: e0.JH,
                                      children: (0, i.jsx)(eQ.Q, {
                                          text: ek.intl.string(eA.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eB.openUserSettings)(eX.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ek.intl.string(eA.default.HOUDUm),
            }),
            (0, i.jsx)(e1, {
                header: (0, i.jsx)(eW.t, { size: "refresh_sm", color: ei.A.colors.ICON_DEFAULT }),
                description: ek.intl.string(eA.default.DLzdl7),
            }),
        ],
    });
}
function e3(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eZ.Et)();
    return (0, i.jsx)("div", {
        className: e0.kL,
        children: (0, i.jsxs)("div", {
            className: e0.Qs,
            children: [
                (0, i.jsx)(eU, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(p.D, {
                    className: e0.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ek.intl.string(eA.default["+M2iLf"]) : ek.intl.string(eA.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(F.E, {
                        className: e0.h_,
                        variant: "text-md/medium",
                        children: ek.intl.string(eA.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: e0.SO, children: (0, i.jsx)(eJ.A, {}) }),
                l && !t && (0, i.jsx)(e2, {}),
            ],
        }),
    });
}
let e9 = 16 / 9;
var e7 = l(609174),
    e6 = l(226870),
    e5 = l(285072),
    e4 = l(742007);
function e8(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(e7.Cl, {
        clip: t,
        children: (0, i.jsx)(te, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function te(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: o } = e,
        u = (0, e7.Y_)(),
        { analyticsLocations: c } = (0, y.Ay)(C.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: d, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(la),
        [p, g] = a.useState(!1),
        [x, f] = a.useState(!1),
        j = d.has(u.id),
        v = u.type === ex.nQ.SCREENSHOT,
        b = a.useRef(null),
        A = a.useCallback(() => {
            b.current?.releaseSource();
        }, []),
        k = a.useCallback(() => g(!1), []),
        L = a.useCallback(
            (e) => {
                g(!0);
                let a =
                    h && d.size > 0
                        ? Array.from(d)
                              .map((e) => N.Ay.getClipById(e))
                              .filter(eg.Vq)
                        : [u];
                (0, es.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("66559"),
                            l.e("56024"),
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
                                    eh.default.track(eS.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    o(u), eh.default.track(eS.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: A,
                                onAfterDelete: () => {
                                    eh.default.track(eS.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: k },
                );
            },
            [u, h, d, t, k, o, A],
        ),
        E = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), L(e));
            },
            [t, L],
        ),
        w = a.useCallback(
            (e) => {
                t ||
                    (e.shiftKey ? (e.preventDefault(), m(u.id)) : h ? m(u.id) : null != r && r(u),
                    eh.default.track(eS.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [t, h, m, u, r],
        );
    return (0, i.jsx)(y.f5, {
        value: c,
        children: (0, i.jsxs)($.s, {
            "aria-disabled": t,
            "aria-label": ek.intl.string(v ? ek.t["HO/oXl"] : ek.t.bt75uw),
            onClick: t ? void 0 : w,
            onContextMenu: E,
            className: s()(e4.Nr, { [e4.r9]: t, [e4.in]: p, [e4.wH]: j }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: e4.w7,
                    children: (0, i.jsxs)(tt, {
                        ref: b,
                        isPlaying: x && !v,
                        children: [
                            (0, i.jsx)("div", { className: e4.Fv }),
                            (0, i.jsx)(tl, { isNew: n }),
                            !t && (0, i.jsx)(ti, { onOpenContextMenu: L }),
                            (0, i.jsx)(ta, {}),
                        ],
                    }),
                }),
                (0, i.jsx)(tn, {}),
            ],
        }),
    });
}
let tt = a.forwardRef((e, t) => {
    let { isPlaying: l, children: n } = e,
        [s, r] = a.useState(0);
    return (0, i.jsx)(e6.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: r,
        children: (0, i.jsxs)(e5.h, {
            isVisible: !0,
            children: [
                n,
                s > 0 &&
                    (0, i.jsx)("div", {
                        className: e4.hr,
                        children: (0, i.jsx)("div", { className: e4.TE, style: { width: `${s}%` } }),
                    }),
            ],
        }),
    });
});
function tl(e) {
    let { isNew: t } = e,
        l = (0, e7.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: e4.zV,
        children: [!a && t && (0, i.jsx)(q.Lp, { text: ek.intl.string(ek.t.y2b7CA) }), (0, i.jsx)(ew, { clip: l })],
    });
}
function ti(e) {
    let { onOpenContextMenu: t } = e,
        l = (0, e7.Y_)(),
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
        className: e4.Mw,
        children: [
            (0, i.jsx)(o.m, {
                text: ek.intl.string(l.isFavorite ? eA.default.IZsalP : eA.default.ihBfyA),
                position: "top",
                children: (0, i.jsx)(g.K, {
                    onClick: n,
                    icon: l.isFavorite ? Z.G : J.y,
                    "aria-label": ek.intl.string(ek.t.k8fFjp),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(g.K, {
                onClick: s,
                icon: ee.F,
                "aria-label": ek.intl.string(ek.t["UKOtz+"]),
                variant: "overlay-secondary",
                size: "sm",
            }),
        ],
    });
}
function ta() {
    let e = (0, e7.Y_)(),
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
            let a = W().duration(t),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [e.length, e.editMetadata]);
    return (0, i.jsxs)("div", {
        className: e4.kC,
        children: [
            "auto" === e.clipMethod &&
                (0, i.jsxs)("div", {
                    className: e4._s,
                    children: [
                        e.isTemporary && (0, i.jsx)(et.O, { color: "white", size: "xs" }),
                        (0, i.jsx)(F.E, {
                            variant: "text-sm/semibold",
                            color: "always-white",
                            children: ek.intl.string(ek.t["3Y2DJ8"]),
                        }),
                    ],
                }),
            !t &&
                (0, i.jsxs)("div", {
                    className: e4._s,
                    children: [
                        s && (0, i.jsx)(em.A, { color: "white", width: 16, height: 16 }),
                        (0, i.jsx)("span", {
                            children: (0, i.jsx)(F.E, {
                                variant: "text-sm/semibold",
                                color: "always-white",
                                tabularNumbers: !0,
                                children: l ? ek.intl.string(ek.t["2Fp7OP"]) : n,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function tn() {
    let e = (0, e7.Y_)(),
        t = (0, r.yK)([k.default], () => e.users.map((e) => k.default.getUser(e)).filter(eg.Vq)),
        l = (0, r.bG)([ec.A], () => (null != e.channelId ? ec.A.getChannel(e.channelId) : null)),
        n = (0, r.bG)([ed.A], () => (null != e.guildId ? ed.A.getGuild(e.guildId) : null)),
        s = (0, eo.Ay)(l),
        o = "" === e.applicationName && null != s && "" !== s ? s : e.applicationName,
        u = (0, ep.Fe)(new Date(e.createdAt)),
        c = a.useMemo(() => {
            let t = [];
            return (
                e.type === ex.nQ.VOICE_CLIP
                    ? (n?.name != null && t.push(n.name), null != s && t.push(s))
                    : ("" !== o && null != o && t.push(o),
                      e.activity?.state != null && "" !== e.activity.state && t.push(e.activity.state),
                      e.activity?.details != null && "" !== e.activity.details && t.push(e.activity.details)),
                t.join(" \u203A ")
            );
        }, [o, n, s, e.activity, e.type]);
    return (0, i.jsxs)("div", {
        className: e4.yu,
        children: [
            (0, i.jsx)(tr, {}),
            (0, i.jsxs)("div", {
                className: e4.yR,
                children: [
                    (0, i.jsx)(ts, {}),
                    (0, i.jsx)(F.E, { className: e4.VA, color: "text-subtle", variant: "text-sm/normal", children: c }),
                    (0, i.jsx)(F.E, { className: e4.VA, color: "text-subtle", variant: "text-sm/normal", children: u }),
                ],
            }),
            (0, i.jsx)("div", {
                className: e4.HD,
                children: (0, i.jsx)(B.A, {
                    maxUsers: 3,
                    users: t,
                    size: m._3.SIZE_24,
                    "aria-label": ek.intl.string(ek.t.WTozwe),
                }),
            }),
        ],
    });
}
function ts() {
    let e = (0, e7.Y_)(),
        t = (0, eD.h)(e),
        l = "" !== t;
    return (0, i.jsx)(F.E, {
        className: e4.DD,
        variant: "text-md/normal",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function tr() {
    let e = (0, e7.Y_)(),
        t = (0, r.bG)([er.A], () => (null != e.applicationId ? er.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: e4.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: e4.T_ })
                : e.type === ex.nQ.VOICE_CLIP
                  ? (0, i.jsx)(ea.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(en.k, { size: "sm", color: "currentColor" }),
    });
}
tt.displayName = "CardThumbnail";
var to = l(352528);
let tu = [0, 16, 0, 16],
    tc = tu[1] + tu[3];
function td(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s } = e,
        [o, u] = a.useState(!0),
        [c, d] = a.useState({ width: 0, height: 0 }),
        m = (0, r.bG)([N.Ay], () => N.Ay.getSettings().storageLocation),
        h = (0, r.yK)([N.Ay], () => N.Ay.getNewClipIds()),
        g = (0, r.bG)([N.Ay], () => N.Ay.getExportingClipIds().length > 0),
        x = (0, r.bG)([N.Ay], () => ez(N.Ay.getClips()).length > 0),
        f = (0, eO.Pu)(eO.mp),
        j = (0, eO.Pu)((e) => e.activeMainLink),
        { enableAutoClipsReview: v } = z.useConfig({ location: "ClipsGalleryContent" }),
        { enabled: C } = L.O.useConfig({ location: "ClipsGalleryContent" }),
        y = C ? e8 : eM,
        b = v && x && !f && j === M.oH.HOME;
    (0, R.A)(
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
                    title: ek.intl.string(ek.t["kB2R/0"]),
                    description: t ? ek.intl.string(ek.t["6AXirz"]) : void 0,
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
        { width: k } = c,
        { tileWidth: w, columns: I } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = k - tc) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, k]);
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
    let D = a.useMemo(() => A.map((e) => Math.ceil(e.clips.length / I)), [A, I]),
        S = a.useMemo(() => D.reduce((e, t) => e + t, 0), [D]),
        P = Math.floor(w / e9),
        H = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = A[l];
                if (null == r) return null;
                let o = a * I,
                    u = r.clips.slice(o, o + I);
                return (0, i.jsx)(
                    "div",
                    {
                        className: to.UX,
                        children: u.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: w },
                                    children: (0, i.jsx)(y, {
                                        actionsDisabled: g,
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
            [A, I, w, g, h, n, s, y],
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
                              className: to.aE,
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
                                          className: to.yV,
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
            ? (0, i.jsx)("div", { className: to.dc, children: (0, i.jsx)(_.y, {}) })
            : (0, i.jsx)(O.A, {
                  listPadding: tu,
                  renderListHeader: b ? () => (0, i.jsx)(eG, { onEdit: s }) : void 0,
                  listHeaderHeight: 380 * !!b,
                  renderRow: H,
                  renderSectionHeader: U,
                  rowCount: S,
                  rowCountBySection: D,
                  rowHeight: P + 68 + 16,
                  sectionHeaderHeight: G,
                  onResize: d,
              })
        : (0, i.jsx)(e3, { isEmptyBecauseQuery: l > 0 });
}
var tm = l(922016),
    th = l(783977),
    tp = l(625903),
    tg = l(892547),
    tx = l(939249),
    tf = l(364522),
    tj = l(91871),
    tv = l.n(tj),
    tC = l(980707),
    ty = l(477782),
    tb = l(583650);
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
            setDateFilter: h,
            setSortOrder: p,
            clearFilters: g,
        } = (0, eO.Pu)(),
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
                        let t = ed.A.getGuild(e);
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
        [E, w] = a.useState(""),
        I = a.useMemo(
            () => (0 === b.trim().length ? j : j.filter((e) => tv()(b.toLowerCase(), e.name.toLowerCase()))),
            [j, b],
        ),
        D = a.useMemo(
            () => (0 === N.trim().length ? C : C.filter((e) => tv()(N.toLowerCase(), e.name.toLowerCase()))),
            [C, N],
        ),
        S = a.useMemo(
            () => (0 === E.trim().length ? v : v.filter((e) => tv()(E.toLowerCase(), e.toLowerCase()))),
            [v, E],
        ),
        P = n.size > 0 || null != s || null != r || null != x,
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
        _ = a.useMemo(() => s ?? void 0, [s]),
        R = a.useMemo(() => (null != x ? String(x) : void 0), [x]);
    return (0, i.jsxs)(tC.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ek.intl.string(ek.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(ty.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(ty.Dr, {
                            id: "participants",
                            label: ek.intl.string(ek.t.YQ6dJg),
                            subtext: T,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(ty.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tb.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        ty.sL,
                                        { id: `participant-${t}`, label: l, action: () => c(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(ty.Dr, {
                            id: "servers",
                            label: ek.intl.string(ek.t["5qyruI"]),
                            subtext: F,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(ty.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tb.V, {
                                                ...e,
                                                query: N,
                                                onChange: L,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(ty.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                D.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        ty.iD,
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
                        (0, i.jsxs)(ty.Dr, {
                            id: "activities",
                            label: ek.intl.string(ek.t.agRtPG),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(ty.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tb.V, {
                                                ...e,
                                                query: E,
                                                onChange: w,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(ty.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => d(null),
                                    checked: null == s,
                                }),
                                S.map((e) =>
                                    (0, i.jsx)(
                                        ty.iD,
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
                        (0, i.jsxs)(ty.Dr, {
                            id: "years",
                            label: ek.intl.string(ek.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, i.jsx)(ty.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == x,
                                }),
                                y.map((e) =>
                                    (0, i.jsx)(
                                        ty.iD,
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
            (0, i.jsxs)(ty.rX, {
                label: ek.intl.string(ek.t.XvNMNk),
                children: [
                    (0, i.jsx)(ty.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ek.intl.string(ek.t["4LLKx3"]),
                        action: () => p(M.mu.MOST_RECENT),
                        checked: u === M.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(ty.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ek.intl.string(ek.t["0gitSE"]),
                        action: () => p(M.mu.OLDEST),
                        checked: u === M.mu.OLDEST,
                    }),
                ],
            }),
            P &&
                (0, i.jsx)(ty.rX, {
                    children: (0, i.jsx)(ty.Dr, { id: "clear-filters", label: ek.intl.string(ek.t.FbDgiu), action: g }),
                }),
        ],
    });
}
var tk = l(332837),
    tN = l(724993);
function tL(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: o } = e,
        u = r && !n;
    return (0, i.jsxs)(tx.D, {
        onClick: u ? void 0 : o,
        className: s()(tN.nM, { [tN.CZ]: n, [tN.lr]: u }),
        "aria-pressed": n,
        "aria-disabled": u,
        children: [
            (0, i.jsx)("span", { className: tN.aL, children: t }),
            (0, i.jsx)(F.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tN.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: tN.iP, children: a }),
        ],
    });
}
function tE() {
    let e = (0, r.bG)([e$.Ay], () => e$.Ay.getKeybindForAction(eS.hCu.SAVE_CLIP)),
        t = a.useCallback(() => {
            (0, eB.openUserSettings)(eX.X.CLIPS_PANEL);
        }, []),
        l = null != e ? eq.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tN.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tN.pR,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ek.intl.string(ek.t.z2jK6X),
                    }),
                    null != l && (0, i.jsx)(eY.e, { shortcut: l }),
                ],
            }),
            (0, i.jsx)(o.m, {
                text: ek.intl.string(ek.t["3D5yo/"]),
                children: (0, i.jsx)(g.K, {
                    onClick: t,
                    icon: tp.Z,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ek.intl.string(ek.t["3D5yo/"]),
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
        h,
        p,
        g,
        x,
        { mainLinkCounts: f } = e,
        j = (0, eO.Pu)((e) => e.activeMainLink),
        v =
            ((t = (0, eO.Pu)((e) => e.setActiveMainLink)),
            (l = (0, eO.Pu)((e) => e.setGameFacet)),
            (n = (0, eO.Pu)((e) => e.setClippedWithFacet)),
            (s = (0, eO.Pu)((e) => e.clearFilters)),
            (o = (0, eO.Pu)((e) => e.gameFacet)),
            (u = (0, eO.Pu)((e) => e.clippedWithFacet)),
            a.useCallback(
                (e) => {
                    let i = null != o || null != u;
                    t(e), i && (l(null), n(null), s());
                },
                [t, l, n, s, o, u],
            )),
        C = (0, eO.Pu)((e) => e.gameFacet),
        y = (0, eO.Pu)((e) => e.clippedWithFacet),
        b = null != C || null != y,
        A = (0, r.bG)([N.Ay], () => {
            let e = N.Ay.getLastClipsSession();
            return null != e && e.newClipIds.length > 0;
        });
    return (0, i.jsxs)("div", {
        className: tN.uW,
        children: [
            (0, i.jsx)(tL, {
                icon: (0, i.jsx)(tk.f, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(ek.t.Ym2Ri6),
                trailer: A ? (0, i.jsx)(q.Lp, { text: ek.intl.string(ek.t.y2b7CA) }) : null,
                isSelected: ((c = M.oH.HOME), !b && j === c),
                onClick: () => v(M.oH.HOME),
            }),
            (0, i.jsx)(tL, {
                icon: (0, i.jsx)(el.x, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(ek.t.dPVrEv),
                trailer: (0, i.jsx)(tI, { count: f.allClips }),
                isSelected: ((d = M.oH.ALL_CLIPS), !b && j === d),
                isDisabled: 0 === f.allClips && ((m = M.oH.ALL_CLIPS), !!b || j !== m),
                onClick: () => v(M.oH.ALL_CLIPS),
            }),
            (0, i.jsx)(tL, {
                icon: (0, i.jsx)(U.B, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(eA.default.ikNKf1),
                trailer: (0, i.jsx)(tI, { count: f.autoClips }),
                isSelected: ((h = M.oH.AUTO_CLIPS), !b && j === h),
                isDisabled: 0 === f.autoClips && ((p = M.oH.AUTO_CLIPS), !!b || j !== p),
                onClick: () => v(M.oH.AUTO_CLIPS),
            }),
            (0, i.jsx)(tL, {
                icon: (0, i.jsx)(Z.G, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(ek.t["9rlCk1"]),
                trailer: (0, i.jsx)(tI, { count: f.favorites }),
                isSelected: ((g = M.oH.FAVORITES), !b && j === g),
                isDisabled: 0 === f.favorites && ((x = M.oH.FAVORITES), !!b || j !== x),
                onClick: () => v(M.oH.FAVORITES),
            }),
        ],
    });
}
function tI(e) {
    let { count: t } = e;
    return (0, i.jsx)(F.E, { variant: "text-xs/semibold", color: "text-muted", tabularNumbers: !0, children: t });
}
function tD() {
    let e = (0, eO.Pu)((e) => e.setGameFacet),
        t = (0, eO.Pu)((e) => e.setClippedWithFacet),
        l = (0, eO.Pu)((e) => e.setActiveMainLink),
        i = (0, eO.Pu)((e) => e.clearFilters),
        n = (0, eO.Pu)((e) => e.gameFacet),
        s = (0, eO.Pu)((e) => e.clippedWithFacet);
    return a.useCallback(
        (a, r) => {
            if (null == r) return void ("game" === a ? e(null) : t(null));
            let o = null != n ? "game" : null != s ? "clippedWith" : "mainLink";
            "game" === a ? e(r) : t(r), o !== a && ("game" === a ? t(null) : e(null), l(M.oH.ALL_CLIPS), i());
        },
        [e, t, l, i, n, s],
    );
}
function tS(e) {
    let { initiatorsFacet: t } = e,
        l = (0, eO.Pu)((e) => e.clippedWithFacet),
        n = tD(),
        [r, o] = a.useState(!1),
        u = a.useMemo(
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
    if (0 === u.length) return null;
    let c = u.length > 5,
        h = r || !c ? u : u.slice(0, 5);
    return (0, i.jsxs)(tf.Ip, {
        className: s()(tN.uW, tN.fC),
        fade: !0,
        children: [
            (0, i.jsx)(p.D, {
                variant: "heading-sm/medium",
                color: "text-muted",
                className: tN.a9,
                children: ek.intl.string(eA.default.s8OcXI),
            }),
            (0, i.jsx)("div", {
                className: tN._A,
                children: h.map((e) =>
                    (0, i.jsx)(
                        tL,
                        {
                            icon: (0, i.jsx)(d.eu, { src: e.avatarUrl, size: m._3.SIZE_20, "aria-hidden": !0 }),
                            label: e.name,
                            trailer: (0, i.jsx)(tI, { count: e.count }),
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
                    className: tN.B2,
                    children: (0, i.jsx)(eQ.Q, {
                        variant: "secondary",
                        textVariant: "text-sm/medium",
                        text: r
                            ? ek.intl.string(eA.default.BbeVTG)
                            : ek.intl.formatToPlainString(eA.default["Ona/4s"], { count: u.length }),
                        onClick: () => o(!r),
                    }),
                }),
        ],
    });
}
function tP(e) {
    let { gamesFacet: t } = e,
        l = (0, eO.Pu)((e) => e.gameFacet),
        n = tD(),
        r = a.useMemo(() => t.map((e) => e.key), [t]),
        o = (0, b.A)(r),
        u = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return 0 === t.length
        ? null
        : (0, i.jsxs)(tf.Ip, {
              className: s()(tN.uW, tN.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(p.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tN.a9,
                      children: ek.intl.string(ek.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tN._A,
                      children: t.map((e) =>
                          (0, i.jsx)(
                              tL,
                              {
                                  icon: (0, i.jsx)(A.A, { game: u.get(e.key), size: A.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tI, { count: e.count }),
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
function tM(e) {
    let { gamesFacet: t, distributedClipInitiatorsFacet: l, mainLinkCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tN.pz,
        children: [
            (0, i.jsx)(tE, {}),
            (0, i.jsxs)("div", {
                className: tN.wp,
                children: [
                    (0, i.jsx)(tw, { mainLinkCounts: a }),
                    (0, i.jsx)(tS, { initiatorsFacet: l }),
                    (0, i.jsx)(tP, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tT = l(174726);
let tF = a.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, eO.Pu)((e) => e.query),
            s = (0, eO.Pu)((e) => e.setQuery),
            r = (0, eO.Pu)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            u = (0, eK.bG)([e$.Ay], () => e$.Ay.getKeybindForAction(eS.hCu.SAVE_CLIP)),
            c = a.useCallback(() => {
                (0, eB.openUserSettings)(eX.X.CLIPS_PANEL);
            }, []),
            d = a.useCallback(() => s(""), [s]),
            m = null != u ? eq.dI(u.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tT.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tT.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tT.Pe,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ek.intl.string(ek.t.z2jK6X),
                                }),
                                null != m && (0, i.jsx)(eY.e, { className: tT.P, shortcut: m }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tT.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(o.m, {
                                        text: ek.intl.string(ek.t.X7yRDm),
                                        children: (0, i.jsx)(tm.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tA, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(K.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ek.intl.formatToPlainString(eA.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: th.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(g.K, {
                                                                  icon: th.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ek.intl.string(ek.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(o.m, {
                                    text: ek.intl.string(ek.t["3D5yo/"]),
                                    children: (0, i.jsx)(g.K, {
                                        onClick: c,
                                        icon: tp.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ek.intl.string(ek.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                t &&
                    (0, i.jsx)("div", {
                        className: tT.MT,
                        children: (0, i.jsx)(tg.I, {
                            placeholder: ek.intl.string(ek.t["5h0QOP"]),
                            query: n,
                            onChange: s,
                            onClear: d,
                            size: "md",
                        }),
                    }),
            ],
        });
    }),
    t_ = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(tx.D, {
            className: s()(tT.MV, { [tT.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tT.tk,
                    children: [
                        a,
                        (0, i.jsx)(F.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tT.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tT.z2,
                    children: (0, i.jsx)(F.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tR(e) {
    let { enabled: t } = L.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tM, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
          })
        : (0, i.jsx)(tO, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tO(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, eO.Pu)((e) => e.gameFacet),
        r = (0, eO.Pu)((e) => e.activeMainLink),
        o = (0, eO.Pu)((e) => e.setGameFacet),
        u = (0, eO.Pu)((e) => e.setActiveMainLink),
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
        h = a.useMemo(() => c.map((e) => e.applicationId), [c]),
        g = (0, b.A)(h),
        x = a.useMemo(() => new Map(g.map((e) => [e?.id, e])), [g]),
        f = a.useCallback(() => {
            u(M.oH.ALL_CLIPS), o(null);
        }, [u, o]),
        j = a.useCallback(() => {
            u(M.oH.FAVORITES), o(null);
        }, [u, o]),
        v = a.useCallback(
            (e) => {
                o(e), u(M.oH.ALL_CLIPS);
            },
            [o, u],
        ),
        C = null == s && r === M.oH.ALL_CLIPS,
        y = null == s && r === M.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: tT.pz,
        children: [
            (0, i.jsx)(tF, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: tT.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tT.om,
                        children: (0, i.jsxs)("div", {
                            className: tT.Ep,
                            children: [
                                (0, i.jsx)(t_, {
                                    name: ek.intl.string(ek.t.dPVrEv),
                                    count: d,
                                    icon: (0, i.jsx)(el.x, {}),
                                    isSelected: C,
                                    onClick: f,
                                }),
                                (0, i.jsx)(t_, {
                                    name: ek.intl.string(ek.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)(Z.G, {}),
                                    isSelected: y,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    c.length > 0 &&
                        (0, i.jsxs)(tf.Ip, {
                            className: tT.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(p.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tT.a9,
                                    children: ek.intl.string(ek.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tT.Ep,
                                    children: c.map((e) =>
                                        (0, i.jsx)(
                                            t_,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(A.A, {
                                                    game: x.get(e.applicationId),
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
var tz = l(847374),
    tH = l(112173),
    tG = l(548118),
    tU = l(441349),
    tK = l(789645),
    tV = l(939546),
    tY = l(99478);
function tQ(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function tW(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function tX(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tV.Xj)();
    return { preset: "custom", after: null != e ? tQ(e.toDate(l)) : null, before: null != t ? tW(t.toDate(l)) : null };
}
function tB(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tY.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t$ = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tq(e) {
    return t$.format(new Date(e));
}
function tZ(e) {
    switch (e.preset) {
        case "today":
            return ek.intl.string(eA.default.yOAWWM);
        case "yesterday":
            return ek.intl.string(eA.default["PtV/Ti"]);
        case "last-3-days":
            return ek.intl.string(eA.default.xfmv7I);
        case "this-year":
            return ek.intl.string(eA.default["+eE7zX"]);
        case "last-year":
            return ek.intl.string(eA.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tq(e.after) : null,
                l = null != e.before ? tq(e.before) : null;
            if (null != t && null != l)
                return ek.intl.formatToPlainString(eA.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ek.intl.formatToPlainString(eA.default.k1FkTL, { date: t });
            if (null != l) return ek.intl.formatToPlainString(eA.default["4NlpHD"], { date: l });
            return ek.intl.string(eA.default.tv9apA);
        }
    }
}
var tJ = l(817480);
function t0(e) {
    let { closePopout: t } = e,
        l = (0, eO.Pu)((e) => e.dateFilter),
        n = (0, eO.Pu)((e) => e.setDateFilter),
        [r, u] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? tB(l.after) : null)),
        [m, h] = a.useState(() => (l?.preset === "custom" ? tB(l.before) : null)),
        p = a.useMemo(
            () => [
                { key: "today", label: ek.intl.string(eA.default.yOAWWM) },
                { key: "yesterday", label: ek.intl.string(eA.default["PtV/Ti"]) },
                { key: "last-3-days", label: ek.intl.string(eA.default.xfmv7I) },
                { key: "this-year", label: ek.intl.string(eA.default["+eE7zX"]) },
                { key: "last-year", label: ek.intl.string(eA.default.Nwj9v0) },
            ],
            [],
        ),
        x = l?.preset ?? null,
        f = r && "custom" !== x ? null : x,
        j = a.useMemo(() => (0, tV.Ec)((0, tV.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tQ(new Date(t)), before: tW(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tQ(new Date(l)), before: tW(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: tQ(l), before: tW(new Date(t)) };
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
            u((e) => !e);
        }, []),
        y = a.useCallback(
            (e) => {
                d(e), n(tX(e, m));
            },
            [m, n],
        ),
        b = a.useCallback(
            (e) => {
                h(e), n(tX(c, e));
            },
            [c, n],
        ),
        A = a.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        k = null != c || null != m;
    return (0, i.jsxs)("div", {
        className: s()(tJ.SW, r && tJ.Td),
        children: [
            (0, i.jsxs)("div", {
                className: tJ.sh,
                children: [
                    (0, i.jsx)(F.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: tJ.a9,
                        children: ek.intl.string(eA.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: tJ.eF,
                        children: [
                            p.map((e) =>
                                (0, i.jsx)(
                                    tx.D,
                                    {
                                        className: s()(tJ.zD, f === e.key && tJ.pH),
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
                            (0, i.jsxs)(tx.D, {
                                className: s()(tJ.zD, tJ.Kl, (r || "custom" === x) && tJ.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(F.E, {
                                        variant: "text-md/medium",
                                        color: "currentColor",
                                        children: ek.intl.string(eA.default.tv9apA),
                                    }),
                                    (0, i.jsx)(F.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: tJ.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tJ.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: tJ.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tJ._2,
                                children: [
                                    (0, i.jsx)(F.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tJ.bk,
                                        "aria-hidden": !0,
                                        children: ek.intl.string(eA.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tJ.h0,
                                        children: [
                                            (0, i.jsx)(tU.l, {
                                                label: ek.intl.string(eA.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: c,
                                                onChange: y,
                                                maxValue: m ?? j,
                                            }),
                                            null != c &&
                                                (0, i.jsx)(o.m, {
                                                    text: ek.intl.string(ek.t.VkKicb),
                                                    children: (0, i.jsx)(g.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tK.P,
                                                        onClick: () => y(null),
                                                        "aria-label": ek.intl.string(ek.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tJ._2,
                                children: [
                                    (0, i.jsx)(F.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tJ.bk,
                                        "aria-hidden": !0,
                                        children: ek.intl.string(eA.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tJ.h0,
                                        children: [
                                            (0, i.jsx)(tU.l, {
                                                label: ek.intl.string(eA.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: m,
                                                onChange: b,
                                                minValue: c ?? void 0,
                                                maxValue: j,
                                            }),
                                            null != m &&
                                                (0, i.jsx)(o.m, {
                                                    text: ek.intl.string(ek.t.VkKicb),
                                                    children: (0, i.jsx)(g.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tK.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ek.intl.string(ek.t.VkKicb),
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
                            className: tJ.dS,
                            children: (0, i.jsx)(eQ.Q, { size: "sm", text: ek.intl.string(ek.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var t1 = l(103552),
    t2 = l(914427),
    t3 = l(213424);
function t9(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tv()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            t1.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: t3.H, children: e.icon }),
                                    (0, i.jsx)(t1.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(t1.x4.Checkbox, {}) : (0, i.jsx)(t1.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: c,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(t2.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: u ?? ek.intl.string(ek.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(K.$, {
                ...e,
                buttonRef: c,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tz.a,
                iconPosition: "end",
            }),
    });
}
var t7 = l(941886);
function t6(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: t7.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: t7.Kk, children: l }),
            (0, i.jsx)(F.E, {
                className: t7.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(tx.D, {
                className: t7.DT,
                onClick: a,
                "aria-label": n ?? ek.intl.string(ek.t.N86XcP),
                children: (0, i.jsx)(tK.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t5 = l(841765);
function t4() {
    let e = (0, eO.Pu)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tZ(e) : ek.intl.string(eA.default.upqksT);
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t0, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(K.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tz.a,
                iconPosition: "end",
            }),
    });
}
function t8() {
    let e = (0, eO.Pu)((e) => e.sortOrder),
        t = (0, eO.Pu)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = e === M.mu.OLDEST ? ek.intl.string(ek.t["0gitSE"]) : ek.intl.string(ek.t["4LLKx3"]);
    return (0, i.jsx)(tm.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, i.jsx)(tC.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ek.intl.string(ek.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, i.jsxs)(ty.rX, {
                    children: [
                        (0, i.jsx)(ty.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ek.intl.string(ek.t["4LLKx3"]),
                            action: () => {
                                t(M.mu.MOST_RECENT), a();
                            },
                            checked: e === M.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(ty.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ek.intl.string(ek.t["0gitSE"]),
                            action: () => {
                                t(M.mu.OLDEST), a();
                            },
                            checked: e === M.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) => (0, i.jsx)(K.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: n, icon: tH.J }),
    });
}
function le(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, eO.Pu)((e) => e.query),
        r = (0, eO.Pu)((e) => e.setQuery),
        o = (0, eO.Pu)((e) => e.gameFacet),
        u = (0, eO.Pu)((e) => e.clippedWithFacet),
        c = (0, eO.Pu)((e) => e.selectedGameIds),
        h = (0, eO.Pu)((e) => e.selectedUserIds),
        p = (0, eO.Pu)((e) => e.selectedGuildId),
        g = (0, eO.Pu)((e) => e.selectedActivity),
        x = (0, eO.Pu)((e) => e.dateFilter),
        f = (0, eO.Pu)((e) => e.toggleGameId),
        j = (0, eO.Pu)((e) => e.toggleUserId),
        v = (0, eO.Pu)((e) => e.setSelectedGuildId),
        C = (0, eO.Pu)((e) => e.setSelectedActivity),
        y = (0, eO.Pu)((e) => e.setDateFilter),
        N = (0, eO.Pu)((e) => e.clearFilters),
        L = a.useMemo(() => l.map((e) => e.key), [l]),
        E = (0, b.A)(L),
        w = a.useMemo(() => new Map(E.map((e) => [e?.id, e])), [E]),
        I = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(A.A, { game: w.get(e.key), size: A.M.XSMALL }),
                })),
            [l, w],
        ),
        D = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = ed.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        S = a.useMemo(
            () =>
                D.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(tG.Ay, { guild: e.guild, size: tG.Ay.Sizes.MINI }),
                })),
            [D],
        ),
        P = a.useMemo(() => new Map(D.map((e) => [e.key, e.guild])), [D]),
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
        _ = a.useMemo(() => (null != g ? new Set([g]) : new Set()), [g]),
        R = a.useCallback(
            (e) => {
                v(p === e ? null : e);
            },
            [p, v],
        ),
        O = a.useCallback(
            (e) => {
                C(g === e ? null : e);
            },
            [g, C],
        ),
        z = null == o,
        H = null == u,
        G = (0, i.jsxs)(i.Fragment, {
            children: [
                z &&
                    Array.from(c).map((e) => {
                        let t = I.find((t) => t.key === e);
                        return (0, i.jsx)(
                            t6,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(A.A, { game: w.get(e), size: A.M.XSMALL }),
                                onRemove: () => f(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != x && (0, i.jsx)(t6, { label: tZ(x), onRemove: () => y(null) }, "date"),
                null != p &&
                    (0, i.jsx)(
                        t6,
                        {
                            label: S.find((e) => e.key === p)?.label ?? p,
                            icon:
                                null != P.get(p)
                                    ? (0, i.jsx)(tG.Ay, { guild: P.get(p), size: tG.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => v(null),
                        },
                        "guild",
                    ),
                H && Array.from(h).map((e) => (0, i.jsx)(lt, { userId: e, onRemove: () => j(e) }, `user-${e}`)),
                null != g && (0, i.jsx)(t6, { label: g, onRemove: () => C(null) }, "activity"),
            ],
        }),
        U = (z && c.size > 0) || null != x || null != p || (H && h.size > 0) || null != g;
    return (0, i.jsxs)("div", {
        className: t5.kT,
        children: [
            (0, i.jsxs)("div", {
                className: t5.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: t5.MT,
                        children: (0, i.jsx)(tg.I, {
                            placeholder: ek.intl.string(ek.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: t5.Zq,
                        children: [
                            z &&
                                I.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ek.intl.string(ek.t.URyqtP),
                                    options: I,
                                    selectedKeys: c,
                                    onToggle: f,
                                    multiSelect: !0,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(t4, {}),
                            S.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ek.intl.string(ek.t["5qyruI"]),
                                    options: S,
                                    selectedKeys: F,
                                    onToggle: R,
                                    multiSelect: !1,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                            H &&
                                T.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ek.intl.string(ek.t.YQ6dJg),
                                    options: T,
                                    selectedKeys: h,
                                    onToggle: (e) => j(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                            M.length > 0 &&
                                (0, i.jsx)(t9, {
                                    triggerLabel: ek.intl.string(ek.t.agRtPG),
                                    options: M,
                                    selectedKeys: _,
                                    onToggle: O,
                                    multiSelect: !1,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: t5.QZ, children: (0, i.jsx)(t8, {}) }),
                ],
            }),
            U &&
                (0, i.jsxs)("div", {
                    className: t5.eH,
                    children: [
                        G,
                        (0, i.jsx)(eQ.Q, {
                            size: "sm",
                            variant: "secondary",
                            text: ek.intl.string(ek.t.O8k7O4),
                            onClick: N,
                        }),
                    ],
                }),
        ],
    });
}
function lt(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, r.bG)([k.default], () => k.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(t6, {
        label: n,
        icon: (0, i.jsx)(d.eu, { src: a.getAvatarURL(null, 32), size: m._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var ll = l(409067),
    li = l(847455);
let la = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function ln(e) {
    let { channelId: t, onClose: n, onClipClick: T, transitionState: F, initialEditingClipId: _, ...R } = e;
    (0, P.A)();
    let { analyticsLocations: O } = (0, y.Ay)(C.A.CLIPS_GALLERY),
        [z, H] = a.useState(new Set()),
        {
            gamesFacet: G,
            participantsFacet: U,
            distributedClipInitiatorsFacet: K,
            filteredClips: V,
            mainLinkCounts: Y,
            allClips: Q,
        } = (0, ll.a)(),
        { enabled: W } = L.O.useConfig({ location: "ClipsGalleryModal" }),
        { onShareClick: X } = (0, S.A)(t);
    a.useEffect(
        () => () => {
            eO.Pu.getState().resetAll();
        },
        [],
    ),
        a.useEffect(() => {
            if (!W) return;
            let e = eO.Pu.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(M.oH.HOME);
        }, [W]);
    let B = (0, r.bG)([N.Ay], () => N.Ay.getExportingClipIds().length > 0),
        [$, q] = a.useState(null != _ ? "editing" : "gallery"),
        [Z, J] = a.useState(_ ?? null),
        ee = (0, r.bG)([N.Ay], () => (null != Z ? N.Ay.getClipById(Z) : null), [Z]),
        et = a.useRef($);
    (et.current = $), (a.useRef(Z).current = Z);
    let [el, ei] = a.useState(null != _ ? c.ip.ENTERED : c.ip.HIDDEN),
        ea = a.useRef(null),
        en = (0, eO.Pu)((e) => e.gameFacet),
        es = (0, eO.Pu)((e) => e.clippedWithFacet),
        er = (0, eO.Pu)((e) => e.activeMainLink),
        eo = (0, eO.Pu)(
            (e) =>
                "" !== e.query.trim() ||
                e.selectedGameIds.size > 0 ||
                e.selectedUserIds.size > 0 ||
                null != e.selectedGuildId ||
                null != e.selectedActivity ||
                null != e.dateFilter,
        );
    a.useEffect(() => {
        er === M.oH.HOME && eo && eO.Pu.getState().setActiveMainLink(M.oH.ALL_CLIPS);
    }, [er, eo]);
    let eu = a.useMemo(() => (null != en ? [en] : []), [en]),
        ec = (0, b.A)(eu)[0] ?? null,
        ed = (0, r.bG)([k.default], () => (null != es ? k.default.getUser(es) : null), [es]),
        em = a.useMemo(() => {
            if (null != en) {
                let e = G.find((e) => e.key === en)?.name ?? ek.intl.string(ek.t.dPVrEv);
                return { icon: (0, i.jsx)(A.A, { game: ec, size: A.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != es) {
                let e = null != ed ? (ed.globalName ?? ed.username) : es;
                return {
                    icon:
                        null != ed
                            ? (0, i.jsx)(d.eu, {
                                  src: ed.getAvatarURL(null, 32),
                                  size: m._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return er === M.oH.FAVORITES
                ? { icon: null, title: ek.intl.string(ek.t["9rlCk1"]) }
                : er === M.oH.AUTO_CLIPS
                  ? { icon: null, title: ek.intl.string(eA.default.ikNKf1) }
                  : er === M.oH.HOME
                    ? { icon: null, title: ek.intl.string(ek.t.Ym2Ri6) }
                    : { icon: null, title: ek.intl.string(ek.t.dPVrEv) };
        }, [en, es, er, G, ec, ed]),
        eh = a.useCallback(() => {
            q("editing"), v.A.useReducedMotion && ei(c.ip.ENTERED);
        }, []),
        ep = a.useCallback((e) => {
            H((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eg = a.useCallback(
            (e) => {
                J(e.id), eh();
            },
            [eh],
        ),
        ex = a.useCallback(() => {
            v.A.useReducedMotion && J(null), q("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === et.current && (e.stopPropagation(), ex());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ex, n]),
        a.useEffect(
            () =>
                "editing" === $ && null != Z
                    ? void (0, E.YK)(Z)
                    : ((0, E.jA)(),
                      () => {
                          (0, E.jA)();
                      }),
            [$, Z],
        );
    let ef = a.useCallback(() => {
            H(new Set());
        }, []),
        ej = z.size > 0,
        ev = a.useCallback(() => {
            let e = Q.filter((e) => z.has(e.id));
            (0, h.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ef(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [Q, z, ef]),
        eC = a.useCallback(async () => {
            let e = Q.filter((e) => z.has(e.id));
            await X({ clips: e }), ef();
        }, [Q, z, X, ef]),
        ey = a.useMemo(
            () => ({ selectedClipIds: z, toggleClipSelection: ep, clearSelection: ef, isMultiSelectMode: ej }),
            [z, ep, ef, ej],
        );
    return (0, i.jsx)(y.f5, {
        value: O,
        children: (0, i.jsx)(la.Provider, {
            value: ey,
            children: (0, i.jsx)(u.N, {
                onClose: n,
                transitionState: F,
                ...R,
                children: (0, i.jsxs)("div", {
                    className: li.jT,
                    ref: ea,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(li.PD, "gallery" === $ && li.vu),
                            inert: "gallery" !== $,
                            children: [
                                (0, i.jsx)(tR, {
                                    gamesFacet: G,
                                    participantsFacet: U,
                                    distributedClipInitiatorsFacet: K,
                                    mainLinkCounts: Y,
                                    allClips: Q,
                                    filteredClips: V,
                                    withHeaderFilters: !W,
                                }),
                                (0, i.jsxs)("div", {
                                    className: li.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: li.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: li.Rj,
                                                    children: [
                                                        em.icon,
                                                        (0, i.jsx)(p.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: em.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: li.$s,
                                                    children: [
                                                        ej &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ek.intl.string(ek.t.RDE0Sc),
                                                                        children: (0, i.jsx)(g.K, {
                                                                            onClick: eC,
                                                                            icon: x.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ek.intl.string(ek.t.RDE0Sc),
                                                                            loading: B,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(o.m, {
                                                                        text: ek.intl.string(ek.t.oyYWHE),
                                                                        children: (0, i.jsx)(g.K, {
                                                                            onClick: ev,
                                                                            icon: f.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ek.intl.string(ek.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(g.K, {
                                                            onClick: n,
                                                            icon: j.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ek.intl.string(ek.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        W && (0, i.jsx)(le, { allClips: Q, gamesFacet: G, participantsFacet: U }),
                                        (0, i.jsx)(td, {
                                            onEdit: eg,
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
                            className: s()(li.jN, "editing" === $ && li.vu),
                            inert: "editing" !== $,
                            onTransitionEnd: () => {
                                "gallery" === $ ? (J(null), ei(c.ip.HIDDEN)) : "editing" === $ && ei(c.ip.ENTERED);
                            },
                            children:
                                null != ee &&
                                (0, i.jsxs)(D.p, {
                                    clip: ee,
                                    modalContainerRef: ea,
                                    children: [
                                        (0, i.jsx)(w.A, { transitionState: el, onClose: ex }),
                                        (0, i.jsx)(I.A, { channelId: t, onClose: ex }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
