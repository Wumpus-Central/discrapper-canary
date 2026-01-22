n.d(t, {
    A: () => eh,
}),
    n(65821),
    n(228524),
    n(321073),
    n(667532),
    n(896048),
    n(938796);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(665260),
    o = n(311907),
    c = n(451988),
    u = n(990078),
    d = n(582754),
    p = n(421380),
    f = n(397927),
    h = n(73153),
    A = n(436946),
    g = n(339048),
    m = n(800342),
    b = n(820284),
    _ = n(774334),
    E = n(707606),
    O = n(490415),
    y = n(10716),
    I = n(587895),
    v = n(481859),
    S = n(235986),
    C = n(201497),
    N = n(726249),
    T = n(491509),
    j = n(360560),
    x = n(742589),
    P = n(773669),
    w = n(544028),
    L = n(71393),
    R = n(576705),
    D = n(609276),
    M = n(286805),
    k = n(469778),
    U = n(67480),
    G = n(328968),
    V = n(147964),
    B = n(531685),
    H = n(954571),
    F = n(957565),
    Y = n(580630),
    K = n(371794),
    z = n(970672),
    W = n(109495),
    q = n(179389),
    Q = n(893638),
    X = n(283508),
    Z = n(852860),
    J = n(363994),
    $ = n(612391),
    ee = n(467201),
    et = n(428899),
    en = n(897550),
    er = n(575613),
    ei = n(883391),
    el = n(590858),
    ea = n(652215),
    es = n(613057),
    eo = n(985018),
    ec = n(185468);

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
        } else this._analyticsSource = ea.$OG;
        (null == t || t.isSlimDirectoryVersion()) && a(),
            null != e && (n || i || (0, g.LM)(e.applicationId), r && h.h.wait(() => (0, A.n)(e.applicationId))),
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
                (0, z.W)(es.XK.STORE_LISTING, {
                    skuId: i,
                    slug: a,
                }),
            (t !== e.locale || i !== e.skuId) && o(),
            r && !e.shouldFetchStatistics)
        ) {
            if (null == n) throw Error("Unexpected missing sku");
            h.h.wait(() => (0, A.n)(n.applicationId));
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
            H.default.track(ea.HAw.STORE_LISTING_EXITED, {
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
        H.default.track(
            ea.HAw.STORE_LISTING_VIEWED,
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
                (0, T.A)(e, !0),
            ),
        ),
            (this._trackedViewed = !0);
    }
    renderHeader(e, t) {
        let { channel: n, isAuthenticated: l } = this.props;
        return (0, r.jsx)(x.A, {
            isAuthenticated: l,
            toolbar: this.renderHeaderToolbar(e, t),
            children:
                null != n
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(x.A.Icon, {
                                  icon: f.gqV,
                                  "aria-label": eo.intl.string(eo.t["P1/Erq"]),
                              }),
                              (0, r.jsx)(x.A.Title, {
                                  children: n.name,
                              }),
                          ],
                      })
                    : null != t && t.premium
                      ? (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(x.A.Icon, {
                                    icon: f.tvc,
                                    "aria-label": eo.intl.string(eo.t.Ipxkog),
                                }),
                                (0, r.jsx)(et.A, {
                                    sku: t,
                                }),
                            ],
                        })
                      : null != t
                        ? (0, r.jsxs)(i.Fragment, {
                              children: [
                                  (0, r.jsx)(x.A.Icon, {
                                      icon: f.gqV,
                                      "aria-label": eo.intl.string(eo.t["P1/Erq"]),
                                  }),
                                  (0, r.jsx)(x.A.Title, {
                                      children: t.name,
                                  }),
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
                          type: ea.geh.VIDEO,
                          thumbnailSrc: (0, K.YE)(e.id, t, 1024, "webp"),
                          src: (0, K.YE)(e.id, t),
                          height: r,
                          width: n,
                      }
                    : {
                          type: ea.geh.IMG,
                          src: (0, K.YE)(e.id, t, 1024),
                          height: r,
                          width: n,
                      };
            }
        }
        if (null != i)
            return {
                type: ea.geh.YOUTUBE_VIDEO,
                youtubeVideoId: i,
            };
        throw Error("Store carousel item must have one of assetId or youtubeVideoId");
    }
    renderHeaderAssets(e, t, n) {
        let { theme: i } = this.props,
            l = t.headerBackground,
            a = (0, d.qB)(i) ? t.headerLogoLightTheme : t.headerLogoDarkTheme;
        return null == l || null == a
            ? (0, r.jsx)("div", {
                  className: ec.Zt,
              })
            : (0, r.jsxs)("div", {
                  className: ec.nT,
                  children: [
                      (0, r.jsx)("div", {
                          className: ec.y2,
                          style: {
                              backgroundImage: "url(".concat((0, K.YE)(e.id, l, 1024, "png"), ")"),
                          },
                      }),
                      (0, r.jsx)("img", {
                          className: ec.nu,
                          src: (0, K.YE)(e.id, a, 1024, "png"),
                          alt: n.name,
                      }),
                  ],
              });
    }
    renderWhyYouMightLikeThis(e, t) {
        return (0, r.jsx)(ee.A, {
            sku: e,
            storeListing: t,
            className: ec.ZM,
        });
    }
    renderVerifiedGuildInvite(e, t) {
        if (null == e.guild) return null;
        let { channel: n, pageSize: i } = this.props;
        return (0, r.jsx)(ei.A, {
            skuId: t.id,
            guild: e.guild,
            className: ec.RO,
            inChannel: null != n,
            pageSize: i,
        });
    }
    renderFeatures(e) {
        return (0, r.jsx)(Q.A, {
            sku: e,
        });
    }
    renderSystemRequirements(e) {
        return null == e.systemRequirements || 0 === Object.keys(e.systemRequirements).length
            ? null
            : (0, r.jsx)(en.A, {
                  className: ec.wn,
                  systemRequirements: e.systemRequirements,
                  pageSize: this.props.pageSize,
              });
    }
    renderDescription(e, t, n) {
        let { description: l } = t;
        if (null == l) throw Error("Rendering ApplicationStoreListing without description");
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(v.A, {
                    tag: "h1",
                    children: eo.intl.format(eo.t.tluX4B, {
                        name: n.name,
                    }),
                }),
                (0, r.jsx)(_.A, {}),
                (0, r.jsx)(q.A, {
                    applicationId: e.id,
                    blurb: t.summary,
                    description: l,
                    className: ec.h_,
                    assets: t.assets,
                }),
            ],
        });
    }
    renderApplicationContentRating(e) {
        return (0, r.jsx)(W.A, {
            sku: e,
            className: ec.ZL,
        });
    }
    renderApplicationLegalInfo(e) {
        return (0, r.jsx)(X.A, {
            sku: e,
            className: ec.kk,
        });
    }
    renderJsonLD() {
        let { sku: e, storeListing: t, application: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = [],
            l = n.getSplashURL(1024);
        null != l && i.push(l),
            null != t.headerLogoLightTheme && i.unshift((0, K.YE)(n.id, t.headerLogoLightTheme, 1024, "jpg"));
        let a = C.A.Product({
                name: e.name,
                description: null != e.summary && "" !== e.summary ? e.summary : t.tagline,
                image: C.A.Product.Image(i),
                sku: e.id,
            }),
            s = e.getPrice();
        if (null != s) {
            let { amount: e, currency: t } = s;
            a.offers = C.A.Offer({
                priceCurrency: t.toUpperCase(),
                price: (0, Y.$g)(e, t, {
                    style: "decimal",
                }),
            });
        }
        let o = C.A.ItemPage({
            mainEntity: a,
        });
        return (0, r.jsx)(C.A, {
            data: o,
        });
    }
    renderSmall(e, t, n) {
        return (0, r.jsxs)("div", {
            className: a()(ec.RR, ec.S1),
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
            className: ec.RR,
            children: [
                this.renderHeaderAssets(e, t, n),
                this.renderCarousel(e, t),
                (0, r.jsx)("div", {
                    className: ec.ko,
                    children: (0, r.jsxs)("div", {
                        className: ec.rf,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ec.Cd,
                                children: [
                                    this.renderWhyYouMightLikeThis(n, t),
                                    this.renderDescription(e, t, n),
                                    this.renderSystemRequirements(n),
                                    this.renderApplicationContentRating(n),
                                    this.renderApplicationLegalInfo(n),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: ec.DK,
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
                    (0, r.jsx)(S.A, {
                        align: S.A.Align.CENTER,
                        justify: S.A.Justify.CENTER,
                        children: (0, r.jsx)(f.y$y, {
                            className: ec.u1,
                        }),
                    }),
                ],
            });
        if (!l && t.showAgeGate) {
            let n = a
                ? null
                : (0, r.jsx)("div", {
                      className: ec.uR,
                      children: this.renderListing(),
                  });
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)(N.HI, {
                        location: e.name,
                    }),
                    this.renderJsonLD(),
                    this.renderHeader(e, t),
                    (0, r.jsx)(J.A, {
                        game: e,
                    }),
                    n,
                ],
            });
        }
        return a
            ? (0, r.jsxs)("div", {
                  className: ec.I,
                  children: [
                      (0, r.jsx)(N.HI, {
                          location: e.name,
                      }),
                      this.renderJsonLD(),
                      (0, r.jsx)(b.A, {
                          section: ea.JJy.NAVIGATION,
                          children: this.renderHeader(e, t),
                      }),
                      (0, r.jsx)(b.A, {
                          section: ea.JJy.BODY,
                          children: this.renderListing(),
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(N.HI, {
                          location: e.name,
                      }),
                      this.renderJsonLD(),
                      this.renderHeader(e, t),
                      this.renderListing(),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eu(this, "showCopyLinkTextTimeout", new c.Ep()),
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
                    H.default.track(
                        ea.HAw.STORE_LISTING_MEDIA_SCROLLED,
                        ep(ed({}, (0, T.A)(r)), {
                            card_index: n,
                            card_type: e.type === ea.geh.IMG ? "image" : "video",
                        }),
                    );
            }),
            eu(this, "copyCurrentUrl", () => {
                var e;
                let { location: t } = this.props,
                    n = ((e = t.pathname), "".concat(location.protocol, "//").concat(location.host).concat(e));
                (0, F.C)(n, () =>
                    this.setState(
                        {
                            showLinkCopied: !0,
                        },
                        () => {
                            this.showCopyLinkTextTimeout.start(1500, () => {
                                this.setState({
                                    showLinkCopied: !1,
                                });
                            });
                        },
                    ),
                );
            }),
            eu(this, "handleCreateInstantInvite", () => {
                let { channel: e, guild: t } = this.props;
                null != e &&
                    null != t &&
                    (0, f.mMO)(async () => {
                        let { default: i } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                ep(ed({}, n), {
                                    guild: t,
                                    channel: e,
                                    source: ea.PE1.GUILD_CHANNELS,
                                }),
                            );
                    });
            }),
            eu(this, "renderInviteLink", () => {
                let { channel: e, guild: t } = this.props;
                return null != e && null != t && (R.A.can(ea.xBc.CREATE_INSTANT_INVITE, t) || null != t.vanityURLCode)
                    ? (0, r.jsx)(p.$n, {
                          "aria-label": eo.intl.string(eo.t.zJrgTG),
                          look: p.$n.Looks.BLANK,
                          size: p.$n.Sizes.NONE,
                          onClick: this.handleCreateInstantInvite,
                          className: ec.nf,
                          children: (0, r.jsx)(f.qYV, {
                              size: "md",
                              color: "currentColor",
                              className: ec.wP,
                          }),
                      })
                    : null;
            }),
            eu(this, "renderCopyLink", () => {
                let { showLinkCopied: e } = this.state;
                return this.isChannelType
                    ? this.renderInviteLink()
                    : (0, r.jsx)(u.m, {
                          text: e ? eo.intl.string(eo.t.uvTCOY) : null,
                          position: "left",
                          forceOpen: e,
                          children: (0, r.jsx)(p.$n, {
                              "aria-label": e ? eo.intl.string(eo.t.uvTCOY) : eo.intl.string(eo.t.WqhZss),
                              look: p.$n.Looks.BLANK,
                              size: p.$n.Sizes.NONE,
                              onClick: this.copyCurrentUrl,
                              className: ec.nf,
                              children: (0, r.jsx)(f.qYV, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ec.wP,
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
                    className: ec.$u,
                    children: [
                        (0, r.jsx)("div", {
                            className: ec.ND,
                            children:
                                n && null != t
                                    ? (0, r.jsx)(er.A, {
                                          size: er.J.Sizes.MIN,
                                          dropdownSize: er.J.DropdownSizes.MEDIUM,
                                          look: er.J.Looks.OUTLINED,
                                          color: er.J.Colors.RED,
                                          skuId: t.id,
                                          className: ec.eZ,
                                          currentStoreListingId: null != l ? l.id : null,
                                          onStoreListingSelect: (e) => {
                                              null != t &&
                                                  (0, m.ct)(t.id, {
                                                      slug: i,
                                                      analyticsSource: {
                                                          page: s.page,
                                                          section: ea.JJy.NAVIGATION,
                                                          object: null,
                                                      },
                                                      storeListingId: e.id,
                                                  });
                                          },
                                      })
                                    : null,
                        }),
                        (0, r.jsx)("div", {
                            className: ec.ND,
                            children: (0, r.jsxs)("div", {
                                className: a()(ec.x3, {
                                    [ec.vu]: o,
                                }),
                                children: [
                                    null != t ? (0, j.A)(t) : null,
                                    null != e && null != t
                                        ? (0, r.jsx)("div", {
                                              children: "deprecated!",
                                          })
                                        : null,
                                    (0, r.jsx)($.A, {
                                        messageStyle: $.g.SHORT,
                                        className: ec.Mb,
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
                return (0, r.jsx)(b.A, {
                    section: ea.JJy.HERO,
                    children: (0, r.jsx)(Z.A, {
                        pageSize: n,
                        items: t.carouselItems.map((n) => this.parseMediaItems(e, n, t.assets)),
                        autoplayInterval: 8e3,
                        paused: !i,
                        onIntentionalChange: this.trackCarouselScroll,
                    }),
                });
            }),
            eu(this, "renderListing", () => {
                let { application: e, storeListing: t, sku: n, pageSize: i } = this.props;
                return null == e || null == n || null == t || t.isSlimDirectoryVersion()
                    ? (0, r.jsx)(S.A, {
                          align: S.A.Align.CENTER,
                          justify: S.A.Justify.CENTER,
                          children: (0, r.jsx)(f.y$y, {}),
                      })
                    : i === el.q.SMALL
                      ? this.renderSmall(e, t, n)
                      : this.renderLarge(e, t, n);
            });
    }
}
let eh = (0, E.A)(
    (0, O.A)(
        o.Ay.connectStores([M.A, w.A, P.default, B.A, G.A, U.A, V.A, y.A, I.A, D.A, L.A, k.A], (e) => {
            let t,
                n,
                r,
                { inputSkuId: i, applicationId: l, storeListingId: a, isAuthenticated: o, channel: c } = e;
            if (null == l) {
                if (null == i) throw Error("Needs applicationId or skuId");
                (t = i), null != (l = null != (n = U.A.get(i)) ? n.applicationId : null) && (r = I.A.getApplication(l));
            } else if (null == i) {
                if (null == l) throw Error("Needs applicationId or skuId");
                null != (r = I.A.getApplication(l)) && (t = r.destinationSkuId), (n = null != t ? U.A.get(t) : null);
            }
            (null == n ? void 0 : n.flags) != null && (0, s.Lt)(n.flags, ea.d68.STICKER) && (n = null);
            let u = null != l && (V.A.inTestModeForApplication(l) || y.A.inDevModeForApplication(l));
            return {
                skuId: t,
                application: null != l ? I.A.getApplication(l) : null,
                isFetchingEntitlements: null != l && k.A.applicationIdsFetching.has(l),
                didFetchEntitlements: null != l && k.A.applicationIdsFetched.has(l),
                shouldFetchStatistics: o && null != l && D.A.shouldFetchStatisticsForApplication(l),
                sku: n,
                isFocused: B.A.isFocused(),
                storeListing: G.A.getStoreListing({
                    storeListingId: a,
                    skuId: t,
                    channelId: null != c ? c.id : null,
                    isTestMode: u,
                }),
                isInTestMode: null != l && u,
                matureAgree: M.A.didMatureAgree,
                theme: w.A.theme,
                locale: P.default.locale,
                guild: null != c ? L.A.getGuild(c.getGuildId()) : null,
            };
        })(ef),
    ),
);
