n.d(t, { A: () => Y });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(990078),
    c = n(192308),
    d = n(408278),
    u = n(92259),
    m = n(218429),
    p = n(292801),
    _ = n(691540),
    A = n(857250),
    h = n(97483),
    g = n(32880),
    f = n(811893),
    E = n(861672),
    C = n(477782),
    I = n(624479),
    S = n(173936),
    y = n(265872),
    x = n(365199),
    T = n(775602),
    v = n(50268),
    b = n(843626),
    M = n(294454),
    N = n(803316),
    O = n(465856),
    R = n(253932),
    j = n(957565),
    D = n(255438),
    L = n(307600),
    w = n(723702),
    P = n(837921),
    k = n(700331),
    U = n(454290),
    G = n(358731),
    V = n(256905),
    F = n(985018),
    B = n(517420);
function H() {
    (0, c.closeModal)(V.K);
}
function z(e) {
    let { tooltipText: t, ...n } = e;
    return (0, a.jsx)(o.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, a.jsx)(d.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function W() {
    let { zoomed: e, setZoomed: t } = (0, U.Q)();
    return (0, a.jsx)(z, {
        onClick: () => {
            k.l.markActionPerformed(e ? k.N.ZOOM_OUT_BUTTON_PRESSED : k.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? F.intl.string(F.t.vOFof8) : F.intl.string(F.t.Kt4gZ6),
        icon: e ? u.V : m.r,
    });
}
function K(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        l = t.sourceMetadata?.identifier,
        r = i.useCallback(() => {
            if (null != n && null != l) {
                if ((k.l.markActionPerformed(k.N.FORWARD_PRESSED), "embed" === l.type))
                    return void (0, M.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                        onRequestSent: H,
                    });
                (0, M.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
                    onRequestSent: H,
                });
            }
        }, [n, l]);
    return null != n && null != l && (0, b.p)(n)
        ? (0, a.jsx)(z, { onClick: r, tooltipText: F.intl.string(F.t.I3ltXO), icon: p.t })
        : null;
}
function Z(e) {
    let { item: t } = e,
        [n, l] = i.useState(!1),
        r = "VIDEO" === t.type,
        s = "IMAGE" === t.type,
        o = null != t.children,
        c = (0, N.e7)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(r || (w.isPlatformEmbedded && !o && s && c))) return null;
    let d = (0, N.XW)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType, N.N7);
    async function u() {
        if (
            (k.l.markActionPerformed(k.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, L.h)({ href: d }),
            "IMAGE" === t.type)
        ) {
            l(!0);
            try {
                let e = await P.Ay.saveImage(d, t.contentType, N.N7);
                if (e === P._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${d}`);
                e === P._0.SAVED &&
                    (k.l.trackMediaViewerImageSaved({ url: d, success: !0 }),
                    (0, _.P0)((0, A.o)(F.intl.string(F.t.cqpdJW), h.Ck.SUCCESS)));
            } catch (e) {
                k.l.trackMediaViewerImageSaved({ url: d, success: !1 }),
                    (0, _.P0)((0, A.o)(F.intl.string(F.t["8Ve/S0"]), h.Ck.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, a.jsx)(z, {
        onClick: u,
        tooltipText: F.intl.string("VIDEO" === t.type ? F.t.JVuuz3 : F.t["S/xNKV"]),
        loading: n,
        icon: g.s,
    });
}
function X(e) {
    let { item: t } = e;
    if (!(0, N.fW)(t.url)) return null;
    let n = (0, N.XW)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, a.jsx)(z, {
        onClick: () => {
            k.l.markActionPerformed(k.N.OPEN_LINK_PRESSED),
                k.l.trackMediaViewerLinkOpened({ href: n }),
                (0, L.h)({ href: n });
        },
        tooltipText: F.intl.string(F.t.q5jLJB),
        icon: f.t,
    });
}
function J(e) {
    let { item: t, canCopyImage: n, canCopyLink: i, onClose: l, onSelect: r } = e,
        s = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        o = (0, v.A)({ id: s, label: F.intl.string(F.t.nwg3lR) }),
        c = (function (e) {
            let { alt: t, sourceMetadata: n, width: i, height: l } = e,
                r = $(F.intl.string(F.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = $(F.intl.string(F.t["3Nf9u2"]), "size"),
                o = $(F.intl.string(F.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, O.A)(n.identifier),
                d = (0, D.Xq)(n.identifier.size / 1e3);
            return (0, a.jsxs)(
                C.Dr,
                {
                    id: "media-viewer-details",
                    label: F.intl.string(F.t.sqBLa9),
                    children: [
                        r(c),
                        s(F.intl.formatToPlainString(F.t.DTdonA, { width: i, height: l, fileSize: d })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t);
    async function d() {
        k.l.markActionPerformed(k.N.COPY_IMAGE_PRESSED);
        let e = (0, N.XW)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType, N.N7);
        try {
            await P.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                k.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                (0, _.P0)((0, A.o)(F.intl.string(F.t.bhUpvC), h.Ck.SUCCESS));
        } catch (t) {
            k.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                (0, _.P0)((0, A.o)(F.intl.string(F.t.PTPbjx), h.Ck.FAILURE));
        }
    }
    return (0, a.jsxs)(E.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: l,
        onSelect: r,
        children: [
            (0, a.jsxs)(C.rX, {
                children: [
                    n &&
                        (0, a.jsx)(
                            C.Dr,
                            {
                                label: F.intl.string(F.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: I.T,
                                leadingAccessory: { type: "icon", icon: I.T },
                                action: d,
                            },
                            "media-viewer-copy-image",
                        ),
                    i &&
                        (0, a.jsx)(
                            C.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: F.intl.string(F.t["92CPQ+"]),
                                icon: S.q,
                                leadingAccessory: { type: "icon", icon: S.q },
                                action: function () {
                                    k.l.markActionPerformed(k.N.COPY_LINK_PRESSED);
                                    let e = (0, N.XW)(
                                        (0, N.bc)(t.original, t.url),
                                        t.contentType,
                                        t.originalContentType,
                                    );
                                    (0, j.C)(
                                        e,
                                        () => {
                                            k.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, _.P0)((0, A.o)(F.intl.string(F.t["L/PwZf"]), h.Ck.SUCCESS));
                                        },
                                        () => {
                                            k.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, _.P0)((0, A.o)(F.intl.string(F.t.uVV00B), h.Ck.FAILURE));
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            }),
            c,
            o,
        ],
    });
}
function $(e, t, n) {
    let l = i.useCallback((e) => {
        (0, j.C)(e, () =>
            (0, _.P0)({ message: F.intl.string(F.t.mGZ66D), type: h.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (i) => (null != i ? (0, a.jsx)(C.Dr, { action: () => l(i), label: e, subtext: i, id: t, ...n }, t) : null);
}
function q(e) {
    let { item: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1),
        s = R.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        d = !t.animated,
        u = (0, N.PK)(t.url, t.contentType, t.originalContentType),
        m = o && c && d && u,
        p = (0, N.fW)(t.url);
    return s || m || p || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, a.jsx)(y.Y, {
              targetElementRef: n,
              shouldShow: l,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: y.Y.Animation.NONE,
              renderPopout: () => (0, a.jsx)(J, { item: t, canCopyImage: m, canCopyLink: p, onClose: () => r(!1) }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(z, {
                      buttonRef: n,
                      tooltipText: F.intl.string(F.t["UKOtz+"]),
                      onClick: () => {
                          k.l.markActionPerformed(k.N.MORE_BUTTON_PRESSED), r(!l);
                      },
                      icon: x.j,
                  });
              },
          })
        : null;
}
let Y = i.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        l = (0, s.bG)([T.A], () => T.A.keyboardModeEnabled),
        o = i.useRef(null),
        c = i.useCallback(() => {
            !l && o.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [l]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, a.jsx)(G.Ay, {
            mode: G.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, a.jsxs)("div", {
                    ref: o,
                    className: r()(B.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, a.jsx)(W, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(K, { item: t }),
                                    (0, a.jsx)(Z, { item: t }),
                                    (0, a.jsx)(X, { item: t }),
                                    (0, a.jsx)(q, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
