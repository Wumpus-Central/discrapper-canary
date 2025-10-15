n.d(t, { Z: () => k }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(607070),
    d = n(299206),
    f = n(868643),
    p = n(912332),
    m = n(296182),
    y = n(850908),
    O = n(695346),
    b = n(572004),
    E = n(424218),
    g = n(49012),
    h = n(358085),
    S = n(998502),
    _ = n(254109),
    v = n(212459),
    T = n(369171),
    j = n(312097),
    C = n(388032),
    D = n(152514);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function P() {
    (0, c.Mr3)(j.Q);
}
let L = r.forwardRef(function (e, t) {
    var { tooltipText: n } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["tooltipText"]);
    return (0, i.jsx)(s.u, {
        text: n,
        position: "bottom",
        children: (0, i.jsx)(
            c.hU,
            x(
                {
                    buttonRef: t,
                    variant: "icon-only",
                    "aria-label": n,
                    size: "sm",
                },
                r,
            ),
        ),
    });
});
function R() {
    let { zoomed: e, setZoomed: t } = (0, v.Y)();
    return (0, i.jsx)(L, {
        onClick: () => {
            (0, _.yg)(e ? _.uG.ZOOM_OUT_BUTTON_PRESSED : _.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? C.intl.string(C.t.vOFof3) : C.intl.string(C.t.Kt4gZ2),
        icon: e ? c.BlJ : c.OyE,
    });
}
function M(e) {
    var t, n;
    let { item: l } = e,
        a = null == (t = l.sourceMetadata) ? void 0 : t.message,
        o = null == (n = l.sourceMetadata) ? void 0 : n.identifier,
        s = r.useCallback(() => {
            if (null != a && null != o) {
                if (((0, _.yg)(_.uG.FORWARD_PRESSED), "embed" === o.type))
                    return void (0, p.l8)({
                        message: a,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                        onRequestSent: P,
                    });
                (0, p.l8)({
                    message: a,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
                    onRequestSent: P,
                });
            }
        }, [a, o]);
    return null != a && null != o && (0, f.h)(a)
        ? (0, i.jsx)(L, {
              onClick: s,
              tooltipText: C.intl.string(C.t.I3ltXF),
              icon: c.WZu,
          })
        : null;
}
function I(e) {
    let { item: t } = e,
        [n, l] = r.useState(!1),
        a = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        s = null != t.children,
        u = (0, m.gS)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(a || (h.isPlatformEmbedded && !s && o && u))) return null;
    let d = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType, m.wV);
    async function f() {
        if (((0, _.yg)(_.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, g.q)({ href: d }), "IMAGE" === t.type)) {
            l(!0);
            try {
                let e = await S.ZP.saveImage(d, t.contentType, m.wV);
                if (e === S.mQ.ERRORED) throw Error("DesktopNativeUtils.saveImage errored for ".concat(d));
                e === S.mQ.SAVED &&
                    ((0, _.rm)(d, !0),
                    (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.cqpdJS), c.ToastType.SUCCESS)));
            } catch (e) {
                (0, _.rm)(d, !1),
                    (0, c.showToast)((0, c.createToast)(C.intl.string(C.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, i.jsx)(L, {
        onClick: f,
        tooltipText: C.intl.string("VIDEO" === t.type ? C.t.JVuuz8 : C.t["S/xNKS"]),
        loading: n,
        icon: c._8t,
    });
}
function w(e) {
    let { item: t } = e;
    if (!(0, m.Jj)(t.url)) return null;
    let n = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(L, {
        onClick: () => {
            (0, _.yg)(_.uG.OPEN_LINK_PRESSED), (0, _.jc)(n), (0, g.q)({ href: n });
        },
        tooltipText: C.intl.string(C.t.q5jLJC),
        icon: c.rgF,
    });
}
function N(e) {
    var t, n;
    let { item: r, canCopyImage: l, canCopyLink: a, onClose: o, onSelect: s } = e,
        u =
            (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? r.sourceMetadata.identifier.attachmentId
                : null,
        f = (0, d.Z)({
            id: u,
            label: C.intl.string(C.t.nwg3lZ),
        }),
        p = (function (e) {
            var t;
            let { alt: n, sourceMetadata: r, width: l, height: a } = e,
                o = A(C.intl.string(C.t.ILJuBg), "name", { subtextLineClamp: 1 }),
                s = A(C.intl.string(C.t["3Nf9u7"]), "size"),
                u = A(C.intl.string(C.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if ((null == r || null == (t = r.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, y.Z)(r.identifier),
                f = (0, E.BU)(r.identifier.size / 1000);
            return (0, i.jsxs)(
                c.sNh,
                {
                    id: "media-viewer-details",
                    label: C.intl.string(C.t.sqBLa2),
                    children: [
                        o(d),
                        s(
                            C.intl.formatToPlainString(C.t.DTdonJ, {
                                width: l,
                                height: a,
                                fileSize: f,
                            }),
                        ),
                        u(n),
                    ],
                },
                "media-viewer-details",
            );
        })(r);
    async function O() {
        (0, _.yg)(_.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)((0, m.lT)(r.original, r.url), r.contentType, r.originalContentType, m.wV);
        try {
            var t;
            await S.ZP.copyImage(e, null != (t = r.originalContentType) ? t : r.contentType),
                (0, _.gR)(e, !0),
                (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.bhUpvL), c.ToastType.SUCCESS));
        } catch (t) {
            (0, _.gR)(e, !1), (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.PTPbj4), c.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(c.v2r, {
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: o,
        onSelect: s,
        children: [
            (0, i.jsxs)(c.kSQ, {
                children: [
                    l &&
                        (0, i.jsx)(
                            c.sNh,
                            {
                                label: C.intl.string(C.t.tvUqWl),
                                id: "media-viewer-copy-image",
                                icon: c.TIy,
                                action: O,
                            },
                            "media-viewer-copy-image",
                        ),
                    a &&
                        (0, i.jsx)(
                            c.sNh,
                            {
                                id: "media-viewer-copy-link",
                                label: C.intl.string(C.t.WqhZsr),
                                icon: c.xPt,
                                action: function () {
                                    (0, _.yg)(_.uG.COPY_LINK_PRESSED);
                                    let e = (0, m.s$)(
                                        (0, m.lT)(r.original, r.url),
                                        r.contentType,
                                        r.originalContentType,
                                    );
                                    (0, b.JG)(
                                        e,
                                        () => {
                                            (0, _.mL)(e, !0),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(
                                                        C.intl.string(C.t["L/PwZW"]),
                                                        c.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            (0, _.mL)(e, !1),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(C.intl.string(C.t.uVV00N), c.ToastType.FAILURE),
                                                );
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            }),
            p,
            f,
        ],
    });
}
function A(e, t, n) {
    let l = r.useCallback((e) => {
        (0, b.JG)(e, () =>
            (0, c.showToast)({
                message: C.intl.string(C.t.mGZ66O),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (r) =>
        null != r
            ? (0, i.jsx)(
                  c.sNh,
                  x(
                      {
                          action: () => l(r),
                          label: e,
                          subtext: r,
                          id: t,
                      },
                      n,
                  ),
                  t,
              )
            : null;
}
function Z(e) {
    var t, n;
    let { item: l } = e,
        a = r.useRef(null),
        [o, s] = r.useState(!1),
        u = O.Sb.useSetting(),
        d = "IMAGE" === l.type,
        f = null == l.children,
        p = !l.animated,
        y = (0, m.Lz)(l.url, l.contentType, l.originalContentType),
        b = d && f && p && y,
        E = (0, m.Jj)(l.url);
    return u ||
        b ||
        E ||
        (null == (n = l.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, i.jsx)(c.yRy, {
              targetElementRef: a,
              shouldShow: o,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(N, {
                      item: l,
                      canCopyImage: b,
                      canCopyLink: E,
                      onClose: () => s(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(L, {
                      ref: a,
                      tooltipText: C.intl.string(C.t.UKOtz8),
                      onClick: () => {
                          (0, _.yg)(_.uG.MORE_BUTTON_PRESSED), s(!o);
                      },
                      icon: c.xhG,
                  });
              },
          })
        : null;
}
let k = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        l = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        s = r.useRef(null),
        c = r.useCallback(() => {
            var e;
            !l &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [l]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(T.ZP, {
            mode: T.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: s,
                    className: a()(D.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(R, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(M, { item: t }),
                                    (0, i.jsx)(I, { item: t }),
                                    (0, i.jsx)(w, { item: t }),
                                    (0, i.jsx)(Z, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
