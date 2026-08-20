n.d(t, { default: () => eb });
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
    I = n(17928),
    h = n(778712),
    S = n(346055),
    b = n(789645),
    M = n(966327),
    k = n(386467),
    T = n(606049),
    j = n(943220),
    N = n(734057),
    O = n(192308),
    v = n(866665),
    D = n(408278),
    _ = n(92259),
    P = n(218429),
    R = n(292801),
    L = n(691540),
    w = n(857250),
    V = n(97483),
    U = n(32880),
    W = n(811893),
    G = n(980707),
    X = n(477782),
    q = n(624479),
    z = n(173936),
    B = n(922016),
    F = n(365199),
    H = n(50268),
    K = n(843626),
    Y = n(294454),
    Z = n(803316),
    J = n(465856),
    Q = n(885386),
    $ = n(957565),
    ee = n(255438),
    et = n(123917),
    en = n(723702),
    ei = n(19575),
    el = n(358731),
    ea = n(256905),
    er = n(375708),
    es = n(610365);
function eo() {
    (0, O.closeModal)(ea.K);
}
function ec(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(v.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(D.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function ed() {
    let { zoomed: e, setZoomed: t } = (0, A.Q)();
    return (0, i.jsx)(ec, {
        onClick: () => {
            y.l.markActionPerformed(e ? y.N.ZOOM_OUT_BUTTON_PRESSED : y.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? er.intl.string(er.t.vOFof8) : er.intl.string(er.t.Kt4gZ6),
        icon: e ? _.V : P.r,
    });
}
function eu(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        a = t.sourceMetadata?.identifier,
        r = l.useCallback(() => {
            if (null != n && null != a) {
                if ((y.l.markActionPerformed(y.N.FORWARD_PRESSED), "embed" === a.type))
                    return void (0, Y.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [a.embedIndex] },
                        onRequestSent: eo,
                    });
                (0, Y.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [a.attachmentId] },
                    onRequestSent: eo,
                });
            }
        }, [n, a]);
    return null != n && null != a && (0, K.p)(n)
        ? (0, i.jsx)(ec, { onClick: r, tooltipText: er.intl.string(er.t.I3ltXO), icon: R.t })
        : null;
}
function em(e) {
    let { item: t } = e,
        [n, a] = l.useState(!1),
        r = (0, Z.bc)(t.original, t.url),
        s = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        c = null != t.children,
        d = (0, Z.e7)(r, t.contentType, t.originalContentType);
    if (!(s || (en.isPlatformEmbedded && !c && o && d))) return null;
    let u = (0, Z.XW)(r, t.contentType, t.originalContentType, Z.N7);
    async function m() {
        if (
            (y.l.markActionPerformed(y.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, et.h)({ href: u }),
            "IMAGE" === t.type)
        ) {
            a(!0);
            try {
                let e = await ei.Ay.saveImage(u, t.contentType, Z.N7);
                if (e === ei._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${u}`);
                e === ei._0.SAVED &&
                    (y.l.trackMediaViewerImageSaved({ url: u, success: !0 }),
                    (0, L.P0)((0, w.o)(er.intl.string(er.t.cqpdJW), V.Ck.SUCCESS)));
            } catch (e) {
                y.l.trackMediaViewerImageSaved({ url: u, success: !1 }),
                    (0, L.P0)((0, w.o)(er.intl.string(er.t["8Ve/S0"]), V.Ck.FAILURE));
            } finally {
                a(!1);
            }
        }
    }
    return (0, i.jsx)(ec, {
        onClick: m,
        tooltipText: er.intl.string("VIDEO" === t.type ? er.t.JVuuz3 : er.t["S/xNKV"]),
        loading: n,
        icon: U.DownloadIcon,
    });
}
function ep(e) {
    let { item: t } = e,
        n = (0, Z.bc)(t.original, t.url);
    if (!(0, Z.fW)(n)) return null;
    let l = (0, Z.XW)(n, t.contentType, t.originalContentType);
    return (0, i.jsx)(ec, {
        onClick: () => {
            y.l.markActionPerformed(y.N.OPEN_LINK_PRESSED),
                y.l.trackMediaViewerLinkOpened({ href: l }),
                (0, et.h)({ href: l });
        },
        tooltipText: er.intl.string(er.t.q5jLJB),
        icon: W.t,
    });
}
function ef(e) {
    let { item: t, canCopyImage: n, canCopyLink: l, onClose: a, onSelect: r, src: s } = e,
        o = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        c = (0, H.A)({ id: o, label: er.intl.string(er.t.nwg3lR) }),
        d = (function (e) {
            let { alt: t, sourceMetadata: n, width: l, height: a } = e,
                r = eE(er.intl.string(er.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = eE(er.intl.string(er.t["3Nf9u2"]), "size"),
                o = eE(er.intl.string(er.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, J.A)(n.identifier),
                d = (0, ee.Xq)(n.identifier.size / 1e3);
            return (0, i.jsxs)(
                X.Dr,
                {
                    id: "media-viewer-details",
                    label: er.intl.string(er.t.sqBLa9),
                    children: [
                        r(c),
                        s(er.intl.formatToPlainString(er.t.DTdonA, { width: l, height: a, fileSize: d })),
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
                let e = (0, Z.XW)(a, t.contentType, t.originalContentType, Z.N7);
                try {
                    await ei.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                        y.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                        (0, L.P0)((0, w.o)(er.intl.string(er.t.bhUpvC), V.Ck.SUCCESS));
                } catch (t) {
                    y.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                        (0, L.P0)((0, w.o)(er.intl.string(er.t.PTPbjx), V.Ck.FAILURE));
                }
            }
            return (0, i.jsxs)(X.rX, {
                children: [
                    n &&
                        (0, i.jsx)(
                            X.Dr,
                            {
                                label: er.intl.string(er.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: q.CopyIcon,
                                leadingAccessory: { type: "icon", icon: q.CopyIcon },
                                action: r,
                            },
                            "media-viewer-copy-image",
                        ),
                    l &&
                        (0, i.jsx)(
                            X.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: er.intl.string(er.t["92CPQ+"]),
                                icon: z.LinkIcon,
                                leadingAccessory: { type: "icon", icon: z.LinkIcon },
                                action: function () {
                                    y.l.markActionPerformed(y.N.COPY_LINK_PRESSED);
                                    let e = (0, Z.XW)(a, t.contentType, t.originalContentType);
                                    (0, $.C)(
                                        e,
                                        () => {
                                            y.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, L.P0)((0, w.o)(er.intl.string(er.t["L/PwZf"]), V.Ck.SUCCESS));
                                        },
                                        () => {
                                            y.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, L.P0)((0, w.o)(er.intl.string(er.t.uVV00B), V.Ck.FAILURE));
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            });
        })({ item: t, canCopyImage: n, canCopyLink: l, src: s });
    return (0, i.jsxs)(G.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: a,
        onSelect: r,
        children: [u, d, c],
    });
}
function eE(e, t, n) {
    let a = l.useCallback((e) => {
        (0, $.C)(e, () =>
            (0, L.P0)({ message: er.intl.string(er.t.mGZ66D), type: V.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (l) => (null != l ? (0, i.jsx)(X.Dr, { action: () => a(l), label: e, subtext: l, id: t, ...n }, t) : null);
}
function eg(e) {
    let { item: t } = e,
        n = l.useRef(null),
        [a, r] = l.useState(!1),
        s = Q.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        d = !t.animated,
        u = (0, Z.bc)(t.original, t.url),
        m = (0, Z.PK)(u, t.contentType, t.originalContentType),
        p = o && c && d && m,
        f = (0, Z.fW)(u);
    return s || p || f || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, i.jsx)(B.Y, {
              targetElementRef: n,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: B.Y.Animation.NONE,
              renderPopout: () =>
                  (0, i.jsx)(ef, { item: t, canCopyImage: p, canCopyLink: f, onClose: () => r(!1), src: u }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(ec, {
                      buttonRef: n,
                      tooltipText: er.intl.string(er.t["UKOtz+"]),
                      onClick: () => {
                          y.l.markActionPerformed(y.N.MORE_BUTTON_PRESSED), r(!a);
                      },
                      icon: F.MoreHorizontalIcon,
                  });
              },
          })
        : null;
}
let eC = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        a = (0, I.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
        s = l.useRef(null),
        o = l.useCallback(() => {
            !a && s.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [a]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, i.jsx)(el.Ay, {
            mode: el.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, i.jsxs)("div", {
                    ref: s,
                    className: r()(es.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: o,
                    children: [
                        "IMAGE" === t.type && (0, i.jsx)(ed, {}),
                        !n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eu, { item: t }),
                                    (0, i.jsx)(em, { item: t }),
                                    (0, i.jsx)(ep, { item: t }),
                                    (0, i.jsx)(eg, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
var ey = n(597351),
    eA = n(125256);
let ex = l.memo(function (e) {
    let { message: t } = e,
        n = (0, I.bG)([N.A], () => N.A.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(el.Ay, {
              children: (e) =>
                  (0, i.jsxs)(k.A.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(M.A, { user: t.author, size: h._3.SIZE_40, className: r()(eA.Du, e) }),
                          (0, i.jsxs)("div", {
                              className: r()(eA.cy, e),
                              children: [
                                  (0, i.jsx)(S.M, {
                                      children: (0, i.jsx)("div", {
                                          className: eA.mG,
                                          children: (0, i.jsx)(j.A, { className: eA.fh, message: t, channel: n }),
                                      }),
                                  }),
                                  (0, i.jsx)(T.A, {
                                      timestamp: t.timestamp,
                                      className: eA.vE,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function eI(e) {
    let { item: t, hideMediaOptions: n, onClose: l } = e,
        a = t.sourceMetadata?.message;
    return (0, i.jsxs)("div", {
        className: eA.XV,
        children: [
            null != a && (0, i.jsx)(ex, { message: a }),
            (0, i.jsx)(eC, { item: t, hideMediaOptions: n }),
            (0, i.jsx)(el.Ay, {
                mode: el.nY.PINNED,
                children: (e) =>
                    (0, i.jsx)(ey.A, {
                        onClick: l,
                        icon: b.P,
                        tooltip: er.intl.string(er.t.cpT0Cq),
                        className: r()(eA.b, e),
                    }),
            }),
        ],
    });
}
var eh = n(700535);
function eS(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || g.Ay.useReducedMotion ? e.set(t) : e.start(t);
}
function eb(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: a,
            startingIndex: u,
            enabledContentHarmTypeFlags: I,
            shouldHideMediaOptions: h = !1,
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
    l.useEffect(() => {
        if (S !== D.current)
            switch (((D.current = S), S)) {
                case c.ip.ENTERING:
                    eS(N.scale, 1);
                    break;
                case c.ip.EXITING:
                    g.Ay.useReducedMotion || (eS(N.x, 0), eS(N.y, 0), eS(N.scale, 0.9));
            }
    }, [S, N]),
        S === c.ip.HIDDEN && T && (j(!1), N.x.set(0), N.y.set(0), N.scale.set(1)),
        l.useEffect(() => {
            function e() {
                E.A.disable(), S === c.ip.ENTERED ? E.A.enableTemp(p) : E.A.enableTemp(f);
            }
            function t() {
                E.A.disableTemp();
            }
            S === c.ip.ENTERED && (E.A.disable(), E.A.enableTemp(p)),
                S === c.ip.HIDDEN && (E.A.disable(), E.A.enableTemp(f));
            let n = v.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), E.A.disableTemp();
                }
            );
        }, [S]);
    let _ = l.useCallback(
            (e) => {
                k(e), n?.(e), y.l.markActionPerformed(y.N.SELECTED_ITEM_CHANGE);
            },
            [n],
        ),
        P = l.useMemo(
            () => ({
                scale: N.scale,
                x: N.x,
                y: N.y,
                setScale(e, t) {
                    eS(N.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    eS(N.x, e, n?.immediate), eS(N.y, t, n?.immediate);
                },
                zoomed: T,
                setZoomed(e) {
                    j(e), eS(N.scale, e ? 2.5 : 1), e || (eS(N.x, 0), eS(N.y, 0));
                },
            }),
            [T, N],
        );
    return (0, i.jsx)(d.N, {
        theme: m.NJ8.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)(s.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: r()(eh.O, e),
                transitionState: S,
                ...b,
                size: s.rI.DYNAMIC,
                animation: s.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": er.intl.string(er.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, i.jsxs)(A.f.Provider, {
                    value: P,
                    children: [
                        (0, i.jsx)(eI, { item: a[M], hideMediaOptions: h, onClose: t }),
                        (0, i.jsx)("div", { style: { display: "none" }, ref: v }),
                        (0, i.jsx)(x.A, {
                            items: a,
                            startIndex: M,
                            onIndexChange: _,
                            enabledContentHarmTypeFlags: I,
                            shouldHideMediaOptions: h,
                        }),
                    ],
                }),
            }),
    });
}
