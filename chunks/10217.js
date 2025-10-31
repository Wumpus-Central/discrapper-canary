n.d(t, { Z: () => H }), n(388685), n(539854);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(913527),
    c = n.n(s),
    o = n(872175),
    u = n(442837),
    d = n(36563),
    p = n(481060),
    m = n(239091),
    f = n(100527),
    y = n(906732),
    b = n(812206),
    v = n(70097),
    h = n(592125),
    g = n(430824),
    j = n(594174),
    O = n(962399),
    x = n(626135),
    C = n(55935),
    w = n(823379),
    P = n(709054),
    k = n(435064),
    I = n(894694),
    S = n(39604),
    E = n(367825),
    N = n(572720),
    M = n(930311),
    Z = n(542055),
    D = n(981631),
    L = n(388032),
    T = n(134351);
let H = function (e) {
    var t, i, s, c, b;
    let { clip: v, actionsDisabled: O, isNew: S, onClick: E } = e,
        N = (0, u.Wu)([j.default], () => v.users.map((e) => j.default.getUser(e)).filter(w.lm)),
        M = (0, u.e7)([h.Z], () => (null != v.channelId ? h.Z.getChannel(v.channelId) : null)),
        H = (0, u.e7)([g.Z], () => (null != v.guildId ? g.Z.getGuild(v.guildId) : null)),
        { analyticsLocations: V } = (0, y.ZP)(f.Z.CLIPS_GALLERY_ITEM),
        { selectedClipIds: U, toggleClipSelection: z, isMultiSelectMode: B } = r.useContext(Z.U),
        [G, F] = r.useState(!1),
        Y = r.useRef(null),
        K = (0, o.Z)(null != (b = null == (t = v.editMetadata) ? void 0 : t.start) ? b : 0),
        q = U.has(v.id),
        X = v.type === I.NJ.SCREENSHOT,
        W =
            "" === v.applicationName && (null == M ? void 0 : M.name) != null && "" !== M.name
                ? M.name
                : v.applicationName,
        J = (0, C.Xf)(new Date(P.default.extractTimestamp(v.id))),
        Q = r.useMemo(() => {
            let e = [];
            if (v.type === I.NJ.VOICE_CLIP)
                (null == H ? void 0 : H.name) != null && e.push(H.name),
                    (null == M ? void 0 : M.name) != null && e.push(M.name);
            else {
                var t, n;
                "" !== W && null != W && e.push(W),
                    (null == (t = v.activity) ? void 0 : t.state) != null &&
                        "" !== v.activity.state &&
                        e.push(v.activity.state),
                    (null == (n = v.activity) ? void 0 : n.details) != null &&
                        "" !== v.activity.details &&
                        e.push(v.activity.details);
            }
            return e.join(" \u203A ");
        }, [
            W,
            null == H ? void 0 : H.name,
            null == M ? void 0 : M.name,
            null == (i = v.activity) ? void 0 : i.state,
            null == (s = v.activity) ? void 0 : s.details,
            v.type,
        ]),
        $ = r.useCallback(() => {
            let e = Y.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        ee = r.useCallback(() => {
            var e;
            if (!0 === X) return;
            let t = Y.current;
            null != t && t.paused && ((t.currentTime = K.current), null == (e = Y.current) || e.play());
        }, [X, K]),
        et = r.useCallback(() => {
            var e, t;
            if (!0 === X) return;
            let n = Y.current;
            null != n &&
                (n.pause(), (n.currentTime = null != (t = null == (e = v.editMetadata) ? void 0 : e.start) ? t : 0));
        }, [X, null == (c = v.editMetadata) ? void 0 : c.start]),
        en = r.useCallback(
            (e) => {
                var t, n;
                (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? void 0 : t.parentElement) !==
                    e.currentTarget.parentElement && et();
            },
            [et],
        ),
        el = r.useCallback(() => {
            F(!1);
        }, []),
        er = r.useCallback(
            (e) => {
                var t;
                F(!0), null == (t = Y.current) || t.pause();
                let r = B && U.size > 0 ? k.Z.getClips().filter((e) => U.has(e.id)) : [v];
                (0, m.jW)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([n.e("32157"), n.e("56052")]).then(n.bind(n, 151090));
                        return (t) => {
                            var n, i;
                            return (0, l.jsx)(
                                e,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })({}, t)),
                                (i = i =
                                    {
                                        clips: r,
                                        actionsDisabled: O,
                                        showShareAndEdit: !0,
                                        onShare: () => {
                                            x.default.track(D.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                        },
                                        onEdit: () => {
                                            x.default.track(D.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                        },
                                        onBeforeDelete: $,
                                        onAfterDelete: () => {
                                            x.default.track(D.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
                                        },
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, l);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n),
                            );
                        };
                    },
                    { onClose: el },
                );
            },
            [v, B, U, O, $, el],
        ),
        ei = r.useCallback(
            (e) => {
                O || (e.preventDefault(), e.stopPropagation(), er(e));
            },
            [O, er],
        ),
        ea = r.useCallback(
            (e) => {
                O ||
                    (e.shiftKey ? (e.preventDefault(), z(v.id)) : B ? z(v.id) : null != E && E(v),
                    x.default.track(D.rMx.CLIP_GALLERY_CARD_CLICKED));
            },
            [O, B, z, v, E],
        );
    return (0, l.jsx)(y.Gt, {
        value: V,
        children: (0, l.jsxs)(p.kL8, {
            "aria-disabled": O,
            "aria-label": L.intl.string(!0 === X ? L.t["HO/oXl"] : L.t.bt75uw),
            onClick: O ? void 0 : ea,
            onContextMenu: ei,
            className: a()(T.clipItem, {
                [T.disabled]: O,
                [T.focused]: G,
                [T.selected]: q,
            }),
            onBlur: en,
            onFocus: ee,
            onMouseOver: ee,
            onMouseLeave: et,
            children: [
                (0, l.jsx)(A, {
                    clip: v,
                    isNew: S,
                    videoRef: Y,
                    onOpenContextMenu: er,
                    actionsDisabled: O,
                }),
                (0, l.jsxs)("div", {
                    className: T.clipMetadata,
                    children: [
                        (0, l.jsx)(_, { clip: v }),
                        (0, l.jsxs)("div", {
                            className: T.clipTextInfo,
                            children: [
                                (0, l.jsx)(R, { clip: v }),
                                (0, l.jsx)(p.Text, {
                                    className: T.clipSubtitle,
                                    color: "text-secondary",
                                    variant: "text-sm/medium",
                                    children: Q,
                                }),
                                (0, l.jsx)(p.Text, {
                                    className: T.clipSubtitle,
                                    color: "text-secondary",
                                    variant: "text-sm/normal",
                                    children: J,
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: T.clipAvatars,
                            children: (0, l.jsx)(d.Z, {
                                maxUsers: 3,
                                users: N,
                                size: p.EFr.SIZE_24,
                                onFocusOverflow: (e) => {
                                    var t, n, l, r;
                                    let i = e.relatedTarget,
                                        a =
                                            null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement)
                                                ? void 0
                                                : t.parentElement;
                                    (null == i ? void 0 : i.parentElement) !== a &&
                                        (null == i || null == (r = i.parentElement) || null == (l = r.parentElement)
                                            ? void 0
                                            : l.parentElement) !== a &&
                                        ee();
                                },
                                "aria-label": L.intl.string(L.t.WTozwe),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
function A(e) {
    let { clip: t, isNew: n, videoRef: i, onOpenContextMenu: a, actionsDisabled: s } = e,
        o = 0 === t.length,
        u = !0 === t.pending,
        [d, m] = r.useState(0);
    r.useEffect(() => {
        let e = i.current;
        if (null == e || o) return;
        let n = null,
            l = () => {
                var r, i, a, s;
                if (e.paused || e.ended) {
                    (n = null), m(0);
                    return;
                }
                let c = null != (a = null == (r = t.editMetadata) ? void 0 : r.start) ? a : 0,
                    o = null != (s = null == (i = t.editMetadata) ? void 0 : i.end) ? s : e.duration,
                    u = ((e.currentTime - c) / (o - c)) * 100;
                m(isNaN(u) ? 0 : Math.max(0, Math.min(100, u))), (n = requestAnimationFrame(l));
            },
            r = () => {
                null == n && (n = requestAnimationFrame(l));
            },
            a = () => {
                null != n && (cancelAnimationFrame(n), (n = null), m(0));
            };
        return (
            e.addEventListener("play", r),
            e.addEventListener("pause", a),
            e.addEventListener("ended", a),
            e.paused || r(),
            () => {
                null != n && (cancelAnimationFrame(n), m(0)),
                    e.removeEventListener("play", r),
                    e.removeEventListener("pause", a),
                    e.removeEventListener("ended", a);
            }
        );
    }, [i, o, t.editMetadata]);
    let { durationDisplay: f, isClipEdited: y } = r.useMemo(() => {
            let e = t.length,
                n = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                l = !1;
            if (null != t.editMetadata) {
                let r = null != n && 1000 * n < t.length,
                    i =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (l = r || i), null != n && 1000 * n < t.length && (e = 1000 * n);
            }
            let r = c().duration(e),
                i = r.minutes(),
                a = r.seconds();
            return 0 === i
                ? {
                      durationDisplay: "".concat(a, "s"),
                      isClipEdited: l,
                  }
                : {
                      durationDisplay: "".concat(i, ":").concat(a.toString().padStart(2, "0")),
                      isClipEdited: l,
                  };
        }, [t.length, t.editMetadata]),
        b = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), S.Pr(t);
            },
            [t],
        ),
        v = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), s || a(e);
            },
            [s, a],
        );
    return (0, l.jsxs)("div", {
        className: T.clipThumbContainer,
        children: [
            (0, l.jsx)("div", { className: T.clipThumbOverlay }),
            !s &&
                (0, l.jsxs)("div", {
                    className: T.clipHoverButtons,
                    children: [
                        (0, l.jsx)(p.hU, {
                            onClick: b,
                            icon: t.isFavorite ? p.h_8 : p.Pzh,
                            "aria-label": L.intl.string(L.t.k8fFjp),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                        (0, l.jsx)(p.hU, {
                            onClick: v,
                            icon: p.Huf,
                            "aria-label": L.intl.string(L.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, l.jsx)(V, {
                clip: t,
                videoRef: i,
            }),
            !o &&
                d > 0 &&
                (0, l.jsx)("div", {
                    className: T.clipProgressBar,
                    children: (0, l.jsx)("div", {
                        className: T.clipProgressFill,
                        style: { width: "".concat(d, "%") },
                    }),
                }),
            "auto" === t.clipMethod &&
                (0, l.jsxs)("div", {
                    className: T.clipTemporaryBadge,
                    children: [
                        t.isTemporary &&
                            (0, l.jsx)(p.T39, {
                                size: "sm",
                                color: "currentColor",
                            }),
                        (0, l.jsx)(p.Text, {
                            variant: "text-sm/semibold",
                            color: "always-white",
                            children: L.intl.string(L.t["3Y2DJ8"]),
                        }),
                    ],
                }),
            (n || !o) &&
                (0, l.jsxs)("div", {
                    className: T.clipBadge,
                    children: [
                        !u && n && (0, l.jsx)(p.IGR, { text: L.intl.string(L.t.y2b7CA) }),
                        !o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    y &&
                                        (0, l.jsx)(O.Z, {
                                            color: "white",
                                            width: 16,
                                            height: 16,
                                        }),
                                    (0, l.jsx)("span", {
                                        children: (0, l.jsx)(p.Text, {
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            tabularNumbers: !0,
                                            children: u ? L.intl.string(L.t["2Fp7OP"]) : f,
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
function R(e) {
    let { clip: t } = e,
        n = (0, M.q)(t),
        r = "" !== n;
    return (0, l.jsx)(p.Text, {
        className: T.clipTitle,
        variant: "text-md/normal",
        color: r ? "text-secondary" : "text-default",
        children: r ? n : t.name,
    });
}
function V(e) {
    let { clip: t, videoRef: n } = e,
        r = (0, N.l)(t),
        i = t.type === I.NJ.SCREENSHOT;
    return t.type === I.NJ.VOICE_CLIP
        ? (0, l.jsx)(E.Z, { className: T.clipThumb })
        : i
          ? (0, l.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: T.clipThumb,
            })
          : null != r
            ? (0, l.jsx)(v.Z, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: r,
                  loop: !0,
                  className: T.clipThumb,
                  ref: n,
              })
            : "" !== t.thumbnail
              ? (0, l.jsx)("img", {
                    alt: "",
                    src: t.thumbnail,
                    className: T.clipThumb,
                })
              : (0, l.jsx)("div", {
                    className: a()(T.clipThumb, T.clipThumbEmpty),
                    children: (0, l.jsx)(p.Roe, {
                        size: "custom",
                        width: 64,
                        height: 64,
                    }),
                });
}
function _(e) {
    let { clip: t } = e,
        n = (0, u.e7)([b.Z], () => (null != t.applicationId ? b.Z.getApplication(t.applicationId) : null)),
        r = null == n ? void 0 : n.getIconURL(32);
    return (0, l.jsx)("div", {
        className: T.clipIcon,
        "aria-hidden": "true",
        children:
            null != r
                ? (0, l.jsx)("img", {
                      src: r,
                      alt: "",
                      className: T.clipIconImage,
                  })
                : t.type === I.NJ.VOICE_CLIP
                  ? (0, l.jsx)(p.gj8, {
                        size: "sm",
                        color: "currentColor",
                    })
                  : (0, l.jsx)(p.pzj, {
                        size: "sm",
                        color: "currentColor",
                    }),
    });
}
