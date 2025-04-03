s.d(e, { default: () => N }), s(266796), s(47120);
var n = s(200651),
    a = s(192379),
    i = s(442837),
    c = s(481060),
    r = s(355467),
    o = s(505649),
    l = s(626135),
    u = s(937615),
    h = s(622999),
    d = s(981631),
    p = s(388032),
    g = s(279818);
function m(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = s),
        t
    );
}
class x extends a.Component {
    componentDidMount() {
        l.default.track(d.rMx.OPEN_MODAL, { type: d.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    componentWillUnmount() {
        l.default.track(d.rMx.MODAL_DISMISSED, { type: d.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    getTitle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return p.NW.string(p.t.N65Zra);
            case 2:
                return p.NW.string(p.t.DPgrRk);
            case 3:
                return p.NW.string(p.t.xypuIi);
            default:
                return p.NW.string(p.t.uEoQdH);
        }
    }
    getImageStyle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return g.authenticationRequiredImage;
            case 2:
                return g.authenticationSuccessImage;
            default:
                return g.authenticationFailImage;
        }
    }
    getMessage() {
        let { step: t } = this.state,
            { pendingPayment: e } = this.props;
        switch (t) {
            case 0:
                return p.NW.format(p.t.RoxWER, {
                    price: (0, u.T4)(e.amount, e.currency),
                    item: e.description
                });
            case 2:
                return p.NW.string(p.t.PZskfn);
            case 3:
                return p.NW.format(p.t['j0tI/f'], { item: e.description });
            default:
                return p.NW.string(p.t.BAr3rK);
        }
    }
    renderButtons() {
        let { step: t } = this.state,
            { disableAuthentication: e } = this.props;
        return 0 === t
            ? (0, n.jsxs)(a.Fragment, {
                  children: [
                      (0, n.jsx)(c.zxk, {
                          color: c.Ttl.BRAND,
                          disabled: e,
                          onClick: this.handleAuthenticate,
                          children: p.NW.string(p.t.VAqBoK)
                      }),
                      (0, n.jsx)(c.zxk, {
                          look: c.zxk.Looks.LINK,
                          size: c.zxk.Sizes.NONE,
                          color: c.zxk.Colors.PRIMARY,
                          onClick: this.cancelPayment,
                          className: g.cancelButton,
                          children: p.NW.string(p.t['2NeVoa'])
                      })
                  ]
              })
            : (0, n.jsx)(c.zxk, {
                  color: c.Ttl.BRAND,
                  onClick: this.close,
                  children: p.NW.string(p.t.cpT0Cg)
              });
    }
    render() {
        let { transitionState: t } = this.props;
        return (0, n.jsxs)(c.Y0X, {
            transitionState: t,
            className: g.modal,
            size: c.CgR.SMALL,
            'aria-label': this.getTitle(),
            children: [
                (0, n.jsxs)(c.xBx, {
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            children: (0, n.jsx)('span', {
                                className: g.__invalid_modalTitle,
                                children: this.getTitle()
                            })
                        }),
                        (0, n.jsx)(c.olH, {
                            className: g.closeIcon,
                            onClick: this.close
                        })
                    ]
                }),
                (0, n.jsxs)(c.hzk, {
                    className: g.content,
                    children: [
                        (0, n.jsx)('div', { className: this.getImageStyle() }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: this.getMessage()
                        })
                    ]
                }),
                (0, n.jsx)(c.mzw, {
                    className: g.__invalid_footer,
                    children: this.renderButtons()
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            m(this, 'state', { step: 0 }),
            m(this, 'close', async () => {
                let { step: t } = this.state,
                    { onClose: e, pendingPayment: s } = this.props;
                0 === t && (await (0, r.UY)(s.id)), e();
            }),
            m(this, 'cancelPayment', async () => {
                let { pendingPayment: t } = this.props;
                try {
                    await (0, r.UY)(t.id);
                } catch (t) {
                    throw (this.setState({ step: 3 }), t);
                }
                this.setState({ step: 3 });
            }),
            m(this, 'handleAuthenticate', async () => {
                let { pendingPayment: t } = this.props,
                    { error: e } = await (0, h.oe)(t.id);
                null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 });
            });
    }
}
let N = i.ZP.connectStores([o.Z], () => ({ disableAuthentication: o.Z.isAwaitingAuthentication }))(x);
