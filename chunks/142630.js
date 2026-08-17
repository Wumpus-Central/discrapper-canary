r.d(t, { default: () => K });
var i = r(477900),
    n = r(582128),
    a = r(503698),
    o = r.n(a),
    s = r(435558),
    l = r(830917),
    u = r(189213),
    c = r(259678),
    d = r(140735),
    g = r(17928),
    m = r(765178),
    h = r(123292),
    E = r(695366),
    A = r(661531),
    f = r(834730),
    p = r(475358),
    x = r(191023),
    R = r(106236),
    C = r(866665),
    T = r(939249),
    D = r(831453),
    I = r(775602),
    y = r(793574),
    w = r(688810),
    _ = r(925895),
    G = r(702211),
    b = r(699576),
    N = r(469054),
    L = r(174459),
    S = r(403362),
    O = r(424632),
    H = r(902916),
    v = r(339984),
    M = r(652215),
    j = r(577718),
    k = r(375708),
    B = r(508703);
let P = { x: 0, y: 0 };
function z(e) {
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
            return (0, S.xb)(e);
    }
}
function V(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: i } = e;
    return 1 !== t || 0 !== r || 0 !== i.x || 0 !== i.y;
}
let F = {
    imageDimensions: null,
    cropDimensions: { width: 0, height: 0 },
    dragBoundaries: { top: 0, bottom: 0, left: 0, right: 0 },
    imageTransformCoordinates: P,
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
        case "RESET":
            return {
                ...e,
                imageTransformCoordinates: P,
                zoomRatio: 1,
                imageRotation: 0,
                imageDimensions: t.imageDimensions ?? e.imageDimensions,
                cropDimensions: t.cropDimensions ?? e.cropDimensions,
                dragBoundaries: t.dragBoundaries ?? e.dragBoundaries,
                hasImageEdits: !1,
            };
        default:
            return (0, S.xb)(t);
    }
}
function K(e) {
    let {
            file: t,
            imageUri: r,
            originalAsset: a,
            transitionState: S,
            onCrop: j,
            onClose: V,
            uploadType: K = v.HL.AVATAR,
            showUpsellHeader: $ = !1,
            analyticsPage: Q,
            returnRef: W,
        } = e,
        X = n.useRef(P),
        Y = n.useRef(null),
        Z = n.useRef(null),
        J = n.useRef(null),
        q = n.useRef(null),
        ee = n.useId(),
        et = n.useRef(null),
        [er, ei] = n.useReducer(U, F),
        {
            cropDimensions: en,
            dragBoundaries: ea,
            imageDimensions: eo,
            imageRotation: es,
            imageTransformCoordinates: el,
            zoomRatio: eu,
            startingCoordinates: ec,
            isDragging: ed,
            hasImageEdits: eg,
        } = er,
        [em, eh] = n.useState(!1),
        [eE, eA] = n.useState(!1),
        [ef, ep] = n.useState(0),
        [ex, eR] = n.useState(!1),
        [eC, eT] = n.useState("x"),
        eD = (0, g.bG)([I.Ay], () => I.Ay.keyboardModeEnabled),
        { analyticsLocations: eI } = (0, w.Ay)(y.A.IMAGE_CROPPING_MODAL),
        { isGIF: ey, isCheckingAnimation: ew, isEditableAnimatedImage: e_ } = (0, H._)(t),
        eG = eE || em || ew,
        eb = null != eo && ea.right > 0,
        eN = null != eo && ea.top > 0,
        eL = eb || eN;
    n.useEffect(() => {
        "x" === eC && !eb && eN ? eT("y") : "y" === eC && !eN && eb && eT("x");
    }, [eC, eb, eN]);
    let eS = ea.right > 0 ? Math.round(50 + (el.x / ea.right) * 50) : 50,
        eO = ea.top > 0 ? Math.round(50 - (el.y / ea.top) * 50) : 50,
        eH = 2 * ea.right + en.width,
        ev = 2 * ea.top + en.height,
        eM = eH > 0 ? Math.round(((ea.right - el.x) / eH) * 100) : 0,
        ej = eH > 0 ? Math.round(((ea.right + el.x) / eH) * 100) : 0,
        ek = ev > 0 ? Math.round(((ea.top - el.y) / ev) * 100) : 0,
        eB = ev > 0 ? Math.round(((ea.top + el.y) / ev) * 100) : 0;
    n.useEffect(() => {
        ey &&
            $ &&
            L.default.track(M.HAw.OPEN_MODAL, {
                type: M.JJy.CROP_GIF_MODAL,
                location: { page: Q },
                location_stack: eI,
                upload_type: K,
            });
    }, [$, Q, ey, eI, K]);
    let eP = n.useCallback(
            (e, t, r, i) => {
                (X.current = (0, O.F3)(e, t, r)),
                    null != Y.current &&
                        (Y.current.style.transform = `translate3d(${X.current.x}px, ${X.current.y}px, 0) rotate(${i}deg)`);
            },
            [Y],
        ),
        ez = n.useCallback(() => {
            if (null == Y.current || eu > 1) return;
            let { width: e, height: t } = Y.current.getBoundingClientRect(),
                { width: r, height: i } = (0, O.Qx)(K, e, t),
                n = (0, O.Qp)(K, r, i, t),
                a = (0, O.l$)(r, i, n);
            ei({
                type: "SET_DIMENSIONS",
                imageDimensions: { width: r, height: i },
                cropDimensions: n,
                dragBoundaries: a,
            });
        }, [K, eu]),
        eV = n.useCallback((e) => {
            ei({
                type: "START_DRAGGING_IMAGE",
                startingCoordinates: { x: e.clientX - X.current.x, y: e.clientY - X.current.y },
            });
        }, []),
        eF = n.useCallback(
            (e) => {
                let { x: t, y: r } = X.current;
                ed && (e.clientX !== t || e.clientY !== r) && eP(e.clientX - ec.x, e.clientY - ec.y, ea, es);
            },
            [ea, es, ed, ec.x, ec.y, eP],
        ),
        eU = n.useCallback(() => {
            ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: X.current });
        }, []),
        eK = n.useCallback(
            (e) => {
                if (null == eo) return;
                let { width: t, height: r } = eo,
                    i = (0, O.l$)(t * e, r * e, en),
                    { x: n, y: a } = X.current;
                ((0, s.inRange)(n, i.right, i.left) && (0, s.inRange)(a, i.top, i.bottom)) || eP(n, a, i, es),
                    ei({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: i,
                        imageTransformCoordinates: X.current,
                    });
            },
            [en, eo, es, eP],
        ),
        e$ = n.useCallback(
            (e, t) => {
                let { width: r, height: i } = e,
                    { width: n, height: a } = (0, O.Qx)(K, i, r),
                    o = (0, O.Qp)(K, n, a, r),
                    s = (0, O.l$)(n * t, a * t, o);
                return { newImageDimensions: { width: n, height: a }, newCropDimensions: o, newDragBoundaries: s };
            },
            [K],
        ),
        eQ = n.useCallback(() => {
            var e;
            if (null == Y.current || null == eo) return;
            let t = (es + 90) % 360;
            m.O.announce(k.intl.formatToPlainString(k.t.uYhsHT, { degrees: t }));
            let { x: r, y: i } = ((e = X.current.x), { x: -X.current.y, y: e });
            if (eo.width !== eo.height) {
                let { newImageDimensions: e, newCropDimensions: n, newDragBoundaries: a } = e$(eo, eu);
                eP(r, i, a, t),
                    ei({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: X.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: n,
                        dragBoundaries: a,
                    });
            } else
                eP(r, i, ea, t), ei({ type: "ROTATE_IMAGE", imageTransformCoordinates: X.current, imageRotation: t });
        }, [ea, e$, eo, es, eP, eu]),
        eW = n.useCallback(() => {
            if (null != Y.current && null != eo) {
                if (eo.width !== eo.height && (es - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = e$(eo, 1);
                    ei({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: r }), eP(0, 0, r, 0);
                } else {
                    let e = (0, O.l$)(+eo.width, +eo.height, en);
                    ei({ type: "RESET", dragBoundaries: e }), eP(0, 0, e, 0);
                }
                ep((e) => e + 1);
            }
        }, [en, e$, eo, es, eP]),
        eX = n.useCallback(() => {
            let e = z(K);
            return e.width !== e.height;
        }, [K]),
        eY = n.useCallback(() => {
            if (null == eo) return {};
            let e = eo.width / eo.height,
                t = eX() && e > v.wL ? en.height / eo.height : 1,
                { width: r, height: i } = (function (e, t) {
                    let { width: r, height: i } = e;
                    return t % 180 != 0 ? { width: i, height: r } : { width: r, height: i };
                })(eo, es);
            return { width: r * eu * t, minWidth: r * eu * t, height: i * eu * t, minHeight: i * eu * t };
        }, [en.height, eo, es, eX, eu]),
        eZ = n.useCallback(
            (e) => {
                if (eG) return;
                let { key: t, shiftKey: r } = e;
                if (["Home", "End", "PageUp", "PageDown"].includes(t)) return void e.stopPropagation();
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t)) return;
                e.stopPropagation(), e.preventDefault();
                let i = r ? 40 : 4,
                    n = "ArrowLeft" === t ? -i : "ArrowRight" === t ? i : 0,
                    a = "ArrowUp" === t ? -i : "ArrowDown" === t ? i : 0,
                    o = 0 !== n,
                    s = o ? J : q;
                if (o ? eb : eN) {
                    let { x: e, y: t } = X.current;
                    eP(e + n, t + a, ea, es),
                        ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: X.current }),
                        eT(o ? "x" : "y"),
                        s.current?.focus({ preventScroll: !0 });
                }
            },
            [eb, eN, eG, ea, es, eP],
        ),
        eJ = n.useCallback(
            (e) => {
                eG ||
                    !eb ||
                    (eP(ea.right > 0 ? ((Number(e.target.value) - 50) * ea.right) / 50 : 0, X.current.y, ea, es),
                    ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: X.current }));
            },
            [eb, eG, ea, es, eP],
        ),
        eq = n.useCallback(
            (e) => {
                if (eG || !eN) return;
                let t = ea.top > 0 ? ((50 - Number(e.target.value)) * ea.top) / 50 : 0;
                eP(X.current.x, t, ea, es), ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: X.current });
            },
            [eN, eG, ea, es, eP],
        ),
        e0 = n.useCallback(async () => {
            let e, r;
            if (null == Y.current) return;
            eA(!0);
            let i = Y.current,
                n = z(K);
            if (e_)
                try {
                    let { result: a, cancelFn: o } = await (0, O.ny)({
                        file: t,
                        image: i,
                        cropDimensions: en,
                        cropOriginCoordinates: X.current,
                        maxDimensions: n,
                        imageRotation: es,
                    });
                    (et.current = o), (e = await a), (et.current = null), (r = await (0, O.MS)(e).catch(() => void 0));
                } catch (e) {
                    throw (
                        (et.current?.(),
                        (et.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                r = e = (0, l.iL)({
                    image: i,
                    cropDimensions: en,
                    cropOriginCoordinates: X.current,
                    maxDimensions: n,
                    imageRotation: es,
                });
            await j({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? N.E.EDITED_ARCHIVED_ASSET : N.E.ARCHIVED_ASSET) : N.E.NEW_ASSET;
                })({ hasImageEdits: eg, hasOriginalAsset: null != a }),
                imageUri: e,
                staticImageUri: r,
                file: t,
                originalAsset: a,
            }),
                eA(!1),
                await V();
        }, [en, t, eg, es, e_, V, j, a, K]),
        e1 = n.useCallback(async () => {
            if (null != et.current) {
                et.current(), (et.current = null), eA(!1);
                return;
            }
            await V();
        }, [V]);
    n.useEffect(
        () => (
            window.addEventListener("mouseup", eU),
            window.addEventListener("resize", ez),
            () => {
                window.removeEventListener("mouseup", eU), window.removeEventListener("resize", ez);
            }
        ),
        [ez, eU],
    ),
        n.useEffect(() => {
            if (ed) return window.addEventListener("mousemove", eF), () => window.removeEventListener("mousemove", eF);
        }, [eF, ed]),
        n.useEffect(() => {
            if (null != et.current) return () => et.current?.();
        }, []);
    let e5 = K === v.HL.AVATAR || K === v.HL.BANNER,
        e3 = (0, G.b)(!e5);
    return (0, i.jsx)(w.f5, {
        value: eI,
        children: (0, i.jsxs)(u.Modal, {
            title: k.intl.string(k.t.DxAYCF),
            size: "md",
            actionBarInput: (0, i.jsx)(h.Q, {
                text: k.intl.string(k.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eW,
                disabled: !eg,
            }),
            actions: [
                { text: k.intl.string(k.t["9TG40l"]), onClick: e1, variant: "secondary" },
                {
                    text: k.intl.string(k.t.ZSHmKD),
                    onClick: e0,
                    variant: "primary",
                    autoFocus: !1,
                    loading: eE,
                    disabled: eG,
                },
            ],
            transitionState: S,
            returnRef: W,
            onClose: V,
            children: [
                $ &&
                    !e3 &&
                    (0, i.jsx)(_.A, {
                        type: K,
                        analyticsPage: Q,
                        analyticsSection: M.JJy.CROP_GIF_MODAL,
                        isGIF: ey,
                        banner: r,
                    }),
                (0, i.jsxs)("div", {
                    className: B.jE,
                    children: [
                        (0, i.jsxs)("div", {
                            role: "group",
                            "aria-label": k.intl.formatToPlainString(k.t["40CNiu"], { filename: t.name }),
                            children: [
                                (0, i.jsx)(c.vN, {
                                    within: !0,
                                    ringTarget: Z,
                                    children: (0, i.jsxs)("div", {
                                        className: B.oW,
                                        ref: Z,
                                        onFocus: () => eR(!0),
                                        onBlur: (e) => {
                                            e.currentTarget.contains(e.relatedTarget) || eR(!1);
                                        },
                                        children: [
                                            !em &&
                                                (0, i.jsxs)(d.A, {
                                                    onKeyDown: eZ,
                                                    children: [
                                                        (0, i.jsx)("input", {
                                                            ref: J,
                                                            type: "range",
                                                            tabIndex: "x" !== eC ? -1 : 0,
                                                            "aria-label": k.intl.string(k.t.IBQxkI),
                                                            "aria-describedby": eL ? void 0 : ee,
                                                            "aria-orientation": "horizontal",
                                                            value: eS,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            "aria-valuetext": k.intl.formatToPlainString(
                                                                k.t["8drK3z"],
                                                                { leftValue: eM, rightValue: ej },
                                                            ),
                                                            disabled: eG,
                                                            onFocus: () => eT("x"),
                                                            onChange: eJ,
                                                        }),
                                                        (0, i.jsx)("input", {
                                                            ref: q,
                                                            type: "range",
                                                            tabIndex: "y" !== eC ? -1 : 0,
                                                            "aria-label": k.intl.string(k.t.SXIgR9),
                                                            "aria-describedby": eL ? void 0 : ee,
                                                            "aria-orientation": "vertical",
                                                            value: eO,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            "aria-valuetext": k.intl.formatToPlainString(k.t.Mrgs5G, {
                                                                topValue: ek,
                                                                bottomValue: eB,
                                                            }),
                                                            disabled: eG,
                                                            onFocus: () => eT("y"),
                                                            onChange: eq,
                                                        }),
                                                    ],
                                                }),
                                            em
                                                ? (0, i.jsxs)("div", {
                                                      className: B.Un,
                                                      children: [
                                                          (0, i.jsx)(E.E, {
                                                              size: "sm",
                                                              color: A.A.colors.TEXT_FEEDBACK_CRITICAL,
                                                          }),
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-md/normal",
                                                              color: "text-feedback-critical",
                                                              children: k.intl.string(k.t["+ITMYX"]),
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              onLoad: ez,
                                                              onError: () => eh(!0),
                                                              style: {
                                                                  opacity: +(null != eo),
                                                                  transform: `translate3d(${X.current.x}px, ${X.current.y}px, 0) rotate(${es}deg)`,
                                                                  ...eY(),
                                                              },
                                                              className: o()(eE ? B.As : B.nu, B.hh),
                                                              src: r,
                                                              crossOrigin: "anonymous",
                                                              alt: "",
                                                              "aria-hidden": !0,
                                                              ref: Y,
                                                              onMouseDown: eV,
                                                              draggable: !1,
                                                          }),
                                                          (0, i.jsx)("div", {
                                                              className: (function (e) {
                                                                  switch (e) {
                                                                      case v.HL.GUILD_ICON:
                                                                          return B.$A;
                                                                      case v.HL.BANNER:
                                                                      case v.HL.GUILD_BANNER:
                                                                      case v.HL.VIDEO_BACKGROUND:
                                                                      case v.HL.SCHEDULED_EVENT_IMAGE:
                                                                      case v.HL.HOME_HEADER:
                                                                      case v.HL.PERSONAL_WIDGET_COVER:
                                                                          return B.rn;
                                                                      case v.HL.AVATAR:
                                                                      case v.HL.AVATAR_DECORATION:
                                                                          return B._h;
                                                                      case v.HL.PERSONAL_WIDGET_FIELD:
                                                                          return B.j9;
                                                                  }
                                                              })(K),
                                                              style: {
                                                                  opacity: +(null != eo),
                                                                  width: en.width,
                                                                  height: en.height,
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(d.A, { id: ee, children: eL || em ? null : k.intl.string(k.t.jUze6F) }),
                                eD &&
                                    !em &&
                                    (0, i.jsx)(f.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: o()(B.xi, { [B.p0]: !ex && eL }),
                                        "aria-hidden": !0,
                                        children: eL
                                            ? k.intl.format(k.t.YIfE3a, {
                                                  arrowKeys: "Arrow keys",
                                                  arrowKeysHook: (e, t) =>
                                                      (0, i.jsx)(p.e, { shortcut: "up+down+left+right" }, t),
                                                  shiftKey: "Shift",
                                                  shiftKeyHook: (e, t) => (0, i.jsx)(p.e, { shortcut: "shift" }, t),
                                              })
                                            : k.intl.string(k.t.jUze6F),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: B.bK,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: B.mu,
                                            children: [
                                                (0, i.jsx)(x.ImageIcon, {
                                                    size: "xxs",
                                                    color: "currentColor",
                                                    className: B.HQ,
                                                }),
                                                (0, i.jsx)(
                                                    R.A,
                                                    {
                                                        className: B.aw,
                                                        initialValue: 1,
                                                        minValue: 1,
                                                        maxValue: 2,
                                                        keyboardStep: 0.025,
                                                        asValueChanges: eK,
                                                        disabled: eG,
                                                        equidistant: !0,
                                                        hideBubble: !0,
                                                        "aria-label": k.intl.string(k.t.EqiCcq),
                                                        getAriaValueText: (e) =>
                                                            k.intl.formatToPlainString(k.t.GHwBy5, {
                                                                percent: Math.round(100 * e),
                                                            }),
                                                    },
                                                    ef,
                                                ),
                                                (0, i.jsx)(x.ImageIcon, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: B.HQ,
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(C.m, {
                                            text: k.intl.string(k.t.E36Wd4),
                                            ariaHidden: !0,
                                            children: (0, i.jsx)(T.D, {
                                                className: o()(B.On, { [B.r9]: eG }),
                                                onClick: eG ? void 0 : eQ,
                                                "aria-label": k.intl.string(k.t.LzFiKG),
                                                "aria-disabled": eG,
                                                children: (0, i.jsx)(D.H, { size: "md", color: "currentColor" }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        $ &&
                            e3 &&
                            (0, i.jsx)(b.A, { uploadType: K, showUpsell: !0, position: "inline", className: B.Lu }),
                    ],
                }),
            ],
        }),
    });
}
