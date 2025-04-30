n.d(t, {
    $: () => w,
    Z: () => A
}),
    n(388685),
    n(415506);
var r,
    i = n(200651),
    l = n(192379),
    a = n(568611),
    o = n(442837),
    s = n(481060),
    c = n(558381),
    u = n(410575),
    d = n(498179),
    p = n(86357),
    m = n(914602),
    f = n(568836),
    h = n(730749),
    g = n(112724),
    _ = n(812206),
    b = n(283595),
    x = n(558314),
    y = n(55563),
    v = n(551428),
    E = n(73346),
    O = n(981631),
    j = n(388032),
    C = n(228016);
function S(e, t, n) {
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
class I extends (r = l.Component) {
    get analyticsLocation() {
        var e, t;
        let {
            analyticsContext: { location: n },
            analyticsSection: r
        } = this.props;
        return (
            (e = (function (e) {
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
                            S(e, t, n[t]);
                        });
                }
                return e;
            })({}, n)),
            (t = t =
                {
                    section: null != r ? r : O.jXE.APPLICATION_EMBED,
                    object: O.qAy.CARD
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
        (null == e || null == n) && (0, c.km)(t);
    }
    renderViewInStoreButton() {
        return (0, i.jsx)(s.zxk.Link, {
            to: this.getStoreListingLocation(),
            className: C.actionButton,
            color: s.zxk.Colors.GREEN,
            size: s.zxk.Sizes.SMALL,
            children: j.intl.string(j.t['W+NB9/'])
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: l } = this.props,
            o = n > f.aL;
        return null == e || null == t
            ? r
                ? l()
                : (0, i.jsx)(f.OR, { isHorizontal: o })
            : e.productLine === O.POd.COLLECTIBLES
              ? (0, i.jsx)(u.Z, {
                    section: O.jXE.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t)
                })
              : (0, i.jsx)(u.Z, {
                    section: O.jXE.APPLICATION_EMBED,
                    children: (0, i.jsx)(a.rU, {
                        onClick: this.handleLinkClick,
                        to: this.getStoreListingLocation(),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t)
                    })
                });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', {
                playing: !1,
                muted: !0
            }),
            S(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            S(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            S(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            S(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, E.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            S(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            S(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            S(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            S(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: r, renderCustomTitle: l, renderCustomTagline: a, renderCustomMedia: o } = this.props,
                    { playing: s, muted: c } = this.state,
                    u = r > f.aL;
                return (0, i.jsx)(m.Z, {
                    sku: e,
                    storeListing: t,
                    playing: s,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: l,
                    renderCustomTagline: a,
                    renderCustomMedia: o,
                    isHorizontal: u,
                    isEmbed: !0
                });
            }),
            S(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: r, libraryApplication: l, renderCustomActions: a } = this.props;
                if (null != a)
                    return (0, i.jsx)('div', {
                        className: C.tileActions,
                        children: a()
                    });
                if (null == n) return null;
                let o = null != n && n.primarySkuId === r,
                    c = null != l && l.hasFlag(O.eHb.HIDDEN);
                return (0, i.jsxs)('div', {
                    className: C.tileActions,
                    children: [
                        !o || c
                            ? this.renderViewInStoreButton()
                            : (0, i.jsx)(d.Z, {
                                  application: n,
                                  customDisabledColor: s.zxk.Colors.PRIMARY,
                                  size: s.zxk.Sizes.SMALL,
                                  className: C.actionButton,
                                  source: O.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick
                              }),
                        (t && !c) || e.premium
                            ? null
                            : (0, i.jsx)(p.Z, {
                                  type: p.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1
                              })
                    ]
                });
            });
    }
}
S(I, 'defaultProps', { renderFallback: O.dG4 });
let N = [y.Z, x.Z, b.Z, v.Z];
function T(e) {
    let { skuId: t } = e,
        n = y.Z.get(t),
        r = null != n ? _.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: y.Z.didFetchingSkuFail(t),
        inLibrary: null != n && b.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? v.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? b.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let P = (0, g.Z)((0, h.Z)(I)),
    A = o.ZP.connectStores(N, T)(P),
    w = (0, h.Z)(o.ZP.connectStores(N, T)(I));
