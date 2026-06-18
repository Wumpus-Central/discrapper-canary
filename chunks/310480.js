l.d(t, { $: () => lT, default: () => l_ });
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
    S = l(274372),
    D = l(372684),
    M = l(334686),
    T = l(315240),
    _ = l(582633),
    R = l(309777),
    F = l(429364),
    O = l(352527),
    z = l(280483),
    H = l(111994);
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
    ex = l(53677);
function ep(e) {
    if (null == e.editMetadata) return !1;
    let t = (e, t) => 100 > Math.abs(e - t),
        l =
            !t(1e3 * e.editMetadata.start, e.originalStartMs ?? 0) ||
            !t(1e3 * e.editMetadata.end, e.originalEndMs ?? e.length),
        i =
            !1 === e.editMetadata.applicationAudio ||
            !1 === e.editMetadata.voiceAudio ||
            !1 === e.editMetadata.soundboardAudio;
    return l || i;
}
var eg = l(226421),
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
    let a = (0, d.bG)([P.default], () => P.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(m.m, {
        text: ey.intl.string(eb.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: eA.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eA.$, alt: n }),
                (0, i.jsx)(G.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: ey.intl.formatToPlainString(eb.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function ek(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(m.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eA.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(G.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eL(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === D.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case D.Gy.DISTRIBUTED:
            return (0, i.jsx)(eN, { clip: t });
        case D.Gy.LAUGHTER:
            return (0, i.jsx)(ek, {
                icon: ev.n,
                text: ey.intl.string(eb.default.bTC23D),
                tooltipText: ey.intl.string(eb.default["ry+jxm"]),
            });
        case D.Gy.GAME_EVENT:
            return (0, i.jsx)(ek, {
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
    eI = l(652215),
    eP = l(798594);
let eS = function (e) {
    let { clip: t, actionsDisabled: n, isNew: r, onEdit: c, onClick: o, onHoverChange: u } = e,
        m = (0, d.yK)([P.default], () => t.users.map((e) => P.default.getUser(e)).filter(eh.Vq)),
        h = (0, d.bG)([ec.A], () => (null != t.channelId ? ec.A.getChannel(t.channelId) : null)),
        x = (0, d.bG)([eo.A], () => (null != t.guildId ? eo.A.getGuild(t.guildId) : null)),
        { analyticsLocations: p } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: j, isMultiSelectMode: v } = a.useContext(lT),
        [C, b] = a.useState(!1),
        y = a.useRef(null),
        k = (0, Q.A)(t.editMetadata?.start ?? 0),
        L = f.has(t.id),
        E = t.type === D.nQ.SCREENSHOT,
        w = (0, es.Ay)(h),
        I = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        M = (0, em.Fe)(new Date(t.createdAt)),
        T = a.useMemo(() => {
            let e = [];
            return (
                t.type === D.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != w && e.push(w))
                    : ("" !== I && null != I && e.push(I),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [I, x?.name, w, t.activity?.state, t.activity?.details, t.type]),
        _ = a.useCallback(() => {
            let e = y.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        R = a.useCallback(() => {
            if ((u?.("" !== t.thumbnail ? t.thumbnail : null), !0 === E)) return;
            let e = y.current;
            null != e && e.paused && ((e.currentTime = k.current), y.current?.play());
        }, [E, k, u, t.thumbnail]),
        F = a.useCallback(() => {
            if ((u?.(null), !0 === E)) return;
            let e = y.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [E, t.editMetadata?.start, u]),
        O = a.useCallback(
            (e) => {
                (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) || F();
            },
            [F],
        ),
        z = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        H = a.useCallback(() => {
            b(!1);
        }, []),
        U = a.useCallback(
            (e) => {
                b(!0), y.current?.pause();
                let a =
                    v && f.size > 0
                        ? Array.from(f)
                              .map((e) => S.Ay.getClipById(e))
                              .filter(eh.Vq)
                        : [t];
                (0, ea.L3)(
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
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: n,
                                onShare: () => {
                                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ex.lc("ClipItem.onShare"),
                                        ...ex.Zy(t),
                                    });
                                },
                                onEdit: () => {
                                    c(t),
                                        eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ex.lc("ClipItem.onEdit"),
                                            ...ex.Zy(t),
                                        });
                                },
                                onBeforeDelete: _,
                                onAfterDelete: () => {
                                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...ex.lc("ClipItem.onAfterDelete"),
                                        ...ex.Zy(t),
                                    });
                                },
                            });
                    },
                    { onClose: H },
                );
            },
            [t, v, f, n, _, H, c],
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
                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_CLICKED, {
                        ...ex.lc("ClipItem.handleClick"),
                        ...ex.Zy(t),
                    }));
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
                    (0, i.jsx)(eD, { clip: t, isNew: r, videoRef: y, onOpenContextMenu: U, actionsDisabled: n }),
                    (0, i.jsxs)("div", {
                        className: eP.wI,
                        children: [
                            (0, i.jsx)(e_, { clip: t }),
                            (0, i.jsxs)("div", {
                                className: eP.i0,
                                children: [
                                    (0, i.jsx)(eM, { clip: t }),
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
                                    onClickOverflow: z,
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
    let h = ep(t),
        x = a.useMemo(() => {
            let e = t.length;
            if (null != t.editMetadata) {
                let l = t.editMetadata.end - t.editMetadata.start;
                1e3 * l < t.length && (e = 1e3 * l);
            }
            let l = $().duration(e),
                i = l.minutes(),
                a = l.seconds();
            return 0 === i ? `${a}s` : `${i}:${a.toString().padStart(2, "0")}`;
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
            (0, i.jsx)(eT, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eP.ry,
                children: [
                    !o && l && (0, i.jsx)(X.Lp, { text: ey.intl.string(ey.t.y2b7CA) }),
                    (0, i.jsx)(eL, { clip: t }),
                ],
            }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eP.g3,
                    children: [
                        (0, i.jsx)(m.m, {
                            text: ey.intl.string(t.isFavorite ? eb.default.IZsalP : eb.default.ihBfyA),
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
                                h && (0, i.jsx)(ed.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(G.E, {
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
                (0, i.jsx)("div", {
                    className: eP.X7,
                    children: (0, i.jsx)("div", { className: eP.Z2, style: { width: `${d}%` } }),
                }),
        ],
    });
}
function eM(e) {
    let { clip: t } = e,
        l = (0, ew.h)(t),
        a = "" !== l;
    return (0, i.jsx)(G.E, {
        className: eP.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function eT(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, eE.j)(t),
        n = t.type === D.nQ.SCREENSHOT;
    return t.type === D.nQ.VOICE_CLIP
        ? (0, i.jsx)(eg.A, { className: eP.fT })
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
function e_(e) {
    let { clip: t } = e,
        l = (0, d.bG)([en.A], () => (null != t.applicationId ? en.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eP.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eP.NH })
                : t.type === D.nQ.VOICE_CLIP
                  ? (0, i.jsx)(el.H, { size: "sm" })
                  : (0, i.jsx)(ei.k, { size: "sm" }),
    });
}
function eR(e) {
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
var eF = l(702841),
    eO = l(687966),
    ez = l(475358),
    eH = l(123292),
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
    return (0, i.jsxs)("div", {
        className: eB.Nr,
        children: [t, (0, i.jsx)(G.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eq() {
    let e = (0, eF.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eI.hCu.SAVE_CLIP)),
        t = null != e ? e$.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: eB.kR,
        children: [
            (0, i.jsx)(eX, {
                header: (0, i.jsx)(eO._, { size: "refresh_sm", color: et.A.colors.ICON_DEFAULT }),
                description: ey.intl.string(eb.default["4K56sP"]),
            }),
            (0, i.jsx)(eX, {
                header: null != t ? (0, i.jsx)(ez.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  ey.intl.format(eb.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: eB.JH,
                                      children: (0, i.jsx)(eH.Q, {
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
            (0, i.jsx)(eX, {
                header: (0, i.jsx)(eG.t, { size: "refresh_sm", color: et.A.colors.ICON_DEFAULT }),
                description: ey.intl.string(eb.default.DLzdl7),
            }),
        ],
    });
}
function eW(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eQ.Et)();
    return (0, i.jsx)("div", {
        className: eB.kL,
        children: (0, i.jsxs)("div", {
            className: eB.Qs,
            children: [
                (0, i.jsx)(eR, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(f.D, {
                    className: eB.wx,
                    variant: "heading-xl/semibold",
                    children: t ? ey.intl.string(eb.default["+M2iLf"]) : ey.intl.string(eb.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(G.E, {
                        className: eB.h_,
                        variant: "text-md/medium",
                        children: ey.intl.string(eb.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: eB.SO, children: (0, i.jsx)(eY.A, {}) }),
                l && !t && (0, i.jsx)(eq, {}),
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
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(e5.Cl, {
        clip: t,
        children: (0, i.jsx)(ti, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function ti(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, e5.Y_)(),
        { analyticsLocations: d } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(lT),
        [x, p] = a.useState(!1),
        [g, f] = a.useState(!1),
        [j, v] = a.useState(!1),
        [C, b] = a.useState(0),
        y = u.has(o.id),
        k = o.type === D.nQ.SCREENSHOT,
        L = (g || x) && !y;
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
        I = a.useCallback(() => p(!1), []),
        P = a.useCallback(
            (e) => {
                p(!0);
                let a =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => S.Ay.getClipById(e))
                              .filter(eh.Vq)
                        : [o];
                (0, ea.L3)(
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
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: t,
                                onShare: () => {
                                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...ex.lc("ClipsGalleryCard.onShare"),
                                        ...ex.Zy(o),
                                    });
                                },
                                onEdit: () => {
                                    c(o),
                                        eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...ex.lc("ClipsGalleryCard.onEdit"),
                                            ...ex.Zy(o),
                                        });
                                },
                                onBeforeDelete: w,
                                onAfterDelete: () => {
                                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...ex.lc("ClipsGalleryCard.onAfterDelete"),
                                        ...ex.Zy(o),
                                    });
                                },
                            });
                    },
                    { onClose: I },
                );
            },
            [o, h, u, t, I, c, w],
        ),
        M = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), P(e));
            },
            [t, P],
        ),
        T = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), P(e);
            },
            [P],
        ),
        _ = a.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c(o),
                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        R = a.useCallback(
            (e) => {
                !t &&
                    (!(0, eJ.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    eu.default.track(eI.HAw.CLIP_GALLERY_CARD_CLICKED, {
                        ...ex.lc("ClipsGalleryCard.handleClick"),
                        ...ex.Zy(o),
                    }));
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
            className: s()(tt.Nr, { [tt.r9]: t, [tt.in]: x, [tt.wH]: y }),
            onMouseEnter: () => f(!0),
            onMouseLeave: () => f(!1),
            children: [
                (0, i.jsx)("div", {
                    className: tt.w7,
                    children: (0, i.jsxs)(ta, {
                        ref: E,
                        isPlaying: j,
                        onProgressChange: b,
                        children: [
                            (0, i.jsx)(tn, { isNew: n }),
                            L && !t ? (0, i.jsx)(ts, { onMenu: T, onBeforeDelete: w }) : (0, i.jsx)(tr, {}),
                            (0, i.jsx)("div", { className: tt.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, i.jsx)(tc, { showHoverState: L, playbackProgress: C, onEdit: _ }),
            ],
        }),
    });
}
let ta = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: n } = e;
    return (0, i.jsx)(e8.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, i.jsx)(te.h, { isVisible: !0, children: n }),
    });
});
function tn(e) {
    let { isNew: t } = e,
        l = (0, e5.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: tt.zV,
        children: [
            !a &&
                t &&
                (0, i.jsx)("div", {
                    className: tt.Ad,
                    children: (0, i.jsx)(G.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: ey.intl.string(ey.t.y2b7CA),
                    }),
                }),
            (0, i.jsx)(eL, { clip: l }),
        ],
    });
}
function ts(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, i.jsxs)("div", {
        className: tt.Mw,
        children: [
            (0, i.jsx)(m.m, {
                text: ey.intl.string(ey.t["UKOtz+"]),
                children: (0, i.jsx)(j.K, {
                    onClick: t,
                    icon: e1.j,
                    "aria-label": ey.intl.string(ey.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(e7.k, { onBeforeDelete: l }),
            (0, i.jsx)(e6.z, {}),
        ],
    });
}
function tr() {
    let e = (0, e5.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        n = ep(e),
        r = a.useMemo(() => {
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
        : (0, i.jsxs)("div", {
              className: s()(tt.cH, tt._s),
              children: [
                  n && (0, i.jsx)(ed.A, { color: "white", width: 14, height: 14 }),
                  (0, i.jsx)(G.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? ey.intl.string(ey.t["2Fp7OP"]) : r,
                  }),
              ],
          });
}
function tc(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a } = e,
        n = (0, e5.Y_)(),
        r = n.type === D.nQ.SCREENSHOT,
        c = (0, d.yK)([P.default], () => n.users.map((e) => P.default.getUser(e)).filter(eh.Vq)),
        o = (0, d.bG)([ec.A], () => (null != n.channelId ? ec.A.getChannel(n.channelId) : null)),
        u = (0, d.bG)([eo.A], () => (null != n.guildId ? eo.A.getGuild(n.guildId) : null)),
        m = (0, es.Ay)(o),
        h = "" === n.applicationName && null != m && "" !== m ? m : n.applicationName,
        x = (0, e9.e)({ timestamp: n.createdAt }),
        p = u?.name;
    return (0, i.jsxs)("div", {
        className: tt.yu,
        children: [
            (0, i.jsxs)("div", {
                className: tt.$,
                children: [
                    (0, i.jsx)(to, {}),
                    c.length > 0 &&
                        (0, i.jsx)("span", {
                            className: tt.HD,
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
                className: tt.SO,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(tt.Ik, { [tt.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tt.Pb,
                                children: [
                                    (0, i.jsx)(td, {}),
                                    (0, i.jsx)(G.E, {
                                        className: tt.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: h,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tt.eg,
                                children: [
                                    null != p &&
                                        "" !== p &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(G.E, {
                                                    className: tt.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                                (0, i.jsx)("span", { className: tt.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, i.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ey.intl.format(eb.default["0QCBug"], { time: x }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(tt.n_, { [tt.f$]: t }),
                        inert: !t,
                        children: [
                            !r &&
                                (0, i.jsx)("div", {
                                    className: tt.z5,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)("div", { className: tt.TE, style: { width: `${l}%` } }),
                                }),
                            (0, i.jsxs)("div", {
                                className: tt.E_,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: tt.lO,
                                        children: (0, i.jsx)(e2.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: e3.R,
                                            text: ey.intl.string(ey.t.bt75uw),
                                            onClick: a,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: tt.lO,
                                        children: (0, i.jsx)(e4.E, { variant: "primary" }),
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
    return (0, i.jsx)(G.E, {
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
    return (0, i.jsx)("div", {
        className: tt.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: tt.T_ })
                : e.type === D.nQ.VOICE_CLIP
                  ? (0, i.jsx)(el.H, { size: "xs", color: "currentColor" })
                  : (0, i.jsx)(ei.k, { size: "xs", color: "currentColor" }),
    });
}
ta.displayName = "CardThumbnail";
var tu = l(792852);
function tm(e) {
    return Math.min(45 * e, 520);
}
var th = l(352528),
    tx = l(32122);
let tp = [0, 16, 0, 16],
    tg = tp[1] + tp[3];
function tf(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: r } = e,
        [c, o] = a.useState({ width: 0, height: 0 }),
        u = (0, d.yK)([S.Ay], () => S.Ay.getNewClipIds()),
        m = (0, d.bG)([S.Ay], () => S.Ay.getExportingClipIds().size > 0),
        { enabled: h } = M.O.useConfig({ location: "ClipsGalleryContent" }),
        x = h ? tl : eS,
        p = (0, tu.P)((e) => e.activeMainLink),
        g = (0, tu.P)((e) => e.gameFacet),
        j = (0, tu.P)((e) => e.clippedWithFacet),
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
        { tileWidth: b, columns: A } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = C - tg) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, C]),
        N = a.useMemo(() => v.map((e) => Math.ceil(e.clips.length / A)), [v, A]),
        k = a.useMemo(() => N.reduce((e, t) => e + t, 0), [N]),
        L = Math.floor(b / eZ),
        E = v.length > 0 ? `${p}:${g ?? ""}:${j ?? ""}` : null,
        w = (function (e) {
            let t = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
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
        I = h && w,
        P = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = v[l];
                if (null == r) return null;
                let c = a * A,
                    o = r.clips.slice(c, c + A);
                return (0, i.jsx)(
                    "div",
                    {
                        className: th.UX,
                        children: o.map((t, l) => {
                            let a = { width: b };
                            return (
                                I && (a["--custom-entrance-delay"] = `${tm(e + l)}ms`),
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: I ? tx.$ : void 0,
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
            [v, A, b, m, u, n, s, x, I, E],
        ),
        D = a.useCallback(
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
                              className: th.aE,
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
            ? (0, i.jsx)("div", { className: th.dc, children: (0, i.jsx)(U.y, {}) })
            : (0, i.jsx)(K.A, {
                  listPadding: tp,
                  renderRow: P,
                  renderSectionHeader: T,
                  rowCount: k,
                  rowCountBySection: N,
                  rowHeight: L + (h ? 96 : 68) + 16,
                  sectionHeaderHeight: D,
                  onResize: o,
              })
        : (0, i.jsx)(eW, { isEmptyBecauseQuery: l > 0 });
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
function tI(e) {
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
        } = (0, tu.P)(),
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
                        let t = P.default.getUser(e);
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
        b = a.useMemo(
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
        [y, A] = a.useState(""),
        [N, k] = a.useState(""),
        [L, E] = a.useState(""),
        w = a.useMemo(
            () => (0 === y.trim().length ? j : j.filter((e) => tk()(y.toLowerCase(), e.name.toLowerCase()))),
            [j, y],
        ),
        I = a.useMemo(
            () => (0 === N.trim().length ? C : C.filter((e) => tk()(N.toLowerCase(), e.name.toLowerCase()))),
            [C, N],
        ),
        S = a.useMemo(
            () => (0 === L.trim().length ? v : v.filter((e) => tk()(L.toLowerCase(), e.toLowerCase()))),
            [v, L],
        ),
        D = n.size > 0 || null != s || null != r || null != g,
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
    return (0, i.jsxs)(tL.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": ey.intl.string(ey.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(tE.rX, {
                label: "Filter",
                children: [
                    j.length > 0 &&
                        (0, i.jsxs)(tE.Dr, {
                            id: "participants",
                            label: ey.intl.string(ey.t.YQ6dJg),
                            subtext: M,
                            children: [
                                j.length > 20 &&
                                    (0, i.jsx)(tE.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tw.V, {
                                                ...e,
                                                query: y,
                                                onChange: A,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                w.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        tE.sL,
                                        { id: `participant-${t}`, label: l, action: () => d(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(tE.Dr, {
                            id: "servers",
                            label: ey.intl.string(ey.t["5qyruI"]),
                            subtext: T,
                            children: [
                                C.length > 20 &&
                                    (0, i.jsx)(tE.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tw.V, {
                                                ...e,
                                                query: N,
                                                onChange: k,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tE.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                I.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
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
                        (0, i.jsxs)(tE.Dr, {
                            id: "activities",
                            label: ey.intl.string(ey.t.agRtPG),
                            subtext: _,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(tE.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(tw.V, {
                                                ...e,
                                                query: L,
                                                onChange: E,
                                                ref: t,
                                                placeholder: ey.intl.string(ey.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(tE.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                S.map((e) =>
                                    (0, i.jsx)(
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
                        (0, i.jsxs)(tE.Dr, {
                            id: "years",
                            label: ey.intl.string(ey.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, i.jsx)(tE.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: ey.intl.string(ey.t["2/yeUU"]),
                                    action: () => f(null),
                                    checked: null == g,
                                }),
                                b.map((e) =>
                                    (0, i.jsx)(
                                        tE.iD,
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
            (0, i.jsxs)(tE.rX, {
                label: ey.intl.string(ey.t.XvNMNk),
                children: [
                    (0, i.jsx)(tE.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: ey.intl.string(ey.t["4LLKx3"]),
                        action: () => x(H.mu.MOST_RECENT),
                        checked: o === H.mu.MOST_RECENT,
                    }),
                    (0, i.jsx)(tE.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: ey.intl.string(ey.t["0gitSE"]),
                        action: () => x(H.mu.OLDEST),
                        checked: o === H.mu.OLDEST,
                    }),
                ],
            }),
            D &&
                (0, i.jsx)(tE.rX, {
                    children: (0, i.jsx)(tE.Dr, { id: "clear-filters", label: ey.intl.string(ey.t.FbDgiu), action: p }),
                }),
        ],
    });
}
var tP = l(7689),
    tS = l(332837),
    tD = l(175841),
    tM = l(974293),
    tT = l(458977),
    t_ = l(526233),
    tR = l(270962);
function tF() {
    let e = (0, tM.aJ)("useIsAutoClipsAvailable"),
        t = tT.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        l = tR.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline,
        i = t_.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents;
    return e || t || l || i;
}
var tO = l(724993);
function tz(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, i.jsxs)(ty.D, {
        onClick: o ? void 0 : c,
        className: s()(tO.nM, { [tO.CZ]: n, [tO.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
        children: [
            (0, i.jsx)("span", { className: tO.aL, children: t }),
            (0, i.jsx)(G.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: tO.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: tO.iP, children: a }),
        ],
    });
}
function tH() {
    let e = (0, d.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eI.hCu.SAVE_CLIP)),
        t = (0, tu.P)((e) => e.setActiveMainLink),
        l = (0, tu.P)((e) => e.setGameFacet),
        n = (0, tu.P)((e) => e.setClippedWithFacet),
        s = (0, tu.P)((e) => e.setPendingSearchFocus),
        r = a.useCallback(() => {
            (0, eK.openUserSettings)(eU.X.CLIPS_PANEL);
        }, []),
        c = a.useCallback(() => {
            l(null), n(null), t(H.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        o = null != e ? e$.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: tO.aN,
        children: [
            (0, i.jsxs)("div", {
                className: tO.pR,
                children: [
                    (0, i.jsx)(f.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: ey.intl.string(ey.t.z2jK6X),
                    }),
                    null != o && (0, i.jsx)(ez.e, { shortcut: o }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tO.XL,
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
function tG(e) {
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
        g = (0, tu.P)((e) => e.activeMainLink),
        f =
            ((t = (0, tu.P)((e) => e.setActiveMainLink)),
            (l = (0, tu.P)((e) => e.setGameFacet)),
            (n = (0, tu.P)((e) => e.setClippedWithFacet)),
            (s = (0, tu.P)((e) => e.clearFilters)),
            a.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        j = (0, tu.P)((e) => e.gameFacet),
        v = (0, tu.P)((e) => e.clippedWithFacet),
        C = tF(),
        b = null != j || null != v;
    return (0, i.jsxs)("div", {
        className: tO.uW,
        children: [
            (0, i.jsx)(tz, {
                icon: (0, i.jsx)(tS.f, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t.Ym2Ri6),
                isSelected: ((r = H.oH.HOME), !b && g === r),
                onClick: () => f(H.oH.HOME),
            }),
            (0, i.jsx)(tz, {
                icon: (0, i.jsx)(ee.x, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t.dPVrEv),
                trailer: (0, i.jsx)(tU, { count: p.allClips }),
                isSelected: ((c = H.oH.ALL_CLIPS), !b && g === c),
                isDisabled: 0 === x.allClips && ((o = H.oH.ALL_CLIPS), !!b || g !== o),
                onClick: () => f(H.oH.ALL_CLIPS),
            }),
            C &&
                (0, i.jsx)(tz, {
                    icon: (0, i.jsx)(tD.B, { size: "sm", color: "currentColor" }),
                    label: ey.intl.string(eb.default.ikNKf1),
                    trailer: (0, i.jsx)(tU, { count: p.autoClips }),
                    isSelected: ((d = H.oH.AUTO_CLIPS), !b && g === d),
                    isDisabled: 0 === x.autoClips && ((u = H.oH.AUTO_CLIPS), !!b || g !== u),
                    onClick: () => f(H.oH.AUTO_CLIPS),
                }),
            (0, i.jsx)(tz, {
                icon: (0, i.jsx)(q.G, { size: "sm", color: "currentColor" }),
                label: ey.intl.string(ey.t["9rlCk1"]),
                trailer: (0, i.jsx)(tU, { count: p.favorites }),
                isSelected: ((m = H.oH.FAVORITES), !b && g === m),
                isDisabled: 0 === x.favorites && ((h = H.oH.FAVORITES), !!b || g !== h),
                onClick: () => f(H.oH.FAVORITES),
            }),
        ],
    });
}
function tU(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, i.jsx)(X.hV, { count: t });
}
function tK(e) {
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
            a.useCallback(
                (e, i) => {
                    null == i
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(i) : l(i), "game" === e ? l(null) : t(null), n(H.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = a.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, L.A)(u),
        h = a.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, i.jsxs)(tA.Ip, {
              className: s()(tO.uW, tO.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(f.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: tO.a9,
                      children: ey.intl.string(ey.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: tO._A,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              tz,
                              {
                                  icon: (0, i.jsx)(E.A, { game: h.get(e.key), size: E.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(tU, { count: e.newCount }),
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
function tV(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: tO.pz,
        children: [
            (0, i.jsx)(tH, {}),
            (0, i.jsxs)("div", {
                className: tO.wp,
                children: [
                    (0, i.jsx)(tG, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, i.jsx)(tK, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var t$ = l(174726);
let tQ = a.memo(function (e) {
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
            c = (0, eF.bG)([eV.Ay], () => eV.Ay.getKeybindForAction(eI.hCu.SAVE_CLIP)),
            o = a.useCallback(() => {
                (0, eK.openUserSettings)(eU.X.CLIPS_PANEL);
            }, []),
            d = a.useCallback(() => s(""), [s]),
            u = null != c ? e$.dI(c.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: t$.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: t$.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t$.Pe,
                            children: [
                                (0, i.jsx)(f.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: ey.intl.string(ey.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(ez.e, { className: t$.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: t$.$s,
                            children: [
                                t &&
                                    (0, i.jsx)(m.m, {
                                        text: ey.intl.string(ey.t.X7yRDm),
                                        children: (0, i.jsx)(tj.Y, {
                                            position: "bottom",
                                            targetElementRef: h,
                                            renderPopout: (e) => (0, i.jsx)(tI, { ...e, allClips: l }),
                                            children: (e) =>
                                                (0, i.jsx)("div", {
                                                    ref: h,
                                                    children:
                                                        r > 0
                                                            ? (0, i.jsx)(e2.$, {
                                                                  size: "sm",
                                                                  variant: "secondary",
                                                                  ...e,
                                                                  text: ey.intl.formatToPlainString(eb.default.JbyR1U, {
                                                                      count: r,
                                                                  }),
                                                                  icon: tv.R,
                                                                  iconPosition: "end",
                                                              })
                                                            : (0, i.jsx)(j.K, {
                                                                  icon: tv.R,
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
                    (0, i.jsx)("div", {
                        className: t$.MT,
                        children: (0, i.jsx)(tb.I, {
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
    tY = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(ty.D, {
            className: s()(t$.MV, { [t$.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: t$.tk,
                    children: [
                        a,
                        (0, i.jsx)(G.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: t$.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: t$.z2,
                    children: (0, i.jsx)(G.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function tB(e) {
    let { enabled: t } = M.O.useConfig({ location: "ClipsGallerySidebar" });
    return t
        ? (0, i.jsx)(tV, {
              gamesFacet: e.gamesFacet,
              distributedClipInitiatorsFacet: e.distributedClipInitiatorsFacet,
              mainLinkCounts: e.mainLinkCounts,
              mainLinkNewCounts: e.mainLinkNewCounts,
          })
        : (0, i.jsx)(tX, {
              allClips: e.allClips,
              filteredClips: e.filteredClips,
              withHeaderFilters: e.withHeaderFilters,
          });
}
function tX(e) {
    let { allClips: t, filteredClips: l, withHeaderFilters: n } = e,
        s = (0, tu.P)((e) => e.gameFacet),
        r = (0, tu.P)((e) => e.activeMainLink),
        c = (0, tu.P)((e) => e.setGameFacet),
        o = (0, tu.P)((e) => e.setActiveMainLink),
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
            o(H.oH.ALL_CLIPS), c(null);
        }, [o, c]),
        j = a.useCallback(() => {
            o(H.oH.FAVORITES), c(null);
        }, [o, c]),
        v = a.useCallback(
            (e) => {
                c(e), o(H.oH.ALL_CLIPS);
            },
            [c, o],
        ),
        C = null == s && r === H.oH.ALL_CLIPS,
        b = null == s && r === H.oH.FAVORITES;
    return (0, i.jsxs)("div", {
        className: t$.pz,
        children: [
            (0, i.jsx)(tQ, { withHeaderFilters: n, allClips: t }),
            (0, i.jsxs)("div", {
                className: t$.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: t$.om,
                        children: (0, i.jsxs)("div", {
                            className: t$.Ep,
                            children: [
                                (0, i.jsx)(tY, {
                                    name: ey.intl.string(ey.t.dPVrEv),
                                    count: u,
                                    icon: (0, i.jsx)(ee.x, {}),
                                    isSelected: C,
                                    onClick: g,
                                }),
                                (0, i.jsx)(tY, {
                                    name: ey.intl.string(ey.t["9rlCk1"]),
                                    count: m,
                                    icon: (0, i.jsx)(q.G, {}),
                                    isSelected: b,
                                    onClick: j,
                                }),
                            ],
                        }),
                    }),
                    d.length > 0 &&
                        (0, i.jsxs)(tA.Ip, {
                            className: t$.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(f.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: t$.a9,
                                    children: ey.intl.string(ey.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: t$.Ep,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            tY,
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
var tq = l(847374),
    tW = l(112173),
    tZ = l(548118),
    tJ = l(441349),
    t0 = l(789645),
    t1 = l(939546),
    t2 = l(99478);
function t3(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function t9(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function t5(e, t) {
    if (null == e && null == t) return null;
    let l = (0, t1.Xj)();
    return { preset: "custom", after: null != e ? t3(e.toDate(l)) : null, before: null != t ? t9(t.toDate(l)) : null };
}
function t7(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new t2.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t6 = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t4(e) {
    return t6.format(new Date(e));
}
function t8(e) {
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
            let t = null != e.after ? t4(e.after) : null,
                l = null != e.before ? t4(e.before) : null;
            if (null != t && null != l)
                return ey.intl.formatToPlainString(eb.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return ey.intl.formatToPlainString(eb.default.k1FkTL, { date: t });
            if (null != l) return ey.intl.formatToPlainString(eb.default["4NlpHD"], { date: l });
            return ey.intl.string(eb.default.tv9apA);
        }
    }
}
var le = l(817480);
function lt(e) {
    let { closePopout: t } = e,
        l = (0, tu.P)((e) => e.dateFilter),
        n = (0, tu.P)((e) => e.setDateFilter),
        [r, c] = a.useState(l?.preset === "custom"),
        [o, d] = a.useState(() => (l?.preset === "custom" ? t7(l.after) : null)),
        [u, h] = a.useState(() => (l?.preset === "custom" ? t7(l.before) : null)),
        x = a.useMemo(
            () => [
                { key: "today", label: ey.intl.string(eb.default.yOAWWM) },
                { key: "yesterday", label: ey.intl.string(eb.default["PtV/Ti"]) },
                { key: "last-3-days", label: ey.intl.string(eb.default.xfmv7I) },
                { key: "this-year", label: ey.intl.string(eb.default["+eE7zX"]) },
                { key: "last-year", label: ey.intl.string(eb.default.Nwj9v0) },
            ],
            [],
        ),
        p = l?.preset ?? null,
        g = r && "custom" !== p ? null : p,
        f = a.useMemo(() => (0, t1.Ec)((0, t1.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: t3(new Date(t)), before: t9(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: t3(new Date(l)), before: t9(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: t3(l), before: t9(new Date(t)) };
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
        b = a.useCallback(
            (e) => {
                d(e), n(t5(e, u));
            },
            [u, n],
        ),
        y = a.useCallback(
            (e) => {
                h(e), n(t5(o, e));
            },
            [o, n],
        ),
        A = a.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        N = null != o || null != u;
    return (0, i.jsxs)("div", {
        className: s()(le.SW, r && le.Td),
        children: [
            (0, i.jsxs)("div", {
                className: le.sh,
                children: [
                    (0, i.jsx)(G.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: le.a9,
                        children: ey.intl.string(eb.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: le.eF,
                        children: [
                            x.map((e) =>
                                (0, i.jsx)(
                                    ty.D,
                                    {
                                        className: s()(le.zD, g === e.key && le.pH),
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
                                className: s()(le.zD, le.Kl, (r || "custom" === p) && le.pH),
                                onClick: C,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: ey.intl.string(eb.default.tv9apA),
                                    }),
                                    (0, i.jsx)(G.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: le.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: le.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: le.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: le._2,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: le.bk,
                                        "aria-hidden": !0,
                                        children: ey.intl.string(eb.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: le.h0,
                                        children: [
                                            (0, i.jsx)(tJ.l, {
                                                label: ey.intl.string(eb.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: o,
                                                onChange: b,
                                                maxValue: u ?? f,
                                            }),
                                            null != o &&
                                                (0, i.jsx)(m.m, {
                                                    text: ey.intl.string(ey.t.VkKicb),
                                                    children: (0, i.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: t0.P,
                                                        onClick: () => b(null),
                                                        "aria-label": ey.intl.string(ey.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: le._2,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: le.bk,
                                        "aria-hidden": !0,
                                        children: ey.intl.string(eb.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: le.h0,
                                        children: [
                                            (0, i.jsx)(tJ.l, {
                                                label: ey.intl.string(eb.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: u,
                                                onChange: y,
                                                minValue: o ?? void 0,
                                                maxValue: f,
                                            }),
                                            null != u &&
                                                (0, i.jsx)(m.m, {
                                                    text: ey.intl.string(ey.t.VkKicb),
                                                    children: (0, i.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: t0.P,
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
                        (0, i.jsx)("div", {
                            className: le.dS,
                            children: (0, i.jsx)(eH.Q, { size: "sm", text: ey.intl.string(ey.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var ll = l(103552),
    li = l(914427),
    la = l(213424);
function ln(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tk()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            ll.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: la.H, children: e.icon }),
                                    (0, i.jsx)(ll.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(ll.x4.Checkbox, {}) : (0, i.jsx)(ll.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(tj.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(li.p, {
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
            (0, i.jsx)(e2.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tq.a,
                iconPosition: "end",
            }),
    });
}
var ls = l(941886);
function lr(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: ls.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: ls.Kk, children: l }),
            (0, i.jsx)(G.E, {
                className: ls.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(ty.D, {
                className: ls.DT,
                onClick: a,
                "aria-label": n ?? ey.intl.string(ey.t.N86XcP),
                children: (0, i.jsx)(t0.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var lc = l(841765);
let lo = { all: eb.default.lscwjQ, auto: eb.default.xrOIkz, manual: eb.default.D7HSLJ };
function ld() {
    let e = (0, tu.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? t8(e) : ey.intl.string(eb.default.upqksT);
    return (0, i.jsx)(tj.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(lt, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(e2.$, {
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
function lu() {
    let e = (0, tu.P)((e) => e.sortOrder),
        t = (0, tu.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        },
        s = e === H.mu.OLDEST ? ey.intl.string(ey.t["0gitSE"]) : ey.intl.string(ey.t["4LLKx3"]);
    return (0, i.jsx)(tj.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tL.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": ey.intl.string(ey.t.XvNMNk),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tE.rX, {
                    children: [
                        (0, i.jsx)(tE.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: ey.intl.string(ey.t["4LLKx3"]),
                            action: () => {
                                n(H.mu.MOST_RECENT), l();
                            },
                            checked: e === H.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(tE.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: ey.intl.string(ey.t["0gitSE"]),
                            action: () => {
                                n(H.mu.OLDEST), l();
                            },
                            checked: e === H.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(e2.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: s, icon: tW.J }),
    });
}
function lm() {
    let e = (0, tu.P)((e) => e.clipMethodFilter),
        t = (0, tu.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null),
        n = (e) => {
            t(e);
        };
    return (0, i.jsx)(tj.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, i.jsx)(tL.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": ey.intl.string(eb.default["kIqbb/"]),
                onClose: l,
                onSelect: void 0,
                children: (0, i.jsxs)(tE.rX, {
                    children: [
                        (0, i.jsx)(tE.iD, {
                            id: "method-all",
                            group: "method",
                            label: ey.intl.string(eb.default.lscwjQ),
                            action: () => {
                                n("all"), l();
                            },
                            checked: "all" === e,
                        }),
                        (0, i.jsx)(tE.iD, {
                            id: "method-auto",
                            group: "method",
                            label: ey.intl.string(eb.default.xrOIkz),
                            action: () => {
                                n("auto"), l();
                            },
                            checked: "auto" === e,
                        }),
                        (0, i.jsx)(tE.iD, {
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
            (0, i.jsx)(e2.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: ey.intl.string(eb.default["kIqbb/"]),
                icon: tq.a,
                iconPosition: "end",
            }),
    });
}
function lh(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, tu.P)((e) => e.query),
        r = (0, tu.P)((e) => e.setQuery),
        c = (0, tu.P)((e) => e.pendingSearchFocus),
        o = (0, tu.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
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
        I = (0, tu.P)((e) => e.setDateFilter),
        S = (0, tu.P)((e) => e.clearFilters);
    a.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let D = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(j),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != C,
            filtered_by_participants: null != f || v.size > 0,
            filtered_by_favorites: u === H.oH.FAVORITES,
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
        t !== D.current && ((D.current = t), eu.default.track(eI.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, j, y, C, f, v, u, b]);
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
                    icon: (0, i.jsx)(tZ.Ay, { guild: e.guild, size: tZ.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        z = a.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
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
                    icon: (0, i.jsx)(p.eu, { src: e.avatarUrl, size: g._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        K = a.useMemo(() => (null != C ? new Set([C]) : new Set()), [C]),
        V = a.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        $ = a.useCallback(
            (e) => {
                k(C === e ? null : e);
            },
            [C, k],
        ),
        Q = a.useCallback(
            (e) => {
                w(b === e ? null : e);
            },
            [b, w],
        ),
        Y = null == x,
        B = null == f,
        X = tF() && u !== H.oH.AUTO_CLIPS,
        q = ey.intl.string(lo[m]),
        W = (0, i.jsxs)(i.Fragment, {
            children: [
                Y &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, i.jsx)(
                            lr,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(E.A, { game: _.get(e), size: E.M.XSMALL }),
                                onRemove: () => A(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, i.jsx)(lr, { label: t8(y), onRemove: () => I(null) }, "date"),
                null != C &&
                    (0, i.jsx)(
                        lr,
                        {
                            label: O.find((e) => e.key === C)?.label ?? C,
                            icon:
                                null != z.get(C)
                                    ? (0, i.jsx)(tZ.Ay, { guild: z.get(C), size: tZ.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                B && Array.from(v).map((e) => (0, i.jsx)(lx, { userId: e, onRemove: () => N(e) }, `user-${e}`)),
                null != b && (0, i.jsx)(lr, { label: b, onRemove: () => w(null) }, "activity"),
                X && "all" !== m && (0, i.jsx)(lr, { label: q, onRemove: () => h("all") }, "method"),
            ],
        }),
        Z = (Y && j.size > 0) || null != y || null != C || (B && v.size > 0) || null != b || (X && "all" !== m);
    return (0, i.jsxs)("div", {
        className: lc.kT,
        children: [
            (0, i.jsxs)("div", {
                className: lc.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: lc.MT,
                        children: (0, i.jsx)(tb.I, {
                            ref: d,
                            placeholder: ey.intl.string(ey.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: lc.Zq,
                        children: [
                            X && (0, i.jsx)(lm, {}),
                            Y &&
                                R.length > 0 &&
                                (0, i.jsx)(ln, {
                                    triggerLabel: ey.intl.string(ey.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: A,
                                    multiSelect: !0,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(ld, {}),
                            O.length > 0 &&
                                (0, i.jsx)(ln, {
                                    triggerLabel: ey.intl.string(ey.t["5qyruI"]),
                                    options: O,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            B &&
                                U.length > 0 &&
                                (0, i.jsx)(ln, {
                                    triggerLabel: ey.intl.string(ey.t.YQ6dJg),
                                    options: U,
                                    selectedKeys: v,
                                    onToggle: (e) => N(e),
                                    multiSelect: !0,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, i.jsx)(ln, {
                                    triggerLabel: ey.intl.string(ey.t.agRtPG),
                                    options: G,
                                    selectedKeys: V,
                                    onToggle: Q,
                                    multiSelect: !1,
                                    searchPlaceholder: ey.intl.string(ey.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: lc.QZ, children: (0, i.jsx)(lu, {}) }),
                ],
            }),
            Z &&
                (0, i.jsxs)("div", {
                    className: lc.eH,
                    children: [
                        W,
                        (0, i.jsx)(eH.Q, {
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
function lx(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, d.bG)([P.default], () => P.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(lr, {
        label: n,
        icon: (0, i.jsx)(p.eu, { src: a.getAvatarURL(null, 32), size: g._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
let lp = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var lg = l(505124),
    lf = l(43990),
    lj = l(449543),
    lv = l(152858);
function lC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lb = l(452143);
function ly(e) {
    let { clips: t, onEdit: l } = e,
        n = a.useMemo(() => lC(t), [t]),
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
                                { src: e.previousThumbnail, className: lb.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${lb.Tp} ${lb.h9}`, alt: "", "aria-hidden": !0 },
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
        : (0, i.jsx)(lf.N, {
              theme: lg.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(lb.uW, e),
                      "aria-label": ey.intl.string(eb.default.efLpNC),
                      children: [
                          r,
                          (0, i.jsxs)("div", {
                              className: lb.wx,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: lb.mX,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: lb.UP,
                                              children: [
                                                  (0, i.jsx)(tD.B, { size: "refresh_sm", color: "white" }),
                                                  (0, i.jsx)(G.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: ey.intl.string(eb.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(f.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: lb.DD,
                                              children: ey.intl.string(eb.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  o &&
                                      (0, i.jsx)("div", {
                                          className: lb.BX,
                                          children: (0, i.jsx)(e2.$, {
                                              variant: "overlay-primary",
                                              size: "sm",
                                              onClick: () => d(H.oH.AUTO_CLIPS),
                                              text: ey.intl.string(eb.default.gCay1w),
                                          }),
                                      }),
                              ],
                          }),
                          (0, i.jsx)(lj.A, {
                              className: lb.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: lv.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": ey.intl.string(eb.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: o ? lb.v2 : lb.cW,
                                          onMouseEnter: o ? () => c(t) : void 0,
                                          onMouseLeave: o ? () => c(null) : void 0,
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: o
                                              ? (0, i.jsx)(tl, {
                                                    clip: e,
                                                    actionsDisabled: !1,
                                                    isNew: !1,
                                                    onEdit: l,
                                                    onClick: l,
                                                })
                                              : (0, i.jsx)(eS, {
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
var lA = l(770178),
    lN = l(765548),
    lk = l(569926),
    lL = l(486020),
    lE = l(251287);
function lw(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: r,
            onClipClick: c,
            animateEntrance: o,
            entranceRowOffset: u,
        } = e,
        { data: m } = (0, lk.I)(t.applicationId),
        h = (0, tu.P)((e) => e.setGameFacet),
        x = (0, tu.P)((e) => e.setActiveMainLink),
        p = t.applicationId,
        j = null != p && "" !== p,
        v = a.useCallback(() => {
            null != p && "" !== p && (h(p), x(H.oH.ALL_CLIPS));
        }, [p, h, x]),
        C = a.useCallback(() => {
            j ? v() : x(H.oH.ALL_CLIPS);
        }, [j, v, x]),
        b = a.useMemo(
            () =>
                null == m
                    ? null
                    : null != m.bannerHash && "" !== m.bannerHash
                      ? (lL.Ay.getGameAssetURL({ id: m.id, hash: m.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (m.screenshotUrls?.[0] ?? null),
            [m],
        ),
        y = (0, d.yK)([P.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => P.default.getUser(e)).filter(eh.Vq);
        }),
        A = (0, e9.e)({ timestamp: t.startedAt }),
        [N, k] = a.useState(800),
        L = (0, lN.A)((e) => {
            k(e.target.clientWidth);
        }),
        w = (0, lA.w)(L),
        I = Math.max(1, (N - 32) / 3),
        S = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        D = t.clips.length > 6;
    return (0, i.jsxs)("section", {
        className: lE.dZ,
        children: [
            (0, i.jsx)("div", {
                className: s()(lE.tB, null == b && lE.rD),
                style: null != b ? { backgroundImage: `url(${b})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
                className: lE.wx,
                children: [
                    j
                        ? (0, i.jsx)(B.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: lE.Zn,
                              children: (0, i.jsx)(E.A, {
                                  className: lE.Gt,
                                  game: m,
                                  size: E.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)(E.A, { className: lE.Gt, game: m, size: E.M.MEDIUM, "aria-hidden": !0 }),
                    (0, i.jsxs)("div", {
                        className: lE.TK,
                        children: [
                            j
                                ? (0, i.jsx)(B.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: lE.wb,
                                      children: (0, i.jsx)(f.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: lE.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, i.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: lE.mO,
                                      children: t.applicationName,
                                  }),
                            (0, i.jsxs)("div", {
                                className: lE.mI,
                                children: [
                                    (0, i.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ey.intl.format(eb.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, i.jsx)("span", { className: lE.TG, "aria-hidden": "true" }),
                                    (0, i.jsx)(G.E, { variant: "text-xs/normal", color: "text-muted", children: A }),
                                    y.length > 0 &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("span", { className: lE.TG, "aria-hidden": "true" }),
                                                (0, i.jsx)(Y.A, { users: y, maxUsers: 5, size: g._3.SIZE_16 }),
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
                className: lE.Vg,
                children: S.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: lE.UX,
                            children: e.map((e, a) => {
                                let s = { width: I };
                                return (
                                    o && (s["--custom-entrance-delay"] = `${tm(u + t + a)}ms`),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: o ? tx.$ : void 0,
                                            style: s,
                                            children: (0, i.jsx)(tl, {
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
                (0, i.jsx)("div", {
                    className: lE.Vc,
                    children: (0, i.jsx)(e2.$, {
                        variant: "secondary",
                        size: "sm",
                        text: ey.intl.string(eb.default.pqk9U0),
                        onClick: C,
                    }),
                }),
        ],
    });
}
var lI = l(177435);
function lP(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: c } = lp.useConfig({ location: "ClipsGalleryHome" }),
        o = a.useMemo(() => lC(t), [t]),
        u = c && o.length > 0,
        m = (0, d.yK)([S.Ay], () => S.Ay.getNewClipIds()),
        h = (0, d.bG)([S.Ay], () => S.Ay.getExportingClipIds().size > 0),
        x = (0, tu.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            x(H.oH.ALL_CLIPS);
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
        j = (0, d.bG)([y.Ay], () => y.Ay.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of g) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [g]);
    return g.length > 0 || u
        ? (0, i.jsx)(tA.Ip, {
              className: lI.iR,
              fade: !0,
              children: (0, i.jsxs)("div", {
                  className: lI.Qs,
                  children: [
                      u && (0, i.jsx)("div", { className: lI.Dk, children: (0, i.jsx)(ly, { clips: t, onEdit: n }) }),
                      g.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: ey.intl.string(eb.default.zfTWDE),
                                  }),
                                  g.map((e, t) =>
                                      (0, i.jsx)(
                                          lw,
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
                                      className: lI.dp,
                                      children: (0, i.jsx)(e2.$, {
                                          variant: "primary",
                                          text: ey.intl.string(eb.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, i.jsx)("div", { className: lI.dc, children: (0, i.jsx)(U.y, {}) })
          : (0, i.jsx)(eW, { isEmptyBecauseQuery: l > 0 });
}
var lS = l(409067),
    lD = l(696016),
    lM = l(847455);
let lT = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function l_(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: G,
        transitionState: U,
        initialEditingClipId: K,
        initialMainLink: V = H.oH.HOME,
        ...$
    } = e;
    (0, z.A)();
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
        } = (0, lS.ad)(),
        { enabled: el } = M.O.useConfig({ location: "ClipsGalleryModal" }),
        ei = (0, d.bG)([S.Ay], () => S.Ay.getSettings().storageLocation),
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
            tu.P.getState().resetAll(), (0, T.Su)();
        },
        [],
    ),
        a.useEffect(() => {
            if (!el) return;
            let e = tu.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(V);
        }, [el, V]),
        (0, c.l0)(() => {
            S.Ay.hasClips() && I.A.isDeveloper && w.Ay.fireSurveyAction(o.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let er = (0, d.bG)([S.Ay], () => S.Ay.getExportingClipIds().size > 0),
        [ec, eo] = a.useState(null != K ? "editing" : "gallery"),
        [ed, eu] = a.useState(K ?? null),
        em = (0, d.bG)([S.Ay], () => (null != ed ? S.Ay.getClipById(ed) : null), [ed]),
        eh = (0, u.useIsModalAtTop)(lD.nm),
        ex = a.useRef(ec);
    (ex.current = ec), (a.useRef(ed).current = ed);
    let [ep, eg] = a.useState(null != K ? x.ip.ENTERED : x.ip.HIDDEN),
        ef = a.useRef(null),
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
    a.useEffect(() => {
        eC === H.oH.HOME && eN && tu.P.getState().setActiveMainLink(H.oH.ALL_CLIPS);
    }, [eC, eN]);
    let ek = a.useMemo(() => (null != ej ? [ej] : []), [ej]),
        eL = (0, L.A)(ek)[0] ?? null,
        eE = (0, d.bG)([P.default], () => (null != ev ? P.default.getUser(ev) : null), [ev]),
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
            return eC === H.oH.FAVORITES
                ? { icon: null, title: ey.intl.string(ey.t["9rlCk1"]) }
                : eC === H.oH.AUTO_CLIPS
                  ? { icon: null, title: ey.intl.string(eb.default.ikNKf1) }
                  : eC === H.oH.HOME
                    ? { icon: null, title: ey.intl.string(ey.t.Ym2Ri6) }
                    : { icon: null, title: ey.intl.string(ey.t.dPVrEv) };
        }, [ej, ev, eC, X, eL, eE]),
        eI = a.useCallback(() => {
            eo("editing"), y.Ay.useReducedMotion && eg(x.ip.ENTERED);
        }, []),
        eP = a.useCallback((e) => {
            B((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eS = a.useCallback(
            (e) => {
                eu(e.id), eI();
            },
            [eI],
        ),
        eD = a.useCallback(() => {
            y.Ay.useReducedMotion && eu(null), eo("gallery");
        }, []);
    a.useEffect(() => {
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
        { disableTrack: ea },
        [eF, ea],
    );
    let eO = a.useMemo(
        () => ({ selectedClipIds: Y, toggleClipSelection: eP, clearSelection: eM, isMultiSelectMode: eT }),
        [Y, eP, eM, eT],
    );
    return (0, i.jsx)(N.f5, {
        value: Q,
        children: (0, i.jsx)(lT.Provider, {
            value: eO,
            children: (0, i.jsx)(h.N, {
                onClose: n,
                transitionState: U,
                ...$,
                children: (0, i.jsxs)("div", {
                    className: lM.jT,
                    ref: ef,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(lM.PD, "gallery" === ec && lM.vu),
                            inert: "gallery" !== ec,
                            children: [
                                (0, i.jsx)(tB, {
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
                                    className: lM.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: lM.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: lM.Rj,
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
                                                    className: lM.$s,
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
                                                            icon: b.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": ey.intl.string(ey.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        el && eA === H.fB.HOME
                                            ? (0, i.jsx)(lP, {
                                                  filteredClips: Z,
                                                  totalClipCount: et.length,
                                                  onEdit: eS,
                                                  onClipClick: G,
                                                  isLoading: ea,
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      el &&
                                                          (0, i.jsx)(lh, {
                                                              allClips: et,
                                                              gamesFacet: X,
                                                              participantsFacet: q,
                                                          }),
                                                      (0, i.jsx)(tf, {
                                                          onEdit: eS,
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
                            className: s()(lM.jN, "editing" === ec && lM.vu),
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
                                        (0, i.jsx)(_.A, { transitionState: ep, onClose: eD }),
                                        (0, i.jsx)(R.A, { channelId: t, onClose: eD }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
