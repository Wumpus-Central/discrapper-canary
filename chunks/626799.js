n.d(t, {
    $: () => L,
    Z: () => R
}),
    n(47120),
    n(411104);
var i,
    l = n(200651),
    a = n(192379),
    r = n(568611),
    s = n(442837),
    o = n(481060),
    c = n(558381),
    d = n(410575),
    u = n(498179),
    m = n(86357),
    _ = n(914602),
    h = n(568836),
    p = n(730749),
    g = n(112724),
    f = n(812206),
    x = n(283595),
    C = n(558314),
    E = n(55563),
    v = n(551428),
    I = n(73346),
    N = n(981631),
    S = n(388032),
    T = n(996546);
function b(e, t, n) {
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
class A extends (i = a.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t
        } = this.props;
        return {
            ...e,
            section: null != t ? t : N.jXE.APPLICATION_EMBED,
            object: N.qAy.CARD
        };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.km)(t);
    }
    renderViewInStoreButton() {
        return (0, l.jsx)(o.zxk.Link, {
            to: this.getStoreListingLocation(),
            className: T.actionButton,
            color: o.zxk.Colors.GREEN,
            size: o.zxk.Sizes.SMALL,
            children: S.intl.string(S.t['W+NB9/'])
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: a } = this.props,
            s = n > h.aL;
        return null == e || null == t
            ? i
                ? a()
                : (0, l.jsx)(h.OR, { isHorizontal: s })
            : e.productLine === N.POd.COLLECTIBLES
              ? (0, l.jsx)(d.Z, {
                    section: N.jXE.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t)
                })
              : (0, l.jsx)(d.Z, {
                    section: N.jXE.APPLICATION_EMBED,
                    children: (0, l.jsx)(r.rU, {
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
            b(this, 'state', {
                playing: !1,
                muted: !0
            }),
            b(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            b(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            b(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            b(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, I.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            b(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            b(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            b(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            b(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: i, renderCustomTitle: a, renderCustomTagline: r, renderCustomMedia: s } = this.props,
                    { playing: o, muted: c } = this.state,
                    d = i > h.aL;
                return (0, l.jsx)(_.Z, {
                    sku: e,
                    storeListing: t,
                    playing: o,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: a,
                    renderCustomTagline: r,
                    renderCustomMedia: s,
                    isHorizontal: d,
                    isEmbed: !0
                });
            }),
            b(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: i, libraryApplication: a, renderCustomActions: r } = this.props;
                if (null != r)
                    return (0, l.jsx)('div', {
                        className: T.tileActions,
                        children: r()
                    });
                if (null == n) return null;
                let s = null != n && n.primarySkuId === i,
                    c = null != a && a.hasFlag(N.eHb.HIDDEN);
                return (0, l.jsxs)('div', {
                    className: T.tileActions,
                    children: [
                        !s || c
                            ? this.renderViewInStoreButton()
                            : (0, l.jsx)(u.Z, {
                                  application: n,
                                  customDisabledColor: o.zxk.Colors.PRIMARY,
                                  size: o.zxk.Sizes.SMALL,
                                  className: T.actionButton,
                                  source: N.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick
                              }),
                        (t && !c) || e.premium
                            ? null
                            : (0, l.jsx)(m.Z, {
                                  type: m.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1
                              })
                    ]
                });
            });
    }
}
b(A, 'defaultProps', { renderFallback: N.dG4 });
let j = [E.Z, C.Z, x.Z, v.Z];
function y(e) {
    let { skuId: t } = e,
        n = E.Z.get(t),
        i = null != n ? f.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: E.Z.didFetchingSkuFail(t),
        inLibrary: null != n && x.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? v.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? x.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let Z = (0, g.Z)((0, p.Z)(A)),
    R = s.ZP.connectStores(j, y)(Z),
    L = (0, p.Z)(s.ZP.connectStores(j, y)(A));
