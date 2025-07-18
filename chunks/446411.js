(t.d(l, {
    BC: () => Y,
    ZP: () => K
}),
    t(388685),
    t(539854),
    t(953529),
    t(35282));
var n,
    r = t(255367),
    i = t(73800),
    s = t(120356),
    a = t.n(s),
    o = t(228458),
    u = t(481060),
    d = t(607070),
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
    I = t(963206),
    O = t(207982),
    S = t(785992),
    P = t(400266),
    E = t(592125),
    C = t(52824),
    N = t(626135),
    A = t(585483),
    M = t(55935),
    H = t(408433),
    T = t(956664),
    k = t(624138),
    L = t(468846),
    B = t(401419),
    R = t(249458),
    V = t(981631),
    D = t(217702),
    W = t(388032),
    F = t(94488),
    _ = t(166011),
    Z = t(73433);
function G(e, l, t) {
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
function U(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (l) {
                G(e, l, t[l]);
            }));
    }
    return e;
}
function z(e, l) {
    return (
        (l = null != l ? l : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
            : (function (e, l) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(l)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
              }),
        e
    );
}
function Y(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: s, maxWidth: o, maxHeight: u, thumbnail: d, video: c, provider: h, allowFullScreen: m = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: b, renderLinkComponent: f, playable: v = !0, autoPlay: y = !1, autoMute: x, volume: w, onPlay: I, onPause: O, onEnded: S, onControlsHide: P, onControlsShow: E, onVolumeChange: N, onMute: M, href: H, placeholder: k, placeholderVersion: B, sourceMetadata: R } = e,
        [D, W] = i.useState(y),
        _ = null != c && null == c.proxyURL,
        Z = i.useCallback(() => W(!1), [W]),
        G = (e) => {
            (e.preventDefault(), e.stopPropagation(), null == I || I(!1), W(!0), _ && (A.S.dispatch(V.CkL.VIDEO_EMBED_PLAYBACK_STARTED), A.S.subscribeOnce(V.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z)));
        };
    i.useEffect(
        () => () => {
            _ && A.S.unsubscribe(V.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z);
        },
        [_, Z]
    );
    let { width: U, height: z } = d;
    null != c && ((U = c.width), (z = c.height));
    let Y = (0, T.Tj)({
        width: U,
        height: z,
        maxWidth: o,
        maxHeight: u
    });
    ((U = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144)));
    let q = (0, C.q)(d);
    if (null != c && null != c.proxyURL)
        return (0, r.jsx)('div', {
            className: a()(F.embedVideo, n),
            children: b({
                poster: q,
                src: c.proxyURL,
                placeholder: k,
                placeholderVersion: B,
                width: U,
                height: z,
                responsive: p,
                autoPlay: y,
                onEnded: S,
                naturalWidth: c.width,
                naturalHeight: c.height,
                onVolumeChange: N,
                playable: v,
                autoMute: x,
                volume: w,
                onPlay: I,
                onPause: O,
                onMute: M,
                onControlsHide: P,
                onControlsShow: E,
                sourceMetadata: R
            })
        });
    if (D && null != c) {
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
                maxHeight: u,
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
        return (0, r.jsx)('div', {
            className: n,
            style: t,
            children: (0, r.jsx)('div', {
                className: a()(F.embedVideo, s),
                style: i,
                children: (0, r.jsx)(L.ZP, {
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
    return (0, r.jsxs)('div', {
        className: a()(F.embedVideo, n),
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
                containerClassName: F.embedVideoImageComponent,
                imageClassName: F.embedVideoImageComponentInner,
                placeholder: k,
                placeholderVersion: B,
                onClick: v && null != c ? G : null,
                sourceMetadata: R,
                analyticsSource: 'EmbedVideo'
            }),
            (0, r.jsx)('div', {
                className: F.embedVideoActions,
                children: (0, r.jsx)('div', {
                    className: F.centerContent,
                    children: v
                        ? (0, r.jsx)(j.Z, {
                              onPlay: null != c ? G : null,
                              externalURL: H,
                              renderLinkComponent: f,
                              messageId: null == R || null == (l = R.message) ? void 0 : l.id,
                              channelId: null == R || null == (t = R.message) ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function q(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: i, maxHeight: s, thumbnail: o, video: u, renderImageComponent: d, responsive: c, alt: h, disableAltTextDisplay: m = !1, playable: p = !0, hiddenSpoilers: g, placeholder: b, placeholderVersion: f, sourceMetadata: v } = e;
    return (0, r.jsx)(x.Z, {
        className: a()(F.embedVideo, l),
        original: t,
        poster: (0, C.q)(o),
        src: (0, C.q)(u),
        alt: h,
        width: o.width,
        height: o.height,
        naturalHeight: u.height,
        naturalWidth: u.width,
        maxWidth: i,
        maxHeight: s,
        responsive: c,
        autoPlay: n,
        playable: p,
        renderImageComponent: d,
        hiddenSpoilers: g,
        disableAltTextDisplay: m,
        placeholder: b,
        placeholderVersion: f,
        sourceMetadata: v
    });
}
class K extends (n = i.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, r.jsx)('div', {
                  className: a()(F.embedProvider, F.embedMargin),
                  children:
                      null != l.url
                          ? t({
                                className: F.embedLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, r.jsx)('span', { children: l.name })
              });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(F.embedAuthor, F.embedMargin),
                  children: [
                      null != l.iconProxyURL
                          ? (0, r.jsx)('img', {
                                alt: '',
                                className: F.embedAuthorIcon,
                                src: l.iconProxyURL
                            })
                          : null,
                      null != l.url
                          ? t({
                                className: F.embedAuthorNameLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, r.jsx)('span', {
                                className: F.embedAuthorName,
                                children: l.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: n, message: i } = this.props,
            { rawTitle: s, url: o } = l;
        return null == s
            ? null
            : (0, r.jsx)('div', {
                  className: a()(F.embedTitle, F.embedMargin),
                  children:
                      null != o
                          ? t({
                                className: F.embedTitleLink,
                                href: o,
                                tabIndex: e ? 0 : -1,
                                children: n(l, s),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == i ? void 0 : i.id,
                                channelId: null == i ? void 0 : i.channel_id
                            })
                          : n(l, s)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: a()(F.embedDescription, F.embedMargin),
                  children: l(e, t, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: l },
                maxThumbnailWidth: t,
                maxThumbnailHeight: n,
                renderImageComponent: i,
                autoPlayGif: s
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, r.jsx)(R.G.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return i({
                          containerClassName: F.embedThumbnail,
                          src: (0, C.q)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: n,
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
            n = null;
        return (
            l.forEach((l) => {
                let { rawName: r, rawValue: i, inline: s } = l;
                (s || null == n || (t.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 !== n.length && s) || (t.push(n), (n = null)));
            }),
            null != n && t.push(n),
            (0, r.jsx)('div', {
                className: F.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [i, s] = e;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: F.embedField,
                                style: {
                                    gridColumn: (function (e, l) {
                                        let t = 12 / l,
                                            n = e * t;
                                        return ''.concat(n + 1, ' / ').concat(n + t + 1);
                                    })(n, t)
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: F.embedFieldName,
                                        children: i
                                    }),
                                    (0, r.jsx)('div', {
                                        className: F.embedFieldValue,
                                        children: s
                                    })
                                ]
                            },
                            ''.concat(l, '-').concat(n)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        var e, l, t, n;
        let { hiddenSpoiler: i = !1, isVisible: s = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: a } = this.props,
            { maxMediaHeight: o } = this.state;
        if (null == a.images) return null;
        let [u, d, c, h] = a.images.map((e) =>
            this.renderImage({
                hiddenSpoiler: i,
                isVisible: s,
                image: e,
                isGalleryImage: !0,
                allImages: a.images
            })
        );
        return null == u && null == d && null == c && null == h
            ? null
            : (0, r.jsxs)('div', {
                  className: F.embedGalleryImagesWrapper,
                  style: { height: o },
                  children: [
                      (0, r.jsxs)('div', {
                          className: F.embedGallerySide,
                          children: [
                              (0, r.jsx)(
                                  f.h.Provider,
                                  {
                                      value: (0, I.P)(a.images[0].url, a.images[0]),
                                      children: u
                                  },
                                  0
                              ),
                              null != h &&
                                  (0, r.jsx)(
                                      f.h.Provider,
                                      {
                                          value: (0, I.P)(null == (e = a.images[2]) ? void 0 : e.url, a.images[2]),
                                          children: c
                                      },
                                      2
                                  )
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: F.embedGallerySide,
                          children: [
                              (0, r.jsx)(
                                  f.h.Provider,
                                  {
                                      value: (0, I.P)(null == (l = a.images[1]) ? void 0 : l.url, a.images[1]),
                                      children: d
                                  },
                                  1
                              ),
                              null == h &&
                                  null != c &&
                                  (0, r.jsx)(
                                      f.h.Provider,
                                      {
                                          value: (0, I.P)(null == (t = a.images[2]) ? void 0 : t.url, a.images[2]),
                                          children: c
                                      },
                                      2
                                  ),
                              null != h &&
                                  (0, r.jsx)(
                                      f.h.Provider,
                                      {
                                          value: (0, I.P)(null == (n = a.images[3]) ? void 0 : n.url, a.images[3]),
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
        let { mimeType: l, downloadURL: t, isVisualMediaType: n, channelId: i } = e;
        return (0, r.jsx)('div', {
            className: a()(_.hoverButtonGroup, {
                [_.nonMediaMosaicItem]: !n,
                [_.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, r.jsx)(h.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: i,
                className: a()(_.hoverButton, { [_.selected]: this.state.showImageAppMenu }),
                imageUrl: t,
                mimeType: l
            })
        });
    }
    handleImageHover(e, l, t) {
        if (t)
            if (e && !this.state.isImageHovered) {
                var n, r;
                this.setState({ isImageHovered: !0 });
                let e = E.Z.getChannel(null == (n = this.props.message) ? void 0 : n.channel_id);
                (this.props.showImageRecs &&
                    (0, c.a)({
                        channelId: null != (r = null == e ? void 0 : e.id) ? r : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    N.default.track(V.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    }));
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
    }
    renderImage() {
        var e, l, t, n, i;
        let { hiddenSpoiler: s = !1, isVisible: o = !0, image: u, isGalleryImage: d = !1, alt: c = W.intl.string(W.t.X4IxWF), allImages: h = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: m, className: p, autoPlayGif: g } = this.props,
            { maxMediaWidth: b, maxMediaHeight: y, sourceMetadata: x } = this.state;
        if (null == u) return null;
        let j = (0, C.q)(u),
            { srcToOnClickOverride: I, srcToHandlePreloadImage: S } =
                null == h
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {}
                      }
                    : (0, O.G)(
                          h.map((e) =>
                              z(U({}, (0, v.Hv)(e, x, 'IMAGE')), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated
                              })
                          ),
                          {},
                          'Embed'
                      ),
            P = w.ZP.isAnimated({
                src: (0, C.q)(u),
                original: u.url,
                animated: !1,
                srcIsAnimated: u.srcIsAnimated
            }),
            E = {
                containerClassName: a()(p, {
                    [F.embedMedia]: !d,
                    [F.embedImage]: !d,
                    [F.galleryImage]: d
                }),
                imageContainerClassName: d ? F.galleryImageContainer : void 0,
                imageClassName: d ? F.embedGalleryImageElement : void 0,
                src: (0, C.q)(u),
                alt: null == u.description || '' === u.description ? c : u.description,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: u.width,
                height: u.height,
                maxWidth: b,
                maxHeight: y,
                original: u.url,
                shouldLink: o,
                disableAltTextDisplay: null == u.description || '' === u.description,
                hiddenSpoilers: s,
                placeholder: u.placeholder,
                placeholderVersion: u.placeholderVersion,
                srcIsAnimated: u.srcIsAnimated,
                mosaicStyleAlt: !0
            },
            N = null != (n = null == (e = u.url.split('.').pop()) ? void 0 : e.split('?')[0]) ? n : '';
        'jpg' === N && (N = 'jpeg');
        let A = null != u && !w.uo.test(null == u ? void 0 : u.url) && !(u.srcIsAnimated && w.YG.test(null == u ? void 0 : u.url)) && !(u.srcIsAnimated && w.FH.test(null == u ? void 0 : u.url)),
            M = !0 !== this.props.isSearchResult && o && (null == (l = this.props.message) ? void 0 : l.channel_id) != null && (null == (t = this.props.message) ? void 0 : t.channel_id) !== void 0 && A && !(null != (i = u) && (i.width <= D.OF || i.height <= D.OF)) && null != N;
        return (0, r.jsx)(f.h.Consumer, {
            children: (e) =>
                (0, r.jsx)(
                    R.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return m(
                                z(U({}, E), {
                                    autoPlay: g && !t && !s,
                                    renderAccessory: P ? e : null,
                                    handlePreloadImage: S[j],
                                    onClick: I[j],
                                    onMouseEnter: () => this.handleImageHover(!0, u, M),
                                    onMouseLeave: () => this.handleImageHover(!1, u, M),
                                    renderAdjacentContent: () => {
                                        var e, l;
                                        return !0 === this.props.showImageRecs && M
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ['image', N],
                                                  downloadURL: null != (l = u.proxyURL) ? l : u.url,
                                                  isVisualMediaType: null != u,
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
                    u.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: l = !0, hiddenSpoiler: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: n, thumbnail: i, video: s, provider: a },
                renderVideoComponent: o,
                renderImageComponent: u,
                renderLinkComponent: d,
                allowFullScreen: c,
                autoPlayGif: h,
                obscureReason: m
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: b } = this.state;
        return null == n || null == i
            ? null
            : e
              ? null == s
                  ? null
                  : (0, r.jsx)(R.G.Consumer, {
                        children: (e) => {
                            let { disableAnimations: a } = e;
                            return (0, r.jsx)(q, {
                                className: F.embedMedia,
                                href: n,
                                thumbnail: i,
                                video: s,
                                maxWidth: p,
                                maxHeight: g,
                                responsive: !0,
                                autoPlay: !t && h && !a && l,
                                renderImageComponent: u,
                                playable: l,
                                hiddenSpoilers: t,
                                disableAltTextDisplay: null != m,
                                placeholder: s.placeholder,
                                placeholderVersion: s.placeholderVersion,
                                sourceMetadata: b
                            });
                        }
                    })
              : (0, r.jsx)(Y, {
                    className: F.embedMedia,
                    href: n,
                    allowFullScreen: c,
                    thumbnail: i,
                    video: s,
                    provider: null == a ? void 0 : a.name,
                    maxWidth: p,
                    maxHeight: g,
                    responsive: !0,
                    renderImageComponent: u,
                    renderVideoComponent: o,
                    renderLinkComponent: d,
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
            return (0, r.jsxs)('div', {
                className: a()(F.embedFooter, F.embedMargin),
                children: [
                    null != t
                        ? (0, r.jsx)('img', {
                              alt: '',
                              className: F.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, r.jsxs)('span', {
                        className: F.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, r.jsx)('span', {
                                      className: F.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, M.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, r.jsx)('div', {
                className: a()(F.embedFooter, F.embedMargin),
                children: (0, r.jsx)('span', {
                    className: F.embedFooterText,
                    children: (0, M.Y4)(l)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        switch (l.type) {
            case V.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case V.hBH.VIDEO:
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
            { embed: t, hideMedia: n } = this.props,
            { isVisible: r } = this.state,
            i = this.renderProvider(r),
            s = this.renderAuthor(r),
            a = this.renderTitle(r);
        switch (t.type) {
            case V.hBH.IMAGE:
            case V.hBH.VIDEO:
            case V.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        n || (l = this.renderMedia(!r));
        let u = this.renderFooter(),
            d = null == l;
        return (
            t.type === V.hBH.RICH && (d = null == t.video),
            {
                provider: i,
                author: s,
                title: a,
                description: e,
                thumbnail: !n && d ? this.renderThumbnail(r) : null,
                fields: o,
                media: l,
                footer: u
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: n, type: r, thumbnail: i }
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = null != l ? l : n;
        if (null == o) return;
        let { width: u } = (0, T.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a
        });
        if (!e && (r === V.hBH.VIDEO || u >= 300)) return u + 32;
        if (r === V.hBH.RICH && void 0 !== t) return 520;
        if (r === V.hBH.GIFV) {
            var d, c, h, m;
            let { width: e } = (0, T.Tj)({
                width: null != (c = null != (d = null == n ? void 0 : n.width) ? d : null == i ? void 0 : i.width) ? c : 0,
                height: null != (m = null != (h = null == n ? void 0 : n.height) ? h : null == i ? void 0 : i.height) ? m : 0,
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
        return (0, r.jsx)(u.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: F.embedSuppressButton,
            onClick: e,
            'aria-label': W.intl.string(W.t.GT3fNz),
            children: (0, r.jsx)(u.Dio, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === V.hBH.IMAGE || e.type === V.hBH.VIDEO || e.type === V.hBH.GIFV || ((e.type === V.hBH.RICH || e.type === V.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && '#ffffff' === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        var l, t;
        let {
                embed: { image: n, images: r, video: i, type: s, rawDescription: a }
            } = this.props,
            { maxMediaWidth: o, maxMediaHeight: u } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let c = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === c && void 0 === r && s !== V.hBH.RICH) {
            let e = null != n ? n : i;
            if (void 0 !== e) {
                let { minWidth: t, minHeight: n } = null != (l = this.getMinSize()) ? l : {},
                    { width: r } = (0, T.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: o,
                        maxHeight: u,
                        minWidth: t,
                        minHeight: n
                    });
                c = r;
            }
        }
        let h = 150 / (d.Z.fontScale / 100),
            m = null != a ? (0, k.TZ)(a) : 0,
            p = (null != (t = null == a ? void 0 : a.split('\n').length) ? t : 0) >= 5;
        return {
            maxWidth: void 0 === c || m >= h || p ? 'max-content' : c,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: n } = this.props;
        return null != l.provider && B.j.includes(l.provider.name)
            ? (0, r.jsx)(B.Z, {
                  embed: l,
                  className: n
              })
            : (0, S.Z)(l)
              ? (0, r.jsx)(P.Z, {
                    embed: l,
                    className: n
                })
              : (null == (e = l.provider) ? void 0 : e.name) === 'Amazon Music' && l.type === V.hBH.RICH
                ? (0, r.jsx)(y.Z, {
                      embed: l,
                      className: n
                  })
                : (0, m.Z)(l)
                  ? (0, r.jsx)(p.Z, {
                        embed: l,
                        className: n
                    })
                  : this.isInline()
                    ? null != t
                        ? (0, r.jsx)(g.ZP, {
                              type: g.ZP.Types.ATTACHMENT,
                              reason: t,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: a()({ [F.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                              children: this.renderInlineMediaEmbed
                          })
                        : this.renderInlineMediaEmbed()
                    : null != t
                      ? (0, r.jsx)(g.ZP, {
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
            G(
                this,
                'state',
                U(
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
            G(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            G(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            G(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: n } = l.props,
                    i = l.getMaxWidth(!0);
                return (0, r.jsx)('div', {
                    'aria-hidden': e,
                    className: a()(F.inlineMediaEmbed, n, {
                        [F.spoilerAttachment]: t === b.wk.SPOILER,
                        [F.hiddenExplicitAttachment]: null != t && b.Xh.has(t),
                        [F.isHidden]: e,
                        [F.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    style: { maxWidth: i },
                    children: l.renderMedia(e)
                });
            }),
            G(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: i } = l.props,
                    { provider: s, author: o, title: u, description: d, fields: c, thumbnail: h, media: m, footer: p } = l.renderAll();
                return (0, r.jsx)('article', {
                    className: a()(t, F.embedFull, Z.markup, {
                        [F.isHidden]: e,
                        [F.spoilerEmbed]: i === b.wk.SPOILER,
                        [F.hiddenExplicitEmbed]: null != i && b.Xh.has(i),
                        [F.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, r.jsx)('div', {
                        className: F.gridContainer,
                        children: (0, r.jsxs)('div', {
                            className: a()({
                                [F.grid]: !0,
                                [F.hasThumbnail]: null != h
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, s, o, u, d, c, m, h, p]
                        })
                    })
                });
            }));
    }
}
G(K, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
