l.d(t, { A: () => V }), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(989349),
    d = l.n(r),
    o = l(66455),
    c = l(311907),
    u = l(342952),
    m = l(990078),
    h = l(397927),
    p = l(442433),
    x = l(793574),
    f = l(688810),
    g = l(587895),
    v = l(47167),
    j = l(607470),
    b = l(734057),
    C = l(71393),
    y = l(287809),
    N = l(549685),
    A = l(954571),
    E = l(405269),
    k = l(403362),
    I = l(661191),
    S = l(274372),
    w = l(372684),
    L = l(399925),
    M = l(226421),
    T = l(665039),
    R = l(718812),
    D = l(543428),
    O = l(652215),
    P = l(16590),
    U = l(985018),
    G = l(798594);
let V = function (e) {
    let { clip: t, actionsDisabled: i, isNew: r, onEdit: d, onClick: m } = e,
        g = (0, c.yK)([y.default], () => t.users.map((e) => y.default.getUser(e)).filter(k.Vq)),
        j = (0, c.bG)([b.A], () => (null != t.channelId ? b.A.getChannel(t.channelId) : null)),
        N = (0, c.bG)([C.A], () => (null != t.guildId ? C.A.getGuild(t.guildId) : null)),
        { analyticsLocations: L } = (0, f.Ay)(x.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: M, toggleClipSelection: T, isMultiSelectMode: R } = a.useContext(D.$),
        [P, V] = a.useState(!1),
        $ = a.useRef(null),
        K = (0, o.A)(t.editMetadata?.start ?? 0),
        B = M.has(t.id),
        F = t.type === w.nQ.SCREENSHOT,
        X = (0, v.Ay)(j),
        Y = "" === t.applicationName && null != X && "" !== X ? X : t.applicationName,
        Q = (0, E.Fe)(new Date(I.default.extractTimestamp(t.id))),
        q = a.useMemo(() => {
            let e = [];
            return (
                t.type === w.nQ.VOICE_CLIP
                    ? (N?.name != null && e.push(N.name), null != X && e.push(X))
                    : ("" !== Y && null != Y && e.push(Y),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [Y, N?.name, X, t.activity?.state, t.activity?.details, t.type]),
        W = a.useCallback(() => {
            let e = $.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        Z = a.useCallback(() => {
            if (!0 === F) return;
            let e = $.current;
            null != e && e.paused && ((e.currentTime = K.current), $.current?.play());
        }, [F, K]),
        J = a.useCallback(() => {
            if (!0 === F) return;
            let e = $.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [F, t.editMetadata?.start]),
        ee = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && J();
            },
            [J],
        ),
        et = a.useCallback(() => {
            V(!1);
        }, []),
        el = a.useCallback(
            (e) => {
                V(!0), $.current?.pause();
                let a =
                    R && M.size > 0
                        ? Array.from(M)
                              .map((e) => S.A.getClipById(e))
                              .filter(k.Vq)
                        : [t];
                (0, p.L3)(
                    e,
                    async () => {
                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                clips: a,
                                actionsDisabled: i,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    A.default.track(O.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    d(t), A.default.track(O.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: W,
                                onAfterDelete: () => {
                                    A.default.track(O.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: et },
                );
            },
            [t, R, M, i, W, et, d],
        ),
        en = a.useCallback(
            (e) => {
                i || (e.preventDefault(), e.stopPropagation(), el(e));
            },
            [i, el],
        ),
        ea = a.useCallback(
            (e) => {
                i ||
                    (e.shiftKey ? (e.preventDefault(), T(t.id)) : R ? T(t.id) : null != m && m(t),
                    A.default.track(O.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [i, R, T, t, m],
        );
    return (0, n.jsx)(f.f5, {
        value: L,
        children: (0, n.jsxs)(h.sqX, {
            "aria-disabled": i,
            "aria-label": U.intl.string(!0 === F ? U.t["HO/oXl"] : U.t.bt75uw),
            onClick: i ? void 0 : ea,
            onContextMenu: en,
            className: s()(G.QN, { [G.r9]: i, [G.in]: P, [G.wH]: B }),
            onBlur: ee,
            onFocus: Z,
            onMouseOver: Z,
            onMouseLeave: J,
            children: [
                (0, n.jsx)(z, { clip: t, isNew: r, videoRef: $, onOpenContextMenu: el, actionsDisabled: i }),
                (0, n.jsxs)("div", {
                    className: G.wI,
                    children: [
                        (0, n.jsx)(_, { clip: t }),
                        (0, n.jsxs)("div", {
                            className: G.i0,
                            children: [
                                (0, n.jsx)(H, { clip: t }),
                                (0, n.jsx)(h.Text, {
                                    className: G.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: q,
                                }),
                                (0, n.jsx)(h.Text, {
                                    className: G.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: Q,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: G.jW,
                            children: (0, n.jsx)(u.A, {
                                maxUsers: 3,
                                users: g,
                                size: h._3J.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && Z());
                                },
                                "aria-label": U.intl.string(U.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function z(e) {
    let { clip: t, isNew: l, videoRef: i, onOpenContextMenu: s, actionsDisabled: r } = e,
        o = 0 === t.length,
        c = !0 === t.pending,
        [u, p] = a.useState(0);
    a.useEffect(() => {
        let e = i.current;
        if (null == e || o) return;
        let l = null,
            n = () => {
                if (e.paused || e.ended) {
                    (l = null), p(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    i = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - a) / (i - a)) * 100;
                p(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(n));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(n));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), p(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), p(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [i, o, t.editMetadata]);
    let { durationDisplay: x, isClipEdited: f } = a.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                n = !1;
            if (null != t.editMetadata) {
                let a = null != l && 1e3 * l < t.length,
                    i =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (n = a || i), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let a = d().duration(e),
                i = a.minutes(),
                s = a.seconds();
            return 0 === i
                ? { durationDisplay: `${s}s`, isClipEdited: n }
                : { durationDisplay: `${i}:${s.toString().padStart(2, "0")}`, isClipEdited: n };
        }, [t.length, t.editMetadata]),
        g = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), L.XK(t);
            },
            [t],
        ),
        v = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, n.jsxs)("div", {
        className: G.QB,
        children: [
            (0, n.jsx)("div", { className: G.ne }),
            !c && l && (0, n.jsx)(h.LpS, { className: G.Ad, text: U.intl.string(U.t.y2b7CA) }),
            !r &&
                (0, n.jsxs)("div", {
                    className: G.g3,
                    children: [
                        (0, n.jsx)(
                            m.m,
                            {
                                text: U.intl.string(t.isFavorite ? P.default.IZsalP : P.default.ihBfyA),
                                position: "top",
                                children: (0, n.jsx)(h.K0, {
                                    onClick: g,
                                    icon: t.isFavorite ? h.Gg5 : h.yA2,
                                    "aria-label": U.intl.string(U.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, n.jsx)(h.K0, {
                            onClick: v,
                            icon: h.FHP,
                            "aria-label": U.intl.string(U.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, n.jsx)($, { clip: t, videoRef: i }),
            (0, n.jsxs)("div", {
                className: G.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, n.jsxs)("div", {
                            className: G.OH,
                            children: [
                                t.isTemporary && (0, n.jsx)(h.O4, { size: "xs", color: "currentColor" }),
                                (0, n.jsx)(h.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: U.intl.string(U.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, n.jsxs)("div", {
                            className: G.OH,
                            children: [
                                f && (0, n.jsx)(N.A, { color: "white", width: 16, height: 16 }),
                                (0, n.jsx)("span", {
                                    children: (0, n.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: c ? U.intl.string(U.t["2Fp7OP"]) : x,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !o &&
                u > 0 &&
                (0, n.jsx)("div", {
                    className: G.X7,
                    children: (0, n.jsx)("div", { className: G.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function H(e) {
    let { clip: t } = e,
        l = (0, R.h)(t),
        a = "" !== l;
    return (0, n.jsx)(h.Text, {
        className: G.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function $(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, T.j)(t),
        i = t.type === w.nQ.SCREENSHOT;
    return t.type === w.nQ.VOICE_CLIP
        ? (0, n.jsx)(M.A, { className: G.fT })
        : i
          ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: G.fT })
          : null != a
            ? (0, n.jsx)(j.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: G.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: G.fT })
              : (0, n.jsx)("div", {
                    className: s()(G.fT, G.Is),
                    children: (0, n.jsx)(h.xgA, { color: h.LU0.colors.ICON_MUTED }),
                });
}
function _(e) {
    let { clip: t } = e,
        l = (0, c.bG)([g.A], () => (null != t.applicationId ? g.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: G.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, n.jsx)("img", { src: a, alt: "", className: G.NH })
                : t.type === w.nQ.VOICE_CLIP
                  ? (0, n.jsx)(h.HKD, { size: "sm", color: "currentColor" })
                  : (0, n.jsx)(h.kN9, { size: "sm", color: "currentColor" }),
    });
}
