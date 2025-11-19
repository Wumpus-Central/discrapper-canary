n.d(t, { Z: () => k }), n(388685), n(415506);
var i = n(54381),
    l = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(28664),
    u = n(481060),
    c = n(607070),
    d = n(299206),
    p = n(868643),
    m = n(912332),
    y = n(296182),
    f = n(850908),
    E = n(695346),
    O = n(572004),
    h = n(424218),
    S = n(49012),
    b = n(358085),
    g = n(998502),
    T = n(254109),
    v = n(212459),
    _ = n(369171),
    C = n(312097),
    j = n(388032),
    x = n(751808);
function L(e) {
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
function D() {
    (0, u.Mr3)(C.Q);
}
function I(e) {
    var { tooltipText: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["tooltipText"]);
    return (0, i.jsx)(s.u, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(
            u.hU,
            L(
                {
                    variant: "icon-only",
                    "aria-label": t,
                    size: "sm",
                },
                n,
            ),
        ),
    });
}
function P() {
    let { zoomed: e, setZoomed: t } = (0, v.Y)();
    return (0, i.jsx)(I, {
        onClick: () => {
            (0, T.yg)(e ? T.uG.ZOOM_OUT_BUTTON_PRESSED : T.uG.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? j.intl.string(j.t.vOFof8) : j.intl.string(j.t.Kt4gZ6),
        icon: e ? u.BlJ : u.OyE,
    });
}
function R(e) {
    var t, n;
    let { item: r } = e,
        a = null == (t = r.sourceMetadata) ? void 0 : t.message,
        o = null == (n = r.sourceMetadata) ? void 0 : n.identifier,
        s = l.useCallback(() => {
            if (null != a && null != o) {
                if (((0, T.yg)(T.uG.FORWARD_PRESSED), "embed" === o.type))
                    return void (0, m.l8)({
                        message: a,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                        onRequestSent: D,
                    });
                (0, m.l8)({
                    message: a,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
                    onRequestSent: D,
                });
            }
        }, [a, o]);
    return null != a && null != o && (0, p.h)(a)
        ? (0, i.jsx)(I, {
              onClick: s,
              tooltipText: j.intl.string(j.t.I3ltXO),
              icon: u.WZu,
          })
        : null;
}
function N(e) {
    let { item: t } = e,
        [n, r] = l.useState(!1),
        a = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        s = null != t.children,
        c = (0, y.gS)((0, y.lT)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(a || (b.isPlatformEmbedded && !s && o && c))) return null;
    let d = (0, y.s$)((0, y.lT)(t.original, t.url), t.contentType, t.originalContentType, y.wV);
    async function p() {
        if (((0, T.yg)(T.uG.SAVE_MEDIA_PRESSED), "VIDEO" === t.type && (0, S.q)({ href: d }), "IMAGE" === t.type)) {
            r(!0);
            try {
                let e = await g.ZP.saveImage(d, t.contentType, y.wV);
                if (e === g.mQ.ERRORED) throw Error("DesktopNativeUtils.saveImage errored for ".concat(d));
                e === g.mQ.SAVED &&
                    ((0, T.rm)(d, !0),
                    (0, u.showToast)((0, u.createToast)(j.intl.string(j.t.cqpdJW), u.ToastType.SUCCESS)));
            } catch (e) {
                (0, T.rm)(d, !1),
                    (0, u.showToast)((0, u.createToast)(j.intl.string(j.t["8Ve/S0"]), u.ToastType.FAILURE));
            } finally {
                r(!1);
            }
        }
    }
    return (0, i.jsx)(I, {
        onClick: p,
        tooltipText: j.intl.string("VIDEO" === t.type ? j.t.JVuuz3 : j.t["S/xNKV"]),
        loading: n,
        icon: u._8t,
    });
}
function M(e) {
    let { item: t } = e;
    if (!(0, y.Jj)(t.url)) return null;
    let n = (0, y.s$)((0, y.lT)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(I, {
        onClick: () => {
            (0, T.yg)(T.uG.OPEN_LINK_PRESSED), (0, T.jc)(n), (0, S.q)({ href: n });
        },
        tooltipText: j.intl.string(j.t.q5jLJB),
        icon: u.rgF,
    });
}
function A(e) {
    var t, n;
    let { item: l, canCopyImage: r, canCopyLink: a, onClose: o, onSelect: s } = e,
        c =
            (null == (n = l.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? l.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, d.Z)({
            id: c,
            label: j.intl.string(j.t.nwg3lR),
        }),
        m = (function (e) {
            var t;
            let { alt: n, sourceMetadata: l, width: r, height: a } = e,
                o = w(j.intl.string(j.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = w(j.intl.string(j.t["3Nf9u2"]), "size"),
                c = w(j.intl.string(j.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if ((null == l || null == (t = l.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, f.Z)(l.identifier),
                p = (0, h.BU)(l.identifier.size / 1000);
            return (0, i.jsxs)(
                u.sNh,
                {
                    id: "media-viewer-details",
                    label: j.intl.string(j.t.sqBLa9),
                    children: [
                        o(d),
                        s(
                            j.intl.formatToPlainString(j.t.DTdonA, {
                                width: r,
                                height: a,
                                fileSize: p,
                            }),
                        ),
                        c(n),
                    ],
                },
                "media-viewer-details",
            );
        })(l);
    async function E() {
        (0, T.yg)(T.uG.COPY_IMAGE_PRESSED);
        let e = (0, y.s$)((0, y.lT)(l.original, l.url), l.contentType, l.originalContentType, y.wV);
        try {
            var t;
            await g.ZP.copyImage(e, null != (t = l.originalContentType) ? t : l.contentType),
                (0, T.gR)(e, !0),
                (0, u.showToast)((0, u.createToast)(j.intl.string(j.t.bhUpvC), u.ToastType.SUCCESS));
        } catch (t) {
            (0, T.gR)(e, !1), (0, u.showToast)((0, u.createToast)(j.intl.string(j.t.PTPbjx), u.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(u.v2r, {
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: o,
        onSelect: s,
        children: [
            (0, i.jsxs)(u.kSQ, {
                children: [
                    r &&
                        (0, i.jsx)(
                            u.sNh,
                            {
                                label: j.intl.string(j.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: u.TIy,
                                action: E,
                            },
                            "media-viewer-copy-image",
                        ),
                    a &&
                        (0, i.jsx)(
                            u.sNh,
                            {
                                id: "media-viewer-copy-link",
                                label: j.intl.string(j.t.WqhZss),
                                icon: u.xPt,
                                action: function () {
                                    (0, T.yg)(T.uG.COPY_LINK_PRESSED);
                                    let e = (0, y.s$)(
                                        (0, y.lT)(l.original, l.url),
                                        l.contentType,
                                        l.originalContentType,
                                    );
                                    (0, O.JG)(
                                        e,
                                        () => {
                                            (0, T.mL)(e, !0),
                                                (0, u.showToast)(
                                                    (0, u.createToast)(
                                                        j.intl.string(j.t["L/PwZf"]),
                                                        u.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            (0, T.mL)(e, !1),
                                                (0, u.showToast)(
                                                    (0, u.createToast)(j.intl.string(j.t.uVV00B), u.ToastType.FAILURE),
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
function w(e, t, n) {
    let r = l.useCallback((e) => {
        (0, O.JG)(e, () =>
            (0, u.showToast)({
                message: j.intl.string(j.t.mGZ66D),
                type: u.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (l) =>
        null != l
            ? (0, i.jsx)(
                  u.sNh,
                  L(
                      {
                          action: () => r(l),
                          label: e,
                          subtext: l,
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
    let { item: r } = e,
        a = l.useRef(null),
        [o, s] = l.useState(!1),
        c = E.Sb.useSetting(),
        d = "IMAGE" === r.type,
        p = null == r.children,
        m = !r.animated,
        f = (0, y.Lz)(r.url, r.contentType, r.originalContentType),
        O = d && p && m && f,
        h = (0, y.Jj)(r.url);
    return c ||
        O ||
        h ||
        (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, i.jsx)(u.yRy, {
              targetElementRef: a,
              shouldShow: o,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: u.yRy.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(A, {
                      item: r,
                      canCopyImage: O,
                      canCopyLink: h,
                      onClose: () => s(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(I, {
                      buttonRef: a,
                      tooltipText: j.intl.string(j.t["UKOtz+"]),
                      onClick: () => {
                          (0, T.yg)(T.uG.MORE_BUTTON_PRESSED), s(!o);
                      },
                      icon: u.xhG,
                  });
              },
          })
        : null;
}
let k = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        r = (0, o.e7)([c.Z], () => c.Z.keyboardModeEnabled),
        s = l.useRef(null),
        u = l.useCallback(() => {
            var e;
            !r &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [r]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(_.ZP, {
            mode: _.lx.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: s,
                    className: a()(x.actionButtons, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: u,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(P, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(R, { item: t }),
                                    (0, i.jsx)(N, { item: t }),
                                    (0, i.jsx)(M, { item: t }),
                                    (0, i.jsx)(Z, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
