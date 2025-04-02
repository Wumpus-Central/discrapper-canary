l.d(t, {
    BC: () => U,
    ZP: () => Y
}),
    l(47120),
    l(653041),
    l(301563),
    l(266796);
var n,
    r = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    o = l(228458),
    u = l(481060),
    d = l(399654),
    c = l(370298),
    h = l(635477),
    m = l(715697),
    p = l(95398),
    g = l(947849),
    b = l(768494),
    v = l(624195),
    f = l(44824),
    y = l(124347),
    x = l(283756),
    w = l(169525),
    I = l(94396),
    j = l(785992),
    O = l(400266),
    E = l(592125),
    N = l(52824),
    C = l(626135),
    S = l(585483),
    P = l(55935),
    T = l(408433),
    M = l(956664),
    A = l(468846),
    H = l(401419),
    k = l(249458),
    L = l(981631),
    R = l(217702),
    B = l(388032),
    V = l(817857),
    _ = l(190127),
    W = l(50398),
    D = l(220631);
function F(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = l),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                F(e, t, l[t]);
            });
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function U(e) {
    var t, l;
    let { className: n, iframeWrapperClassName: s, maxWidth: o, maxHeight: u, thumbnail: d, video: c, provider: h, allowFullScreen: m = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: b, renderLinkComponent: v, playable: f = !0, autoPlay: y = !1, autoMute: w, volume: I, onPlay: j, onPause: O, onEnded: E, onControlsHide: C, onControlsShow: P, onVolumeChange: T, onMute: H, href: k, placeholder: R, placeholderVersion: B, sourceMetadata: _ } = e,
        [W, D] = i.useState(y),
        F = null != c && null == c.proxyURL,
        Z = i.useCallback(() => D(!1), [D]),
        G = (e) => {
            e.preventDefault(), e.stopPropagation(), null == j || j(!1), D(!0), F && (S.S.dispatch(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED), S.S.subscribeOnce(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z));
        };
    i.useEffect(
        () => () => {
            F && S.S.unsubscribe(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, Z);
        },
        [F, Z]
    );
    let { width: U, height: z } = d;
    null != c && ((U = c.width), (z = c.height));
    let Y = (0, M.Tj)({
        width: U,
        height: z,
        maxWidth: o,
        maxHeight: u
    });
    (U = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144));
    let q = (0, N.q)(d);
    if (null != c && null != c.proxyURL)
        return (0, r.jsx)('div', {
            className: a()(V.embedVideo, n),
            children: b({
                poster: q,
                src: c.proxyURL,
                placeholder: R,
                placeholderVersion: B,
                width: U,
                height: z,
                responsive: p,
                autoPlay: y,
                onEnded: E,
                naturalWidth: c.width,
                naturalHeight: c.height,
                onVolumeChange: T,
                playable: f,
                autoMute: w,
                volume: I,
                onPlay: j,
                onPause: O,
                onMute: H,
                onControlsHide: C,
                onControlsShow: P,
                sourceMetadata: _
            })
        });
    if (W && null != c) {
        let e;
        let t = !0 === w || ('function' == typeof w && w()),
            l = {
                width: U,
                height: z
            },
            i = {
                width: U,
                height: z
            };
        if (p) {
            let t = 0 !== U ? z / U : 1;
            (l = {
                maxWidth: o,
                maxHeight: u,
                width: void 0,
                height: void 0
            }),
                (i = {
                    paddingBottom: ''.concat(100 * t, '%'),
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
            style: l,
            children: (0, r.jsx)('div', {
                className: a()(V.embedVideo, s),
                style: i,
                children: (0, r.jsx)(A.ZP, {
                    provider: h,
                    src: c.url,
                    style: e,
                    width: U,
                    height: z,
                    allowFullScreen: m,
                    autoMute: t
                })
            })
        });
    }
    return (0, r.jsxs)('div', {
        className: a()(V.embedVideo, n),
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
                containerClassName: V.embedVideoImageComponent,
                imageClassName: V.embedVideoImageComponentInner,
                placeholder: R,
                placeholderVersion: B,
                onClick: f && null != c ? G : null,
                sourceMetadata: _,
                analyticsSource: 'EmbedVideo'
            }),
            (0, r.jsx)('div', {
                className: V.embedVideoActions,
                children: (0, r.jsx)('div', {
                    className: V.centerContent,
                    children: f
                        ? (0, r.jsx)(x.Z, {
                              onPlay: null != c ? G : null,
                              externalURL: k,
                              renderLinkComponent: v,
                              messageId: null == _ ? void 0 : null === (t = _.message) || void 0 === t ? void 0 : t.id,
                              channelId: null == _ ? void 0 : null === (l = _.message) || void 0 === l ? void 0 : l.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function z(e) {
    let { className: t, href: l, autoPlay: n, maxWidth: i, maxHeight: s, thumbnail: o, video: u, renderImageComponent: d, responsive: c, alt: h, disableAltTextDisplay: m = !1, playable: p = !0, hiddenSpoilers: g, placeholder: b, placeholderVersion: v, sourceMetadata: y } = e;
    return (0, r.jsx)(f.Z, {
        className: a()(V.embedVideo, t),
        original: l,
        poster: (0, N.q)(o),
        src: (0, N.q)(u),
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
        placeholderVersion: v,
        sourceMetadata: y
    });
}
class Y extends (n = i.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: l,
                message: n
            } = this.props;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: a()(V.embedProvider, V.embedMargin),
                  children:
                      null != t.url
                          ? l({
                                className: V.embedLink,
                                href: t.url,
                                tabIndex: e ? 0 : -1,
                                children: t.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, r.jsx)('span', { children: t.name })
              });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: l,
                message: n
            } = this.props;
        return null == t
            ? null
            : (0, r.jsxs)('div', {
                  className: a()(V.embedAuthor, V.embedMargin),
                  children: [
                      null != t.iconProxyURL
                          ? (0, r.jsx)('img', {
                                alt: '',
                                className: V.embedAuthorIcon,
                                src: t.iconProxyURL
                            })
                          : null,
                      null != t.url
                          ? l({
                                className: V.embedAuthorNameLink,
                                href: t.url,
                                tabIndex: e ? 0 : -1,
                                children: t.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, r.jsx)('span', {
                                className: V.embedAuthorName,
                                children: t.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: l, renderTitle: n, message: i } = this.props,
            { rawTitle: s, url: o } = t;
        return null == s
            ? null
            : (0, r.jsx)('div', {
                  className: a()(V.embedTitle, V.embedMargin),
                  children:
                      null != o
                          ? l({
                                className: V.embedTitleLink,
                                href: o,
                                tabIndex: e ? 0 : -1,
                                children: n(t, s),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == i ? void 0 : i.id,
                                channelId: null == i ? void 0 : i.channel_id
                            })
                          : n(t, s)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: l } = e;
        return null == l
            ? null
            : (0, r.jsx)('div', {
                  className: a()(V.embedDescription, V.embedMargin),
                  children: t(e, l, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: l,
                maxThumbnailHeight: n,
                renderImageComponent: i,
                autoPlayGif: s
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == t
            ? null
            : (0, r.jsx)(k.G.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return i({
                          containerClassName: V.embedThumbnail,
                          src: (0, N.q)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: l,
                          maxHeight: n,
                          shouldLink: e,
                          autoPlay: s && !o,
                          sourceMetadata: a,
                          analyticsSource: 'Embed'
                      });
                  }
              });
    }
    renderFields() {
        let { embed: e } = this.props,
            { fields: t } = e;
        if (null == t || 0 === t.length) return null;
        let l = [],
            n = null;
        return (
            t.forEach((t) => {
                let { rawName: r, rawValue: i, inline: s } = t;
                s || null == n || (l.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, r), this.props.renderDescription(e, i, !0)]), (3 !== n.length && s) || (l.push(n), (n = null));
            }),
            null != n && l.push(n),
            (0, r.jsx)('div', {
                className: V.embedFields,
                children: l.map((e, t) => {
                    let { length: l } = e;
                    return e.map((e, n) => {
                        let [i, s] = e;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: V.embedField,
                                style: {
                                    gridColumn: (function (e, t) {
                                        let l = 12 / t,
                                            n = e * l;
                                        return ''.concat(n + 1, ' / ').concat(n + l + 1);
                                    })(n, l)
                                },
                                children: [
                                    (0, r.jsx)('div', {
                                        className: V.embedFieldName,
                                        children: i
                                    }),
                                    (0, r.jsx)('div', {
                                        className: V.embedFieldValue,
                                        children: s
                                    })
                                ]
                            },
                            ''.concat(t, '-').concat(n)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: l } = this.props,
            { maxMediaHeight: n } = this.state;
        if (null == l.images) return null;
        let [i, s, a, o] = l.images.map((n) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: t,
                image: n,
                isGalleryImage: !0,
                allImages: l.images
            })
        );
        return null == i && null == s && null == a && null == o
            ? null
            : (0, r.jsxs)('div', {
                  className: V.embedGalleryImagesWrapper,
                  style: { height: n },
                  children: [
                      (0, r.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [i, null != o && a]
                      }),
                      (0, r.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [s, null == o && null != a && a, null != o && o]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: t, downloadURL: l, isVisualMediaType: n, channelId: i } = e;
        return (0, r.jsx)('div', {
            className: a()(_.hoverButtonGroup, {
                [_.nonMediaMosaicItem]: !n,
                [_.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, r.jsx)(c.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: i,
                className: a()(_.hoverButton, { [_.selected]: this.state.showImageAppMenu }),
                imageUrl: l,
                mimeType: t
            })
        });
    }
    handleImageHover(e, t, l) {
        if (l) {
            if (e && !this.state.isImageHovered) {
                var n, r;
                this.setState({ isImageHovered: !0 });
                let e = E.Z.getChannel(null === (n = this.props.message) || void 0 === n ? void 0 : n.channel_id);
                this.props.showImageRecs &&
                    (0, d.a)({
                        channelId: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    C.default.track(L.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, t, l, n, i;
        let { hiddenSpoiler: s = !1, isVisible: o = !0, image: u, isGalleryImage: d = !1, alt: c = B.NW.string(B.t.X4IxWF), allImages: h = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: m, className: p, autoPlayGif: v } = this.props,
            { maxMediaWidth: f, maxMediaHeight: x, sourceMetadata: w } = this.state;
        if (null == u) return null;
        let j = (0, N.q)(u),
            { srcToOnClickOverride: O, srcToHandlePreloadImage: E } =
                null == h
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {}
                      }
                    : (0, I.J)(
                          h.map((e) =>
                              G(Z({}, (0, b.Hv)(e, w, 'IMAGE')), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated
                              })
                          ),
                          {},
                          'Embed'
                      ),
            C = y.ZP.isAnimated({
                src: (0, N.q)(u),
                original: u.url,
                animated: !1,
                srcIsAnimated: u.srcIsAnimated
            }),
            S = {
                containerClassName: a()(p, {
                    [V.embedMedia]: !d,
                    [V.embedImage]: !d,
                    [V.galleryImage]: d
                }),
                imageContainerClassName: d ? V.galleryImageContainer : void 0,
                imageClassName: d ? V.embedGalleryImageElement : void 0,
                src: (0, N.q)(u),
                alt: c,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: u.width,
                height: u.height,
                maxWidth: f,
                maxHeight: x,
                original: u.url,
                shouldLink: o,
                disableAltTextDisplay: !0,
                hiddenSpoilers: s,
                placeholder: u.placeholder,
                placeholderVersion: u.placeholderVersion,
                srcIsAnimated: u.srcIsAnimated
            },
            P = null !== (n = null === (e = u.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== n ? n : '';
        'jpg' === P && (P = 'jpeg');
        let T = null != u && !y.uo.test(null == u ? void 0 : u.url) && !(u.srcIsAnimated && y.YG.test(null == u ? void 0 : u.url)) && !(u.srcIsAnimated && y.FH.test(null == u ? void 0 : u.url)),
            M = !0 !== this.props.isSearchResult && o && (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) != null && (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) !== void 0 && T && !(null != (i = u) && (i.width <= R.OF || i.height <= R.OF)) && null != P;
        return (0, r.jsx)(g.h.Consumer, {
            children: (e) =>
                (0, r.jsx)(
                    k.G.Consumer,
                    {
                        children: (t) => {
                            let { disableAnimations: l } = t;
                            return m(
                                G(Z({}, S), {
                                    autoPlay: v && !l && !s,
                                    renderAccessory: C ? e : null,
                                    handlePreloadImage: E[j],
                                    onClick: O[j],
                                    onMouseEnter: () => this.handleImageHover(!0, u, M),
                                    onMouseLeave: () => this.handleImageHover(!1, u, M),
                                    renderAdjacentContent: () => {
                                        var e, t;
                                        return !0 === this.props.showImageRecs && M
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ['image', P],
                                                  downloadURL: null !== (t = u.proxyURL) && void 0 !== t ? t : u.url,
                                                  isVisualMediaType: null != u,
                                                  channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id
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
        let { gifv: e = !1, isVisible: t = !0, hiddenSpoiler: l = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
                  : (0, r.jsx)(k.G.Consumer, {
                        children: (e) => {
                            let { disableAnimations: a } = e;
                            return (0, r.jsx)(z, {
                                className: V.embedMedia,
                                href: n,
                                thumbnail: i,
                                video: s,
                                maxWidth: p,
                                maxHeight: g,
                                responsive: !0,
                                autoPlay: !l && h && !a && t,
                                renderImageComponent: u,
                                playable: t,
                                hiddenSpoilers: l,
                                disableAltTextDisplay: null != m,
                                placeholder: s.placeholder,
                                placeholderVersion: s.placeholderVersion,
                                sourceMetadata: b
                            });
                        }
                    })
              : (0, r.jsx)(U, {
                    className: V.embedMedia,
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
                    playable: t && !l,
                    placeholder: null == s ? void 0 : s.placeholder,
                    placeholderVersion: null == s ? void 0 : s.placeholderVersion,
                    sourceMetadata: b
                });
    }
    renderFooter() {
        let { footer: e, timestamp: t } = this.props.embed;
        if (null != e) {
            let l = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, r.jsxs)('div', {
                className: a()(V.embedFooter, V.embedMargin),
                children: [
                    null != l
                        ? (0, r.jsx)('img', {
                              alt: '',
                              className: V.embedFooterIcon,
                              src: l
                          })
                        : null,
                    (0, r.jsxs)('span', {
                        className: V.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != t
                                ? (0, r.jsx)('span', {
                                      className: V.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != t ? (0, P.Y4)(t) : null
                        ]
                    })
                ]
            });
        }
        if (null != t)
            return (0, r.jsx)('div', {
                className: a()(V.embedFooter, V.embedMargin),
                children: (0, r.jsx)('span', {
                    className: V.embedFooterText,
                    children: (0, P.Y4)(t)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: l } = this.state;
        switch (t.type) {
            case L.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: l
                });
            case L.hBH.VIDEO:
            default:
                if (null != t.video)
                    return this.renderVideo({
                        gifv: !1,
                        hiddenSpoiler: e,
                        isVisible: l
                    });
                if (null != t.images)
                    return this.renderImages({
                        hiddenSpoiler: e,
                        isVisible: l
                    });
                return this.renderImage({
                    hiddenSpoiler: e,
                    isVisible: l,
                    image: t.image,
                    alt: t.rawTitle
                });
        }
    }
    renderAll() {
        let e, t;
        let { embed: l, hideMedia: n } = this.props,
            { isVisible: r } = this.state,
            i = this.renderProvider(r),
            s = this.renderAuthor(r),
            a = this.renderTitle(r);
        switch (l.type) {
            case L.hBH.IMAGE:
            case L.hBH.VIDEO:
            case L.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        n || (t = this.renderMedia(!r));
        let u = this.renderFooter(),
            d = null == t;
        return (
            l.type === L.hBH.RICH && (d = null == l.video),
            {
                provider: i,
                author: s,
                title: a,
                description: e,
                thumbnail: !n && d ? this.renderThumbnail(r) : null,
                fields: o,
                media: t,
                footer: u
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: t, images: l, video: n, type: r, thumbnail: i }
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = null != t ? t : n;
        if (null == o) return;
        let { width: u } = (0, M.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a
        });
        if (!e && (r === L.hBH.VIDEO || u >= 300)) return u + 32;
        if (r === L.hBH.RICH && void 0 !== l) return 520;
        if (r === L.hBH.GIFV) {
            var d, c, h, m;
            let { width: e } = (0, M.Tj)({
                width: null !== (c = null !== (d = null == n ? void 0 : n.width) && void 0 !== d ? d : null == i ? void 0 : i.width) && void 0 !== c ? c : 0,
                height: null !== (m = null !== (h = null == n ? void 0 : n.height) && void 0 !== h ? h : null == i ? void 0 : i.height) && void 0 !== m ? m : 0,
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
        let { hideMedia: e, embed: t } = this.props;
        return !e && (0, T.dY)(t);
    }
    renderSuppressButton(e) {
        return (0, r.jsx)(u.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: V.embedSuppressButton,
            onClick: e,
            'aria-label': B.NW.string(B.t.GT3fNz),
            children: (0, r.jsx)(u.Dio, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === L.hBH.IMAGE || e.type === L.hBH.VIDEO || e.type === L.hBH.GIFV || ((e.type === L.hBH.RICH || e.type === L.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && '#ffffff' === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: t, images: l, video: n, type: r }
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: s } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let a = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === a && void 0 === l && r !== L.hBH.RICH) {
            let e = null != t ? t : n;
            if (void 0 !== e) {
                var o;
                let { minWidth: t, minHeight: l } = null !== (o = this.getMinSize()) && void 0 !== o ? o : {},
                    { width: n } = (0, M.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: i,
                        maxHeight: s,
                        minWidth: t,
                        minHeight: l
                    });
                a = n;
            }
        }
        return {
            maxWidth: void 0 === a ? 'max-content' : a,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: t, obscureReason: l, className: n } = this.props;
        return null != t.provider && H.j.includes(t.provider.name)
            ? (0, r.jsx)(H.Z, {
                  embed: t,
                  className: n
              })
            : (0, j.Z)(t)
              ? (0, r.jsx)(O.Z, {
                    embed: t,
                    className: n
                })
              : (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && t.type === L.hBH.RICH
                ? (0, r.jsx)(v.Z, {
                      embed: t,
                      className: n
                  })
                : (0, h.Z)(t)
                  ? (0, r.jsx)(m.Z, {
                        embed: t,
                        className: n
                    })
                  : this.isInline()
                    ? null != l
                        ? (0, r.jsx)(p.ZP, {
                              type: p.ZP.Types.ATTACHMENT,
                              reason: l,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: a()({ [V.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                              children: this.renderInlineMediaEmbed
                          })
                        : this.renderInlineMediaEmbed()
                    : null != l
                      ? (0, r.jsx)(p.ZP, {
                            type: p.ZP.Types.EMBED,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            reason: l,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!1),
                            children: this.renderEmbedContent
                        })
                      : this.renderEmbedContent();
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            F(
                this,
                'state',
                Z(
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
                    (0, T.vP)(this.props.embed)
                )
            ),
            F(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            F(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            F(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: l, className: n } = t.props,
                    i = t.getMaxWidth(!0);
                return (0, r.jsx)('div', {
                    'aria-hidden': e,
                    className: a()(V.inlineMediaEmbed, n, {
                        [V.spoilerAttachment]: l === w.wk.SPOILER,
                        [V.hiddenExplicitAttachment]: null != l && [w.wk.EXPLICIT_CONTENT, w.wk.POTENTIAL_EXPLICIT_CONTENT].includes(l),
                        [V.isHidden]: e,
                        [V.justifyAuto]: t.usesJustifiedAutoStyle(),
                        [D.embedFlexGrow]: null != i
                    }),
                    style: { maxWidth: i },
                    children: t.renderMedia(e)
                });
            }),
            F(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: l, onSuppressEmbed: n, obscureReason: i } = t.props,
                    { provider: s, author: o, title: u, description: d, fields: c, thumbnail: h, media: m, footer: p } = t.renderAll();
                return (0, r.jsx)('article', {
                    className: a()(l, D.embedFlexGrow, V.embedFull, W.markup, {
                        [V.isHidden]: e,
                        [V.spoilerEmbed]: i === w.wk.SPOILER,
                        [V.hiddenExplicitEmbed]: null != i && [w.wk.EXPLICIT_CONTENT, w.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
                        [V.justifyAuto]: t.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1)
                    },
                    children: (0, r.jsx)('div', {
                        className: V.gridContainer,
                        children: (0, r.jsxs)('div', {
                            className: a()({
                                [V.grid]: !0,
                                [V.hasThumbnail]: null != h
                            }),
                            children: [null != n ? t.renderSuppressButton(n) : null, s, o, u, d, c, m, h, p]
                        })
                    })
                });
            });
    }
}
F(Y, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
