var r = i(477900),
    a = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(435558),
    l = i(830917),
    u = i(855986),
    d = i(189213),
    c = i(765178),
    m = i(858899),
    g = i(123292),
    h = i(559106),
    f = i(140735),
    E = i(695366),
    R = i(646514),
    A = i(834730),
    p = i(475358),
    T = i(191023),
    x = i(893007),
    C = i(866665),
    D = i(939249),
    w = i(831453),
    y = i(775602),
    I = i(793574),
    _ = i(688810),
    G = i(58767),
    S = i(702211),
    N = i(699576),
    b = i(469054),
    L = i(129230),
    O = i(453771),
    H = i(403362),
    v = i(424632),
    M = i(626523),
    j = i(339984),
    z = i(652215),
    B = i(577718),
    k = i(792996),
    P = i(43850);
let V = { x: 0, y: 0 };
function F(e, t) {
    let i = (function (e) {
        switch (e) {
            case j.HL.BANNER:
                return { height: 848, width: 2400 };
            case j.HL.VIDEO_BACKGROUND:
                return B.Im;
            case j.HL.AVATAR:
            case j.HL.AVATAR_DECORATION:
            case j.HL.GUILD_ICON:
            case j.HL.PERSONAL_WIDGET_FIELD:
                return { height: 1024, width: 1024 };
            case j.HL.GUILD_BANNER:
                return { height: 1350, width: 2400 };
            case j.HL.SCHEDULED_EVENT_IMAGE:
                return { height: 960, width: 2400 };
            case j.HL.HOME_HEADER:
                return { height: 600, width: 2400 };
            case j.HL.PERSONAL_WIDGET_COVER:
                return { height: 1350, width: 2400 };
            default:
                return (0, H.xb)(e);
        }
    })(e);
    return null == t
        ? i
        : t >= i.width / i.height
          ? { width: i.width, height: i.width / t }
          : { width: i.height * t, height: i.height };
}
function U(e) {
    let { zoomRatio: t, imageRotation: i, imageTransformCoordinates: r } = e;
    return 1 !== t || 0 !== i || 0 !== r.x || 0 !== r.y;
}
let $ = {
    imageDimensions: null,
    cropDimensions: { width: 0, height: 0 },
    dragBoundaries: { top: 0, bottom: 0, left: 0, right: 0 },
    imageTransformCoordinates: V,
    imageRotation: 0,
    zoomRatio: 1,
    startingCoordinates: { x: 0, y: 0 },
    isDragging: !1,
    hasImageEdits: !1,
};
function K(e, t) {
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
                hasImageEdits: U({
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
                hasImageEdits: U({
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
                hasImageEdits: U({
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
                hasImageEdits: U({
                    zoomRatio: t.zoomRatio,
                    imageRotation: t.imageRotation,
                    imageTransformCoordinates: t.imageTransformCoordinates,
                }),
            };
        case "RESET":
            return {
                ...e,
                imageTransformCoordinates: V,
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: t.imageDimensions ?? e.imageDimensions,
                cropDimensions: t.cropDimensions ?? e.cropDimensions,
                dragBoundaries: t.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: !1,
            };
        default:
            return (0, H.xb)(t);
    }
}
i.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    file: t,
                    imageUri: i,
                    originalAsset: n,
                    transitionState: H,
                    onCrop: B,
                    onClose: U,
                    uploadType: Q = j.HL.AVATAR,
                    showUpsellHeader: W = !1,
                    analyticsPage: X,
                    returnRef: Y,
                    initialTransform: J,
                    cropAspectRatio: Z,
                    compressGIFToFitBytes: q,
                } = e,
                ee = a.useRef(V),
                et = a.useRef(null),
                ei = a.useRef(null),
                er = a.useRef(null),
                ea = a.useRef(null),
                en = a.useId(),
                eo = a.useRef(null),
                es = a.useRef(!1),
                [el, eu] = a.useReducer(K, $),
                {
                    cropDimensions: ed,
                    dragBoundaries: ec,
                    imageDimensions: em,
                    imageRotation: eg,
                    imageTransformCoordinates: eh,
                    zoomRatio: ef,
                    startingCoordinates: eE,
                    isDragging: eR,
                    hasImageEdits: eA,
                } = el,
                [ep, eT] = a.useState(!1),
                [ex, eC] = a.useState(!1),
                [eD, ew] = a.useState(0),
                [ey, eI] = a.useState(J?.zoomRatio ?? 1),
                [e_, eG] = a.useState(!1),
                [eS, eN] = a.useState("x"),
                eb = (0, u.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
                { analyticsLocations: eL } = (0, _.Ay)(I.A.IMAGE_CROPPING_MODAL),
                { isGIF: eO, isCheckingAnimation: eH, isEditableAnimatedImage: ev } = (0, M._)(t),
                eM = ex || ep || eH,
                ej = null != em && ec.right > 0,
                ez = null != em && ec.top > 0,
                eB = ej || ez;
            a.useEffect(() => {
                "x" === eS && !ej && ez ? eN("y") : "y" === eS && !ez && ej && eN("x");
            }, [eS, ej, ez]);
            let ek = ec.right > 0 ? Math.round(50 + (eh.x / ec.right) * 50) : 50,
                eP = ec.top > 0 ? Math.round(50 - (eh.y / ec.top) * 50) : 50,
                eV = 2 * ec.right + ed.width,
                eF = 2 * ec.top + ed.height,
                eU = eV > 0 ? Math.round(((ec.right - eh.x) / eV) * 100) : 0,
                e$ = eV > 0 ? Math.round(((ec.right + eh.x) / eV) * 100) : 0,
                eK = eF > 0 ? Math.round(((ec.top - eh.y) / eF) * 100) : 0,
                eQ = eF > 0 ? Math.round(((ec.top + eh.y) / eF) * 100) : 0;
            a.useEffect(() => {
                eO &&
                    W &&
                    L.default.track(z.HAw.OPEN_MODAL, {
                        type: z.JJy.CROP_GIF_MODAL,
                        location: { page: X },
                        location_stack: eL,
                        upload_type: Q,
                    });
            }, [W, X, eO, eL, Q]);
            let eW = a.useCallback(
                    (e, t, i, r) => {
                        ((ee.current = (0, v.F3)(e, t, i)),
                            null != et.current &&
                                (et.current.style.transform = `translate3d(${ee.current.x}px, ${ee.current.y}px, 0) rotate(${r}deg)`));
                    },
                    [et],
                ),
                eX = a.useCallback(() => {
                    if (null == et.current || ef > 1) return;
                    let { width: e, height: t } = et.current.getBoundingClientRect(),
                        { width: i, height: r } = (0, v.Qx)(Q, e, t, Z),
                        a = (0, v.Qp)(Q, i, r, t, Z),
                        n = (0, v.l$)(i, r, a);
                    if (null != J && !es.current) {
                        es.current = !0;
                        let e = (function (e, t, i, r, a) {
                            let n = t,
                                o = i;
                            for (let t = 0; t < r.imageRotation; t += 90) {
                                if (n.width === n.height) continue;
                                let { width: t, height: i } = n;
                                ((n = (0, v.Qx)(e, i, t, a)), (o = (0, v.Qp)(e, n.width, n.height, t, a)));
                            }
                            let s = (0, v.l$)(n.width * r.zoomRatio, n.height * r.zoomRatio, o);
                            return {
                                imageDimensions: n,
                                cropDimensions: o,
                                dragBoundaries: s,
                                imageTransformCoordinates: (0, v.F3)(
                                    r.offsetRatio.x * s.right,
                                    r.offsetRatio.y * s.top,
                                    s,
                                ),
                            };
                        })(Q, { width: i, height: r }, a, J, Z);
                        (eW(
                            e.imageTransformCoordinates.x,
                            e.imageTransformCoordinates.y,
                            e.dragBoundaries,
                            J.imageRotation,
                        ),
                            eu({
                                type: "RESTORE_TRANSFORM",
                                ...e,
                                imageRotation: J.imageRotation,
                                zoomRatio: J.zoomRatio,
                            }));
                        return;
                    }
                    eu({
                        type: "SET_DIMENSIONS",
                        imageDimensions: { width: i, height: r },
                        cropDimensions: a,
                        dragBoundaries: n,
                    });
                }, [Q, ef, J, eW, Z]),
                eY = a.useCallback((e) => {
                    eu({
                        type: "START_DRAGGING_IMAGE",
                        startingCoordinates: { x: e.clientX - ee.current.x, y: e.clientY - ee.current.y },
                    });
                }, []),
                eJ = a.useCallback(
                    (e) => {
                        let { x: t, y: i } = ee.current;
                        eR && (e.clientX !== t || e.clientY !== i) && eW(e.clientX - eE.x, e.clientY - eE.y, ec, eg);
                    },
                    [ec, eg, eR, eE.x, eE.y, eW],
                ),
                eZ = a.useCallback(() => {
                    eu({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: ee.current });
                }, []),
                eq = a.useCallback(
                    (e) => {
                        if (null == em) return;
                        let { width: t, height: i } = em,
                            r = (0, v.l$)(t * e, i * e, ed),
                            { x: a, y: n } = ee.current;
                        (((0, s.inRange)(a, r.right, r.left) && (0, s.inRange)(n, r.top, r.bottom)) || eW(a, n, r, eg),
                            eu({
                                type: "SET_IMAGE_ZOOM_RATIO",
                                zoomRatio: e,
                                dragBoundaries: r,
                                imageTransformCoordinates: ee.current,
                            }));
                    },
                    [ed, em, eg, eW],
                ),
                e0 = a.useCallback(
                    (e, t) => {
                        let { width: i, height: r } = e,
                            { width: a, height: n } = (0, v.Qx)(Q, r, i, Z),
                            o = (0, v.Qp)(Q, a, n, i, Z),
                            s = (0, v.l$)(a * t, n * t, o);
                        return {
                            newImageDimensions: { width: a, height: n },
                            newCropDimensions: o,
                            newDragBoundaries: s,
                        };
                    },
                    [Q, Z],
                ),
                e1 = a.useCallback(() => {
                    var e;
                    if (null == et.current || null == em) return;
                    let t = (eg + 90) % 360;
                    c.O.announce(k.intl.formatToPlainString(k.t.uYhsHT, { degrees: t }));
                    let { x: i, y: r } = ((e = ee.current.x), { x: -ee.current.y, y: e });
                    if (em.width !== em.height) {
                        let { newImageDimensions: e, newCropDimensions: a, newDragBoundaries: n } = e0(em, ef);
                        (eW(i, r, n, t),
                            eu({
                                type: "ROTATE_IMAGE",
                                imageTransformCoordinates: ee.current,
                                imageRotation: t,
                                imageDimensions: e,
                                cropDimensions: a,
                                dragBoundaries: n,
                            }));
                    } else
                        (eW(i, r, ec, t),
                            eu({ type: "ROTATE_IMAGE", imageTransformCoordinates: ee.current, imageRotation: t }));
                }, [ec, e0, em, eg, eW, ef]),
                e5 = a.useCallback(() => {
                    if (null != et.current && null != em) {
                        if (em.width !== em.height && (eg - 0) % 180 != 0) {
                            let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = e0(em, 1);
                            (eu({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }),
                                eW(0, 0, i, 0));
                        } else {
                            let e = (0, v.l$)(+em.width, +em.height, ed);
                            (eu({ type: "RESET", dragBoundaries: e }), eW(0, 0, e, 0));
                        }
                        (eI(1), ew((e) => e + 1));
                    }
                }, [ed, e0, em, eg, eW]),
                e3 = a.useCallback(() => {
                    let e = F(Q);
                    return e.width !== e.height;
                }, [Q]),
                e2 = a.useCallback(() => {
                    if (null == em) return {};
                    let e = em.width / em.height,
                        t = e3() && e > j.wL ? ed.height / em.height : 1,
                        { width: i, height: r } = (function (e, t) {
                            let { width: i, height: r } = e;
                            return t % 180 != 0 ? { width: r, height: i } : { width: i, height: r };
                        })(em, eg);
                    return { width: i * ef * t, minWidth: i * ef * t, height: r * ef * t, minHeight: r * ef * t };
                }, [ed.height, em, eg, e3, ef]),
                e4 = a.useCallback(
                    (e) => {
                        if (eM) return;
                        let { key: t, shiftKey: i } = e;
                        if (["Home", "End", "PageUp", "PageDown"].includes(t)) return void e.stopPropagation();
                        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t)) return;
                        (e.stopPropagation(), e.preventDefault());
                        let r = i ? 40 : 4,
                            a = "ArrowLeft" === t ? -r : "ArrowRight" === t ? r : 0,
                            n = "ArrowUp" === t ? -r : "ArrowDown" === t ? r : 0,
                            o = 0 !== a,
                            s = o ? er : ea;
                        if (o ? ej : ez) {
                            let { x: e, y: t } = ee.current;
                            (eW(e + a, t + n, ec, eg),
                                eu({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: ee.current }),
                                eN(o ? "x" : "y"),
                                s.current?.focus({ preventScroll: !0 }));
                        }
                    },
                    [ej, ez, eM, ec, eg, eW],
                ),
                e6 = a.useCallback(
                    (e) => {
                        eM ||
                            !ej ||
                            (eW(
                                ec.right > 0 ? ((Number(e.target.value) - 50) * ec.right) / 50 : 0,
                                ee.current.y,
                                ec,
                                eg,
                            ),
                            eu({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: ee.current }));
                    },
                    [ej, eM, ec, eg, eW],
                ),
                e9 = a.useCallback(
                    (e) => {
                        if (eM || !ez) return;
                        let t = ec.top > 0 ? ((50 - Number(e.target.value)) * ec.top) / 50 : 0;
                        (eW(ee.current.x, t, ec, eg),
                            eu({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: ee.current }));
                    },
                    [ez, eM, ec, eg, eW],
                ),
                e8 = a.useCallback(async () => {
                    var e;
                    let i, r;
                    if (null == et.current) return;
                    eC(!0);
                    let a = et.current,
                        o = F(Q, Z);
                    if (ev)
                        try {
                            let { result: e, cancelFn: n } = await (0, v.ny)({
                                file: t,
                                image: a,
                                cropDimensions: ed,
                                cropOriginCoordinates: ee.current,
                                maxDimensions: o,
                                imageRotation: eg,
                                compressGIFToFitBytes: q,
                            });
                            eo.current = n;
                            let { imageUri: s, compressed: l } = await e;
                            ((i = s),
                                (eo.current = null),
                                l &&
                                    null != q &&
                                    (0, m.P0)({
                                        text: k.intl.formatToPlainString(k.t.AXCEeG, { maxSize: (0, O.Hb)(q) }),
                                    }),
                                (r = await (0, v.MS)(i).catch(() => void 0)));
                        } catch (e) {
                            throw (
                                eo.current?.(),
                                (eo.current = null),
                                Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`)
                            );
                        }
                    else
                        r = i = (0, l.iL)({
                            image: a,
                            cropDimensions: ed,
                            cropOriginCoordinates: ee.current,
                            maxDimensions: o,
                            imageRotation: eg,
                        });
                    (await B({
                        assetOrigin: (function (e) {
                            let { hasImageEdits: t, hasOriginalAsset: i } = e;
                            return i ? (t ? b.E.EDITED_ARCHIVED_ASSET : b.E.ARCHIVED_ASSET) : b.E.NEW_ASSET;
                        })({ hasImageEdits: eA, hasOriginalAsset: null != n }),
                        imageUri: i,
                        staticImageUri: r,
                        file: t,
                        originalAsset: n,
                        transform: {
                            zoomRatio: ef,
                            imageRotation: eg,
                            offsetRatio:
                                ((e = ee.current),
                                { x: ec.right > 0 ? e.x / ec.right : 0, y: ec.top > 0 ? e.y / ec.top : 0 }),
                        },
                    }),
                        eC(!1),
                        await U());
                }, [q, Z, ed, ec, t, eA, eg, ev, U, B, n, Q, ef]),
                e7 = a.useCallback(async () => {
                    if (null != eo.current) {
                        (eo.current(), (eo.current = null), eC(!1));
                        return;
                    }
                    await U();
                }, [U]);
            (a.useEffect(
                () => (
                    window.addEventListener("mouseup", eZ),
                    window.addEventListener("resize", eX),
                    () => {
                        (window.removeEventListener("mouseup", eZ), window.removeEventListener("resize", eX));
                    }
                ),
                [eX, eZ],
            ),
                a.useEffect(() => {
                    if (eR)
                        return (
                            window.addEventListener("mousemove", eJ), () => window.removeEventListener("mousemove", eJ)
                        );
                }, [eJ, eR]),
                a.useEffect(() => {
                    if (null != eo.current) return () => eo.current?.();
                }, []));
            let te = Q === j.HL.AVATAR || Q === j.HL.BANNER,
                tt = (0, S.b)(!te);
            return (0, r.jsx)(_.f5, {
                value: eL,
                children: (0, r.jsxs)(d.a, {
                    title: k.intl.string(k.t.DxAYCF),
                    size: "md",
                    actionBarInput: (0, r.jsx)(g.Q, {
                        text: k.intl.string(k.t.yBZMsQ),
                        textVariant: "body-md/medium",
                        onClick: e5,
                        disabled: !eA,
                    }),
                    actions: [
                        { text: k.intl.string(k.t["9TG40l"]), onClick: e7, variant: "secondary" },
                        {
                            text: k.intl.string(k.t.ZSHmKD),
                            onClick: e8,
                            variant: "primary",
                            autoFocus: !1,
                            loading: ex,
                            disabled: eM,
                        },
                    ],
                    transitionState: H,
                    returnRef: Y,
                    onClose: U,
                    children: [
                        W &&
                            !tt &&
                            (0, r.jsx)(G.A, {
                                type: Q,
                                analyticsPage: X,
                                analyticsSection: z.JJy.CROP_GIF_MODAL,
                                isGIF: eO,
                                banner: i,
                            }),
                        (0, r.jsxs)("div", {
                            className: P.jE,
                            children: [
                                (0, r.jsxs)("div", {
                                    role: "group",
                                    "aria-label": k.intl.formatToPlainString(k.t["40CNiu"], { filename: t.name }),
                                    children: [
                                        (0, r.jsx)(h.vN, {
                                            within: !0,
                                            ringTarget: ei,
                                            children: (0, r.jsxs)("div", {
                                                className: P.oW,
                                                ref: ei,
                                                onFocus: () => eG(!0),
                                                onBlur: (e) => {
                                                    e.currentTarget.contains(e.relatedTarget) || eG(!1);
                                                },
                                                children: [
                                                    !ep &&
                                                        (0, r.jsxs)(f.A, {
                                                            onKeyDown: e4,
                                                            children: [
                                                                (0, r.jsx)("input", {
                                                                    ref: er,
                                                                    type: "range",
                                                                    tabIndex: "x" !== eS ? -1 : 0,
                                                                    "aria-label": k.intl.string(k.t.IBQxkI),
                                                                    "aria-describedby": eB ? void 0 : en,
                                                                    "aria-orientation": "horizontal",
                                                                    value: ek,
                                                                    min: 0,
                                                                    max: 100,
                                                                    step: 1,
                                                                    "aria-valuetext": k.intl.formatToPlainString(
                                                                        k.t["8drK3z"],
                                                                        { leftValue: eU, rightValue: e$ },
                                                                    ),
                                                                    disabled: eM,
                                                                    onFocus: () => eN("x"),
                                                                    onChange: e6,
                                                                }),
                                                                (0, r.jsx)("input", {
                                                                    ref: ea,
                                                                    type: "range",
                                                                    tabIndex: "y" !== eS ? -1 : 0,
                                                                    "aria-label": k.intl.string(k.t.SXIgR9),
                                                                    "aria-describedby": eB ? void 0 : en,
                                                                    "aria-orientation": "vertical",
                                                                    value: eP,
                                                                    min: 0,
                                                                    max: 100,
                                                                    step: 1,
                                                                    "aria-valuetext": k.intl.formatToPlainString(
                                                                        k.t.Mrgs5G,
                                                                        { topValue: eK, bottomValue: eQ },
                                                                    ),
                                                                    disabled: eM,
                                                                    onFocus: () => eN("y"),
                                                                    onChange: e9,
                                                                }),
                                                            ],
                                                        }),
                                                    ep
                                                        ? (0, r.jsxs)("div", {
                                                              className: P.Un,
                                                              children: [
                                                                  (0, r.jsx)(E.CircleErrorIcon, {
                                                                      size: "sm",
                                                                      color: R.A.colors.TEXT_FEEDBACK_CRITICAL,
                                                                  }),
                                                                  (0, r.jsx)(A.E, {
                                                                      variant: "body-md/normal",
                                                                      color: "text-feedback-critical",
                                                                      children: k.intl.string(k.t["+ITMYX"]),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  (0, r.jsx)("img", {
                                                                      onLoad: eX,
                                                                      onError: () => eT(!0),
                                                                      style: {
                                                                          opacity: +(null != em),
                                                                          transform: `translate3d(${ee.current.x}px, ${ee.current.y}px, 0) rotate(${eg}deg)`,
                                                                          ...e2(),
                                                                      },
                                                                      className: o()(ex ? P.As : P.nu, P.hh),
                                                                      src: i,
                                                                      crossOrigin: "anonymous",
                                                                      alt: "",
                                                                      "aria-hidden": !0,
                                                                      ref: et,
                                                                      onMouseDown: eY,
                                                                      draggable: !1,
                                                                  }),
                                                                  (0, r.jsx)("div", {
                                                                      className: (function (e) {
                                                                          switch (e) {
                                                                              case j.HL.GUILD_ICON:
                                                                                  return P.$A;
                                                                              case j.HL.BANNER:
                                                                              case j.HL.GUILD_BANNER:
                                                                              case j.HL.VIDEO_BACKGROUND:
                                                                              case j.HL.SCHEDULED_EVENT_IMAGE:
                                                                              case j.HL.HOME_HEADER:
                                                                              case j.HL.PERSONAL_WIDGET_COVER:
                                                                                  return P.rn;
                                                                              case j.HL.AVATAR:
                                                                              case j.HL.AVATAR_DECORATION:
                                                                                  return P._h;
                                                                              case j.HL.PERSONAL_WIDGET_FIELD:
                                                                                  return P.j9;
                                                                          }
                                                                      })(Q),
                                                                      style: {
                                                                          opacity: +(null != em),
                                                                          width: ed.width,
                                                                          height: ed.height,
                                                                      },
                                                                  }),
                                                              ],
                                                          }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)(f.A, {
                                            id: en,
                                            children: eB || ep ? null : k.intl.string(k.t.jUze6F),
                                        }),
                                        eb &&
                                            !ep &&
                                            (0, r.jsx)(A.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                className: o()(P.xi, { [P.p0]: !e_ && eB }),
                                                "aria-hidden": !0,
                                                children: eB
                                                    ? k.intl.format(k.t.YIfE3a, {
                                                          arrowKeys: "Arrow keys",
                                                          arrowKeysHook: (e, t) =>
                                                              (0, r.jsx)(p.e, { shortcut: "up+down+left+right" }, t),
                                                          shiftKey: "Shift",
                                                          shiftKeyHook: (e, t) =>
                                                              (0, r.jsx)(p.e, { shortcut: "shift" }, t),
                                                      })
                                                    : k.intl.string(k.t.jUze6F),
                                            }),
                                        (0, r.jsxs)("div", {
                                            className: P.bK,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: P.mu,
                                                    children: [
                                                        (0, r.jsx)(T.ImageIcon, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: P.HQ,
                                                        }),
                                                        (0, r.jsx)("div", {
                                                            className: P.aw,
                                                            children: (0, r.jsx)(
                                                                x.A,
                                                                {
                                                                    defaultValue: ey,
                                                                    minValue: 1,
                                                                    maxValue: 2,
                                                                    step: 0.025,
                                                                    onChange: eq,
                                                                    disabled: eM,
                                                                    hideTooltip: !0,
                                                                    "aria-label": k.intl.string(k.t.EqiCcq),
                                                                    formatValue: (e) =>
                                                                        k.intl.formatToPlainString(k.t.GHwBy5, {
                                                                            percent: Math.round(100 * e),
                                                                        }),
                                                                },
                                                                eD,
                                                            ),
                                                        }),
                                                        (0, r.jsx)(T.ImageIcon, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: P.HQ,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(C.m, {
                                                    text: k.intl.string(k.t.E36Wd4),
                                                    ariaHidden: !0,
                                                    children: (0, r.jsx)(D.D, {
                                                        className: o()(P.On, { [P.r9]: eM }),
                                                        onClick: eM ? void 0 : e1,
                                                        "aria-label": k.intl.string(k.t.LzFiKG),
                                                        "aria-disabled": eM,
                                                        children: (0, r.jsx)(w.RotateIcon, {
                                                            size: "md",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                W &&
                                    tt &&
                                    (0, r.jsx)(N.A, {
                                        uploadType: Q,
                                        showUpsell: !0,
                                        position: "inline",
                                        className: P.Lu,
                                    }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
