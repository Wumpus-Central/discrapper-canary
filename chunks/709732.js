n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    c = n(451988),
    u = n(421380),
    m = n(397927),
    _ = n(869038),
    g = n(786144),
    x = n(587895),
    A = n(235986),
    h = n(769015),
    p = n(75825),
    f = n(871123),
    T = n(366523),
    S = n(961350),
    E = n(30793),
    b = n(351906),
    C = n(97352),
    v = n(67480),
    N = n(147925),
    I = n(957565),
    j = n(45938),
    y = n(615396),
    O = n(788868),
    R = n(985018),
    L = n(189686);
class P extends s.PureComponent {
    _copyModeTimeout = new c.Ep();
    state = { copyMode: m.qCr.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case m.qCr.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case m.qCr.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        _.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, j.AK)(t, n),
            (0, I.C)(
                e,
                () => this.setState({ copyMode: m.qCr.SUCCESS }),
                () => this.setState({ copyMode: m.qCr.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: m.qCr.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(A.A, {
            direction: A.A.Direction.VERTICAL,
            className: L.Gj,
            children: [
                (0, i.jsx)(m.e2O, {
                    className: L.ph,
                    value: (0, j.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: I.p5,
                    hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: u.XD.BRAND,
                    buttonLook: u.pR.FILLED,
                }),
                (0, i.jsxs)("div", {
                    className: L.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      R.intl.format(R.t.ltVZcJ, { hours: t.expiresAt.diff(o()(), "h") }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, i.jsx)(m.DUT, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: R.intl.string(R.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class D extends s.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
        this.setState({ isCreating: !0 }),
            await _.A.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && _.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, f.bF)(e)
            ? (0, i.jsx)(T.e, { shape: "square", sku: e, containerClassName: L.ez })
            : null != t
              ? (0, i.jsx)(p.A, { giftStyle: t, className: L.ez, shouldAnimate: this.state.isHovered })
              : (0, i.jsx)(h.A, { game: n, size: h.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, f.bF)(e)
            ? (0, i.jsxs)("div", {
                  className: a()(L.Oc, L.ic),
                  children: [
                      (0, i.jsx)(h.A, { game: n, size: h.M.XSMALL, skuId: e.id, className: L._u }),
                      R.intl.format(R.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, i.jsx)("div", { className: L.Oc, children: R.intl.format(R.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: s } = this.props;
        return (
            (e =
                s === O.FB
                    ? R.intl.string(R.t.odsU6W)
                    : s === O.Bu && null != n
                      ? R.intl.formatToPlainString(n.interval === O.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : R.intl.formatToPlainString(n.interval === O.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, i.jsx)("div", { className: L.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(A.A, {
            justify: A.A.Justify.BETWEEN,
            align: A.A.Align.CENTER,
            className: L.pe,
            children: [
                (0, i.jsx)(m.Text, { variant: "text-md/normal", children: R.intl.string(R.t.lELyPj) }),
                (0, i.jsx)(m.Button, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.Q3Qguo),
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
        return (0, i.jsxs)(g.A, {
            className: l,
            children: [
                (0, i.jsx)(m.DUT, {
                    onClick: this.handleToggleOpen,
                    className: L.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(g.A.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)("div", {
                            className: L.MY,
                            children: [
                                (0, i.jsxs)(A.A, {
                                    align: A.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, i.jsxs)("div", {
                                            className: L.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(N.A, {
                                    direction: d ? N.A.Directions.UP : N.A.Directions.DOWN,
                                    className: L.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                d
                    ? (0, i.jsx)(g.A.Body, {
                          children: r
                              ? (0, i.jsx)(m.y$y, { className: L.u1 })
                              : (0, i.jsxs)(s.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, i.jsx)(P, { giftCode: e, sku: a, hideCode: o }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let G = d.Ay.connectStores([v.A, b.A, E.A, x.A, C.A, S.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = v.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = E.A.getForGifterSKUAndPlan(S.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: b.A.enabled,
        isFetching: E.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: E.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: x.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, y.c9)(n) : null,
        giftCodes: l,
    };
})(D);
