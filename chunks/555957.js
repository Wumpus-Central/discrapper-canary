l.d(t, { A: () => Y }), l(321073);
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
    h = l(890856),
    p = l(834730),
    f = l(778712),
    v = l(777666),
    g = l(408278),
    x = l(27232),
    j = l(505930),
    b = l(530005),
    C = l(406810),
    y = l(176781),
    A = l(827734),
    N = l(983851),
    E = l(31300),
    w = l(442433),
    k = l(793574),
    I = l(688810),
    S = l(587895),
    L = l(47167),
    M = l(607470),
    R = l(734057),
    T = l(71393),
    D = l(287809),
    O = l(549685),
    P = l(954571),
    U = l(405269),
    G = l(403362),
    z = l(274372),
    V = l(372684),
    _ = l(399925),
    H = l(226421),
    $ = l(665039),
    B = l(718812),
    F = l(543428),
    K = l(652215),
    Z = l(788077),
    Q = l(985018),
    X = l(55746);
let Y = function (e) {
    let { clip: t, actionsDisabled: i, isNew: r, onEdit: d, onClick: m } = e,
        v = (0, c.yK)([D.default], () => t.users.map((e) => D.default.getUser(e)).filter(G.Vq)),
        g = (0, c.bG)([R.A], () => (null != t.channelId ? R.A.getChannel(t.channelId) : null)),
        x = (0, c.bG)([T.A], () => (null != t.guildId ? T.A.getGuild(t.guildId) : null)),
        { analyticsLocations: j } = (0, I.Ay)(k.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: b, toggleClipSelection: C, isMultiSelectMode: y } = a.useContext(F.$),
        [A, N] = a.useState(!1),
        E = a.useRef(null),
        S = (0, o.A)(t.editMetadata?.start ?? 0),
        M = b.has(t.id),
        O = t.type === V.nQ.SCREENSHOT,
        _ = (0, L.Ay)(g),
        H = "" === t.applicationName && null != _ && "" !== _ ? _ : t.applicationName,
        $ = (0, U.Fe)(new Date(t.createdAt)),
        B = a.useMemo(() => {
            let e = [];
            return (
                t.type === V.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != _ && e.push(_))
                    : ("" !== H && null != H && e.push(H),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [H, x?.name, _, t.activity?.state, t.activity?.details, t.type]),
        Z = a.useCallback(() => {
            let e = E.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        Y = a.useCallback(() => {
            if (!0 === O) return;
            let e = E.current;
            null != e && e.paused && ((e.currentTime = S.current), E.current?.play());
        }, [O, S]),
        J = a.useCallback(() => {
            if (!0 === O) return;
            let e = E.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [O, t.editMetadata?.start]),
        et = a.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && J();
            },
            [J],
        ),
        el = a.useCallback(() => {
            N(!1);
        }, []),
        en = a.useCallback(
            (e) => {
                N(!0), E.current?.pause();
                let a =
                    y && b.size > 0
                        ? Array.from(b)
                              .map((e) => z.A.getClipById(e))
                              .filter(G.Vq)
                        : [t];
                (0, w.L3)(
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
                                    P.default.track(K.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                },
                                onEdit: () => {
                                    d(t), P.default.track(K.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                },
                                onBeforeDelete: Z,
                                onAfterDelete: () => {
                                    P.default.track(K.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                },
                            });
                    },
                    { onClose: el },
                );
            },
            [t, y, b, i, Z, el, d],
        ),
        ea = a.useCallback(
            (e) => {
                i || (e.preventDefault(), e.stopPropagation(), en(e));
            },
            [i, en],
        ),
        ei = a.useCallback(
            (e) => {
                i ||
                    (e.shiftKey ? (e.preventDefault(), C(t.id)) : y ? C(t.id) : null != m && m(t),
                    P.default.track(K.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [i, y, C, t, m],
        );
    return (0, n.jsx)(I.f5, {
        value: j,
        children: (0, n.jsxs)(h.s, {
            "aria-disabled": i,
            "aria-label": Q.intl.string(!0 === O ? Q.t["HO/oXl"] : Q.t.bt75uw),
            onClick: i ? void 0 : ei,
            onContextMenu: ea,
            className: s()(X.QN, { [X.r9]: i, [X.in]: A, [X.wH]: M }),
            onBlur: et,
            onFocus: Y,
            onMouseOver: Y,
            onMouseLeave: J,
            children: [
                (0, n.jsx)(q, { clip: t, isNew: r, videoRef: E, onOpenContextMenu: en, actionsDisabled: i }),
                (0, n.jsxs)("div", {
                    className: X.wI,
                    children: [
                        (0, n.jsx)(ee, { clip: t }),
                        (0, n.jsxs)("div", {
                            className: X.i0,
                            children: [
                                (0, n.jsx)(W, { clip: t }),
                                (0, n.jsx)(p.E, {
                                    className: X.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: B,
                                }),
                                (0, n.jsx)(p.E, {
                                    className: X.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: $,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: X.jW,
                            children: (0, n.jsx)(u.A, {
                                maxUsers: 3,
                                users: v,
                                size: f._3.SIZE_24,
                                onFocusOverflow: (e) => {
                                    let t = e.relatedTarget,
                                        l = e.currentTarget.parentElement?.parentElement?.parentElement;
                                    t?.parentElement === l ||
                                        (t?.parentElement?.parentElement?.parentElement !== l && Y());
                                },
                                "aria-label": Q.intl.string(Q.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function q(e) {
    let { clip: t, isNew: l, videoRef: i, onOpenContextMenu: s, actionsDisabled: r } = e,
        o = 0 === t.length,
        c = !0 === t.pending,
        [u, h] = a.useState(0);
    a.useEffect(() => {
        let e = i.current;
        if (null == e || o) return;
        let l = null,
            n = () => {
                if (e.paused || e.ended) {
                    (l = null), h(0);
                    return;
                }
                let a = t.editMetadata?.start ?? 0,
                    i = t.editMetadata?.end ?? e.duration,
                    s = ((e.currentTime - a) / (i - a)) * 100;
                h(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (l = requestAnimationFrame(n));
            },
            a = () => {
                null == l && (l = requestAnimationFrame(n));
            },
            s = () => {
                null != l && (cancelAnimationFrame(l), (l = null), h(0));
            };
        return (
            e.addEventListener("play", a),
            e.addEventListener("pause", s),
            e.addEventListener("ended", s),
            e.paused || a(),
            () => {
                null != l && (cancelAnimationFrame(l), h(0)),
                    e.removeEventListener("play", a),
                    e.removeEventListener("pause", s),
                    e.removeEventListener("ended", s);
            }
        );
    }, [i, o, t.editMetadata]);
    let { durationDisplay: f, isClipEdited: y } = a.useMemo(() => {
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
        A = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), _.XK(t);
            },
            [t],
        ),
        N = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || s(e);
            },
            [r, s],
        );
    return (0, n.jsxs)("div", {
        className: X.QB,
        children: [
            (0, n.jsx)("div", { className: X.ne }),
            !c && l && (0, n.jsx)(v.Lp, { className: X.Ad, text: Q.intl.string(Q.t.y2b7CA) }),
            !r &&
                (0, n.jsxs)("div", {
                    className: X.g3,
                    children: [
                        (0, n.jsx)(
                            m.m,
                            {
                                text: Q.intl.string(t.isFavorite ? Z.default.IZsalP : Z.default.ihBfyA),
                                position: "top",
                                children: (0, n.jsx)(g.K, {
                                    onClick: A,
                                    icon: t.isFavorite ? x.G : j.y,
                                    "aria-label": Q.intl.string(Q.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, n.jsx)(g.K, {
                            onClick: N,
                            icon: b.F,
                            "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, n.jsx)(J, { clip: t, videoRef: i }),
            (0, n.jsxs)("div", {
                className: X.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, n.jsxs)("div", {
                            className: X.OH,
                            children: [
                                t.isTemporary && (0, n.jsx)(C.O, { size: "xs", color: "currentColor" }),
                                (0, n.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: Q.intl.string(Q.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, n.jsxs)("div", {
                            className: X.OH,
                            children: [
                                y && (0, n.jsx)(O.A, { color: "white", width: 16, height: 16 }),
                                (0, n.jsx)("span", {
                                    children: (0, n.jsx)(p.E, {
                                        variant: "text-sm/semibold",
                                        color: "always-white",
                                        tabularNumbers: !0,
                                        children: c ? Q.intl.string(Q.t["2Fp7OP"]) : f,
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
            !o &&
                u > 0 &&
                (0, n.jsx)("div", {
                    className: X.X7,
                    children: (0, n.jsx)("div", { className: X.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function W(e) {
    let { clip: t } = e,
        l = (0, B.h)(t),
        a = "" !== l;
    return (0, n.jsx)(p.E, {
        className: X.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: a ? l : t.name,
    });
}
function J(e) {
    let { clip: t, videoRef: l } = e,
        a = (0, $.j)(t),
        i = t.type === V.nQ.SCREENSHOT;
    return t.type === V.nQ.VOICE_CLIP
        ? (0, n.jsx)(H.A, { className: X.fT })
        : i
          ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: X.fT })
          : null != a
            ? (0, n.jsx)(M.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: a,
                  loop: !0,
                  className: X.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, n.jsx)("img", { alt: "", src: t.thumbnail, className: X.fT })
              : (0, n.jsx)("div", {
                    className: s()(X.fT, X.Is),
                    children: (0, n.jsx)(y.x, { color: A.A.colors.ICON_MUTED }),
                });
}
function ee(e) {
    let { clip: t } = e,
        l = (0, c.bG)([S.A], () => (null != t.applicationId ? S.A.getApplication(t.applicationId) : null)),
        a = l?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: X.gS,
        "aria-hidden": "true",
        children:
            null != a
                ? (0, n.jsx)("img", { src: a, alt: "", className: X.NH })
                : t.type === V.nQ.VOICE_CLIP
                  ? (0, n.jsx)(N.H, { size: "sm", color: "currentColor" })
                  : (0, n.jsx)(E.k, { size: "sm", color: "currentColor" }),
    });
}
