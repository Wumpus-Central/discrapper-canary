l.d(t, {
    BC: () => G,
    ZP: () => U
}),
    l(47120),
    l(653041),
    l(301563),
    l(266796);
var r,
    n = l(200651),
    i = l(192379),
    s = l(120356),
    o = l.n(s),
    a = l(228458),
    d = l(481060),
    u = l(399654),
    c = l(370298),
    h = l(95398),
    m = l(947849),
    p = l(768494),
    g = l(624195),
    b = l(44824),
    f = l(124347),
    v = l(283756),
    y = l(169525),
    x = l(94396),
    w = l(785992),
    j = l(400266),
    I = l(592125),
    O = l(52824),
    S = l(626135),
    P = l(585483),
    N = l(55935),
    C = l(408433),
    E = l(956664),
    T = l(468846),
    M = l(401419),
    A = l(249458),
    H = l(981631),
    k = l(217702),
    L = l(388032),
    R = l(821879),
    D = l(384864),
    V = l(368365),
    _ = l(598746);
function B(e, t, l) {
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
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, l[t]);
            });
    }
    return e;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, r);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function G(e) {
    var t, l;
    let { className: r, iframeWrapperClassName: s, maxWidth: a, maxHeight: d, thumbnail: u, video: c, provider: h, allowFullScreen: m = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: b, renderLinkComponent: f, playable: y = !0, autoPlay: x = !1, autoMute: w, volume: j, onPlay: I, onPause: S, onEnded: N, onControlsHide: C, onControlsShow: M, onVolumeChange: A, onMute: k, href: L, placeholder: D, placeholderVersion: V, sourceMetadata: _ } = e,
        [B, W] = i.useState(x),
        F = null != c && null == c.proxyURL,
        G = i.useCallback(() => W(!1), [W]),
        Z = (e) => {
            e.preventDefault(), e.stopPropagation(), null == I || I(!1), W(!0), F && (P.S.dispatch(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED), P.S.subscribeOnce(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G));
        };
    i.useEffect(
        () => () => {
            F && P.S.unsubscribe(H.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G);
        },
        [F, G]
    );
    let { width: U, height: Y } = u;
    null != c && ((U = c.width), (Y = c.height));
    let q = (0, E.Tj)({
        width: U,
        height: Y,
        maxWidth: a,
        maxHeight: d
    });
    (U = Math.max(q.width, 150)), (Y = Math.max(q.height, 144));
    let z = (0, O.q)(u);
    if (null != c && null != c.proxyURL)
        return (0, n.jsx)('div', {
            className: o()(R.embedVideo, r),
            children: b({
                poster: z,
                src: c.proxyURL,
                placeholder: D,
                placeholderVersion: V,
                width: U,
                height: Y,
                responsive: p,
                autoPlay: x,
                onEnded: N,
                naturalWidth: c.width,
                naturalHeight: c.height,
                onVolumeChange: A,
                playable: y,
                autoMute: w,
                volume: j,
                onPlay: I,
                onPause: S,
                onMute: k,
                onControlsHide: C,
                onControlsShow: M,
                sourceMetadata: _
            })
        });
    if (B && null != c) {
        let e;
        let t = !0 === w || ('function' == typeof w && w()),
            l = {
                width: U,
                height: Y
            },
            i = {
                width: U,
                height: Y
            };
        if (p) {
            let t = 0 !== U ? Y / U : 1;
            (l = {
                maxWidth: a,
                maxHeight: d,
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
                    maxHeight: Y
                });
        }
        return (0, n.jsx)('div', {
            className: r,
            style: l,
            children: (0, n.jsx)('div', {
                className: o()(R.embedVideo, s),
                style: i,
                children: (0, n.jsx)(T.ZP, {
                    provider: h,
                    src: c.url,
                    style: e,
                    width: U,
                    height: Y,
                    allowFullScreen: m,
                    autoMute: t
                })
            })
        });
    }
    return (0, n.jsxs)('div', {
        className: o()(R.embedVideo, r),
        style: p
            ? { maxWidth: U }
            : {
                  width: U,
                  height: Y
              },
        children: [
            g({
                src: z,
                width: U,
                height: Y,
                maxWidth: U,
                maxHeight: Y,
                responsive: p,
                containerClassName: R.embedVideoImageComponent,
                imageClassName: R.embedVideoImageComponentInner,
                placeholder: D,
                placeholderVersion: V,
                onClick: y && null != c ? Z : null,
                sourceMetadata: _,
                analyticsSource: 'EmbedVideo'
            }),
            (0, n.jsx)('div', {
                className: R.embedVideoActions,
                children: (0, n.jsx)('div', {
                    className: R.centerContent,
                    children: y
                        ? (0, n.jsx)(v.Z, {
                              onPlay: null != c ? Z : null,
                              externalURL: L,
                              renderLinkComponent: f,
                              messageId: null == _ ? void 0 : null === (t = _.message) || void 0 === t ? void 0 : t.id,
                              channelId: null == _ ? void 0 : null === (l = _.message) || void 0 === l ? void 0 : l.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function Z(e) {
    let { className: t, href: l, autoPlay: r, maxWidth: i, maxHeight: s, thumbnail: a, video: d, renderImageComponent: u, responsive: c, alt: h, disableAltTextDisplay: m = !1, playable: p = !0, hiddenSpoilers: g, placeholder: f, placeholderVersion: v, sourceMetadata: y } = e;
    return (0, n.jsx)(b.Z, {
        className: o()(R.embedVideo, t),
        original: l,
        poster: (0, O.q)(a),
        src: (0, O.q)(d),
        alt: h,
        width: a.width,
        height: a.height,
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
        placeholder: f,
        placeholderVersion: v,
        sourceMetadata: y
    });
}
class U extends (r = i.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: t },
                renderLinkComponent: l,
                message: r
            } = this.props;
        return null == t
            ? null
            : (0, n.jsx)('div', {
                  className: o()(R.embedProvider, R.embedMargin),
                  children:
                      null != t.url
                          ? l({
                                className: R.embedLink,
                                href: t.url,
                                tabIndex: e ? 0 : -1,
                                children: t.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == r ? void 0 : r.id,
                                channelId: null == r ? void 0 : r.channel_id
                            })
                          : (0, n.jsx)('span', { children: t.name })
              });
    }
    renderAuthor() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { author: t },
                renderLinkComponent: l,
                message: r
            } = this.props;
        return null == t
            ? null
            : (0, n.jsxs)('div', {
                  className: o()(R.embedAuthor, R.embedMargin),
                  children: [
                      null != t.iconProxyURL
                          ? (0, n.jsx)('img', {
                                alt: '',
                                className: R.embedAuthorIcon,
                                src: t.iconProxyURL
                            })
                          : null,
                      null != t.url
                          ? l({
                                className: R.embedAuthorNameLink,
                                href: t.url,
                                tabIndex: e ? 0 : -1,
                                children: t.name,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == r ? void 0 : r.id,
                                channelId: null == r ? void 0 : r.channel_id
                            })
                          : (0, n.jsx)('span', {
                                className: R.embedAuthorName,
                                children: t.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: t, renderLinkComponent: l, renderTitle: r, message: i } = this.props,
            { rawTitle: s, url: a } = t;
        return null == s
            ? null
            : (0, n.jsx)('div', {
                  className: o()(R.embedTitle, R.embedMargin),
                  children:
                      null != a
                          ? l({
                                className: R.embedTitleLink,
                                href: a,
                                tabIndex: e ? 0 : -1,
                                children: r(t, s),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == i ? void 0 : i.id,
                                channelId: null == i ? void 0 : i.channel_id
                            })
                          : r(t, s)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: t } = this.props,
            { rawDescription: l } = e;
        return null == l
            ? null
            : (0, n.jsx)('div', {
                  className: o()(R.embedDescription, R.embedMargin),
                  children: t(e, l, !1)
              });
    }
    renderThumbnail() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { thumbnail: t },
                maxThumbnailWidth: l,
                maxThumbnailHeight: r,
                renderImageComponent: i,
                autoPlayGif: s
            } = this.props,
            { sourceMetadata: o } = this.state;
        return null == t
            ? null
            : (0, n.jsx)(A.G.Consumer, {
                  children: (n) => {
                      let { disableAnimations: a } = n;
                      return i({
                          containerClassName: R.embedThumbnail,
                          src: (0, O.q)(t),
                          original: t.url,
                          width: t.width,
                          height: t.height,
                          maxWidth: l,
                          maxHeight: r,
                          shouldLink: e,
                          autoPlay: s && !a,
                          sourceMetadata: o,
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
            r = null;
        return (
            t.forEach((t) => {
                let { rawName: n, rawValue: i, inline: s } = t;
                s || null == r || (l.push(r), (r = null)), null == r && (r = []), r.push([this.props.renderTitle(e, n), this.props.renderDescription(e, i, !0)]), (3 !== r.length && s) || (l.push(r), (r = null));
            }),
            null != r && l.push(r),
            (0, n.jsx)('div', {
                className: R.embedFields,
                children: l.map((e, t) => {
                    let { length: l } = e;
                    return e.map((e, r) => {
                        let [i, s] = e;
                        return (0, n.jsxs)(
                            'div',
                            {
                                className: R.embedField,
                                style: {
                                    gridColumn: (function (e, t) {
                                        let l = 12 / t,
                                            r = e * l;
                                        return ''.concat(r + 1, ' / ').concat(r + l + 1);
                                    })(r, l)
                                },
                                children: [
                                    (0, n.jsx)('div', {
                                        className: R.embedFieldName,
                                        children: i
                                    }),
                                    (0, n.jsx)('div', {
                                        className: R.embedFieldValue,
                                        children: s
                                    })
                                ]
                            },
                            ''.concat(t, '-').concat(r)
                        );
                    });
                })
            })
        );
    }
    renderImages() {
        let { hiddenSpoiler: e = !1, isVisible: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { embed: l } = this.props,
            { maxMediaHeight: r } = this.state;
        if (null == l.images) return null;
        let [i, s, o, a] = l.images.map((r) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: t,
                image: r,
                isGalleryImage: !0,
                allImages: l.images
            })
        );
        return null == i && null == s && null == o && null == a
            ? null
            : (0, n.jsxs)('div', {
                  className: R.embedGalleryImagesWrapper,
                  style: { height: r },
                  children: [
                      (0, n.jsxs)('div', {
                          className: R.embedGallerySide,
                          children: [i, null != a && o]
                      }),
                      (0, n.jsxs)('div', {
                          className: R.embedGallerySide,
                          children: [s, null == a && null != o && o, null != a && a]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: t, downloadURL: l, isVisualMediaType: r, channelId: i } = e;
        return (0, n.jsx)('div', {
            className: o()(D.hoverButtonGroup, {
                [D.nonMediaMosaicItem]: !r,
                [D.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, n.jsx)(c.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: i,
                className: o()(D.hoverButton, { [D.selected]: this.state.showImageAppMenu }),
                imageUrl: l,
                mimeType: t
            })
        });
    }
    handleImageHover(e, t, l) {
        if (l) {
            if (e && !this.state.isImageHovered) {
                var r, n;
                this.setState({ isImageHovered: !0 });
                let e = I.Z.getChannel(null === (r = this.props.message) || void 0 === r ? void 0 : r.channel_id);
                this.props.showImageRecs &&
                    (0, u.a)({
                        channelId: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : '',
                        location: a.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    S.default.track(H.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, t, l, r, i;
        let { hiddenSpoiler: s = !1, isVisible: a = !0, image: d, isGalleryImage: u = !1, alt: c = L.NW.string(L.t.X4IxWF), allImages: h = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: g, className: b, autoPlayGif: v } = this.props,
            { maxMediaWidth: y, maxMediaHeight: w, sourceMetadata: j } = this.state;
        if (null == d) return null;
        let I = (0, O.q)(d),
            { srcToOnClickOverride: S, srcToHandlePreloadImage: P } =
                null == h
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {}
                      }
                    : (0, x.J)(
                          h.map((e) =>
                              F(W({}, (0, p.Hv)(e, j, 'IMAGE')), {
                                  original: e.url,
                                  srcIsAnimated: e.srcIsAnimated
                              })
                          ),
                          {},
                          'Embed'
                      ),
            N = f.ZP.isAnimated({
                src: (0, O.q)(d),
                original: d.url,
                animated: !1,
                srcIsAnimated: d.srcIsAnimated
            }),
            C = {
                containerClassName: o()(b, {
                    [R.embedMedia]: !u,
                    [R.embedImage]: !u,
                    [R.galleryImage]: u
                }),
                imageContainerClassName: u ? R.galleryImageContainer : void 0,
                imageClassName: u ? R.embedGalleryImageElement : void 0,
                src: (0, O.q)(d),
                alt: c,
                responsive: !0,
                limitResponsiveWidth: !u,
                width: d.width,
                height: d.height,
                maxWidth: y,
                maxHeight: w,
                original: d.url,
                shouldLink: a,
                disableAltTextDisplay: !0,
                hiddenSpoilers: s,
                placeholder: d.placeholder,
                placeholderVersion: d.placeholderVersion,
                srcIsAnimated: d.srcIsAnimated
            },
            E = null !== (r = null === (e = d.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== r ? r : '';
        'jpg' === E && (E = 'jpeg');
        let T = null != d && !f.uo.test(null == d ? void 0 : d.url) && !(d.srcIsAnimated && f.YG.test(null == d ? void 0 : d.url)) && !(d.srcIsAnimated && f.FH.test(null == d ? void 0 : d.url)),
            M = !0 !== this.props.isSearchResult && a && (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) != null && (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) !== void 0 && T && !(null != (i = d) && (i.width <= k.OF || i.height <= k.OF)) && null != E;
        return (0, n.jsx)(m.h.Consumer, {
            children: (e) =>
                (0, n.jsx)(
                    A.G.Consumer,
                    {
                        children: (t) => {
                            let { disableAnimations: l } = t;
                            return g(
                                F(W({}, C), {
                                    autoPlay: v && !l && !s,
                                    renderAccessory: N ? e : null,
                                    handlePreloadImage: P[I],
                                    onClick: S[I],
                                    onMouseEnter: () => this.handleImageHover(!0, d, M),
                                    onMouseLeave: () => this.handleImageHover(!1, d, M),
                                    renderAdjacentContent: () => {
                                        var e, t;
                                        return !0 === this.props.showImageRecs && M
                                            ? this.renderImageHoverButtons({
                                                  mimeType: ['image', E],
                                                  downloadURL: null !== (t = d.proxyURL) && void 0 !== t ? t : d.url,
                                                  isVisualMediaType: null != d,
                                                  channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id
                                              })
                                            : null;
                                    },
                                    sourceMetadata: j,
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
        let { gifv: e = !1, isVisible: t = !0, hiddenSpoiler: l = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: r, thumbnail: i, video: s, provider: o },
                renderVideoComponent: a,
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
                  : (0, n.jsx)(A.G.Consumer, {
                        children: (e) => {
                            let { disableAnimations: o } = e;
                            return (0, n.jsx)(Z, {
                                className: R.embedMedia,
                                href: r,
                                thumbnail: i,
                                video: s,
                                maxWidth: p,
                                maxHeight: g,
                                responsive: !0,
                                autoPlay: !l && h && !o && t,
                                renderImageComponent: d,
                                playable: t,
                                hiddenSpoilers: l,
                                disableAltTextDisplay: null != m,
                                placeholder: s.placeholder,
                                placeholderVersion: s.placeholderVersion,
                                sourceMetadata: b
                            });
                        }
                    })
              : (0, n.jsx)(G, {
                    className: R.embedMedia,
                    href: r,
                    allowFullScreen: c,
                    thumbnail: i,
                    video: s,
                    provider: null == o ? void 0 : o.name,
                    maxWidth: p,
                    maxHeight: g,
                    responsive: !0,
                    renderImageComponent: d,
                    renderVideoComponent: a,
                    renderLinkComponent: u,
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
            return (0, n.jsxs)('div', {
                className: o()(R.embedFooter, R.embedMargin),
                children: [
                    null != l
                        ? (0, n.jsx)('img', {
                              alt: '',
                              className: R.embedFooterIcon,
                              src: l
                          })
                        : null,
                    (0, n.jsxs)('span', {
                        className: R.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != t
                                ? (0, n.jsx)('span', {
                                      className: R.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != t ? (0, N.Y4)(t) : null
                        ]
                    })
                ]
            });
        }
        if (null != t)
            return (0, n.jsx)('div', {
                className: o()(R.embedFooter, R.embedMargin),
                children: (0, n.jsx)('span', {
                    className: R.embedFooterText,
                    children: (0, N.Y4)(t)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: t } = this.props,
            { isVisible: l } = this.state;
        switch (t.type) {
            case H.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: l
                });
            case H.hBH.VIDEO:
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
        let { embed: l, hideMedia: r } = this.props,
            { isVisible: n } = this.state,
            i = this.renderProvider(n),
            s = this.renderAuthor(n),
            o = this.renderTitle(n);
        switch (l.type) {
            case H.hBH.IMAGE:
            case H.hBH.VIDEO:
            case H.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let a = this.renderFields();
        r || (t = this.renderMedia(!n));
        let d = this.renderFooter(),
            u = null == t;
        return (
            l.type === H.hBH.RICH && (u = null == l.video),
            {
                provider: i,
                author: s,
                title: o,
                description: e,
                thumbnail: !r && u ? this.renderThumbnail(n) : null,
                fields: a,
                media: t,
                footer: d
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: t, images: l, video: r, type: n, thumbnail: i }
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: o } = this.state,
            a = null != t ? t : r;
        if (null == a) return;
        let { width: d } = (0, E.Tj)({
            width: a.width,
            height: a.height,
            maxWidth: s,
            maxHeight: o
        });
        if (!e && (n === H.hBH.VIDEO || d >= 300)) return d + 32;
        if (n === H.hBH.RICH && void 0 !== l) return 520;
        if (n === H.hBH.GIFV) {
            var u, c, h, m;
            let { width: e } = (0, E.Tj)({
                width: null !== (c = null !== (u = null == r ? void 0 : r.width) && void 0 !== u ? u : null == i ? void 0 : i.width) && void 0 !== c ? c : 0,
                height: null !== (m = null !== (h = null == r ? void 0 : r.height) && void 0 !== h ? h : null == i ? void 0 : i.height) && void 0 !== m ? m : 0,
                maxWidth: s,
                maxHeight: o
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
        return !e && (0, C.dY)(t);
    }
    renderSuppressButton(e) {
        return (0, n.jsx)(d.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: R.embedSuppressButton,
            onClick: e,
            'aria-label': L.NW.string(L.t.GT3fNz),
            children: (0, n.jsx)(d.Dio, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === H.hBH.IMAGE || e.type === H.hBH.VIDEO || e.type === H.hBH.GIFV || ((e.type === H.hBH.RICH || e.type === H.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: t } = this.props.embed;
        return (null != t && '#ffffff' === t.toLowerCase()) || e ? void 0 : t;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: t, images: l, video: r, type: n }
            } = this.props,
            { maxMediaWidth: i, maxMediaHeight: s } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === l && n !== H.hBH.RICH) {
            let e = null != t ? t : r;
            if (void 0 !== e) {
                var a;
                let { minWidth: t, minHeight: l } = null !== (a = this.getMinSize()) && void 0 !== a ? a : {},
                    { width: r } = (0, E.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: i,
                        maxHeight: s,
                        minWidth: t,
                        minHeight: l
                    });
                o = r;
            }
        }
        return {
            maxWidth: void 0 === o ? 'max-content' : o,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: t, obscureReason: l, className: r } = this.props;
        return null != t.provider && M.j.includes(t.provider.name)
            ? (0, n.jsx)(M.Z, {
                  embed: t,
                  className: r
              })
            : (0, w.Z)(t)
              ? (0, n.jsx)(j.Z, {
                    embed: t,
                    className: r
                })
              : (null === (e = t.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && t.type === H.hBH.RICH
                ? (0, n.jsx)(g.Z, {
                      embed: t,
                      className: r
                  })
                : this.isInline()
                  ? null != l
                      ? (0, n.jsx)(h.Z, {
                            type: h.Z.Types.ATTACHMENT,
                            reason: l,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!0),
                            obscurityControlClassName: o()({ [R.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                            children: this.renderInlineMediaEmbed
                        })
                      : this.renderInlineMediaEmbed()
                  : null != l
                    ? (0, n.jsx)(h.Z, {
                          type: h.Z.Types.EMBED,
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
            B(
                this,
                'state',
                W(
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
                    (0, C.vP)(this.props.embed)
                )
            ),
            B(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            B(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            B(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: l, className: r } = t.props,
                    i = t.getMaxWidth(!0);
                return (0, n.jsx)('div', {
                    'aria-hidden': e,
                    className: o()(R.inlineMediaEmbed, r, {
                        [R.spoilerAttachment]: l === y.wk.SPOILER,
                        [R.hiddenExplicitAttachment]: null != l && [y.wk.EXPLICIT_CONTENT, y.wk.POTENTIAL_EXPLICIT_CONTENT].includes(l),
                        [R.isHidden]: e,
                        [R.justifyAuto]: t.usesJustifiedAutoStyle(),
                        [_.embedFlexGrow]: null != i
                    }),
                    style: { maxWidth: i },
                    children: t.renderMedia(e)
                });
            }),
            B(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: l, onSuppressEmbed: r, obscureReason: i } = t.props,
                    { provider: s, author: a, title: d, description: u, fields: c, thumbnail: h, media: m, footer: p } = t.renderAll();
                return (0, n.jsx)('article', {
                    className: o()(l, _.embedFlexGrow, R.embedFull, V.markup, {
                        [R.isHidden]: e,
                        [R.spoilerEmbed]: i === y.wk.SPOILER,
                        [R.hiddenExplicitEmbed]: null != i && [y.wk.EXPLICIT_CONTENT, y.wk.POTENTIAL_EXPLICIT_CONTENT].includes(i),
                        [R.justifyAuto]: t.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: t.getEmbedColor(e),
                        maxWidth: t.getMaxWidth(!1)
                    },
                    children: (0, n.jsx)('div', {
                        className: R.gridContainer,
                        children: (0, n.jsxs)('div', {
                            className: o()({
                                [R.grid]: !0,
                                [R.hasThumbnail]: null != h
                            }),
                            children: [null != r ? t.renderSuppressButton(r) : null, s, a, d, u, c, m, h, p]
                        })
                    })
                });
            });
    }
}
B(U, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
