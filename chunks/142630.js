i.d(t, { default: () => H });
var n = i(627968),
    r = i(64700),
    a = i(503698),
    s = i.n(a),
    o = i(735438),
    l = i(830917),
    c = i(158954),
    u = i(435371),
    d = i(582754),
    m = i(397927),
    g = i(793574),
    h = i(688810),
    E = i(504974),
    A = i(702211),
    R = i(699576),
    C = i(392107),
    D = i(954571),
    f = i(403362),
    T = i(424632),
    p = i(726785),
    x = i(339984),
    _ = i(652215),
    I = i(577718),
    w = i(985018),
    y = i(41767);
let N = { x: 0, y: 0 };
function L(e) {
    switch (e) {
        case x.HL.BANNER:
            return { height: x.yZ, width: x.nI };
        case x.HL.VIDEO_BACKGROUND:
            return I.Im;
        case x.HL.AVATAR:
        case x.HL.AVATAR_DECORATION:
        case x.HL.GUILD_ICON:
            return { height: _.XAf, width: _.XAf };
        case x.HL.GUILD_BANNER:
            return { height: x.cN, width: x.Xb };
        case x.HL.SCHEDULED_EVENT_IMAGE:
            return { height: x.Wz, width: x.PU };
        case x.HL.HOME_HEADER:
            return { height: x.PS, width: x.CK };
        default:
            return (0, f.xb)(e);
    }
}
function O(e) {
    let { zoomRatio: t, imageRotation: i, imageTransformCoordinates: n } = e;
    return 1 !== t || 0 !== i || 0 !== n.x || 0 !== n.y;
}
let G = {
    imageDimensions: null,
    cropDimensions: { width: 0, height: 0 },
    dragBoundaries: { top: 0, bottom: 0, left: 0, right: 0 },
    imageTransformCoordinates: N,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: { x: 0, y: 0 },
    isDragging: !1,
    hasImageEdits: !1,
};
function S(e, t) {
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
                hasImageEdits: O({
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
                hasImageEdits: O({
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
                hasImageEdits: O({
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
            return (0, f.xb)(t);
    }
}
function H(e) {
    let {
            file: t,
            imageUri: i,
            originalAsset: a,
            transitionState: f,
            onCrop: I,
            onClose: O,
            uploadType: H = x.HL.AVATAR,
            showUpsellHeader: b = !1,
            analyticsPage: B,
        } = e,
        M = r.useRef(N),
        k = r.useRef(null),
        v = r.useRef(null),
        [j, z] = r.useReducer(S, G),
        {
            cropDimensions: V,
            dragBoundaries: U,
            imageDimensions: $,
            imageRotation: P,
            zoomRatio: F,
            startingCoordinates: Q,
            isDragging: X,
            hasImageEdits: K,
        } = j,
        [W, Y] = r.useState(!1),
        [Z, J] = r.useState(!1),
        [q, ee] = r.useState(0),
        { analyticsLocations: et } = (0, h.Ay)(g.A.IMAGE_CROPPING_MODAL),
        { isGIF: ei, isCheckingAnimation: en, isEditableAnimatedImage: er } = (0, p._)(t),
        ea = Z || W || en;
    r.useEffect(() => {
        ei &&
            b &&
            D.default.track(_.HAw.OPEN_MODAL, {
                type: _.JJy.CROP_GIF_MODAL,
                location: { page: B },
                location_stack: et,
                upload_type: H,
            });
    }, [b, B, ei, et, H]);
    let es = r.useCallback(
            (e, t, i, n) => {
                (M.current = (0, T.F3)(e, t, i)),
                    null != k.current &&
                        (k.current.style.transform = `translate3d(${M.current.x}px, ${M.current.y}px, 0) rotate(${n}deg)`);
            },
            [k],
        ),
        eo = r.useCallback(() => {
            if (null == k.current || F > 1) return;
            let { width: e, height: t } = k.current.getBoundingClientRect(),
                { width: i, height: n } = (0, T.Qx)(H, e, t),
                r = (0, T.Qp)(H, i, n, t),
                a = (0, T.l$)(i, n, r);
            z({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: i, height: n },
                cropDimensions: r,
                dragBoundaries: a,
            });
        }, [H, F]),
        el = r.useCallback((e) => {
            z({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - M.current.x, y: e.clientY - M.current.y },
            });
        }, []),
        ec = r.useCallback(
            (e) => {
                let { x: t, y: i } = M.current;
                X && (e.clientX !== t || e.clientY !== i) && es(e.clientX - Q.x, e.clientY - Q.y, U, P);
            },
            [U, P, X, Q.x, Q.y, es],
        ),
        eu = r.useCallback(() => {
            z({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: M.current });
        }, []),
        ed = r.useCallback(
            (e) => {
                if (null == $) return;
                let { width: t, height: i } = $,
                    n = (0, T.l$)(t * e, i * e, V),
                    { x: r, y: a } = M.current;
                ((0, o.inRange)(r, n.right, n.left) && (0, o.inRange)(a, n.top, n.bottom)) || es(r, a, n, P),
                    z({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: n,
                        imageTransformCoordinates: M.current,
                    });
            },
            [V, $, P, es],
        ),
        em = r.useCallback(
            (e, t) => {
                let { width: i, height: n } = e,
                    { width: r, height: a } = (0, T.Qx)(H, n, i),
                    s = (0, T.Qp)(H, r, a, i),
                    o = (0, T.l$)(r * t, a * t, s);
                return { newImageDimensions: { width: r, height: a }, newCropDimensions: s, newDragBoundaries: o };
            },
            [H],
        ),
        eg = r.useCallback(() => {
            var e;
            if (null == k.current || null == $) return;
            let t = (P + 90) % 360;
            d.OR.announce(w.intl.formatToPlainString(w.t.uYhsHT, { degrees: t }));
            let { x: i, y: n } = ((e = M.current.x), { x: -M.current.y, y: e });
            if ($.width !== $.height) {
                let { newImageDimensions: e, newCropDimensions: r, newDragBoundaries: a } = em($, F);
                es(i, n, a, t),
                    z({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: M.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: r,
                        dragBoundaries: a,
                    });
            } else es(i, n, U, t), z({ type: "ROTATE_IMAGE", imageTransformCoordinates: M.current, imageRotation: t });
        }, [U, em, $, P, es, F]),
        eh = r.useCallback(() => {
            if (null != k.current && null != $) {
                if ($.width !== $.height && (P - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = em($, 1);
                    z({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }), es(0, 0, i, 0);
                } else {
                    let e = (0, T.l$)(+$.width, +$.height, V);
                    z({ type: "RESET", dragBoundaries: e }), es(0, 0, e, 0);
                }
                ee((e) => e + 1);
            }
        }, [V, em, $, P, es]),
        eE = r.useCallback(() => {
            let e = L(H);
            return e.width !== e.height;
        }, [H]),
        eA = r.useCallback(() => {
            if (null == $) return {};
            let e = $.width / $.height,
                t = eE() && e > x.wL ? V.height / $.height : 1,
                { width: i, height: n } = ((e, t) => {
                    let { width: i, height: n } = e;
                    return t % 180 != 0 ? { width: n, height: i } : { width: i, height: n };
                })($, P);
            return { width: i * F * t, minWidth: i * F * t, height: n * F * t, minHeight: n * F * t };
        }, [V.height, $, P, eE, F]),
        eR = r.useCallback(async () => {
            let e;
            if (null == k.current) return;
            J(!0);
            let i = k.current,
                n = L(H);
            if (er)
                try {
                    let { result: r, cancelFn: a } = await (0, T.ny)({
                        file: t,
                        image: i,
                        cropDimensions: V,
                        cropOriginCoordinates: M.current,
                        maxDimensions: n,
                        imageRotation: P,
                    });
                    (v.current = a), (e = await r), (v.current = null);
                } catch (e) {
                    throw (
                        (v.current?.(),
                        (v.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                e = (0, l.iL)({
                    image: i,
                    cropDimensions: V,
                    cropOriginCoordinates: M.current,
                    maxDimensions: n,
                    imageRotation: P,
                });
            await I({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: i } = e;
                    return i ? (t ? C.E.EDITED_ARCHIVED_ASSET : C.E.ARCHIVED_ASSET) : C.E.NEW_ASSET;
                })({ hasImageEdits: K, hasOriginalAsset: null != a }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                J(!1),
                await O();
        }, [V, t, K, P, er, O, I, a, H]),
        eC = r.useCallback(async () => {
            if (null != v.current) {
                v.current(), (v.current = null), J(!1);
                return;
            }
            await O();
        }, [O]);
    r.useEffect(
        () => (
            window.addEventListener("mouseup", eu),
            window.addEventListener("resize", eo),
            () => {
                window.removeEventListener("mouseup", eu), window.removeEventListener("resize", eo);
            }
        ),
        [eo, eu],
    ),
        r.useEffect(() => {
            if (X) return window.addEventListener("mousemove", ec), () => window.removeEventListener("mousemove", ec);
        }, [ec, X]),
        r.useEffect(() => {
            if (null != v.current) return () => v.current?.();
        }, []);
    let eD = H === x.HL.AVATAR || H === x.HL.BANNER,
        ef = (0, A.b)(!eD);
    return (0, n.jsx)(h.f5, {
        value: et,
        children: (0, n.jsxs)(c.Modal, {
            title: w.intl.string(w.t.DxAYCF),
            size: "md",
            actionBarInput: (0, n.jsx)(m.QWc, {
                text: w.intl.string(w.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eh,
                disabled: !K,
            }),
            actions: [
                { text: w.intl.string(w.t["9TG40l"]), onClick: eC, variant: "secondary" },
                { text: w.intl.string(w.t.ZSHmKD), onClick: eR, variant: "primary", loading: Z, disabled: ea },
            ],
            transitionState: f,
            onClose: O,
            children: [
                b &&
                    !ef &&
                    (0, n.jsx)(E.A, {
                        type: H,
                        analyticsPage: B,
                        analyticsSection: _.JJy.CROP_GIF_MODAL,
                        isGIF: ei,
                        banner: i,
                    }),
                (0, n.jsxs)("div", {
                    className: y.jE,
                    children: [
                        (0, n.jsx)("div", {
                            className: y.oW,
                            children: W
                                ? (0, n.jsxs)("div", {
                                      className: y.Un,
                                      children: [
                                          (0, n.jsx)(m.EpV, { size: "sm", color: m.LU0.colors.TEXT_FEEDBACK_CRITICAL }),
                                          (0, n.jsx)(m.Text, {
                                              variant: "text-md/normal",
                                              color: "text-feedback-critical",
                                              children: w.intl.string(w.t["+ITMYX"]),
                                          }),
                                      ],
                                  })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("img", {
                                              onLoad: eo,
                                              onError: () => Y(!0),
                                              style: {
                                                  opacity: +(null != $),
                                                  transform: `translate3d(${M.current.x}px, ${M.current.y}px, 0) rotate(${P}deg)`,
                                                  ...eA(),
                                              },
                                              className: s()(Z ? y.As : y.nu, y.hh),
                                              src: i,
                                              crossOrigin: "anonymous",
                                              alt: w.intl.string(w.t.SJNNgO),
                                              ref: k,
                                              onMouseDown: el,
                                              draggable: !1,
                                          }),
                                          (0, n.jsx)("div", {
                                              className: (function (e) {
                                                  switch (e) {
                                                      case x.HL.GUILD_ICON:
                                                          return y.$A;
                                                      case x.HL.BANNER:
                                                      case x.HL.GUILD_BANNER:
                                                      case x.HL.VIDEO_BACKGROUND:
                                                      case x.HL.SCHEDULED_EVENT_IMAGE:
                                                      case x.HL.HOME_HEADER:
                                                          return y.rn;
                                                      case x.HL.AVATAR:
                                                      case x.HL.AVATAR_DECORATION:
                                                          return y._h;
                                                  }
                                              })(H),
                                              style: { opacity: +(null != $), width: V.width, height: V.height },
                                          }),
                                      ],
                                  }),
                        }),
                        (0, n.jsxs)("div", {
                            className: y.bK,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: y.mu,
                                    children: [
                                        (0, n.jsx)(m.xfq, { size: "xxs", color: "currentColor", className: y.HQ }),
                                        (0, n.jsx)(
                                            m.Apm,
                                            {
                                                className: y.aw,
                                                initialValue: 1,
                                                minValue: 1,
                                                maxValue: 2,
                                                keyboardStep: 0.025,
                                                asValueChanges: ed,
                                                disabled: ea,
                                                equidistant: !0,
                                                hideBubble: !0,
                                                "aria-label": w.intl.string(w.t.dnvZSg),
                                            },
                                            q,
                                        ),
                                        (0, n.jsx)(m.xfq, { size: "md", color: "currentColor", className: y.HQ }),
                                    ],
                                }),
                                (0, n.jsx)(u.m_, {
                                    text: w.intl.string(w.t.E36Wd4),
                                    ariaHidden: !0,
                                    children: (0, n.jsx)(m.DUT, {
                                        className: s()(y.On, { [y.r9]: ea }),
                                        onClick: ea ? void 0 : eg,
                                        "aria-label": w.intl.string(w.t.LzFiKG),
                                        "aria-disabled": ea,
                                        children: (0, n.jsx)(m.H_z, { size: "md", color: "currentColor" }),
                                    }),
                                }),
                            ],
                        }),
                        b &&
                            ef &&
                            (0, n.jsx)(R.A, { uploadType: H, showUpsell: !0, position: "inline", className: y.Lu }),
                    ],
                }),
            ],
        }),
    });
}
