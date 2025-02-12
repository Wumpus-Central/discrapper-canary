n.d(t, { Z: () => D }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    l = n(913527),
    r = n.n(l),
    a = n(442837),
    o = n(846519),
    c = n(481060),
    d = n(533307),
    u = n(189907),
    h = n(812206),
    m = n(600164),
    g = n(925329),
    x = n(981632),
    _ = n(314897),
    p = n(82142),
    E = n(246946),
    C = n(509545),
    f = n(55563),
    N = n(259580),
    I = n(572004),
    T = n(669079),
    S = n(296848),
    j = n(474936),
    v = n(388032),
    b = n(281098);
function A(e, t, n) {
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
class O extends s.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case c.uA3.SUCCESS:
                return v.intl.string(v.t.XVvPjY);
            case c.uA3.ERROR:
                return v.intl.string(v.t.i4GM3N);
            default:
                return v.intl.string(v.t.OpuAlJ);
        }
    }
    handleRevoke(e) {
        d.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(m.Z, {
            direction: m.Z.Direction.VERTICAL,
            className: b.giftCodeRow,
            children: [
                (0, i.jsx)(c.kO8, {
                    className: b.codeText,
                    value: (0, T.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: I.wS,
                    hideMessage: e ? v.intl.string(v.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.Ttl.BRAND,
                    buttonLook: c.iLD.FILLED
                }),
                (0, i.jsxs)('div', {
                    className: b.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [v.intl.format(v.t.ltVZcH, { hours: t.expiresAt.diff(r()(), 'h') }), ' \u2014\xA0']
                              })
                            : null,
                        (0, i.jsx)(c.P3F, {
                            tag: 'a',
                            onClick: () => this.handleRevoke(t.code),
                            children: v.intl.string(v.t.v6Yaz8)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, '_copyModeTimeout', new o.V7()),
            A(this, 'state', { copyMode: c.uA3.DEFAULT }),
            A(this, 'handleCopy', (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, T.dM)(t, n);
                try {
                    (0, I.JG)(e), this.setState({ copyMode: c.uA3.SUCCESS });
                } catch (e) {
                    this.setState({ copyMode: c.uA3.ERROR });
                }
                this._copyModeTimeout.start(1000, () => {
                    this.setState({ copyMode: c.uA3.DEFAULT });
                });
            });
    }
}
class R extends s.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e;
        let { sku: t, subscriptionPlan: n, giftCodeBatchId: s } = this.props;
        return (
            (e =
                s === j.m8
                    ? v.intl.string(v.t.odsU6e)
                    : s === j.rX && null != n
                      ? v.intl.formatToPlainString(n.interval === j.rV.MONTH ? v.t.uZjpiI : v.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : v.intl.formatToPlainString(n.interval === j.rV.MONTH ? v.t.rCJvqq : v.t.Vd3Iu7, {
                              skuName: t.name,
                              intervalCount: n.intervalCount
                          })),
            (0, i.jsx)('div', {
                className: b.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(m.Z, {
            justify: m.Z.Justify.BETWEEN,
            align: m.Z.Align.CENTER,
            className: b.generateCodeRow,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: v.intl.string(v.t.lELyPj)
                }),
                (0, i.jsx)(c.zxk, {
                    submitting: this.state.isCreating,
                    size: c.zxk.Sizes.SMALL,
                    color: c.zxk.Colors.BRAND,
                    onClick: this.handleGenerateGiftCode,
                    children: v.intl.string(v.t.Q3Qgur)
                })
            ]
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let { entitlements: e, application: t, giftCodes: n, className: l, sku: r, isFetching: a, hideCodes: o, giftStyle: d } = this.props,
            { isOpen: h } = this.state;
        return (0, i.jsxs)(u.Z, {
            className: l,
            children: [
                (0, i.jsx)(c.P3F, {
                    onClick: this.handleToggleOpen,
                    className: b.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(u.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)('div', {
                            className: b.cardHeader,
                            children: [
                                (0, i.jsxs)(m.Z, {
                                    align: m.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, i.jsx)(x.Z, {
                                                  giftStyle: d,
                                                  className: b.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, i.jsx)(g.Z, {
                                                  game: t,
                                                  size: g.Z.Sizes.MEDIUM,
                                                  skuId: r.id
                                              }),
                                        (0, i.jsxs)('div', {
                                            className: b.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, i.jsx)('div', {
                                                    className: b.subTextHeader,
                                                    children: v.intl.format(v.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(N.Z, {
                                    direction: h ? N.Z.Directions.UP : N.Z.Directions.DOWN,
                                    className: b.expandIcon
                                })
                            ]
                        })
                    })
                }),
                h
                    ? (0, i.jsx)(u.Z.Body, {
                          children: a
                              ? (0, i.jsx)(c.$jN, { className: b.spinner })
                              : (0, i.jsxs)(s.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, i.jsx)(
                                                O,
                                                {
                                                    giftCode: e,
                                                    sku: r,
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
            A(this, '_loadedAt', null),
            A(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            A(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(t, n, i),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    });
            }),
            A(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    i = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && i && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
let D = a.ZP.connectStores([f.Z, E.Z, p.Z, h.Z, C.Z, _.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = f.Z.get(t);
    if (null == s) throw Error('SKU was unavailable while rendering gift.');
    let l = p.Z.getForGifterSKUAndPlan(_.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: E.Z.enabled,
        isFetching: p.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: p.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: h.Z.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, S.oE)(n) : null,
        giftCodes: l
    };
})(R);
