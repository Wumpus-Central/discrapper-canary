n.d(t, { Z: () => ep }), n(411104), n(266796), n(653041), n(733860), n(47120), n(789020);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(846519),
    c = n(780384),
    u = n(481060),
    d = n(570140),
    p = n(659429),
    h = n(496929),
    f = n(558381),
    g = n(410575),
    m = n(224336),
    b = n(730749),
    _ = n(666743),
    E = n(115130),
    O = n(812206),
    N = n(770146),
    y = n(600164),
    I = n(606081),
    v = n(252618),
    C = n(100159),
    S = n(646288),
    T = n(984370),
    P = n(706454),
    j = n(210887),
    A = n(430824),
    Z = n(496675),
    x = n(525395),
    L = n(558314),
    w = n(580130),
    R = n(55563),
    D = n(551428),
    k = n(695103),
    M = n(451478),
    U = n(626135),
    G = n(572004),
    W = n(630388),
    V = n(937615),
    B = n(73346),
    H = n(3570),
    F = n(689796),
    z = n(15470),
    Y = n(506648),
    K = n(449275),
    q = n(445986),
    Q = n(119520),
    X = n(450233),
    J = n(726581),
    $ = n(74153),
    ee = n(125930),
    et = n(178071),
    en = n(176055),
    er = n(843445),
    ei = n(981631),
    el = n(186901),
    ea = n(388032),
    eo = n(281990);
function es(e, t, n) {
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
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                es(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class ed extends i.PureComponent {
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let { sku: e, storeListing: t, isFetchingEntitlements: n, shouldFetchStatistics: r, didFetchEntitlements: i, location: l, fetchStoreListing: a } = this.props;
        if (null != l.state) {
            let { analyticsSource: e, analyticsProperties: t } = l.state;
            (this._analyticsSource = e), (this._extraAnalyticsProperties = t);
        } else this._analyticsSource = ei.SaU;
        (null == t || t.isSlimDirectoryVersion()) && a(), null != e && (n || i || (0, h.yD)(e.applicationId), r && d.Z.wait(() => (0, p.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let { locale: t, sku: n, shouldFetchStatistics: r, skuId: i, storeListingId: l, slug: a, storeListing: o, fetchStoreListing: s } = this.props;
        if (
            (o !== e.storeListing &&
                null != o &&
                (0, H.s)(el.jE.STORE_LISTING, {
                    skuId: i,
                    slug: a
                }),
            (t !== e.locale || i !== e.skuId) && s(),
            r && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error('Unexpected missing sku');
            d.Z.wait(() => (0, p.$)(n.applicationId));
        }
        (i !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t }
        } = this.props;
        null != t &&
            U.default.track(ei.rMx.STORE_LISTING_EXITED, {
                load_id: e,
                duration_ms: Date.now() - t
            });
    }
    replaceUrlWithSlug() {}
    trackViewed() {
        let { sku: e, storeListing: t, hasFetchedNews: n, analyticsContext: r } = this.props;
        if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n)) return;
        let i = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
            images: 0,
            videos: 0
        });
        U.default.track(
            ei.rMx.STORE_LISTING_VIEWED,
            ec(
                eu(ec({}, this._extraAnalyticsProperties), {
                    load_id: r.loadId,
                    has_description: null != t.description && t.description.length > 0,
                    has_staff_review: null != t.staffNotes,
                    carousel_image_count: i.images,
                    carousel_video_count: i.videos,
                    location: r.location.page,
                    source: this._analyticsSource
                }),
                (0, C.Z)(e, !0)
            )
        ),
            (this._trackedViewed = !0);
    }
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: l } = this.props;
        return (0, r.jsx)(T.Z, {
            isAuthenticated: l,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(T.Z.Icon, {
                                  icon: u.lO_,
                                  'aria-label': ea.NW.string(ea.t['P1/Erq'])
                              }),
                              (0, r.jsx)(T.Z.Title, { children: n.name })
                          ]
                      })
                    : null != t && t.premium
                      ? (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(T.Z.Icon, {
                                    icon: u.SrA,
                                    'aria-label': ea.NW.string(ea.t.Ipxkoq)
                                }),
                                (0, r.jsx)($.Z, { sku: t })
                            ]
                        })
                      : null != t
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsx)(T.Z.Icon, {
                                      icon: u.lO_,
                                      'aria-label': ea.NW.string(ea.t['P1/Erq'])
                                  }),
                                  (0, r.jsx)(T.Z.Title, { children: t.name })
                              ]
                          })
                        : null
        });
    }
    parseMediaItems(e, t, n) {
        let { assetId: r, youtubeVideoId: i } = t;
        if (null != r) {
            let t = n.find((e) => e.id === r);
            if (null != t) {
                let { width: n, height: r } = t;
                if (null == n || null == r) throw Error('ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined');
                return t.mimeType.startsWith('video/')
                    ? {
                          type: ei.s9s.VIDEO,
                          thumbnailSrc: (0, B._W)(e.id, t, 1024, 'webp'),
                          src: (0, B._W)(e.id, t),
                          height: r,
                          width: n
                      }
                    : {
                          type: ei.s9s.IMG,
                          src: (0, B._W)(e.id, t, 1024),
                          height: r,
                          width: n
                      };
            }
        }
        if (null != i)
            return {
                type: ei.s9s.YOUTUBE_VIDEO,
                youtubeVideoId: i
            };
        throw Error('Store carousel item must have one of assetId or youtubeVideoId');
    }
    renderHeaderAssets(e, t, n) {
        let { theme: i } = this.props,
            l = t.headerBackground,
            a = (0, c.ap)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == l || null == a
            ? (0, r.jsx)('div', { className: eo.noHeaderSpacer })
            : (0, r.jsxs)('div', {
                  className: eo.headerAssets,
                  children: [
                      (0, r.jsx)('div', {
                          className: eo.headerBackground,
                          style: { backgroundImage: 'url('.concat((0, B._W)(e.id, l, 1024, 'png'), ')') }
                      }),
                      (0, r.jsx)('img', {
                          className: eo.headerLogo,
                          src: (0, B._W)(e.id, a, 1024, 'png'),
                          alt: n.name
                      })
                  ]
              });
    }
    renderWhyYouMightLikeThis(e, t) {
        return (0, r.jsx)(J.Z, {
            sku: e,
            storeListing: t,
            className: eo.whyYouMightLikeIt
        });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: i } = this.props;
        return (0, r.jsx)(en.Z, {
            skuId: t.id,
            guild: e.guild,
            className: eo.guildInvite,
            inChannel: null != n,
            pageSize: i
        });
    }
    renderFeatures(e) {
        return (0, r.jsx)(Y.Z, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, r.jsx)(ee.Z, {
                  className: eo.systemRequirements,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize
              });
    }
    renderDescription(e, t, n) {
        let { description: l } = t;
        if (null == l) throw Error('Rendering ApplicationStoreListing without description');
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(N.Z, {
                    tag: 'h1',
                    children: ea.NW.format(ea.t.tluX4O, { name: n.name })
                }),
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)(z.Z, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: l,
                    className: eo.description,
                    assets: t.assets
                })
            ]
        });
    }
    renderApplicationContentRating(e) {
        return (0, r.jsx)(F.Z, {
            sku: e,
            className: eo.contentRating
        });
    }
    renderApplicationLegalInfo(e) {
        return (0, r.jsx)(K.Z, {
            sku: e,
            className: eo.legalInfo
        });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = [],
            l = n.getSplashURL(1024);
        null != l && i.push(l), null != t.headerLogoLightTheme && i.unshift((0, B._W)(n.id, t.headerLogoLightTheme, 1024, 'jpg'));
        let a = I.Z.Product({
                name: e.name,
                description: null != e.summary && '' !== e.summary ? e.summary : t.tagline,
                image: I.Z.Product.Image(i),
                sku: e.id
            }),
            o = e.getPrice();
        if (null != o) {
            let { amount: e, currency: t } = o;
            a.offers = I.Z.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, V.T4)(e, t, { style: 'decimal' })
            });
        }
        let s = I.Z.ItemPage({ mainEntity: a });
        return (0, r.jsx)(I.Z, { data: s });
    }
    renderSmall(e, t, n) {
        return (0, r.jsxs)('div', {
            className: a()(eo.listing, eo.listingSmall),
            children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
        });
    }
    renderLarge(e, t, n) {
        return (0, r.jsxs)('div', {
            className: eo.listing,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, r.jsx)('div', {
                    className: eo.listingLarge,
                    children: (0, r.jsxs)('div', {
                        className: eo.body,
                        children: [
                            (0, r.jsxs)('div', {
                                className: eo.leftColumn,
                                children: [this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
                            }),
                            (0, r.jsxs)('div', {
                                className: eo.rightColumn,
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
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, r.jsx)(y.Z, {
                        align: y.Z.Align.CENTER,
                        justify: y.Z.Justify.CENTER,
                        children: (0, r.jsx)(u.$jN, { className: eo.spinner })
                    })
                ]
            });
        if (!l && t.showAgeGate) {
            let n = a
                ? null
                : (0, r.jsx)('div', {
                      className: eo.gatedListing,
                      children: this.renderListing()
                  });
            return (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)(v.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), (0, r.jsx)(Q.Z, { game: e }), n]
            });
        }
        return a
            ? (0, r.jsxs)('div', {
                  className: eo.listingWrapper,
                  children: [
                      (0, r.jsx)(v.yY, { location: e.name }),
                      this.renderJsonLD(),
                      (0, r.jsx)(g.Z, {
                          section: ei.jXE.NAVIGATION,
                          children: this.renderHeader(e, t)
                      }),
                      (0, r.jsx)(g.Z, {
                          section: ei.jXE.BODY,
                          children: this.renderListing()
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  children: [(0, r.jsx)(v.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
              });
    }
    constructor(...e) {
        super(...e),
            es(this, 'showCopyLinkTextTimeout', new s.V7()),
            es(this, '_trackedViewed', !1),
            es(this, '_analyticsSource', null),
            es(this, '_extraAnalyticsProperties', null),
            es(this, 'state', {
                showHeaderPurchaseUnit: !1,
                showLinkCopied: !1
            }),
            es(this, 'trackCarouselScroll', (e, t, n) => {
                let { sku: r } = this.props;
                null != r &&
                    U.default.track(
                        ei.rMx.STORE_LISTING_MEDIA_SCROLLED,
                        eu(ec({}, (0, C.Z)(r)), {
                            card_index: n,
                            card_type: e.type === ei.s9s.IMG ? 'image' : 'video'
                        })
                    );
            }),
            es(this, 'copyCurrentUrl', () => {
                var e;
                let { location: t } = this.props;
                (0, G.JG)(((e = t.pathname), ''.concat(location.protocol, '//').concat(location.host).concat(e))),
                    this.setState({ showLinkCopied: !0 }, () => {
                        this.showCopyLinkTextTimeout.start(1500, () => {
                            this.setState({ showLinkCopied: !1 });
                        });
                    });
            }),
            es(this, 'handleCreateInstantInvite', () => {
                let { channel: e, guild: t } = this.props;
                null != e &&
                    null != t &&
                    (0, u.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                eu(ec({}, n), {
                                    guild: t,
                                    channel: e,
                                    source: ei.t4x.GUILD_CHANNELS
                                })
                            );
                    });
            }),
            es(this, 'renderInviteLink', () => {
                let { channel: e, guild: t } = this.props;
                return null != e && null != t && (Z.Z.can(ei.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
                    ? (0, r.jsx)(u.zxk, {
                          'aria-label': ea.NW.string(ea.t.zJrgTE),
                          look: u.zxk.Looks.BLANK,
                          size: u.zxk.Sizes.NONE,
                          onClick: this.handleCreateInstantInvite,
                          className: eo.link,
                          children: (0, r.jsx)(u.xPt, {
                              size: 'md',
                              color: 'currentColor',
                              className: eo.linkIcon
                          })
                      })
                    : null;
            }),
            es(this, 'renderCopyLink', () => {
                let { showLinkCopied: e } = this.state;
                return this.isChannelType
                    ? this.renderInviteLink()
                    : (0, r.jsx)(u.ua7, {
                          text: e ? ea.NW.string(ea.t.uvTCOT) : null,
                          position: 'left',
                          forceOpen: e,
                          children: (t) => {
                              let { onMouseEnter: n, onMouseLeave: i } = t;
                              return (0, r.jsx)(u.zxk, {
                                  'aria-label': e ? ea.NW.string(ea.t.uvTCOT) : ea.NW.string(ea.t.WqhZsr),
                                  look: u.zxk.Looks.BLANK,
                                  size: u.zxk.Sizes.NONE,
                                  onClick: this.copyCurrentUrl,
                                  onMouseEnter: n,
                                  onMouseLeave: i,
                                  className: eo.link,
                                  children: (0, r.jsx)(u.xPt, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: eo.linkIcon
                                  })
                              });
                          }
                      });
            }),
            es(this, 'renderHeaderToolbar', (e, t) => {
                let {
                        isInTestMode: n,
                        slug: i,
                        storeListing: l,
                        analyticsContext: { location: o }
                    } = this.props,
                    { showHeaderPurchaseUnit: s } = this.state;
                return (0, r.jsxs)('div', {
                    className: eo.headerBarListing,
                    children: [
                        (0, r.jsx)('div', {
                            className: eo.headerSection,
                            children:
                                n && null != t
                                    ? (0, r.jsx)(et.Z, {
                                          size: et.y.Sizes.MIN,
                                          dropdownSize: et.y.DropdownSizes.MEDIUM,
                                          look: et.y.Looks.OUTLINED,
                                          color: et.y.Colors.RED,
                                          skuId: t.id,
                                          className: eo.testModeSelectButton,
                                          currentStoreListingId: null != l ? l.id : null,
                                          onStoreListingSelect: (e) => {
                                              null != t &&
                                                  (0, f.yt)(t.id, {
                                                      slug: i,
                                                      analyticsSource: {
                                                          page: o.page,
                                                          section: ei.jXE.NAVIGATION,
                                                          object: null
                                                      },
                                                      storeListingId: e.id
                                                  });
                                          }
                                      })
                                    : null
                        }),
                        (0, r.jsx)('div', {
                            className: eo.headerSection,
                            children: (0, r.jsxs)('div', {
                                className: a()(eo.headerPurchase, { [eo.active]: s }),
                                children: [
                                    null != t ? (0, S.Z)(t) : null,
                                    null != e && null != t ? (0, r.jsx)('div', { children: 'deprecated!' }) : null,
                                    (0, r.jsx)(X.Z, {
                                        messageStyle: X.G.SHORT,
                                        className: eo.purchaseError
                                    })
                                ]
                            })
                        }),
                        this.renderCopyLink()
                    ]
                });
            }),
            es(this, 'renderCarousel', (e, t) => {
                if (0 === t.carouselItems.length) return null;
                let { pageSize: n, isFocused: i } = this.props;
                return (0, r.jsx)(g.Z, {
                    section: ei.jXE.HERO,
                    children: (0, r.jsx)(q.Z, {
                        pageSize: n,
                        items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                        autoplayInterval: 8000,
                        paused: !i,
                        onIntentionalChange: this.trackCarouselScroll
                    })
                });
            }),
            es(this, 'renderListing', () => {
                let { application: e, storeListing: t, sku: n, pageSize: i } = this.props;
                return null == e || null == n || null == t || t.isSlimDirectoryVersion()
                    ? (0, r.jsx)(y.Z, {
                          align: y.Z.Align.CENTER,
                          justify: y.Z.Justify.CENTER,
                          children: (0, r.jsx)(u.$jN, {})
                      })
                    : i === er.b.SMALL
                      ? this.renderSmall(e, t, n)
                      : this.renderLarge(e, t, n);
            });
    }
}
let ep = (0, b.Z)(
    (0, _.Z)(
        o.ZP.connectStores([L.Z, j.Z, P.default, M.Z, D.Z, R.Z, k.Z, E.Z, O.Z, x.Z, A.Z, w.Z], (e) => {
            let t,
                n,
                r,
                { inputSkuId: i, applicationId: l, storeListingId: a, isAuthenticated: o, channel: s } = e;
            if (null == l) {
                if (null == i) throw Error('Needs applicationId or skuId');
                (t = i), null != (l = null != (n = R.Z.get(i)) ? n.applicationId : null) && (r = O.Z.getApplication(l));
            } else if (null == i) {
                if (null == l) throw Error('Needs applicationId or skuId');
                null != (r = O.Z.getApplication(l)) && (t = r.destinationSkuId), (n = null != t ? R.Z.get(t) : null);
            }
            (null == n ? void 0 : n.flags) != null && (0, W.yE)(n.flags, ei.l4R.STICKER_PACK) && (n = null);
            let c = null != l && (k.Z.inTestModeForApplication(l) || E.Z.inDevModeForApplication(l));
            return {
                skuId: t,
                application: null != l ? O.Z.getApplication(l) : null,
                isFetchingEntitlements: null != l && w.Z.applicationIdsFetching.has(l),
                didFetchEntitlements: null != l && w.Z.applicationIdsFetched.has(l),
                shouldFetchStatistics: o && null != l && x.Z.shouldFetchStatisticsForApplication(l),
                sku: n,
                isFocused: M.Z.isFocused(),
                storeListing: D.Z.getStoreListing({
                    storeListingId: a,
                    skuId: t,
                    channelId: null != s ? s.id : null,
                    isTestMode: c
                }),
                isInTestMode: null != l && c,
                matureAgree: L.Z.didMatureAgree,
                theme: j.Z.theme,
                locale: P.default.locale,
                guild: null != s ? A.Z.getGuild(s.getGuildId()) : null
            };
        })(ed)
    )
);
