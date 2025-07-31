(i.d(e, { default: () => m }), i(953529), i(388685));
var s = i(255367),
    n = i(73800),
    a = i(82659),
    r = i(481060),
    c = i(355467),
    o = i(626135),
    u = i(937615),
    l = i(622999),
    h = i(981631),
    d = i(388032),
    p = i(279818);
function g(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
class f extends n.Component {
    componentDidMount() {
        o.default.track(h.rMx.OPEN_MODAL, { type: h.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    componentWillUnmount() {
        o.default.track(h.rMx.MODAL_DISMISSED, { type: h.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    getTitle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return d.intl.string(d.t.N65Zra);
            case 2:
                return d.intl.string(d.t.DPgrRk);
            case 3:
                return d.intl.string(d.t.xypuIi);
            default:
                return d.intl.string(d.t.uEoQdH);
        }
    }
    getImageStyle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return p.authenticationRequiredImage;
            case 2:
                return p.authenticationSuccessImage;
            default:
                return p.authenticationFailImage;
        }
    }
    getMessage() {
        let { step: t } = this.state,
            { pendingPayment: e } = this.props;
        switch (t) {
            case 0:
                return d.intl.format(d.t.RoxWER, {
                    price: (0, u.T4)(e.amount, e.currency),
                    item: e.description
                });
            case 2:
                return d.intl.string(d.t.PZskfn);
            case 3:
                return d.intl.format(d.t['j0tI/f'], { item: e.description });
            default:
                return d.intl.string(d.t.BAr3rK);
        }
    }
    renderButtons() {
        let { step: t, isAwaitingAuthentication: e } = this.state;
        return 0 === t
            ? [
                  {
                      text: d.intl.string(d.t['2NeVoa']),
                      onClick: this.cancelPayment,
                      variant: 'secondary'
                  },
                  {
                      text: d.intl.string(d.t.VAqBoK),
                      onClick: this.handleAuthenticate,
                      variant: 'primary',
                      loading: e
                  }
              ]
            : [
                  {
                      text: d.intl.string(d.t.cpT0Cg),
                      onClick: this.close,
                      variant: 'primary'
                  }
              ];
    }
    render() {
        let { transitionState: t } = this.props;
        return (0, s.jsxs)(a.Modal, {
            transitionState: t,
            'aria-label': this.getTitle(),
            title: this.getTitle(),
            onClose: this.close,
            actions: this.renderButtons(),
            children: [
                (0, s.jsx)('div', { className: this.getImageStyle() }),
                (0, s.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: this.getMessage()
                })
            ]
        });
    }
    constructor(...t) {
        (super(...t),
            g(this, 'state', {
                step: 0,
                isAwaitingAuthentication: !1
            }),
            g(this, 'close', async () => {
                let { step: t } = this.state,
                    { onClose: e, pendingPayment: i } = this.props;
                (0 === t && (await (0, c.UY)(i.id)), e());
            }),
            g(this, 'cancelPayment', async () => {
                let { pendingPayment: t } = this.props;
                try {
                    await (0, c.UY)(t.id);
                } catch (t) {
                    throw (this.setState({ step: 3 }), t);
                }
                this.setState({ step: 3 });
            }),
            g(this, 'handleAuthenticate', async () => {
                let { pendingPayment: t } = this.props;
                this.setState({ isAwaitingAuthentication: !0 });
                let { error: e } = await (0, l.oe)(t.id);
                (this.setState({ isAwaitingAuthentication: !1 }), null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 }));
            }));
    }
}
let m = f;
