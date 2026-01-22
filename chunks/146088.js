s.r(e),
    s.d(e, {
        default: () => C,
    }),
    s(747238);
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
    j = s(922730),
    g = s(473169);

function A(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = s),
        t
    );
}
a.Ay.initialize();
let m = "done",
    y = "failed";

function B() {
    try {
        window.close();
    } catch (t) {}
}
class C extends i.PureComponent {
    componentDidMount() {
        let { stage: t, key: e } = this.state;
        t === m
            ? B()
            : u.default.isAuthenticated()
              ? l.Bo.post({
                    url: p.Rsh.HANDOFF,
                    body: {
                        key: e,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (t) => this.handoff(t.body.handoff_token),
                    () => this.handoff(),
                )
              : this.handoff();
    }
    handoff(t) {
        h.default
            .requestRedirect(p.e$_.BROWSER_HANDOFF, {
                handoffToken: t,
                fingerprint: u.default.getFingerprint(),
            })
            .then(this.done, this.failed);
    }
    renderDone() {
        return (0, n.jsxs)(o.Ay, {
            children: [
                (0, n.jsx)(o._V, {
                    src: s(20203),
                    className: g.SX,
                }),
                (0, n.jsx)(o.hE, {
                    className: g.QB,
                    children: x.intl.string(x.t.YsLqvs),
                }),
                (0, n.jsx)(o.tK, {
                    className: g.C2,
                    children: x.intl.string(x.t.CSBYDo),
                }),
                (0, n.jsx)(d.Button, {
                    text: x.intl.string(x.t.fIv16B),
                    fullWidth: !0,
                    onClick: this.handleOpenApp,
                }),
            ],
        });
    }
    renderFailed() {
        return (0, n.jsxs)(o.Ay, {
            children: [
                (0, n.jsx)(o._V, {
                    src: s(20203),
                    className: g.SX,
                }),
                (0, n.jsx)(o.hE, {
                    className: g.QB,
                    children: x.intl.string(x.t.hsLIsW),
                }),
                (0, n.jsx)(o.tK, {
                    className: g.C2,
                    children: x.intl.string(x.t.CSBYDo),
                }),
                (0, n.jsx)(d.Button, {
                    text: x.intl.string(x.t.fIv16B),
                    fullWidth: !0,
                    onClick: this.handleOpenApp,
                }),
            ],
        });
    }
    renderHandoff() {
        return (0, n.jsxs)(o.Ay, {
            children: [
                (0, n.jsx)(o.CK, {}),
                (0, n.jsx)(o.hE, {
                    className: g.QB,
                    children: x.intl.string(x.t.ctWa65),
                }),
                (0, n.jsx)(o.tK, {
                    children: x.intl.string(x.t["53IHoo"]),
                }),
            ],
        });
    }
    render() {
        let t,
            { stage: e } = this.state;
        switch (e) {
            case m:
                t = this.renderDone();
                break;
            case y:
                t = this.renderFailed();
                break;
            default:
                t = this.renderHandoff();
        }
        return (0, n.jsx)(c.A, {
            justify: c.A.Justify.CENTER,
            align: c.A.Align.CENTER,
            className: j.i,
            children: t,
        });
    }
    constructor(t) {
        var e;
        super(t),
            A(this, "done", () => {
                B(),
                    this.setState({
                        stage: m,
                    });
            }),
            A(this, "failed", () => {
                this.setState({
                    stage: y,
                }),
                    B();
            }),
            A(this, "handleOpenApp", () => {
                (0, f.pX)(p.BVt.ME);
            });
        const { search: s } = t.location,
            n = null != s && "" !== s ? (0, r.parse)(s) : {};
        this.state = {
            key: null != (e = n.key) ? e : "",
            stage: "true" === n.done ? m : "handoff",
        };
    }
}
