n.r(e), n.d(e, { default: () => b }), n(35282);
var s = n(255367),
    r = n(73800),
    i = n(593473),
    a = n(442837),
    l = n(544891),
    o = n(536285),
    d = n(388905),
    c = n(600164),
    h = n(703656),
    f = n(314897),
    u = n(981631),
    p = n(388032),
    m = n(796771),
    g = n(197571);
function x(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
a.ZP.initialize();
let j = "done",
    D = "failed";
function N() {
    try {
        window.close();
    } catch (t) {}
}
class b extends r.PureComponent {
    componentDidMount() {
        let { stage: t, key: e } = this.state;
        t === j
            ? N()
            : f.default.isAuthenticated()
              ? l.tn
                    .post({
                        url: u.ANM.HANDOFF,
                        body: { key: e },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    })
                    .then(
                        (t) => this.handoff(t.body.handoff_token),
                        () => this.handoff(),
                    )
              : this.handoff();
    }
    handoff(t) {
        o.default
            .requestRedirect(u.Etm.BROWSER_HANDOFF, {
                handoffToken: t,
                fingerprint: f.default.getFingerprint(),
            })
            .then(this.done, this.failed);
    }
    renderDone() {
        return (0, s.jsxs)(d.ZP, {
            children: [
                (0, s.jsx)(d.Ee, {
                    src: n(69008),
                    className: g.marginBottom20,
                }),
                (0, s.jsx)(d.Dx, {
                    className: g.marginBottom8,
                    children: p.intl.string(p.t.YsLqvr),
                }),
                (0, s.jsx)(d.DK, {
                    className: g.marginBottom40,
                    children: p.intl.string(p.t.CSBYDg),
                }),
                (0, s.jsx)(d.zx, {
                    onClick: this.handleOpenApp,
                    children: p.intl.string(p.t.fIv16O),
                }),
            ],
        });
    }
    renderFailed() {
        return (0, s.jsxs)(d.ZP, {
            children: [
                (0, s.jsx)(d.Ee, {
                    src: n(69008),
                    className: g.marginBottom20,
                }),
                (0, s.jsx)(d.Dx, {
                    className: g.marginBottom8,
                    children: p.intl.string(p.t.hsLIsb),
                }),
                (0, s.jsx)(d.DK, {
                    className: g.marginBottom40,
                    children: p.intl.string(p.t.CSBYDg),
                }),
                (0, s.jsx)(d.zx, {
                    onClick: this.handleOpenApp,
                    children: p.intl.string(p.t.fIv16O),
                }),
            ],
        });
    }
    renderHandoff() {
        return (0, s.jsxs)(d.ZP, {
            children: [
                (0, s.jsx)(d.Hh, {}),
                (0, s.jsx)(d.Dx, {
                    className: g.marginBottom8,
                    children: p.intl.string(p.t["ctWa6+"]),
                }),
                (0, s.jsx)(d.DK, { children: p.intl.string(p.t["53IHoq"]) }),
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
            case D:
                t = this.renderFailed();
                break;
            default:
                t = this.renderHandoff();
        }
        return (0, s.jsx)(c.Z, {
            justify: c.Z.Justify.CENTER,
            align: c.Z.Align.CENTER,
            className: m.wrapper,
            children: t,
        });
    }
    constructor(t) {
        var e;
        super(t),
            x(this, "done", () => {
                N(), this.setState({ stage: j });
            }),
            x(this, "failed", () => {
                this.setState({ stage: D }), N();
            }),
            x(this, "handleOpenApp", () => {
                (0, h.uL)(u.Z5c.ME);
            });
        let { search: n } = t.location,
            s = null != n && "" !== n ? (0, i.parse)(n) : {};
        this.state = {
            key: null != (e = s.key) ? e : "",
            stage: "true" === s.done ? j : "handoff",
        };
    }
}
