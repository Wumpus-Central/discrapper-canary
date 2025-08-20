n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(299206),
    d = n(868643),
    p = n(912332),
    f = n(296182),
    y = n(850908),
    m = n(695346),
    O = n(572004),
    b = n(424218),
    g = n(49012),
    E = n(358085),
    h = n(998502),
    S = n(254109),
    _ = n(212459),
    v = n(369171),
    T = n(312097),
    j = n(388032),
    C = n(152514);
function P() {
    return (P =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x() {
    (0, s.Mr3)(T.Q);
}
let L = i.forwardRef(function (e, t) {
    var { tooltipText: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["tooltipText"]);
    return (0, r.jsx)(s.ua7, {
        text: n,
        position: "bottom",
        children: (e) => {
            var l,
                o,
                a = P(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e;
                    })(e),
                );
            return (0, r.jsx)(
                s.hU,
                D(
                    ((l = D({}, a)),
                    (o = o =
                        {
                            buttonRef: t,
                            variant: "icon-only",
                            "aria-label": n,
                            size: "sm",
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    l),
                    i,
                ),
            );
        },
    });
});
function w() {
    let { zoomed: e, setZoomed: t } = (0, _.Y)();
    return (0, r.jsx)(L, {
        onClick: () => {
            (0, S.yg)(e ? S.uG.ZOOM_OUT_BUTTON_PRESSED : S.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? j.intl.string(j.t.vOFof3) : j.intl.string(j.t.Kt4gZ2),
        icon: e ? s.BlJ : s.OyE,
    });
}
function R(e) {
    var t, n;
    let { item: l } = e,
        o = null == (t = l.sourceMetadata) ? void 0 : t.message,
        a = null == (n = l.sourceMetadata) ? void 0 : n.identifier,
        c = i.useCallback(() => {
            if (null != o && null != a) {
                if (((0, S.yg)(S.uG.FORWARD_PRESSED), "embed" === a.type))
                    return void (0, p.l8)({
                        message: o,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [a.embedIndex] },
                        onRequestSent: x,
                    });
                (0, p.l8)({
                    message: o,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [a.attachmentId] },
                    onRequestSent: x,
                });
            }
        }, [o, a]);
    return null != o && null != a && (0, d.h)(o)
        ? (0, r.jsx)(L, {
              onClick: c,
              tooltipText: j.intl.string(j.t.I3ltXF),
              icon: s.WZu,
          })
        : null;
}
function M(e) {
    let { item: t } = e,
        [n, l] = i.useState(!1),
        o = "VIDEO" === t.type,
        a = "IMAGE" === t.type,
        c = null != t.children,
        u = (0, f.gS)((0, f.lT)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(o || (E.isPlatformEmbedded && !c && a && u))) return null;
    let d = (0, f.s$)((0, f.lT)(t.original, t.url), t.contentType, t.originalContentType, f.wV);
    async function p() {
        if (((0, S.yg)(S.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, g.q)({ href: d }), "IMAGE" === t.type)) {
            l(!0);
            try {
                await h.ZP.saveImage(d, t.contentType, f.wV),
                    (0, S.rm)(d, !0),
                    (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.cqpdJS), s.ToastType.SUCCESS));
            } catch (e) {
                (0, S.rm)(d, !1),
                    (0, s.showToast)((0, s.createToast)(j.intl.string(j.t["8Ve/S0"]), s.ToastType.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, r.jsx)(L, {
        onClick: p,
        tooltipText: j.intl.string("VIDEO" === t.type ? j.t.JVuuz8 : j.t["S/xNKS"]),
        loading: n,
        icon: s._8t,
    });
}
function I(e) {
    let { item: t } = e;
    if (!(0, f.Jj)(t.url)) return null;
    let n = (0, f.s$)((0, f.lT)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, r.jsx)(L, {
        onClick: () => {
            (0, S.yg)(S.uG.OPEN_LINK_PRESSED), (0, S.jc)(n), (0, g.q)({ href: n });
        },
        tooltipText: j.intl.string(j.t.q5jLJC),
        icon: s.rgF,
    });
}
function N(e) {
    var t, n;
    let { item: i, canCopyImage: l, canCopyLink: o, onClose: a, onSelect: c } = e,
        d =
            (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? i.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, u.Z)({
            id: d,
            label: j.intl.string(j.t.nwg3lZ),
        }),
        m = (function (e) {
            var t;
            let { alt: n, sourceMetadata: i, width: l, height: o } = e,
                a = A(j.intl.string(j.t.ILJuBg), "name", { subtextLineClamp: 1 }),
                c = A(j.intl.string(j.t["3Nf9u7"]), "size"),
                u = A(j.intl.string(j.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if ((null == i || null == (t = i.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, y.Z)(i.identifier),
                p = (0, b.BU)(i.identifier.size / 1000);
            return (0, r.jsxs)(
                s.sNh,
                {
                    id: "media-viewer-details",
                    label: j.intl.string(j.t.sqBLa2),
                    children: [
                        a(d),
                        c(
                            j.intl.formatToPlainString(j.t.DTdonJ, {
                                width: l,
                                height: o,
                                fileSize: p,
                            }),
                        ),
                        u(n),
                    ],
                },
                "media-viewer-details",
            );
        })(i);
    async function g() {
        (0, S.yg)(S.uG.COPY_IMAGE_PRESSED);
        let e = (0, f.s$)((0, f.lT)(i.original, i.url), i.contentType, i.originalContentType, f.wV);
        try {
            var t;
            await h.ZP.copyImage(e, null != (t = i.originalContentType) ? t : i.contentType),
                (0, S.gR)(e, !0),
                (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.bhUpvL), s.ToastType.SUCCESS));
        } catch (t) {
            (0, S.gR)(e, !1), (0, s.showToast)((0, s.createToast)(j.intl.string(j.t.PTPbj4), s.ToastType.FAILURE));
        }
    }
    return (0, r.jsxs)(s.v2r, {
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: a,
        onSelect: c,
        children: [
            (0, r.jsxs)(s.kSQ, {
                children: [
                    l &&
                        (0, r.jsx)(
                            s.sNh,
                            {
                                label: j.intl.string(j.t.tvUqWl),
                                id: "media-viewer-copy-image",
                                icon: s.TIy,
                                action: g,
                            },
                            "media-viewer-copy-image",
                        ),
                    o &&
                        (0, r.jsx)(
                            s.sNh,
                            {
                                id: "media-viewer-copy-link",
                                label: j.intl.string(j.t.WqhZsr),
                                icon: s.xPt,
                                action: function () {
                                    (0, S.yg)(S.uG.COPY_LINK_PRESSED);
                                    let e = (0, f.s$)(
                                        (0, f.lT)(i.original, i.url),
                                        i.contentType,
                                        i.originalContentType,
                                    );
                                    (0, O.JG)(
                                        e,
                                        () => {
                                            (0, S.mL)(e, !0),
                                                (0, s.showToast)(
                                                    (0, s.createToast)(
                                                        j.intl.string(j.t["L/PwZW"]),
                                                        s.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            (0, S.mL)(e, !1),
                                                (0, s.showToast)(
                                                    (0, s.createToast)(j.intl.string(j.t.uVV00N), s.ToastType.FAILURE),
                                                );
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            }),
            m,
            p,
        ],
    });
}
function A(e, t, n) {
    let l = i.useCallback((e) => {
        (0, O.JG)(e, () =>
            (0, s.showToast)({
                message: j.intl.string(j.t.mGZ66O),
                type: s.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (i) =>
        null != i
            ? (0, r.jsx)(
                  s.sNh,
                  D(
                      {
                          action: () => l(i),
                          label: e,
                          subtext: i,
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
        o = i.useRef(null),
        [a, c] = i.useState(!1),
        u = m.Sb.useSetting(),
        d = "IMAGE" === l.type,
        p = null == l.children,
        y = !l.animated,
        O = (0, f.Lz)(l.url, l.contentType, l.originalContentType),
        b = d && p && y && O,
        g = (0, f.Jj)(l.url);
    return u ||
        b ||
        g ||
        (null == (n = l.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, r.jsx)(s.yRy, {
              targetElementRef: o,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => c(!1),
              animation: s.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, r.jsx)(N, {
                      item: l,
                      canCopyImage: b,
                      canCopyLink: g,
                      onClose: () => c(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(L, {
                      ref: o,
                      tooltipText: j.intl.string(j.t.UKOtz8),
                      onClick: () => {
                          (0, S.yg)(S.uG.MORE_BUTTON_PRESSED), c(!a);
                      },
                      icon: s.xhG,
                  });
              },
          })
        : null;
}
let k = i.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        l = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        s = i.useRef(null),
        u = i.useCallback(() => {
            var e;
            !l &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [l]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, r.jsx)(v.ZP, {
            mode: v.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, r.jsxs)("div", {
                    ref: s,
                    className: o()(C.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        "IMAGE" === t.type && (0, r.jsx)(w, {}),
                        !n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(R, { item: t }),
                                    (0, r.jsx)(M, { item: t }),
                                    (0, r.jsx)(I, { item: t }),
                                    (0, r.jsx)(Z, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
