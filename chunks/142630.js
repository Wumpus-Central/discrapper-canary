r.d(t, { default: () => K });
var i = r(627968),
    n = r(64700),
    a = r(503698),
    o = r.n(a),
    s = r(435558),
    l = r(830917),
    u = r(189213),
    c = r(187322),
    d = r(140735),
    g = r(17928),
    m = r(990078),
    h = r(765178),
    E = r(123292),
    f = r(695366),
    A = r(661531),
    p = r(834730),
    x = r(475358),
    C = r(191023),
    R = r(106236),
    T = r(939249),
    D = r(831453),
    y = r(775602),
    w = r(793574),
    I = r(688810),
    _ = r(925895),
    b = r(702211),
    G = r(699576),
    N = r(392107),
    S = r(174459),
    L = r(403362),
    O = r(424632),
    v = r(902916),
    H = r(339984),
    M = r(652215),
    j = r(577718),
    k = r(375708),
    B = r(506263);
let z = { x: 0, y: 0 };
function P(e) {
    switch (e) {
        case H.HL.BANNER:
            return { height: H.yZ, width: H.nI };
        case H.HL.VIDEO_BACKGROUND:
            return j.Im;
        case H.HL.AVATAR:
        case H.HL.AVATAR_DECORATION:
        case H.HL.GUILD_ICON:
            return { height: M.XAf, width: M.XAf };
        case H.HL.GUILD_BANNER:
            return { height: H.cN, width: H.Xb };
        case H.HL.SCHEDULED_EVENT_IMAGE:
            return { height: H.Wz, width: H.PU };
        case H.HL.HOME_HEADER:
            return { height: H.PS, width: H.CK };
        default:
            return (0, L.xb)(e);
    }
}
function V(e) {
    let { zoomRatio: t, imageRotation: r, imageTransformCoordinates: i } = e;
    return 1 !== t || 0 !== r || 0 !== i.x || 0 !== i.y;
}
let U = {
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
function F(e, t) {
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
            imageUri: r,
            originalAsset: a,
            transitionState: L,
            onCrop: j,
            onClose: V,
            uploadType: K = H.HL.AVATAR,
            showUpsellHeader: $ = !1,
            analyticsPage: Q,
            returnRef: X,
        } = e,
        Y = n.useRef(z),
        W = n.useRef(null),
        Z = n.useRef(null),
        J = n.useRef(null),
        q = n.useRef(null),
        ee = n.useId(),
        et = n.useRef(null),
        [er, ei] = n.useReducer(F, U),
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
        [eE, ef] = n.useState(!1),
        [eA, ep] = n.useState(0),
        [ex, eC] = n.useState(!1),
        [eR, eT] = n.useState("x"),
        eD = (0, g.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        { analyticsLocations: ey } = (0, I.Ay)(w.A.IMAGE_CROPPING_MODAL),
        { isGIF: ew, isCheckingAnimation: eI, isEditableAnimatedImage: e_ } = (0, v._)(t),
        eb = eE || em || eI,
        eG = null != eo && ea.right > 0,
        eN = null != eo && ea.top > 0,
        eS = eG || eN;
    n.useEffect(() => {
        "x" === eR && !eG && eN ? eT("y") : "y" === eR && !eN && eG && eT("x");
    }, [eR, eG, eN]);
    let eL = ea.right > 0 ? Math.round(50 + (el.x / ea.right) * 50) : 50,
        eO = ea.top > 0 ? Math.round(50 - (el.y / ea.top) * 50) : 50,
        ev = 2 * ea.right + en.width,
        eH = 2 * ea.top + en.height,
        eM = ev > 0 ? Math.round(((ea.right - el.x) / ev) * 100) : 0,
        ej = ev > 0 ? Math.round(((ea.right + el.x) / ev) * 100) : 0,
        ek = eH > 0 ? Math.round(((ea.top - el.y) / eH) * 100) : 0,
        eB = eH > 0 ? Math.round(((ea.top + el.y) / eH) * 100) : 0;
    n.useEffect(() => {
        ew &&
            $ &&
            S.default.track(M.HAw.OPEN_MODAL, {
                type: M.JJy.CROP_GIF_MODAL,
                location: { page: Q },
                location_stack: ey,
                upload_type: K,
            });
    }, [$, Q, ew, ey, K]);
    let ez = n.useCallback(
            (e, t, r, i) => {
                (Y.current = (0, O.F3)(e, t, r)),
                    null != W.current &&
                        (W.current.style.transform = `translate3d(${Y.current.x}px, ${Y.current.y}px, 0) rotate(${i}deg)`);
            },
            [W],
        ),
        eP = n.useCallback(() => {
            if (null == W.current || eu > 1) return;
            let { width: e, height: t } = W.current.getBoundingClientRect(),
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
                startingCoordinates: { x: e.clientX - Y.current.x, y: e.clientY - Y.current.y },
            });
        }, []),
        eU = n.useCallback(
            (e) => {
                let { x: t, y: r } = Y.current;
                ed && (e.clientX !== t || e.clientY !== r) && ez(e.clientX - ec.x, e.clientY - ec.y, ea, es);
            },
            [ea, es, ed, ec.x, ec.y, ez],
        ),
        eF = n.useCallback(() => {
            ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current });
        }, []),
        eK = n.useCallback(
            (e) => {
                if (null == eo) return;
                let { width: t, height: r } = eo,
                    i = (0, O.l$)(t * e, r * e, en),
                    { x: n, y: a } = Y.current;
                ((0, s.inRange)(n, i.right, i.left) && (0, s.inRange)(a, i.top, i.bottom)) || ez(n, a, i, es),
                    ei({
                        type: "SET_IMAGE_ZOOM_RATIO",
                        zoomRatio: e,
                        dragBoundaries: i,
                        imageTransformCoordinates: Y.current,
                    });
            },
            [en, eo, es, ez],
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
            if (null == W.current || null == eo) return;
            let t = (es + 90) % 360;
            h.O.announce(k.intl.formatToPlainString(k.t.uYhsHT, { degrees: t }));
            let { x: r, y: i } = ((e = Y.current.x), { x: -Y.current.y, y: e });
            if (eo.width !== eo.height) {
                let { newImageDimensions: e, newCropDimensions: n, newDragBoundaries: a } = e$(eo, eu);
                ez(r, i, a, t),
                    ei({
                        type: "ROTATE_IMAGE",
                        imageTransformCoordinates: Y.current,
                        imageRotation: t,
                        imageDimensions: e,
                        cropDimensions: n,
                        dragBoundaries: a,
                    });
            } else
                ez(r, i, ea, t), ei({ type: "ROTATE_IMAGE", imageTransformCoordinates: Y.current, imageRotation: t });
        }, [ea, e$, eo, es, ez, eu]),
        eX = n.useCallback(() => {
            if (null != W.current && null != eo) {
                if (eo.width !== eo.height && (es - 0) % 180 != 0) {
                    let { newImageDimensions: e, newCropDimensions: t, newDragBoundaries: r } = e$(eo, 1);
                    ei({ type: "RESET", imageDimensions: e, cropDimensions: t, dragBoundaries: r }), ez(0, 0, r, 0);
                } else {
                    let e = (0, O.l$)(+eo.width, +eo.height, en);
                    ei({ type: "RESET", dragBoundaries: e }), ez(0, 0, e, 0);
                }
                ep((e) => e + 1);
            }
        }, [en, e$, eo, es, ez]),
        eY = n.useCallback(() => {
            let e = P(K);
            return e.width !== e.height;
        }, [K]),
        eW = n.useCallback(() => {
            if (null == eo) return {};
            let e = eo.width / eo.height,
                t = eY() && e > H.wL ? en.height / eo.height : 1,
                { width: r, height: i } = ((e, t) => {
                    let { width: r, height: i } = e;
                    return t % 180 != 0 ? { width: i, height: r } : { width: r, height: i };
                })(eo, es);
            return { width: r * eu * t, minWidth: r * eu * t, height: i * eu * t, minHeight: i * eu * t };
        }, [en.height, eo, es, eY, eu]),
        eZ = n.useCallback(
            (e) => {
                if (eb) return;
                let { key: t, shiftKey: r } = e;
                if (["Home", "End", "PageUp", "PageDown"].includes(t)) return void e.stopPropagation();
                if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(t)) return;
                e.stopPropagation(), e.preventDefault();
                let i = r ? 40 : 4,
                    n = "ArrowLeft" === t ? -i : "ArrowRight" === t ? i : 0,
                    a = "ArrowUp" === t ? -i : "ArrowDown" === t ? i : 0,
                    o = 0 !== n,
                    s = o ? J : q;
                if (o ? eG : eN) {
                    let { x: e, y: t } = Y.current;
                    ez(e + n, t + a, ea, es),
                        ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current }),
                        eT(o ? "x" : "y"),
                        s.current?.focus({ preventScroll: !0 });
                }
            },
            [eG, eN, eb, ea, es, ez],
        ),
        eJ = n.useCallback(
            (e) => {
                eb ||
                    !eG ||
                    (ez(ea.right > 0 ? ((Number(e.target.value) - 50) * ea.right) / 50 : 0, Y.current.y, ea, es),
                    ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current }));
            },
            [eG, eb, ea, es, ez],
        ),
        eq = n.useCallback(
            (e) => {
                if (eb || !eN) return;
                let t = ea.top > 0 ? ((50 - Number(e.target.value)) * ea.top) / 50 : 0;
                ez(Y.current.x, t, ea, es), ei({ type: "STOP_DRAGGING_IMAGE", imageTransformCoordinates: Y.current });
            },
            [eN, eb, ea, es, ez],
        ),
        e0 = n.useCallback(async () => {
            let e;
            if (null == W.current) return;
            ef(!0);
            let r = W.current,
                i = P(K);
            if (e_)
                try {
                    let { result: n, cancelFn: a } = await (0, O.ny)({
                        file: t,
                        image: r,
                        cropDimensions: en,
                        cropOriginCoordinates: Y.current,
                        maxDimensions: i,
                        imageRotation: es,
                    });
                    (et.current = a), (e = await n), (et.current = null);
                } catch (e) {
                    throw (
                        (et.current?.(),
                        (et.current = null),
                        Error(`Error cropping animated image: ${e instanceof Error ? e.toString() : String(e)}`))
                    );
                }
            else
                e = (0, l.iL)({
                    image: r,
                    cropDimensions: en,
                    cropOriginCoordinates: Y.current,
                    maxDimensions: i,
                    imageRotation: es,
                });
            await j({
                assetOrigin: (function (e) {
                    let { hasImageEdits: t, hasOriginalAsset: r } = e;
                    return r ? (t ? N.E.EDITED_ARCHIVED_ASSET : N.E.ARCHIVED_ASSET) : N.E.NEW_ASSET;
                })({ hasImageEdits: eg, hasOriginalAsset: null != a }),
                imageUri: e,
                file: t,
                originalAsset: a,
            }),
                ef(!1),
                await V();
        }, [en, t, eg, es, e_, V, j, a, K]),
        e1 = n.useCallback(async () => {
            if (null != et.current) {
                et.current(), (et.current = null), ef(!1);
                return;
            }
            await V();
        }, [V]);
    n.useEffect(
        () => (
            window.addEventListener("mouseup", eF),
            window.addEventListener("resize", eP),
            () => {
                window.removeEventListener("mouseup", eF), window.removeEventListener("resize", eP);
            }
        ),
        [eP, eF],
    ),
        n.useEffect(() => {
            if (ed) return window.addEventListener("mousemove", eU), () => window.removeEventListener("mousemove", eU);
        }, [eU, ed]),
        n.useEffect(() => {
            if (null != et.current) return () => et.current?.();
        }, []);
    let e5 = K === H.HL.AVATAR || K === H.HL.BANNER,
        e3 = (0, b.b)(!e5);
    return (0, i.jsx)(I.f5, {
        value: ey,
        children: (0, i.jsxs)(u.Modal, {
            title: k.intl.string(k.t.DxAYCF),
            size: "md",
            actionBarInput: (0, i.jsx)(E.Q, {
                text: k.intl.string(k.t.yBZMsQ),
                textVariant: "text-md/medium",
                onClick: eX,
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
                    disabled: eb,
                },
            ],
            transitionState: L,
            returnRef: X,
            onClose: V,
            children: [
                $ &&
                    !e3 &&
                    (0, i.jsx)(_.A, {
                        type: K,
                        analyticsPage: Q,
                        analyticsSection: M.JJy.CROP_GIF_MODAL,
                        isGIF: ew,
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
                                        onFocus: () => eC(!0),
                                        onBlur: (e) => {
                                            e.currentTarget.contains(e.relatedTarget) || eC(!1);
                                        },
                                        children: [
                                            !em &&
                                                (0, i.jsxs)(d.A, {
                                                    onKeyDown: eZ,
                                                    children: [
                                                        (0, i.jsx)("input", {
                                                            ref: J,
                                                            type: "range",
                                                            tabIndex: "x" !== eR ? -1 : 0,
                                                            "aria-label": k.intl.string(k.t.IBQxkI),
                                                            "aria-describedby": eS ? void 0 : ee,
                                                            "aria-orientation": "horizontal",
                                                            value: eL,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            "aria-valuetext": k.intl.formatToPlainString(
                                                                k.t["8drK3z"],
                                                                { leftValue: eM, rightValue: ej },
                                                            ),
                                                            disabled: eb,
                                                            onFocus: () => eT("x"),
                                                            onChange: eJ,
                                                        }),
                                                        (0, i.jsx)("input", {
                                                            ref: q,
                                                            type: "range",
                                                            tabIndex: "y" !== eR ? -1 : 0,
                                                            "aria-label": k.intl.string(k.t.SXIgR9),
                                                            "aria-describedby": eS ? void 0 : ee,
                                                            "aria-orientation": "vertical",
                                                            value: eO,
                                                            min: 0,
                                                            max: 100,
                                                            step: 1,
                                                            "aria-valuetext": k.intl.formatToPlainString(k.t.Mrgs5G, {
                                                                topValue: ek,
                                                                bottomValue: eB,
                                                            }),
                                                            disabled: eb,
                                                            onFocus: () => eT("y"),
                                                            onChange: eq,
                                                        }),
                                                    ],
                                                }),
                                            em
                                                ? (0, i.jsxs)("div", {
                                                      className: B.Un,
                                                      children: [
                                                          (0, i.jsx)(f.E, {
                                                              size: "sm",
                                                              color: A.A.colors.TEXT_FEEDBACK_CRITICAL,
                                                          }),
                                                          (0, i.jsx)(p.E, {
                                                              variant: "text-md/normal",
                                                              color: "text-feedback-critical",
                                                              children: k.intl.string(k.t["+ITMYX"]),
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          (0, i.jsx)("img", {
                                                              onLoad: eP,
                                                              onError: () => eh(!0),
                                                              style: {
                                                                  opacity: +(null != eo),
                                                                  transform: `translate3d(${Y.current.x}px, ${Y.current.y}px, 0) rotate(${es}deg)`,
                                                                  ...eW(),
                                                              },
                                                              className: o()(eE ? B.As : B.nu, B.hh),
                                                              src: r,
                                                              crossOrigin: "anonymous",
                                                              alt: "",
                                                              "aria-hidden": !0,
                                                              ref: W,
                                                              onMouseDown: eV,
                                                              draggable: !1,
                                                          }),
                                                          (0, i.jsx)("div", {
                                                              className: (function (e) {
                                                                  switch (e) {
                                                                      case H.HL.GUILD_ICON:
                                                                          return B.$A;
                                                                      case H.HL.BANNER:
                                                                      case H.HL.GUILD_BANNER:
                                                                      case H.HL.VIDEO_BACKGROUND:
                                                                      case H.HL.SCHEDULED_EVENT_IMAGE:
                                                                      case H.HL.HOME_HEADER:
                                                                          return B.rn;
                                                                      case H.HL.AVATAR:
                                                                      case H.HL.AVATAR_DECORATION:
                                                                          return B._h;
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
                                (0, i.jsx)(d.A, { id: ee, children: eS || em ? null : k.intl.string(k.t.jUze6F) }),
                                eD &&
                                    !em &&
                                    (0, i.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: o()(B.xi, { [B.p0]: !ex && eS }),
                                        "aria-hidden": !0,
                                        children: eS
                                            ? k.intl.format(k.t.YIfE3a, {
                                                  arrowKeys: "Arrow keys",
                                                  arrowKeysHook: (e, t) =>
                                                      (0, i.jsx)(x.e, { shortcut: "up+down+left+right" }, t),
                                                  shiftKey: "Shift",
                                                  shiftKeyHook: (e, t) => (0, i.jsx)(x.e, { shortcut: "shift" }, t),
                                              })
                                            : k.intl.string(k.t.jUze6F),
                                    }),
                                (0, i.jsxs)("div", {
                                    className: B.bK,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: B.mu,
                                            children: [
                                                (0, i.jsx)(C.x, {
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
                                                        disabled: eb,
                                                        equidistant: !0,
                                                        hideBubble: !0,
                                                        "aria-label": k.intl.string(k.t.EqiCcq),
                                                        getAriaValueText: (e) =>
                                                            k.intl.formatToPlainString(k.t.GHwBy5, {
                                                                percent: Math.round(100 * e),
                                                            }),
                                                    },
                                                    eA,
                                                ),
                                                (0, i.jsx)(C.x, { size: "md", color: "currentColor", className: B.HQ }),
                                            ],
                                        }),
                                        (0, i.jsx)(m.m, {
                                            text: k.intl.string(k.t.E36Wd4),
                                            ariaHidden: !0,
                                            children: (0, i.jsx)(T.D, {
                                                className: o()(B.On, { [B.r9]: eb }),
                                                onClick: eb ? void 0 : eQ,
                                                "aria-label": k.intl.string(k.t.LzFiKG),
                                                "aria-disabled": eb,
                                                children: (0, i.jsx)(D.H, { size: "md", color: "currentColor" }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        $ &&
                            e3 &&
                            (0, i.jsx)(G.A, { uploadType: K, showUpsell: !0, position: "inline", className: B.Lu }),
                    ],
                }),
            ],
        }),
    });
}
