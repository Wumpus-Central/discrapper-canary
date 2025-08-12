n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    i = n(73800),
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
    h = n(49012),
    E = n(358085),
    g = n(998502),
    v = n(254109),
    S = n(212459),
    j = n(369171),
    x = n(312097),
    T = n(388032),
    C = n(927419);
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
function _(e) {
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
function w() {
    (0, s.Mr3)(x.Q);
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
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["tooltipText"]);
    return (0, r.jsx)(s.ua7, {
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
            return (0, r.jsx)(
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
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    o),
                    i,
                ),
            );
        },
    });
});
function M() {
    let { zoomed: e, setZoomed: t } = (0, S.Y)();
    return (0, r.jsx)(L, {
        onClick: () => {
            (0, v.yg)(e ? v.uG.ZOOM_OUT_BUTTON_PRESSED : v.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? T.intl.string(T.t.vOFof3) : T.intl.string(T.t.Kt4gZ2),
        icon: e ? s.BlJ : s.OyE,
    });
}
function D(e) {
    var t, n;
    let { item: o } = e,
        l = null == (t = o.sourceMetadata) ? void 0 : t.message,
        a = null == (n = o.sourceMetadata) ? void 0 : n.identifier,
        c = i.useCallback(() => {
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
        ? (0, r.jsx)(L, {
              onClick: c,
              tooltipText: T.intl.string(T.t.I3ltXF),
              icon: s.WZu,
          })
        : null;
}
function I(e) {
    let { item: t } = e,
        [n, o] = i.useState(!1);
    if (
        !(
            "VIDEO" === t.type ||
            (E.isPlatformEmbedded && null == t.children && "IMAGE" === t.type && (0, m.gS)(t.url, t.contentType))
        )
    )
        return null;
    let l = (0, m.s$)(t.url, t.contentType, m.wV);
    async function a() {
        if (((0, v.yg)(v.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, h.q)({ href: l }), "IMAGE" === t.type)) {
            o(!0);
            try {
                await g.ZP.saveImage(l, t.contentType, m.wV),
                    (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.cqpdJS), s.ToastType.SUCCESS));
            } catch (e) {
                (0, s.showToast)((0, s.createToast)(T.intl.string(T.t["8Ve/S0"]), s.ToastType.FAILURE));
            } finally {
                o(!1);
            }
        }
    }
    return (0, r.jsx)(L, {
        onClick: a,
        tooltipText: T.intl.string("VIDEO" === t.type ? T.t.JVuuz8 : T.t["S/xNKS"]),
        loading: n,
        icon: s._8t,
    });
}
function N(e) {
    var t;
    let { item: n } = e;
    if (!(0, m.Jj)(n.url)) return null;
    let i = (0, m.s$)(null != (t = n.original) ? t : n.url, n.contentType);
    return (0, r.jsx)(L, {
        onClick: () => {
            (0, v.yg)(v.uG.OPEN_LINK_PRESSED), (0, h.q)({ href: i });
        },
        tooltipText: T.intl.string(T.t.q5jLJC),
        icon: s.rgF,
    });
}
function Z(e) {
    var t, n;
    let { item: i, canCopyImage: o, canCopyLink: l, onClose: a, onSelect: c } = e,
        d =
            (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? i.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, u.Z)({
            id: d,
            label: T.intl.string(T.t.nwg3lZ),
        }),
        y = (function (e) {
            var t;
            let { alt: n, sourceMetadata: i, width: o, height: l } = e,
                a = R(T.intl.string(T.t.ILJuBg), "name", { subtextLineClamp: 1 }),
                c = R(T.intl.string(T.t["3Nf9u7"]), "size"),
                u = R(T.intl.string(T.t.eOB2eX), "alt", { subtextLineClamp: 2 });
            if ((null == i || null == (t = i.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, f.Z)(i.identifier),
                p = (0, O.BU)(i.identifier.size / 1000);
            return (0, r.jsxs)(
                s.sNh,
                {
                    id: "media-viewer-details",
                    label: T.intl.string(T.t.sqBLa2),
                    children: [
                        a(d),
                        c(
                            T.intl.formatToPlainString(T.t.DTdonJ, {
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
        })(i);
    async function h() {
        (0, v.yg)(v.uG.COPY_IMAGE_PRESSED);
        let e = (0, m.s$)(i.url, i.contentType, m.wV);
        try {
            await g.ZP.copyImage(e, i.contentType),
                (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.bhUpvL), s.ToastType.SUCCESS));
        } catch (e) {
            (0, s.showToast)((0, s.createToast)(T.intl.string(T.t.PTPbj4), s.ToastType.FAILURE));
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
                    o &&
                        (0, r.jsx)(
                            s.sNh,
                            {
                                label: T.intl.string(T.t.tvUqWl),
                                id: "media-viewer-copy-image",
                                icon: s.TIy,
                                action: h,
                            },
                            "media-viewer-copy-image",
                        ),
                    l &&
                        (0, r.jsx)(
                            s.sNh,
                            {
                                id: "media-viewer-copy-link",
                                label: T.intl.string(T.t.WqhZsr),
                                icon: s.xPt,
                                action: function () {
                                    var e;
                                    (0, v.yg)(v.uG.COPY_LINK_PRESSED);
                                    let t = (0, m.s$)(null != (e = i.original) ? e : i.url, i.contentType);
                                    (0, b.JG)(t, () =>
                                        (0, s.showToast)(
                                            (0, s.createToast)(T.intl.string(T.t["L/PwZW"]), s.ToastType.SUCCESS),
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
    let o = i.useCallback((e) => {
        (0, b.JG)(e, () =>
            (0, s.showToast)({
                message: T.intl.string(T.t.mGZ66O),
                type: s.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (i) =>
        null != i
            ? (0, r.jsx)(
                  s.sNh,
                  _(
                      {
                          action: () => o(i),
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
function k(e) {
    var t, n;
    let { item: o } = e,
        l = i.useRef(null),
        [a, c] = i.useState(!1),
        u = y.Sb.useSetting(),
        d = "IMAGE" === o.type && null == o.children && !o.animated && (0, m.Lz)(o.url, o.contentType),
        p = (0, m.Jj)(o.url);
    return u ||
        d ||
        p ||
        (null == (n = o.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, r.jsx)(s.yRy, {
              targetElementRef: l,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => c(!1),
              animation: s.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, r.jsx)(Z, {
                      item: o,
                      canCopyImage: d,
                      canCopyLink: p,
                      onClose: () => c(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(L, {
                      ref: l,
                      tooltipText: T.intl.string(T.t.UKOtz8),
                      onClick: () => {
                          (0, v.yg)(v.uG.MORE_BUTTON_PRESSED), c(!a);
                      },
                      icon: s.xhG,
                  });
              },
          })
        : null;
}
let A = i.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        o = (0, a.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        s = i.useRef(null),
        u = i.useCallback(() => {
            var e;
            !o &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [o]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, r.jsx)(j.ZP, {
            mode: j.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, r.jsxs)("div", {
                    ref: s,
                    className: l()(C.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        "IMAGE" === t.type && (0, r.jsx)(M, {}),
                        !n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(D, { item: t }),
                                    (0, r.jsx)(I, { item: t }),
                                    (0, r.jsx)(N, { item: t }),
                                    (0, r.jsx)(k, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
