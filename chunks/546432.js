n.d(t, {
    OB: () => Z,
    ZP: () => Y,
    mz: () => F,
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
    l = n(28664),
    c = n(481060),
    u = n(393238),
    d = n(399654),
    f = n(162609),
    _ = n(370298),
    p = n(95398),
    h = n(167080),
    m = n(247206),
    g = n(936141),
    E = n(262777),
    b = n(947849),
    y = n(124347),
    O = n(976853),
    v = n(592125),
    I = n(626135),
    T = n(630388),
    S = n(956664),
    A = n(499376),
    C = n(217702),
    N = n(981631),
    R = n(388032),
    P = n(337595),
    w = n(374299);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
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
function M(e, t) {
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
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let U = 200,
    G = 50;
function B(e) {
    return "IMAGE" === e || "VIDEO" === e;
}
function Z(e, t) {
    var n;
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, A.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, T.yE)(null != (n = e.flags) ? n : 0, N.J0y.IS_ANIMATED),
    };
}
let F = (e) => {
    let {
            mimeType: t,
            downloadURL: n,
            onRemoveItem: a,
            showDownload: s,
            showImageAppPicker: d,
            isVisualMediaType: f,
            channelId: p,
        } = e,
        m = i.useRef(null),
        [g, E] = i.useState(0);
    (0, u.PM)(m, (e) => {
        let { width: t } = e;
        null != t && E(Math.floor((t - 8) / 32));
    });
    let b = [],
        [y, O] = i.useState(!1),
        v = i.useCallback(() => O((e) => !e), []);
    d &&
        b.push(
            (0, r.jsx)(
                _.Z,
                {
                    toggleShowMenu: v,
                    showMenu: y,
                    channelId: p,
                    className: o()(w.hoverButton, { [w.selected]: y }),
                    imageUrl: n,
                    mimeType: t,
                },
                "app",
            ),
        ),
        null != a &&
            b.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: R.intl.string(R.t["/XT3io"]),
                        children: (0, r.jsx)(c.P3F, {
                            className: o()(w.hoverButton, P.removeMosaicItemHoverButton),
                            focusProps: { offset: 2 },
                            onClick: a,
                            "aria-label": R.intl.string(R.t["0+xZHx"]),
                            children: (0, r.jsx)(c.XHJ, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                            }),
                        }),
                    },
                    "remove",
                ),
            ),
        s &&
            b.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: R.intl.string(R.t["1WjMbG"]),
                        children: (0, r.jsx)(h.Z, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: w.hoverButton,
                            iconClassName: P.downloadHoverButtonIcon,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let I = Math.max(0, b.length - g);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            g > 0 &&
                b.length > 0 &&
                (0, r.jsx)("div", {
                    className: o()(w.hoverButtonGroup, {
                        [w.nonMediaMosaicItem]: !f,
                        [w.forceShowHover]: y,
                    }),
                    children: b.slice(I),
                }),
            (0, r.jsx)("div", {
                ref: m,
                className: w.sizer,
            }),
        ],
    });
};
function V(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: a,
            canRemoveItem: l,
            onRemoveItem: u,
            onClick: _,
            handlePreloadImage: p,
            onContextMenu: h,
            onPlay: m,
            renderImageComponent: g,
            renderVideoComponent: E,
            renderAudioComponent: T,
            renderPlaintextFilePreview: A,
            renderGenericFileComponent: w,
            renderVisualPlaceholderComponent: D,
            className: L,
            imgContainerClassName: x,
            imgClassName: M,
            focusable: j,
            hiddenSpoilers: k,
            mediaLayoutType: U,
            maxWidth: G,
            maxHeight: B,
            hasFooter: Z,
            useFullWidth: V,
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
        ea = v.Z.getChannel(ei),
        eo = (0, O.Z)(ei),
        es = f.P.useExperiment({ location: "MediaMosaicItem" }, { autoTrackExposure: !0 }).imageRecsEnabled,
        el = i.useMemo(() => (null != $ && -1 !== $.indexOf("/") ? $.split("/") : ["unknown", "unknown"]), [$]),
        ec =
            "IMAGE" === J &&
            !y.uo.test(n.downloadUrl) &&
            !((y.YG.test(n.downloadUrl) || y.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated),
        eu = !1;
    if (H) {
        (null == q || null == X) && (eu = !0);
        let e = (0, S.Dc)({
            width: null != q ? q : 0,
            height: null != X ? X : 0,
            maxWidth: null != G ? G : C.mT,
            maxHeight: null != B ? B : C.Jj,
        });
        !V && (e * (null != q ? q : 0) < C.OF || e * (null != X ? X : 0) < C.OF) && (eu = !0);
    }
    let ed = i.useCallback(() => {
            u(n);
        }, [n, u]),
        ef = i.useCallback(
            (e) => {
                if (ec && !eu && !0 !== K)
                    if (e && !en) {
                        if ((er(!0), es)) {
                            var t;
                            (0, d.a)({
                                channelId: null != (t = null == ea ? void 0 : ea.id) ? t : "",
                                location: s.I.CONTEXTUAL_IMAGE,
                                withCommands: !0,
                            });
                        }
                        I.default.track(N.rMx.IMAGE_HOVERED, {
                            guild_id: null == ea ? void 0 : ea.guild_id,
                            channel_id: null == ea ? void 0 : ea.id,
                            image_recommendations_shown: es,
                        });
                    } else !e && en && er(!1);
            },
            [en, ea, es, ec, eu, K],
        ),
        e_ = i.useCallback(() => {
            if (U === C.hV.MOSAIC) {
                let e = (!eo && ["VIDEO", "CLIP", "AUDIO"].includes(J)) || "OTHER" === J;
                return eu
                    ? null
                    : !ee &&
                          (0, r.jsx)(F, {
                              mimeType: el,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              showImageAppPicker: ec && es && !0 !== K,
                              onRemoveItem: l ? ed : void 0,
                              isVisualMediaType: H,
                              channelId: ei,
                          });
            }
            return (
                l &&
                (0, r.jsx)(c.P3F, {
                    className: Q ? P.spoilerRemoveMosaicItemButton : P.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => u(n),
                    "aria-label": R.intl.string(R.t["0+xZHx"]),
                    children: (0, r.jsx)(c.Dio, {
                        size: "xs",
                        color: "currentColor",
                    }),
                })
            );
        }, [U, l, Q, eo, J, eu, ee, el, n, ec, es, K, ed, H, ei, u]);
    if (z)
        return (0, r.jsx)(c.Eep, {
            className: L,
            readyState: N.zo9.READY,
            src: "",
            width: null != q ? q : 350,
            height: null != X ? X : 350,
            maxWidth: G,
            maxHeight: B,
            mediaLayoutType: U,
            useFullWidth: V,
            zoomable: !1,
        });
    switch (J) {
        case "IMAGE":
            return (0, r.jsx)(b.h.Consumer, {
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
                        containerClassName: L,
                        className: x,
                        imageClassName: M,
                        shouldLink: j,
                        hiddenSpoilers: k,
                        responsive: !0,
                        mediaLayoutType: U,
                        maxWidth: G,
                        maxHeight: B,
                        useFullWidth: V,
                        handlePreloadImage: p,
                        onMouseEnter: () => ef(!0),
                        onMouseLeave: () => ef(!1),
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, r.jsx)(E, {
                item: n,
                message: t,
                width: q,
                height: X,
                onClick: _,
                onContextMenu: h,
                renderAdjacentContent: e_,
                naturalWidth: q,
                naturalHeight: X,
                className: o()(L, { [P.hasFooter]: Z }),
                playable: j,
                responsive: !0,
                mediaLayoutType: U,
                maxWidth: G,
                maxHeight: B,
                useFullWidth: V,
                mimeType: el,
                onControlsShow: Y,
                onControlsHide: W,
                downloadable: !eo,
                mediaPlayerClassName: Z ? P.hasFooter : void 0,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == D) return null;
            return (0, r.jsx)(D, {
                item: n,
                message: t,
                className: x,
                imageClassName: M,
                maxWidth: G,
                maxHeight: B,
                mediaLayoutType: U,
                useFullWidth: V,
            });
        case "AUDIO":
            return (0, r.jsx)(T, {
                item: n,
                message: t,
                className: L,
                playable: j,
                mimeType: el,
                renderAdjacentContent: e_,
                onVolumeShow: () => et(!0),
                onVolumeHide: () => et(!1),
                onPlay: m,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, r.jsx)(A, {
                item: n,
                message: t,
                className: L,
                onClick: _,
                onContextMenu: h,
                renderAdjacentContent: e_,
            });
        case "OTHER":
            return (0, r.jsx)(w, {
                item: n,
                message: t,
                className: L,
                onClick: _,
                onContextMenu: h,
                renderAdjacentContent: e_,
            });
        case "INVALID":
            return null;
    }
}
function H(e, t, n) {
    if (!t) return;
    let r = e.width;
    if (void 0 !== e.width && void 0 !== e.height) {
        let { width: t } = (0, S.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300,
        });
        r = t;
    }
    return M(L({}, n !== C.hV.MOSAIC && { maxWidth: null != r ? r : "400px" }), {
        width: "100%",
        height: "100%",
        justifySelf: "auto",
    });
}
let Y = function (e) {
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
        _ = j(e, [
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
    let { width: h, height: b, type: y } = n,
        O = s(n, (0, E.v)(a)),
        [v, I] = i.useState(null != O),
        T = (0, m.JO)(O),
        S = c === C.hV.MOSAIC,
        N = !S && ((null != h && h < U) || (null != b && b < G)),
        R = B(y),
        w = (0, A.R_)(y),
        D = u && null != O && (0, m.yf)(h, b),
        [x, k] = i.useState(!1),
        Z = () => {
            k(!0);
        },
        F = () => {
            k(!1);
        },
        Y = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                V,
                M(L({}, _), {
                    item: n,
                    message: a,
                    getObscureReason: s,
                    hiddenSpoilers: e,
                    className: o()(t, P.mosaicItemContent, {
                        [P.obscured]: v && !N,
                        [P.hiddenSpoiler]: v && O === g.wk.SPOILER,
                        [P.hiddenExplicit]: v && null != O && g.Xh.has(O),
                        [P.hiddenMosaicItem]: v && e,
                        [P.inline]: v && N,
                    }),
                    focusable: !e,
                    mediaLayoutType: c,
                    hasFooter: null != d,
                    useFullWidth: (!!D && !!e) || l,
                    isVisualMediaType: w,
                    onVideoControlsShow: Z,
                    onVideoControlsHide: F,
                    forcePlaceholder: T && v,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        style: f
            ? {
                  minWidth: 0,
                  width: "".concat(_.maxWidth, "px"),
              }
            : void 0,
        className: o()(P.mosaicItem, {
            [P.mosaicItemNoJustify]: R,
            [P.mosaicItemFullWidth]: l,
            [P.mosaicItemMediaMosaic]: S,
            [P.hideOverflow]: S && w,
            [P.mosaicItemWithFooter]: null != d,
        }),
        children: [
            null != O
                ? (0, r.jsx)(p.ZP, {
                      type: p.ZP.Types.ATTACHMENT,
                      inline: N,
                      reason: O,
                      isSingleMosaicItem: u,
                      obscured: v,
                      containerStyles: H(n, R, c),
                      obscurityControlClassName: o()({ [P.obscureVideoSpacing]: "VIDEO" === y && u && !v && x }),
                      onToggleObscurity: () => I((e) => !e),
                      children: (e) => Y(e),
                  })
                : Y(),
            d,
        ],
    });
};
