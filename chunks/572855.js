n.d(t, {
    A: () => U,
}),
    n(896048),
    n(65821);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(311907),
    s = n(990078),
    c = n(397927),
    u = n(775602),
    d = n(50268),
    p = n(843626),
    f = n(294454),
    m = n(803316),
    O = n(465856),
    y = n(253932),
    b = n(957565),
    E = n(255438),
    g = n(307600),
    h = n(723702),
    S = n(837921),
    _ = n(793367),
    T = n(454290),
    A = n(358731),
    j = n(256905),
    v = n(985018),
    C = n(256863);

function I(e) {
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

function N() {
    (0, c.OoC)(j.K);
}

function x(e) {
    let { tooltipText: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        r = Object.getOwnPropertyNames(e);
                    for (i = 0; i < r.length; i++)
                        (n = r[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (i = n[l]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r;
        })(e, ["tooltipText"]);
    return (0, i.jsx)(s.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(
            c.K0,
            I(
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

function D() {
    let { zoomed: e, setZoomed: t } = (0, T.Q)();
    return (0, i.jsx)(x, {
        onClick: () => {
            (0, _.Yq)(e ? _.NJ.ZOOM_OUT_BUTTON_PRESSED : _.NJ.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? v.intl.string(v.t.vOFof8) : v.intl.string(v.t.Kt4gZ6),
        icon: e ? c.V0_ : c.r1u,
    });
}

function R(e) {
    var t, n;
    let { item: r } = e,
        o = null == (t = r.sourceMetadata) ? void 0 : t.message,
        a = null == (n = r.sourceMetadata) ? void 0 : n.identifier,
        s = l.useCallback(() => {
            if (null != o && null != a) {
                if (((0, _.Yq)(_.NJ.FORWARD_PRESSED), "embed" === a.type))
                    return void (0, f.fO)({
                        message: o,
                        source: "media-viewer",
                        forwardOptions: {
                            onlyEmbedIndices: [a.embedIndex],
                        },
                        onRequestSent: N,
                    });
                (0, f.fO)({
                    message: o,
                    source: "media-viewer",
                    forwardOptions: {
                        onlyAttachmentIds: [a.attachmentId],
                    },
                    onRequestSent: N,
                });
            }
        }, [o, a]);
    return null != o && null != a && (0, p.p)(o)
        ? (0, i.jsx)(x, {
              onClick: s,
              tooltipText: v.intl.string(v.t.I3ltXO),
              icon: c.tuI,
          })
        : null;
}

function P(e) {
    let { item: t } = e,
        [n, r] = l.useState(!1),
        o = "VIDEO" === t.type,
        a = "IMAGE" === t.type,
        s = null != t.children,
        u = (0, m.e7)((0, m.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(o || (h.isPlatformEmbedded && !s && a && u))) return null;
    let d = (0, m.XW)((0, m.bc)(t.original, t.url), t.contentType, t.originalContentType, m.N7);
    async function p() {
        if (
            ((0, _.Yq)(_.NJ.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type &&
                (0, g.h)({
                    href: d,
                }),
            "IMAGE" === t.type)
        ) {
            r(!0);
            try {
                let e = await S.Ay.saveImage(d, t.contentType, m.N7);
                if (e === S._0.ERRORED) throw Error("DesktopNativeUtils.saveImage errored for ".concat(d));
                e === S._0.SAVED &&
                    ((0, _._V)(d, !0),
                    (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.cqpdJW), c.ToastType.SUCCESS)));
            } catch (e) {
                (0, _._V)(d, !1),
                    (0, c.showToast)((0, c.createToast)(v.intl.string(v.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                r(!1);
            }
        }
    }
    return (0, i.jsx)(x, {
        onClick: p,
        tooltipText: v.intl.string("VIDEO" === t.type ? v.t.JVuuz3 : v.t["S/xNKV"]),
        loading: n,
        icon: c.s3U,
    });
}

function w(e) {
    let { item: t } = e;
    if (!(0, m.fW)(t.url)) return null;
    let n = (0, m.XW)((0, m.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(x, {
        onClick: () => {
            (0, _.Yq)(_.NJ.OPEN_LINK_PRESSED),
                (0, _.RH)(n),
                (0, g.h)({
                    href: n,
                });
        },
        tooltipText: v.intl.string(v.t.q5jLJB),
        icon: c.tfB,
    });
}

function M(e) {
    var t, n;
    let { item: l, canCopyImage: r, canCopyLink: o, onClose: a, onSelect: s } = e,
        u =
            (null == (n = l.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? l.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, d.A)({
            id: u,
            label: v.intl.string(v.t.nwg3lR),
        }),
        f = (function (e) {
            var t;
            let { alt: n, sourceMetadata: l, width: r, height: o } = e,
                a = L(v.intl.string(v.t.ILJuBq), "name", {
                    subtextLineClamp: 1,
                }),
                s = L(v.intl.string(v.t["3Nf9u2"]), "size"),
                u = L(v.intl.string(v.t.eOB2eR), "alt", {
                    subtextLineClamp: 2,
                });
            if ((null == l || null == (t = l.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, O.A)(l.identifier),
                p = (0, E.Xq)(l.identifier.size / 1e3);
            return (0, i.jsxs)(
                c.Drp,
                {
                    id: "media-viewer-details",
                    label: v.intl.string(v.t.sqBLa9),
                    children: [
                        a(d),
                        s(
                            v.intl.formatToPlainString(v.t.DTdonA, {
                                width: r,
                                height: o,
                                fileSize: p,
                            }),
                        ),
                        u(n),
                    ],
                },
                "media-viewer-details",
            );
        })(l);
    async function y() {
        (0, _.Yq)(_.NJ.COPY_IMAGE_PRESSED);
        let e = (0, m.XW)((0, m.bc)(l.original, l.url), l.contentType, l.originalContentType, m.N7);
        try {
            var t;
            await S.Ay.copyImage(e, null != (t = l.originalContentType) ? t : l.contentType),
                (0, _.$e)(e, !0),
                (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.bhUpvC), c.ToastType.SUCCESS));
        } catch (t) {
            (0, _.$e)(e, !1), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.PTPbjx), c.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: a,
        onSelect: s,
        children: [
            (0, i.jsxs)(c.rXV, {
                children: [
                    r &&
                        (0, i.jsx)(
                            c.Drp,
                            {
                                label: v.intl.string(v.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: c.TdU,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: c.TdU,
                                },
                                action: y,
                            },
                            "media-viewer-copy-image",
                        ),
                    o &&
                        (0, i.jsx)(
                            c.Drp,
                            {
                                id: "media-viewer-copy-link",
                                label: v.intl.string(v.t.WqhZss),
                                icon: c.qYV,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: c.qYV,
                                },
                                action: function () {
                                    (0, _.Yq)(_.NJ.COPY_LINK_PRESSED);
                                    let e = (0, m.XW)(
                                        (0, m.bc)(l.original, l.url),
                                        l.contentType,
                                        l.originalContentType,
                                    );
                                    (0, b.C)(
                                        e,
                                        () => {
                                            (0, _.C9)(e, !0),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(
                                                        v.intl.string(v.t["L/PwZf"]),
                                                        c.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            (0, _.C9)(e, !1),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(v.intl.string(v.t.uVV00B), c.ToastType.FAILURE),
                                                );
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            }),
            f,
            p,
        ],
    });
}

function L(e, t, n) {
    let r = l.useCallback((e) => {
        (0, b.C)(e, () =>
            (0, c.showToast)({
                message: v.intl.string(v.t.mGZ66D),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (l) =>
        null != l
            ? (0, i.jsx)(
                  c.Drp,
                  I(
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

function G(e) {
    var t, n;
    let { item: r } = e,
        o = l.useRef(null),
        [a, s] = l.useState(!1),
        u = y.Q_.useSetting(),
        d = "IMAGE" === r.type,
        p = null == r.children,
        f = !r.animated,
        O = (0, m.PK)(r.url, r.contentType, r.originalContentType),
        b = d && p && f && O,
        E = (0, m.fW)(r.url);
    return u ||
        b ||
        E ||
        (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, i.jsx)(c.YNO, {
              targetElementRef: o,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.YNO.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(M, {
                      item: r,
                      canCopyImage: b,
                      canCopyLink: E,
                      onClose: () => s(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(x, {
                      buttonRef: o,
                      tooltipText: v.intl.string(v.t["UKOtz+"]),
                      onClick: () => {
                          (0, _.Yq)(_.NJ.MORE_BUTTON_PRESSED), s(!a);
                      },
                      icon: c.jNK,
                  });
              },
          })
        : null;
}
let U = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        r = (0, a.bG)([u.A], () => u.A.keyboardModeEnabled),
        s = l.useRef(null),
        c = l.useCallback(() => {
            var e;
            !r &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [r]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(A.Ay, {
            mode: A.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: s,
                    className: o()(C.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(D, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(R, {
                                        item: t,
                                    }),
                                    (0, i.jsx)(P, {
                                        item: t,
                                    }),
                                    (0, i.jsx)(w, {
                                        item: t,
                                    }),
                                    (0, i.jsx)(G, {
                                        item: t,
                                    }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
