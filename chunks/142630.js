i.d(t, { default: () => K });
var r = i(477900),
    a = i(582128),
    n = i(503698),
    o = i.n(n),
    s = i(435558),
    l = i(830917),
    u = i(189213),
    d = i(259678),
    c = i(140735),
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
    w = i(775602),
    y = i(793574),
    I = i(688810),
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
function P(e, t) {
    let i = (function (e) {
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
            cropAspectRatio: Y,
        } = e,
        Z = a.useRef(z),
        J = a.useRef(null),
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
        [eT, ex] = a.useState(0),
        [eC, eD] = a.useState(X?.zoomRatio ?? 1),
        [ew, ey] = a.useState(!1),
        [eI, e_] = a.useState("x"),
        eG = (0, m.bG)([w.Ay], () => w.Ay.keyboardModeEnabled),
        { analyticsLocations: eN } = (0, I.Ay)(y.A.IMAGE_CROPPING_MODAL),
        { isGIF: eS, isCheckingAnimation: eb, isEditableAnimatedImage: eL } = (0, H._)(t),
        eO = eA || eE || eb,
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
        eS &&
            $ &&
            b.default.track(M.HAw.OPEN_MODAL, {
                type: M.JJy.CROP_GIF_MODAL,
                location: { page: Q },
                location_stack: eN,
                upload_type: K,
            });
    }, [$, Q, eS, eN, K]);
    let eK = a.useCallback(
            (e, t, i, r) => {
                (Z.current = (0, O.F3)(e, t, i)),
                    null != J.current &&
                        (J.current.style.transform = `translate3d(${Z.current.x}px, ${Z.current.y}px, 0) rotate(${r}deg)`);
            },
            [J],
        ),
        e$ = a.useCallback(() => {
            if (null == J.current || em > 1) return;
            let { width: e, height: t } = J.current.getBoundingClientRect(),
                { width: i, height: r } = (0, O.Qx)(K, e, t, Y),
                a = (0, O.Qp)(K, i, r, t, Y),
                n = (0, O.l$)(i, r, a);
            if (null != X && !ea.current) {
                ea.current = !0;
                let e = (function (e, t, i, r, a) {
                    let n = t,
                        o = i;
                    for (let t = 0; t < r.imageRotation; t += 90) {
                        if (n.width === n.height) continue;
                        let { width: t, height: i } = n;
                        (n = (0, O.Qx)(e, i, t, a)), (o = (0, O.Qp)(e, n.width, n.height, t, a));
                    }
                    let s = (0, O.l$)(n.width * r.zoomRatio, n.height * r.zoomRatio, o);
                    return {
                        imageDimensions: n,
                        cropDimensions: o,
                        dragBoundaries: s,
                        imageTransformCoordinates: (0, O.F3)(r.offsetRatio.x * s.right, r.offsetRatio.y * s.top, s),
                    };
                })(K, { width: i, height: r }, a, X, Y);
                eK(e.imageTransformCoordinates.x, e.imageTransformCoordinates.y, e.dragBoundaries, X.imageRotation),
                    eo({ type: "RESTORE_TRANSFORM", ...e, imageRotation: X.imageRotation, zoomRatio: X.zoomRatio });
                return;
            }
            eo({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: i, height: r },
                cropDimensions: a,
                dragBoundaries: n,
            });
        }, [K, em, X, eK, Y]),
        eQ = a.useCallback((e) => {
            eo({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - Z.current.x, y: e.clientY - Z.current.y },
            });
        }, []),
        eW = a.useCallback(
            (e) => {
                let { x: t, y: i } = Z.current;
                eh && (e.clientX !== t || e.clientY !== i) && eK(e.clientX - eg.x, e.clientY - eg.y, el, ed);
            },
            [el, ed, eh, eg.x, eg.y, eK],
        ),
        eX = a.useCallback(() => {
            eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Z.current });
        }, []),
        eY = a.useCallback(
            (e) => {
                if (null == eu) return;
                let { width: t, height: i } = eu,
                    r = (0, O.l$)(t * e, i * e, es),
                    { x: a, y: n } = Z.current;
                ((0, s.inRange)(a, r.right, r.left) && (0, s.inRange)(n, r.top, r.bottom)) || eK(a, n, r, ed),
                    eo({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: r,
                        imageTransformCoordinates: Z.current,
                    });
            },
            [es, eu, ed, eK],
        ),
        eZ = a.useCallback(
            (e, t) => {
                let { width: i, height: r } = e,
                    { width: a, height: n } = (0, O.Qx)(K, r, i, Y),
                    o = (0, O.Qp)(K, a, n, i, Y),
                    s = (0, O.l$)(a * t, n * t, o);
                return { newImageDimensions: { width: a, height: n }, newCropDimensions: o, newDragBoundaries: s };
            },
            [K, Y],
        ),
        eJ = a.useCallback(() => {
            var e;
            if (null == J.current || null == eu) return;
            let t = (ed + 90) % 360;
            g.O.announce(B.intl.formatToPlainString(B.t.uYhsHT, { degrees: t }));
            let { x: i, y: r } = ((e = Z.current.x), { x: -Z.current.y, y: e });
            if (eu.width !== eu.height) {
                let { newImageDimensions: e, newCropDimensions: a, newDragBoundaries: n } = eZ(eu, em);
                eK(i, r, n, t),
                    eo({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: Z.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: a,
                        dragBoundaries: n,
                    });
            } else
                eK(i, r, el, t), eo({ type: "ROTATE_IMAGE", imageTransformCoordinates: Z.current, imageRotation: t });
        }, [el, eZ, eu, ed, eK, em]),
        eq = a.useCallback(() => {
            if (null != J.current && null != eu) {
                if (eu.width !== eu.height && (ed - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: i } = eZ(eu, 1);
                    eo({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: i }), eK(0, 0, i, 0);
                } else {
                    let e = (0, O.l$)(+eu.width, +eu.height, es);
                    eo({ type: "RESET", dragBoundaries: e }), eK(0, 0, e, 0);
                }
                eD(1), ex((e) => e + 1);
            }
        }, [es, eZ, eu, ed, eK]),
        e0 = a.useCallback(() => {
            let e = P(K);
            return e.width !== e.height;
        }, [K]),
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
                e.stopPropagation(), e.preventDefault();
                let r = i ? 40 : 4,
                    a = "ArrowLeft" === t ? -r : "ArrowRight" === t ? r : 0,
                    n = "ArrowUp" === t ? -r : "ArrowDown" === t ? r : 0,
                    o = 0 !== a,
                    s = o ? ee : et;
                if (o ? eH : ev) {
                    let { x: e, y: t } = Z.current;
                    eK(e + a, t + n, el, ed),
                        eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Z.current }),
                        e_(o ? "x" : "y"),
                        s.current?.focus({ preventScroll: !0 });
                }
            },
            [eH, ev, eO, el, ed, eK],
        ),
        e3 = a.useCallback(
            (e) => {
                eO ||
                    !eH ||
                    (eK(el.right > 0 ? ((Number(e.target.value) - 50) * el.right) / 50 : 0, Z.current.y, el, ed),
                    eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Z.current }));
            },
            [eH, eO, el, ed, eK],
        ),
        e9 = a.useCallback(
            (e) => {
                if (eO || !ev) return;
                let t = el.top > 0 ? ((50 - Number(e.target.value)) * el.top) / 50 : 0;
                eK(Z.current.x, t, el, ed), eo({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Z.current });
            },
            [ev, eO, el, ed, eK],
        ),
        e6 = a.useCallback(async () => {
            var e;
            let i, r;
            if (null == J.current) return;
            ep(!0);
            let a = J.current,
                o = P(K, Y);
            if (eL)
                try {
                    let { result: e, cancelFn: n } = await (0, O.ny)({
                        file: t,
                        image: a,
                        cropDimensions: es,
                        cropOriginCoordinates: Z.current,
                        maxDimensions: o,
                        imageRotation: ed,
                    });
                    (er.current = n), (i = await e), (er.current = null), (r = await (0, O.MS)(i).catch(() => void 0));
                } catch (e) {
                    throw (
                        (er.current?.(),
                        (er.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                r = i = (0, l.iL)({
                    image: a,
                    cropDimensions: es,
                    cropOriginCoordinates: Z.current,
                    maxDimensions: o,
                    imageRotation: ed,
                });
            await j({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: i } = e;
                    return i ? (t ? S.E.EDITED_ARCHIVED_ASSET : S.E.ARCHIVED_ASSET) : S.E.NEW_ASSET;
                })({ hasImageEdits: ef, hasOriginalAsset: null != n }),
                imageUri: i,
                staticImageUri: r,
                file: t,
                originalAsset: n,
                transform: {
                    zoomRatio: em,
                    imageRotation: ed,
                    offsetRatio:
                        ((e = Z.current), { x: el.right > 0 ? e.x / el.right : 0, y: el.top > 0 ? e.y / el.top : 0 }),
                },
            }),
                ep(!1),
                await V();
        }, [Y, es, el, t, ef, ed, eL, V, j, n, K, em]),
        e2 = a.useCallback(async () => {
            if (null != er.current) {
                er.current(), (er.current = null), ep(!1);
                return;
            }
            await V();
        }, [V]);
    a.useEffect(
        () => (
            window.addEventListener("mouseup", eX),
            window.addEventListener("resize", e$),
            () => {
                window.removeEventListener("mouseup", eX), window.removeEventListener("resize", e$);
            }
        ),
        [e$, eX],
    ),
        a.useEffect(() => {
            if (eh) return window.addEventListener("mousemove", eW), () => window.removeEventListener("mousemove", eW);
        }, [eW, eh]),
        a.useEffect(() => {
            if (null != er.current) return () => er.current?.();
        }, []);
    let e4 = K === v.HL.AVATAR || K === v.HL.BANNER,
        e7 = (0, G.b)(!e4);
    return (0, r.jsx)(I.f5, {
        value: eN,
        children: (0, r.jsxs)(u.Modal, {
            title: B.intl.string(B.t.DxAYCF),
            size: "md",
            actionBarInput: (0, r.jsx)(h.Q, {
                text: B.intl.string(B.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eq,
                disabled: !ef,
            }),
            actions: [
                { text: B.intl.string(B.t["9TG40l"]), onClick: e2, variant: "secondary" },
                {
                    text: B.intl.string(B.t.ZSHmKD),
                    onClick: e6,
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
                $ &&
                    !e7 &&
                    (0, r.jsx)(_.A, {
                        type: K,
                        analyticsPage: Q,
                        analyticsSection: M.JJy.CROP_GIF_MODAL,
                        isGIF: eS,
                        banner: i,
                    }),
                (0, r.jsxs)("div", {
                    className: k.jE,
                    children: [
                        (0, r.jsxs)("div", {
                            role: "group",
                            "aria-label": B.intl.formatToPlainString(B.t["40CNiu"], { filename: t.name }),
                            children: [
                                (0, r.jsx)(d.vN, {
                                    within: !0,
                                    ringTarget: q,
                                    children: (0, r.jsxs)("div", {
                                        className: k.oW,
                                        ref: q,
                                        onFocus: () => ey(!0),
                                        onBlur: (e) => {
                                            e.currentTarget.contains(e.relatedTarget) || ey(!1);
                                        },
                                        children: [
                                            !eE &&
                                                (0, r.jsxs)(c.A, {
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
                                                            "aria-valuetext": B.intl.formatToPlainString(B.t.Mrgs5G, {
                                                                topValue: eF,
                                                                bottomValue: eU,
                                                            }),
                                                            disabled: eO,
                                                            onFocus: () => e_("y"),
                                                            onChange: e9,
                                                        }),
                                                    ],
                                                }),
                                            eE
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
                                                              onLoad: e$,
                                                              onError: () => eR(!0),
                                                              style: {
                                                                  opacity: +(null != eu),
                                                                  transform: `translate3d(${Z.current.x}px, ${Z.current.y}px, 0) rotate(${ed}deg)`,
                                                                  ...e1(),
                                                              },
                                                              className: o()(eA ? k.As : k.nu, k.hh),
                                                              src: i,
                                                              crossOrigin: "anonymous",
                                                              alt: "",
                                                              "aria-hidden": !0,
                                                              ref: J,
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
                                                              })(K),
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
                                (0, r.jsx)(c.A, { id: ei, children: eM || eE ? null : B.intl.string(B.t.jUze6F) }),
                                eG &&
                                    !eE &&
                                    (0, r.jsx)(R.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: o()(k.xi, { [k.p0]: !ew && eM }),
                                        "aria-hidden": !0,
                                        children: eM
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
                                                        initialValue: eC,
                                                        minValue: 1,
                                                        maxValue: 2,
                                                        keyboardStep: 0.025,
                                                        asValueChanges: eY,
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
                                        (0, r.jsx)(x.m, {
                                            text: B.intl.string(B.t.E36Wd4),
                                            ariaHidden: !0,
                                            children: (0, r.jsx)(C.D, {
                                                className: o()(k.On, { [k.r9]: eO }),
                                                onClick: eO ? void 0 : eJ,
                                                "aria-label": B.intl.string(B.t.LzFiKG),
                                                "aria-disabled": eO,
                                                children: (0, r.jsx)(D.H, { size: "md", color: "currentColor" }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        $ &&
                            e7 &&
                            (0, r.jsx)(N.A, { uploadType: K, showUpsell: !0, position: "inline", className: k.Lu }),
                    ],
                }),
            ],
        }),
    });
}
