a.d(t, { A: () => k });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(311907),
    o = a(990078),
    c = a(397927),
    d = a(775602),
    u = a(50268),
    m = a(843626),
    _ = a(294454),
    p = a(803316),
    A = a(465856),
    h = a(253932),
    g = a(957565),
    E = a(255438),
    T = a(307600),
    S = a(723702),
    f = a(837921),
    C = a(700331),
    y = a(454290),
    I = a(358731),
    x = a(256905),
    M = a(985018),
    O = a(930521);
function N() {
    (0, c.OoC)(x.K);
}
function b(e) {
    let { tooltipText: t, ...a } = e;
    return (0, n.jsx)(o.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, n.jsx)(c.K0, { variant: "icon-only", "aria-label": t, size: "sm", ...a }),
    });
}
function R() {
    let { zoomed: e, setZoomed: t } = (0, y.Q)();
    return (0, n.jsx)(b, {
        onClick: () => {
            C.l.markActionPerformed(e ? C.N.ZOOM_OUT_BUTTON_PRESSED : C.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? M.intl.string(M.t.vOFof8) : M.intl.string(M.t.Kt4gZ6),
        icon: e ? c.V0_ : c.r1u,
    });
}
function v(e) {
    let { item: t } = e,
        a = t.sourceMetadata?.message,
        l = t.sourceMetadata?.identifier,
        s = i.useCallback(() => {
            if (null != a && null != l) {
                if ((C.l.markActionPerformed(C.N.FORWARD_PRESSED), "embed" === l.type))
                    return void (0, _.fO)({
                        message: a,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                        onRequestSent: N,
                    });
                (0, _.fO)({
                    message: a,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
                    onRequestSent: N,
                });
            }
        }, [a, l]);
    return null != a && null != l && (0, m.p)(a)
        ? (0, n.jsx)(b, { onClick: s, tooltipText: M.intl.string(M.t.I3ltXO), icon: c.tuI })
        : null;
}
function D(e) {
    let { item: t } = e,
        [a, l] = i.useState(!1),
        s = "VIDEO" === t.type,
        r = "IMAGE" === t.type,
        o = null != t.children,
        d = (0, p.e7)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(s || (S.isPlatformEmbedded && !o && r && d))) return null;
    let u = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
    async function m() {
        if (
            (C.l.markActionPerformed(C.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, T.h)({ href: u }),
            "IMAGE" === t.type)
        ) {
            l(!0);
            try {
                let e = await f.Ay.saveImage(u, t.contentType, p.N7);
                if (e === f._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${u}`);
                e === f._0.SAVED &&
                    (C.l.trackMediaViewerImageSaved({ url: u, success: !0 }),
                    (0, c.showToast)((0, c.createToast)(M.intl.string(M.t.cqpdJW), c.ToastType.SUCCESS)));
            } catch (e) {
                C.l.trackMediaViewerImageSaved({ url: u, success: !1 }),
                    (0, c.showToast)((0, c.createToast)(M.intl.string(M.t["8Ve/S0"]), c.ToastType.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, n.jsx)(b, {
        onClick: m,
        tooltipText: M.intl.string("VIDEO" === t.type ? M.t.JVuuz3 : M.t["S/xNKV"]),
        loading: a,
        icon: c.s3U,
    });
}
function j(e) {
    let { item: t } = e;
    if (!(0, p.fW)(t.url)) return null;
    let a = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, n.jsx)(b, {
        onClick: () => {
            C.l.markActionPerformed(C.N.OPEN_LINK_PRESSED),
                C.l.trackMediaViewerLinkOpened({ href: a }),
                (0, T.h)({ href: a });
        },
        tooltipText: M.intl.string(M.t.q5jLJB),
        icon: c.tfB,
    });
}
function w(e) {
    let { item: t, canCopyImage: a, canCopyLink: i, onClose: l, onSelect: s } = e,
        r = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        o = (0, u.A)({ id: r, label: M.intl.string(M.t.nwg3lR) }),
        d = (function (e) {
            let { alt: t, sourceMetadata: a, width: i, height: l } = e,
                s = L(M.intl.string(M.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                r = L(M.intl.string(M.t["3Nf9u2"]), "size"),
                o = L(M.intl.string(M.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (a?.identifier?.type !== "attachment") return null;
            let d = (0, A.A)(a.identifier),
                u = (0, E.Xq)(a.identifier.size / 1e3);
            return (0, n.jsxs)(
                c.Drp,
                {
                    id: "media-viewer-details",
                    label: M.intl.string(M.t.sqBLa9),
                    children: [
                        s(d),
                        r(M.intl.formatToPlainString(M.t.DTdonA, { width: i, height: l, fileSize: u })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t);
    async function m() {
        C.l.markActionPerformed(C.N.COPY_IMAGE_PRESSED);
        let e = (0, p.XW)((0, p.bc)(t.original, t.url), t.contentType, t.originalContentType, p.N7);
        try {
            await f.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                C.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                (0, c.showToast)((0, c.createToast)(M.intl.string(M.t.bhUpvC), c.ToastType.SUCCESS));
        } catch (t) {
            C.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                (0, c.showToast)((0, c.createToast)(M.intl.string(M.t.PTPbjx), c.ToastType.FAILURE));
        }
    }
    return (0, n.jsxs)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: l,
        onSelect: s,
        children: [
            (0, n.jsxs)(c.rXV, {
                children: [
                    a &&
                        (0, n.jsx)(
                            c.Drp,
                            {
                                label: M.intl.string(M.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: c.TdU,
                                leadingAccessory: { type: "icon", icon: c.TdU },
                                action: m,
                            },
                            "media-viewer-copy-image",
                        ),
                    i &&
                        (0, n.jsx)(
                            c.Drp,
                            {
                                id: "media-viewer-copy-link",
                                label: M.intl.string(M.t["92CPQ+"]),
                                icon: c.qYV,
                                leadingAccessory: { type: "icon", icon: c.qYV },
                                action: function () {
                                    C.l.markActionPerformed(C.N.COPY_LINK_PRESSED);
                                    let e = (0, p.XW)(
                                        (0, p.bc)(t.original, t.url),
                                        t.contentType,
                                        t.originalContentType,
                                    );
                                    (0, g.C)(
                                        e,
                                        () => {
                                            C.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(
                                                        M.intl.string(M.t["L/PwZf"]),
                                                        c.ToastType.SUCCESS,
                                                    ),
                                                );
                                        },
                                        () => {
                                            C.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, c.showToast)(
                                                    (0, c.createToast)(M.intl.string(M.t.uVV00B), c.ToastType.FAILURE),
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
function L(e, t, a) {
    let l = i.useCallback((e) => {
        (0, g.C)(e, () =>
            (0, c.showToast)({
                message: M.intl.string(M.t.mGZ66D),
                type: c.ToastType.SUCCESS,
                id: "media-viewer-detail-copied",
            }),
        );
    }, []);
    return (i) => (null != i ? (0, n.jsx)(c.Drp, { action: () => l(i), label: e, subtext: i, id: t, ...a }, t) : null);
}
function P(e) {
    let { item: t } = e,
        a = i.useRef(null),
        [l, s] = i.useState(!1),
        r = h.Q_.useSetting(),
        o = "IMAGE" === t.type,
        d = null == t.children,
        u = !t.animated,
        m = (0, p.PK)(t.url, t.contentType, t.originalContentType),
        _ = o && d && u && m,
        A = (0, p.fW)(t.url);
    return r || _ || A || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, n.jsx)(c.YNO, {
              targetElementRef: a,
              shouldShow: l,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => s(!1),
              animation: c.YNO.Animation.NONE,
              renderPopout: () => (0, n.jsx)(w, { item: t, canCopyImage: _, canCopyLink: A, onClose: () => s(!1) }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, n.jsx)(b, {
                      buttonRef: a,
                      tooltipText: M.intl.string(M.t["UKOtz+"]),
                      onClick: () => {
                          C.l.markActionPerformed(C.N.MORE_BUTTON_PRESSED), s(!l);
                      },
                      icon: c.jNK,
                  });
              },
          })
        : null;
}
let k = i.memo(function (e) {
    let { item: t, hideMediaOptions: a } = e,
        l = (0, r.bG)([d.A], () => d.A.keyboardModeEnabled),
        o = i.useRef(null),
        c = i.useCallback(() => {
            !l && o.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [l]);
    return (
        ("IMAGE" === t.type || !a) &&
        (0, n.jsx)(I.Ay, {
            mode: I.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, n.jsxs)("div", {
                    ref: o,
                    className: s()(O.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, n.jsx)(R, {}),
                        !a &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(v, { item: t }),
                                    (0, n.jsx)(D, { item: t }),
                                    (0, n.jsx)(j, { item: t }),
                                    (0, n.jsx)(P, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
