l.d(t, { A: () => D }), l(321073);
var i = l(627968),
    s = l(64700),
    a = l(503698),
    n = l.n(a),
    r = l(989349),
    d = l.n(r),
    c = l(66455),
    o = l(311907),
    u = l(342952),
    m = l(397927),
    p = l(442433),
    h = l(793574),
    x = l(688810),
    C = l(587895),
    v = l(607470),
    g = l(734057),
    j = l(71393),
    f = l(287809),
    y = l(549685),
    A = l(954571),
    N = l(405269),
    I = l(403362),
    b = l(661191),
    E = l(274372),
    k = l(372684),
    M = l(399925),
    w = l(226421),
    L = l(665039),
    S = l(718812),
    H = l(543428),
    T = l(652215),
    P = l(985018),
    V = l(621970);
let D = function (e) {
    let { clip: t, actionsDisabled: a, isNew: r, onClick: d } = e,
        C = (0, o.yK)([f.default], () => t.users.map((e) => f.default.getUser(e)).filter(I.Vq)),
        v = (0, o.bG)([g.A], () => (null != t.channelId ? g.A.getChannel(t.channelId) : null)),
        y = (0, o.bG)([j.A], () => (null != t.guildId ? j.A.getGuild(t.guildId) : null)),
        { analyticsLocations: M } = (0, x.Ay)(h.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: w, toggleClipSelection: L, isMultiSelectMode: S } = s.useContext(H.$),
        [D, _] = s.useState(!1),
        z = s.useRef(null),
        K = (0, c.A)(t.editMetadata?.start ?? 0),
        U = w.has(t.id),
        F = t.type === k.nQ.SCREENSHOT,
        Y = "" === t.applicationName && v?.name != null && "" !== v.name ? v.name : t.applicationName,
        $ = (0, N.Fe)(new Date(b.default.extractTimestamp(t.id))),
        B = s.useMemo(() => {
            let e = [];
            return (
                t.type === k.nQ.VOICE_CLIP
                    ? (y?.name != null && e.push(y.name), v?.name != null && e.push(v.name))
                    : ("" !== Y && null != Y && e.push(Y),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [Y, y?.name, v?.name, t.activity?.state, t.activity?.details, t.type]),
        Q = s.useCallback(() => {
            let e = z.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        X = s.useCallback(() => {
            if (!0 === F) return;
            let e = z.current;
            null != e && e.paused && ((e.currentTime = K.current), z.current?.play());
        }, [F, K]),
        q = s.useCallback(() => {
            if (!0 === F) return;
            let e = z.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [F, t.editMetadata?.start]),
        Z = s.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && q();
            },
            [q],
        ),
        W = s.useCallback(() => {
            _(!1);
        }, []),
        J = s.useCallback(
            (e) => {
                _(!0), z.current?.pause();
                let s = S && w.size > 0 ? E.A.getClips().filter((e) => w.has(e.id)) : [t];
                (0, p.L3)(
                    e,
                    async () => {
                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                clips: s,
                                actionsDisabled: a,
                                showShareAndEdit: !0,
                                onShare: () => {
                                    A.default.track(T.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    A.default.track(T.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: Q,
                                onAfterDelete: () => {
                                    A.default.track(T.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: W },
                );
            },
            [t, S, w, a, Q, W],
        ),
        ee = s.useCallback(
            (e) => {
                a || (e.preventDefault(), e.stopPropagation(), J(e));
            },
            [a, J],
        ),
        et = s.useCallback(
            (e) => {
                a ||
                    (e.shiftKey ? (e.preventDefault(), L(t.id)) : S ? L(t.id) : null != d && d(t),
                    A.default.track(T.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [a, S, L, t, d],
        );
    return (0, i.jsx)(x.f5, {
        value: M,
        children: (0, i.jsxs)(m.sqX, {
            "aria-disabled": a,
            "aria-label": P.intl.string(!0 === F ? P.t["HO/oXl"] : P.t.bt75uw),
            onClick: a ? void 0 : et,
            onContextMenu: ee,
            className: n()(V.QN, { [V.r9]: a, [V.in]: D, [V.wH]: U }),
            onBlur: Z,
            onFocus: X,
            onMouseOver: X,
            onMouseLeave: q,
            children: [
                (0, i.jsx)(R, { clip: t, isNew: r, videoRef: z, onOpenContextMenu: J, actionsDisabled: a }),
                (0, i.jsxs)("div", {
                    className: V.wI,
                    children: [
                        (0, i.jsx)(O, { clip: t }),
                        (0, i.jsxs)("div", {
                            className: V.i0,
                            children: [
                                (0, i.jsx)(G, { clip: t }),
                                (0, i.jsx)(m.Text, {
                                    className: V.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/medium",
                                    children: B,
                                }),
                                (0, i.jsx)(m.Text, {
                                    className: V.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: $,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: V.jW,
                            children: (0, i.jsx)(u.A, {
                                maxUsers: 3,
                                users: C,
                                size: m._3J.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && X());
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
function R(e) {
    let { clip: t, isNew: l, videoRef: a, onOpenContextMenu: n, actionsDisabled: r } = e,
        c = 0 === t.length,
        o = !0 === t.pending,
        [u, p] = s.useState(0);
    s.useEffect(() => {
        let e = a.current;
        if (null == e || c) return;
        let l = null,
            i = () => {
                if (e.paused || e.ended) {
                    (l = null), p(0);
                    return;
                }
                let s = t.editMetadata?.start ?? 0,
                    a = t.editMetadata?.end ?? e.duration,
                    n = ((e.currentTime - s) / (a - s)) * 100;
                p(isNaN(n) ? 0 : Math.max(0, Math.min(100, n))), (l = requestAnimationFrame(i));
            },
            s = () => {
                null == l && (l = requestAnimationFrame(i));
            },
            n = () => {
                null != l && (cancelAnimationFrame(l), (l = null), p(0));
            };
        return (
            e.addEventListener("play", s),
            e.addEventListener("pause", n),
            e.addEventListener("ended", n),
            e.paused || s(),
            () => {
                null != l && (cancelAnimationFrame(l), p(0)),
                    e.removeEventListener("play", s),
                    e.removeEventListener("pause", n),
                    e.removeEventListener("ended", n);
            }
        );
    }, [a, c, t.editMetadata]);
    let { durationDisplay: h, isClipEdited: x } = s.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                i = !1;
            if (null != t.editMetadata) {
                let s = null != l && 1e3 * l < t.length,
                    a =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (i = s || a), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let s = d().duration(e),
                a = s.minutes(),
                n = s.seconds();
            return 0 === a
                ? { durationDisplay: `${n}s`, isClipEdited: i }
                : { durationDisplay: `${a}:${n.toString().padStart(2, "0")}`, isClipEdited: i };
        }, [t.length, t.editMetadata]),
        C = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), M.XK(t);
            },
            [t],
        ),
        v = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || n(e);
            },
            [r, n],
        );
    return (0, i.jsxs)("div", {
        className: V.QB,
        children: [
            (0, i.jsx)("div", { className: V.ne }),
            !r &&
                (0, i.jsxs)("div", {
                    className: V.g3,
                    children: [
                        (0, i.jsx)(m.K0, {
                            onClick: C,
                            icon: t.isFavorite ? m.C3E : m.yhu,
                            "aria-label": P.intl.string(P.t.k8fFjp),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                        (0, i.jsx)(m.K0, {
                            onClick: v,
                            icon: m.FHP,
                            "aria-label": P.intl.string(P.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, i.jsx)(_, { clip: t, videoRef: a }),
            !c &&
                u > 0 &&
                (0, i.jsx)("div", {
                    className: V.X7,
                    children: (0, i.jsx)("div", { className: V.Z2, style: { width: `${u}%` } }),
                }),
            "auto" === t.clipMethod &&
                (0, i.jsxs)("div", {
                    className: V.jt,
                    children: [
                        t.isTemporary && (0, i.jsx)(m.O4, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(m.Text, {
                            variant: "text-sm/semibold",
                            color: "always-white",
                            children: P.intl.string(P.t["3Y2DJ8"]),
                        }),
                    ],
                }),
            (l || !c) &&
                (0, i.jsxs)("div", {
                    className: V.OH,
                    children: [
                        !o && l && (0, i.jsx)(m.LpS, { text: P.intl.string(P.t.y2b7CA) }),
                        !c &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    x && (0, i.jsx)(y.A, { color: "white", width: 16, height: 16 }),
                                    (0, i.jsx)("span", {
                                        children: (0, i.jsx)(m.Text, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            tabularNumbers: !0,
                                            children: o ? P.intl.string(P.t["2Fp7OP"]) : h,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function G(e) {
    let { clip: t } = e,
        l = (0, S.h)(t),
        s = "" !== l;
    return (0, i.jsx)(m.Text, {
        className: V.NV,
        variant: "text-md/normal",
        color: s ? "text-subtle" : "text-default",
        children: s ? l : t.name,
    });
}
function _(e) {
    let { clip: t, videoRef: l } = e,
        s = (0, L.j)(t),
        a = t.type === k.nQ.SCREENSHOT;
    return t.type === k.nQ.VOICE_CLIP
        ? (0, i.jsx)(w.A, { className: V.fT })
        : a
          ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: V.fT })
          : null != s
            ? (0, i.jsx)(v.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: s,
                  loop: !0,
                  className: V.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, i.jsx)("img", { alt: "", src: t.thumbnail, className: V.fT })
              : (0, i.jsx)("div", {
                    className: n()(V.fT, V.Is),
                    children: (0, i.jsx)(m.TAc, { size: "custom", width: 64, height: 64 }),
                });
}
function O(e) {
    let { clip: t } = e,
        l = (0, o.bG)([C.A], () => (null != t.applicationId ? C.A.getApplication(t.applicationId) : null)),
        s = l?.getIconURL(32);
    return (0, i.jsx)("div", {
        className: V.gS,
        "aria-hidden": "true",
        children:
            null != s
                ? (0, i.jsx)("img", { src: s, alt: "", className: V.NH })
                : t.type === k.nQ.VOICE_CLIP
                  ? (0, i.jsx)(m.HKD, { size: "sm", color: "currentColor" })
                  : (0, i.jsx)(m.kN9, { size: "sm", color: "currentColor" }),
    });
}
