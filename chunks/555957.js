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
    f = l(688810),
    g = l(587895),
    v = l(607470),
    j = l(734057),
    b = l(71393),
    C = l(287809),
    y = l(549685),
    N = l(954571),
    A = l(405269),
    E = l(403362),
    k = l(661191),
    I = l(274372),
    S = l(372684),
    w = l(399925),
    L = l(226421),
    M = l(665039),
    T = l(718812),
    R = l(543428),
    D = l(652215),
    O = l(341385),
    P = l(985018),
    U = l(999115);
let G = function (e) {
    let { clip: t, actionsDisabled: i, isNew: r, onEdit: d, onClick: m } = e,
        g = (0, c.yK)([C.default], () => t.users.map((e) => C.default.getUser(e)).filter(E.Vq)),
        v = (0, c.bG)([j.A], () => (null != t.channelId ? j.A.getChannel(t.channelId) : null)),
        y = (0, c.bG)([b.A], () => (null != t.guildId ? b.A.getGuild(t.guildId) : null)),
        { analyticsLocations: w } = (0, f.Ay)(x.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: L, toggleClipSelection: M, isMultiSelectMode: T } = a.useContext(R.$),
        [O, G] = a.useState(!1),
        z = a.useRef(null),
        _ = (0, o.A)(t.editMetadata?.start ?? 0),
        K = L.has(t.id),
        B = t.type === S.nQ.SCREENSHOT,
        F = "" === t.applicationName && v?.name != null && "" !== v.name ? v.name : t.applicationName,
        Y = (0, A.Fe)(new Date(k.default.extractTimestamp(t.id))),
        X = a.useMemo(() => {
            let e = [];
            return (
                t.type === S.nQ.VOICE_CLIP
                    ? (y?.name != null && e.push(y.name), v?.name != null && e.push(v.name))
                    : ("" !== F && null != F && e.push(F),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [F, y?.name, v?.name, t.activity?.state, t.activity?.details, t.type]),
        Q = a.useCallback(() => {
            let e = z.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        q = a.useCallback(() => {
            if (!0 === B) return;
            let e = z.current;
            null != e && e.paused && ((e.currentTime = _.current), z.current?.play());
        }, [B, _]),
        W = a.useCallback(() => {
            if (!0 === B) return;
            let e = z.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [B, t.editMetadata?.start]),
        Z = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && W();
            },
            [W],
        ),
        J = a.useCallback(() => {
            G(!1);
        }, []),
        ee = a.useCallback(
            (e) => {
                G(!0), z.current?.pause();
                let a =
                    T && L.size > 0
                        ? Array.from(L)
                              .map((e) => I.A.getClipById(e))
                              .filter(E.Vq)
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
                                onBeforeDelete: Q,
                                onAfterDelete: () => {
                                    N.default.track(D.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: J },
                );
            },
            [t, T, L, i, Q, J, d],
        ),
        et = a.useCallback(
            (e) => {
                i || (e.preventDefault(), e.stopPropagation(), ee(e));
            },
            [i, ee],
        ),
        el = a.useCallback(
            (e) => {
                i ||
                    (e.shiftKey ? (e.preventDefault(), M(t.id)) : T ? M(t.id) : null != m && m(t),
                    N.default.track(D.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [i, T, M, t, m],
        );
    return (0, n.jsx)(f.f5, {
        value: w,
        children: (0, n.jsxs)(h.sqX, {
            "aria-disabled": i,
            "aria-label": P.intl.string(!0 === B ? P.t["HO/oXl"] : P.t.bt75uw),
            onClick: i ? void 0 : el,
            onContextMenu: et,
            className: s()(U.QN, { [U.r9]: i, [U.in]: O, [U.wH]: K }),
            onBlur: Z,
            onFocus: q,
            onMouseOver: q,
            onMouseLeave: W,
            children: [
                (0, n.jsx)(V, { clip: t, isNew: r, videoRef: z, onOpenContextMenu: ee, actionsDisabled: i }),
                (0, n.jsxs)("div", {
                    className: U.wI,
                    children: [
                        (0, n.jsx)($, { clip: t }),
                        (0, n.jsxs)("div", {
                            className: U.i0,
                            children: [
                                (0, n.jsx)(H, { clip: t }),
                                (0, n.jsx)(h.Text, {
                                    className: U.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: X,
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
                                users: g,
                                size: h._3J.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && q());
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
                                    onClick: g,
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
            (0, n.jsx)(z, { clip: t, videoRef: i }),
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
                                f && (0, n.jsx)(y.A, { color: "white", width: 16, height: 16 }),
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
function H(e) {
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
function z(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, M.j)(t),
        i = t.type === S.nQ.SCREENSHOT;
    return t.type === S.nQ.VOICE_CLIP
        ? (0, n.jsx)(L.A, { className: U.fT })
        : i
          ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: U.fT })
          : null != a
            ? (0, n.jsx)(v.A, {
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
        l = (0, c.bG)([g.A], () => (null != t.applicationId ? g.A.getApplication(t.applicationId) : null)),
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
