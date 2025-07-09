(s.d(e, { default: () => _ }), s(953529), s(388685));
var n = s(255367),
    i = s(73800),
    a = s(442837),
    c = s(755721),
    r = s(481060),
    o = s(355467),
    l = s(505649),
    u = s(626135),
    h = s(937615),
    d = s(622999),
    p = s(981631),
    g = s(388032),
    m = s(279818);
function x(t, e, s) {
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
class f extends i.Component {
    componentDidMount() {
        u.default.track(p.rMx.OPEN_MODAL, { type: p.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    componentWillUnmount() {
        u.default.track(p.rMx.MODAL_DISMISSED, { type: p.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    getTitle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return g.intl.string(g.t.N65Zra);
            case 2:
                return g.intl.string(g.t.DPgrRk);
            case 3:
                return g.intl.string(g.t.xypuIi);
            default:
                return g.intl.string(g.t.uEoQdH);
        }
    }
    getImageStyle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return m.authenticationRequiredImage;
            case 2:
                return m.authenticationSuccessImage;
            default:
                return m.authenticationFailImage;
        }
    }
    getMessage() {
        let { step: t } = this.state,
            { pendingPayment: e } = this.props;
        switch (t) {
            case 0:
                return g.intl.format(g.t.RoxWER, {
                    price: (0, h.T4)(e.amount, e.currency),
                    item: e.description
                });
            case 2:
                return g.intl.string(g.t.PZskfn);
            case 3:
                return g.intl.format(g.t['j0tI/f'], { item: e.description });
            default:
                return g.intl.string(g.t.BAr3rK);
        }
    }
    renderButtons() {
        let { step: t } = this.state,
            { disableAuthentication: e } = this.props;
        return 0 === t
            ? (0, n.jsxs)(i.Fragment, {
                  children: [
                      (0, n.jsx)(c.zx, {
                          color: c.Tt.BRAND,
                          disabled: e,
                          onClick: this.handleAuthenticate,
                          children: g.intl.string(g.t.VAqBoK)
                      }),
                      (0, n.jsx)(c.zx, {
                          look: c.zx.Looks.LINK,
                          size: c.zx.Sizes.NONE,
                          color: c.zx.Colors.PRIMARY,
                          onClick: this.cancelPayment,
                          className: m.cancelButton,
                          children: g.intl.string(g.t['2NeVoa'])
                      })
                  ]
              })
            : (0, n.jsx)(c.zx, {
                  color: c.Tt.BRAND,
                  onClick: this.close,
                  children: g.intl.string(g.t.cpT0Cg)
              });
    }
    render() {
        let { transitionState: t } = this.props;
        return (0, n.jsxs)(r.Y0X, {
            transitionState: t,
            className: m.modal,
            size: r.CgR.SMALL,
            'aria-label': this.getTitle(),
            parentComponent: 'PaymentAuthenticationModal',
            children: [
                (0, n.jsxs)(r.xBx, {
                    children: [
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            children: (0, n.jsx)('span', {
                                className: m.__invalid_modalTitle,
                                children: this.getTitle()
                            })
                        }),
                        (0, n.jsx)(r.olH, {
                            className: m.closeIcon,
                            onClick: this.close
                        })
                    ]
                }),
                (0, n.jsxs)(r.hzk, {
                    className: m.content,
                    children: [
                        (0, n.jsx)('div', { className: this.getImageStyle() }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: this.getMessage()
                        })
                    ]
                }),
                (0, n.jsx)(r.mzw, {
                    className: m.__invalid_footer,
                    children: this.renderButtons()
                })
            ]
        });
    }
    constructor(...t) {
        (super(...t),
            x(this, 'state', { step: 0 }),
            x(this, 'close', async () => {
                let { step: t } = this.state,
                    { onClose: e, pendingPayment: s } = this.props;
                (0 === t && (await (0, o.UY)(s.id)), e());
            }),
            x(this, 'cancelPayment', async () => {
                let { pendingPayment: t } = this.props;
                try {
                    await (0, o.UY)(t.id);
                } catch (t) {
                    throw (this.setState({ step: 3 }), t);
                }
                this.setState({ step: 3 });
            }),
            x(this, 'handleAuthenticate', async () => {
                let { pendingPayment: t } = this.props,
                    { error: e } = await (0, d.oe)(t.id);
                null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 });
            }));
    }
}
let _ = a.ZP.connectStores([l.Z], () => ({ disableAuthentication: l.Z.isAwaitingAuthentication }))(f);
