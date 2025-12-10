n.d(t, {
    $: () => j,
    Z: () => L,
}),
    n(388685),
    n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(319498),
    s = n(442837),
    l = n(755721),
    c = n(558381),
    u = n(410575),
    d = n(498179),
    f = n(86357),
    p = n(914602),
    _ = n(568836),
    m = n(730749),
    h = n(112724),
    g = n(812206),
    E = n(283595),
    b = n(558314),
    y = n(55563),
    O = n(551428),
    v = n(73346),
    S = n(981631),
    I = n(388032),
    T = n(550125);
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
function A(e) {
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
function P(e, t) {
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
class R extends (r = a.Component) {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return P(A({}, e), {
            section: null != t ? t : S.jXE.APPLICATION_EMBED,
            object: S.qAy.CARD,
        });
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.km)(t);
    }
    renderViewInStoreButton() {
        return (0, i.jsx)(l.zx.Link, {
            to: this.getStoreListingLocation(),
            className: T.actionButton,
            color: l.zx.Colors.GREEN,
            size: l.zx.Sizes.SMALL,
            children: I.intl.string(I.t["W+NB90"]),
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: a } = this.props,
            s = n > _.aL;
        return null == e || null == t
            ? r
                ? a()
                : (0, i.jsx)(_.OR, { isHorizontal: s })
            : e.productLine === S.POd.COLLECTIBLES
              ? (0, i.jsx)(u.Z, {
                    section: S.jXE.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t),
                })
              : (0, i.jsx)(u.Z, {
                    section: S.jXE.APPLICATION_EMBED,
                    children: (0, i.jsx)(o.rU, {
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
                this.setState({ muted: !this.state.muted });
            }),
            C(this, "handleMouseEnter", () => {
                this.setState({ playing: !0 });
            }),
            C(this, "handleMouseLeave", () => {
                this.setState({ playing: !1 });
            }),
            C(this, "getStoreListingLocation", () => {
                let { sku: e } = this.props;
                if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
                return (0, v.ZI)(e.id, {
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
                        renderCustomTitle: a,
                        renderCustomTagline: o,
                        renderCustomMedia: s,
                    } = this.props,
                    { playing: l, muted: c } = this.state,
                    u = r > _.aL;
                return (0, i.jsx)(p.Z, {
                    sku: e,
                    storeListing: t,
                    playing: l,
                    muted: c,
                    inLibrary: n,
                    onToggleMute: this.handleToggleMute,
                    renderCustomActions: () => this.renderActions(e),
                    renderCustomTitle: a,
                    renderCustomTagline: o,
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
                    libraryApplication: a,
                    renderCustomActions: o,
                } = this.props;
                if (null != o)
                    return (0, i.jsx)("div", {
                        className: T.tileActions,
                        children: o(),
                    });
                if (null == n) return null;
                let s = null != n && n.primarySkuId === r,
                    c = null != a && a.hasFlag(S.eHb.HIDDEN);
                return (0, i.jsxs)("div", {
                    className: T.tileActions,
                    children: [
                        !s || c
                            ? this.renderViewInStoreButton()
                            : (0, i.jsx)(d.Z, {
                                  application: n,
                                  customDisabledColor: l.zx.Colors.PRIMARY,
                                  size: l.zx.Sizes.SMALL,
                                  className: T.actionButton,
                                  source: S.Sbl.MESSAGE_EMBED,
                                  onClick: this.handleActionButtonClick,
                              }),
                        (t && !c) || e.premium
                            ? null
                            : (0, i.jsx)(f.Z, {
                                  type: f.Z.Types.EMBED,
                                  sku: e,
                                  inLibrary: !1,
                              }),
                    ],
                });
            });
    }
}
C(R, "defaultProps", { renderFallback: S.dG4 });
let D = [y.Z, b.Z, E.Z, O.Z];
function w(e) {
    let { skuId: t } = e,
        n = y.Z.get(t),
        r = null != n ? g.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: y.Z.didFetchingSkuFail(t),
        inLibrary: null != n && E.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? O.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? E.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let x = (0, h.Z)((0, m.Z)(R)),
    L = s.ZP.connectStores(D, w)(x),
    j = (0, m.Z)(s.ZP.connectStores(D, w)(R));
