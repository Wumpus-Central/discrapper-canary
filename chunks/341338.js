n.d(t, { A: () => ec }), n(321073), n(667532), n(938796);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(665260),
    o = n(311907),
    d = n(451988),
    c = n(990078),
    u = n(582754),
    A = n(397927),
    h = n(73153),
    _ = n(436946),
    m = n(339048),
    p = n(800342),
    g = n(820284),
    E = n(774334),
    I = n(707606),
    f = n(490415),
    C = n(10716),
    T = n(587895),
    N = n(481859),
    S = n(235986),
    x = n(201497),
    v = n(726249),
    y = n(491509),
    b = n(360560),
    O = n(742589),
    L = n(773669),
    R = n(544028),
    P = n(71393),
    j = n(576705),
    D = n(609276),
    M = n(286805),
    w = n(469778),
    U = n(67480),
    G = n(328968),
    k = n(147964),
    V = n(531685),
    B = n(954571),
    H = n(957565),
    F = n(580630),
    Y = n(371794),
    W = n(970672),
    q = n(109495),
    K = n(179389),
    z = n(893638),
    $ = n(283508),
    Q = n(852860),
    X = n(363994),
    Z = n(612391),
    J = n(467201),
    ee = n(428899),
    et = n(897550),
    en = n(575613),
    ei = n(883391),
    er = n(590858),
    el = n(652215),
    ea = n(613057),
    es = n(985018),
    eo = n(185468);
class ed extends r.PureComponent {
    showCopyLinkTextTimeout = new d.Ep();
    _trackedViewed = !1;
    _analyticsSource = null;
    _extraAnalyticsProperties = null;
    state = { showHeaderPurchaseUnit: !1, showLinkCopied: !1 };
    get isChannelType() {
        return null != this.props.channel;
    }
    componentDidMount() {
        let {
            sku: e,
            storeListing: t,
            isFetchingEntitlements: n,
            shouldFetchStatistics: i,
            didFetchEntitlements: r,
            location: l,
            fetchStoreListing: a,
        } = this.props;
        if (null != l.state) {
            let { analyticsSource: e, analyticsProperties: t } = l.state;
            (this._analyticsSource = e), (this._extraAnalyticsProperties = t);
        } else this._analyticsSource = el.$OG;
        (null == t || t.isSlimDirectoryVersion()) && a(),
            null != e && (n || r || (0, m.LM)(e.applicationId), i && h.h.wait(() => (0, _.n)(e.applicationId))),
            this.trackViewed(),
            this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let {
            locale: t,
            sku: n,
            shouldFetchStatistics: i,
            skuId: r,
            storeListingId: l,
            slug: a,
            storeListing: s,
            fetchStoreListing: o,
        } = this.props;
        if (
            (s !== e.storeListing && null != s && (0, W.W)(ea.XK.STORE_LISTING, { skuId: r, slug: a }),
            (t !== e.locale || r !== e.skuId) && o(),
            i && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error("Unexpected missing sku");
            h.h.wait(() => (0, _.n)(n.applicationId));
        }
        (r !== e.skuId || l !== e.storeListingId) && (this._trackedViewed = !1),
            this.trackViewed(),
            this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t },
        } = this.props;
        null != t && B.default.track(el.HAw.STORE_LISTING_EXITED, { load_id: e, duration_ms: Date.now() - t });
    }
    replaceUrlWithSlug() {}
    trackViewed() {
        let { sku: e, storeListing: t, hasFetchedNews: n, analyticsContext: i } = this.props;
        if (this._trackedViewed || null == e || null == t || null == t.description || !(this.isChannelType || n))
            return;
        let r = t.carouselItems.reduce((e, t) => (null != t.assetId ? e.images++ : e.videos++, e), {
            images: 0,
            videos: 0,
        });
        B.default.track(el.HAw.STORE_LISTING_VIEWED, {
            ...this._extraAnalyticsProperties,
            load_id: i.loadId,
            has_description: null != t.description && t.description.length > 0,
            has_staff_review: null != t.staffNotes,
            carousel_image_count: r.images,
            carousel_video_count: r.videos,
            location: i.location.page,
            source: this._analyticsSource,
            ...(0, y.A)(e, !0),
        }),
            (this._trackedViewed = !0);
    }
    trackCarouselScroll = (e, t, n) => {
        let { sku: i } = this.props;
        null != i &&
            B.default.track(el.HAw.STORE_LISTING_MEDIA_SCROLLED, {
                ...(0, y.A)(i),
                card_index: n,
                card_type: e.type === el.geh.IMG ? "image" : "video",
            });
    };
    copyCurrentUrl = () => {
        var e;
        let { location: t } = this.props,
            n = ((e = t.pathname), `${location.protocol}//${location.host}${e}`);
        (0, H.C)(n, () =>
            this.setState({ showLinkCopied: !0 }, () => {
                this.showCopyLinkTextTimeout.start(1500, () => {
                    this.setState({ showLinkCopied: !1 });
                });
            }),
        );
    };
    handleCreateInstantInvite = () => {
        let { channel: e, guild: t } = this.props;
        null != e &&
            null != t &&
            (0, A.mMO)(async () => {
                let { default: r } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
                return (n) => (0, i.jsx)(r, { ...n, guild: t, channel: e, source: el.PE1.GUILD_CHANNELS });
            });
    };
    renderInviteLink = () => {
        let { channel: e, guild: t } = this.props;
        return null != e && null != t && (j.A.can(el.xBc.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
            ? (0, i.jsx)(A.K0, {
                  "aria-label": es.intl.string(es.t.zJrgTG),
                  variant: "icon-only",
                  size: "sm",
                  icon: A.qYV,
                  onClick: this.handleCreateInstantInvite,
              })
            : null;
    };
    renderCopyLink = () => {
        let { showLinkCopied: e } = this.state;
        return this.isChannelType
            ? this.renderInviteLink()
            : (0, i.jsx)(c.m, {
                  text: e ? es.intl.string(es.t.uvTCOY) : null,
                  position: "left",
                  forceOpen: e,
                  children: (0, i.jsx)(A.K0, {
                      "aria-label": e ? es.intl.string(es.t.uvTCOY) : es.intl.string(es.t.WqhZss),
                      variant: "icon-only",
                      size: "sm",
                      icon: A.qYV,
                      onClick: this.copyCurrentUrl,
                  }),
              });
    };
    renderHeaderToolbar = (e, t) => {
        let {
                isInTestMode: n,
                slug: r,
                storeListing: l,
                analyticsContext: { location: s },
            } = this.props,
            { showHeaderPurchaseUnit: o } = this.state;
        return (0, i.jsxs)("div", {
            className: eo.$u,
            children: [
                (0, i.jsx)("div", {
                    className: eo.ND,
                    children:
                        n && null != t
                            ? (0, i.jsx)(en.A, {
                                  size: en.J.Sizes.MIN,
                                  dropdownSize: en.J.DropdownSizes.MEDIUM,
                                  look: en.J.Looks.OUTLINED,
                                  color: en.J.Colors.RED,
                                  skuId: t.id,
                                  className: eo.eZ,
                                  currentStoreListingId: null != l ? l.id : null,
                                  onStoreListingSelect: (e) => {
                                      null != t &&
                                          (0, p.ct)(t.id, {
                                              slug: r,
                                              analyticsSource: {
                                                  page: s.page,
                                                  section: el.JJy.NAVIGATION,
                                                  object: null,
                                              },
                                              storeListingId: e.id,
                                          });
                                  },
                              })
                            : null,
                }),
                (0, i.jsx)("div", {
                    className: eo.ND,
                    children: (0, i.jsxs)("div", {
                        className: a()(eo.x3, { [eo.vu]: o }),
                        children: [
                            null != t ? (0, b.A)(t) : null,
                            null != e && null != t ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                            (0, i.jsx)(Z.A, { messageStyle: Z.g.SHORT, className: eo.Mb }),
                        ],
                    }),
                }),
                this.renderCopyLink(),
            ],
        });
    };
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: l } = this.props;
        return (0, i.jsx)(O.A, {
            isAuthenticated: l,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(O.A.Icon, { icon: A.gqV, "aria-label": es.intl.string(es.t["P1/Erq"]) }),
                              (0, i.jsx)(O.A.Title, { children: n.name }),
                          ],
                      })
                    : null != t && t.premium
                      ? (0, i.jsxs)(r.Fragment, {
                            children: [
                                (0, i.jsx)(O.A.Icon, { icon: A.tvc, "aria-label": es.intl.string(es.t.Ipxkog) }),
                                (0, i.jsx)(ee.A, { sku: t }),
                            ],
                        })
                      : null != t
                        ? (0, i.jsxs)(r.Fragment, {
                              children: [
                                  (0, i.jsx)(O.A.Icon, { icon: A.gqV, "aria-label": es.intl.string(es.t["P1/Erq"]) }),
                                  (0, i.jsx)(O.A.Title, { children: t.name }),
                              ],
                          })
                        : null,
        });
    }
    parseMediaItems(e, t, n) {
        let { assetId: i, youtubeVideoId: r } = t;
        if (null != i) {
            let t = n.find((e) => e.id === i);
            if (null != t) {
                let { width: n, height: i } = t;
                if (null == n || null == i)
                    throw Error(
                        "ApplicationStoreListing.parseMediaItems: Video and Image assets must have a width and height defined",
                    );
                return t.mimeType.startsWith("video/")
                    ? {
                          type: el.geh.VIDEO,
                          thumbnailSrc: (0, Y.YE)(e.id, t, 1024, "webp"),
                          src: (0, Y.YE)(e.id, t),
                          height: i,
                          width: n,
                      }
                    : { type: el.geh.IMG, src: (0, Y.YE)(e.id, t, 1024), height: i, width: n };
            }
        }
        if (null != r) return { type: el.geh.YOUTUBE_VIDEO, youtubeVideoId: r };
        throw Error("Store carousel item must have one of assetId or youtubeVideoId");
    }
    renderHeaderAssets(e, t, n) {
        let { theme: r } = this.props,
            l = t.headerBackground,
            a = (0, u.qB)(r) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == l || null == a
            ? (0, i.jsx)("div", { className: eo.Zt })
            : (0, i.jsxs)("div", {
                  className: eo.nT,
                  children: [
                      (0, i.jsx)("div", {
                          className: eo.y2,
                          style: { backgroundImage: `url(${(0, Y.YE)(e.id, l, 1024, "png")})` },
                      }),
                      (0, i.jsx)("img", { className: eo.nu, src: (0, Y.YE)(e.id, a, 1024, "png"), alt: n.name }),
                  ],
              });
    }
    renderCarousel = (e, t) => {
        if (0 === t.carouselItems.length) return null;
        let { pageSize: n, isFocused: r } = this.props;
        return (0, i.jsx)(g.A, {
            section: el.JJy.HERO,
            children: (0, i.jsx)(Q.A, {
                pageSize: n,
                items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                autoplayInterval: 8e3,
                paused: !r,
                onIntentionalChange: this.trackCarouselScroll,
            }),
        });
    };
    renderWhyYouMightLikeThis(e, t) {
        return (0, i.jsx)(J.A, { sku: e, storeListing: t, className: eo.ZM });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: r } = this.props;
        return (0, i.jsx)(ei.A, { skuId: t.id, guild: e.guild, className: eo.RO, inChannel: null != n, pageSize: r });
    }
    renderFeatures(e) {
        return (0, i.jsx)(z.A, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, i.jsx)(et.A, {
                  className: eo.wn,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize,
              });
    }
    renderDescription(e, t, n) {
        let { description: l } = t;
        if (null == l) throw Error("Rendering ApplicationStoreListing without description");
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(N.A, { tag: "h1", children: es.intl.format(es.t.tluX4B, { name: n.name }) }),
                (0, i.jsx)(E.A, {}),
                (0, i.jsx)(K.A, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: l,
                    className: eo.h_,
                    assets: t.assets,
                }),
            ],
        });
    }
    renderApplicationContentRating(e) {
        return (0, i.jsx)(q.A, { sku: e, className: eo.ZL });
    }
    renderApplicationLegalInfo(e) {
        return (0, i.jsx)($.A, { sku: e, className: eo.kk });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let r = [],
            l = n.getSplashURL(1024);
        null != l && r.push(l),
            null != t.headerLogoLightTheme && r.unshift((0, Y.YE)(n.id, t.headerLogoLightTheme, 1024, "jpg"));
        let a = x.A.Product({
                name: e.name,
                description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
                image: x.A.Product.Image(r),
                sku: e.id,
            }),
            s = e.getPrice();
        if (null != s) {
            let { amount: e, currency: t } = s;
            a.offers = x.A.Offer({ priceCurrency: t.toUpperCase(), price: (0, F.$g)(e, t, { style: "decimal" }) });
        }
        let o = x.A.ItemPage({ mainEntity: a });
        return (0, i.jsx)(x.A, { data: o });
    }
    renderSmall(e, t, n) {
        return (0, i.jsxs)("div", {
            className: a()(eo.RR, eo.S1),
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
        return (0, i.jsxs)("div", {
            className: eo.RR,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, i.jsx)("div", {
                    className: eo.ko,
                    children: (0, i.jsxs)("div", {
                        className: eo.rf,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eo.Cd,
                                children: [
                                    this.renderWhyYouMightLikeThis(n, t),
                                    this.renderDescription(e, t, n),
                                    this.renderSystemRequirements(n),
                                    this.renderApplicationContentRating(n),
                                    this.renderApplicationLegalInfo(n),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: eo.DK,
                                children: [this.renderVerifiedGuildInvite(t, n), this.renderFeatures(n)],
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    renderListing = () => {
        let { application: e, storeListing: t, sku: n, pageSize: r } = this.props;
        return null == e || null == n || null == t || t.isSlimDirectoryVersion()
            ? (0, i.jsx)(S.A, { align: S.A.Align.CENTER, justify: S.A.Justify.CENTER, children: (0, i.jsx)(A.y$y, {}) })
            : r === er.q.SMALL
              ? this.renderSmall(e, t, n)
              : this.renderLarge(e, t, n);
    };
    render() {
        let { application: e, sku: t, storeListing: n, matureAgree: l, isAuthenticated: a } = this.props;
        if (null == e || null == t || null == n || n.isSlimDirectoryVersion())
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, i.jsx)(S.A, {
                        align: S.A.Align.CENTER,
                        justify: S.A.Justify.CENTER,
                        children: (0, i.jsx)(A.y$y, { className: eo.u1 }),
                    }),
                ],
            });
        if (!l && t.showAgeGate) {
            let n = a ? null : (0, i.jsx)("div", { className: eo.uR, children: this.renderListing() });
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    (0, i.jsx)(v.HI, { location: e.name }),
                    this.renderJsonLD(),
                    this.renderHeader(e, t),
                    (0, i.jsx)(X.A, { game: e }),
                    n,
                ],
            });
        }
        return a
            ? (0, i.jsxs)("div", {
                  className: eo.I,
                  children: [
                      (0, i.jsx)(v.HI, { location: e.name }),
                      this.renderJsonLD(),
                      (0, i.jsx)(g.A, { section: el.JJy.NAVIGATION, children: this.renderHeader(e, t) }),
                      (0, i.jsx)(g.A, { section: el.JJy.BODY, children: this.renderListing() }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(v.HI, { location: e.name }),
                      this.renderJsonLD(),
                      this.renderHeader(e, t),
                      this.renderListing(),
                  ],
              });
    }
}
let ec = (0, I.A)(
    (0, f.A)(
        o.Ay.connectStores([M.A, R.A, L.default, V.A, G.A, U.A, k.A, C.A, T.A, D.A, P.A, w.A], (e) => {
            let t,
                n,
                i,
                { inputSkuId: r, applicationId: l, storeListingId: a, isAuthenticated: o, channel: d } = e;
            if (null == l) {
                if (null == r) throw Error("Needs applicationId or skuId");
                (t = r), null != (l = null != (n = U.A.get(r)) ? n.applicationId : null) && (i = T.A.getApplication(l));
            } else if (null == r) {
                if (null == l) throw Error("Needs applicationId or skuId");
                null != (i = T.A.getApplication(l)) && (t = i.destinationSkuId), (n = null != t ? U.A.get(t) : null);
            }
            n?.flags != null && (0, s.Lt)(n.flags, el.d68.STICKER) && (n = null);
            let c = null != l && (k.A.inTestModeForApplication(l) || C.A.inDevModeForApplication(l));
            return {
                skuId: t,
                application: null != l ? T.A.getApplication(l) : null,
                isFetchingEntitlements: null != l && w.A.applicationIdsFetching.has(l),
                didFetchEntitlements: null != l && w.A.applicationIdsFetched.has(l),
                shouldFetchStatistics: o && null != l && D.A.shouldFetchStatisticsForApplication(l),
                sku: n,
                isFocused: V.A.isFocused(),
                storeListing: G.A.getStoreListing({
                    storeListingId: a,
                    skuId: t,
                    channelId: null != d ? d.id : null,
                    isTestMode: c,
                }),
                isInTestMode: null != l && c,
                matureAgree: M.A.didMatureAgree,
                theme: R.A.theme,
                locale: L.default.locale,
                guild: null != d ? P.A.getGuild(d.getGuildId()) : null,
            };
        })(ed),
    ),
);
