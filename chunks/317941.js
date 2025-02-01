n.d(t, { Z: () => P }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(846519),
    c = n(481060),
    d = n(533307),
    u = n(189907),
    m = n(812206),
    h = n(600164),
    g = n(925329),
    _ = n(981632),
    x = n(314897),
    p = n(82142),
    E = n(246946),
    C = n(509545),
    f = n(55563),
    T = n(259580),
    N = n(572004),
    I = n(669079),
    S = n(296848),
    b = n(474936),
    v = n(388032),
    j = n(531822);
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
        return (0, i.jsxs)(h.Z, {
            direction: h.Z.Direction.VERTICAL,
            className: j.giftCodeRow,
            children: [
                (0, i.jsx)(c.kO8, {
                    className: j.codeText,
                    value: (0, I.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: N.wS,
                    hideMessage: e ? v.intl.string(v.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.Ttl.BRAND,
                    buttonLook: c.iLD.FILLED
                }),
                (0, i.jsxs)('div', {
                    className: j.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [v.intl.format(v.t.ltVZcH, { hours: t.expiresAt.diff(l()(), 'h') }), ' \u2014\xA0']
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
                (0, I.dM)(t, n);
                try {
                    (0, N.JG)(e), this.setState({ copyMode: c.uA3.SUCCESS });
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
                s === b.m8
                    ? v.intl.string(v.t.odsU6e)
                    : s === b.rX && null != n
                      ? v.intl.formatToPlainString(n.interval === b.rV.MONTH ? v.t.uZjpiI : v.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : v.intl.formatToPlainString(n.interval === b.rV.MONTH ? v.t.rCJvqq : v.t.Vd3Iu7, {
                              skuName: t.name,
                              intervalCount: n.intervalCount
                          })),
            (0, i.jsx)('div', {
                className: j.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(h.Z, {
            justify: h.Z.Justify.BETWEEN,
            align: h.Z.Align.CENTER,
            className: j.generateCodeRow,
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
        let { entitlements: e, application: t, giftCodes: n, className: r, sku: l, isFetching: a, hideCodes: o, giftStyle: d } = this.props,
            { isOpen: m } = this.state;
        return (0, i.jsxs)(u.Z, {
            className: r,
            children: [
                (0, i.jsx)(c.P3F, {
                    onClick: this.handleToggleOpen,
                    className: j.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(u.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)('div', {
                            className: j.cardHeader,
                            children: [
                                (0, i.jsxs)(h.Z, {
                                    align: h.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, i.jsx)(_.Z, {
                                                  giftStyle: d,
                                                  className: j.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, i.jsx)(g.Z, {
                                                  game: t,
                                                  size: g.Z.Sizes.MEDIUM,
                                                  skuId: l.id
                                              }),
                                        (0, i.jsxs)('div', {
                                            className: j.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, i.jsx)('div', {
                                                    className: j.subTextHeader,
                                                    children: v.intl.format(v.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(T.Z, {
                                    direction: m ? T.Z.Directions.UP : T.Z.Directions.DOWN,
                                    className: j.expandIcon
                                })
                            ]
                        })
                    })
                }),
                m
                    ? (0, i.jsx)(u.Z.Body, {
                          children: a
                              ? (0, i.jsx)(c.$jN, { className: j.spinner })
                              : (0, i.jsxs)(s.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, i.jsx)(
                                                O,
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
let P = a.ZP.connectStores([f.Z, E.Z, p.Z, m.Z, C.Z, x.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = f.Z.get(t);
    if (null == s) throw Error('SKU was unavailable while rendering gift.');
    let r = p.Z.getForGifterSKUAndPlan(x.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: E.Z.enabled,
        isFetching: p.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: p.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: m.Z.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, S.oE)(n) : null,
        giftCodes: r
    };
})(R);
