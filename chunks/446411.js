n.d(t, {
    BC: () => ea,
    ZP: () => es,
}),
    n(388685),
    n(539854),
    n(953529),
    n(35282);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(228458),
    c = n(481060),
    u = n(607070),
    d = n(399654),
    f = n(370298),
    _ = n(635477),
    p = n(715697),
    h = n(95398),
    m = n(936141),
    g = n(947849),
    E = n(768494),
    b = n(624195),
    y = n(44824),
    O = n(124347),
    v = n(283756),
    I = n(120324),
    T = n(566898),
    S = n(963206),
    A = n(785992),
    C = n(400266),
    N = n(592125),
    R = n(52824),
    P = n(626135),
    D = n(585483),
    w = n(55935),
    L = n(408433),
    x = n(956664),
    M = n(624138),
    k = n(591759),
    j = n(468846),
    U = n(401419),
    G = n(249458),
    B = n(981631),
    Z = n(217702),
    F = n(388032),
    V = n(781452),
    H = n(374299),
    Y = n(430864);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = 32,
    Q = 12,
    J = 150,
    $ = 144,
    ee = 520,
    et = 5,
    en = 150;
function er(e, t) {
    let n = Q / t,
        r = e * n;
    return "".concat(r + 1, " / ").concat(r + n + 1);
}
function ei(e) {
    let t = k.Z.toURLSafe(e);
    return null == t ? e : (t.searchParams.set("format", "png"), t.toString());
}
function ea(e) {
    var t, n;
    let {
            className: r,
            iframeWrapperClassName: o,
            maxWidth: l,
            maxHeight: c,
            thumbnail: u,
            video: d,
            provider: f,
            allowFullScreen: _ = !0,
            responsive: p = !1,
            renderImageComponent: h,
            renderVideoComponent: m,
            renderLinkComponent: g,
            playable: E = !0,
            autoPlay: b = !1,
            autoMute: y,
            volume: O,
            onPlay: I,
            onPause: T,
            onEnded: S,
            onControlsHide: A,
            onControlsShow: C,
            onVolumeChange: N,
            onMute: P,
            href: w,
            placeholder: L,
            placeholderVersion: M,
            sourceMetadata: k,
        } = e,
        [U, G] = a.useState(b),
        Z = null != d && null == d.proxyURL,
        F = a.useCallback(() => G(!1), [G]),
        H = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                null == I || I(!1),
                G(!0),
                Z &&
                    (D.S.dispatch(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                    D.S.subscribeOnce(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED, F));
        };
    a.useEffect(
        () => () => {
            Z && D.S.unsubscribe(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED, F);
        },
        [Z, F],
    );
    let { width: Y, height: W } = u;
    null != d && ((Y = d.width), (W = d.height));
    let K = (0, x.Tj)({
        width: Y,
        height: W,
        maxWidth: l,
        maxHeight: c,
    });
    (Y = Math.max(K.width, J)), (W = Math.max(K.height, $));
    let z = (0, R.q)(u);
    if (null != d && null != d.proxyURL)
        return (0, i.jsx)("div", {
            className: s()(V.embedVideo, r),
            children: m({
                poster: z,
                src: d.proxyURL,
                placeholder: L,
                placeholderVersion: M,
                width: Y,
                height: W,
                responsive: p,
                autoPlay: b,
                onEnded: S,
                naturalWidth: d.width,
                naturalHeight: d.height,
                onVolumeChange: N,
                playable: E,
                autoMute: y,
                volume: O,
                onPlay: I,
                onPause: T,
                onMute: P,
                onControlsHide: A,
                onControlsShow: C,
                sourceMetadata: k,
            }),
        });
    if (U && null != d) {
        let e,
            t = !0 === y || ("function" == typeof y && y()),
            n = {
                width: Y,
                height: W,
            },
            a = {
                width: Y,
                height: W,
            };
        if (p) {
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
                className: s()(V.embedVideo, o),
                style: a,
                children: (0, i.jsx)(j.ZP, {
                    provider: f,
                    src: d.url,
                    style: e,
                    width: Y,
                    height: W,
                    allowFullScreen: _,
                    autoMute: t,
                }),
            }),
        });
    }
    return (0, i.jsxs)("div", {
        className: s()(V.embedVideo, r),
        style: p
            ? { maxWidth: Y }
            : {
                  width: Y,
                  height: W,
              },
        children: [
            h({
                src: z,
                width: Y,
                height: W,
                maxWidth: Y,
                maxHeight: W,
                responsive: p,
                containerClassName: V.embedVideoImageComponent,
                imageClassName: V.embedVideoImageComponentInner,
                placeholder: L,
                placeholderVersion: M,
                onClick: E && null != d ? H : null,
                sourceMetadata: k,
                analyticsSource: "EmbedVideo",
            }),
            (0, i.jsx)("div", {
                className: V.embedVideoActions,
                children: (0, i.jsx)("div", {
                    className: V.centerContent,
                    children: E
                        ? (0, i.jsx)(v.Z, {
                              onPlay: null != d ? H : null,
                              externalURL: w,
                              renderLinkComponent: g,
                              messageId: null == k || null == (t = k.message) ? void 0 : t.id,
                              channelId: null == k || null == (n = k.message) ? void 0 : n.channel_id,
                          })
                        : null,
                }),
            }),
        ],
    });
}
function eo(e) {
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
        disableAltTextDisplay: _ = !1,
        playable: p = !0,
        hiddenSpoilers: h,
        placeholder: m,
        placeholderVersion: g,
        sourceMetadata: E,
    } = e;
    return (0, i.jsx)(y.Z, {
        className: s()(V.embedVideo, t),
        original: n,
        poster: (0, R.q)(l),
        src: (0, R.q)(c),
        alt: f,
        width: l.width,
        height: l.height,
        naturalHeight: c.height,
        naturalWidth: c.width,
        maxWidth: a,
        maxHeight: o,
        responsive: d,
        autoPlay: r,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: h,
        disableAltTextDisplay: _,
        placeholder: m,
        placeholderVersion: g,
        sourceMetadata: E,
    });
}
class es extends (r = a.PureComponent) {
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
                    className: s()(V.embedProvider, V.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 80,
                        height: 18,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: s()(V.embedProvider, V.embedMargin),
                    children:
                        null != t.url
                            ? n({
                                  className: V.embedLink,
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
                    className: s()(V.embedAuthor, V.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 150,
                        height: 18,
                    }),
                })
              : (0, i.jsx)(G.G.Consumer, {
                    children: (o) => {
                        let { disableAnimations: l } = o;
                        return (0, i.jsxs)("div", {
                            className: s()(V.embedAuthor, V.embedMargin),
                            children: [
                                null != t.iconProxyURL
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          className: V.embedAuthorIcon,
                                          src: a && !l ? t.iconProxyURL : ei(t.iconProxyURL),
                                      })
                                    : null,
                                null != t.url
                                    ? n({
                                          className: V.embedAuthorNameLink,
                                          href: t.url,
                                          tabIndex: e ? 0 : -1,
                                          children: t.name,
                                          target: "_blank",
                                          rel: "noreferrer noopener",
                                          messageId: null == r ? void 0 : r.id,
                                          channelId: null == r ? void 0 : r.channel_id,
                                      })
                                    : (0, i.jsx)("span", {
                                          className: V.embedAuthorName,
                                          children: t.name,
                                      }),
                            ],
                        });
                    },
                });
    }
    renderContentPlaceholder(e) {
        let { width: t, height: n } = e;
        return (0, i.jsx)(T.ZT, {
            className: V.contentPlaceholder,
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
                    className: s()(V.embedTitle, V.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 400,
                        height: 30,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: s()(V.embedTitle, V.embedMargin),
                    children:
                        null != l
                            ? n({
                                  className: V.embedTitleLink,
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
                  className: s()(V.embedDescription, V.embedMargin),
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
            : (0, i.jsx)(G.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: l } = i;
                      return a({
                          containerClassName: V.embedThumbnail,
                          src: (0, R.q)(t),
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
                className: V.embedFields,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let [a, o] = e;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: V.embedField,
                                style: { gridColumn: er(r, n) },
                                children: [
                                    (0, i.jsx)("div", {
                                        className: V.embedFieldName,
                                        children: a,
                                    }),
                                    (0, i.jsx)("div", {
                                        className: V.embedFieldValue,
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
                  className: V.embedGalleryImagesWrapper,
                  style: { height: l },
                  children: [
                      (0, i.jsxs)("div", {
                          className: V.embedGallerySide,
                          children: [
                              (0, i.jsx)(
                                  g.h.Provider,
                                  {
                                      value: (0, S.P)(s.images[0].url, s.images[0]),
                                      children: c,
                                  },
                                  0,
                              ),
                              null != f &&
                                  (0, i.jsx)(
                                      g.h.Provider,
                                      {
                                          value: (0, S.P)(null == (e = s.images[2]) ? void 0 : e.url, s.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: V.embedGallerySide,
                          children: [
                              (0, i.jsx)(
                                  g.h.Provider,
                                  {
                                      value: (0, S.P)(null == (t = s.images[1]) ? void 0 : t.url, s.images[1]),
                                      children: u,
                                  },
                                  1,
                              ),
                              null == f &&
                                  null != d &&
                                  (0, i.jsx)(
                                      g.h.Provider,
                                      {
                                          value: (0, S.P)(null == (n = s.images[2]) ? void 0 : n.url, s.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                              null != f &&
                                  (0, i.jsx)(
                                      g.h.Provider,
                                      {
                                          value: (0, S.P)(null == (r = s.images[3]) ? void 0 : r.url, s.images[3]),
                                          children: f,
                                      },
                                      3,
                                  ),
                          ],
                      }),
                  ],
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: t, downloadURL: n, isVisualMediaType: r, channelId: a } = e,
            o = () => {
                this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
            };
        return (0, i.jsx)("div", {
            className: s()(H.hoverButtonGroup, {
                [H.nonMediaMosaicItem]: !r,
                [H.forceShowHover]: this.state.showImageAppMenu,
            }),
            children: (0, i.jsx)(f.Z, {
                toggleShowMenu: o,
                showMenu: this.state.showImageAppMenu,
                channelId: a,
                className: s()(H.hoverButton, { [H.selected]: this.state.showImageAppMenu }),
                imageUrl: n,
                mimeType: t,
            }),
        });
    }
    handleImageHover(e, t, n) {
        if (n)
            if (e && !this.state.isImageHovered) {
                var r, i;
                this.setState({ isImageHovered: !0 });
                let e = N.Z.getChannel(null == (r = this.props.message) ? void 0 : r.channel_id);
                this.props.showImageRecs &&
                    (0, d.a)({
                        channelId: null != (i = null == e ? void 0 : e.id) ? i : "",
                        location: l.I.CONTEXTUAL_IMAGE,
                        withCommands: !0,
                    }),
                    P.default.track(B.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs,
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
    }
    renderImage() {
        var e, t, n, r;
        let {
                hiddenSpoiler: a = !1,
                isVisible: o = !0,
                image: l,
                isGalleryImage: c = !1,
                alt: u = F.intl.string(F.t.X4IxWL),
                allImages: d = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: f, className: _, autoPlayGif: p } = this.props,
            { maxMediaWidth: h, maxMediaHeight: m, sourceMetadata: b } = this.state;
        if (null == l) return null;
        let y = (0, R.q)(l),
            { srcToOnClickOverride: v, srcToHandlePreloadImage: T } =
                null == d
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {},
                      }
                    : (0, I.G)(
                          d.map((e) =>
                              q(K({}, (0, E.Hv)(e, b, "IMAGE")), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated,
                              }),
                          ),
                          {},
                          "Embed",
                      ),
            S = O.ZP.isAnimated({
                src: (0, R.q)(l),
                original: l.url,
                animated: !1,
                srcIsAnimated: l.srcIsAnimated,
            }),
            A = {
                containerClassName: s()(_, {
                    [V.embedMedia]: !c,
                    [V.embedImage]: !c,
                    [V.galleryImage]: c,
                }),
                imageContainerClassName: c ? V.galleryImageContainer : void 0,
                imageClassName: c ? V.embedGalleryImageElement : void 0,
                src: (0, R.q)(l),
                alt: null == l.description || "" === l.description ? u : l.description,
                responsive: !0,
                limitResponsiveWidth: !c,
                width: l.width,
                height: l.height,
                maxWidth: h,
                maxHeight: m,
                original: l.url,
                shouldLink: o,
                disableAltTextDisplay: null == l.description || "" === l.description,
                hiddenSpoilers: a,
                placeholder: l.placeholder,
                placeholderVersion: l.placeholderVersion,
                srcIsAnimated: l.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            C = null != (r = null == (e = l.url.split(".").pop()) ? void 0 : e.split("?")[0]) ? r : "";
        "jpg" === C && (C = "jpeg");
        let N =
                null != l &&
                !O.uo.test(null == l ? void 0 : l.url) &&
                !(l.srcIsAnimated && O.YG.test(null == l ? void 0 : l.url)) &&
                !(l.srcIsAnimated && O.FH.test(null == l ? void 0 : l.url)),
            P =
                !0 !== this.props.isSearchResult &&
                o &&
                (null == (t = this.props.message) ? void 0 : t.channel_id) != null &&
                (null == (n = this.props.message) ? void 0 : n.channel_id) !== void 0 &&
                N &&
                !el(l) &&
                null != C;
        return (0, i.jsx)(g.h.Consumer, {
            children: (e) =>
                (0, i.jsx)(
                    G.G.Consumer,
                    {
                        children: (t) => {
                            let { disableAnimations: n } = t;
                            return f(
                                q(K({}, A), {
                                    autoPlay: p && !n && !a,
                                    renderAccessory: S ? e : null,
                                    handlePreloadImage: T[y],
                                    onClick: v[y],
                                    onMouseEnter: () => this.handleImageHover(!0, l, P),
                                    onMouseLeave: () => this.handleImageHover(!1, l, P),
                                    renderAdjacentContent: () => {
                                        var e, t;
                                        return !0 === this.props.showImageRecs && P
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ["image", C],
                                                  downloadURL: null != (t = l.proxyURL) ? t : l.url,
                                                  isVisualMediaType: null != l,
                                                  channelId: null == (e = this.props.message) ? void 0 : e.channel_id,
                                              })
                                            : null;
                                    },
                                    sourceMetadata: b,
                                    analyticsSource: "Embed",
                                }),
                            );
                        },
                    },
                    l.url,
                ),
        });
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
                obscureReason: _,
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: h, sourceMetadata: m } = this.state;
        if (null == r || null == a) return null;
        if (e)
            return null == o
                ? null
                : (0, i.jsx)(G.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: s } = e;
                          return (0, i.jsx)(eo, {
                              className: V.embedMedia,
                              href: r,
                              thumbnail: a,
                              video: o,
                              maxWidth: p,
                              maxHeight: h,
                              responsive: !0,
                              autoPlay: !n && f && !s && t,
                              renderImageComponent: c,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != _,
                              placeholder: o.placeholder,
                              placeholderVersion: o.placeholderVersion,
                              sourceMetadata: m,
                          });
                      },
                  });
        let g = () => {
                this.setState({ videoControlsShown: !0 });
            },
            E = () => {
                this.setState({ videoControlsShown: !1 });
            };
        return (0, i.jsx)(ea, {
            className: V.embedMedia,
            href: r,
            allowFullScreen: d,
            thumbnail: a,
            video: o,
            provider: null == s ? void 0 : s.name,
            maxWidth: p,
            maxHeight: h,
            responsive: !0,
            renderImageComponent: c,
            renderVideoComponent: l,
            renderLinkComponent: u,
            onControlsShow: g,
            onControlsHide: E,
            playable: t && !n,
            placeholder: null == o ? void 0 : o.placeholder,
            placeholderVersion: null == o ? void 0 : o.placeholderVersion,
            sourceMetadata: m,
        });
    }
    renderFooter() {
        let { autoPlayGif: e } = this.props,
            { footer: t, timestamp: n } = this.props.embed;
        return null != t
            ? (0, i.jsx)(G.G.Consumer, {
                  children: (r) => {
                      let { disableAnimations: a } = r;
                      return (0, i.jsxs)("div", {
                          className: s()(V.embedFooter, V.embedMargin),
                          children: [
                              null != t.iconProxyURL && "" !== t.iconProxyURL
                                  ? (0, i.jsx)("img", {
                                        alt: "",
                                        className: V.embedFooterIcon,
                                        src: e && !a ? t.iconProxyURL : ei(t.iconProxyURL),
                                    })
                                  : null,
                              (0, i.jsxs)("span", {
                                  className: V.embedFooterText,
                                  children: [
                                      t.text,
                                      null != t.text && null != n
                                          ? (0, i.jsx)("span", {
                                                className: V.embedFooterSeparator,
                                                children: "\u2022",
                                            })
                                          : null,
                                      null != n ? (0, w.Y4)(n) : null,
                                  ],
                              }),
                          ],
                      });
                  },
              })
            : null != n
              ? (0, i.jsx)("div", {
                    className: s()(V.embedFooter, V.embedMargin),
                    children: (0, i.jsx)("span", {
                        className: V.embedFooterText,
                        children: (0, w.Y4)(n),
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
        let { width: s, height: l } = (0, x.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: r,
            maxHeight: a,
        });
        return (0, i.jsx)(c.Eep, {
            className: t,
            readyState: B.zo9.READY,
            src: "",
            width: s,
            height: l,
            maxWidth: r,
            maxHeight: a,
            mediaLayoutType: Z.hV.STATIC,
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
            case B.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: n,
                });
            case B.hBH.VIDEO:
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
            case B.hBH.IMAGE:
            case B.hBH.VIDEO:
            case B.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let l = this.renderFields();
        r || (t = this.renderMedia(!i));
        let c = this.renderFooter(),
            u = null == t;
        return (
            n.type === B.hBH.RICH && (u = null == n.video),
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
        let { width: c } = (0, x.Tj)({
            width: l.width,
            height: l.height,
            maxWidth: o,
            maxHeight: s,
        });
        if (!e && (i === B.hBH.VIDEO || c >= 300)) return c + X;
        if (i === B.hBH.RICH && void 0 !== n) return ee;
        if (i === B.hBH.GIFV) {
            var u, d, f, _;
            let { width: e } = (0, x.Tj)({
                width:
                    null != (d = null != (u = null == r ? void 0 : r.width) ? u : null == a ? void 0 : a.width) ? d : 0,
                height:
                    null != (_ = null != (f = null == r ? void 0 : r.height) ? f : null == a ? void 0 : a.height)
                        ? _
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
                  minWidth: J,
                  minHeight: $,
              }
            : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, L.dY)(t);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(c.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: V.embedSuppressButton,
            onClick: e,
            "aria-label": F.intl.string(F.t.GT3fNz),
            children: (0, i.jsx)(c.Dio, {
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === B.hBH.IMAGE ||
            e.type === B.hBH.VIDEO ||
            e.type === B.hBH.GIFV ||
            ((e.type === B.hBH.RICH || e.type === B.hBH.ARTICLE) && (null != e.video || null != e.image))
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
            { maxMediaWidth: l, maxMediaHeight: c } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let d = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === d && void 0 === i && o !== B.hBH.RICH) {
            let e = null != r ? r : a;
            if (void 0 !== e) {
                let { minWidth: n, minHeight: r } = null != (t = this.getMinSize()) ? t : {},
                    { width: i } = (0, x.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: l,
                        maxHeight: c,
                        minWidth: n,
                        minHeight: r,
                    });
                d = i;
            }
        }
        let f = en / (u.Z.fontScale / 100),
            _ = (null != s ? (0, M.TZ)(s) : 0) >= f,
            p = (null != (n = null == s ? void 0 : s.split("\n").length) ? n : 0) >= et,
            h = _ || p;
        return {
            maxWidth: void 0 === d || h ? "max-content" : d,
            justifySelf: "auto",
        };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && m.Xh.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        var e;
        let { embed: t, obscureReason: n, className: r } = this.props;
        return null != t.provider && U.j.includes(t.provider.name)
            ? (0, i.jsx)(U.Z, {
                  embed: t,
                  className: r,
              })
            : (0, A.Z)(t)
              ? (0, i.jsx)(C.Z, {
                    embed: t,
                    className: r,
                })
              : (null == (e = t.provider) ? void 0 : e.name) === "Amazon Music" && t.type === B.hBH.RICH
                ? (0, i.jsx)(b.Z, {
                      embed: t,
                      className: r,
                  })
                : (0, _.Z)(t)
                  ? (0, i.jsx)(p.Z, {
                        embed: t,
                        className: r,
                    })
                  : this.isInline()
                    ? null != n
                        ? (0, i.jsx)(h.ZP, {
                              type: h.ZP.Types.ATTACHMENT,
                              reason: n,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: s()({
                                  [V.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown,
                              }),
                              children: this.renderInlineMediaEmbed,
                          })
                        : this.renderInlineMediaEmbed()
                    : null != n
                      ? (0, i.jsx)(h.ZP, {
                            type: h.ZP.Types.EMBED,
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
            W(
                this,
                "state",
                K(
                    {
                        isVisible: null == this.props.obscureReason,
                        videoControlsShown: !1,
                        isImageHovered: !1,
                        showImageAppMenu: !1,
                        sourceMetadata: {
                            message: this.props.message,
                            identifier: {
                                type: "embed",
                                embedIndex: this.props.embedIndex,
                            },
                        },
                    },
                    (0, L.vP)(this.props.embed),
                ),
            ),
            W(this, "onReveal", () => {
                this.setState({ isVisible: !0 });
            }),
            W(this, "onToggleObscurity", () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            W(this, "renderInlineMediaEmbed", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: n, className: r } = t.props,
                    a = t.getMaxWidth(!0);
                return (0, i.jsx)("div", {
                    "aria-hidden": e,
                    className: s()(V.inlineMediaEmbed, r, {
                        [V.spoilerAttachment]: n === m.wk.SPOILER,
                        [V.hiddenExplicitAttachment]: t.shouldObscure,
                        [V.isHidden]: e,
                        [V.justifyAuto]: t.usesJustifiedAutoStyle(),
                    }),
                    style: { maxWidth: a },
                    children: t.renderMedia(e),
                });
            }),
            W(this, "renderEmbedContent", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: n, onSuppressEmbed: r, obscureReason: a } = t.props,
                    {
                        provider: o,
                        author: l,
                        title: c,
                        description: u,
                        fields: d,
                        thumbnail: f,
                        media: _,
                        footer: p,
                    } = t.renderAll();
                return (0, i.jsx)("article", {
                    className: s()(n, V.embedFull, Y.markup, {
                        [V.isHidden]: e,
                        [V.spoilerEmbed]: a === m.wk.SPOILER,
                        [V.hiddenExplicitEmbed]: t.shouldObscure,
                        [V.justifyAuto]: t.usesJustifiedAutoStyle(),
                    }),
                    "aria-hidden": e,
                    style: {
                        borderLeftColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1),
                    },
                    children: (0, i.jsx)("div", {
                        className: V.gridContainer,
                        children: (0, i.jsxs)("div", {
                            className: s()({
                                [V.grid]: !0,
                                [V.hasThumbnail]: null != f,
                            }),
                            children: [null != r ? t.renderSuppressButton(r) : null, o, l, c, u, d, _, f, p],
                        }),
                    }),
                });
            });
    }
}
function el(e) {
    return null != e && (e.width <= Z.OF || e.height <= Z.OF);
}
W(es, "defaultProps", {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0,
});
