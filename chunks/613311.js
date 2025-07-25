(n.d(t, { Z: () => eh }), n(415506), n(953529), n(539854), n(290780), n(388685), n(997841));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(846519),
    c = n(780384),
    u = n(755721),
    d = n(481060),
    p = n(570140),
    h = n(659429),
    f = n(496929),
    g = n(558381),
    m = n(410575),
    b = n(224336),
    _ = n(730749),
    O = n(666743),
    E = n(115130),
    y = n(812206),
    v = n(770146),
    I = n(600164),
    C = n(606081),
    S = n(252618),
    N = n(100159),
    T = n(646288),
    P = n(984370),
    j = n(706454),
    A = n(210887),
    x = n(430824),
    Z = n(496675),
    w = n(525395),
    L = n(558314),
    R = n(580130),
    D = n(55563),
    k = n(551428),
    M = n(695103),
    U = n(451478),
    G = n(626135),
    B = n(572004),
    V = n(630388),
    H = n(937615),
    F = n(73346),
    z = n(3570),
    W = n(689796),
    Y = n(15470),
    K = n(506648),
    q = n(449275),
    X = n(445986),
    Q = n(119520),
    J = n(450233),
    $ = n(726581),
    ee = n(74153),
    et = n(125930),
    en = n(178071),
    er = n(176055),
    ei = n(843445),
    el = n(981631),
    ea = n(186901),
    eo = n(388032),
    es = n(281990);
function ec(e, t, n) {
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
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ec(e, t, n[t]);
            }));
    }
    return e;
}
function ed(e, t) {
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
class ep extends i.PureComponent {
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let { sku: e, storeListing: t, isFetchingEntitlements: n, shouldFetchStatistics: r, didFetchEntitlements: i, location: l, fetchStoreListing: a } = this.props;
        if (null != l.state) {
            let { analyticsSource: e, analyticsProperties: t } = l.state;
            ((this._analyticsSource = e), (this._extraAnalyticsProperties = t));
        } else this._analyticsSource = el.SaU;
        ((null == t || t.isSlimDirectoryVersion()) && a(), null != e && (n || i || (0, f.yD)(e.applicationId), r && p.Z.wait(() => (0, h.$)(e.applicationId))), this.trackViewed(), this.replaceUrlWithSlug());
    }
    componentDidUpdate(e) {
        let { locale: t, sku: n, shouldFetchStatistics: r, skuId: i, storeListingId: l, slug: a, storeListing: o, fetchStoreListing: s } = this.props;
        if (
            (o !== e.storeListing &&
                null != o &&
                (0, z.s)(ea.jE.STORE_LISTING, {
                    skuId: i,
                    slug: a
                }),
            (t !== e.locale || i !== e.skuId) && s(),
            r && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error('Unexpected missing sku');
            p.Z.wait(() => (0, h.$)(n.applicationId));
        }
        ((i !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = !1), this.trackViewed(), this.replaceUrlWithSlug());
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t }
        } = this.props;
        null != t &&
            G.default.track(el.rMx.STORE_LISTING_EXITED, {
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
        (G.default.track(
            el.rMx.STORE_LISTING_VIEWED,
            eu(
                ed(eu({}, this._extraAnalyticsProperties), {
                    load_id: r.loadId,
                    has_description: null != t.description && t.description.length > 0,
                    has_staff_review: null != t.staffNotes,
                    carousel_image_count: i.images,
                    carousel_video_count: i.videos,
                    location: r.location.page,
                    source: this._analyticsSource
                }),
                (0, N.Z)(e, !0)
            )
        ),
            (this._trackedViewed = !0));
    }
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: l } = this.props;
        return (0, r.jsx)(P.Z, {
            isAuthenticated: l,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(P.Z.Icon, {
                                  icon: d.lO_,
                                  'aria-label': eo.intl.string(eo.t['P1/Erq'])
                              }),
                              (0, r.jsx)(P.Z.Title, { children: n.name })
                          ]
                      })
                    : null != t && t.premium
                      ? (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(P.Z.Icon, {
                                    icon: d.SrA,
                                    'aria-label': eo.intl.string(eo.t.Ipxkoq)
                                }),
                                (0, r.jsx)(ee.Z, { sku: t })
                            ]
                        })
                      : null != t
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsx)(P.Z.Icon, {
                                      icon: d.lO_,
                                      'aria-label': eo.intl.string(eo.t['P1/Erq'])
                                  }),
                                  (0, r.jsx)(P.Z.Title, { children: t.name })
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
                          type: el.s9s.VIDEO,
                          thumbnailSrc: (0, F._W)(e.id, t, 1024, 'webp'),
                          src: (0, F._W)(e.id, t),
                          height: r,
                          width: n
                      }
                    : {
                          type: el.s9s.IMG,
                          src: (0, F._W)(e.id, t, 1024),
                          height: r,
                          width: n
                      };
            }
        }
        if (null != i)
            return {
                type: el.s9s.YOUTUBE_VIDEO,
                youtubeVideoId: i
            };
        throw Error('Store carousel item must have one of assetId or youtubeVideoId');
    }
    renderHeaderAssets(e, t, n) {
        let { theme: i } = this.props,
            l = t.headerBackground,
            a = (0, c.ap)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == l || null == a
            ? (0, r.jsx)('div', { className: es.noHeaderSpacer })
            : (0, r.jsxs)('div', {
                  className: es.headerAssets,
                  children: [
                      (0, r.jsx)('div', {
                          className: es.headerBackground,
                          style: { backgroundImage: 'url('.concat((0, F._W)(e.id, l, 1024, 'png'), ')') }
                      }),
                      (0, r.jsx)('img', {
                          className: es.headerLogo,
                          src: (0, F._W)(e.id, a, 1024, 'png'),
                          alt: n.name
                      })
                  ]
              });
    }
    renderWhyYouMightLikeThis(e, t) {
        return (0, r.jsx)($.Z, {
            sku: e,
            storeListing: t,
            className: es.whyYouMightLikeIt
        });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: i } = this.props;
        return (0, r.jsx)(er.Z, {
            skuId: t.id,
            guild: e.guild,
            className: es.guildInvite,
            inChannel: null != n,
            pageSize: i
        });
    }
    renderFeatures(e) {
        return (0, r.jsx)(K.Z, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, r.jsx)(et.Z, {
                  className: es.systemRequirements,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize
              });
    }
    renderDescription(e, t, n) {
        let { description: l } = t;
        if (null == l) throw Error('Rendering ApplicationStoreListing without description');
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(v.Z, {
                    tag: 'h1',
                    children: eo.intl.format(eo.t.tluX4O, { name: n.name })
                }),
                (0, r.jsx)(b.Z, {}),
                (0, r.jsx)(Y.Z, {
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
        return (0, r.jsx)(W.Z, {
            sku: e,
            className: es.contentRating
        });
    }
    renderApplicationLegalInfo(e) {
        return (0, r.jsx)(q.Z, {
            sku: e,
            className: es.legalInfo
        });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = [],
            l = n.getSplashURL(1024);
        (null != l && i.push(l), null != t.headerLogoLightTheme && i.unshift((0, F._W)(n.id, t.headerLogoLightTheme, 1024, 'jpg')));
        let a = C.Z.Product({
                name: e.name,
                description: null != e.summary && '' !== e.summary ? e.summary : t.tagline,
                image: C.Z.Product.Image(i),
                sku: e.id
            }),
            o = e.getPrice();
        if (null != o) {
            let { amount: e, currency: t } = o;
            a.offers = C.Z.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, H.T4)(e, t, { style: 'decimal' })
            });
        }
        let s = C.Z.ItemPage({ mainEntity: a });
        return (0, r.jsx)(C.Z, { data: s });
    }
    renderSmall(e, t, n) {
        return (0, r.jsxs)('div', {
            className: a()(es.listing, es.listingSmall),
            children: [this.renderHeaderAssets(e, t, n), this.renderCarousel(e, t), this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
        });
    }
    renderLarge(e, t, n) {
        return (0, r.jsxs)('div', {
            className: es.listing,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, r.jsx)('div', {
                    className: es.listingLarge,
                    children: (0, r.jsxs)('div', {
                        className: es.body,
                        children: [
                            (0, r.jsxs)('div', {
                                className: es.leftColumn,
                                children: [this.renderWhyYouMightLikeThis(n, t), this.renderDescription(e, t, n), this.renderSystemRequirements(n), this.renderApplicationContentRating(n), this.renderApplicationLegalInfo(n)]
                            }),
                            (0, r.jsxs)('div', {
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
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, r.jsx)(I.Z, {
                        align: I.Z.Align.CENTER,
                        justify: I.Z.Justify.CENTER,
                        children: (0, r.jsx)(d.$jN, { className: es.spinner })
                    })
                ]
            });
        if (!l && t.showAgeGate) {
            let n = a
                ? null
                : (0, r.jsx)('div', {
                      className: es.gatedListing,
                      children: this.renderListing()
                  });
            return (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)(S.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), (0, r.jsx)(Q.Z, { game: e }), n]
            });
        }
        return a
            ? (0, r.jsxs)('div', {
                  className: es.listingWrapper,
                  children: [
                      (0, r.jsx)(S.yY, { location: e.name }),
                      this.renderJsonLD(),
                      (0, r.jsx)(m.Z, {
                          section: el.jXE.NAVIGATION,
                          children: this.renderHeader(e, t)
                      }),
                      (0, r.jsx)(m.Z, {
                          section: el.jXE.BODY,
                          children: this.renderListing()
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  children: [(0, r.jsx)(S.yY, { location: e.name }), this.renderJsonLD(), this.renderHeader(e, t), this.renderListing()]
              });
    }
    constructor(...e) {
        (super(...e),
            ec(this, 'showCopyLinkTextTimeout', new s.V7()),
            ec(this, '_trackedViewed', !1),
            ec(this, '_analyticsSource', null),
            ec(this, '_extraAnalyticsProperties', null),
            ec(this, 'state', {
                showHeaderPurchaseUnit: !1,
                showLinkCopied: !1
            }),
            ec(this, 'trackCarouselScroll', (e, t, n) => {
                let { sku: r } = this.props;
                null != r &&
                    G.default.track(
                        el.rMx.STORE_LISTING_MEDIA_SCROLLED,
                        ed(eu({}, (0, N.Z)(r)), {
                            card_index: n,
                            card_type: e.type === el.s9s.IMG ? 'image' : 'video'
                        })
                    );
            }),
            ec(this, 'copyCurrentUrl', () => {
                var e;
                let { location: t } = this.props,
                    n = ((e = t.pathname), ''.concat(location.protocol, '//').concat(location.host).concat(e));
                (0, B.JG)(n, () =>
                    this.setState({ showLinkCopied: !0 }, () => {
                        this.showCopyLinkTextTimeout.start(1500, () => {
                            this.setState({ showLinkCopied: !1 });
                        });
                    })
                );
            }),
            ec(this, 'handleCreateInstantInvite', () => {
                let { channel: e, guild: t } = this.props;
                null != e &&
                    null != t &&
                    (0, d.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                ed(eu({}, n), {
                                    guild: t,
                                    channel: e,
                                    source: el.t4x.GUILD_CHANNELS
                                })
                            );
                    });
            }),
            ec(this, 'renderInviteLink', () => {
                let { channel: e, guild: t } = this.props;
                return null != e && null != t && (Z.Z.can(el.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
                    ? (0, r.jsx)(u.zx, {
                          'aria-label': eo.intl.string(eo.t.zJrgTE),
                          look: u.zx.Looks.BLANK,
                          size: u.zx.Sizes.NONE,
                          onClick: this.handleCreateInstantInvite,
                          className: es.link,
                          children: (0, r.jsx)(d.xPt, {
                              size: 'md',
                              color: 'currentColor',
                              className: es.linkIcon
                          })
                      })
                    : null;
            }),
            ec(this, 'renderCopyLink', () => {
                let { showLinkCopied: e } = this.state;
                return this.isChannelType
                    ? this.renderInviteLink()
                    : (0, r.jsx)(d.ua7, {
                          text: e ? eo.intl.string(eo.t.uvTCOT) : null,
                          position: 'left',
                          forceOpen: e,
                          children: (t) => {
                              let { onMouseEnter: n, onMouseLeave: i } = t;
                              return (0, r.jsx)(u.zx, {
                                  'aria-label': e ? eo.intl.string(eo.t.uvTCOT) : eo.intl.string(eo.t.WqhZsr),
                                  look: u.zx.Looks.BLANK,
                                  size: u.zx.Sizes.NONE,
                                  onClick: this.copyCurrentUrl,
                                  onMouseEnter: n,
                                  onMouseLeave: i,
                                  className: es.link,
                                  children: (0, r.jsx)(d.xPt, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: es.linkIcon
                                  })
                              });
                          }
                      });
            }),
            ec(this, 'renderHeaderToolbar', (e, t) => {
                let {
                        isInTestMode: n,
                        slug: i,
                        storeListing: l,
                        analyticsContext: { location: o }
                    } = this.props,
                    { showHeaderPurchaseUnit: s } = this.state;
                return (0, r.jsxs)('div', {
                    className: es.headerBarListing,
                    children: [
                        (0, r.jsx)('div', {
                            className: es.headerSection,
                            children:
                                n && null != t
                                    ? (0, r.jsx)(en.Z, {
                                          size: en.y.Sizes.MIN,
                                          dropdownSize: en.y.DropdownSizes.MEDIUM,
                                          look: en.y.Looks.OUTLINED,
                                          color: en.y.Colors.RED,
                                          skuId: t.id,
                                          className: es.testModeSelectButton,
                                          currentStoreListingId: null != l ? l.id : null,
                                          onStoreListingSelect: (e) => {
                                              null != t &&
                                                  (0, g.yt)(t.id, {
                                                      slug: i,
                                                      analyticsSource: {
                                                          page: o.page,
                                                          section: el.jXE.NAVIGATION,
                                                          object: null
                                                      },
                                                      storeListingId: e.id
                                                  });
                                          }
                                      })
                                    : null
                        }),
                        (0, r.jsx)('div', {
                            className: es.headerSection,
                            children: (0, r.jsxs)('div', {
                                className: a()(es.headerPurchase, { [es.active]: s }),
                                children: [
                                    null != t ? (0, T.Z)(t) : null,
                                    null != e && null != t ? (0, r.jsx)('div', { children: 'deprecated!' }) : null,
                                    (0, r.jsx)(J.Z, {
                                        messageStyle: J.G.SHORT,
                                        className: es.purchaseError
                                    })
                                ]
                            })
                        }),
                        this.renderCopyLink()
                    ]
                });
            }),
            ec(this, 'renderCarousel', (e, t) => {
                if (0 === t.carouselItems.length) return null;
                let { pageSize: n, isFocused: i } = this.props;
                return (0, r.jsx)(m.Z, {
                    section: el.jXE.HERO,
                    children: (0, r.jsx)(X.Z, {
                        pageSize: n,
                        items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                        autoplayInterval: 8000,
                        paused: !i,
                        onIntentionalChange: this.trackCarouselScroll
                    })
                });
            }),
            ec(this, 'renderListing', () => {
                let { application: e, storeListing: t, sku: n, pageSize: i } = this.props;
                return null == e || null == n || null == t || t.isSlimDirectoryVersion()
                    ? (0, r.jsx)(I.Z, {
                          align: I.Z.Align.CENTER,
                          justify: I.Z.Justify.CENTER,
                          children: (0, r.jsx)(d.$jN, {})
                      })
                    : i === ei.b.SMALL
                      ? this.renderSmall(e, t, n)
                      : this.renderLarge(e, t, n);
            }));
    }
}
let eh = (0, _.Z)(
    (0, O.Z)(
        o.ZP.connectStores([L.Z, A.Z, j.default, U.Z, k.Z, D.Z, M.Z, E.Z, y.Z, w.Z, x.Z, R.Z], (e) => {
            let t,
                n,
                r,
                { inputSkuId: i, applicationId: l, storeListingId: a, isAuthenticated: o, channel: s } = e;
            if (null == l) {
                if (null == i) throw Error('Needs applicationId or skuId');
                ((t = i), null != (l = null != (n = D.Z.get(i)) ? n.applicationId : null) && (r = y.Z.getApplication(l)));
            } else if (null == i) {
                if (null == l) throw Error('Needs applicationId or skuId');
                (null != (r = y.Z.getApplication(l)) && (t = r.destinationSkuId), (n = null != t ? D.Z.get(t) : null));
            }
            (null == n ? void 0 : n.flags) != null && (0, V.yE)(n.flags, el.l4R.STICKER_PACK) && (n = null);
            let c = null != l && (M.Z.inTestModeForApplication(l) || E.Z.inDevModeForApplication(l));
            return {
                skuId: t,
                application: null != l ? y.Z.getApplication(l) : null,
                isFetchingEntitlements: null != l && R.Z.applicationIdsFetching.has(l),
                didFetchEntitlements: null != l && R.Z.applicationIdsFetched.has(l),
                shouldFetchStatistics: o && null != l && w.Z.shouldFetchStatisticsForApplication(l),
                sku: n,
                isFocused: U.Z.isFocused(),
                storeListing: k.Z.getStoreListing({
                    storeListingId: a,
                    skuId: t,
                    channelId: null != s ? s.id : null,
                    isTestMode: c
                }),
                isInTestMode: null != l && c,
                matureAgree: L.Z.didMatureAgree,
                theme: A.Z.theme,
                locale: j.default.locale,
                guild: null != s ? x.Z.getGuild(s.getGuildId()) : null
            };
        })(ep)
    )
);
