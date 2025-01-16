n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    s = n(913527),
    a = n.n(s),
    l = n(442837),
    o = n(846519),
    c = n(481060),
    d = n(533307),
    u = n(189907),
    m = n(812206),
    g = n(600164),
    h = n(925329),
    p = n(981632),
    x = n(314897),
    f = n(82142),
    _ = n(246946),
    E = n(509545),
    C = n(55563),
    T = n(259580),
    S = n(572004),
    b = n(669079),
    I = n(296848),
    N = n(474936),
    v = n(388032),
    A = n(531822);
function j(e, t, n) {
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
class O extends r.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case c.CopyInputModes.SUCCESS:
                return v.intl.string(v.t.XVvPjY);
            case c.CopyInputModes.ERROR:
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
        return (0, i.jsxs)(g.Z, {
            direction: g.Z.Direction.VERTICAL,
            className: A.giftCodeRow,
            children: [
                (0, i.jsx)(c.CopyInput, {
                    className: A.codeText,
                    value: (0, b.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: S.wS,
                    hideMessage: e ? v.intl.string(v.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.ButtonColors.BRAND,
                    buttonLook: c.ButtonLooks.FILLED
                }),
                (0, i.jsxs)('div', {
                    className: A.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(r.Fragment, {
                                  children: [v.intl.format(v.t.ltVZcH, { hours: t.expiresAt.diff(a()(), 'h') }), ' \u2014\xA0']
                              })
                            : null,
                        (0, i.jsx)(c.Clickable, {
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
            j(this, '_copyModeTimeout', new o.V7()),
            j(this, 'state', { copyMode: c.CopyInputModes.DEFAULT }),
            j(this, 'handleCopy', (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, b.dM)(t, n);
                try {
                    (0, S.JG)(e), this.setState({ copyMode: c.CopyInputModes.SUCCESS });
                } catch (e) {
                    this.setState({ copyMode: c.CopyInputModes.ERROR });
                }
                this._copyModeTimeout.start(1000, () => {
                    this.setState({ copyMode: c.CopyInputModes.DEFAULT });
                });
            });
    }
}
class R extends r.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e;
        let { sku: t, subscriptionPlan: n, giftCodeBatchId: r } = this.props;
        return (
            (e =
                r === N.m8
                    ? v.intl.string(v.t.odsU6e)
                    : r === N.rX && null != n
                      ? v.intl.formatToPlainString(n.interval === N.rV.MONTH ? v.t.uZjpiI : v.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : v.intl.formatToPlainString(n.interval === N.rV.MONTH ? v.t.rCJvqq : v.t.Vd3Iu7, {
                              skuName: t.name,
                              intervalCount: n.intervalCount
                          })),
            (0, i.jsx)('div', {
                className: A.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(g.Z, {
            justify: g.Z.Justify.BETWEEN,
            align: g.Z.Align.CENTER,
            className: A.generateCodeRow,
            children: [
                (0, i.jsx)('div', {
                    className: A.codeText,
                    children: v.intl.string(v.t.lELyPj)
                }),
                (0, i.jsx)(c.Button, {
                    submitting: this.state.isCreating,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.BRAND,
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
        let { entitlements: e, application: t, giftCodes: n, className: s, sku: a, isFetching: l, hideCodes: o, giftStyle: d } = this.props,
            { isOpen: m } = this.state;
        return (0, i.jsxs)(u.Z, {
            className: s,
            children: [
                (0, i.jsx)(c.Clickable, {
                    onClick: this.handleToggleOpen,
                    className: A.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(u.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)('div', {
                            className: A.cardHeader,
                            children: [
                                (0, i.jsxs)(g.Z, {
                                    align: g.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, i.jsx)(p.Z, {
                                                  giftStyle: d,
                                                  className: A.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, i.jsx)(h.Z, {
                                                  game: t,
                                                  size: h.Z.Sizes.MEDIUM,
                                                  skuId: a.id
                                              }),
                                        (0, i.jsxs)('div', {
                                            className: A.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, i.jsx)('div', {
                                                    className: A.subTextHeader,
                                                    children: v.intl.format(v.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(T.Z, {
                                    direction: m ? T.Z.Directions.UP : T.Z.Directions.DOWN,
                                    className: A.expandIcon
                                })
                            ]
                        })
                    })
                }),
                m
                    ? (0, i.jsx)(u.Z.Body, {
                          children: l
                              ? (0, i.jsx)(c.Spinner, { className: A.spinner })
                              : (0, i.jsxs)(r.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, i.jsx)(
                                                O,
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
            j(this, '_loadedAt', null),
            j(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            j(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(t, n, i),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    });
            }),
            j(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    i = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && i && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
t.Z = l.ZP.connectStores([C.Z, _.Z, f.Z, m.Z, E.Z, x.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        r = C.Z.get(t);
    if (null == r) throw Error('SKU was unavailable while rendering gift.');
    let s = f.Z.getForGifterSKUAndPlan(x.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: r,
        hideCodes: _.Z.enabled,
        isFetching: f.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: f.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: m.Z.getApplication(r.applicationId),
        subscriptionPlan: null != n ? (0, I.oE)(n) : null,
        giftCodes: s
    };
})(R);
