n.d(e, { default: () => h }), n(388685);
var i = n(54381),
    l = n(473749),
    s = n(159691),
    a = n(923928),
    o = n(594190),
    r = n(626135),
    u = n(981631),
    d = n(388032);
function p(t, e, n) {
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
class c extends l.Component {
    componentDidMount() {
        let { pid: t } = this.props,
            e = null != t ? o.ZP.getGameForPID(t) : null;
        r.default.track(u.rMx.OPEN_MODAL, {
            type: "Elevated Permissions Sound",
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null,
        });
    }
    render() {
        return (0, i.jsx)(s.u_l, {
            size: "md",
            title: d.intl.string(d.t["4xSkEB"]),
            subtitle: d.intl.string(d.t.UCEXPq),
            actions: [
                {
                    variant: "secondary",
                    text: d.intl.string(d.t.of0VoB),
                    onClick: this.handleStreamWithoutSound,
                },
                {
                    variant: "primary",
                    text: d.intl.string(d.t.taPRcJ),
                    onClick: this.handleRequestElevated,
                },
            ],
            onClose: this.props.onClose,
            transitionState: this.props.transitionState,
        });
    }
    constructor(...t) {
        super(...t),
            p(this, "handleStreamWithoutSound", () => {
                let { handleStream: t, onClose: e, pid: n } = this.props;
                a.Z.continueNonelevatedProcess(n), t(), e();
            }),
            p(this, "handleRequestElevated", () => {
                let { handleStream: t, onClose: e, pid: n } = this.props;
                a.Z.requestElevatedProcess(n), t(), e();
            });
    }
}
let h = c;
