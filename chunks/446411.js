t.d(l, {
    BC: () => z,
    ZP: () => q
}),
    t(388685),
    t(539854),
    t(953529),
    t(35282);
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
    b = t(947849),
    f = t(768494),
    v = t(624195),
    y = t(44824),
    x = t(124347),
    w = t(283756),
    j = t(169525),
    I = t(207982),
    O = t(785992),
    S = t(400266),
    C = t(592125),
    E = t(52824),
    P = t(626135),
    N = t(585483),
    A = t(55935),
    M = t(408433),
    H = t(956664),
    T = t(624138),
    k = t(468846),
    L = t(401419),
    R = t(249458),
    B = t(981631),
    V = t(217702),
    D = t(388032),
    W = t(94488),
    _ = t(166011),
    F = t(73433);
function Z(e, l, t) {
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
function G(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (l) {
                Z(e, l, t[l]);
            });
    }
    return e;
}
function U(e, l) {
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
function z(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: s, maxWidth: o, maxHeight: u, thumbnail: d, video: c, provider: h, allowFullScreen: m = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: b, renderLinkComponent: f, playable: v = !0, autoPlay: y = !1, autoMute: x, volume: j, onPlay: I, onPause: O, onEnded: S, onControlsHide: C, onControlsShow: P, onVolumeChange: A, onMute: M, href: T, placeholder: L, placeholderVersion: R, sourceMetadata: V } = e,
        [D, _] = i.useState(y),
        F = null != c && null == c.proxyURL,
        Z = i.useCallback(() => _(!1), [_]),
        G = (e) => {
            e.preventDefault(), e.stopPropagation(), null == I || I(!1), _(!0), F && (N.S.dispatch(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED), N.S.subscribeOnce(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z));
        };
    i.useEffect(
        () => () => {
            F && N.S.unsubscribe(B.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z);
        },
        [F, Z]
    );
    let { width: U, height: z } = d;
    null != c && ((U = c.width), (z = c.height));
    let Y = (0, H.Tj)({
        width: U,
        height: z,
        maxWidth: o,
        maxHeight: u
    });
    (U = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144));
    let q = (0, E.q)(d);
    if (null != c && null != c.proxyURL)
        return (0, r.jsx)('div', {
            className: a()(W.embedVideo, n),
            children: b({
                poster: q,
                src: c.proxyURL,
                placeholder: L,
                placeholderVersion: R,
                width: U,
                height: z,
                responsive: p,
                autoPlay: y,
                onEnded: S,
                naturalWidth: c.width,
                naturalHeight: c.height,
                onVolumeChange: A,
                playable: v,
                autoMute: x,
                volume: j,
                onPlay: I,
                onPause: O,
                onMute: M,
                onControlsHide: C,
                onControlsShow: P,
                sourceMetadata: V
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
            (t = {
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
                });
        }
        return (0, r.jsx)('div', {
            className: n,
            style: t,
            children: (0, r.jsx)('div', {
                className: a()(W.embedVideo, s),
                style: i,
                children: (0, r.jsx)(k.ZP, {
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
        className: a()(W.embedVideo, n),
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
                containerClassName: W.embedVideoImageComponent,
                imageClassName: W.embedVideoImageComponentInner,
                placeholder: L,
                placeholderVersion: R,
                onClick: v && null != c ? G : null,
                sourceMetadata: V,
                analyticsSource: 'EmbedVideo'
            }),
            (0, r.jsx)('div', {
                className: W.embedVideoActions,
                children: (0, r.jsx)('div', {
                    className: W.centerContent,
                    children: v
                        ? (0, r.jsx)(w.Z, {
                              onPlay: null != c ? G : null,
                              externalURL: T,
                              renderLinkComponent: f,
                              messageId: null == V || null == (l = V.message) ? void 0 : l.id,
                              channelId: null == V || null == (t = V.message) ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function Y(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: i, maxHeight: s, thumbnail: o, video: u, renderImageComponent: d, responsive: c, alt: h, disableAltTextDisplay: m = !1, playable: p = !0, hiddenSpoilers: g, placeholder: b, placeholderVersion: f, sourceMetadata: v } = e;
    return (0, r.jsx)(y.Z, {
        className: a()(W.embedVideo, l),
        original: t,
        poster: (0, E.q)(o),
        src: (0, E.q)(u),
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
class q extends (n = i.PureComponent) {
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
                  className: a()(W.embedProvider, W.embedMargin),
                  children:
                      null != l.url
                          ? t({
                                className: W.embedLink,
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
                  className: a()(W.embedAuthor, W.embedMargin),
                  children: [
                      null != l.iconProxyURL
                          ? (0, r.jsx)('img', {
                                alt: '',
                                className: W.embedAuthorIcon,
                                src: l.iconProxyURL
                            })
                          : null,
                      null != l.url
                          ? t({
                                className: W.embedAuthorNameLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, r.jsx)('span', {
                                className: W.embedAuthorName,
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
                  className: a()(W.embedTitle, W.embedMargin),
                  children:
                      null != o
                          ? t({
                                className: W.embedTitleLink,
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
                  className: a()(W.embedDescription, W.embedMargin),
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
                          containerClassName: W.embedThumbnail,
                          src: (0, E.q)(l),
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
                s || null == n || (t.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 !== n.length && s) || (t.push(n), (n = null));
            }),
            null != n && t.push(n),
            (0, r.jsx)('div', {
                className: W.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [i, s] = e;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: W.embedField,
                                style: {
                                    gridColumn: (function (e, l) {
                                        let t = 12 / l,
                                            n = e * t;
                                        return ''.concat(n + 1, ' / ').concat(n + t + 1);
                                    })(n, t)
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: W.embedFieldName,
                                        children: i
                                    }),
                                    (0, r.jsx)('div', {
                                        className: W.embedFieldValue,
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
        let { hiddenSpoiler: e = !1, isVisible: l = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: t } = this.props,
            { maxMediaHeight: n } = this.state;
        if (null == t.images) return null;
        let [i, s, a, o] = t.images.map((n) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: n,
                isGalleryImage: !0,
                allImages: t.images
            })
        );
        return null == i && null == s && null == a && null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: W.embedGalleryImagesWrapper,
                  style: { height: n },
                  children: [
                      (0, r.jsxs)('div', {
                          className: W.embedGallerySide,
                          children: [i, null != o && a]
                      }),
                      (0, r.jsxs)('div', {
                          className: W.embedGallerySide,
                          children: [s, null == o && null != a && a, null != o && o]
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
                let e = C.Z.getChannel(null == (n = this.props.message) ? void 0 : n.channel_id);
                this.props.showImageRecs &&
                    (0, c.a)({
                        channelId: null != (r = null == e ? void 0 : e.id) ? r : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    P.default.track(B.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
    }
    renderImage() {
        var e, l, t, n, i;
        let { hiddenSpoiler: s = !1, isVisible: o = !0, image: u, isGalleryImage: d = !1, alt: c = D.intl.string(D.t.X4IxWF), allImages: h = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: m, className: p, autoPlayGif: g } = this.props,
            { maxMediaWidth: v, maxMediaHeight: y, sourceMetadata: w } = this.state;
        if (null == u) return null;
        let j = (0, E.q)(u),
            { srcToOnClickOverride: O, srcToHandlePreloadImage: S } =
                null == h
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {}
                      }
                    : (0, I.G)(
                          h.map((e) =>
                              U(G({}, (0, f.Hv)(e, w, 'IMAGE')), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated
                              })
                          ),
                          {},
                          'Embed'
                      ),
            C = x.ZP.isAnimated({
                src: (0, E.q)(u),
                original: u.url,
                animated: !1,
                srcIsAnimated: u.srcIsAnimated
            }),
            P = {
                containerClassName: a()(p, {
                    [W.embedMedia]: !d,
                    [W.embedImage]: !d,
                    [W.galleryImage]: d
                }),
                imageContainerClassName: d ? W.galleryImageContainer : void 0,
                imageClassName: d ? W.embedGalleryImageElement : void 0,
                src: (0, E.q)(u),
                alt: null == u.description || '' === u.description ? c : u.description,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: u.width,
                height: u.height,
                maxWidth: v,
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
        let A = null != u && !x.uo.test(null == u ? void 0 : u.url) && !(u.srcIsAnimated && x.YG.test(null == u ? void 0 : u.url)) && !(u.srcIsAnimated && x.FH.test(null == u ? void 0 : u.url)),
            M = !0 !== this.props.isSearchResult && o && (null == (l = this.props.message) ? void 0 : l.channel_id) != null && (null == (t = this.props.message) ? void 0 : t.channel_id) !== void 0 && A && !(null != (i = u) && (i.width <= V.OF || i.height <= V.OF)) && null != N;
        return (0, r.jsx)(b.h.Consumer, {
            children: (e) =>
                (0, r.jsx)(
                    R.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return m(
                                U(G({}, P), {
                                    autoPlay: g && !t && !s,
                                    renderAccessory: C ? e : null,
                                    handlePreloadImage: S[j],
                                    onClick: O[j],
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
                                    sourceMetadata: w,
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
                            return (0, r.jsx)(Y, {
                                className: W.embedMedia,
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
              : (0, r.jsx)(z, {
                    className: W.embedMedia,
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
                className: a()(W.embedFooter, W.embedMargin),
                children: [
                    null != t
                        ? (0, r.jsx)('img', {
                              alt: '',
                              className: W.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, r.jsxs)('span', {
                        className: W.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, r.jsx)('span', {
                                      className: W.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, A.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, r.jsx)('div', {
                className: a()(W.embedFooter, W.embedMargin),
                children: (0, r.jsx)('span', {
                    className: W.embedFooterText,
                    children: (0, A.Y4)(l)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        switch (l.type) {
            case B.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case B.hBH.VIDEO:
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
            case B.hBH.IMAGE:
            case B.hBH.VIDEO:
            case B.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        n || (l = this.renderMedia(!r));
        let u = this.renderFooter(),
            d = null == l;
        return (
            t.type === B.hBH.RICH && (d = null == t.video),
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
        let { width: u } = (0, H.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a
        });
        if (!e && (r === B.hBH.VIDEO || u >= 300)) return u + 32;
        if (r === B.hBH.RICH && void 0 !== t) return 520;
        if (r === B.hBH.GIFV) {
            var d, c, h, m;
            let { width: e } = (0, H.Tj)({
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
        return !e && (0, M.dY)(l);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(u.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: W.embedSuppressButton,
            onClick: e,
            'aria-label': D.intl.string(D.t.GT3fNz),
            children: (0, r.jsx)(u.Dio, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === B.hBH.IMAGE || e.type === B.hBH.VIDEO || e.type === B.hBH.GIFV || ((e.type === B.hBH.RICH || e.type === B.hBH.ARTICLE) && (null != e.video || null != e.image));
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
        if (void 0 === c && void 0 === r && s !== B.hBH.RICH) {
            let e = null != n ? n : i;
            if (void 0 !== e) {
                let { minWidth: t, minHeight: n } = null != (l = this.getMinSize()) ? l : {},
                    { width: r } = (0, H.Tj)({
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
            m = null != a ? (0, T.TZ)(a) : 0,
            p = (null != (t = null == a ? void 0 : a.split('\n').length) ? t : 0) >= 5;
        return {
            maxWidth: void 0 === c || m >= h || p ? 'max-content' : c,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: n } = this.props;
        return null != l.provider && L.j.includes(l.provider.name)
            ? (0, r.jsx)(L.Z, {
                  embed: l,
                  className: n
              })
            : (0, O.Z)(l)
              ? (0, r.jsx)(S.Z, {
                    embed: l,
                    className: n
                })
              : (null == (e = l.provider) ? void 0 : e.name) === 'Amazon Music' && l.type === B.hBH.RICH
                ? (0, r.jsx)(v.Z, {
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
                              obscurityControlClassName: a()({ [W.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
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
        super(...e),
            (l = this),
            Z(
                this,
                'state',
                G(
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
                    (0, M.vP)(this.props.embed)
                )
            ),
            Z(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            Z(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            Z(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: n } = l.props,
                    i = l.getMaxWidth(!0);
                return (0, r.jsx)('div', {
                    'aria-hidden': e,
                    className: a()(W.inlineMediaEmbed, n, {
                        [W.spoilerAttachment]: t === j.wk.SPOILER,
                        [W.hiddenExplicitAttachment]: null != t && j.Xh.has(t),
                        [W.isHidden]: e,
                        [W.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    style: { maxWidth: i },
                    children: l.renderMedia(e)
                });
            }),
            Z(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: i } = l.props,
                    { provider: s, author: o, title: u, description: d, fields: c, thumbnail: h, media: m, footer: p } = l.renderAll();
                return (0, r.jsx)('article', {
                    className: a()(t, W.embedFull, F.markup, {
                        [W.isHidden]: e,
                        [W.spoilerEmbed]: i === j.wk.SPOILER,
                        [W.hiddenExplicitEmbed]: null != i && j.Xh.has(i),
                        [W.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, r.jsx)('div', {
                        className: W.gridContainer,
                        children: (0, r.jsxs)('div', {
                            className: a()({
                                [W.grid]: !0,
                                [W.hasThumbnail]: null != h
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, s, o, u, d, c, m, h, p]
                        })
                    })
                });
            });
    }
}
Z(q, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
