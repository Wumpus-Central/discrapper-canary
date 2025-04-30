n.d(e, { default: () => k }), n(388685);
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(923928),
    o = n(600164),
    a = n(594190),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    c = n(20493);
function p(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class x extends i.Component {
    componentDidMount() {
        let { pid: t } = this.props,
            e = null != t ? a.ZP.getGameForPID(t) : null;
        d.default.track(u.rMx.OPEN_MODAL, {
            type: 'Elevated Permissions Sound',
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null
        });
    }
    render() {
        return (0, l.jsxs)(s.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': h.intl.string(h.t['4xSkEB']),
            children: [
                (0, l.jsxs)(s.xBx, {
                    justify: o.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, l.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            children: h.intl.string(h.t['4xSkEB'])
                        }),
                        (0, l.jsx)(s.olH, { onClick: this.handleClose })
                    ]
                }),
                (0, l.jsx)(s.hzk, {
                    children: (0, l.jsx)(s.Text, {
                        tag: 'strong',
                        variant: 'text-md/normal',
                        className: c.marginBottom20,
                        children: h.intl.string(h.t.UCEXPj)
                    })
                }),
                (0, l.jsxs)(s.mzw, {
                    children: [
                        (0, l.jsx)(s.zxk, {
                            onClick: this.handleRequestElevated,
                            children: h.intl.string(h.t.taPRcH)
                        }),
                        (0, l.jsx)(s.zxk, {
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.PRIMARY,
                            onClick: this.handleStreamWithoutSound,
                            children: h.intl.string(h.t.of0VoK)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            p(this, 'handleClose', () => {
                let { onClose: t } = this.props;
                null == t || t();
            }),
            p(this, 'handleStreamWithoutSound', () => {
                let { handleStream: t, onClose: e, pid: n } = this.props;
                r.Z.continueNonelevatedProcess(n), t(), e();
            }),
            p(this, 'handleRequestElevated', () => {
                let { handleStream: t, onClose: e, pid: n } = this.props;
                r.Z.requestElevatedProcess(n), t(), e();
            });
    }
}
let k = x;
