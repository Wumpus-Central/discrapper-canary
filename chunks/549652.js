s.r(t), s.d(t, { default: () => E }), s(301563);
var n = s(200651),
    r = s(192379),
    i = s(593473),
    a = s(442837),
    o = s(544891),
    d = s(536285),
    l = s(388905),
    c = s(600164),
    h = s(703656),
    f = s(314897),
    u = s(981631),
    p = s(388032),
    N = s(396096),
    g = s(20493);
function m(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
a.ZP.initialize();
let D = {
    HANDOFF: 'handoff',
    DONE: 'done',
    FAILED: 'failed'
};
function x() {
    try {
        window.close();
    } catch (e) {}
}
class E extends r.PureComponent {
    componentDidMount() {
        let { stage: e, key: t } = this.state;
        e === D.DONE
            ? x()
            : f.default.isAuthenticated()
              ? o.tn
                    .post({
                        url: u.ANM.HANDOFF,
                        body: { key: t },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (e) => this.handoff(e.body.handoff_token),
                        () => this.handoff()
                    )
              : this.handoff();
    }
    handoff(e) {
        d.default
            .requestRedirect(u.Etm.BROWSER_HANDOFF, {
                handoffToken: e,
                fingerprint: f.default.getFingerprint()
            })
            .then(this.done, this.failed);
    }
    renderDone() {
        return (0, n.jsxs)(l.ZP, {
            children: [
                (0, n.jsx)(l.Ee, {
                    src: s(69008),
                    className: g.marginBottom20
                }),
                (0, n.jsx)(l.Dx, {
                    className: g.marginBottom8,
                    children: p.NW.string(p.t.YsLqvr)
                }),
                (0, n.jsx)(l.DK, {
                    className: g.marginBottom40,
                    children: p.NW.string(p.t.CSBYDg)
                }),
                (0, n.jsx)(l.zx, {
                    onClick: this.handleOpenApp,
                    children: p.NW.string(p.t.fIv16O)
                })
            ]
        });
    }
    renderFailed() {
        return (0, n.jsxs)(l.ZP, {
            children: [
                (0, n.jsx)(l.Ee, {
                    src: s(69008),
                    className: g.marginBottom20
                }),
                (0, n.jsx)(l.Dx, {
                    className: g.marginBottom8,
                    children: p.NW.string(p.t.hsLIsb)
                }),
                (0, n.jsx)(l.DK, {
                    className: g.marginBottom40,
                    children: p.NW.string(p.t.CSBYDg)
                }),
                (0, n.jsx)(l.zx, {
                    onClick: this.handleOpenApp,
                    children: p.NW.string(p.t.fIv16O)
                })
            ]
        });
    }
    renderHandoff() {
        return (0, n.jsxs)(l.ZP, {
            children: [
                (0, n.jsx)(l.Hh, {}),
                (0, n.jsx)(l.Dx, {
                    className: g.marginBottom8,
                    children: p.NW.string(p.t['ctWa6+'])
                }),
                (0, n.jsx)(l.DK, { children: p.NW.string(p.t['53IHoq']) })
            ]
        });
    }
    render() {
        let e,
            { stage: t } = this.state;
        switch (t) {
            case D.DONE:
                e = this.renderDone();
                break;
            case D.FAILED:
                e = this.renderFailed();
                break;
            case D.HANDOFF:
            default:
                e = this.renderHandoff();
        }
        return (0, n.jsx)(c.Z, {
            justify: c.Z.Justify.CENTER,
            align: c.Z.Align.CENTER,
            className: N.wrapper,
            children: e
        });
    }
    constructor(e) {
        var t;
        super(e),
            m(this, 'done', () => {
                x(), this.setState({ stage: D.DONE });
            }),
            m(this, 'failed', () => {
                this.setState({ stage: D.FAILED }), x();
            }),
            m(this, 'handleOpenApp', () => {
                (0, h.uL)(u.Z5c.ME);
            });
        let { search: s } = e.location,
            n = null != s && '' !== s ? (0, i.parse)(s) : {};
        this.state = {
            key: null != (t = n.key) ? t : '',
            stage: 'true' === n.done ? D.DONE : D.HANDOFF
        };
    }
}
