n.d(t, { Z: () => P }), n(388685), n(415506);
var r = n(200651),
    i = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    o = n(846519),
    c = n(481060),
    d = n(533307),
    u = n(189907),
    m = n(812206),
    g = n(600164),
    p = n(925329),
    h = n(981632),
    f = n(314897),
    b = n(82142),
    _ = n(246946),
    N = n(509545),
    x = n(55563),
    E = n(259580),
    j = n(572004),
    C = n(669079),
    O = n(296848),
    S = n(474936),
    v = n(388032),
    T = n(939672);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class y extends i.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case c.uA3.SUCCESS:
                return v.NW.string(v.t.XVvPjY);
            case c.uA3.ERROR:
                return v.NW.string(v.t.i4GM3N);
            default:
                return v.NW.string(v.t.OpuAlJ);
        }
    }
    handleRevoke(e) {
        d.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, r.jsxs)(g.Z, {
            direction: g.Z.Direction.VERTICAL,
            className: T.giftCodeRow,
            children: [
                (0, r.jsx)(c.kO8, {
                    className: T.codeText,
                    value: (0, C.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: j.wS,
                    hideMessage: e ? v.NW.string(v.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.Ttl.BRAND,
                    buttonLook: c.iLD.FILLED
                }),
                (0, r.jsxs)('div', {
                    className: T.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, r.jsxs)(i.Fragment, {
                                  children: [v.NW.format(v.t.ltVZcH, { hours: t.expiresAt.diff(a()(), 'h') }), ' \u2014\xA0']
                              })
                            : null,
                        (0, r.jsx)(c.P3F, {
                            tag: 'a',
                            onClick: () => this.handleRevoke(t.code),
                            children: v.NW.string(v.t.v6Yaz8)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, '_copyModeTimeout', new o.V7()),
            I(this, 'state', { copyMode: c.uA3.DEFAULT }),
            I(this, 'handleCopy', (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, C.dM)(t, n),
                    (0, j.JG)(
                        e,
                        () => this.setState({ copyMode: c.uA3.SUCCESS }),
                        () => this.setState({ copyMode: c.uA3.ERROR })
                    ),
                    this._copyModeTimeout.start(1000, () => {
                        this.setState({ copyMode: c.uA3.DEFAULT });
                    });
            });
    }
}
class A extends i.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: i } = this.props;
        return (
            (e =
                i === S.m8
                    ? v.NW.string(v.t.odsU6e)
                    : i === S.rX && null != n
                      ? v.NW.formatToPlainString(n.interval === S.rV.MONTH ? v.t.uZjpiI : v.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : v.NW.formatToPlainString(n.interval === S.rV.MONTH ? v.t.rCJvqq : v.t.Vd3Iu7, {
                              skuName: t.name,
                              intervalCount: n.intervalCount
                          })),
            (0, r.jsx)('div', {
                className: T.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, r.jsxs)(g.Z, {
            justify: g.Z.Justify.BETWEEN,
            align: g.Z.Align.CENTER,
            className: T.generateCodeRow,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: v.NW.string(v.t.lELyPj)
                }),
                (0, r.jsx)(c.zxk, {
                    submitting: this.state.isCreating,
                    size: c.zxk.Sizes.SMALL,
                    color: c.zxk.Colors.BRAND,
                    onClick: this.handleGenerateGiftCode,
                    children: v.NW.string(v.t.Q3Qgur)
                })
            ]
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let { entitlements: e, application: t, giftCodes: n, className: s, sku: a, isFetching: l, hideCodes: o, giftStyle: d } = this.props,
            { isOpen: m } = this.state;
        return (0, r.jsxs)(u.Z, {
            className: s,
            children: [
                (0, r.jsx)(c.P3F, {
                    onClick: this.handleToggleOpen,
                    className: T.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, r.jsx)(u.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, r.jsxs)('div', {
                            className: T.cardHeader,
                            children: [
                                (0, r.jsxs)(g.Z, {
                                    align: g.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, r.jsx)(h.Z, {
                                                  giftStyle: d,
                                                  className: T.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, r.jsx)(p.Z, {
                                                  game: t,
                                                  size: p.Z.Sizes.MEDIUM,
                                                  skuId: a.id
                                              }),
                                        (0, r.jsxs)('div', {
                                            className: T.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, r.jsx)('div', {
                                                    className: T.subTextHeader,
                                                    children: v.NW.format(v.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(E.Z, {
                                    direction: m ? E.Z.Directions.UP : E.Z.Directions.DOWN,
                                    className: T.expandIcon
                                })
                            ]
                        })
                    })
                }),
                m
                    ? (0, r.jsx)(u.Z.Body, {
                          children: l
                              ? (0, r.jsx)(c.$jN, { className: T.spinner })
                              : (0, r.jsxs)(i.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, r.jsx)(
                                                y,
                                                {
                                                    giftCode: e,
                                                    sku: a,
                                                    hideCode: o
                                                },
                                                e.code
                                            )
                                        )
                                    ]
                                })
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            I(this, '_loadedAt', null),
            I(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            I(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: r } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(t, n, r),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    });
            }),
            I(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    r = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && r && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
let P = l.ZP.connectStores([x.Z, _.Z, b.Z, m.Z, N.Z, f.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: r } = e,
        i = x.Z.get(t);
    if (null == i) throw Error('SKU was unavailable while rendering gift.');
    let s = b.Z.getForGifterSKUAndPlan(f.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === r);
    return {
        sku: i,
        hideCodes: _.Z.enabled,
        isFetching: b.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: b.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: m.Z.getApplication(i.applicationId),
        subscriptionPlan: null != n ? (0, O.oE)(n) : null,
        giftCodes: s
    };
})(A);
