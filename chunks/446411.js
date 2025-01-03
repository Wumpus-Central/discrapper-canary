t.d(l, {
    BC: function () {
        return G;
    },
    ZP: function () {
        return O;
    }
}),
    t(47120),
    t(653041);
var n,
    i = t(200651),
    r = t(192379),
    a = t(120356),
    o = t.n(a),
    s = t(892814),
    d = t(481060),
    u = t(399654),
    m = t(370298),
    h = t(95398),
    c = t(947849),
    p = t(768494),
    b = t(624195),
    g = t(44824),
    v = t(124347),
    f = t(283756),
    x = t(169525),
    I = t(94396),
    y = t(785992),
    _ = t(400266),
    w = t(592125),
    C = t(52824),
    T = t(626135),
    E = t(585483),
    N = t(55935),
    S = t(408433),
    A = t(956664),
    j = t(468846),
    M = t(401419),
    H = t(249458),
    F = t(981631),
    k = t(217702),
    L = t(388032),
    V = t(340702),
    B = t(740909),
    R = t(665162),
    P = t(803205);
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
function G(e) {
    var l, t;
    let { className: n, iframeWrapperClassName: a, maxWidth: s, maxHeight: d, thumbnail: u, video: m, provider: h, allowFullScreen: c = !0, responsive: p = !1, renderImageComponent: b, renderVideoComponent: g, renderLinkComponent: v, playable: x = !0, autoPlay: I = !1, autoMute: y, volume: _, onPlay: w, onPause: T, onEnded: N, onControlsHide: S, onControlsShow: M, onVolumeChange: H, onMute: k, href: L, placeholder: B, placeholderVersion: R, sourceMetadata: P } = e,
        [W, G] = r.useState(I),
        D = null != m && null == m.proxyURL,
        O = r.useCallback(() => G(!1), [G]),
        U = (e) => {
            e.preventDefault(), e.stopPropagation(), null == w || w(!1), G(!0), D && (E.S.dispatch(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED), E.S.subscribeOnce(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, O));
        };
    r.useEffect(
        () => () => {
            D && E.S.unsubscribe(F.CkL.VIDEO_EMBED_PLAYBACK_STARTED, O);
        },
        [D, O]
    );
    let { width: Z, height: z } = u;
    null != m && ((Z = m.width), (z = m.height));
    let Y = (0, A.Tj)({
        width: Z,
        height: z,
        maxWidth: s,
        maxHeight: d
    });
    (Z = Math.max(Y.width, 150)), (z = Math.max(Y.height, 144));
    let q = (0, C.q)(u);
    if (null != m && null != m.proxyURL)
        return (0, i.jsx)('div', {
            className: o()(V.embedVideo, n),
            children: g({
                poster: q,
                src: m.proxyURL,
                placeholder: B,
                placeholderVersion: R,
                width: Z,
                height: z,
                responsive: p,
                autoPlay: I,
                onEnded: N,
                naturalWidth: m.width,
                naturalHeight: m.height,
                onVolumeChange: H,
                playable: x,
                autoMute: y,
                volume: _,
                onPlay: w,
                onPause: T,
                onMute: k,
                onControlsHide: S,
                onControlsShow: M,
                sourceMetadata: P
            })
        });
    if (W && null != m) {
        let e;
        let l = !0 === y || ('function' == typeof y && y()),
            t = {
                width: Z,
                height: z
            },
            r = {
                width: Z,
                height: z
            };
        if (p) {
            let l = 0 !== Z ? z / Z : 1;
            (t = {
                maxWidth: s,
                maxHeight: d,
                width: void 0,
                height: void 0
            }),
                (r = {
                    paddingBottom: ''.concat(100 * l, '%'),
                    maxWidth: Z
                }),
                (e = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    maxWidth: Z,
                    maxHeight: z
                });
        }
        return (0, i.jsx)('div', {
            className: n,
            style: t,
            children: (0, i.jsx)('div', {
                className: o()(V.embedVideo, a),
                style: r,
                children: (0, i.jsx)(j.ZP, {
                    provider: h,
                    src: m.url,
                    style: e,
                    width: Z,
                    height: z,
                    allowFullScreen: c,
                    autoMute: l
                })
            })
        });
    }
    return (0, i.jsxs)('div', {
        className: o()(V.embedVideo, n),
        style: p
            ? { maxWidth: Z }
            : {
                  width: Z,
                  height: z
              },
        children: [
            b({
                src: q,
                width: Z,
                height: z,
                maxWidth: Z,
                maxHeight: z,
                responsive: p,
                containerClassName: V.embedVideoImageComponent,
                imageClassName: V.embedVideoImageComponentInner,
                placeholder: B,
                placeholderVersion: R,
                onClick: x && null != m ? U : null,
                sourceMetadata: P,
                analyticsSource: 'EmbedVideo'
            }),
            (0, i.jsx)('div', {
                className: V.embedVideoActions,
                children: (0, i.jsx)('div', {
                    className: V.centerContent,
                    children: x
                        ? (0, i.jsx)(f.Z, {
                              onPlay: null != m ? U : null,
                              externalURL: L,
                              renderLinkComponent: v,
                              messageId: null == P ? void 0 : null === (l = P.message) || void 0 === l ? void 0 : l.id,
                              channelId: null == P ? void 0 : null === (t = P.message) || void 0 === t ? void 0 : t.channel_id
                          })
                        : null
                })
            })
        ]
    });
}
function D(e) {
    let { className: l, href: t, autoPlay: n, maxWidth: r, maxHeight: a, thumbnail: s, video: d, renderImageComponent: u, responsive: m, alt: h, disableAltTextDisplay: c = !1, playable: p = !0, hiddenSpoilers: b, placeholder: v, placeholderVersion: f, sourceMetadata: x } = e;
    return (0, i.jsx)(g.Z, {
        className: o()(V.embedVideo, l),
        original: t,
        poster: (0, C.q)(s),
        src: (0, C.q)(d),
        alt: h,
        width: s.width,
        height: s.height,
        naturalHeight: d.height,
        naturalWidth: d.width,
        maxWidth: r,
        maxHeight: a,
        responsive: m,
        autoPlay: n,
        playable: p,
        renderImageComponent: u,
        hiddenSpoilers: b,
        disableAltTextDisplay: c,
        placeholder: v,
        placeholderVersion: f,
        sourceMetadata: x
    });
}
class O extends (n = r.PureComponent) {
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
                  className: o()(V.embedProvider, V.embedMargin),
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
                  className: o()(V.embedAuthor, V.embedMargin),
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
            { rawTitle: a, url: s } = l;
        return null == a
            ? null
            : (0, i.jsx)('div', {
                  className: o()(V.embedTitle, V.embedMargin),
                  children:
                      null != s
                          ? t({
                                className: V.embedTitleLink,
                                href: s,
                                tabIndex: e ? 0 : -1,
                                children: n(l, a),
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                messageId: null == r ? void 0 : r.id,
                                channelId: null == r ? void 0 : r.channel_id
                            })
                          : n(l, a)
              });
    }
    renderDescription() {
        let { embed: e, renderDescription: l } = this.props,
            { rawDescription: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: o()(V.embedDescription, V.embedMargin),
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
                autoPlayGif: a
            } = this.props,
            { sourceMetadata: o } = this.state;
        return null == l
            ? null
            : (0, i.jsx)(H.G.Consumer, {
                  children: (i) => {
                      let { disableAnimations: s } = i;
                      return r({
                          containerClassName: V.embedThumbnail,
                          src: (0, C.q)(l),
                          original: l.url,
                          width: l.width,
                          height: l.height,
                          maxWidth: t,
                          maxHeight: n,
                          shouldLink: e,
                          autoPlay: a && !s,
                          sourceMetadata: o,
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
                let { rawName: i, rawValue: r, inline: a } = l;
                !a && null != n && (t.push(n), (n = null)), null == n && (n = []), n.push([this.props.renderTitle(e, i), this.props.renderDescription(e, r, !0)]), (3 === n.length || !a) && (t.push(n), (n = null));
            }),
            null != n && t.push(n),
            (0, i.jsx)('div', {
                className: V.embedFields,
                children: t.map((e, l) => {
                    let { length: t } = e;
                    return e.map((e, n) => {
                        let [r, a] = e;
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
                                        children: a
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
        let [r, a, o, s] = t.images.map((n) =>
            this.renderImage({
                hiddenSpoiler: e,
                isVisible: l,
                image: n,
                isGalleryImage: !0,
                allImages: t.images
            })
        );
        return null == r && null == a && null == o && null == s
            ? null
            : (0, i.jsxs)('div', {
                  className: V.embedGalleryImagesWrapper,
                  style: { height: n },
                  children: [
                      (0, i.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [r, null != s && o]
                      }),
                      (0, i.jsxs)('div', {
                          className: V.embedGallerySide,
                          children: [a, null == s && null != o && o, null != s && s]
                      })
                  ]
              });
    }
    renderImageHoverButtons(e) {
        let { mimeType: l, downloadURL: t, isVisualMediaType: n, channelId: r } = e;
        return (0, i.jsx)('div', {
            className: o()(B.hoverButtonGroup, {
                [B.nonMediaMosaicItem]: !n,
                [B.forceShowHover]: this.state.showImageAppMenu
            }),
            children: (0, i.jsx)(m.Z, {
                toggleShowMenu: () => {
                    this.setState({ showImageAppMenu: !this.state.showImageAppMenu });
                },
                showMenu: this.state.showImageAppMenu,
                channelId: r,
                className: o()(B.hoverButton, { [B.selected]: this.state.showImageAppMenu }),
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
                let e = w.Z.getChannel(null === (n = this.props.message) || void 0 === n ? void 0 : n.channel_id);
                this.props.showImageRecs &&
                    (0, u.a)({
                        channelId: null !== (i = null == e ? void 0 : e.id) && void 0 !== i ? i : '',
                        location: s.I.CONTEXTUAL_IMAGE,
                        withCommands: !0
                    }),
                    T.default.track(F.rMx.IMAGE_HOVERED, {
                        guild_id: null == e ? void 0 : e.guild_id,
                        channel_id: null == e ? void 0 : e.id,
                        image_recommendations_shown: this.props.showImageRecs
                    });
            } else !e && this.state.isImageHovered && this.setState({ isImageHovered: !1 });
        }
    }
    renderImage() {
        var e, l, t, n;
        let { hiddenSpoiler: r = !1, isVisible: a = !0, image: s, isGalleryImage: d = !1, alt: u = L.intl.string(L.t.X4IxWF), allImages: m = null } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { renderImageComponent: h, className: b, autoPlayGif: g } = this.props,
            { maxMediaWidth: f, maxMediaHeight: x, sourceMetadata: y } = this.state;
        if (null == s) return null;
        let _ = (0, C.q)(s),
            w =
                null == m
                    ? {}
                    : (0, I._)(
                          m.map((e) => ({
                              ...(0, p.Hv)(e, y, 'IMAGE'),
                              original: e.url,
                              srcIsAnimated: e.srcIsAnimated
                          })),
                          {},
                          'Embed'
                      ),
            T = v.ZP.isAnimated({
                src: (0, C.q)(s),
                original: s.url,
                animated: !1,
                srcIsAnimated: s.srcIsAnimated
            }),
            E = {
                containerClassName: o()(b, {
                    [V.embedMedia]: !d,
                    [V.embedImage]: !d,
                    [V.galleryImage]: d
                }),
                imageContainerClassName: d ? V.galleryImageContainer : void 0,
                imageClassName: d ? V.embedGalleryImageElement : void 0,
                src: (0, C.q)(s),
                alt: u,
                responsive: !0,
                limitResponsiveWidth: !d,
                width: s.width,
                height: s.height,
                maxWidth: f,
                maxHeight: x,
                original: s.url,
                shouldLink: a,
                disableAltTextDisplay: !0,
                hiddenSpoilers: r,
                placeholder: s.placeholder,
                placeholderVersion: s.placeholderVersion,
                srcIsAnimated: s.srcIsAnimated
            };
        _ in w && (E.onClick = w[_]);
        let N = null !== (n = null === (e = s.url.split('.').pop()) || void 0 === e ? void 0 : e.split('?')[0]) && void 0 !== n ? n : '';
        'jpg' === N && (N = 'jpeg');
        let S = null != s && !v.uo.test(null == s ? void 0 : s.url) && !(s.srcIsAnimated && v.YG.test(null == s ? void 0 : s.url)),
            A =
                !0 !== this.props.isSearchResult &&
                a &&
                (null === (l = this.props.message) || void 0 === l ? void 0 : l.channel_id) != null &&
                (null === (t = this.props.message) || void 0 === t ? void 0 : t.channel_id) !== void 0 &&
                S &&
                !(function (e) {
                    return null != e && (e.width <= k.OF || e.height <= k.OF);
                })(s) &&
                null != N;
        return (0, i.jsx)(c.h.Consumer, {
            children: (e) =>
                (0, i.jsx)(
                    H.G.Consumer,
                    {
                        children: (l) => {
                            let { disableAnimations: t } = l;
                            return h({
                                ...E,
                                autoPlay: g && !t && !r,
                                renderAccessory: T ? e : null,
                                onMouseEnter: () => this.handleImageHover(!0, s, A),
                                onMouseLeave: () => this.handleImageHover(!1, s, A),
                                renderAdjacentContent: () => {
                                    var e, l;
                                    return !0 === this.props.showImageRecs && A
                                        ? this.renderImageHoverButtons({
                                              mimeType: ['image', N],
                                              downloadURL: null !== (l = s.proxyURL) && void 0 !== l ? l : s.url,
                                              isVisualMediaType: null != s,
                                              channelId: null === (e = this.props.message) || void 0 === e ? void 0 : e.channel_id
                                          })
                                        : null;
                                },
                                sourceMetadata: y,
                                analyticsSource: 'Embed'
                            });
                        }
                    },
                    s.url
                )
        });
    }
    renderVideo() {
        let { gifv: e = !1, isVisible: l = !0, hiddenSpoiler: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                embed: { url: n, thumbnail: r, video: a, provider: o },
                renderVideoComponent: s,
                renderImageComponent: d,
                renderLinkComponent: u,
                allowFullScreen: m,
                autoPlayGif: h,
                obscureReason: c
            } = this.props,
            { maxMediaWidth: p, maxMediaHeight: b, sourceMetadata: g } = this.state;
        if (null == n || null == r) return null;
        if (e)
            return null == a
                ? null
                : (0, i.jsx)(H.G.Consumer, {
                      children: (e) => {
                          let { disableAnimations: o } = e;
                          return (0, i.jsx)(D, {
                              className: V.embedMedia,
                              href: n,
                              thumbnail: r,
                              video: a,
                              maxWidth: p,
                              maxHeight: b,
                              responsive: !0,
                              autoPlay: !t && h && !o && l,
                              renderImageComponent: d,
                              playable: l,
                              hiddenSpoilers: t,
                              disableAltTextDisplay: null != c,
                              placeholder: a.placeholder,
                              placeholderVersion: a.placeholderVersion,
                              sourceMetadata: g
                          });
                      }
                  });
        return (0, i.jsx)(G, {
            className: V.embedMedia,
            href: n,
            allowFullScreen: m,
            thumbnail: r,
            video: a,
            provider: null == o ? void 0 : o.name,
            maxWidth: p,
            maxHeight: b,
            responsive: !0,
            renderImageComponent: d,
            renderVideoComponent: s,
            renderLinkComponent: u,
            onControlsShow: () => {
                this.setState({ videoControlsShown: !0 });
            },
            onControlsHide: () => {
                this.setState({ videoControlsShown: !1 });
            },
            playable: l && !t,
            placeholder: null == a ? void 0 : a.placeholder,
            placeholderVersion: null == a ? void 0 : a.placeholderVersion,
            sourceMetadata: g
        });
    }
    renderFooter() {
        let { footer: e, timestamp: l } = this.props.embed;
        if (null != e) {
            let t = null != e.iconProxyURL && '' !== e.iconProxyURL ? e.iconProxyURL : e.iconURL;
            return (0, i.jsxs)('div', {
                className: o()(V.embedFooter, V.embedMargin),
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
                            null != l ? (0, N.Y4)(l) : null
                        ]
                    })
                ]
            });
        }
        if (null != l)
            return (0, i.jsx)('div', {
                className: o()(V.embedFooter, V.embedMargin),
                children: (0, i.jsx)('span', {
                    className: V.embedFooterText,
                    children: (0, N.Y4)(l)
                })
            });
    }
    renderMedia() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { embed: l } = this.props,
            { isVisible: t } = this.state;
        switch (l.type) {
            case F.hBH.GIFV:
                return this.renderVideo({
                    gifv: !0,
                    hiddenSpoiler: e,
                    isVisible: t
                });
            case F.hBH.VIDEO:
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
            a = this.renderAuthor(i),
            o = this.renderTitle(i);
        switch (t.type) {
            case F.hBH.IMAGE:
            case F.hBH.VIDEO:
            case F.hBH.GIFV:
                break;
            default:
                e = this.renderDescription();
        }
        let s = this.renderFields();
        !n && (l = this.renderMedia(!i));
        let d = this.renderFooter(),
            u = null == l;
        return (
            t.type === F.hBH.RICH && (u = null == t.video),
            {
                provider: r,
                author: a,
                title: o,
                description: e,
                thumbnail: !n && u ? this.renderThumbnail(i) : null,
                fields: s,
                media: l,
                footer: d
            }
        );
    }
    getMaxWidth(e) {
        let {
                embed: { image: l, images: t, video: n, type: i, thumbnail: r }
            } = this.props,
            { maxMediaWidth: a, maxMediaHeight: o } = this.state,
            s = null != l ? l : n;
        if (null == s) return;
        let { width: d } = (0, A.Tj)({
            width: s.width,
            height: s.height,
            maxWidth: a,
            maxHeight: o
        });
        if (!e && (i === F.hBH.VIDEO || d >= 300)) return d + 32;
        if (i === F.hBH.RICH && void 0 !== t) return 520;
        if (i === F.hBH.GIFV) {
            var u, m, h, c;
            let { width: e } = (0, A.Tj)({
                width: null !== (m = null !== (u = null == n ? void 0 : n.width) && void 0 !== u ? u : null == r ? void 0 : r.width) && void 0 !== m ? m : 0,
                height: null !== (c = null !== (h = null == n ? void 0 : n.height) && void 0 !== h ? h : null == r ? void 0 : r.height) && void 0 !== c ? c : 0,
                maxWidth: a,
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
        let { hideMedia: e, embed: l } = this.props;
        return !e && (0, S.dY)(l);
    }
    renderSuppressButton(e) {
        return (0, i.jsx)(d.Clickable, {
            focusProps: { offset: { bottom: 4 } },
            className: V.embedSuppressButton,
            onClick: e,
            'aria-label': L.intl.string(L.t.GT3fNz),
            children: (0, i.jsx)(d.XSmallIcon, {
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    usesJustifiedAutoStyle() {
        let { embed: e } = this.props;
        return e.type === F.hBH.IMAGE || e.type === F.hBH.VIDEO || e.type === F.hBH.GIFV || ((e.type === F.hBH.RICH || e.type === F.hBH.ARTICLE) && (null != e.video || null != e.image));
    }
    getEmbedColor(e) {
        let { color: l } = this.props.embed;
        return (null != l && '#ffffff' === l.toLowerCase()) || e ? void 0 : l;
    }
    getSpoilerStyles(e) {
        let {
                embed: { image: l, images: t, video: n, type: i }
            } = this.props,
            { maxMediaWidth: r, maxMediaHeight: a } = this.state;
        if (!this.usesJustifiedAutoStyle()) return;
        let o = e ? void 0 : this.getMaxWidth(!1);
        if (void 0 === o && void 0 === t && i !== F.hBH.RICH) {
            let e = null != l ? l : n;
            if (void 0 !== e) {
                var s;
                let { minWidth: l, minHeight: t } = null !== (s = this.getMinSize()) && void 0 !== s ? s : {},
                    { width: n } = (0, A.Tj)({
                        width: e.width,
                        height: e.height,
                        maxWidth: r,
                        maxHeight: a,
                        minWidth: l,
                        minHeight: t
                    });
                o = n;
            }
        }
        return {
            maxWidth: void 0 === o ? 'max-content' : o,
            justifySelf: 'auto'
        };
    }
    render() {
        var e;
        let { embed: l, obscureReason: t, className: n } = this.props;
        return null != l.provider && M.j.includes(l.provider.name)
            ? (0, i.jsx)(M.Z, {
                  embed: l,
                  className: n
              })
            : (0, y.Z)(l)
              ? (0, i.jsx)(_.Z, {
                    embed: l,
                    className: n
                })
              : (null === (e = l.provider) || void 0 === e ? void 0 : e.name) === 'Amazon Music' && l.type === F.hBH.RICH
                ? (0, i.jsx)(b.Z, {
                      embed: l,
                      className: n
                  })
                : this.isInline()
                  ? null != t
                      ? (0, i.jsx)(h.Z, {
                            type: h.Z.Types.ATTACHMENT,
                            reason: t,
                            onReveal: this.onReveal,
                            onToggleObscurity: this.onToggleObscurity,
                            isSingleMosaicItem: !0,
                            containerStyles: this.getSpoilerStyles(!0),
                            obscurityControlClassName: o()({ [V.obscureVideoSpacing]: this.state.isVisible && this.state.videoControlsShown }),
                            children: this.renderInlineMediaEmbed
                        })
                      : this.renderInlineMediaEmbed()
                  : null != t
                    ? (0, i.jsx)(h.Z, {
                          type: h.Z.Types.EMBED,
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
                    className: o()(V.inlineMediaEmbed, n, {
                        [V.spoilerAttachment]: t === x.wk.SPOILER,
                        [V.hiddenExplicitAttachment]: null != t && [x.wk.EXPLICIT_CONTENT, x.wk.POTENTIAL_EXPLICIT_CONTENT].includes(t),
                        [V.isHidden]: e,
                        [V.justifyAuto]: l.usesJustifiedAutoStyle(),
                        [P.embedFlexGrow]: null != r
                    }),
                    style: { maxWidth: r },
                    children: l.renderMedia(e)
                });
            }),
            W(this, 'renderEmbedContent', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { className: t, onSuppressEmbed: n, obscureReason: r } = l.props,
                    { provider: a, author: s, title: d, description: u, fields: m, thumbnail: h, media: c, footer: p } = l.renderAll();
                return (0, i.jsx)('article', {
                    className: o()(t, P.embedFlexGrow, V.embedFull, R.markup, {
                        [V.isHidden]: e,
                        [V.spoilerEmbed]: r === x.wk.SPOILER,
                        [V.hiddenExplicitEmbed]: null != r && [x.wk.EXPLICIT_CONTENT, x.wk.POTENTIAL_EXPLICIT_CONTENT].includes(r),
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
                            className: o()({
                                [V.grid]: !0,
                                [V.hasThumbnail]: null != h
                            }),
                            children: [null != n ? l.renderSuppressButton(n) : null, a, s, d, u, m, c, h, p]
                        })
                    })
                });
            });
    }
}
W(O, 'defaultProps', {
    hideMedia: !1,
    allowFullScreen: !0,
    maxThumbnailWidth: 80,
    maxThumbnailHeight: 80,
    embedIndex: 0
});
