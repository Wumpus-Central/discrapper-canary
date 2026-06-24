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
            returnRef: U,
        } = e,
        $ = r.useRef(B),
        F = r.useRef(null),
        Q = r.useRef(null),
        [X, K] = r.useReducer(j, v),
        {
            cropDimensions: Y,
            dragBoundaries: J,
            imageDimensions: W,
            imageRotation: Z,
            zoomRatio: q,
            startingCoordinates: ee,
            isDragging: et,
            hasImageEdits: ei,
        } = X,
        [en, er] = r.useState(!1),
        [ea, es] = r.useState(!1),
        [eo, el] = r.useState(0),
        { analyticsLocations: ec } = (0, T.Ay)(f.A.IMAGE_CROPPING_MODAL),
        { isGIF: eu, isCheckingAnimation: ed, isEditableAnimatedImage: em } = (0, L._)(t),
        eg = ea || en || ed;
    r.useEffect(() => {
        eu &&
            V &&
            w.default.track(G.HAw.OPEN_MODAL, {
                type: G.JJy.CROP_GIF_MODAL,
                location: { page: P },
                location_stack: ec,
                upload_type: z,
            });
    }, [V, P, eu, ec, z]);
    let eh = r.useCallback(
            (e, t, i, n) => {
                ($.current = (0, N.F3)(e, t, i)),
                    null != F.current &&
                        (F.current.style.transform = `translate3d(${$.current.x}px, ${$.current.y}px, 0) rotate(${n}deg)`);
            },
            [F],
        ),
        eE = r.useCallback(() => {
            if (null == F.current || q > 1) return;
            let { width: e, height: t } = F.current.getBoundingClientRect(),
                { width: i, height: n } = (0, N.Qx)(z, e, t),
                r = (0, N.Qp)(z, i, n, t),
                a = (0, N.l$)(i, n, r);
            K({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: i, height: n },
                cropDimensions: r,
                dragBoundaries: a,
            });
        }, [z, q]),
        eA = r.useCallback((e) => {
            K({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - $.current.x, y: e.clientY - $.current.y },
            });
        }, []),
        eR = r.useCallback(
            (e) => {
                let { x: t, y: i } = $.current;
                et && (e.clientX !== t || e.clientY !== i) && eh(e.clientX - ee.x, e.clientY - ee.y, J, Z);
            },
            [J, Z, et, ee.x, ee.y, eh],
        ),
        eC = r.useCallback(() => {
            K({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: $.current });
        }, []),
        eD = r.useCallback(
            (e) => {
                if (null == W) return;
                let { width: t, height: i } = W,
                    n = (0, N.l$)(t * e, i * e, Y),
                    { x: r, y: a } = $.current;
                ((0, o.inRange)(r, n.right, n.left) && (0, o.inRange)(a, n.top, n.bottom)) || eh(r, a, n, Z),
                    K({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: $.current,
                    });
            },
            [Y, W, Z, eh],
        ),
        ef = r.useCallback(
            (e, t) => {
                let { width: i, height: n } = e,
                    { width: r, height: a } = (0, N.Qx)(z, n, i),
                    s = (0, N.Qp)(z, r, a, i),
                    o = (0, N.l$)(r * t, a * t, s);
                return { newImageDimensions: { width: r, height: a }, newCropDimensions: s, newDragBoundaries: o };
            },
            [z],
        ),
        eT = r.useCallback(() => {
            var e;
            if (null == F.current || null == W) return;
            let t = (Z + 90) % 360;
            d.O.announce(S.intl.formatToPlainString(S.t.uYhsHT, { degrees: t }));
            let { x: i, y: n } = ((e = $.current.x), { x: -$.current.y, y: e });
            if (W.width !== W.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = ef(W, q);
                eh(i, n, a, t),
                    K({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: $.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a,
                    });
            } else eh(i, n, J, t), K({ type: "ROTATE_IMAGE", imageTransformCoordinates: $.current, imageRotation: t });
        }, [J, ef, W, Z, eh, q]),
        ep = r.useCallback(() => {
            if (null != F.current && null != W) {
                if (W.width !== W.height && (Z - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = ef(W, 1);
                    K({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }), eh(0, 0, i, 0);
                } else {
                    let e = (0, N.l$)(+W.width, +W.height, Y);
                    K({ type: "RESET", dragBoundaries: e }), eh(0, 0, e, 0);
                }
                el((e) => e + 1);
            }
        }, [Y, ef, W, Z, eh]),
        ex = r.useCallback(() => {
            let e = M(z);
            return e.width !== e.height;
        }, [z]),
        e_ = r.useCallback(() => {
            if (null == W) return {};
            let e = W.width / W.height,
                t = ex() && e > O.wL ? Y.height / W.height : 1,
                { width: i, height: n } = (function (e, t) {
                    let { width: i, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: i } : { width: i, height: n };
                })(W, Z);
            return { width: i * q * t, minWidth: i * q * t, height: n * q * t, minHeight: n * q * t };
        }, [Y.height, W, Z, ex, q]),
        eI = r.useCallback(async () => {
            let e;
            if (null == F.current) return;
            es(!0);
            let i = F.current,
                n = M(z);
            if (em)
                try {
                    let { result: r, cancelFn: a } = await (0, N.ny)({
                        file: t,
                        image: i,
                        cropDimensions: Y,
                        cropOriginCoordinates: $.current,
                        maxDimensions: n,
                        imageRotation: Z,
                    });
                    (Q.current = a), (e = await r), (Q.current = null);
                } catch (e) {
                    throw (
                        (Q.current?.(),
                        (Q.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                e = (0, l.iL)({
                    image: i,
                    cropDimensions: Y,
                    cropOriginCoordinates: $.current,
                    maxDimensions: n,
                    imageRotation: Z,
                });
            await H({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: i } = e;
                    return i ? (t ? I.E.EDITED_ARCHIVED_ASSET : I.E.ARCHIVED_ASSET) : I.E.NEW_ASSET;
                })({ hasImageEdits: ei, hasOriginalAsset: null != a }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                es(!1),
                await k();
        }, [Y, t, ei, Z, em, k, H, a, z]),
        ew = r.useCallback(async () => {
            if (null != Q.current) {
                Q.current(), (Q.current = null), es(!1);
                return;
            }
            await k();
        }, [k]);
    r.useEffect(
        () => (
            window.addEventListener("mouseup", eC),
            window.addEventListener("resize", eE),
            () => {
                window.removeEventListener("mouseup", eC), window.removeEventListener("resize", eE);
            }
        ),
        [eE, eC],
    ),
        r.useEffect(() => {
            if (et) return window.addEventListener("mousemove", eR), () => window.removeEventListener("mousemove", eR);
        }, [eR, et]),
        r.useEffect(() => {
            if (null != Q.current) return () => Q.current?.();
        }, []);
    let ey = z === O.HL.AVATAR || z === O.HL.BANNER,
        eN = (0, x.b)(!ey);
    return (0, n.jsx)(T.f5, {
        value: ec,
        children: (0, n.jsxs)(c.Modal, {
            title: S.intl.string(S.t.DxAYCF),
            size: "md",
            actionBarInput: (0, n.jsx)(m.Q, {
                text: S.intl.string(S.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: ep,
                disabled: !ei,
            }),
            actions: [
                { text: S.intl.string(S.t["9TG40l"]), onClick: ew, variant: "secondary" },
                { text: S.intl.string(S.t.ZSHmKD), onClick: eI, variant: "primary", loading: ea, disabled: eg },
            ],
            transitionState: y,
            returnRef: U,
            onClose: k,
            children: [
                V &&
                    !eN &&
                    (0, n.jsx)(p.A, {
                        type: z,
                        analyticsPage: P,
                        analyticsSection: G.JJy.CROP_GIF_MODAL,
                        isGIF: eu,
                        banner: i,
                    }),
                (0, n.jsxs)("div", {
                    className: b.jE,
                    children: [
                        (0, n.jsx)("div", {
                            className: b.oW,
                            children: en
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
                                              onLoad: eE,
                                              onError: () => er(!0),
                                              style: {
                                                  opacity: +(null != W),
                                                  transform: `translate3d(${$.current.x}px, ${$.current.y}px, 0) rotate(${Z}deg)`,
                                                  ...e_(),
                                              },
                                              className: s()(ea ? b.As : b.nu, b.hh),
                                              src: i,
                                              crossOrigin: "anonymous",
                                              alt: S.intl.string(S.t.SJNNgO),
                                              ref: F,
                                              onMouseDown: eA,
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
                                              style: { opacity: +(null != W), width: Y.width, height: Y.height },
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
                                                asValueChanges: eD,
                                                disabled: eg,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": S.intl.string(S.t.EqiCcq),
                                                getAriaValueText: (e) =>
                                                    S.intl.formatToPlainString(S.t.GHwBy5, {
                                                        percent: Math.round(100 * e),
                                                    }),
                                            },
                                            eo,
                                        ),
                                        (0, n.jsx)(A.x, { size: "md", color: "currentColor", className: b.HQ }),
                                    ],
                                }),
                                (0, n.jsx)(u.m, {
                                    text: S.intl.string(S.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(C.D, {
                                        className: s()(b.On, { [b.r9]: eg }),
                                        onClick: eg ? void 0 : eT,
                                        "aria-label": S.intl.string(S.t.LzFiKG),
                                        "aria-disabled": eg,
                                        children: (0, n.jsx)(D.H, { size: "md", color: "currentColor" }),
                                    }),
                                }),
                            ],
                        }),
                        V &&
                            eN &&
                            (0, n.jsx)(_.A, { uploadType: z, showUpsell: !0, position: "inline", className: b.Lu }),
                    ],
                }),
            ],
        }),
    });
}
