t.d(l, {
    BC: () => U,
    ZP: () => Y
}),
    t(388685),
    t(539854),
    t(953529),
    t(35282);
var n,
    r = t(200651),
    i = t(192379),
    s = t(120356),
    a = t.n(s),
    o = t(228458),
    u = t(481060),
    d = t(399654),
    c = t(370298),
    h = t(635477),
    m = t(715697),
    p = t(95398),
    g = t(947849),
    b = t(768494),
    f = t(624195),
    v = t(44824),
    y = t(124347),
    x = t(283756),
    w = t(169525),
    I = t(94396),
    j = t(785992),
    O = t(400266),
    E = t(592125),
    N = t(52824),
    C = t(626135),
    S = t(585483),
    P = t(55935),
    T = t(408433),
    A = t(956664),
    M = t(468846),
    H = t(401419),
    k = t(249458),
    L = t(981631),
    R = t(217702),
    B = t(388032),
    V = t(94488),
    _ = t(166011),
    W = t(73433),
    D = t(813102);
function F(e, l, t) {
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
function Z(e) {
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
                F(e, l, t[l]);
            });
    }
    return e;
}
function G(e, l) {
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
function U(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: s, maxWidth: o, maxHeight: u, thumbnail: d, video: c, provider: h, allowFullScreen: m = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: b, renderLinkComponent: f, playable: v = !0, autoPlay: y = !1, autoMute: w, volume: I, onPlay: j, onPause: O, onEnded: E, onControlsHide: C, onControlsShow: P, onVolumeChange: T, onMute: H, href: k, placeholder: R, placeholderVersion: B, sourceMetadata: _ } = e,
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
    let Y = (0, A.Tj)({
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
                playable: v,
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
        let e,
            l = !0 === w || ('function' == typeof w && w()),
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
                className: a()(V.embedVideo, s),
                style: i,
                children: (0, r.jsx)(M.ZP, {
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
                onClick: v && null != c ? G : null,
                sourceMetadata: _,
                analyticsSource: 'EmbedVideo'
            }),
            (0, r.jsx)('div', {
                className: V.embedVideoActions,
                children: (0, r.jsx)('div', {
                    className: V.centerContent,
                    children: v
                        ? (0, r.jsx)(x.Z, {
                              onPlay: null != c ? G : null,
                              externalURL: k,
                              renderLinkComponent: f,
                              messageId: null == _ || null == (l = _.message) ? void 0 : l.id,
                              channelId: null == _ || null == (t = _.message) ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function z(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: i, maxHeight: s, thumbnail: o, video: u, renderImageComponent: d, responsive: c, alt: h, disableAltTextDisplay: m = !1, playable: p = !0, hiddenSpoilers: g, placeholder: b, placeholderVersion: f, sourceMetadata: y } = e;
    return (0, r.jsx)(v.Z, {
        className: a()(V.embedVideo, l),
        original: t,
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
        placeholderVersion: f,
        sourceMetadata: y
    });
}
class Y extends (n = i.PureComponent) {
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
                  className: a()(V.embedProvider, V.embedMargin),
                  children:
                      null != l.url
                          ? t({
                                className: V.embedLink,
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
                  className: a()(V.embedAuthor, V.embedMargin),
                  children: [
                      null != l.iconProxyURL
                          ? (0, r.jsx)('img', {
                                alt: '',
                                className: V.embedAuthorIcon,
                                src: l.iconProxyURL
                            })
                          : null,
                      null != l.url
                          ? t({
                                className: V.embedAuthorNameLink,
                                href: l.url,
                                tabIndex: e ? 0 : -1,
                                children: l.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == n ? void 0 : n.id,
                                channelId: null == n ? void 0 : n.channel_id
                            })
                          : (0, r.jsx)('span', {
                                className: V.embedAuthorName,
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
                  className: a()(V.embedTitle, V.embedMargin),
                  children:
                      null != o
                          ? t({
                                className: V.embedTitleLink,
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
                  className: a()(V.embedDescription, V.embedMargin),
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
            : (0, r.jsx)(k.G.Consumer, {
                  children: (r) => {
                      let { disableAnimations: o } = r;
                      return i({
                          containerClassName: V.embedThumbnail,
                          src: (0, N.q)(l),
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
                className: V.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [i, s] = e;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: V.embedField,
                                style: {
                                    gridColumn: (function (e, l) {
                                        let t = 12 / l,
                                            n = e * t;
                                        return ''.concat(n + 1, ' / ').concat(n + t + 1);
                                    })(n, t)
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
        let { mimeType: l, downloadURL: t, isVisualMediaType: n, channelId: i } = e;
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
                this.props.showImageRecs &&
                    (0, d.a)({
                        channelId: null != (r = null == e ? void 0 : e.id) ? r : '',
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
    renderImage() {
        var e, l, t, n, i;
        let { hiddenSpoiler: s = !1, isVisible: o = !0, image: u, isGalleryImage: d = !1, alt: c = B.NW.string(B.t.X4IxWF), allImages: h = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: m, className: p, autoPlayGif: f } = this.props,
            { maxMediaWidth: v, maxMediaHeight: x, sourceMetadata: w } = this.state;
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
                alt: null == u.description || '' === u.description ? c : u.description,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: u.width,
                height: u.height,
                maxWidth: v,
                maxHeight: x,
                original: u.url,
                shouldLink: o,
                disableAltTextDisplay: null == u.description || '' === u.description,
                hiddenSpoilers: s,
                placeholder: u.placeholder,
                placeholderVersion: u.placeholderVersion,
                srcIsAnimated: u.srcIsAnimated,
                mosaicStyleAlt: !0
            },
            P = null != (n = null == (e = u.url.split('.').pop()) ? void 0 : e.split('?')[0]) ? n : '';
        'jpg' === P && (P = 'jpeg');
        let T = null != u && !y.uo.test(null == u ? void 0 : u.url) && !(u.srcIsAnimated && y.YG.test(null == u ? void 0 : u.url)) && !(u.srcIsAnimated && y.FH.test(null == u ? void 0 : u.url)),
            A = !0 !== this.props.isSearchResult && o && (null == (l = this.props.message) ? void 0 : l.channel_id) != null && (null == (t = this.props.message) ? void 0 : t.channel_id) !== void 0 && T && !(null != (i = u) && (i.width <= R.OF || i.height <= R.OF)) && null != P;
        return (0, r.jsx)(g.h.Consumer, {
            children: (e) =>
                (0, r.jsx)(
                    k.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return m(
                                G(Z({}, S), {
                                    autoPlay: f && !t && !s,
                                    renderAccessory: C ? e : null,
                                    handlePreloadImage: E[j],
                                    onClick: O[j],
                                    onMouseEnter: () => this.handleImageHover(!0, u, A),
                                    onMouseLeave: () => this.handleImageHover(!1, u, A),
                                    renderAdjacentContent: () => {
                                        var e, l;
                                        return !0 === this.props.showImageRecs && A
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ['image', P],
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
                className: a()(V.embedFooter, V.embedMargin),
                children: [
                    null != t
                        ? (0, r.jsx)('img', {
                              alt: '',
                              className: V.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, r.jsxs)('span', {
                        className: V.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, r.jsx)('span', {
                                      className: V.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, P.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, r.jsx)('div', {
                className: a()(V.embedFooter, V.embedMargin),
                children: (0, r.jsx)('span', {
                    className: V.embedFooterText,
                    children: (0, P.Y4)(l)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        switch (l.type) {
            case L.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case L.hBH.VIDEO:
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
            case L.hBH.IMAGE:
            case L.hBH.VIDEO:
            case L.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        n || (l = this.renderMedia(!r));
        let u = this.renderFooter(),
            d = null == l;
        return (
            t.type === L.hBH.RICH && (d = null == t.video),
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
        let { width: u } = (0, A.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a
        });
        if (!e && (r === L.hBH.VIDEO || u >= 300)) return u + 32;
        if (r === L.hBH.RICH && void 0 !== t) return 520;
        if (r === L.hBH.GIFV) {
            var d, c, h, m;
            let { width: e } = (0, A.Tj)({
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
        return !e && (0, T.dY)(l);
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
        let { color: l } = this.props.embed;
        return (null != l && '#ffffff' === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: n, type: r }
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: s } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let a = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === a && void 0 === t && r !== L.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
                var o;
                let { minWidth: l, minHeight: t } = null != (o = this.getMinSize()) ? o : {},
                    { width: n } = (0, A.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: i,
                        maxHeight: s,
                        minWidth: l,
                        minHeight: t
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
        let { embed: l, obscureReason: t, className: n } = this.props;
        return null != l.provider && H.j.includes(l.provider.name)
            ? (0, r.jsx)(H.Z, {
                  embed: l,
                  className: n
              })
            : (0, j.Z)(l)
              ? (0, r.jsx)(O.Z, {
                    embed: l,
                    className: n
                })
              : (null == (e = l.provider) ? void 0 : e.name) === 'Amazon Music' && l.type === L.hBH.RICH
                ? (0, r.jsx)(f.Z, {
                      embed: l,
                      className: n
                  })
                : (0, h.Z)(l)
                  ? (0, r.jsx)(m.Z, {
                        embed: l,
                        className: n
                    })
                  : this.isInline()
                    ? null != t
                        ? (0, r.jsx)(p.ZP, {
                              type: p.ZP.Types.ATTACHMENT,
                              reason: t,
                              onReveal: this.onReveal,
                              onToggleObscurity: this.onToggleObscurity,
                              isSingleMosaicItem: !0,
                              containerStyles: this.getSpoilerStyles(!0),
                              obscurityControlClassName: a()({ [V.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                              children: this.renderInlineMediaEmbed
                          })
                        : this.renderInlineMediaEmbed()
                    : null != t
                      ? (0, r.jsx)(p.ZP, {
                            type: p.ZP.Types.EMBED,
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
                    { obscureReason: t, className: n } = l.props,
                    i = l.getMaxWidth(!0);
                return (0, r.jsx)('div', {
                    'aria-hidden': e,
                    className: a()(V.inlineMediaEmbed, n, {
                        [V.spoilerAttachment]: t === w.wk.SPOILER,
                        [V.hiddenExplicitAttachment]: null != t && [w.wk.EXPLICIT_CONTENT, w.wk.POTENTIAL_EXPLICIT_CONTENT].includes(t),
                        [V.isHidden]: e,
                        [V.justifyAuto]: l.usesJustifiedAutoStyle(),
                        [D.embedFlexGrow]: null != i
                    }),
                    style: { maxWidth: i },
                    children: l.renderMedia(e)
                });
            }),
            F(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: i } = l.props,
                    { provider: s, author: o, title: u, description: d, fields: c, thumbnail: h, media: m, footer: p } = l.renderAll();
                return (0, r.jsx)('article', {
                    className: a()(t, D.embedFlexGrow, V.embedFull, W.markup, {
                        [V.isHidden]: e,
                        [V.spoilerEmbed]: i === w.wk.SPOILER,
                        [V.hiddenExplicitEmbed]: null != i && [w.wk.EXPLICIT_CONTENT, w.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
                        [V.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, r.jsx)('div', {
                        className: V.gridContainer,
                        children: (0, r.jsxs)('div', {
                            className: a()({
                                [V.grid]: !0,
                                [V.hasThumbnail]: null != h
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, s, o, u, d, c, m, h, p]
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
