n.d(t, { Z: () => Z }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    o = n.n(i),
    l = n(442837),
    c = n(481060),
    s = n(607070),
    u = n(299206),
    d = n(868643),
    p = n(912332),
    m = n(296182),
    g = n(850908),
    y = n(695346),
    f = n(572004),
    b = n(424218),
    O = n(49012),
    _ = n(358085),
    h = n(998502),
    S = n(254109),
    v = n(212459),
    T = n(369171),
    j = n(312097),
    C = n(388032),
    E = n(152514);
function x() {
    return (x =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
        }).apply(this, arguments);
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function M() {
    (0, c.Mr3)(j.Q);
}
let w = r.forwardRef(function (e, t) {
    var { tooltipText: n } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["tooltipText"]);
    return (0, a.jsx)(c.ua7, {
        text: n,
        position: "bottom",
        children: (e) => {
            var i,
                o,
                l = x(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e;
                    })(e),
                );
            return (0, a.jsx)(
                c.hU,
                P(
                    ((i = P({}, l)),
                    (o = o =
                        {
                            buttonRef: t,
                            variant: "icon-only",
                            "aria-label": n,
                            size: "sm",
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, a);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    i),
                    r,
                ),
            );
        },
    });
});
function D() {
    let { zoomed: e, setZoomed: t } = (0, v.Y)();
    return (0, a.jsx)(w, {
        onClick: () => {
            (0, S.yg)(e ? S.uG.ZOOM_OUT_BUTTON_PRESSED : S.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? C.intl.string(C.t.vOFof3) : C.intl.string(C.t.Kt4gZ2),
        icon: e ? c.BlJ : c.OyE,
    });
}
function I(e) {
    var t, n;
    let { item: i } = e,
        o = null == (t = i.sourceMetadata) ? void 0 : t.message,
        l = null == (n = i.sourceMetadata) ? void 0 : n.identifier,
        s = r.useCallback(() => {
            if (null != o && null != l) {
                if (((0, S.yg)(S.uG.FORWARD_PRESSED), "embed" === l.type))
                    return void (0, p.l8)({
                        message: o,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                        onRequestSent: M,
                    });
                (0, p.l8)({
                    message: o,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
                    onRequestSent: M,
                });
            }
        }, [o, l]);
    return null != o && null != l && (0, d.h)(o)
        ? (0, a.jsx)(w, {
              onClick: s,
              tooltipText: C.intl.string(C.t.I3ltXF),
              icon: c.WZu,
          })
        : null;
}
function A(e) {
    let { item: t } = e,
        [n, i] = r.useState(!1),
        o = "VIDEO" === t.type,
        l = "IMAGE" === t.type,
        s = null != t.children,
        u = (0, m.gS)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(o || (_.isPlatformEmbedded && !s && l && u))) return null;
    let d = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType, m.wV);
    async function p() {
        if (((0, S.yg)(S.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, O.q)({ href: d }), "IMAGE" === t.type)) {
            i(!0);
            try {
                await h.ZP.saveImage(d, t.contentType, m.wV),
                    (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.cqpdJS), c.ToastType.SUCCESS));
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(C.intl.string(C.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                i(!1);
            }
        }
    }
    return (0, a.jsx)(w, {
        onClick: p,
        tooltipText: C.intl.string("VIDEO" === t.type ? C.t.JVuuz8 : C.t["S/xNKS"]),
        loading: n,
        icon: c._8t,
    });
}
function L(e) {
    let { item: t } = e;
    if (!(0, m.Jj)(t.url)) return null;
    let n = (0, m.s$)((0, m.lT)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, a.jsx)(w, {
        onClick: () => {
            (0, S.yg)(S.uG.OPEN_LINK_PRESSED), (0, O.q)({ href: n });
        },
        tooltipText: C.intl.string(C.t.q5jLJC),
        icon: c.rgF,
    });
}
function N(e) {
    var t, n;
    let { item: r, canCopyImage: i, canCopyLink: o, onClose: l, onSelect: s } = e,
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
            let { alt: n, sourceMetadata: r, width: i, height: o } = e,
                l = R(C.intl.string(C.t.ILJuBg), "name", { subtextLineClamp: 1 }),
                s = R(C.intl.string(C.t["3Nf9u7"]), "size"),
                u = R(C.intl.string(C.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if ((null == r || null == (t = r.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, g.Z)(r.identifier),
                p = (0, b.BU)(r.identifier.size / 1000);
            return (0, a.jsxs)(
                c.sNh,
                {
                    id: "media-viewer-details",
                    label: C.intl.string(C.t.sqBLa2),
                    children: [
                        l(d),
                        s(
                            C.intl.formatToPlainString(C.t.DTdonJ, {
                                width: i,
                                height: o,
                                fileSize: p,
                            }),
                        ),
                        u(n),
                    ],
                },
                "media-viewer-details",
            );
        })(r);
    async function O() {
        (0, S.yg)(S.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)((0, m.lT)(r.original, r.url), r.contentType, r.originalContentType, m.wV);
        try {
            var t;
            await h.ZP.copyImage(e, null != (t = r.originalContentType) ? t : r.contentType),
                (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.bhUpvL), c.ToastType.SUCCESS));
        } catch (e) {
            (0, c.showToast)((0, c.createToast)(C.intl.string(C.t.PTPbj4), c.ToastType.FAILURE));
        }
    }
    return (0, a.jsxs)(c.v2r, {
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: l,
        onSelect: s,
        children: [
            (0, a.jsxs)(c.kSQ, {
                children: [
                    i &&
                        (0, a.jsx)(
                            c.sNh,
                            {
                                label: C.intl.string(C.t.tvUqWl),
                                id: "media-viewer-copy-image",
                                icon: c.TIy,
                                action: O,
                            },
                            "media-viewer-copy-image",
                        ),
                    o &&
                        (0, a.jsx)(
                            c.sNh,
                            {
                                id: "media-viewer-copy-link",
                                label: C.intl.string(C.t.WqhZsr),
                                icon: c.xPt,
                                action: function () {
                                    (0, S.yg)(S.uG.COPY_LINK_PRESSED);
                                    let e = (0, m.s$)(
                                        (0, m.lT)(r.original, r.url),
                                        r.contentType,
                                        r.originalContentType,
                                    );
                                    (0, f.JG)(e, () =>
                                        (0, c.showToast)(
                                            (0, c.createToast)(C.intl.string(C.t["L/PwZW"]), c.ToastType.SUCCESS),
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
    let i = r.useCallback((e) => {
        (0, f.JG)(e, () =>
            (0, c.showToast)({
                message: C.intl.string(C.t.mGZ66O),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (r) =>
        null != r
            ? (0, a.jsx)(
                  c.sNh,
                  P(
                      {
                          action: () => i(r),
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
    let { item: i } = e,
        o = r.useRef(null),
        [l, s] = r.useState(!1),
        u = y.Sb.useSetting(),
        d = "IMAGE" === i.type,
        p = null == i.children,
        g = !i.animated,
        f = (0, m.Lz)(i.url, i.contentType, i.originalContentType),
        b = d && p && g && f,
        O = (0, m.Jj)(i.url);
    return u ||
        b ||
        O ||
        (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, a.jsx)(c.yRy, {
              targetElementRef: o,
              shouldShow: l,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, a.jsx)(N, {
                      item: i,
                      canCopyImage: b,
                      canCopyLink: O,
                      onClose: () => s(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(w, {
                      ref: o,
                      tooltipText: C.intl.string(C.t.UKOtz8),
                      onClick: () => {
                          (0, S.yg)(S.uG.MORE_BUTTON_PRESSED), s(!l);
                      },
                      icon: c.xhG,
                  });
              },
          })
        : null;
}
let Z = r.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        i = (0, l.e7)([s.Z], () => s.Z.keyboardModeEnabled),
        c = r.useRef(null),
        u = r.useCallback(() => {
            var e;
            !i &&
                (null == (e = c.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [i]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, a.jsx)(T.ZP, {
            mode: T.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, a.jsxs)("div", {
                    ref: c,
                    className: o()(E.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        "IMAGE" === t.type && (0, a.jsx)(D, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(I, { item: t }),
                                    (0, a.jsx)(A, { item: t }),
                                    (0, a.jsx)(L, { item: t }),
                                    (0, a.jsx)(k, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
