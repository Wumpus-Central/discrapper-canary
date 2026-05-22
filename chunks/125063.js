l.d(t, { $: () => e5, default: () => e9 });
var i = l(627968),
    a = l(64700),
    n = l(503698),
    s = l.n(n),
    r = l(17928),
    d = l(990078),
    c = l(521489),
    o = l(231723),
    u = l(192308),
    m = l(534514),
    p = l(408278),
    h = l(405433),
    x = l(241326),
    g = l(972213),
    f = l(775602),
    v = l(793574),
    j = l(688810),
    C = l(274372),
    y = l(607814),
    A = l(556316),
    b = l(309777),
    E = l(429364),
    N = l(352527),
    I = l(280483);
l(321073);
var L = l(562708),
    k = l(834730),
    w = l(289873),
    D = l(139286),
    M = l(962125),
    S = l(989349),
    P = l.n(S),
    R = l(66455),
    _ = l(342952),
    T = l(890856),
    z = l(778712),
    G = l(777666),
    O = l(27232),
    U = l(505930),
    K = l(530005),
    H = l(406810),
    F = l(176781),
    Q = l(661531),
    Y = l(983851),
    $ = l(31300),
    V = l(442433),
    B = l(587895),
    X = l(47167),
    q = l(607470),
    W = l(734057),
    J = l(71393),
    Z = l(287809),
    ee = l(549685),
    et = l(174459),
    el = l(58703),
    ei = l(403362),
    ea = l(372684),
    en = l(226421),
    es = l(665039),
    er = l(718812),
    ed = l(652215),
    ec = l(16590),
    eo = l(375708),
    eu = l(798594);
let em = function (e) {
    let { clip: t, actionsDisabled: n, isNew: d, onEdit: c, onClick: o } = e,
        u = (0, r.yK)([Z.default], () => t.users.map((e) => Z.default.getUser(e)).filter(ei.Vq)),
        m = (0, r.bG)([W.A], () => (null != t.channelId ? W.A.getChannel(t.channelId) : null)),
        p = (0, r.bG)([J.A], () => (null != t.guildId ? J.A.getGuild(t.guildId) : null)),
        { analyticsLocations: h } = (0, j.Ay)(v.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: f } = a.useContext(e5),
        [y, A] = a.useState(!1),
        b = a.useRef(null),
        E = (0, R.A)(t.editMetadata?.start ?? 0),
        N = x.has(t.id),
        I = t.type === ea.nQ.SCREENSHOT,
        L = (0, X.Ay)(m),
        w = "" === t.applicationName && null != L && "" !== L ? L : t.applicationName,
        D = (0, el.Fe)(new Date(t.createdAt)),
        M = a.useMemo(() => {
            let e = [];
            return (
                t.type === ea.nQ.VOICE_CLIP
                    ? (p?.name != null && e.push(p.name), null != L && e.push(L))
                    : ("" !== w && null != w && e.push(w),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [w, p?.name, L, t.activity?.state, t.activity?.details, t.type]),
        S = a.useCallback(() => {
            let e = b.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        P = a.useCallback(() => {
            if (!0 === I) return;
            let e = b.current;
            null != e && e.paused && ((e.currentTime = E.current), b.current?.play());
        }, [I, E]),
        G = a.useCallback(() => {
            if (!0 === I) return;
            let e = b.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start]),
        O = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && G();
            },
            [G],
        ),
        U = a.useCallback(() => {
            A(!1);
        }, []),
        K = a.useCallback(
            (e) => {
                A(!0), b.current?.pause();
                let a =
                    f && x.size > 0
                        ? Array.from(x)
                              .map((e) => C.A.getClipById(e))
                              .filter(ei.Vq)
                        : [t];
                (0, V.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([l.e("69006"), l.e("70229")]).then(l.bind(l, 875796));
                        return (l) =>
                            (0, i.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: n,
                                onShare: () => {
                                    et.default.track(ed.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), et.default.track(ed.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: S,
                                onAfterDelete: () => {
                                    et.default.track(ed.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: U },
                );
            },
            [t, f, x, n, S, U, c],
        ),
        H = a.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), K(e));
            },
            [n, K],
        ),
        F = a.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), g(t.id)) : f ? g(t.id) : null != o && o(t),
                    et.default.track(ed.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [n, f, g, t, o],
        );
    return (0, i.jsx)(j.f5, {
        value: h,
        children: (0, i.jsxs)(T.s, {
            "aria-disabled": n,
            "aria-label": eo.intl.string(!0 === I ? eo.t["HO/oXl"] : eo.t.bt75uw),
            onClick: n ? void 0 : F,
            onContextMenu: H,
            className: s()(eu.QN, { [eu.r9]: n, [eu.in]: y, [eu.wH]: N }),
            onBlur: O,
            onFocus: P,
            onMouseOver: P,
            onMouseLeave: G,
            children: [
                (0, i.jsx)(ep, { clip: t, isNew: d, videoRef: b, onOpenContextMenu: K, actionsDisabled: n }),
                (0, i.jsxs)("div", {
                    className: eu.wI,
                    children: [
                        (0, i.jsx)(eg, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: eu.i0,
                            children: [
                                (0, i.jsx)(eh, { clip: t }),
                                (0, i.jsx)(k.E, {
                                    className: eu.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: M,
                                }),
                                (0, i.jsx)(k.E, {
                                    className: eu.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: D,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: eu.jW,
                            children: (0, i.jsx)(_.A, {
                                maxUsers: 3,
                                users: u,
                                size: z._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && P());
                                },
                                "aria-label": eo.intl.string(eo.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function ep(e) {
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: s, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [u, m] = a.useState(0);
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
            let a = P().duration(e),
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
        f = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, i.jsxs)("div", {
        className: eu.QB,
        children: [
            (0, i.jsx)("div", { className: eu.ne }),
            !o && l && (0, i.jsx)(G.Lp, { className: eu.Ad, text: eo.intl.string(eo.t.y2b7CA) }),
            !r &&
                (0, i.jsxs)("div", {
                    className: eu.g3,
                    children: [
                        (0, i.jsx)(
                            d.m,
                            {
                                text: eo.intl.string(t.isFavorite ? ec.default.IZsalP : ec.default.ihBfyA),
                                position: "top",
                                children: (0, i.jsx)(p.K, {
                                    onClick: g,
                                    icon: t.isFavorite ? O.G : U.y,
                                    "aria-label": eo.intl.string(eo.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(p.K, {
                            onClick: f,
                            icon: K.F,
                            "aria-label": eo.intl.string(eo.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsx)(ex, { clip: t, videoRef: n }),
            (0, i.jsxs)("div", {
                className: eu.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, i.jsxs)("div", {
                            className: eu.OH,
                            children: [
                                t.isTemporary && (0, i.jsx)(H.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(k.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: eo.intl.string(eo.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !c &&
                        (0, i.jsxs)("div", {
                            className: eu.OH,
                            children: [
                                x && (0, i.jsx)(ee.A, { color: "white", width: 16, height: 16 }),
                                (0, i.jsx)("span", {
                                    children: (0, i.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: o ? eo.intl.string(eo.t["2Fp7OP"]) : h,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: eu.X7,
                    children: (0, i.jsx)("div", { className: eu.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function eh(e) {
    let { clip: t } = e,
        l = (0, er.h)(t),
        a = "" !== l;
    return (0, i.jsx)(k.E, {
        className: eu.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function ex(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, es.j)(t),
        n = t.type === ea.nQ.SCREENSHOT;
    return t.type === ea.nQ.VOICE_CLIP
        ? (0, i.jsx)(en.A, { className: eu.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eu.fT })
          : null != a
            ? (0, i.jsx)(q.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: eu.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eu.fT })
              : (0, i.jsx)("div", {
                    className: s()(eu.fT, eu.Is),
                    children: (0, i.jsx)(F.x, { color: Q.A.colors.ICON_MUTED }),
                });
}
function eg(e) {
    let { clip: t } = e,
        l = (0, r.bG)([B.A], () => (null != t.applicationId ? B.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eu.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, i.jsx)("img", { src: a, alt: "", className: eu.NH })
                : t.type === ea.nQ.VOICE_CLIP
                  ? (0, i.jsx)(Y.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)($.k, { size: "sm", color: "currentColor" }),
    });
}
function ef(e) {
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
var ev = l(702841),
    ej = l(687966),
    eC = l(475358),
    ey = l(123292),
    eA = l(292801),
    eb = l(780964),
    eE = l(766075),
    eN = l(532624),
    eI = l(350535),
    eL = l(572164),
    ek = l(953932),
    ew = l(311162);
function eD(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ew.Nr,
        children: [t, (0, i.jsx)(k.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eM() {
    let e = (0, ev.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(ed.hCu.SAVE_CLIP)),
        t = null != e ? eI.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: ew.kR,
        children: [
            (0, i.jsx)(eD, {
                header: (0, i.jsx)(ej._, { size: "refresh_sm", color: Q.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(ec.default["4K56sP"]),
            }),
            (0, i.jsx)(eD, {
                header: null != t ? (0, i.jsx)(eC.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  eo.intl.format(ec.default.BIwQis, { keybind: t }),
                                  (0, i.jsx)("div", {
                                      className: ew.JH,
                                      children: (0, i.jsx)(ey.Q, {
                                          text: eo.intl.string(ec.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, eE.openUserSettings)(eb.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : eo.intl.string(ec.default.HOUDUm),
            }),
            (0, i.jsx)(eD, {
                header: (0, i.jsx)(eA.t, { size: "refresh_sm", color: Q.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(ec.default.DLzdl7),
            }),
        ],
    });
}
function eS(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eL.Et)();
    return (0, i.jsx)("div", {
        className: ew.kL,
        children: (0, i.jsxs)("div", {
            className: ew.Qs,
            children: [
                (0, i.jsx)(ef, { width: 213, height: 135, alt: "" }),
                (0, i.jsx)(m.D, {
                    className: ew.wx,
                    variant: "heading-xl/semibold",
                    children: t ? eo.intl.string(ec.default["+M2iLf"]) : eo.intl.string(ec.default.m2GEpP),
                }),
                t &&
                    (0, i.jsx)(k.E, {
                        className: ew.h_,
                        variant: "text-md/medium",
                        children: eo.intl.string(ec.default.xkY5xS),
                    }),
                !l && (0, i.jsx)("div", { className: ew.SO, children: (0, i.jsx)(ek.A, {}) }),
                l && !t && (0, i.jsx)(eM, {}),
            ],
        }),
    });
}
let eP = 16 / 9;
var eR = l(352528);
let e_ = [0, 16, 0, 16],
    eT = e_[1] + e_[3];
function ez(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: s } = e,
        [d, c] = a.useState(!0),
        [o, u] = a.useState({ width: 0, height: 0 }),
        p = (0, r.bG)([C.A], () => C.A.getSettings().storageLocation),
        h = (0, r.yK)([C.A], () => C.A.getNewClipIds()),
        x = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0);
    (0, D.A)(
        {
            type: L.ImpressionTypes.MODAL,
            name: L.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: d },
        [t.length, d],
    );
    let g = a.useMemo(() => {
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
                    title: eo.intl.string(eo.t["kB2R/0"]),
                    description: t ? eo.intl.string(eo.t["6AXirz"]) : void 0,
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
        { width: f } = o,
        { tileWidth: v, columns: j } = a.useMemo(() => {
            var e, l;
            let i, a, n;
            return (
                (e = t.length),
                (i = Math.max(1, Math.floor(((l = f - eT) + 16) / 336))),
                (a = Math.max(320, (l - 16 * (i - 1)) / i)),
                (n = Math.ceil(e / i)),
                { tileWidth: a, columns: i, rows: n }
            );
        }, [t.length, f]);
    a.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await y.Fb(p);
            } finally {
                c(!1);
            }
        })();
    }, [p]);
    let A = a.useMemo(() => g.map((e) => Math.ceil(e.clips.length / j)), [g, j]),
        b = a.useMemo(() => A.reduce((e, t) => e + t, 0), [A]),
        E = Math.floor(v / eP),
        N = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = g[l];
                if (null == r) return null;
                let d = a * j,
                    c = r.clips.slice(d, d + j);
                return (0, i.jsx)(
                    "div",
                    {
                        className: eR.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: v },
                                    children: (0, i.jsx)(em, {
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
            [g, j, v, x, h, n, s],
        ),
        I = a.useCallback(
            (e) => {
                let t = g[e];
                return t?.description != null ? 66 : 44;
            },
            [g],
        ),
        S = a.useCallback(
            (e) => {
                let t = g[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: eR.aE,
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
                                          className: eR.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [g],
        );
    return d || 0 !== g.length
        ? d
            ? (0, i.jsx)("div", { className: eR.dc, children: (0, i.jsx)(w.y, {}) })
            : (0, i.jsx)(M.A, {
                  listPadding: e_,
                  renderRow: N,
                  renderSectionHeader: S,
                  rowCount: b,
                  rowCountBySection: A,
                  rowHeight: E + 68 + 16,
                  sectionHeaderHeight: I,
                  onResize: u,
              })
        : (0, i.jsx)(eS, { isEmptyBecauseQuery: l > 0 });
}
var eG = l(922016),
    eO = l(821609),
    eU = l(783977),
    eK = l(625903),
    eH = l(892547),
    eF = l(939249),
    eQ = l(364522),
    eY = l(429913),
    e$ = l(137177),
    eV = l(91871),
    eB = l.n(eV),
    eX = l(980707),
    eq = l(477782),
    eW = l(583650),
    eJ = l(792852);
function eZ(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: s,
            selectedGuildId: r,
            selectedYear: d,
            sortOrder: c,
            toggleUserId: o,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: p,
            setSortOrder: h,
            clearFilters: x,
        } = (0, eJ.P)(),
        g = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) l.users.forEach((e) => t.add(e));
                    let l = [];
                    for (let e of t) {
                        let t = Z.default.getUser(e);
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
                        let t = J.A.getGuild(e);
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
        [A, b] = a.useState(""),
        [E, N] = a.useState(""),
        I = a.useMemo(
            () => (0 === C.trim().length ? g : g.filter((e) => eB()(C.toLowerCase(), e.name.toLowerCase()))),
            [g, C],
        ),
        L = a.useMemo(
            () => (0 === A.trim().length ? v : v.filter((e) => eB()(A.toLowerCase(), e.name.toLowerCase()))),
            [v, A],
        ),
        k = a.useMemo(
            () => (0 === E.trim().length ? f : f.filter((e) => eB()(E.toLowerCase(), e.toLowerCase()))),
            [f, E],
        ),
        w = n.size > 0 || null != s || null != r || null != d,
        D = a.useMemo(() => {
            if (0 !== n.size)
                return g
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, g]),
        M = a.useMemo(() => {
            if (null == r) return;
            let e = v.find((e) => e.guildId === r);
            return e?.name;
        }, [r, v]),
        S = a.useMemo(() => s ?? void 0, [s]),
        P = a.useMemo(() => (null != d ? String(d) : void 0), [d]);
    return (0, i.jsxs)(eX.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": eo.intl.string(eo.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(eq.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(eq.Dr, {
                            id: "participants",
                            label: eo.intl.string(eo.t.YQ6dJg),
                            subtext: D,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(eq.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(eW.V, {
                                                ...e,
                                                query: C,
                                                onChange: y,
                                                ref: t,
                                                placeholder: eo.intl.string(eo.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        eq.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, i.jsxs)(eq.Dr, {
                            id: "servers",
                            label: eo.intl.string(eo.t["5qyruI"]),
                            subtext: M,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(eq.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(eW.V, {
                                                ...e,
                                                query: A,
                                                onChange: b,
                                                ref: t,
                                                placeholder: eo.intl.string(eo.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(eq.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: eo.intl.string(eo.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                L.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        eq.iD,
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
                        (0, i.jsxs)(eq.Dr, {
                            id: "activities",
                            label: eo.intl.string(eo.t.agRtPG),
                            subtext: S,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(eq.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(eW.V, {
                                                ...e,
                                                query: E,
                                                onChange: N,
                                                ref: t,
                                                placeholder: eo.intl.string(eo.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(eq.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: eo.intl.string(eo.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == s,
                                }),
                                k.map((e) =>
                                    (0, i.jsx)(
                                        eq.iD,
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
                        (0, i.jsxs)(eq.Dr, {
                            id: "years",
                            label: eo.intl.string(eo.t.w9zd68),
                            subtext: P,
                            children: [
                                (0, i.jsx)(eq.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: eo.intl.string(eo.t["2/yeUU"]),
                                    action: () => p(null),
                                    checked: null == d,
                                }),
                                j.map((e) =>
                                    (0, i.jsx)(
                                        eq.iD,
                                        {
                                            id: `year-${e}`,
                                            group: "year",
                                            label: String(e),
                                            action: () => p(e),
                                            checked: d === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                ],
            }),
            (0, i.jsxs)(eq.rX, {
                label: eo.intl.string(eo.t.XvNMNk),
                children: [
                    (0, i.jsx)(eq.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: eo.intl.string(eo.t["4LLKx3"]),
                        action: () => h("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(eq.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: eo.intl.string(eo.t["0gitSE"]),
                        action: () => h("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            w &&
                (0, i.jsx)(eq.rX, {
                    children: (0, i.jsx)(eq.Dr, { id: "clear-filters", label: eo.intl.string(eo.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var e0 = l(174726);
let e2 = a.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: n } = (0, eJ.P)(),
            s = (0, ev.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(ed.hCu.SAVE_CLIP)),
            r = (0, eJ.P)(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = a.useCallback(() => {
                (0, eE.openUserSettings)(eb.X.CLIPS_PANEL);
            }, []),
            o = a.useCallback(() => n(""), [n]),
            u = null != s ? eI.dI(s.shortcut, !0) : null,
            h = a.useRef(null);
        return (0, i.jsxs)("div", {
            className: e0.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: e0.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e0.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: eo.intl.string(eo.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(eC.e, { className: e0.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: e0.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: eo.intl.string(eo.t.X7yRDm),
                                    children: (0, i.jsx)(eG.Y, {
                                        position: "bottom",
                                        targetElementRef: h,
                                        renderPopout: (e) => (0, i.jsx)(eZ, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: h,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(eO.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: eo.intl.formatToPlainString(ec.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: eU.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(p.K, {
                                                              icon: eU.R,
                                                              ...e,
                                                              size: "sm",
                                                              variant: "icon-only",
                                                              "aria-label": eo.intl.string(eo.t.X7yRDm),
                                                          }),
                                            }),
                                    }),
                                }),
                                (0, i.jsx)(d.m, {
                                    text: eo.intl.string(eo.t["3D5yo/"]),
                                    children: (0, i.jsx)(p.K, {
                                        onClick: c,
                                        icon: eK.Z,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eo.intl.string(eo.t["3D5yo/"]),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: e0.MT,
                    children: (0, i.jsx)(eH.I, {
                        placeholder: eo.intl.string(eo.t["5h0QOP"]),
                        query: l,
                        onChange: n,
                        onClear: o,
                        size: "md",
                    }),
                }),
            ],
        });
    }),
    e7 = a.memo(function (e) {
        let { name: t, count: l, icon: a, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(eF.D, {
            className: s()(e0.MV, { [e0.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: e0.tk,
                    children: [
                        a,
                        (0, i.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: e0.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: e0.z2,
                    children: (0, i.jsx)(k.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function e3(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: n, allClips: s } = e,
        r = (0, eJ.P)((e) => e.selectedGameId),
        d = (0, eJ.P)((e) => e.setSelectedGameId),
        c = a.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, eY.A)(c),
        u = a.useCallback(() => d(null), [d]),
        p = a.useCallback(() => d("favorites"), [d]),
        h = a.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: e0.pz,
        children: [
            (0, i.jsx)(e2, { allClips: s }),
            (0, i.jsxs)("div", {
                className: e0.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: e0.om,
                        children: (0, i.jsxs)("div", {
                            className: e0.Ep,
                            children: [
                                (0, i.jsx)(e7, {
                                    name: eo.intl.string(eo.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(F.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(e7, {
                                    name: eo.intl.string(eo.t["9rlCk1"]),
                                    count: n.length,
                                    icon: (0, i.jsx)(O.G, {}),
                                    isSelected: "favorites" === r,
                                    onClick: p,
                                }),
                            ],
                        }),
                    }),
                    t.length > 0 &&
                        (0, i.jsxs)(eQ.Ip, {
                            className: e0.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: e0.a9,
                                    children: eo.intl.string(eo.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: e0.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: a } = e;
                                        return (0, i.jsx)(
                                            e7,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(e$.A, { game: h.get(a), size: e$.M.XSMALL }),
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
var e1 = l(409067),
    e6 = l(847455);
let e5 = a.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function e9(e) {
    let { channelId: t, onClose: n, onClipClick: L, transitionState: k, initialEditingClipId: w, ...D } = e;
    (0, I.A)();
    let { analyticsLocations: M } = (0, j.Ay)(v.A.CLIPS_GALLERY),
        [S, P] = a.useState(new Set()),
        { clipsByGame: R, filteredClips: _, favoriteClips: T, allClips: z } = (0, e1.a)(),
        { onShareClick: G } = (0, N.A)(t),
        O = (0, r.bG)([C.A], () => C.A.getExportingClipIds().length > 0),
        [U, K] = a.useState(null != w ? "editing" : "gallery"),
        [H, F] = a.useState(w ?? null),
        Q = (0, r.bG)([C.A], () => (null != H ? C.A.getClipById(H) : null), [H]),
        Y = a.useRef(U);
    (Y.current = U), (a.useRef(H).current = H);
    let [$, V] = a.useState(null != w ? o.ip.ENTERED : o.ip.HIDDEN),
        B = a.useRef(null),
        X = (0, eJ.P)((e) => e.selectedGameId),
        q = a.useMemo(
            () => (null == X || "favorites" === X ? null : (R.find((e) => e.applicationId === X) ?? null)),
            [X, R],
        ),
        W = a.useMemo(() => ("favorites" === X ? T : (q?.filteredClips ?? _)), [X, q, _, T]),
        J = a.useMemo(
            () => ("favorites" === X ? eo.intl.string(eo.t["9rlCk1"]) : (q?.name ?? eo.intl.string(eo.t.dPVrEv))),
            [X, q],
        ),
        Z = a.useCallback(() => {
            K("editing"), f.A.useReducedMotion && V(o.ip.ENTERED);
        }, []),
        ee = a.useCallback((e) => {
            P((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        et = a.useCallback(
            (e) => {
                F(e.id), Z();
            },
            [Z],
        ),
        el = a.useCallback(() => {
            f.A.useReducedMotion && F(null), K("gallery");
        }, []);
    a.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === Y.current && (e.stopPropagation(), el());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [el, n]),
        a.useEffect(
            () =>
                "editing" === U && null != H
                    ? void (0, y.YK)(H)
                    : ((0, y.jA)(),
                      () => {
                          (0, y.jA)();
                      }),
            [U, H],
        );
    let ei = a.useCallback(() => {
            P(new Set());
        }, []),
        ea = S.size > 0,
        en = a.useCallback(() => {
            let e = z.filter((e) => S.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                ei(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [z, S, ei]),
        es = a.useCallback(async () => {
            let e = z.filter((e) => S.has(e.id));
            await G({ clips: e }), ei();
        }, [z, S, G, ei]),
        er = a.useMemo(
            () => ({ selectedClipIds: S, toggleClipSelection: ee, clearSelection: ei, isMultiSelectMode: ea }),
            [S, ee, ei, ea],
        );
    return (0, i.jsx)(j.f5, {
        value: M,
        children: (0, i.jsx)(e5.Provider, {
            value: er,
            children: (0, i.jsx)(c.N, {
                onClose: n,
                transitionState: k,
                ...D,
                children: (0, i.jsxs)("div", {
                    className: e6.jT,
                    ref: B,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(e6.PD, "gallery" === U && e6.vu),
                            "aria-hidden": "gallery" !== U,
                            children: [
                                (0, i.jsx)(e3, { clipsByGame: R, filteredClips: _, favoriteClips: T, allClips: z }),
                                (0, i.jsxs)("div", {
                                    className: e6.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: e6.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: J,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: e6.$s,
                                                    children: [
                                                        ea &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: eo.intl.string(eo.t.RDE0Sc),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: es,
                                                                            icon: h.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eo.intl.string(eo.t.RDE0Sc),
                                                                            loading: O,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: eo.intl.string(eo.t.oyYWHE),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: en,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eo.intl.string(eo.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(p.K, {
                                                            onClick: n,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eo.intl.string(eo.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(ez, {
                                            onEdit: et,
                                            channelId: t,
                                            filteredClips: W,
                                            totalClipCount: z.length,
                                            onClipClick: L,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: s()(e6.jN, "editing" === U && e6.vu),
                            "aria-hidden": "editing" !== U,
                            onTransitionEnd: () => {
                                "gallery" === U ? (F(null), V(o.ip.HIDDEN)) : "editing" === U && V(o.ip.ENTERED);
                            },
                            children:
                                null != Q &&
                                (0, i.jsxs)(E.p, {
                                    clip: Q,
                                    modalContainerRef: B,
                                    children: [
                                        (0, i.jsx)(A.A, { transitionState: $, onClose: el }),
                                        (0, i.jsx)(b.A, { channelId: t, onClose: el }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
