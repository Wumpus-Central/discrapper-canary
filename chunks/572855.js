n.d(t, { A: () => k });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(775602),
    u = n(50268),
    m = n(843626),
    _ = n(294454),
    p = n(803316),
    E = n(465856),
    A = n(253932),
    f = n(957565),
    S = n(255438),
    h = n(307600),
    T = n(723702),
    g = n(837921),
    O = n(700331),
    y = n(454290),
    C = n(358731),
    I = n(256905),
    b = n(985018),
    D = n(256863);
function R() {
    (0, c.OoC)(I.K);
}
function N(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(o.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(c.K0, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function M() {
    let { zoomed: e, setZoomed: t } = (0, y.Q)();
    return (0, i.jsx)(N, {
        onClick: () => {
            O.l.markActionPerformed(e ? O.N.ZOOM_OUT_BUTTON_PRESSED : O.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? b.intl.string(b.t.vOFof8) : b.intl.string(b.t.Kt4gZ6),
        icon: e ? c.V0_ : c.r1u,
    });
}
function x(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        s = t.sourceMetadata?.identifier,
        l = a.useCallback(() => {
            if (null != n && null != s) {
                if ((O.l.markActionPerformed(O.N.FORWARD_PRESSED), "embed" === s.type))
                    return void (0, _.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [s.embedIndex] },
                        onRequestSent: R,
                    });
                (0, _.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [s.attachmentId] },
                    onRequestSent: R,
                });
            }
        }, [n, s]);
    return null != n && null != s && (0, m.p)(n)
        ? (0, i.jsx)(N, { onClick: l, tooltipText: b.intl.string(b.t.I3ltXO), icon: c.tuI })
        : null;
}
function j(e) {
    let { item: t } = e,
        [n, s] = a.useState(!1),
        l = "VIDEO" === t.type,
        r = "IMAGE" === t.type,
        o = null != t.children,
        d = (0, p.e7)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(l || (T.isPlatformEmbedded && !o && r && d))) return null;
    let u = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
    async function m() {
        if (
            (O.l.markActionPerformed(O.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, h.h)({ href: u }),
            "IMAGE" === t.type)
        ) {
            s(!0);
            try {
                let e = await g.Ay.saveImage(u, t.contentType, p.N7);
                if (e === g._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${u}`);
                e === g._0.SAVED &&
                    (O.l.trackMediaViewerImageSaved({ url: u, success: !0 }),
                    (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.cqpdJW), c.ToastType.SUCCESS)));
            } catch (e) {
                O.l.trackMediaViewerImageSaved({ url: u, success: !1 }),
                    (0, c.showToast)((0, c.createToast)(b.intl.string(b.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                s(!1);
            }
        }
    }
    return (0, i.jsx)(N, {
        onClick: m,
        tooltipText: b.intl.string("VIDEO" === t.type ? b.t.JVuuz3 : b.t["S/xNKV"]),
        loading: n,
        icon: c.s3U,
    });
}
function v(e) {
    let { item: t } = e;
    if (!(0, p.fW)(t.url)) return null;
    let n = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(N, {
        onClick: () => {
            O.l.markActionPerformed(O.N.OPEN_LINK_PRESSED),
                O.l.trackMediaViewerLinkOpened({ href: n }),
                (0, h.h)({ href: n });
        },
        tooltipText: b.intl.string(b.t.q5jLJB),
        icon: c.tfB,
    });
}
function L(e) {
    let { item: t, canCopyImage: n, canCopyLink: a, onClose: s, onSelect: l } = e,
        r = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        o = (0, u.A)({ id: r, label: b.intl.string(b.t.nwg3lR) }),
        d = (function (e) {
            let { alt: t, sourceMetadata: n, width: a, height: s } = e,
                l = w(b.intl.string(b.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                r = w(b.intl.string(b.t["3Nf9u2"]), "size"),
                o = w(b.intl.string(b.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let d = (0, E.A)(n.identifier),
                u = (0, S.Xq)(n.identifier.size / 1e3);
            return (0, i.jsxs)(
                c.Drp,
                {
                    id: "media-viewer-details",
                    label: b.intl.string(b.t.sqBLa9),
                    children: [
                        l(d),
                        r(b.intl.formatToPlainString(b.t.DTdonA, { width: a, height: s, fileSize: u })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t);
    async function m() {
        O.l.markActionPerformed(O.N.COPY_IMAGE_PRESSED);
        let e = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
        try {
            await g.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                O.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.bhUpvC), c.ToastType.SUCCESS));
        } catch (t) {
            O.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                (0, c.showToast)((0, c.createToast)(b.intl.string(b.t.PTPbjx), c.ToastType.FAILURE));
        }
    }
    return (0, i.jsxs)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: s,
        onSelect: l,
        children: [
            (0, i.jsxs)(c.rXV, {
                children: [
                    n &&
                        (0, i.jsx)(
                            c.Drp,
                            {
                                label: b.intl.string(b.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: c.TdU,
                                leadingAccessory: { type: "icon", icon: c.TdU },
                                action: m,
                            },
                            "media-viewer-copy-image",
                        ),
                    a &&
                        (0, i.jsx)(
                            c.Drp,
                            {
                                id: "media-viewer-copy-link",
                                label: b.intl.string(b.t.WqhZss),
                                icon: c.qYV,
                                leadingAccessory: { type: "icon", icon: c.qYV },
                                action: function () {
                                    O.l.markActionPerformed(O.N.COPY_LINK_PRESSED);
                                    let e = (0, p.XW)(
                                        (0, p.bc)(t.original, t.url),
                                        t.contentType,
                                        t.originalContentType,
                                    );
                                    (0, f.C)(
                                        e,
                                        () => {
                                            O.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(
                                                        b.intl.string(b.t["L/PwZf"]),
                                                        c.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            O.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(b.intl.string(b.t.uVV00B), c.ToastType.FAILURE),
                                                );
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            }),
            d,
            o,
        ],
    });
}
function w(e, t, n) {
    let s = a.useCallback((e) => {
        (0, f.C)(e, () =>
            (0, c.showToast)({
                message: b.intl.string(b.t.mGZ66D),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (a) => (null != a ? (0, i.jsx)(c.Drp, { action: () => s(a), label: e, subtext: a, id: t, ...n }, t) : null);
}
function P(e) {
    let { item: t } = e,
        n = a.useRef(null),
        [s, l] = a.useState(!1),
        r = A.Q_.useSetting(),
        o = "IMAGE" === t.type,
        d = null == t.children,
        u = !t.animated,
        m = (0, p.PK)(t.url, t.contentType, t.originalContentType),
        _ = o && d && u && m,
        E = (0, p.fW)(t.url);
    return r || _ || E || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, i.jsx)(c.YNO, {
              targetElementRef: n,
              shouldShow: s,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => l(!1),
              animation: c.YNO.Animation.NONE,
              renderPopout: () => (0, i.jsx)(L, { item: t, canCopyImage: _, canCopyLink: E, onClose: () => l(!1) }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(N, {
                      buttonRef: n,
                      tooltipText: b.intl.string(b.t["UKOtz+"]),
                      onClick: () => {
                          O.l.markActionPerformed(O.N.MORE_BUTTON_PRESSED), l(!s);
                      },
                      icon: c.jNK,
                  });
              },
          })
        : null;
}
let k = a.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        s = (0, r.bG)([d.A], () => d.A.keyboardModeEnabled),
        o = a.useRef(null),
        c = a.useCallback(() => {
            !s && o.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [s]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(C.Ay, {
            mode: C.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(D.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(M, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(x, { item: t }),
                                    (0, i.jsx)(j, { item: t }),
                                    (0, i.jsx)(v, { item: t }),
                                    (0, i.jsx)(P, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
