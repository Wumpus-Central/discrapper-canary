n.d(t, {
    OB: () => k,
    ZP: () => B,
    mz: () => j,
}),
    n(997841),
    n(388685),
    n(539854),
    n(35282),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(95015),
    l = n(28664),
    c = n(481060),
    u = n(393238),
    d = n(167080),
    f = n(247206),
    _ = n(936141),
    p = n(262777),
    h = n(947849),
    m = n(976853),
    g = n(411405),
    E = n(592125),
    b = n(626135),
    y = n(956664),
    O = n(499376),
    v = n(217702),
    I = n(981631),
    T = n(388032),
    S = n(337595),
    A = n(374299);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 200,
    x = 50;
function M(e) {
    return "IMAGE" === e || "VIDEO" === e;
}
function k(e, t) {
    var n;
    return {
        uniqueId: e.id,
        originalItem: e,
        type: (0, O.aw)(e, t),
        downloadUrl: e.url,
        height: e.height,
        width: e.width,
        spoiler: e.spoiler,
        contentType: e.content_type,
        srcIsAnimated: (0, s.yE)(null != (n = e.flags) ? n : 0, I.J0y.IS_ANIMATED),
    };
}
let j = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: a, showDownload: s, isVisualMediaType: f } = e,
        _ = i.useRef(null),
        [p, h] = i.useState(0);
    (0, u.PM)(_, (e) => {
        let { width: t } = e;
        null != t && h(Math.floor((t - 8) / 32));
    });
    let m = [];
    null != a &&
        m.push(
            (0, r.jsx)(
                l.u,
                {
                    text: T.intl.string(T.t["/XT3ij"]),
                    children: (0, r.jsx)(c.P3F, {
                        className: o()(A.hoverButton, S.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: a,
                        "aria-label": T.intl.string(T.t["0+xZH0"]),
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
            m.push(
                (0, r.jsx)(
                    l.u,
                    {
                        text: T.intl.string(T.t["1WjMbC"]),
                        children: (0, r.jsx)(d.Z, {
                            target: "_blank",
                            rel: "noreferrer noopener",
                            className: A.hoverButton,
                            iconClassName: S.downloadHoverButtonIcon,
                            focusProps: { offset: 2 },
                            href: n,
                            mimeType: t,
                        }),
                    },
                    "download",
                ),
            );
    let g = Math.max(0, m.length - p);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            p > 0 &&
                m.length > 0 &&
                (0, r.jsx)("div", {
                    className: o()(A.hoverButtonGroup, { [A.nonMediaMosaicItem]: !f }),
                    children: m.slice(g),
                }),
            (0, r.jsx)("div", {
                ref: _,
                className: A.sizer,
            }),
        ],
    });
};
function U(e) {
    let {
            message: t,
            item: n,
            autoPlayGif: a,
            canRemoveItem: s,
            onRemoveItem: l,
            onClick: u,
            handlePreloadImage: d,
            onContextMenu: f,
            onPlay: _,
            renderImageComponent: p,
            renderVideoComponent: g,
            renderAudioComponent: O,
            renderPlaintextFilePreview: A,
            renderGenericFileComponent: C,
            renderVisualPlaceholderComponent: N,
            className: R,
            imgContainerClassName: P,
            imgClassName: D,
            focusable: w,
            hiddenSpoilers: L,
            mediaLayoutType: x,
            maxWidth: M,
            maxHeight: k,
            hasFooter: U,
            useFullWidth: G,
            isVisualMediaType: B,
            onVideoControlsShow: Z,
            onVideoControlsHide: F,
            forcePlaceholder: V,
        } = e,
        { width: H, height: Y, spoiler: W, type: K, contentType: z } = n,
        [q, X] = i.useState(!1),
        Q = t.getChannelId(),
        J = E.Z.getChannel(Q),
        $ = (0, m.Z)(Q),
        ee = i.useMemo(() => (null != z && -1 !== z.indexOf("/") ? z.split("/") : ["unknown", "unknown"]), [z]),
        et = !1;
    if (B) {
        (null == H || null == Y) && (et = !0);
        let e = (0, y.Dc)({
            width: null != H ? H : 0,
            height: null != Y ? Y : 0,
            maxWidth: null != M ? M : v.mT,
            maxHeight: null != k ? k : v.Jj,
        });
        !G && (e * (null != H ? H : 0) < v.OF || e * (null != Y ? Y : 0) < v.OF) && (et = !0);
    }
    let en = i.useCallback(() => {
            l(n);
        }, [n, l]),
        er = i.useCallback(() => {
            b.default.track(I.rMx.IMAGE_HOVERED, {
                guild_id: null == J ? void 0 : J.guild_id,
                channel_id: null == J ? void 0 : J.id,
                image_recommendations_shown: !1,
            });
        }, [J]),
        ei = i.useCallback(() => {
            if (x === v.hV.MOSAIC) {
                let e = (!$ && ["VIDEO", "CLIP", "AUDIO"].includes(K)) || "OTHER" === K;
                return et
                    ? null
                    : !q &&
                          (0, r.jsx)(j, {
                              mimeType: ee,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: s ? en : void 0,
                              isVisualMediaType: B,
                          });
            }
            return (
                s &&
                (0, r.jsx)(c.P3F, {
                    className: W ? S.spoilerRemoveMosaicItemButton : S.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => l(n),
                    "aria-label": T.intl.string(T.t["0+xZH0"]),
                    children: (0, r.jsx)(c.Dio, {
                        size: "xs",
                        color: "currentColor",
                    }),
                })
            );
        }, [x, s, W, $, K, et, q, ee, n, en, B, l]);
    if (V)
        return (0, r.jsx)(c.Eep, {
            className: R,
            readyState: I.zo9.READY,
            src: "",
            width: null != H ? H : 350,
            height: null != Y ? Y : 350,
            maxWidth: M,
            maxHeight: k,
            mediaLayoutType: x,
            useFullWidth: G,
            zoomable: !1,
        });
    switch (K) {
        case "IMAGE":
            return (0, r.jsx)(h.h.Consumer, {
                children: (e) =>
                    (0, r.jsx)(p, {
                        item: n,
                        message: t,
                        width: H,
                        height: Y,
                        autoPlay: a && !L,
                        onClick: u,
                        onContextMenu: f,
                        shouldHideMediaOptions: $,
                        renderAccessory: e,
                        renderAdjacentContent: ei,
                        containerClassName: R,
                        className: P,
                        imageClassName: D,
                        shouldLink: w,
                        hiddenSpoilers: L,
                        responsive: !0,
                        mediaLayoutType: x,
                        maxWidth: M,
                        maxHeight: k,
                        useFullWidth: G,
                        handlePreloadImage: d,
                        onMouseEnter: er,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, r.jsx)(g, {
                item: n,
                message: t,
                width: H,
                height: Y,
                onClick: u,
                onContextMenu: f,
                renderAdjacentContent: ei,
                naturalWidth: H,
                naturalHeight: Y,
                className: o()(R, { [S.hasFooter]: U }),
                playable: w,
                responsive: !0,
                mediaLayoutType: x,
                maxWidth: M,
                maxHeight: k,
                useFullWidth: G,
                mimeType: ee,
                onControlsShow: Z,
                onControlsHide: F,
                downloadable: !$,
                mediaPlayerClassName: U ? S.hasFooter : void 0,
            });
        case "VISUAL_PLACEHOLDER":
            if (null == N) return null;
            return (0, r.jsx)(N, {
                item: n,
                message: t,
                className: P,
                imageClassName: D,
                maxWidth: M,
                maxHeight: k,
                mediaLayoutType: x,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, r.jsx)(O, {
                item: n,
                message: t,
                className: R,
                playable: w,
                mimeType: ee,
                renderAdjacentContent: ei,
                onVolumeShow: () => X(!0),
                onVolumeHide: () => X(!1),
                onPlay: _,
            });
        case "PLAINTEXT_PREVIEW":
            return (0, r.jsx)(A, {
                item: n,
                message: t,
                className: R,
                onClick: u,
                onContextMenu: f,
                renderAdjacentContent: ei,
            });
        case "OTHER":
            return (0, r.jsx)(C, {
                item: n,
                message: t,
                className: R,
                onClick: u,
                onContextMenu: f,
                renderAdjacentContent: ei,
            });
        case "INVALID":
            return null;
    }
}
function G(e, t, n) {
    if (!t) return;
    let r = e.width;
    if (void 0 !== e.width && void 0 !== e.height) {
        let { width: t } = (0, y.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300,
        });
        r = t;
    }
    return P(N({}, n !== v.hV.MOSAIC && { maxWidth: null != r ? r : "400px" }), {
        width: "100%",
        height: "100%",
        justifySelf: "auto",
    });
}
let B = function (e) {
    var {
            className: t,
            item: n,
            message: a,
            getObscureReason: s,
            useFullWidth: l,
            mediaLayoutType: c,
            isSingleMosaicItem: u,
            footer: d,
            displayGridItem: h,
        } = e,
        m = D(e, [
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
        I = s(n, (0, p.v)(a)),
        [T, A] = i.useState(null != I),
        C = (0, f.JO)(I),
        R = c === v.hV.MOSAIC,
        w = !R && ((null != E && E < L) || (null != b && b < x)),
        k = M(y),
        j = (0, O.R_)(y),
        B = u && null != I && (0, f.yf)(E, b),
        [Z, F] = i.useState(!1),
        V = () => {
            F(!0);
        },
        H = () => {
            F(!1);
        },
        Y = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return (0, r.jsx)(
                U,
                P(N({}, m), {
                    item: n,
                    message: a,
                    getObscureReason: s,
                    hiddenSpoilers: e,
                    className: o()(t, S.mosaicItemContent, {
                        [S.obscured]: T && !w,
                        [S.hiddenSpoiler]: T && I === _.wk.SPOILER,
                        [S.hiddenExplicit]: T && null != I && _.Xh.has(I),
                        [S.hiddenMosaicItem]: T && e,
                        [S.inline]: T && w,
                    }),
                    focusable: !e,
                    mediaLayoutType: c,
                    hasFooter: null != d,
                    useFullWidth: (!!B && !!e) || l,
                    isVisualMediaType: j,
                    onVideoControlsShow: V,
                    onVideoControlsHide: H,
                    forcePlaceholder: C && T,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        style: h
            ? {
                  minWidth: 0,
                  width: "".concat(m.maxWidth, "px"),
              }
            : void 0,
        className: o()(S.mosaicItem, {
            [S.mosaicItemNoJustify]: k,
            [S.mosaicItemFullWidth]: l,
            [S.mosaicItemMediaMosaic]: R,
            [S.hideOverflow]: R && j,
            [S.mosaicItemWithFooter]: null != d,
        }),
        children: [
            null != I
                ? (0, r.jsx)(g.ZP, {
                      type: g.ZP.Types.ATTACHMENT,
                      inline: w,
                      reason: I,
                      isSingleMosaicItem: u,
                      obscured: T,
                      containerStyles: G(n, k, c),
                      obscurityControlClassName: o()({ [S.obscureVideoSpacing]: "VIDEO" === y && u && !T && Z }),
                      onToggleObscurity: () => A((e) => !e),
                      children: (e) => Y(e),
                  })
                : Y(),
            d,
        ],
    });
};
