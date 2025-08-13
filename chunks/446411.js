n.d(t, {
    BC: () => er,
    ZP: () => eo,
}),
    n(388685),
    n(539854),
    n(953529),
    n(35282);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(892814),
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
    I = n(566898),
    T = n(963206),
    S = n(207982),
    A = n(785992),
    N = n(400266),
    C = n(592125),
    R = n(52824),
    P = n(626135),
    w = n(585483),
    D = n(55935),
    L = n(408433),
    x = n(956664),
    M = n(624138),
    j = n(468846),
    k = n(401419),
    U = n(249458),
    G = n(981631),
    B = n(217702),
    Z = n(388032),
    F = n(849443),
    V = n(823675),
    H = n(692228);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = 32,
    X = 12,
    Q = 150,
    J = 144,
    $ = 520,
    ee = 5,
    et = 150;
function en(e, t) {
    let n = X / t,
        r = e * n;
    return "".concat(r + 1, " / ").concat(r + n + 1);
}
function er(e) {
    var t, n;
    let {
            className: r,
            iframeWrapperClassName: a,
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
            onControlsShow: N,
            onVolumeChange: C,
            onMute: P,
            href: D,
            placeholder: L,
            placeholderVersion: M,
            sourceMetadata: k,
        } = e,
        [U, B] = o.useState(b),
        Z = null != d && null == d.proxyURL,
        V = o.useCallback(() => B(!1), [B]),
        H = (e) => {
            e.preventDefault(),
                e.stopPropagation(),
                null == I || I(!1),
                B(!0),
                Z &&
                    (w.S.dispatch(G.CkL.VIDEO_EMBED_PLAYBACK_STARTED),
                    w.S.subscribeOnce(G.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V));
        };
    o.useEffect(
        () => () => {
            Z && w.S.unsubscribe(G.CkL.VIDEO_EMBED_PLAYBACK_STARTED, V);
        },
        [Z, V],
    );
    let { width: Y, height: W } = u;
    null != d && ((Y = d.width), (W = d.height));
    let K = (0, x.Tj)({
        width: Y,
        height: W,
        maxWidth: l,
        maxHeight: c,
    });
    (Y = Math.max(K.width, Q)), (W = Math.max(K.height, J));
    let z = (0, R.q)(u);
    if (null != d && null != d.proxyURL)
        return (0, i.jsx)("div", {
            className: s()(F.embedVideo, r),
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
                onVolumeChange: C,
                playable: E,
                autoMute: y,
                volume: O,
                onPlay: I,
                onPause: T,
                onMute: P,
                onControlsHide: A,
                onControlsShow: N,
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
            o = {
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
                (o = {
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
                className: s()(F.embedVideo, a),
                style: o,
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
        className: s()(F.embedVideo, r),
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
                containerClassName: F.embedVideoImageComponent,
                imageClassName: F.embedVideoImageComponentInner,
                placeholder: L,
                placeholderVersion: M,
                onClick: E && null != d ? H : null,
                sourceMetadata: k,
                analyticsSource: "EmbedVideo",
            }),
            (0, i.jsx)("div", {
                className: F.embedVideoActions,
                children: (0, i.jsx)("div", {
                    className: F.centerContent,
                    children: E
                        ? (0, i.jsx)(v.Z, {
                              onPlay: null != d ? H : null,
                              externalURL: D,
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
function ei(e) {
    let {
        className: t,
        href: n,
        autoPlay: r,
        maxWidth: o,
        maxHeight: a,
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
        className: s()(F.embedVideo, t),
        original: n,
        poster: (0, R.q)(l),
        src: (0, R.q)(c),
        alt: f,
        width: l.width,
        height: l.height,
        naturalHeight: c.height,
        naturalWidth: c.width,
        maxWidth: o,
        maxHeight: a,
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
class eo extends (r = o.PureComponent) {
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
                    className: s()(F.embedProvider, F.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 80,
                        height: 18,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: s()(F.embedProvider, F.embedMargin),
                    children:
                        null != t.url
                            ? n({
                                  className: F.embedLink,
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
            } = this.props;
        return null == t
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(F.embedAuthor, F.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 150,
                        height: 18,
                    }),
                })
              : (0, i.jsxs)("div", {
                    className: s()(F.embedAuthor, F.embedMargin),
                    children: [
                        null != t.iconProxyURL
                            ? (0, i.jsx)("img", {
                                  alt: "",
                                  className: F.embedAuthorIcon,
                                  src: t.iconProxyURL,
                              })
                            : null,
                        null != t.url
                            ? n({
                                  className: F.embedAuthorNameLink,
                                  href: t.url,
                                  tabIndex: e ? 0 : -1,
                                  children: t.name,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == r ? void 0 : r.id,
                                  channelId: null == r ? void 0 : r.channel_id,
                              })
                            : (0, i.jsx)("span", {
                                  className: F.embedAuthorName,
                                  children: t.name,
                              }),
                    ],
                });
    }
    renderContentPlaceholder(e) {
        let { width: t, height: n } = e;
        return (0, i.jsx)(I.ZT, {
            className: F.contentPlaceholder,
            width: t,
            height: n,
            opacity: 0.3,
        });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: n, renderTitle: r, message: o } = this.props,
            { rawTitle: a, url: l } = t;
        return null == a
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, i.jsx)("div", {
                    className: s()(F.embedTitle, F.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 400,
                        height: 30,
                    }),
                })
              : (0, i.jsx)("div", {
                    className: s()(F.embedTitle, F.embedMargin),
                    children:
                        null != l
                            ? n({
                                  className: F.embedTitleLink,
                                  href: l,
                                  tabIndex: e ? 0 : -1,
                                  children: r(t, a),
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  messageId: null == o ? void 0 : o.id,
                                  channelId: null == o ? void 0 : o.channel_id,
                              })
                            : r(t, a),
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: n } = e;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(F.embedDescription, F.embedMargin),
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
                renderImageComponent: o,
                autoPlayGif: a,
            } = this.props,
            { sourceMetadata: s } = this.state;
        return null == t
            ? null
            : (0, i.jsx)(U.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: l } = i;
                      return o({
                          containerClassName: F.embedThumbnail,
                          src: (0, R.q)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: n,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: a && !l,
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
                let { rawName: i, rawValue: o, inline: a } = t;
                a || null == r || (n.push(r), (r = null)),
                    null == r && (r = []),
                    r.push([this.props.renderTitle(e, i), this.props.renderDescription(e, o, !0)]),
                    (3 !== r.length && a) || (n.push(r), (r = null));
            }),
            null != r && n.push(r),
            (0, i.jsx)("div", {
                className: F.embedFields,
                children: n.map((e, t) => {
                    let { length: n } = e;
                    return e.map((e, r) => {
                        let [o, a] = e;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: F.embedField,
                                style: { gridColumn: en(r, n) },
                                children: [
                                    (0, i.jsx)("div", {
                                        className: F.embedFieldName,
                                        children: o,
                                    }),
                                    (0, i.jsx)("div", {
                                        className: F.embedFieldValue,
                                        children: a,
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
        let { hiddenSpoiler: o = !1, isVisible: a = !0 } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: s } = this.props,
            { maxMediaHeight: l } = this.state;
        if (null == s.images) return null;
        let [c, u, d, f] = s.images.map((e) =>
            this.renderImage({
                hiddenSpoiler: o,
                isVisible: a,
                image: e,
                isGalleryImage: !0,
                allImages: s.images,
            }),
        );
        return null == c && null == u && null == d && null == f
            ? null
            : (0, i.jsxs)("div", {
                  className: F.embedGalleryImagesWrapper,
                  style: { height: l },
                  children: [
                      (0, i.jsxs)("div", {
                          className: F.embedGallerySide,
                          children: [
                              (0, i.jsx)(
                                  g.h.Provider,
                                  {
                                      value: (0, T.P)(s.images[0].url, s.images[0]),
                                      children: c,
                                  },
                                  0,
                              ),
                              null != f &&
                                  (0, i.jsx)(
                                      g.h.Provider,
                                      {
                                          value: (0, T.P)(null == (e = s.images[2]) ? void 0 : e.url, s.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          className: F.embedGallerySide,
                          children: [
                              (0, i.jsx)(
                                  g.h.Provider,
                                  {
                                      value: (0, T.P)(null == (t = s.images[1]) ? void 0 : t.url, s.images[1]),
                                      children: u,
                                  },
                                  1,
                              ),
                              null == f &&
                                  null != d &&
                                  (0, i.jsx)(
                                      g.h.Provider,
                                      {
                                          value: (0, T.P)(null == (n = s.images[2]) ? void 0 : n.url, s.images[2]),
                                          children: d,
                                      },
                                      2,
                                  ),
                              null != f &&
                                  (0, i.jsx)(
                                      g.h.Provider,
                                      {
                                          value: (0, T.P)(null == (r = s.images[3]) ? void 0 : r.url, s.images[3]),
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
        let { mimeType: t, downloadURL: n, isVisualMediaType: r, channelId: o } = e,
            a = () => {
                this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
            };
        return (0, i.jsx)("div", {
            className: s()(V.hoverButtonGroup, {
                [V.nonMediaMosaicItem]: !r,
                [V.forceShowHover]: this.state.showImageAppMenu,
            }),
            children: (0, i.jsx)(f.Z, {
                toggleShowMenu: a,
                showMenu: this.state.showImageAppMenu,
                channelId: o,
                className: s()(V.hoverButton, { [V.selected]: this.state.showImageAppMenu }),
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
                let e = C.Z.getChannel(null == (r = this.props.message) ? void 0 : r.channel_id);
                this.props.showImageRecs &&
                    (0, d.a)({
                        channelId: null != (i = null == e ? void 0 : e.id) ? i : "",
                        location: l.I.CONTEXTUAL_IMAGE,
                        withCommands: !0,
                    }),
                    P.default.track(G.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs,
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
    }
    renderImage() {
        var e, t, n, r;
        let {
                hiddenSpoiler: o = !1,
                isVisible: a = !0,
                image: l,
                isGalleryImage: c = !1,
                alt: u = Z.intl.string(Z.t.X4IxWF),
                allImages: d = null,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: f, className: _, autoPlayGif: p } = this.props,
            { maxMediaWidth: h, maxMediaHeight: m, sourceMetadata: b } = this.state;
        if (null == l) return null;
        let y = (0, R.q)(l),
            { srcToOnClickOverride: v, srcToHandlePreloadImage: I } =
                null == d
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {},
                      }
                    : (0, S.G)(
                          d.map((e) =>
                              z(W({}, (0, E.Hv)(e, b, "IMAGE")), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated,
                              }),
                          ),
                          {},
                          "Embed",
                      ),
            T = O.ZP.isAnimated({
                src: (0, R.q)(l),
                original: l.url,
                animated: !1,
                srcIsAnimated: l.srcIsAnimated,
            }),
            A = {
                containerClassName: s()(_, {
                    [F.embedMedia]: !c,
                    [F.embedImage]: !c,
                    [F.galleryImage]: c,
                }),
                imageContainerClassName: c ? F.galleryImageContainer : void 0,
                imageClassName: c ? F.embedGalleryImageElement : void 0,
                src: (0, R.q)(l),
                alt: null == l.description || "" === l.description ? u : l.description,
                responsive: !0,
                limitResponsiveWidth: !c,
                width: l.width,
                height: l.height,
                maxWidth: h,
                maxHeight: m,
                original: l.url,
                shouldLink: a,
                disableAltTextDisplay: null == l.description || "" === l.description,
                hiddenSpoilers: o,
                placeholder: l.placeholder,
                placeholderVersion: l.placeholderVersion,
                srcIsAnimated: l.srcIsAnimated,
                mosaicStyleAlt: !0,
            },
            N = null != (r = null == (e = l.url.split(".").pop()) ? void 0 : e.split("?")[0]) ? r : "";
        "jpg" === N && (N = "jpeg");
        let C =
                null != l &&
                !O.uo.test(null == l ? void 0 : l.url) &&
                !(l.srcIsAnimated && O.YG.test(null == l ? void 0 : l.url)) &&
                !(l.srcIsAnimated && O.FH.test(null == l ? void 0 : l.url)),
            P =
                !0 !== this.props.isSearchResult &&
                a &&
                (null == (t = this.props.message) ? void 0 : t.channel_id) != null &&
                (null == (n = this.props.message) ? void 0 : n.channel_id) !== void 0 &&
                C &&
                !ea(l) &&
                null != N;
        return (0, i.jsx)(g.h.Consumer, {
            children: (e) =>
                (0, i.jsx)(
                    U.G.Consumer,
                    {
                        children: (t) => {
                            let { disableAnimations: n } = t;
                            return f(
                                z(W({}, A), {
                                    autoPlay: p && !n && !o,
                                    renderAccessory: T ? e : null,
                                    handlePreloadImage: I[y],
                                    onClick: v[y],
                                    onMouseEnter: () => this.handleImageHover(!0, l, P),
                                    onMouseLeave: () => this.handleImageHover(!1, l, P),
                                    renderAdjacentContent: () => {
                                        var e, t;
                                        return !0 === this.props.showImageRecs && P
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ["image", N],
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
                embed: { url: r, thumbnail: o, video: a, provider: s },
                renderVideoComponent: l,
                renderImageComponent: c,
                renderLinkComponent: u,
                allowFullScreen: d,
                autoPlayGif: f,
                obscureReason: _,
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: h, sourceMetadata: m } = this.state;
        if (null == r || null == o) return null;
        if (e)
            return null == a
                ? null
                : (0, i.jsx)(U.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: s } = e;
                          return (0, i.jsx)(ei, {
                              className: F.embedMedia,
                              href: r,
                              thumbnail: o,
                              video: a,
                              maxWidth: p,
                              maxHeight: h,
                              responsive: !0,
                              autoPlay: !n && f && !s && t,
                              renderImageComponent: c,
                              playable: t,
                              hiddenSpoilers: n,
                              disableAltTextDisplay: null != _,
                              placeholder: a.placeholder,
                              placeholderVersion: a.placeholderVersion,
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
        return (0, i.jsx)(er, {
            className: F.embedMedia,
            href: r,
            allowFullScreen: d,
            thumbnail: o,
            video: a,
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
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
            sourceMetadata: m,
        });
    }
    renderFooter() {
        let { footer: e, timestamp: t } = this.props.embed;
        if (null != e) {
            let n = null != e.iconProxyURL && "" !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, i.jsxs)("div", {
                className: s()(F.embedFooter, F.embedMargin),
                children: [
                    null != n
                        ? (0, i.jsx)("img", {
                              alt: "",
                              className: F.embedFooterIcon,
                              src: n,
                          })
                        : null,
                    (0, i.jsxs)("span", {
                        className: F.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != t
                                ? (0, i.jsx)("span", {
                                      className: F.embedFooterSeparator,
                                      children: "\u2022",
                                  })
                                : null,
                            null != t ? (0, D.Y4)(t) : null,
                        ],
                    }),
                ],
            });
        }
        if (null != t)
            return (0, i.jsx)("div", {
                className: s()(F.embedFooter, F.embedMargin),
                children: (0, i.jsx)("span", {
                    className: F.embedFooterText,
                    children: (0, D.Y4)(t),
                }),
            });
    }
    renderStaticPlaceholderMedia() {
        var e;
        let { className: t, embed: n } = this.props,
            { maxMediaWidth: r, maxMediaHeight: o } = this.state,
            a = null != (e = n.image) ? e : n.video;
        if (null == a) return null;
        let { width: s, height: l } = (0, x.Tj)({
            width: a.width,
            height: a.height,
            maxWidth: r,
            maxHeight: o,
        });
        return (0, i.jsx)(c.Eep, {
            className: t,
            readyState: G.zo9.READY,
            src: "",
            width: s,
            height: l,
            maxWidth: r,
            maxHeight: o,
            mediaLayoutType: B.hV.STATIC,
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
            case G.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: n,
                });
            case G.hBH.VIDEO:
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
            o = this.renderProvider(i),
            a = this.renderAuthor(i),
            s = this.renderTitle(i);
        switch (n.type) {
            case G.hBH.IMAGE:
            case G.hBH.VIDEO:
            case G.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let l = this.renderFields();
        r || (t = this.renderMedia(!i));
        let c = this.renderFooter(),
            u = null == t;
        return (
            n.type === G.hBH.RICH && (u = null == n.video),
            {
                provider: o,
                author: a,
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
                embed: { image: t, images: n, video: r, type: i, thumbnail: o },
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: s } = this.state,
            l = null != t ? t : r;
        if (null == l) return;
        let { width: c } = (0, x.Tj)({
            width: l.width,
            height: l.height,
            maxWidth: a,
            maxHeight: s,
        });
        if (!e && (i === G.hBH.VIDEO || c >= 300)) return c + q;
        if (i === G.hBH.RICH && void 0 !== n) return $;
        if (i === G.hBH.GIFV) {
            var u, d, f, _;
            let { width: e } = (0, x.Tj)({
                width:
                    null != (d = null != (u = null == r ? void 0 : r.width) ? u : null == o ? void 0 : o.width) ? d : 0,
                height:
                    null != (_ = null != (f = null == r ? void 0 : r.height) ? f : null == o ? void 0 : o.height)
                        ? _
                        : 0,
                maxWidth: a,
                maxHeight: s,
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e
            ? {
                  minWidth: Q,
                  minHeight: J,
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
            className: F.embedSuppressButton,
            onClick: e,
            "aria-label": Z.intl.string(Z.t.GT3fNz),
            children: (0, i.jsx)(c.Dio, {
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return (
            e.type === G.hBH.IMAGE ||
            e.type === G.hBH.VIDEO ||
            e.type === G.hBH.GIFV ||
            ((e.type === G.hBH.RICH || e.type === G.hBH.ARTICLE) && (null != e.video || null != e.image))
        );
    }
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && "#ffffff" === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        var t, n;
        let {
                embed: { image: r, images: i, video: o, type: a, rawDescription: s },
            } = this.props,
            { maxMediaWidth: l, maxMediaHeight: c } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let d = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === d && void 0 === i && a !== G.hBH.RICH) {
            let e = null != r ? r : o;
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
        let f = et / (u.Z.fontScale / 100),
            _ = (null != s ? (0, M.TZ)(s) : 0) >= f,
            p = (null != (n = null == s ? void 0 : s.split("\n").length) ? n : 0) >= ee,
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
        return null != t.provider && k.j.includes(t.provider.name)
            ? (0, i.jsx)(k.Z, {
                  embed: t,
                  className: r,
              })
            : (0, A.Z)(t)
              ? (0, i.jsx)(N.Z, {
                    embed: t,
                    className: r,
                })
              : (null == (e = t.provider) ? void 0 : e.name) === "Amazon Music" && t.type === G.hBH.RICH
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
                                  [F.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown,
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
            Y(
                this,
                "state",
                W(
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
            Y(this, "onReveal", () => {
                this.setState({ isVisible: !0 });
            }),
            Y(this, "onToggleObscurity", () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            Y(this, "renderInlineMediaEmbed", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: n, className: r } = t.props,
                    o = t.getMaxWidth(!0);
                return (0, i.jsx)("div", {
                    "aria-hidden": e,
                    className: s()(F.inlineMediaEmbed, r, {
                        [F.spoilerAttachment]: n === m.wk.SPOILER,
                        [F.hiddenExplicitAttachment]: t.shouldObscure,
                        [F.isHidden]: e,
                        [F.justifyAuto]: t.usesJustifiedAutoStyle(),
                    }),
                    style: { maxWidth: o },
                    children: t.renderMedia(e),
                });
            }),
            Y(this, "renderEmbedContent", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: n, onSuppressEmbed: r, obscureReason: o } = t.props,
                    {
                        provider: a,
                        author: l,
                        title: c,
                        description: u,
                        fields: d,
                        thumbnail: f,
                        media: _,
                        footer: p,
                    } = t.renderAll();
                return (0, i.jsx)("article", {
                    className: s()(n, F.embedFull, H.markup, {
                        [F.isHidden]: e,
                        [F.spoilerEmbed]: o === m.wk.SPOILER,
                        [F.hiddenExplicitEmbed]: t.shouldObscure,
                        [F.justifyAuto]: t.usesJustifiedAutoStyle(),
                    }),
                    "aria-hidden": e,
                    style: {
                        borderLeftColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1),
                    },
                    children: (0, i.jsx)("div", {
                        className: F.gridContainer,
                        children: (0, i.jsxs)("div", {
                            className: s()({
                                [F.grid]: !0,
                                [F.hasThumbnail]: null != f,
                            }),
                            children: [null != r ? t.renderSuppressButton(r) : null, a, l, c, u, d, _, f, p],
                        }),
                    }),
                });
            });
    }
}
function ea(e) {
    return null != e && (e.width <= B.OF || e.height <= B.OF);
}
Y(eo, "defaultProps", {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0,
});
