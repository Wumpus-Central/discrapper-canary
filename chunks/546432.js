n.d(t, {
    OB: () => B,
    ZP: () => H,
    mz: () => Z,
}),
    n(997841),
    n(388685),
    n(539854),
    n(35282),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(228458),
    l = n(481060),
    c = n(393238),
    u = n(399654),
    d = n(162609),
    f = n(370298),
    _ = n(95398),
    p = n(167080),
    h = n(247206),
    m = n(936141),
    g = n(262777),
    E = n(947849),
    b = n(124347),
    y = n(976853),
    O = n(592125),
    v = n(626135),
    I = n(630388),
    T = n(956664),
    S = n(499376),
    A = n(217702),
    C = n(981631),
    N = n(388032),
    R = n(337595),
    P = n(374299);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let k = 200,
    U = 50;
function G(e) {
    return "IMAGE" === e || "VIDEO" === e;
}
function B(e, t) {
    var n;
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, S.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, I.yE)(null != (n = e.flags) ? n : 0, C.J0y.IS_ANIMATED),
    };
}
let Z = (e) => {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: a,
            showDownload: s,
            showImageAppPicker: u,
            isVisualMediaType: d,
            channelId: _,
        } = e,
        h = i.useRef(null),
        [m, g] = i.useState(0);
    (0, c.PM)(h, (e) => {
        let { width: t } = e;
        null != t && g(Math.floor((t - 8) / 32));
    });
    let E = [],
        [b, y] = i.useState(!1),
        O = i.useCallback(() => y((e) => !e), []);
    u &&
        E.push(
            (0, r.jsx)(
                f.Z,
                {
                    toggleShowMenu: O,
                    showMenu: b,
                    channelId: _,
                    className: o()(P.hoverButton, { [P.selected]: b }),
                    imageUrl: n,
                    mimeType: t,
                },
                "app",
            ),
        ),
        null != a &&
            E.push(
                (0, r.jsx)(
                    l.ua7,
                    {
                        text: N.intl.string(N.t["/XT3io"]),
                        children: (e) =>
                            (0, r.jsx)(
                                l.P3F,
                                L(D({}, e), {
                                    className: o()(P.hoverButton, R.removeMosaicItemHoverButton),
                                    focusProps: { offset: 2 },
                                    onClick: a,
                                    "aria-label": N.intl.string(N.t["0+xZHx"]),
                                    children: (0, r.jsx)(l.XHJ, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 20,
                                        height: 20,
                                    }),
                                }),
                            ),
                    },
                    "remove",
                ),
            ),
        s &&
            E.push(
                (0, r.jsx)(
                    l.ua7,
                    {
                        text: N.intl.string(N.t["1WjMbG"]),
                        children: (e) =>
                            (0, r.jsx)(
                                p.Z,
                                L(D({}, e), {
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    className: P.hoverButton,
                                    iconClassName: R.downloadHoverButtonIcon,
                                    focusProps: { offset: 2 },
                                    href: n,
                                    mimeType: t,
                                }),
                            ),
                    },
                    "download",
                ),
            );
    let v = Math.max(0, E.length - m);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            m > 0 &&
                E.length > 0 &&
                (0, r.jsx)("div", {
                    className: o()(P.hoverButtonGroup, {
                        [P.nonMediaMosaicItem]: !d,
                        [P.forceShowHover]: b,
                    }),
                    children: E.slice(v),
                }),
            (0, r.jsx)("div", {
                ref: h,
                className: P.sizer,
            }),
        ],
    });
};
function V(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: a,
            canRemoveItem: c,
            onRemoveItem: f,
            onClick: _,
            handlePreloadImage: p,
            onContextMenu: h,
            onPlay: m,
            renderImageComponent: g,
            renderVideoComponent: I,
            renderAudioComponent: S,
            renderPlaintextFilePreview: P,
            renderGenericFileComponent: w,
            renderVisualPlaceholderComponent: D,
            className: x,
            imgContainerClassName: L,
            imgClassName: j,
            focusable: M,
            hiddenSpoilers: k,
            mediaLayoutType: U,
            maxWidth: G,
            maxHeight: B,
            hasFooter: V,
            useFullWidth: F,
            isVisualMediaType: H,
            onVideoControlsShow: Y,
            onVideoControlsHide: W,
            isSearchResult: K,
            forcePlaceholder: z,
        } = e,
        { width: q, height: X, spoiler: Q, type: J, contentType: $ } = n,
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        ei = t.getChannelId(),
        ea = O.Z.getChannel(ei),
        eo = (0, y.Z)(ei),
        es = d.P.useExperiment({ location: "MediaMosaicItem" }, { autoTrackExposure: !0 }).imageRecsEnabled,
        el = i.useMemo(() => (null != $ && -1 !== $.indexOf("/") ? $.split("/") : ["unknown", "unknown"]), [$]),
        ec =
            "IMAGE" === J &&
            !b.uo.test(n.downloadUrl) &&
            !((b.YG.test(n.downloadUrl) || b.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated),
        eu = !1;
    if (H) {
        (null == q || null == X) && (eu = !0);
        let e = (0, T.Dc)({
            width: null != q ? q : 0,
            height: null != X ? X : 0,
            maxWidth: null != G ? G : A.mT,
            maxHeight: null != B ? B : A.Jj,
        });
        !F && (e * (null != q ? q : 0) < A.OF || e * (null != X ? X : 0) < A.OF) && (eu = !0);
    }
    let ed = i.useCallback(() => {
            f(n);
        }, [n, f]),
        ef = i.useCallback(
            (e) => {
                if (ec && !eu && !0 !== K)
                    if (e && !en) {
                        if ((er(!0), es)) {
                            var t;
                            (0, u.a)({
                                channelId: null != (t = null == ea ? void 0 : ea.id) ? t : "",
                                location: s.I.CONTEXTUAL_IMAGE,
                                withCommands: !0,
                            });
                        }
                        v.default.track(C.rMx.IMAGE_HOVERED, {
                            guild_id: null == ea ? void 0 : ea.guild_id,
                            channel_id: null == ea ? void 0 : ea.id,
                            image_recommendations_shown: es,
                        });
                    } else !e && en && er(!1);
            },
            [en, ea, es, ec, eu, K],
        ),
        e_ = i.useCallback(() => {
            if (U === A.hV.MOSAIC) {
                let e = (!eo && ["VIDEO", "CLIP", "AUDIO"].includes(J)) || "OTHER" === J;
                return eu
                    ? null
                    : !ee &&
                          (0, r.jsx)(Z, {
                              mimeType: el,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: ec && es && !0 !== K,
                              onRemoveItem: c ? ed : void 0,
                              isVisualMediaType: H,
                              channelId: ei,
                          });
            }
            return (
                c &&
                (0, r.jsx)(l.P3F, {
                    className: Q ? R.spoilerRemoveMosaicItemButton : R.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => f(n),
                    "aria-label": N.intl.string(N.t["0+xZHx"]),
                    children: (0, r.jsx)(l.Dio, {
                        size: "xs",
                        color: "currentColor",
                    }),
                })
            );
        }, [U, c, Q, eo, J, eu, ee, el, n, ec, es, K, ed, H, ei, f]);
    if (z)
        return (0, r.jsx)(l.Eep, {
            className: x,
            readyState: C.zo9.READY,
            src: "",
            width: null != q ? q : 350,
            height: null != X ? X : 350,
            maxWidth: G,
            maxHeight: B,
            mediaLayoutType: U,
            useFullWidth: F,
            zoomable: !1,
        });
    switch (J) {
        case "IMAGE":
            return (0, r.jsx)(E.h.Consumer, {
                children: (e) =>
                    (0, r.jsx)(g, {
                        item: n,
                        message: t,
                        width: q,
                        height: X,
                        autoPlay: a && !k,
                        onClick: _,
                        onContextMenu: h,
                        shouldHideMediaOptions: eo,
                        renderAccessory: e,
                        renderAdjacentContent: e_,
                        containerClassName: x,
                        className: L,
                        imageClassName: j,
                        shouldLink: M,
                        hiddenSpoilers: k,
                        responsive: !0,
                        mediaLayoutType: U,
                        maxWidth: G,
                        maxHeight: B,
                        useFullWidth: F,
                        handlePreloadImage: p,
                        onMouseEnter: () => ef(!0),
                        onMouseLeave: () => ef(!1),
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, r.jsx)(I, {
                item: n,
                message: t,
                width: q,
                height: X,
                onClick: _,
                onContextMenu: h,
                renderAdjacentContent: e_,
                naturalWidth: q,
                naturalHeight: X,
                className: o()(x, { [R.hasFooter]: V }),
                playable: M,
                responsive: !0,
                mediaLayoutType: U,
                maxWidth: G,
                maxHeight: B,
                useFullWidth: F,
                mimeType: el,
                onControlsShow: Y,
                onControlsHide: W,
                downloadable: !eo,
                mediaPlayerClassName: V ? R.hasFooter : void 0,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == D) return null;
            return (0, r.jsx)(D, {
                item: n,
                message: t,
                className: L,
                imageClassName: j,
                maxWidth: G,
                maxHeight: B,
                mediaLayoutType: U,
                useFullWidth: F,
            });
        case "AUDIO":
            return (0, r.jsx)(S, {
                item: n,
                message: t,
                className: x,
                playable: M,
                mimeType: el,
                renderAdjacentContent: e_,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: m,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, r.jsx)(P, {
                item: n,
                message: t,
                className: x,
                onClick: _,
                onContextMenu: h,
                renderAdjacentContent: e_,
            });
        case "OTHER":
            return (0, r.jsx)(w, {
                item: n,
                message: t,
                className: x,
                onClick: _,
                onContextMenu: h,
                renderAdjacentContent: e_,
            });
        case "INVALID":
            return null;
    }
}
function F(e, t, n) {
    if (!t) return;
    let r = e.width;
    if (void 0 !== e.width && void 0 !== e.height) {
        let { width: t } = (0, T.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300,
        });
        r = t;
    }
    return L(D({}, n !== A.hV.MOSAIC && { maxWidth: null != r ? r : "400px" }), {
        width: "100%",
        height: "100%",
        justifySelf: "auto",
    });
}
let H = function (e) {
    var {
            className: t,
            item: n,
            message: a,
            getObscureReason: s,
            useFullWidth: l,
            mediaLayoutType: c,
            isSingleMosaicItem: u,
            footer: d,
            displayGridItem: f,
        } = e,
        p = j(e, [
            "className",
            "item",
            "message",
            "getObscureReason",
            "useFullWidth",
            "mediaLayoutType",
            "isSingleMosaicItem",
            "footer",
            "displayGridItem",
        ]);
    let { width: E, height: b, type: y } = n,
        O = s(n, (0, g.v)(a)),
        [v, I] = i.useState(null != O),
        T = (0, h.JO)(O),
        C = c === A.hV.MOSAIC,
        N = !C && ((null != E && E < k) || (null != b && b < U)),
        P = G(y),
        w = (0, S.R_)(y),
        x = u && null != O && (0, h.yf)(E, b),
        [M, B] = i.useState(!1),
        Z = () => {
            B(!0);
        },
        H = () => {
            B(!1);
        },
        Y = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                V,
                L(D({}, p), {
                    item: n,
                    message: a,
                    getObscureReason: s,
                    hiddenSpoilers: e,
                    className: o()(t, R.mosaicItemContent, {
                        [R.obscured]: v && !N,
                        [R.hiddenSpoiler]: v && O === m.wk.SPOILER,
                        [R.hiddenExplicit]: v && null != O && m.Xh.has(O),
                        [R.hiddenMosaicItem]: v && e,
                        [R.inline]: v && N,
                    }),
                    focusable: !e,
                    mediaLayoutType: c,
                    hasFooter: null != d,
                    useFullWidth: (!!x && !!e) || l,
                    isVisualMediaType: w,
                    onVideoControlsShow: Z,
                    onVideoControlsHide: H,
                    forcePlaceholder: T && v,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        style: f
            ? {
                  minWidth: 0,
                  width: "".concat(p.maxWidth, "px"),
              }
            : void 0,
        className: o()(R.mosaicItem, {
            [R.mosaicItemNoJustify]: P,
            [R.mosaicItemFullWidth]: l,
            [R.mosaicItemMediaMosaic]: C,
            [R.hideOverflow]: C && w,
            [R.mosaicItemWithFooter]: null != d,
        }),
        children: [
            null != O
                ? (0, r.jsx)(_.ZP, {
                      type: _.ZP.Types.ATTACHMENT,
                      inline: N,
                      reason: O,
                      isSingleMosaicItem: u,
                      obscured: v,
                      containerStyles: F(n, P, c),
                      obscurityControlClassName: o()({ [R.obscureVideoSpacing]: "VIDEO" === y && u && !v && M }),
                      onToggleObscurity: () => I((e) => !e),
                      children: (e) => Y(e),
                  })
                : Y(),
            d,
        ],
    });
};
