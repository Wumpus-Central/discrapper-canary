i.d(e, { default: () => A }), i(953529), i(388685);
var a = i(54381),
    n = i(473749),
    s = i(793030),
    r = i(481060),
    c = i(355467),
    l = i(626135),
    o = i(937615),
    u = i(622999),
    h = i(981631),
    p = i(388032),
    d = i(804136);
function g(t, e, i) {
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
                return p.intl.string(p.t.N65ZrW);
            case 2:
                return p.intl.string(p.t.DPgrRk);
            case 3:
                return p.intl.string(p.t.xypuIv);
            default:
                return p.intl.string(p.t.uEoQdA);
        }
    }
    getImageStyle() {
        let { step: t } = this.state;
        switch (t) {
            case 0:
                return d.authenticationRequiredImage;
            case 2:
                return d.authenticationSuccessImage;
            default:
                return d.authenticationFailImage;
        }
    }
    getMessage() {
        let { step: t } = this.state,
            { pendingPayment: e } = this.props;
        switch (t) {
            case 0:
                return p.intl.format(p.t.RoxWET, {
                    price: (0, o.T4)(e.amount, e.currency),
                    item: e.description,
                });
            case 2:
                return p.intl.string(p.t.PZskfs);
            case 3:
                return p.intl.format(p.t["j0tI/b"], { item: e.description });
            default:
                return p.intl.string(p.t.BAr3rB);
        }
    }
    renderButtons() {
        let { step: t, isAwaitingAuthentication: e } = this.state;
        return 0 === t
            ? [
                  {
                      text: p.intl.string(p.t["2NeVoY"]),
                      onClick: this.cancelPayment,
                      variant: "secondary",
                  },
                  {
                      text: p.intl.string(p.t.VAqBoE),
                      onClick: this.handleAuthenticate,
                      variant: "primary",
                      loading: e,
                  },
              ]
            : [
                  {
                      text: p.intl.string(p.t.cpT0Cq),
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
            g(this, "state", {
                step: 0,
                isAwaitingAuthentication: !1,
            }),
            g(this, "close", async () => {
                let { step: t } = this.state,
                    { onClose: e, pendingPayment: i } = this.props;
                0 === t && (await (0, c.UY)(i.id)), e();
            }),
            g(this, "cancelPayment", async () => {
                let { pendingPayment: t } = this.props;
                try {
                    await (0, c.UY)(t.id);
                } catch (t) {
                    throw (this.setState({ step: 3 }), t);
                }
                this.setState({ step: 3 });
            }),
            g(this, "handleAuthenticate", async () => {
                let { pendingPayment: t } = this.props;
                this.setState({ isAwaitingAuthentication: !0 });
                let { error: e } = await (0, u.oe)(t.id);
                this.setState({ isAwaitingAuthentication: !1 }),
                    null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 });
            });
    }
}
let A = m;
