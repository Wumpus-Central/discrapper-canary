n.d(t, { A: () => y, k: () => R });
var i = n(627968),
    l = n(64700),
    a = n(758879),
    r = n(311907),
    s = n(421380),
    o = n(800342),
    d = n(820284),
    c = n(73861),
    u = n(740916),
    m = n(918085),
    _ = n(863574),
    h = n(707606),
    p = n(456412),
    g = n(587895),
    A = n(189081),
    f = n(286805),
    x = n(67480),
    E = n(328968),
    C = n(371794),
    I = n(652215),
    T = n(985018),
    v = n(187663);
class N extends l.Component {
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
        return (0, C.vy)(e.id, { slug: e.slug, analyticsSource: this.analyticsLocation });
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
            className: v.h,
            color: s.$n.Colors.GREEN,
            size: s.$n.Sizes.SMALL,
            children: T.intl.string(T.t["W+NB90"]),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: l, renderCustomTitle: a, renderCustomTagline: r, renderCustomMedia: s } = this.props,
            { playing: o, muted: d } = this.state,
            c = l > _.Tm;
        return (0, i.jsx)(m.A, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: a,
            renderCustomTagline: r,
            renderCustomMedia: s,
            isHorizontal: c,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: l, libraryApplication: a, renderCustomActions: r } = this.props;
        if (null != r) return (0, i.jsx)("div", { className: v.i, children: r() });
        if (null == n) return null;
        let s = null != n && n.primarySkuId === l,
            o = null != a && a.hasFlag(I.hM6.HIDDEN);
        return (0, i.jsxs)("div", {
            className: v.i,
            children: [
                !s || o
                    ? this.renderViewInStoreButton()
                    : (0, i.jsx)(c.A, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: v.h,
                          source: I.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, i.jsx)(u.A, { type: u.A.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: l, renderFallback: r } = this.props,
            s = n > _.Tm;
        return null == e || null == t
            ? l
                ? r()
                : (0, i.jsx)(_.Wb, { isHorizontal: s })
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
let S = [x.A, f.A, A.A, E.A];
function b(e) {
    let { skuId: t } = e,
        n = x.A.get(t),
        i = null != n ? g.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: x.A.didFetchingSkuFail(t),
        inLibrary: null != n && A.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? E.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? A.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let j = (0, p.A)((0, h.A)(N)),
    y = r.Ay.connectStores(S, b)(j),
    R = (0, h.A)(r.Ay.connectStores(S, b)(N));
