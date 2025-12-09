n.d(t, { Z: () => U }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(846519),
    d = n(755721),
    f = n(481060),
    p = n(533307),
    _ = n(189907),
    m = n(812206),
    h = n(600164),
    g = n(925329),
    E = n(981632),
    b = n(164670),
    y = n(848118),
    O = n(314897),
    v = n(82142),
    S = n(246946),
    I = n(509545),
    T = n(55563),
    A = n(259580),
    C = n(572004),
    N = n(669079),
    P = n(296848),
    R = n(474936),
    D = n(388032),
    w = n(669255);
function x(e, t, n) {
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
let L = 512,
    j = 1000;
class M extends i.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case f.uA3.SUCCESS:
                return D.intl.string(D.t.XVvPjU);
            case f.uA3.ERROR:
                return D.intl.string(D.t.i4GM3L);
            default:
                return D.intl.string(D.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        p.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, r.jsxs)(h.Z, {
            direction: h.Z.Direction.VERTICAL,
            className: w.giftCodeRow,
            children: [
                (0, r.jsx)(f.kO8, {
                    className: w.codeText,
                    value: (0, N.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: C.wS,
                    hideMessage: e ? D.intl.string(D.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: d.Tt.BRAND,
                    buttonLook: d.iL.FILLED,
                }),
                (0, r.jsxs)("div", {
                    className: w.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, r.jsxs)(i.Fragment, {
                                  children: [
                                      D.intl.format(D.t.ltVZcJ, { hours: t.expiresAt.diff(l()(), "h") }),
                                      " \u2014\xA0",
                                  ],
                              })
                            : null,
                        (0, r.jsx)(f.P3F, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: D.intl.string(D.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "_copyModeTimeout", new u.V7()),
            x(this, "state", { copyMode: f.uA3.DEFAULT }),
            x(this, "handleCopy", (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, N.dM)(t, n),
                    (0, C.JG)(
                        e,
                        () => this.setState({ copyMode: f.uA3.SUCCESS }),
                        () => this.setState({ copyMode: f.uA3.ERROR }),
                    ),
                    this._copyModeTimeout.start(j, () => {
                        this.setState({ copyMode: f.uA3.DEFAULT });
                    });
            });
    }
}
class k extends i.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, b.K$)(e)
            ? (0, r.jsx)(y.A, {
                  shape: "square",
                  sku: e,
                  containerClassName: w.giftIcon,
              })
            : null != t
              ? (0, r.jsx)(E.Z, {
                    giftStyle: t,
                    className: w.giftIcon,
                    shouldAnimate: this.state.isHovered,
                })
              : (0, r.jsx)(g.Z, {
                    game: n,
                    size: g.A.MEDIUM,
                    skuId: e.id,
                });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, b.K$)(e)
            ? (0, r.jsxs)("div", {
                  className: o()(w.subtitleHeader, w.applicationSubtitleHeader),
                  children: [
                      (0, r.jsx)(g.Z, {
                          game: n,
                          size: g.A.XSMALL,
                          skuId: e.id,
                          className: w.applicationSubtitleIcon,
                      }),
                      D.intl.format(D.t["6plpZi"], {
                          applicationName: n.name,
                          copies: t.length,
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: w.subtitleHeader,
                  children: D.intl.format(D.t.zMcvcA, { copies: t.length }),
              });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === R.m8
                    ? D.intl.string(D.t.odsU6W)
                    : i === R.rX && null != n
                      ? D.intl.formatToPlainString(n.interval === R.rV.MONTH ? D.t.uZjpiJ : D.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : D.intl.formatToPlainString(n.interval === R.rV.MONTH ? D.t.rCJvqo : D.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, r.jsx)("div", {
                className: w.gameName,
                children: e,
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, r.jsxs)(h.Z, {
            justify: h.Z.Justify.BETWEEN,
            align: h.Z.Align.CENTER,
            className: w.generateCodeRow,
            children: [
                (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: D.intl.string(D.t.lELyPj),
                }),
                (0, r.jsx)(f.Button, {
                    variant: "primary",
                    size: "sm",
                    text: D.intl.string(D.t.Q3Qguo),
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
                className: a,
                sku: o,
                isFetching: s,
                hideCodes: l,
            } = this.props,
            { isOpen: c } = this.state;
        return (0, r.jsxs)(_.Z, {
            className: a,
            children: [
                (0, r.jsx)(f.P3F, {
                    onClick: this.handleToggleOpen,
                    className: w.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, r.jsx)(_.Z.Header, {
                        splashArtURL: t.getSplashURL(L),
                        children: (0, r.jsxs)("div", {
                            className: w.cardHeader,
                            children: [
                                (0, r.jsxs)(h.Z, {
                                    align: h.Z.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, r.jsxs)("div", {
                                            className: w.headerText,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(A.Z, {
                                    direction: c ? A.Z.Directions.UP : A.Z.Directions.DOWN,
                                    className: w.expandIcon,
                                }),
                            ],
                        }),
                    }),
                }),
                c
                    ? (0, r.jsx)(_.Z.Body, {
                          children: s
                              ? (0, r.jsx)(f.$jN, { className: w.spinner })
                              : (0, r.jsxs)(i.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, r.jsx)(
                                                M,
                                                {
                                                    giftCode: e,
                                                    sku: o,
                                                    hideCode: l,
                                                },
                                                e.code,
                                            ),
                                        ),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "_loadedAt", null),
            x(this, "state", {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1,
            }),
            x(this, "handleGenerateGiftCode", async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: r } = this.props;
                this.setState({ isCreating: !0 }),
                    await p.Z.createGiftCode(t, n, r),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0,
                    });
            }),
            x(this, "handleToggleOpen", () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    r = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && r && p.Z.fetchUserGiftCodesForSKU(e, t),
                    this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
let U = c.ZP.connectStores([T.Z, S.Z, v.Z, m.Z, I.Z, O.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: r } = e,
        i = T.Z.get(t);
    if (null == i) throw Error("SKU was unavailable while rendering gift.");
    let a = v.Z.getForGifterSKUAndPlan(O.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === r);
    return {
        sku: i,
        hideCodes: S.Z.enabled,
        isFetching: v.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: v.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: m.Z.getApplication(i.applicationId),
        subscriptionPlan: null != n ? (0, P.oE)(n) : null,
        giftCodes: a,
    };
})(k);
