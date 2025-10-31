n.d(t, { Z: () => L }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    c = n(755721),
    u = n(481060),
    d = n(533307),
    f = n(189907),
    _ = n(812206),
    p = n(600164),
    h = n(925329),
    m = n(981632),
    g = n(314897),
    E = n(82142),
    b = n(246946),
    y = n(509545),
    O = n(55563),
    v = n(259580),
    I = n(572004),
    T = n(669079),
    S = n(296848),
    A = n(474936),
    C = n(388032),
    N = n(669255);
function R(e, t, n) {
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
let P = 512,
    w = 1000;
class D extends i.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case u.uA3.SUCCESS:
                return C.intl.string(C.t.XVvPjU);
            case u.uA3.ERROR:
                return C.intl.string(C.t.i4GM3L);
            default:
                return C.intl.string(C.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        d.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, r.jsxs)(p.Z, {
            direction: p.Z.Direction.VERTICAL,
            className: N.giftCodeRow,
            children: [
                (0, r.jsx)(u.kO8, {
                    className: N.codeText,
                    value: (0, T.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: I.wS,
                    hideMessage: e ? C.intl.string(C.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.Tt.BRAND,
                    buttonLook: c.iL.FILLED,
                }),
                (0, r.jsxs)("div", {
                    className: N.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, r.jsxs)(i.Fragment, {
                                  children: [
                                      C.intl.format(C.t.ltVZcJ, { hours: t.expiresAt.diff(o()(), "h") }),
                                      " \u2014\xA0",
                                  ],
                              })
                            : null,
                        (0, r.jsx)(u.P3F, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: C.intl.string(C.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            R(this, "_copyModeTimeout", new l.V7()),
            R(this, "state", { copyMode: u.uA3.DEFAULT }),
            R(this, "handleCopy", (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, T.dM)(t, n),
                    (0, I.JG)(
                        e,
                        () => this.setState({ copyMode: u.uA3.SUCCESS }),
                        () => this.setState({ copyMode: u.uA3.ERROR }),
                    ),
                    this._copyModeTimeout.start(w, () => {
                        this.setState({ copyMode: u.uA3.DEFAULT });
                    });
            });
    }
}
class x extends i.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === A.m8
                    ? C.intl.string(C.t.odsU6W)
                    : i === A.rX && null != n
                      ? C.intl.formatToPlainString(n.interval === A.rV.MONTH ? C.t.uZjpiJ : C.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: n.intervalCount,
                        })
                      : null == n
                        ? t.name
                        : C.intl.formatToPlainString(n.interval === A.rV.MONTH ? C.t.rCJvqo : C.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: n.intervalCount,
                          })),
            (0, r.jsx)("div", {
                className: N.gameName,
                children: e,
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, r.jsxs)(p.Z, {
            justify: p.Z.Justify.BETWEEN,
            align: p.Z.Align.CENTER,
            className: N.generateCodeRow,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: C.intl.string(C.t.lELyPj),
                }),
                (0, r.jsx)(u.Button, {
                    variant: "primary",
                    size: "sm",
                    text: C.intl.string(C.t.Q3Qguo),
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
                giftStyle: c,
            } = this.props,
            { isOpen: d } = this.state;
        return (0, r.jsxs)(f.Z, {
            className: a,
            children: [
                (0, r.jsx)(u.P3F, {
                    onClick: this.handleToggleOpen,
                    className: N.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, r.jsx)(f.Z.Header, {
                        splashArtURL: t.getSplashURL(P),
                        children: (0, r.jsxs)("div", {
                            className: N.cardHeader,
                            children: [
                                (0, r.jsxs)(p.Z, {
                                    align: p.Z.Align.CENTER,
                                    children: [
                                        null != c
                                            ? (0, r.jsx)(m.Z, {
                                                  giftStyle: c,
                                                  className: N.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered,
                                              })
                                            : (0, r.jsx)(h.Z, {
                                                  game: t,
                                                  size: h.A.MEDIUM,
                                                  skuId: o.id,
                                              }),
                                        (0, r.jsxs)("div", {
                                            className: N.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, r.jsx)("div", {
                                                    className: N.subTextHeader,
                                                    children: C.intl.format(C.t.zMcvcA, { copies: e.length }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(v.Z, {
                                    direction: d ? v.Z.Directions.UP : v.Z.Directions.DOWN,
                                    className: N.expandIcon,
                                }),
                            ],
                        }),
                    }),
                }),
                d
                    ? (0, r.jsx)(f.Z.Body, {
                          children: s
                              ? (0, r.jsx)(u.$jN, { className: N.spinner })
                              : (0, r.jsxs)(i.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, r.jsx)(
                                                D,
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
            R(this, "_loadedAt", null),
            R(this, "state", {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1,
            }),
            R(this, "handleGenerateGiftCode", async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: r } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(t, n, r),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0,
                    });
            }),
            R(this, "handleToggleOpen", () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    r = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && r && d.Z.fetchUserGiftCodesForSKU(e, t),
                    this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
let L = s.ZP.connectStores([O.Z, b.Z, E.Z, _.Z, y.Z, g.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: r } = e,
        i = O.Z.get(t);
    if (null == i) throw Error("SKU was unavailable while rendering gift.");
    let a = E.Z.getForGifterSKUAndPlan(g.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === r);
    return {
        sku: i,
        hideCodes: b.Z.enabled,
        isFetching: E.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: E.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: _.Z.getApplication(i.applicationId),
        subscriptionPlan: null != n ? (0, S.oE)(n) : null,
        giftCodes: a,
    };
})(x);
