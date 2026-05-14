n.d(t, { default: () => eI });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(935462),
    o = n(717421),
    c = n(231723),
    d = n(43990),
    u = n(803842),
    m = n(652215);
let p = { [m.IWg.MODAL_CAROUSEL_NEXT]: u.$0, [m.IWg.MODAL_CAROUSEL_PREV]: u.$4, [m.IWg.CLOSE_MODAL]: u.cu },
    E = { [m.IWg.CLOSE_MODAL]: u.cu };
var f = n(775121),
    g = n(775602),
    C = n(625494),
    A = n(700331),
    y = n(454290),
    x = n(836781),
    h = n(17928),
    S = n(778712),
    b = n(247928),
    I = n(789645),
    T = n(966327),
    M = n(386467),
    j = n(606049),
    N = n(943220),
    k = n(734057),
    O = n(990078),
    v = n(192308),
    _ = n(408278),
    D = n(92259),
    P = n(218429),
    R = n(292801),
    L = n(691540),
    w = n(857250),
    V = n(97483),
    U = n(32880),
    W = n(811893),
    G = n(980707),
    q = n(477782),
    X = n(624479),
    B = n(173936),
    F = n(922016),
    z = n(365199),
    K = n(50268),
    H = n(843626),
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
    es = n(517420);
function eo() {
    (0, v.closeModal)(ea.K);
}
function ec(e) {
    let { tooltipText: t, ...n } = e;
    return (0, i.jsx)(O.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(_.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function ed() {
    let { zoomed: e, setZoomed: t } = (0, y.Q)();
    return (0, i.jsx)(ec, {
        onClick: () => {
            A.l.markActionPerformed(e ? A.N.ZOOM_OUT_BUTTON_PRESSED : A.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? er.intl.string(er.t.vOFof8) : er.intl.string(er.t.Kt4gZ6),
        icon: e ? D.V : P.r,
    });
}
function eu(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        a = t.sourceMetadata?.identifier,
        r = l.useCallback(() => {
            if (null != n && null != a) {
                if ((A.l.markActionPerformed(A.N.FORWARD_PRESSED), "embed" === a.type))
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
    return null != n && null != a && (0, H.p)(n)
        ? (0, i.jsx)(ec, { onClick: r, tooltipText: er.intl.string(er.t.I3ltXO), icon: R.t })
        : null;
}
function em(e) {
    let { item: t } = e,
        [n, a] = l.useState(!1),
        r = "VIDEO" === t.type,
        s = "IMAGE" === t.type,
        o = null != t.children,
        c = (0, Z.e7)((0, Z.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(r || (en.isPlatformEmbedded && !o && s && c))) return null;
    let d = (0, Z.XW)((0, Z.bc)(t.original, t.url), t.contentType, t.originalContentType, Z.N7);
    async function u() {
        if (
            (A.l.markActionPerformed(A.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, et.h)({ href: d }),
            "IMAGE" === t.type)
        ) {
            a(!0);
            try {
                let e = await ei.Ay.saveImage(d, t.contentType, Z.N7);
                if (e === ei._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${d}`);
                e === ei._0.SAVED &&
                    (A.l.trackMediaViewerImageSaved({ url: d, success: !0 }),
                    (0, L.P0)((0, w.o)(er.intl.string(er.t.cqpdJW), V.Ck.SUCCESS)));
            } catch (e) {
                A.l.trackMediaViewerImageSaved({ url: d, success: !1 }),
                    (0, L.P0)((0, w.o)(er.intl.string(er.t["8Ve/S0"]), V.Ck.FAILURE));
            } finally {
                a(!1);
            }
        }
    }
    return (0, i.jsx)(ec, {
        onClick: u,
        tooltipText: er.intl.string("VIDEO" === t.type ? er.t.JVuuz3 : er.t["S/xNKV"]),
        loading: n,
        icon: U.s,
    });
}
function ep(e) {
    let { item: t } = e;
    if (!(0, Z.fW)(t.url)) return null;
    let n = (0, Z.XW)((0, Z.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, i.jsx)(ec, {
        onClick: () => {
            A.l.markActionPerformed(A.N.OPEN_LINK_PRESSED),
                A.l.trackMediaViewerLinkOpened({ href: n }),
                (0, et.h)({ href: n });
        },
        tooltipText: er.intl.string(er.t.q5jLJB),
        icon: W.t,
    });
}
function eE(e) {
    let { item: t, canCopyImage: n, canCopyLink: l, onClose: a, onSelect: r } = e,
        s = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        o = (0, K.A)({ id: s, label: er.intl.string(er.t.nwg3lR) }),
        c = (function (e) {
            let { alt: t, sourceMetadata: n, width: l, height: a } = e,
                r = ef(er.intl.string(er.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = ef(er.intl.string(er.t["3Nf9u2"]), "size"),
                o = ef(er.intl.string(er.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, J.A)(n.identifier),
                d = (0, ee.Xq)(n.identifier.size / 1e3);
            return (0, i.jsxs)(
                q.Dr,
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
        })(t);
    async function d() {
        A.l.markActionPerformed(A.N.COPY_IMAGE_PRESSED);
        let e = (0, Z.XW)((0, Z.bc)(t.original, t.url), t.contentType, t.originalContentType, Z.N7);
        try {
            await ei.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                A.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                (0, L.P0)((0, w.o)(er.intl.string(er.t.bhUpvC), V.Ck.SUCCESS));
        } catch (t) {
            A.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                (0, L.P0)((0, w.o)(er.intl.string(er.t.PTPbjx), V.Ck.FAILURE));
        }
    }
    return (0, i.jsxs)(G.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: a,
        onSelect: r,
        children: [
            (0, i.jsxs)(q.rX, {
                children: [
                    n &&
                        (0, i.jsx)(
                            q.Dr,
                            {
                                label: er.intl.string(er.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: X.T,
                                leadingAccessory: { type: "icon", icon: X.T },
                                action: d,
                            },
                            "media-viewer-copy-image",
                        ),
                    l &&
                        (0, i.jsx)(
                            q.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: er.intl.string(er.t["92CPQ+"]),
                                icon: B.q,
                                leadingAccessory: { type: "icon", icon: B.q },
                                action: function () {
                                    A.l.markActionPerformed(A.N.COPY_LINK_PRESSED);
                                    let e = (0, Z.XW)(
                                        (0, Z.bc)(t.original, t.url),
                                        t.contentType,
                                        t.originalContentType,
                                    );
                                    (0, $.C)(
                                        e,
                                        () => {
                                            A.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, L.P0)((0, w.o)(er.intl.string(er.t["L/PwZf"]), V.Ck.SUCCESS));
                                        },
                                        () => {
                                            A.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, L.P0)((0, w.o)(er.intl.string(er.t.uVV00B), V.Ck.FAILURE));
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
function ef(e, t, n) {
    let a = l.useCallback((e) => {
        (0, $.C)(e, () =>
            (0, L.P0)({ message: er.intl.string(er.t.mGZ66D), type: V.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (l) => (null != l ? (0, i.jsx)(q.Dr, { action: () => a(l), label: e, subtext: l, id: t, ...n }, t) : null);
}
function eg(e) {
    let { item: t } = e,
        n = l.useRef(null),
        [a, r] = l.useState(!1),
        s = Q.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        d = !t.animated,
        u = (0, Z.PK)(t.url, t.contentType, t.originalContentType),
        m = o && c && d && u,
        p = (0, Z.fW)(t.url);
    return s || m || p || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, i.jsx)(F.Y, {
              targetElementRef: n,
              shouldShow: a,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: F.Y.Animation.NONE,
              renderPopout: () => (0, i.jsx)(eE, { item: t, canCopyImage: m, canCopyLink: p, onClose: () => r(!1) }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, i.jsx)(ec, {
                      buttonRef: n,
                      tooltipText: er.intl.string(er.t["UKOtz+"]),
                      onClick: () => {
                          A.l.markActionPerformed(A.N.MORE_BUTTON_PRESSED), r(!a);
                      },
                      icon: z.j,
                  });
              },
          })
        : null;
}
let eC = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        a = (0, h.bG)([g.A], () => g.A.keyboardModeEnabled),
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
var eA = n(597351),
    ey = n(897003);
let ex = l.memo(function (e) {
    let { message: t } = e,
        n = (0, h.bG)([k.A], () => k.A.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(el.Ay, {
              children: (e) =>
                  (0, i.jsxs)(M.A.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(T.A, { user: t.author, size: S._3.SIZE_40, className: r()(ey.Du, e) }),
                          (0, i.jsxs)("div", {
                              className: r()(ey.cy, e),
                              children: [
                                  (0, i.jsx)(b.M, {
                                      children: (0, i.jsx)("div", {
                                          className: ey.mG,
                                          children: (0, i.jsx)(N.A, { className: ey.fh, message: t, channel: n }),
                                      }),
                                  }),
                                  (0, i.jsx)(j.A, {
                                      timestamp: t.timestamp,
                                      className: ey.vE,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function eh(e) {
    let { item: t, hideMediaOptions: n, onClose: l } = e,
        a = t.sourceMetadata?.message;
    return (0, i.jsxs)("div", {
        className: ey.XV,
        children: [
            null != a && (0, i.jsx)(ex, { message: a }),
            (0, i.jsx)(eC, { item: t, hideMediaOptions: n }),
            (0, i.jsx)(el.Ay, {
                mode: el.nY.PINNED,
                children: (e) =>
                    (0, i.jsx)(eA.A, {
                        onClick: l,
                        icon: I.P,
                        tooltip: er.intl.string(er.t.cpT0Cq),
                        className: r()(ey.b, e),
                    }),
            }),
        ],
    });
}
var eS = n(264482);
function eb(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || g.A.useReducedMotion ? e.set(t) : e.start(t);
}
function eI(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: a,
            startingIndex: u,
            enabledContentHarmTypeFlags: h,
            shouldHideMediaOptions: S = !1,
            transitionState: b,
            ...I
        } = e,
        [T, M] = l.useState(u ?? 0),
        [j, N] = l.useState(!1),
        [k, O] = (0, o.z)(() => ({
            scale: g.A.useReducedMotion ? 1 : 0.9,
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
    let _ = l.useRef(null);
    l.useEffect(() => {
        if (b !== _.current)
            switch (((_.current = b), b)) {
                case c.ip.ENTERING:
                    eb(k.scale, 1);
                    break;
                case c.ip.EXITING:
                    g.A.useReducedMotion || (eb(k.x, 0), eb(k.y, 0), eb(k.scale, 0.9));
            }
    }, [b, k]),
        b === c.ip.HIDDEN && j && (N(!1), k.x.set(0), k.y.set(0), k.scale.set(1)),
        l.useEffect(() => {
            b === c.ip.ENTERED && (f.A.disable(), f.A.enableTemp(p)),
                b === c.ip.HIDDEN && (f.A.disable(), f.A.enableTemp(E));
            let e = () => {
                    f.A.disable(), b === c.ip.ENTERED ? f.A.enableTemp(p) : f.A.enableTemp(E);
                },
                t = () => {
                    f.A.disableTemp();
                },
                n = v.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), f.A.disableTemp();
                }
            );
        }, [b]);
    let D = l.useCallback(
            (e) => {
                M(e), n?.(e), A.l.markActionPerformed(A.N.SELECTED_ITEM_CHANGE);
            },
            [n],
        ),
        P = l.useMemo(
            () => ({
                scale: k.scale,
                x: k.x,
                y: k.y,
                setScale(e, t) {
                    eb(k.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    eb(k.x, e, n?.immediate), eb(k.y, t, n?.immediate);
                },
                zoomed: j,
                setZoomed(e) {
                    N(e), eb(k.scale, e ? 2.5 : 1), e || (eb(k.x, 0), eb(k.y, 0));
                },
            }),
            [j, k],
        );
    return (0, i.jsx)(d.N, {
        theme: m.NJ8.MIDNIGHT,
        children: (e) =>
            (0, i.jsx)(s.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: r()(eS.O, e),
                transitionState: b,
                ...I,
                size: s.rI.DYNAMIC,
                animation: s.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": er.intl.string(er.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, i.jsxs)(y.f.Provider, {
                    value: P,
                    children: [
                        (0, i.jsx)(eh, { item: a[T], hideMediaOptions: S, onClose: t }),
                        (0, i.jsx)("div", { style: { display: "none" }, ref: v }),
                        (0, i.jsx)(x.A, {
                            items: a,
                            startIndex: T,
                            onIndexChange: D,
                            enabledContentHarmTypeFlags: h,
                            shouldHideMediaOptions: S,
                        }),
                    ],
                }),
            }),
    });
}
