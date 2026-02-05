n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(989349),
    o = n.n(l),
    c = n(311907),
    d = n(451988),
    u = n(421380),
    _ = n(397927),
    m = n(869038),
    A = n(786144),
    g = n(587895),
    E = n(235986),
    h = n(769015),
    p = n(75825),
    C = n(871123),
    x = n(366523),
    T = n(961350),
    I = n(30793),
    S = n(351906),
    f = n(97352),
    N = n(67480),
    b = n(147925),
    R = n(957565),
    v = n(45938),
    O = n(615396),
    j = n(788868),
    P = n(985018),
    y = n(539785);
class L extends s.PureComponent {
    _copyModeTimeout = new d.Ep();
    state = { copyMode: _.qCr.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case _.qCr.SUCCESS:
                return P.intl.string(P.t.XVvPjU);
            case _.qCr.ERROR:
                return P.intl.string(P.t.i4GM3L);
            default:
                return P.intl.string(P.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        m.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: n } = this.props;
        (0, v.AK)(t, n),
            (0, R.C)(
                e,
                () => this.setState({ copyMode: _.qCr.SUCCESS }),
                () => this.setState({ copyMode: _.qCr.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: _.qCr.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(E.A, {
            direction: E.A.Direction.VERTICAL,
            className: y.Gj,
            children: [
                (0, i.jsx)(_.e2O, {
                    className: y.ph,
                    value: (0, v.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: R.p5,
                    hideMessage: e ? P.intl.string(P.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: u.XD.BRAND,
                    buttonLook: u.pR.FILLED,
                }),
                (0, i.jsxs)("div", {
                    className: y.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      P.intl.format(P.t.ltVZcJ, { hours: t.expiresAt.diff(o()(), "h") }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, i.jsx)(_.DUT, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: P.intl.string(P.t.v6Yazx),
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
            await m.A.createGiftCode(t, n, i),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
            i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && m.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, C.bF)(e)
            ? (0, i.jsx)(x.e, { shape: "square", sku: e, containerClassName: y.ez })
            : null != t
              ? (0, i.jsx)(p.A, { giftStyle: t, className: y.ez, shouldAnimate: this.state.isHovered })
              : (0, i.jsx)(h.A, { game: n, size: h.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, C.bF)(e)
            ? (0, i.jsxs)("div", {
                  className: a()(y.Oc, y.ic),
                  children: [
                      (0, i.jsx)(h.A, { game: n, size: h.M.XSMALL, skuId: e.id, className: y._u }),
                      P.intl.format(P.t["6plpZi"], { applicationName: n.name, copies: t.length }),
                  ],
              })
            : (0, i.jsx)("div", { className: y.Oc, children: P.intl.format(P.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: s } = this.props;
        return (
            (e =
                s === j.FB
                    ? P.intl.string(P.t.odsU6W)
                    : s === j.Bu && null != n
                      ? P.intl.formatToPlainString(n.interval === j.WT.MONTH ? P.t.uZjpiJ : P.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : P.intl.formatToPlainString(n.interval === j.WT.MONTH ? P.t.rCJvqo : P.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, i.jsx)("div", { className: y.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(E.A, {
            justify: E.A.Justify.BETWEEN,
            align: E.A.Align.CENTER,
            className: y.pe,
            children: [
                (0, i.jsx)(_.Text, { variant: "text-md/normal", children: P.intl.string(P.t.lELyPj) }),
                (0, i.jsx)(_.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.Q3Qguo),
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
                className: r,
                sku: a,
                isFetching: l,
                hideCodes: o,
            } = this.props,
            { isOpen: c } = this.state;
        return (0, i.jsxs)(A.A, {
            className: r,
            children: [
                (0, i.jsx)(_.DUT, {
                    onClick: this.handleToggleOpen,
                    className: y.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(A.A.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)("div", {
                            className: y.MY,
                            children: [
                                (0, i.jsxs)(E.A, {
                                    align: E.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, i.jsxs)("div", {
                                            className: y.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(b.A, {
                                    direction: c ? b.A.Directions.UP : b.A.Directions.DOWN,
                                    className: y.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                c
                    ? (0, i.jsx)(A.A.Body, {
                          children: l
                              ? (0, i.jsx)(_.y$y, { className: y.u1 })
                              : (0, i.jsxs)(s.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) => (0, i.jsx)(L, { giftCode: e, sku: a, hideCode: o }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let M = c.Ay.connectStores([N.A, S.A, I.A, g.A, f.A, T.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = N.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let r = I.A.getForGifterSKUAndPlan(T.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: S.A.enabled,
        isFetching: I.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: I.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: g.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, O.c9)(n) : null,
        giftCodes: r,
    };
})(D);
