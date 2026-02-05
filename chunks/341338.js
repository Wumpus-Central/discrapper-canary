n.d(t, { A: () => eu }), n(321073), n(667532), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(665260),
    o = n(311907),
    d = n(451988),
    c = n(990078),
    u = n(582754),
    A = n(421380),
    h = n(397927),
    _ = n(73153),
    m = n(436946),
    p = n(339048),
    g = n(800342),
    E = n(820284),
    f = n(774334),
    I = n(707606),
    C = n(490415),
    N = n(10716),
    T = n(587895),
    S = n(481859),
    x = n(235986),
    v = n(201497),
    b = n(726249),
    y = n(491509),
    L = n(360560),
    O = n(742589),
    R = n(773669),
    P = n(544028),
    j = n(71393),
    D = n(576705),
    w = n(609276),
    M = n(286805),
    U = n(469778),
    G = n(67480),
    k = n(328968),
    V = n(147964),
    B = n(531685),
    H = n(954571),
    F = n(957565),
    Y = n(580630),
    W = n(371794),
    q = n(970672),
    z = n(109495),
    K = n(179389),
    $ = n(893638),
    Q = n(283508),
    X = n(852860),
    Z = n(363994),
    J = n(612391),
    ee = n(467201),
    et = n(428899),
    en = n(897550),
    ei = n(575613),
    er = n(883391),
    ea = n(590858),
    el = n(652215),
    es = n(613057),
    eo = n(985018),
    ed = n(185468);
class ec extends r.PureComponent {
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
            location: a,
            fetchStoreListing: l,
        } = this.props;
        if (null != a.state) {
            let { analyticsSource: e, analyticsProperties: t } = a.state;
            (this._analyticsSource = e), (this._extraAnalyticsProperties = t);
        } else this._analyticsSource = el.$OG;
        (null == t || t.isSlimDirectoryVersion()) && l(),
            null != e && (n || r || (0, p.LM)(e.applicationId), i && _.h.wait(() => (0, m.n)(e.applicationId))),
            this.trackViewed(),
            this.replaceUrlWithSlug();
    }
    componentDidUpdate(e) {
        let {
            locale: t,
            sku: n,
            shouldFetchStatistics: i,
            skuId: r,
            storeListingId: a,
            slug: l,
            storeListing: s,
            fetchStoreListing: o,
        } = this.props;
        if (
            (s !== e.storeListing && null != s && (0, q.W)(es.XK.STORE_LISTING, { skuId: r, slug: l }),
            (t !== e.locale || r !== e.skuId) && o(),
            i && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error("Unexpected missing sku");
            _.h.wait(() => (0, m.n)(n.applicationId));
        }
        (r !== e.skuId || a !== e.storeListingId) && (this._trackedViewed = !1),
            this.trackViewed(),
            this.replaceUrlWithSlug();
    }
    componentWillUnmount() {
        this.showCopyLinkTextTimeout.stop();
        let {
            analyticsContext: { loadId: e, loadDate: t },
        } = this.props;
        null != t && H.default.track(el.HAw.STORE_LISTING_EXITED, { load_id: e, duration_ms: Date.now() - t });
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
        H.default.track(el.HAw.STORE_LISTING_VIEWED, {
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
            H.default.track(el.HAw.STORE_LISTING_MEDIA_SCROLLED, {
                ...(0, y.A)(i),
                card_index: n,
                card_type: e.type === el.geh.IMG ? "image" : "video",
            });
    };
    copyCurrentUrl = () => {
        var e;
        let { location: t } = this.props,
            n = ((e = t.pathname), `${location.protocol}//${location.host}${e}`);
        (0, F.C)(n, () =>
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
            (0, h.mMO)(async () => {
                let { default: r } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
                return (n) => (0, i.jsx)(r, { ...n, guild: t, channel: e, source: el.PE1.GUILD_CHANNELS });
            });
    };
    renderInviteLink = () => {
        let { channel: e, guild: t } = this.props;
        return null != e && null != t && (D.A.can(el.xBc.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
            ? (0, i.jsx)(A.$n, {
                  "aria-label": eo.intl.string(eo.t.zJrgTG),
                  look: A.$n.Looks.BLANK,
                  size: A.$n.Sizes.NONE,
                  onClick: this.handleCreateInstantInvite,
                  className: ed.nf,
                  children: (0, i.jsx)(h.qYV, { size: "md", color: "currentColor", className: ed.wP }),
              })
            : null;
    };
    renderCopyLink = () => {
        let { showLinkCopied: e } = this.state;
        return this.isChannelType
            ? this.renderInviteLink()
            : (0, i.jsx)(c.m, {
                  text: e ? eo.intl.string(eo.t.uvTCOY) : null,
                  position: "left",
                  forceOpen: e,
                  children: (0, i.jsx)(A.$n, {
                      "aria-label": e ? eo.intl.string(eo.t.uvTCOY) : eo.intl.string(eo.t.WqhZss),
                      look: A.$n.Looks.BLANK,
                      size: A.$n.Sizes.NONE,
                      onClick: this.copyCurrentUrl,
                      className: ed.nf,
                      children: (0, i.jsx)(h.qYV, { size: "md", color: "currentColor", className: ed.wP }),
                  }),
              });
    };
    renderHeaderToolbar = (e, t) => {
        let {
                isInTestMode: n,
                slug: r,
                storeListing: a,
                analyticsContext: { location: s },
            } = this.props,
            { showHeaderPurchaseUnit: o } = this.state;
        return (0, i.jsxs)("div", {
            className: ed.$u,
            children: [
                (0, i.jsx)("div", {
                    className: ed.ND,
                    children:
                        n && null != t
                            ? (0, i.jsx)(ei.A, {
                                  size: ei.J.Sizes.MIN,
                                  dropdownSize: ei.J.DropdownSizes.MEDIUM,
                                  look: ei.J.Looks.OUTLINED,
                                  color: ei.J.Colors.RED,
                                  skuId: t.id,
                                  className: ed.eZ,
                                  currentStoreListingId: null != a ? a.id : null,
                                  onStoreListingSelect: (e) => {
                                      null != t &&
                                          (0, g.ct)(t.id, {
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
                    className: ed.ND,
                    children: (0, i.jsxs)("div", {
                        className: l()(ed.x3, { [ed.vu]: o }),
                        children: [
                            null != t ? (0, L.A)(t) : null,
                            null != e && null != t ? (0, i.jsx)("div", { children: "deprecated!" }) : null,
                            (0, i.jsx)(J.A, { messageStyle: J.g.SHORT, className: ed.Mb }),
                        ],
                    }),
                }),
                this.renderCopyLink(),
            ],
        });
    };
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: a } = this.props;
        return (0, i.jsx)(O.A, {
            isAuthenticated: a,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(O.A.Icon, { icon: h.gqV, "aria-label": eo.intl.string(eo.t["P1/Erq"]) }),
                              (0, i.jsx)(O.A.Title, { children: n.name }),
                          ],
                      })
                    : null != t && t.premium
                      ? (0, i.jsxs)(r.Fragment, {
                            children: [
                                (0, i.jsx)(O.A.Icon, { icon: h.tvc, "aria-label": eo.intl.string(eo.t.Ipxkog) }),
                                (0, i.jsx)(et.A, { sku: t }),
                            ],
                        })
                      : null != t
                        ? (0, i.jsxs)(r.Fragment, {
                              children: [
                                  (0, i.jsx)(O.A.Icon, { icon: h.gqV, "aria-label": eo.intl.string(eo.t["P1/Erq"]) }),
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
                          thumbnailSrc: (0, W.YE)(e.id, t, 1024, "webp"),
                          src: (0, W.YE)(e.id, t),
                          height: i,
                          width: n,
                      }
                    : { type: el.geh.IMG, src: (0, W.YE)(e.id, t, 1024), height: i, width: n };
            }
        }
        if (null != r) return { type: el.geh.YOUTUBE_VIDEO, youtubeVideoId: r };
        throw Error("Store carousel item must have one of assetId or youtubeVideoId");
    }
    renderHeaderAssets(e, t, n) {
        let { theme: r } = this.props,
            a = t.headerBackground,
            l = (0, u.qB)(r) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == a || null == l
            ? (0, i.jsx)("div", { className: ed.Zt })
            : (0, i.jsxs)("div", {
                  className: ed.nT,
                  children: [
                      (0, i.jsx)("div", {
                          className: ed.y2,
                          style: { backgroundImage: `url(${(0, W.YE)(e.id, a, 1024, "png")})` },
                      }),
                      (0, i.jsx)("img", { className: ed.nu, src: (0, W.YE)(e.id, l, 1024, "png"), alt: n.name }),
                  ],
              });
    }
    renderCarousel = (e, t) => {
        if (0 === t.carouselItems.length) return null;
        let { pageSize: n, isFocused: r } = this.props;
        return (0, i.jsx)(E.A, {
            section: el.JJy.HERO,
            children: (0, i.jsx)(X.A, {
                pageSize: n,
                items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                autoplayInterval: 8e3,
                paused: !r,
                onIntentionalChange: this.trackCarouselScroll,
            }),
        });
    };
    renderWhyYouMightLikeThis(e, t) {
        return (0, i.jsx)(ee.A, { sku: e, storeListing: t, className: ed.ZM });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: r } = this.props;
        return (0, i.jsx)(er.A, { skuId: t.id, guild: e.guild, className: ed.RO, inChannel: null != n, pageSize: r });
    }
    renderFeatures(e) {
        return (0, i.jsx)($.A, { sku: e });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, i.jsx)(en.A, {
                  className: ed.wn,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize,
              });
    }
    renderDescription(e, t, n) {
        let { description: a } = t;
        if (null == a) throw Error("Rendering ApplicationStoreListing without description");
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(S.A, { tag: "h1", children: eo.intl.format(eo.t.tluX4B, { name: n.name }) }),
                (0, i.jsx)(f.A, {}),
                (0, i.jsx)(K.A, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: a,
                    className: ed.h_,
                    assets: t.assets,
                }),
            ],
        });
    }
    renderApplicationContentRating(e) {
        return (0, i.jsx)(z.A, { sku: e, className: ed.ZL });
    }
    renderApplicationLegalInfo(e) {
        return (0, i.jsx)(Q.A, { sku: e, className: ed.kk });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let r = [],
            a = n.getSplashURL(1024);
        null != a && r.push(a),
            null != t.headerLogoLightTheme && r.unshift((0, W.YE)(n.id, t.headerLogoLightTheme, 1024, "jpg"));
        let l = v.A.Product({
                name: e.name,
                description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
                image: v.A.Product.Image(r),
                sku: e.id,
            }),
            s = e.getPrice();
        if (null != s) {
            let { amount: e, currency: t } = s;
            l.offers = v.A.Offer({ priceCurrency: t.toUpperCase(), price: (0, Y.$g)(e, t, { style: "decimal" }) });
        }
        let o = v.A.ItemPage({ mainEntity: l });
        return (0, i.jsx)(v.A, { data: o });
    }
    renderSmall(e, t, n) {
        return (0, i.jsxs)("div", {
            className: l()(ed.RR, ed.S1),
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
            className: ed.RR,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, i.jsx)("div", {
                    className: ed.ko,
                    children: (0, i.jsxs)("div", {
                        className: ed.rf,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ed.Cd,
                                children: [
                                    this.renderWhyYouMightLikeThis(n, t),
                                    this.renderDescription(e, t, n),
                                    this.renderSystemRequirements(n),
                                    this.renderApplicationContentRating(n),
                                    this.renderApplicationLegalInfo(n),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: ed.DK,
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
            ? (0, i.jsx)(x.A, { align: x.A.Align.CENTER, justify: x.A.Justify.CENTER, children: (0, i.jsx)(h.y$y, {}) })
            : r === ea.q.SMALL
              ? this.renderSmall(e, t, n)
              : this.renderLarge(e, t, n);
    };
    render() {
        let { application: e, sku: t, storeListing: n, matureAgree: a, isAuthenticated: l } = this.props;
        if (null == e || null == t || null == n || n.isSlimDirectoryVersion())
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    this.renderHeader(e, t),
                    (0, i.jsx)(x.A, {
                        align: x.A.Align.CENTER,
                        justify: x.A.Justify.CENTER,
                        children: (0, i.jsx)(h.y$y, { className: ed.u1 }),
                    }),
                ],
            });
        if (!a && t.showAgeGate) {
            let n = l ? null : (0, i.jsx)("div", { className: ed.uR, children: this.renderListing() });
            return (0, i.jsxs)(r.Fragment, {
                children: [
                    (0, i.jsx)(b.HI, { location: e.name }),
                    this.renderJsonLD(),
                    this.renderHeader(e, t),
                    (0, i.jsx)(Z.A, { game: e }),
                    n,
                ],
            });
        }
        return l
            ? (0, i.jsxs)("div", {
                  className: ed.I,
                  children: [
                      (0, i.jsx)(b.HI, { location: e.name }),
                      this.renderJsonLD(),
                      (0, i.jsx)(E.A, { section: el.JJy.NAVIGATION, children: this.renderHeader(e, t) }),
                      (0, i.jsx)(E.A, { section: el.JJy.BODY, children: this.renderListing() }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(b.HI, { location: e.name }),
                      this.renderJsonLD(),
                      this.renderHeader(e, t),
                      this.renderListing(),
                  ],
              });
    }
}
let eu = (0, I.A)(
    (0, C.A)(
        o.Ay.connectStores([M.A, P.A, R.default, B.A, k.A, G.A, V.A, N.A, T.A, w.A, j.A, U.A], (e) => {
            let t,
                n,
                i,
                { inputSkuId: r, applicationId: a, storeListingId: l, isAuthenticated: o, channel: d } = e;
            if (null == a) {
                if (null == r) throw Error("Needs applicationId or skuId");
                (t = r), null != (a = null != (n = G.A.get(r)) ? n.applicationId : null) && (i = T.A.getApplication(a));
            } else if (null == r) {
                if (null == a) throw Error("Needs applicationId or skuId");
                null != (i = T.A.getApplication(a)) && (t = i.destinationSkuId), (n = null != t ? G.A.get(t) : null);
            }
            n?.flags != null && (0, s.Lt)(n.flags, el.d68.STICKER) && (n = null);
            let c = null != a && (V.A.inTestModeForApplication(a) || N.A.inDevModeForApplication(a));
            return {
                skuId: t,
                application: null != a ? T.A.getApplication(a) : null,
                isFetchingEntitlements: null != a && U.A.applicationIdsFetching.has(a),
                didFetchEntitlements: null != a && U.A.applicationIdsFetched.has(a),
                shouldFetchStatistics: o && null != a && w.A.shouldFetchStatisticsForApplication(a),
                sku: n,
                isFocused: B.A.isFocused(),
                storeListing: k.A.getStoreListing({
                    storeListingId: l,
                    skuId: t,
                    channelId: null != d ? d.id : null,
                    isTestMode: c,
                }),
                isInTestMode: null != a && c,
                matureAgree: M.A.didMatureAgree,
                theme: P.A.theme,
                locale: R.default.locale,
                guild: null != d ? j.A.getGuild(d.getGuildId()) : null,
            };
        })(ec),
    ),
);
