l.d(t, { $: () => lF, default: () => lO });
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
    p = l(97808),
    g = l(778712),
    f = l(534514),
    j = l(408278),
    C = l(405433),
    v = l(241326),
    b = l(972213),
    y = l(775602),
    A = l(793574),
    N = l(688810),
    k = l(139286),
    L = l(429913),
    E = l(769015),
    w = l(27620),
    I = l(540999),
    P = l(287809),
    S = l(553933),
    D = l(274372),
    M = l(372684),
    _ = l(334686),
    T = l(430795),
    R = l(247181),
    F = l(309777),
    O = l(263356),
    z = l(564490),
    H = l(429364),
    G = l(352527),
    U = l(280483),
    K = l(111994);
l(321073);
var V = l(834730),
    $ = l(289873),
    Q = l(962125),
    Y = l(989349),
    B = l.n(Y),
    X = l(66455),
    q = l(342952),
    W = l(890856),
    Z = l(812993),
    J = l(27232),
    ee = l(505930),
    et = l(530005),
    el = l(406810),
    ea = l(176781),
    ei = l(661531),
    en = l(983851),
    es = l(31300),
    er = l(442433),
    ec = l(587895),
    eo = l(47167),
    ed = l(607470),
    eu = l(734057),
    em = l(71393),
    eh = l(549685),
    ex = l(174459),
    ep = l(58703),
    eg = l(403362),
    ef = l(53677);
function ej(e) {
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
var eC = l(226421),
    ev = l(284009),
    eb = l.n(ev),
    ey = l(460905),
    eA = l(713608),
    eN = l(16590),
    ek = l(375708),
    eL = l(788332);
function eE(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eb()(l?.type === M.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, d.bG)([P.default], () => P.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let n = i.globalName ?? i.username;
    return (0, a.jsx)(m.m, {
        text: ek.intl.string(eN.default.vTTkFF),
        children: (0, a.jsxs)("div", {
            className: eL.S,
            children: [
                (0, a.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: eL.$, alt: n }),
                (0, a.jsx)(V.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ek.intl.formatToPlainString(eN.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function ew(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, a.jsx)(m.m, {
        text: i,
        children: (0, a.jsxs)("div", {
            className: eL.S,
            children: [
                (0, a.jsx)(t, { size: "xxs", color: "white" }),
                (0, a.jsx)(V.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eI(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === M.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case M.Gy.DISTRIBUTED:
            return (0, a.jsx)(eE, { clip: t });
        case M.Gy.LAUGHTER:
            return (0, a.jsx)(ew, {
                icon: ey.n,
                text: ek.intl.string(eN.default.bTC23D),
                tooltipText: ek.intl.string(eN.default["ry+jxm"]),
            });
        case M.Gy.GAME_EVENT:
            return (0, a.jsx)(ew, {
                icon: eA.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ek.intl.string(eN.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eP = l(665039),
    eS = l(718812),
    eD = l(652215),
    eM = l(798594);
let e_ = function (e) {
    let { clip: t, actionsDisabled: n, isNew: r, onEdit: c, onClick: o, onHoverChange: u } = e,
        m = (0, d.yK)([P.default], () => t.users.map((e) => P.default.getUser(e)).filter(eg.Vq)),
        h = (0, d.bG)([eu.A], () => (null != t.channelId ? eu.A.getChannel(t.channelId) : null)),
        x = (0, d.bG)([em.A], () => (null != t.guildId ? em.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: C } = i.useContext(lF),
        [v, b] = i.useState(!1),
        y = i.useRef(null),
        k = (0, X.A)(t.editMetadata?.start ?? 0),
        L = f.has(t.id),
        E = t.type === M.nQ.SCREENSHOT,
        w = (0, eo.Ay)(h),
        I = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        S = (0, ep.Fe)(new Date(t.createdAt)),
        _ = i.useMemo(() => {
            let e = [];
            return (
                t.type === M.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != w && e.push(w))
                    : ("" !== I && null != I && e.push(I),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [I, x?.name, w, t.activity?.state, t.activity?.details, t.type]),
        T = i.useCallback(() => {
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
        z = i.useCallback((e) => {
            e.stopPropagation();
        }, []),
        H = i.useCallback(() => {
            b(!1);
        }, []),
        G = i.useCallback(
            (e) => {
                b(!0), y.current?.pause();
                let i =
                    C && f.size > 0
                        ? Array.from(f)
                              .map((e) => D.Ay.getClipById(e))
                              .filter(eg.Vq)
                        : [t];
                (0, er.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("64379"),
                            l.e("6619"),
                            l.e("45554"),
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
                                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ef.lc("ClipItem.onShare"),
                                        ...ef.Zy(t),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ef.lc("ClipItem.onEdit"),
                                            ...ef.Zy(t),
                                        });
                                },
                                onBeforeDelete: T,
                                onAfterDelete: () => {
                                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...ef.lc("ClipItem.onAfterDelete"),
                                        ...ef.Zy(t),
                                    });
                                },
                            });
                    },
                    { onClose: H },
                );
            },
            [t, C, f, n, T, H, c],
        ),
        U = i.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), G(e));
            },
            [n, G],
        ),
        K = i.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), j(t.id)) : C ? j(t.id) : null != o && o(t),
                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_CLICKED, {
                        ...ef.lc("ClipItem.handleClick"),
                        ...ef.Zy(t),
                    }));
            },
            [n, C, j, t, o],
        );
    return (0, a.jsx)(N.f5, {
        value: p,
        children: (0, a.jsx)("div", {
            className: eM.o8,
            onBlur: O,
            children: (0, a.jsxs)(W.s, {
                "aria-disabled": n,
                "aria-label": ek.intl.string(!0 === E ? ek.t["HO/oXl"] : ek.t.bt75uw),
                onClick: n ? void 0 : K,
                onContextMenu: U,
                className: s()(eM.QN, { [eM.r9]: n, [eM.in]: v, [eM.wH]: L }),
                onFocus: R,
                onMouseOver: R,
                onMouseLeave: F,
                children: [
                    (0, a.jsx)(eT, { clip: t, isNew: r, videoRef: y, onOpenContextMenu: G, actionsDisabled: n }),
                    (0, a.jsxs)("div", {
                        className: eM.wI,
                        children: [
                            (0, a.jsx)(eO, { clip: t }),
                            (0, a.jsxs)("div", {
                                className: eM.i0,
                                children: [
                                    (0, a.jsx)(eR, { clip: t }),
                                    (0, a.jsx)(V.E, {
                                        className: eM.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: _,
                                    }),
                                    (0, a.jsx)(V.E, {
                                        className: eM.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: S,
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: eM.jW,
                                children: (0, a.jsx)(q.A, {
                                    maxUsers: 3,
                                    users: m,
                                    size: g._3.SIZE_24,
                                    onFocusOverflow: (e) => {
                                        let t = e.relatedTarget,
                                            l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                        t?.parentElement === l ||
                                            (t?.parentElement?.parentElement?.parentElement !== l && R());
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
    let h = ej(t),
        x = i.useMemo(() => {
            let e = t.length;
            if (null != t.editMetadata) {
                let l = t.editMetadata.end - t.editMetadata.start;
                1e3 * l < t.length && (e = 1e3 * l);
            }
            let l = B().duration(e),
                a = l.minutes(),
                i = l.seconds();
            return 0 === a ? `${i}s` : `${a}:${i.toString().padStart(2, "0")}`;
        }, [t.length, t.editMetadata]),
        p = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), T.XK(t);
            },
            [t],
        ),
        g = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, a.jsxs)("div", {
        className: eM.QB,
        children: [
            (0, a.jsx)("div", { className: eM.ne }),
            (0, a.jsx)(eF, { clip: t, videoRef: n }),
            (0, a.jsxs)("div", {
                className: eM.ry,
                children: [
                    !o && l && (0, a.jsx)(Z.Lp, { text: ek.intl.string(ek.t.y2b7CA) }),
                    (0, a.jsx)(eI, { clip: t }),
                ],
            }),
            !r &&
                (0, a.jsxs)("div", {
                    className: eM.g3,
                    children: [
                        (0, a.jsx)(m.m, {
                            text: ek.intl.string(t.isFavorite ? eN.default.IZsalP : eN.default.ihBfyA),
                            position: "top",
                            children: (0, a.jsx)(j.K, {
                                onClick: p,
                                icon: t.isFavorite ? J.G : ee.y,
                                "aria-label": ek.intl.string(ek.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, a.jsx)(j.K, {
                            onClick: g,
                            icon: et.F,
                            "aria-label": ek.intl.string(ek.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: eM.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: eM.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(el.O, { color: "white", size: "xs" }),
                                (0, a.jsx)(V.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ek.intl.string(ek.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, a.jsxs)("div", {
                            className: eM.OH,
                            children: [
                                h && (0, a.jsx)(eh.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(V.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? ek.intl.string(ek.t["2Fp7OP"]) : x,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                d > 0 &&
                (0, a.jsx)("div", {
                    className: eM.X7,
                    children: (0, a.jsx)("div", { className: eM.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eR(e) {
    let { clip: t } = e,
        l = (0, eS.h)(t),
        i = "" !== l;
    return (0, a.jsx)(V.E, {
        className: eM.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: i ? l : t.name,
    });
}
function eF(e) {
    let { clip: t, videoRef: l } = e,
        i = (0, eP.j)(t),
        n = t.type === M.nQ.SCREENSHOT;
    return t.type === M.nQ.VOICE_CLIP
        ? (0, a.jsx)(eC.A, { className: eM.fT })
        : n
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: eM.fT })
          : null != i
            ? (0, a.jsx)(ed.A, {
                  preload: "none",
                  poster: t.thumbnail,
                  muted: !0,
                  src: i,
                  loop: !0,
                  className: eM.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: eM.fT })
              : (0, a.jsx)("div", {
                    className: s()(eM.fT, eM.Is),
                    children: (0, a.jsx)(ea.x, { color: ei.A.colors.ICON_MUTED }),
                });
}
function eO(e) {
    let { clip: t } = e,
        l = (0, d.bG)([ec.A], () => (null != t.applicationId ? ec.A.getApplication(t.applicationId) : null)),
        i = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: eM.gS,
        "aria-hidden": "true",
        children:
            null != i
                ? (0, a.jsx)("img", { src: i, alt: "", className: eM.NH })
                : t.type === M.nQ.VOICE_CLIP
                  ? (0, a.jsx)(en.H, { size: "sm" })
                  : (0, a.jsx)(es.k, { size: "sm" }),
    });
}
function ez(e) {
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
var eH = l(702841),
    eG = l(687966),
    eU = l(475358),
    eK = l(123292),
    eV = l(292801),
    e$ = l(780964),
    eQ = l(766075),
    eY = l(532624),
    eB = l(350535),
    eX = l(572164),
    eq = l(953932),
    eW = l(311162);
function eZ(e) {
    let { header: t, description: l } = e;
    return (0, a.jsxs)("div", {
        className: eW.Nr,
        children: [t, (0, a.jsx)(V.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eJ() {
    let e = (0, eH.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(eD.hCu.SAVE_CLIP)),
        t = null != e ? eB.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: eW.kR,
        children: [
            (0, a.jsx)(eZ, {
                header: (0, a.jsx)(eG._, { size: "refresh_sm", color: ei.A.colors.ICON_DEFAULT }),
                description: ek.intl.string(eN.default["4K56sP"]),
            }),
            (0, a.jsx)(eZ, {
                header: null != t ? (0, a.jsx)(eU.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  ek.intl.format(eN.default.BIwQis, { keybind: t }),
                                  (0, a.jsx)("div", {
                                      className: eW.JH,
                                      children: (0, a.jsx)(eK.Q, {
                                          text: ek.intl.string(eN.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eQ.openUserSettings)(e$.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ek.intl.string(eN.default.HOUDUm),
            }),
            (0, a.jsx)(eZ, {
                header: (0, a.jsx)(eV.t, { size: "refresh_sm", color: ei.A.colors.ICON_DEFAULT }),
                description: ek.intl.string(eN.default.DLzdl7),
            }),
        ],
    });
}
function e0(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eX.Et)();
    return (0, a.jsx)("div", {
        className: eW.kL,
        children: (0, a.jsxs)("div", {
            className: eW.Qs,
            children: [
                (0, a.jsx)(ez, { width: 213, height: 135, alt: "" }),
                (0, a.jsx)(f.D, {
                    className: eW.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ek.intl.string(eN.default["+M2iLf"]) : ek.intl.string(eN.default.m2GEpP),
                }),
                t &&
                    (0, a.jsx)(V.E, {
                        className: eW.h_,
                        variant: "text-md/medium",
                        children: ek.intl.string(eN.default.xkY5xS),
                    }),
                !l && (0, a.jsx)("div", { className: eW.SO, children: (0, a.jsx)(eq.A, {}) }),
                l && !t && (0, a.jsx)(eJ, {}),
            ],
        }),
    });
}
let e1 = 16 / 9;
var e3 = l(621466),
    e2 = l(61491),
    e9 = l(365199),
    e5 = l(821609),
    e7 = l(22231),
    e6 = l(549973),
    e4 = l(609174),
    e8 = l(619744),
    te = l(82716),
    tt = l(585579),
    tl = l(226870),
    ta = l(285072),
    ti = l(742007);
function tn(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: n, onEdit: s } = e;
    return (0, a.jsx)(e4.Cl, {
        clip: t,
        children: (0, a.jsx)(ts, { actionsDisabled: l, isNew: i, onClick: n, onEdit: s }),
    });
}
function ts(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, e4.Y_)(),
        { analyticsLocations: d } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = i.useContext(lF),
        [x, p] = i.useState(!1),
        [g, f] = i.useState(!1),
        [j, C] = i.useState(!1),
        [v, b] = i.useState(0),
        y = u.has(o.id),
        k = o.type === M.nQ.SCREENSHOT,
        L = (g || x) && !y;
    i.useEffect(() => {
        if (!L || k) return;
        let e = window.setTimeout(() => C(!0), 150);
        return () => {
            window.clearTimeout(e), C(!1);
        };
    }, [L, k]);
    let E = i.useRef(null),
        w = i.useCallback(() => {
            E.current?.releaseSource();
        }, []),
        I = i.useCallback(() => p(!1), []),
        P = i.useCallback(
            (e) => {
                p(!0);
                let i =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => D.Ay.getClipById(e))
                              .filter(eg.Vq)
                        : [o];
                (0, er.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("64379"),
                            l.e("6619"),
                            l.e("45554"),
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
                                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ef.lc("ClipsGalleryCard.onShare"),
                                        ...ef.Zy(o),
                                    });
                                },
                                onEdit: () => {
                                    c(o),
                                        ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ef.lc("ClipsGalleryCard.onEdit"),
                                            ...ef.Zy(o),
                                        });
                                },
                                onBeforeDelete: w,
                                onAfterDelete: () => {
                                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...ef.lc("ClipsGalleryCard.onAfterDelete"),
                                        ...ef.Zy(o),
                                    });
                                },
                            });
                    },
                    { onClose: I },
                );
            },
            [o, h, u, t, I, c, w],
        ),
        S = i.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), P(e));
            },
            [t, P],
        ),
        _ = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), P(e);
            },
            [P],
        ),
        T = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c(o),
                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        R = i.useCallback(
            (e) => {
                !t &&
                    (!(0, e3.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    ex.default.track(eD.HAw.CLIP_GALLERY_CARD_CLICKED, {
                        ...ef.lc("ClipsGalleryCard.handleClick"),
                        ...ef.Zy(o),
                    }));
            },
            [t, h, m, o, r],
        );
    return (0, a.jsx)(N.f5, {
        value: d,
        children: (0, a.jsxs)(W.s, {
            "aria-disabled": t,
            "aria-label": ek.intl.string(k ? ek.t["HO/oXl"] : ek.t.bt75uw),
            onClick: t ? void 0 : R,
            onContextMenu: S,
            className: s()(ti.Nr, { [ti.r9]: t, [ti.in]: x, [ti.wH]: y }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, a.jsx)("div", {
                    className: ti.w7,
                    children: (0, a.jsxs)(tr, {
                        ref: E,
                        isPlaying: j,
                        onProgressChange: b,
                        children: [
                            (0, a.jsx)(tc, { isNew: n }),
                            L && !t ? (0, a.jsx)(to, { onMenu: _, onBeforeDelete: w }) : (0, a.jsx)(td, {}),
                            (0, a.jsx)("div", { className: ti.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, a.jsx)(tu, { showHoverState: L, playbackProgress: v, onEdit: T }),
            ],
        }),
    });
}
let tr = i.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: i, children: n } = e;
    return (0, a.jsx)(tl.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: i,
        children: (0, a.jsx)(ta.h, { isVisible: !0, children: n }),
    });
});
function tc(e) {
    let { isNew: t } = e,
        l = (0, e4.Y_)(),
        i = !0 === l.pending;
    return (0, a.jsxs)("div", {
        className: ti.zV,
        children: [
            !i &&
                t &&
                (0, a.jsx)("div", {
                    className: ti.Ad,
                    children: (0, a.jsx)(V.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: ek.intl.string(ek.t.y2b7CA),
                    }),
                }),
            (0, a.jsx)(eI, { clip: l }),
        ],
    });
}
function to(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, a.jsxs)("div", {
        className: ti.Mw,
        children: [
            (0, a.jsx)(m.m, {
                text: ek.intl.string(ek.t["UKOtz+"]),
                children: (0, a.jsx)(j.K, {
                    onClick: t,
                    icon: e9.j,
                    "aria-label": ek.intl.string(ek.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, a.jsx)(e8.k, { onBeforeDelete: l }),
            (0, a.jsx)(te.z, {}),
        ],
    });
}
function td() {
    let e = (0, e4.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        n = ej(e),
        r = i.useMemo(() => {
            let t = e.length;
            if (null != e.editMetadata) {
                let l = e.editMetadata.end - e.editMetadata.start;
                1e3 * l < e.length && (t = 1e3 * l);
            }
            let l = Math.floor(t / 1e3);
            return (0, e2.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, a.jsxs)("div", {
              className: s()(ti.cH, ti._s),
              children: [
                  n && (0, a.jsx)(eh.A, { color: "white", width: 14, height: 14 }),
                  (0, a.jsx)(V.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? ek.intl.string(ek.t["2Fp7OP"]) : r,
                  }),
              ],
          });
}
function tu(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i } = e,
        n = (0, e4.Y_)(),
        r = n.type === M.nQ.SCREENSHOT,
        c = (0, d.yK)([P.default], () => n.users.map((e) => P.default.getUser(e)).filter(eg.Vq)),
        o = (0, d.bG)([eu.A], () => (null != n.channelId ? eu.A.getChannel(n.channelId) : null)),
        u = (0, d.bG)([em.A], () => (null != n.guildId ? em.A.getGuild(n.guildId) : null)),
        m = (0, eo.Ay)(o),
        h = "" === n.applicationName && null != m && "" !== m ? m : n.applicationName,
        x = (0, e6.e)({ timestamp: n.createdAt }),
        p = u?.name;
    return (0, a.jsxs)("div", {
        className: ti.yu,
        children: [
            (0, a.jsxs)("div", {
                className: ti.$,
                children: [
                    (0, a.jsx)(tm, {}),
                    c.length > 0 &&
                        (0, a.jsx)("span", {
                            className: ti.HD,
                            "data-clips-avatars": "true",
                            children: (0, a.jsx)(q.A, {
                                maxUsers: 3,
                                users: c,
                                size: g._3.SIZE_16,
                                "aria-label": ek.intl.string(ek.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ti.SO,
                children: [
                    (0, a.jsxs)("div", {
                        className: s()(ti.Ik, { [ti.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ti.Pb,
                                children: [
                                    (0, a.jsx)(th, {}),
                                    (0, a.jsx)(V.E, {
                                        className: ti.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: h,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: ti.eg,
                                children: [
                                    null != p &&
                                        "" !== p &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(V.E, {
                                                    className: ti.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                                (0, a.jsx)("span", { className: ti.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, a.jsx)(V.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ek.intl.format(eN.default["0QCBug"], { time: x }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: s()(ti.n_, { [ti.f$]: t }),
                        inert: !t,
                        children: [
                            !r &&
                                (0, a.jsx)("div", {
                                    className: ti.z5,
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("div", { className: ti.TE, style: { width: `${l}%` } }),
                                }),
                            (0, a.jsxs)("div", {
                                className: ti.E_,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: ti.lO,
                                        children: (0, a.jsx)(e5.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: e7.R,
                                            text: ek.intl.string(ek.t.bt75uw),
                                            onClick: i,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: ti.lO,
                                        children: (0, a.jsx)(tt.E, { variant: "primary" }),
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
function tm() {
    let e = (0, e4.Y_)(),
        t = (0, eS.h)(e),
        l = "" !== t;
    return (0, a.jsx)(V.E, {
        className: ti.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function th() {
    let e = (0, e4.Y_)(),
        t = (0, d.bG)([ec.A], () => (null != e.applicationId ? ec.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: ti.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, a.jsx)("img", { src: l, alt: "", className: ti.T_ })
                : e.type === M.nQ.VOICE_CLIP
                  ? (0, a.jsx)(en.H, { size: "xs", color: "currentColor" })
                  : (0, a.jsx)(es.k, { size: "xs", color: "currentColor" }),
    });
}
tr.displayName = "CardThumbnail";
var tx = l(792852);
function tp(e) {
    return Math.min(45 * e, 520);
}
var tg = l(352528),
    tf = l(32122);
let tj = [0, 16, 0, 16],
    tC = tj[1] + tj[3];
function tv(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: r } = e,
        [c, o] = i.useState({ width: 0, height: 0 }),
        u = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        m = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        { enabled: h } = _.O.useConfig({ location: "ClipsGalleryContent" }),
        x = h ? tn : e_,
        p = (0, tx.P)((e) => e.activeMainLink),
        g = (0, tx.P)((e) => e.gameFacet),
        j = (0, tx.P)((e) => e.clippedWithFacet),
        C = i.useMemo(() => {
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
                    title: ek.intl.string(ek.t["kB2R/0"]),
                    description: t ? ek.intl.string(ek.t["6AXirz"]) : void 0,
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
        { width: v } = c,
        { tileWidth: b, columns: A } = i.useMemo(() => {
            var e, l;
            let a, i, n;
            return (
                (e = t.length),
                (a = Math.max(1, Math.floor(((l = v - tC) + 16) / 336))),
                (i = Math.max(320, (l - 16 * (a - 1)) / a)),
                (n = Math.ceil(e / a)),
                { tileWidth: i, columns: a, rows: n }
            );
        }, [t.length, v]),
        N = i.useMemo(() => C.map((e) => Math.ceil(e.clips.length / A)), [C, A]),
        k = i.useMemo(() => N.reduce((e, t) => e + t, 0), [N]),
        L = Math.floor(b / e1),
        E = C.length > 0 ? `${p}:${g ?? ""}:${j ?? ""}` : null,
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
        I = h && w,
        P = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = C[l];
                if (null == r) return null;
                let c = i * A,
                    o = r.clips.slice(c, c + A);
                return (0, a.jsx)(
                    "div",
                    {
                        className: tg.UX,
                        children: o.map((t, l) => {
                            let i = { width: b };
                            return (
                                I && (i["--custom-entrance-delay"] = `${tp(e + l)}ms`),
                                (0, a.jsx)(
                                    "div",
                                    {
                                        className: I ? tf.$ : void 0,
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
            [C, A, b, m, u, n, s, x, I, E],
        ),
        S = i.useCallback(
            (e) => {
                let t = C[e];
                return t?.description != null ? 66 : 44;
            },
            [C],
        ),
        M = i.useCallback(
            (e) => {
                let t = C[e];
                return null == t
                    ? null
                    : (0, a.jsxs)(
                          "div",
                          {
                              className: tg.aE,
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, a.jsx)(V.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tg.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [C],
        );
    return r || 0 !== C.length
        ? r && 0 === C.length
            ? (0, a.jsx)("div", { className: tg.dc, children: (0, a.jsx)($.y, {}) })
            : (0, a.jsx)(Q.A, {
                  listPadding: tj,
                  renderRow: P,
                  renderSectionHeader: M,
                  rowCount: k,
                  rowCountBySection: N,
                  rowHeight: L + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: S,
                  onResize: o,
              })
        : (0, a.jsx)(e0, { isEmptyBecauseQuery: l > 0 });
}
var tb = l(922016),
    ty = l(783977),
    tA = l(625903),
    tN = l(892547),
    tk = l(939249),
    tL = l(364522),
    tE = l(91871),
    tw = l.n(tE),
    tI = l(980707),
    tP = l(477782),
    tS = l(583650);
function tD(e) {
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
            clearFilters: p,
        } = (0, tx.P)(),
        g = i.useMemo(
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
                        let t = P.default.getUser(e);
                        if (null != t) {
                            let a = t.globalName ?? t.username;
                            l.push({ userId: e, name: a });
                        }
                    }
                    return l.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())), l;
                })(l),
            [l],
        ),
        C = i.useMemo(
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
        v = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = em.A.getGuild(e);
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
            () => (0 === y.trim().length ? j : j.filter((e) => tw()(y.toLowerCase(), e.name.toLowerCase()))),
            [j, y],
        ),
        I = i.useMemo(
            () => (0 === N.trim().length ? v : v.filter((e) => tw()(N.toLowerCase(), e.name.toLowerCase()))),
            [v, N],
        ),
        S = i.useMemo(
            () => (0 === L.trim().length ? C : C.filter((e) => tw()(L.toLowerCase(), e.toLowerCase()))),
            [C, L],
        ),
        D = n.size > 0 || null != s || null != r || null != g,
        M = i.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        _ = i.useMemo(() => {
            if (null == r) return;
            let e = v.find((e) => e.guildId === r);
            return e?.name;
        }, [r, v]),
        T = i.useMemo(() => s ?? void 0, [s]),
        R = i.useMemo(() => (null != g ? String(g) : void 0), [g]);
    return (0, a.jsxs)(tI.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ek.intl.string(ek.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, a.jsxs)(tP.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, a.jsxs)(tP.Dr, {
                            id: "participants",
                            label: ek.intl.string(ek.t.YQ6dJg),
                            subtext: M,
                            children: [
                                j.length > 20 &&
                                    (0, a.jsx)(tP.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tS.V, {
                                                ...e,
                                                query: y,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        tP.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, a.jsxs)(tP.Dr, {
                            id: "servers",
                            label: ek.intl.string(ek.t["5qyruI"]),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, a.jsx)(tP.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tS.V, {
                                                ...e,
                                                query: N,
                                                onChange: k,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(tP.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                I.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, a.jsx)(
                                        tP.iD,
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
                    C.length > 0 &&
                        (0, a.jsxs)(tP.Dr, {
                            id: "activities",
                            label: ek.intl.string(ek.t.agRtPG),
                            subtext: T,
                            children: [
                                C.length > 20 &&
                                    (0, a.jsx)(tP.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, a.jsx)(tS.V, {
                                                ...e,
                                                query: L,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ek.intl.string(ek.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, a.jsx)(tP.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                S.map((e) =>
                                    (0, a.jsx)(
                                        tP.iD,
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
                        (0, a.jsxs)(tP.Dr, {
                            id: "years",
                            label: ek.intl.string(ek.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, a.jsx)(tP.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ek.intl.string(ek.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == g,
                                }),
                                b.map((e) =>
                                    (0, a.jsx)(
                                        tP.iD,
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
            (0, a.jsxs)(tP.rX, {
                label: ek.intl.string(ek.t.XvNMNk),
                children: [
                    (0, a.jsx)(tP.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ek.intl.string(ek.t["4LLKx3"]),
                        action: () => x(K.mu.MOST_RECENT),
                        checked: o === K.mu.MOST_RECENT,
                    }),
                    (0, a.jsx)(tP.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ek.intl.string(ek.t["0gitSE"]),
                        action: () => x(K.mu.OLDEST),
                        checked: o === K.mu.OLDEST,
                    }),
                ],
            }),
            D &&
                (0, a.jsx)(tP.rX, {
                    children: (0, a.jsx)(tP.Dr, { id: "clear-filters", label: ek.intl.string(ek.t.FbDgiu), action: p }),
                }),
        ],
    });
}
var tM = l(7689),
    t_ = l(332837),
    tT = l(175841),
    tR = l(974293),
    tF = l(458977),
    tO = l(526233),
    tz = l(270962);
function tH() {
    let e = (0, tR.aJ)("useIsAutoClipsAvailable"),
        t = tF.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        l = tz.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline,
        a = tO.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents;
    return e || t || l || a;
}
var tG = l(724993);
function tU(e) {
    let { icon: t, label: l, trailer: i, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, a.jsxs)(tk.D, {
        onClick: o ? void 0 : c,
        className: s()(tG.nM, { [tG.CZ]: n, [tG.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
        children: [
            (0, a.jsx)("span", { className: tG.aL, children: t }),
            (0, a.jsx)(V.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tG.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != i && (0, a.jsx)("span", { className: tG.iP, children: i }),
        ],
    });
}
function tK() {
    let e = (0, d.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(eD.hCu.SAVE_CLIP)),
        t = (0, tx.P)((e) => e.setActiveMainLink),
        l = (0, tx.P)((e) => e.setGameFacet),
        n = (0, tx.P)((e) => e.setClippedWithFacet),
        s = (0, tx.P)((e) => e.setPendingSearchFocus),
        r = i.useCallback(() => {
            (0, eQ.openUserSettings)(e$.X.CLIPS_PANEL);
        }, []),
        c = i.useCallback(() => {
            l(null), n(null), t(K.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        o = null != e ? eB.dI(e.shortcut, !0) : null;
    return (0, a.jsxs)("div", {
        className: tG.aN,
        children: [
            (0, a.jsxs)("div", {
                className: tG.pR,
                children: [
                    (0, a.jsx)(f.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ek.intl.string(ek.t.z2jK6X),
                    }),
                    null != o && (0, a.jsx)(eU.e, { shortcut: o }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: tG.XL,
                children: [
                    (0, a.jsx)(m.m, {
                        text: ek.intl.string(ek.t["5h0QOP"]),
                        children: (0, a.jsx)(j.K, {
                            onClick: c,
                            icon: tM.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ek.intl.string(ek.t["5h0QOP"]),
                        }),
                    }),
                    (0, a.jsx)(m.m, {
                        text: ek.intl.string(ek.t["3D5yo/"]),
                        children: (0, a.jsx)(j.K, {
                            onClick: r,
                            icon: tA.Z,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ek.intl.string(ek.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tV(e) {
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
        { mainLinkCounts: x, mainLinkNewCounts: p } = e,
        g = (0, tx.P)((e) => e.activeMainLink),
        f =
            ((t = (0, tx.P)((e) => e.setActiveMainLink)),
            (l = (0, tx.P)((e) => e.setGameFacet)),
            (n = (0, tx.P)((e) => e.setClippedWithFacet)),
            (s = (0, tx.P)((e) => e.clearFilters)),
            i.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        j = (0, tx.P)((e) => e.gameFacet),
        C = (0, tx.P)((e) => e.clippedWithFacet),
        v = tH(),
        b = null != j || null != C;
    return (0, a.jsxs)("div", {
        className: tG.uW,
        children: [
            (0, a.jsx)(tU, {
                icon: (0, a.jsx)(t_.f, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(ek.t.Ym2Ri6),
                isSelected: ((r = K.oH.HOME), !b && g === r),
                onClick: () => f(K.oH.HOME),
            }),
            (0, a.jsx)(tU, {
                icon: (0, a.jsx)(ea.x, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(ek.t.dPVrEv),
                trailer: (0, a.jsx)(t$, { count: p.allClips }),
                isSelected: ((c = K.oH.ALL_CLIPS), !b && g === c),
                isDisabled: 0 === x.allClips && ((o = K.oH.ALL_CLIPS), !!b || g !== o),
                onClick: () => f(K.oH.ALL_CLIPS),
            }),
            v &&
                (0, a.jsx)(tU, {
                    icon: (0, a.jsx)(tT.B, { size: "sm", color: "currentColor" }),
                    label: ek.intl.string(eN.default.ikNKf1),
                    trailer: (0, a.jsx)(t$, { count: p.autoClips }),
                    isSelected: ((d = K.oH.AUTO_CLIPS), !b && g === d),
                    isDisabled: 0 === x.autoClips && ((u = K.oH.AUTO_CLIPS), !!b || g !== u),
                    onClick: () => f(K.oH.AUTO_CLIPS),
                }),
            (0, a.jsx)(tU, {
                icon: (0, a.jsx)(J.G, { size: "sm", color: "currentColor" }),
                label: ek.intl.string(ek.t["9rlCk1"]),
                trailer: (0, a.jsx)(t$, { count: p.favorites }),
                isSelected: ((m = K.oH.FAVORITES), !b && g === m),
                isDisabled: 0 === x.favorites && ((h = K.oH.FAVORITES), !!b || g !== h),
                onClick: () => f(K.oH.FAVORITES),
            }),
        ],
    });
}
function t$(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, a.jsx)(Z.hV, { count: t });
}
function tQ(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: c } = e,
        o = (0, tx.P)((e) => e.gameFacet),
        d =
            ((t = (0, tx.P)((e) => e.setGameFacet)),
            (l = (0, tx.P)((e) => e.setClippedWithFacet)),
            (n = (0, tx.P)((e) => e.setActiveMainLink)),
            (r = (0, tx.P)((e) => e.clearFilters)),
            i.useCallback(
                (e, a) => {
                    null == a
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(a) : l(a), "game" === e ? l(null) : t(null), n(K.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = i.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, L.A)(u),
        h = i.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, a.jsxs)(tL.Ip, {
              className: s()(tG.uW, tG.fC),
              fade: !0,
              children: [
                  (0, a.jsx)(f.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tG.a9,
                      children: ek.intl.string(ek.t.URyqtP),
                  }),
                  (0, a.jsx)("div", {
                      className: tG._A,
                      children: c.map((e) =>
                          (0, a.jsx)(
                              tU,
                              {
                                  icon: (0, a.jsx)(E.A, { game: h.get(e.key), size: E.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, a.jsx)(t$, { count: e.newCount }),
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
function tY(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e;
    return (0, a.jsxs)("div", {
        className: tG.pz,
        children: [
            (0, a.jsx)(tK, {}),
            (0, a.jsxs)("div", {
                className: tG.wp,
                children: [
                    (0, a.jsx)(tV, { mainLinkCounts: l, mainLinkNewCounts: i }),
                    (0, a.jsx)(tQ, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tB = l(174726);
let tX = i.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, tx.P)((e) => e.query),
            s = (0, tx.P)((e) => e.setQuery),
            r = (0, tx.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            c = (0, eH.bG)([eY.Ay], () => eY.Ay.getKeybindForAction(eD.hCu.SAVE_CLIP)),
            o = i.useCallback(() => {
                (0, eQ.openUserSettings)(e$.X.CLIPS_PANEL);
            }, []),
            d = i.useCallback(() => s(""), [s]),
            u = null != c ? eB.dI(c.shortcut, !0) : null,
            h = i.useRef(null);
        return (0, a.jsxs)("div", {
            className: tB.aN,
            children: [
                (0, a.jsxs)("div", {
                    className: tB.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tB.Pe,
                            children: [
                                (0, a.jsx)(f.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ek.intl.string(ek.t.z2jK6X),
                                }),
                                null != u && (0, a.jsx)(eU.e, { className: tB.P, shortcut: u }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: tB.$s,
                            children: [
                                t &&
                                    (0, a.jsx)(m.m, {
                                        text: ek.intl.string(ek.t.X7yRDm),
                                        children: (0, a.jsx)(tb.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, a.jsx)(tD, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, a.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, a.jsx)(e5.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ek.intl.formatToPlainString(eN.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: ty.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, a.jsx)(j.K, {
                                                                  icon: ty.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ek.intl.string(ek.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, a.jsx)(m.m, {
                                    text: ek.intl.string(ek.t["3D5yo/"]),
                                    children: (0, a.jsx)(j.K, {
                                        onClick: o,
                                        icon: tA.Z,
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
                    (0, a.jsx)("div", {
                        className: tB.MT,
                        children: (0, a.jsx)(tN.I, {
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
    tq = i.memo(function (e) {
        let { name: t, count: l, icon: i, isSelected: n, onClick: r } = e;
        return (0, a.jsxs)(tk.D, {
            className: s()(tB.MV, { [tB.wH]: n }),
            onClick: r,
            children: [
                (0, a.jsxs)("div", {
                    className: tB.tk,
                    children: [
                        i,
                        (0, a.jsx)(V.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tB.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    className: tB.z2,
                    children: (0, a.jsx)(V.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tW(e) {
    let { enabled: t } = _.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, a.jsx)(tY, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
              mainLinkNewCounts: e.mainLinkNewCounts,
          })
        : (0, a.jsx)(tZ, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tZ(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, tx.P)((e) => e.gameFacet),
        r = (0, tx.P)((e) => e.activeMainLink),
        c = (0, tx.P)((e) => e.setGameFacet),
        o = (0, tx.P)((e) => e.setActiveMainLink),
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
        p = i.useMemo(() => new Map(x.map((e) => [e?.id, e])), [x]),
        g = i.useCallback(() => {
            o(K.oH.ALL_CLIPS), c(null);
        }, [o, c]),
        j = i.useCallback(() => {
            o(K.oH.FAVORITES), c(null);
        }, [o, c]),
        C = i.useCallback(
            (e) => {
                c(e), o(K.oH.ALL_CLIPS);
            },
            [c, o],
        ),
        v = null == s && r === K.oH.ALL_CLIPS,
        b = null == s && r === K.oH.FAVORITES;
    return (0, a.jsxs)("div", {
        className: tB.pz,
        children: [
            (0, a.jsx)(tX, { withHeaderFilters: n, allClips: t }),
            (0, a.jsxs)("div", {
                className: tB.wp,
                children: [
                    (0, a.jsx)("div", {
                        className: tB.om,
                        children: (0, a.jsxs)("div", {
                            className: tB.Ep,
                            children: [
                                (0, a.jsx)(tq, {
                                    name: ek.intl.string(ek.t.dPVrEv),
                                    count: u,
                                    icon: (0, a.jsx)(ea.x, {}),
                                    isSelected: v,
                                    onClick: g,
                                }),
                                (0, a.jsx)(tq, {
                                    name: ek.intl.string(ek.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, a.jsx)(J.G, {}),
                                    isSelected: b,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    d.length > 0 &&
                        (0, a.jsxs)(tL.Ip, {
                            className: tB.om,
                            fade: !0,
                            children: [
                                (0, a.jsx)(f.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tB.a9,
                                    children: ek.intl.string(ek.t.URyqtP),
                                }),
                                (0, a.jsx)("div", {
                                    className: tB.Ep,
                                    children: d.map((e) =>
                                        (0, a.jsx)(
                                            tq,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, a.jsx)(E.A, {
                                                    game: p.get(e.applicationId),
                                                    size: E.M.XSMALL,
                                                }),
                                                isSelected: s === e.applicationId,
                                                onClick: () => C(e.applicationId),
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
var tJ = l(847374),
    t0 = l(112173),
    t1 = l(548118),
    t3 = l(441349),
    t2 = l(789645),
    t9 = l(939546),
    t5 = l(99478);
function t7(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function t6(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function t4(e, t) {
    if (null == e && null == t) return null;
    let l = (0, t9.Xj)();
    return { preset: "custom", after: null != e ? t7(e.toDate(l)) : null, before: null != t ? t6(t.toDate(l)) : null };
}
function t8(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t5.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let le = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function lt(e) {
    return le.format(new Date(e));
}
function ll(e) {
    switch (e.preset) {
        case "today":
            return ek.intl.string(eN.default.yOAWWM);
        case "yesterday":
            return ek.intl.string(eN.default["PtV/Ti"]);
        case "last-3-days":
            return ek.intl.string(eN.default.xfmv7I);
        case "this-year":
            return ek.intl.string(eN.default["+eE7zX"]);
        case "last-year":
            return ek.intl.string(eN.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? lt(e.after) : null,
                l = null != e.before ? lt(e.before) : null;
            if (null != t && null != l)
                return ek.intl.formatToPlainString(eN.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ek.intl.formatToPlainString(eN.default.k1FkTL, { date: t });
            if (null != l) return ek.intl.formatToPlainString(eN.default["4NlpHD"], { date: l });
            return ek.intl.string(eN.default.tv9apA);
        }
    }
}
var la = l(817480);
function li(e) {
    let { closePopout: t } = e,
        l = (0, tx.P)((e) => e.dateFilter),
        n = (0, tx.P)((e) => e.setDateFilter),
        [r, c] = i.useState(l?.preset === "custom"),
        [o, d] = i.useState(() => (l?.preset === "custom" ? t8(l.after) : null)),
        [u, h] = i.useState(() => (l?.preset === "custom" ? t8(l.before) : null)),
        x = i.useMemo(
            () => [
                { key: "today", label: ek.intl.string(eN.default.yOAWWM) },
                { key: "yesterday", label: ek.intl.string(eN.default["PtV/Ti"]) },
                { key: "last-3-days", label: ek.intl.string(eN.default.xfmv7I) },
                { key: "this-year", label: ek.intl.string(eN.default["+eE7zX"]) },
                { key: "last-year", label: ek.intl.string(eN.default.Nwj9v0) },
            ],
            [],
        ),
        p = l?.preset ?? null,
        g = r && "custom" !== p ? null : p,
        f = i.useMemo(() => (0, t9.Ec)((0, t9.Xj)()), []),
        C = i.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: t7(new Date(t)), before: t6(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: t7(new Date(l)), before: t6(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: t7(l), before: t6(new Date(t)) };
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
        v = i.useCallback(() => {
            c((e) => !e);
        }, []),
        b = i.useCallback(
            (e) => {
                d(e), n(t4(e, u));
            },
            [u, n],
        ),
        y = i.useCallback(
            (e) => {
                h(e), n(t4(o, e));
            },
            [o, n],
        ),
        A = i.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        N = null != o || null != u;
    return (0, a.jsxs)("div", {
        className: s()(la.SW, r && la.Td),
        children: [
            (0, a.jsxs)("div", {
                className: la.sh,
                children: [
                    (0, a.jsx)(V.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: la.a9,
                        children: ek.intl.string(eN.default.upqksT),
                    }),
                    (0, a.jsxs)("div", {
                        className: la.eF,
                        children: [
                            x.map((e) =>
                                (0, a.jsx)(
                                    tk.D,
                                    {
                                        className: s()(la.zD, g === e.key && la.pH),
                                        onClick: () => C(e.key),
                                        "aria-pressed": g === e.key,
                                        children: (0, a.jsx)(V.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, a.jsxs)(tk.D, {
                                className: s()(la.zD, la.Kl, (r || "custom" === p) && la.pH),
                                onClick: v,
                                "aria-expanded": r,
                                children: [
                                    (0, a.jsx)(V.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: ek.intl.string(eN.default.tv9apA),
                                    }),
                                    (0, a.jsx)(V.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: la.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: la.ML,
                "aria-hidden": !r,
                children: [
                    (0, a.jsxs)("div", {
                        className: la.U6,
                        children: [
                            (0, a.jsxs)("div", {
                                className: la._2,
                                children: [
                                    (0, a.jsx)(V.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: la.bk,
                                        "aria-hidden": !0,
                                        children: ek.intl.string(eN.default["96vZuU"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: la.h0,
                                        children: [
                                            (0, a.jsx)(t3.l, {
                                                label: ek.intl.string(eN.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: o,
                                                onChange: b,
                                                maxValue: u ?? f,
                                            }),
                                            null != o &&
                                                (0, a.jsx)(m.m, {
                                                    text: ek.intl.string(ek.t.VkKicb),
                                                    children: (0, a.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: t2.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ek.intl.string(ek.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: la._2,
                                children: [
                                    (0, a.jsx)(V.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: la.bk,
                                        "aria-hidden": !0,
                                        children: ek.intl.string(eN.default["GL51/b"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: la.h0,
                                        children: [
                                            (0, a.jsx)(t3.l, {
                                                label: ek.intl.string(eN.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: u,
                                                onChange: y,
                                                minValue: o ?? void 0,
                                                maxValue: f,
                                            }),
                                            null != u &&
                                                (0, a.jsx)(m.m, {
                                                    text: ek.intl.string(ek.t.VkKicb),
                                                    children: (0, a.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: t2.P,
                                                        onClick: () => y(null),
                                                        "aria-label": ek.intl.string(ek.t.VkKicb),
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
                            className: la.dS,
                            children: (0, a.jsx)(eK.Q, { size: "sm", text: ek.intl.string(ek.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var ln = l(103552),
    ls = l(914427),
    lr = l(213424);
function lc(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tw()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, a.jsxs)(
                            ln.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, a.jsx)("span", { className: lr.H, children: e.icon }),
                                    (0, a.jsx)(ln.x4.Label, { children: e.label }),
                                    r ? (0, a.jsx)(ln.x4.Checkbox, {}) : (0, a.jsx)(ln.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, a.jsx)(tb.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(ls.p, {
                "aria-label": t,
                placeholder: c,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: o ?? ek.intl.string(ek.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, a.jsx)(e5.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tJ.a,
                iconPosition: "end",
            }),
    });
}
var lo = l(941886);
function ld(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: n } = e;
    return (0, a.jsxs)("div", {
        className: lo.Io,
        children: [
            null != l && (0, a.jsx)("span", { className: lo.Kk, children: l }),
            (0, a.jsx)(V.E, {
                className: lo.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, a.jsx)(tk.D, {
                className: lo.DT,
                onClick: i,
                "aria-label": n ?? ek.intl.string(ek.t.N86XcP),
                children: (0, a.jsx)(t2.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lu = l(841765);
let lm = { all: eN.default.lscwjQ, auto: eN.default.xrOIkz, manual: eN.default.D7HSLJ };
function lh() {
    let e = (0, tx.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? ll(e) : ek.intl.string(eN.default.upqksT);
    return (0, a.jsx)(tb.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(li, { closePopout: t });
        },
        children: (e) =>
            (0, a.jsx)(e5.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tJ.a,
                iconPosition: "end",
            }),
    });
}
function lx() {
    let e = (0, tx.P)((e) => e.sortOrder),
        t = (0, tx.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        n = (e) => {
            t(e);
        },
        s = e === K.mu.OLDEST ? ek.intl.string(ek.t["0gitSE"]) : ek.intl.string(ek.t["4LLKx3"]);
    return (0, a.jsx)(tb.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, a.jsx)(tI.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ek.intl.string(ek.t.XvNMNk),
                onClose: l,
                onSelect: void 0,
                children: (0, a.jsxs)(tP.rX, {
                    children: [
                        (0, a.jsx)(tP.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ek.intl.string(ek.t["4LLKx3"]),
                            action: () => {
                                n(K.mu.MOST_RECENT), l();
                            },
                            checked: e === K.mu.MOST_RECENT,
                        }),
                        (0, a.jsx)(tP.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ek.intl.string(ek.t["0gitSE"]),
                            action: () => {
                                n(K.mu.OLDEST), l();
                            },
                            checked: e === K.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, a.jsx)(e5.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: t0.J }),
    });
}
function lp() {
    let e = (0, tx.P)((e) => e.clipMethodFilter),
        t = (0, tx.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null),
        n = (e) => {
            t(e);
        };
    return (0, a.jsx)(tb.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, a.jsx)(tI.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": ek.intl.string(eN.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, a.jsxs)(tP.rX, {
                    children: [
                        (0, a.jsx)(tP.iD, {
                            id: "method-all",
                            group: "method",
                            label: ek.intl.string(eN.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, a.jsx)(tP.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ek.intl.string(eN.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, a.jsx)(tP.iD, {
                            id: "method-manual",
                            group: "method",
                            label: ek.intl.string(eN.default.D7HSLJ),
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
            (0, a.jsx)(e5.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ek.intl.string(eN.default["kIqbb/"]),
                icon: tJ.a,
                iconPosition: "end",
            }),
    });
}
function lg(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tx.P)((e) => e.query),
        r = (0, tx.P)((e) => e.setQuery),
        c = (0, tx.P)((e) => e.pendingSearchFocus),
        o = (0, tx.P)((e) => e.setPendingSearchFocus),
        d = i.useRef(null),
        u = (0, tx.P)((e) => e.activeMainLink),
        m = (0, tx.P)((e) => e.clipMethodFilter),
        h = (0, tx.P)((e) => e.setClipMethodFilter),
        x = (0, tx.P)((e) => e.gameFacet),
        f = (0, tx.P)((e) => e.clippedWithFacet),
        j = (0, tx.P)((e) => e.selectedGameIds),
        C = (0, tx.P)((e) => e.selectedUserIds),
        v = (0, tx.P)((e) => e.selectedGuildId),
        b = (0, tx.P)((e) => e.selectedActivity),
        y = (0, tx.P)((e) => e.dateFilter),
        A = (0, tx.P)((e) => e.toggleGameId),
        N = (0, tx.P)((e) => e.toggleUserId),
        k = (0, tx.P)((e) => e.setSelectedGuildId),
        w = (0, tx.P)((e) => e.setSelectedActivity),
        I = (0, tx.P)((e) => e.setDateFilter),
        S = (0, tx.P)((e) => e.clearFilters);
    i.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let D = i.useRef(null);
    i.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(j),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != v,
            filtered_by_participants: null != f || C.size > 0,
            filtered_by_favorites: u === K.oH.FAVORITES,
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
        t !== D.current && ((D.current = t), ex.default.track(eD.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, j, y, v, f, C, u, b]);
    let M = i.useMemo(() => l.map((e) => e.key), [l]),
        _ = (0, L.A)(M),
        T = i.useMemo(() => new Map(_.map((e) => [e?.id, e])), [_]),
        R = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, a.jsx)(E.A, { game: T.get(e.key), size: E.M.XSMALL }),
                })),
            [l, T],
        ),
        F = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = em.A.getGuild(e);
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
                    icon: (0, a.jsx)(t1.Ay, { guild: e.guild, size: t1.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        z = i.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
        H = i.useMemo(
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
        G = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = P.default.getUser(l.key);
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
                    icon: (0, a.jsx)(p.eu, { src: e.avatarUrl, size: g._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        U = i.useMemo(() => (null != v ? new Set([v]) : new Set()), [v]),
        V = i.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        $ = i.useCallback(
            (e) => {
                k(v === e ? null : e);
            },
            [v, k],
        ),
        Q = i.useCallback(
            (e) => {
                w(b === e ? null : e);
            },
            [b, w],
        ),
        Y = null == x,
        B = null == f,
        X = tH() && u !== K.oH.AUTO_CLIPS,
        q = ek.intl.string(lm[m]),
        W = (0, a.jsxs)(a.Fragment, {
            children: [
                Y &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, a.jsx)(
                            ld,
                            {
                                label: t?.label ?? e,
                                icon: (0, a.jsx)(E.A, { game: T.get(e), size: E.M.XSMALL }),
                                onRemove: () => A(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, a.jsx)(ld, { label: ll(y), onRemove: () => I(null) }, "date"),
                null != v &&
                    (0, a.jsx)(
                        ld,
                        {
                            label: O.find((e) => e.key === v)?.label ?? v,
                            icon:
                                null != z.get(v)
                                    ? (0, a.jsx)(t1.Ay, { guild: z.get(v), size: t1.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                B && Array.from(C).map((e) => (0, a.jsx)(lf, { userId: e, onRemove: () => N(e) }, `user-${e}`)),
                null != b && (0, a.jsx)(ld, { label: b, onRemove: () => w(null) }, "activity"),
                X && "all" !== m && (0, a.jsx)(ld, { label: q, onRemove: () => h("all") }, "method"),
            ],
        }),
        Z = (Y && j.size > 0) || null != y || null != v || (B && C.size > 0) || null != b || (X && "all" !== m);
    return (0, a.jsxs)("div", {
        className: lu.kT,
        children: [
            (0, a.jsxs)("div", {
                className: lu.HL,
                children: [
                    (0, a.jsx)("div", {
                        className: lu.MT,
                        children: (0, a.jsx)(tN.I, {
                            ref: d,
                            placeholder: ek.intl.string(ek.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: lu.Zq,
                        children: [
                            X && (0, a.jsx)(lp, {}),
                            Y &&
                                R.length > 0 &&
                                (0, a.jsx)(lc, {
                                    triggerLabel: ek.intl.string(ek.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: A,
                                    multiSelect: !0,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                            (0, a.jsx)(lh, {}),
                            O.length > 0 &&
                                (0, a.jsx)(lc, {
                                    triggerLabel: ek.intl.string(ek.t["5qyruI"]),
                                    options: O,
                                    selectedKeys: U,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                            B &&
                                G.length > 0 &&
                                (0, a.jsx)(lc, {
                                    triggerLabel: ek.intl.string(ek.t.YQ6dJg),
                                    options: G,
                                    selectedKeys: C,
                                    onToggle: (e) => N(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, a.jsx)(lc, {
                                    triggerLabel: ek.intl.string(ek.t.agRtPG),
                                    options: H,
                                    selectedKeys: V,
                                    onToggle: Q,
                                    multiSelect: !1,
                                    searchPlaceholder: ek.intl.string(ek.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: lu.QZ, children: (0, a.jsx)(lx, {}) }),
                ],
            }),
            Z &&
                (0, a.jsxs)("div", {
                    className: lu.eH,
                    children: [
                        W,
                        (0, a.jsx)(eK.Q, {
                            size: "sm",
                            variant: "primary",
                            text: ek.intl.string(ek.t.O8k7O4),
                            onClick: S,
                        }),
                    ],
                }),
        ],
    });
}
function lf(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, d.bG)([P.default], () => P.default.getUser(t), [t]);
    if (null == i) return null;
    let n = i.globalName ?? i.username;
    return (0, a.jsx)(ld, {
        label: n,
        icon: (0, a.jsx)(p.eu, { src: i.getAvatarURL(null, 32), size: g._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
let lj = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var lC = l(505124),
    lv = l(43990),
    lb = l(449543),
    ly = l(152858);
function lA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lN = l(452143);
function lk(e) {
    let { clips: t, onEdit: l } = e,
        n = i.useMemo(() => lA(t), [t]),
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
                                { src: e.previousThumbnail, className: lN.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, a.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${lN.Tp} ${lN.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        { enabled: o } = _.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, tx.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, a.jsx)(lv.N, {
              theme: lC.NJ.DARK,
              children: (e) =>
                  (0, a.jsxs)("section", {
                      className: s()(lN.uW, e),
                      "aria-label": ek.intl.string(eN.default.efLpNC),
                      children: [
                          r,
                          (0, a.jsxs)("div", {
                              className: lN.wx,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: lN.mX,
                                      children: [
                                          (0, a.jsxs)("div", {
                                              className: lN.UP,
                                              children: [
                                                  (0, a.jsx)(tT.B, { size: "refresh_sm", color: "white" }),
                                                  (0, a.jsx)(V.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: ek.intl.string(eN.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsx)(f.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: lN.DD,
                                              children: ek.intl.string(eN.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  o &&
                                      (0, a.jsx)("div", {
                                          className: lN.BX,
                                          children: (0, a.jsx)(e5.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(K.oH.AUTO_CLIPS),
                                              text: ek.intl.string(eN.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, a.jsx)(lb.A, {
                              className: lN.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: ly.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ek.intl.string(eN.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, a.jsx)(
                                      "div",
                                      {
                                          className: o ? lN.v2 : lN.cW,
                                          onMouseEnter: o ? () => c(t) : void 0,
                                          onMouseLeave: o ? () => c(null) : void 0,
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: o
                                              ? (0, a.jsx)(tn, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                })
                                              : (0, a.jsx)(e_, {
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
var lL = l(770178),
    lE = l(765548),
    lw = l(569926),
    lI = l(486020),
    lP = l(251287);
function lS(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: r,
            onClipClick: c,
            animateEntrance: o,
            entranceRowOffset: u,
        } = e,
        { data: m } = (0, lw.I)(t.applicationId),
        h = (0, tx.P)((e) => e.setGameFacet),
        x = (0, tx.P)((e) => e.setActiveMainLink),
        p = t.applicationId,
        j = null != p && "" !== p,
        C = i.useCallback(() => {
            null != p && "" !== p && (h(p), x(K.oH.ALL_CLIPS));
        }, [p, h, x]),
        v = i.useCallback(() => {
            j ? C() : x(K.oH.ALL_CLIPS);
        }, [j, C, x]),
        b = i.useMemo(
            () =>
                null == m
                    ? null
                    : null != m.bannerHash && "" !== m.bannerHash
                      ? (lI.Ay.getGameAssetURL({ id: m.id, hash: m.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (m.screenshotUrls?.[0] ?? null),
            [m],
        ),
        y = (0, d.yK)([P.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => P.default.getUser(e)).filter(eg.Vq);
        }),
        A = (0, e6.e)({ timestamp: t.startedAt }),
        [N, k] = i.useState(800),
        L = (0, lE.A)((e) => {
            k(e.target.clientWidth);
        }),
        w = (0, lL.w)(L),
        I = Math.max(1, (N - 32) / 3),
        S = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        D = t.clips.length > 6;
    return (0, a.jsxs)("section", {
        className: lP.dZ,
        children: [
            (0, a.jsx)("div", {
                className: s()(lP.tB, null == b && lP.rD),
                style: null != b ? { backgroundImage: `url(${b})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, a.jsxs)("div", {
                className: lP.wx,
                children: [
                    j
                        ? (0, a.jsx)(W.s, {
                              "aria-label": t.applicationName,
                              onClick: C,
                              className: lP.Zn,
                              children: (0, a.jsx)(E.A, {
                                  className: lP.Gt,
                                  game: m,
                                  size: E.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, a.jsx)(E.A, { className: lP.Gt, game: m, size: E.M.MEDIUM, "aria-hidden": !0 }),
                    (0, a.jsxs)("div", {
                        className: lP.TK,
                        children: [
                            j
                                ? (0, a.jsx)(W.s, {
                                      "aria-label": t.applicationName,
                                      onClick: C,
                                      className: lP.wb,
                                      children: (0, a.jsx)(f.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lP.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, a.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lP.mO,
                                      children: t.applicationName,
                                  }),
                            (0, a.jsxs)("div", {
                                className: lP.mI,
                                children: [
                                    (0, a.jsx)(V.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ek.intl.format(eN.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, a.jsx)("span", { className: lP.TG, "aria-hidden": "true" }),
                                    (0, a.jsx)(V.E, { variant: "text-xs/normal", color: "text-muted", children: A }),
                                    y.length > 0 &&
                                        (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)("span", { className: lP.TG, "aria-hidden": "true" }),
                                                (0, a.jsx)(q.A, { users: y, maxUsers: 5, size: g._3.SIZE_16 }),
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
                className: lP.Vg,
                children: S.map((e, t) =>
                    (0, a.jsx)(
                        "div",
                        {
                            className: lP.UX,
                            children: e.map((e, i) => {
                                let s = { width: I };
                                return (
                                    o && (s["--custom-entrance-delay"] = `${tp(u + t + i)}ms`),
                                    (0, a.jsx)(
                                        "div",
                                        {
                                            className: o ? tf.$ : void 0,
                                            style: s,
                                            children: (0, a.jsx)(tn, {
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
                    className: lP.Vc,
                    children: (0, a.jsx)(e5.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ek.intl.string(eN.default.pqk9U0),
                        onClick: v,
                    }),
                }),
        ],
    });
}
var lD = l(177435);
function lM(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: c } = lj.useConfig({ location: "ClipsGalleryHome" }),
        o = i.useMemo(() => lA(t), [t]),
        u = c && o.length > 0,
        m = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        h = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        x = (0, tx.P)((e) => e.setActiveMainLink),
        p = i.useCallback(() => {
            x(K.oH.ALL_CLIPS);
        }, [x]),
        g = i.useMemo(() => {
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
        C = i.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of g) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [g]);
    return g.length > 0 || u
        ? (0, a.jsx)(tL.Ip, {
              className: lD.iR,
              fade: !0,
              children: (0, a.jsxs)("div", {
                  className: lD.Qs,
                  children: [
                      u && (0, a.jsx)("div", { className: lD.Dk, children: (0, a.jsx)(lk, { clips: t, onEdit: n }) }),
                      g.length > 0 &&
                          (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: ek.intl.string(eN.default.zfTWDE),
                                  }),
                                  g.map((e, t) =>
                                      (0, a.jsx)(
                                          lS,
                                          {
                                              session: e,
                                              recentClipIds: m,
                                              actionsDisabled: h,
                                              onEdit: n,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: C[t] ?? 0,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, a.jsx)("div", {
                                      className: lD.dp,
                                      children: (0, a.jsx)(e5.$, {
                                          variant: "primary",
                                          text: ek.intl.string(eN.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, a.jsx)("div", { className: lD.dc, children: (0, a.jsx)($.y, {}) })
          : (0, a.jsx)(e0, { isEmptyBecauseQuery: l > 0 });
}
var l_ = l(409067),
    lT = l(696016),
    lR = l(847455);
let lF = i.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lO(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: V,
        transitionState: $,
        initialEditingClipId: Q,
        initialMainLink: Y = K.oH.HOME,
        ...B
    } = e;
    (0, U.A)();
    let { analyticsLocations: X } = (0, N.Ay)(A.A.CLIPS_GALLERY),
        [q, W] = i.useState(new Set()),
        {
            gamesFacet: Z,
            participantsFacet: J,
            distributedClipInitiatorsFacet: ee,
            filteredClips: et,
            mainLinkCounts: el,
            mainLinkNewCounts: ea,
            allClips: ei,
        } = (0, l_.ad)(),
        { enabled: en } = _.O.useConfig({ location: "ClipsGalleryModal" }),
        es = (0, d.bG)([D.Ay], () => D.Ay.getSettings().storageLocation),
        [er, ec] = i.useState(!0);
    i.useEffect(() => {
        (async function () {
            ec(!0);
            try {
                await (0, T.Fb)(es);
            } finally {
                ec(!1);
            }
        })().catch(() => {});
    }, [es]);
    let { onShareClick: eo } = (0, G.A)(t);
    i.useEffect(
        () => () => {
            tx.P.getState().resetAll(), (0, T.Su)();
        },
        [],
    ),
        i.useEffect(() => {
            if (!en) return;
            let e = tx.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(Y);
        }, [en, Y]),
        (0, c.l0)(() => {
            D.Ay.hasClips() && I.A.isDeveloper && w.Ay.fireSurveyAction(o.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let ed = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        [eu, em] = i.useState(null != Q ? "editing" : "gallery"),
        [eh, ex] = i.useState(Q ?? null),
        ep = (0, d.bG)([D.Ay], () => (null != eh ? D.Ay.getClipById(eh) : null), [eh]),
        eg = (0, u.useIsModalAtTop)(lT.nm),
        { enabled: ef } = S._.useConfig({ location: "ClipsGalleryModal" }),
        ej = i.useRef(eu);
    (ej.current = eu), (i.useRef(eh).current = eh);
    let [eC, ev] = i.useState(null != Q ? x.ip.ENTERED : x.ip.HIDDEN),
        eb = i.useRef(null),
        ey = (0, tx.P)((e) => e.gameFacet),
        eA = (0, tx.P)((e) => e.clippedWithFacet),
        eL = (0, tx.P)((e) => e.activeMainLink),
        eE = (0, tx.P)((e) => e.currentPage),
        ew = (0, tx.P)(
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
        eL === K.oH.HOME && ew && tx.P.getState().setActiveMainLink(K.oH.ALL_CLIPS);
    }, [eL, ew]);
    let eI = i.useMemo(() => (null != ey ? [ey] : []), [ey]),
        eP = (0, L.A)(eI)[0] ?? null,
        eS = (0, d.bG)([P.default], () => (null != eA ? P.default.getUser(eA) : null), [eA]),
        eD = i.useMemo(() => {
            if (null != ey) {
                let e = Z.find((e) => e.key === ey)?.name ?? ek.intl.string(ek.t.dPVrEv);
                return { icon: (0, a.jsx)(E.A, { game: eP, size: E.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != eA) {
                let e = null != eS ? (eS.globalName ?? eS.username) : eA;
                return {
                    icon:
                        null != eS
                            ? (0, a.jsx)(p.eu, {
                                  src: eS.getAvatarURL(null, 32),
                                  size: g._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eL === K.oH.FAVORITES
                ? { icon: null, title: ek.intl.string(ek.t["9rlCk1"]) }
                : eL === K.oH.AUTO_CLIPS
                  ? { icon: null, title: ek.intl.string(eN.default.ikNKf1) }
                  : eL === K.oH.HOME
                    ? { icon: null, title: ek.intl.string(ek.t.Ym2Ri6) }
                    : { icon: null, title: ek.intl.string(ek.t.dPVrEv) };
        }, [ey, eA, eL, Z, eP, eS]),
        eM = i.useCallback(() => {
            em("editing"), y.Ay.useReducedMotion && ev(x.ip.ENTERED);
        }, []),
        e_ = i.useCallback((e) => {
            W((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eT = i.useCallback(
            (e) => {
                ex(e.id), eM();
            },
            [eM],
        ),
        eR = i.useCallback(() => {
            y.Ay.useReducedMotion && ex(null), em("gallery");
        }, []);
    i.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === ej.current && eg && (e.stopPropagation(), eR());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eR, n, eg]),
        i.useEffect(
            () =>
                "editing" === eu && null != eh
                    ? void (0, T.YK)(eh)
                    : ((0, T.TE)(),
                      () => {
                          (0, T.TE)();
                      }),
            [eu, eh],
        );
    let eF = i.useCallback(() => {
            W(new Set());
        }, []),
        eO = q.size > 0,
        ez = i.useCallback(() => {
            let e = ei.filter((e) => q.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, a.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                eF(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ei, q, eF]),
        eH = i.useCallback(async () => {
            let e = ei.filter((e) => q.has(e.id));
            await eo({ clips: e }), eF();
        }, [ei, q, eo, eF]),
        eG = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ei.forEach((a) => {
                    switch (a.decision?.signal?.type) {
                        case M.Gy.MANUAL:
                            l++;
                            break;
                        case M.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: ei.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eL,
                }
            );
        }, [ei, eL]);
    (0, k.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: eG },
        { disableTrack: er },
        [eG, er],
    );
    let eU = i.useMemo(
        () => ({ selectedClipIds: q, toggleClipSelection: e_, clearSelection: eF, isMultiSelectMode: eO }),
        [q, e_, eF, eO],
    );
    return (0, a.jsx)(N.f5, {
        value: X,
        children: (0, a.jsx)(lF.Provider, {
            value: eU,
            children: (0, a.jsx)(h.N, {
                onClose: n,
                transitionState: $,
                ...B,
                children: (0, a.jsxs)("div", {
                    className: lR.jT,
                    ref: eb,
                    children: [
                        (0, a.jsxs)("div", {
                            className: s()(lR.PD, "gallery" === eu && lR.vu),
                            inert: "gallery" !== eu,
                            children: [
                                (0, a.jsx)(tW, {
                                    gamesFacet: Z,
                                    participantsFacet: J,
                                    distributedClipInitiatorsFacet: ee,
                                    mainLinkCounts: el,
                                    mainLinkNewCounts: ea,
                                    allClips: ei,
                                    filteredClips: et,
                                    withHeaderFilters: !en,
                                }),
                                (0, a.jsxs)("div", {
                                    className: lR.Qs,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: lR.$Q,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: lR.Rj,
                                                    children: [
                                                        eD.icon,
                                                        (0, a.jsx)(f.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eD.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: lR.$s,
                                                    children: [
                                                        eO &&
                                                            (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                    (0, a.jsx)(m.m, {
                                                                        text: ek.intl.string(ek.t.RDE0Sc),
                                                                        children: (0, a.jsx)(j.K, {
                                                                            onClick: eH,
                                                                            icon: C.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ek.intl.string(ek.t.RDE0Sc),
                                                                            loading: ed,
                                                                        }),
                                                                    }),
                                                                    (0, a.jsx)(m.m, {
                                                                        text: ek.intl.string(ek.t.oyYWHE),
                                                                        children: (0, a.jsx)(j.K, {
                                                                            onClick: ez,
                                                                            icon: v.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ek.intl.string(ek.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, a.jsx)(j.K, {
                                                            onClick: n,
                                                            icon: b.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ek.intl.string(ek.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        en && eE === K.fB.HOME
                                            ? (0, a.jsx)(lM, {
                                                  filteredClips: et,
                                                  totalClipCount: ei.length,
                                                  onEdit: eT,
                                                  onClipClick: V,
                                                  isLoading: er,
                                              })
                                            : (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      en &&
                                                          (0, a.jsx)(lg, {
                                                              allClips: ei,
                                                              gamesFacet: Z,
                                                              participantsFacet: J,
                                                          }),
                                                      (0, a.jsx)(tv, {
                                                          onEdit: eT,
                                                          channelId: t,
                                                          filteredClips: et,
                                                          totalClipCount: ei.length,
                                                          onClipClick: V,
                                                          isLoading: er,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: s()(lR.jN, "editing" === eu && lR.vu),
                            inert: "editing" !== eu,
                            onTransitionEnd: () => {
                                switch (eu) {
                                    case "gallery":
                                        ex(null), ev(x.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        ev(x.ip.ENTERED);
                                }
                            },
                            children:
                                null != ep &&
                                (0, a.jsx)(H.p, {
                                    clip: ep,
                                    modalContainerRef: eb,
                                    children: ef
                                        ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(z.A, { transitionState: eC, onClose: eR }),
                                                  (0, a.jsx)(O.A, { channelId: t, onClose: eR }),
                                              ],
                                          })
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)(R.A, { transitionState: eC, onClose: eR }),
                                                  (0, a.jsx)(F.A, { channelId: t, onClose: eR }),
                                              ],
                                          }),
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
