"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(990078),
    c = n(192308),
    u = n(408278),
    d = n(92259),
    _ = n(218429),
    p = n(292801),
    m = n(691540),
    A = n(857250),
    h = n(97483),
    f = n(32880),
    g = n(811893),
    E = n(861672),
    I = n(477782),
    v = n(624479),
    T = n(173936),
    S = n(265872),
    C = n(365199),
    b = n(775602),
    x = n(50268),
    y = n(843626),
    R = n(294454),
    N = n(803316),
    L = n(465856),
    O = n(253932),
    M = n(957565),
    w = n(255438),
    D = n(307600),
    P = n(723702),
    j = n(837921),
    F = n(700331),
    U = n(454290),
    k = n(358731),
    G = n(256905),
    V = n(985018),
    B = n(517420);
function H() {
    (0, c.closeModal)(G.K);
}
function W(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(o.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(u.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function Z() {
    let { zoomed: e, setZoomed: t } = (0, U.Q)();
    return (0, i.jsx)(W, {
        onClick: () => {
            F.l.markActionPerformed(e ? F.N.ZOOM_OUT_BUTTON_PRESSED : F.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? V.intl.string(V.t.vOFof8) : V.intl.string(V.t.Kt4gZ6),
        icon: e ? d.V : _.r,
    });
}
function $(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        r = t.sourceMetadata?.identifier,
        l = a.useCallback(() => {
            if (null != n && null != r) {
                if ((F.l.markActionPerformed(F.N.FORWARD_PRESSED), "embed" === r.type))
                    return void (0, R.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [r.embedIndex] },
                        onRequestSent: H,
                    });
                (0, R.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [r.attachmentId] },
                    onRequestSent: H,
                });
            }
        }, [n, r]);
    return null != n && null != r && (0, y.p)(n)
        ? (0, i.jsx)(W, { onClick: l, tooltipText: V.intl.string(V.t.I3ltXO), icon: p.t })
        : null;
}
function z(e) {
    let { item: t } = e,
        [n, r] = a.useState(!1),
        l = "VIDEO" === t.type,
        s = "IMAGE" === t.type,
        o = null != t.children,
        c = (0, N.e7)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(l || (P.isPlatformEmbedded && !o && s && c))) return null;
    let u = (0, N.XW)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType, N.N7);
    async function d() {
        if (
            (F.l.markActionPerformed(F.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, D.h)({ href: u }),
            "IMAGE" === t.type)
        ) {
            r(!0);
            try {
                let e = await j.Ay.saveImage(u, t.contentType, N.N7);
                if (e === j._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${u}`);
                e === j._0.SAVED &&
                    (F.l.trackMediaViewerImageSaved({ url: u, success: !0 }),
                    (0, m.P0)((0, A.o)(V.intl.string(V.t.cqpdJW), h.Ck.SUCCESS)));
            } catch (e) {
                F.l.trackMediaViewerImageSaved({ url: u, success: !1 }),
                    (0, m.P0)((0, A.o)(V.intl.string(V.t["8Ve/S0"]), h.Ck.FAILURE));
            } finally {
                r(!1);
            }
        }
    }
    return (0, i.jsx)(W, {
        onClick: d,
        tooltipText: V.intl.string("VIDEO" === t.type ? V.t.JVuuz3 : V.t["S/xNKV"]),
        loading: n,
        icon: f.s,
    });
}
function J(e) {
    let { item: t } = e;
    if (!(0, N.fW)(t.url)) return null;
    let n = (0, N.XW)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(W, {
        onClick: () => {
            F.l.markActionPerformed(F.N.OPEN_LINK_PRESSED),
                F.l.trackMediaViewerLinkOpened({ href: n }),
                (0, D.h)({ href: n });
        },
        tooltipText: V.intl.string(V.t.q5jLJB),
        icon: g.t,
    });
}
function Y(e) {
    let { item: t, canCopyImage: n, canCopyLink: a, onClose: r, onSelect: l } = e,
        s = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        o = (0, x.A)({ id: s, label: V.intl.string(V.t.nwg3lR) }),
        c = (function (e) {
            let { alt: t, sourceMetadata: n, width: a, height: r } = e,
                l = K(V.intl.string(V.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = K(V.intl.string(V.t["3Nf9u2"]), "size"),
                o = K(V.intl.string(V.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, L.A)(n.identifier),
                u = (0, w.Xq)(n.identifier.size / 1e3);
            return (0, i.jsxs)(
                I.Dr,
                {
                    id: "media-viewer-details",
                    label: V.intl.string(V.t.sqBLa9),
                    children: [
                        l(c),
                        s(V.intl.formatToPlainString(V.t.DTdonA, { width: a, height: r, fileSize: u })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t);
    async function u() {
        F.l.markActionPerformed(F.N.COPY_IMAGE_PRESSED);
        let e = (0, N.XW)((0, N.bc)(t.original, t.url), t.contentType, t.originalContentType, N.N7);
        try {
            await j.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                F.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                (0, m.P0)((0, A.o)(V.intl.string(V.t.bhUpvC), h.Ck.SUCCESS));
        } catch (t) {
            F.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                (0, m.P0)((0, A.o)(V.intl.string(V.t.PTPbjx), h.Ck.FAILURE));
        }
    }
    return (0, i.jsxs)(E.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: r,
        onSelect: l,
        children: [
            (0, i.jsxs)(I.rX, {
                children: [
                    n &&
                        (0, i.jsx)(
                            I.Dr,
                            {
                                label: V.intl.string(V.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: v.T,
                                leadingAccessory: { type: "icon", icon: v.T },
                                action: u,
                            },
                            "media-viewer-copy-image",
                        ),
                    a &&
                        (0, i.jsx)(
                            I.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: V.intl.string(V.t["92CPQ+"]),
                                icon: T.q,
                                leadingAccessory: { type: "icon", icon: T.q },
                                action: function () {
                                    F.l.markActionPerformed(F.N.COPY_LINK_PRESSED);
                                    let e = (0, N.XW)(
                                        (0, N.bc)(t.original, t.url),
                                        t.contentType,
                                        t.originalContentType,
                                    );
                                    (0, M.C)(
                                        e,
                                        () => {
                                            F.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, m.P0)((0, A.o)(V.intl.string(V.t["L/PwZf"]), h.Ck.SUCCESS));
                                        },
                                        () => {
                                            F.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, m.P0)((0, A.o)(V.intl.string(V.t.uVV00B), h.Ck.FAILURE));
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
function K(e, t, n) {
    let r = a.useCallback((e) => {
        (0, M.C)(e, () =>
            (0, m.P0)({ message: V.intl.string(V.t.mGZ66D), type: h.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (a) => (null != a ? (0, i.jsx)(I.Dr, { action: () => r(a), label: e, subtext: a, id: t, ...n }, t) : null);
}
function X(e) {
    let { item: t } = e,
        n = a.useRef(null),
        [r, l] = a.useState(!1),
        s = O.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        u = !t.animated,
        d = (0, N.PK)(t.url, t.contentType, t.originalContentType),
        _ = o && c && u && d,
        p = (0, N.fW)(t.url);
    return s || _ || p || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, i.jsx)(S.Y, {
              targetElementRef: n,
              shouldShow: r,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => l(!1),
              animation: S.Y.Animation.NONE,
              renderPopout: () => (0, i.jsx)(Y, { item: t, canCopyImage: _, canCopyLink: p, onClose: () => l(!1) }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(W, {
                      buttonRef: n,
                      tooltipText: V.intl.string(V.t["UKOtz+"]),
                      onClick: () => {
                          F.l.markActionPerformed(F.N.MORE_BUTTON_PRESSED), l(!r);
                      },
                      icon: C.j,
                  });
              },
          })
        : null;
}
let q = a.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        r = (0, s.bG)([b.A], () => b.A.keyboardModeEnabled),
        o = a.useRef(null),
        c = a.useCallback(() => {
            !r && o.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [r]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(k.Ay, {
            mode: k.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(B.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: c,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(Z, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)($, { item: t }),
                                    (0, i.jsx)(z, { item: t }),
                                    (0, i.jsx)(J, { item: t }),
                                    (0, i.jsx)(X, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
