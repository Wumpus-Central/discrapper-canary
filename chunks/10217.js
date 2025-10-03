n.d(t, { Z: () => S }), n(388685);
var l = n(951288),
    a = n(647438),
    r = n(120356),
    i = n.n(r),
    o = n(913527),
    s = n.n(o),
    c = n(893999),
    u = n(442837),
    d = n(846519),
    p = n(212605),
    m = n(28664),
    f = n(755721),
    g = n(481060),
    b = n(100527),
    h = n(906732),
    x = n(70097),
    j = n(237617),
    y = n(318374),
    _ = n(594174),
    v = n(962399),
    C = n(626135),
    O = n(823379),
    P = n(709054),
    w = n(39604),
    N = n(572720),
    T = n(981631),
    E = n(388032),
    I = n(134351);
let S = function (e) {
    var t, n, r;
    let { clip: o, exporting: s, actionsDisabled: c, isNew: p, onDelete: m, onEdit: f, onShare: x } = e,
        v = (0, u.Wu)([_.default], () => o.users.map((e) => _.default.getUser(e)).filter(O.lm)),
        { analyticsLocations: w } = (0, h.ZP)(b.Z.CLIPS_GALLERY_ITEM),
        [N, S] = a.useState(!1),
        D = a.useRef(null),
        M = (0, j.Z)(null != (r = null == (t = o.editMetadata) ? void 0 : t.start) ? r : 0),
        R = a.useRef(
            new d.sW(500, () => {
                var e;
                let t = D.current;
                null != t && t.paused && ((t.currentTime = M.current), null == (e = D.current) || e.play());
            }),
        ),
        A = a.useCallback(() => {
            let e = D.current;
            null != e && (e.pause(), (e.src = ""));
        }, []),
        H = a.useCallback(() => {
            var e;
            S(!0), null == (e = R.current) || e.delay();
        }, []),
        z = a.useCallback(() => {
            var e, t, n;
            S(!1);
            let l = D.current;
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
    return (0, l.jsx)(h.Gt, {
        value: w,
        children: (0, l.jsxs)(g.kL8, {
            "aria-disabled": c,
            "aria-label": E.intl.string(E.t.bt75u7),
            onClick: c
                ? void 0
                : () => {
                      f(o), C.default.track(T.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: i()(I.clipItem, { [I.disabled]: c }),
            onBlur: B,
            onFocus: H,
            onMouseOver: H,
            onMouseLeave: z,
            children: [
                (0, l.jsx)(k, {
                    clip: o,
                    isNew: p,
                    videoRef: D,
                }),
                (0, l.jsxs)("div", {
                    className: I.clipFooter,
                    children: [
                        (0, l.jsx)(Z, {
                            clip: o,
                            focused: N,
                            onFocus: H,
                        }),
                        (0, l.jsx)(g.Text, {
                            className: I.clipMetadata,
                            color: "text-default",
                            variant: "text-md/medium",
                            children: o.applicationName,
                        }),
                        (0, l.jsx)(g.Text, {
                            className: I.clipMetadata,
                            color: "text-default",
                            variant: "text-md/medium",
                            children: K,
                        }),
                        (0, l.jsxs)("div", {
                            className: I.usersAndDelete,
                            children: [
                                (0, l.jsx)(y.Z, {
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
                                            H();
                                    },
                                    "aria-label": E.intl.string(E.t.WTozwc),
                                }),
                                N &&
                                    (0, l.jsx)(L, {
                                        clip: o,
                                        actionsDisabled: c,
                                        exporting: s,
                                        onBeforeDelete: A,
                                        onDelete: m,
                                        onEdit: f,
                                        onShare: x,
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
            (0, l.jsx)(D, {
                clip: t,
                videoRef: r,
            }),
            (0, l.jsxs)("div", {
                className: I.clipBadges,
                children: [
                    i &&
                        (0, l.jsx)("div", {
                            className: I.clipProcessingBadge,
                            children: (0, l.jsx)(g.Text, {
                                variant: "text-md/medium",
                                color: "always-white",
                                children: E.intl.string(E.t["2Fp7OD"]),
                            }),
                        }),
                    !i &&
                        n &&
                        (0, l.jsxs)(g.Text, {
                            className: I.clipNewBadge,
                            variant: "eyebrow",
                            color: "always-white",
                            children: [
                                (0, l.jsx)(g.T$Z, {
                                    size: "md",
                                    color: "currentColor",
                                    className: I.newIcon,
                                }),
                                E.intl.string(E.t.y2b7CA).toUpperCase(),
                            ],
                        }),
                    !i &&
                        (0, l.jsxs)("div", {
                            className: I.clipDurationBadge,
                            children: [
                                o ? (0, l.jsx)(v.Z, { className: I.clipDurationEditIcon }) : null,
                                (0, l.jsx)(g.Text, {
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
        [m, f] = a.useState(null != (t = n.name) ? t : ""),
        [b, h] = a.useState(!1),
        x = async () => {
            h(!0), await (0, w.Tm)(n.id, { name: "" === m ? void 0 : m }), h(!1), d(!1);
        };
    return (a.useEffect(() => {
        if (o !== n.name) {
            var e;
            s(n.name), f(null != (e = n.name) ? e : "");
        }
    }, [n.name, o]),
    u)
        ? (0, l.jsx)(g.oil, {
              onClick: (e) => e.stopPropagation(),
              value: m,
              autoFocus: !0,
              onKeyDown: (e) => {
                  "Enter" === e.key && x();
              },
              disabled: b,
              onChange: f,
              onBlur: x,
          })
        : (0, l.jsxs)(g.P3F, {
              className: I.clipTitleInputPlaceholder,
              onFocus: i,
              onClick: (e) => {
                  e.stopPropagation(), d(!0);
              },
              children: [
                  c
                      ? (0, l.jsx)(g.X6q, {
                            className: I.clipTitle,
                            color: "text-muted",
                            variant: "heading-lg/medium",
                            children: E.intl.string(E.t["x+/nmJ"]),
                        })
                      : (0, l.jsx)(g.X6q, {
                            className: I.clipTitle,
                            color: "text-default",
                            variant: "heading-lg/medium",
                            children: n.name,
                        }),
                  r &&
                      (0, l.jsx)(g.vdY, {
                          size: "custom",
                          "aria-label": E.intl.string(E.t.bt75u7),
                          color: g.TVs.colors.TEXT_MUTED,
                          height: p.Z.sm,
                          width: p.Z.sm,
                          className: I.clipTitleIcon,
                      }),
              ],
          });
}
function D(e) {
    let { clip: t, videoRef: n } = e,
        a = (0, N.l)(t);
    return 0 === t.length
        ? (0, l.jsx)(g.$jN, {
              type: g.RAz.SPINNING_CIRCLE_SIMPLE,
              className: I.clipThumb,
          })
        : null != a
          ? (0, l.jsx)(x.Z, {
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
function L(e) {
    let {
            clip: t,
            exporting: n,
            actionsDisabled: r,
            onBeforeDelete: i,
            onDelete: o,
            onEdit: s,
            onShare: u,
            onBlur: d,
        } = e,
        p = (0, c.Z)(),
        b = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    e.shiftKey ? (i(), (0, w.sS)(t.filepath)) : o(t, i),
                    C.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "delete" });
            },
            [o, i, t],
        ),
        h = a.useCallback(
            (e) => {
                e.stopPropagation(), s(t), C.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [s, t],
        ),
        x = a.useCallback(
            (e) => {
                e.stopPropagation(), u(t), C.default.track(T.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "share" });
            },
            [u, t],
        );
    return (0, l.jsxs)("div", {
        className: I.buttonContainer,
        children: [
            null != o &&
                (0, l.jsx)(m.u, {
                    text: E.intl.string(E.t.oyYWHB),
                    children: (0, l.jsx)(f.zx, {
                        disabled: r,
                        color: p ? f.zx.Colors.RED : f.zx.Colors.PRIMARY,
                        onClick: b,
                        className: I.button,
                        size: f.zx.Sizes.NONE,
                        look: f.zx.Looks.FILLED,
                        children: (0, l.jsx)(g.XHJ, {
                            size: "md",
                            color: "currentColor",
                            className: I.miniIcon,
                        }),
                    }),
                }),
            (0, l.jsx)(m.u, {
                text: E.intl.string(E.t.bt75u7),
                children: (0, l.jsx)(f.zx, {
                    disabled: r,
                    color: f.zx.Colors.PRIMARY,
                    onClick: h,
                    className: I.button,
                    size: f.zx.Sizes.NONE,
                    look: f.zx.Looks.FILLED,
                    children: (0, l.jsx)(v.Z, { className: I.miniIcon }),
                }),
            }),
            (0, l.jsx)(m.u, {
                text: E.intl.string(E.t.RDE0SU),
                children: (0, l.jsx)(f.zx, {
                    disabled: r && !n,
                    submitting: n,
                    color: f.zx.Colors.BRAND,
                    onBlur: (e) => {
                        d(e);
                    },
                    onClick: x,
                    className: I.button,
                    size: f.zx.Sizes.NONE,
                    look: f.zx.Looks.FILLED,
                    children: (0, l.jsx)(g.aAc, {
                        size: "lg",
                        color: "currentColor",
                        className: I.miniIcon,
                    }),
                }),
            }),
        ],
    });
}
