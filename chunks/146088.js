s.r(e), s.d(e, { default: () => N });
var n = s(627968),
    i = s(64700),
    r = s(492462),
    a = s(311907),
    l = s(562465),
    d = s(397927),
    h = s(129014),
    o = s(854378),
    c = s(235986),
    f = s(976860),
    u = s(961350),
    p = s(652215),
    x = s(985018),
    j = s(417119),
    g = s(153335);
a.Ay.initialize();
let A = "done",
    B = "failed";
function C() {
    try {
        window.close();
    } catch (t) {}
}
class N extends i.PureComponent {
    constructor(t) {
        super(t);
        const { search: e } = t.location,
            s = null != e && "" !== e ? (0, r.parse)(e) : {};
        this.state = { key: s.key ?? "", stage: "true" === s.done ? A : "handoff" };
    }
    componentDidMount() {
        let { stage: t, key: e } = this.state;
        t === A
            ? C()
            : u.default.isAuthenticated()
              ? l.Bo.post({ url: p.Rsh.HANDOFF, body: { key: e }, oldFormErrors: !0, rejectWithError: !0 }).then(
                    (t) => this.handoff(t.body.handoff_token),
                    () => this.handoff(),
                )
              : this.handoff();
    }
    handoff(t) {
        h.default
            .requestRedirect(p.e$_.BROWSER_HANDOFF, { handoffToken: t, fingerprint: u.default.getFingerprint() })
            .then(this.done, this.failed);
    }
    done = () => {
        C(), this.setState({ stage: A });
    };
    failed = () => {
        this.setState({ stage: B }), C();
    };
    handleOpenApp = () => {
        (0, f.pX)(p.BVt.ME);
    };
    renderDone() {
        return (0, n.jsxs)(o.Ay, {
            children: [
                (0, n.jsx)(o._V, { src: s(242584), className: g.SX }),
                (0, n.jsx)(o.hE, { className: g.QB, children: x.intl.string(x.t.YsLqvs) }),
                (0, n.jsx)(o.tK, { className: g.C2, children: x.intl.string(x.t.CSBYDo) }),
                (0, n.jsx)(d.Button, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    renderFailed() {
        return (0, n.jsxs)(o.Ay, {
            children: [
                (0, n.jsx)(o._V, { src: s(242584), className: g.SX }),
                (0, n.jsx)(o.hE, { className: g.QB, children: x.intl.string(x.t.hsLIsW) }),
                (0, n.jsx)(o.tK, { className: g.C2, children: x.intl.string(x.t.CSBYDo) }),
                (0, n.jsx)(d.Button, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    renderHandoff() {
        return (0, n.jsxs)(o.Ay, {
            children: [
                (0, n.jsx)(o.CK, {}),
                (0, n.jsx)(o.hE, { className: g.QB, children: x.intl.string(x.t.ctWa65) }),
                (0, n.jsx)(o.tK, { children: x.intl.string(x.t["53IHoo"]) }),
            ],
        });
    }
    render() {
        let t,
            { stage: e } = this.state;
        switch (e) {
            case A:
                t = this.renderDone();
                break;
            case B:
                t = this.renderFailed();
                break;
            default:
                t = this.renderHandoff();
        }
        return (0, n.jsx)(c.A, { justify: c.A.Justify.CENTER, align: c.A.Align.CENTER, className: j.i, children: t });
    }
}
