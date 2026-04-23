n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    u = n(451988),
    c = n(862482),
    g = n(109802),
    m = n(939249),
    _ = n(834730),
    A = n(821609),
    h = n(289873),
    p = n(869038),
    x = n(786144),
    E = n(587895),
    T = n(235986),
    S = n(769015),
    f = n(75825),
    b = n(871123),
    C = n(366523),
    v = n(961350),
    N = n(30793),
    I = n(351906),
    y = n(97352),
    j = n(67480),
    O = n(147925),
    R = n(957565),
    L = n(45938),
    D = n(615396),
    P = n(788868),
    G = n(985018),
    M = n(233385);
class U extends s.PureComponent {
    _copyModeTimeout = new u.Ep();
    state = { copyMode: g.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case g.q.SUCCESS:
                return G.intl.string(G.t.XVvPjU);
            case g.q.ERROR:
                return G.intl.string(G.t.i4GM3L);
            default:
                return G.intl.string(G.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        p.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, L.AK)(t, n),
            (0, R.C)(
                e,
                () => this.setState({ copyMode: g.q.SUCCESS }),
                () => this.setState({ copyMode: g.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: g.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(T.A, {
            direction: T.A.Direction.VERTICAL,
            className: M.Gj,
            children: [
                (0, i.jsx)(g.e, {
                    className: M.ph,
                    value: (0, L.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: R.p5,
                    hideMessage: e ? G.intl.string(G.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.XD.BRAND,
                    buttonLook: c.pR.FILLED,
                }),
                (0, i.jsxs)("div", {
                    className: M.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      G.intl.format(G.t.ltVZcJ, { hours: t.expiresAt.diff(o()(), "h") }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, i.jsx)(m.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: G.intl.string(G.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class k extends s.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await p.A.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && p.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, b.bF)(e)
            ? (0, i.jsx)(C.e, { shape: "square", sku: e, containerClassName: M.ez })
            : null != t
              ? (0, i.jsx)(f.A, { giftStyle: t, className: M.ez, shouldAnimate: this.state.isHovered })
              : (0, i.jsx)(S.A, { game: n, size: S.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, b.bF)(e)
            ? (0, i.jsxs)("div", {
                  className: a()(M.Oc, M.ic),
                  children: [
                      (0, i.jsx)(S.A, { game: n, size: S.M.XSMALL, skuId: e.id, className: M._u }),
                      G.intl.format(G.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, i.jsx)("div", { className: M.Oc, children: G.intl.format(G.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: s } = this.props;
        return (
            (e =
                s === P.FB
                    ? G.intl.string(G.t.odsU6W)
                    : s === P.Bu && null != n
                      ? G.intl.formatToPlainString(n.interval === P.WT.MONTH ? G.t.uZjpiJ : G.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : G.intl.formatToPlainString(n.interval === P.WT.MONTH ? G.t.rCJvqo : G.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, i.jsx)("div", { className: M.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            align: T.A.Align.CENTER,
            className: M.pe,
            children: [
                (0, i.jsx)(_.E, { variant: "text-md/normal", children: G.intl.string(G.t.lELyPj) }),
                (0, i.jsx)(A.$, {
                    variant: "primary",
                    size: "sm",
                    text: G.intl.string(G.t.Q3Qguo),
                    loading: this.state.isCreating,
                    onClick: this.handleGenerateGiftCode,
                }),
            ],
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let {
                entitlements: e,
                application: t,
                giftCodes: n,
                className: l,
                sku: a,
                isFetching: r,
                hideCodes: o,
            } = this.props,
            { isOpen: d } = this.state;
        return (0, i.jsxs)(x.A, {
            className: l,
            children: [
                (0, i.jsx)(m.D, {
                    onClick: this.handleToggleOpen,
                    className: M.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(x.A.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)("div", {
                            className: M.MY,
                            children: [
                                (0, i.jsxs)(T.A, {
                                    align: T.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, i.jsxs)("div", {
                                            className: M.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(O.A, {
                                    direction: d ? O.A.Directions.UP : O.A.Directions.DOWN,
                                    className: M.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                d
                    ? (0, i.jsx)(x.A.Body, {
                          children: r
                              ? (0, i.jsx)(h.y, { className: M.u1 })
                              : (0, i.jsxs)(s.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, i.jsx)(U, { giftCode: e, sku: a, hideCode: o }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let V = d.Ay.connectStores([j.A, I.A, N.A, E.A, y.A, v.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = j.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = N.A.getForGifterSKUAndPlan(v.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: I.A.enabled,
        isFetching: N.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: N.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: E.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, D.c9)(n) : null,
        giftCodes: l,
    };
})(k);
