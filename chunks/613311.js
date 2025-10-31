n.d(t, { Z: () => em }), n(415506), n(953529), n(539854), n(290780), n(388685), n(997841);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(846519),
    c = n(28664),
    u = n(780384),
    d = n(755721),
    p = n(481060),
    f = n(570140),
    m = n(659429),
    h = n(496929),
    g = n(558381),
    _ = n(410575),
    b = n(224336),
    E = n(730749),
    O = n(666743),
    I = n(115130),
    y = n(812206),
    v = n(770146),
    C = n(600164),
    S = n(606081),
    T = n(252618),
    N = n(100159),
    j = n(646288),
    P = n(984370),
    x = n(706454),
    A = n(210887),
    Z = n(430824),
    w = n(496675),
    L = n(525395),
    R = n(558314),
    D = n(580130),
    M = n(55563),
    k = n(551428),
    U = n(695103),
    G = n(451478),
    B = n(626135),
    H = n(572004),
    V = n(630388),
    F = n(937615),
    z = n(73346),
    Y = n(3570),
    W = n(689796),
    q = n(15470),
    K = n(506648),
    Q = n(449275),
    J = n(445986),
    X = n(119520),
    $ = n(450233),
    ee = n(726581),
    et = n(74153),
    en = n(125930),
    er = n(178071),
    ei = n(176055),
    el = n(843445),
    ea = n(981631),
    es = n(186901),
    eo = n(388032),
    ec = n(561537);
function eu(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eu(e, t, n[t]);
            });
    }
    return e;
}
function ep(e, t) {
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
class ef extends i.PureComponent {
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let {
            sku: e,
            storeListing: t,
            isFetchingEntitlements: n,
            shouldFetchStatistics: r,
            didFetchEntitlements: i,
            location: l,
            fetchStoreListing: a,
        } = this.props;
        if (null != l.state) {
            let { analyticsSource: e, analyticsProperties: t } = l.state;
            (this._analyticsSource = e), (this._extraAnalyticsProperties = t);
        } else this._analyticsSource = ea.SaU;
        (null == t || t.isSlimDirectoryVersion()) && a(),
            null != e && (n || i || (0, h.yD)(e.applicationId), r && f.Z.wait(() => (0, m.$)(e.applicationId))),
            this.trackViewed(),
            this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let {
            locale: t,
            sku: n,
            shouldFetchStatistics: r,
            skuId: i,
            storeListingId: l,
            slug: a,
            storeListing: s,
            fetchStoreListing: o,
        } = this.props;
        if (
            (s !== e.storeListing &&
                null != s &&
                (0, Y.s)(es.jE.STORE_LISTING, {
                    skuId: i,
                    slug: a,
                }),
            (t !== e.locale || i !== e.skuId) && o(),
            r && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error("Unexpected missing sku");
            f.Z.wait(() => (0, m.$)(n.applicationId));
        }
        (i !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = !1),
            this.trackViewed(),
            this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t },
        } = this.props;
        null != t &&
            B.default.track(ea.rMx.STORE_LISTING_EXITED, {
                load_id: e,
                duration_ms: Date.now() - t,
            });
    }
    replaceUrlWithSlug() {}
    trackViewed() {
        let { sku: e, storeListing: t, hasFetchedNews: n, analyticsContext: r } = this.props;
        if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n))
            return;
        let i = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
            images: 0,
            videos: 0,
        });
        B.default.track(
            ea.rMx.STORE_LISTING_VIEWED,
            ed(
                ep(ed({}, this._extraAnalyticsProperties), {
                    load_id: r.loadId,
                    has_description: null != t.description && t.description.length > 0,
                    has_staff_review: null != t.staffNotes,
                    carousel_image_count: i.images,
                    carousel_video_count: i.videos,
                    location: r.location.page,
                    source: this._analyticsSource,
                }),
                (0, N.Z)(e, !0),
            ),
        ),
            (this._trackedViewed = !0);
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
                                  icon: p.lO_,
                                  "aria-label": eo.intl.string(eo.t["P1/Erq"]),
                              }),
                              (0, r.jsx)(P.Z.Title, { children: n.name }),
                          ],
                      })
                    : null != t && t.premium
                      ? (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(P.Z.Icon, {
                                    icon: p.SrA,
                                    "aria-label": eo.intl.string(eo.t.Ipxkog),
                                }),
                                (0, r.jsx)(et.Z, { sku: t }),
                            ],
                        })
                      : null != t
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsx)(P.Z.Icon, {
                                      icon: p.lO_,
                                      "aria-label": eo.intl.string(eo.t["P1/Erq"]),
                                  }),
                                  (0, r.jsx)(P.Z.Title, { children: t.name }),
                              ],
                          })
                        : null,
        });
    }
    parseMediaItems(e, t, n) {
        let { assetId: r, youtubeVideoId: i } = t;
        if (null != r) {
            let t = n.find((e) => e.id === r);
            if (null != t) {
                let { width: n, height: r } = t;
                if (null == n || null == r)
                    throw Error(
                        "ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined",
                    );
                return t.mimeType.startsWith("video/")
                    ? {
                          type: ea.s9s.VIDEO,
                          thumbnailSrc: (0, z._W)(e.id, t, 1024, "webp"),
                          src: (0, z._W)(e.id, t),
                          height: r,
                          width: n,
                      }
                    : {
                          type: ea.s9s.IMG,
                          src: (0, z._W)(e.id, t, 1024),
                          height: r,
                          width: n,
                      };
            }
        }
        if (null != i)
            return {
                type: ea.s9s.YOUTUBE_VIDEO,
                youtubeVideoId: i,
            };
        throw Error("Store carousel item must have one of assetId or youtubeVideoId");
    }
    renderHeaderAssets(e, t, n) {
        let { theme: i } = this.props,
            l = t.headerBackground,
            a = (0, u.ap)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == l || null == a
            ? (0, r.jsx)("div", { className: ec.noHeaderSpacer })
            : (0, r.jsxs)("div", {
                  className: ec.headerAssets,
                  children: [
                      (0, r.jsx)("div", {
                          className: ec.headerBackground,
                          style: { backgroundImage: "url(".concat((0, z._W)(e.id, l, 1024, "png"), ")") },
                      }),
                      (0, r.jsx)("img", {
                          className: ec.headerLogo,
                          src: (0, z._W)(e.id, a, 1024, "png"),
                          alt: n.name,
                      }),
                  ],
              });
    }
    renderWhyYouMightLikeThis(e, t) {
        return (0, r.jsx)(ee.Z, {
            sku: e,
            storeListing: t,
            className: ec.whyYouMightLikeIt,
        });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: i } = this.props;
        return (0, r.jsx)(ei.Z, {
            skuId: t.id,
            guild: e.guild,
            className: ec.guildInvite,
            inChannel: null != n,
            pageSize: i,
        });
    }
    renderFeatures(e) {
        return (0, r.jsx)(K.Z, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, r.jsx)(en.Z, {
                  className: ec.systemRequirements,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize,
              });
    }
    renderDescription(e, t, n) {
        let { description: l } = t;
        if (null == l) throw Error("Rendering ApplicationStoreListing without description");
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(v.Z, {
                    tag: "h1",
                    children: eo.intl.format(eo.t.tluX4B, { name: n.name }),
                }),
                (0, r.jsx)(b.Z, {}),
                (0, r.jsx)(q.Z, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: l,
                    className: ec.description,
                    assets: t.assets,
                }),
            ],
        });
    }
    renderApplicationContentRating(e) {
        return (0, r.jsx)(W.Z, {
            sku: e,
            className: ec.contentRating,
        });
    }
    renderApplicationLegalInfo(e) {
        return (0, r.jsx)(Q.Z, {
            sku: e,
            className: ec.legalInfo,
        });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = [],
            l = n.getSplashURL(1024);
        null != l && i.push(l),
            null != t.headerLogoLightTheme && i.unshift((0, z._W)(n.id, t.headerLogoLightTheme, 1024, "jpg"));
        let a = S.Z.Product({
                name: e.name,
                description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
                image: S.Z.Product.Image(i),
                sku: e.id,
            }),
            s = e.getPrice();
        if (null != s) {
            let { amount: e, currency: t } = s;
            a.offers = S.Z.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, F.T4)(e, t, { style: "decimal" }),
            });
        }
        let o = S.Z.ItemPage({ mainEntity: a });
        return (0, r.jsx)(S.Z, { data: o });
    }
    renderSmall(e, t, n) {
        return (0, r.jsxs)("div", {
            className: a()(ec.listing, ec.listingSmall),
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                this.renderWhyYouMightLikeThis(n, t),
                this.renderDescription(e, t, n),
                this.renderVerifiedGuildInvite(t, n),
                this.renderFeatures(n),
                this.renderSystemRequirements(n),
                this.renderApplicationContentRating(n),
                this.renderApplicationLegalInfo(n),
            ],
        });
    }
    renderLarge(e, t, n) {
        return (0, r.jsxs)("div", {
            className: ec.listing,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, r.jsx)("div", {
                    className: ec.listingLarge,
                    children: (0, r.jsxs)("div", {
                        className: ec.body,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ec.leftColumn,
                                children: [
                                    this.renderWhyYouMightLikeThis(n, t),
                                    this.renderDescription(e, t, n),
                                    this.renderSystemRequirements(n),
                                    this.renderApplicationContentRating(n),
                                    this.renderApplicationLegalInfo(n),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: ec.rightColumn,
                                children: [this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n)],
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { application: e, sku: t, storeListing: n, matureAgree: l, isAuthenticated: a } = this.props;
        if (null == e || null == t || null == n || n.isSlimDirectoryVersion())
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, r.jsx)(C.Z, {
                        align: C.Z.Align.CENTER,
                        justify: C.Z.Justify.CENTER,
                        children: (0, r.jsx)(p.$jN, { className: ec.spinner }),
                    }),
                ],
            });
        if (!l && t.showAgeGate) {
            let n = a
                ? null
                : (0, r.jsx)("div", {
                      className: ec.gatedListing,
                      children: this.renderListing(),
                  });
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(T.yY, { location: e.name }),
                    this.renderJsonLD(),
                    this.renderHeader(e, t),
                    (0, r.jsx)(X.Z, { game: e }),
                    n,
                ],
            });
        }
        return a
            ? (0, r.jsxs)("div", {
                  className: ec.listingWrapper,
                  children: [
                      (0, r.jsx)(T.yY, { location: e.name }),
                      this.renderJsonLD(),
                      (0, r.jsx)(_.Z, {
                          section: ea.jXE.NAVIGATION,
                          children: this.renderHeader(e, t),
                      }),
                      (0, r.jsx)(_.Z, {
                          section: ea.jXE.BODY,
                          children: this.renderListing(),
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(T.yY, { location: e.name }),
                      this.renderJsonLD(),
                      this.renderHeader(e, t),
                      this.renderListing(),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eu(this, "showCopyLinkTextTimeout", new o.V7()),
            eu(this, "_trackedViewed", !1),
            eu(this, "_analyticsSource", null),
            eu(this, "_extraAnalyticsProperties", null),
            eu(this, "state", {
                showHeaderPurchaseUnit: !1,
                showLinkCopied: !1,
            }),
            eu(this, "trackCarouselScroll", (e, t, n) => {
                let { sku: r } = this.props;
                null != r &&
                    B.default.track(
                        ea.rMx.STORE_LISTING_MEDIA_SCROLLED,
                        ep(ed({}, (0, N.Z)(r)), {
                            card_index: n,
                            card_type: e.type === ea.s9s.IMG ? "image" : "video",
                        }),
                    );
            }),
            eu(this, "copyCurrentUrl", () => {
                var e;
                let { location: t } = this.props,
                    n = ((e = t.pathname), "".concat(location.protocol, "//").concat(location.host).concat(e));
                (0, H.JG)(n, () =>
                    this.setState({ showLinkCopied: !0 }, () => {
                        this.showCopyLinkTextTimeout.start(1500, () => {
                            this.setState({ showLinkCopied: !1 });
                        });
                    }),
                );
            }),
            eu(this, "handleCreateInstantInvite", () => {
                let { channel: e, guild: t } = this.props;
                null != e &&
                    null != t &&
                    (0, p.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e("7654"), n.e("89772")]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                ep(ed({}, n), {
                                    guild: t,
                                    channel: e,
                                    source: ea.t4x.GUILD_CHANNELS,
                                }),
                            );
                    });
            }),
            eu(this, "renderInviteLink", () => {
                let { channel: e, guild: t } = this.props;
                return null != e && null != t && (w.Z.can(ea.Plq.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
                    ? (0, r.jsx)(d.zx, {
                          "aria-label": eo.intl.string(eo.t.zJrgTG),
                          look: d.zx.Looks.BLANK,
                          size: d.zx.Sizes.NONE,
                          onClick: this.handleCreateInstantInvite,
                          className: ec.link,
                          children: (0, r.jsx)(p.xPt, {
                              size: "md",
                              color: "currentColor",
                              className: ec.linkIcon,
                          }),
                      })
                    : null;
            }),
            eu(this, "renderCopyLink", () => {
                let { showLinkCopied: e } = this.state;
                return this.isChannelType
                    ? this.renderInviteLink()
                    : (0, r.jsx)(c.u, {
                          text: e ? eo.intl.string(eo.t.uvTCOY) : null,
                          position: "left",
                          forceOpen: e,
                          children: (0, r.jsx)(d.zx, {
                              "aria-label": e ? eo.intl.string(eo.t.uvTCOY) : eo.intl.string(eo.t.WqhZss),
                              look: d.zx.Looks.BLANK,
                              size: d.zx.Sizes.NONE,
                              onClick: this.copyCurrentUrl,
                              className: ec.link,
                              children: (0, r.jsx)(p.xPt, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ec.linkIcon,
                              }),
                          }),
                      });
            }),
            eu(this, "renderHeaderToolbar", (e, t) => {
                let {
                        isInTestMode: n,
                        slug: i,
                        storeListing: l,
                        analyticsContext: { location: s },
                    } = this.props,
                    { showHeaderPurchaseUnit: o } = this.state;
                return (0, r.jsxs)("div", {
                    className: ec.headerBarListing,
                    children: [
                        (0, r.jsx)("div", {
                            className: ec.headerSection,
                            children:
                                n && null != t
                                    ? (0, r.jsx)(er.Z, {
                                          size: er.y.Sizes.MIN,
                                          dropdownSize: er.y.DropdownSizes.MEDIUM,
                                          look: er.y.Looks.OUTLINED,
                                          color: er.y.Colors.RED,
                                          skuId: t.id,
                                          className: ec.testModeSelectButton,
                                          currentStoreListingId: null != l ? l.id : null,
                                          onStoreListingSelect: (e) => {
                                              null != t &&
                                                  (0, g.yt)(t.id, {
                                                      slug: i,
                                                      analyticsSource: {
                                                          page: s.page,
                                                          section: ea.jXE.NAVIGATION,
                                                          object: null,
                                                      },
                                                      storeListingId: e.id,
                                                  });
                                          },
                                      })
                                    : null,
                        }),
                        (0, r.jsx)("div", {
                            className: ec.headerSection,
                            children: (0, r.jsxs)("div", {
                                className: a()(ec.headerPurchase, { [ec.active]: o }),
                                children: [
                                    null != t ? (0, j.Z)(t) : null,
                                    null != e && null != t ? (0, r.jsx)("div", { children: "deprecated!" }) : null,
                                    (0, r.jsx)($.Z, {
                                        messageStyle: $.G.SHORT,
                                        className: ec.purchaseError,
                                    }),
                                ],
                            }),
                        }),
                        this.renderCopyLink(),
                    ],
                });
            }),
            eu(this, "renderCarousel", (e, t) => {
                if (0 === t.carouselItems.length) return null;
                let { pageSize: n, isFocused: i } = this.props;
                return (0, r.jsx)(_.Z, {
                    section: ea.jXE.HERO,
                    children: (0, r.jsx)(J.Z, {
                        pageSize: n,
                        items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                        autoplayInterval: 8000,
                        paused: !i,
                        onIntentionalChange: this.trackCarouselScroll,
                    }),
                });
            }),
            eu(this, "renderListing", () => {
                let { application: e, storeListing: t, sku: n, pageSize: i } = this.props;
                return null == e || null == n || null == t || t.isSlimDirectoryVersion()
                    ? (0, r.jsx)(C.Z, {
                          align: C.Z.Align.CENTER,
                          justify: C.Z.Justify.CENTER,
                          children: (0, r.jsx)(p.$jN, {}),
                      })
                    : i === el.b.SMALL
                      ? this.renderSmall(e, t, n)
                      : this.renderLarge(e, t, n);
            });
    }
}
let em = (0, E.Z)(
    (0, O.Z)(
        s.ZP.connectStores([R.Z, A.Z, x.default, G.Z, k.Z, M.Z, U.Z, I.Z, y.Z, L.Z, Z.Z, D.Z], (e) => {
            let t,
                n,
                r,
                { inputSkuId: i, applicationId: l, storeListingId: a, isAuthenticated: s, channel: o } = e;
            if (null == l) {
                if (null == i) throw Error("Needs applicationId or skuId");
                (t = i), null != (l = null != (n = M.Z.get(i)) ? n.applicationId : null) && (r = y.Z.getApplication(l));
            } else if (null == i) {
                if (null == l) throw Error("Needs applicationId or skuId");
                null != (r = y.Z.getApplication(l)) && (t = r.destinationSkuId), (n = null != t ? M.Z.get(t) : null);
            }
            (null == n ? void 0 : n.flags) != null && (0, V.yE)(n.flags, ea.l4R.STICKER) && (n = null);
            let c = null != l && (U.Z.inTestModeForApplication(l) || I.Z.inDevModeForApplication(l));
            return {
                skuId: t,
                application: null != l ? y.Z.getApplication(l) : null,
                isFetchingEntitlements: null != l && D.Z.applicationIdsFetching.has(l),
                didFetchEntitlements: null != l && D.Z.applicationIdsFetched.has(l),
                shouldFetchStatistics: s && null != l && L.Z.shouldFetchStatisticsForApplication(l),
                sku: n,
                isFocused: G.Z.isFocused(),
                storeListing: k.Z.getStoreListing({
                    storeListingId: a,
                    skuId: t,
                    channelId: null != o ? o.id : null,
                    isTestMode: c,
                }),
                isInTestMode: null != l && c,
                matureAgree: R.Z.didMatureAgree,
                theme: A.Z.theme,
                locale: x.default.locale,
                guild: null != o ? Z.Z.getGuild(o.getGuildId()) : null,
            };
        })(ef),
    ),
);
