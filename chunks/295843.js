n.d(t, {
    A: () => P,
    k: () => w,
}),
    n(896048),
    n(65821);
var r,
    i = n(627968),
    l = n(64700),
    a = n(758879),
    s = n(311907),
    o = n(421380),
    c = n(800342),
    u = n(820284),
    d = n(73861),
    p = n(740916),
    m = n(918085),
    f = n(863574),
    g = n(707606),
    h = n(456412),
    _ = n(587895),
    b = n(189081),
    A = n(286805),
    y = n(67480),
    v = n(328968),
    x = n(371794),
    O = n(652215),
    E = n(985018),
    j = n(187663);

function C(e, t, n) {
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
class I extends (r = l.Component) {
    get analyticsLocation() {
        var e, t;
        let {
            analyticsContext: { location: n },
            analyticsSection: r,
        } = this.props;
        return (
            (e = (function (e) {
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
                            C(e, t, n[t]);
                        });
                }
                return e;
            })({}, n)),
            (t = t =
                {
                    section: null != r ? r : O.JJy.APPLICATION_EMBED,
                    object: O.ZSU.CARD,
                }),
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
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.QB)(t);
    }
    renderViewInStoreButton() {
        return (0, i.jsx)(o.$n.Link, {
            to: this.getStoreListingLocation(),
            className: j.h,
            color: o.$n.Colors.GREEN,
            size: o.$n.Sizes.SMALL,
            children: E.intl.string(E.t["W+NB90"]),
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: l } = this.props,
            s = n > f.Tm;
        return null == e || null == t
            ? r
                ? l()
                : (0, i.jsx)(f.Wb, {
                      isHorizontal: s,
                  })
            : e.productLine === O.EZt.COLLECTIBLES
              ? (0, i.jsx)(u.A, {
                    section: O.JJy.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t),
                })
              : (0, i.jsx)(u.A, {
                    section: O.JJy.APPLICATION_EMBED,
                    children: (0, i.jsx)(a.N_, {
                        onClick: this.handleLinkClick,
                        to: this.getStoreListingLocation(),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
    constructor(...e) {
        super(...e),
            C(this, "state", {
                playing: !1,
                muted: !0,
            }),
            C(this, "handleToggleMute", () => {
                this.setState({
                    muted: !this.state.muted,
                });
            }),
            C(this, "handleMouseEnter", () => {
                this.setState({
                    playing: !0,
                });
            }),
            C(this, "handleMouseLeave", () => {
                this.setState({
                    playing: !1,
                });
            }),
            C(this, "getStoreListingLocation", () => {
                let { sku: e } = this.props;
                if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
                return (0, x.vy)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation,
                });
            }),
            C(this, "handleActionButtonClick", (e) => e.preventDefault()),
            C(this, "handleBuyButtonClick", (e) => e.preventDefault()),
            C(this, "handleLinkClick", (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            C(this, "renderApplicationTile", (e, t) => {
                let {
                        inLibrary: n,
                        width: r,
                        renderCustomTitle: l,
                        renderCustomTagline: a,
                        renderCustomMedia: s,
                    } = this.props,
                    { playing: o, muted: c } = this.state,
                    u = r > f.Tm;
                return (0, i.jsx)(m.A, {
                    sku: e,
                    storeListing: t,
                    playing: o,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: l,
                    renderCustomTagline: a,
                    renderCustomMedia: s,
                    isHorizontal: u,
                    isEmbed: !0,
                });
            }),
            C(this, "renderActions", (e) => {
                let {
                    inLibrary: t,
                    application: n,
                    skuId: r,
                    libraryApplication: l,
                    renderCustomActions: a,
                } = this.props;
                if (null != a)
                    return (0, i.jsx)("div", {
                        className: j.i,
                        children: a(),
                    });
                if (null == n) return null;
                let s = null != n && n.primarySkuId === r,
                    o = null != l && l.hasFlag(O.hM6.HIDDEN);
                return (0, i.jsxs)("div", {
                    className: j.i,
                    children: [
                        !s || o
                            ? this.renderViewInStoreButton()
                            : (0, i.jsx)(d.A, {
                                  application: n,
                                  disabledVariant: "primary",
                                  size: "sm",
                                  className: j.h,
                                  source: O.ThZ.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick,
                              }),
                        (t && !o) || e.premium
                            ? null
                            : (0, i.jsx)(p.A, {
                                  type: p.A.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1,
                              }),
                    ],
                });
            });
    }
}
C(I, "defaultProps", {
    renderFallback: O.tEg,
});
let S = [y.A, A.A, b.A, v.A];

function T(e) {
    let { skuId: t } = e,
        n = y.A.get(t),
        r = null != n ? _.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: y.A.didFetchingSkuFail(t),
        inLibrary: null != n && b.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? v.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? b.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let N = (0, h.A)((0, g.A)(I)),
    P = s.Ay.connectStores(S, T)(N),
    w = (0, g.A)(s.Ay.connectStores(S, T)(I));
