var r = i(477900),
    a = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(435558),
    l = i(830917),
    u = i(855986),
    d = i(189213),
    c = i(765178),
    m = i(123292),
    g = i(559106),
    h = i(140735),
    f = i(695366),
    E = i(646514),
    R = i(834730),
    A = i(475358),
    p = i(191023),
    T = i(205513),
    C = i(866665),
    x = i(939249),
    D = i(831453),
    y = i(775602),
    w = i(793574),
    I = i(688810),
    _ = i(58767),
    b = i(702211),
    G = i(699576),
    N = i(469054),
    S = i(129230),
    L = i(403362),
    O = i(424632),
    H = i(626523),
    v = i(339984),
    M = i(652215),
    j = i(577718),
    B = i(792996),
    k = i(43850);
let z = { x: 0, y: 0 };
function P(e, t) {
    let i = (function (e) {
        switch (e) {
            case v.HL.BANNER:
                return { height: 848, width: 2400 };
            case v.HL.VIDEO_BACKGROUND:
                return j.Im;
            case v.HL.AVATAR:
            case v.HL.AVATAR_DECORATION:
            case v.HL.GUILD_ICON:
            case v.HL.PERSONAL_WIDGET_FIELD:
                return { height: 1024, width: 1024 };
            case v.HL.GUILD_BANNER:
                return { height: 1350, width: 2400 };
            case v.HL.SCHEDULED_EVENT_IMAGE:
                return { height: 960, width: 2400 };
            case v.HL.HOME_HEADER:
                return { height: 600, width: 2400 };
            case v.HL.PERSONAL_WIDGET_COVER:
                return { height: 1350, width: 2400 };
            default:
                return (0, L.xb)(e);
        }
    })(e);
    return null == t
        ? i
        : t >= i.width / i.height
          ? { width: i.width, height: i.width / t }
          : { width: i.height * t, height: i.height };
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
i.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    file: t,
                    imageUri: i,
                    originalAsset: n,
                    transitionState: L,
                    onCrop: j,
                    onClose: V,
                    uploadType: $ = v.HL.AVATAR,
                    showUpsellHeader: K = !1,
                    analyticsPage: Q,
                    returnRef: W,
                    initialTransform: Y,
                    cropAspectRatio: X,
                } = e,
                J = a.useRef(z),
                Z = a.useRef(null),
                q = a.useRef(null),
                ee = a.useRef(null),
                et = a.useRef(null),
                ei = a.useId(),
                er = a.useRef(null),
                ea = a.useRef(!1),
                [en, eo] = a.useReducer(U, F),
                {
                    cropDimensions: es,
                    dragBoundaries: el,
                    imageDimensions: eu,
                    imageRotation: ed,
                    imageTransformCoordinates: ec,
                    zoomRatio: em,
                    startingCoordinates: eg,
                    isDragging: eh,
                    hasImageEdits: ef,
                } = en,
                [eE, eR] = a.useState(!1),
                [eA, ep] = a.useState(!1),
                [eT, eC] = a.useState(0),
                [ex, eD] = a.useState(Y?.zoomRatio ?? 1),
                [ey, ew] = a.useState(!1),
                [eI, e_] = a.useState("x"),
                eb = (0, u.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
                { analyticsLocations: eG } = (0, I.Ay)(w.A.IMAGE_CROPPING_MODAL),
                { isGIF: eN, isCheckingAnimation: eS, isEditableAnimatedImage: eL } = (0, H._)(t),
                eO = eA || eE || eS,
                eH = null != eu && el.right > 0,
                ev = null != eu && el.top > 0,
                eM = eH || ev;
            a.useEffect(() => {
                "x" === eI && !eH && ev ? e_("y") : "y" === eI && !ev && eH && e_("x");
            }, [eI, eH, ev]);
            let ej = el.right > 0 ? Math.round(50 + (ec.x / el.right) * 50) : 50,
                eB = el.top > 0 ? Math.round(50 - (ec.y / el.top) * 50) : 50,
                ek = 2 * el.right + es.width,
                ez = 2 * el.top + es.height,
                eP = ek > 0 ? Math.round(((el.right - ec.x) / ek) * 100) : 0,
                eV = ek > 0 ? Math.round(((el.right + ec.x) / ek) * 100) : 0,
                eF = ez > 0 ? Math.round(((el.top - ec.y) / ez) * 100) : 0,
                eU = ez > 0 ? Math.round(((el.top + ec.y) / ez) * 100) : 0;
            a.useEffect(() => {
                eN &&
                    K &&
                    S.default.track(M.HAw.OPEN_MODAL, {
                        type: M.JJy.CROP_GIF_MODAL,
                        location: { page: Q },
                        location_stack: eG,
                        upload_type: $,
                    });
            }, [K, Q, eN, eG, $]);
            let e$ = a.useCallback(
                    (e, t, i, r) => {
                        ((J.current = (0, O.F3)(e, t, i)),
                            null != Z.current &&
                                (Z.current.style.transform = `translate3d(${J.current.x}px, ${J.current.y}px, 0) rotate(${r}deg)`));
                    },
                    [Z],
                ),
                eK = a.useCallback(() => {
                    if (null == Z.current || em > 1) return;
                    let { width: e, height: t } = Z.current.getBoundingClientRect(),
                        { width: i, height: r } = (0, O.Qx)($, e, t, X),
                        a = (0, O.Qp)($, i, r, t, X),
                        n = (0, O.l$)(i, r, a);
                    if (null != Y && !ea.current) {
                        ea.current = !0;
                        let e = (function (e, t, i, r, a) {
                            let n = t,
                                o = i;
                            for (let t = 0; t < r.imageRotation; t += 90) {
                                if (n.width === n.height) continue;
                                let { width: t, height: i } = n;
                                ((n = (0, O.Qx)(e, i, t, a)), (o = (0, O.Qp)(e, n.width, n.height, t, a)));
                            }
                            let s = (0, O.l$)(n.width * r.zoomRatio, n.height * r.zoomRatio, o);
                            return {
                                imageDimensions: n,
                                cropDimensions: o,
                                dragBoundaries: s,
                                imageTransformCoordinates: (0, O.F3)(
                                    r.offsetRatio.x * s.right,
                                    r.offsetRatio.y * s.top,
                                    s,
                                ),
                            };
                        })($, { width: i, height: r }, a, Y, X);
                        (e$(
                            e.imageTransformCoordinates.x,
                            e.imageTransformCoordinates.y,
                            e.dragBoundaries,
                            Y.imageRotation,
                        ),
                            eo({
                                type: "RESTORE_TRANSFORM",
                                ...e,
                                imageRotation: Y.imageRotation,
                                zoomRatio: Y.zoomRatio,
                            }));
                        return;
                    }
                    eo({
                        type: "SET_DIMENSIONS",
                        imageDimensions: { width: i, height: r },
                        cropDimensions: a,
                        dragBoundaries: n,
                    });
                }, [$, em, Y, e$, X]),
                eQ = a.useCallback((e) => {
                    eo({
                        type: "START_DRAGGING_IMAGE",
                        startingCoordinates: { x: e.clientX - J.current.x, y: e.clientY - J.current.y },
                    });
                }, []),
                eW = a.useCallback(
                    (e) => {
                        let { x: t, y: i } = J.current;
                        eh && (e.clientX !== t || e.clientY !== i) && e$(e.clientX - eg.x, e.clientY - eg.y, el, ed);
                    },
                    [el, ed, eh, eg.x, eg.y, e$],
                ),
                eY = a.useCallback(() => {
                    eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: J.current });
                }, []),
                eX = a.useCallback(
                    (e) => {
                        if (null == eu) return;
                        let { width: t, height: i } = eu,
                            r = (0, O.l$)(t * e, i * e, es),
                            { x: a, y: n } = J.current;
                        (((0, s.inRange)(a, r.right, r.left) && (0, s.inRange)(n, r.top, r.bottom)) || e$(a, n, r, ed),
                            eo({
                                type: "SET_IMAGE_ZOOM_RATIO",
                                zoomRatio: e,
                                dragBoundaries: r,
                                imageTransformCoordinates: J.current,
                            }));
                    },
                    [es, eu, ed, e$],
                ),
                eJ = a.useCallback(
                    (e, t) => {
                        let { width: i, height: r } = e,
                            { width: a, height: n } = (0, O.Qx)($, r, i, X),
                            o = (0, O.Qp)($, a, n, i, X),
                            s = (0, O.l$)(a * t, n * t, o);
                        return {
                            newImageDimensions: { width: a, height: n },
                            newCropDimensions: o,
                            newDragBoundaries: s,
                        };
                    },
                    [$, X],
                ),
                eZ = a.useCallback(() => {
                    var e;
                    if (null == Z.current || null == eu) return;
                    let t = (ed + 90) % 360;
                    c.O.announce(B.intl.formatToPlainString(B.t.uYhsHT, { degrees: t }));
                    let { x: i, y: r } = ((e = J.current.x), { x: -J.current.y, y: e });
                    if (eu.width !== eu.height) {
                        let { newImageDimensions: e, newCropDimensions: a, newDragBoundaries: n } = eJ(eu, em);
                        (e$(i, r, n, t),
                            eo({
                                type: "ROTATE_IMAGE",
                                imageTransformCoordinates: J.current,
                                imageRotation: t,
                                imageDimensions: e,
                                cropDimensions: a,
                                dragBoundaries: n,
                            }));
                    } else
                        (e$(i, r, el, t),
                            eo({ type: "ROTATE_IMAGE", imageTransformCoordinates: J.current, imageRotation: t }));
                }, [el, eJ, eu, ed, e$, em]),
                eq = a.useCallback(() => {
                    if (null != Z.current && null != eu) {
                        if (eu.width !== eu.height && (ed - 0) % 180 != 0) {
                            let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = eJ(eu, 1);
                            (eo({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }),
                                e$(0, 0, i, 0));
                        } else {
                            let e = (0, O.l$)(+eu.width, +eu.height, es);
                            (eo({ type: "RESET", dragBoundaries: e }), e$(0, 0, e, 0));
                        }
                        (eD(1), eC((e) => e + 1));
                    }
                }, [es, eJ, eu, ed, e$]),
                e0 = a.useCallback(() => {
                    let e = P($);
                    return e.width !== e.height;
                }, [$]),
                e1 = a.useCallback(() => {
                    if (null == eu) return {};
                    let e = eu.width / eu.height,
                        t = e0() && e > v.wL ? es.height / eu.height : 1,
                        { width: i, height: r } = (function (e, t) {
                            let { width: i, height: r } = e;
                            return t % 180 != 0 ? { width: r, height: i } : { width: i, height: r };
                        })(eu, ed);
                    return { width: i * em * t, minWidth: i * em * t, height: r * em * t, minHeight: r * em * t };
                }, [es.height, eu, ed, e0, em]),
                e5 = a.useCallback(
                    (e) => {
                        if (eO) return;
                        let { key: t, shiftKey: i } = e;
                        if (["Home", "End", "PageUp", "PageDown"].includes(t)) return void e.stopPropagation();
                        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t)) return;
                        (e.stopPropagation(), e.preventDefault());
                        let r = i ? 40 : 4,
                            a = "ArrowLeft" === t ? -r : "ArrowRight" === t ? r : 0,
                            n = "ArrowUp" === t ? -r : "ArrowDown" === t ? r : 0,
                            o = 0 !== a,
                            s = o ? ee : et;
                        if (o ? eH : ev) {
                            let { x: e, y: t } = J.current;
                            (e$(e + a, t + n, el, ed),
                                eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: J.current }),
                                e_(o ? "x" : "y"),
                                s.current?.focus({ preventScroll: !0 }));
                        }
                    },
                    [eH, ev, eO, el, ed, e$],
                ),
                e3 = a.useCallback(
                    (e) => {
                        eO ||
                            !eH ||
                            (e$(
                                el.right > 0 ? ((Number(e.target.value) - 50) * el.right) / 50 : 0,
                                J.current.y,
                                el,
                                ed,
                            ),
                            eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: J.current }));
                    },
                    [eH, eO, el, ed, e$],
                ),
                e2 = a.useCallback(
                    (e) => {
                        if (eO || !ev) return;
                        let t = el.top > 0 ? ((50 - Number(e.target.value)) * el.top) / 50 : 0;
                        (e$(J.current.x, t, el, ed),
                            eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: J.current }));
                    },
                    [ev, eO, el, ed, e$],
                ),
                e4 = a.useCallback(async () => {
                    var e;
                    let i, r;
                    if (null == Z.current) return;
                    ep(!0);
                    let a = Z.current,
                        o = P($, X);
                    if (eL)
                        try {
                            let { result: e, cancelFn: n } = await (0, O.ny)({
                                file: t,
                                image: a,
                                cropDimensions: es,
                                cropOriginCoordinates: J.current,
                                maxDimensions: o,
                                imageRotation: ed,
                            });
                            ((er.current = n),
                                (i = await e),
                                (er.current = null),
                                (r = await (0, O.MS)(i).catch(() => void 0)));
                        } catch (e) {
                            throw (
                                er.current?.(),
                                (er.current = null),
                                Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`)
                            );
                        }
                    else
                        r = i = (0, l.iL)({
                            image: a,
                            cropDimensions: es,
                            cropOriginCoordinates: J.current,
                            maxDimensions: o,
                            imageRotation: ed,
                        });
                    (await j({
                        assetOrigin: (function (e) {
                            let { hasImageEdits: t, hasOriginalAsset: i } = e;
                            return i ? (t ? N.E.EDITED_ARCHIVED_ASSET : N.E.ARCHIVED_ASSET) : N.E.NEW_ASSET;
                        })({ hasImageEdits: ef, hasOriginalAsset: null != n }),
                        imageUri: i,
                        staticImageUri: r,
                        file: t,
                        originalAsset: n,
                        transform: {
                            zoomRatio: em,
                            imageRotation: ed,
                            offsetRatio:
                                ((e = J.current),
                                { x: el.right > 0 ? e.x / el.right : 0, y: el.top > 0 ? e.y / el.top : 0 }),
                        },
                    }),
                        ep(!1),
                        await V());
                }, [X, es, el, t, ef, ed, eL, V, j, n, $, em]),
                e6 = a.useCallback(async () => {
                    if (null != er.current) {
                        (er.current(), (er.current = null), ep(!1));
                        return;
                    }
                    await V();
                }, [V]);
            (a.useEffect(
                () => (
                    window.addEventListener("mouseup", eY),
                    window.addEventListener("resize", eK),
                    () => {
                        (window.removeEventListener("mouseup", eY), window.removeEventListener("resize", eK));
                    }
                ),
                [eK, eY],
            ),
                a.useEffect(() => {
                    if (eh)
                        return (
                            window.addEventListener("mousemove", eW), () => window.removeEventListener("mousemove", eW)
                        );
                }, [eW, eh]),
                a.useEffect(() => {
                    if (null != er.current) return () => er.current?.();
                }, []));
            let e9 = $ === v.HL.AVATAR || $ === v.HL.BANNER,
                e8 = (0, b.b)(!e9);
            return (0, r.jsx)(I.f5, {
                value: eG,
                children: (0, r.jsxs)(d.a, {
                    title: B.intl.string(B.t.DxAYCF),
                    size: "md",
                    actionBarInput: (0, r.jsx)(m.Q, {
                        text: B.intl.string(B.t.yBZMsQ),
                        textVariant: "body-md/medium",
                        onClick: eq,
                        disabled: !ef,
                    }),
                    actions: [
                        { text: B.intl.string(B.t["9TG40l"]), onClick: e6, variant: "secondary" },
                        {
                            text: B.intl.string(B.t.ZSHmKD),
                            onClick: e4,
                            variant: "primary",
                            autoFocus: !1,
                            loading: eA,
                            disabled: eO,
                        },
                    ],
                    transitionState: L,
                    returnRef: W,
                    onClose: V,
                    children: [
                        K &&
                            !e8 &&
                            (0, r.jsx)(_.A, {
                                type: $,
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
                                        (0, r.jsx)(g.vN, {
                                            within: !0,
                                            ringTarget: q,
                                            children: (0, r.jsxs)("div", {
                                                className: k.oW,
                                                ref: q,
                                                onFocus: () => ew(!0),
                                                onBlur: (e) => {
                                                    e.currentTarget.contains(e.relatedTarget) || ew(!1);
                                                },
                                                children: [
                                                    !eE &&
                                                        (0, r.jsxs)(h.A, {
                                                            onKeyDown: e5,
                                                            children: [
                                                                (0, r.jsx)("input", {
                                                                    ref: ee,
                                                                    type: "range",
                                                                    tabIndex: "x" !== eI ? -1 : 0,
                                                                    "aria-label": B.intl.string(B.t.IBQxkI),
                                                                    "aria-describedby": eM ? void 0 : ei,
                                                                    "aria-orientation": "horizontal",
                                                                    value: ej,
                                                                    min: 0,
                                                                    max: 100,
                                                                    step: 1,
                                                                    "aria-valuetext": B.intl.formatToPlainString(
                                                                        B.t["8drK3z"],
                                                                        { leftValue: eP, rightValue: eV },
                                                                    ),
                                                                    disabled: eO,
                                                                    onFocus: () => e_("x"),
                                                                    onChange: e3,
                                                                }),
                                                                (0, r.jsx)("input", {
                                                                    ref: et,
                                                                    type: "range",
                                                                    tabIndex: "y" !== eI ? -1 : 0,
                                                                    "aria-label": B.intl.string(B.t.SXIgR9),
                                                                    "aria-describedby": eM ? void 0 : ei,
                                                                    "aria-orientation": "vertical",
                                                                    value: eB,
                                                                    min: 0,
                                                                    max: 100,
                                                                    step: 1,
                                                                    "aria-valuetext": B.intl.formatToPlainString(
                                                                        B.t.Mrgs5G,
                                                                        { topValue: eF, bottomValue: eU },
                                                                    ),
                                                                    disabled: eO,
                                                                    onFocus: () => e_("y"),
                                                                    onChange: e2,
                                                                }),
                                                            ],
                                                        }),
                                                    eE
                                                        ? (0, r.jsxs)("div", {
                                                              className: k.Un,
                                                              children: [
                                                                  (0, r.jsx)(f.CircleErrorIcon, {
                                                                      size: "sm",
                                                                      color: E.A.colors.TEXT_FEEDBACK_CRITICAL,
                                                                  }),
                                                                  (0, r.jsx)(R.E, {
                                                                      variant: "body-md/normal",
                                                                      color: "text-feedback-critical",
                                                                      children: B.intl.string(B.t["+ITMYX"]),
                                                                  }),
                                                              ],
                                                          })
                                                        : (0, r.jsxs)(r.Fragment, {
                                                              children: [
                                                                  (0, r.jsx)("img", {
                                                                      onLoad: eK,
                                                                      onError: () => eR(!0),
                                                                      style: {
                                                                          opacity: +(null != eu),
                                                                          transform: `translate3d(${J.current.x}px, ${J.current.y}px, 0) rotate(${ed}deg)`,
                                                                          ...e1(),
                                                                      },
                                                                      className: o()(eA ? k.As : k.nu, k.hh),
                                                                      src: i,
                                                                      crossOrigin: "anonymous",
                                                                      alt: "",
                                                                      "aria-hidden": !0,
                                                                      ref: Z,
                                                                      onMouseDown: eQ,
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
                                                                      })($),
                                                                      style: {
                                                                          opacity: +(null != eu),
                                                                          width: es.width,
                                                                          height: es.height,
                                                                      },
                                                                  }),
                                                              ],
                                                          }),
                                                ],
                                            }),
                                        }),
                                        (0, r.jsx)(h.A, {
                                            id: ei,
                                            children: eM || eE ? null : B.intl.string(B.t.jUze6F),
                                        }),
                                        eb &&
                                            !eE &&
                                            (0, r.jsx)(R.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                className: o()(k.xi, { [k.p0]: !ey && eM }),
                                                "aria-hidden": !0,
                                                children: eM
                                                    ? B.intl.format(B.t.YIfE3a, {
                                                          arrowKeys: "Arrow keys",
                                                          arrowKeysHook: (e, t) =>
                                                              (0, r.jsx)(A.e, { shortcut: "up+down+left+right" }, t),
                                                          shiftKey: "Shift",
                                                          shiftKeyHook: (e, t) =>
                                                              (0, r.jsx)(A.e, { shortcut: "shift" }, t),
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
                                                            T.G,
                                                            {
                                                                className: k.aw,
                                                                initialValue: ex,
                                                                minValue: 1,
                                                                maxValue: 2,
                                                                keyboardStep: 0.025,
                                                                asValueChanges: eX,
                                                                disabled: eO,
                                                                equidistant: !0,
                                                                hideBubble: !0,
                                                                "aria-label": B.intl.string(B.t.EqiCcq),
                                                                getAriaValueText: (e) =>
                                                                    B.intl.formatToPlainString(B.t.GHwBy5, {
                                                                        percent: Math.round(100 * e),
                                                                    }),
                                                            },
                                                            eT,
                                                        ),
                                                        (0, r.jsx)(p.ImageIcon, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: k.HQ,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(C.m, {
                                                    text: B.intl.string(B.t.E36Wd4),
                                                    ariaHidden: !0,
                                                    children: (0, r.jsx)(x.D, {
                                                        className: o()(k.On, { [k.r9]: eO }),
                                                        onClick: eO ? void 0 : eZ,
                                                        "aria-label": B.intl.string(B.t.LzFiKG),
                                                        "aria-disabled": eO,
                                                        children: (0, r.jsx)(D.RotateIcon, {
                                                            size: "md",
                                                            color: "currentColor",
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                K &&
                                    e8 &&
                                    (0, r.jsx)(G.A, {
                                        uploadType: $,
                                        showUpsell: !0,
                                        position: "inline",
                                        className: k.Lu,
                                    }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
