(n.d(t, { Z: () => R }), n(388685), n(415506));
var i = n(255367),
    r = n(73800),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    o = n(846519),
    c = n(755721),
    d = n(481060),
    u = n(533307),
    m = n(189907),
    p = n(812206),
    g = n(600164),
    h = n(925329),
    f = n(981632),
    b = n(314897),
    x = n(82142),
    _ = n(246946),
    j = n(509545),
    O = n(55563),
    C = n(259580),
    E = n(572004),
    v = n(669079),
    S = n(296848),
    T = n(474936),
    N = n(388032),
    I = n(939672);
function y(e, t, n) {
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
class A extends r.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case d.uA3.SUCCESS:
                return N.intl.string(N.t.XVvPjY);
            case d.uA3.ERROR:
                return N.intl.string(N.t.i4GM3N);
            default:
                return N.intl.string(N.t.OpuAlJ);
        }
    }
    handleRevoke(e) {
        u.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(g.Z, {
            direction: g.Z.Direction.VERTICAL,
            className: I.giftCodeRow,
            children: [
                (0, i.jsx)(d.kO8, {
                    className: I.codeText,
                    value: (0, v.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: E.wS,
                    hideMessage: e ? N.intl.string(N.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.Tt.BRAND,
                    buttonLook: c.iL.FILLED
                }),
                (0, i.jsxs)('div', {
                    className: I.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(r.Fragment, {
                                  children: [N.intl.format(N.t.ltVZcH, { hours: t.expiresAt.diff(a()(), 'h') }), ' \u2014\xA0']
                              })
                            : null,
                        (0, i.jsx)(d.P3F, {
                            tag: 'a',
                            onClick: () => this.handleRevoke(t.code),
                            children: N.intl.string(N.t.v6Yaz8)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            y(this, '_copyModeTimeout', new o.V7()),
            y(this, 'state', { copyMode: d.uA3.DEFAULT }),
            y(this, 'handleCopy', (e) => {
                let { giftCode: t, sku: n } = this.props;
                ((0, v.dM)(t, n),
                    (0, E.JG)(
                        e,
                        () => this.setState({ copyMode: d.uA3.SUCCESS }),
                        () => this.setState({ copyMode: d.uA3.ERROR })
                    ),
                    this._copyModeTimeout.start(1000, () => {
                        this.setState({ copyMode: d.uA3.DEFAULT });
                    }));
            }));
    }
}
class P extends r.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: r } = this.props;
        return (
            (e =
                r === T.m8
                    ? N.intl.string(N.t.odsU6e)
                    : r === T.rX && null != n
                      ? N.intl.formatToPlainString(n.interval === T.rV.MONTH ? N.t.uZjpiI : N.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : N.intl.formatToPlainString(n.interval === T.rV.MONTH ? N.t.rCJvqq : N.t.Vd3Iu7, {
                              skuName: t.name,
                              intervalCount: n.intervalCount
                          })),
            (0, i.jsx)('div', {
                className: I.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(g.Z, {
            justify: g.Z.Justify.BETWEEN,
            align: g.Z.Align.CENTER,
            className: I.generateCodeRow,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: N.intl.string(N.t.lELyPj)
                }),
                (0, i.jsx)(d.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: N.intl.string(N.t.Q3Qgur),
                    loading: this.state.isCreating,
                    onClick: this.handleGenerateGiftCode
                })
            ]
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let { entitlements: e, application: t, giftCodes: n, className: s, sku: a, isFetching: l, hideCodes: o, giftStyle: c } = this.props,
            { isOpen: u } = this.state;
        return (0, i.jsxs)(m.Z, {
            className: s,
            children: [
                (0, i.jsx)(d.P3F, {
                    onClick: this.handleToggleOpen,
                    className: I.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(m.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)('div', {
                            className: I.cardHeader,
                            children: [
                                (0, i.jsxs)(g.Z, {
                                    align: g.Z.Align.CENTER,
                                    children: [
                                        null != c
                                            ? (0, i.jsx)(f.Z, {
                                                  giftStyle: c,
                                                  className: I.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, i.jsx)(h.Z, {
                                                  game: t,
                                                  size: h.Z.Sizes.MEDIUM,
                                                  skuId: a.id
                                              }),
                                        (0, i.jsxs)('div', {
                                            className: I.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, i.jsx)('div', {
                                                    className: I.subTextHeader,
                                                    children: N.intl.format(N.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(C.Z, {
                                    direction: u ? C.Z.Directions.UP : C.Z.Directions.DOWN,
                                    className: I.expandIcon
                                })
                            ]
                        })
                    })
                }),
                u
                    ? (0, i.jsx)(m.Z.Body, {
                          children: l
                              ? (0, i.jsx)(d.$jN, { className: I.spinner })
                              : (0, i.jsxs)(r.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, i.jsx)(
                                                A,
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
        (super(...e),
            y(this, '_loadedAt', null),
            y(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            y(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
                (this.setState({ isCreating: !0 }),
                    await u.Z.createGiftCode(t, n, i),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    }));
            }),
            y(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    i = !this.state.isOpen;
                ((null == n || null == this._loadedAt || n < this._loadedAt) && i && u.Z.fetchUserGiftCodesForSKU(e, t), this.setState({ isOpen: !this.state.isOpen }));
            }));
    }
}
let R = l.ZP.connectStores([O.Z, _.Z, x.Z, p.Z, j.Z, b.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        r = O.Z.get(t);
    if (null == r) throw Error('SKU was unavailable while rendering gift.');
    let s = x.Z.getForGifterSKUAndPlan(b.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: r,
        hideCodes: _.Z.enabled,
        isFetching: x.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: x.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: p.Z.getApplication(r.applicationId),
        subscriptionPlan: null != n ? (0, S.oE)(n) : null,
        giftCodes: s
    };
})(P);
