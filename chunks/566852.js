n.d(e, { default: () => k }), n(47120);
var s = n(200651),
    l = n(192379),
    i = n(481060),
    r = n(923928),
    o = n(600164),
    a = n(594190),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    c = n(455812);
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
class x extends l.Component {
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
        return (0, s.jsxs)(i.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': h.NW.string(h.t['4xSkEB']),
            children: [
                (0, s.jsxs)(i.xBx, {
                    justify: o.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, s.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            children: h.NW.string(h.t['4xSkEB'])
                        }),
                        (0, s.jsx)(i.olH, { onClick: this.handleClose })
                    ]
                }),
                (0, s.jsx)(i.hzk, {
                    children: (0, s.jsx)(i.Text, {
                        tag: 'strong',
                        variant: 'text-md/normal',
                        className: c.marginBottom20,
                        children: h.NW.string(h.t.UCEXPj)
                    })
                }),
                (0, s.jsxs)(i.mzw, {
                    children: [
                        (0, s.jsx)(i.zxk, {
                            onClick: this.handleRequestElevated,
                            children: h.NW.string(h.t.taPRcH)
                        }),
                        (0, s.jsx)(i.zxk, {
                            look: i.zxk.Looks.LINK,
                            color: i.zxk.Colors.PRIMARY,
                            onClick: this.handleStreamWithoutSound,
                            children: h.NW.string(h.t.of0VoK)
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
