n.d(t, { default: () => p });
var i = n(255367),
    a = n(73800),
    l = n(481060),
    s = n(841613),
    r = n(600164),
    o = n(626135),
    c = n(981631),
    d = n(388032),
    m = n(589061);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends a.Component {
    track() {
        let { certifiedDeviceMetadata: e, device: t } = this.props;
        o.default.track(c.rMx.OPEN_MODAL, {
            type: null != e ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
            device_name: null != e ? ''.concat(e.vendor.name, ' ').concat(e.model.name) : t.displayName
        });
    }
    componentDidMount() {
        this.track();
    }
    componentDidUpdate(e) {
        let { device: t } = this.props;
        t.displayName !== e.device.displayName && this.track();
    }
    renderBody() {
        let e,
            { device: t, certifiedDeviceMetadata: n } = this.props,
            { devicePreference: s } = this.state;
        switch (t.type) {
            case c.QyF.INPUT:
                e =
                    null != n
                        ? d.intl.format(d.t.NqNqy8, {
                              vendorName: n.vendor.name,
                              modelName: n.model.name
                          })
                        : d.intl.format(d.t.stSaRk, { name: t.displayName });
                break;
            case c.QyF.OUTPUT:
                e =
                    null != n
                        ? d.intl.format(d.t.uPgqIC, {
                              vendorName: n.vendor.name,
                              modelName: n.model.name
                          })
                        : d.intl.format(d.t.jyhYp6, { name: t.displayName });
                break;
            default:
                e = (0, i.jsxs)(a.Fragment, {
                    children: [
                        null != n
                            ? d.intl.format(d.t['4Xyzx8'], {
                                  vendorName: n.vendor.name,
                                  modelName: n.model.name
                              })
                            : d.intl.format(d.t.Z7XQcn, { name: t.displayName }),
                        (0, i.jsx)(l.FXm, {
                            value: s,
                            className: m.options,
                            onChange: this.handleConnectedDeviceType,
                            options: [
                                {
                                    name: d.intl.string(d.t.vhxqwc),
                                    value: c.QyF.INPUT_AND_OUTPUT
                                },
                                {
                                    name: d.intl.string(d.t['Kqs9+P']),
                                    value: c.QyF.INPUT
                                },
                                {
                                    name: d.intl.string(d.t.GGlM3d),
                                    value: c.QyF.OUTPUT
                                }
                            ]
                        })
                    ]
                });
        }
        return (0, i.jsxs)(
            a.Fragment,
            {
                children: [
                    e,
                    (0, i.jsx)(l.zxk, {
                        className: m.neverShow,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.LINK,
                        onClick: this.neverShow,
                        children: d.intl.string(d.t['5E9SBw'])
                    })
                ]
            },
            t.displayName
        );
    }
    render() {
        let { certifiedDeviceMetadata: e, transitionState: t } = this.props,
            n = null != e ? d.intl.string(d.t.kiqvHR) : d.intl.string(d.t.AbnGIy);
        return (0, i.jsxs)(l.Y0X, {
            transitionState: t,
            'aria-label': n,
            children: [
                (0, i.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    })
                }),
                (0, i.jsx)(l.hzk, {
                    children: (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: this.renderBody()
                    })
                }),
                (0, i.jsx)(l.mzw, {
                    children: (0, i.jsxs)(r.Z, {
                        justify: r.Z.Justify.END,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                color: l.zxk.Colors.PRIMARY,
                                onClick: this.cancel,
                                className: m.cancelButton,
                                children: d.intl.string(d.t.vPBgq6)
                            }),
                            (0, i.jsx)(l.zxk, {
                                onClick: this.confirm,
                                children: d.intl.string(d.t.ydkoDQ)
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            h(this, 'confirm', () => {
                let { device: e, onClose: t } = this.props,
                    { devicePreference: n } = this.state;
                null != n && (s.hG(e.displayName, n, 'New Audio Device Detected Modal'), t());
            }),
            h(this, 'cancel', () => {
                let { device: e, onClose: t } = this.props;
                s.Gl(e.displayName), t();
            }),
            h(this, 'neverShow', () => {
                let { certifiedDeviceMetadata: e, onClose: t } = this.props;
                s.oI(),
                    t(),
                    o.default.track(c.rMx.MODAL_DISMISSED, {
                        type: null != e ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                        dismiss_type: 'permanent'
                    });
            }),
            h(this, 'handleConnectedDeviceType', (e) => {
                let { value: t } = e;
                this.setState({ devicePreference: t });
            }),
            (this.state = {
                devicePreference:
                    null != e.device
                        ? (function (e) {
                              switch (e) {
                                  case c.QyF.INPUT:
                                      return c.aVf.INPUT;
                                  case c.QyF.OUTPUT:
                                      return c.aVf.OUTPUT;
                                  case c.QyF.INPUT_AND_OUTPUT:
                                      return c.aVf.INPUT_AND_OUTPUT;
                                  default:
                                      return null;
                              }
                          })(e.device.type)
                        : null
            });
    }
}
