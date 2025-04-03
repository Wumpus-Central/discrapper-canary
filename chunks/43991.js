n.d(t, { default: () => h });
var a = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(841613),
    o = n(600164),
    l = n(626135),
    c = n(981631),
    d = n(388032),
    N = n(589061);
function m(e, t, n) {
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
class h extends i.Component {
    track() {
        let { certifiedDeviceMetadata: e, device: t } = this.props;
        l.default.track(c.rMx.OPEN_MODAL, {
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
            { devicePreference: r } = this.state;
        switch (t.type) {
            case c.QyF.INPUT:
                e =
                    null != n
                        ? d.NW.format(d.t.NqNqy8, {
                              vendorName: n.vendor.name,
                              modelName: n.model.name
                          })
                        : d.NW.format(d.t.stSaRk, { name: t.displayName });
                break;
            case c.QyF.OUTPUT:
                e =
                    null != n
                        ? d.NW.format(d.t.uPgqIC, {
                              vendorName: n.vendor.name,
                              modelName: n.model.name
                          })
                        : d.NW.format(d.t.jyhYp6, { name: t.displayName });
                break;
            default:
                e = (0, a.jsxs)(i.Fragment, {
                    children: [
                        null != n
                            ? d.NW.format(d.t['4Xyzx8'], {
                                  vendorName: n.vendor.name,
                                  modelName: n.model.name
                              })
                            : d.NW.format(d.t.Z7XQcn, { name: t.displayName }),
                        (0, a.jsx)(s.FXm, {
                            value: r,
                            className: N.options,
                            onChange: this.handleConnectedDeviceType,
                            options: [
                                {
                                    name: d.NW.string(d.t.vhxqwc),
                                    value: c.QyF.INPUT_AND_OUTPUT
                                },
                                {
                                    name: d.NW.string(d.t['Kqs9+P']),
                                    value: c.QyF.INPUT
                                },
                                {
                                    name: d.NW.string(d.t.GGlM3d),
                                    value: c.QyF.OUTPUT
                                }
                            ]
                        })
                    ]
                });
        }
        return (0, a.jsxs)(
            i.Fragment,
            {
                children: [
                    e,
                    (0, a.jsx)(s.zxk, {
                        className: N.neverShow,
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.LINK,
                        onClick: this.neverShow,
                        children: d.NW.string(d.t['5E9SBw'])
                    })
                ]
            },
            t.displayName
        );
    }
    render() {
        let { certifiedDeviceMetadata: e, transitionState: t } = this.props,
            n = null != e ? d.NW.string(d.t.kiqvHR) : d.NW.string(d.t.AbnGIy);
        return (0, a.jsxs)(s.Y0X, {
            transitionState: t,
            'aria-label': n,
            children: [
                (0, a.jsx)(s.xBx, {
                    separator: !1,
                    children: (0, a.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    })
                }),
                (0, a.jsx)(s.hzk, {
                    children: (0, a.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: this.renderBody()
                    })
                }),
                (0, a.jsx)(s.mzw, {
                    children: (0, a.jsxs)(o.Z, {
                        justify: o.Z.Justify.END,
                        children: [
                            (0, a.jsx)(s.zxk, {
                                color: s.zxk.Colors.PRIMARY,
                                onClick: this.cancel,
                                className: N.cancelButton,
                                children: d.NW.string(d.t.vPBgq6)
                            }),
                            (0, a.jsx)(s.zxk, {
                                onClick: this.confirm,
                                children: d.NW.string(d.t.ydkoDQ)
                            })
                        ]
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            m(this, 'confirm', () => {
                let { device: e, onClose: t } = this.props,
                    { devicePreference: n } = this.state;
                null != n && (r.hG(e.displayName, n, 'New Audio Device Detected Modal'), t());
            }),
            m(this, 'cancel', () => {
                let { device: e, onClose: t } = this.props;
                r.Gl(e.displayName), t();
            }),
            m(this, 'neverShow', () => {
                let { certifiedDeviceMetadata: e, onClose: t } = this.props;
                r.oI(),
                    t(),
                    l.default.track(c.rMx.MODAL_DISMISSED, {
                        type: null != e ? 'New Audio Device Detected - Certified' : 'New Audio Device Detected - Not Certified',
                        dismiss_type: 'permanent'
                    });
            }),
            m(this, 'handleConnectedDeviceType', (e) => {
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
