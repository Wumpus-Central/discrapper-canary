n.d(t, {
    BC: () => et,
    ZP: () => er,
}),
    n(388685),
    n(539854),
    n(953529),
    n(35282);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(607070),
    u = n(635477),
    d = n(715697),
    f = n(936141),
    p = n(947849),
    _ = n(768494),
    m = n(624195),
    h = n(44824),
    g = n(124347),
    E = n(283756),
    b = n(120324),
    y = n(566898),
    O = n(963206),
    v = n(411405),
    S = n(785992),
    I = n(400266),
    T = n(592125),
    C = n(52824),
    A = n(626135),
    N = n(585483),
    P = n(55935),
    R = n(408433),
    w = n(956664),
    D = n(624138),
    x = n(591759),
    L = n(468846),
    j = n(401419),
    M = n(249458),
    k = n(981631),
    U = n(217702),
    G = n(388032),
    Z = n(838983),
    F = n(960324);
function B(e, t, n) {
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
function V(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = 32,
    K = 12,
    z = 150,
    q = 144,
    Q = 520,
    X = 5,
    J = 150;
function $(e, t) {
    let n = K / t,
        r = e * n;
    return "".concat(r + 1, " / ").concat(r + n + 1);
}
function ee(e) {
    let t = x.Z.toURLSafe(e);
    return null == t ? e : (t.searchParams.set("format", "png"), t.toString());
}
function et(e) {
    var t, n;
    let {
            className: r,
            iframeWrapperClassName: o,
            maxWidth: l,
            maxHeight: c,
            thumbnail: u,
            video: d,
            provider: f,
            allowFullScreen: p = !0,
            responsive: _ = !1,
            renderImageComponent: m,
            renderVideoComponent: h,
            renderLinkComponent: g,
            playable: b = !0,
            autoPlay: y = !1,
            autoMute: O,
            volume: v,
            onPlay: S,
            onPause: I,
            onEnded: T,
            onControlsHide: A,
            onControlsShow: P,
            onVolumeChange: R,
            onMute: D,
            href: x,
            placeholder: j,
            placeholderVersion: M,
            sourceMetadata: U,
        } = e,
        [G, F] = a.useState(y),
        B = null != d && null == d.proxyURL,
        V = a.useCallback(() => F(!1), [F]),
        H = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                null == S || S(!1),
                F(!0),
                B &&
                    (N.S.dispatch(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                    N.S.subscribeOnce(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V));
        };
    a.useEffect(
        () => () => {
            B && N.S.unsubscribe(k.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V);
        },
        [B, V],
    );
    let { width: Y, height: W } = u;
    null != d && ((Y = d.width), (W = d.height));
    let K = (0, w.Tj)({
        width: Y,
        height: W,
        maxWidth: l,
        maxHeight: c,
    });
    (Y = Math.max(K.width, z)), (W = Math.max(K.height, q));
    let Q = (0, C.q)(u);
    if (null != d && null != d.proxyURL)
        return (0, i.jsx)("div", {
            className: s()(Z.embedVideo, r),
            children: h({
                poster: Q,
                src: d.proxyURL,
                placeholder: j,
                placeholderVersion: M,
                width: Y,
                height: W,
                responsive: _,
                autoPlay: y,
                onEnded: T,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: R,
                playable: b,
                autoMute: O,
                volume: v,
                onPlay: S,
                onPause: I,
                onMute: D,
                onControlsHide: A,
                onControlsShow: P,
                sourceMetadata: U,
            }),
        });
    if (G && null != d) {
        let e,
            t = !0 === O || ("function" == typeof O && O()),
            n = {
                width: Y,
                height: W,
            },
            a = {
                width: Y,
                height: W,
            };
        if (_) {
            let t = 0 !== Y ? W / Y : 1;
            (n = {
                maxWidth: l,
                maxHeight: c,
                width: void 0,
                height: void 0,
            }),
                (a = {
                    paddingBottom: "".concat(100 * t, "%"),
                    maxWidth: Y,
                }),
                (e = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maxWidth: Y,
                    maxHeight: W,
                });
        }
        return (0, i.jsx)("div", {
            className: r,
            style: n,
            children: (0, i.jsx)("div", {
                className: s()(Z.embedVideo, o),
                style: a,
                children: (0, i.jsx)(L.ZP, {
                    provider: f,
                    src: d.url,
                    style: e,
                    width: Y,
                    height: W,
                    allowFullScreen: p,
                    autoMute: t,
                }),
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: s()(Z.embedVideo, r),
        style: _
            ? { maxWidth: Y }
            : {
                  width: Y,
                  height: W,
              },
        children: [
            m({
                src: Q,
                width: Y,
                height: W,
                maxWidth: Y,
                maxHeight: W,
                responsive: _,
                containerClassName: Z.embedVideoImageComponent,
                imageClassName: Z.embedVideoImageComponentInner,
                placeholder: j,
                placeholderVersion: M,
                onClick: b && null != d ? H : null,
                sourceMetadata: U,
                analyticsSource: "EmbedVideo",
            }),
            (0, i.jsx)("div", {
                className: Z.embedVideoActions,
                children: (0, i.jsx)("div", {
                    className: Z.centerContent,
                    children: b
                        ? (0, i.jsx)(E.Z, {
                              onPlay: null != d ? H : null,
                              externalURL: x,
                              renderLinkComponent: g,
                              messageId: null == U || null == (t = U.message) ? void 0 : t.id,
                              channelId: null == U || null == (n = U.message) ? void 0 : n.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function en(e) {
    let {
        className: t,
        href: n,
        autoPlay: r,
        maxWidth: a,
        maxHeight: o,
        thumbnail: l,
        video: c,
        renderImageComponent: u,
        responsive: d,
        alt: f,
        disableAltTextDisplay: p = !1,
        playable: _ = !0,
        hiddenSpoilers: m,
        placeholder: g,
        placeholderVersion: E,
        sourceMetadata: b,
    } = e;
    return (0, i.jsx)(h.Z, {
        className: s()(Z.embedVideo, t),
        original: n,
        poster: (0, C.q)(l),
        src: (0, C.q)(c),
        alt: f,
        width: l.width,
        height: l.height,
        naturalHeight: c.height,
        naturalWidth: c.width,
        maxWidth: a,
        maxHeight: o,
        responsive: d,
        autoPlay: r,
        playable: _,
        renderImageComponent: u,
        hiddenSpoilers: m,
        disableAltTextDisplay: p,
        placeholder: g,
        placeholderVersion: E,
        sourceMetadata: b,
    });
}
class er extends (r = a.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: n,
                message: r,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(Z.embedProvider, Z.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 80,
                        height: 18,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: s()(Z.embedProvider, Z.embedMargin),
                    children:
                        null != t.url
                            ? n({
                                  className: Z.embedLink,
                                  href: t.url,
                                  tabIndex: e ? 0 : -1,
                                  children: t.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == r ? void 0 : r.id,
                                  channelId: null == r ? void 0 : r.channel_id,
                              })
                            : (0, i.jsx)("span", { children: t.name }),
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: n,
                message: r,
                autoPlayGif: a,
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(Z.embedAuthor, Z.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 150,
                        height: 18,
                    }),
                })
              : (0, i.jsx)(M.G.Consumer, {
                    children: (o) => {
                        let { disableAnimations: l } = o;
                        return (0, i.jsxs)("div", {
                            className: s()(Z.embedAuthor, Z.embedMargin),
                            children: [
                                null != t.iconProxyURL
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          className: Z.embedAuthorIcon,
                                          src: a && !l ? t.iconProxyURL : ee(t.iconProxyURL),
                                      })
                                    : null,
                                null != t.url
                                    ? n({
                                          className: Z.embedAuthorNameLink,
                                          href: t.url,
                                          tabIndex: e ? 0 : -1,
                                          children: t.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: null == r ? void 0 : r.id,
                                          channelId: null == r ? void 0 : r.channel_id,
                                      })
                                    : (0, i.jsx)("span", {
                                          className: Z.embedAuthorName,
                                          children: t.name,
                                      }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: t, height: n } = e;
        return (0, i.jsx)(y.ZT, {
            className: Z.contentPlaceholder,
            width: t,
            height: n,
            opacity: 0.3,
        });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: n, renderTitle: r, message: a } = this.props,
            { rawTitle: o, url: l } = t;
        return null == o
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(Z.embedTitle, Z.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 400,
                        height: 30,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: s()(Z.embedTitle, Z.embedMargin),
                    children:
                        null != l
                            ? n({
                                  className: Z.embedTitleLink,
                                  href: l,
                                  tabIndex: e ? 0 : -1,
                                  children: r(t, o),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == a ? void 0 : a.id,
                                  channelId: null == a ? void 0 : a.channel_id,
                              })
                            : r(t, o),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(Z.embedDescription, Z.embedMargin),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({
                            width: 400,
                            height: 50,
                        })
                      : t(e, n, !1),
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: n,
                maxThumbnailHeight: r,
                renderImageComponent: a,
                autoPlayGif: o,
            } = this.props,
            { sourceMetadata: s } = this.state;
        return null == t
            ? null
            : (0, i.jsx)(M.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: l } = i;
                      return a({
                          containerClassName: Z.embedThumbnail,
                          src: (0, C.q)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: n,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: o && !l,
                          srcIsAnimated: t.srcIsAnimated,
                          placeholder: t.placeholder,
                          placeholderVersion: t.placeholderVersion,
                          sourceMetadata: s,
                          analyticsSource: "Embed",
                      });
                  },
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: t } = e;
        if (null == t || 0 === t.length) return null;
        let n = [],
            r = null;
        return (
            t.forEach((t) => {
                let { rawName: i, rawValue: a, inline: o } = t;
                o || null == r || (n.push(r), (r = null)),
                    null == r && (r = []),
                    r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, a, !0)]),
                    (3 !== r.length && o) || (n.push(r), (r = null));
            }),
            null != r && n.push(r),
            (0, i.jsx)("div", {
                className: Z.embedFields,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let [a, o] = e;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: Z.embedField,
                                style: { gridColumn: $(r, n) },
                                children: [
                                    (0, i.jsx)("div", {
                                        className: Z.embedFieldName,
                                        children: a,
                                    }),
                                    (0, i.jsx)("div", {
                                        className: Z.embedFieldValue,
                                        children: o,
                                    }),
                                ],
                            },
                            "".concat(t, "-").concat(r),
                        );
                    });
                }),
            })
        );
    }
    renderImages() {
        var e, t, n, r;
        let { hiddenSpoiler: a = !1, isVisible: o = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: s } = this.props,
            { maxMediaHeight: l } = this.state;
        if (null == s.images) return null;
        let [c, u, d, f] = s.images.map((e) =>
            this.renderImage({
                hiddenSpoiler: a,
                isVisible: o,
                image: e,
                isGalleryImage: !0,
                allImages: s.images,
            }),
        );
        return null == c && null == u && null == d && null == f
            ? null
            : (0, i.jsxs)("div", {
                  className: Z.embedGalleryImagesWrapper,
                  style: { height: l },
                  children: [
                      (0, i.jsxs)("div", {
                          className: Z.embedGallerySide,
                          children: [
                              (0, i.jsx)(
                                  p.h.Provider,
                                  {
                                      value: (0, O.P)(s.images[0].url, s.images[0]),
                                      children: c,
                                  },
                                  0,
                              ),
                              null != f &&
                                  (0, i.jsx)(
                                      p.h.Provider,
                                      {
                                          value: (0, O.P)(null == (e = s.images[2]) ? void 0 : e.url, s.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: Z.embedGallerySide,
                          children: [
                              (0, i.jsx)(
                                  p.h.Provider,
                                  {
                                      value: (0, O.P)(null == (t = s.images[1]) ? void 0 : t.url, s.images[1]),
                                      children: u,
                                  },
                                  1,
                              ),
                              null == f &&
                                  null != d &&
                                  (0, i.jsx)(
                                      p.h.Provider,
                                      {
                                          value: (0, O.P)(null == (n = s.images[2]) ? void 0 : n.url, s.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                              null != f &&
                                  (0, i.jsx)(
                                      p.h.Provider,
                                      {
                                          value: (0, O.P)(null == (r = s.images[3]) ? void 0 : r.url, s.images[3]),
                                          children: f,
                                      },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    handleImageHover() {
        var e;
        let t = T.Z.getChannel(null == (e = this.props.message) ? void 0 : e.channel_id);
        A.default.track(k.rMx.IMAGE_HOVERED, {
            guild_id: null == t ? void 0 : t.guild_id,
            channel_id: null == t ? void 0 : t.id,
            image_recommendations_shown: !1,
        });
    }
    renderImage() {
        var e, t;
        let {
                hiddenSpoiler: n = !1,
                isVisible: r = !0,
                image: a,
                isGalleryImage: o = !1,
                alt: l = G.intl.string(G.t.X4IxWL),
                allImages: c = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: u, className: d, autoPlayGif: f } = this.props,
            { maxMediaWidth: m, maxMediaHeight: h, sourceMetadata: E } = this.state;
        if (null == a) return null;
        let y = (0, C.q)(a),
            { srcToOnClickOverride: O, srcToHandlePreloadImage: v } =
                null == c
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {},
                      }
                    : (0, b.G)(
                          c.map((e) =>
                              Y(V({}, (0, _.Hv)(e, E, "IMAGE")), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated,
                              }),
                          ),
                          {},
                          "Embed",
                      ),
            S = g.ZP.isAnimated({
                src: (0, C.q)(a),
                original: a.url,
                animated: !1,
                srcIsAnimated: a.srcIsAnimated,
            }),
            I = {
                containerClassName: s()(d, {
                    [Z.embedMedia]: !o,
                    [Z.embedImage]: !o,
                    [Z.galleryImage]: o,
                }),
                imageContainerClassName: o ? Z.galleryImageContainer : void 0,
                imageClassName: o ? Z.embedGalleryImageElement : void 0,
                src: (0, C.q)(a),
                alt: null == a.description || "" === a.description ? l : a.description,
                responsive: !0,
                limitResponsiveWidth: !o,
                width: a.width,
                height: a.height,
                maxWidth: m,
                maxHeight: h,
                original: a.url,
                shouldLink: r,
                disableAltTextDisplay: null == a.description || "" === a.description,
                hiddenSpoilers: n,
                placeholder: a.placeholder,
                placeholderVersion: a.placeholderVersion,
                srcIsAnimated: a.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            T = null != (t = null == (e = a.url.split(".").pop()) ? void 0 : e.split("?")[0]) ? t : "";
        return (
            "jpg" === T && (T = "jpeg"),
            (0, i.jsx)(p.h.Consumer, {
                children: (e) =>
                    (0, i.jsx)(
                        M.G.Consumer,
                        {
                            children: (t) => {
                                let { disableAnimations: r } = t;
                                return u(
                                    Y(V({}, I), {
                                        autoPlay: f && !r && !n,
                                        renderAccessory: S ? e : null,
                                        handlePreloadImage: v[y],
                                        onClick: O[y],
                                        onMouseEnter: () => this.handleImageHover(),
                                        sourceMetadata: E,
                                        analyticsSource: "Embed",
                                    }),
                                );
                            },
                        },
                        a.url,
                    ),
            })
        );
    }
    renderVideo() {
        let {
                gifv: e = !1,
                isVisible: t = !0,
                hiddenSpoiler: n = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: a, video: o, provider: s },
                renderVideoComponent: l,
                renderImageComponent: c,
                renderLinkComponent: u,
                allowFullScreen: d,
                autoPlayGif: f,
                obscureReason: p,
            } = this.props,
            { maxMediaWidth: _, maxMediaHeight: m, sourceMetadata: h } = this.state;
        if (null == r || null == a) return null;
        if (e)
            return null == o
                ? null
                : (0, i.jsx)(M.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: s } = e;
                          return (0, i.jsx)(en, {
                              className: Z.embedMedia,
                              href: r,
                              thumbnail: a,
                              video: o,
                              maxWidth: _,
                              maxHeight: m,
                              responsive: !0,
                              autoPlay: !n && f && !s && t,
                              renderImageComponent: c,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != p,
                              placeholder: o.placeholder,
                              placeholderVersion: o.placeholderVersion,
                              sourceMetadata: h,
                          });
                      },
                  });
        let g = () => {
                this.setState({ videoControlsShown: !0 });
            },
            E = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, i.jsx)(et, {
            className: Z.embedMedia,
            href: r,
            allowFullScreen: d,
            thumbnail: a,
            video: o,
            provider: null == s ? void 0 : s.name,
            maxWidth: _,
            maxHeight: m,
            responsive: !0,
            renderImageComponent: c,
            renderVideoComponent: l,
            renderLinkComponent: u,
            onControlsShow: g,
            onControlsHide: E,
            playable: t && !n,
            placeholder: null == o ? void 0 : o.placeholder,
            placeholderVersion: null == o ? void 0 : o.placeholderVersion,
            sourceMetadata: h,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: t, timestamp: n } = this.props.embed;
        return null != t
            ? (0, i.jsx)(M.G.Consumer, {
                  children: (r) => {
                      let { disableAnimations: a } = r;
                      return (0, i.jsxs)("div", {
                          className: s()(Z.embedFooter, Z.embedMargin),
                          children: [
                              null != t.iconProxyURL && "" !== t.iconProxyURL
                                  ? (0, i.jsx)("img", {
                                        alt: "",
                                        className: Z.embedFooterIcon,
                                        src: e && !a ? t.iconProxyURL : ee(t.iconProxyURL),
                                    })
                                  : null,
                              (0, i.jsxs)("span", {
                                  className: Z.embedFooterText,
                                  children: [
                                      t.text,
                                      null != t.text && null != n
                                          ? (0, i.jsx)("span", {
                                                className: Z.embedFooterSeparator,
                                                children: "\u2022",
                                            })
                                          : null,
                                      null != n ? (0, P.Y4)(n) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != n
              ? (0, i.jsx)("div", {
                    className: s()(Z.embedFooter, Z.embedMargin),
                    children: (0, i.jsx)("span", {
                        className: Z.embedFooterText,
                        children: (0, P.Y4)(n),
                    }),
                })
              : void 0;
    }
    renderStaticPlaceholderMedia() {
        var e;
        let { className: t, embed: n } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state,
            o = null != (e = n.image) ? e : n.video;
        if (null == o) return null;
        let { width: s, height: c } = (0, w.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: r,
            maxHeight: a,
        });
        return (0, i.jsx)(l.Eep, {
            className: t,
            readyState: k.zo9.READY,
            src: "",
            width: s,
            height: c,
            maxWidth: r,
            maxHeight: a,
            mediaLayoutType: U.hV.STATIC,
            useFullWidth: !1,
            zoomable: !1,
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: n } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (t.type) {
            case k.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: n,
                });
            case k.hBH.VIDEO:
            default:
                if (null != t.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: n,
                    });
                if (null != t.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: n,
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: n,
                    image: t.image,
                    alt: t.rawTitle,
                });
        }
    }
    renderAll() {
        let e,
            t,
            { embed: n, hideMedia: r } = this.props,
            { isVisible: i } = this.state,
            a = this.renderProvider(i),
            o = this.renderAuthor(i),
            s = this.renderTitle(i);
        switch (n.type) {
            case k.hBH.IMAGE:
            case k.hBH.VIDEO:
            case k.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let l = this.renderFields();
        r || (t = this.renderMedia(!i));
        let c = this.renderFooter(),
            u = null == t;
        return (
            n.type === k.hBH.RICH && (u = null == n.video),
            {
                provider: a,
                author: o,
                title: s,
                description: e,
                thumbnail: !r && u ? this.renderThumbnail(i) : null,
                fields: l,
                media: t,
                footer: c,
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: t, images: n, video: r, type: i, thumbnail: a },
            } = this.props,
            { maxMediaWidth: o, maxMediaHeight: s } = this.state,
            l = null != t ? t : r;
        if (null == l) return;
        let { width: c } = (0, w.Tj)({
            width: l.width,
            height: l.height,
            maxWidth: o,
            maxHeight: s,
        });
        if (!e && (i === k.hBH.VIDEO || c >= 300)) return c + W;
        if (i === k.hBH.RICH && void 0 !== n) return Q;
        if (i === k.hBH.GIFV) {
            var u, d, f, p;
            let { width: e } = (0, w.Tj)({
                width:
                    null != (d = null != (u = null == r ? void 0 : r.width) ? u : null == a ? void 0 : a.width) ? d : 0,
                height:
                    null != (p = null != (f = null == r ? void 0 : r.height) ? f : null == a ? void 0 : a.height)
                        ? p
                        : 0,
                maxWidth: o,
                maxHeight: s,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e
            ? {
                  minWidth: z,
                  minHeight: q,
              }
            : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, R.dY)(t);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(l.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: Z.embedSuppressButton,
            onClick: e,
            "aria-label": G.intl.string(G.t.GT3fNz),
            children: (0, i.jsx)(l.Dio, {
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === k.hBH.IMAGE ||
            e.type === k.hBH.VIDEO ||
            e.type === k.hBH.GIFV ||
            ((e.type === k.hBH.RICH || e.type === k.hBH.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        var t, n;
        let {
                embed: { image: r, images: i, video: a, type: o, rawDescription: s },
            } = this.props,
            { maxMediaWidth: l, maxMediaHeight: u } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let d = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === d && void 0 === i && o !== k.hBH.RICH) {
            let e = null != r ? r : a;
            if (void 0 !== e) {
                let { minWidth: n, minHeight: r } = null != (t = this.getMinSize()) ? t : {},
                    { width: i } = (0, w.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: l,
                        maxHeight: u,
                        minWidth: n,
                        minHeight: r,
                    });
                d = i;
            }
        }
        let f = J / (c.Z.fontScale / 100),
            p = (null != s ? (0, D.TZ)(s) : 0) >= f,
            _ = (null != (n = null == s ? void 0 : s.split("\n").length) ? n : 0) >= X,
            m = p || _;
        return {
            maxWidth: void 0 === d || m ? "max-content" : d,
            justifySelf: "auto",
        };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && f.Xh.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        var e;
        let { embed: t, obscureReason: n, className: r } = this.props;
        return null != t.provider && j.j.includes(t.provider.name)
            ? (0, i.jsx)(j.Z, {
                  embed: t,
                  className: r,
              })
            : (0, S.Z)(t)
              ? (0, i.jsx)(I.Z, {
                    embed: t,
                    className: r,
                })
              : (null == (e = t.provider) ? void 0 : e.name) === "Amazon Music" && t.type === k.hBH.RICH
                ? (0, i.jsx)(m.Z, {
                      embed: t,
                      className: r,
                  })
                : (0, u.Z)(t)
                  ? (0, i.jsx)(d.Z, {
                        embed: t,
                        className: r,
                    })
                  : this.isInline()
                    ? null != n
                        ? (0, i.jsx)(v.ZP, {
                              type: v.ZP.Types.ATTACHMENT,
                              reason: n,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: s()({
                                  [Z.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != n
                      ? (0, i.jsx)(v.ZP, {
                            type: v.ZP.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: n,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent,
                        })
                      : this.renderEmbedContent();
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            B(
                this,
                "state",
                V(
                    {
                        isVisible: null == this.props.obscureReason,
                        videoControlsShown: !1,
                        sourceMetadata: {
                            message: this.props.message,
                            identifier: {
                                type: "embed",
                                embedIndex: this.props.embedIndex,
                            },
                        },
                    },
                    (0, R.vP)(this.props.embed),
                ),
            ),
            B(this, "onReveal", () => {
                this.setState({ isVisible: !0 });
            }),
            B(this, "onToggleObscurity", () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            B(this, "renderInlineMediaEmbed", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: n, className: r } = t.props,
                    a = t.getMaxWidth(!0);
                return (0, i.jsx)("div", {
                    "aria-hidden": e,
                    className: s()(Z.inlineMediaEmbed, r, {
                        [Z.spoilerAttachment]: n === f.wk.SPOILER,
                        [Z.hiddenExplicitAttachment]: t.shouldObscure,
                        [Z.isHidden]: e,
                        [Z.justifyAuto]: t.usesJustifiedAutoStyle(),
                    }),
                    style: { maxWidth: a },
                    children: t.renderMedia(e),
                });
            }),
            B(this, "renderEmbedContent", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: n, onSuppressEmbed: r, obscureReason: a } = t.props,
                    {
                        provider: o,
                        author: l,
                        title: c,
                        description: u,
                        fields: d,
                        thumbnail: p,
                        media: _,
                        footer: m,
                    } = t.renderAll();
                return (0, i.jsx)("article", {
                    className: s()(n, Z.embedFull, F.markup, {
                        [Z.isHidden]: e,
                        [Z.spoilerEmbed]: a === f.wk.SPOILER,
                        [Z.hiddenExplicitEmbed]: t.shouldObscure,
                        [Z.justifyAuto]: t.usesJustifiedAutoStyle(),
                    }),
                    "aria-hidden": e,
                    style: {
                        borderLeftColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1),
                    },
                    children: (0, i.jsx)("div", {
                        className: Z.gridContainer,
                        children: (0, i.jsxs)("div", {
                            className: s()({
                                [Z.grid]: !0,
                                [Z.hasThumbnail]: null != p,
                            }),
                            children: [null != r ? t.renderSuppressButton(r) : null, o, l, c, u, d, _, p, m],
                        }),
                    }),
                });
            });
    }
}
B(er, "defaultProps", {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0,
});
