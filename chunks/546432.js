n.d(t, {
    OB: () => j,
    ZP: () => B,
    mz: () => k,
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
    s = n(28664),
    l = n(481060),
    c = n(393238),
    u = n(95398),
    d = n(167080),
    f = n(247206),
    _ = n(936141),
    p = n(262777),
    h = n(947849),
    m = n(976853),
    g = n(592125),
    E = n(626135),
    b = n(630388),
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
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = 200,
    L = 50;
function M(e) {
    return "IMAGE" === e || "VIDEO" === e;
}
function j(e, t) {
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
        srcIsAnimated: (0, b.yE)(null != (n = e.flags) ? n : 0, I.J0y.IS_ANIMATED),
    };
}
let k = (e) => {
    let { mimeType: t, downloadURL: n, onRemoveItem: a, showDownload: u, isVisualMediaType: f } = e,
        _ = i.useRef(null),
        [p, h] = i.useState(0);
    (0, c.PM)(_, (e) => {
        let { width: t } = e;
        null != t && h(Math.floor((t - 8) / 32));
    });
    let m = [];
    null != a &&
        m.push(
            (0, r.jsx)(
                s.u,
                {
                    text: T.intl.string(T.t["/XT3ij"]),
                    children: (0, r.jsx)(l.P3F, {
                        className: o()(A.hoverButton, S.removeMosaicItemHoverButton),
                        focusProps: { offset: 2 },
                        onClick: a,
                        "aria-label": T.intl.string(T.t["0+xZH0"]),
                        children: (0, r.jsx)(l.XHJ, {
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
        u &&
            m.push(
                (0, r.jsx)(
                    s.u,
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
            onRemoveItem: c,
            onClick: u,
            handlePreloadImage: d,
            onContextMenu: f,
            onPlay: _,
            renderImageComponent: p,
            renderVideoComponent: b,
            renderAudioComponent: O,
            renderPlaintextFilePreview: A,
            renderGenericFileComponent: C,
            renderVisualPlaceholderComponent: N,
            className: R,
            imgContainerClassName: P,
            imgClassName: w,
            focusable: D,
            hiddenSpoilers: x,
            mediaLayoutType: L,
            maxWidth: M,
            maxHeight: j,
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
        J = g.Z.getChannel(Q),
        $ = (0, m.Z)(Q),
        ee = i.useMemo(() => (null != z && -1 !== z.indexOf("/") ? z.split("/") : ["unknown", "unknown"]), [z]),
        et = !1;
    if (B) {
        (null == H || null == Y) && (et = !0);
        let e = (0, y.Dc)({
            width: null != H ? H : 0,
            height: null != Y ? Y : 0,
            maxWidth: null != M ? M : v.mT,
            maxHeight: null != j ? j : v.Jj,
        });
        !G && (e * (null != H ? H : 0) < v.OF || e * (null != Y ? Y : 0) < v.OF) && (et = !0);
    }
    let en = i.useCallback(() => {
            c(n);
        }, [n, c]),
        er = i.useCallback(() => {
            E.default.track(I.rMx.IMAGE_HOVERED, {
                guild_id: null == J ? void 0 : J.guild_id,
                channel_id: null == J ? void 0 : J.id,
                image_recommendations_shown: !1,
            });
        }, [J]),
        ei = i.useCallback(() => {
            if (L === v.hV.MOSAIC) {
                let e = (!$ && ["VIDEO", "CLIP", "AUDIO"].includes(K)) || "OTHER" === K;
                return et
                    ? null
                    : !q &&
                          (0, r.jsx)(k, {
                              mimeType: ee,
                              downloadURL: n.downloadUrl,
                              showDownload: e,
                              onRemoveItem: s ? en : void 0,
                              isVisualMediaType: B,
                          });
            }
            return (
                s &&
                (0, r.jsx)(l.P3F, {
                    className: W ? S.spoilerRemoveMosaicItemButton : S.removeMosaicItemButton,
                    focusProps: { offset: { bottom: 4 } },
                    onClick: () => c(n),
                    "aria-label": T.intl.string(T.t["0+xZH0"]),
                    children: (0, r.jsx)(l.Dio, {
                        size: "xs",
                        color: "currentColor",
                    }),
                })
            );
        }, [L, s, W, $, K, et, q, ee, n, en, B, c]);
    if (V)
        return (0, r.jsx)(l.Eep, {
            className: R,
            readyState: I.zo9.READY,
            src: "",
            width: null != H ? H : 350,
            height: null != Y ? Y : 350,
            maxWidth: M,
            maxHeight: j,
            mediaLayoutType: L,
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
                        autoPlay: a && !x,
                        onClick: u,
                        onContextMenu: f,
                        shouldHideMediaOptions: $,
                        renderAccessory: e,
                        renderAdjacentContent: ei,
                        containerClassName: R,
                        className: P,
                        imageClassName: w,
                        shouldLink: D,
                        hiddenSpoilers: x,
                        responsive: !0,
                        mediaLayoutType: L,
                        maxWidth: M,
                        maxHeight: j,
                        useFullWidth: G,
                        handlePreloadImage: d,
                        onMouseEnter: er,
                    }),
            });
        case "VIDEO":
        case "CLIP":
            return (0, r.jsx)(b, {
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
                playable: D,
                responsive: !0,
                mediaLayoutType: L,
                maxWidth: M,
                maxHeight: j,
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
                imageClassName: w,
                maxWidth: M,
                maxHeight: j,
                mediaLayoutType: L,
                useFullWidth: G,
            });
        case "AUDIO":
            return (0, r.jsx)(O, {
                item: n,
                message: t,
                className: R,
                playable: D,
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
            isSingleMosaicItem: d,
            footer: h,
            displayGridItem: m,
        } = e,
        g = w(e, [
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
        D = !R && ((null != E && E < x) || (null != b && b < L)),
        j = M(y),
        k = (0, O.R_)(y),
        B = d && null != I && (0, f.yf)(E, b),
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
                P(N({}, g), {
                    item: n,
                    message: a,
                    getObscureReason: s,
                    hiddenSpoilers: e,
                    className: o()(t, S.mosaicItemContent, {
                        [S.obscured]: T && !D,
                        [S.hiddenSpoiler]: T && I === _.wk.SPOILER,
                        [S.hiddenExplicit]: T && null != I && _.Xh.has(I),
                        [S.hiddenMosaicItem]: T && e,
                        [S.inline]: T && D,
                    }),
                    focusable: !e,
                    mediaLayoutType: c,
                    hasFooter: null != h,
                    useFullWidth: (!!B && !!e) || l,
                    isVisualMediaType: k,
                    onVideoControlsShow: V,
                    onVideoControlsHide: H,
                    forcePlaceholder: C && T,
                }),
            );
        };
    return (0, r.jsxs)("div", {
        style: m
            ? {
                  minWidth: 0,
                  width: "".concat(g.maxWidth, "px"),
              }
            : void 0,
        className: o()(S.mosaicItem, {
            [S.mosaicItemNoJustify]: j,
            [S.mosaicItemFullWidth]: l,
            [S.mosaicItemMediaMosaic]: R,
            [S.hideOverflow]: R && k,
            [S.mosaicItemWithFooter]: null != h,
        }),
        children: [
            null != I
                ? (0, r.jsx)(u.ZP, {
                      type: u.ZP.Types.ATTACHMENT,
                      inline: D,
                      reason: I,
                      isSingleMosaicItem: d,
                      obscured: T,
                      containerStyles: G(n, j, c),
                      obscurityControlClassName: o()({ [S.obscureVideoSpacing]: "VIDEO" === y && d && !T && Z }),
                      onToggleObscurity: () => A((e) => !e),
                      children: (e) => Y(e),
                  })
                : Y(),
            h,
        ],
    });
};
