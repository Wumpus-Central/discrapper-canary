i.d(e, { default: () => A }), i(953529), i(388685);
var a = i(255367),
    n = i(73800),
    s = i(82659),
    r = i(481060),
    c = i(355467),
    l = i(626135),
    o = i(937615),
    u = i(622999),
    h = i(981631),
    p = i(388032),
    g = i(848747);
function d(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
class m extends n.Component {
    componentDidMount() {
        l.default.track(h.rMx.OPEN_MODAL, { type: h.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    componentWillUnmount() {
        l.default.track(h.rMx.MODAL_DISMISSED, { type: h.jXE.PAYMENT_AUTHENTICATION_MODAL });
    }
    getTitle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return p.intl.string(p.t.N65Zra);
            case 2:
                return p.intl.string(p.t.DPgrRk);
            case 3:
                return p.intl.string(p.t.xypuIi);
            default:
                return p.intl.string(p.t.uEoQdH);
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
                return p.intl.format(p.t.RoxWER, {
                    price: (0, o.T4)(e.amount, e.currency),
                    item: e.description,
                });
            case 2:
                return p.intl.string(p.t.PZskfn);
            case 3:
                return p.intl.format(p.t["j0tI/f"], { item: e.description });
            default:
                return p.intl.string(p.t.BAr3rK);
        }
    }
    renderButtons() {
        let { step: t, isAwaitingAuthentication: e } = this.state;
        return 0 === t
            ? [
                  {
                      text: p.intl.string(p.t["2NeVoa"]),
                      onClick: this.cancelPayment,
                      variant: "secondary",
                  },
                  {
                      text: p.intl.string(p.t.VAqBoK),
                      onClick: this.handleAuthenticate,
                      variant: "primary",
                      loading: e,
                  },
              ]
            : [
                  {
                      text: p.intl.string(p.t.cpT0Cg),
                      onClick: this.close,
                      variant: "primary",
                  },
              ];
    }
    render() {
        let { transitionState: t } = this.props;
        return (0, a.jsxs)(s.Modal, {
            transitionState: t,
            "aria-label": this.getTitle(),
            title: this.getTitle(),
            onClose: this.close,
            actions: this.renderButtons(),
            children: [
                (0, a.jsx)("div", { className: this.getImageStyle() }),
                (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: this.getMessage(),
                }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            d(this, "state", {
                step: 0,
                isAwaitingAuthentication: !1,
            }),
            d(this, "close", async () => {
                let { step: t } = this.state,
                    { onClose: e, pendingPayment: i } = this.props;
                0 === t && (await (0, c.UY)(i.id)), e();
            }),
            d(this, "cancelPayment", async () => {
                let { pendingPayment: t } = this.props;
                try {
                    await (0, c.UY)(t.id);
                } catch (t) {
                    throw (this.setState({ step: 3 }), t);
                }
                this.setState({ step: 3 });
            }),
            d(this, "handleAuthenticate", async () => {
                let { pendingPayment: t } = this.props;
                this.setState({ isAwaitingAuthentication: !0 });
                let { error: e } = await (0, u.oe)(t.id);
                this.setState({ isAwaitingAuthentication: !1 }),
                    null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 });
            });
    }
}
let A = m;
