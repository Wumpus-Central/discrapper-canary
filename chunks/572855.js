n.d(t, {
    A: () => G,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(990078),
    c = n(397927),
    u = n(775602),
    d = n(50268),
    p = n(843626),
    f = n(294454),
    m = n(803316),
    O = n(465856),
    b = n(253932),
    y = n(957565),
    g = n(255438),
    E = n(307600),
    _ = n(723702),
    h = n(837921),
    S = n(700331),
    A = n(454290),
    j = n(358731),
    v = n(256905),
    T = n(985018),
    w = n(256863);

function C(e) {
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

function P() {
    (0, c.OoC)(v.K);
}

function D(e) {
    let { tooltipText: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["tooltipText"]);
    return (0, r.jsx)(s.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, r.jsx)(
            c.K0,
            C(
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

function I() {
    let { zoomed: e, setZoomed: t } = (0, A.Q)();
    return (0, r.jsx)(D, {
        onClick: () => {
            S.l.markActionPerformed(e ? S.N.ZOOM_OUT_BUTTON_PRESSED : S.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? T.intl.string(T.t.vOFof8) : T.intl.string(T.t.Kt4gZ6),
        icon: e ? c.V0_ : c.r1u,
    });
}

function R(e) {
    var t, n;
    let { item: l } = e,
        a = null == (t = l.sourceMetadata) ? void 0 : t.message,
        o = null == (n = l.sourceMetadata) ? void 0 : n.identifier,
        s = i.useCallback(() => {
            if (null != a && null != o) {
                if ((S.l.markActionPerformed(S.N.FORWARD_PRESSED), "embed" === o.type))
                    return void (0, f.fO)({
                        message: a,
                        source: "media-viewer",
                        forwardOptions: {
                            onlyEmbedIndices: [o.embedIndex],
                        },
                        onRequestSent: P,
                    });
                (0, f.fO)({
                    message: a,
                    source: "media-viewer",
                    forwardOptions: {
                        onlyAttachmentIds: [o.attachmentId],
                    },
                    onRequestSent: P,
                });
            }
        }, [a, o]);
    return null != a && null != o && (0, p.p)(a)
        ? (0, r.jsx)(D, {
              onClick: s,
              tooltipText: T.intl.string(T.t.I3ltXO),
              icon: c.tuI,
          })
        : null;
}

function N(e) {
    let { item: t } = e,
        [n, l] = i.useState(!1),
        a = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        s = null != t.children,
        u = (0, m.e7)((0, m.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(a || (_.isPlatformEmbedded && !s && o && u))) return null;
    let d = (0, m.XW)((0, m.bc)(t.original, t.url), t.contentType, t.originalContentType, m.N7);
    async function p() {
        if (
            (S.l.markActionPerformed(S.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type &&
                (0, E.h)({
                    href: d,
                }),
            "IMAGE" === t.type)
        ) {
            l(!0);
            try {
                let e = await h.Ay.saveImage(d, t.contentType, m.N7);
                if (e === h._0.ERRORED) throw Error("DesktopNativeUtils.saveImage errored for ".concat(d));
                e === h._0.SAVED &&
                    (S.l.trackMediaViewerImageSaved({
                        url: d,
                        success: !0,
                    }),
                    (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.cqpdJW), c.ToastType.SUCCESS)));
            } catch (e) {
                S.l.trackMediaViewerImageSaved({
                    url: d,
                    success: !1,
                }),
                    (0, c.showToast)((0, c.createToast)(T.intl.string(T.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, r.jsx)(D, {
        onClick: p,
        tooltipText: T.intl.string("VIDEO" === t.type ? T.t.JVuuz3 : T.t["S/xNKV"]),
        loading: n,
        icon: c.s3U,
    });
}

function x(e) {
    let { item: t } = e;
    if (!(0, m.fW)(t.url)) return null;
    let n = (0, m.XW)((0, m.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, r.jsx)(D, {
        onClick: () => {
            S.l.markActionPerformed(S.N.OPEN_LINK_PRESSED),
                S.l.trackMediaViewerLinkOpened({
                    href: n,
                }),
                (0, E.h)({
                    href: n,
                });
        },
        tooltipText: T.intl.string(T.t.q5jLJB),
        icon: c.tfB,
    });
}

function M(e) {
    var t, n;
    let { item: i, canCopyImage: l, canCopyLink: a, onClose: o, onSelect: s } = e,
        u =
            (null == (n = i.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
                ? i.sourceMetadata.identifier.attachmentId
                : null,
        p = (0, d.A)({
            id: u,
            label: T.intl.string(T.t.nwg3lR),
        }),
        f = (function (e) {
            var t;
            let { alt: n, sourceMetadata: i, width: l, height: a } = e,
                o = L(T.intl.string(T.t.ILJuBq), "name", {
                    subtextLineClamp: 1,
                }),
                s = L(T.intl.string(T.t["3Nf9u2"]), "size"),
                u = L(T.intl.string(T.t.eOB2eR), "alt", {
                    subtextLineClamp: 2,
                });
            if ((null == i || null == (t = i.identifier) ? void 0 : t.type) !== "attachment") return null;
            let d = (0, O.A)(i.identifier),
                p = (0, g.Xq)(i.identifier.size / 1e3);
            return (0, r.jsxs)(
                c.Drp,
                {
                    id: "media-viewer-details",
                    label: T.intl.string(T.t.sqBLa9),
                    children: [
                        o(d),
                        s(
                            T.intl.formatToPlainString(T.t.DTdonA, {
                                width: l,
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
    async function b() {
        S.l.markActionPerformed(S.N.COPY_IMAGE_PRESSED);
        let e = (0, m.XW)((0, m.bc)(i.original, i.url), i.contentType, i.originalContentType, m.N7);
        try {
            var t;
            await h.Ay.copyImage(e, null != (t = i.originalContentType) ? t : i.contentType),
                S.l.trackMediaViewerImageCopied({
                    url: e,
                    success: !0,
                }),
                (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.bhUpvC), c.ToastType.SUCCESS));
        } catch (t) {
            S.l.trackMediaViewerImageCopied({
                url: e,
                success: !1,
            }),
                (0, c.showToast)((0, c.createToast)(T.intl.string(T.t.PTPbjx), c.ToastType.FAILURE));
        }
    }
    return (0, r.jsxs)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: o,
        onSelect: s,
        children: [
            (0, r.jsxs)(c.rXV, {
                children: [
                    l &&
                        (0, r.jsx)(
                            c.Drp,
                            {
                                label: T.intl.string(T.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: c.TdU,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: c.TdU,
                                },
                                action: b,
                            },
                            "media-viewer-copy-image",
                        ),
                    a &&
                        (0, r.jsx)(
                            c.Drp,
                            {
                                id: "media-viewer-copy-link",
                                label: T.intl.string(T.t.WqhZss),
                                icon: c.qYV,
                                leadingAccessory: {
                                    type: "icon",
                                    icon: c.qYV,
                                },
                                action: function () {
                                    S.l.markActionPerformed(S.N.COPY_LINK_PRESSED);
                                    let e = (0, m.XW)(
                                        (0, m.bc)(i.original, i.url),
                                        i.contentType,
                                        i.originalContentType,
                                    );
                                    (0, y.C)(
                                        e,
                                        () => {
                                            S.l.trackMediaViewerLinkCopied({
                                                href: e,
                                                success: !0,
                                            }),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(
                                                        T.intl.string(T.t["L/PwZf"]),
                                                        c.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            S.l.trackMediaViewerLinkCopied({
                                                href: e,
                                                success: !1,
                                            }),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(T.intl.string(T.t.uVV00B), c.ToastType.FAILURE),
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
    let l = i.useCallback((e) => {
        (0, y.C)(e, () =>
            (0, c.showToast)({
                message: T.intl.string(T.t.mGZ66D),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (i) =>
        null != i
            ? (0, r.jsx)(
                  c.Drp,
                  C(
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

function k(e) {
    var t, n;
    let { item: l } = e,
        a = i.useRef(null),
        [o, s] = i.useState(!1),
        u = b.Q_.useSetting(),
        d = "IMAGE" === l.type,
        p = null == l.children,
        f = !l.animated,
        O = (0, m.PK)(l.url, l.contentType, l.originalContentType),
        y = d && p && f && O,
        g = (0, m.fW)(l.url);
    return u ||
        y ||
        g ||
        (null == (n = l.sourceMetadata) || null == (t = n.identifier) ? void 0 : t.type) === "attachment"
        ? (0, r.jsx)(c.YNO, {
              targetElementRef: a,
              shouldShow: o,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.YNO.Animation.NONE,
              renderPopout: () =>
                  (0, r.jsx)(M, {
                      item: l,
                      canCopyImage: y,
                      canCopyLink: g,
                      onClose: () => s(!1),
                  }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(D, {
                      buttonRef: a,
                      tooltipText: T.intl.string(T.t["UKOtz+"]),
                      onClick: () => {
                          S.l.markActionPerformed(S.N.MORE_BUTTON_PRESSED), s(!o);
                      },
                      icon: c.jNK,
                  });
              },
          })
        : null;
}
let G = i.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        l = (0, o.bG)([u.A], () => u.A.keyboardModeEnabled),
        s = i.useRef(null),
        c = i.useCallback(() => {
            var e;
            !l &&
                (null == (e = s.current) ? void 0 : e.contains(document.activeElement)) &&
                document.activeElement.blur();
        }, [l]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, r.jsx)(j.Ay, {
            mode: j.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, r.jsxs)("div", {
                    ref: s,
                    className: a()(w.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, r.jsx)(I, {}),
                        !n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(R, {
                                        item: t,
                                    }),
                                    (0, r.jsx)(N, {
                                        item: t,
                                    }),
                                    (0, r.jsx)(x, {
                                        item: t,
                                    }),
                                    (0, r.jsx)(k, {
                                        item: t,
                                    }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
