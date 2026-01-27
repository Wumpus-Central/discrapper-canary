n.d(t, {
    A: () => M,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(311907),
    d = n(451988),
    u = n(421380),
    _ = n(397927),
    p = n(869038),
    m = n(786144),
    g = n(587895),
    A = n(235986),
    f = n(769015),
    h = n(75825),
    b = n(871123),
    E = n(366523),
    x = n(961350),
    O = n(30793),
    C = n(351906),
    I = n(97352),
    T = n(67480),
    S = n(147925),
    j = n(957565),
    v = n(45938),
    N = n(615396),
    y = n(788868),
    P = n(985018),
    R = n(539785);

function D(e, t, n) {
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
class w extends i.PureComponent {
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
        p.A.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, r.jsxs)(A.A, {
            direction: A.A.Direction.VERTICAL,
            className: R.Gj,
            children: [
                (0, r.jsx)(_.e2O, {
                    className: R.ph,
                    value: (0, v.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: j.p5,
                    hideMessage: e ? P.intl.string(P.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: u.XD.BRAND,
                    buttonLook: u.pR.FILLED,
                }),
                (0, r.jsxs)("div", {
                    className: R.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, r.jsxs)(i.Fragment, {
                                  children: [
                                      P.intl.format(P.t.ltVZcJ, {
                                          hours: t.expiresAt.diff(o()(), "h"),
                                      }),
                                      " —\xa0",
                                  ],
                              })
                            : null,
                        (0, r.jsx)(_.DUT, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: P.intl.string(P.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            D(this, "_copyModeTimeout", new d.Ep()),
            D(this, "state", {
                copyMode: _.qCr.DEFAULT,
            }),
            D(this, "handleCopy", (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, v.AK)(t, n),
                    (0, j.C)(
                        e,
                        () =>
                            this.setState({
                                copyMode: _.qCr.SUCCESS,
                            }),
                        () =>
                            this.setState({
                                copyMode: _.qCr.ERROR,
                            }),
                    ),
                    this._copyModeTimeout.start(1e3, () => {
                        this.setState({
                            copyMode: _.qCr.DEFAULT,
                        });
                    });
            });
    }
}
class L extends i.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: n } = this.props;
        return (0, b.bF)(e)
            ? (0, r.jsx)(E.e, {
                  shape: "square",
                  sku: e,
                  containerClassName: R.ez,
              })
            : null != t
              ? (0, r.jsx)(h.A, {
                    giftStyle: t,
                    className: R.ez,
                    shouldAnimate: this.state.isHovered,
                })
              : (0, r.jsx)(f.A, {
                    game: n,
                    size: f.M.MEDIUM,
                    skuId: e.id,
                });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: n } = this.props;
        return (0, b.bF)(e)
            ? (0, r.jsxs)("div", {
                  className: s()(R.Oc, R.ic),
                  children: [
                      (0, r.jsx)(f.A, {
                          game: n,
                          size: f.M.XSMALL,
                          skuId: e.id,
                          className: R._u,
                      }),
                      P.intl.format(P.t["6plpZi"], {
                          applicationName: n.name,
                          copies: t.length,
                      }),
                  ],
              })
            : (0, r.jsx)("div", {
                  className: R.Oc,
                  children: P.intl.format(P.t.zMcvcA, {
                      copies: t.length,
                  }),
              });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === y.FB
                    ? P.intl.string(P.t.odsU6W)
                    : i === y.Bu && null != n
                      ? P.intl.formatToPlainString(n.interval === y.WT.MONTH ? P.t.uZjpiJ : P.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : P.intl.formatToPlainString(n.interval === y.WT.MONTH ? P.t.rCJvqo : P.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, r.jsx)("div", {
                className: R.mO,
                children: e,
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, r.jsxs)(A.A, {
            justify: A.A.Justify.BETWEEN,
            align: A.A.Align.CENTER,
            className: R.pe,
            children: [
                (0, r.jsx)(_.Text, {
                    variant: "text-md/normal",
                    children: P.intl.string(P.t.lELyPj),
                }),
                (0, r.jsx)(_.Button, {
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
        this.setState({
            isHovered: e,
        });
    }
    render() {
        let {
                entitlements: e,
                application: t,
                giftCodes: n,
                className: l,
                sku: s,
                isFetching: a,
                hideCodes: o,
            } = this.props,
            { isOpen: c } = this.state;
        return (0, r.jsxs)(m.A, {
            className: l,
            children: [
                (0, r.jsx)(_.DUT, {
                    onClick: this.handleToggleOpen,
                    className: R.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, r.jsx)(m.A.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, r.jsxs)("div", {
                            className: R.MY,
                            children: [
                                (0, r.jsxs)(A.A, {
                                    align: A.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, r.jsxs)("div", {
                                            className: R.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(S.A, {
                                    direction: c ? S.A.Directions.UP : S.A.Directions.DOWN,
                                    className: R.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                c
                    ? (0, r.jsx)(m.A.Body, {
                          children: a
                              ? (0, r.jsx)(_.y$y, {
                                    className: R.u1,
                                })
                              : (0, r.jsxs)(i.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, r.jsx)(
                                                w,
                                                {
                                                    giftCode: e,
                                                    sku: s,
                                                    hideCode: o,
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
            D(this, "_loadedAt", null),
            D(this, "state", {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1,
            }),
            D(this, "handleGenerateGiftCode", async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: r } = this.props;
                this.setState({
                    isCreating: !0,
                }),
                    await p.A.createGiftCode(t, n, r),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0,
                    });
            }),
            D(this, "handleToggleOpen", () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    r = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && r && p.A.fetchUserGiftCodesForSKU(e, t),
                    this.setState({
                        isOpen: !this.state.isOpen,
                    });
            });
    }
}
let M = c.Ay.connectStores([T.A, C.A, O.A, g.A, I.A, x.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: r } = e,
        i = T.A.get(t);
    if (null == i) throw Error("SKU was unavailable while rendering gift.");
    let l = O.A.getForGifterSKUAndPlan(x.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === r);
    return {
        sku: i,
        hideCodes: C.A.enabled,
        isFetching: O.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: O.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: g.A.getApplication(i.applicationId),
        subscriptionPlan: null != n ? (0, N.c9)(n) : null,
        giftCodes: l,
    };
})(L);
