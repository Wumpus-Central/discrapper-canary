n.d(t, { Z: () => A }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(299206),
    d = n(868643),
    p = n(912332),
    m = n(296182),
    f = n(850908),
    y = n(695346),
    b = n(572004),
    O = n(424218),
    g = n(49012),
    h = n(358085),
    E = n(998502),
    v = n(254109),
    S = n(212459),
    j = n(369171),
    T = n(312097),
    C = n(388032),
    x = n(927419);
function P() {
    return (P =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function _(e) {
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
function w() {
    (0, s.Mr3)(T.Q);
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
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    (n = o[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["tooltipText"]);
    return (0, i.jsx)(s.ua7, {
        text: n,
        position: "bottom",
        children: (e) => {
            var o,
                l,
                a = P(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e;
                    })(e),
                );
            return (0, i.jsx)(
                s.hU,
                _(
                    ((o = _({}, a)),
                    (l = l =
                        {
                            buttonRef: t,
                            variant: "icon-only",
                            "aria-label": n,
                            size: "sm",
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    o),
                    r,
                ),
            );
        },
    });
});
function M() {
    let { zoomed: e, setZoomed: t } = (0, S.Y)();
    return (0, i.jsx)(L, {
        onClick: () => {
            (0, v.yg)(e ? v.uG.ZOOM_OUT_BUTTON_PRESSED : v.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? C.intl.string(C.t.vOFof3) : C.intl.string(C.t.Kt4gZ2),
        icon: e ? s.BlJ : s.OyE,
    });
}
function D(e) {
    var t, n;
    let { item: o } = e,
        l = null == (t = o.sourceMetadata) ? void 0 : t.message,
        a = null == (n = o.sourceMetadata) ? void 0 : n.identifier,
        c = r.useCallback(() => {
            if (null != l && null != a) {
                if (((0, v.yg)(v.uG.FORWARD_PRESSED), "embed" === a.type))
                    return void (0, p.l8)({
                        message: l,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [a.embedIndex] },
                        onRequestSent: w,
                    });
                (0, p.l8)({
                    message: l,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [a.attachmentId] },
                    onRequestSent: w,
                });
            }
        }, [l, a]);
    return null != l && null != a && (0, d.h)(l)
        ? (0, i.jsx)(L, {
              onClick: c,
              tooltipText: C.intl.string(C.t.I3ltXF),
              icon: s.WZu,
          })
        : null;
}
function I(e) {
    let { item: t } = e,
        [n, o] = r.useState(!1),
        l = "VIDEO" === t.type,
        a = "IMAGE" === t.type,
        c = null != t.children,
        u = (0, m.gS)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(l || (h.isPlatformEmbedded && !c && a && u))) return null;
    let d = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType, m.wV);
    async function p() {
        if (((0, v.yg)(v.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, g.q)({ href: d }), "IMAGE" === t.type)) {
            o(!0);
            try {
                await E.ZP.saveImage(d, t.contentType, m.wV),
                    (0, s.showToast)((0, s.createToast)(C.intl.string(C.t.cqpdJS), s.ToastType.SUCCESS));
            } catch (e) {
                (0, s.showToast)((0, s.createToast)(C.intl.string(C.t["8Ve/S0"]), s.ToastType.FAILURE));
            } finally {
                o(!1);
            }
        }
    }
    return (0, i.jsx)(L, {
        onClick: p,
        tooltipText: C.intl.string("VIDEO" === t.type ? C.t.JVuuz8 : C.t["S/xNKS"]),
        loading: n,
        icon: s._8t,
    });
}
function N(e) {
    let { item: t } = e;
    if (!(0, m.Jj)(t.url)) return null;
    let n = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(L, {
        onClick: () => {
            (0, v.yg)(v.uG.OPEN_LINK_PRESSED), (0, g.q)({ href: n });
        },
        tooltipText: C.intl.string(C.t.q5jLJC),
        icon: s.rgF,
    });
}
function Z(e) {
    var t, n;
    let { item: r, canCopyImage: o, canCopyLink: l, onClose: a, onSelect: c } = e,
        d =
            (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? r.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, u.Z)({
            id: d,
            label: C.intl.string(C.t.nwg3lZ),
        }),
        y = (function (e) {
            var t;
            let { alt: n, sourceMetadata: r, width: o, height: l } = e,
                a = R(C.intl.string(C.t.ILJuBg), "name", { subtextLineClamp: 1 }),
                c = R(C.intl.string(C.t["3Nf9u7"]), "size"),
                u = R(C.intl.string(C.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if ((null == r || null == (t = r.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, f.Z)(r.identifier),
                p = (0, O.BU)(r.identifier.size / 1000);
            return (0, i.jsxs)(
                s.sNh,
                {
                    id: "media-viewer-details",
                    label: C.intl.string(C.t.sqBLa2),
                    children: [
                        a(d),
                        c(
                            C.intl.formatToPlainString(C.t.DTdonJ, {
                                width: o,
                                height: l,
                                fileSize: p,
                            }),
                        ),
                        u(n),
                    ],
                },
                "media-viewer-details",
            );
        })(r);
    async function g() {
        (0, v.yg)(v.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)((0, m.lT)(r.original, r.url), r.contentType, r.originalContentType, m.wV);
        try {
            var t;
            await E.ZP.copyImage(e, null != (t = r.originalContentType) ? t : r.contentType),
                (0, s.showToast)((0, s.createToast)(C.intl.string(C.t.bhUpvL), s.ToastType.SUCCESS));
        } catch (e) {
            (0, s.showToast)((0, s.createToast)(C.intl.string(C.t.PTPbj4), s.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(s.v2r, {
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: a,
        onSelect: c,
        children: [
            (0, i.jsxs)(s.kSQ, {
                children: [
                    o &&
                        (0, i.jsx)(
                            s.sNh,
                            {
                                label: C.intl.string(C.t.tvUqWl),
                                id: "media-viewer-copy-image",
                                icon: s.TIy,
                                action: g,
                            },
                            "media-viewer-copy-image",
                        ),
                    l &&
                        (0, i.jsx)(
                            s.sNh,
                            {
                                id: "media-viewer-copy-link",
                                label: C.intl.string(C.t.WqhZsr),
                                icon: s.xPt,
                                action: function () {
                                    (0, v.yg)(v.uG.COPY_LINK_PRESSED);
                                    let e = (0, m.s$)(
                                        (0, m.lT)(r.original, r.url),
                                        r.contentType,
                                        r.originalContentType,
                                    );
                                    (0, b.JG)(e, () =>
                                        (0, s.showToast)(
                                            (0, s.createToast)(C.intl.string(C.t["L/PwZW"]), s.ToastType.SUCCESS),
                                        ),
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            }),
            y,
            p,
        ],
    });
}
function R(e, t, n) {
    let o = r.useCallback((e) => {
        (0, b.JG)(e, () =>
            (0, s.showToast)({
                message: C.intl.string(C.t.mGZ66O),
                type: s.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (r) =>
        null != r
            ? (0, i.jsx)(
                  s.sNh,
                  _(
                      {
                          action: () => o(r),
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
function k(e) {
    var t, n;
    let { item: o } = e,
        l = r.useRef(null),
        [a, c] = r.useState(!1),
        u = y.Sb.useSetting(),
        d = "IMAGE" === o.type,
        p = null == o.children,
        f = !o.animated,
        b = (0, m.Lz)(o.url, o.contentType, o.originalContentType),
        O = d && p && f && b,
        g = (0, m.Jj)(o.url);
    return u ||
        O ||
        g ||
        (null == (n = o.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, i.jsx)(s.yRy, {
              targetElementRef: l,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => c(!1),
              animation: s.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(Z, {
                      item: o,
                      canCopyImage: O,
                      canCopyLink: g,
                      onClose: () => c(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(L, {
                      ref: l,
                      tooltipText: C.intl.string(C.t.UKOtz8),
                      onClick: () => {
                          (0, v.yg)(v.uG.MORE_BUTTON_PRESSED), c(!a);
                      },
                      icon: s.xhG,
                  });
              },
          })
        : null;
}
let A = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        o = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        s = r.useRef(null),
        u = r.useCallback(() => {
            var e;
            !o &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [o]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(j.ZP, {
            mode: j.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: s,
                    className: l()(x.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(M, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(D, { item: t }),
                                    (0, i.jsx)(I, { item: t }),
                                    (0, i.jsx)(N, { item: t }),
                                    (0, i.jsx)(k, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
