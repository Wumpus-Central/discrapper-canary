(t.d(l, {
    BC: () => q,
    ZP: () => X
}),
    t(388685),
    t(539854),
    t(953529),
    t(35282));
var r,
    n = t(255367),
    i = t(73800),
    s = t(120356),
    a = t.n(s),
    o = t(228458),
    d = t(481060),
    u = t(607070),
    c = t(399654),
    h = t(370298),
    m = t(635477),
    p = t(715697),
    g = t(95398),
    b = t(936141),
    f = t(947849),
    v = t(768494),
    y = t(624195),
    x = t(44824),
    w = t(124347),
    j = t(283756),
    I = t(566898),
    O = t(963206),
    P = t(207982),
    S = t(785992),
    N = t(400266),
    C = t(592125),
    E = t(52824),
    M = t(626135),
    A = t(585483),
    T = t(55935),
    H = t(408433),
    k = t(956664),
    L = t(624138),
    R = t(468846),
    B = t(401419),
    V = t(249458),
    D = t(981631),
    W = t(217702),
    F = t(388032),
    _ = t(94488),
    Z = t(166011),
    G = t(73433);
function U(e, l, t) {
    return (
        l in e
            ? Object.defineProperty(e, l, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[l] = t),
        e
    );
}
function z(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            r = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (l) {
                U(e, l, t[l]);
            }));
    }
    return e;
}
function Y(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
function q(e) {
    var l, t;
    let { className: r, iframeWrapperClassName: s, maxWidth: o, maxHeight: d, thumbnail: u, video: c, provider: h, allowFullScreen: m = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: b, renderLinkComponent: f, playable: v = !0, autoPlay: y = !1, autoMute: x, volume: w, onPlay: I, onPause: O, onEnded: P, onControlsHide: S, onControlsShow: N, onVolumeChange: C, onMute: M, href: T, placeholder: H, placeholderVersion: L, sourceMetadata: B } = e,
        [V, W] = i.useState(y),
        F = null != c && null == c.proxyURL,
        Z = i.useCallback(() => W(!1), [W]),
        G = (e) => {
            (e.preventDefault(), e.stopPropagation(), null == I || I(!1), W(!0), F && (A.S.dispatch(D.CkL.VIDEO_EMBED_PLAYBACK_STARTED), A.S.subscribeOnce(D.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z)));
        };
    i.useEffect(
        () => () => {
            F && A.S.unsubscribe(D.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z);
        },
        [F, Z]
    );
    let { width: U, height: z } = u;
    null != c && ((U = c.width), (z = c.height));
    let Y = (0, k.Tj)({
        width: U,
        height: z,
        maxWidth: o,
        maxHeight: d
    });
    ((U = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144)));
    let q = (0, E.q)(u);
    if (null != c && null != c.proxyURL)
        return (0, n.jsx)('div', {
            className: a()(_.embedVideo, r),
            children: b({
                poster: q,
                src: c.proxyURL,
                placeholder: H,
                placeholderVersion: L,
                width: U,
                height: z,
                responsive: p,
                autoPlay: y,
                onEnded: P,
                naturalWidth: c.width,
                naturalHeight: c.height,
                onVolumeChange: C,
                playable: v,
                autoMute: x,
                volume: w,
                onPlay: I,
                onPause: O,
                onMute: M,
                onControlsHide: S,
                onControlsShow: N,
                sourceMetadata: B
            })
        });
    if (V && null != c) {
        let e,
            l = !0 === x || ('function' == typeof x && x()),
            t = {
                width: U,
                height: z
            },
            i = {
                width: U,
                height: z
            };
        if (p) {
            let l = 0 !== U ? z / U : 1;
            ((t = {
                maxWidth: o,
                maxHeight: d,
                width: void 0,
                height: void 0
            }),
                (i = {
                    paddingBottom: ''.concat(100 * l, '%'),
                    maxWidth: U
                }),
                (e = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    maxWidth: U,
                    maxHeight: z
                }));
        }
        return (0, n.jsx)('div', {
            className: r,
            style: t,
            children: (0, n.jsx)('div', {
                className: a()(_.embedVideo, s),
                style: i,
                children: (0, n.jsx)(R.ZP, {
                    provider: h,
                    src: c.url,
                    style: e,
                    width: U,
                    height: z,
                    allowFullScreen: m,
                    autoMute: l
                })
            })
        });
    }
    return (0, n.jsxs)('div', {
        className: a()(_.embedVideo, r),
        style: p
            ? { maxWidth: U }
            : {
                  width: U,
                  height: z
              },
        children: [
            g({
                src: q,
                width: U,
                height: z,
                maxWidth: U,
                maxHeight: z,
                responsive: p,
                containerClassName: _.embedVideoImageComponent,
                imageClassName: _.embedVideoImageComponentInner,
                placeholder: H,
                placeholderVersion: L,
                onClick: v && null != c ? G : null,
                sourceMetadata: B,
                analyticsSource: 'EmbedVideo'
            }),
            (0, n.jsx)('div', {
                className: _.embedVideoActions,
                children: (0, n.jsx)('div', {
                    className: _.centerContent,
                    children: v
                        ? (0, n.jsx)(j.Z, {
                              onPlay: null != c ? G : null,
                              externalURL: T,
                              renderLinkComponent: f,
                              messageId: null == B || null == (l = B.message) ? void 0 : l.id,
                              channelId: null == B || null == (t = B.message) ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function K(e) {
    let { className: l, href: t, autoPlay: r, maxWidth: i, maxHeight: s, thumbnail: o, video: d, renderImageComponent: u, responsive: c, alt: h, disableAltTextDisplay: m = !1, playable: p = !0, hiddenSpoilers: g, placeholder: b, placeholderVersion: f, sourceMetadata: v } = e;
    return (0, n.jsx)(x.Z, {
        className: a()(_.embedVideo, l),
        original: t,
        poster: (0, E.q)(o),
        src: (0, E.q)(d),
        alt: h,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: i,
        maxHeight: s,
        responsive: c,
        autoPlay: r,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: g,
        disableAltTextDisplay: m,
        placeholder: b,
        placeholderVersion: f,
        sourceMetadata: v
    });
}
class X extends (r = i.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: r
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, n.jsx)('div', {
                    className: a()(_.embedProvider, _.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 80,
                        height: 18
                    })
                })
              : (0, n.jsx)('div', {
                    className: a()(_.embedProvider, _.embedMargin),
                    children:
                        null != l.url
                            ? t({
                                  className: _.embedLink,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  messageId: null == r ? void 0 : r.id,
                                  channelId: null == r ? void 0 : r.channel_id
                              })
                            : (0, n.jsx)('span', { children: l.name })
                });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: r
            } = this.props;
        return null == l
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, n.jsx)('div', {
                    className: a()(_.embedAuthor, _.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 150,
                        height: 18
                    })
                })
              : (0, n.jsxs)('div', {
                    className: a()(_.embedAuthor, _.embedMargin),
                    children: [
                        null != l.iconProxyURL
                            ? (0, n.jsx)('img', {
                                  alt: '',
                                  className: _.embedAuthorIcon,
                                  src: l.iconProxyURL
                              })
                            : null,
                        null != l.url
                            ? t({
                                  className: _.embedAuthorNameLink,
                                  href: l.url,
                                  tabIndex: e ? 0 : -1,
                                  children: l.name,
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  messageId: null == r ? void 0 : r.id,
                                  channelId: null == r ? void 0 : r.channel_id
                              })
                            : (0, n.jsx)('span', {
                                  className: _.embedAuthorName,
                                  children: l.name
                              })
                    ]
                });
    }
    renderContentPlaceholder(e) {
        let { width: l, height: t } = e;
        return (0, n.jsx)(I.ZT, {
            className: _.contentPlaceholder,
            width: l,
            height: t,
            opacity: 0.3
        });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: r, message: i } = this.props,
            { rawTitle: s, url: o } = l;
        return null == s
            ? null
            : this.shouldShowStaticPlaceholder
              ? (0, n.jsx)('div', {
                    className: a()(_.embedTitle, _.embedMargin),
                    children: this.renderContentPlaceholder({
                        width: 400,
                        height: 30
                    })
                })
              : (0, n.jsx)('div', {
                    className: a()(_.embedTitle, _.embedMargin),
                    children:
                        null != o
                            ? t({
                                  className: _.embedTitleLink,
                                  href: o,
                                  tabIndex: e ? 0 : -1,
                                  children: r(l, s),
                                  target: '_blank',
                                  rel: 'noreferrer noopener',
                                  messageId: null == i ? void 0 : i.id,
                                  channelId: null == i ? void 0 : i.channel_id
                              })
                            : r(l, s)
                });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, n.jsx)('div', {
                  className: a()(_.embedDescription, _.embedMargin),
                  children: this.shouldShowStaticPlaceholder
                      ? this.renderContentPlaceholder({
                            width: 400,
                            height: 50
                        })
                      : l(e, t, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: r,
                renderImageComponent: i,
                autoPlayGif: s
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, n.jsx)(V.G.Consumer, {
                  children: (n) => {
                      let { disableAnimations: o } = n;
                      return i({
                          containerClassName: _.embedThumbnail,
                          src: (0, E.q)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: s && !o,
                          srcIsAnimated: l.srcIsAnimated,
                          placeholder: l.placeholder,
                          placeholderVersion: l.placeholderVersion,
                          sourceMetadata: a,
                          analyticsSource: 'Embed'
                      });
                  }
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            r = null;
        return (
            l.forEach((l) => {
                let { rawName: n, rawValue: i, inline: s } = l;
                (s || null == r || (t.push(r), (r = null)), null == r && (r = []), r.push([this.props.renderTitle(e, n), this.props.renderDescription(e, i, !0)]), (3 !== r.length && s) || (t.push(r), (r = null)));
            }),
            null != r && t.push(r),
            (0, n.jsx)('div', {
                className: _.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, r) => {
                        let [i, s] = e;
                        return (0, n.jsxs)(
                            'div',
                            {
                                className: _.embedField,
                                style: {
                                    gridColumn: (function (e, l) {
                                        let t = 12 / l,
                                            r = e * t;
                                        return ''.concat(r + 1, ' / ').concat(r + t + 1);
                                    })(r, t)
                                },
                                children: [
                                    (0, n.jsx)('div', {
                                        className: _.embedFieldName,
                                        children: i
                                    }),
                                    (0, n.jsx)('div', {
                                        className: _.embedFieldValue,
                                        children: s
                                    })
                                ]
                            },
                            ''.concat(l, '-').concat(r)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        var e, l, t, r;
        let { hiddenSpoiler: i = !1, isVisible: s = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: a } = this.props,
            { maxMediaHeight: o } = this.state;
        if (null == a.images) return null;
        let [d, u, c, h] = a.images.map((e) =>
            this.renderImage({
                hiddenSpoiler: i,
                isVisible: s,
                image: e,
                isGalleryImage: !0,
                allImages: a.images
            })
        );
        return null == d && null == u && null == c && null == h
            ? null
            : (0, n.jsxs)('div', {
                  className: _.embedGalleryImagesWrapper,
                  style: { height: o },
                  children: [
                      (0, n.jsxs)('div', {
                          className: _.embedGallerySide,
                          children: [
                              (0, n.jsx)(
                                  f.h.Provider,
                                  {
                                      value: (0, O.P)(a.images[0].url, a.images[0]),
                                      children: d
                                  },
                                  0
                              ),
                              null != h &&
                                  (0, n.jsx)(
                                      f.h.Provider,
                                      {
                                          value: (0, O.P)(null == (e = a.images[2]) ? void 0 : e.url, a.images[2]),
                                          children: c
                                      },
                                      2
                                  )
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: _.embedGallerySide,
                          children: [
                              (0, n.jsx)(
                                  f.h.Provider,
                                  {
                                      value: (0, O.P)(null == (l = a.images[1]) ? void 0 : l.url, a.images[1]),
                                      children: u
                                  },
                                  1
                              ),
                              null == h &&
                                  null != c &&
                                  (0, n.jsx)(
                                      f.h.Provider,
                                      {
                                          value: (0, O.P)(null == (t = a.images[2]) ? void 0 : t.url, a.images[2]),
                                          children: c
                                      },
                                      2
                                  ),
                              null != h &&
                                  (0, n.jsx)(
                                      f.h.Provider,
                                      {
                                          value: (0, O.P)(null == (r = a.images[3]) ? void 0 : r.url, a.images[3]),
                                          children: h
                                      },
                                      3
                                  )
                          ]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: l, downloadURL: t, isVisualMediaType: r, channelId: i } = e;
        return (0, n.jsx)('div', {
            className: a()(Z.hoverButtonGroup, {
                [Z.nonMediaMosaicItem]: !r,
                [Z.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, n.jsx)(h.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: i,
                className: a()(Z.hoverButton, { [Z.selected]: this.state.showImageAppMenu }),
                imageUrl: t,
                mimeType: l
            })
        });
    }
    handleImageHover(e, l, t) {
        if (t)
            if (e && !this.state.isImageHovered) {
                var r, n;
                this.setState({ isImageHovered: !0 });
                let e = C.Z.getChannel(null == (r = this.props.message) ? void 0 : r.channel_id);
                (this.props.showImageRecs &&
                    (0, c.a)({
                        channelId: null != (n = null == e ? void 0 : e.id) ? n : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    M.default.track(D.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    }));
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
    }
    renderImage() {
        var e, l, t, r, i;
        let { hiddenSpoiler: s = !1, isVisible: o = !0, image: d, isGalleryImage: u = !1, alt: c = F.intl.string(F.t.X4IxWF), allImages: h = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: m, className: p, autoPlayGif: g } = this.props,
            { maxMediaWidth: b, maxMediaHeight: y, sourceMetadata: x } = this.state;
        if (null == d) return null;
        let j = (0, E.q)(d),
            { srcToOnClickOverride: I, srcToHandlePreloadImage: O } =
                null == h
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {}
                      }
                    : (0, P.G)(
                          h.map((e) =>
                              Y(z({}, (0, v.Hv)(e, x, 'IMAGE')), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated
                              })
                          ),
                          {},
                          'Embed'
                      ),
            S = w.ZP.isAnimated({
                src: (0, E.q)(d),
                original: d.url,
                animated: !1,
                srcIsAnimated: d.srcIsAnimated
            }),
            N = {
                containerClassName: a()(p, {
                    [_.embedMedia]: !u,
                    [_.embedImage]: !u,
                    [_.galleryImage]: u
                }),
                imageContainerClassName: u ? _.galleryImageContainer : void 0,
                imageClassName: u ? _.embedGalleryImageElement : void 0,
                src: (0, E.q)(d),
                alt: null == d.description || '' === d.description ? c : d.description,
                responsive: !0,
                limitResponsiveWidth: !u,
                width: d.width,
                height: d.height,
                maxWidth: b,
                maxHeight: y,
                original: d.url,
                shouldLink: o,
                disableAltTextDisplay: null == d.description || '' === d.description,
                hiddenSpoilers: s,
                placeholder: d.placeholder,
                placeholderVersion: d.placeholderVersion,
                srcIsAnimated: d.srcIsAnimated,
                mosaicStyleAlt: !0
            },
            C = null != (r = null == (e = d.url.split('.').pop()) ? void 0 : e.split('?')[0]) ? r : '';
        'jpg' === C && (C = 'jpeg');
        let M = null != d && !w.uo.test(null == d ? void 0 : d.url) && !(d.srcIsAnimated && w.YG.test(null == d ? void 0 : d.url)) && !(d.srcIsAnimated && w.FH.test(null == d ? void 0 : d.url)),
            A = !0 !== this.props.isSearchResult && o && (null == (l = this.props.message) ? void 0 : l.channel_id) != null && (null == (t = this.props.message) ? void 0 : t.channel_id) !== void 0 && M && !(null != (i = d) && (i.width <= W.OF || i.height <= W.OF)) && null != C;
        return (0, n.jsx)(f.h.Consumer, {
            children: (e) =>
                (0, n.jsx)(
                    V.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return m(
                                Y(z({}, N), {
                                    autoPlay: g && !t && !s,
                                    renderAccessory: S ? e : null,
                                    handlePreloadImage: O[j],
                                    onClick: I[j],
                                    onMouseEnter: () => this.handleImageHover(!0, d, A),
                                    onMouseLeave: () => this.handleImageHover(!1, d, A),
                                    renderAdjacentContent: () => {
                                        var e, l;
                                        return !0 === this.props.showImageRecs && A
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ['image', C],
                                                  downloadURL: null != (l = d.proxyURL) ? l : d.url,
                                                  isVisualMediaType: null != d,
                                                  channelId: null == (e = this.props.message) ? void 0 : e.channel_id
                                              })
                                            : null;
                                    },
                                    sourceMetadata: x,
                                    analyticsSource: 'Embed'
                                })
                            );
                        }
                    },
                    d.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: l = !0, hiddenSpoiler: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: i, video: s, provider: a },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: c,
                autoPlayGif: h,
                obscureReason: m
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: b } = this.state;
        return null == r || null == i
            ? null
            : e
              ? null == s
                  ? null
                  : (0, n.jsx)(V.G.Consumer, {
                        children: (e) => {
                            let { disableAnimations: a } = e;
                            return (0, n.jsx)(K, {
                                className: _.embedMedia,
                                href: r,
                                thumbnail: i,
                                video: s,
                                maxWidth: p,
                                maxHeight: g,
                                responsive: !0,
                                autoPlay: !t && h && !a && l,
                                renderImageComponent: d,
                                playable: l,
                                hiddenSpoilers: t,
                                disableAltTextDisplay: null != m,
                                placeholder: s.placeholder,
                                placeholderVersion: s.placeholderVersion,
                                sourceMetadata: b
                            });
                        }
                    })
              : (0, n.jsx)(q, {
                    className: _.embedMedia,
                    href: r,
                    allowFullScreen: c,
                    thumbnail: i,
                    video: s,
                    provider: null == a ? void 0 : a.name,
                    maxWidth: p,
                    maxHeight: g,
                    responsive: !0,
                    renderImageComponent: d,
                    renderVideoComponent: o,
                    renderLinkComponent: u,
                    onControlsShow: () => {
                        this.setState({ videoControlsShown: !0 });
                    },
                    onControlsHide: () => {
                        this.setState({ videoControlsShown: !1 });
                    },
                    playable: l && !t,
                    placeholder: null == s ? void 0 : s.placeholder,
                    placeholderVersion: null == s ? void 0 : s.placeholderVersion,
                    sourceMetadata: b
                });
    }
    renderFooter() {
        let { footer: e, timestamp: l } = this.props.embed;
        if (null != e) {
            let t = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, n.jsxs)('div', {
                className: a()(_.embedFooter, _.embedMargin),
                children: [
                    null != t
                        ? (0, n.jsx)('img', {
                              alt: '',
                              className: _.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, n.jsxs)('span', {
                        className: _.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, n.jsx)('span', {
                                      className: _.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, T.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, n.jsx)('div', {
                className: a()(_.embedFooter, _.embedMargin),
                children: (0, n.jsx)('span', {
                    className: _.embedFooterText,
                    children: (0, T.Y4)(l)
                })
            });
    }
    renderStaticPlaceholderMedia() {
        var e;
        let { className: l, embed: t } = this.props,
            { maxMediaWidth: r, maxMediaHeight: i } = this.state,
            s = null != (e = t.image) ? e : t.video;
        if (null == s) return null;
        let { width: a, height: o } = (0, k.Tj)({
            width: s.width,
            height: s.height,
            maxWidth: r,
            maxHeight: i
        });
        return (0, n.jsx)(d.Eep, {
            className: l,
            readyState: D.zo9.READY,
            src: '',
            width: a,
            height: o,
            maxWidth: r,
            maxHeight: i,
            mediaLayoutType: W.hV.STATIC,
            useFullWidth: !1,
            zoomable: !1
        });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        if (this.shouldShowStaticPlaceholder) return this.renderStaticPlaceholderMedia();
        switch (l.type) {
            case D.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case D.hBH.VIDEO:
            default:
                if (null != l.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: t
                    });
                if (null != l.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: t
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: t,
                    image: l.image,
                    alt: l.rawTitle
                });
        }
    }
    renderAll() {
        let e,
            l,
            { embed: t, hideMedia: r } = this.props,
            { isVisible: n } = this.state,
            i = this.renderProvider(n),
            s = this.renderAuthor(n),
            a = this.renderTitle(n);
        switch (t.type) {
            case D.hBH.IMAGE:
            case D.hBH.VIDEO:
            case D.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        r || (l = this.renderMedia(!n));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === D.hBH.RICH && (u = null == t.video),
            {
                provider: i,
                author: s,
                title: a,
                description: e,
                thumbnail: !r && u ? this.renderThumbnail(n) : null,
                fields: o,
                media: l,
                footer: d
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: r, type: n, thumbnail: i }
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = null != l ? l : r;
        if (null == o) return;
        let { width: d } = (0, k.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a
        });
        if (!e && (n === D.hBH.VIDEO || d >= 300)) return d + 32;
        if (n === D.hBH.RICH && void 0 !== t) return 520;
        if (n === D.hBH.GIFV) {
            var u, c, h, m;
            let { width: e } = (0, k.Tj)({
                width: null != (c = null != (u = null == r ? void 0 : r.width) ? u : null == i ? void 0 : i.width) ? c : 0,
                height: null != (m = null != (h = null == r ? void 0 : r.height) ? h : null == i ? void 0 : i.height) ? m : 0,
                maxWidth: s,
                maxHeight: a
            });
            return e;
        }
    }
    getMinSize() {
        let { video: e } = this.props.embed;
        return null != e
            ? {
                  minWidth: 150,
                  minHeight: 144
              }
            : void 0;
    }
    isInline() {
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, H.dY)(l);
    }
    renderSuppressButton(e) {
        return (0, n.jsx)(d.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: _.embedSuppressButton,
            onClick: e,
            'aria-label': F.intl.string(F.t.GT3fNz),
            children: (0, n.jsx)(d.Dio, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === D.hBH.IMAGE || e.type === D.hBH.VIDEO || e.type === D.hBH.GIFV || ((e.type === D.hBH.RICH || e.type === D.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && '#ffffff' === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        var l, t;
        let {
                embed: { image: r, images: n, video: i, type: s, rawDescription: a }
            } = this.props,
            { maxMediaWidth: o, maxMediaHeight: d } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let c = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === c && void 0 === n && s !== D.hBH.RICH) {
            let e = null != r ? r : i;
            if (void 0 !== e) {
                let { minWidth: t, minHeight: r } = null != (l = this.getMinSize()) ? l : {},
                    { width: n } = (0, k.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: o,
                        maxHeight: d,
                        minWidth: t,
                        minHeight: r
                    });
                c = n;
            }
        }
        let h = 150 / (u.Z.fontScale / 100),
            m = null != a ? (0, L.TZ)(a) : 0,
            p = (null != (t = null == a ? void 0 : a.split('\n').length) ? t : 0) >= 5;
        return {
            maxWidth: void 0 === c || m >= h || p ? 'max-content' : c,
            justifySelf: 'auto'
        };
    }
    get shouldObscure() {
        let { obscureReason: e } = this.props;
        return null != e && b.Xh.has(e);
    }
    get shouldShowStaticPlaceholder() {
        let { shouldAgeVerify: e = !1 } = this.props;
        return this.shouldObscure && e;
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: r } = this.props;
        return null != l.provider && B.j.includes(l.provider.name)
            ? (0, n.jsx)(B.Z, {
                  embed: l,
                  className: r
              })
            : (0, S.Z)(l)
              ? (0, n.jsx)(N.Z, {
                    embed: l,
                    className: r
                })
              : (null == (e = l.provider) ? void 0 : e.name) === 'Amazon Music' && l.type === D.hBH.RICH
                ? (0, n.jsx)(y.Z, {
                      embed: l,
                      className: r
                  })
                : (0, m.Z)(l)
                  ? (0, n.jsx)(p.Z, {
                        embed: l,
                        className: r
                    })
                  : this.isInline()
                    ? null != t
                        ? (0, n.jsx)(g.ZP, {
                              type: g.ZP.Types.ATTACHMENT,
                              reason: t,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: a()({ [_.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                              children: this.renderInlineMediaEmbed
                          })
                        : this.renderInlineMediaEmbed()
                    : null != t
                      ? (0, n.jsx)(g.ZP, {
                            type: g.ZP.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: t,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent
                        })
                      : this.renderEmbedContent();
    }
    constructor(...e) {
        var l;
        (super(...e),
            (l = this),
            U(
                this,
                'state',
                z(
                    {
                        isVisible: null == this.props.obscureReason,
                        videoControlsShown: !1,
                        isImageHovered: !1,
                        showImageAppMenu: !1,
                        sourceMetadata: {
                            message: this.props.message,
                            identifier: {
                                type: 'embed',
                                embedIndex: this.props.embedIndex
                            }
                        }
                    },
                    (0, H.vP)(this.props.embed)
                )
            ),
            U(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            U(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            U(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: r } = l.props,
                    i = l.getMaxWidth(!0);
                return (0, n.jsx)('div', {
                    'aria-hidden': e,
                    className: a()(_.inlineMediaEmbed, r, {
                        [_.spoilerAttachment]: t === b.wk.SPOILER,
                        [_.hiddenExplicitAttachment]: l.shouldObscure,
                        [_.isHidden]: e,
                        [_.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    style: { maxWidth: i },
                    children: l.renderMedia(e)
                });
            }),
            U(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: r, obscureReason: i } = l.props,
                    { provider: s, author: o, title: d, description: u, fields: c, thumbnail: h, media: m, footer: p } = l.renderAll();
                return (0, n.jsx)('article', {
                    className: a()(t, _.embedFull, G.markup, {
                        [_.isHidden]: e,
                        [_.spoilerEmbed]: i === b.wk.SPOILER,
                        [_.hiddenExplicitEmbed]: l.shouldObscure,
                        [_.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, n.jsx)('div', {
                        className: _.gridContainer,
                        children: (0, n.jsxs)('div', {
                            className: a()({
                                [_.grid]: !0,
                                [_.hasThumbnail]: null != h
                            }),
                            children: [null != r ? l.renderSuppressButton(r) : null, s, o, d, u, c, m, h, p]
                        })
                    })
                });
            }));
    }
}
U(X, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
