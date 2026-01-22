l.d(t, {
    A: () => T,
}),
    l(896048),
    l(321073);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    a = l.n(i),
    s = l(989349),
    c = l.n(s),
    o = l(66455),
    u = l(311907),
    d = l(342952),
    p = l(397927),
    m = l(442433),
    f = l(793574),
    y = l(688810),
    b = l(587895),
    v = l(607470),
    j = l(734057),
    h = l(71393),
    g = l(287809),
    O = l(549685),
    x = l(954571),
    C = l(405269),
    w = l(403362),
    P = l(661191),
    A = l(274372),
    I = l(372684),
    E = l(399925),
    k = l(226421),
    S = l(665039),
    N = l(718812),
    D = l(543428),
    M = l(652215),
    L = l(985018),
    H = l(746869);
let T = function (e) {
    var t, i, s, c, b;
    let { clip: v, actionsDisabled: O, isNew: E, onClick: k } = e,
        S = (0, u.yK)([g.default], () => v.users.map((e) => g.default.getUser(e)).filter(w.Vq)),
        N = (0, u.bG)([j.A], () => (null != v.channelId ? j.A.getChannel(v.channelId) : null)),
        T = (0, u.bG)([h.A], () => (null != v.guildId ? h.A.getGuild(v.guildId) : null)),
        { analyticsLocations: G } = (0, y.Ay)(f.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: K, toggleClipSelection: z, isMultiSelectMode: U } = r.useContext(D.$),
        [F, Y] = r.useState(!1),
        B = r.useRef(null),
        Q = (0, o.A)(null != (t = null == (i = v.editMetadata) ? void 0 : i.start) ? t : 0),
        q = K.has(v.id),
        X = v.type === I.nQ.SCREENSHOT,
        Z =
            "" === v.applicationName && (null == N ? void 0 : N.name) != null && "" !== N.name
                ? N.name
                : v.applicationName,
        W = (0, C.Fe)(new Date(P.default.extractTimestamp(v.id))),
        $ = r.useMemo(() => {
            let e = [];
            if (v.type === I.nQ.VOICE_CLIP)
                (null == T ? void 0 : T.name) != null && e.push(T.name),
                    (null == N ? void 0 : N.name) != null && e.push(N.name);
            else {
                var t, l;
                "" !== Z && null != Z && e.push(Z),
                    (null == (t = v.activity) ? void 0 : t.state) != null &&
                        "" !== v.activity.state &&
                        e.push(v.activity.state),
                    (null == (l = v.activity) ? void 0 : l.details) != null &&
                        "" !== v.activity.details &&
                        e.push(v.activity.details);
            }
            return e.join(" › ");
        }, [
            Z,
            null == T ? void 0 : T.name,
            null == N ? void 0 : N.name,
            null == (s = v.activity) ? void 0 : s.state,
            null == (c = v.activity) ? void 0 : c.details,
            v.type,
        ]),
        J = r.useCallback(() => {
            let e = B.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        ee = r.useCallback(() => {
            var e;
            if (!0 === X) return;
            let t = B.current;
            null != t && t.paused && ((t.currentTime = Q.current), null == (e = B.current) || e.play());
        }, [X, Q]),
        et = r.useCallback(() => {
            var e, t;
            if (!0 === X) return;
            let l = B.current;
            null != l &&
                (l.pause(), (l.currentTime = null != (e = null == (t = v.editMetadata) ? void 0 : t.start) ? e : 0));
        }, [X, null == (b = v.editMetadata) ? void 0 : b.start]),
        el = r.useCallback(
            (e) => {
                var t, l;
                (null == (l = e.relatedTarget) || null == (t = l.parentElement) ? void 0 : t.parentElement) !==
                    e.currentTarget.parentElement && et();
            },
            [et],
        ),
        en = r.useCallback(() => {
            Y(!1);
        }, []),
        er = r.useCallback(
            (e) => {
                var t;
                Y(!0), null == (t = B.current) || t.pause();
                let r = U && K.size > 0 ? A.A.getClips().filter((e) => K.has(e.id)) : [v];
                (0, m.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([l.e("80628"), l.e("80559")]).then(l.bind(l, 183903));
                        return (t) => {
                            var l, i;
                            return (0, n.jsx)(
                                e,
                                ((l = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var l = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(l);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = l[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = n);
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
                                            x.default.track(M.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                                type: "share",
                                            });
                                        },
                                        onEdit: () => {
                                            x.default.track(M.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                                type: "edit",
                                            });
                                        },
                                        onBeforeDelete: J,
                                        onAfterDelete: () => {
                                            x.default.track(M.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                                type: "delete",
                                            });
                                        },
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var l = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              l.push.apply(l, n);
                                          }
                                          return l;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                l),
                            );
                        };
                    },
                    {
                        onClose: en,
                    },
                );
            },
            [v, U, K, O, J, en],
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
                    (e.shiftKey ? (e.preventDefault(), z(v.id)) : U ? z(v.id) : null != k && k(v),
                    x.default.track(M.HAw.CLIP_GALLERY_CARD_CLICKED));
            },
            [O, U, z, v, k],
        );
    return (0, n.jsx)(y.f5, {
        value: G,
        children: (0, n.jsxs)(p.sqX, {
            "aria-disabled": O,
            "aria-label": L.intl.string(!0 === X ? L.t["HO/oXl"] : L.t.bt75uw),
            onClick: O ? void 0 : ea,
            onContextMenu: ei,
            className: a()(H.QN, {
                [H.r9]: O,
                [H.in]: F,
                [H.wH]: q,
            }),
            onBlur: el,
            onFocus: ee,
            onMouseOver: ee,
            onMouseLeave: et,
            children: [
                (0, n.jsx)(R, {
                    clip: v,
                    isNew: E,
                    videoRef: B,
                    onOpenContextMenu: er,
                    actionsDisabled: O,
                }),
                (0, n.jsxs)("div", {
                    className: H.wI,
                    children: [
                        (0, n.jsx)(_, {
                            clip: v,
                        }),
                        (0, n.jsxs)("div", {
                            className: H.i0,
                            children: [
                                (0, n.jsx)(V, {
                                    clip: v,
                                }),
                                (0, n.jsx)(p.Text, {
                                    className: H.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/medium",
                                    children: $,
                                }),
                                (0, n.jsx)(p.Text, {
                                    className: H.xD,
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children: W,
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: H.jW,
                            children: (0, n.jsx)(d.A, {
                                maxUsers: 3,
                                users: S,
                                size: p._3J.SIZE_24,
                                onFocusOverflow: (e) => {
                                    var t, l, n, r;
                                    let i = e.relatedTarget,
                                        a =
                                            null == (l = e.currentTarget.parentElement) || null == (t = l.parentElement)
                                                ? void 0
                                                : t.parentElement;
                                    (null == i ? void 0 : i.parentElement) === a ||
                                        ((null == i || null == (r = i.parentElement) || null == (n = r.parentElement)
                                            ? void 0
                                            : n.parentElement) !== a &&
                                            ee());
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

function R(e) {
    let { clip: t, isNew: l, videoRef: i, onOpenContextMenu: a, actionsDisabled: s } = e,
        o = 0 === t.length,
        u = !0 === t.pending,
        [d, m] = r.useState(0);
    r.useEffect(() => {
        let e = i.current;
        if (null == e || o) return;
        let l = null,
            n = () => {
                var r, i, a, s;
                if (e.paused || e.ended) {
                    (l = null), m(0);
                    return;
                }
                let c = null != (r = null == (a = t.editMetadata) ? void 0 : a.start) ? r : 0,
                    o = null != (i = null == (s = t.editMetadata) ? void 0 : s.end) ? i : e.duration,
                    u = ((e.currentTime - c) / (o - c)) * 100;
                m(isNaN(u) ? 0 : Math.max(0, Math.min(100, u))), (l = requestAnimationFrame(n));
            },
            r = () => {
                null == l && (l = requestAnimationFrame(n));
            },
            a = () => {
                null != l && (cancelAnimationFrame(l), (l = null), m(0));
            };
        return (
            e.addEventListener("play", r),
            e.addEventListener("pause", a),
            e.addEventListener("ended", a),
            e.paused || r(),
            () => {
                null != l && (cancelAnimationFrame(l), m(0)),
                    e.removeEventListener("play", r),
                    e.removeEventListener("pause", a),
                    e.removeEventListener("ended", a);
            }
        );
    }, [i, o, t.editMetadata]);
    let { durationDisplay: f, isClipEdited: y } = r.useMemo(() => {
            let e = t.length,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null,
                n = !1;
            if (null != t.editMetadata) {
                let r = null != l && 1e3 * l < t.length,
                    i =
                        !1 === t.editMetadata.applicationAudio ||
                        !1 === t.editMetadata.voiceAudio ||
                        !1 === t.editMetadata.soundboardAudio;
                (n = r || i), null != l && 1e3 * l < t.length && (e = 1e3 * l);
            }
            let r = c().duration(e),
                i = r.minutes(),
                a = r.seconds();
            return 0 === i
                ? {
                      durationDisplay: "".concat(a, "s"),
                      isClipEdited: n,
                  }
                : {
                      durationDisplay: "".concat(i, ":").concat(a.toString().padStart(2, "0")),
                      isClipEdited: n,
                  };
        }, [t.length, t.editMetadata]),
        b = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), E.XK(t);
            },
            [t],
        ),
        v = r.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), s || a(e);
            },
            [s, a],
        );
    return (0, n.jsxs)("div", {
        className: H.QB,
        children: [
            (0, n.jsx)("div", {
                className: H.ne,
            }),
            !s &&
                (0, n.jsxs)("div", {
                    className: H.g3,
                    children: [
                        (0, n.jsx)(p.K0, {
                            onClick: b,
                            icon: t.isFavorite ? p.C3E : p.yhu,
                            "aria-label": L.intl.string(L.t.k8fFjp),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                        (0, n.jsx)(p.K0, {
                            onClick: v,
                            icon: p.FHP,
                            "aria-label": L.intl.string(L.t["UKOtz+"]),
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            (0, n.jsx)(G, {
                clip: t,
                videoRef: i,
            }),
            !o &&
                d > 0 &&
                (0, n.jsx)("div", {
                    className: H.X7,
                    children: (0, n.jsx)("div", {
                        className: H.Z2,
                        style: {
                            width: "".concat(d, "%"),
                        },
                    }),
                }),
            "auto" === t.clipMethod &&
                (0, n.jsxs)("div", {
                    className: H.jt,
                    children: [
                        t.isTemporary &&
                            (0, n.jsx)(p.O4, {
                                size: "sm",
                                color: "currentColor",
                            }),
                        (0, n.jsx)(p.Text, {
                            variant: "text-sm/semibold",
                            color: "always-white",
                            children: L.intl.string(L.t["3Y2DJ8"]),
                        }),
                    ],
                }),
            (l || !o) &&
                (0, n.jsxs)("div", {
                    className: H.OH,
                    children: [
                        !u &&
                            l &&
                            (0, n.jsx)(p.LpS, {
                                text: L.intl.string(L.t.y2b7CA),
                            }),
                        !o &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    y &&
                                        (0, n.jsx)(O.A, {
                                            color: "white",
                                            width: 16,
                                            height: 16,
                                        }),
                                    (0, n.jsx)("span", {
                                        children: (0, n.jsx)(p.Text, {
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

function V(e) {
    let { clip: t } = e,
        l = (0, N.h)(t),
        r = "" !== l;
    return (0, n.jsx)(p.Text, {
        className: H.NV,
        variant: "text-md/normal",
        color: r ? "text-subtle" : "text-default",
        children: r ? l : t.name,
    });
}

function G(e) {
    let { clip: t, videoRef: l } = e,
        r = (0, S.j)(t),
        i = t.type === I.nQ.SCREENSHOT;
    return t.type === I.nQ.VOICE_CLIP
        ? (0, n.jsx)(k.A, {
              className: H.fT,
          })
        : i
          ? (0, n.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: H.fT,
            })
          : null != r
            ? (0, n.jsx)(v.A, {
                  preload: "metadata",
                  poster: t.thumbnail,
                  muted: !0,
                  src: r,
                  loop: !0,
                  className: H.fT,
                  ref: l,
              })
            : "" !== t.thumbnail
              ? (0, n.jsx)("img", {
                    alt: "",
                    src: t.thumbnail,
                    className: H.fT,
                })
              : (0, n.jsx)("div", {
                    className: a()(H.fT, H.Is),
                    children: (0, n.jsx)(p.TAc, {
                        size: "custom",
                        width: 64,
                        height: 64,
                    }),
                });
}

function _(e) {
    let { clip: t } = e,
        l = (0, u.bG)([b.A], () => (null != t.applicationId ? b.A.getApplication(t.applicationId) : null)),
        r = null == l ? void 0 : l.getIconURL(32);
    return (0, n.jsx)("div", {
        className: H.gS,
        "aria-hidden": "true",
        children:
            null != r
                ? (0, n.jsx)("img", {
                      src: r,
                      alt: "",
                      className: H.NH,
                  })
                : t.type === I.nQ.VOICE_CLIP
                  ? (0, n.jsx)(p.HKD, {
                        size: "sm",
                        color: "currentColor",
                    })
                  : (0, n.jsx)(p.kN9, {
                        size: "sm",
                        color: "currentColor",
                    }),
    });
}
