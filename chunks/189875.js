l.d(t, { $: () => lS, default: () => lM });
var i = l(627968),
    a = l(64700),
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
    v = l(405433),
    C = l(241326),
    y = l(972213),
    b = l(775602),
    A = l(793574),
    N = l(688810),
    k = l(139286),
    L = l(429913),
    E = l(137177),
    w = l(27620),
    P = l(540999),
    I = l(287809),
    D = l(274372),
    S = l(372684),
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
    ei = l(31300),
    ea = l(442433),
    en = l(587895),
    es = l(47167),
    er = l(607470),
    ec = l(734057),
    eo = l(71393),
    ed = l(549685),
    eu = l(174459),
    em = l(58703),
    eh = l(403362),
    ex = l(53677),
    ep = l(226421),
    eg = l(284009),
    ef = l.n(eg),
    ej = l(460905),
    ev = l(713608),
    eC = l(16590),
    ey = l(375708),
    eb = l(788332);
function eA(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    ef()(l?.type === S.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, d.bG)([I.default], () => I.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(m.m, {
        text: ey.intl.string(eC.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: eb.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eb.$, alt: n }),
                (0, i.jsx)(G.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ey.intl.formatToPlainString(eC.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eN(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(m.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eb.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(G.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function ek(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === S.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case S.Gy.DISTRIBUTED:
            return (0, i.jsx)(eA, { clip: t });
        case S.Gy.LAUGHTER:
            return (0, i.jsx)(eN, {
                icon: ej.n,
                text: ey.intl.string(eC.default.bTC23D),
                tooltipText: ey.intl.string(eC.default["ry+jxm"]),
            });
        case S.Gy.GAME_EVENT:
            return (0, i.jsx)(eN, {
                icon: ev.q,
                text: t.decision.signal.title ?? "",
                tooltipText: ey.intl.string(eC.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eL = l(665039),
    eE = l(718812),
    ew = l(652215),
    eP = l(798594);
let eI = function (e) {
    let { clip: t, actionsDisabled: n, isNew: r, onEdit: c, onClick: o, onHoverChange: u } = e,
        m = (0, d.yK)([I.default], () => t.users.map((e) => I.default.getUser(e)).filter(eh.Vq)),
        h = (0, d.bG)([ec.A], () => (null != t.channelId ? ec.A.getChannel(t.channelId) : null)),
        x = (0, d.bG)([eo.A], () => (null != t.guildId ? eo.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = a.useContext(lS),
        [C, y] = a.useState(!1),
        b = a.useRef(null),
        k = (0, Q.A)(t.editMetadata?.start ?? 0),
        L = f.has(t.id),
        E = t.type === S.nQ.SCREENSHOT,
        w = (0, es.Ay)(h),
        P = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        M = (0, em.Fe)(new Date(t.createdAt)),
        T = a.useMemo(() => {
            let e = [];
            return (
                t.type === S.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != w && e.push(w))
                    : ("" !== P && null != P && e.push(P),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [P, x?.name, w, t.activity?.state, t.activity?.details, t.type]),
        _ = a.useCallback(() => {
            let e = b.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        R = a.useCallback(() => {
            if ((u?.("" !== t.thumbnail ? t.thumbnail : null), !0 === E)) return;
            let e = b.current;
            null != e && e.paused && ((e.currentTime = k.current), b.current?.play());
        }, [E, k, u, t.thumbnail]),
        F = a.useCallback(() => {
            if ((u?.(null), !0 === E)) return;
            let e = b.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [E, t.editMetadata?.start, u]),
        O = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || F();
            },
            [F],
        ),
        H = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        z = a.useCallback(() => {
            y(!1);
        }, []),
        U = a.useCallback(
            (e) => {
                y(!0), b.current?.pause();
                let a =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => D.Ay.getClipById(e))
                              .filter(eh.Vq)
                        : [t];
                (0, ea.L3)(
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
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: n,
                                onShare: () => {
                                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ex.lc(),
                                        ...ex.Zy(t),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ex.lc(),
                                            ...ex.Zy(t),
                                        });
                                },
                                onBeforeDelete: _,
                                onAfterDelete: () => {
                                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
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
        K = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), U(e));
            },
            [n, U],
        ),
        V = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), j(t.id)) : v ? j(t.id) : null != o && o(t),
                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_CLICKED, { ...ex.lc(), ...ex.Zy(t) }));
            },
            [n, v, j, t, o],
        );
    return (0, i.jsx)(N.f5, {
        value: p,
        children: (0, i.jsx)("div", {
            className: eP.o8,
            onBlur: O,
            children: (0, i.jsxs)(B.s, {
                "aria-disabled": n,
                "aria-label": ey.intl.string(!0 === E ? ey.t["HO/oXl"] : ey.t.bt75uw),
                onClick: n ? void 0 : V,
                onContextMenu: K,
                className: s()(eP.QN, { [eP.r9]: n, [eP.in]: C, [eP.wH]: L }),
                onFocus: R,
                onMouseOver: R,
                onMouseLeave: F,
                children: [
                    (0, i.jsx)(eD, { clip: t, isNew: r, videoRef: b, onOpenContextMenu: U, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: eP.wI,
                        children: [
                            (0, i.jsx)(eT, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: eP.i0,
                                children: [
                                    (0, i.jsx)(eS, { clip: t }),
                                    (0, i.jsx)(G.E, {
                                        className: eP.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: T,
                                    }),
                                    (0, i.jsx)(G.E, {
                                        className: eP.xD,
                                        color: "text-subtle",
                                        variant: "text-sm/normal",
                                        children: M,
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: eP.jW,
                                children: (0, i.jsx)(Y.A, {
                                    maxUsers: 3,
                                    users: m,
                                    size: g._3.SIZE_24,
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
        [d, u] = a.useState(0);
    a.useEffect(() => {
        let e = n.current;
        if (null == e || c) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), u(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    n = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - a) / (n - a)) * 100;
                u(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(i));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), u(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), u(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [n, c, t.editMetadata]);
    let { durationDisplay: h, isClipEdited: x } = a.useMemo(() => {
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
            let a = $().duration(e),
                n = a.minutes(),
                s = a.seconds();
            return 0 === n
                ? { durationDisplay: `${s}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${s.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        p = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), T.XK(t);
            },
            [t],
        ),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, i.jsxs)("div", {
        className: eP.QB,
        children: [
            (0, i.jsx)("div", { className: eP.ne }),
            (0, i.jsx)(eM, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eP.ry,
                children: [
                    !o && l && (0, i.jsx)(X.Lp, { text: ey.intl.string(ey.t.y2b7CA) }),
                    (0, i.jsx)(ek, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eP.g3,
                    children: [
                        (0, i.jsx)(m.m, {
                            text: ey.intl.string(t.isFavorite ? eC.default.IZsalP : eC.default.ihBfyA),
                            position: "top",
                            children: (0, i.jsx)(j.K, {
                                onClick: p,
                                icon: t.isFavorite ? q.G : W.y,
                                "aria-label": ey.intl.string(ey.t.k8fFjp),
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)(j.K, {
                            onClick: g,
                            icon: Z.F,
                            "aria-label": ey.intl.string(ey.t["UKOtz+"]),
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
                                t.isTemporary && (0, i.jsx)(J.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(G.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: ey.intl.string(ey.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: eP.OH,
                            children: [
                                x && (0, i.jsx)(ed.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(G.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? ey.intl.string(ey.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                d > 0 &&
                (0, i.jsx)("div", {
                    className: eP.X7,
                    children: (0, i.jsx)("div", { className: eP.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eS(e) {
    let { clip: t } = e,
        l = (0, eE.h)(t),
        a = "" !== l;
    return (0, i.jsx)(G.E, {
        className: eP.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eM(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, eL.j)(t),
        n = t.type === S.nQ.SCREENSHOT;
    return t.type === S.nQ.VOICE_CLIP
        ? (0, i.jsx)(ep.A, { className: eP.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eP.fT })
          : null != a
            ? (0, i.jsx)(er.A, {
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
                    children: (0, i.jsx)(ee.x, { color: et.A.colors.ICON_MUTED }),
                });
}
function eT(e) {
    let { clip: t } = e,
        l = (0, d.bG)([en.A], () => (null != t.applicationId ? en.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eP.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eP.NH })
                : t.type === S.nQ.VOICE_CLIP
                  ? (0, i.jsx)(el.H, { size: "sm" })
                  : (0, i.jsx)(ei.k, { size: "sm" }),
    });
}
function e_(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: n, width: s = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/5cbe59588641e0337b4a5e93e16f0ab02d494b2033f96505d343d31aae29d89c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: n ?? "img",
    });
}
var eR = l(702841),
    eF = l(687966),
    eO = l(475358),
    eH = l(123292),
    ez = l(292801),
    eG = l(780964),
    eU = l(766075),
    eK = l(532624),
    eV = l(350535),
    e$ = l(572164),
    eQ = l(953932),
    eY = l(311162);
function eB(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: eY.Nr,
        children: [t, (0, i.jsx)(G.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eX() {
    let e = (0, eR.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ew.hCu.SAVE_CLIP)),
        t = null != e ? eV.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eY.kR,
        children: [
            (0, i.jsx)(eB, {
                header: (0, i.jsx)(eF._, { size: "refresh_sm", color: et.A.colors.ICON_DEFAULT }),
                description: ey.intl.string(eC.default["4K56sP"]),
            }),
            (0, i.jsx)(eB, {
                header: null != t ? (0, i.jsx)(eO.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ey.intl.format(eC.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eY.JH,
                                      children: (0, i.jsx)(eH.Q, {
                                          text: ey.intl.string(eC.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eU.openUserSettings)(eG.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : ey.intl.string(eC.default.HOUDUm),
            }),
            (0, i.jsx)(eB, {
                header: (0, i.jsx)(ez.t, { size: "refresh_sm", color: et.A.colors.ICON_DEFAULT }),
                description: ey.intl.string(eC.default.DLzdl7),
            }),
        ],
    });
}
function eq(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, e$.Et)();
    return (0, i.jsx)("div", {
        className: eY.kL,
        children: (0, i.jsxs)("div", {
            className: eY.Qs,
            children: [
                (0, i.jsx)(e_, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(f.D, {
                    className: eY.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ey.intl.string(eC.default["+M2iLf"]) : ey.intl.string(eC.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(G.E, {
                        className: eY.h_,
                        variant: "text-md/medium",
                        children: ey.intl.string(eC.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eY.SO, children: (0, i.jsx)(eQ.A, {}) }),
                l && !t && (0, i.jsx)(eX, {}),
            ],
        }),
    });
}
let eW = 16 / 9;
var eZ = l(621466),
    eJ = l(61491),
    e0 = l(365199),
    e1 = l(821609),
    e2 = l(22231),
    e3 = l(549973),
    e9 = l(609174),
    e5 = l(619744),
    e7 = l(82716),
    e6 = l(585579),
    e4 = l(226870),
    e8 = l(285072),
    te = l(742007);
function tt(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(e9.Cl, {
        clip: t,
        children: (0, i.jsx)(tl, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function tl(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, e9.Y_)(),
        { analyticsLocations: d } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(lS),
        [x, p] = a.useState(!1),
        [g, f] = a.useState(!1),
        [j, v] = a.useState(!1),
        [C, y] = a.useState(0),
        b = u.has(o.id),
        k = o.type === S.nQ.SCREENSHOT,
        L = (g || x) && !b;
    a.useEffect(() => {
        if (!L || k) return;
        let e = window.setTimeout(() => v(!0), 150);
        return () => {
            window.clearTimeout(e), v(!1);
        };
    }, [L, k]);
    let E = a.useRef(null),
        w = a.useCallback(() => {
            E.current?.releaseSource();
        }, []),
        P = a.useCallback(() => p(!1), []),
        I = a.useCallback(
            (e) => {
                p(!0);
                let a =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => D.Ay.getClipById(e))
                              .filter(eh.Vq)
                        : [o];
                (0, ea.L3)(
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
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: t,
                                onShare: () => {
                                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ex.lc(),
                                        ...ex.Zy(o),
                                    });
                                },
                                onEdit: () => {
                                    c(o),
                                        eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ex.lc(),
                                            ...ex.Zy(o),
                                        });
                                },
                                onBeforeDelete: w,
                                onAfterDelete: () => {
                                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
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
        M = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), I(e));
            },
            [t, I],
        ),
        T = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), I(e);
            },
            [I],
        ),
        _ = a.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c(o),
                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        R = a.useCallback(
            (e) => {
                !t &&
                    (!(0, eZ.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    eu.default.track(ew.HAw.CLIP_GALLERY_CARD_CLICKED, { ...ex.lc(), ...ex.Zy(o) }));
            },
            [t, h, m, o, r],
        );
    return (0, i.jsx)(N.f5, {
        value: d,
        children: (0, i.jsxs)(B.s, {
            "aria-disabled": t,
            "aria-label": ey.intl.string(k ? ey.t["HO/oXl"] : ey.t.bt75uw),
            onClick: t ? void 0 : R,
            onContextMenu: M,
            className: s()(te.Nr, { [te.r9]: t, [te.in]: x, [te.wH]: b }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: te.w7,
                    children: (0, i.jsxs)(ti, {
                        ref: E,
                        isPlaying: j,
                        onProgressChange: y,
                        children: [
                            (0, i.jsx)(ta, { isNew: n }),
                            L && !t ? (0, i.jsx)(tn, { onMenu: T, onBeforeDelete: w }) : (0, i.jsx)(ts, {}),
                            (0, i.jsx)("div", { className: te.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, i.jsx)(tr, { showHoverState: L, playbackProgress: C, onEdit: _ }),
            ],
        }),
    });
}
let ti = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: n } = e;
    return (0, i.jsx)(e4.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, i.jsx)(e8.h, { isVisible: !0, children: n }),
    });
});
function ta(e) {
    let { isNew: t } = e,
        l = (0, e9.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: te.zV,
        children: [
            !a &&
                t &&
                (0, i.jsx)("div", {
                    className: te.Ad,
                    children: (0, i.jsx)(G.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: ey.intl.string(ey.t.y2b7CA),
                    }),
                }),
            (0, i.jsx)(ek, { clip: l }),
        ],
    });
}
function tn(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, i.jsxs)("div", {
        className: te.Mw,
        children: [
            (0, i.jsx)(m.m, {
                text: ey.intl.string(ey.t["UKOtz+"]),
                children: (0, i.jsx)(j.K, {
                    onClick: t,
                    icon: e0.j,
                    "aria-label": ey.intl.string(ey.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(e5.k, { onBeforeDelete: l }),
            (0, i.jsx)(e7.z, {}),
        ],
    });
}
function ts() {
    let e = (0, e9.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        { durationDisplay: n, isClipEdited: r } = a.useMemo(() => {
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
            let a = Math.floor(t / 1e3);
            return { durationDisplay: (0, eJ.rB)(a), isClipEdited: i };
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, i.jsxs)("div", {
              className: s()(te.cH, te._s),
              children: [
                  r && (0, i.jsx)(ed.A, { color: "white", width: 14, height: 14 }),
                  (0, i.jsx)(G.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? ey.intl.string(ey.t["2Fp7OP"]) : n,
                  }),
              ],
          });
}
function tr(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a } = e,
        n = (0, e9.Y_)(),
        r = n.type === S.nQ.SCREENSHOT,
        c = (0, d.yK)([I.default], () => n.users.map((e) => I.default.getUser(e)).filter(eh.Vq)),
        o = (0, d.bG)([ec.A], () => (null != n.channelId ? ec.A.getChannel(n.channelId) : null)),
        u = (0, d.bG)([eo.A], () => (null != n.guildId ? eo.A.getGuild(n.guildId) : null)),
        m = (0, es.Ay)(o),
        h = "" === n.applicationName && null != m && "" !== m ? m : n.applicationName,
        x = (0, e3.e)({ timestamp: n.createdAt }),
        p = u?.name;
    return (0, i.jsxs)("div", {
        className: te.yu,
        children: [
            (0, i.jsxs)("div", {
                className: te.$,
                children: [
                    (0, i.jsx)(tc, {}),
                    c.length > 0 &&
                        (0, i.jsx)("span", {
                            className: te.HD,
                            "data-clips-avatars": "true",
                            children: (0, i.jsx)(Y.A, {
                                maxUsers: 3,
                                users: c,
                                size: g._3.SIZE_16,
                                "aria-label": ey.intl.string(ey.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: te.SO,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(te.Ik, { [te.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, i.jsxs)("div", {
                                className: te.Pb,
                                children: [
                                    (0, i.jsx)(to, {}),
                                    (0, i.jsx)(G.E, {
                                        className: te.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: h,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: te.eg,
                                children: [
                                    null != p &&
                                        "" !== p &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(G.E, {
                                                    className: te.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                                (0, i.jsx)("span", { className: te.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, i.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ey.intl.format(eC.default["0QCBug"], { time: x }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(te.n_, { [te.f$]: t }),
                        inert: !t,
                        children: [
                            !r &&
                                (0, i.jsx)("div", {
                                    className: te.z5,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)("div", { className: te.TE, style: { width: `${l}%` } }),
                                }),
                            (0, i.jsxs)("div", {
                                className: te.E_,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: te.lO,
                                        children: (0, i.jsx)(e1.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: e2.R,
                                            text: ey.intl.string(ey.t.bt75uw),
                                            onClick: a,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: te.lO,
                                        children: (0, i.jsx)(e6.E, { variant: "primary" }),
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
function tc() {
    let e = (0, e9.Y_)(),
        t = (0, eE.h)(e),
        l = "" !== t;
    return (0, i.jsx)(G.E, {
        className: te.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function to() {
    let e = (0, e9.Y_)(),
        t = (0, d.bG)([en.A], () => (null != e.applicationId ? en.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: te.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: te.T_ })
                : e.type === S.nQ.VOICE_CLIP
                  ? (0, i.jsx)(el.H, { size: "xs", color: "currentColor" })
                  : (0, i.jsx)(ei.k, { size: "xs", color: "currentColor" }),
    });
}
ti.displayName = "CardThumbnail";
var td = l(792852);
function tu(e) {
    return Math.min(45 * e, 520);
}
var tm = l(352528),
    th = l(32122);
let tx = [0, 16, 0, 16],
    tp = tx[1] + tx[3];
function tg(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: r } = e,
        [c, o] = a.useState({ width: 0, height: 0 }),
        u = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        m = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().length > 0),
        { enabled: h } = M.O.useConfig({ location: "ClipsGalleryContent" }),
        x = h ? tt : eI,
        p = (0, td.P)((e) => e.activeMainLink),
        g = (0, td.P)((e) => e.gameFacet),
        j = (0, td.P)((e) => e.clippedWithFacet),
        v = a.useMemo(() => {
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
                    title: ey.intl.string(ey.t["kB2R/0"]),
                    description: t ? ey.intl.string(ey.t["6AXirz"]) : void 0,
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
        { width: C } = c,
        { tileWidth: y, columns: A } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = C - tp) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, C]),
        N = a.useMemo(() => v.map((e) => Math.ceil(e.clips.length / A)), [v, A]),
        k = a.useMemo(() => N.reduce((e, t) => e + t, 0), [N]),
        L = Math.floor(y / eW),
        E = v.length > 0 ? `${p}:${g ?? ""}:${j ?? ""}` : null,
        w = (function (e) {
            let t = (0, d.bG)([b.Ay], () => b.Ay.useReducedMotion),
                [l, i] = a.useState(null),
                [n, s] = a.useState(null);
            return (
                e !== l && (i(e), null != e && s(e)),
                a.useEffect(() => {
                    if (null == n) return;
                    let e = window.setTimeout(() => s(null), 1200);
                    return () => window.clearTimeout(e);
                }, [n]),
                !t && null != n
            );
        })(E),
        P = h && w,
        I = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = v[l];
                if (null == r) return null;
                let c = a * A,
                    o = r.clips.slice(c, c + A);
                return (0, i.jsx)(
                    "div",
                    {
                        className: tm.UX,
                        children: o.map((t, l) => {
                            let a = { width: y };
                            return (
                                P && (a["--custom-entrance-delay"] = `${tu(e + l)}ms`),
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: P ? th.$ : void 0,
                                        style: a,
                                        children: (0, i.jsx)(x, {
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
                    `row-${l}-${a}`,
                );
            },
            [v, A, y, m, u, n, s, x, P, E],
        ),
        S = a.useCallback(
            (e) => {
                let t = v[e];
                return t?.description != null ? 66 : 44;
            },
            [v],
        ),
        T = a.useCallback(
            (e) => {
                let t = v[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: tm.aE,
                              children: [
                                  (0, i.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tm.yV,
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
            ? (0, i.jsx)("div", { className: tm.dc, children: (0, i.jsx)(U.y, {}) })
            : (0, i.jsx)(K.A, {
                  listPadding: tx,
                  renderRow: I,
                  renderSectionHeader: T,
                  rowCount: k,
                  rowCountBySection: N,
                  rowHeight: L + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: S,
                  onResize: o,
              })
        : (0, i.jsx)(eq, { isEmptyBecauseQuery: l > 0 });
}
var tf = l(922016),
    tj = l(783977),
    tv = l(625903),
    tC = l(892547),
    ty = l(939249),
    tb = l(364522),
    tA = l(91871),
    tN = l.n(tA),
    tk = l(980707),
    tL = l(477782),
    tE = l(583650);
function tw(e) {
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
        } = (0, td.P)(),
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
                })(c),
            [c],
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
                        let t = I.default.getUser(e);
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
                        let t = eo.A.getGuild(e);
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
        [N, k] = a.useState(""),
        [L, E] = a.useState(""),
        w = a.useMemo(
            () => (0 === b.trim().length ? j : j.filter((e) => tN()(b.toLowerCase(), e.name.toLowerCase()))),
            [j, b],
        ),
        P = a.useMemo(
            () => (0 === N.trim().length ? C : C.filter((e) => tN()(N.toLowerCase(), e.name.toLowerCase()))),
            [C, N],
        ),
        D = a.useMemo(
            () => (0 === L.trim().length ? v : v.filter((e) => tN()(L.toLowerCase(), e.toLowerCase()))),
            [v, L],
        ),
        S = n.size > 0 || null != s || null != r || null != g,
        M = a.useMemo(() => {
            if (0 !== n.size)
                return j
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, j]),
        T = a.useMemo(() => {
            if (null == r) return;
            let e = C.find((e) => e.guildId === r);
            return e?.name;
        }, [r, C]),
        _ = a.useMemo(() => s ?? void 0, [s]),
        R = a.useMemo(() => (null != g ? String(g) : void 0), [g]);
    return (0, i.jsxs)(tk.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ey.intl.string(ey.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tL.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(tL.Dr, {
                            id: "participants",
                            label: ey.intl.string(ey.t.YQ6dJg),
                            subtext: M,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(tL.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tE.V, {
                                                ...e,
                                                query: b,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tL.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(tL.Dr, {
                            id: "servers",
                            label: ey.intl.string(ey.t["5qyruI"]),
                            subtext: T,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(tL.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tE.V, {
                                                ...e,
                                                query: N,
                                                onChange: k,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tL.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                P.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tL.iD,
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
                        (0, i.jsxs)(tL.Dr, {
                            id: "activities",
                            label: ey.intl.string(ey.t.agRtPG),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tL.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tE.V, {
                                                ...e,
                                                query: L,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tL.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                D.map((e) =>
                                    (0, i.jsx)(
                                        tL.iD,
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
                    y.length > 0 &&
                        (0, i.jsxs)(tL.Dr, {
                            id: "years",
                            label: ey.intl.string(ey.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, i.jsx)(tL.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == g,
                                }),
                                y.map((e) =>
                                    (0, i.jsx)(
                                        tL.iD,
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
            (0, i.jsxs)(tL.rX, {
                label: ey.intl.string(ey.t.XvNMNk),
                children: [
                    (0, i.jsx)(tL.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ey.intl.string(ey.t["4LLKx3"]),
                        action: () => x(z.mu.MOST_RECENT),
                        checked: o === z.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(tL.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ey.intl.string(ey.t["0gitSE"]),
                        action: () => x(z.mu.OLDEST),
                        checked: o === z.mu.OLDEST,
                    }),
                ],
            }),
            S &&
                (0, i.jsx)(tL.rX, {
                    children: (0, i.jsx)(tL.Dr, { id: "clear-filters", label: ey.intl.string(ey.t.FbDgiu), action: p }),
                }),
        ],
    });
}
var tP = l(7689),
    tI = l(332837),
    tD = l(175841),
    tS = l(974293),
    tM = l(458977),
    tT = l(270962);
function t_() {
    let e = (0, tS.aJ)(),
        t = tM.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        l = tT.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline;
    return e || t || l;
}
var tR = l(724993);
function tF(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, i.jsxs)(ty.D, {
        onClick: o ? void 0 : c,
        className: s()(tR.nM, { [tR.CZ]: n, [tR.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
        children: [
            (0, i.jsx)("span", { className: tR.aL, children: t }),
            (0, i.jsx)(G.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tR.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: tR.iP, children: a }),
        ],
    });
}
function tO() {
    let e = (0, d.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ew.hCu.SAVE_CLIP)),
        t = (0, td.P)((e) => e.setActiveMainLink),
        l = (0, td.P)((e) => e.setGameFacet),
        n = (0, td.P)((e) => e.setClippedWithFacet),
        s = (0, td.P)((e) => e.setPendingSearchFocus),
        r = a.useCallback(() => {
            (0, eU.openUserSettings)(eG.X.CLIPS_PANEL);
        }, []),
        c = a.useCallback(() => {
            l(null), n(null), t(z.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        o = null != e ? eV.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tR.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tR.pR,
                children: [
                    (0, i.jsx)(f.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ey.intl.string(ey.t.z2jK6X),
                    }),
                    null != o && (0, i.jsx)(eO.e, { shortcut: o }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tR.XL,
                children: [
                    (0, i.jsx)(m.m, {
                        text: ey.intl.string(ey.t["5h0QOP"]),
                        children: (0, i.jsx)(j.K, {
                            onClick: c,
                            icon: tP.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ey.intl.string(ey.t["5h0QOP"]),
                        }),
                    }),
                    (0, i.jsx)(m.m, {
                        text: ey.intl.string(ey.t["3D5yo/"]),
                        children: (0, i.jsx)(j.K, {
                            onClick: r,
                            icon: tv.Z,
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
function tH(e) {
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
        g = (0, td.P)((e) => e.activeMainLink),
        f =
            ((t = (0, td.P)((e) => e.setActiveMainLink)),
            (l = (0, td.P)((e) => e.setGameFacet)),
            (n = (0, td.P)((e) => e.setClippedWithFacet)),
            (s = (0, td.P)((e) => e.clearFilters)),
            a.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        j = (0, td.P)((e) => e.gameFacet),
        v = (0, td.P)((e) => e.clippedWithFacet),
        C = t_(),
        y = null != j || null != v;
    return (0, i.jsxs)("div", {
        className: tR.uW,
        children: [
            (0, i.jsx)(tF, {
                icon: (0, i.jsx)(tI.f, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t.Ym2Ri6),
                isSelected: ((r = z.oH.HOME), !y && g === r),
                onClick: () => f(z.oH.HOME),
            }),
            (0, i.jsx)(tF, {
                icon: (0, i.jsx)(ee.x, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t.dPVrEv),
                trailer: (0, i.jsx)(tz, { count: p.allClips }),
                isSelected: ((c = z.oH.ALL_CLIPS), !y && g === c),
                isDisabled: 0 === x.allClips && ((o = z.oH.ALL_CLIPS), !!y || g !== o),
                onClick: () => f(z.oH.ALL_CLIPS),
            }),
            C &&
                (0, i.jsx)(tF, {
                    icon: (0, i.jsx)(tD.B, { size: "sm", color: "currentColor" }),
                    label: ey.intl.string(eC.default.ikNKf1),
                    trailer: (0, i.jsx)(tz, { count: p.autoClips }),
                    isSelected: ((d = z.oH.AUTO_CLIPS), !y && g === d),
                    isDisabled: 0 === x.autoClips && ((u = z.oH.AUTO_CLIPS), !!y || g !== u),
                    onClick: () => f(z.oH.AUTO_CLIPS),
                }),
            (0, i.jsx)(tF, {
                icon: (0, i.jsx)(q.G, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t["9rlCk1"]),
                trailer: (0, i.jsx)(tz, { count: p.favorites }),
                isSelected: ((m = z.oH.FAVORITES), !y && g === m),
                isDisabled: 0 === x.favorites && ((h = z.oH.FAVORITES), !!y || g !== h),
                onClick: () => f(z.oH.FAVORITES),
            }),
        ],
    });
}
function tz(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, i.jsx)(X.hV, { count: t });
}
function tG(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: c } = e,
        o = (0, td.P)((e) => e.gameFacet),
        d =
            ((t = (0, td.P)((e) => e.setGameFacet)),
            (l = (0, td.P)((e) => e.setClippedWithFacet)),
            (n = (0, td.P)((e) => e.setActiveMainLink)),
            (r = (0, td.P)((e) => e.clearFilters)),
            a.useCallback(
                (e, i) => {
                    null == i
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(i) : l(i), "game" === e ? l(null) : t(null), n(z.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = a.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, L.A)(u),
        h = a.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, i.jsxs)(tb.Ip, {
              className: s()(tR.uW, tR.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(f.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tR.a9,
                      children: ey.intl.string(ey.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tR._A,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              tF,
                              {
                                  icon: (0, i.jsx)(E.A, { game: h.get(e.key), size: E.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tz, { count: e.newCount }),
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
function tU(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tR.pz,
        children: [
            (0, i.jsx)(tO, {}),
            (0, i.jsxs)("div", {
                className: tR.wp,
                children: [
                    (0, i.jsx)(tH, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, i.jsx)(tG, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var tK = l(174726);
let tV = a.memo(function (e) {
        let { withHeaderFilters: t, allClips: l } = e,
            n = (0, td.P)((e) => e.query),
            s = (0, td.P)((e) => e.setQuery),
            r = (0, td.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.dateFilter),
            ),
            c = (0, eR.bG)([eK.Ay], () => eK.Ay.getKeybindForAction(ew.hCu.SAVE_CLIP)),
            o = a.useCallback(() => {
                (0, eU.openUserSettings)(eG.X.CLIPS_PANEL);
            }, []),
            d = a.useCallback(() => s(""), [s]),
            u = null != c ? eV.dI(c.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: tK.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: tK.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tK.Pe,
                            children: [
                                (0, i.jsx)(f.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(ey.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(eO.e, { className: tK.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: tK.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(m.m, {
                                        text: ey.intl.string(ey.t.X7yRDm),
                                        children: (0, i.jsx)(tf.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tw, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(e1.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ey.intl.formatToPlainString(eC.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tj.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(j.K, {
                                                                  icon: tj.R,
                                                                  ...e,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": ey.intl.string(ey.t.X7yRDm),
                                                              }),
                                                }),
                                        }),
                                    }),
                                (0, i.jsx)(m.m, {
                                    text: ey.intl.string(ey.t["3D5yo/"]),
                                    children: (0, i.jsx)(j.K, {
                                        onClick: o,
                                        icon: tv.Z,
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
                    (0, i.jsx)("div", {
                        className: tK.MT,
                        children: (0, i.jsx)(tC.I, {
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
    t$ = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(ty.D, {
            className: s()(tK.MV, { [tK.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: tK.tk,
                    children: [
                        a,
                        (0, i.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: tK.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: tK.z2,
                    children: (0, i.jsx)(G.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tQ(e) {
    let { enabled: t } = M.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tU, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
              mainLinkNewCounts: e.mainLinkNewCounts,
          })
        : (0, i.jsx)(tY, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tY(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, td.P)((e) => e.gameFacet),
        r = (0, td.P)((e) => e.activeMainLink),
        c = (0, td.P)((e) => e.setGameFacet),
        o = (0, td.P)((e) => e.setActiveMainLink),
        {
            legacyGames: d,
            allClipsCount: u,
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
        h = a.useMemo(() => d.map((e) => e.applicationId), [d]),
        x = (0, L.A)(h),
        p = a.useMemo(() => new Map(x.map((e) => [e?.id, e])), [x]),
        g = a.useCallback(() => {
            o(z.oH.ALL_CLIPS), c(null);
        }, [o, c]),
        j = a.useCallback(() => {
            o(z.oH.FAVORITES), c(null);
        }, [o, c]),
        v = a.useCallback(
            (e) => {
                c(e), o(z.oH.ALL_CLIPS);
            },
            [c, o],
        ),
        C = null == s && r === z.oH.ALL_CLIPS,
        y = null == s && r === z.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: tK.pz,
        children: [
            (0, i.jsx)(tV, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: tK.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: tK.om,
                        children: (0, i.jsxs)("div", {
                            className: tK.Ep,
                            children: [
                                (0, i.jsx)(t$, {
                                    name: ey.intl.string(ey.t.dPVrEv),
                                    count: u,
                                    icon: (0, i.jsx)(ee.x, {}),
                                    isSelected: C,
                                    onClick: g,
                                }),
                                (0, i.jsx)(t$, {
                                    name: ey.intl.string(ey.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)(q.G, {}),
                                    isSelected: y,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    d.length > 0 &&
                        (0, i.jsxs)(tb.Ip, {
                            className: tK.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(f.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: tK.a9,
                                    children: ey.intl.string(ey.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: tK.Ep,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            t$,
                                            {
                                                name: e.name,
                                                count: e.count,
                                                icon: (0, i.jsx)(E.A, {
                                                    game: p.get(e.applicationId),
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
var tB = l(847374),
    tX = l(112173),
    tq = l(548118),
    tW = l(441349),
    tZ = l(789645),
    tJ = l(939546),
    t0 = l(99478);
function t1(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function t2(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function t3(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tJ.Xj)();
    return { preset: "custom", after: null != e ? t1(e.toDate(l)) : null, before: null != t ? t2(t.toDate(l)) : null };
}
function t9(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t0.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t5 = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t7(e) {
    return t5.format(new Date(e));
}
function t6(e) {
    switch (e.preset) {
        case "today":
            return ey.intl.string(eC.default.yOAWWM);
        case "yesterday":
            return ey.intl.string(eC.default["PtV/Ti"]);
        case "last-3-days":
            return ey.intl.string(eC.default.xfmv7I);
        case "this-year":
            return ey.intl.string(eC.default["+eE7zX"]);
        case "last-year":
            return ey.intl.string(eC.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? t7(e.after) : null,
                l = null != e.before ? t7(e.before) : null;
            if (null != t && null != l)
                return ey.intl.formatToPlainString(eC.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ey.intl.formatToPlainString(eC.default.k1FkTL, { date: t });
            if (null != l) return ey.intl.formatToPlainString(eC.default["4NlpHD"], { date: l });
            return ey.intl.string(eC.default.tv9apA);
        }
    }
}
var t4 = l(817480);
function t8(e) {
    let { closePopout: t } = e,
        l = (0, td.P)((e) => e.dateFilter),
        n = (0, td.P)((e) => e.setDateFilter),
        [r, c] = a.useState(l?.preset === "custom"),
        [o, d] = a.useState(() => (l?.preset === "custom" ? t9(l.after) : null)),
        [u, h] = a.useState(() => (l?.preset === "custom" ? t9(l.before) : null)),
        x = a.useMemo(
            () => [
                { key: "today", label: ey.intl.string(eC.default.yOAWWM) },
                { key: "yesterday", label: ey.intl.string(eC.default["PtV/Ti"]) },
                { key: "last-3-days", label: ey.intl.string(eC.default.xfmv7I) },
                { key: "this-year", label: ey.intl.string(eC.default["+eE7zX"]) },
                { key: "last-year", label: ey.intl.string(eC.default.Nwj9v0) },
            ],
            [],
        ),
        p = l?.preset ?? null,
        g = r && "custom" !== p ? null : p,
        f = a.useMemo(() => (0, tJ.Ec)((0, tJ.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: t1(new Date(t)), before: t2(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: t1(new Date(l)), before: t2(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: t1(l), before: t2(new Date(t)) };
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
                d(e), n(t3(e, u));
            },
            [u, n],
        ),
        b = a.useCallback(
            (e) => {
                h(e), n(t3(o, e));
            },
            [o, n],
        ),
        A = a.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        N = null != o || null != u;
    return (0, i.jsxs)("div", {
        className: s()(t4.SW, r && t4.Td),
        children: [
            (0, i.jsxs)("div", {
                className: t4.sh,
                children: [
                    (0, i.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: t4.a9,
                        children: ey.intl.string(eC.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: t4.eF,
                        children: [
                            x.map((e) =>
                                (0, i.jsx)(
                                    ty.D,
                                    {
                                        className: s()(t4.zD, g === e.key && t4.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": g === e.key,
                                        children: (0, i.jsx)(G.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, i.jsxs)(ty.D, {
                                className: s()(t4.zD, t4.Kl, (r || "custom" === p) && t4.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: ey.intl.string(eC.default.tv9apA),
                                    }),
                                    (0, i.jsx)(G.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: t4.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: t4.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: t4.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: t4._2,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t4.bk,
                                        "aria-hidden": !0,
                                        children: ey.intl.string(eC.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: t4.h0,
                                        children: [
                                            (0, i.jsx)(tW.l, {
                                                label: ey.intl.string(eC.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: o,
                                                onChange: y,
                                                maxValue: u ?? f,
                                            }),
                                            null != o &&
                                                (0, i.jsx)(m.m, {
                                                    text: ey.intl.string(ey.t.VkKicb),
                                                    children: (0, i.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tZ.P,
                                                        onClick: () => y(null),
                                                        "aria-label": ey.intl.string(ey.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: t4._2,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: t4.bk,
                                        "aria-hidden": !0,
                                        children: ey.intl.string(eC.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: t4.h0,
                                        children: [
                                            (0, i.jsx)(tW.l, {
                                                label: ey.intl.string(eC.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: u,
                                                onChange: b,
                                                minValue: o ?? void 0,
                                                maxValue: f,
                                            }),
                                            null != u &&
                                                (0, i.jsx)(m.m, {
                                                    text: ey.intl.string(ey.t.VkKicb),
                                                    children: (0, i.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tZ.P,
                                                        onClick: () => b(null),
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
                        (0, i.jsx)("div", {
                            className: t4.dS,
                            children: (0, i.jsx)(eH.Q, { size: "sm", text: ey.intl.string(ey.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var le = l(103552),
    lt = l(914427),
    ll = l(213424);
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
        d = a.useRef(null),
        u = a.useMemo(() => new Set(n), [n]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tN()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            le.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: ll.H, children: e.icon }),
                                    (0, i.jsx)(le.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(le.x4.Checkbox, {}) : (0, i.jsx)(le.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(lt.p, {
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
            (0, i.jsx)(e1.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tB.a,
                iconPosition: "end",
            }),
    });
}
var la = l(941886);
function ln(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: la.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: la.Kk, children: l }),
            (0, i.jsx)(G.E, {
                className: la.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(ty.D, {
                className: la.DT,
                onClick: a,
                "aria-label": n ?? ey.intl.string(ey.t.N86XcP),
                children: (0, i.jsx)(tZ.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var ls = l(841765);
let lr = { all: eC.default.lscwjQ, auto: eC.default.xrOIkz, manual: eC.default.D7HSLJ };
function lc() {
    let e = (0, td.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? t6(e) : ey.intl.string(eC.default.upqksT);
    return (0, i.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t8, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(e1.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tB.a,
                iconPosition: "end",
            }),
    });
}
function lo() {
    let e = (0, td.P)((e) => e.sortOrder),
        t = (0, td.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        },
        s = e === z.mu.OLDEST ? ey.intl.string(ey.t["0gitSE"]) : ey.intl.string(ey.t["4LLKx3"]);
    return (0, i.jsx)(tf.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tk.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ey.intl.string(ey.t.XvNMNk),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tL.rX, {
                    children: [
                        (0, i.jsx)(tL.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ey.intl.string(ey.t["4LLKx3"]),
                            action: () => {
                                n(z.mu.MOST_RECENT), l();
                            },
                            checked: e === z.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(tL.iD, {
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
            (0, i.jsx)(e1.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: tX.J }),
    });
}
function ld() {
    let e = (0, td.P)((e) => e.clipMethodFilter),
        t = (0, td.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        };
    return (0, i.jsx)(tf.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tk.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": ey.intl.string(eC.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tL.rX, {
                    children: [
                        (0, i.jsx)(tL.iD, {
                            id: "method-all",
                            group: "method",
                            label: ey.intl.string(eC.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, i.jsx)(tL.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ey.intl.string(eC.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, i.jsx)(tL.iD, {
                            id: "method-manual",
                            group: "method",
                            label: ey.intl.string(eC.default.D7HSLJ),
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
            (0, i.jsx)(e1.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ey.intl.string(eC.default["kIqbb/"]),
                icon: tB.a,
                iconPosition: "end",
            }),
    });
}
function lu(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, td.P)((e) => e.query),
        r = (0, td.P)((e) => e.setQuery),
        c = (0, td.P)((e) => e.pendingSearchFocus),
        o = (0, td.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, td.P)((e) => e.activeMainLink),
        m = (0, td.P)((e) => e.clipMethodFilter),
        h = (0, td.P)((e) => e.setClipMethodFilter),
        x = (0, td.P)((e) => e.gameFacet),
        f = (0, td.P)((e) => e.clippedWithFacet),
        j = (0, td.P)((e) => e.selectedGameIds),
        v = (0, td.P)((e) => e.selectedUserIds),
        C = (0, td.P)((e) => e.selectedGuildId),
        y = (0, td.P)((e) => e.selectedActivity),
        b = (0, td.P)((e) => e.dateFilter),
        A = (0, td.P)((e) => e.toggleGameId),
        N = (0, td.P)((e) => e.toggleUserId),
        k = (0, td.P)((e) => e.setSelectedGuildId),
        w = (0, td.P)((e) => e.setSelectedActivity),
        P = (0, td.P)((e) => e.setDateFilter),
        D = (0, td.P)((e) => e.clearFilters);
    a.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let S = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(j),
            date_filter_range: null != b ? b.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != C,
            filtered_by_participants: null != f || v.size > 0,
            filtered_by_favorites: u === z.oH.FAVORITES,
            filtered_by_activity: null != y,
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
            S.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== S.current && ((S.current = t), eu.default.track(ew.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, j, b, C, f, v, u, y]);
    let M = a.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, L.A)(M),
        _ = a.useMemo(() => new Map(T.map((e) => [e?.id, e])), [T]),
        R = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(E.A, { game: _.get(e.key), size: E.M.XSMALL }),
                })),
            [l, _],
        ),
        F = a.useMemo(
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
        O = a.useMemo(
            () =>
                F.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(tq.Ay, { guild: e.guild, size: tq.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        H = a.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
        G = a.useMemo(
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
        U = a.useMemo(
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
                    icon: (0, i.jsx)(p.eu, { src: e.avatarUrl, size: g._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        K = a.useMemo(() => (null != C ? new Set([C]) : new Set()), [C]),
        V = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        $ = a.useCallback(
            (e) => {
                k(C === e ? null : e);
            },
            [C, k],
        ),
        Q = a.useCallback(
            (e) => {
                w(y === e ? null : e);
            },
            [y, w],
        ),
        Y = null == x,
        B = null == f,
        X = t_() && u !== z.oH.AUTO_CLIPS,
        q = ey.intl.string(lr[m]),
        W = (0, i.jsxs)(i.Fragment, {
            children: [
                Y &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, i.jsx)(
                            ln,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(E.A, { game: _.get(e), size: E.M.XSMALL }),
                                onRemove: () => A(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != b && (0, i.jsx)(ln, { label: t6(b), onRemove: () => P(null) }, "date"),
                null != C &&
                    (0, i.jsx)(
                        ln,
                        {
                            label: O.find((e) => e.key === C)?.label ?? C,
                            icon:
                                null != H.get(C)
                                    ? (0, i.jsx)(tq.Ay, { guild: H.get(C), size: tq.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                B && Array.from(v).map((e) => (0, i.jsx)(lm, { userId: e, onRemove: () => N(e) }, `user-${e}`)),
                null != y && (0, i.jsx)(ln, { label: y, onRemove: () => w(null) }, "activity"),
                X && "all" !== m && (0, i.jsx)(ln, { label: q, onRemove: () => h("all") }, "method"),
            ],
        }),
        Z = (Y && j.size > 0) || null != b || null != C || (B && v.size > 0) || null != y || (X && "all" !== m);
    return (0, i.jsxs)("div", {
        className: ls.kT,
        children: [
            (0, i.jsxs)("div", {
                className: ls.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: ls.MT,
                        children: (0, i.jsx)(tC.I, {
                            ref: d,
                            placeholder: ey.intl.string(ey.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ls.Zq,
                        children: [
                            X && (0, i.jsx)(ld, {}),
                            Y &&
                                R.length > 0 &&
                                (0, i.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: A,
                                    multiSelect: !0,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(lc, {}),
                            O.length > 0 &&
                                (0, i.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t["5qyruI"]),
                                    options: O,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            B &&
                                U.length > 0 &&
                                (0, i.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t.YQ6dJg),
                                    options: U,
                                    selectedKeys: v,
                                    onToggle: (e) => N(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, i.jsx)(li, {
                                    triggerLabel: ey.intl.string(ey.t.agRtPG),
                                    options: G,
                                    selectedKeys: V,
                                    onToggle: Q,
                                    multiSelect: !1,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ls.QZ, children: (0, i.jsx)(lo, {}) }),
                ],
            }),
            Z &&
                (0, i.jsxs)("div", {
                    className: ls.eH,
                    children: [
                        W,
                        (0, i.jsx)(eH.Q, {
                            size: "sm",
                            variant: "primary",
                            text: ey.intl.string(ey.t.O8k7O4),
                            onClick: D,
                        }),
                    ],
                }),
        ],
    });
}
function lm(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, d.bG)([I.default], () => I.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(ln, {
        label: n,
        icon: (0, i.jsx)(p.eu, { src: a.getAvatarURL(null, 32), size: g._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
let lh = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var lx = l(505124),
    lp = l(43990),
    lg = l(449543),
    lf = l(152858);
function lj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lv = l(452143);
function lC(e) {
    let { clips: t, onEdit: l } = e,
        n = a.useMemo(() => lj(t), [t]),
        { backgroundComponent: r, handleHoverChange: c } = (function () {
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
                                { src: e.previousThumbnail, className: lv.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${lv.Tp} ${lv.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        { enabled: o } = M.O.useConfig({ location: "AutoClipsReviewCarousel" }),
        d = (0, td.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, i.jsx)(lp.N, {
              theme: lx.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(lv.uW, e),
                      "aria-label": ey.intl.string(eC.default.efLpNC),
                      children: [
                          r,
                          (0, i.jsxs)("div", {
                              className: lv.wx,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: lv.mX,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: lv.UP,
                                              children: [
                                                  (0, i.jsx)(tD.B, { size: "refresh_sm", color: "white" }),
                                                  (0, i.jsx)(G.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: ey.intl.string(eC.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(f.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: lv.DD,
                                              children: ey.intl.string(eC.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  o &&
                                      (0, i.jsx)("div", {
                                          className: lv.BX,
                                          children: (0, i.jsx)(e1.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(z.oH.AUTO_CLIPS),
                                              text: ey.intl.string(eC.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsx)(lg.A, {
                              className: lv.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: lf.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ey.intl.string(eC.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: o ? lv.v2 : lv.cW,
                                          onMouseEnter: o ? () => c(t) : void 0,
                                          onMouseLeave: o ? () => c(null) : void 0,
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: o
                                              ? (0, i.jsx)(tt, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                })
                                              : (0, i.jsx)(eI, {
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
    lb = l(765548),
    lA = l(569926),
    lN = l(486020),
    lk = l(251287);
function lL(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: r,
            onClipClick: c,
            animateEntrance: o,
            entranceRowOffset: u,
        } = e,
        { data: m } = (0, lA.I)(t.applicationId),
        h = (0, td.P)((e) => e.setGameFacet),
        x = (0, td.P)((e) => e.setActiveMainLink),
        p = t.applicationId,
        j = null != p && "" !== p,
        v = a.useCallback(() => {
            null != p && "" !== p && (h(p), x(z.oH.ALL_CLIPS));
        }, [p, h, x]),
        C = a.useCallback(() => {
            j ? v() : x(z.oH.ALL_CLIPS);
        }, [j, v, x]),
        y = a.useMemo(
            () =>
                null == m
                    ? null
                    : null != m.bannerHash && "" !== m.bannerHash
                      ? (lN.Ay.getGameAssetURL({ id: m.id, hash: m.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (m.screenshotUrls?.[0] ?? null),
            [m],
        ),
        b = (0, d.yK)([I.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => I.default.getUser(e)).filter(eh.Vq);
        }),
        A = (0, e3.e)({ timestamp: t.startedAt }),
        [N, k] = a.useState(800),
        L = (0, lb.A)((e) => {
            k(e.target.clientWidth);
        }),
        w = (0, ly.w)(L),
        P = Math.max(1, (N - 32) / 3),
        D = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        S = t.clips.length > 6;
    return (0, i.jsxs)("section", {
        className: lk.dZ,
        children: [
            (0, i.jsx)("div", {
                className: s()(lk.tB, null == y && lk.rD),
                style: null != y ? { backgroundImage: `url(${y})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
                className: lk.wx,
                children: [
                    j
                        ? (0, i.jsx)(B.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: lk.Zn,
                              children: (0, i.jsx)(E.A, {
                                  className: lk.Gt,
                                  game: m,
                                  size: E.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)(E.A, { className: lk.Gt, game: m, size: E.M.MEDIUM, "aria-hidden": !0 }),
                    (0, i.jsxs)("div", {
                        className: lk.TK,
                        children: [
                            j
                                ? (0, i.jsx)(B.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: lk.wb,
                                      children: (0, i.jsx)(f.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lk.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, i.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lk.mO,
                                      children: t.applicationName,
                                  }),
                            (0, i.jsxs)("div", {
                                className: lk.mI,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ey.intl.format(eC.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, i.jsx)("span", { className: lk.TG, "aria-hidden": "true" }),
                                    (0, i.jsx)(G.E, { variant: "text-xs/normal", color: "text-muted", children: A }),
                                    b.length > 0 &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("span", { className: lk.TG, "aria-hidden": "true" }),
                                                (0, i.jsx)(Y.A, { users: b, maxUsers: 5, size: g._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                ref: w,
                className: lk.Vg,
                children: D.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: lk.UX,
                            children: e.map((e, a) => {
                                let s = { width: P };
                                return (
                                    o && (s["--custom-entrance-delay"] = `${tu(u + t + a)}ms`),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: o ? th.$ : void 0,
                                            style: s,
                                            children: (0, i.jsx)(tt, {
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
            S &&
                (0, i.jsx)("div", {
                    className: lk.Vc,
                    children: (0, i.jsx)(e1.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ey.intl.string(eC.default.pqk9U0),
                        onClick: C,
                    }),
                }),
        ],
    });
}
var lE = l(177435);
function lw(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: c } = lh.useConfig({ location: "ClipsGalleryHome" }),
        o = a.useMemo(() => lj(t), [t]),
        u = c && o.length > 0,
        m = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        h = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().length > 0),
        x = (0, td.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            x(z.oH.ALL_CLIPS);
        }, [x]),
        g = a.useMemo(() => {
            let e = u ? new Set(o.map((e) => e.id)) : null;
            return (function (e) {
                let t = [...e].sort((e, t) => t.createdAt - e.createdAt),
                    l = [],
                    i = null;
                for (let e of t) {
                    let t = i?.clips[i.clips.length - 1],
                        a = null != i && i.applicationId === e.applicationId,
                        n = null != t && t.createdAt - e.createdAt <= 144e5;
                    null != i && a && n
                        ? i.clips.push(e)
                        : ((i = {
                              id: e.id,
                              applicationId: e.applicationId,
                              applicationName: e.applicationName,
                              startedAt: e.createdAt,
                              clips: [e],
                          }),
                          l.push(i));
                }
                return l;
            })(null == e ? t : t.filter((t) => !e.has(t.id))).slice(0, 3);
        }, [t, u, o]),
        j = (0, d.bG)([b.Ay], () => b.Ay.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of g) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [g]);
    return g.length > 0 || u
        ? (0, i.jsx)(tb.Ip, {
              className: lE.iR,
              fade: !0,
              children: (0, i.jsxs)("div", {
                  className: lE.Qs,
                  children: [
                      u && (0, i.jsx)("div", { className: lE.Dk, children: (0, i.jsx)(lC, { clips: t, onEdit: n }) }),
                      g.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: ey.intl.string(eC.default.zfTWDE),
                                  }),
                                  g.map((e, t) =>
                                      (0, i.jsx)(
                                          lL,
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
                                  (0, i.jsx)("div", {
                                      className: lE.dp,
                                      children: (0, i.jsx)(e1.$, {
                                          variant: "primary",
                                          text: ey.intl.string(eC.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, i.jsx)("div", { className: lE.dc, children: (0, i.jsx)(U.y, {}) })
          : (0, i.jsx)(eq, { isEmptyBecauseQuery: l > 0 });
}
var lP = l(409067),
    lI = l(696016),
    lD = l(847455);
let lS = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lM(e) {
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
        [Y, B] = a.useState(new Set()),
        {
            gamesFacet: X,
            participantsFacet: q,
            distributedClipInitiatorsFacet: W,
            filteredClips: Z,
            mainLinkCounts: J,
            mainLinkNewCounts: ee,
            allClips: et,
        } = (0, lP.ad)(),
        { enabled: el } = M.O.useConfig({ location: "ClipsGalleryModal" }),
        ei = (0, d.bG)([D.Ay], () => D.Ay.getSettings().storageLocation),
        [ea, en] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            en(!0);
            try {
                await (0, T.Fb)(ei);
            } finally {
                en(!1);
            }
        })().catch(() => {});
    }, [ei]);
    let { onShareClick: es } = (0, O.A)(t);
    a.useEffect(
        () => () => {
            td.P.getState().resetAll(), (0, T.Su)();
        },
        [],
    ),
        a.useEffect(() => {
            if (!el) return;
            let e = td.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(V);
        }, [el, V]),
        (0, c.l0)(() => {
            D.Ay.getClipIds().length > 0 && P.A.isDeveloper && w.Ay.fireSurveyAction(o.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let er = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().length > 0),
        [ec, eo] = a.useState(null != K ? "editing" : "gallery"),
        [ed, eu] = a.useState(K ?? null),
        em = (0, d.bG)([D.Ay], () => (null != ed ? D.Ay.getClipById(ed) : null), [ed]),
        eh = (0, u.useIsModalAtTop)(lI.nm),
        ex = a.useRef(ec);
    (ex.current = ec), (a.useRef(ed).current = ed);
    let [ep, eg] = a.useState(null != K ? x.ip.ENTERED : x.ip.HIDDEN),
        ef = a.useRef(null),
        ej = (0, td.P)((e) => e.gameFacet),
        ev = (0, td.P)((e) => e.clippedWithFacet),
        eb = (0, td.P)((e) => e.activeMainLink),
        eA = (0, td.P)((e) => e.currentPage),
        eN = (0, td.P)(
            (e) =>
                "" !== e.query.trim() ||
                e.selectedGameIds.size > 0 ||
                e.selectedUserIds.size > 0 ||
                null != e.selectedGuildId ||
                null != e.selectedActivity ||
                null != e.dateFilter ||
                "all" !== e.clipMethodFilter,
        );
    a.useEffect(() => {
        eb === z.oH.HOME && eN && td.P.getState().setActiveMainLink(z.oH.ALL_CLIPS);
    }, [eb, eN]);
    let ek = a.useMemo(() => (null != ej ? [ej] : []), [ej]),
        eL = (0, L.A)(ek)[0] ?? null,
        eE = (0, d.bG)([I.default], () => (null != ev ? I.default.getUser(ev) : null), [ev]),
        ew = a.useMemo(() => {
            if (null != ej) {
                let e = X.find((e) => e.key === ej)?.name ?? ey.intl.string(ey.t.dPVrEv);
                return { icon: (0, i.jsx)(E.A, { game: eL, size: E.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != ev) {
                let e = null != eE ? (eE.globalName ?? eE.username) : ev;
                return {
                    icon:
                        null != eE
                            ? (0, i.jsx)(p.eu, {
                                  src: eE.getAvatarURL(null, 32),
                                  size: g._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eb === z.oH.FAVORITES
                ? { icon: null, title: ey.intl.string(ey.t["9rlCk1"]) }
                : eb === z.oH.AUTO_CLIPS
                  ? { icon: null, title: ey.intl.string(eC.default.ikNKf1) }
                  : eb === z.oH.HOME
                    ? { icon: null, title: ey.intl.string(ey.t.Ym2Ri6) }
                    : { icon: null, title: ey.intl.string(ey.t.dPVrEv) };
        }, [ej, ev, eb, X, eL, eE]),
        eP = a.useCallback(() => {
            eo("editing"), b.Ay.useReducedMotion && eg(x.ip.ENTERED);
        }, []),
        eI = a.useCallback((e) => {
            B((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eD = a.useCallback(
            (e) => {
                eu(e.id), eP();
            },
            [eP],
        ),
        eS = a.useCallback(() => {
            b.Ay.useReducedMotion && eu(null), eo("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === ex.current && eh && (e.stopPropagation(), eS());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eS, n, eh]),
        a.useEffect(
            () =>
                "editing" === ec && null != ed
                    ? void (0, T.YK)(ed)
                    : ((0, T.TE)(),
                      () => {
                          (0, T.TE)();
                      }),
            [ec, ed],
        );
    let eM = a.useCallback(() => {
            B(new Set());
        }, []),
        eT = Y.size > 0,
        e_ = a.useCallback(() => {
            let e = et.filter((e) => Y.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
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
        eR = a.useCallback(async () => {
            let e = et.filter((e) => Y.has(e.id));
            await es({ clips: e }), eM();
        }, [et, Y, es, eM]),
        eF = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                et.forEach((i) => {
                    switch (i.decision?.signal?.type) {
                        case S.Gy.MANUAL:
                            l++;
                            break;
                        case S.Gy.DISTRIBUTED:
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
                    gallery_page: eb,
                }
            );
        }, [et, eb]);
    (0, k.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: eF },
        { disableTrack: ea },
        [eF, ea],
    );
    let eO = a.useMemo(
        () => ({ selectedClipIds: Y, toggleClipSelection: eI, clearSelection: eM, isMultiSelectMode: eT }),
        [Y, eI, eM, eT],
    );
    return (0, i.jsx)(N.f5, {
        value: Q,
        children: (0, i.jsx)(lS.Provider, {
            value: eO,
            children: (0, i.jsx)(h.N, {
                onClose: n,
                transitionState: U,
                ...$,
                children: (0, i.jsxs)("div", {
                    className: lD.jT,
                    ref: ef,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(lD.PD, "gallery" === ec && lD.vu),
                            inert: "gallery" !== ec,
                            children: [
                                (0, i.jsx)(tQ, {
                                    gamesFacet: X,
                                    participantsFacet: q,
                                    distributedClipInitiatorsFacet: W,
                                    mainLinkCounts: J,
                                    mainLinkNewCounts: ee,
                                    allClips: et,
                                    filteredClips: Z,
                                    withHeaderFilters: !el,
                                }),
                                (0, i.jsxs)("div", {
                                    className: lD.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: lD.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: lD.Rj,
                                                    children: [
                                                        ew.icon,
                                                        (0, i.jsx)(f.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: ew.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: lD.$s,
                                                    children: [
                                                        eT &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(m.m, {
                                                                        text: ey.intl.string(ey.t.RDE0Sc),
                                                                        children: (0, i.jsx)(j.K, {
                                                                            onClick: eR,
                                                                            icon: v.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ey.intl.string(ey.t.RDE0Sc),
                                                                            loading: er,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(m.m, {
                                                                        text: ey.intl.string(ey.t.oyYWHE),
                                                                        children: (0, i.jsx)(j.K, {
                                                                            onClick: e_,
                                                                            icon: C.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": ey.intl.string(ey.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(j.K, {
                                                            onClick: n,
                                                            icon: y.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ey.intl.string(ey.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        el && eA === z.fB.HOME
                                            ? (0, i.jsx)(lw, {
                                                  filteredClips: Z,
                                                  totalClipCount: et.length,
                                                  onEdit: eD,
                                                  onClipClick: G,
                                                  isLoading: ea,
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      el &&
                                                          (0, i.jsx)(lu, {
                                                              allClips: et,
                                                              gamesFacet: X,
                                                              participantsFacet: q,
                                                          }),
                                                      (0, i.jsx)(tg, {
                                                          onEdit: eD,
                                                          channelId: t,
                                                          filteredClips: Z,
                                                          totalClipCount: et.length,
                                                          onClipClick: G,
                                                          isLoading: ea,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(lD.jN, "editing" === ec && lD.vu),
                            inert: "editing" !== ec,
                            onTransitionEnd: () => {
                                switch (ec) {
                                    case "gallery":
                                        eu(null), eg(x.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        eg(x.ip.ENTERED);
                                }
                            },
                            children:
                                null != em &&
                                (0, i.jsxs)(F.p, {
                                    clip: em,
                                    modalContainerRef: ef,
                                    children: [
                                        (0, i.jsx)(_.A, { transitionState: ep, onClose: eS }),
                                        (0, i.jsx)(R.A, { channelId: t, onClose: eS }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
