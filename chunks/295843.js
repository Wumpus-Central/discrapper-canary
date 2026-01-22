n.d(t, {
    A: () => L,
    k: () => j,
}),
    n(896048),
    n(65821);
var r,
    i = n(627968),
    a = n(64700),
    s = n(758879),
    o = n(311907),
    l = n(421380),
    c = n(800342),
    u = n(820284),
    d = n(73861),
    f = n(740916),
    p = n(918085),
    _ = n(863574),
    h = n(707606),
    m = n(456412),
    g = n(587895),
    E = n(189081),
    b = n(286805),
    y = n(67480),
    O = n(328968),
    A = n(371794),
    v = n(652215),
    S = n(985018),
    I = n(187663);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class w extends (r = a.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return R(C({}, e), {
            section: null != t ? t : v.JJy.APPLICATION_EMBED,
            object: v.ZSU.CARD,
        });
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.QB)(t);
    }
    renderViewInStoreButton() {
        return (0, i.jsx)(l.$n.Link, {
            to: this.getStoreListingLocation(),
            className: I.h,
            color: l.$n.Colors.GREEN,
            size: l.$n.Sizes.SMALL,
            children: S.intl.string(S.t["W+NB90"]),
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: a } = this.props,
            o = n > _.Tm;
        return null == e || null == t
            ? r
                ? a()
                : (0, i.jsx)(_.Wb, { isHorizontal: o })
            : e.productLine === v.EZt.COLLECTIBLES
              ? (0, i.jsx)(u.A, {
                    section: v.JJy.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t),
                })
              : (0, i.jsx)(u.A, {
                    section: v.JJy.APPLICATION_EMBED,
                    children: (0, i.jsx)(s.N_, {
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
            T(this, "state", {
                playing: !1,
                muted: !0,
            }),
            T(this, "handleToggleMute", () => {
                this.setState({ muted: !this.state.muted });
            }),
            T(this, "handleMouseEnter", () => {
                this.setState({ playing: !0 });
            }),
            T(this, "handleMouseLeave", () => {
                this.setState({ playing: !1 });
            }),
            T(this, "getStoreListingLocation", () => {
                let { sku: e } = this.props;
                if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
                return (0, A.vy)(e.id, {
                    slug: e.slug,
                    analyticsSource: this.analyticsLocation,
                });
            }),
            T(this, "handleActionButtonClick", (e) => e.preventDefault()),
            T(this, "handleBuyButtonClick", (e) => e.preventDefault()),
            T(this, "handleLinkClick", (e) => {
                let { onEmbedClick: t } = this.props;
                null != t && t(e);
            }),
            T(this, "renderApplicationTile", (e, t) => {
                let {
                        inLibrary: n,
                        width: r,
                        renderCustomTitle: a,
                        renderCustomTagline: s,
                        renderCustomMedia: o,
                    } = this.props,
                    { playing: l, muted: c } = this.state,
                    u = r > _.Tm;
                return (0, i.jsx)(p.A, {
                    sku: e,
                    storeListing: t,
                    playing: l,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: a,
                    renderCustomTagline: s,
                    renderCustomMedia: o,
                    isHorizontal: u,
                    isEmbed: !0,
                });
            }),
            T(this, "renderActions", (e) => {
                let {
                    inLibrary: t,
                    application: n,
                    skuId: r,
                    libraryApplication: a,
                    renderCustomActions: s,
                } = this.props;
                if (null != s)
                    return (0, i.jsx)("div", {
                        className: I.i,
                        children: s(),
                    });
                if (null == n) return null;
                let o = null != n && n.primarySkuId === r,
                    l = null != a && a.hasFlag(v.hM6.HIDDEN);
                return (0, i.jsxs)("div", {
                    className: I.i,
                    children: [
                        !o || l
                            ? this.renderViewInStoreButton()
                            : (0, i.jsx)(d.A, {
                                  application: n,
                                  disabledVariant: "primary",
                                  size: "sm",
                                  className: I.h,
                                  source: v.ThZ.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick,
                              }),
                        (t && !l) || e.premium
                            ? null
                            : (0, i.jsx)(f.A, {
                                  type: f.A.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1,
                              }),
                    ],
                });
            });
    }
}
T(w, "defaultProps", { renderFallback: v.tEg });
let P = [y.A, b.A, E.A, O.A];
function D(e) {
    let { skuId: t } = e,
        n = y.A.get(t),
        r = null != n ? g.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: y.A.didFetchingSkuFail(t),
        inLibrary: null != n && E.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? O.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? E.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let x = (0, m.A)((0, h.A)(w)),
    L = o.Ay.connectStores(P, D)(x),
    j = (0, h.A)(o.Ay.connectStores(P, D)(w));
