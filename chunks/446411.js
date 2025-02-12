t.d(l, {
    BC: () => O,
    ZP: () => G
}),
    t(47120),
    t(653041);
var n,
    i = t(200651),
    r = t(192379),
    s = t(120356),
    a = t.n(s),
    o = t(228458),
    d = t(481060),
    u = t(399654),
    h = t(370298),
    m = t(95398),
    c = t(947849),
    p = t(768494),
    g = t(624195),
    v = t(44824),
    b = t(124347),
    x = t(283756),
    f = t(169525),
    y = t(94396),
    I = t(785992),
    w = t(400266),
    C = t(592125),
    j = t(52824),
    N = t(626135),
    T = t(585483),
    E = t(55935),
    S = t(408433),
    M = t(956664),
    A = t(468846),
    H = t(401419),
    k = t(249458),
    L = t(981631),
    P = t(217702),
    R = t(388032),
    V = t(874213),
    _ = t(79698),
    B = t(642367),
    F = t(530806);
function W(e, l, t) {
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
function O(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: s, maxWidth: o, maxHeight: d, thumbnail: u, video: h, provider: m, allowFullScreen: c = !0, responsive: p = !1, renderImageComponent: g, renderVideoComponent: v, renderLinkComponent: b, playable: f = !0, autoPlay: y = !1, autoMute: I, volume: w, onPlay: C, onPause: N, onEnded: E, onControlsHide: S, onControlsShow: H, onVolumeChange: k, onMute: P, href: R, placeholder: _, placeholderVersion: B, sourceMetadata: F } = e,
        [W, O] = r.useState(y),
        D = null != h && null == h.proxyURL,
        G = r.useCallback(() => O(!1), [O]),
        Z = (e) => {
            e.preventDefault(), e.stopPropagation(), null == C || C(!1), O(!0), D && (T.S.dispatch(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED), T.S.subscribeOnce(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G));
        };
    r.useEffect(
        () => () => {
            D && T.S.unsubscribe(L.CkL.VIDEO_EMBED_PLAYBACK_STARTED, G);
        },
        [D, G]
    );
    let { width: U, height: Y } = u;
    null != h && ((U = h.width), (Y = h.height));
    let q = (0, M.Tj)({
        width: U,
        height: Y,
        maxWidth: o,
        maxHeight: d
    });
    (U = Math.max(q.width, 150)), (Y = Math.max(q.height, 144));
    let z = (0, j.q)(u);
    if (null != h && null != h.proxyURL)
        return (0, i.jsx)('div', {
            className: a()(V.embedVideo, n),
            children: v({
                poster: z,
                src: h.proxyURL,
                placeholder: _,
                placeholderVersion: B,
                width: U,
                height: Y,
                responsive: p,
                autoPlay: y,
                onEnded: E,
                naturalWidth: h.width,
                naturalHeight: h.height,
                onVolumeChange: k,
                playable: f,
                autoMute: I,
                volume: w,
                onPlay: C,
                onPause: N,
                onMute: P,
                onControlsHide: S,
                onControlsShow: H,
                sourceMetadata: F
            })
        });
    if (W && null != h) {
        let e;
        let l = !0 === I || ('function' == typeof I && I()),
            t = {
                width: U,
                height: Y
            },
            r = {
                width: U,
                height: Y
            };
        if (p) {
            let l = 0 !== U ? Y / U : 1;
            (t = {
                maxWidth: o,
                maxHeight: d,
                width: void 0,
                height: void 0
            }),
                (r = {
                    paddingBottom: ''.concat(100 * l, '%'),
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
        return (0, i.jsx)('div', {
            className: n,
            style: t,
            children: (0, i.jsx)('div', {
                className: a()(V.embedVideo, s),
                style: r,
                children: (0, i.jsx)(A.ZP, {
                    provider: m,
                    src: h.url,
                    style: e,
                    width: U,
                    height: Y,
                    allowFullScreen: c,
                    autoMute: l
                })
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: a()(V.embedVideo, n),
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
                containerClassName: V.embedVideoImageComponent,
                imageClassName: V.embedVideoImageComponentInner,
                placeholder: _,
                placeholderVersion: B,
                onClick: f && null != h ? Z : null,
                sourceMetadata: F,
                analyticsSource: 'EmbedVideo'
            }),
            (0, i.jsx)('div', {
                className: V.embedVideoActions,
                children: (0, i.jsx)('div', {
                    className: V.centerContent,
                    children: f
                        ? (0, i.jsx)(x.Z, {
                              onPlay: null != h ? Z : null,
                              externalURL: R,
                              renderLinkComponent: b,
                              messageId: null == F ? void 0 : null === (l = F.message) || void 0 === l ? void 0 : l.id,
                              channelId: null == F ? void 0 : null === (t = F.message) || void 0 === t ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function D(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: r, maxHeight: s, thumbnail: o, video: d, renderImageComponent: u, responsive: h, alt: m, disableAltTextDisplay: c = !1, playable: p = !0, hiddenSpoilers: g, placeholder: b, placeholderVersion: x, sourceMetadata: f } = e;
    return (0, i.jsx)(v.Z, {
        className: a()(V.embedVideo, l),
        original: t,
        poster: (0, j.q)(o),
        src: (0, j.q)(d),
        alt: m,
        width: o.width,
        height: o.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: r,
        maxHeight: s,
        responsive: h,
        autoPlay: n,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: g,
        disableAltTextDisplay: c,
        placeholder: b,
        placeholderVersion: x,
        sourceMetadata: f
    });
}
class G extends (n = r.PureComponent) {
    renderProvider() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            {
                embed: { provider: l },
                renderLinkComponent: t,
                message: n
            } = this.props;
        return null == l
            ? null
            : (0, i.jsx)('div', {
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
                          : (0, i.jsx)('span', { children: l.name })
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
            : (0, i.jsxs)('div', {
                  className: a()(V.embedAuthor, V.embedMargin),
                  children: [
                      null != l.iconProxyURL
                          ? (0, i.jsx)('img', {
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
                          : (0, i.jsx)('span', {
                                className: V.embedAuthorName,
                                children: l.name
                            })
                  ]
              });
    }
    renderTitle() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            { embed: l, renderLinkComponent: t, renderTitle: n, message: r } = this.props,
            { rawTitle: s, url: o } = l;
        return null == s
            ? null
            : (0, i.jsx)('div', {
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
                                messageId: null == r ? void 0 : r.id,
                                channelId: null == r ? void 0 : r.channel_id
                            })
                          : n(l, s)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
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
                renderImageComponent: r,
                autoPlayGif: s
            } = this.props,
            { sourceMetadata: a } = this.state;
        return null == l
            ? null
            : (0, i.jsx)(k.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: o } = i;
                      return r({
                          containerClassName: V.embedThumbnail,
                          src: (0, j.q)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
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
            { fields: l } = e;
        if (null == l || 0 === l.length) return null;
        let t = [],
            n = null;
        return (
            l.forEach((l) => {
                let { rawName: i, rawValue: r, inline: s } = l;
                s || null == n || (t.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, i), this.props.renderDescription(e, r, !0)]), (3 !== n.length && s) || (t.push(n), (n = null));
            }),
            null != n && t.push(n),
            (0, i.jsx)('div', {
                className: V.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [r, s] = e;
                        return (0, i.jsxs)(
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
                                    (0, i.jsx)('div', {
                                        className: V.embedFieldName,
                                        children: r
                                    }),
                                    (0, i.jsx)('div', {
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
        let [r, s, a, o] = t.images.map((n) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: n,
                isGalleryImage: !0,
                allImages: t.images
            })
        );
        return null == r && null == s && null == a && null == o
            ? null
            : (0, i.jsxs)('div', {
                  className: V.embedGalleryImagesWrapper,
                  style: { height: n },
                  children: [
                      (0, i.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [r, null != o && a]
                      }),
                      (0, i.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [s, null == o && null != a && a, null != o && o]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: l, downloadURL: t, isVisualMediaType: n, channelId: r } = e;
        return (0, i.jsx)('div', {
            className: a()(_.hoverButtonGroup, {
                [_.nonMediaMosaicItem]: !n,
                [_.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, i.jsx)(h.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: r,
                className: a()(_.hoverButton, { [_.selected]: this.state.showImageAppMenu }),
                imageUrl: t,
                mimeType: l
            })
        });
    }
    handleImageHover(e, l, t) {
        if (t) {
            if (e && !this.state.isImageHovered) {
                var n, i;
                this.setState({ isImageHovered: !0 });
                let e = C.Z.getChannel(null === (n = this.props.message) || void 0 === n ? void 0 : n.channel_id);
                this.props.showImageRecs &&
                    (0, u.a)({
                        channelId: null !== (i = null == e ? void 0 : e.id) && void 0 !== i ? i : '',
                        location: o.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    N.default.track(L.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, l, t, n, r;
        let { hiddenSpoiler: s = !1, isVisible: o = !0, image: d, isGalleryImage: u = !1, alt: h = R.intl.string(R.t.X4IxWF), allImages: m = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: g, className: v, autoPlayGif: x } = this.props,
            { maxMediaWidth: f, maxMediaHeight: I, sourceMetadata: w } = this.state;
        if (null == d) return null;
        let C = (0, j.q)(d),
            { srcToOnClickOverride: N, srcToHandlePreloadImage: T } =
                null == m
                    ? {
                          srcToOnClickOverride: {},
                          srcToHandlePreloadImage: {}
                      }
                    : (0, y.J)(
                          m.map((e) => ({
                              ...(0, p.Hv)(e, w, 'IMAGE'),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated
                          })),
                          {},
                          'Embed'
                      ),
            E = b.ZP.isAnimated({
                src: (0, j.q)(d),
                original: d.url,
                animated: !1,
                srcIsAnimated: d.srcIsAnimated
            }),
            S = {
                containerClassName: a()(v, {
                    [V.embedMedia]: !u,
                    [V.embedImage]: !u,
                    [V.galleryImage]: u
                }),
                imageContainerClassName: u ? V.galleryImageContainer : void 0,
                imageClassName: u ? V.embedGalleryImageElement : void 0,
                src: (0, j.q)(d),
                alt: h,
                responsive: !0,
                limitResponsiveWidth: !u,
                width: d.width,
                height: d.height,
                maxWidth: f,
                maxHeight: I,
                original: d.url,
                shouldLink: o,
                disableAltTextDisplay: !0,
                hiddenSpoilers: s,
                placeholder: d.placeholder,
                placeholderVersion: d.placeholderVersion,
                srcIsAnimated: d.srcIsAnimated
            },
            M = null !== (n = null === (e = d.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== n ? n : '';
        'jpg' === M && (M = 'jpeg');
        let A = null != d && !b.uo.test(null == d ? void 0 : d.url) && !(d.srcIsAnimated && b.YG.test(null == d ? void 0 : d.url)) && !(d.srcIsAnimated && b.FH.test(null == d ? void 0 : d.url)),
            H = !0 !== this.props.isSearchResult && o && (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) != null && (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) !== void 0 && A && !(null != (r = d) && (r.width <= P.OF || r.height <= P.OF)) && null != M;
        return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
                (0, i.jsx)(
                    k.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return g({
                                ...S,
                                autoPlay: x && !t && !s,
                                renderAccessory: E ? e : null,
                                handlePreloadImage: T[C],
                                onClick: N[C],
                                onMouseEnter: () => this.handleImageHover(!0, d, H),
                                onMouseLeave: () => this.handleImageHover(!1, d, H),
                                renderAdjacentContent: () => {
                                    var e, l;
                                    return !0 === this.props.showImageRecs && H
                                        ? this.renderImageHoverButtons({
                                              mimeType: ['image', M],
                                              downloadURL: null !== (l = d.proxyURL) && void 0 !== l ? l : d.url,
                                              isVisualMediaType: null != d,
                                              channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id
                                          })
                                        : null;
                                },
                                sourceMetadata: w,
                                analyticsSource: 'Embed'
                            });
                        }
                    },
                    d.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: l = !0, hiddenSpoiler: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: n, thumbnail: r, video: s, provider: a },
                renderVideoComponent: o,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: h,
                autoPlayGif: m,
                obscureReason: c
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: g, sourceMetadata: v } = this.state;
        return null == n || null == r
            ? null
            : e
              ? null == s
                  ? null
                  : (0, i.jsx)(k.G.Consumer, {
                        children: (e) => {
                            let { disableAnimations: a } = e;
                            return (0, i.jsx)(D, {
                                className: V.embedMedia,
                                href: n,
                                thumbnail: r,
                                video: s,
                                maxWidth: p,
                                maxHeight: g,
                                responsive: !0,
                                autoPlay: !t && m && !a && l,
                                renderImageComponent: d,
                                playable: l,
                                hiddenSpoilers: t,
                                disableAltTextDisplay: null != c,
                                placeholder: s.placeholder,
                                placeholderVersion: s.placeholderVersion,
                                sourceMetadata: v
                            });
                        }
                    })
              : (0, i.jsx)(O, {
                    className: V.embedMedia,
                    href: n,
                    allowFullScreen: h,
                    thumbnail: r,
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
                    sourceMetadata: v
                });
    }
    renderFooter() {
        let { footer: e, timestamp: l } = this.props.embed;
        if (null != e) {
            let t = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, i.jsxs)('div', {
                className: a()(V.embedFooter, V.embedMargin),
                children: [
                    null != t
                        ? (0, i.jsx)('img', {
                              alt: '',
                              className: V.embedFooterIcon,
                              src: t
                          })
                        : null,
                    (0, i.jsxs)('span', {
                        className: V.embedFooterText,
                        children: [
                            e.text,
                            null != e.text && null != l
                                ? (0, i.jsx)('span', {
                                      className: V.embedFooterSeparator,
                                      children: '\u2022'
                                  })
                                : null,
                            null != l ? (0, E.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, i.jsx)('div', {
                className: a()(V.embedFooter, V.embedMargin),
                children: (0, i.jsx)('span', {
                    className: V.embedFooterText,
                    children: (0, E.Y4)(l)
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
        let e, l;
        let { embed: t, hideMedia: n } = this.props,
            { isVisible: i } = this.state,
            r = this.renderProvider(i),
            s = this.renderAuthor(i),
            a = this.renderTitle(i);
        switch (t.type) {
            case L.hBH.IMAGE:
            case L.hBH.VIDEO:
            case L.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let o = this.renderFields();
        n || (l = this.renderMedia(!i));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === L.hBH.RICH && (u = null == t.video),
            {
                provider: r,
                author: s,
                title: a,
                description: e,
                thumbnail: !n && u ? this.renderThumbnail(i) : null,
                fields: o,
                media: l,
                footer: d
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: n, type: i, thumbnail: r }
            } = this.props,
            { maxMediaWidth: s, maxMediaHeight: a } = this.state,
            o = null != l ? l : n;
        if (null == o) return;
        let { width: d } = (0, M.Tj)({
            width: o.width,
            height: o.height,
            maxWidth: s,
            maxHeight: a
        });
        if (!e && (i === L.hBH.VIDEO || d >= 300)) return d + 32;
        if (i === L.hBH.RICH && void 0 !== t) return 520;
        if (i === L.hBH.GIFV) {
            var u, h, m, c;
            let { width: e } = (0, M.Tj)({
                width: null !== (h = null !== (u = null == n ? void 0 : n.width) && void 0 !== u ? u : null == r ? void 0 : r.width) && void 0 !== h ? h : 0,
                height: null !== (c = null !== (m = null == n ? void 0 : n.height) && void 0 !== m ? m : null == r ? void 0 : r.height) && void 0 !== c ? c : 0,
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
        return !e && (0, S.dY)(l);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(d.P3F, {
            focusProps: { offset: { bottom: 4 } },
            className: V.embedSuppressButton,
            onClick: e,
            'aria-label': R.intl.string(R.t.GT3fNz),
            children: (0, i.jsx)(d.Dio, {
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
                embed: { image: l, images: t, video: n, type: i }
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: s } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let a = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === a && void 0 === t && i !== L.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
                var o;
                let { minWidth: l, minHeight: t } = null !== (o = this.getMinSize()) && void 0 !== o ? o : {},
                    { width: n } = (0, M.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: r,
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
            ? (0, i.jsx)(H.Z, {
                  embed: l,
                  className: n
              })
            : (0, I.Z)(l)
              ? (0, i.jsx)(w.Z, {
                    embed: l,
                    className: n
                })
              : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && l.type === L.hBH.RICH
                ? (0, i.jsx)(g.Z, {
                      embed: l,
                      className: n
                  })
                : this.isInline()
                  ? null != t
                      ? (0, i.jsx)(m.Z, {
                            type: m.Z.Types.ATTACHMENT,
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
                    ? (0, i.jsx)(m.Z, {
                          type: m.Z.Types.EMBED,
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
            W(this, 'state', {
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
                },
                ...(0, S.vP)(this.props.embed)
            }),
            W(this, 'onReveal', () => {
                this.setState({ isVisible: !0 });
            }),
            W(this, 'onToggleObscurity', () => {
                this.setState({ isVisible: !this.state.isVisible });
            }),
            W(this, 'renderInlineMediaEmbed', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { obscureReason: t, className: n } = l.props,
                    r = l.getMaxWidth(!0);
                return (0, i.jsx)('div', {
                    'aria-hidden': e,
                    className: a()(V.inlineMediaEmbed, n, {
                        [V.spoilerAttachment]: t === f.wk.SPOILER,
                        [V.hiddenExplicitAttachment]: null != t && [f.wk.EXPLICIT_CONTENT, f.wk.POTENTIAL_EXPLICIT_CONTENT].includes(t),
                        [V.isHidden]: e,
                        [V.justifyAuto]: l.usesJustifiedAutoStyle(),
                        [F.embedFlexGrow]: null != r
                    }),
                    style: { maxWidth: r },
                    children: l.renderMedia(e)
                });
            }),
            W(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: r } = l.props,
                    { provider: s, author: o, title: d, description: u, fields: h, thumbnail: m, media: c, footer: p } = l.renderAll();
                return (0, i.jsx)('article', {
                    className: a()(t, F.embedFlexGrow, V.embedFull, B.markup, {
                        [V.isHidden]: e,
                        [V.spoilerEmbed]: r === f.wk.SPOILER,
                        [V.hiddenExplicitEmbed]: null != r && [f.wk.EXPLICIT_CONTENT, f.wk.POTENTIAL_EXPLICIT_CONTENT].includes(r),
                        [V.justifyAuto]: l.usesJustifiedAutoStyle()
                    }),
                    'aria-hidden': e,
                    style: {
                        borderLeftColor: l.getEmbedColor(e),
                        maxWidth: l.getMaxWidth(!1)
                    },
                    children: (0, i.jsx)('div', {
                        className: V.gridContainer,
                        children: (0, i.jsxs)('div', {
                            className: a()({
                                [V.grid]: !0,
                                [V.hasThumbnail]: null != m
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, s, o, d, u, h, c, m, p]
                        })
                    })
                });
            });
    }
}
W(G, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
