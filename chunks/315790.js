n.d(t, { default: () => ex });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(935462),
    o = n(717421),
    c = n(231723),
    d = n(43990),
    u = n(803842),
    m = n(652215);
let p = { [m.IWg.MODAL_CAROUSEL_NEXT]: u.$0, [m.IWg.MODAL_CAROUSEL_PREV]: u.$4, [m.IWg.CLOSE_MODAL]: u.cu },
    _ = { [m.IWg.CLOSE_MODAL]: u.cu };
var h = n(775121),
    A = n(775602),
    g = n(625494),
    f = n(700331),
    E = n(454290),
    C = n(836781),
    I = n(17928),
    S = n(778712),
    y = n(247928),
    x = n(789645),
    T = n(966327),
    v = n(386467),
    b = n(606049),
    M = n(943220),
    N = n(734057),
    O = n(990078),
    R = n(192308),
    j = n(408278),
    D = n(92259),
    L = n(218429),
    w = n(292801),
    P = n(691540),
    k = n(857250),
    U = n(97483),
    G = n(32880),
    V = n(811893),
    F = n(550079),
    B = n(477782),
    H = n(624479),
    z = n(173936),
    W = n(922016),
    K = n(365199),
    Z = n(50268),
    X = n(843626),
    J = n(294454),
    $ = n(803316),
    q = n(465856),
    Y = n(253932),
    Q = n(957565),
    ee = n(255438),
    et = n(76843),
    en = n(723702),
    ea = n(19575),
    ei = n(358731),
    el = n(256905),
    er = n(985018),
    es = n(517420);
function eo() {
    (0, R.closeModal)(el.K);
}
function ec(e) {
    let { tooltipText: t, ...n } = e;
    return (0, a.jsx)(O.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, a.jsx)(j.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function ed() {
    let { zoomed: e, setZoomed: t } = (0, E.Q)();
    return (0, a.jsx)(ec, {
        onClick: () => {
            f.l.markActionPerformed(e ? f.N.ZOOM_OUT_BUTTON_PRESSED : f.N.ZOOM_IN_BUTTON_PRESSED), t(!e);
        },
        tooltipText: e ? er.intl.string(er.t.vOFof8) : er.intl.string(er.t.Kt4gZ6),
        icon: e ? D.V : L.r,
    });
}
function eu(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        l = t.sourceMetadata?.identifier,
        r = i.useCallback(() => {
            if (null != n && null != l) {
                if ((f.l.markActionPerformed(f.N.FORWARD_PRESSED), "embed" === l.type))
                    return void (0, J.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                        onRequestSent: eo,
                    });
                (0, J.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
                    onRequestSent: eo,
                });
            }
        }, [n, l]);
    return null != n && null != l && (0, X.p)(n)
        ? (0, a.jsx)(ec, { onClick: r, tooltipText: er.intl.string(er.t.I3ltXO), icon: w.t })
        : null;
}
function em(e) {
    let { item: t } = e,
        [n, l] = i.useState(!1),
        r = "VIDEO" === t.type,
        s = "IMAGE" === t.type,
        o = null != t.children,
        c = (0, $.e7)((0, $.bc)(t.original, t.url), t.contentType, t.originalContentType);
    if (!(r || (en.isPlatformEmbedded && !o && s && c))) return null;
    let d = (0, $.XW)((0, $.bc)(t.original, t.url), t.contentType, t.originalContentType, $.N7);
    async function u() {
        if (
            (f.l.markActionPerformed(f.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, et.h)({ href: d }),
            "IMAGE" === t.type)
        ) {
            l(!0);
            try {
                let e = await ea.Ay.saveImage(d, t.contentType, $.N7);
                if (e === ea._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${d}`);
                e === ea._0.SAVED &&
                    (f.l.trackMediaViewerImageSaved({ url: d, success: !0 }),
                    (0, P.P0)((0, k.o)(er.intl.string(er.t.cqpdJW), U.Ck.SUCCESS)));
            } catch (e) {
                f.l.trackMediaViewerImageSaved({ url: d, success: !1 }),
                    (0, P.P0)((0, k.o)(er.intl.string(er.t["8Ve/S0"]), U.Ck.FAILURE));
            } finally {
                l(!1);
            }
        }
    }
    return (0, a.jsx)(ec, {
        onClick: u,
        tooltipText: er.intl.string("VIDEO" === t.type ? er.t.JVuuz3 : er.t["S/xNKV"]),
        loading: n,
        icon: G.s,
    });
}
function ep(e) {
    let { item: t } = e;
    if (!(0, $.fW)(t.url)) return null;
    let n = (0, $.XW)((0, $.bc)(t.original, t.url), t.contentType, t.originalContentType);
    return (0, a.jsx)(ec, {
        onClick: () => {
            f.l.markActionPerformed(f.N.OPEN_LINK_PRESSED),
                f.l.trackMediaViewerLinkOpened({ href: n }),
                (0, et.h)({ href: n });
        },
        tooltipText: er.intl.string(er.t.q5jLJB),
        icon: V.t,
    });
}
function e_(e) {
    let { item: t, canCopyImage: n, canCopyLink: i, onClose: l, onSelect: r } = e,
        s = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        o = (0, Z.A)({ id: s, label: er.intl.string(er.t.nwg3lR) }),
        c = (function (e) {
            let { alt: t, sourceMetadata: n, width: i, height: l } = e,
                r = eh(er.intl.string(er.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = eh(er.intl.string(er.t["3Nf9u2"]), "size"),
                o = eh(er.intl.string(er.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, q.A)(n.identifier),
                d = (0, ee.Xq)(n.identifier.size / 1e3);
            return (0, a.jsxs)(
                B.Dr,
                {
                    id: "media-viewer-details",
                    label: er.intl.string(er.t.sqBLa9),
                    children: [
                        r(c),
                        s(er.intl.formatToPlainString(er.t.DTdonA, { width: i, height: l, fileSize: d })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t);
    async function d() {
        f.l.markActionPerformed(f.N.COPY_IMAGE_PRESSED);
        let e = (0, $.XW)((0, $.bc)(t.original, t.url), t.contentType, t.originalContentType, $.N7);
        try {
            await ea.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                f.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                (0, P.P0)((0, k.o)(er.intl.string(er.t.bhUpvC), U.Ck.SUCCESS));
        } catch (t) {
            f.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                (0, P.P0)((0, k.o)(er.intl.string(er.t.PTPbjx), U.Ck.FAILURE));
        }
    }
    return (0, a.jsxs)(F.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: l,
        onSelect: r,
        children: [
            (0, a.jsxs)(B.rX, {
                children: [
                    n &&
                        (0, a.jsx)(
                            B.Dr,
                            {
                                label: er.intl.string(er.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: H.T,
                                leadingAccessory: { type: "icon", icon: H.T },
                                action: d,
                            },
                            "media-viewer-copy-image",
                        ),
                    i &&
                        (0, a.jsx)(
                            B.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: er.intl.string(er.t["92CPQ+"]),
                                icon: z.q,
                                leadingAccessory: { type: "icon", icon: z.q },
                                action: function () {
                                    f.l.markActionPerformed(f.N.COPY_LINK_PRESSED);
                                    let e = (0, $.XW)(
                                        (0, $.bc)(t.original, t.url),
                                        t.contentType,
                                        t.originalContentType,
                                    );
                                    (0, Q.C)(
                                        e,
                                        () => {
                                            f.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, P.P0)((0, k.o)(er.intl.string(er.t["L/PwZf"]), U.Ck.SUCCESS));
                                        },
                                        () => {
                                            f.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, P.P0)((0, k.o)(er.intl.string(er.t.uVV00B), U.Ck.FAILURE));
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
function eh(e, t, n) {
    let l = i.useCallback((e) => {
        (0, Q.C)(e, () =>
            (0, P.P0)({ message: er.intl.string(er.t.mGZ66D), type: U.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (i) => (null != i ? (0, a.jsx)(B.Dr, { action: () => l(i), label: e, subtext: i, id: t, ...n }, t) : null);
}
function eA(e) {
    let { item: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1),
        s = Y.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        d = !t.animated,
        u = (0, $.PK)(t.url, t.contentType, t.originalContentType),
        m = o && c && d && u,
        p = (0, $.fW)(t.url);
    return s || m || p || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, a.jsx)(W.Y, {
              targetElementRef: n,
              shouldShow: l,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => r(!1),
              animation: W.Y.Animation.NONE,
              renderPopout: () => (0, a.jsx)(e_, { item: t, canCopyImage: m, canCopyLink: p, onClose: () => r(!1) }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, a.jsx)(ec, {
                      buttonRef: n,
                      tooltipText: er.intl.string(er.t["UKOtz+"]),
                      onClick: () => {
                          f.l.markActionPerformed(f.N.MORE_BUTTON_PRESSED), r(!l);
                      },
                      icon: K.j,
                  });
              },
          })
        : null;
}
let eg = i.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        l = (0, I.bG)([A.A], () => A.A.keyboardModeEnabled),
        s = i.useRef(null),
        o = i.useCallback(() => {
            !l && s.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [l]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, a.jsx)(ei.Ay, {
            mode: ei.nY.FOCUS_SENSITIVE,
            children: (e) =>
                (0, a.jsxs)("div", {
                    ref: s,
                    className: r()(es.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: o,
                    children: [
                        "IMAGE" === t.type && (0, a.jsx)(ed, {}),
                        !n &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(eu, { item: t }),
                                    (0, a.jsx)(em, { item: t }),
                                    (0, a.jsx)(ep, { item: t }),
                                    (0, a.jsx)(eA, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
var ef = n(597351),
    eE = n(897003);
let eC = i.memo(function (e) {
    let { message: t } = e,
        n = (0, I.bG)([N.A], () => N.A.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, a.jsx)(ei.Ay, {
              children: (e) =>
                  (0, a.jsxs)(v.A.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, a.jsx)(T.A, { user: t.author, size: S._3.SIZE_40, className: r()(eE.Du, e) }),
                          (0, a.jsxs)("div", {
                              className: r()(eE.cy, e),
                              children: [
                                  (0, a.jsx)(y.M, {
                                      children: (0, a.jsx)("div", {
                                          className: eE.mG,
                                          children: (0, a.jsx)(M.A, { className: eE.fh, message: t, channel: n }),
                                      }),
                                  }),
                                  (0, a.jsx)(b.A, {
                                      timestamp: t.timestamp,
                                      className: eE.vE,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function eI(e) {
    let { item: t, hideMediaOptions: n, onClose: i } = e,
        l = t.sourceMetadata?.message;
    return (0, a.jsxs)("div", {
        className: eE.XV,
        children: [
            null != l && (0, a.jsx)(eC, { message: l }),
            (0, a.jsx)(eg, { item: t, hideMediaOptions: n }),
            (0, a.jsx)(ei.Ay, {
                mode: ei.nY.PINNED,
                children: (e) =>
                    (0, a.jsx)(ef.A, {
                        onClick: i,
                        icon: x.P,
                        tooltip: er.intl.string(er.t.cpT0Cq),
                        className: r()(eE.b, e),
                    }),
            }),
        ],
    });
}
var eS = n(264482);
function ey(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || A.A.useReducedMotion ? e.set(t) : e.start(t);
}
function ex(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: l,
            startingIndex: u,
            enabledContentHarmTypeFlags: I,
            shouldHideMediaOptions: S = !1,
            transitionState: y,
            ...x
        } = e,
        [T, v] = i.useState(u ?? 0),
        [b, M] = i.useState(!1),
        [N, O] = (0, o.z)(() => ({
            scale: A.A.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        R = i.useRef(null);
    i.useEffect(() => {
        if (null != t)
            return (
                g._.subscribe(m.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    g._.unsubscribe(m.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let j = i.useRef(null);
    i.useEffect(() => {
        if (y !== j.current)
            switch (((j.current = y), y)) {
                case c.ip.ENTERING:
                    ey(N.scale, 1);
                    break;
                case c.ip.EXITING:
                    A.A.useReducedMotion || (ey(N.x, 0), ey(N.y, 0), ey(N.scale, 0.9));
            }
    }, [y, N]),
        y === c.ip.HIDDEN && b && (M(!1), N.x.set(0), N.y.set(0), N.scale.set(1)),
        i.useEffect(() => {
            y === c.ip.ENTERED && (h.A.disable(), h.A.enableTemp(p)),
                y === c.ip.HIDDEN && (h.A.disable(), h.A.enableTemp(_));
            let e = () => {
                    h.A.disable(), y === c.ip.ENTERED ? h.A.enableTemp(p) : h.A.enableTemp(_);
                },
                t = () => {
                    h.A.disableTemp();
                },
                n = R.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), h.A.disableTemp();
                }
            );
        }, [y]);
    let D = i.useCallback(
            (e) => {
                v(e), n?.(e), f.l.markActionPerformed(f.N.SELECTED_ITEM_CHANGE);
            },
            [n],
        ),
        L = i.useMemo(
            () => ({
                scale: N.scale,
                x: N.x,
                y: N.y,
                setScale(e, t) {
                    ey(N.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    ey(N.x, e, n?.immediate), ey(N.y, t, n?.immediate);
                },
                zoomed: b,
                setZoomed(e) {
                    M(e), ey(N.scale, e ? 2.5 : 1), e || (ey(N.x, 0), ey(N.y, 0));
                },
            }),
            [b, N],
        );
    return (0, a.jsx)(d.N, {
        theme: m.NJ8.MIDNIGHT,
        children: (e) =>
            (0, a.jsx)(s.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: r()(eS.O, e),
                transitionState: y,
                ...x,
                size: s.rI.DYNAMIC,
                animation: s.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": er.intl.string(er.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, a.jsxs)(E.f.Provider, {
                    value: L,
                    children: [
                        (0, a.jsx)(eI, { item: l[T], hideMediaOptions: S, onClose: t }),
                        (0, a.jsx)("div", { style: { display: "none" }, ref: R }),
                        (0, a.jsx)(C.A, {
                            items: l,
                            startIndex: T,
                            onIndexChange: D,
                            enabledContentHarmTypeFlags: I,
                            shouldHideMediaOptions: S,
                        }),
                    ],
                }),
            }),
    });
}
