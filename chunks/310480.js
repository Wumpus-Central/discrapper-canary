l.d(t, { $: () => lM, default: () => lT });
var a = l(627968),
    i = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(562708),
    c = l(935399),
    o = l(517846),
    d = l(17928),
    u = l(192308),
    m = l(990078),
    h = l(521489),
    x = l(231723),
    g = l(97808),
    p = l(778712),
    f = l(534514),
    j = l(408278),
    v = l(405433),
    C = l(241326),
    b = l(972213),
    y = l(775602),
    A = l(793574),
    N = l(688810),
    k = l(139286),
    L = l(429913),
    E = l(137177),
    w = l(27620),
    P = l(540999),
    I = l(287809),
    S = l(274372),
    D = l(372684),
    M = l(334686),
    T = l(315240),
    _ = l(582633),
    R = l(309777),
    F = l(429364),
    O = l(352527),
    H = l(280483),
    z = l(111994);
l(321073);
var G = l(834730),
    U = l(289873),
    K = l(962125),
    V = l(989349),
    $ = l.n(V),
    Q = l(66455),
    Y = l(342952),
    B = l(890856),
    X = l(812993),
    q = l(27232),
    W = l(505930),
    Z = l(530005),
    J = l(406810),
    ee = l(176781),
    et = l(661531),
    el = l(983851),
    ea = l(31300),
    ei = l(442433),
    en = l(587895),
    es = l(47167),
    er = l(607470),
    ec = l(734057),
    eo = l(71393),
    ed = l(549685),
    eu = l(174459),
    em = l(58703),
    eh = l(403362),
    ex = l(53677);
function eg(e) {
    if (null == e.editMetadata) return !1;
    let t = (e, t) => 100 > Math.abs(e - t),
        l =
            !t(1e3 * e.editMetadata.start, e.originalStartMs ?? 0) ||
            !t(1e3 * e.editMetadata.end, e.originalEndMs ?? e.length),
        a =
            !1 === e.editMetadata.applicationAudio ||
            !1 === e.editMetadata.voiceAudio ||
            !1 === e.editMetadata.soundboardAudio;
    return l || a;
}
var ep = l(226421),
    ef = l(284009),
    ej = l.n(ef),
    ev = l(460905),
    eC = l(713608),
    eb = l(16590),
    ey = l(375708),
    eA = l(788332);
function eN(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    ej()(l?.type === D.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, d.bG)([I.default], () => I.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let n = i.globalName ?? i.username;
    return (0, a.jsx)(m.m, {
        text: ey.intl.string(eb.default.vTTkFF),
        children: (0, a.jsxs)("div", {
            className: eA.S,
            children: [
                (0, a.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: eA.$, alt: n }),
                (0, a.jsx)(G.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ey.intl.formatToPlainString(eb.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function ek(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, a.jsx)(m.m, {
        text: i,
        children: (0, a.jsxs)("div", {
            className: eA.S,
            children: [
                (0, a.jsx)(t, { size: "xxs", color: "white" }),
                (0, a.jsx)(G.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eL(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === D.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case D.Gy.DISTRIBUTED:
            return (0, a.jsx)(eN, { clip: t });
        case D.Gy.LAUGHTER:
            return (0, a.jsx)(ek, {
                icon: ev.n,
                text: ey.intl.string(eb.default.bTC23D),
                tooltipText: ey.intl.string(eb.default["ry+jxm"]),
            });
        case D.Gy.GAME_EVENT:
            return (0, a.jsx)(ek, {
                icon: eC.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ey.intl.string(eb.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eE = l(665039),
    ew = l(718812),
    eP = l(652215),
    eI = l(798594);
let eS = function (e) {
    let { clip: t, actionsDisabled: n, isNew: r, onEdit: c, onClick: o, onHoverChange: u } = e,
        m = (0, d.yK)([I.default], () => t.users.map((e) => I.default.getUser(e)).filter(eh.Vq)),
        h = (0, d.bG)([ec.A], () => (null != t.channelId ? ec.A.getChannel(t.channelId) : null)),
        x = (0, d.bG)([eo.A], () => (null != t.guildId ? eo.A.getGuild(t.guildId) : null)),
        { analyticsLocations: g } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = i.useContext(lM),
        [C, b] = i.useState(!1),
        y = i.useRef(null),
        k = (0, Q.A)(t.editMetadata?.start ?? 0),
        L = f.has(t.id),
        E = t.type === D.nQ.SCREENSHOT,
        w = (0, es.Ay)(h),
        P = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        M = (0, em.Fe)(new Date(t.createdAt)),
        T = i.useMemo(() => {
            let e = [];
            return (
                t.type === D.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != w && e.push(w))
                    : ("" !== P && null != P && e.push(P),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [P, x?.name, w, t.activity?.state, t.activity?.details, t.type]),
        _ = i.useCallback(() => {
            let e = y.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        R = i.useCallback(() => {
            if ((u?.("" !== t.thumbnail ? t.thumbnail : null), !0 === E)) return;
            let e = y.current;
            null != e && e.paused && ((e.currentTime = k.current), y.current?.play());
        }, [E, k, u, t.thumbnail]),
        F = i.useCallback(() => {
            if ((u?.(null), !0 === E)) return;
            let e = y.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [E, t.editMetadata?.start, u]),
        O = i.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || F();
            },
            [F],
        ),
        H = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        z = i.useCallback(() => {
            b(!1);
        }, []),
        U = i.useCallback(
            (e) => {
                b(!0), y.current?.pause();
                let i =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => S.Ay.getClipById(e))
                              .filter(eh.Vq)
                        : [t];
                (0, ei.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("56136"),
                            l.e("6619"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("38601"),
                            l.e("69006"),
                            l.e("18307"),
                            l.e("86456"),
                            l.e("80955"),
                        ]).then(l.bind(l, 80982));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: i,
                                actionsDisabled: n,
                                onShare: () => {
                                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ex.lc(),
                                        ...ex.Zy(t),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ex.lc(),
                                            ...ex.Zy(t),
                                        });
                                },
                                onBeforeDelete: _,
                                onAfterDelete: () => {
                                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...ex.lc(),
                                        ...ex.Zy(t),
                                    });
                                },
                            });
                    },
                    { onClose: z },
                );
            },
            [t, v, f, n, _, z, c],
        ),
        K = i.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), U(e));
            },
            [n, U],
        ),
        V = i.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), j(t.id)) : v ? j(t.id) : null != o && o(t),
                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_CLICKED, { ...ex.lc(), ...ex.Zy(t) }));
            },
            [n, v, j, t, o],
        );
    return (0, a.jsx)(N.f5, {
        value: g,
        children: (0, a.jsx)("div", {
            className: eI.o8,
            onBlur: O,
            children: (0, a.jsxs)(B.s, {
                "aria-disabled": n,
                "aria-label": ey.intl.string(!0 === E ? ey.t["HO/oXl"] : ey.t.bt75uw),
                onClick: n ? void 0 : V,
                onContextMenu: K,
                className: s()(eI.QN, { [eI.r9]: n, [eI.in]: C, [eI.wH]: L }),
                onFocus: R,
                onMouseOver: R,
                onMouseLeave: F,
                children: [
                    (0, a.jsx)(eD, { clip: t, isNew: r, videoRef: y, onOpenContextMenu: U, actionsDisabled: n }),
                    (0, a.jsxs)("div", {
                        className: eI.wI,
                        children: [
                            (0, a.jsx)(e_, { clip: t }),
                            (0, a.jsxs)("div", {
                                className: eI.i0,
                                children: [
                                    (0, a.jsx)(eM, { clip: t }),
                                    (0, a.jsx)(G.E, {
                                        className: eI.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: T,
                                    }),
                                    (0, a.jsx)(G.E, {
                                        className: eI.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: M,
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: eI.jW,
                                children: (0, a.jsx)(Y.A, {
                                    maxUsers: 3,
                                    users: m,
                                    size: p._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && R());
                                    },
                                    onClickOverflow: H,
                                    "aria-label": ey.intl.string(ey.t.WTozwe),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
function eD(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [d, u] = i.useState(0);
    i.useEffect(() => {
        let e = n.current;
        if (null == e || c) return;
        let l = null,
            a = () => {
                if (e.paused || e.ended) {
                    (l = null), u(0);
                    return;
                }
                let i = t.editMetadata?.start ?? 0,
                    n = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - i) / (n - i)) * 100;
                u(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(a));
            },
            i = () => {
                null == l && (l = requestAnimationFrame(a));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), u(0));
            };
        return (
            e.addEventListener("play", i),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || i(),
            () => {
                null != l && (cancelAnimationFrame(l), u(0)),
                    e.removeEventListener("play", i),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [n, c, t.editMetadata]);
    let h = eg(t),
        x = i.useMemo(() => {
            let e = t.length;
            if (null != t.editMetadata) {
                let l = t.editMetadata.end - t.editMetadata.start;
                1e3 * l < t.length && (e = 1e3 * l);
            }
            let l = $().duration(e),
                a = l.minutes(),
                i = l.seconds();
            return 0 === a ? `${i}s` : `${a}:${i.toString().padStart(2, "0")}`;
        }, [t.length, t.editMetadata]),
        g = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), T.XK(t);
            },
            [t],
        ),
        p = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, a.jsxs)("div", {
        className: eI.QB,
        children: [
            (0, a.jsx)("div", { className: eI.ne }),
            (0, a.jsx)(eT, { clip: t, videoRef: n }),
            (0, a.jsxs)("div", {
                className: eI.ry,
                children: [
                    !o && l && (0, a.jsx)(X.Lp, { text: ey.intl.string(ey.t.y2b7CA) }),
                    (0, a.jsx)(eL, { clip: t }),
                ],
            }),
            !r &&
                (0, a.jsxs)("div", {
                    className: eI.g3,
                    children: [
                        (0, a.jsx)(m.m, {
                            text: ey.intl.string(t.isFavorite ? eb.default.IZsalP : eb.default.ihBfyA),
                            position: "top",
                            children: (0, a.jsx)(j.K, {
                                onClick: g,
                                icon: t.isFavorite ? q.G : W.y,
                                "aria-label": ey.intl.string(ey.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, a.jsx)(j.K, {
                            onClick: p,
                            icon: Z.F,
                            "aria-label": ey.intl.string(ey.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: eI.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: eI.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(J.O, { color: "white", size: "xs" }),
                                (0, a.jsx)(G.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ey.intl.string(ey.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, a.jsxs)("div", {
                            className: eI.OH,
                            children: [
                                h && (0, a.jsx)(ed.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(G.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? ey.intl.string(ey.t["2Fp7OP"]) : x,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                d > 0 &&
                (0, a.jsx)("div", {
                    className: eI.X7,
                    children: (0, a.jsx)("div", { className: eI.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eM(e) {
    let { clip: t } = e,
        l = (0, ew.h)(t),
        i = "" !== l;
    return (0, a.jsx)(G.E, {
        className: eI.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: i ? l : t.name,
    });
}
function eT(e) {
    let { clip: t, videoRef: l } = e,
        i = (0, eE.j)(t),
        n = t.type === D.nQ.SCREENSHOT;
    return t.type === D.nQ.VOICE_CLIP
        ? (0, a.jsx)(ep.A, { className: eI.fT })
        : n
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: eI.fT })
          : null != i
            ? (0, a.jsx)(er.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: i,
                  loop: !0,
                  className: eI.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: eI.fT })
              : (0, a.jsx)("div", {
                    className: s()(eI.fT, eI.Is),
                    children: (0, a.jsx)(ee.x, { color: et.A.colors.ICON_MUTED }),
                });
}
function e_(e) {
    let { clip: t } = e,
        l = (0, d.bG)([en.A], () => (null != t.applicationId ? en.A.getApplication(t.applicationId) : null)),
        i = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: eI.gS,
        "aria-hidden": "true",
        children:
            null != i
                ? (0, a.jsx)("img", { src: i, alt: "", className: eI.NH })
                : t.type === D.nQ.VOICE_CLIP
                  ? (0, a.jsx)(el.H, { size: "sm" })
                  : (0, a.jsx)(ea.k, { size: "sm" }),
    });
}
function eR(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: n, width: s = 288, height: r = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/5cbe59588641e0337b4a5e93e16f0ab02d494b2033f96505d343d31aae29d89c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var eF = l(702841),
    eO = l(687966),
    eH = l(475358),
    ez = l(123292),
    eG = l(292801),
    eU = l(780964),
    eK = l(766075),
    eV = l(532624),
    e$ = l(350535),
    eQ = l(572164),
    eY = l(953932),
    eB = l(311162);
function eX(e) {
    let { header: t, description: l } = e;
    return (0, a.jsxs)("div", {
        className: eB.Nr,
        children: [t, (0, a.jsx)(G.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eq() {
    let e = (0, eF.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eP.hCu.SAVE_CLIP)),
        t = null != e ? e$.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: eB.kR,
        children: [
            (0, a.jsx)(eX, {
                header: (0, a.jsx)(eO._, { size: "refresh_sm", color: et.A.colors.ICON_DEFAULT }),
                description: ey.intl.string(eb.default["4K56sP"]),
            }),
            (0, a.jsx)(eX, {
                header: null != t ? (0, a.jsx)(eH.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ey.intl.format(eb.default.BIwQis, { keybind: t }),
                                  (0, a.jsx)("div", {
                                      className: eB.JH,
                                      children: (0, a.jsx)(ez.Q, {
                                          text: ey.intl.string(eb.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eK.openUserSettings)(eU.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ey.intl.string(eb.default.HOUDUm),
            }),
            (0, a.jsx)(eX, {
                header: (0, a.jsx)(eG.t, { size: "refresh_sm", color: et.A.colors.ICON_DEFAULT }),
                description: ey.intl.string(eb.default.DLzdl7),
            }),
        ],
    });
}
function eW(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eQ.Et)();
    return (0, a.jsx)("div", {
        className: eB.kL,
        children: (0, a.jsxs)("div", {
            className: eB.Qs,
            children: [
                (0, a.jsx)(eR, { width: 213, height: 135, alt: "" }),
                (0, a.jsx)(f.D, {
                    className: eB.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ey.intl.string(eb.default["+M2iLf"]) : ey.intl.string(eb.default.m2GEpP),
                }),
                t &&
                    (0, a.jsx)(G.E, {
                        className: eB.h_,
                        variant: "text-md/medium",
                        children: ey.intl.string(eb.default.xkY5xS),
                    }),
                !l && (0, a.jsx)("div", { className: eB.SO, children: (0, a.jsx)(eY.A, {}) }),
                l && !t && (0, a.jsx)(eq, {}),
            ],
        }),
    });
}
let eZ = 16 / 9;
var eJ = l(621466),
    e0 = l(61491),
    e1 = l(365199),
    e2 = l(821609),
    e3 = l(22231),
    e9 = l(549973),
    e5 = l(609174),
    e7 = l(619744),
    e6 = l(82716),
    e4 = l(585579),
    e8 = l(226870),
    te = l(285072),
    tt = l(742007);
function tl(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: n, onEdit: s } = e;
    return (0, a.jsx)(e5.Cl, {
        clip: t,
        children: (0, a.jsx)(ta, { actionsDisabled: l, isNew: i, onClick: n, onEdit: s }),
    });
}
function ta(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, e5.Y_)(),
        { analyticsLocations: d } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = i.useContext(lM),
        [x, g] = i.useState(!1),
        [p, f] = i.useState(!1),
        [j, v] = i.useState(!1),
        [C, b] = i.useState(0),
        y = u.has(o.id),
        k = o.type === D.nQ.SCREENSHOT,
        L = (p || x) && !y;
    i.useEffect(() => {
        if (!L || k) return;
        let e = window.setTimeout(() => v(!0), 150);
        return () => {
            window.clearTimeout(e), v(!1);
        };
    }, [L, k]);
    let E = i.useRef(null),
        w = i.useCallback(() => {
            E.current?.releaseSource();
        }, []),
        P = i.useCallback(() => g(!1), []),
        I = i.useCallback(
            (e) => {
                g(!0);
                let i =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => S.Ay.getClipById(e))
                              .filter(eh.Vq)
                        : [o];
                (0, ei.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("56136"),
                            l.e("6619"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("38601"),
                            l.e("69006"),
                            l.e("18307"),
                            l.e("86456"),
                            l.e("80955"),
                        ]).then(l.bind(l, 80982));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: i,
                                actionsDisabled: t,
                                onShare: () => {
                                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ex.lc(),
                                        ...ex.Zy(o),
                                    });
                                },
                                onEdit: () => {
                                    c(o),
                                        eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ex.lc(),
                                            ...ex.Zy(o),
                                        });
                                },
                                onBeforeDelete: w,
                                onAfterDelete: () => {
                                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...ex.lc(),
                                        ...ex.Zy(o),
                                    });
                                },
                            });
                    },
                    { onClose: P },
                );
            },
            [o, h, u, t, P, c, w],
        ),
        M = i.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), I(e));
            },
            [t, I],
        ),
        T = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), I(e);
            },
            [I],
        ),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c(o),
                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        R = i.useCallback(
            (e) => {
                !t &&
                    (!(0, eJ.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    eu.default.track(eP.HAw.CLIP_GALLERY_CARD_CLICKED, { ...ex.lc(), ...ex.Zy(o) }));
            },
            [t, h, m, o, r],
        );
    return (0, a.jsx)(N.f5, {
        value: d,
        children: (0, a.jsxs)(B.s, {
            "aria-disabled": t,
            "aria-label": ey.intl.string(k ? ey.t["HO/oXl"] : ey.t.bt75uw),
            onClick: t ? void 0 : R,
            onContextMenu: M,
            className: s()(tt.Nr, { [tt.r9]: t, [tt.in]: x, [tt.wH]: y }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, a.jsx)("div", {
                    className: tt.w7,
                    children: (0, a.jsxs)(ti, {
                        ref: E,
                        isPlaying: j,
                        onProgressChange: b,
                        children: [
                            (0, a.jsx)(tn, { isNew: n }),
                            L && !t ? (0, a.jsx)(ts, { onMenu: T, onBeforeDelete: w }) : (0, a.jsx)(tr, {}),
                            (0, a.jsx)("div", { className: tt.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, a.jsx)(tc, { showHoverState: L, playbackProgress: C, onEdit: _ }),
            ],
        }),
    });
}
let ti = i.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: i, children: n } = e;
    return (0, a.jsx)(e8.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: i,
        children: (0, a.jsx)(te.h, { isVisible: !0, children: n }),
    });
});
function tn(e) {
    let { isNew: t } = e,
        l = (0, e5.Y_)(),
        i = !0 === l.pending;
    return (0, a.jsxs)("div", {
        className: tt.zV,
        children: [
            !i &&
                t &&
                (0, a.jsx)("div", {
                    className: tt.Ad,
                    children: (0, a.jsx)(G.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: ey.intl.string(ey.t.y2b7CA),
                    }),
                }),
            (0, a.jsx)(eL, { clip: l }),
        ],
    });
}
function ts(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, a.jsxs)("div", {
        className: tt.Mw,
        children: [
            (0, a.jsx)(m.m, {
                text: ey.intl.string(ey.t["UKOtz+"]),
                children: (0, a.jsx)(j.K, {
                    onClick: t,
                    icon: e1.j,
                    "aria-label": ey.intl.string(ey.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, a.jsx)(e7.k, { onBeforeDelete: l }),
            (0, a.jsx)(e6.z, {}),
        ],
    });
}
function tr() {
    let e = (0, e5.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        n = eg(e),
        r = i.useMemo(() => {
            let t = e.length;
            if (null != e.editMetadata) {
                let l = e.editMetadata.end - e.editMetadata.start;
                1e3 * l < e.length && (t = 1e3 * l);
            }
            let l = Math.floor(t / 1e3);
            return (0, e0.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, a.jsxs)("div", {
              className: s()(tt.cH, tt._s),
              children: [
                  n && (0, a.jsx)(ed.A, { color: "white", width: 14, height: 14 }),
                  (0, a.jsx)(G.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? ey.intl.string(ey.t["2Fp7OP"]) : r,
                  }),
              ],
          });
}
function tc(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i } = e,
        n = (0, e5.Y_)(),
        r = n.type === D.nQ.SCREENSHOT,
        c = (0, d.yK)([I.default], () => n.users.map((e) => I.default.getUser(e)).filter(eh.Vq)),
        o = (0, d.bG)([ec.A], () => (null != n.channelId ? ec.A.getChannel(n.channelId) : null)),
        u = (0, d.bG)([eo.A], () => (null != n.guildId ? eo.A.getGuild(n.guildId) : null)),
        m = (0, es.Ay)(o),
        h = "" === n.applicationName && null != m && "" !== m ? m : n.applicationName,
        x = (0, e9.e)({ timestamp: n.createdAt }),
        g = u?.name;
    return (0, a.jsxs)("div", {
        className: tt.yu,
        children: [
            (0, a.jsxs)("div", {
                className: tt.$,
                children: [
                    (0, a.jsx)(to, {}),
                    c.length > 0 &&
                        (0, a.jsx)("span", {
                            className: tt.HD,
                            "data-clips-avatars": "true",
                            children: (0, a.jsx)(Y.A, {
                                maxUsers: 3,
                                users: c,
                                size: p._3.SIZE_16,
                                "aria-label": ey.intl.string(ey.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: tt.SO,
                children: [
                    (0, a.jsxs)("div", {
                        className: s()(tt.Ik, { [tt.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tt.Pb,
                                children: [
                                    (0, a.jsx)(td, {}),
                                    (0, a.jsx)(G.E, {
                                        className: tt.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: h,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tt.eg,
                                children: [
                                    null != g &&
                                        "" !== g &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(G.E, {
                                                    className: tt.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: g,
                                                }),
                                                (0, a.jsx)("span", { className: tt.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, a.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ey.intl.format(eb.default["0QCBug"], { time: x }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: s()(tt.n_, { [tt.f$]: t }),
                        inert: !t,
                        children: [
                            !r &&
                                (0, a.jsx)("div", {
                                    className: tt.z5,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("div", { className: tt.TE, style: { width: `${l}%` } }),
                                }),
                            (0, a.jsxs)("div", {
                                className: tt.E_,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: tt.lO,
                                        children: (0, a.jsx)(e2.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: e3.R,
                                            text: ey.intl.string(ey.t.bt75uw),
                                            onClick: i,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: tt.lO,
                                        children: (0, a.jsx)(e4.E, { variant: "primary" }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function to() {
    let e = (0, e5.Y_)(),
        t = (0, ew.h)(e),
        l = "" !== t;
    return (0, a.jsx)(G.E, {
        className: tt.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function td() {
    let e = (0, e5.Y_)(),
        t = (0, d.bG)([en.A], () => (null != e.applicationId ? en.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: tt.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, a.jsx)("img", { src: l, alt: "", className: tt.T_ })
                : e.type === D.nQ.VOICE_CLIP
                  ? (0, a.jsx)(el.H, { size: "xs", color: "currentColor" })
                  : (0, a.jsx)(ea.k, { size: "xs", color: "currentColor" }),
    });
}
ti.displayName = "CardThumbnail";
var tu = l(792852);
function tm(e) {
    return Math.min(45 * e, 520);
}
var th = l(352528),
    tx = l(32122);
let tg = [0, 16, 0, 16],
    tp = tg[1] + tg[3];
function tf(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: r } = e,
        [c, o] = i.useState({ width: 0, height: 0 }),
        u = (0, d.yK)([S.Ay], () => S.Ay.getNewClipIds()),
        m = (0, d.bG)([S.Ay], () => S.Ay.getExportingClipIds().length > 0),
        { enabled: h } = M.O.useConfig({ location: "ClipsGalleryContent" }),
        x = h ? tl : eS,
        g = (0, tu.P)((e) => e.activeMainLink),
        p = (0, tu.P)((e) => e.gameFacet),
        j = (0, tu.P)((e) => e.clippedWithFacet),
        v = i.useMemo(() => {
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
                    title: ey.intl.string(ey.t["kB2R/0"]),
                    description: t ? ey.intl.string(ey.t["6AXirz"]) : void 0,
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
        { width: C } = c,
        { tileWidth: b, columns: A } = i.useMemo(() => {
            var e, l;
            let a, i, n;
            return (
                (e = t.length),
                (a = Math.max(1, Math.floor(((l = C - tp) + 16) / 336))),
                (i = Math.max(320, (l - 16 * (a - 1)) / a)),
                (n = Math.ceil(e / a)),
                { tileWidth: i, columns: a, rows: n }
            );
        }, [t.length, C]),
        N = i.useMemo(() => v.map((e) => Math.ceil(e.clips.length / A)), [v, A]),
        k = i.useMemo(() => N.reduce((e, t) => e + t, 0), [N]),
        L = Math.floor(b / eZ),
        E = v.length > 0 ? `${g}:${p ?? ""}:${j ?? ""}` : null,
        w = (function (e) {
            let t = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
                [l, a] = i.useState(null),
                [n, s] = i.useState(null);
            return (
                e !== l && (a(e), null != e && s(e)),
                i.useEffect(() => {
                    if (null == n) return;
                    let e = window.setTimeout(() => s(null), 1200);
                    return () => window.clearTimeout(e);
                }, [n]),
                !t && null != n
            );
        })(E),
        P = h && w,
        I = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = v[l];
                if (null == r) return null;
                let c = i * A,
                    o = r.clips.slice(c, c + A);
                return (0, a.jsx)(
                    "div",
                    {
                        className: th.UX,
                        children: o.map((t, l) => {
                            let i = { width: b };
                            return (
                                P && (i["--custom-entrance-delay"] = `${tm(e + l)}ms`),
                                (0, a.jsx)(
                                    "div",
                                    {
                                        className: P ? tx.$ : void 0,
                                        style: i,
                                        children: (0, a.jsx)(x, {
                                            actionsDisabled: m,
                                            isNew: u.includes(t.id),
                                            onClick: n ?? s,
                                            onEdit: s,
                                            clip: t,
                                        }),
                                    },
                                    `${E ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${i}`,
                );
            },
            [v, A, b, m, u, n, s, x, P, E],
        ),
        D = i.useCallback(
            (e) => {
                let t = v[e];
                return t?.description != null ? 66 : 44;
            },
            [v],
        ),
        T = i.useCallback(
            (e) => {
                let t = v[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: th.aE,
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: th.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [v],
        );
    return r || 0 !== v.length
        ? r && 0 === v.length
            ? (0, a.jsx)("div", { className: th.dc, children: (0, a.jsx)(U.y, {}) })
            : (0, a.jsx)(K.A, {
                  listPadding: tg,
                  renderRow: I,
                  renderSectionHeader: T,
                  rowCount: k,
                  rowCountBySection: N,
                  rowHeight: L + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: D,
                  onResize: o,
              })
        : (0, a.jsx)(eW, { isEmptyBecauseQuery: l > 0 });
}
var tj = l(922016),
    tv = l(783977),
    tC = l(625903),
    tb = l(892547),
    ty = l(939249),
    tA = l(364522),
    tN = l(91871),
    tk = l.n(tN),
    tL = l(980707),
    tE = l(477782),
    tw = l(583650);
function tP(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            dateFilter: c,
            sortOrder: o,
            toggleUserId: d,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setDateFilter: h,
            setSortOrder: x,
            clearFilters: g,
        } = (0, tu.P)(),
        p = i.useMemo(
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
                })(c),
            [c],
        ),
        f = i.useCallback(
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
        j = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = I.default.getUser(e);
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
        C = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eo.A.getGuild(e);
                        null != t && l.push({ guildId: e, name: t.name });
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        b = i.useMemo(
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
        [y, A] = i.useState(""),
        [N, k] = i.useState(""),
        [L, E] = i.useState(""),
        w = i.useMemo(
            () => (0 === y.trim().length ? j : j.filter((e) => tk()(y.toLowerCase(), e.name.toLowerCase()))),
            [j, y],
        ),
        P = i.useMemo(
            () => (0 === N.trim().length ? C : C.filter((e) => tk()(N.toLowerCase(), e.name.toLowerCase()))),
            [C, N],
        ),
        S = i.useMemo(
            () => (0 === L.trim().length ? v : v.filter((e) => tk()(L.toLowerCase(), e.toLowerCase()))),
            [v, L],
        ),
        D = n.size > 0 || null != s || null != r || null != p,
        M = i.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        T = i.useMemo(() => {
            if (null == r) return;
            let e = C.find((e) => e.guildId === r);
            return e?.name;
        }, [r, C]),
        _ = i.useMemo(() => s ?? void 0, [s]),
        R = i.useMemo(() => (null != p ? String(p) : void 0), [p]);
    return (0, a.jsxs)(tL.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ey.intl.string(ey.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(tE.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, a.jsxs)(tE.Dr, {
                            id: "participants",
                            label: ey.intl.string(ey.t.YQ6dJg),
                            subtext: M,
                            children: [
                                j.length > 20 &&
                                    (0, a.jsx)(tE.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tw.V, {
                                                ...e,
                                                query: y,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        tE.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, a.jsxs)(tE.Dr, {
                            id: "servers",
                            label: ey.intl.string(ey.t["5qyruI"]),
                            subtext: T,
                            children: [
                                C.length > 20 &&
                                    (0, a.jsx)(tE.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tw.V, {
                                                ...e,
                                                query: N,
                                                onChange: k,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(tE.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                P.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        tE.iD,
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
                        (0, a.jsxs)(tE.Dr, {
                            id: "activities",
                            label: ey.intl.string(ey.t.agRtPG),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, a.jsx)(tE.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tw.V, {
                                                ...e,
                                                query: L,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(tE.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                S.map((e) =>
                                    (0, a.jsx)(
                                        tE.iD,
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
                    b.length > 0 &&
                        (0, a.jsxs)(tE.Dr, {
                            id: "years",
                            label: ey.intl.string(ey.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, a.jsx)(tE.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == p,
                                }),
                                b.map((e) =>
                                    (0, a.jsx)(
                                        tE.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => f(e),
                                            checked: p === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, a.jsxs)(tE.rX, {
                label: ey.intl.string(ey.t.XvNMNk),
                children: [
                    (0, a.jsx)(tE.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ey.intl.string(ey.t["4LLKx3"]),
                        action: () => x(z.mu.MOST_RECENT),
                        checked: o === z.mu.MOST_RECENT,
                    }),
                    (0, a.jsx)(tE.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ey.intl.string(ey.t["0gitSE"]),
                        action: () => x(z.mu.OLDEST),
                        checked: o === z.mu.OLDEST,
                    }),
                ],
            }),
            D &&
                (0, a.jsx)(tE.rX, {
                    children: (0, a.jsx)(tE.Dr, { id: "clear-filters", label: ey.intl.string(ey.t.FbDgiu), action: g }),
                }),
        ],
    });
}
var tI = l(7689),
    tS = l(332837),
    tD = l(175841),
    tM = l(974293),
    tT = l(458977),
    t_ = l(270962);
function tR() {
    let e = (0, tM.aJ)(),
        t = tT.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        l = t_.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline;
    return e || t || l;
}
var tF = l(724993);
function tO(e) {
    let { icon: t, label: l, trailer: i, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, a.jsxs)(ty.D, {
        onClick: o ? void 0 : c,
        className: s()(tF.nM, { [tF.CZ]: n, [tF.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
        children: [
            (0, a.jsx)("span", { className: tF.aL, children: t }),
            (0, a.jsx)(G.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tF.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != i && (0, a.jsx)("span", { className: tF.iP, children: i }),
        ],
    });
}
function tH() {
    let e = (0, d.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eP.hCu.SAVE_CLIP)),
        t = (0, tu.P)((e) => e.setActiveMainLink),
        l = (0, tu.P)((e) => e.setGameFacet),
        n = (0, tu.P)((e) => e.setClippedWithFacet),
        s = (0, tu.P)((e) => e.setPendingSearchFocus),
        r = i.useCallback(() => {
            (0, eK.openUserSettings)(eU.X.CLIPS_PANEL);
        }, []),
        c = i.useCallback(() => {
            l(null), n(null), t(z.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        o = null != e ? e$.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: tF.aN,
        children: [
            (0, a.jsxs)("div", {
                className: tF.pR,
                children: [
                    (0, a.jsx)(f.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ey.intl.string(ey.t.z2jK6X),
                    }),
                    null != o && (0, a.jsx)(eH.e, { shortcut: o }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: tF.XL,
                children: [
                    (0, a.jsx)(m.m, {
                        text: ey.intl.string(ey.t["5h0QOP"]),
                        children: (0, a.jsx)(j.K, {
                            onClick: c,
                            icon: tI.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ey.intl.string(ey.t["5h0QOP"]),
                        }),
                    }),
                    (0, a.jsx)(m.m, {
                        text: ey.intl.string(ey.t["3D5yo/"]),
                        children: (0, a.jsx)(j.K, {
                            onClick: r,
                            icon: tC.Z,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ey.intl.string(ey.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tz(e) {
    let t,
        l,
        n,
        s,
        r,
        c,
        o,
        d,
        u,
        m,
        h,
        { mainLinkCounts: x, mainLinkNewCounts: g } = e,
        p = (0, tu.P)((e) => e.activeMainLink),
        f =
            ((t = (0, tu.P)((e) => e.setActiveMainLink)),
            (l = (0, tu.P)((e) => e.setGameFacet)),
            (n = (0, tu.P)((e) => e.setClippedWithFacet)),
            (s = (0, tu.P)((e) => e.clearFilters)),
            i.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        j = (0, tu.P)((e) => e.gameFacet),
        v = (0, tu.P)((e) => e.clippedWithFacet),
        C = tR(),
        b = null != j || null != v;
    return (0, a.jsxs)("div", {
        className: tF.uW,
        children: [
            (0, a.jsx)(tO, {
                icon: (0, a.jsx)(tS.f, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t.Ym2Ri6),
                isSelected: ((r = z.oH.HOME), !b && p === r),
                onClick: () => f(z.oH.HOME),
            }),
            (0, a.jsx)(tO, {
                icon: (0, a.jsx)(ee.x, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t.dPVrEv),
                trailer: (0, a.jsx)(tG, { count: g.allClips }),
                isSelected: ((c = z.oH.ALL_CLIPS), !b && p === c),
                isDisabled: 0 === x.allClips && ((o = z.oH.ALL_CLIPS), !!b || p !== o),
                onClick: () => f(z.oH.ALL_CLIPS),
            }),
            C &&
                (0, a.jsx)(tO, {
                    icon: (0, a.jsx)(tD.B, { size: "sm", color: "currentColor" }),
                    label: ey.intl.string(eb.default.ikNKf1),
                    trailer: (0, a.jsx)(tG, { count: g.autoClips }),
                    isSelected: ((d = z.oH.AUTO_CLIPS), !b && p === d),
                    isDisabled: 0 === x.autoClips && ((u = z.oH.AUTO_CLIPS), !!b || p !== u),
                    onClick: () => f(z.oH.AUTO_CLIPS),
                }),
            (0, a.jsx)(tO, {
                icon: (0, a.jsx)(q.G, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t["9rlCk1"]),
                trailer: (0, a.jsx)(tG, { count: g.favorites }),
                isSelected: ((m = z.oH.FAVORITES), !b && p === m),
                isDisabled: 0 === x.favorites && ((h = z.oH.FAVORITES), !!b || p !== h),
                onClick: () => f(z.oH.FAVORITES),
            }),
        ],
    });
}
function tG(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, a.jsx)(X.hV, { count: t });
}
function tU(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: c } = e,
        o = (0, tu.P)((e) => e.gameFacet),
        d =
            ((t = (0, tu.P)((e) => e.setGameFacet)),
            (l = (0, tu.P)((e) => e.setClippedWithFacet)),
            (n = (0, tu.P)((e) => e.setActiveMainLink)),
            (r = (0, tu.P)((e) => e.clearFilters)),
            i.useCallback(
                (e, a) => {
                    null == a
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(a) : l(a), "game" === e ? l(null) : t(null), n(z.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = i.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, L.A)(u),
        h = i.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, a.jsxs)(tA.Ip, {
              className: s()(tF.uW, tF.fC),
              fade: !0,
              children: [
                  (0, a.jsx)(f.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tF.a9,
                      children: ey.intl.string(ey.t.URyqtP),
                  }),
                  (0, a.jsx)("div", {
                      className: tF._A,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              tO,
                              {
                                  icon: (0, a.jsx)(E.A, { game: h.get(e.key), size: E.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, a.jsx)(tG, { count: e.newCount }),
                                  isSelected: o === e.key,
                                  isDisabled: e.isDisabled,
                                  onClick: () => d("game", o === e.key ? null : e.key),
                              },
                              e.key,
                          ),
                      ),
                  }),
              ],
          });
}
function tK(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e;
    return (0, a.jsxs)("div", {
        className: tF.pz,
        children: [
            (0, a.jsx)(tH, {}),
            (0, a.jsxs)("div", {
                className: tF.wp,
                children: [
                    (0, a.jsx)(tz, { mainLinkCounts: l, mainLinkNewCounts: i }),
                    (0, a.jsx)(tU, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tV = l(174726);
let t$ = i.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, tu.P)((e) => e.query),
            s = (0, tu.P)((e) => e.setQuery),
            r = (0, tu.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            c = (0, eF.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eP.hCu.SAVE_CLIP)),
            o = i.useCallback(() => {
                (0, eK.openUserSettings)(eU.X.CLIPS_PANEL);
            }, []),
            d = i.useCallback(() => s(""), [s]),
            u = null != c ? e$.dI(c.shortcut, !0) : null,
            h = i.useRef(null);
        return (0, a.jsxs)("div", {
            className: tV.aN,
            children: [
                (0, a.jsxs)("div", {
                    className: tV.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tV.Pe,
                            children: [
                                (0, a.jsx)(f.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(ey.t.z2jK6X),
                                }),
                                null != u && (0, a.jsx)(eH.e, { className: tV.P, shortcut: u }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tV.$s,
                            children: [
                                t &&
                                    (0, a.jsx)(m.m, {
                                        text: ey.intl.string(ey.t.X7yRDm),
                                        children: (0, a.jsx)(tj.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, a.jsx)(tP, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, a.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, a.jsx)(e2.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ey.intl.formatToPlainString(eb.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tv.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, a.jsx)(j.K, {
                                                                  icon: tv.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ey.intl.string(ey.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, a.jsx)(m.m, {
                                    text: ey.intl.string(ey.t["3D5yo/"]),
                                    children: (0, a.jsx)(j.K, {
                                        onClick: o,
                                        icon: tC.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ey.intl.string(ey.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                t &&
                    (0, a.jsx)("div", {
                        className: tV.MT,
                        children: (0, a.jsx)(tb.I, {
                            placeholder: ey.intl.string(ey.t["5h0QOP"]),
                            query: n,
                            onChange: s,
                            onClear: d,
                            size: "md",
                        }),
                    }),
            ],
        });
    }),
    tQ = i.memo(function (e) {
        let { name: t, count: l, icon: i, isSelected: n, onClick: r } = e;
        return (0, a.jsxs)(ty.D, {
            className: s()(tV.MV, { [tV.wH]: n }),
            onClick: r,
            children: [
                (0, a.jsxs)("div", {
                    className: tV.tk,
                    children: [
                        i,
                        (0, a.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tV.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: tV.z2,
                    children: (0, a.jsx)(G.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tY(e) {
    let { enabled: t } = M.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, a.jsx)(tK, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
              mainLinkNewCounts: e.mainLinkNewCounts,
          })
        : (0, a.jsx)(tB, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tB(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, tu.P)((e) => e.gameFacet),
        r = (0, tu.P)((e) => e.activeMainLink),
        c = (0, tu.P)((e) => e.setGameFacet),
        o = (0, tu.P)((e) => e.setActiveMainLink),
        {
            legacyGames: d,
            allClipsCount: u,
            favoritesCount: m,
        } = i.useMemo(() => {
            let e = new Map(),
                a = new Set(l);
            for (let l of t) {
                if (null == l.applicationId) continue;
                let t = a.has(l),
                    i = e.get(l.applicationId);
                null == i
                    ? e.set(l.applicationId, {
                          name: l.applicationName,
                          count: +!!t,
                          mostRecentClipCreatedAt: l.createdAt,
                      })
                    : (t && (i.count += 1),
                      l.createdAt > i.mostRecentClipCreatedAt && (i.mostRecentClipCreatedAt = l.createdAt));
            }
            let i = 0;
            for (let e of l) e.isFavorite && (i += 1);
            return {
                legacyGames: Array.from(e.entries())
                    .map((e) => {
                        let [t, l] = e;
                        return { applicationId: t, ...l };
                    })
                    .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
                allClipsCount: l.length,
                favoritesCount: i,
            };
        }, [t, l]),
        h = i.useMemo(() => d.map((e) => e.applicationId), [d]),
        x = (0, L.A)(h),
        g = i.useMemo(() => new Map(x.map((e) => [e?.id, e])), [x]),
        p = i.useCallback(() => {
            o(z.oH.ALL_CLIPS), c(null);
        }, [o, c]),
        j = i.useCallback(() => {
            o(z.oH.FAVORITES), c(null);
        }, [o, c]),
        v = i.useCallback(
            (e) => {
                c(e), o(z.oH.ALL_CLIPS);
            },
            [c, o],
        ),
        C = null == s && r === z.oH.ALL_CLIPS,
        b = null == s && r === z.oH.FAVORITES;
    return (0, a.jsxs)("div", {
        className: tV.pz,
        children: [
            (0, a.jsx)(t$, { withHeaderFilters: n, allClips: t }),
            (0, a.jsxs)("div", {
                className: tV.wp,
                children: [
                    (0, a.jsx)("div", {
                        className: tV.om,
                        children: (0, a.jsxs)("div", {
                            className: tV.Ep,
                            children: [
                                (0, a.jsx)(tQ, {
                                    name: ey.intl.string(ey.t.dPVrEv),
                                    count: u,
                                    icon: (0, a.jsx)(ee.x, {}),
                                    isSelected: C,
                                    onClick: p,
                                }),
                                (0, a.jsx)(tQ, {
                                    name: ey.intl.string(ey.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, a.jsx)(q.G, {}),
                                    isSelected: b,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    d.length > 0 &&
                        (0, a.jsxs)(tA.Ip, {
                            className: tV.om,
                            fade: !0,
                            children: [
                                (0, a.jsx)(f.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tV.a9,
                                    children: ey.intl.string(ey.t.URyqtP),
                                }),
                                (0, a.jsx)("div", {
                                    className: tV.Ep,
                                    children: d.map((e) =>
                                        (0, a.jsx)(
                                            tQ,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, a.jsx)(E.A, {
                                                    game: g.get(e.applicationId),
                                                    size: E.M.XSMALL,
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
var tX = l(847374),
    tq = l(112173),
    tW = l(548118),
    tZ = l(441349),
    tJ = l(789645),
    t0 = l(939546),
    t1 = l(99478);
function t2(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function t3(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function t9(e, t) {
    if (null == e && null == t) return null;
    let l = (0, t0.Xj)();
    return { preset: "custom", after: null != e ? t2(e.toDate(l)) : null, before: null != t ? t3(t.toDate(l)) : null };
}
function t5(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t1.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t7 = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t6(e) {
    return t7.format(new Date(e));
}
function t4(e) {
    switch (e.preset) {
        case "today":
            return ey.intl.string(eb.default.yOAWWM);
        case "yesterday":
            return ey.intl.string(eb.default["PtV/Ti"]);
        case "last-3-days":
            return ey.intl.string(eb.default.xfmv7I);
        case "this-year":
            return ey.intl.string(eb.default["+eE7zX"]);
        case "last-year":
            return ey.intl.string(eb.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? t6(e.after) : null,
                l = null != e.before ? t6(e.before) : null;
            if (null != t && null != l)
                return ey.intl.formatToPlainString(eb.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ey.intl.formatToPlainString(eb.default.k1FkTL, { date: t });
            if (null != l) return ey.intl.formatToPlainString(eb.default["4NlpHD"], { date: l });
            return ey.intl.string(eb.default.tv9apA);
        }
    }
}
var t8 = l(817480);
function le(e) {
    let { closePopout: t } = e,
        l = (0, tu.P)((e) => e.dateFilter),
        n = (0, tu.P)((e) => e.setDateFilter),
        [r, c] = i.useState(l?.preset === "custom"),
        [o, d] = i.useState(() => (l?.preset === "custom" ? t5(l.after) : null)),
        [u, h] = i.useState(() => (l?.preset === "custom" ? t5(l.before) : null)),
        x = i.useMemo(
            () => [
                { key: "today", label: ey.intl.string(eb.default.yOAWWM) },
                { key: "yesterday", label: ey.intl.string(eb.default["PtV/Ti"]) },
                { key: "last-3-days", label: ey.intl.string(eb.default.xfmv7I) },
                { key: "this-year", label: ey.intl.string(eb.default["+eE7zX"]) },
                { key: "last-year", label: ey.intl.string(eb.default.Nwj9v0) },
            ],
            [],
        ),
        g = l?.preset ?? null,
        p = r && "custom" !== g ? null : g,
        f = i.useMemo(() => (0, t0.Ec)((0, t0.Xj)()), []),
        v = i.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: t2(new Date(t)), before: t3(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: t2(new Date(l)), before: t3(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: t2(l), before: t3(new Date(t)) };
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
        C = i.useCallback(() => {
            c((e) => !e);
        }, []),
        b = i.useCallback(
            (e) => {
                d(e), n(t9(e, u));
            },
            [u, n],
        ),
        y = i.useCallback(
            (e) => {
                h(e), n(t9(o, e));
            },
            [o, n],
        ),
        A = i.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        N = null != o || null != u;
    return (0, a.jsxs)("div", {
        className: s()(t8.SW, r && t8.Td),
        children: [
            (0, a.jsxs)("div", {
                className: t8.sh,
                children: [
                    (0, a.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: t8.a9,
                        children: ey.intl.string(eb.default.upqksT),
                    }),
                    (0, a.jsxs)("div", {
                        className: t8.eF,
                        children: [
                            x.map((e) =>
                                (0, a.jsx)(
                                    ty.D,
                                    {
                                        className: s()(t8.zD, p === e.key && t8.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": p === e.key,
                                        children: (0, a.jsx)(G.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, a.jsxs)(ty.D, {
                                className: s()(t8.zD, t8.Kl, (r || "custom" === g) && t8.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, a.jsx)(G.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: ey.intl.string(eb.default.tv9apA),
                                    }),
                                    (0, a.jsx)(G.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: t8.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: t8.ML,
                "aria-hidden": !r,
                children: [
                    (0, a.jsxs)("div", {
                        className: t8.U6,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t8._2,
                                children: [
                                    (0, a.jsx)(G.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t8.bk,
                                        "aria-hidden": !0,
                                        children: ey.intl.string(eb.default["96vZuU"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: t8.h0,
                                        children: [
                                            (0, a.jsx)(tZ.l, {
                                                label: ey.intl.string(eb.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: o,
                                                onChange: b,
                                                maxValue: u ?? f,
                                            }),
                                            null != o &&
                                                (0, a.jsx)(m.m, {
                                                    text: ey.intl.string(ey.t.VkKicb),
                                                    children: (0, a.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tJ.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ey.intl.string(ey.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: t8._2,
                                children: [
                                    (0, a.jsx)(G.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t8.bk,
                                        "aria-hidden": !0,
                                        children: ey.intl.string(eb.default["GL51/b"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: t8.h0,
                                        children: [
                                            (0, a.jsx)(tZ.l, {
                                                label: ey.intl.string(eb.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: u,
                                                onChange: y,
                                                minValue: o ?? void 0,
                                                maxValue: f,
                                            }),
                                            null != u &&
                                                (0, a.jsx)(m.m, {
                                                    text: ey.intl.string(ey.t.VkKicb),
                                                    children: (0, a.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tJ.P,
                                                        onClick: () => y(null),
                                                        "aria-label": ey.intl.string(ey.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    N &&
                        (0, a.jsx)("div", {
                            className: t8.dS,
                            children: (0, a.jsx)(ez.Q, { size: "sm", text: ey.intl.string(ey.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var lt = l(103552),
    ll = l(914427),
    la = l(213424);
function li(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: n,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: c,
            emptyStateText: o,
        } = e,
        d = i.useRef(null),
        u = i.useMemo(() => new Set(n), [n]),
        m = i.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tk()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, a.jsxs)(
                            lt.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, a.jsx)("span", { className: la.H, children: e.icon }),
                                    (0, a.jsx)(lt.x4.Label, { children: e.label }),
                                    r ? (0, a.jsx)(lt.x4.Checkbox, {}) : (0, a.jsx)(lt.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, a.jsx)(tj.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ll.p, {
                "aria-label": t,
                placeholder: c,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: o ?? ey.intl.string(ey.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, a.jsx)(e2.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tX.a,
                iconPosition: "end",
            }),
    });
}
var ln = l(941886);
function ls(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: n } = e;
    return (0, a.jsxs)("div", {
        className: ln.Io,
        children: [
            null != l && (0, a.jsx)("span", { className: ln.Kk, children: l }),
            (0, a.jsx)(G.E, {
                className: ln.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, a.jsx)(ty.D, {
                className: ln.DT,
                onClick: i,
                "aria-label": n ?? ey.intl.string(ey.t.N86XcP),
                children: (0, a.jsx)(tJ.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lr = l(841765);
let lc = { all: eb.default.lscwjQ, auto: eb.default.xrOIkz, manual: eb.default.D7HSLJ };
function lo() {
    let e = (0, tu.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? t4(e) : ey.intl.string(eb.default.upqksT);
    return (0, a.jsx)(tj.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(le, { closePopout: t });
        },
        children: (e) =>
            (0, a.jsx)(e2.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tX.a,
                iconPosition: "end",
            }),
    });
}
function ld() {
    let e = (0, tu.P)((e) => e.sortOrder),
        t = (0, tu.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        n = (e) => {
            t(e);
        },
        s = e === z.mu.OLDEST ? ey.intl.string(ey.t["0gitSE"]) : ey.intl.string(ey.t["4LLKx3"]);
    return (0, a.jsx)(tj.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, a.jsx)(tL.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ey.intl.string(ey.t.XvNMNk),
                onClose: l,
                onSelect: void 0,
                children: (0, a.jsxs)(tE.rX, {
                    children: [
                        (0, a.jsx)(tE.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ey.intl.string(ey.t["4LLKx3"]),
                            action: () => {
                                n(z.mu.MOST_RECENT), l();
                            },
                            checked: e === z.mu.MOST_RECENT,
                        }),
                        (0, a.jsx)(tE.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ey.intl.string(ey.t["0gitSE"]),
                            action: () => {
                                n(z.mu.OLDEST), l();
                            },
                            checked: e === z.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(e2.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: tq.J }),
    });
}
function lu() {
    let e = (0, tu.P)((e) => e.clipMethodFilter),
        t = (0, tu.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null),
        n = (e) => {
            t(e);
        };
    return (0, a.jsx)(tj.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, a.jsx)(tL.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": ey.intl.string(eb.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, a.jsxs)(tE.rX, {
                    children: [
                        (0, a.jsx)(tE.iD, {
                            id: "method-all",
                            group: "method",
                            label: ey.intl.string(eb.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, a.jsx)(tE.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ey.intl.string(eb.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, a.jsx)(tE.iD, {
                            id: "method-manual",
                            group: "method",
                            label: ey.intl.string(eb.default.D7HSLJ),
                            action: () => {
                                n("manual"), l();
                            },
                            checked: "manual" === e,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(e2.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ey.intl.string(eb.default["kIqbb/"]),
                icon: tX.a,
                iconPosition: "end",
            }),
    });
}
function lm(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tu.P)((e) => e.query),
        r = (0, tu.P)((e) => e.setQuery),
        c = (0, tu.P)((e) => e.pendingSearchFocus),
        o = (0, tu.P)((e) => e.setPendingSearchFocus),
        d = i.useRef(null),
        u = (0, tu.P)((e) => e.activeMainLink),
        m = (0, tu.P)((e) => e.clipMethodFilter),
        h = (0, tu.P)((e) => e.setClipMethodFilter),
        x = (0, tu.P)((e) => e.gameFacet),
        f = (0, tu.P)((e) => e.clippedWithFacet),
        j = (0, tu.P)((e) => e.selectedGameIds),
        v = (0, tu.P)((e) => e.selectedUserIds),
        C = (0, tu.P)((e) => e.selectedGuildId),
        b = (0, tu.P)((e) => e.selectedActivity),
        y = (0, tu.P)((e) => e.dateFilter),
        A = (0, tu.P)((e) => e.toggleGameId),
        N = (0, tu.P)((e) => e.toggleUserId),
        k = (0, tu.P)((e) => e.setSelectedGuildId),
        w = (0, tu.P)((e) => e.setSelectedActivity),
        P = (0, tu.P)((e) => e.setDateFilter),
        S = (0, tu.P)((e) => e.clearFilters);
    i.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let D = i.useRef(null);
    i.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(j),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != C,
            filtered_by_participants: null != f || v.size > 0,
            filtered_by_favorites: u === z.oH.FAVORITES,
            filtered_by_activity: null != b,
        };
        if (
            !(
                "" !== e.type_filter ||
                e.game_filter_application_ids.length > 0 ||
                "" !== e.date_filter_range ||
                e.filtered_by_server ||
                e.filtered_by_participants ||
                e.filtered_by_favorites ||
                e.filtered_by_activity
            )
        ) {
            D.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== D.current && ((D.current = t), eu.default.track(eP.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, j, y, C, f, v, u, b]);
    let M = i.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, L.A)(M),
        _ = i.useMemo(() => new Map(T.map((e) => [e?.id, e])), [T]),
        R = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, a.jsx)(E.A, { game: _.get(e.key), size: E.M.XSMALL }),
                })),
            [l, _],
        ),
        F = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eo.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        O = i.useMemo(
            () =>
                F.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, a.jsx)(tW.Ay, { guild: e.guild, size: tW.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        H = i.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
        G = i.useMemo(
            () =>
                null == x
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null && "" !== l.activity.details && t.add(l.activity.details);
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === x)).map((e) => ({ key: e, label: e })),
            [t, x],
        ),
        U = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = I.default.getUser(l.key);
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
                    icon: (0, a.jsx)(g.eu, { src: e.avatarUrl, size: p._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        K = i.useMemo(() => (null != C ? new Set([C]) : new Set()), [C]),
        V = i.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        $ = i.useCallback(
            (e) => {
                k(C === e ? null : e);
            },
            [C, k],
        ),
        Q = i.useCallback(
            (e) => {
                w(b === e ? null : e);
            },
            [b, w],
        ),
        Y = null == x,
        B = null == f,
        X = tR() && u !== z.oH.AUTO_CLIPS,
        q = ey.intl.string(lc[m]),
        W = (0, a.jsxs)(a.Fragment, {
            children: [
                Y &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, a.jsx)(
                            ls,
                            {
                                label: t?.label ?? e,
                                icon: (0, a.jsx)(E.A, { game: _.get(e), size: E.M.XSMALL }),
                                onRemove: () => A(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, a.jsx)(ls, { label: t4(y), onRemove: () => P(null) }, "date"),
                null != C &&
                    (0, a.jsx)(
                        ls,
                        {
                            label: O.find((e) => e.key === C)?.label ?? C,
                            icon:
                                null != H.get(C)
                                    ? (0, a.jsx)(tW.Ay, { guild: H.get(C), size: tW.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                B && Array.from(v).map((e) => (0, a.jsx)(lh, { userId: e, onRemove: () => N(e) }, `user-${e}`)),
                null != b && (0, a.jsx)(ls, { label: b, onRemove: () => w(null) }, "activity"),
                X && "all" !== m && (0, a.jsx)(ls, { label: q, onRemove: () => h("all") }, "method"),
            ],
        }),
        Z = (Y && j.size > 0) || null != y || null != C || (B && v.size > 0) || null != b || (X && "all" !== m);
    return (0, a.jsxs)("div", {
        className: lr.kT,
        children: [
            (0, a.jsxs)("div", {
                className: lr.HL,
                children: [
                    (0, a.jsx)("div", {
                        className: lr.MT,
                        children: (0, a.jsx)(tb.I, {
                            ref: d,
                            placeholder: ey.intl.string(ey.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: lr.Zq,
                        children: [
                            X && (0, a.jsx)(lu, {}),
                            Y &&
                                R.length > 0 &&
                                (0, a.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: A,
                                    multiSelect: !0,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            (0, a.jsx)(lo, {}),
                            O.length > 0 &&
                                (0, a.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t["5qyruI"]),
                                    options: O,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            B &&
                                U.length > 0 &&
                                (0, a.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t.YQ6dJg),
                                    options: U,
                                    selectedKeys: v,
                                    onToggle: (e) => N(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, a.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t.agRtPG),
                                    options: G,
                                    selectedKeys: V,
                                    onToggle: Q,
                                    multiSelect: !1,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: lr.QZ, children: (0, a.jsx)(ld, {}) }),
                ],
            }),
            Z &&
                (0, a.jsxs)("div", {
                    className: lr.eH,
                    children: [
                        W,
                        (0, a.jsx)(ez.Q, {
                            size: "sm",
                            variant: "primary",
                            text: ey.intl.string(ey.t.O8k7O4),
                            onClick: S,
                        }),
                    ],
                }),
        ],
    });
}
function lh(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, d.bG)([I.default], () => I.default.getUser(t), [t]);
    if (null == i) return null;
    let n = i.globalName ?? i.username;
    return (0, a.jsx)(ls, {
        label: n,
        icon: (0, a.jsx)(g.eu, { src: i.getAvatarURL(null, 32), size: p._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
let lx = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var lg = l(505124),
    lp = l(43990),
    lf = l(449543),
    lj = l(152858);
function lv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lC = l(452143);
function lb(e) {
    let { clips: t, onEdit: l } = e,
        n = i.useMemo(() => lv(t), [t]),
        { backgroundComponent: r, handleHoverChange: c } = (function () {
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
                backgroundComponent: (0, a.jsxs)(a.Fragment, {
                    children: [
                        null != e.previousThumbnail &&
                            (0, a.jsx)(
                                "img",
                                { src: e.previousThumbnail, className: lC.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, a.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${lC.Tp} ${lC.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        { enabled: o } = M.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, tu.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, a.jsx)(lp.N, {
              theme: lg.NJ.DARK,
              children: (e) =>
                  (0, a.jsxs)("section", {
                      className: s()(lC.uW, e),
                      "aria-label": ey.intl.string(eb.default.efLpNC),
                      children: [
                          r,
                          (0, a.jsxs)("div", {
                              className: lC.wx,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: lC.mX,
                                      children: [
                                          (0, a.jsxs)("div", {
                                              className: lC.UP,
                                              children: [
                                                  (0, a.jsx)(tD.B, { size: "refresh_sm", color: "white" }),
                                                  (0, a.jsx)(G.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: ey.intl.string(eb.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(f.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: lC.DD,
                                              children: ey.intl.string(eb.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  o &&
                                      (0, a.jsx)("div", {
                                          className: lC.BX,
                                          children: (0, a.jsx)(e2.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(z.oH.AUTO_CLIPS),
                                              text: ey.intl.string(eb.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, a.jsx)(lf.A, {
                              className: lC.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: lj.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ey.intl.string(eb.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, a.jsx)(
                                      "div",
                                      {
                                          className: o ? lC.v2 : lC.cW,
                                          onMouseEnter: o ? () => c(t) : void 0,
                                          onMouseLeave: o ? () => c(null) : void 0,
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: o
                                              ? (0, a.jsx)(tl, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                })
                                              : (0, a.jsx)(eS, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                    onHoverChange: c,
                                                }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                      ],
                  }),
          });
}
var ly = l(770178),
    lA = l(765548),
    lN = l(569926),
    lk = l(486020),
    lL = l(251287);
function lE(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: r,
            onClipClick: c,
            animateEntrance: o,
            entranceRowOffset: u,
        } = e,
        { data: m } = (0, lN.I)(t.applicationId),
        h = (0, tu.P)((e) => e.setGameFacet),
        x = (0, tu.P)((e) => e.setActiveMainLink),
        g = t.applicationId,
        j = null != g && "" !== g,
        v = i.useCallback(() => {
            null != g && "" !== g && (h(g), x(z.oH.ALL_CLIPS));
        }, [g, h, x]),
        C = i.useCallback(() => {
            j ? v() : x(z.oH.ALL_CLIPS);
        }, [j, v, x]),
        b = i.useMemo(
            () =>
                null == m
                    ? null
                    : null != m.bannerHash && "" !== m.bannerHash
                      ? (lk.Ay.getGameAssetURL({ id: m.id, hash: m.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (m.screenshotUrls?.[0] ?? null),
            [m],
        ),
        y = (0, d.yK)([I.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => I.default.getUser(e)).filter(eh.Vq);
        }),
        A = (0, e9.e)({ timestamp: t.startedAt }),
        [N, k] = i.useState(800),
        L = (0, lA.A)((e) => {
            k(e.target.clientWidth);
        }),
        w = (0, ly.w)(L),
        P = Math.max(1, (N - 32) / 3),
        S = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        D = t.clips.length > 6;
    return (0, a.jsxs)("section", {
        className: lL.dZ,
        children: [
            (0, a.jsx)("div", {
                className: s()(lL.tB, null == b && lL.rD),
                style: null != b ? { backgroundImage: `url(${b})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, a.jsxs)("div", {
                className: lL.wx,
                children: [
                    j
                        ? (0, a.jsx)(B.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: lL.Zn,
                              children: (0, a.jsx)(E.A, {
                                  className: lL.Gt,
                                  game: m,
                                  size: E.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, a.jsx)(E.A, { className: lL.Gt, game: m, size: E.M.MEDIUM, "aria-hidden": !0 }),
                    (0, a.jsxs)("div", {
                        className: lL.TK,
                        children: [
                            j
                                ? (0, a.jsx)(B.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: lL.wb,
                                      children: (0, a.jsx)(f.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lL.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, a.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lL.mO,
                                      children: t.applicationName,
                                  }),
                            (0, a.jsxs)("div", {
                                className: lL.mI,
                                children: [
                                    (0, a.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ey.intl.format(eb.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, a.jsx)("span", { className: lL.TG, "aria-hidden": "true" }),
                                    (0, a.jsx)(G.E, { variant: "text-xs/normal", color: "text-muted", children: A }),
                                    y.length > 0 &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)("span", { className: lL.TG, "aria-hidden": "true" }),
                                                (0, a.jsx)(Y.A, { users: y, maxUsers: 5, size: p._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                ref: w,
                className: lL.Vg,
                children: S.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: lL.UX,
                            children: e.map((e, i) => {
                                let s = { width: P };
                                return (
                                    o && (s["--custom-entrance-delay"] = `${tm(u + t + i)}ms`),
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: o ? tx.$ : void 0,
                                            style: s,
                                            children: (0, a.jsx)(tl, {
                                                clip: e,
                                                actionsDisabled: n,
                                                isNew: l.includes(e.id),
                                                onClick: c ?? r,
                                                onEdit: r,
                                            }),
                                        },
                                        e.id,
                                    )
                                );
                            }),
                        },
                        `row-${t}`,
                    ),
                ),
            }),
            D &&
                (0, a.jsx)("div", {
                    className: lL.Vc,
                    children: (0, a.jsx)(e2.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ey.intl.string(eb.default.pqk9U0),
                        onClick: C,
                    }),
                }),
        ],
    });
}
var lw = l(177435);
function lP(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: c } = lx.useConfig({ location: "ClipsGalleryHome" }),
        o = i.useMemo(() => lv(t), [t]),
        u = c && o.length > 0,
        m = (0, d.yK)([S.Ay], () => S.Ay.getNewClipIds()),
        h = (0, d.bG)([S.Ay], () => S.Ay.getExportingClipIds().length > 0),
        x = (0, tu.P)((e) => e.setActiveMainLink),
        g = i.useCallback(() => {
            x(z.oH.ALL_CLIPS);
        }, [x]),
        p = i.useMemo(() => {
            let e = u ? new Set(o.map((e) => e.id)) : null;
            return (function (e) {
                let t = [...e].sort((e, t) => t.createdAt - e.createdAt),
                    l = [],
                    a = null;
                for (let e of t) {
                    let t = a?.clips[a.clips.length - 1],
                        i = null != a && a.applicationId === e.applicationId,
                        n = null != t && t.createdAt - e.createdAt <= 144e5;
                    null != a && i && n
                        ? a.clips.push(e)
                        : ((a = {
                              id: e.id,
                              applicationId: e.applicationId,
                              applicationName: e.applicationName,
                              startedAt: e.createdAt,
                              clips: [e],
                          }),
                          l.push(a));
                }
                return l;
            })(null == e ? t : t.filter((t) => !e.has(t.id))).slice(0, 3);
        }, [t, u, o]),
        j = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        v = i.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of p) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [p]);
    return p.length > 0 || u
        ? (0, a.jsx)(tA.Ip, {
              className: lw.iR,
              fade: !0,
              children: (0, a.jsxs)("div", {
                  className: lw.Qs,
                  children: [
                      u && (0, a.jsx)("div", { className: lw.Dk, children: (0, a.jsx)(lb, { clips: t, onEdit: n }) }),
                      p.length > 0 &&
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: ey.intl.string(eb.default.zfTWDE),
                                  }),
                                  p.map((e, t) =>
                                      (0, a.jsx)(
                                          lE,
                                          {
                                              session: e,
                                              recentClipIds: m,
                                              actionsDisabled: h,
                                              onEdit: n,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: v[t] ?? 0,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, a.jsx)("div", {
                                      className: lw.dp,
                                      children: (0, a.jsx)(e2.$, {
                                          variant: "primary",
                                          text: ey.intl.string(eb.default.RQtkop),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, a.jsx)("div", { className: lw.dc, children: (0, a.jsx)(U.y, {}) })
          : (0, a.jsx)(eW, { isEmptyBecauseQuery: l > 0 });
}
var lI = l(409067),
    lS = l(696016),
    lD = l(847455);
let lM = i.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lT(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: G,
        transitionState: U,
        initialEditingClipId: K,
        initialMainLink: V = z.oH.HOME,
        ...$
    } = e;
    (0, H.A)();
    let { analyticsLocations: Q } = (0, N.Ay)(A.A.CLIPS_GALLERY),
        [Y, B] = i.useState(new Set()),
        {
            gamesFacet: X,
            participantsFacet: q,
            distributedClipInitiatorsFacet: W,
            filteredClips: Z,
            mainLinkCounts: J,
            mainLinkNewCounts: ee,
            allClips: et,
        } = (0, lI.ad)(),
        { enabled: el } = M.O.useConfig({ location: "ClipsGalleryModal" }),
        ea = (0, d.bG)([S.Ay], () => S.Ay.getSettings().storageLocation),
        [ei, en] = i.useState(!0);
    i.useEffect(() => {
        (async function () {
            en(!0);
            try {
                await (0, T.Fb)(ea);
            } finally {
                en(!1);
            }
        })().catch(() => {});
    }, [ea]);
    let { onShareClick: es } = (0, O.A)(t);
    i.useEffect(
        () => () => {
            tu.P.getState().resetAll(), (0, T.Su)();
        },
        [],
    ),
        i.useEffect(() => {
            if (!el) return;
            let e = tu.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(V);
        }, [el, V]),
        (0, c.l0)(() => {
            S.Ay.getClipIds().length > 0 && P.A.isDeveloper && w.Ay.fireSurveyAction(o.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let er = (0, d.bG)([S.Ay], () => S.Ay.getExportingClipIds().length > 0),
        [ec, eo] = i.useState(null != K ? "editing" : "gallery"),
        [ed, eu] = i.useState(K ?? null),
        em = (0, d.bG)([S.Ay], () => (null != ed ? S.Ay.getClipById(ed) : null), [ed]),
        eh = (0, u.useIsModalAtTop)(lS.nm),
        ex = i.useRef(ec);
    (ex.current = ec), (i.useRef(ed).current = ed);
    let [eg, ep] = i.useState(null != K ? x.ip.ENTERED : x.ip.HIDDEN),
        ef = i.useRef(null),
        ej = (0, tu.P)((e) => e.gameFacet),
        ev = (0, tu.P)((e) => e.clippedWithFacet),
        eC = (0, tu.P)((e) => e.activeMainLink),
        eA = (0, tu.P)((e) => e.currentPage),
        eN = (0, tu.P)(
            (e) =>
                "" !== e.query.trim() ||
                e.selectedGameIds.size > 0 ||
                e.selectedUserIds.size > 0 ||
                null != e.selectedGuildId ||
                null != e.selectedActivity ||
                null != e.dateFilter ||
                "all" !== e.clipMethodFilter,
        );
    i.useEffect(() => {
        eC === z.oH.HOME && eN && tu.P.getState().setActiveMainLink(z.oH.ALL_CLIPS);
    }, [eC, eN]);
    let ek = i.useMemo(() => (null != ej ? [ej] : []), [ej]),
        eL = (0, L.A)(ek)[0] ?? null,
        eE = (0, d.bG)([I.default], () => (null != ev ? I.default.getUser(ev) : null), [ev]),
        ew = i.useMemo(() => {
            if (null != ej) {
                let e = X.find((e) => e.key === ej)?.name ?? ey.intl.string(ey.t.dPVrEv);
                return { icon: (0, a.jsx)(E.A, { game: eL, size: E.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != ev) {
                let e = null != eE ? (eE.globalName ?? eE.username) : ev;
                return {
                    icon:
                        null != eE
                            ? (0, a.jsx)(g.eu, {
                                  src: eE.getAvatarURL(null, 32),
                                  size: p._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eC === z.oH.FAVORITES
                ? { icon: null, title: ey.intl.string(ey.t["9rlCk1"]) }
                : eC === z.oH.AUTO_CLIPS
                  ? { icon: null, title: ey.intl.string(eb.default.ikNKf1) }
                  : eC === z.oH.HOME
                    ? { icon: null, title: ey.intl.string(ey.t.Ym2Ri6) }
                    : { icon: null, title: ey.intl.string(ey.t.dPVrEv) };
        }, [ej, ev, eC, X, eL, eE]),
        eP = i.useCallback(() => {
            eo("editing"), y.Ay.useReducedMotion && ep(x.ip.ENTERED);
        }, []),
        eI = i.useCallback((e) => {
            B((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eS = i.useCallback(
            (e) => {
                eu(e.id), eP();
            },
            [eP],
        ),
        eD = i.useCallback(() => {
            y.Ay.useReducedMotion && eu(null), eo("gallery");
        }, []);
    i.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === ex.current && eh && (e.stopPropagation(), eD());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eD, n, eh]),
        i.useEffect(
            () =>
                "editing" === ec && null != ed
                    ? void (0, T.YK)(ed)
                    : ((0, T.TE)(),
                      () => {
                          (0, T.TE)();
                      }),
            [ec, ed],
        );
    let eM = i.useCallback(() => {
            B(new Set());
        }, []),
        eT = Y.size > 0,
        e_ = i.useCallback(() => {
            let e = et.filter((e) => Y.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                eM(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [et, Y, eM]),
        eR = i.useCallback(async () => {
            let e = et.filter((e) => Y.has(e.id));
            await es({ clips: e }), eM();
        }, [et, Y, es, eM]),
        eF = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                et.forEach((a) => {
                    switch (a.decision?.signal?.type) {
                        case D.Gy.MANUAL:
                            l++;
                            break;
                        case D.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: et.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eC,
                }
            );
        }, [et, eC]);
    (0, k.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: eF },
        { disableTrack: ei },
        [eF, ei],
    );
    let eO = i.useMemo(
        () => ({ selectedClipIds: Y, toggleClipSelection: eI, clearSelection: eM, isMultiSelectMode: eT }),
        [Y, eI, eM, eT],
    );
    return (0, a.jsx)(N.f5, {
        value: Q,
        children: (0, a.jsx)(lM.Provider, {
            value: eO,
            children: (0, a.jsx)(h.N, {
                onClose: n,
                transitionState: U,
                ...$,
                children: (0, a.jsxs)("div", {
                    className: lD.jT,
                    ref: ef,
                    children: [
                        (0, a.jsxs)("div", {
                            className: s()(lD.PD, "gallery" === ec && lD.vu),
                            inert: "gallery" !== ec,
                            children: [
                                (0, a.jsx)(tY, {
                                    gamesFacet: X,
                                    participantsFacet: q,
                                    distributedClipInitiatorsFacet: W,
                                    mainLinkCounts: J,
                                    mainLinkNewCounts: ee,
                                    allClips: et,
                                    filteredClips: Z,
                                    withHeaderFilters: !el,
                                }),
                                (0, a.jsxs)("div", {
                                    className: lD.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: lD.$Q,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: lD.Rj,
                                                    children: [
                                                        ew.icon,
                                                        (0, a.jsx)(f.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: ew.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: lD.$s,
                                                    children: [
                                                        eT &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(m.m, {
                                                                        text: ey.intl.string(ey.t.RDE0Sc),
                                                                        children: (0, a.jsx)(j.K, {
                                                                            onClick: eR,
                                                                            icon: v.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ey.intl.string(ey.t.RDE0Sc),
                                                                            loading: er,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(m.m, {
                                                                        text: ey.intl.string(ey.t.oyYWHE),
                                                                        children: (0, a.jsx)(j.K, {
                                                                            onClick: e_,
                                                                            icon: C.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ey.intl.string(ey.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(j.K, {
                                                            onClick: n,
                                                            icon: b.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ey.intl.string(ey.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        el && eA === z.fB.HOME
                                            ? (0, a.jsx)(lP, {
                                                  filteredClips: Z,
                                                  totalClipCount: et.length,
                                                  onEdit: eS,
                                                  onClipClick: G,
                                                  isLoading: ei,
                                              })
                                            : (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      el &&
                                                          (0, a.jsx)(lm, {
                                                              allClips: et,
                                                              gamesFacet: X,
                                                              participantsFacet: q,
                                                          }),
                                                      (0, a.jsx)(tf, {
                                                          onEdit: eS,
                                                          channelId: t,
                                                          filteredClips: Z,
                                                          totalClipCount: et.length,
                                                          onClipClick: G,
                                                          isLoading: ei,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: s()(lD.jN, "editing" === ec && lD.vu),
                            inert: "editing" !== ec,
                            onTransitionEnd: () => {
                                switch (ec) {
                                    case "gallery":
                                        eu(null), ep(x.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        ep(x.ip.ENTERED);
                                }
                            },
                            children:
                                null != em &&
                                (0, a.jsxs)(F.p, {
                                    clip: em,
                                    modalContainerRef: ef,
                                    children: [
                                        (0, a.jsx)(_.A, { transitionState: eg, onClose: eD }),
                                        (0, a.jsx)(R.A, { channelId: t, onClose: eD }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
