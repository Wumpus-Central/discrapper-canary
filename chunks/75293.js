n.d(e, { default: () => x }), n(388685);
var i = n(951288),
    s = n(647438),
    l = n(481060),
    r = n(923928),
    a = n(600164),
    o = n(594190),
    d = n(626135),
    u = n(981631),
    h = n(388032),
    c = n(197571);
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
class m extends s.Component {
    componentDidMount() {
        let { pid: t } = this.props,
            e = null != t ? o.ZP.getGameForPID(t) : null;
        d.default.track(u.rMx.OPEN_MODAL, {
            type: "Elevated Permissions Sound",
            application_id: null != e ? e.id : null,
            application_name: null != e ? e.name : null,
            game_id: null != e ? e.id : null,
        });
    }
    render() {
        return (0, i.jsxs)(l.Y0X, {
            transitionState: this.props.transitionState,
            "aria-label": h.intl.string(h.t["4xSkEB"]),
            parentComponent: "ElevatedPermissionsSound",
            children: [
                (0, i.jsxs)(l.xBx, {
                    justify: a.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: h.intl.string(h.t["4xSkEB"]),
                        }),
                        (0, i.jsx)(l.olH, { onClick: this.handleClose }),
                    ],
                }),
                (0, i.jsx)(l.hzk, {
                    children: (0, i.jsx)(l.Text, {
                        tag: "strong",
                        variant: "text-md/normal",
                        className: c.marginBottom20,
                        children: h.intl.string(h.t.UCEXPq),
                    }),
                }),
                (0, i.jsx)(l.mzw, {
                    children: (0, i.jsxs)(l.ButtonGroup, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, i.jsx)(l.Button, {
                                variant: "primary",
                                text: h.intl.string(h.t.taPRcJ),
                                onClick: this.handleRequestElevated,
                            }),
                            (0, i.jsx)(l.Button, {
                                variant: "secondary",
                                text: h.intl.string(h.t.of0VoB),
                                onClick: this.handleStreamWithoutSound,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    constructor(...t) {
        super(...t),
            p(this, "handleClose", () => {
                let { onClose: t } = this.props;
                null == t || t();
            }),
            p(this, "handleStreamWithoutSound", () => {
                let { handleStream: t, onClose: e, pid: n } = this.props;
                r.Z.continueNonelevatedProcess(n), t(), e();
            }),
            p(this, "handleRequestElevated", () => {
                let { handleStream: t, onClose: e, pid: n } = this.props;
                r.Z.requestElevatedProcess(n), t(), e();
            });
    }
}
let x = m;
