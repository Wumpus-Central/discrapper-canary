n.d(t, {
    $: () => w,
    Z: () => A
}),
    n(47120),
    n(411104);
var r,
    i = n(200651),
    a = n(192379),
    l = n(568611),
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
    E = n(551428),
    v = n(73346),
    O = n(981631),
    N = n(388032),
    j = n(228016);
function C(e, t, n) {
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
class I extends (r = a.Component) {
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
                            C(e, t, n[t]);
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
            className: j.actionButton,
            color: s.zxk.Colors.GREEN,
            size: s.zxk.Sizes.SMALL,
            children: N.NW.string(N.t['W+NB9/'])
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: a } = this.props,
            o = n > f.aL;
        return null == e || null == t
            ? r
                ? a()
                : (0, i.jsx)(f.OR, { isHorizontal: o })
            : e.productLine === O.POd.COLLECTIBLES
              ? (0, i.jsx)(u.Z, {
                    section: O.jXE.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t)
                })
              : (0, i.jsx)(u.Z, {
                    section: O.jXE.APPLICATION_EMBED,
                    children: (0, i.jsx)(l.rU, {
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
            C(this, 'state', {
                playing: !1,
                muted: !0
            }),
            C(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            C(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            C(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            C(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, v.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            C(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            C(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            C(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            C(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: r, renderCustomTitle: a, renderCustomTagline: l, renderCustomMedia: o } = this.props,
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
                    renderCustomTitle: a,
                    renderCustomTagline: l,
                    renderCustomMedia: o,
                    isHorizontal: u,
                    isEmbed: !0
                });
            }),
            C(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: r, libraryApplication: a, renderCustomActions: l } = this.props;
                if (null != l)
                    return (0, i.jsx)('div', {
                        className: j.tileActions,
                        children: l()
                    });
                if (null == n) return null;
                let o = null != n && n.primarySkuId === r,
                    c = null != a && a.hasFlag(O.eHb.HIDDEN);
                return (0, i.jsxs)('div', {
                    className: j.tileActions,
                    children: [
                        !o || c
                            ? this.renderViewInStoreButton()
                            : (0, i.jsx)(d.Z, {
                                  application: n,
                                  customDisabledColor: s.zxk.Colors.PRIMARY,
                                  size: s.zxk.Sizes.SMALL,
                                  className: j.actionButton,
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
C(I, 'defaultProps', { renderFallback: O.dG4 });
let S = [y.Z, x.Z, b.Z, E.Z];
function T(e) {
    let { skuId: t } = e,
        n = y.Z.get(t),
        r = null != n ? _.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: y.Z.didFetchingSkuFail(t),
        inLibrary: null != n && b.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? E.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? b.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let P = (0, g.Z)((0, h.Z)(I)),
    A = o.ZP.connectStores(S, T)(P),
    w = (0, h.Z)(o.ZP.connectStores(S, T)(I));
