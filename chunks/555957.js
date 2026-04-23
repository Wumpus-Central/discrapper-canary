l.d(t, { A: () => Y }), l(321073);
var a = l(627968),
    n = l(64700),
    s = l(503698),
    i = l.n(s),
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
    V = l(274372),
    _ = l(372684),
    z = l(399925),
    H = l(226421),
    $ = l(665039),
    F = l(718812),
    B = l(543428),
    K = l(652215),
    Z = l(16590),
    Q = l(985018),
    X = l(798594);
let Y = function (e) {
    let { clip: t, actionsDisabled: s, isNew: r, onEdit: d, onClick: m } = e,
        v = (0, c.yK)([D.default], () => t.users.map((e) => D.default.getUser(e)).filter(G.Vq)),
        g = (0, c.bG)([R.A], () => (null != t.channelId ? R.A.getChannel(t.channelId) : null)),
        x = (0, c.bG)([T.A], () => (null != t.guildId ? T.A.getGuild(t.guildId) : null)),
        { analyticsLocations: j } = (0, I.Ay)(k.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: b, toggleClipSelection: C, isMultiSelectMode: y } = n.useContext(B.$),
        [A, N] = n.useState(!1),
        E = n.useRef(null),
        S = (0, o.A)(t.editMetadata?.start ?? 0),
        M = b.has(t.id),
        O = t.type === _.nQ.SCREENSHOT,
        z = (0, L.Ay)(g),
        H = "" === t.applicationName && null != z && "" !== z ? z : t.applicationName,
        $ = (0, U.Fe)(new Date(t.createdAt)),
        F = n.useMemo(() => {
            let e = [];
            return (
                t.type === _.nQ.VOICE_CLIP
                    ? (x?.name != null && e.push(x.name), null != z && e.push(z))
                    : ("" !== H && null != H && e.push(H),
                      t.activity?.state != null && "" !== t.activity.state && e.push(t.activity.state),
                      t.activity?.details != null && "" !== t.activity.details && e.push(t.activity.details)),
                e.join(" › ")
            );
        }, [H, x?.name, z, t.activity?.state, t.activity?.details, t.type]),
        Z = n.useCallback(() => {
            let e = E.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        Y = n.useCallback(() => {
            if (!0 === O) return;
            let e = E.current;
            null != e && e.paused && ((e.currentTime = S.current), E.current?.play());
        }, [O, S]),
        J = n.useCallback(() => {
            if (!0 === O) return;
            let e = E.current;
            null != e && (e.pause(), (e.currentTime = t.editMetadata?.start ?? 0));
        }, [O, t.editMetadata?.start]),
        et = n.useCallback(
            (e) => {
                e.relatedTarget?.parentElement?.parentElement !== e.currentTarget.parentElement && J();
            },
            [J],
        ),
        el = n.useCallback(() => {
            N(!1);
        }, []),
        ea = n.useCallback(
            (e) => {
                N(!0), E.current?.pause();
                let n =
                    y && b.size > 0
                        ? Array.from(b)
                              .map((e) => V.A.getClipById(e))
                              .filter(G.Vq)
                        : [t];
                (0, w.L3)(
                    e,
                    async () => {
                        let { default: e } = await l.e("80628").then(l.bind(l, 183903));
                        return (l) =>
                            (0, a.jsx)(e, {
                                ...l,
                                clips: n,
                                actionsDisabled: s,
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
            [t, y, b, s, Z, el, d],
        ),
        en = n.useCallback(
            (e) => {
                s || (e.preventDefault(), e.stopPropagation(), ea(e));
            },
            [s, ea],
        ),
        es = n.useCallback(
            (e) => {
                s ||
                    (e.shiftKey ? (e.preventDefault(), C(t.id)) : y ? C(t.id) : null != m && m(t),
                    P.default.track(K.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [s, y, C, t, m],
        );
    return (0, a.jsx)(I.f5, {
        value: j,
        children: (0, a.jsxs)(h.s, {
            "aria-disabled": s,
            "aria-label": Q.intl.string(!0 === O ? Q.t["HO/oXl"] : Q.t.bt75uw),
            onClick: s ? void 0 : es,
            onContextMenu: en,
            className: i()(X.QN, { [X.r9]: s, [X.in]: A, [X.wH]: M }),
            onBlur: et,
            onFocus: Y,
            onMouseOver: Y,
            onMouseLeave: J,
            children: [
                (0, a.jsx)(q, { clip: t, isNew: r, videoRef: E, onOpenContextMenu: ea, actionsDisabled: s }),
                (0, a.jsxs)("div", {
                    className: X.wI,
                    children: [
                        (0, a.jsx)(ee, { clip: t }),
                        (0, a.jsxs)("div", {
                            className: X.i0,
                            children: [
                                (0, a.jsx)(W, { clip: t }),
                                (0, a.jsx)(p.E, {
                                    className: X.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: F,
                                }),
                                (0, a.jsx)(p.E, {
                                    className: X.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: $,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: X.jW,
                            children: (0, a.jsx)(u.A, {
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
    let { clip: t, isNew: l, videoRef: s, onOpenContextMenu: i, actionsDisabled: r } = e,
        o = 0 === t.length,
        c = !0 === t.pending,
        [u, h] = n.useState(0);
    n.useEffect(() => {
        let e = s.current;
        if (null == e || o) return;
        let l = null,
            a = () => {
                if (e.paused || e.ended) {
                    (l = null), h(0);
                    return;
                }
                let n = t.editMetadata?.start ?? 0,
                    s = t.editMetadata?.end ?? e.duration,
                    i = ((e.currentTime - n) / (s - n)) * 100;
                h(isNaN(i) ? 0 : Math.max(0, Math.min(100, i))), (l = requestAnimationFrame(a));
            },
            n = () => {
                null == l && (l = requestAnimationFrame(a));
            },
            i = () => {
                null != l && (cancelAnimationFrame(l), (l = null), h(0));
            };
        return (
            e.addEventListener("play", n),
            e.addEventListener("pause", i),
            e.addEventListener("ended", i),
            e.paused || n(),
            () => {
                null != l && (cancelAnimationFrame(l), h(0)),
                    e.removeEventListener("play", n),
                    e.removeEventListener("pause", i),
                    e.removeEventListener("ended", i);
            }
        );
    }, [s, o, t.editMetadata]);
    let { durationDisplay: f, isClipEdited: y } = n.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                a = !1;
            if (null != t.editMetadata) {
                let n = null != l && 1e3 * l < t.length,
                    s =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (a = n || s), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let n = d().duration(e),
                s = n.minutes(),
                i = n.seconds();
            return 0 === s
                ? { durationDisplay: `${i}s`, isClipEdited: a }
                : { durationDisplay: `${s}:${i.toString().padStart(2, "0")}`, isClipEdited: a };
        }, [t.length, t.editMetadata]),
        A = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), z.XK(t);
            },
            [t],
        ),
        N = n.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r || i(e);
            },
            [r, i],
        );
    return (0, a.jsxs)("div", {
        className: X.QB,
        children: [
            (0, a.jsx)("div", { className: X.ne }),
            !c && l && (0, a.jsx)(v.Lp, { className: X.Ad, text: Q.intl.string(Q.t.y2b7CA) }),
            !r &&
                (0, a.jsxs)("div", {
                    className: X.g3,
                    children: [
                        (0, a.jsx)(
                            m.m,
                            {
                                text: Q.intl.string(t.isFavorite ? Z.default.IZsalP : Z.default.ihBfyA),
                                position: "top",
                                children: (0, a.jsx)(g.K, {
                                    onClick: A,
                                    icon: t.isFavorite ? x.G : j.y,
                                    "aria-label": Q.intl.string(Q.t.k8fFjp),
                                    variant: "overlay-secondary",
                                    size: "sm",
                                }),
                            },
                            `${t.id}:favorite:${t.isFavorite}`,
                        ),
                        (0, a.jsx)(g.K, {
                            onClick: N,
                            icon: b.F,
                            "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, a.jsx)(J, { clip: t, videoRef: s }),
            (0, a.jsxs)("div", {
                className: X.E9,
                children: [
                    "auto" === t.clipMethod &&
                        (0, a.jsxs)("div", {
                            className: X.OH,
                            children: [
                                t.isTemporary && (0, a.jsx)(C.O, { size: "xs", color: "currentColor" }),
                                (0, a.jsx)(p.E, {
                                    variant: "text-sm/semibold",
                                    color: "always-white",
                                    children: Q.intl.string(Q.t["3Y2DJ8"]),
                                }),
                            ],
                        }),
                    !o &&
                        (0, a.jsxs)("div", {
                            className: X.OH,
                            children: [
                                y && (0, a.jsx)(O.A, { color: "white", width: 16, height: 16 }),
                                (0, a.jsx)("span", {
                                    children: (0, a.jsx)(p.E, {
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
                (0, a.jsx)("div", {
                    className: X.X7,
                    children: (0, a.jsx)("div", { className: X.Z2, style: { width: `${u}%` } }),
                }),
        ],
    });
}
function W(e) {
    let { clip: t } = e,
        l = (0, F.h)(t),
        n = "" !== l;
    return (0, a.jsx)(p.E, {
        className: X.NV,
        variant: "text-md/normal",
        color: "text-default",
        children: n ? l : t.name,
    });
}
function J(e) {
    let { clip: t, videoRef: l } = e,
        n = (0, $.j)(t),
        s = t.type === _.nQ.SCREENSHOT;
    return t.type === _.nQ.VOICE_CLIP
        ? (0, a.jsx)(H.A, { className: X.fT })
        : s
          ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: X.fT })
          : null != n
            ? (0, a.jsx)(M.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: n,
                  loop: !0,
                  className: X.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, a.jsx)("img", { alt: "", src: t.thumbnail, className: X.fT })
              : (0, a.jsx)("div", {
                    className: i()(X.fT, X.Is),
                    children: (0, a.jsx)(y.x, { color: A.A.colors.ICON_MUTED }),
                });
}
function ee(e) {
    let { clip: t } = e,
        l = (0, c.bG)([S.A], () => (null != t.applicationId ? S.A.getApplication(t.applicationId) : null)),
        n = l?.getIconURL(32);
    return (0, a.jsx)("div", {
        className: X.gS,
        "aria-hidden": "true",
        children:
            null != n
                ? (0, a.jsx)("img", { src: n, alt: "", className: X.NH })
                : t.type === _.nQ.VOICE_CLIP
                  ? (0, a.jsx)(N.H, { size: "sm", color: "currentColor" })
                  : (0, a.jsx)(E.k, { size: "sm", color: "currentColor" }),
    });
}
