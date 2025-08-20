n.d(t, { Z: () => k }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(120356),
    i = n.n(a),
    o = n(913527),
    c = n.n(o),
    s = n(893999),
    u = n(442837),
    d = n(846519),
    p = n(212605),
    m = n(755721),
    f = n(481060),
    b = n(100527),
    g = n(906732),
    h = n(70097),
    y = n(237617),
    x = n(318374),
    j = n(594174),
    v = n(962399),
    O = n(626135),
    _ = n(823379),
    C = n(709054),
    P = n(39604),
    w = n(572720),
    N = n(981631),
    E = n(388032),
    S = n(134351);
function I(e) {
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
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = function (e) {
    var t, n, a;
    let { clip: o, exporting: c, actionsDisabled: s, isNew: p, onDelete: m, onEdit: h, onShare: v } = e,
        P = (0, u.Wu)([j.default], () => o.users.map((e) => j.default.getUser(e)).filter(_.lm)),
        { analyticsLocations: w } = (0, g.ZP)(b.Z.CLIPS_GALLERY_ITEM),
        [I, T] = r.useState(!1),
        k = r.useRef(null),
        L = (0, y.Z)(null != (a = null == (t = o.editMetadata) ? void 0 : t.start) ? a : 0),
        R = r.useRef(
            new d.sW(500, () => {
                var e;
                let t = k.current;
                null != t && t.paused && ((t.currentTime = L.current), null == (e = k.current) || e.play());
            }),
        ),
        B = r.useCallback(() => {
            let e = k.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        A = r.useCallback(() => {
            var e;
            T(!0), null == (e = R.current) || e.delay();
        }, []),
        H = r.useCallback(() => {
            var e, t, n;
            T(!1);
            let l = k.current;
            null == (e = R.current) || e.cancel(),
                null != l &&
                    (l.pause(),
                    (l.currentTime = null != (n = null == (t = o.editMetadata) ? void 0 : t.start) ? n : 0));
        }, [null == (n = o.editMetadata) ? void 0 : n.start]),
        z = r.useCallback(
            (e) => {
                var t, n;
                (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? void 0 : t.parentElement) !==
                    e.currentTarget.parentElement && H();
            },
            [H],
        ),
        V = new Date(C.default.extractTimestamp(o.id)),
        F = V.toLocaleDateString(),
        G = V.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),
        K = "".concat(F, " \u2022 ").concat(G);
    return (0, l.jsx)(g.Gt, {
        value: w,
        children: (0, l.jsxs)(f.kL8, {
            "aria-disabled": s,
            "aria-label": E.intl.string(E.t.bt75u7),
            onClick: s
                ? void 0
                : () => {
                      h(o), O.default.track(N.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: i()(S.clipItem, { [S.disabled]: s }),
            onBlur: z,
            onFocus: A,
            onMouseOver: A,
            onMouseLeave: H,
            children: [
                (0, l.jsx)(D, {
                    clip: o,
                    isNew: p,
                    videoRef: k,
                }),
                (0, l.jsxs)("div", {
                    className: S.clipFooter,
                    children: [
                        (0, l.jsx)(Z, {
                            clip: o,
                            focused: I,
                            onFocus: A,
                        }),
                        (0, l.jsx)(f.Text, {
                            className: S.clipMetadata,
                            color: "text-default",
                            variant: "text-md/medium",
                            children: o.applicationName,
                        }),
                        (0, l.jsx)(f.Text, {
                            className: S.clipMetadata,
                            color: "text-default",
                            variant: "text-md/medium",
                            children: K,
                        }),
                        (0, l.jsxs)("div", {
                            className: S.usersAndDelete,
                            children: [
                                (0, l.jsx)(x.Z, {
                                    maxUsers: 4,
                                    users: P,
                                    onFocusOverflow: (e) => {
                                        var t, n, l, r;
                                        let a = e.relatedTarget,
                                            i =
                                                null == (n = e.currentTarget.parentElement) ||
                                                null == (t = n.parentElement)
                                                    ? void 0
                                                    : t.parentElement;
                                        (null == a ? void 0 : a.parentElement) !== i &&
                                            (null == a || null == (r = a.parentElement) || null == (l = r.parentElement)
                                                ? void 0
                                                : l.parentElement) !== i &&
                                            A();
                                    },
                                    "aria-label": E.intl.string(E.t.WTozwc),
                                }),
                                I &&
                                    (0, l.jsx)(M, {
                                        clip: o,
                                        actionsDisabled: s,
                                        exporting: c,
                                        onBeforeDelete: B,
                                        onDelete: m,
                                        onEdit: h,
                                        onShare: v,
                                        onBlur: (e) => {
                                            var t;
                                            (null == (t = e.relatedTarget) ? void 0 : t.parentElement) !==
                                                e.currentTarget.parentElement && H();
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
};
function D(e) {
    let { clip: t, isNew: n, videoRef: a } = e,
        i = 0 === t.length,
        [o, s] = r.useMemo(() => {
            let e = t.length,
                n = !1,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return null != l && 1000 * l < t.length && ((e = 1000 * l), (n = !0)), [n, c().duration(e)];
        }, [t.length, t.editMetadata]),
        u = "".concat(s.seconds()).padStart(2, "0");
    return (0, l.jsxs)("div", {
        className: S.clipThumbContainer,
        children: [
            (0, l.jsx)(L, {
                clip: t,
                videoRef: a,
            }),
            (0, l.jsxs)("div", {
                className: S.clipBadges,
                children: [
                    i &&
                        (0, l.jsx)("div", {
                            className: S.clipProcessingBadge,
                            children: (0, l.jsx)(f.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: E.intl.string(E.t["2Fp7OD"]),
                            }),
                        }),
                    !i &&
                        n &&
                        (0, l.jsxs)(f.Text, {
                            className: S.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [
                                (0, l.jsx)(f.T$Z, {
                                    size: "md",
                                    color: "currentColor",
                                    className: S.newIcon,
                                }),
                                E.intl.string(E.t.y2b7CA).toUpperCase(),
                            ],
                        }),
                    !i &&
                        (0, l.jsxs)("div", {
                            className: S.clipDurationBadge,
                            children: [
                                o ? (0, l.jsx)(v.Z, { className: S.clipDurationEditIcon }) : null,
                                (0, l.jsx)(f.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    children: "".concat(s.minutes(), ":").concat(u),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function Z(e) {
    var t;
    let { clip: n, focused: a, onFocus: i } = e,
        [o, c] = r.useState(n.name),
        s = !n.name,
        [u, d] = r.useState(!1),
        [m, b] = r.useState(null != (t = n.name) ? t : ""),
        [g, h] = r.useState(!1),
        y = async () => {
            h(!0), await (0, P.Tm)(n.id, { name: "" === m ? void 0 : m }), h(!1), d(!1);
        };
    return (r.useEffect(() => {
        if (o !== n.name) {
            var e;
            c(n.name), b(null != (e = n.name) ? e : "");
        }
    }, [n.name, o]),
    u)
        ? (0, l.jsx)(f.oil, {
              onClick: (e) => e.stopPropagation(),
              value: m,
              autoFocus: !0,
              onKeyDown: (e) => {
                  "Enter" === e.key && y();
              },
              disabled: g,
              onChange: b,
              onBlur: y,
          })
        : (0, l.jsxs)(f.P3F, {
              className: S.clipTitleInputPlaceholder,
              onFocus: i,
              onClick: (e) => {
                  e.stopPropagation(), d(!0);
              },
              children: [
                  s
                      ? (0, l.jsx)(f.X6q, {
                            className: S.clipTitle,
                            color: "text-muted",
                            variant: "heading-lg/medium",
                            children: E.intl.string(E.t["x+/nmJ"]),
                        })
                      : (0, l.jsx)(f.X6q, {
                            className: S.clipTitle,
                            color: "text-default",
                            variant: "heading-lg/medium",
                            children: n.name,
                        }),
                  a &&
                      (0, l.jsx)(f.vdY, {
                          size: "custom",
                          "aria-label": E.intl.string(E.t.bt75u7),
                          color: f.TVs.colors.TEXT_MUTED,
                          height: p.Z.sm,
                          width: p.Z.sm,
                          className: S.clipTitleIcon,
                      }),
              ],
          });
}
function L(e) {
    let { clip: t, videoRef: n } = e,
        r = (0, w.l)(t);
    return 0 === t.length
        ? (0, l.jsx)(f.$jN, {
              type: f.RAz.SPINNING_CIRCLE_SIMPLE,
              className: S.clipThumb,
          })
        : null != r
          ? (0, l.jsx)(h.Z, {
                preload: "metadata",
                muted: !0,
                poster: t.thumbnail,
                src: r,
                loop: !0,
                className: S.clipThumb,
                ref: n,
            })
          : (0, l.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: S.clipThumb,
            });
}
function M(e) {
    let {
            clip: t,
            exporting: n,
            actionsDisabled: a,
            onBeforeDelete: i,
            onDelete: o,
            onEdit: c,
            onShare: u,
            onBlur: d,
        } = e,
        p = (0, s.Z)(),
        b = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.shiftKey ? (i(), (0, P.sS)(t.filepath)) : o(t, i),
                    O.default.track(N.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
            },
            [o, i, t],
        ),
        g = r.useCallback(
            (e) => {
                e.stopPropagation(), c(t), O.default.track(N.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [c, t],
        ),
        h = r.useCallback(
            (e) => {
                e.stopPropagation(), u(t), O.default.track(N.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
            },
            [u, t],
        );
    return (0, l.jsxs)("div", {
        className: S.buttonContainer,
        children: [
            null != o &&
                (0, l.jsx)(f.ua7, {
                    text: E.intl.string(E.t.oyYWHB),
                    children: (e) =>
                        (0, l.jsx)(
                            m.zx,
                            T(I({}, e), {
                                disabled: a,
                                color: p ? m.zx.Colors.RED : m.zx.Colors.PRIMARY,
                                onClick: b,
                                className: S.button,
                                size: m.zx.Sizes.NONE,
                                look: m.zx.Looks.FILLED,
                                children: (0, l.jsx)(f.XHJ, {
                                    size: "md",
                                    color: "currentColor",
                                    className: S.miniIcon,
                                }),
                            }),
                        ),
                }),
            (0, l.jsx)(f.ua7, {
                text: E.intl.string(E.t.bt75u7),
                children: (e) =>
                    (0, l.jsx)(
                        m.zx,
                        T(I({}, e), {
                            disabled: a,
                            color: m.zx.Colors.PRIMARY,
                            onClick: g,
                            className: S.button,
                            size: m.zx.Sizes.NONE,
                            look: m.zx.Looks.FILLED,
                            children: (0, l.jsx)(v.Z, { className: S.miniIcon }),
                        }),
                    ),
            }),
            (0, l.jsx)(f.ua7, {
                text: E.intl.string(E.t.RDE0SU),
                children: (e) => {
                    var { onBlur: t } = e,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                l,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        l,
                                        r = {},
                                        a = Object.keys(e);
                                    for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (l = 0; l < a.length; l++)
                                    (n = a[l]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (r[n] = e[n]);
                            }
                            return r;
                        })(e, ["onBlur"]);
                    return (0, l.jsx)(
                        m.zx,
                        T(I({}, r), {
                            disabled: a && !n,
                            submitting: n,
                            color: m.zx.Colors.BRAND,
                            onBlur: (e) => {
                                d(e), null == t || t();
                            },
                            onClick: h,
                            className: S.button,
                            size: m.zx.Sizes.NONE,
                            look: m.zx.Looks.FILLED,
                            children: (0, l.jsx)(f.aAc, {
                                size: "lg",
                                color: "currentColor",
                                className: S.miniIcon,
                            }),
                        }),
                    );
                },
            }),
        ],
    });
}
