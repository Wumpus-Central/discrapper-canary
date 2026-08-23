i.d(t, { default: () => K });
var r = i(477900),
    a = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(435558),
    l = i(830917),
    u = i(189213),
    c = i(259678),
    d = i(140735),
    m = i(17928),
    g = i(765178),
    h = i(123292),
    f = i(695366),
    E = i(661531),
    R = i(834730),
    A = i(475358),
    p = i(191023),
    T = i(106236),
    x = i(866665),
    C = i(939249),
    D = i(831453),
    y = i(775602),
    I = i(793574),
    w = i(688810),
    _ = i(925895),
    G = i(702211),
    N = i(699576),
    S = i(469054),
    b = i(174459),
    L = i(403362),
    O = i(424632),
    H = i(902916),
    v = i(339984),
    M = i(652215),
    j = i(577718),
    B = i(375708),
    k = i(43850);
let z = { x: 0, y: 0 };
function P(e) {
    switch (e) {
        case v.HL.BANNER:
            return { height: v.yZ, width: v.nI };
        case v.HL.VIDEO_BACKGROUND:
            return j.Im;
        case v.HL.AVATAR:
        case v.HL.AVATAR_DECORATION:
        case v.HL.GUILD_ICON:
        case v.HL.PERSONAL_WIDGET_FIELD:
            return { height: M.XAf, width: M.XAf };
        case v.HL.GUILD_BANNER:
            return { height: v.cN, width: v.Xb };
        case v.HL.SCHEDULED_EVENT_IMAGE:
            return { height: v.Wz, width: v.PU };
        case v.HL.HOME_HEADER:
            return { height: v.PS, width: v.CK };
        case v.HL.PERSONAL_WIDGET_COVER:
            return { height: v.lF, width: v.aG };
        default:
            return (0, L.xb)(e);
    }
}
function V(e) {
    let { zoomRatio: t, imageRotation: i, imageTransformCoordinates: r } = e;
    return 1 !== t || 0 !== i || 0 !== r.x || 0 !== r.y;
}
let F = {
    imageDimensions: null,
    cropDimensions: { width: 0, height: 0 },
    dragBoundaries: { top: 0, bottom: 0, left: 0, right: 0 },
    imageTransformCoordinates: z,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: { x: 0, y: 0 },
    isDragging: !1,
    hasImageEdits: !1,
};
function U(e, t) {
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
                imageTransformCoordinates: t.imageTransformCoordinates,
                hasImageEdits: V({
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
                hasImageEdits: V({
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
                hasImageEdits: V({
                    zoomRatio: t.zoomRatio,
                    imageRotation: e.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            };
        case "RESTORE_TRANSFORM":
            return {
                ...e,
                imageDimensions: t.imageDimensions,
                cropDimensions: t.cropDimensions,
                dragBoundaries: t.dragBoundaries,
                imageTransformCoordinates: t.imageTransformCoordinates,
                imageRotation: t.imageRotation,
                zoomRatio: t.zoomRatio,
                hasImageEdits: V({
                    zoomRatio: t.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            };
        case "RESET":
            return {
                ...e,
                imageTransformCoordinates: z,
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: t.imageDimensions ?? e.imageDimensions,
                cropDimensions: t.cropDimensions ?? e.cropDimensions,
                dragBoundaries: t.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: !1,
            };
        default:
            return (0, L.xb)(t);
    }
}
function K(e) {
    let {
            file: t,
            imageUri: i,
            originalAsset: n,
            transitionState: L,
            onCrop: j,
            onClose: V,
            uploadType: K = v.HL.AVATAR,
            showUpsellHeader: $ = !1,
            analyticsPage: Q,
            returnRef: W,
            initialTransform: X,
        } = e,
        Y = a.useRef(z),
        Z = a.useRef(null),
        J = a.useRef(null),
        q = a.useRef(null),
        ee = a.useRef(null),
        et = a.useId(),
        ei = a.useRef(null),
        er = a.useRef(!1),
        [ea, en] = a.useReducer(U, F),
        {
            cropDimensions: eo,
            dragBoundaries: es,
            imageDimensions: el,
            imageRotation: eu,
            imageTransformCoordinates: ec,
            zoomRatio: ed,
            startingCoordinates: em,
            isDragging: eg,
            hasImageEdits: eh,
        } = ea,
        [ef, eE] = a.useState(!1),
        [eR, eA] = a.useState(!1),
        [ep, eT] = a.useState(0),
        [ex, eC] = a.useState(X?.zoomRatio ?? 1),
        [eD, ey] = a.useState(!1),
        [eI, ew] = a.useState("x"),
        e_ = (0, m.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        { analyticsLocations: eG } = (0, w.Ay)(I.A.IMAGE_CROPPING_MODAL),
        { isGIF: eN, isCheckingAnimation: eS, isEditableAnimatedImage: eb } = (0, H._)(t),
        eL = eR || ef || eS,
        eO = null != el && es.right > 0,
        eH = null != el && es.top > 0,
        ev = eO || eH;
    a.useEffect(() => {
        "x" === eI && !eO && eH ? ew("y") : "y" === eI && !eH && eO && ew("x");
    }, [eI, eO, eH]);
    let eM = es.right > 0 ? Math.round(50 + (ec.x / es.right) * 50) : 50,
        ej = es.top > 0 ? Math.round(50 - (ec.y / es.top) * 50) : 50,
        eB = 2 * es.right + eo.width,
        ek = 2 * es.top + eo.height,
        ez = eB > 0 ? Math.round(((es.right - ec.x) / eB) * 100) : 0,
        eP = eB > 0 ? Math.round(((es.right + ec.x) / eB) * 100) : 0,
        eV = ek > 0 ? Math.round(((es.top - ec.y) / ek) * 100) : 0,
        eF = ek > 0 ? Math.round(((es.top + ec.y) / ek) * 100) : 0;
    a.useEffect(() => {
        eN &&
            $ &&
            b.default.track(M.HAw.OPEN_MODAL, {
                type: M.JJy.CROP_GIF_MODAL,
                location: { page: Q },
                location_stack: eG,
                upload_type: K,
            });
    }, [$, Q, eN, eG, K]);
    let eU = a.useCallback(
            (e, t, i, r) => {
                (Y.current = (0, O.F3)(e, t, i)),
                    null != Z.current &&
                        (Z.current.style.transform = `translate3d(${Y.current.x}px, ${Y.current.y}px, 0) rotate(${r}deg)`);
            },
            [Z],
        ),
        eK = a.useCallback(() => {
            if (null == Z.current || ed > 1) return;
            let { width: e, height: t } = Z.current.getBoundingClientRect(),
                { width: i, height: r } = (0, O.Qx)(K, e, t),
                a = (0, O.Qp)(K, i, r, t),
                n = (0, O.l$)(i, r, a);
            if (null != X && !er.current) {
                er.current = !0;
                let e = (function (e, t, i, r) {
                    let a = t,
                        n = i;
                    for (let t = 0; t < r.imageRotation; t += 90) {
                        if (a.width === a.height) continue;
                        let { width: t, height: i } = a;
                        (a = (0, O.Qx)(e, i, t)), (n = (0, O.Qp)(e, a.width, a.height, t));
                    }
                    let o = (0, O.l$)(a.width * r.zoomRatio, a.height * r.zoomRatio, n);
                    return {
                        imageDimensions: a,
                        cropDimensions: n,
                        dragBoundaries: o,
                        imageTransformCoordinates: (0, O.F3)(r.offsetRatio.x * o.right, r.offsetRatio.y * o.top, o),
                    };
                })(K, { width: i, height: r }, a, X);
                eU(e.imageTransformCoordinates.x, e.imageTransformCoordinates.y, e.dragBoundaries, X.imageRotation),
                    en({ type: "RESTORE_TRANSFORM", ...e, imageRotation: X.imageRotation, zoomRatio: X.zoomRatio });
                return;
            }
            en({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: i, height: r },
                cropDimensions: a,
                dragBoundaries: n,
            });
        }, [K, ed, X, eU]),
        e$ = a.useCallback((e) => {
            en({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - Y.current.x, y: e.clientY - Y.current.y },
            });
        }, []),
        eQ = a.useCallback(
            (e) => {
                let { x: t, y: i } = Y.current;
                eg && (e.clientX !== t || e.clientY !== i) && eU(e.clientX - em.x, e.clientY - em.y, es, eu);
            },
            [es, eu, eg, em.x, em.y, eU],
        ),
        eW = a.useCallback(() => {
            en({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current });
        }, []),
        eX = a.useCallback(
            (e) => {
                if (null == el) return;
                let { width: t, height: i } = el,
                    r = (0, O.l$)(t * e, i * e, eo),
                    { x: a, y: n } = Y.current;
                ((0, s.inRange)(a, r.right, r.left) && (0, s.inRange)(n, r.top, r.bottom)) || eU(a, n, r, eu),
                    en({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: r,
                        imageTransformCoordinates: Y.current,
                    });
            },
            [eo, el, eu, eU],
        ),
        eY = a.useCallback(
            (e, t) => {
                let { width: i, height: r } = e,
                    { width: a, height: n } = (0, O.Qx)(K, r, i),
                    o = (0, O.Qp)(K, a, n, i),
                    s = (0, O.l$)(a * t, n * t, o);
                return { newImageDimensions: { width: a, height: n }, newCropDimensions: o, newDragBoundaries: s };
            },
            [K],
        ),
        eZ = a.useCallback(() => {
            var e;
            if (null == Z.current || null == el) return;
            let t = (eu + 90) % 360;
            g.O.announce(B.intl.formatToPlainString(B.t.uYhsHT, { degrees: t }));
            let { x: i, y: r } = ((e = Y.current.x), { x: -Y.current.y, y: e });
            if (el.width !== el.height) {
                let { newImageDimensions: e, newCropDimensions: a, newDragBoundaries: n } = eY(el, ed);
                eU(i, r, n, t),
                    en({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: Y.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: a,
                        dragBoundaries: n,
                    });
            } else
                eU(i, r, es, t), en({ type: "ROTATE_IMAGE", imageTransformCoordinates: Y.current, imageRotation: t });
        }, [es, eY, el, eu, eU, ed]),
        eJ = a.useCallback(() => {
            if (null != Z.current && null != el) {
                if (el.width !== el.height && (eu - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = eY(el, 1);
                    en({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }), eU(0, 0, i, 0);
                } else {
                    let e = (0, O.l$)(+el.width, +el.height, eo);
                    en({ type: "RESET", dragBoundaries: e }), eU(0, 0, e, 0);
                }
                eC(1), eT((e) => e + 1);
            }
        }, [eo, eY, el, eu, eU]),
        eq = a.useCallback(() => {
            let e = P(K);
            return e.width !== e.height;
        }, [K]),
        e0 = a.useCallback(() => {
            if (null == el) return {};
            let e = el.width / el.height,
                t = eq() && e > v.wL ? eo.height / el.height : 1,
                { width: i, height: r } = (function (e, t) {
                    let { width: i, height: r } = e;
                    return t % 180 != 0 ? { width: r, height: i } : { width: i, height: r };
                })(el, eu);
            return { width: i * ed * t, minWidth: i * ed * t, height: r * ed * t, minHeight: r * ed * t };
        }, [eo.height, el, eu, eq, ed]),
        e1 = a.useCallback(
            (e) => {
                if (eL) return;
                let { key: t, shiftKey: i } = e;
                if (["Home", "End", "PageUp", "PageDown"].includes(t)) return void e.stopPropagation();
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t)) return;
                e.stopPropagation(), e.preventDefault();
                let r = i ? 40 : 4,
                    a = "ArrowLeft" === t ? -r : "ArrowRight" === t ? r : 0,
                    n = "ArrowUp" === t ? -r : "ArrowDown" === t ? r : 0,
                    o = 0 !== a,
                    s = o ? q : ee;
                if (o ? eO : eH) {
                    let { x: e, y: t } = Y.current;
                    eU(e + a, t + n, es, eu),
                        en({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current }),
                        ew(o ? "x" : "y"),
                        s.current?.focus({ preventScroll: !0 });
                }
            },
            [eO, eH, eL, es, eu, eU],
        ),
        e5 = a.useCallback(
            (e) => {
                eL ||
                    !eO ||
                    (eU(es.right > 0 ? ((Number(e.target.value) - 50) * es.right) / 50 : 0, Y.current.y, es, eu),
                    en({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current }));
            },
            [eO, eL, es, eu, eU],
        ),
        e3 = a.useCallback(
            (e) => {
                if (eL || !eH) return;
                let t = es.top > 0 ? ((50 - Number(e.target.value)) * es.top) / 50 : 0;
                eU(Y.current.x, t, es, eu), en({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current });
            },
            [eH, eL, es, eu, eU],
        ),
        e9 = a.useCallback(async () => {
            var e;
            let i, r;
            if (null == Z.current) return;
            eA(!0);
            let a = Z.current,
                o = P(K);
            if (eb)
                try {
                    let { result: e, cancelFn: n } = await (0, O.ny)({
                        file: t,
                        image: a,
                        cropDimensions: eo,
                        cropOriginCoordinates: Y.current,
                        maxDimensions: o,
                        imageRotation: eu,
                    });
                    (ei.current = n), (i = await e), (ei.current = null), (r = await (0, O.MS)(i).catch(() => void 0));
                } catch (e) {
                    throw (
                        (ei.current?.(),
                        (ei.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                r = i = (0, l.iL)({
                    image: a,
                    cropDimensions: eo,
                    cropOriginCoordinates: Y.current,
                    maxDimensions: o,
                    imageRotation: eu,
                });
            await j({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: i } = e;
                    return i ? (t ? S.E.EDITED_ARCHIVED_ASSET : S.E.ARCHIVED_ASSET) : S.E.NEW_ASSET;
                })({ hasImageEdits: eh, hasOriginalAsset: null != n }),
                imageUri: i,
                staticImageUri: r,
                file: t,
                originalAsset: n,
                transform: {
                    zoomRatio: ed,
                    imageRotation: eu,
                    offsetRatio:
                        ((e = Y.current), { x: es.right > 0 ? e.x / es.right : 0, y: es.top > 0 ? e.y / es.top : 0 }),
                },
            }),
                eA(!1),
                await V();
        }, [eo, es, t, eh, eu, eb, V, j, n, K, ed]),
        e6 = a.useCallback(async () => {
            if (null != ei.current) {
                ei.current(), (ei.current = null), eA(!1);
                return;
            }
            await V();
        }, [V]);
    a.useEffect(
        () => (
            window.addEventListener("mouseup", eW),
            window.addEventListener("resize", eK),
            () => {
                window.removeEventListener("mouseup", eW), window.removeEventListener("resize", eK);
            }
        ),
        [eK, eW],
    ),
        a.useEffect(() => {
            if (eg) return window.addEventListener("mousemove", eQ), () => window.removeEventListener("mousemove", eQ);
        }, [eQ, eg]),
        a.useEffect(() => {
            if (null != ei.current) return () => ei.current?.();
        }, []);
    let e2 = K === v.HL.AVATAR || K === v.HL.BANNER,
        e4 = (0, G.b)(!e2);
    return (0, r.jsx)(w.f5, {
        value: eG,
        children: (0, r.jsxs)(u.Modal, {
            title: B.intl.string(B.t.DxAYCF),
            size: "md",
            actionBarInput: (0, r.jsx)(h.Q, {
                text: B.intl.string(B.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eJ,
                disabled: !eh,
            }),
            actions: [
                { text: B.intl.string(B.t["9TG40l"]), onClick: e6, variant: "secondary" },
                {
                    text: B.intl.string(B.t.ZSHmKD),
                    onClick: e9,
                    variant: "primary",
                    autoFocus: !1,
                    loading: eR,
                    disabled: eL,
                },
            ],
            transitionState: L,
            returnRef: W,
            onClose: V,
            children: [
                $ &&
                    !e4 &&
                    (0, r.jsx)(_.A, {
                        type: K,
                        analyticsPage: Q,
                        analyticsSection: M.JJy.CROP_GIF_MODAL,
                        isGIF: eN,
                        banner: i,
                    }),
                (0, r.jsxs)("div", {
                    className: k.jE,
                    children: [
                        (0, r.jsxs)("div", {
                            role: "group",
                            "aria-label": B.intl.formatToPlainString(B.t["40CNiu"], { filename: t.name }),
                            children: [
                                (0, r.jsx)(c.vN, {
                                    within: !0,
                                    ringTarget: J,
                                    children: (0, r.jsxs)("div", {
                                        className: k.oW,
                                        ref: J,
                                        onFocus: () => ey(!0),
                                        onBlur: (e) => {
                                            e.currentTarget.contains(e.relatedTarget) || ey(!1);
                                        },
                                        children: [
                                            !ef &&
                                                (0, r.jsxs)(d.A, {
                                                    onKeyDown: e1,
                                                    children: [
                                                        (0, r.jsx)("input", {
                                                            ref: q,
                                                            type: "range",
                                                            tabIndex: "x" !== eI ? -1 : 0,
                                                            "aria-label": B.intl.string(B.t.IBQxkI),
                                                            "aria-describedby": ev ? void 0 : et,
                                                            "aria-orientation": "horizontal",
                                                            value: eM,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            "aria-valuetext": B.intl.formatToPlainString(
                                                                B.t["8drK3z"],
                                                                { leftValue: ez, rightValue: eP },
                                                            ),
                                                            disabled: eL,
                                                            onFocus: () => ew("x"),
                                                            onChange: e5,
                                                        }),
                                                        (0, r.jsx)("input", {
                                                            ref: ee,
                                                            type: "range",
                                                            tabIndex: "y" !== eI ? -1 : 0,
                                                            "aria-label": B.intl.string(B.t.SXIgR9),
                                                            "aria-describedby": ev ? void 0 : et,
                                                            "aria-orientation": "vertical",
                                                            value: ej,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            "aria-valuetext": B.intl.formatToPlainString(B.t.Mrgs5G, {
                                                                topValue: eV,
                                                                bottomValue: eF,
                                                            }),
                                                            disabled: eL,
                                                            onFocus: () => ew("y"),
                                                            onChange: e3,
                                                        }),
                                                    ],
                                                }),
                                            ef
                                                ? (0, r.jsxs)("div", {
                                                      className: k.Un,
                                                      children: [
                                                          (0, r.jsx)(f.E, {
                                                              size: "sm",
                                                              color: E.A.colors.TEXT_FEEDBACK_CRITICAL,
                                                          }),
                                                          (0, r.jsx)(R.E, {
                                                              variant: "text-md/normal",
                                                              color: "text-feedback-critical",
                                                              children: B.intl.string(B.t["+ITMYX"]),
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          (0, r.jsx)("img", {
                                                              onLoad: eK,
                                                              onError: () => eE(!0),
                                                              style: {
                                                                  opacity: +(null != el),
                                                                  transform: `translate3d(${Y.current.x}px, ${Y.current.y}px, 0) rotate(${eu}deg)`,
                                                                  ...e0(),
                                                              },
                                                              className: o()(eR ? k.As : k.nu, k.hh),
                                                              src: i,
                                                              crossOrigin: "anonymous",
                                                              alt: "",
                                                              "aria-hidden": !0,
                                                              ref: Z,
                                                              onMouseDown: e$,
                                                              draggable: !1,
                                                          }),
                                                          (0, r.jsx)("div", {
                                                              className: (function (e) {
                                                                  switch (e) {
                                                                      case v.HL.GUILD_ICON:
                                                                          return k.$A;
                                                                      case v.HL.BANNER:
                                                                      case v.HL.GUILD_BANNER:
                                                                      case v.HL.VIDEO_BACKGROUND:
                                                                      case v.HL.SCHEDULED_EVENT_IMAGE:
                                                                      case v.HL.HOME_HEADER:
                                                                      case v.HL.PERSONAL_WIDGET_COVER:
                                                                          return k.rn;
                                                                      case v.HL.AVATAR:
                                                                      case v.HL.AVATAR_DECORATION:
                                                                          return k._h;
                                                                      case v.HL.PERSONAL_WIDGET_FIELD:
                                                                          return k.j9;
                                                                  }
                                                              })(K),
                                                              style: {
                                                                  opacity: +(null != el),
                                                                  width: eo.width,
                                                                  height: eo.height,
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(d.A, { id: et, children: ev || ef ? null : B.intl.string(B.t.jUze6F) }),
                                e_ &&
                                    !ef &&
                                    (0, r.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: o()(k.xi, { [k.p0]: !eD && ev }),
                                        "aria-hidden": !0,
                                        children: ev
                                            ? B.intl.format(B.t.YIfE3a, {
                                                  arrowKeys: "Arrow keys",
                                                  arrowKeysHook: (e, t) =>
                                                      (0, r.jsx)(A.e, { shortcut: "up+down+left+right" }, t),
                                                  shiftKey: "Shift",
                                                  shiftKeyHook: (e, t) => (0, r.jsx)(A.e, { shortcut: "shift" }, t),
                                              })
                                            : B.intl.string(B.t.jUze6F),
                                    }),
                                (0, r.jsxs)("div", {
                                    className: k.bK,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: k.mu,
                                            children: [
                                                (0, r.jsx)(p.ImageIcon, {
                                                    size: "xxs",
                                                    color: "currentColor",
                                                    className: k.HQ,
                                                }),
                                                (0, r.jsx)(
                                                    T.A,
                                                    {
                                                        className: k.aw,
                                                        initialValue: ex,
                                                        minValue: 1,
                                                        maxValue: 2,
                                                        keyboardStep: 0.025,
                                                        asValueChanges: eX,
                                                        disabled: eL,
                                                        equidistant: !0,
                                                        hideBubble: !0,
                                                        "aria-label": B.intl.string(B.t.EqiCcq),
                                                        getAriaValueText: (e) =>
                                                            B.intl.formatToPlainString(B.t.GHwBy5, {
                                                                percent: Math.round(100 * e),
                                                            }),
                                                    },
                                                    ep,
                                                ),
                                                (0, r.jsx)(p.ImageIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: k.HQ,
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(x.m, {
                                            text: B.intl.string(B.t.E36Wd4),
                                            ariaHidden: !0,
                                            children: (0, r.jsx)(C.D, {
                                                className: o()(k.On, { [k.r9]: eL }),
                                                onClick: eL ? void 0 : eZ,
                                                "aria-label": B.intl.string(B.t.LzFiKG),
                                                "aria-disabled": eL,
                                                children: (0, r.jsx)(D.H, { size: "md", color: "currentColor" }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        $ &&
                            e4 &&
                            (0, r.jsx)(N.A, { uploadType: K, showUpsell: !0, position: "inline", className: k.Lu }),
                    ],
                }),
            ],
        }),
    });
}
