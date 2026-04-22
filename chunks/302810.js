i.d(e, { default: () => A });
var s = i(627968),
    a = i(64700),
    n = i(189213),
    r = i(834730),
    l = i(323082),
    c = i(954571),
    h = i(580630),
    o = i(71532),
    u = i(652215),
    p = i(985018),
    d = i(240465);
class g extends a.Component {
    state = { step: 0, isAwaitingAuthentication: !1 };
    componentDidMount() {
        c.default.track(u.HAw.OPEN_MODAL, { type: u.JJy.PAYMENT_AUTHENTICATION_MODAL });
    }
    componentWillUnmount() {
        c.default.track(u.HAw.MODAL_DISMISSED, { type: u.JJy.PAYMENT_AUTHENTICATION_MODAL });
    }
    close = async () => {
        let { step: t } = this.state,
            { onClose: e, pendingPayment: i } = this.props;
        0 === t && (await (0, l.N)(i.id)), e();
    };
    cancelPayment = async () => {
        let { pendingPayment: t } = this.props;
        try {
            await (0, l.N)(t.id);
        } catch (t) {
            throw (this.setState({ step: 3 }), t);
        }
        this.setState({ step: 3 });
    };
    handleAuthenticate = async () => {
        let { pendingPayment: t } = this.props;
        this.setState({ isAwaitingAuthentication: !0 });
        let { error: e } = await (0, o.ap)(t.id);
        this.setState({ isAwaitingAuthentication: !1 }),
            null != e ? this.setState({ step: 1 }) : this.setState({ step: 2 });
    };
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
                return d.Xh;
            case 2:
                return d.ZG;
            default:
                return d.E6;
        }
    }
    getMessage() {
        let { step: t } = this.state,
            { pendingPayment: e } = this.props;
        switch (t) {
            case 0:
                return p.intl.format(p.t.RoxWET, { price: (0, h.$g)(e.amount, e.currency), item: e.description });
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
                  { text: p.intl.string(p.t["2NeVoY"]), onClick: this.cancelPayment, variant: "secondary" },
                  { text: p.intl.string(p.t.VAqBoE), onClick: this.handleAuthenticate, variant: "primary", loading: e },
              ]
            : [{ text: p.intl.string(p.t.cpT0Cq), onClick: this.close, variant: "primary" }];
    }
    render() {
        let { transitionState: t } = this.props;
        return (0, s.jsxs)(n.Modal, {
            transitionState: t,
            "aria-label": this.getTitle(),
            title: this.getTitle(),
            onClose: this.close,
            actions: this.renderButtons(),
            children: [
                (0, s.jsx)("div", { className: this.getImageStyle() }),
                (0, s.jsx)(r.E, { variant: "text-md/normal", children: this.getMessage() }),
            ],
        });
    }
}
let A = g;
