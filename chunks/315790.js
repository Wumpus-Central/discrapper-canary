n.d(t, { default: () => ek });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(935462),
    o = n(717421),
    c = n(231723),
    d = n(43990),
    u = n(803842),
    m = n(652215);
let p = { [m.IWg.MODAL_CAROUSEL_NEXT]: u.$0, [m.IWg.MODAL_CAROUSEL_PREV]: u.$4, [m.IWg.CLOSE_MODAL]: u.cu },
    f = { [m.IWg.CLOSE_MODAL]: u.cu };
var E = n(775121),
    g = n(775602),
    C = n(625494),
    y = n(700331),
    A = n(454290),
    x = n(836781),
    h = n(17928),
    I = n(778712),
    S = n(346055),
    b = n(789645),
    M = n(966327),
    k = n(427930),
    T = n(386467),
    j = n(606049),
    N = n(943220),
    O = n(734057),
    v = n(935208),
    D = n(192308),
    _ = n(866665),
    P = n(408278),
    R = n(92259),
    L = n(218429),
    w = n(292801),
    V = n(376357),
    U = n(857250),
    W = n(97483),
    G = n(32880),
    X = n(811893),
    q = n(980707),
    z = n(477782),
    B = n(624479),
    F = n(173936),
    K = n(922016),
    Y = n(365199),
    H = n(50268),
    Z = n(843626),
    J = n(294454),
    Q = n(803316),
    $ = n(465856),
    ee = n(885386),
    et = n(957565),
    en = n(255438),
    ei = n(123917),
    el = n(723702),
    ea = n(19575),
    er = n(358731),
    es = n(256905),
    eo = n(375708),
    ec = n(610365);
function ed() {
    (0, D.closeModal)(es.K);
}
function eu(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(_.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(P.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function em() {
    let { zoomed: e, setZoomed: t } = (0, A.Q)();
    return (0, i.jsx)(eu, {
        onClick: () => {
            (y.l.markActionPerformed(e ? y.N.ZOOM_OUT_BUTTON_PRESSED : y.N.ZOOM_IN_BUTTON_PRESSED), t(!e));
        },
        tooltipText: e ? eo.intl.string(eo.t.vOFof8) : eo.intl.string(eo.t.Kt4gZ6),
        icon: e ? R.V : L.r,
    });
}
function ep(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        a = t.sourceMetadata?.identifier,
        r = l.useCallback(() => {
            if (null != n && null != a) {
                if ((y.l.markActionPerformed(y.N.FORWARD_PRESSED), "embed" === a.type))
                    return void (0, J.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [a.embedIndex] },
                        onRequestSent: ed,
                    });
                (0, J.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [a.attachmentId] },
                    onRequestSent: ed,
                });
            }
        }, [n, a]);
    return null != n && null != a && (0, Z.p)(n)
        ? (0, i.jsx)(eu, { onClick: r, tooltipText: eo.intl.string(eo.t.I3ltXO), icon: w.t })
        : null;
}
function ef(e) {
    let { item: t } = e,
        [n, a] = l.useState(!1),
        r = (0, Q.bc)(t.original, t.url),
        s = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        c = null != t.children,
        d = (0, Q.e7)(r, t.contentType, t.originalContentType);
    if (!(s || (el.isPlatformEmbedded && !c && o && d))) return null;
    let u = (0, Q.XW)(r, t.contentType, t.originalContentType, Q.N7);
    async function m() {
        if (
            (y.l.markActionPerformed(y.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, ei.h)({ href: u }),
            "IMAGE" === t.type)
        ) {
            a(!0);
            try {
                let e = await ea.Ay.saveImage(u, t.contentType, Q.N7);
                if (e === ea._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${u}`);
                e === ea._0.SAVED &&
                    (y.l.trackMediaViewerImageSaved({ url: u, success: !0 }),
                    (0, V.P)((0, U.o)(eo.intl.string(eo.t.cqpdJW), W.Ck.SUCCESS)));
            } catch (e) {
                (y.l.trackMediaViewerImageSaved({ url: u, success: !1 }),
                    (0, V.P)((0, U.o)(eo.intl.string(eo.t["8Ve/S0"]), W.Ck.FAILURE)));
            } finally {
                a(!1);
            }
        }
    }
    return (0, i.jsx)(eu, {
        onClick: m,
        tooltipText: eo.intl.string("VIDEO" === t.type ? eo.t.JVuuz3 : eo.t["S/xNKV"]),
        loading: n,
        icon: G.DownloadIcon,
    });
}
function eE(e) {
    let { item: t } = e,
        n = (0, Q.bc)(t.original, t.url);
    if (!(0, Q.fW)(n)) return null;
    let l = (0, Q.XW)(n, t.contentType, t.originalContentType);
    return (0, i.jsx)(eu, {
        onClick: () => {
            (y.l.markActionPerformed(y.N.OPEN_LINK_PRESSED),
                y.l.trackMediaViewerLinkOpened({ href: l }),
                (0, ei.h)({ href: l }));
        },
        tooltipText: eo.intl.string(eo.t.q5jLJB),
        icon: X.t,
    });
}
function eg(e) {
    let { item: t, canCopyImage: n, canCopyLink: l, onClose: a, onSelect: r, src: s } = e,
        o = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        c = (0, H.A)({ id: o, label: eo.intl.string(eo.t.nwg3lR) }),
        d = (function (e) {
            let { alt: t, sourceMetadata: n, width: l, height: a } = e,
                r = eC(eo.intl.string(eo.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = eC(eo.intl.string(eo.t["3Nf9u2"]), "size"),
                o = eC(eo.intl.string(eo.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, $.A)(n.identifier),
                d = (0, en.Xq)(n.identifier.size / 1e3);
            return (0, i.jsxs)(
                z.Dr,
                {
                    id: "media-viewer-details",
                    label: eo.intl.string(eo.t.sqBLa9),
                    children: [
                        r(c),
                        s(eo.intl.formatToPlainString(eo.t.DTdonA, { width: l, height: a, fileSize: d })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t),
        u = (function (e) {
            let { item: t, canCopyImage: n, canCopyLink: l, src: a } = e;
            async function r() {
                y.l.markActionPerformed(y.N.COPY_IMAGE_PRESSED);
                let e = (0, Q.XW)(a, t.contentType, t.originalContentType, Q.N7);
                try {
                    (await ea.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                        y.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                        (0, V.P)((0, U.o)(eo.intl.string(eo.t.bhUpvC), W.Ck.SUCCESS)));
                } catch (t) {
                    (y.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                        (0, V.P)((0, U.o)(eo.intl.string(eo.t.PTPbjx), W.Ck.FAILURE)));
                }
            }
            return (0, i.jsxs)(z.rX, {
                children: [
                    n &&
                        (0, i.jsx)(
                            z.Dr,
                            {
                                label: eo.intl.string(eo.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: B.CopyIcon,
                                leadingAccessory: { type: "icon", icon: B.CopyIcon },
                                action: r,
                            },
                            "media-viewer-copy-image",
                        ),
                    l &&
                        (0, i.jsx)(
                            z.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: eo.intl.string(eo.t["92CPQ+"]),
                                icon: F.LinkIcon,
                                leadingAccessory: { type: "icon", icon: F.LinkIcon },
                                action: function () {
                                    y.l.markActionPerformed(y.N.COPY_LINK_PRESSED);
                                    let e = (0, Q.XW)(a, t.contentType, t.originalContentType);
                                    (0, et.C)(
                                        e,
                                        () => {
                                            (y.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, V.P)((0, U.o)(eo.intl.string(eo.t["L/PwZf"]), W.Ck.SUCCESS)));
                                        },
                                        () => {
                                            (y.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, V.P)((0, U.o)(eo.intl.string(eo.t.uVV00B), W.Ck.FAILURE)));
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            });
        })({ item: t, canCopyImage: n, canCopyLink: l, src: s });
    return (0, i.jsxs)(q.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: a,
        onSelect: r,
        children: [u, d, c],
    });
}
function eC(e, t, n) {
    let a = l.useCallback((e) => {
        (0, et.C)(e, () =>
            (0, V.P)({ message: eo.intl.string(eo.t.mGZ66D), type: W.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (l) => (null != l ? (0, i.jsx)(z.Dr, { action: () => a(l), label: e, subtext: l, id: t, ...n }, t) : null);
}
function ey(e) {
    let { item: t } = e,
        n = l.useRef(null),
        [a, r] = l.useState(!1),
        s = ee.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        d = !t.animated,
        u = (0, Q.bc)(t.original, t.url),
        m = (0, Q.PK)(u, t.contentType, t.originalContentType),
        p = o && c && d && m,
        f = (0, Q.fW)(u);
    return s || p || f || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, i.jsx)(K.Y, {
              targetElementRef: n,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: K.Y.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(eg, { item: t, canCopyImage: p, canCopyLink: f, onClose: () => r(!1), src: u }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(eu, {
                      buttonRef: n,
                      tooltipText: eo.intl.string(eo.t["UKOtz+"]),
                      onClick: () => {
                          (y.l.markActionPerformed(y.N.MORE_BUTTON_PRESSED), r(!a));
                      },
                      icon: Y.MoreHorizontalIcon,
                  });
              },
          })
        : null;
}
let eA = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        a = (0, h.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
        s = l.useRef(null),
        o = l.useCallback(() => {
            !a && s.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [a]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(er.Ay, {
            mode: er.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: s,
                    className: r()(ec.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: o,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(em, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ep, { item: t }),
                                    (0, i.jsx)(ef, { item: t }),
                                    (0, i.jsx)(eE, { item: t }),
                                    (0, i.jsx)(ey, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
var ex = n(597351),
    eh = n(125256);
let eI = l.memo(function (e) {
    let { message: t } = e,
        n = (0, h.bG)([O.A], () => O.A.getChannel(t.channel_id));
    if (null == n) return null;
    let l = (0, k.A)(t) ? new Date(v.default.extractTimestamp(t.id)) : t.timestamp;
    return (0, i.jsx)(er.Ay, {
        children: (e) =>
            (0, i.jsxs)(T.A.Provider, {
                value: n.guild_id,
                children: [
                    (0, i.jsx)(M.A, { user: t.author, size: I._3.SIZE_40, className: r()(eh.Du, e) }),
                    (0, i.jsxs)("div", {
                        className: r()(eh.cy, e),
                        children: [
                            (0, i.jsx)(S.M, {
                                children: (0, i.jsx)("div", {
                                    className: eh.mG,
                                    children: (0, i.jsx)(N.A, { className: eh.fh, message: t, channel: n }),
                                }),
                            }),
                            (0, i.jsx)(j.A, { timestamp: l, className: eh.vE, tooltipPosition: "bottom" }),
                        ],
                    }),
                ],
            }),
    });
});
function eS(e) {
    let { item: t, hideMediaOptions: n, onClose: l } = e,
        a = t.sourceMetadata?.message;
    return (0, i.jsxs)("div", {
        className: eh.XV,
        children: [
            null != a && (0, i.jsx)(eI, { message: a }),
            (0, i.jsx)(eA, { item: t, hideMediaOptions: n }),
            (0, i.jsx)(er.Ay, {
                mode: er.nY.PINNED,
                children: (e) =>
                    (0, i.jsx)(ex.A, {
                        onClick: l,
                        icon: b.P,
                        tooltip: eo.intl.string(eo.t.cpT0Cq),
                        className: r()(eh.b, e),
                    }),
            }),
        ],
    });
}
var eb = n(700535);
function eM(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || g.Ay.useReducedMotion ? e.set(t) : e.start(t);
}
function ek(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: a,
            startingIndex: u,
            enabledContentHarmTypeFlags: h,
            shouldHideMediaOptions: I = !1,
            transitionState: S,
            ...b
        } = e,
        [M, k] = l.useState(u ?? 0),
        [T, j] = l.useState(!1),
        [N, O] = (0, o.z)(() => ({
            scale: g.Ay.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        v = l.useRef(null);
    l.useEffect(() => {
        if (null != t)
            return (
                C._.subscribe(m.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    C._.unsubscribe(m.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let D = l.useRef(null);
    (l.useEffect(() => {
        if (S !== D.current)
            switch (((D.current = S), S)) {
                case c.ip.ENTERING:
                    eM(N.scale, 1);
                    break;
                case c.ip.EXITING:
                    g.Ay.useReducedMotion || (eM(N.x, 0), eM(N.y, 0), eM(N.scale, 0.9));
            }
    }, [S, N]),
        S === c.ip.HIDDEN && T && (j(!1), N.x.set(0), N.y.set(0), N.scale.set(1)),
        l.useEffect(() => {
            function e() {
                (E.A.disable(), S === c.ip.ENTERED ? E.A.enableTemp(p) : E.A.enableTemp(f));
            }
            function t() {
                E.A.disableTemp();
            }
            (S === c.ip.ENTERED && (E.A.disable(), E.A.enableTemp(p)),
                S === c.ip.HIDDEN && (E.A.disable(), E.A.enableTemp(f)));
            let n = v.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    (n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), E.A.disableTemp());
                }
            );
        }, [S]));
    let _ = l.useCallback(
            (e) => {
                (k(e), n?.(e), y.l.markActionPerformed(y.N.SELECTED_ITEM_CHANGE));
            },
            [n],
        ),
        P = l.useMemo(
            () => ({
                scale: N.scale,
                x: N.x,
                y: N.y,
                setScale(e, t) {
                    eM(N.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    (eM(N.x, e, n?.immediate), eM(N.y, t, n?.immediate));
                },
                zoomed: T,
                setZoomed(e) {
                    (j(e), eM(N.scale, e ? 2.5 : 1), e || (eM(N.x, 0), eM(N.y, 0)));
                },
            }),
            [T, N],
        );
    return (0, i.jsx)(d.N, {
        theme: m.NJ8.ONYX,
        children: (e) =>
            (0, i.jsx)(s.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: r()(eb.O, e),
                transitionState: S,
                ...b,
                size: s.rI.DYNAMIC,
                animation: s.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": eo.intl.string(eo.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, i.jsxs)(A.f.Provider, {
                    value: P,
                    children: [
                        (0, i.jsx)(eS, { item: a[M], hideMediaOptions: I, onClose: t }),
                        (0, i.jsx)("div", { style: { display: "none" }, ref: v }),
                        (0, i.jsx)(x.A, {
                            items: a,
                            startIndex: M,
                            onIndexChange: _,
                            enabledContentHarmTypeFlags: h,
                            shouldHideMediaOptions: I,
                        }),
                    ],
                }),
            }),
    });
}
