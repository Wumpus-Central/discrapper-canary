t.d(i, { default: () => b });
var n = t(627968),
    r = t(64700),
    a = t(503698),
    s = t.n(a),
    o = t(735438),
    l = t(830917),
    c = t(158954),
    u = t(435371),
    d = t(397927),
    m = t(793574),
    g = t(688810),
    h = t(504974),
    E = t(702211),
    A = t(699576),
    R = t(392107),
    C = t(954571),
    D = t(403362),
    f = t(424632),
    p = t(726785),
    T = t(339984),
    x = t(652215),
    _ = t(577718),
    I = t(985018),
    w = t(41767);
let y = { x: 0, y: 0 };
function L(e) {
    switch (e) {
        case T.HL.BANNER:
            return { height: T.yZ, width: T.nI };
        case T.HL.VIDEO_BACKGROUND:
            return _.Im;
        case T.HL.AVATAR:
        case T.HL.AVATAR_DECORATION:
        case T.HL.GUILD_ICON:
            return { height: x.XAf, width: x.XAf };
        case T.HL.GUILD_BANNER:
            return { height: T.cN, width: T.Xb };
        case T.HL.SCHEDULED_EVENT_IMAGE:
            return { height: T.Wz, width: T.PU };
        case T.HL.HOME_HEADER:
            return { height: T.PS, width: T.CK };
        default:
            return (0, D.xb)(e);
    }
}
function N(e) {
    let { zoomRatio: i, imageRotation: t, imageTransformCoordinates: n } = e;
    return 1 !== i || 0 !== t || 0 !== n.x || 0 !== n.y;
}
let O = {
    imageDimensions: null,
    cropDimensions: { width: 0, height: 0 },
    dragBoundaries: { top: 0, bottom: 0, left: 0, right: 0 },
    imageTransformCoordinates: y,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: { x: 0, y: 0 },
    isDragging: !1,
    hasImageEdits: !1,
};
function G(e, i) {
    switch (i.type) {
        case "SET_DIMENSIONS":
            return {
                ...e,
                imageDimensions: i.imageDimensions,
                cropDimensions: i.cropDimensions,
                dragBoundaries: i.dragBoundaries,
            };
        case "START_DRAGGING_IMAGE":
            return { ...e, startingCoordinates: i.startingCoordinates, isDragging: !0 };
        case "STOP_DRAGGING_IMAGE":
            return {
                ...e,
                isDragging: !1,
                hasImageEdits: N({
                    zoomRatio: e.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: i.imageTransformCoordinates,
                }),
            };
        case "ROTATE_IMAGE":
            return {
                ...e,
                imageRotation: i.imageRotation,
                imageTransformCoordinates: i.imageTransformCoordinates,
                imageDimensions: i.imageDimensions ?? e.imageDimensions,
                cropDimensions: i.cropDimensions ?? e.cropDimensions,
                dragBoundaries: i.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: N({
                    zoomRatio: e.zoomRatio,
                    imageRotation: i.imageRotation,
                    imageTransformCoordinates: i.imageTransformCoordinates,
                }),
            };
        case "SET_IMAGE_ZOOM_RATIO":
            return {
                ...e,
                imageTransformCoordinates: i.imageTransformCoordinates,
                zoomRatio: i.zoomRatio,
                dragBoundaries: i.dragBoundaries,
                hasImageEdits: N({
                    zoomRatio: i.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: i.imageTransformCoordinates,
                }),
            };
        case "RESET":
            return {
                ...e,
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: i.imageDimensions ?? e.imageDimensions,
                cropDimensions: i.cropDimensions ?? e.cropDimensions,
                dragBoundaries: i.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: !1,
            };
        default:
            return (0, D.xb)(i);
    }
}
function b(e) {
    let {
            file: i,
            imageUri: t,
            originalAsset: a,
            transitionState: D,
            onCrop: _,
            onClose: N,
            uploadType: b = T.HL.AVATAR,
            showUpsellHeader: H = !1,
            analyticsPage: S,
        } = e,
        B = r.useRef(y),
        v = r.useRef(null),
        M = r.useRef(null),
        [k, j] = r.useReducer(G, O),
        {
            cropDimensions: z,
            dragBoundaries: V,
            imageDimensions: U,
            imageRotation: $,
            zoomRatio: P,
            startingCoordinates: F,
            isDragging: Q,
            hasImageEdits: X,
        } = k,
        [K, W] = r.useState(!1),
        [Z, Y] = r.useState(!1),
        [J, q] = r.useState(0),
        { analyticsLocations: ee } = (0, g.Ay)(m.A.IMAGE_CROPPING_MODAL),
        { isGIF: ei, isCheckingAnimation: et, isEditableAnimatedImage: en } = (0, p._)(i),
        er = Z || K || et;
    r.useEffect(() => {
        ei &&
            H &&
            C.default.track(x.HAw.OPEN_MODAL, {
                type: x.JJy.CROP_GIF_MODAL,
                location: { page: S },
                location_stack: ee,
                upload_type: b,
            });
    }, [H, S, ei, ee, b]);
    let ea = r.useCallback(
            (e, i, t, n) => {
                (B.current = (0, f.F3)(e, i, t)),
                    null != v.current &&
                        (v.current.style.transform = `translate3d(${B.current.x}px, ${B.current.y}px, 0) rotate(${n}deg)`);
            },
            [v],
        ),
        es = r.useCallback(() => {
            if (null == v.current || P > 1) return;
            let { width: e, height: i } = v.current.getBoundingClientRect(),
                { width: t, height: n } = (0, f.Qx)(b, e, i),
                r = (0, f.Qp)(b, t, n, i),
                a = (0, f.l$)(t, n, r);
            j({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: t, height: n },
                cropDimensions: r,
                dragBoundaries: a,
            });
        }, [b, P]),
        eo = r.useCallback((e) => {
            j({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - B.current.x, y: e.clientY - B.current.y },
            });
        }, []),
        el = r.useCallback(
            (e) => {
                let { x: i, y: t } = B.current;
                Q && (e.clientX !== i || e.clientY !== t) && ea(e.clientX - F.x, e.clientY - F.y, V, $);
            },
            [V, $, Q, F.x, F.y, ea],
        ),
        ec = r.useCallback(() => {
            j({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: B.current });
        }, []),
        eu = r.useCallback(
            (e) => {
                if (null == U) return;
                let { width: i, height: t } = U,
                    n = (0, f.l$)(i * e, t * e, z),
                    { x: r, y: a } = B.current;
                ((0, o.inRange)(r, n.right, n.left) && (0, o.inRange)(a, n.top, n.bottom)) || ea(r, a, n, $),
                    j({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: B.current,
                    });
            },
            [z, U, $, ea],
        ),
        ed = r.useCallback(
            (e, i) => {
                let { width: t, height: n } = e,
                    { width: r, height: a } = (0, f.Qx)(b, n, t),
                    s = (0, f.Qp)(b, r, a, t),
                    o = (0, f.l$)(r * i, a * i, s);
                return { newImageDimensions: { width: r, height: a }, newCropDimensions: s, newDragBoundaries: o };
            },
            [b],
        ),
        em = r.useCallback(() => {
            var e;
            if (null == v.current || null == U) return;
            let i = ($ + 90) % 360,
                { x: t, y: n } = ((e = B.current.x), { x: -B.current.y, y: e });
            if (U.width !== U.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = ed(U, P);
                ea(t, n, a, i),
                    j({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: B.current,
                        imageRotation: i,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a,
                    });
            } else ea(t, n, V, i), j({ type: "ROTATE_IMAGE", imageTransformCoordinates: B.current, imageRotation: i });
        }, [V, ed, U, $, ea, P]),
        eg = r.useCallback(() => {
            if (null != v.current && null != U) {
                if (U.width !== U.height && ($ - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: i, newDragBoundaries: t } = ed(U, 1);
                    j({ type: "RESET", imageDimensions: e, cropDimensions: i, dragBoundaries: t }), ea(0, 0, t, 0);
                } else {
                    let e = (0, f.l$)(+U.width, +U.height, z);
                    j({ type: "RESET", dragBoundaries: e }), ea(0, 0, e, 0);
                }
                q((e) => e + 1);
            }
        }, [z, ed, U, $, ea]),
        eh = r.useCallback(() => {
            let e = L(b);
            return e.width !== e.height;
        }, [b]),
        eE = r.useCallback(() => {
            if (null == U) return {};
            let e = U.width / U.height,
                i = eh() && e > T.wL ? z.height / U.height : 1,
                { width: t, height: n } = ((e, i) => {
                    let { width: t, height: n } = e;
                    return i % 180 != 0 ? { width: n, height: t } : { width: t, height: n };
                })(U, $);
            return { width: t * P * i, minWidth: t * P * i, height: n * P * i, minHeight: n * P * i };
        }, [z.height, U, $, eh, P]),
        eA = r.useCallback(async () => {
            let e;
            if (null == v.current) return;
            Y(!0);
            let t = v.current,
                n = L(b);
            if (en)
                try {
                    let { result: r, cancelFn: a } = await (0, f.ny)({
                        file: i,
                        image: t,
                        cropDimensions: z,
                        cropOriginCoordinates: B.current,
                        maxDimensions: n,
                        imageRotation: $,
                    });
                    (M.current = a), (e = await r), (M.current = null);
                } catch (e) {
                    throw (
                        (M.current?.(),
                        (M.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                e = (0, l.iL)({
                    image: t,
                    cropDimensions: z,
                    cropOriginCoordinates: B.current,
                    maxDimensions: n,
                    imageRotation: $,
                });
            await _({
                assetOrigin: (function (e) {
                    let { hasImageEdits: i, hasOriginalAsset: t } = e;
                    return t ? (i ? R.E.EDITED_ARCHIVED_ASSET : R.E.ARCHIVED_ASSET) : R.E.NEW_ASSET;
                })({ hasImageEdits: X, hasOriginalAsset: null != a }),
                imageUri: e,
                file: i,
                originalAsset: a,
            }),
                Y(!1),
                await N();
        }, [z, i, X, $, en, N, _, a, b]),
        eR = r.useCallback(async () => {
            if (null != M.current) {
                M.current(), (M.current = null), Y(!1);
                return;
            }
            await N();
        }, [N]);
    r.useEffect(
        () => (
            window.addEventListener("mouseup", ec),
            window.addEventListener("resize", es),
            () => {
                window.removeEventListener("mouseup", ec), window.removeEventListener("resize", es);
            }
        ),
        [es, ec],
    ),
        r.useEffect(() => {
            if (Q) return window.addEventListener("mousemove", el), () => window.removeEventListener("mousemove", el);
        }, [el, Q]),
        r.useEffect(() => {
            if (null != M.current) return () => M.current?.();
        }, []);
    let eC = b === T.HL.AVATAR || b === T.HL.BANNER,
        eD = (0, E.b)(!eC);
    return (0, n.jsx)(g.f5, {
        value: ee,
        children: (0, n.jsxs)(c.Modal, {
            title: I.intl.string(I.t.DxAYCF),
            size: "md",
            actionBarInput: (0, n.jsx)(d.QWc, {
                text: I.intl.string(I.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eg,
                disabled: !X,
            }),
            actions: [
                { text: I.intl.string(I.t["9TG40l"]), onClick: eR, variant: "secondary" },
                { text: I.intl.string(I.t.ZSHmKD), onClick: eA, variant: "primary", loading: Z, disabled: er },
            ],
            transitionState: D,
            onClose: N,
            children: [
                H &&
                    !eD &&
                    (0, n.jsx)(h.A, {
                        type: b,
                        analyticsPage: S,
                        analyticsSection: x.JJy.CROP_GIF_MODAL,
                        isGIF: ei,
                        banner: t,
                    }),
                (0, n.jsxs)("div", {
                    className: w.jE,
                    children: [
                        (0, n.jsx)("div", {
                            className: w.oW,
                            children: K
                                ? (0, n.jsxs)("div", {
                                      className: w.Un,
                                      children: [
                                          (0, n.jsx)(d.EpV, { size: "sm", color: d.LU0.colors.TEXT_FEEDBACK_CRITICAL }),
                                          (0, n.jsx)(d.Text, {
                                              variant: "text-md/normal",
                                              color: "text-feedback-critical",
                                              children: I.intl.string(I.t["+ITMYX"]),
                                          }),
                                      ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              onLoad: es,
                                              onError: () => W(!0),
                                              style: {
                                                  opacity: +(null != U),
                                                  transform: `translate3d(${B.current.x}px, ${B.current.y}px, 0) rotate(${$}deg)`,
                                                  ...eE(),
                                              },
                                              className: s()(Z ? w.As : w.nu, w.hh),
                                              src: t,
                                              crossOrigin: "anonymous",
                                              alt: "avatar",
                                              ref: v,
                                              onMouseDown: eo,
                                              draggable: !1,
                                          }),
                                          (0, n.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case T.HL.GUILD_ICON:
                                                          return w.$A;
                                                      case T.HL.BANNER:
                                                      case T.HL.GUILD_BANNER:
                                                      case T.HL.VIDEO_BACKGROUND:
                                                      case T.HL.SCHEDULED_EVENT_IMAGE:
                                                      case T.HL.HOME_HEADER:
                                                          return w.rn;
                                                      case T.HL.AVATAR:
                                                      case T.HL.AVATAR_DECORATION:
                                                          return w._h;
                                                  }
                                              })(b),
                                              style: { opacity: +(null != U), width: z.width, height: z.height },
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsxs)("div", {
                            className: w.bK,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: w.mu,
                                    children: [
                                        (0, n.jsx)(d.xfq, { size: "xxs", color: "currentColor", className: w.HQ }),
                                        (0, n.jsx)(
                                            d.Apm,
                                            {
                                                className: w.aw,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: eu,
                                                disabled: er,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": I.intl.string(I.t.dnvZSg),
                                            },
                                            J,
                                        ),
                                        (0, n.jsx)(d.xfq, { size: "md", color: "currentColor", className: w.HQ }),
                                    ],
                                }),
                                (0, n.jsx)(u.m_, {
                                    text: I.intl.string(I.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(d.DUT, {
                                        className: s()(w.On, { [w.r9]: er }),
                                        onClick: er ? void 0 : em,
                                        "aria-label": I.intl.string(I.t.LzFiKG),
                                        "aria-disabled": er,
                                        children: (0, n.jsx)(d.H_z, { size: "md", color: "currentColor" }),
                                    }),
                                }),
                            ],
                        }),
                        H &&
                            eD &&
                            (0, n.jsx)(A.A, { uploadType: b, showUpsell: !0, position: "inline", className: w.Lu }),
                    ],
                }),
            ],
        }),
    });
}
