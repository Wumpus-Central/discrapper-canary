n.d(t, {
    $: function () {
        return P;
    }
}),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    l = n(192379),
    a = n(568611),
    o = n(442837),
    s = n(481060),
    c = n(558381),
    u = n(410575),
    d = n(498179),
    m = n(86357),
    h = n(914602),
    f = n(568836),
    p = n(730749),
    _ = n(112724),
    g = n(812206),
    E = n(283595),
    C = n(558314),
    I = n(55563),
    x = n(551428),
    N = n(73346),
    v = n(981631),
    T = n(388032),
    S = n(723757);
function A(e, t, n) {
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
class b extends (i = l.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t
        } = this.props;
        return {
            ...e,
            section: null != t ? t : v.jXE.APPLICATION_EMBED,
            object: v.qAy.CARD
        };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.km)(t);
    }
    renderViewInStoreButton() {
        return (0, r.jsx)(s.Button.Link, {
            to: this.getStoreListingLocation(),
            className: S.actionButton,
            color: s.Button.Colors.GREEN,
            size: s.Button.Sizes.SMALL,
            children: T.intl.string(T.t['W+NB9/'])
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: l } = this.props,
            o = n > f.aL;
        if (null == e || null == t) return i ? l() : (0, r.jsx)(f.OR, { isHorizontal: o });
        return e.productLine === v.POd.COLLECTIBLES
            ? (0, r.jsx)(u.Z, {
                  section: v.jXE.APPLICATION_EMBED,
                  children: this.renderApplicationTile(e, t)
              })
            : (0, r.jsx)(u.Z, {
                  section: v.jXE.APPLICATION_EMBED,
                  children: (0, r.jsx)(a.rU, {
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
            A(this, 'state', {
                playing: !1,
                muted: !0
            }),
            A(this, 'handleToggleMute', () => {
                this.setState({ muted: !this.state.muted });
            }),
            A(this, 'handleMouseEnter', () => {
                this.setState({ playing: !0 });
            }),
            A(this, 'handleMouseLeave', () => {
                this.setState({ playing: !1 });
            }),
            A(this, 'getStoreListingLocation', () => {
                let { sku: e } = this.props;
                if (null == e) throw Error('Should not be link to ApplicationStoreListing without SKU');
                return (0, N.ZI)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation
                });
            }),
            A(this, 'handleActionButtonClick', (e) => e.preventDefault()),
            A(this, 'handleBuyButtonClick', (e) => e.preventDefault()),
            A(this, 'handleLinkClick', (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            A(this, 'renderApplicationTile', (e, t) => {
                let { inLibrary: n, width: i, renderCustomTitle: l, renderCustomTagline: a, renderCustomMedia: o } = this.props,
                    { playing: s, muted: c } = this.state,
                    u = i > f.aL;
                return (0, r.jsx)(h.Z, {
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
            A(this, 'renderActions', (e) => {
                let { inLibrary: t, application: n, skuId: i, libraryApplication: l, renderCustomActions: a } = this.props;
                if (null != a)
                    return (0, r.jsx)('div', {
                        className: S.tileActions,
                        children: a()
                    });
                if (null == n) return null;
                let o = null != n && n.primarySkuId === i,
                    c = null != l && l.hasFlag(v.eHb.HIDDEN);
                return (0, r.jsxs)('div', {
                    className: S.tileActions,
                    children: [
                        !o || c
                            ? this.renderViewInStoreButton()
                            : (0, r.jsx)(d.Z, {
                                  application: n,
                                  customDisabledColor: s.Button.Colors.PRIMARY,
                                  size: s.Button.Sizes.SMALL,
                                  className: S.actionButton,
                                  source: v.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick
                              }),
                        (t && !c) || e.premium
                            ? null
                            : (0, r.jsx)(m.Z, {
                                  type: m.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1
                              })
                    ]
                });
            });
    }
}
A(b, 'defaultProps', { renderFallback: v.dG4 });
let j = [I.Z, C.Z, E.Z, x.Z];
function R(e) {
    let { skuId: t } = e,
        n = I.Z.get(t),
        i = null != n ? g.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: I.Z.didFetchingSkuFail(t),
        inLibrary: null != n && E.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? x.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? E.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    };
}
let Z = (0, _.Z)((0, p.Z)(b));
t.Z = o.ZP.connectStores(j, R)(Z);
let P = (0, p.Z)(o.ZP.connectStores(j, R)(b));
