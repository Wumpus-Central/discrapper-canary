n.d(t, {
    $: () => j,
    Z: () => M,
}),
    n(388685),
    n(415506);
var r,
    i = n(951288),
    a = n(647438),
    o = n(799899),
    s = n(442837),
    l = n(755721),
    c = n(558381),
    u = n(410575),
    d = n(498179),
    f = n(86357),
    _ = n(914602),
    p = n(568836),
    h = n(730749),
    m = n(112724),
    g = n(812206),
    E = n(164670),
    b = n(283595),
    y = n(558314),
    O = n(55563),
    v = n(551428),
    I = n(73346),
    T = n(981631),
    S = n(388032),
    A = n(550125);
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
function N(e) {
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
function R(e, t) {
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
            : R(Object(t)).forEach(function (n) {
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
        return P(N({}, e), {
            section: null != t ? t : T.jXE.APPLICATION_EMBED,
            object: T.qAy.CARD,
        });
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.km)(t),
            (0, E.K$)(e) && null != n && null == n.headerBackground && (0, c.rV)(n.id);
    }
    renderViewInStoreButton() {
        return (0, i.jsx)(l.zx.Link, {
            to: this.getStoreListingLocation(),
            className: A.actionButton,
            color: l.zx.Colors.GREEN,
            size: l.zx.Sizes.SMALL,
            children: S.intl.string(S.t["W+NB90"]),
        });
    }
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: r, renderFallback: a } = this.props,
            s = n > p.aL;
        return null == e || null == t
            ? r
                ? a()
                : (0, i.jsx)(p.OR, { isHorizontal: s })
            : e.productLine === T.POd.COLLECTIBLES
              ? (0, i.jsx)(u.Z, {
                    section: T.jXE.APPLICATION_EMBED,
                    children: this.renderApplicationTile(e, t),
                })
              : (0, i.jsx)(u.Z, {
                    section: T.jXE.APPLICATION_EMBED,
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
                return (0, I.ZI)(e.id, {
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
                    u = r > p.aL;
                return (0, i.jsx)(_.Z, {
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
                        className: A.tileActions,
                        children: o(),
                    });
                if (null == n) return null;
                let s = null != n && n.primarySkuId === r,
                    c = null != a && a.hasFlag(T.eHb.HIDDEN);
                return (0, i.jsxs)("div", {
                    className: A.tileActions,
                    children: [
                        !s || c
                            ? this.renderViewInStoreButton()
                            : (0, i.jsx)(d.Z, {
                                  application: n,
                                  customDisabledColor: l.zx.Colors.PRIMARY,
                                  size: l.zx.Sizes.SMALL,
                                  className: A.actionButton,
                                  source: T.Sbl.MESSAGE_EMBED,
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
C(w, "defaultProps", { renderFallback: T.dG4 });
let D = [O.Z, y.Z, b.Z, v.Z];
function x(e) {
    let { skuId: t } = e,
        n = O.Z.get(t),
        r = null != n ? g.Z.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: r,
        fetchFailed: O.Z.didFetchingSkuFail(t),
        inLibrary: null != n && b.Z.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? v.Z.getForSKU(n.id) : null,
        libraryApplication: null != n ? b.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let L = (0, m.Z)((0, h.Z)(w)),
    M = s.ZP.connectStores(D, x)(L),
    j = (0, h.Z)(s.ZP.connectStores(D, x)(w));
