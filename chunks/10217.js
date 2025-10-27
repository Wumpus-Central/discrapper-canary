n.d(t, { Z: () => S }), n(388685);
var l = n(951288),
    a = n(647438),
    r = n(120356),
    i = n.n(r),
    o = n(913527),
    s = n.n(o),
    c = n(872175),
    u = n(893999),
    d = n(442837),
    p = n(846519),
    m = n(212605),
    f = n(36563),
    g = n(28664),
    b = n(755721),
    h = n(481060),
    x = n(100527),
    j = n(906732),
    y = n(70097),
    _ = n(594174),
    v = n(962399),
    C = n(626135),
    O = n(823379),
    P = n(709054),
    w = n(39604),
    N = n(572720),
    E = n(981631),
    T = n(388032),
    I = n(134351);
let S = function (e) {
    var t, n, r;
    let { clip: o, exporting: s, actionsDisabled: u, isNew: m, onDelete: g, onEdit: b, onShare: y } = e,
        v = (0, d.Wu)([_.default], () => o.users.map((e) => _.default.getUser(e)).filter(O.lm)),
        { analyticsLocations: w } = (0, j.ZP)(x.Z.CLIPS_GALLERY_ITEM),
        [N, S] = a.useState(!1),
        L = a.useRef(null),
        M = (0, c.Z)(null != (r = null == (t = o.editMetadata) ? void 0 : t.start) ? r : 0),
        R = a.useRef(
            new p.sW(500, () => {
                var e;
                let t = L.current;
                null != t && t.paused && ((t.currentTime = M.current), null == (e = L.current) || e.play());
            }),
        ),
        H = a.useCallback(() => {
            let e = L.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        A = a.useCallback(() => {
            var e;
            S(!0), null == (e = R.current) || e.delay();
        }, []),
        z = a.useCallback(() => {
            var e, t, n;
            S(!1);
            let l = L.current;
            null == (e = R.current) || e.cancel(),
                null != l &&
                    (l.pause(),
                    (l.currentTime = null != (n = null == (t = o.editMetadata) ? void 0 : t.start) ? n : 0));
        }, [null == (n = o.editMetadata) ? void 0 : n.start]),
        B = a.useCallback(
            (e) => {
                var t, n;
                (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? void 0 : t.parentElement) !==
                    e.currentTarget.parentElement && z();
            },
            [z],
        ),
        V = new Date(P.default.extractTimestamp(o.id)),
        F = V.toLocaleDateString(),
        G = V.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),
        K = "".concat(F, " \u2022 ").concat(G);
    return (0, l.jsx)(j.Gt, {
        value: w,
        children: (0, l.jsxs)(h.kL8, {
            "aria-disabled": u,
            "aria-label": T.intl.string(T.t.bt75uw),
            onClick: u
                ? void 0
                : () => {
                      b(o), C.default.track(E.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: i()(I.clipItem, { [I.disabled]: u }),
            onBlur: B,
            onFocus: A,
            onMouseOver: A,
            onMouseLeave: z,
            children: [
                (0, l.jsx)(k, {
                    clip: o,
                    isNew: m,
                    videoRef: L,
                }),
                (0, l.jsxs)("div", {
                    className: I.clipFooter,
                    children: [
                        (0, l.jsx)(Z, {
                            clip: o,
                            focused: N,
                            onFocus: A,
                        }),
                        (0, l.jsx)(h.Text, {
                            className: I.clipMetadata,
                            color: "text-default",
                            variant: "text-md/medium",
                            children: o.applicationName,
                        }),
                        (0, l.jsx)(h.Text, {
                            className: I.clipMetadata,
                            color: "text-default",
                            variant: "text-md/medium",
                            children: K,
                        }),
                        (0, l.jsxs)("div", {
                            className: I.usersAndDelete,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    maxUsers: 4,
                                    users: v,
                                    onFocusOverflow: (e) => {
                                        var t, n, l, a;
                                        let r = e.relatedTarget,
                                            i =
                                                null == (n = e.currentTarget.parentElement) ||
                                                null == (t = n.parentElement)
                                                    ? void 0
                                                    : t.parentElement;
                                        (null == r ? void 0 : r.parentElement) !== i &&
                                            (null == r || null == (a = r.parentElement) || null == (l = a.parentElement)
                                                ? void 0
                                                : l.parentElement) !== i &&
                                            A();
                                    },
                                    "aria-label": T.intl.string(T.t.WTozwe),
                                }),
                                N &&
                                    (0, l.jsx)(D, {
                                        clip: o,
                                        actionsDisabled: u,
                                        exporting: s,
                                        onBeforeDelete: H,
                                        onDelete: g,
                                        onEdit: b,
                                        onShare: y,
                                        onBlur: (e) => {
                                            var t;
                                            (null == (t = e.relatedTarget) ? void 0 : t.parentElement) !==
                                                e.currentTarget.parentElement && z();
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
function k(e) {
    let { clip: t, isNew: n, videoRef: r } = e,
        i = 0 === t.length,
        [o, c] = a.useMemo(() => {
            let e = t.length,
                n = !1,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return null != l && 1000 * l < t.length && ((e = 1000 * l), (n = !0)), [n, s().duration(e)];
        }, [t.length, t.editMetadata]),
        u = "".concat(c.seconds()).padStart(2, "0");
    return (0, l.jsxs)("div", {
        className: I.clipThumbContainer,
        children: [
            (0, l.jsx)(L, {
                clip: t,
                videoRef: r,
            }),
            (0, l.jsxs)("div", {
                className: I.clipBadges,
                children: [
                    i &&
                        (0, l.jsx)("div", {
                            className: I.clipProcessingBadge,
                            children: (0, l.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: T.intl.string(T.t["2Fp7OP"]),
                            }),
                        }),
                    !i &&
                        n &&
                        (0, l.jsxs)(h.Text, {
                            className: I.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [
                                (0, l.jsx)(h.T$Z, {
                                    size: "md",
                                    color: "currentColor",
                                    className: I.newIcon,
                                }),
                                T.intl.string(T.t.y2b7CA).toUpperCase(),
                            ],
                        }),
                    !i &&
                        (0, l.jsxs)("div", {
                            className: I.clipDurationBadge,
                            children: [
                                o ? (0, l.jsx)(v.Z, { className: I.clipDurationEditIcon }) : null,
                                (0, l.jsx)(h.Text, {
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    children: "".concat(c.minutes(), ":").concat(u),
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
    let { clip: n, focused: r, onFocus: i } = e,
        [o, s] = a.useState(n.name),
        c = !n.name,
        [u, d] = a.useState(!1),
        [p, f] = a.useState(null != (t = n.name) ? t : ""),
        [g, b] = a.useState(!1),
        x = async () => {
            b(!0), await (0, w.Tm)(n.id, { name: "" === p ? void 0 : p }), b(!1), d(!1);
        };
    return (a.useEffect(() => {
        if (o !== n.name) {
            var e;
            s(n.name), f(null != (e = n.name) ? e : "");
        }
    }, [n.name, o]),
    u)
        ? (0, l.jsx)(h.oil, {
              onClick: (e) => e.stopPropagation(),
              value: p,
              autoFocus: !0,
              onKeyDown: (e) => {
                  "Enter" === e.key && x();
              },
              disabled: g,
              onChange: f,
              onBlur: x,
          })
        : (0, l.jsxs)(h.P3F, {
              className: I.clipTitleInputPlaceholder,
              onFocus: i,
              onClick: (e) => {
                  e.stopPropagation(), d(!0);
              },
              children: [
                  c
                      ? (0, l.jsx)(h.Heading, {
                            className: I.clipTitle,
                            color: "text-muted",
                            variant: "heading-lg/medium",
                            children: T.intl.string(T.t["x+/nmN"]),
                        })
                      : (0, l.jsx)(h.Heading, {
                            className: I.clipTitle,
                            color: "text-default",
                            variant: "heading-lg/medium",
                            children: n.name,
                        }),
                  r &&
                      (0, l.jsx)(h.vdY, {
                          size: "custom",
                          "aria-label": T.intl.string(T.t.bt75uw),
                          color: h.TVs.colors.TEXT_MUTED,
                          height: m.Z.sm,
                          width: m.Z.sm,
                          className: I.clipTitleIcon,
                      }),
              ],
          });
}
function L(e) {
    let { clip: t, videoRef: n } = e,
        a = (0, N.l)(t);
    return 0 === t.length
        ? (0, l.jsx)(h.$jN, {
              type: h.RAz.SPINNING_CIRCLE_SIMPLE,
              className: I.clipThumb,
          })
        : null != a
          ? (0, l.jsx)(y.Z, {
                preload: "metadata",
                muted: !0,
                poster: t.thumbnail,
                src: a,
                loop: !0,
                className: I.clipThumb,
                ref: n,
            })
          : (0, l.jsx)("img", {
                alt: "",
                src: t.thumbnail,
                className: I.clipThumb,
            });
}
function D(e) {
    let {
            clip: t,
            exporting: n,
            actionsDisabled: r,
            onBeforeDelete: i,
            onDelete: o,
            onEdit: s,
            onShare: c,
            onBlur: d,
        } = e,
        p = (0, u.Z)(),
        m = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.shiftKey ? (i(), (0, w.sS)(t.filepath)) : o(t, i),
                    C.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
            },
            [o, i, t],
        ),
        f = a.useCallback(
            (e) => {
                e.stopPropagation(), s(t), C.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [s, t],
        ),
        x = a.useCallback(
            (e) => {
                e.stopPropagation(), c(t), C.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
            },
            [c, t],
        );
    return (0, l.jsxs)("div", {
        className: I.buttonContainer,
        children: [
            null != o &&
                (0, l.jsx)(g.u, {
                    text: T.intl.string(T.t.oyYWHE),
                    children: (0, l.jsx)(b.zx, {
                        disabled: r,
                        color: p ? b.zx.Colors.RED : b.zx.Colors.PRIMARY,
                        onClick: m,
                        className: I.button,
                        size: b.zx.Sizes.NONE,
                        look: b.zx.Looks.FILLED,
                        children: (0, l.jsx)(h.XHJ, {
                            size: "md",
                            color: "currentColor",
                            className: I.miniIcon,
                        }),
                    }),
                }),
            (0, l.jsx)(g.u, {
                text: T.intl.string(T.t.bt75uw),
                children: (0, l.jsx)(b.zx, {
                    disabled: r,
                    color: b.zx.Colors.PRIMARY,
                    onClick: f,
                    className: I.button,
                    size: b.zx.Sizes.NONE,
                    look: b.zx.Looks.FILLED,
                    children: (0, l.jsx)(v.Z, { className: I.miniIcon }),
                }),
            }),
            (0, l.jsx)(g.u, {
                text: T.intl.string(T.t.RDE0Sc),
                children: (0, l.jsx)(b.zx, {
                    disabled: r && !n,
                    submitting: n,
                    color: b.zx.Colors.BRAND,
                    onBlur: (e) => {
                        d(e);
                    },
                    onClick: x,
                    className: I.button,
                    size: b.zx.Sizes.NONE,
                    look: b.zx.Looks.FILLED,
                    children: (0, l.jsx)(h.aAc, {
                        size: "lg",
                        color: "currentColor",
                        className: I.miniIcon,
                    }),
                }),
            }),
        ],
    });
}
