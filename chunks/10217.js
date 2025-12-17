n.d(t, { Z: () => T }), n(388685), n(539854);
var l = n(54381),
    r = n(473749),
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
    b = n(906732),
    v = n(812206),
    y = n(70097),
    h = n(592125),
    j = n(430824),
    g = n(594174),
    x = n(962399),
    O = n(626135),
    C = n(55935),
    w = n(823379),
    P = n(709054),
    k = n(435064),
    I = n(894694),
    S = n(39604),
    E = n(367825),
    N = n(572720),
    M = n(930311),
    D = n(542055),
    Z = n(981631),
    L = n(388032),
    H = n(278018);
let T = function (e) {
    var t, i, s, c, v;
    let { clip: y, actionsDisabled: x, isNew: S, onClick: E } = e,
        N = (0, u.Wu)([g.default], () => y.users.map((e) => g.default.getUser(e)).filter(w.lm)),
        M = (0, u.e7)([h.Z], () => (null != y.channelId ? h.Z.getChannel(y.channelId) : null)),
        T = (0, u.e7)([j.Z], () => (null != y.guildId ? j.Z.getGuild(y.guildId) : null)),
        { analyticsLocations: V } = (0, b.ZP)(f.Z.CLIPS_GALLERY_ITEM),
        { selectedClipIds: U, toggleClipSelection: z, isMultiSelectMode: B } = r.useContext(D.U),
        [G, F] = r.useState(!1),
        Y = r.useRef(null),
        K = (0, o.Z)(null != (v = null == (t = y.editMetadata) ? void 0 : t.start) ? v : 0),
        q = U.has(y.id),
        X = y.type === I.NJ.SCREENSHOT,
        W =
            "" === y.applicationName && (null == M ? void 0 : M.name) != null && "" !== M.name
                ? M.name
                : y.applicationName,
        J = (0, C.Xf)(new Date(P.default.extractTimestamp(y.id))),
        Q = r.useMemo(() => {
            let e = [];
            if (y.type === I.NJ.VOICE_CLIP)
                (null == T ? void 0 : T.name) != null && e.push(T.name),
                    (null == M ? void 0 : M.name) != null && e.push(M.name);
            else {
                var t, n;
                "" !== W && null != W && e.push(W),
                    (null == (t = y.activity) ? void 0 : t.state) != null &&
                        "" !== y.activity.state &&
                        e.push(y.activity.state),
                    (null == (n = y.activity) ? void 0 : n.details) != null &&
                        "" !== y.activity.details &&
                        e.push(y.activity.details);
            }
            return e.join(" \u203A ");
        }, [
            W,
            null == T ? void 0 : T.name,
            null == M ? void 0 : M.name,
            null == (i = y.activity) ? void 0 : i.state,
            null == (s = y.activity) ? void 0 : s.details,
            y.type,
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
                (n.pause(), (n.currentTime = null != (t = null == (e = y.editMetadata) ? void 0 : e.start) ? t : 0));
        }, [X, null == (c = y.editMetadata) ? void 0 : c.start]),
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
                let r = B && U.size > 0 ? k.Z.getClips().filter((e) => U.has(e.id)) : [y];
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
                                        actionsDisabled: x,
                                        showShareAndEdit: !0,
                                        onShare: () => {
                                            O.default.track(Z.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
                                        },
                                        onEdit: () => {
                                            O.default.track(Z.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
                                        },
                                        onBeforeDelete: $,
                                        onAfterDelete: () => {
                                            O.default.track(Z.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
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
            [y, B, U, x, $, el],
        ),
        ei = r.useCallback(
            (e) => {
                x || (e.preventDefault(), e.stopPropagation(), er(e));
            },
            [x, er],
        ),
        ea = r.useCallback(
            (e) => {
                x ||
                    (e.shiftKey ? (e.preventDefault(), z(y.id)) : B ? z(y.id) : null != E && E(y),
                    O.default.track(Z.rMx.CLIP_GALLERY_CARD_CLICKED));
            },
            [x, B, z, y, E],
        );
    return (0, l.jsx)(b.Gt, {
        value: V,
        children: (0, l.jsxs)(p.kL8, {
            "aria-disabled": x,
            "aria-label": L.intl.string(!0 === X ? L.t["HO/oXl"] : L.t.bt75uw),
            onClick: x ? void 0 : ea,
            onContextMenu: ei,
            className: a()(H.clipItem, {
                [H.disabled]: x,
                [H.focused]: G,
                [H.selected]: q,
            }),
            onBlur: en,
            onFocus: ee,
            onMouseOver: ee,
            onMouseLeave: et,
            children: [
                (0, l.jsx)(A, {
                    clip: y,
                    isNew: S,
                    videoRef: Y,
                    onOpenContextMenu: er,
                    actionsDisabled: x,
                }),
                (0, l.jsxs)("div", {
                    className: H.clipMetadata,
                    children: [
                        (0, l.jsx)(_, { clip: y }),
                        (0, l.jsxs)("div", {
                            className: H.clipTextInfo,
                            children: [
                                (0, l.jsx)(R, { clip: y }),
                                (0, l.jsx)(p.Text, {
                                    className: H.clipSubtitle,
                                    color: "text-subtle",
                                    variant: "text-sm/medium",
                                    children: Q,
                                }),
                                (0, l.jsx)(p.Text, {
                                    className: H.clipSubtitle,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: J,
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: H.clipAvatars,
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
    let { durationDisplay: f, isClipEdited: b } = r.useMemo(() => {
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
        v = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), S.Pr(t);
            },
            [t],
        ),
        y = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), s || a(e);
            },
            [s, a],
        );
    return (0, l.jsxs)("div", {
        className: H.clipThumbContainer,
        children: [
            (0, l.jsx)("div", { className: H.clipThumbOverlay }),
            !s &&
                (0, l.jsxs)("div", {
                    className: H.clipHoverButtons,
                    children: [
                        (0, l.jsx)(p.hU, {
                            onClick: v,
                            icon: t.isFavorite ? p.h_8 : p.Pzh,
                            "aria-label": L.intl.string(L.t.k8fFjp),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                        (0, l.jsx)(p.hU, {
                            onClick: y,
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
                    className: H.clipProgressBar,
                    children: (0, l.jsx)("div", {
                        className: H.clipProgressFill,
                        style: { width: "".concat(d, "%") },
                    }),
                }),
            "auto" === t.clipMethod &&
                (0, l.jsxs)("div", {
                    className: H.clipTemporaryBadge,
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
                    className: H.clipBadge,
                    children: [
                        !u && n && (0, l.jsx)(p.IGR, { text: L.intl.string(L.t.y2b7CA) }),
                        !o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    b &&
                                        (0, l.jsx)(x.Z, {
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
        className: H.clipTitle,
        variant: "text-md/normal",
        color: r ? "text-subtle" : "text-default",
        children: r ? n : t.name,
    });
}
function V(e) {
    let { clip: t, videoRef: n } = e,
        r = (0, N.l)(t),
        i = t.type === I.NJ.SCREENSHOT;
    return t.type === I.NJ.VOICE_CLIP
        ? (0, l.jsx)(E.Z, { className: H.clipThumb })
        : i
          ? (0, l.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: H.clipThumb,
            })
          : null != r
            ? (0, l.jsx)(y.Z, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: r,
                  loop: !0,
                  className: H.clipThumb,
                  ref: n,
              })
            : "" !== t.thumbnail
              ? (0, l.jsx)("img", {
                    alt: "",
                    src: t.thumbnail,
                    className: H.clipThumb,
                })
              : (0, l.jsx)("div", {
                    className: a()(H.clipThumb, H.clipThumbEmpty),
                    children: (0, l.jsx)(p.Roe, {
                        size: "custom",
                        width: 64,
                        height: 64,
                    }),
                });
}
function _(e) {
    let { clip: t } = e,
        n = (0, u.e7)([v.Z], () => (null != t.applicationId ? v.Z.getApplication(t.applicationId) : null)),
        r = null == n ? void 0 : n.getIconURL(32);
    return (0, l.jsx)("div", {
        className: H.clipIcon,
        "aria-hidden": "true",
        children:
            null != r
                ? (0, l.jsx)("img", {
                      src: r,
                      alt: "",
                      className: H.clipIconImage,
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
