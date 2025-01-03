n(411104), n(724458), n(653041), n(733860), n(47120), n(789020);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(846519),
    c = n(780384),
    d = n(481060),
    u = n(570140),
    h = n(659429),
    m = n(496929),
    p = n(558381),
    g = n(410575),
    f = n(224336),
    _ = n(730749),
    E = n(666743),
    I = n(115130),
    C = n(812206),
    N = n(770146),
    v = n(600164),
    S = n(606081),
    T = n(252618),
    b = n(100159),
    A = n(646288),
    Z = n(984370),
    x = n(706454),
    L = n(210887),
    P = n(430824),
    O = n(496675),
    y = n(525395),
    R = n(558314),
    j = n(580130),
    D = n(55563),
    M = n(551428),
    w = n(695103),
    k = n(451478),
    U = n(626135),
    G = n(572004),
    B = n(630388),
    H = n(937615),
    V = n(73346),
    F = n(3570),
    z = n(689796),
    W = n(15470),
    Y = n(506648),
    K = n(449275),
    q = n(445986),
    X = n(119520),
    Q = n(450233),
    J = n(726581),
    $ = n(74153),
    ee = n(125930),
    et = n(178071),
    en = n(176055),
    ei = n(843445),
    er = n(981631),
    el = n(186901),
    ea = n(388032),
    es = n(358636);
function eo(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class ec extends r.PureComponent {
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let { sku: e, storeListing: t, isFetchingEntitlements: n, shouldFetchStatistics: i, didFetchEntitlements: r, location: l, fetchStoreListing: a } = this.props;
        if (null != l.state) {
            let { analyticsSource: e, analyticsProperties: t } = l.state;
            (this._analyticsSource = e), (this._extraAnalyticsProperties = t);
        } else this._analyticsSource = er.SaU;
        (null == t || t.isSlimDirectoryVersion()) && a(), null != e && (!n && !r && (0, m.yD)(e.applicationId), i && u.Z.wait(() => (0, h.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let { locale: t, sku: n, shouldFetchStatistics: i, skuId: r, storeListingId: l, slug: a, storeListing: s, fetchStoreListing: o } = this.props;
        if (
            (s !== e.storeListing &&
                null != s &&
                (0, F.s)(el.jE.STORE_LISTING, {
                    skuId: r,
                    slug: a
                }),
            (t !== e.locale || r !== e.skuId) && o(),
            i && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error('Unexpected missing sku');
            u.Z.wait(() => (0, h.$)(n.applicationId));
        }
        (r !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t }
        } = this.props;
        null != t &&
            U.default.track(er.rMx.STORE_LISTING_EXITED, {
                load_id: e,
                duration_ms: Date.now() - t
            });
    }
    replaceUrlWithSlug() {}
    trackViewed() {
        let { sku: e, storeListing: t, hasFetchedNews: n, analyticsContext: i } = this.props;
        if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n)) return;
        let r = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
            images: 0,
            videos: 0
        });
        U.default.track(er.rMx.STORE_LISTING_VIEWED, {
            ...this._extraAnalyticsProperties,
            load_id: i.loadId,
            has_description: null != t.description && t.description.length > 0,
            has_staff_review: null != t.staffNotes,
            carousel_image_count: r.images,
            carousel_video_count: r.videos,
            location: i.location.page,
            source: this._analyticsSource,
            ...(0, b.Z)(e, !0)
        }),
            (this._trackedViewed = !0);
    }
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: l } = this.props;
        return (0, i.jsx)(Z.Z, {
            isAuthenticated: l,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(Z.Z.Icon, {
                                  icon: d.TagIcon,
                                  'aria-label': ea.intl.string(ea.t['P1/Erq'])
                              }),
                              (0, i.jsx)(Z.Z.Title, { children: n.name })
                          ]
                      })
                    : null != t && t.premium
                      ? (0, i.jsxs)(r.Fragment, {
                            children: [
                                (0, i.jsx)(Z.Z.Icon, {
                                    icon: d.NitroWheelIcon,
                                    'aria-label': ea.intl.string(ea.t.Ipxkoq)
                                }),
                                (0, i.jsx)($.Z, { sku: t })
                            ]
                        })
                      : null != t
                        ? (0, i.jsxs)(r.Fragment, {
                              children: [
                                  (0, i.jsx)(Z.Z.Icon, {
                                      icon: d.TagIcon,
                                      'aria-label': ea.intl.string(ea.t['P1/Erq'])
                                  }),
                                  (0, i.jsx)(Z.Z.Title, { children: t.name })
                              ]
                          })
                        : null
        });
    }
    parseMediaItems(e, t, n) {
        let { assetId: i, youtubeVideoId: r } = t;
        if (null != i) {
            let t = n.find((e) => e.id === i);
            if (null != t) {
                let { width: n, height: i } = t;
                if (null == n || null == i) throw Error('ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined');
                return t.mimeType.startsWith('video/')
                    ? {
                          type: er.s9s.VIDEO,
                          thumbnailSrc: (0, V._W)(e.id, t, 1024, 'webp'),
                          src: (0, V._W)(e.id, t),
                          height: i,
                          width: n
                      }
                    : {
                          type: er.s9s.IMG,
                          src: (0, V._W)(e.id, t, 1024),
                          height: i,
                          width: n
                      };
            }
        }
        if (null != r)
            return {
                type: er.s9s.YOUTUBE_VIDEO,
                youtubeVideoId: r
            };
        throw Error('Store carousel item must have one of assetId or youtubeVideoId');
    }
    renderHeaderAssets(e, t, n) {
        let { theme: r } = this.props,
            l = t.headerBackground,
            a = (0, c.ap)(r) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == l || null == a
            ? (0, i.jsx)('div', { className: es.noHeaderSpacer })
            : (0, i.jsxs)('div', {
                  className: es.headerAssets,
                  children: [
                      (0, i.jsx)('div', {
                          className: es.headerBackground,
                          style: { backgroundImage: 'url('.concat((0, V._W)(e.id, l, 1024, 'png'), ')') }
                      }),
                      (0, i.jsx)('img', {
                          className: es.headerLogo,
                          src: (0, V._W)(e.id, a, 1024, 'png'),
                          alt: n.name
                      })
                  ]
              });
    }
    renderWhyYouMightLikeThis(e, t) {
        return (0, i.jsx)(J.Z, {
            sku: e,
            storeListing: t,
            className: es.whyYouMightLikeIt
        });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: r } = this.props;
        return (0, i.jsx)(en.Z, {
            skuId: t.id,
            guild: e.guild,
            className: es.guildInvite,
            inChannel: null != n,
            pageSize: r
        });
    }
    renderFeatures(e) {
        return (0, i.jsx)(Y.Z, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, i.jsx)(ee.Z, {
                  className: es.systemRequirements,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize
              });
    }
    renderDescription(e, t, n) {
        let { description: l } = t;
        if (null == l) throw Error('Rendering ApplicationStoreListing without description');
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(N.Z, {
                    tag: 'h1',
                    children: ea.intl.format(ea.t.tluX4O, { name: n.name })
                }),
                (0, i.jsx)(f.Z, {}),
                (0, i.jsx)(W.Z, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: l,
                    className: es.description,
                    assets: t.assets
                })
            ]
        });
    }
    renderApplicationContentRating(e) {
        return (0, i.jsx)(z.Z, {
            sku: e,
            className: es.contentRating
        });
    }
    renderApplicationLegalInfo(e) {
        return (0, i.jsx)(K.Z, {
            sku: e,
            className: es.legalInfo
        });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let r = [],
            l = n.getSplashURL(1024);
        null != l && r.push(l), null != t.headerLogoLightTheme && r.unshift((0, V._W)(n.id, t.headerLogoLightTheme, 1024, 'jpg'));
        let a = S.Z.Product({
                name: e.name,
                description: null != e.summary && '' !== e.summary ? e.summary : t.tagline,
                image: S.Z.Product.Image(r),
                sku: e.id
            }),
            s = e.getPrice();
        if (null != s) {
            let { amount: e, currency: t } = s;
            a.offers = S.Z.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, H.T4)(e, t, { style: 'decimal' })
            });
        }
        let o = S.Z.ItemPage({ mainEntity: a });
        return (0, i.jsx)(S.Z, { data: o });
    }
    renderSmall(e, t, n) {
        return (0, i.jsxs)('div', {
            className: a()(es.listing, es.listingSmall),
            children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
        });
    }
    renderLarge(e, t, n) {
        return (0, i.jsxs)('div', {
            className: es.listing,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, i.jsx)('div', {
                    className: es.listingLarge,
                    children: (0, i.jsxs)('div', {
                        className: es.body,
                        children: [
                            (0, i.jsxs)('div', {
                                className: es.leftColumn,
                                children: [this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
                            }),
                            (0, i.jsxs)('div', {
                                className: es.rightColumn,
                                children: [this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n)]
                            })
                        ]
                    })
                })
            ]
        });
    }
    render() {
        let { application: e, sku: t, storeListing: n, matureAgree: l, isAuthenticated: a } = this.props;
        if (null == e || null == t || null == n || n.isSlimDirectoryVersion())
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, i.jsx)(v.Z, {
                        align: v.Z.Align.CENTER,
                        justify: v.Z.Justify.CENTER,
                        children: (0, i.jsx)(d.Spinner, { className: es.spinner })
                    })
                ]
            });
        if (!l && t.showAgeGate) {
            let n = a
                ? null
                : (0, i.jsx)('div', {
                      className: es.gatedListing,
                      children: this.renderListing()
                  });
            return (0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsx)(T.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), (0, i.jsx)(X.Z, { game: e }), n]
            });
        }
        return a
            ? (0, i.jsxs)('div', {
                  className: es.listingWrapper,
                  children: [
                      (0, i.jsx)(T.yY, { location: e.name }),
                      this.renderJsonLD(),
                      (0, i.jsx)(g.Z, {
                          section: er.jXE.NAVIGATION,
                          children: this.renderHeader(e, t)
                      }),
                      (0, i.jsx)(g.Z, {
                          section: er.jXE.BODY,
                          children: this.renderListing()
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  children: [(0, i.jsx)(T.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
              });
    }
    constructor(...e) {
        super(...e),
            eo(this, 'showCopyLinkTextTimeout', new o.V7()),
            eo(this, '_trackedViewed', !1),
            eo(this, '_analyticsSource', null),
            eo(this, '_extraAnalyticsProperties', null),
            eo(this, 'state', {
                showHeaderPurchaseUnit: !1,
                showLinkCopied: !1
            }),
            eo(this, 'trackCarouselScroll', (e, t, n) => {
                let { sku: i } = this.props;
                null != i &&
                    U.default.track(er.rMx.STORE_LISTING_MEDIA_SCROLLED, {
                        ...(0, b.Z)(i),
                        card_index: n,
                        card_type: e.type === er.s9s.IMG ? 'image' : 'video'
                    });
            }),
            eo(this, 'copyCurrentUrl', () => {
                var e;
                let { location: t } = this.props;
                (0, G.JG)(((e = t.pathname), ''.concat(location.protocol, '//').concat(location.host).concat(e))),
                    this.setState({ showLinkCopied: !0 }, () => {
                        this.showCopyLinkTextTimeout.start(1500, () => {
                            this.setState({ showLinkCopied: !1 });
                        });
                    });
            }),
            eo(this, 'handleCreateInstantInvite', () => {
                let { channel: e, guild: t } = this.props;
                null != e &&
                    null != t &&
                    (0, d.openModalLazy)(async () => {
                        let { default: r } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                guild: t,
                                channel: e,
                                source: er.t4x.GUILD_CHANNELS
                            });
                    });
            }),
            eo(this, 'renderInviteLink', () => {
                let { channel: e, guild: t } = this.props;
                return null != e && null != t && (O.Z.can(er.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
                    ? (0, i.jsx)(d.Button, {
                          'aria-label': ea.intl.string(ea.t.zJrgTE),
                          look: d.Button.Looks.BLANK,
                          size: d.Button.Sizes.NONE,
                          onClick: this.handleCreateInstantInvite,
                          className: es.link,
                          children: (0, i.jsx)(d.LinkIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: es.linkIcon
                          })
                      })
                    : null;
            }),
            eo(this, 'renderCopyLink', () => {
                let { showLinkCopied: e } = this.state;
                return this.isChannelType
                    ? this.renderInviteLink()
                    : (0, i.jsx)(d.Tooltip, {
                          text: e ? ea.intl.string(ea.t.uvTCOT) : null,
                          position: 'left',
                          forceOpen: e,
                          children: (t) => {
                              let { onMouseEnter: n, onMouseLeave: r } = t;
                              return (0, i.jsx)(d.Button, {
                                  'aria-label': e ? ea.intl.string(ea.t.uvTCOT) : ea.intl.string(ea.t.WqhZsr),
                                  look: d.Button.Looks.BLANK,
                                  size: d.Button.Sizes.NONE,
                                  onClick: this.copyCurrentUrl,
                                  onMouseEnter: n,
                                  onMouseLeave: r,
                                  className: es.link,
                                  children: (0, i.jsx)(d.LinkIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: es.linkIcon
                                  })
                              });
                          }
                      });
            }),
            eo(this, 'renderHeaderToolbar', (e, t) => {
                let {
                        isInTestMode: n,
                        slug: r,
                        storeListing: l,
                        analyticsContext: { location: s }
                    } = this.props,
                    { showHeaderPurchaseUnit: o } = this.state;
                return (0, i.jsxs)('div', {
                    className: es.headerBarListing,
                    children: [
                        (0, i.jsx)('div', {
                            className: es.headerSection,
                            children:
                                n && null != t
                                    ? (0, i.jsx)(et.Z, {
                                          size: et.y.Sizes.MIN,
                                          dropdownSize: et.y.DropdownSizes.MEDIUM,
                                          look: et.y.Looks.OUTLINED,
                                          color: et.y.Colors.RED,
                                          skuId: t.id,
                                          className: es.testModeSelectButton,
                                          currentStoreListingId: null != l ? l.id : null,
                                          onStoreListingSelect: (e) => {
                                              null != t &&
                                                  (0, p.yt)(t.id, {
                                                      slug: r,
                                                      analyticsSource: {
                                                          page: s.page,
                                                          section: er.jXE.NAVIGATION,
                                                          object: null
                                                      },
                                                      storeListingId: e.id
                                                  });
                                          }
                                      })
                                    : null
                        }),
                        (0, i.jsx)('div', {
                            className: es.headerSection,
                            children: (0, i.jsxs)('div', {
                                className: a()(es.headerPurchase, { [es.active]: o }),
                                children: [
                                    null != t ? (0, A.Z)(t) : null,
                                    null != e && null != t ? (0, i.jsx)('div', { children: 'deprecated!' }) : null,
                                    (0, i.jsx)(Q.Z, {
                                        messageStyle: Q.G.SHORT,
                                        className: es.purchaseError
                                    })
                                ]
                            })
                        }),
                        this.renderCopyLink()
                    ]
                });
            }),
            eo(this, 'renderCarousel', (e, t) => {
                if (0 === t.carouselItems.length) return null;
                let { pageSize: n, isFocused: r } = this.props;
                return (0, i.jsx)(g.Z, {
                    section: er.jXE.HERO,
                    children: (0, i.jsx)(q.Z, {
                        pageSize: n,
                        items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                        autoplayInterval: 8000,
                        paused: !r,
                        onIntentionalChange: this.trackCarouselScroll
                    })
                });
            }),
            eo(this, 'renderListing', () => {
                let { application: e, storeListing: t, sku: n, pageSize: r } = this.props;
                return null == e || null == n || null == t || t.isSlimDirectoryVersion()
                    ? (0, i.jsx)(v.Z, {
                          align: v.Z.Align.CENTER,
                          justify: v.Z.Justify.CENTER,
                          children: (0, i.jsx)(d.Spinner, {})
                      })
                    : r === ei.b.SMALL
                      ? this.renderSmall(e, t, n)
                      : this.renderLarge(e, t, n);
            });
    }
}
t.Z = (0, _.Z)(
    (0, E.Z)(
        s.ZP.connectStores([R.Z, L.Z, x.default, k.Z, M.Z, D.Z, w.Z, I.Z, C.Z, y.Z, P.Z, j.Z], (e) => {
            let t,
                n,
                i,
                { inputSkuId: r, applicationId: l, storeListingId: a, isAuthenticated: s, channel: o } = e;
            if (null == l) {
                if (null == r) throw Error('Needs applicationId or skuId');
                (t = r), null != (l = null != (n = D.Z.get(r)) ? n.applicationId : null) && (i = C.Z.getApplication(l));
            } else if (null == r) {
                if (null == l) throw Error('Needs applicationId or skuId');
                null != (i = C.Z.getApplication(l)) && (t = i.destinationSkuId), (n = null != t ? D.Z.get(t) : null);
            }
            (null == n ? void 0 : n.flags) != null && (0, B.yE)(n.flags, er.l4R.STICKER_PACK) && (n = null);
            let c = null != l && (w.Z.inTestModeForApplication(l) || I.Z.inDevModeForApplication(l));
            return {
                skuId: t,
                application: null != l ? C.Z.getApplication(l) : null,
                isFetchingEntitlements: null != l && j.Z.applicationIdsFetching.has(l),
                didFetchEntitlements: null != l && j.Z.applicationIdsFetched.has(l),
                shouldFetchStatistics: s && null != l && y.Z.shouldFetchStatisticsForApplication(l),
                sku: n,
                isFocused: k.Z.isFocused(),
                storeListing: M.Z.getStoreListing({
                    storeListingId: a,
                    skuId: t,
                    channelId: null != o ? o.id : null,
                    isTestMode: c
                }),
                isInTestMode: null != l && c,
                matureAgree: R.Z.didMatureAgree,
                theme: L.Z.theme,
                locale: x.default.locale,
                guild: null != o ? P.Z.getGuild(o.getGuildId()) : null
            };
        })(ec)
    )
);
