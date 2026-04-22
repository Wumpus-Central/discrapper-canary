s.r(e), s.d(e, { default: () => k });
var r = s(627968),
    n = s(64700),
    i = s(492462),
    l = s(311907),
    a = s(562465),
    d = s(821609),
    o = s(129014),
    h = s(854378),
    c = s(235986),
    f = s(976860),
    p = s(961350),
    u = s(652215),
    _ = s(985018),
    b = s(738997),
    x = s(818050);
l.Ay.initialize();
let j = "done",
    g = "failed";
function A() {
    try {
        window.close();
    } catch (t) {}
}
class k extends n.PureComponent {
    constructor(t) {
        super(t);
        const { search: e } = t.location,
            s = null != e && "" !== e ? (0, i.parse)(e) : {};
        this.state = { key: s.key ?? "", stage: "true" === s.done ? j : "handoff" };
    }
    componentDidMount() {
        let { stage: t, key: e } = this.state;
        t === j
            ? A()
            : p.default.isAuthenticated()
              ? a.Bo.post({ url: u.Rsh.HANDOFF, body: { key: e }, oldFormErrors: !0, rejectWithError: !0 }).then(
                    (t) => this.handoff(t.body.handoff_token),
                    () => this.handoff(),
                )
              : this.handoff();
    }
    handoff(t) {
        o.default
            .requestRedirect(u.e$_.BROWSER_HANDOFF, { handoffToken: t, fingerprint: p.default.getFingerprint() })
            .then(this.done, this.failed);
    }
    done = () => {
        A(), this.setState({ stage: j });
    };
    failed = () => {
        this.setState({ stage: g }), A();
    };
    handleOpenApp = () => {
        (0, f.pX)(u.BVt.ME);
    };
    renderDone() {
        return (0, r.jsxs)(h.Ay, {
            children: [
                (0, r.jsx)(h._V, { src: s(20203), className: x.SX }),
                (0, r.jsx)(h.hE, { className: x.QB, children: _.intl.string(_.t.YsLqvs) }),
                (0, r.jsx)(h.tK, { className: x.C2, children: _.intl.string(_.t.CSBYDo) }),
                (0, r.jsx)(d.$, { text: _.intl.string(_.t.fIv16B), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    renderFailed() {
        return (0, r.jsxs)(h.Ay, {
            children: [
                (0, r.jsx)(h._V, { src: s(20203), className: x.SX }),
                (0, r.jsx)(h.hE, { className: x.QB, children: _.intl.string(_.t.hsLIsW) }),
                (0, r.jsx)(h.tK, { className: x.C2, children: _.intl.string(_.t.CSBYDo) }),
                (0, r.jsx)(d.$, { text: _.intl.string(_.t.fIv16B), fullWidth: !0, onClick: this.handleOpenApp }),
            ],
        });
    }
    renderHandoff() {
        return (0, r.jsxs)(h.Ay, {
            children: [
                (0, r.jsx)(h.CK, {}),
                (0, r.jsx)(h.hE, { className: x.QB, children: _.intl.string(_.t.ctWa65) }),
                (0, r.jsx)(h.tK, { children: _.intl.string(_.t["53IHoo"]) }),
            ],
        });
    }
    render() {
        let t,
            { stage: e } = this.state;
        switch (e) {
            case j:
                t = this.renderDone();
                break;
            case g:
                t = this.renderFailed();
                break;
            default:
                t = this.renderHandoff();
        }
        return (0, r.jsx)(c.A, { justify: c.A.Justify.CENTER, align: c.A.Align.CENTER, className: b.i, children: t });
    }
}
