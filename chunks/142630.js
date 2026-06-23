i.d(t, { default: () => z });
var n = i(627968),
    r = i(64700),
    a = i(503698),
    s = i.n(a),
    o = i(735438),
    l = i(830917),
    c = i(189213),
    u = i(990078),
    d = i(765178),
    m = i(123292),
    g = i(695366),
    h = i(661531),
    E = i(834730),
    A = i(191023),
    R = i(106236),
    C = i(939249),
    D = i(831453),
    f = i(793574),
    T = i(688810),
    p = i(925895),
    x = i(702211),
    _ = i(699576),
    I = i(392107),
    w = i(174459),
    y = i(403362),
    N = i(424632),
    L = i(902916),
    O = i(339984),
    G = i(652215),
    H = i(577718),
    S = i(375708),
    b = i(506263);
let B = { x: 0, y: 0 };
function M(e) {
    switch (e) {
        case O.HL.BANNER:
            return { height: O.yZ, width: O.nI };
        case O.HL.VIDEO_BACKGROUND:
            return H.Im;
        case O.HL.AVATAR:
        case O.HL.AVATAR_DECORATION:
        case O.HL.GUILD_ICON:
            return { height: G.XAf, width: G.XAf };
        case O.HL.GUILD_BANNER:
            return { height: O.cN, width: O.Xb };
        case O.HL.SCHEDULED_EVENT_IMAGE:
            return { height: O.Wz, width: O.PU };
        case O.HL.HOME_HEADER:
            return { height: O.PS, width: O.CK };
        default:
            return (0, y.xb)(e);
    }
}
function k(e) {
    let { zoomRatio: t, imageRotation: i, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== i || 0 !== n.x || 0 !== n.y;
}
let v = {
    imageDimensions: null,
    cropDimensions: { width: 0, height: 0 },
    dragBoundaries: { top: 0, bottom: 0, left: 0, right: 0 },
    imageTransformCoordinates: B,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: { x: 0, y: 0 },
    isDragging: !1,
    hasImageEdits: !1,
};
function j(e, t) {
    switch (t.type) {
        case "SET_DIMENSIONS":
            return {
                ...e,
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries,
            };
        case "START_DRAGGING_IMAGE":
            return { ...e, startingCoordinates: t.startingCoordinates, isDragging: !0 };
        case "STOP_DRAGGING_IMAGE":
            return {
                ...e,
                isDragging: !1,
                hasImageEdits: k({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            };
        case "ROTATE_IMAGE":
            return {
                ...e,
                imageRotation: t.imageRotation,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageDimensions: t.imageDimensions ?? e.imageDimensions,
                cropDimensions: t.cropDimensions ?? e.cropDimensions,
                dragBoundaries: t.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: k({
                    zoomRatio: e.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            };
        case "SET_IMAGE_ZOOM_RATIO":
            return {
                ...e,
                imageTransformCoordinates: t.imageTransformCoordinates,
                zoomRatio: t.zoomRatio,
                dragBoundaries: t.dragBoundaries,
                hasImageEdits: k({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            };
        case "RESET":
            return {
                ...e,
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: t.imageDimensions ?? e.imageDimensions,
                cropDimensions: t.cropDimensions ?? e.cropDimensions,
                dragBoundaries: t.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: !1,
            };
        default:
            return (0, y.xb)(t);
    }
}
function z(e) {
    let {
            file: t,
            imageUri: i,
            originalAsset: a,
            transitionState: y,
            onCrop: H,
            onClose: k,
            uploadType: z = O.HL.AVATAR,
            showUpsellHeader: V = !1,
            analyticsPage: P,
        } = e,
        U = r.useRef(B),
        $ = r.useRef(null),
        F = r.useRef(null),
        [Q, X] = r.useReducer(j, v),
        {
            cropDimensions: K,
            dragBoundaries: Y,
            imageDimensions: J,
            imageRotation: W,
            zoomRatio: Z,
            startingCoordinates: q,
            isDragging: ee,
            hasImageEdits: et,
        } = Q,
        [ei, en] = r.useState(!1),
        [er, ea] = r.useState(!1),
        [es, eo] = r.useState(0),
        { analyticsLocations: el } = (0, T.Ay)(f.A.IMAGE_CROPPING_MODAL),
        { isGIF: ec, isCheckingAnimation: eu, isEditableAnimatedImage: ed } = (0, L._)(t),
        em = er || ei || eu;
    r.useEffect(() => {
        ec &&
            V &&
            w.default.track(G.HAw.OPEN_MODAL, {
                type: G.JJy.CROP_GIF_MODAL,
                location: { page: P },
                location_stack: el,
                upload_type: z,
            });
    }, [V, P, ec, el, z]);
    let eg = r.useCallback(
            (e, t, i, n) => {
                (U.current = (0, N.F3)(e, t, i)),
                    null != $.current &&
                        ($.current.style.transform = `translate3d(${U.current.x}px, ${U.current.y}px, 0) rotate(${n}deg)`);
            },
            [$],
        ),
        eh = r.useCallback(() => {
            if (null == $.current || Z > 1) return;
            let { width: e, height: t } = $.current.getBoundingClientRect(),
                { width: i, height: n } = (0, N.Qx)(z, e, t),
                r = (0, N.Qp)(z, i, n, t),
                a = (0, N.l$)(i, n, r);
            X({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: i, height: n },
                cropDimensions: r,
                dragBoundaries: a,
            });
        }, [z, Z]),
        eE = r.useCallback((e) => {
            X({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - U.current.x, y: e.clientY - U.current.y },
            });
        }, []),
        eA = r.useCallback(
            (e) => {
                let { x: t, y: i } = U.current;
                ee && (e.clientX !== t || e.clientY !== i) && eg(e.clientX - q.x, e.clientY - q.y, Y, W);
            },
            [Y, W, ee, q.x, q.y, eg],
        ),
        eR = r.useCallback(() => {
            X({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: U.current });
        }, []),
        eC = r.useCallback(
            (e) => {
                if (null == J) return;
                let { width: t, height: i } = J,
                    n = (0, N.l$)(t * e, i * e, K),
                    { x: r, y: a } = U.current;
                ((0, o.inRange)(r, n.right, n.left) && (0, o.inRange)(a, n.top, n.bottom)) || eg(r, a, n, W),
                    X({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: U.current,
                    });
            },
            [K, J, W, eg],
        ),
        eD = r.useCallback(
            (e, t) => {
                let { width: i, height: n } = e,
                    { width: r, height: a } = (0, N.Qx)(z, n, i),
                    s = (0, N.Qp)(z, r, a, i),
                    o = (0, N.l$)(r * t, a * t, s);
                return { newImageDimensions: { width: r, height: a }, newCropDimensions: s, newDragBoundaries: o };
            },
            [z],
        ),
        ef = r.useCallback(() => {
            var e;
            if (null == $.current || null == J) return;
            let t = (W + 90) % 360;
            d.O.announce(S.intl.formatToPlainString(S.t.uYhsHT, { degrees: t }));
            let { x: i, y: n } = ((e = U.current.x), { x: -U.current.y, y: e });
            if (J.width !== J.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = eD(J, Z);
                eg(i, n, a, t),
                    X({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: U.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a,
                    });
            } else eg(i, n, Y, t), X({ type: "ROTATE_IMAGE", imageTransformCoordinates: U.current, imageRotation: t });
        }, [Y, eD, J, W, eg, Z]),
        eT = r.useCallback(() => {
            if (null != $.current && null != J) {
                if (J.width !== J.height && (W - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = eD(J, 1);
                    X({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }), eg(0, 0, i, 0);
                } else {
                    let e = (0, N.l$)(+J.width, +J.height, K);
                    X({ type: "RESET", dragBoundaries: e }), eg(0, 0, e, 0);
                }
                eo((e) => e + 1);
            }
        }, [K, eD, J, W, eg]),
        ep = r.useCallback(() => {
            let e = M(z);
            return e.width !== e.height;
        }, [z]),
        ex = r.useCallback(() => {
            if (null == J) return {};
            let e = J.width / J.height,
                t = ep() && e > O.wL ? K.height / J.height : 1,
                { width: i, height: n } = (function (e, t) {
                    let { width: i, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: i } : { width: i, height: n };
                })(J, W);
            return { width: i * Z * t, minWidth: i * Z * t, height: n * Z * t, minHeight: n * Z * t };
        }, [K.height, J, W, ep, Z]),
        e_ = r.useCallback(async () => {
            let e;
            if (null == $.current) return;
            ea(!0);
            let i = $.current,
                n = M(z);
            if (ed)
                try {
                    let { result: r, cancelFn: a } = await (0, N.ny)({
                        file: t,
                        image: i,
                        cropDimensions: K,
                        cropOriginCoordinates: U.current,
                        maxDimensions: n,
                        imageRotation: W,
                    });
                    (F.current = a), (e = await r), (F.current = null);
                } catch (e) {
                    throw (
                        (F.current?.(),
                        (F.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                e = (0, l.iL)({
                    image: i,
                    cropDimensions: K,
                    cropOriginCoordinates: U.current,
                    maxDimensions: n,
                    imageRotation: W,
                });
            await H({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: i } = e;
                    return i ? (t ? I.E.EDITED_ARCHIVED_ASSET : I.E.ARCHIVED_ASSET) : I.E.NEW_ASSET;
                })({ hasImageEdits: et, hasOriginalAsset: null != a }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                ea(!1),
                await k();
        }, [K, t, et, W, ed, k, H, a, z]),
        eI = r.useCallback(async () => {
            if (null != F.current) {
                F.current(), (F.current = null), ea(!1);
                return;
            }
            await k();
        }, [k]);
    r.useEffect(
        () => (
            window.addEventListener("mouseup", eR),
            window.addEventListener("resize", eh),
            () => {
                window.removeEventListener("mouseup", eR), window.removeEventListener("resize", eh);
            }
        ),
        [eh, eR],
    ),
        r.useEffect(() => {
            if (ee) return window.addEventListener("mousemove", eA), () => window.removeEventListener("mousemove", eA);
        }, [eA, ee]),
        r.useEffect(() => {
            if (null != F.current) return () => F.current?.();
        }, []);
    let ew = z === O.HL.AVATAR || z === O.HL.BANNER,
        ey = (0, x.b)(!ew);
    return (0, n.jsx)(T.f5, {
        value: el,
        children: (0, n.jsxs)(c.Modal, {
            title: S.intl.string(S.t.DxAYCF),
            size: "md",
            actionBarInput: (0, n.jsx)(m.Q, {
                text: S.intl.string(S.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eT,
                disabled: !et,
            }),
            actions: [
                { text: S.intl.string(S.t["9TG40l"]), onClick: eI, variant: "secondary" },
                { text: S.intl.string(S.t.ZSHmKD), onClick: e_, variant: "primary", loading: er, disabled: em },
            ],
            transitionState: y,
            onClose: k,
            children: [
                V &&
                    !ey &&
                    (0, n.jsx)(p.A, {
                        type: z,
                        analyticsPage: P,
                        analyticsSection: G.JJy.CROP_GIF_MODAL,
                        isGIF: ec,
                        banner: i,
                    }),
                (0, n.jsxs)("div", {
                    className: b.jE,
                    children: [
                        (0, n.jsx)("div", {
                            className: b.oW,
                            children: ei
                                ? (0, n.jsxs)("div", {
                                      className: b.Un,
                                      children: [
                                          (0, n.jsx)(g.E, { size: "sm", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                                          (0, n.jsx)(E.E, {
                                              variant: "text-md/normal",
                                              color: "text-feedback-critical",
                                              children: S.intl.string(S.t["+ITMYX"]),
                                          }),
                                      ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              onLoad: eh,
                                              onError: () => en(!0),
                                              style: {
                                                  opacity: +(null != J),
                                                  transform: `translate3d(${U.current.x}px, ${U.current.y}px, 0) rotate(${W}deg)`,
                                                  ...ex(),
                                              },
                                              className: s()(er ? b.As : b.nu, b.hh),
                                              src: i,
                                              crossOrigin: "anonymous",
                                              alt: S.intl.string(S.t.SJNNgO),
                                              ref: $,
                                              onMouseDown: eE,
                                              draggable: !1,
                                          }),
                                          (0, n.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case O.HL.GUILD_ICON:
                                                          return b.$A;
                                                      case O.HL.BANNER:
                                                      case O.HL.GUILD_BANNER:
                                                      case O.HL.VIDEO_BACKGROUND:
                                                      case O.HL.SCHEDULED_EVENT_IMAGE:
                                                      case O.HL.HOME_HEADER:
                                                          return b.rn;
                                                      case O.HL.AVATAR:
                                                      case O.HL.AVATAR_DECORATION:
                                                          return b._h;
                                                  }
                                              })(z),
                                              style: { opacity: +(null != J), width: K.width, height: K.height },
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsxs)("div", {
                            className: b.bK,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: b.mu,
                                    children: [
                                        (0, n.jsx)(A.x, { size: "xxs", color: "currentColor", className: b.HQ }),
                                        (0, n.jsx)(
                                            R.A,
                                            {
                                                className: b.aw,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: eC,
                                                disabled: em,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": S.intl.string(S.t.EqiCcq),
                                                getAriaValueText: (e) =>
                                                    S.intl.formatToPlainString(S.t.GHwBy5, {
                                                        percent: Math.round(100 * e),
                                                    }),
                                            },
                                            es,
                                        ),
                                        (0, n.jsx)(A.x, { size: "md", color: "currentColor", className: b.HQ }),
                                    ],
                                }),
                                (0, n.jsx)(u.m, {
                                    text: S.intl.string(S.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(C.D, {
                                        className: s()(b.On, { [b.r9]: em }),
                                        onClick: em ? void 0 : ef,
                                        "aria-label": S.intl.string(S.t.LzFiKG),
                                        "aria-disabled": em,
                                        children: (0, n.jsx)(D.H, { size: "md", color: "currentColor" }),
                                    }),
                                }),
                            ],
                        }),
                        V &&
                            ey &&
                            (0, n.jsx)(_.A, { uploadType: z, showUpsell: !0, position: "inline", className: b.Lu }),
                    ],
                }),
            ],
        }),
    });
}
