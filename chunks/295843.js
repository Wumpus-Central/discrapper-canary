n.d(t, { A: () => j, k: () => L });
var i = n(627968),
    r = n(64700),
    a = n(936504),
    l = n(311907),
    s = n(421380),
    o = n(800342),
    d = n(820284),
    c = n(73861),
    u = n(740916),
    _ = n(918085),
    m = n(863574),
    h = n(707606),
    p = n(456412),
    g = n(587895),
    A = n(189081),
    x = n(286805),
    f = n(67480),
    C = n(328968),
    E = n(371794),
    I = n(652215),
    b = n(985018),
    T = n(187663);
class v extends r.Component {
    static defaultProps = { renderFallback: I.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : I.JJy.APPLICATION_EMBED, object: I.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, o.QB)(t);
    }
    handleToggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };
    handleMouseEnter = () => {
        this.setState({ playing: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ playing: !1 });
    };
    getStoreListingLocation = () => {
        let { sku: e } = this.props;
        if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
        return (0, E.vy)(e.id, { slug: e.slug, analyticsSource: this.analyticsLocation });
    };
    handleActionButtonClick = (e) => e.preventDefault();
    handleBuyButtonClick = (e) => e.preventDefault();
    handleLinkClick = (e) => {
        let { onEmbedClick: t } = this.props;
        null != t && t(e);
    };
    renderViewInStoreButton() {
        return (0, i.jsx)(s.$n.Link, {
            to: this.getStoreListingLocation(),
            className: T.h,
            color: s.$n.Colors.GREEN,
            size: s.$n.Sizes.SMALL,
            children: b.intl.string(b.t["W+NB90"]),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: r, renderCustomTitle: a, renderCustomTagline: l, renderCustomMedia: s } = this.props,
            { playing: o, muted: d } = this.state,
            c = r > m.Tm;
        return (0, i.jsx)(_.A, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: a,
            renderCustomTagline: l,
            renderCustomMedia: s,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: r, libraryApplication: a, renderCustomActions: l } = this.props;
        if (null != l) return (0, i.jsx)("div", { className: T.i, children: l() });
        if (null == n) return null;
        let s = null != n && n.primarySkuId === r,
            o = null != a && a.hasFlag(I.hM6.HIDDEN);
        return (0, i.jsxs)("div", {
            className: T.i,
            children: [
                !s || o
                    ? this.renderViewInStoreButton()
                    : (0, i.jsx)(c.A, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: T.h,
                          source: I.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, i.jsx)(u.A, { type: u.A.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: l } = this.props,
            s = n > m.Tm;
        return null == e || null == t
            ? r
                ? l()
                : (0, i.jsx)(m.Wb, { isHorizontal: s })
            : e.productLine === I.EZt.COLLECTIBLES
              ? (0, i.jsx)(d.A, { section: I.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, i.jsx)(d.A, {
                    section: I.JJy.APPLICATION_EMBED,
                    children: (0, i.jsx)(a.N_, {
                        onClick: this.handleLinkClick,
                        to: this.getStoreListingLocation(),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let S = [f.A, x.A, A.A, C.A];
function y(e) {
    let { skuId: t } = e,
        n = f.A.get(t),
        i = null != n ? g.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: f.A.didFetchingSkuFail(t),
        inLibrary: null != n && A.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? C.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? A.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let N = (0, p.A)((0, h.A)(v)),
    j = l.Ay.connectStores(S, y)(N),
    L = (0, h.A)(l.Ay.connectStores(S, y)(v));
