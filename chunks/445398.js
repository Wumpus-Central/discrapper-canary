l.d(t, { $: () => e9, default: () => e8 });
var i = l(627968),
    s = l(64700),
    n = l(503698),
    a = l.n(n),
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
    C = l(688810),
    j = l(274372),
    y = l(607814),
    A = l(556316),
    b = l(309777),
    E = l(429364),
    N = l(280483),
    I = l(794905);
l(321073);
var w = l(562708),
    L = l(834730),
    k = l(289873),
    D = l(139286),
    S = l(962125),
    M = l(989349),
    R = l.n(M),
    P = l(66455),
    _ = l(342952),
    T = l(890856),
    G = l(778712),
    U = l(777666),
    O = l(27232),
    z = l(505930),
    F = l(530005),
    K = l(406810),
    H = l(176781),
    Y = l(661531),
    Q = l(983851),
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
    es = l(372684),
    en = l(226421),
    ea = l(665039),
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
        { analyticsLocations: h } = (0, C.Ay)(v.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: f } = s.useContext(e9),
        [y, A] = s.useState(!1),
        b = s.useRef(null),
        E = (0, P.A)(t.editMetadata?.start ?? 0),
        N = x.has(t.id),
        I = t.type === es.nQ.SCREENSHOT,
        w = (0, X.Ay)(m),
        k = "" === t.applicationName && null != w && "" !== w ? w : t.applicationName,
        D = (0, el.Fe)(new Date(t.createdAt)),
        S = s.useMemo(() => {
            let e = [];
            return (
                t.type === es.nQ.VOICE_CLIP
                    ? (p?.name != null && e.push(p.name), null != w && e.push(w))
                    : ("" !== k && null != k && e.push(k),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" \u203A ")
            );
        }, [k, p?.name, w, t.activity?.state, t.activity?.details, t.type]),
        M = s.useCallback(() => {
            let e = b.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        R = s.useCallback(() => {
            if (!0 === I) return;
            let e = b.current;
            null != e && e.paused && ((e.currentTime = E.current), b.current?.play());
        }, [I, E]),
        U = s.useCallback(() => {
            if (!0 === I) return;
            let e = b.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [I, t.editMetadata?.start]),
        O = s.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && U();
            },
            [U],
        ),
        z = s.useCallback(() => {
            A(!1);
        }, []),
        F = s.useCallback(
            (e) => {
                A(!0), b.current?.pause();
                let s =
                    f && x.size > 0
                        ? Array.from(x)
                              .map((e) => j.A.getClipById(e))
                              .filter(ei.Vq)
                        : [t];
                (0, V.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("66900"),
                            l.e("98793"),
                            l.e("73500"),
                            l.e("18489"),
                            l.e("36926"),
                            l.e("69006"),
                            l.e("80628"),
                        ]).then(l.bind(l, 183903));
                        return (l) =>
                            (0, i.jsx)(e, {
                                ...l,
                                clips: s,
                                actionsDisabled: n,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    et.default.track(ed.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    c(t), et.default.track(ed.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: M,
                                onAfterDelete: () => {
                                    et.default.track(ed.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: z },
                );
            },
            [t, f, x, n, M, z, c],
        ),
        K = s.useCallback(
            (e) => {
                n || (e.preventDefault(), e.stopPropagation(), F(e));
            },
            [n, F],
        ),
        H = s.useCallback(
            (e) => {
                n ||
                    (e.shiftKey ? (e.preventDefault(), g(t.id)) : f ? g(t.id) : null != o && o(t),
                    et.default.track(ed.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [n, f, g, t, o],
        );
    return (0, i.jsx)(C.f5, {
        value: h,
        children: (0, i.jsxs)(T.s, {
            "aria-disabled": n,
            "aria-label": eo.intl.string(!0 === I ? eo.t["HO/oXl"] : eo.t.bt75uw),
            onClick: n ? void 0 : H,
            onContextMenu: K,
            className: a()(eu.QN, { [eu.r9]: n, [eu.in]: y, [eu.wH]: N }),
            onBlur: O,
            onFocus: R,
            onMouseOver: R,
            onMouseLeave: U,
            children: [
                (0, i.jsx)(ep, { clip: t, isNew: d, videoRef: b, onOpenContextMenu: F, actionsDisabled: n }),
                (0, i.jsxs)("div", {
                    className: eu.wI,
                    children: [
                        (0, i.jsx)(eg, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: eu.i0,
                            children: [
                                (0, i.jsx)(eh, { clip: t }),
                                (0, i.jsx)(L.E, {
                                    className: eu.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: S,
                                }),
                                (0, i.jsx)(L.E, {
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
                                size: G._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && R());
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
    let { clip: t, isNew: l, videoRef: n, onOpenContextMenu: a, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [u, m] = s.useState(0);
    s.useEffect(() => {
        let e = n.current;
        if (null == e || c) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let s = t.editMetadata?.start ?? 0,
                    n = t.editMetadata?.end ?? e.duration,
                    a = ((e.currentTime - s) / (n - s)) * 100;
                m(isNaN(a) ? 0 : Math.max(0, Math.min(100, a))), (l = requestAnimationFrame(i));
            },
            s = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            a = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", s),
            e.addEventListener("pause", a),
            e.addEventListener("ended", a),
            e.paused || s(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", s),
                    e.removeEventListener("pause", a),
                    e.removeEventListener("ended", a);
            }
        );
    }, [n, c, t.editMetadata]);
    let { durationDisplay: h, isClipEdited: x } = s.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                i = !1;
            if (null != t.editMetadata) {
                let s = null != l && 1e3 * l < t.length,
                    n =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (i = s || n), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let s = R().duration(e),
                n = s.minutes(),
                a = s.seconds();
            return 0 === n
                ? { durationDisplay: `${a}s`, isClipEdited: i }
                : { durationDisplay: `${n}:${a.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        g = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), y.XK(t);
            },
            [t],
        ),
        f = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || a(e);
            },
            [r, a],
        );
    return (0, i.jsxs)("div", {
        className: eu.QB,
        children: [
            (0, i.jsx)("div", { className: eu.ne }),
            !o && l && (0, i.jsx)(U.Lp, { className: eu.Ad, text: eo.intl.string(eo.t.y2b7CA) }),
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
                                    icon: t.isFavorite ? O.G : z.y,
                                    "aria-label": eo.intl.string(eo.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, i.jsx)(p.K, {
                            onClick: f,
                            icon: F.F,
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
                                t.isTemporary && (0, i.jsx)(K.O, { color: "white", size: "xs" }),
                                (0, i.jsx)(L.E, {
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
                                    children: (0, i.jsx)(L.E, {
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
        s = "" !== l;
    return (0, i.jsx)(L.E, {
        className: eu.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: s ? l : t.name,
    });
}
function ex(e) {
    let { clip: t, videoRef: l } = e,
        s = (0, ea.j)(t),
        n = t.type === es.nQ.SCREENSHOT;
    return t.type === es.nQ.VOICE_CLIP
        ? (0, i.jsx)(en.A, { className: eu.fT })
        : n
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eu.fT })
          : null != s
            ? (0, i.jsx)(q.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: s,
                  loop: !0,
                  className: eu.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: eu.fT })
              : (0, i.jsx)("div", {
                    className: a()(eu.fT, eu.Is),
                    children: (0, i.jsx)(H.x, { color: Y.A.colors.ICON_MUTED }),
                });
}
function eg(e) {
    let { clip: t } = e,
        l = (0, r.bG)([B.A], () => (null != t.applicationId ? B.A.getApplication(t.applicationId) : null)),
        s = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: eu.gS,
        "aria-hidden": "true",
        children:
            null != s
                ? (0, i.jsx)("img", { src: s, alt: "", className: eu.NH })
                : t.type === es.nQ.VOICE_CLIP
                  ? (0, i.jsx)(Q.H, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)($.k, { size: "sm", color: "currentColor" }),
    });
}
function ef(e) {
    let { alt: t, ariaLabel: l, ariaHidden: s, role: n, width: a = 288, height: r = 162 } = e;
    return (0, i.jsx)("img", {
        style: { width: a, height: r },
        src: "https://cdn.discordapp.com/assets/content/469fc21d7c695426b2a4476c47ce30c6ff93031a6c38a6bdf12f95264ae547f6.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var ev = l(702841),
    eC = l(687966),
    ej = l(475358),
    ey = l(123292),
    eA = l(292801),
    eb = l(780964),
    eE = l(766075),
    eN = l(532624),
    eI = l(350535),
    ew = l(311162);
function eL(e) {
    let { header: t, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ew.Nr,
        children: [t, (0, i.jsx)(L.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ek() {
    let e = (0, ev.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(ed.hCu.SAVE_CLIP)),
        t = null != e ? eI.dI(e.shortcut, !0) : null;
    return (0, i.jsxs)("div", {
        className: ew.kR,
        children: [
            (0, i.jsx)(eL, {
                header: (0, i.jsx)(eC._, { size: "refresh_sm", color: Y.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(ec.default["4K56sP"]),
            }),
            (0, i.jsx)(eL, {
                header: null != t ? (0, i.jsx)(ej.e, { shortcut: t }) : null,
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
            (0, i.jsx)(eL, {
                header: (0, i.jsx)(eA.t, { size: "refresh_sm", color: Y.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(ec.default.DLzdl7),
            }),
        ],
    });
}
function eD(e) {
    let { isEmptyBecauseQuery: t } = e;
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
                t
                    ? (0, i.jsx)(L.E, {
                          className: ew.h_,
                          variant: "text-md/medium",
                          children: eo.intl.string(ec.default.xkY5xS),
                      })
                    : (0, i.jsx)(ek, {}),
            ],
        }),
    });
}
var eS = l(352528);
let eM = 16 / 9,
    eR = [0, 16, 0, 16],
    eP = eR[1] + eR[3];
function e_(e, t) {
    return Math.ceil(t / e);
}
function eT(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: n, onEdit: a } = e,
        [d, c] = s.useState(!0),
        [o, u] = s.useState({ width: 0, height: 0 }),
        p = (0, r.bG)([j.A], () => j.A.getSettings().storageLocation),
        h = (0, r.yK)([j.A], () => j.A.getNewClipIds()),
        x = (0, r.bG)([j.A], () => j.A.getExportingClipIds().length > 0);
    (0, D.A)(
        {
            type: w.ImpressionTypes.MODAL,
            name: w.ImpressionNames.CLIP_GALLERY_VIEWED,
            properties: { number_of_clips_loaded: t.length },
        },
        { disableTrack: d },
        [t.length, d],
    );
    let g = s.useMemo(() => {
            let e = [],
                l = new Map(),
                i = [],
                s = new Date();
            s.setHours(0, 0, 0, 0);
            let n = s.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        s = new Date(t);
                    if ((s.setHours(0, 0, 0, 0), s.getTime() === n)) i.push(e);
                    else {
                        let i = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            s = l.get(i) ?? [];
                        l.set(i, [...s, e]);
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
        { tileWidth: v, columns: C } = s.useMemo(() => {
            var e;
            let l, i, s, n, a;
            return (
                (e = t.length),
                (s = 16 * ((i = Math.max(1, Math.floor(((l = f - eP) + 16) / 336))) - 1)),
                (n = Math.max(320, (l - s) / i)),
                (a = e_(i, e)),
                { tileWidth: n, columns: i, rows: a }
            );
        }, [t.length, f]);
    s.useEffect(() => {
        !(async function () {
            c(!0);
            try {
                await y.Fb(p);
            } finally {
                c(!1);
            }
        })();
    }, [p]);
    let A = s.useMemo(() => g.map((e) => e_(C, e.clips.length)), [g, C]),
        b = s.useMemo(() => A.reduce((e, t) => e + t, 0), [A]),
        E = Math.floor(v / eM),
        N = s.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: s } = t,
                    r = g[l];
                if (null == r) return null;
                let d = s * C,
                    c = r.clips.slice(d, d + C);
                return (0, i.jsx)(
                    "div",
                    {
                        className: eS.UX,
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "div",
                                {
                                    style: { width: v },
                                    children: (0, i.jsx)(em, {
                                        actionsDisabled: x,
                                        isNew: h.includes(e.id),
                                        onClick: n ?? a,
                                        onEdit: a,
                                        clip: e,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                    },
                    `row-${l}-${s}`,
                );
            },
            [g, C, v, x, h, n, a],
        ),
        I = s.useCallback(
            (e) => {
                let t = g[e];
                return t?.description != null ? 66 : 44;
            },
            [g],
        ),
        M = s.useCallback(
            (e) => {
                let t = g[e];
                return null == t
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: eS.aE,
                              children: [
                                  (0, i.jsx)(m.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, i.jsx)(L.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: eS.yV,
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
            ? (0, i.jsx)("div", { className: eS.dc, children: (0, i.jsx)(k.y, {}) })
            : (0, i.jsx)(S.A, {
                  listPadding: eR,
                  renderRow: N,
                  renderSectionHeader: M,
                  rowCount: b,
                  rowCountBySection: A,
                  rowHeight: E + 68 + 16,
                  sectionHeaderHeight: I,
                  onResize: u,
              })
        : (0, i.jsx)(eD, { isEmptyBecauseQuery: l > 0 });
}
var eG = l(922016),
    eU = l(821609),
    eO = l(783977),
    ez = l(625903),
    eF = l(892547),
    eK = l(939249),
    eH = l(364522),
    eY = l(429913),
    eQ = l(137177),
    e$ = l(91871),
    eV = l.n(e$),
    eB = l(980707),
    eX = l(477782),
    eq = l(583650),
    eW = l(353640);
let eJ = {
        query: "",
        sortOrder: "descending",
        selectedGameId: null,
        selectedUserIds: new Set(),
        selectedActivity: null,
        selectedGuildId: null,
        selectedYear: null,
    },
    eZ = (0, eW.v)((e) => ({
        ...eJ,
        setQuery: (t) => e({ query: t }),
        setSortOrder: (t) => e({ sortOrder: t }),
        setSelectedGameId: (t) => e({ selectedGameId: t }),
        setSelectedUserIds: (t) => e({ selectedUserIds: t }),
        toggleUserId: (t) =>
            e((e) => {
                let l = new Set(e.selectedUserIds);
                return l.has(t) ? l.delete(t) : l.add(t), { selectedUserIds: l };
            }),
        setSelectedActivity: (t) => e({ selectedActivity: t }),
        setSelectedGuildId: (t) => e({ selectedGuildId: t }),
        setSelectedYear: (t) => e({ selectedYear: t }),
        clearFilters: () =>
            e({ selectedUserIds: new Set(), selectedActivity: null, selectedGuildId: null, selectedYear: null }),
        resetFilters: () => e(eJ),
    }));
function e0(e) {
    let { closePopout: t, allClips: l } = e,
        {
            selectedUserIds: n,
            selectedActivity: a,
            selectedGuildId: r,
            selectedYear: d,
            sortOrder: c,
            toggleUserId: o,
            setSelectedActivity: u,
            setSelectedGuildId: m,
            setSelectedYear: p,
            setSortOrder: h,
            clearFilters: x,
        } = eZ(),
        g = s.useMemo(
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
        f = s.useMemo(
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
        v = s.useMemo(
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
        C = s.useMemo(
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
        [j, y] = s.useState(""),
        [A, b] = s.useState(""),
        [E, N] = s.useState(""),
        I = s.useMemo(
            () => (0 === j.trim().length ? g : g.filter((e) => eV()(j.toLowerCase(), e.name.toLowerCase()))),
            [g, j],
        ),
        w = s.useMemo(
            () => (0 === A.trim().length ? v : v.filter((e) => eV()(A.toLowerCase(), e.name.toLowerCase()))),
            [v, A],
        ),
        L = s.useMemo(
            () => (0 === E.trim().length ? f : f.filter((e) => eV()(E.toLowerCase(), e.toLowerCase()))),
            [f, E],
        ),
        k = n.size > 0 || null != a || null != r || null != d,
        D = s.useMemo(() => {
            if (0 !== n.size)
                return g
                    .filter((e) => n.has(e.userId))
                    .map((e) => e.name)
                    .join(", ");
        }, [n, g]),
        S = s.useMemo(() => {
            if (null == r) return;
            let e = v.find((e) => e.guildId === r);
            return e?.name;
        }, [r, v]),
        M = s.useMemo(() => a ?? void 0, [a]),
        R = s.useMemo(() => (null != d ? String(d) : void 0), [d]);
    return (0, i.jsxs)(eB.W, {
        "data-menu-migrated": !0,
        navId: "clips-filters-context",
        "aria-label": eo.intl.string(eo.t.X7yRDm),
        onClose: t,
        onSelect: void 0,
        variant: "fixed",
        children: [
            (0, i.jsxs)(eX.rX, {
                label: "Filter",
                children: [
                    g.length > 0 &&
                        (0, i.jsxs)(eX.Dr, {
                            id: "participants",
                            label: eo.intl.string(eo.t.YQ6dJg),
                            subtext: D,
                            children: [
                                g.length > 20 &&
                                    (0, i.jsx)(eX.aK, {
                                        id: "participants-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(eq.V, {
                                                ...e,
                                                query: j,
                                                onChange: y,
                                                ref: t,
                                                placeholder: eo.intl.string(eo.t["5h0QOP"]),
                                            }),
                                    }),
                                I.map((e) => {
                                    let { userId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        eX.sL,
                                        { id: `participant-${t}`, label: l, action: () => o(t), checked: n.has(t) },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    v.length > 0 &&
                        (0, i.jsxs)(eX.Dr, {
                            id: "servers",
                            label: eo.intl.string(eo.t["5qyruI"]),
                            subtext: S,
                            children: [
                                v.length > 20 &&
                                    (0, i.jsx)(eX.aK, {
                                        id: "servers-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(eq.V, {
                                                ...e,
                                                query: A,
                                                onChange: b,
                                                ref: t,
                                                placeholder: eo.intl.string(eo.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(eX.iD, {
                                    id: "server-all",
                                    group: "server",
                                    label: eo.intl.string(eo.t["2/yeUU"]),
                                    action: () => m(null),
                                    checked: null == r,
                                }),
                                w.map((e) => {
                                    let { guildId: t, name: l } = e;
                                    return (0, i.jsx)(
                                        eX.iD,
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
                        (0, i.jsxs)(eX.Dr, {
                            id: "activities",
                            label: eo.intl.string(eo.t.agRtPG),
                            subtext: M,
                            children: [
                                f.length > 20 &&
                                    (0, i.jsx)(eX.aK, {
                                        id: "activities-search",
                                        control: (e, t) =>
                                            (0, i.jsx)(eq.V, {
                                                ...e,
                                                query: E,
                                                onChange: N,
                                                ref: t,
                                                placeholder: eo.intl.string(eo.t["5h0QOP"]),
                                            }),
                                    }),
                                (0, i.jsx)(eX.iD, {
                                    id: "activity-all",
                                    group: "activity",
                                    label: eo.intl.string(eo.t["2/yeUU"]),
                                    action: () => u(null),
                                    checked: null == a,
                                }),
                                L.map((e) =>
                                    (0, i.jsx)(
                                        eX.iD,
                                        {
                                            id: `activity-${e}`,
                                            group: "activity",
                                            label: e,
                                            action: () => u(e),
                                            checked: a === e,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    C.length > 0 &&
                        (0, i.jsxs)(eX.Dr, {
                            id: "years",
                            label: eo.intl.string(eo.t.w9zd68),
                            subtext: R,
                            children: [
                                (0, i.jsx)(eX.iD, {
                                    id: "year-all",
                                    group: "year",
                                    label: eo.intl.string(eo.t["2/yeUU"]),
                                    action: () => p(null),
                                    checked: null == d,
                                }),
                                C.map((e) =>
                                    (0, i.jsx)(
                                        eX.iD,
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
            (0, i.jsxs)(eX.rX, {
                label: eo.intl.string(eo.t.XvNMNk),
                children: [
                    (0, i.jsx)(eX.iD, {
                        id: "sort-recent",
                        group: "sort",
                        label: eo.intl.string(eo.t["4LLKx3"]),
                        action: () => h("descending"),
                        checked: "descending" === c,
                    }),
                    (0, i.jsx)(eX.iD, {
                        id: "sort-oldest",
                        group: "sort",
                        label: eo.intl.string(eo.t["0gitSE"]),
                        action: () => h("ascending"),
                        checked: "ascending" === c,
                    }),
                ],
            }),
            k &&
                (0, i.jsx)(eX.rX, {
                    children: (0, i.jsx)(eX.Dr, { id: "clear-filters", label: eo.intl.string(eo.t.FbDgiu), action: x }),
                }),
        ],
    });
}
var e2 = l(174726);
let e3 = s.memo(function (e) {
        let { allClips: t } = e,
            { query: l, setQuery: n } = eZ(),
            a = (0, ev.bG)([eN.Ay], () => eN.Ay.getKeybindForAction(ed.hCu.SAVE_CLIP)),
            r = eZ(
                (e) =>
                    +(e.selectedUserIds.size > 0) +
                    +(null != e.selectedActivity) +
                    +(null != e.selectedGuildId) +
                    +(null != e.selectedYear),
            ),
            c = s.useCallback(() => {
                (0, eE.openUserSettings)(eb.X.CLIPS_PANEL);
            }, []),
            o = s.useCallback(() => n(""), [n]),
            u = null != a ? eI.dI(a.shortcut, !0) : null,
            h = s.useRef(null);
        return (0, i.jsxs)("div", {
            className: e2.aN,
            children: [
                (0, i.jsxs)("div", {
                    className: e2.Nr,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e2.Pe,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: eo.intl.string(eo.t.z2jK6X),
                                }),
                                null != u && (0, i.jsx)(ej.e, { className: e2.P, shortcut: u }),
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: e2.$s,
                            children: [
                                (0, i.jsx)(d.m, {
                                    text: eo.intl.string(eo.t.X7yRDm),
                                    children: (0, i.jsx)(eG.Y, {
                                        position: "bottom",
                                        targetElementRef: h,
                                        renderPopout: (e) => (0, i.jsx)(e0, { ...e, allClips: t }),
                                        children: (e) =>
                                            (0, i.jsx)("div", {
                                                ref: h,
                                                children:
                                                    r > 0
                                                        ? (0, i.jsx)(eU.$, {
                                                              size: "sm",
                                                              variant: "secondary",
                                                              ...e,
                                                              text: eo.intl.formatToPlainString(ec.default.JbyR1U, {
                                                                  count: r,
                                                              }),
                                                              icon: eO.R,
                                                              iconPosition: "end",
                                                          })
                                                        : (0, i.jsx)(p.K, {
                                                              icon: eO.R,
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
                                        icon: ez.Z,
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
                    className: e2.MT,
                    children: (0, i.jsx)(eF.I, {
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
    e1 = s.memo(function (e) {
        let { name: t, count: l, icon: s, isSelected: n, onClick: r } = e;
        return (0, i.jsxs)(eK.D, {
            className: a()(e2.MV, { [e2.wH]: n }),
            onClick: r,
            children: [
                (0, i.jsxs)("div", {
                    className: e2.tk,
                    children: [
                        s,
                        (0, i.jsx)(L.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            className: e2.mO,
                            children: t,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: e2.z2,
                    children: (0, i.jsx)(L.E, { variant: "text-xs/semibold", color: "currentColor", children: l }),
                }),
            ],
        });
    });
function e6(e) {
    let { clipsByGame: t, filteredClips: l, favoriteClips: n, allClips: a } = e,
        r = eZ((e) => e.selectedGameId),
        d = eZ((e) => e.setSelectedGameId),
        c = s.useMemo(() => t.map((e) => e.applicationId), [t]),
        o = (0, eY.A)(c),
        u = s.useCallback(() => d(null), [d]),
        p = s.useCallback(() => d("favorites"), [d]),
        h = s.useMemo(() => new Map(o.map((e) => [e?.id, e])), [o]);
    return (0, i.jsxs)("div", {
        className: e2.pz,
        children: [
            (0, i.jsx)(e3, { allClips: a }),
            (0, i.jsxs)("div", {
                className: e2.wp,
                children: [
                    (0, i.jsx)("div", {
                        className: e2.om,
                        children: (0, i.jsxs)("div", {
                            className: e2.Ep,
                            children: [
                                (0, i.jsx)(e1, {
                                    name: eo.intl.string(eo.t.dPVrEv),
                                    count: l.length,
                                    icon: (0, i.jsx)(H.x, {}),
                                    isSelected: null === r,
                                    onClick: u,
                                }),
                                (0, i.jsx)(e1, {
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
                        (0, i.jsxs)(eH.Ip, {
                            className: e2.om,
                            fade: !0,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-muted",
                                    className: e2.a9,
                                    children: eo.intl.string(eo.t.URyqtP),
                                }),
                                (0, i.jsx)("div", {
                                    className: e2.Ep,
                                    children: t.map((e) => {
                                        let { name: t, count: l, applicationId: s } = e;
                                        return (0, i.jsx)(
                                            e1,
                                            {
                                                name: t,
                                                count: l,
                                                icon: (0, i.jsx)(eQ.A, { game: h.get(s), size: eQ.M.XSMALL }),
                                                isSelected: r === s,
                                                onClick: () => d(s),
                                            },
                                            s,
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
function e7(e, t) {
    return "ascending" === t
        ? e.sort((e, t) => e.createdAt - t.createdAt)
        : "descending" === t
          ? e.sort((e, t) => t.createdAt - e.createdAt)
          : e;
}
var e5 = l(847455);
let e9 = s.createContext({
    selectedClipIds: new Set(),
    toggleClipSelection: () => {},
    clearSelection: () => {},
    isMultiSelectMode: !1,
});
function e8(e) {
    let t,
        n,
        w,
        { channelId: L, onClose: k, onClipClick: D, transitionState: S, initialEditingClipId: M, ...P } = e;
    (0, N.A)();
    let { analyticsLocations: _ } = (0, C.Ay)(v.A.CLIPS_GALLERY),
        [T, G] = s.useState(new Set()),
        {
            clipsByGame: U,
            filteredClips: O,
            favoriteClips: z,
            allClips: F,
        } = ((t = (0, r.yK)([j.A], () => j.A.getClips())),
        (n = (0, r.bG)([j.A], () => j.A.getPendingClips())),
        (w = eZ()),
        s.useMemo(() => {
            let e = [...n, ...t],
                l = new Map(),
                i = [];
            for (let t of e) {
                let e = (function (e, t) {
                    if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every((t) => e.users.includes(t)))
                        return !1;
                    if ("" !== t.query.trim()) {
                        let l = t.query.toLowerCase(),
                            i = null != e.name && eV()(l, e.name.toLowerCase()),
                            s = eV()(l, e.applicationName.toLowerCase()),
                            n = e.activity?.state != null && eV()(l, e.activity.state.toLowerCase()),
                            a = e.activity?.details != null && eV()(l, e.activity.details.toLowerCase());
                        if (!i && !s && !n && !a) return !1;
                    }
                    if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) return !1;
                    if (null !== t.selectedActivity) {
                        let l = e.activity?.state,
                            i = e.activity?.details;
                        if (l !== t.selectedActivity && i !== t.selectedActivity) return !1;
                    }
                    return (null === t.selectedYear || R()(e.createdAt).year() === t.selectedYear) && !0;
                })(t, w);
                if ((e && i.push(t), null == t.applicationId)) continue;
                let s = l.get(t.applicationId);
                null == s
                    ? l.set(t.applicationId, {
                          clips: [t],
                          filteredClips: e ? [t] : [],
                          mostRecentClipCreatedAt: t.createdAt,
                          name: t.applicationName,
                      })
                    : (s.clips.push(t),
                      e && s.filteredClips.push(t),
                      t.createdAt > s.mostRecentClipCreatedAt && (s.mostRecentClipCreatedAt = t.createdAt));
            }
            let s = e7(i, w.sortOrder),
                a = e7(
                    i.filter((e) => e.isFavorite),
                    w.sortOrder,
                );
            return {
                clipsByGame: Array.from(l.entries())
                    .map((e) => {
                        let [t, l] = e;
                        return {
                            applicationId: t,
                            name: l.name,
                            count: l.filteredClips.length,
                            mostRecentClipCreatedAt: l.mostRecentClipCreatedAt,
                            filteredClips: e7(l.filteredClips, w.sortOrder),
                        };
                    })
                    .sort((e, t) => t.mostRecentClipCreatedAt - e.mostRecentClipCreatedAt),
                allClips: e,
                filteredClips: s,
                favoriteClips: a,
            };
        }, [t, n, w])),
        { onShareClick: K } = (0, I.A)(L),
        H = (0, r.bG)([j.A], () => j.A.getExportingClipIds().length > 0),
        [Y, Q] = s.useState(null != M ? "editing" : "gallery"),
        [$, V] = s.useState(M ?? null),
        B = (0, r.bG)([j.A], () => (null != $ ? j.A.getClipById($) : null), [$]),
        X = s.useRef(Y);
    (X.current = Y), (s.useRef($).current = $);
    let [q, W] = s.useState(null != M ? o.ip.ENTERED : o.ip.HIDDEN),
        J = s.useRef(null),
        Z = eZ((e) => e.selectedGameId),
        ee = s.useMemo(
            () => (null == Z || "favorites" === Z ? null : (U.find((e) => e.applicationId === Z) ?? null)),
            [Z, U],
        ),
        et = s.useMemo(() => ("favorites" === Z ? z : (ee?.filteredClips ?? O)), [Z, ee, O, z]),
        el = s.useMemo(
            () => ("favorites" === Z ? eo.intl.string(eo.t["9rlCk1"]) : (ee?.name ?? eo.intl.string(eo.t.dPVrEv))),
            [Z, ee],
        ),
        ei = s.useCallback(() => {
            Q("editing"), f.A.useReducedMotion && W(o.ip.ENTERED);
        }, []),
        es = s.useCallback((e) => {
            G((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        en = s.useCallback(
            (e) => {
                V(e.id), ei();
            },
            [ei],
        ),
        ea = s.useCallback(() => {
            f.A.useReducedMotion && V(null), Q("gallery");
        }, []);
    s.useEffect(() => {
        let e = (e) => {
            "Escape" === e.key && "editing" === X.current && (e.stopPropagation(), ea());
        };
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ea, k]),
        s.useEffect(() => {
            if ("editing" !== Y || null == $)
                return (
                    (0, y.Su)(),
                    (0, y.jA)(),
                    () => {
                        (0, y.Su)(), (0, y.jA)();
                    }
                );
            (0, y.YK)($);
        }, [Y, $]);
    let er = s.useCallback(() => {
            G(new Set());
        }, []),
        ed = T.size > 0,
        ec = s.useCallback(() => {
            let e = F.filter((e) => T.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, i.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                er(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [F, T, er]),
        eu = s.useCallback(async () => {
            let e = F.filter((e) => T.has(e.id));
            await K({ clips: e }), er();
        }, [F, T, K, er]),
        em = s.useMemo(
            () => ({ selectedClipIds: T, toggleClipSelection: es, clearSelection: er, isMultiSelectMode: ed }),
            [T, es, er, ed],
        );
    return (0, i.jsx)(C.f5, {
        value: _,
        children: (0, i.jsx)(e9.Provider, {
            value: em,
            children: (0, i.jsx)(c.N, {
                onClose: k,
                transitionState: S,
                ...P,
                children: (0, i.jsxs)("div", {
                    className: e5.jT,
                    ref: J,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(e5.PD, "gallery" === Y && e5.vu),
                            "aria-hidden": "gallery" !== Y,
                            children: [
                                (0, i.jsx)(e6, { clipsByGame: U, filteredClips: O, favoriteClips: z, allClips: F }),
                                (0, i.jsxs)("div", {
                                    className: e5.Qs,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: e5.$Q,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-md/medium",
                                                    color: "text-default",
                                                    children: el,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: e5.$s,
                                                    children: [
                                                        ed &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(d.m, {
                                                                        text: eo.intl.string(eo.t.RDE0Sc),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: eu,
                                                                            icon: h.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eo.intl.string(eo.t.RDE0Sc),
                                                                            loading: H,
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)(d.m, {
                                                                        text: eo.intl.string(eo.t.oyYWHE),
                                                                        children: (0, i.jsx)(p.K, {
                                                                            onClick: ec,
                                                                            icon: x.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eo.intl.string(eo.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, i.jsx)(p.K, {
                                                            onClick: k,
                                                            icon: g.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eo.intl.string(eo.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(eT, {
                                            onEdit: en,
                                            channelId: L,
                                            filteredClips: et,
                                            totalClipCount: F.length,
                                            onClipClick: D,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: a()(e5.jN, "editing" === Y && e5.vu),
                            "aria-hidden": "editing" !== Y,
                            onTransitionEnd: () => {
                                "gallery" === Y ? (V(null), W(o.ip.HIDDEN)) : "editing" === Y && W(o.ip.ENTERED);
                            },
                            children:
                                null != B &&
                                (0, i.jsxs)(E.p, {
                                    clip: B,
                                    modalContainerRef: J,
                                    children: [
                                        (0, i.jsx)(A.A, { transitionState: q, onClose: ea }),
                                        (0, i.jsx)(b.A, { channelId: L, onClose: ea }),
                                    ],
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
