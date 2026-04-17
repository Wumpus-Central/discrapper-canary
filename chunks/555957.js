l.d(t, { A: () => G }), l(321073);
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
    g = l(688810),
    f = l(587895),
    v = l(47167),
    j = l(607470),
    b = l(734057),
    C = l(71393),
    y = l(287809),
    A = l(549685),
    N = l(954571),
    E = l(405269),
    k = l(403362),
    I = l(274372),
    S = l(372684),
    w = l(399925),
    L = l(226421),
    M = l(665039),
    T = l(718812),
    R = l(543428),
    D = l(652215),
    O = l(16590),
    P = l(985018),
    U = l(798594);
let G = function (e) {
    let { clip: t, actionsDisabled: i, isNew: r, onEdit: d, onClick: m } = e,
        f = (0, c.yK)([y.default], () => t.users.map((e) => y.default.getUser(e)).filter(k.Vq)),
        j = (0, c.bG)([b.A], () => (null != t.channelId ? b.A.getChannel(t.channelId) : null)),
        A = (0, c.bG)([C.A], () => (null != t.guildId ? C.A.getGuild(t.guildId) : null)),
        { analyticsLocations: w } = (0, g.Ay)(x.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: L, toggleClipSelection: M, isMultiSelectMode: T } = a.useContext(R.$),
        [O, G] = a.useState(!1),
        H = a.useRef(null),
        _ = (0, o.A)(t.editMetadata?.start ?? 0),
        K = L.has(t.id),
        B = t.type === S.nQ.SCREENSHOT,
        F = (0, v.Ay)(j),
        X = "" === t.applicationName && null != F && "" !== F ? F : t.applicationName,
        Y = (0, E.Fe)(new Date(t.createdAt)),
        Q = a.useMemo(() => {
            let e = [];
            return (
                t.type === S.nQ.VOICE_CLIP
                    ? (A?.name != null && e.push(A.name), null != F && e.push(F))
                    : ("" !== X && null != X && e.push(X),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [X, A?.name, F, t.activity?.state, t.activity?.details, t.type]),
        q = a.useCallback(() => {
            let e = H.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        W = a.useCallback(() => {
            if (!0 === B) return;
            let e = H.current;
            null != e && e.paused && ((e.currentTime = _.current), H.current?.play());
        }, [B, _]),
        Z = a.useCallback(() => {
            if (!0 === B) return;
            let e = H.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [B, t.editMetadata?.start]),
        J = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && Z();
            },
            [Z],
        ),
        ee = a.useCallback(() => {
            G(!1);
        }, []),
        et = a.useCallback(
            (e) => {
                G(!0), H.current?.pause();
                let a =
                    T && L.size > 0
                        ? Array.from(L)
                              .map((e) => I.A.getClipById(e))
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
                                    N.default.track(D.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    d(t), N.default.track(D.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: q,
                                onAfterDelete: () => {
                                    N.default.track(D.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: ee },
                );
            },
            [t, T, L, i, q, ee, d],
        ),
        el = a.useCallback(
            (e) => {
                i || (e.preventDefault(), e.stopPropagation(), et(e));
            },
            [i, et],
        ),
        en = a.useCallback(
            (e) => {
                i ||
                    (e.shiftKey ? (e.preventDefault(), M(t.id)) : T ? M(t.id) : null != m && m(t),
                    N.default.track(D.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [i, T, M, t, m],
        );
    return (0, n.jsx)(g.f5, {
        value: w,
        children: (0, n.jsxs)(h.sqX, {
            "aria-disabled": i,
            "aria-label": P.intl.string(!0 === B ? P.t["HO/oXl"] : P.t.bt75uw),
            onClick: i ? void 0 : en,
            onContextMenu: el,
            className: s()(U.QN, { [U.r9]: i, [U.in]: O, [U.wH]: K }),
            onBlur: J,
            onFocus: W,
            onMouseOver: W,
            onMouseLeave: Z,
            children: [
                (0, n.jsx)(V, { clip: t, isNew: r, videoRef: H, onOpenContextMenu: et, actionsDisabled: i }),
                (0, n.jsxs)("div", {
                    className: U.wI,
                    children: [
                        (0, n.jsx)($, { clip: t }),
                        (0, n.jsxs)("div", {
                            className: U.i0,
                            children: [
                                (0, n.jsx)(z, { clip: t }),
                                (0, n.jsx)(h.Text, {
                                    className: U.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: Q,
                                }),
                                (0, n.jsx)(h.Text, {
                                    className: U.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: Y,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: U.jW,
                            children: (0, n.jsx)(u.A, {
                                maxUsers: 3,
                                users: f,
                                size: h._3J.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && W());
                                },
                                "aria-label": P.intl.string(P.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function V(e) {
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
    let { durationDisplay: x, isClipEdited: g } = a.useMemo(() => {
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
        f = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), w.XK(t);
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
        className: U.QB,
        children: [
            (0, n.jsx)("div", { className: U.ne }),
            !c && l && (0, n.jsx)(h.LpS, { className: U.Ad, text: P.intl.string(P.t.y2b7CA) }),
            !r &&
                (0, n.jsxs)("div", {
                    className: U.g3,
                    children: [
                        (0, n.jsx)(
                            m.m,
                            {
                                text: P.intl.string(t.isFavorite ? O.default.IZsalP : O.default.ihBfyA),
                                position: "top",
                                children: (0, n.jsx)(h.K0, {
                                    onClick: f,
                                    icon: t.isFavorite ? h.Gg5 : h.yA2,
                                    "aria-label": P.intl.string(P.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, n.jsx)(h.K0, {
                            onClick: v,
                            icon: h.FHP,
                            "aria-label": P.intl.string(P.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, n.jsx)(H, { clip: t, videoRef: i }),
            (0, n.jsxs)("div", {
                className: U.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, n.jsxs)("div", {
                            className: U.OH,
                            children: [
                                t.isTemporary && (0, n.jsx)(h.O4, { size: "xs", color: "currentColor" }),
                                (0, n.jsx)(h.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: P.intl.string(P.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, n.jsxs)("div", {
                            className: U.OH,
                            children: [
                                g && (0, n.jsx)(A.A, { color: "white", width: 16, height: 16 }),
                                (0, n.jsx)("span", {
                                    children: (0, n.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: c ? P.intl.string(P.t["2Fp7OP"]) : x,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !o &&
                u > 0 &&
                (0, n.jsx)("div", {
                    className: U.X7,
                    children: (0, n.jsx)("div", { className: U.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function z(e) {
    let { clip: t } = e,
        l = (0, T.h)(t),
        a = "" !== l;
    return (0, n.jsx)(h.Text, {
        className: U.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function H(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, M.j)(t),
        i = t.type === S.nQ.SCREENSHOT;
    return t.type === S.nQ.VOICE_CLIP
        ? (0, n.jsx)(L.A, { className: U.fT })
        : i
          ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: U.fT })
          : null != a
            ? (0, n.jsx)(j.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: U.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: U.fT })
              : (0, n.jsx)("div", {
                    className: s()(U.fT, U.Is),
                    children: (0, n.jsx)(h.xgA, { color: h.LU0.colors.ICON_MUTED }),
                });
}
function $(e) {
    let { clip: t } = e,
        l = (0, c.bG)([f.A], () => (null != t.applicationId ? f.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: U.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, n.jsx)("img", { src: a, alt: "", className: U.NH })
                : t.type === S.nQ.VOICE_CLIP
                  ? (0, n.jsx)(h.HKD, { size: "sm", color: "currentColor" })
                  : (0, n.jsx)(h.kN9, { size: "sm", color: "currentColor" }),
    });
}
