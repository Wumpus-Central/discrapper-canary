n.r(e), n.d(e, { default: () => b }), n(35282);
var s = n(54381),
    r = n(473749),
    i = n(593473),
    a = n(442837),
    l = n(544891),
    o = n(481060),
    d = n(536285),
    h = n(388905),
    c = n(600164),
    u = n(703656),
    f = n(314897),
    p = n(981631),
    m = n(388032),
    g = n(259522),
    x = n(10198);
function j(t, e, n) {
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
let B = "done",
    D = "failed";
function N() {
    try {
        window.close();
    } catch (t) {}
}
class b extends r.PureComponent {
    componentDidMount() {
        let { stage: t, key: e } = this.state;
        t === B
            ? N()
            : f.default.isAuthenticated()
              ? l.tn
                    .post({
                        url: p.ANM.HANDOFF,
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
        d.default
            .requestRedirect(p.Etm.BROWSER_HANDOFF, {
                handoffToken: t,
                fingerprint: f.default.getFingerprint(),
            })
            .then(this.done, this.failed);
    }
    renderDone() {
        return (0, s.jsxs)(h.ZP, {
            children: [
                (0, s.jsx)(h.Ee, {
                    src: n(69008),
                    className: x.marginBottom20,
                }),
                (0, s.jsx)(h.Dx, {
                    className: x.marginBottom8,
                    children: m.intl.string(m.t.YsLqvs),
                }),
                (0, s.jsx)(h.DK, {
                    className: x.marginBottom40,
                    children: m.intl.string(m.t.CSBYDo),
                }),
                (0, s.jsx)(o.Button, {
                    text: m.intl.string(m.t.fIv16B),
                    fullWidth: !0,
                    onClick: this.handleOpenApp,
                }),
            ],
        });
    }
    renderFailed() {
        return (0, s.jsxs)(h.ZP, {
            children: [
                (0, s.jsx)(h.Ee, {
                    src: n(69008),
                    className: x.marginBottom20,
                }),
                (0, s.jsx)(h.Dx, {
                    className: x.marginBottom8,
                    children: m.intl.string(m.t.hsLIsW),
                }),
                (0, s.jsx)(h.DK, {
                    className: x.marginBottom40,
                    children: m.intl.string(m.t.CSBYDo),
                }),
                (0, s.jsx)(o.Button, {
                    text: m.intl.string(m.t.fIv16B),
                    fullWidth: !0,
                    onClick: this.handleOpenApp,
                }),
            ],
        });
    }
    renderHandoff() {
        return (0, s.jsxs)(h.ZP, {
            children: [
                (0, s.jsx)(h.Hh, {}),
                (0, s.jsx)(h.Dx, {
                    className: x.marginBottom8,
                    children: m.intl.string(m.t.ctWa65),
                }),
                (0, s.jsx)(h.DK, { children: m.intl.string(m.t["53IHoo"]) }),
            ],
        });
    }
    render() {
        let t,
            { stage: e } = this.state;
        switch (e) {
            case B:
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
            className: g.wrapper,
            children: t,
        });
    }
    constructor(t) {
        var e;
        super(t),
            j(this, "done", () => {
                N(), this.setState({ stage: B });
            }),
            j(this, "failed", () => {
                this.setState({ stage: D }), N();
            }),
            j(this, "handleOpenApp", () => {
                (0, u.uL)(p.Z5c.ME);
            });
        let { search: n } = t.location,
            s = null != n && "" !== n ? (0, i.parse)(n) : {};
        this.state = {
            key: null != (e = s.key) ? e : "",
            stage: "true" === s.done ? B : "handoff",
        };
    }
}
