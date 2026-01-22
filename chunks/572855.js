n.d(t, {
    A: () => U,
}),
    n(896048),
    n(65821);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(311907),
    s = n(990078),
    c = n(397927),
    u = n(775602),
    d = n(50268),
    p = n(843626),
    f = n(294454),
    b = n(803316),
    O = n(465856),
    m = n(253932),
    y = n(957565),
    E = n(255438),
    g = n(307600),
    S = n(723702),
    h = n(837921),
    T = n(793367),
    _ = n(454290),
    j = n(358731),
    A = n(256905),
    v = n(985018),
    C = n(256863);

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

function x() {
    (0, c.OoC)(A.K);
}

function N(e) {
    let { tooltipText: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                i,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (l = n[i]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
                return r;
            }
            if (
                ((r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = {},
                        r = Object.getOwnPropertyNames(e);
                    for (l = 0; l < r.length; l++)
                        (n = r[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (l = n[i]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            return r;
        })(e, ["tooltipText"]);
    return (0, l.jsx)(s.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, l.jsx)(
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
    let { zoomed: e, setZoomed: t } = (0, _.Q)();
    return (0, l.jsx)(N, {
        onClick: () => {
            (0, T.Yq)(e ? T.NJ.ZOOM_OUT_BUTTON_PRESSED : T.NJ.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? v.intl.string(v.t.vOFof8) : v.intl.string(v.t.Kt4gZ6),
        icon: e ? c.V0_ : c.r1u,
    });
}

function R(e) {
    var t, n;
    let { item: r } = e,
        a = null == (t = r.sourceMetadata) ? void 0 : t.message,
        o = null == (n = r.sourceMetadata) ? void 0 : n.identifier,
        s = i.useCallback(() => {
            if (null != a && null != o) {
                if (((0, T.Yq)(T.NJ.FORWARD_PRESSED), "embed" === o.type))
                    return void (0, f.fO)({
                        message: a,
                        source: "media-viewer",
                        forwardOptions: {
                            onlyEmbedIndices: [o.embedIndex],
                        },
                        onRequestSent: x,
                    });
                (0, f.fO)({
                    message: a,
                    source: "media-viewer",
                    forwardOptions: {
                        onlyAttachmentIds: [o.attachmentId],
                    },
                    onRequestSent: x,
                });
            }
        }, [a, o]);
    return null != a && null != o && (0, p.p)(a)
        ? (0, l.jsx)(N, {
              onClick: s,
              tooltipText: v.intl.string(v.t.I3ltXO),
              icon: c.tuI,
          })
        : null;
}

function P(e) {
    let { item: t } = e,
        [n, r] = i.useState(!1),
        a = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        s = null != t.children,
        u = (0, b.e7)((0, b.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(a || (S.isPlatformEmbedded && !s && o && u))) return null;
    let d = (0, b.XW)((0, b.bc)(t.original, t.url), t.contentType, t.originalContentType, b.N7);
    async function p() {
        if (
            ((0, T.Yq)(T.NJ.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type &&
                (0, g.h)({
                    href: d,
                }),
            "IMAGE" === t.type)
        ) {
            r(!0);
            try {
                let e = await h.Ay.saveImage(d, t.contentType, b.N7);
                if (e === h._0.ERRORED) throw Error("DesktopNativeUtils.saveImage errored for ".concat(d));
                e === h._0.SAVED &&
                    ((0, T._V)(d, !0),
                    (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.cqpdJW), c.ToastType.SUCCESS)));
            } catch (e) {
                (0, T._V)(d, !1),
                    (0, c.showToast)((0, c.createToast)(v.intl.string(v.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                r(!1);
            }
        }
    }
    return (0, l.jsx)(N, {
        onClick: p,
        tooltipText: v.intl.string("VIDEO" === t.type ? v.t.JVuuz3 : v.t["S/xNKV"]),
        loading: n,
        icon: c.s3U,
    });
}

function w(e) {
    let { item: t } = e;
    if (!(0, b.fW)(t.url)) return null;
    let n = (0, b.XW)((0, b.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, l.jsx)(N, {
        onClick: () => {
            (0, T.Yq)(T.NJ.OPEN_LINK_PRESSED),
                (0, T.RH)(n),
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
    let { item: i, canCopyImage: r, canCopyLink: a, onClose: o, onSelect: s } = e,
        u =
            (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? i.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, d.A)({
            id: u,
            label: v.intl.string(v.t.nwg3lR),
        }),
        f = (function (e) {
            var t;
            let { alt: n, sourceMetadata: i, width: r, height: a } = e,
                o = L(v.intl.string(v.t.ILJuBq), "name", {
                    subtextLineClamp: 1,
                }),
                s = L(v.intl.string(v.t["3Nf9u2"]), "size"),
                u = L(v.intl.string(v.t.eOB2eR), "alt", {
                    subtextLineClamp: 2,
                });
            if ((null == i || null == (t = i.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, O.A)(i.identifier),
                p = (0, E.Xq)(i.identifier.size / 1e3);
            return (0, l.jsxs)(
                c.Drp,
                {
                    id: "media-viewer-details",
                    label: v.intl.string(v.t.sqBLa9),
                    children: [
                        o(d),
                        s(
                            v.intl.formatToPlainString(v.t.DTdonA, {
                                width: r,
                                height: a,
                                fileSize: p,
                            }),
                        ),
                        u(n),
                    ],
                },
                "media-viewer-details",
            );
        })(i);
    async function m() {
        (0, T.Yq)(T.NJ.COPY_IMAGE_PRESSED);
        let e = (0, b.XW)((0, b.bc)(i.original, i.url), i.contentType, i.originalContentType, b.N7);
        try {
            var t;
            await h.Ay.copyImage(e, null != (t = i.originalContentType) ? t : i.contentType),
                (0, T.$e)(e, !0),
                (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.bhUpvC), c.ToastType.SUCCESS));
        } catch (t) {
            (0, T.$e)(e, !1), (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.PTPbjx), c.ToastType.FAILURE));
        }
    }
    return (0, l.jsxs)(c.W1t, {
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: o,
        onSelect: s,
        children: [
            (0, l.jsxs)(c.rXV, {
                children: [
                    r &&
                        (0, l.jsx)(
                            c.Drp,
                            {
                                label: v.intl.string(v.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: c.TdU,
                                action: m,
                            },
                            "media-viewer-copy-image",
                        ),
                    a &&
                        (0, l.jsx)(
                            c.Drp,
                            {
                                id: "media-viewer-copy-link",
                                label: v.intl.string(v.t.WqhZss),
                                icon: c.qYV,
                                action: function () {
                                    (0, T.Yq)(T.NJ.COPY_LINK_PRESSED);
                                    let e = (0, b.XW)(
                                        (0, b.bc)(i.original, i.url),
                                        i.contentType,
                                        i.originalContentType,
                                    );
                                    (0, y.C)(
                                        e,
                                        () => {
                                            (0, T.C9)(e, !0),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(
                                                        v.intl.string(v.t["L/PwZf"]),
                                                        c.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            (0, T.C9)(e, !1),
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
    let r = i.useCallback((e) => {
        (0, y.C)(e, () =>
            (0, c.showToast)({
                message: v.intl.string(v.t.mGZ66D),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (i) =>
        null != i
            ? (0, l.jsx)(
                  c.Drp,
                  I(
                      {
                          action: () => r(i),
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

function G(e) {
    var t, n;
    let { item: r } = e,
        a = i.useRef(null),
        [o, s] = i.useState(!1),
        u = m.Q_.useSetting(),
        d = "IMAGE" === r.type,
        p = null == r.children,
        f = !r.animated,
        O = (0, b.PK)(r.url, r.contentType, r.originalContentType),
        y = d && p && f && O,
        E = (0, b.fW)(r.url);
    return u ||
        y ||
        E ||
        (null == (n = r.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, l.jsx)(c.YNO, {
              targetElementRef: a,
              shouldShow: o,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.YNO.Animation.NONE,
              renderPopout: () =>
                  (0, l.jsx)(M, {
                      item: r,
                      canCopyImage: y,
                      canCopyLink: E,
                      onClose: () => s(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, l.jsx)(N, {
                      buttonRef: a,
                      tooltipText: v.intl.string(v.t["UKOtz+"]),
                      onClick: () => {
                          (0, T.Yq)(T.NJ.MORE_BUTTON_PRESSED), s(!o);
                      },
                      icon: c.jNK,
                  });
              },
          })
        : null;
}
let U = i.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        r = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled),
        s = i.useRef(null),
        c = i.useCallback(() => {
            var e;
            !r &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [r]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, l.jsx)(j.Ay, {
            mode: j.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, l.jsxs)("div", {
                    ref: s,
                    className: a()(C.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, l.jsx)(D, {}),
                        !n &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(R, {
                                        item: t,
                                    }),
                                    (0, l.jsx)(P, {
                                        item: t,
                                    }),
                                    (0, l.jsx)(w, {
                                        item: t,
                                    }),
                                    (0, l.jsx)(G, {
                                        item: t,
                                    }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
