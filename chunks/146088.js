s.r(e), s.d(e, { default: () => k });
var n = s(627968),
    i = s(64700),
    r = s(492462),
    a = s(17928),
    l = s(636537),
    d = s(821609),
    h = s(129014),
    c = s(854378),
    o = s(235986),
    f = s(976860),
    p = s(495544),
    u = s(652215),
    x = s(985018),
    j = s(738997),
    g = s(818050);
a.Ay.initialize();
let A = "done",
    C = "failed";
function N() {
    try {
        window.close();
    } catch (t) {}
}
class k extends i.PureComponent {
    constructor(t) {
        super(t);
        const { search: e } = t.location,
            s = null != e && "" !== e ? (0, r.parse)(e) : {};
        this.state = { key: s.key ?? "", stage: "true" === s.done ? A : "handoff" };
    }
    componentDidMount() {
        let { stage: t, key: e } = this.state;
        t === A
            ? N()
            : p.default.isAuthenticated()
              ? l.Bo.post({ url: u.Rsh.HANDOFF, body: { key: e }, oldFormErrors: !0, rejectWithError: !0 }).then(
                    (t) => this.handoff(t.body.handoff_token),
                    () => this.handoff(),
                )
              : this.handoff();
    }
    handoff(t) {
        h.default
            .requestRedirect(u.e$_.BROWSER_HANDOFF, { handoffToken: t, fingerprint: p.default.getFingerprint() })
            .then(this.done, this.failed);
    }
    done = () => {
        N(), this.setState({ stage: A });
    };
    failed = () => {
        this.setState({ stage: C }), N();
    };
    handleOpenApp = () => {
        (0, f.pX)(u.BVt.ME);
    };
    renderDone() {
        return (0, n.jsxs)(c.Ay, {
            children: [
                (0, n.jsx)(c._V, { src: s(20203), className: g.SX }),
                (0, n.jsx)(c.hE, { className: g.QB, children: x.intl.string(x.t.YsLqvs) }),
                (0, n.jsx)(c.tK, { className: g.C2, children: x.intl.string(x.t.CSBYDo) }),
                (0, n.jsx)(d.$, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    renderFailed() {
        return (0, n.jsxs)(c.Ay, {
            children: [
                (0, n.jsx)(c._V, { src: s(20203), className: g.SX }),
                (0, n.jsx)(c.hE, { className: g.QB, children: x.intl.string(x.t.hsLIsW) }),
                (0, n.jsx)(c.tK, { className: g.C2, children: x.intl.string(x.t.CSBYDo) }),
                (0, n.jsx)(d.$, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    renderHandoff() {
        return (0, n.jsxs)(c.Ay, {
            children: [
                (0, n.jsx)(c.CK, {}),
                (0, n.jsx)(c.hE, { className: g.QB, children: x.intl.string(x.t.ctWa65) }),
                (0, n.jsx)(c.tK, { children: x.intl.string(x.t["53IHoo"]) }),
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
            case C:
                t = this.renderFailed();
                break;
            default:
                t = this.renderHandoff();
        }
        return (0, n.jsx)(o.A, { justify: o.A.Justify.CENTER, align: o.A.Align.CENTER, className: j.i, children: t });
    }
}
