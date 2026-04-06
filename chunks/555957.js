l.d(t, { A: () => G }), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    r = l(989349),
    o = l.n(r),
    d = l(66455),
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
    O = l(965623),
    P = l(985018),
    U = l(621970);
let G = function (e) {
    let { clip: t, actionsDisabled: i, isNew: r, onEdit: o, onClick: m } = e,
        g = (0, c.yK)([C.default], () => t.users.map((e) => C.default.getUser(e)).filter(E.Vq)),
        v = (0, c.bG)([j.A], () => (null != t.channelId ? j.A.getChannel(t.channelId) : null)),
        y = (0, c.bG)([b.A], () => (null != t.guildId ? b.A.getGuild(t.guildId) : null)),
        { analyticsLocations: w } = (0, f.Ay)(x.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: L, toggleClipSelection: M, isMultiSelectMode: T } = n.useContext(R.$),
        [O, G] = n.useState(!1),
        $ = n.useRef(null),
        _ = (0, d.A)(t.editMetadata?.start ?? 0),
        K = L.has(t.id),
        F = t.type === S.nQ.SCREENSHOT,
        B = "" === t.applicationName && v?.name != null && "" !== v.name ? v.name : t.applicationName,
        Y = (0, A.Fe)(new Date(k.default.extractTimestamp(t.id))),
        X = n.useMemo(() => {
            let e = [];
            return (
                t.type === S.nQ.VOICE_CLIP
                    ? (y?.name != null && e.push(y.name), v?.name != null && e.push(v.name))
                    : ("" !== B && null != B && e.push(B),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [B, y?.name, v?.name, t.activity?.state, t.activity?.details, t.type]),
        Q = n.useCallback(() => {
            let e = $.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        q = n.useCallback(() => {
            if (!0 === F) return;
            let e = $.current;
            null != e && e.paused && ((e.currentTime = _.current), $.current?.play());
        }, [F, _]),
        Z = n.useCallback(() => {
            if (!0 === F) return;
            let e = $.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [F, t.editMetadata?.start]),
        W = n.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && Z();
            },
            [Z],
        ),
        J = n.useCallback(() => {
            G(!1);
        }, []),
        ee = n.useCallback(
            (e) => {
                G(!0), $.current?.pause();
                let n = T && L.size > 0 ? I.A.getClips().filter((e) => L.has(e.id)) : [t];
                (0, p.L3)(
                    e,
                    async () => {
                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: n,
                                actionsDisabled: i,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    N.default.track(D.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    o(t), N.default.track(D.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
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
            [t, T, L, i, Q, J, o],
        ),
        et = n.useCallback(
            (e) => {
                i || (e.preventDefault(), e.stopPropagation(), ee(e));
            },
            [i, ee],
        ),
        el = n.useCallback(
            (e) => {
                i ||
                    (e.shiftKey ? (e.preventDefault(), M(t.id)) : T ? M(t.id) : null != m && m(t),
                    N.default.track(D.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [i, T, M, t, m],
        );
    return (0, a.jsx)(f.f5, {
        value: w,
        children: (0, a.jsxs)(h.sqX, {
            "aria-disabled": i,
            "aria-label": P.intl.string(!0 === F ? P.t["HO/oXl"] : P.t.bt75uw),
            onClick: i ? void 0 : el,
            onContextMenu: et,
            className: s()(U.QN, { [U.r9]: i, [U.in]: O, [U.wH]: K }),
            onBlur: W,
            onFocus: q,
            onMouseOver: q,
            onMouseLeave: Z,
            children: [
                (0, a.jsx)(V, { clip: t, isNew: r, videoRef: $, onOpenContextMenu: ee, actionsDisabled: i }),
                (0, a.jsxs)("div", {
                    className: U.wI,
                    children: [
                        (0, a.jsx)(z, { clip: t }),
                        (0, a.jsxs)("div", {
                            className: U.i0,
                            children: [
                                (0, a.jsx)(H, { clip: t }),
                                (0, a.jsx)(h.Text, {
                                    className: U.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: X,
                                }),
                                (0, a.jsx)(h.Text, {
                                    className: U.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: Y,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: U.jW,
                            children: (0, a.jsx)(u.A, {
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
        d = 0 === t.length,
        c = !0 === t.pending,
        [u, p] = n.useState(0);
    n.useEffect(() => {
        let e = i.current;
        if (null == e || d) return;
        let l = null,
            a = () => {
                if (e.paused || e.ended) {
                    (l = null), p(0);
                    return;
                }
                let n = t.editMetadata?.start ?? 0,
                    i = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - n) / (i - n)) * 100;
                p(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(a));
            },
            n = () => {
                null == l && (l = requestAnimationFrame(a));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), p(0));
            };
        return (
            e.addEventListener("play", n),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || n(),
            () => {
                null != l && (cancelAnimationFrame(l), p(0)),
                    e.removeEventListener("play", n),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [i, d, t.editMetadata]);
    let { durationDisplay: x, isClipEdited: f } = n.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                a = !1;
            if (null != t.editMetadata) {
                let n = null != l && 1e3 * l < t.length,
                    i =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (a = n || i), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let n = o().duration(e),
                i = n.minutes(),
                s = n.seconds();
            return 0 === i
                ? { durationDisplay: `${s}s`, isClipEdited: a }
                : { durationDisplay: `${i}:${s.toString().padStart(2, "0")}`, isClipEdited: a };
        }, [t.length, t.editMetadata]),
        g = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), w.XK(t);
            },
            [t],
        ),
        v = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, a.jsxs)("div", {
        className: U.QB,
        children: [
            (0, a.jsx)("div", { className: U.ne }),
            !c && l && (0, a.jsx)(h.LpS, { className: U.Ad, text: P.intl.string(P.t.y2b7CA) }),
            !r &&
                (0, a.jsxs)("div", {
                    className: U.g3,
                    children: [
                        (0, a.jsx)(
                            m.m,
                            {
                                text: P.intl.string(t.isFavorite ? O.default.IZsalP : O.default.ihBfyA),
                                position: "top",
                                children: (0, a.jsx)(h.K0, {
                                    onClick: g,
                                    icon: t.isFavorite ? h.Gg5 : h.yA2,
                                    "aria-label": P.intl.string(P.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, a.jsx)(h.K0, {
                            onClick: v,
                            icon: h.FHP,
                            "aria-label": P.intl.string(P.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsx)($, { clip: t, videoRef: i }),
            (0, a.jsxs)("div", {
                className: U.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: U.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(h.O4, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(h.Text, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: P.intl.string(P.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !d &&
                        (0, a.jsxs)("div", {
                            className: U.OH,
                            children: [
                                f && (0, a.jsx)(y.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(h.Text, {
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
            !d &&
                u > 0 &&
                (0, a.jsx)("div", {
                    className: U.X7,
                    children: (0, a.jsx)("div", { className: U.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function H(e) {
    let { clip: t } = e,
        l = (0, T.h)(t),
        n = "" !== l;
    return (0, a.jsx)(h.Text, {
        className: U.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: n ? l : t.name,
    });
}
function $(e) {
    let { clip: t, videoRef: l } = e,
        n = (0, M.j)(t),
        i = t.type === S.nQ.SCREENSHOT;
    return t.type === S.nQ.VOICE_CLIP
        ? (0, a.jsx)(L.A, { className: U.fT })
        : i
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: U.fT })
          : null != n
            ? (0, a.jsx)(v.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: n,
                  loop: !0,
                  className: U.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: U.fT })
              : (0, a.jsx)("div", {
                    className: s()(U.fT, U.Is),
                    children: (0, a.jsx)(h.xgA, { color: h.LU0.colors.ICON_MUTED }),
                });
}
function z(e) {
    let { clip: t } = e,
        l = (0, c.bG)([g.A], () => (null != t.applicationId ? g.A.getApplication(t.applicationId) : null)),
        n = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: U.gS,
        "aria-hidden": "true",
        children:
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: U.NH })
                : t.type === S.nQ.VOICE_CLIP
                  ? (0, a.jsx)(h.HKD, { size: "sm", color: "currentColor" })
                  : (0, a.jsx)(h.kN9, { size: "sm", color: "currentColor" }),
    });
}
