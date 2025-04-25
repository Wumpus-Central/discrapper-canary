n.d(t, { Z: () => P }), n(388685), n(415506);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    l = n.n(s),
    a = n(442837),
    o = n(846519),
    c = n(481060),
    d = n(533307),
    u = n(189907),
    m = n(812206),
    p = n(600164),
    g = n(925329),
    h = n(981632),
    f = n(314897),
    b = n(82142),
    _ = n(246946),
    x = n(509545),
    E = n(55563),
    j = n(259580),
    C = n(572004),
    O = n(669079),
    S = n(296848),
    v = n(474936),
    T = n(388032),
    I = n(939672);
function N(e, t, n) {
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
class y extends r.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case c.uA3.SUCCESS:
                return T.intl.string(T.t.XVvPjY);
            case c.uA3.ERROR:
                return T.intl.string(T.t.i4GM3N);
            default:
                return T.intl.string(T.t.OpuAlJ);
        }
    }
    handleRevoke(e) {
        d.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(p.Z, {
            direction: p.Z.Direction.VERTICAL,
            className: I.giftCodeRow,
            children: [
                (0, i.jsx)(c.kO8, {
                    className: I.codeText,
                    value: (0, O.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: C.wS,
                    hideMessage: e ? T.intl.string(T.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.Ttl.BRAND,
                    buttonLook: c.iLD.FILLED
                }),
                (0, i.jsxs)('div', {
                    className: I.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(r.Fragment, {
                                  children: [T.intl.format(T.t.ltVZcH, { hours: t.expiresAt.diff(l()(), 'h') }), ' \u2014\xA0']
                              })
                            : null,
                        (0, i.jsx)(c.P3F, {
                            tag: 'a',
                            onClick: () => this.handleRevoke(t.code),
                            children: T.intl.string(T.t.v6Yaz8)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, '_copyModeTimeout', new o.V7()),
            N(this, 'state', { copyMode: c.uA3.DEFAULT }),
            N(this, 'handleCopy', (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, O.dM)(t, n),
                    (0, C.JG)(
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
class A extends r.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: n, giftCodeBatchId: r } = this.props;
        return (
            (e =
                r === v.m8
                    ? T.intl.string(T.t.odsU6e)
                    : r === v.rX && null != n
                      ? T.intl.formatToPlainString(n.interval === v.rV.MONTH ? T.t.uZjpiI : T.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : T.intl.formatToPlainString(n.interval === v.rV.MONTH ? T.t.rCJvqq : T.t.Vd3Iu7, {
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
        return (0, i.jsxs)(p.Z, {
            justify: p.Z.Justify.BETWEEN,
            align: p.Z.Align.CENTER,
            className: I.generateCodeRow,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: T.intl.string(T.t.lELyPj)
                }),
                (0, i.jsx)(c.zxk, {
                    submitting: this.state.isCreating,
                    size: c.zxk.Sizes.SMALL,
                    color: c.zxk.Colors.BRAND,
                    onClick: this.handleGenerateGiftCode,
                    children: T.intl.string(T.t.Q3Qgur)
                })
            ]
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let { entitlements: e, application: t, giftCodes: n, className: s, sku: l, isFetching: a, hideCodes: o, giftStyle: d } = this.props,
            { isOpen: m } = this.state;
        return (0, i.jsxs)(u.Z, {
            className: s,
            children: [
                (0, i.jsx)(c.P3F, {
                    onClick: this.handleToggleOpen,
                    className: I.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(u.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)('div', {
                            className: I.cardHeader,
                            children: [
                                (0, i.jsxs)(p.Z, {
                                    align: p.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, i.jsx)(h.Z, {
                                                  giftStyle: d,
                                                  className: I.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, i.jsx)(g.Z, {
                                                  game: t,
                                                  size: g.Z.Sizes.MEDIUM,
                                                  skuId: l.id
                                              }),
                                        (0, i.jsxs)('div', {
                                            className: I.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, i.jsx)('div', {
                                                    className: I.subTextHeader,
                                                    children: T.intl.format(T.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(j.Z, {
                                    direction: m ? j.Z.Directions.UP : j.Z.Directions.DOWN,
                                    className: I.expandIcon
                                })
                            ]
                        })
                    })
                }),
                m
                    ? (0, i.jsx)(u.Z.Body, {
                          children: a
                              ? (0, i.jsx)(c.$jN, { className: I.spinner })
                              : (0, i.jsxs)(r.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, i.jsx)(
                                                y,
                                                {
                                                    giftCode: e,
                                                    sku: l,
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
            N(this, '_loadedAt', null),
            N(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            N(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(t, n, i),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    });
            }),
            N(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    i = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && i && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
let P = a.ZP.connectStores([E.Z, _.Z, b.Z, m.Z, x.Z, f.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        r = E.Z.get(t);
    if (null == r) throw Error('SKU was unavailable while rendering gift.');
    let s = b.Z.getForGifterSKUAndPlan(f.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: r,
        hideCodes: _.Z.enabled,
        isFetching: b.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: b.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: m.Z.getApplication(r.applicationId),
        subscriptionPlan: null != n ? (0, S.oE)(n) : null,
        giftCodes: s
    };
})(A);
