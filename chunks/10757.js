l.d(t, { $: () => lm, default: () => lh });
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
    g = l(97808),
    f = l(778712),
    p = l(534514),
    j = l(408278),
    v = l(405433),
    y = l(241326),
    b = l(972213),
    C = l(775602),
    A = l(793574),
    N = l(688810),
    k = l(139286),
    E = l(429913),
    L = l(769015),
    w = l(27620),
    P = l(540999),
    S = l(287809),
    I = l(553933),
    M = l(274372),
    D = l(372684),
    _ = l(430795),
    T = l(247181),
    R = l(309777),
    z = l(263356),
    H = l(564490),
    F = l(362081),
    G = l(352527),
    O = l(280483),
    U = l(111994);
l(321073);
var K = l(834730),
    V = l(289873),
    $ = l(962125);
function Q(e) {
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
var Y = l(702841),
    B = l(687966),
    W = l(661531),
    Z = l(475358),
    X = l(123292),
    q = l(292801),
    J = l(780964),
    ee = l(766075),
    et = l(532624),
    el = l(350535),
    ei = l(572164),
    ea = l(953932),
    en = l(652215),
    es = l(16590),
    er = l(375708),
    ec = l(311162);
function eo(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ec.Nr,
        children: [t, (0, i.jsx)(K.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ed() {
    let e = (0, Y.bG)([et.Ay], () => et.Ay.getKeybindForAction(en.hCu.SAVE_CLIP)),
        t = null != e ? el.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: ec.kR,
        children: [
            (0, i.jsx)(eo, {
                header: (0, i.jsx)(B._, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: er.intl.string(es.default["4K56sP"]),
            }),
            (0, i.jsx)(eo, {
                header: null != t ? (0, i.jsx)(Z.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  er.intl.format(es.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: ec.JH,
                                      children: (0, i.jsx)(X.Q, {
                                          text: er.intl.string(es.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, ee.openUserSettings)(J.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : er.intl.string(es.default.HOUDUm),
            }),
            (0, i.jsx)(eo, {
                header: (0, i.jsx)(q.t, { size: "refresh_sm", color: W.A.colors.ICON_DEFAULT }),
                description: er.intl.string(es.default.DLzdl7),
            }),
        ],
    });
}
function eu(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, ei.Et)();
    return (0, i.jsx)("div", {
        className: ec.kL,
        children: (0, i.jsxs)("div", {
            className: ec.Qs,
            children: [
                (0, i.jsx)(Q, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(p.D, {
                    className: ec.wx,
                    variant: "heading-xl/semibold",
                    children: t ? er.intl.string(es.default["+M2iLf"]) : er.intl.string(es.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(K.E, {
                        className: ec.h_,
                        variant: "text-md/medium",
                        children: er.intl.string(es.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: ec.SO, children: (0, i.jsx)(ea.A, {}) }),
                l && !t && (0, i.jsx)(ed, {}),
            ],
        }),
    });
}
let em = 16 / 9;
var eh = l(621466),
    ex = l(61491),
    eg = l(342952),
    ef = l(890856),
    ep = l(365199),
    ej = l(821609),
    ev = l(22231),
    ey = l(983851),
    eb = l(31300),
    eC = l(442433),
    eA = l(587895),
    eN = l(47167),
    ek = l(549973),
    eE = l(734057),
    eL = l(71393),
    ew = l(549685),
    eP = l(174459),
    eS = l(403362),
    eI = l(53677),
    eM = l(609174),
    eD = l(619744),
    e_ = l(82716),
    eT = l(585579),
    eR = l(930317),
    ez = l(285072),
    eH = l(284009),
    eF = l.n(eH),
    eG = l(460905),
    eO = l(713608),
    eU = l(788332);
function eK(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eF()(l?.type === D.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, d.bG)([S.default], () => S.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(m.m, {
        text: er.intl.string(es.default.vTTkFF),
        children: (0, i.jsxs)("div", {
            className: eU.S,
            children: [
                (0, i.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eU.$, alt: n }),
                (0, i.jsx)(K.E, {
                    color: "always-white",
                    variant: "text-xs/bold",
                    children: er.intl.formatToPlainString(es.default.QJ7i8Z, { username: n }),
                }),
            ],
        }),
    });
}
function eV(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, i.jsx)(m.m, {
        text: a,
        children: (0, i.jsxs)("div", {
            className: eU.S,
            children: [
                (0, i.jsx)(t, { size: "xxs", color: "white" }),
                (0, i.jsx)(K.E, { color: "always-white", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function e$(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === D.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case D.Gy.DISTRIBUTED:
            return (0, i.jsx)(eK, { clip: t });
        case D.Gy.LAUGHTER:
            return (0, i.jsx)(eV, {
                icon: eG.n,
                text: er.intl.string(es.default.bTC23D),
                tooltipText: er.intl.string(es.default["ry+jxm"]),
            });
        case D.Gy.SHOUTING:
            return (0, i.jsx)(eV, {
                icon: eG.n,
                text: er.intl.string(es.default["3gqpuo"]),
                tooltipText: er.intl.string(es.default["ry+jxm"]),
            });
        case D.Gy.GAME_EVENT:
            return (0, i.jsx)(eV, {
                icon: eO.q,
                text: t.decision.signal.title ?? "",
                tooltipText: er.intl.string(es.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eQ = l(718812),
    eY = l(742007);
function eB(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: n, onEdit: s } = e;
    return (0, i.jsx)(eM.Cl, {
        clip: t,
        children: (0, i.jsx)(eW, { actionsDisabled: l, isNew: a, onClick: n, onEdit: s }),
    });
}
function eW(e) {
    let { actionsDisabled: t, isNew: n, onClick: r, onEdit: c } = e,
        o = (0, eM.Y_)(),
        { analyticsLocations: d } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: u, toggleClipSelection: m, isMultiSelectMode: h } = a.useContext(lm),
        [x, g] = a.useState(!1),
        [f, p] = a.useState(!1),
        [j, v] = a.useState(!1),
        [y, b] = a.useState(0),
        C = u.has(o.id),
        k = o.type === D.nQ.SCREENSHOT,
        E = (f || x) && !C;
    a.useEffect(() => {
        if (!E || k) return;
        let e = window.setTimeout(() => v(!0), 150);
        return () => {
            window.clearTimeout(e), v(!1);
        };
    }, [E, k]);
    let L = a.useRef(null),
        w = a.useCallback(() => {
            L.current?.releaseSource();
        }, []),
        P = a.useCallback(() => g(!1), []),
        S = a.useCallback(
            (e) => {
                g(!0);
                let a =
                    h && u.size > 0
                        ? Array.from(u)
                              .map((e) => M.Ay.getClipById(e))
                              .filter(eS.Vq)
                        : [o];
                (0, eC.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("64379"),
                            l.e("6619"),
                            l.e("93020"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("38601"),
                            l.e("18489"),
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
                                    eP.default.track(en.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eI.lc("ClipsGalleryCard.onShare"),
                                        ...eI.Zy(o),
                                    });
                                },
                                onEdit: () => {
                                    c(o),
                                        eP.default.track(en.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eI.lc("ClipsGalleryCard.onEdit"),
                                            ...eI.Zy(o),
                                        });
                                },
                                onBeforeDelete: w,
                                onAfterDelete: () => {
                                    eP.default.track(en.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eI.lc("ClipsGalleryCard.onAfterDelete"),
                                        ...eI.Zy(o),
                                    });
                                },
                            });
                    },
                    { onClose: P },
                );
            },
            [o, h, u, t, P, c, w],
        ),
        I = a.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), S(e));
            },
            [t, S],
        ),
        _ = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), S(e);
            },
            [S],
        ),
        T = a.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    c(o),
                    eP.default.track(en.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, o],
        ),
        R = a.useCallback(
            (e) => {
                !t &&
                    (!(0, eh.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") && e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), m(o.id)) : h ? m(o.id) : null != r && r(o),
                    eP.default.track(en.HAw.CLIP_GALLERY_CARD_CLICKED, {
                        ...eI.lc("ClipsGalleryCard.handleClick"),
                        ...eI.Zy(o),
                    }));
            },
            [t, h, m, o, r],
        );
    return (0, i.jsx)(N.f5, {
        value: d,
        children: (0, i.jsxs)(ef.s, {
            "aria-disabled": t,
            "aria-label": er.intl.string(k ? er.t["HO/oXl"] : er.t.bt75uw),
            onClick: t ? void 0 : R,
            onContextMenu: I,
            className: s()(eY.Nr, { [eY.r9]: t, [eY.in]: x, [eY.wH]: C }),
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: [
                (0, i.jsx)("div", {
                    className: eY.w7,
                    children: (0, i.jsxs)(eZ, {
                        ref: L,
                        isPlaying: j,
                        onProgressChange: b,
                        children: [
                            (0, i.jsx)(eX, { isNew: n }),
                            E && !t ? (0, i.jsx)(eq, { onMenu: _, onBeforeDelete: w }) : (0, i.jsx)(eJ, {}),
                            (0, i.jsx)("div", { className: eY.dH, "aria-hidden": "true" }),
                        ],
                    }),
                }),
                (0, i.jsx)(e0, { showHoverState: E, playbackProgress: y, onEdit: T }),
            ],
        }),
    });
}
let eZ = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: n } = e;
    return (0, i.jsx)(eR.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, i.jsx)(ez.h, { isVisible: !0, children: n }),
    });
});
function eX(e) {
    let { isNew: t } = e,
        l = (0, eM.Y_)(),
        a = !0 === l.pending;
    return (0, i.jsxs)("div", {
        className: eY.zV,
        children: [
            !a &&
                t &&
                (0, i.jsx)("div", {
                    className: eY.Ad,
                    children: (0, i.jsx)(K.E, {
                        variant: "text-xs/bold",
                        color: "always-white",
                        children: er.intl.string(er.t.y2b7CA),
                    }),
                }),
            (0, i.jsx)(e$, { clip: l }),
        ],
    });
}
function eq(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, i.jsxs)("div", {
        className: eY.Mw,
        children: [
            (0, i.jsx)(m.m, {
                text: er.intl.string(er.t["UKOtz+"]),
                children: (0, i.jsx)(j.K, {
                    onClick: t,
                    icon: ep.j,
                    "aria-label": er.intl.string(er.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, i.jsx)(eD.k, { onBeforeDelete: l }),
            (0, i.jsx)(e_.z, {}),
        ],
    });
}
function eJ() {
    let e = (0, eM.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        n = (function (e) {
            if (null == e.editMetadata) return !1;
            function t(e, t) {
                return 100 > Math.abs(e - t);
            }
            let l =
                    !t(1e3 * e.editMetadata.start, e.originalStartMs ?? 0) ||
                    !t(1e3 * e.editMetadata.end, e.originalEndMs ?? e.length),
                i =
                    !1 === e.editMetadata.applicationAudio ||
                    !1 === e.editMetadata.voiceAudio ||
                    !1 === e.editMetadata.soundboardAudio;
            return l || i;
        })(e),
        r = a.useMemo(() => {
            let t = e.length;
            if (null != e.editMetadata) {
                let l = e.editMetadata.end - e.editMetadata.start;
                1e3 * l < e.length && (t = 1e3 * l);
            }
            let l = Math.floor(t / 1e3);
            return (0, ex.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, i.jsxs)("div", {
              className: s()(eY.cH, eY._s),
              children: [
                  n && (0, i.jsx)(ew.A, { color: "white", width: 14, height: 14 }),
                  (0, i.jsx)(K.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      tabularNumbers: !0,
                      children: l ? er.intl.string(er.t["2Fp7OP"]) : r,
                  }),
              ],
          });
}
function e0(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a } = e,
        n = (0, eM.Y_)(),
        r = n.type === D.nQ.SCREENSHOT,
        c = (0, d.yK)([S.default], () => n.users.map((e) => S.default.getUser(e)).filter(eS.Vq)),
        o = (0, d.bG)([eE.A], () => (null != n.channelId ? eE.A.getChannel(n.channelId) : null)),
        u = (0, d.bG)([eL.A], () => (null != n.guildId ? eL.A.getGuild(n.guildId) : null)),
        m = (0, eN.Ay)(o),
        h = "" === n.applicationName && null != m && "" !== m ? m : n.applicationName,
        x = (0, ek.e)({ timestamp: n.createdAt }),
        g = u?.name;
    return (0, i.jsxs)("div", {
        className: eY.yu,
        children: [
            (0, i.jsxs)("div", {
                className: eY.$,
                children: [
                    (0, i.jsx)(e1, {}),
                    c.length > 0 &&
                        (0, i.jsx)("span", {
                            className: eY.HD,
                            "data-clips-avatars": "true",
                            children: (0, i.jsx)(eg.A, {
                                maxUsers: 3,
                                users: c,
                                size: f._3.SIZE_16,
                                "aria-label": er.intl.string(er.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: eY.SO,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(eY.Ik, { [eY.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eY.Pb,
                                children: [
                                    (0, i.jsx)(e2, {}),
                                    (0, i.jsx)(K.E, {
                                        className: eY.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: h,
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: eY.eg,
                                children: [
                                    null != g &&
                                        "" !== g &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(K.E, {
                                                    className: eY.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: g,
                                                }),
                                                (0, i.jsx)("span", { className: eY.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, i.jsx)(K.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: er.intl.format(es.default["0QCBug"], { time: x }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(eY.n_, { [eY.f$]: t }),
                        inert: !t,
                        children: [
                            !r &&
                                (0, i.jsx)("div", {
                                    className: eY.z5,
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)("div", { className: eY.TE, style: { width: `${l}%` } }),
                                }),
                            (0, i.jsxs)("div", {
                                className: eY.E_,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: eY.lO,
                                        children: (0, i.jsx)(ej.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: ev.R,
                                            text: er.intl.string(er.t.bt75uw),
                                            onClick: a,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: eY.lO,
                                        children: (0, i.jsx)(eT.E, { variant: "primary" }),
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
function e1() {
    let e = (0, eM.Y_)(),
        t = (0, eQ.h)(e),
        l = "" !== t;
    return (0, i.jsx)(K.E, {
        className: eY.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function e2() {
    let e = (0, eM.Y_)(),
        t = (0, d.bG)([eA.A], () => (null != e.applicationId ? eA.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eY.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, i.jsx)("img", { src: l, alt: "", className: eY.T_ })
                : e.type === D.nQ.VOICE_CLIP
                  ? (0, i.jsx)(ey.H, { size: "xs", color: "currentColor" })
                  : (0, i.jsx)(eb.k, { size: "xs", color: "currentColor" }),
    });
}
eZ.displayName = "CardThumbnail";
var e5 = l(792852);
function e3(e) {
    return Math.min(45 * e, 520);
}
var e9 = l(352528),
    e7 = l(32122);
let e4 = [0, 16, 0, 16],
    e8 = e4[1] + e4[3];
function e6(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s, isLoading: r } = e,
        [c, o] = a.useState({ width: 0, height: 0 }),
        u = (0, d.yK)([M.Ay], () => M.Ay.getNewClipIds()),
        m = (0, d.bG)([M.Ay], () => M.Ay.getExportingClipIds().size > 0),
        h = (0, e5.P)((e) => e.activeMainLink),
        x = (0, e5.P)((e) => e.gameFacet),
        g = (0, e5.P)((e) => e.clippedWithFacet),
        f = a.useMemo(() => {
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
                    title: er.intl.string(er.t["kB2R/0"]),
                    description: t ? er.intl.string(er.t["6AXirz"]) : void 0,
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
        { width: j } = c,
        { tileWidth: v, columns: y } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = j - e8) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, j]),
        b = a.useMemo(() => f.map((e) => Math.ceil(e.clips.length / y)), [f, y]),
        A = a.useMemo(() => b.reduce((e, t) => e + t, 0), [b]),
        N = Math.floor(v / em),
        k = f.length > 0 ? `${h}:${x ?? ""}:${g ?? ""}` : null,
        E = (function (e) {
            let t = (0, d.bG)([C.Ay], () => C.Ay.useReducedMotion),
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
        })(k),
        L = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = f[l];
                if (null == r) return null;
                let c = a * y,
                    o = r.clips.slice(c, c + y);
                return (0, i.jsx)(
                    "div",
                    {
                        className: e9.UX,
                        children: o.map((t, l) => {
                            let a = { width: v };
                            return (
                                E && (a["--custom-entrance-delay"] = `${e3(e + l)}ms`),
                                (0, i.jsx)(
                                    "div",
                                    {
                                        className: E ? e7.$ : void 0,
                                        style: a,
                                        children: (0, i.jsx)(eB, {
                                            actionsDisabled: m,
                                            isNew: u.includes(t.id),
                                            onClick: n ?? s,
                                            onEdit: s,
                                            clip: t,
                                        }),
                                    },
                                    `${k ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${a}`,
                );
            },
            [f, y, v, m, u, n, s, E, k],
        ),
        w = a.useCallback(
            (e) => {
                let t = f[e];
                return t?.description != null ? 66 : 44;
            },
            [f],
        ),
        P = a.useCallback(
            (e) => {
                let t = f[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: e9.aE,
                              children: [
                                  (0, i.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(K.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: e9.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [f],
        );
    return r || 0 !== f.length
        ? r && 0 === f.length
            ? (0, i.jsx)("div", { className: e9.dc, children: (0, i.jsx)(V.y, {}) })
            : (0, i.jsx)($.A, {
                  listPadding: e4,
                  renderRow: L,
                  renderSectionHeader: P,
                  rowCount: A,
                  rowCountBySection: b,
                  rowHeight: N + 96 + 16,
                  sectionHeaderHeight: w,
                  onResize: o,
              })
        : (0, i.jsx)(eu, { isEmptyBecauseQuery: l > 0 });
}
var te = l(922016),
    tt = l(847374),
    tl = l(980707),
    ti = l(477782),
    ta = l(112173),
    tn = l(892547),
    ts = l(548118),
    tr = l(974293),
    tc = l(458977),
    to = l(526233),
    td = l(270962);
function tu() {
    let e = (0, tr.aJ)("useIsAutoClipsAvailable"),
        t = tc.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        l = td.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline,
        i = to.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents;
    return e || t || l || i;
}
var tm = l(441349),
    th = l(939249),
    tx = l(789645),
    tg = l(939546),
    tf = l(99478);
function tp(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function tj(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function tv(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tg.Xj)();
    return { preset: "custom", after: null != e ? tp(e.toDate(l)) : null, before: null != t ? tj(t.toDate(l)) : null };
}
function ty(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tf.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tb = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tC(e) {
    return tb.format(new Date(e));
}
function tA(e) {
    switch (e.preset) {
        case "today":
            return er.intl.string(es.default.yOAWWM);
        case "yesterday":
            return er.intl.string(es.default["PtV/Ti"]);
        case "last-3-days":
            return er.intl.string(es.default.xfmv7I);
        case "this-year":
            return er.intl.string(es.default["+eE7zX"]);
        case "last-year":
            return er.intl.string(es.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tC(e.after) : null,
                l = null != e.before ? tC(e.before) : null;
            if (null != t && null != l)
                return er.intl.formatToPlainString(es.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return er.intl.formatToPlainString(es.default.k1FkTL, { date: t });
            if (null != l) return er.intl.formatToPlainString(es.default["4NlpHD"], { date: l });
            return er.intl.string(es.default.tv9apA);
        }
    }
}
var tN = l(817480);
function tk(e) {
    let { closePopout: t } = e,
        l = (0, e5.P)((e) => e.dateFilter),
        n = (0, e5.P)((e) => e.setDateFilter),
        [r, c] = a.useState(l?.preset === "custom"),
        [o, d] = a.useState(() => (l?.preset === "custom" ? ty(l.after) : null)),
        [u, h] = a.useState(() => (l?.preset === "custom" ? ty(l.before) : null)),
        x = a.useMemo(
            () => [
                { key: "today", label: er.intl.string(es.default.yOAWWM) },
                { key: "yesterday", label: er.intl.string(es.default["PtV/Ti"]) },
                { key: "last-3-days", label: er.intl.string(es.default.xfmv7I) },
                { key: "this-year", label: er.intl.string(es.default["+eE7zX"]) },
                { key: "last-year", label: er.intl.string(es.default.Nwj9v0) },
            ],
            [],
        ),
        g = l?.preset ?? null,
        f = r && "custom" !== g ? null : g,
        p = a.useMemo(() => (0, tg.Ec)((0, tg.Xj)()), []),
        v = a.useCallback(
            (e) => {
                n(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tp(new Date(t)), before: tj(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tp(new Date(l)), before: tj(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: tp(l), before: tj(new Date(t)) };
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
            c((e) => !e);
        }, []),
        b = a.useCallback(
            (e) => {
                d(e), n(tv(e, u));
            },
            [u, n],
        ),
        C = a.useCallback(
            (e) => {
                h(e), n(tv(o, e));
            },
            [o, n],
        ),
        A = a.useCallback(() => {
            d(null), h(null), n(null);
        }, [n]),
        N = null != o || null != u;
    return (0, i.jsxs)("div", {
        className: s()(tN.SW, r && tN.Td),
        children: [
            (0, i.jsxs)("div", {
                className: tN.sh,
                children: [
                    (0, i.jsx)(K.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: tN.a9,
                        children: er.intl.string(es.default.upqksT),
                    }),
                    (0, i.jsxs)("div", {
                        className: tN.eF,
                        children: [
                            x.map((e) =>
                                (0, i.jsx)(
                                    th.D,
                                    {
                                        className: s()(tN.zD, f === e.key && tN.pH),
                                        onClick: () => v(e.key),
                                        "aria-pressed": f === e.key,
                                        children: (0, i.jsx)(K.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: e.label,
                                        }),
                                    },
                                    e.key,
                                ),
                            ),
                            (0, i.jsxs)(th.D, {
                                className: s()(tN.zD, tN.Kl, (r || "custom" === g) && tN.pH),
                                onClick: y,
                                "aria-expanded": r,
                                children: [
                                    (0, i.jsx)(K.E, {
                                        variant: "text-sm/medium",
                                        color: "currentColor",
                                        children: er.intl.string(es.default.tv9apA),
                                    }),
                                    (0, i.jsx)(K.E, {
                                        variant: "text-md/medium",
                                        color: "text-muted",
                                        className: tN.Xt,
                                        children: r ? "\u25C0" : "\u25B6",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: tN.ML,
                "aria-hidden": !r,
                children: [
                    (0, i.jsxs)("div", {
                        className: tN.U6,
                        children: [
                            (0, i.jsxs)("div", {
                                className: tN._2,
                                children: [
                                    (0, i.jsx)(K.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tN.bk,
                                        "aria-hidden": !0,
                                        children: er.intl.string(es.default["96vZuU"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tN.h0,
                                        children: [
                                            (0, i.jsx)(tm.l, {
                                                label: er.intl.string(es.default["96vZuU"]),
                                                hideLabel: !0,
                                                value: o,
                                                onChange: b,
                                                maxValue: u ?? p,
                                            }),
                                            null != o &&
                                                (0, i.jsx)(m.m, {
                                                    text: er.intl.string(er.t.VkKicb),
                                                    children: (0, i.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tx.P,
                                                        onClick: () => b(null),
                                                        "aria-label": er.intl.string(er.t.VkKicb),
                                                    }),
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: tN._2,
                                children: [
                                    (0, i.jsx)(K.E, {
                                        variant: "eyebrow",
                                        color: "text-muted",
                                        className: tN.bk,
                                        "aria-hidden": !0,
                                        children: er.intl.string(es.default["GL51/b"]),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: tN.h0,
                                        children: [
                                            (0, i.jsx)(tm.l, {
                                                label: er.intl.string(es.default["GL51/b"]),
                                                hideLabel: !0,
                                                value: u,
                                                onChange: C,
                                                minValue: o ?? void 0,
                                                maxValue: p,
                                            }),
                                            null != u &&
                                                (0, i.jsx)(m.m, {
                                                    text: er.intl.string(er.t.VkKicb),
                                                    children: (0, i.jsx)(j.K, {
                                                        size: "sm",
                                                        variant: "icon-only",
                                                        icon: tx.P,
                                                        onClick: () => C(null),
                                                        "aria-label": er.intl.string(er.t.VkKicb),
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
                            className: tN.dS,
                            children: (0, i.jsx)(X.Q, { size: "sm", text: er.intl.string(er.t.VkKicb), onClick: A }),
                        }),
                ],
            }),
        ],
    });
}
var tE = l(91871),
    tL = l.n(tE),
    tw = l(103552),
    tP = l(914427),
    tS = l(213424);
function tI(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tL()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, i.jsxs)(
                            tw.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, i.jsx)("span", { className: tS.H, children: e.icon }),
                                    (0, i.jsx)(tw.x4.Label, { children: e.label }),
                                    r ? (0, i.jsx)(tw.x4.Checkbox, {}) : (0, i.jsx)(tw.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = n.size > 0 ? `${t} (${n.size})` : t;
    return (0, i.jsx)(te.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(tP.p, {
                "aria-label": t,
                placeholder: c,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: o ?? er.intl.string(er.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(ej.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tt.a,
                iconPosition: "end",
            }),
    });
}
var tM = l(941886);
function tD(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: n } = e;
    return (0, i.jsxs)("div", {
        className: tM.Io,
        children: [
            null != l && (0, i.jsx)("span", { className: tM.Kk, children: l }),
            (0, i.jsx)(K.E, {
                className: tM.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, i.jsx)(th.D, {
                className: tM.DT,
                onClick: a,
                "aria-label": n ?? er.intl.string(er.t.N86XcP),
                children: (0, i.jsx)(tx.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t_ = l(841765);
let tT = { all: es.default.lscwjQ, auto: es.default.xrOIkz, manual: es.default.D7HSLJ };
function tR() {
    let e = (0, e5.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tA(e) : er.intl.string(es.default.upqksT);
    return (0, i.jsx)(te.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tk, { closePopout: t });
        },
        children: (e) =>
            (0, i.jsx)(ej.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tt.a,
                iconPosition: "end",
            }),
    });
}
function tz() {
    let e = (0, e5.P)((e) => e.sortOrder),
        t = (0, e5.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        n = e === U.mu.OLDEST ? er.intl.string(er.t["0gitSE"]) : er.intl.string(er.t["4LLKx3"]);
    return (0, i.jsx)(te.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, i.jsx)(tl.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": er.intl.string(er.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, i.jsxs)(ti.rX, {
                    children: [
                        (0, i.jsx)(ti.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: er.intl.string(er.t["4LLKx3"]),
                            action: () => {
                                t(U.mu.MOST_RECENT), a();
                            },
                            checked: e === U.mu.MOST_RECENT,
                        }),
                        (0, i.jsx)(ti.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: er.intl.string(er.t["0gitSE"]),
                            action: () => {
                                t(U.mu.OLDEST), a();
                            },
                            checked: e === U.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(ej.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: n, icon: ta.J }),
    });
}
function tH() {
    let e = (0, e5.P)((e) => e.clipMethodFilter),
        t = (0, e5.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, i.jsx)(te.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, i.jsx)(tl.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": er.intl.string(es.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, i.jsxs)(ti.rX, {
                    children: [
                        (0, i.jsx)(ti.iD, {
                            id: "method-all",
                            group: "method",
                            label: er.intl.string(es.default.lscwjQ),
                            action: () => {
                                t("all"), a();
                            },
                            checked: "all" === e,
                        }),
                        (0, i.jsx)(ti.iD, {
                            id: "method-auto",
                            group: "method",
                            label: er.intl.string(es.default.xrOIkz),
                            action: () => {
                                t("auto"), a();
                            },
                            checked: "auto" === e,
                        }),
                        (0, i.jsx)(ti.iD, {
                            id: "method-manual",
                            group: "method",
                            label: er.intl.string(es.default.D7HSLJ),
                            action: () => {
                                t("manual"), a();
                            },
                            checked: "manual" === e,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(ej.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: er.intl.string(es.default["kIqbb/"]),
                icon: tt.a,
                iconPosition: "end",
            }),
    });
}
function tF(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: n } = e,
        s = (0, e5.P)((e) => e.query),
        r = (0, e5.P)((e) => e.setQuery),
        c = (0, e5.P)((e) => e.pendingSearchFocus),
        o = (0, e5.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, e5.P)((e) => e.activeMainLink),
        m = (0, e5.P)((e) => e.clipMethodFilter),
        h = (0, e5.P)((e) => e.setClipMethodFilter),
        x = (0, e5.P)((e) => e.gameFacet),
        p = (0, e5.P)((e) => e.clippedWithFacet),
        j = (0, e5.P)((e) => e.selectedGameIds),
        v = (0, e5.P)((e) => e.selectedUserIds),
        y = (0, e5.P)((e) => e.selectedGuildId),
        b = (0, e5.P)((e) => e.selectedActivity),
        C = (0, e5.P)((e) => e.dateFilter),
        A = (0, e5.P)((e) => e.toggleGameId),
        N = (0, e5.P)((e) => e.toggleUserId),
        k = (0, e5.P)((e) => e.setSelectedGuildId),
        w = (0, e5.P)((e) => e.setSelectedActivity),
        P = (0, e5.P)((e) => e.setDateFilter),
        I = (0, e5.P)((e) => e.clearFilters);
    a.useEffect(() => {
        c && (d.current?.focus(), o(!1));
    }, [c, o]);
    let M = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(j),
            date_filter_range: null != C ? C.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != y,
            filtered_by_participants: null != p || v.size > 0,
            filtered_by_favorites: u === U.oH.FAVORITES,
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
            M.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== M.current && ((M.current = t), eP.default.track(en.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, j, C, y, p, v, u, b]);
    let D = a.useMemo(() => l.map((e) => e.key), [l]),
        _ = (0, E.A)(D),
        T = a.useMemo(() => new Map(_.map((e) => [e?.id, e])), [_]),
        R = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, i.jsx)(L.A, { game: T.get(e.key), size: L.M.XSMALL }),
                })),
            [l, T],
        ),
        z = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eL.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        H = a.useMemo(
            () =>
                z.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, i.jsx)(ts.Ay, { guild: e.guild, size: ts.Ay.Sizes.MINI }),
                })),
            [z],
        ),
        F = a.useMemo(() => new Map(z.map((e) => [e.key, e.guild])), [z]),
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
        O = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = S.default.getUser(l.key);
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
                    icon: (0, i.jsx)(g.eu, { src: e.avatarUrl, size: f._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [n],
        ),
        K = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        V = a.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        $ = a.useCallback(
            (e) => {
                k(y === e ? null : e);
            },
            [y, k],
        ),
        Q = a.useCallback(
            (e) => {
                w(b === e ? null : e);
            },
            [b, w],
        ),
        Y = null == x,
        B = null == p,
        W = tu() && u !== U.oH.AUTO_CLIPS,
        Z = er.intl.string(tT[m]),
        q = (0, i.jsxs)(i.Fragment, {
            children: [
                Y &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, i.jsx)(
                            tD,
                            {
                                label: t?.label ?? e,
                                icon: (0, i.jsx)(L.A, { game: T.get(e), size: L.M.XSMALL }),
                                onRemove: () => A(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != C && (0, i.jsx)(tD, { label: tA(C), onRemove: () => P(null) }, "date"),
                null != y &&
                    (0, i.jsx)(
                        tD,
                        {
                            label: H.find((e) => e.key === y)?.label ?? y,
                            icon:
                                null != F.get(y)
                                    ? (0, i.jsx)(ts.Ay, { guild: F.get(y), size: ts.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                B && Array.from(v).map((e) => (0, i.jsx)(tG, { userId: e, onRemove: () => N(e) }, `user-${e}`)),
                null != b && (0, i.jsx)(tD, { label: b, onRemove: () => w(null) }, "activity"),
                W && "all" !== m && (0, i.jsx)(tD, { label: Z, onRemove: () => h("all") }, "method"),
            ],
        }),
        J = (Y && j.size > 0) || null != C || null != y || (B && v.size > 0) || null != b || (W && "all" !== m);
    return (0, i.jsxs)("div", {
        className: t_.kT,
        children: [
            (0, i.jsxs)("div", {
                className: t_.HL,
                children: [
                    (0, i.jsx)("div", {
                        className: t_.MT,
                        children: (0, i.jsx)(tn.I, {
                            ref: d,
                            placeholder: er.intl.string(er.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: t_.Zq,
                        children: [
                            W && (0, i.jsx)(tH, {}),
                            Y &&
                                R.length > 0 &&
                                (0, i.jsx)(tI, {
                                    triggerLabel: er.intl.string(er.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: A,
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            (0, i.jsx)(tR, {}),
                            H.length > 0 &&
                                (0, i.jsx)(tI, {
                                    triggerLabel: er.intl.string(er.t["5qyruI"]),
                                    options: H,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            B &&
                                O.length > 0 &&
                                (0, i.jsx)(tI, {
                                    triggerLabel: er.intl.string(er.t.YQ6dJg),
                                    options: O,
                                    selectedKeys: v,
                                    onToggle: (e) => N(e),
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, i.jsx)(tI, {
                                    triggerLabel: er.intl.string(er.t.agRtPG),
                                    options: G,
                                    selectedKeys: V,
                                    onToggle: Q,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: t_.QZ, children: (0, i.jsx)(tz, {}) }),
                ],
            }),
            J &&
                (0, i.jsxs)("div", {
                    className: t_.eH,
                    children: [
                        q,
                        (0, i.jsx)(X.Q, {
                            size: "sm",
                            variant: "primary",
                            text: er.intl.string(er.t.O8k7O4),
                            onClick: I,
                        }),
                    ],
                }),
        ],
    });
}
function tG(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, d.bG)([S.default], () => S.default.getUser(t), [t]);
    if (null == a) return null;
    let n = a.globalName ?? a.username;
    return (0, i.jsx)(tD, {
        label: n,
        icon: (0, i.jsx)(g.eu, { src: a.getAvatarURL(null, 32), size: f._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tO = l(364522);
let tU = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tK = l(505124),
    tV = l(43990),
    t$ = l(175841),
    tQ = l(449543),
    tY = l(152858);
function tB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var tW = l(452143);
function tZ(e) {
    let { clips: t, onEdit: l } = e,
        n = a.useMemo(() => tB(t), [t]),
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
                                { src: e.previousThumbnail, className: tW.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, i.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${tW.Tp} ${tW.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: n,
            };
        })(),
        o = (0, e5.P)((e) => e.setActiveMainLink);
    return 0 === n.length
        ? null
        : (0, i.jsx)(tV.N, {
              theme: tK.NJ.DARK,
              children: (e) =>
                  (0, i.jsxs)("section", {
                      className: s()(tW.uW, e),
                      "aria-label": er.intl.string(es.default.efLpNC),
                      children: [
                          r,
                          (0, i.jsxs)("div", {
                              className: tW.wx,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tW.mX,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tW.UP,
                                              children: [
                                                  (0, i.jsx)(t$.B, { size: "refresh_sm", color: "white" }),
                                                  (0, i.jsx)(K.E, {
                                                      variant: "text-md/medium",
                                                      color: "always-white",
                                                      children: er.intl.string(es.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(p.D, {
                                              variant: "display-md",
                                              color: "always-white",
                                              className: tW.DD,
                                              children: er.intl.string(es.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("div", {
                                      className: tW.BX,
                                      children: (0, i.jsx)(ej.$, {
                                          variant: "overlay-primary",
                                          size: "sm",
                                          onClick: () => o(U.oH.AUTO_CLIPS),
                                          text: er.intl.string(es.default.gCay1w),
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(tQ.A, {
                              className: tW.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: tY.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": er.intl.string(es.default.efLpNC),
                              children: n.map((e) => {
                                  let t = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, i.jsx)(
                                      "div",
                                      {
                                          className: tW.v2,
                                          onMouseEnter: () => c(t),
                                          onMouseLeave: () => c(null),
                                          onFocus: () => c(t),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: (0, i.jsx)(eB, {
                                              clip: e,
                                              actionsDisabled: !1,
                                              isNew: !1,
                                              onEdit: l,
                                              onClick: l,
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
var tX = l(770178),
    tq = l(765548),
    tJ = l(569926),
    t0 = l(486020),
    t1 = l(251287);
function t2(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: n,
            onEdit: r,
            onClipClick: c,
            animateEntrance: o,
            entranceRowOffset: u,
        } = e,
        { data: m } = (0, tJ.I)(t.applicationId),
        h = (0, e5.P)((e) => e.setGameFacet),
        x = (0, e5.P)((e) => e.setActiveMainLink),
        g = t.applicationId,
        j = null != g && "" !== g,
        v = a.useCallback(() => {
            null != g && "" !== g && (h(g), x(U.oH.ALL_CLIPS));
        }, [g, h, x]),
        y = a.useCallback(() => {
            j ? v() : x(U.oH.ALL_CLIPS);
        }, [j, v, x]),
        b = a.useMemo(
            () =>
                null == m
                    ? null
                    : null != m.bannerHash && "" !== m.bannerHash
                      ? (t0.Ay.getGameAssetURL({ id: m.id, hash: m.bannerHash, size: 1024, keepAspectRatio: !0 }) ??
                        null)
                      : (m.screenshotUrls?.[0] ?? null),
            [m],
        ),
        C = (0, d.yK)([S.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => S.default.getUser(e)).filter(eS.Vq);
        }),
        A = (0, ek.e)({ timestamp: t.startedAt }),
        [N, k] = a.useState(800),
        E = (0, tq.A)((e) => {
            k(e.target.clientWidth);
        }),
        w = (0, tX.w)(E),
        P = Math.max(1, (N - 32) / 3),
        I = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        M = t.clips.length > 6;
    return (0, i.jsxs)("section", {
        className: t1.dZ,
        children: [
            (0, i.jsx)("div", {
                className: s()(t1.tB, null == b && t1.rD),
                style: null != b ? { backgroundImage: `url(${b})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
                className: t1.wx,
                children: [
                    j
                        ? (0, i.jsx)(ef.s, {
                              "aria-label": t.applicationName,
                              onClick: v,
                              className: t1.Zn,
                              children: (0, i.jsx)(L.A, {
                                  className: t1.Gt,
                                  game: m,
                                  size: L.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, i.jsx)(L.A, { className: t1.Gt, game: m, size: L.M.MEDIUM, "aria-hidden": !0 }),
                    (0, i.jsxs)("div", {
                        className: t1.TK,
                        children: [
                            j
                                ? (0, i.jsx)(ef.s, {
                                      "aria-label": t.applicationName,
                                      onClick: v,
                                      className: t1.wb,
                                      children: (0, i.jsx)(p.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: t1.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, i.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: t1.mO,
                                      children: t.applicationName,
                                  }),
                            (0, i.jsxs)("div", {
                                className: t1.mI,
                                children: [
                                    (0, i.jsx)(K.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: er.intl.format(es.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, i.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                    (0, i.jsx)(K.E, { variant: "text-xs/normal", color: "text-muted", children: A }),
                                    C.length > 0 &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                                (0, i.jsx)(eg.A, { users: C, maxUsers: 5, size: f._3.SIZE_16 }),
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
                className: t1.Vg,
                children: I.map((e, t) =>
                    (0, i.jsx)(
                        "div",
                        {
                            className: t1.UX,
                            children: e.map((e, a) => {
                                let s = { width: P };
                                return (
                                    o && (s["--custom-entrance-delay"] = `${e3(u + t + a)}ms`),
                                    (0, i.jsx)(
                                        "div",
                                        {
                                            className: o ? e7.$ : void 0,
                                            style: s,
                                            children: (0, i.jsx)(eB, {
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
            M &&
                (0, i.jsx)("div", {
                    className: t1.Vc,
                    children: (0, i.jsx)(ej.$, {
                        variant: "secondary",
                        size: "sm",
                        text: er.intl.string(es.default.pqk9U0),
                        onClick: y,
                    }),
                }),
        ],
    });
}
var t5 = l(177435);
function t3(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: n, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: c } = tU.useConfig({ location: "ClipsGalleryHome" }),
        o = a.useMemo(() => tB(t), [t]),
        u = c && o.length > 0,
        m = (0, d.yK)([M.Ay], () => M.Ay.getNewClipIds()),
        h = (0, d.bG)([M.Ay], () => M.Ay.getExportingClipIds().size > 0),
        x = (0, e5.P)((e) => e.setActiveMainLink),
        g = a.useCallback(() => {
            x(U.oH.ALL_CLIPS);
        }, [x]),
        f = a.useMemo(() => {
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
        j = (0, d.bG)([C.Ay], () => C.Ay.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of f) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [f]);
    return f.length > 0 || u
        ? (0, i.jsx)(tO.Ip, {
              className: t5.iR,
              fade: !0,
              children: (0, i.jsxs)("div", {
                  className: t5.Qs,
                  children: [
                      u && (0, i.jsx)("div", { className: t5.Dk, children: (0, i.jsx)(tZ, { clips: t, onEdit: n }) }),
                      f.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(p.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: er.intl.string(es.default.zfTWDE),
                                  }),
                                  f.map((e, t) =>
                                      (0, i.jsx)(
                                          t2,
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
                                      className: t5.dp,
                                      children: (0, i.jsx)(ej.$, {
                                          variant: "primary",
                                          text: er.intl.string(es.default.RQtkop),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, i.jsx)("div", { className: t5.dc, children: (0, i.jsx)(V.y, {}) })
          : (0, i.jsx)(eu, { isEmptyBecauseQuery: l > 0 });
}
var t9 = l(7689),
    t7 = l(625903),
    t4 = l(332837),
    t8 = l(176781),
    t6 = l(650684),
    le = l(27232),
    lt = l(812993),
    ll = l(910537);
function li(e) {
    let { icon: t, label: l, trailer: a, isSelected: n, isDisabled: r = !1, onClick: c } = e,
        o = r && !n;
    return (0, i.jsxs)(th.D, {
        onClick: o ? void 0 : c,
        className: s()(ll.nM, { [ll.CZ]: n, [ll.lr]: o }),
        "aria-pressed": n,
        "aria-disabled": o,
        children: [
            (0, i.jsx)("span", { className: ll.aL, children: t }),
            (0, i.jsx)(K.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: ll.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != a && (0, i.jsx)("span", { className: ll.iP, children: a }),
        ],
    });
}
function la() {
    let e = (0, d.bG)([et.Ay], () => et.Ay.getKeybindForAction(en.hCu.SAVE_CLIP)),
        t = (0, e5.P)((e) => e.setActiveMainLink),
        l = (0, e5.P)((e) => e.setGameFacet),
        n = (0, e5.P)((e) => e.setClippedWithFacet),
        s = (0, e5.P)((e) => e.setPendingSearchFocus),
        r = a.useCallback(() => {
            (0, ee.openUserSettings)(J.X.CLIPS_PANEL);
        }, []),
        c = a.useCallback(() => {
            l(null), n(null), t(U.oH.ALL_CLIPS), s(!0);
        }, [l, n, t, s]),
        o = null != e ? el.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: ll.aN,
        children: [
            (0, i.jsxs)("div", {
                className: ll.pR,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: er.intl.string(er.t.z2jK6X),
                    }),
                    null != o && (0, i.jsx)(Z.e, { shortcut: o }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ll.XL,
                children: [
                    (0, i.jsx)(m.m, {
                        text: er.intl.string(er.t["5h0QOP"]),
                        children: (0, i.jsx)(j.K, {
                            onClick: c,
                            icon: t9.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": er.intl.string(er.t["5h0QOP"]),
                        }),
                    }),
                    (0, i.jsx)(m.m, {
                        text: er.intl.string(er.t["3D5yo/"]),
                        children: (0, i.jsx)(j.K, {
                            onClick: r,
                            icon: t7.Z,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": er.intl.string(er.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ln(e) {
    let t,
        l,
        n,
        s,
        { mainLinkCounts: r, mainLinkNewCounts: c } = e,
        o = (0, e5.P)((e) => e.activeMainLink),
        d =
            ((t = (0, e5.P)((e) => e.setActiveMainLink)),
            (l = (0, e5.P)((e) => e.setGameFacet)),
            (n = (0, e5.P)((e) => e.setClippedWithFacet)),
            (s = (0, e5.P)((e) => e.clearFilters)),
            a.useCallback(
                (e) => {
                    t(e), l(null), n(null), s();
                },
                [t, l, n, s],
            )),
        u = (0, e5.P)((e) => e.gameFacet),
        m = (0, e5.P)((e) => e.clippedWithFacet),
        h = tu(),
        x = null != u || null != m;
    function g(e) {
        return !x && o === e;
    }
    return (0, i.jsxs)("div", {
        className: ll.uW,
        children: [
            (0, i.jsx)(li, {
                icon: (0, i.jsx)(t4.f, { size: "sm", color: "currentColor" }),
                label: er.intl.string(er.t.Ym2Ri6),
                isSelected: g(U.oH.HOME),
                onClick: () => d(U.oH.HOME),
            }),
            (0, i.jsx)(li, {
                icon: (0, i.jsx)(t8.x, { size: "sm", color: "currentColor" }),
                label: er.intl.string(er.t.dPVrEv),
                trailer: (0, i.jsx)(ls, { count: c.allClips }),
                isSelected: g(U.oH.ALL_CLIPS),
                isDisabled: 0 === r.allClips && !g(U.oH.ALL_CLIPS),
                onClick: () => d(U.oH.ALL_CLIPS),
            }),
            h &&
                (0, i.jsx)(li, {
                    icon: (0, i.jsx)(t6.e, { size: "sm", color: "currentColor" }),
                    label: er.intl.string(es.default.ikNKf1),
                    trailer: (0, i.jsx)(ls, { count: c.autoClips }),
                    isSelected: g(U.oH.AUTO_CLIPS),
                    isDisabled: 0 === r.autoClips && !g(U.oH.AUTO_CLIPS),
                    onClick: () => d(U.oH.AUTO_CLIPS),
                }),
            (0, i.jsx)(li, {
                icon: (0, i.jsx)(le.G, { size: "sm", color: "currentColor" }),
                label: er.intl.string(er.t["9rlCk1"]),
                trailer: (0, i.jsx)(ls, { count: c.favorites }),
                isSelected: g(U.oH.FAVORITES),
                isDisabled: 0 === r.favorites && !g(U.oH.FAVORITES),
                onClick: () => d(U.oH.FAVORITES),
            }),
        ],
    });
}
function ls(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, i.jsx)(lt.hV, { count: t });
}
function lr(e) {
    let t,
        l,
        n,
        r,
        { gamesFacet: c } = e,
        o = (0, e5.P)((e) => e.gameFacet),
        d =
            ((t = (0, e5.P)((e) => e.setGameFacet)),
            (l = (0, e5.P)((e) => e.setClippedWithFacet)),
            (n = (0, e5.P)((e) => e.setActiveMainLink)),
            (r = (0, e5.P)((e) => e.clearFilters)),
            a.useCallback(
                (e, i) => {
                    null == i
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(i) : l(i), "game" === e ? l(null) : t(null), n(U.oH.ALL_CLIPS), r());
                },
                [t, l, n, r],
            )),
        u = a.useMemo(() => c.map((e) => e.key), [c]),
        m = (0, E.A)(u),
        h = a.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === c.length
        ? null
        : (0, i.jsxs)(tO.Ip, {
              className: s()(ll.uW, ll.fC),
              fade: !0,
              children: [
                  (0, i.jsx)(p.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: ll.a9,
                      children: er.intl.string(er.t.URyqtP),
                  }),
                  (0, i.jsx)("div", {
                      className: ll._A,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              li,
                              {
                                  icon: (0, i.jsx)(L.A, { game: h.get(e.key), size: L.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, i.jsx)(ls, { count: e.newCount }),
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
function lc(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e;
    return (0, i.jsxs)("div", {
        className: ll.pz,
        children: [
            (0, i.jsx)(la, {}),
            (0, i.jsxs)("div", {
                className: ll.wp,
                children: [
                    (0, i.jsx)(ln, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, i.jsx)(lr, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var lo = l(409067),
    ld = l(696016),
    lu = l(847455);
let lm = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function lh(e) {
    let {
        channelId: t,
        onClose: n,
        onClipClick: K,
        transitionState: V,
        initialEditingClipId: $,
        initialMainLink: Q = U.oH.HOME,
        ...Y
    } = e;
    (0, O.A)();
    let { analyticsLocations: B } = (0, N.Ay)(A.A.CLIPS_GALLERY),
        [W, Z] = a.useState(new Set()),
        {
            gamesFacet: X,
            participantsFacet: q,
            distributedClipInitiatorsFacet: J,
            filteredClips: ee,
            mainLinkCounts: et,
            mainLinkNewCounts: el,
            allClips: ei,
        } = (0, lo.ad)(),
        ea = (0, d.bG)([M.Ay], () => M.Ay.getSettings().storageLocation),
        [en, ec] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            ec(!0);
            try {
                await (0, _.Fb)(ea);
            } finally {
                ec(!1);
            }
        })().catch(() => {});
    }, [ea]);
    let { onShareClick: eo } = (0, G.A)(t);
    a.useEffect(
        () => () => {
            e5.P.getState().resetAll(), (0, _.Su)();
        },
        [],
    ),
        a.useEffect(() => {
            let e = e5.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(Q);
        }, [Q]),
        (0, c.l0)(() => {
            M.Ay.hasClips() && P.A.isDeveloper && w.Ay.fireSurveyAction(o.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let ed = (0, d.bG)([M.Ay], () => M.Ay.getExportingClipIds().size > 0),
        [eu, em] = a.useState(null != $ ? "editing" : "gallery"),
        [eh, ex] = a.useState($ ?? null),
        eg = (0, d.bG)([M.Ay], () => (null != eh ? M.Ay.getClipById(eh) : null), [eh]),
        ef = (0, u.useIsModalAtTop)(ld.nm),
        { enabled: ep } = I._.useConfig({ location: "ClipsGalleryModal" }),
        ej = a.useRef(eu);
    (ej.current = eu), (a.useRef(eh).current = eh);
    let [ev, ey] = a.useState(null != $ ? x.ip.ENTERED : x.ip.HIDDEN),
        eb = a.useRef(null),
        eC = (0, e5.P)((e) => e.gameFacet),
        eA = (0, e5.P)((e) => e.clippedWithFacet),
        eN = (0, e5.P)((e) => e.activeMainLink),
        ek = (0, e5.P)((e) => e.currentPage),
        eE = (0, e5.P)(
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
        eN === U.oH.HOME && eE && e5.P.getState().setActiveMainLink(U.oH.ALL_CLIPS);
    }, [eN, eE]);
    let eL = a.useMemo(() => (null != eC ? [eC] : []), [eC]),
        ew = (0, E.A)(eL)[0] ?? null,
        eP = (0, d.bG)([S.default], () => (null != eA ? S.default.getUser(eA) : null), [eA]),
        eS = a.useMemo(() => {
            if (null != eC) {
                let e = X.find((e) => e.key === eC)?.name ?? er.intl.string(er.t.dPVrEv);
                return { icon: (0, i.jsx)(L.A, { game: ew, size: L.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != eA) {
                let e = null != eP ? (eP.globalName ?? eP.username) : eA;
                return {
                    icon:
                        null != eP
                            ? (0, i.jsx)(g.eu, {
                                  src: eP.getAvatarURL(null, 32),
                                  size: f._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eN === U.oH.FAVORITES
                ? { icon: null, title: er.intl.string(er.t["9rlCk1"]) }
                : eN === U.oH.AUTO_CLIPS
                  ? { icon: null, title: er.intl.string(es.default.ikNKf1) }
                  : eN === U.oH.HOME
                    ? { icon: null, title: er.intl.string(er.t.Ym2Ri6) }
                    : { icon: null, title: er.intl.string(er.t.dPVrEv) };
        }, [eC, eA, eN, X, ew, eP]),
        eI = a.useCallback(() => {
            em("editing"), C.Ay.useReducedMotion && ey(x.ip.ENTERED);
        }, []),
        eM = a.useCallback((e) => {
            Z((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eD = a.useCallback(
            (e) => {
                ex(e.id), eI();
            },
            [eI],
        ),
        e_ = a.useCallback(() => {
            C.Ay.useReducedMotion && ex(null), em("gallery");
        }, []);
    a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === ej.current && ef && (e.stopPropagation(), e_());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [e_, n, ef]),
        a.useEffect(
            () =>
                "editing" === eu && null != eh
                    ? void (0, _.YK)(eh)
                    : ((0, _.TE)(),
                      () => {
                          (0, _.TE)();
                      }),
            [eu, eh],
        );
    let eT = a.useCallback(() => {
            Z(new Set());
        }, []),
        eR = W.size > 0,
        ez = a.useCallback(() => {
            let e = ei.filter((e) => W.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                eT(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ei, W, eT]),
        eH = a.useCallback(async () => {
            let e = ei.filter((e) => W.has(e.id));
            await eo({ clips: e }), eT();
        }, [ei, W, eo, eT]),
        eF = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ei.forEach((i) => {
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
                    number_of_clips_loaded: ei.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eN,
                }
            );
        }, [ei, eN]);
    (0, k.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: eF },
        { disableTrack: en },
        [eF, en],
    );
    let eG = a.useMemo(
        () => ({ selectedClipIds: W, toggleClipSelection: eM, clearSelection: eT, isMultiSelectMode: eR }),
        [W, eM, eT, eR],
    );
    return (0, i.jsx)(N.f5, {
        value: B,
        children: (0, i.jsx)(lm.Provider, {
            value: eG,
            children: (0, i.jsx)(h.N, {
                onClose: n,
                transitionState: V,
                ...Y,
                children: (0, i.jsxs)("div", {
                    className: lu.jT,
                    ref: eb,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(lu.PD, "gallery" === eu && lu.vu),
                            inert: "gallery" !== eu,
                            children: [
                                (0, i.jsx)(lc, {
                                    gamesFacet: X,
                                    distributedClipInitiatorsFacet: J,
                                    mainLinkCounts: et,
                                    mainLinkNewCounts: el,
                                }),
                                (0, i.jsxs)("div", {
                                    className: lu.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: lu.$Q,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: lu.Rj,
                                                    children: [
                                                        eS.icon,
                                                        (0, i.jsx)(p.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eS.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: lu.$s,
                                                    children: [
                                                        eR &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(m.m, {
                                                                        text: er.intl.string(er.t.RDE0Sc),
                                                                        children: (0, i.jsx)(j.K, {
                                                                            onClick: eH,
                                                                            icon: v.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": er.intl.string(er.t.RDE0Sc),
                                                                            loading: ed,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(m.m, {
                                                                        text: er.intl.string(er.t.oyYWHE),
                                                                        children: (0, i.jsx)(j.K, {
                                                                            onClick: ez,
                                                                            icon: y.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": er.intl.string(er.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(j.K, {
                                                            onClick: n,
                                                            icon: b.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": er.intl.string(er.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        ek === U.fB.HOME
                                            ? (0, i.jsx)(t3, {
                                                  filteredClips: ee,
                                                  totalClipCount: ei.length,
                                                  onEdit: eD,
                                                  onClipClick: K,
                                                  isLoading: en,
                                              })
                                            : (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(tF, {
                                                          allClips: ei,
                                                          gamesFacet: X,
                                                          participantsFacet: q,
                                                      }),
                                                      (0, i.jsx)(e6, {
                                                          onEdit: eD,
                                                          channelId: t,
                                                          filteredClips: ee,
                                                          totalClipCount: ei.length,
                                                          onClipClick: K,
                                                          isLoading: en,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(lu.jN, "editing" === eu && lu.vu),
                            inert: "editing" !== eu,
                            onTransitionEnd: () => {
                                switch (eu) {
                                    case "gallery":
                                        ex(null), ey(x.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        ey(x.ip.ENTERED);
                                }
                            },
                            children:
                                null != eg &&
                                (0, i.jsx)(F.p, {
                                    clip: eg,
                                    modalContainerRef: eb,
                                    children: ep
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(H.A, { transitionState: ev, onClose: e_ }),
                                                  (0, i.jsx)(z.A, { channelId: t, onClose: e_ }),
                                              ],
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(T.A, { transitionState: ev, onClose: e_ }),
                                                  (0, i.jsx)(R.A, { channelId: t, onClose: e_ }),
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
