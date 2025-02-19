n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(325432),
    s = n(570928),
    c = n(600164),
    u = n(579022),
    d = n(391690),
    p = n(424218),
    h = n(358085),
    g = n(998502),
    f = n(388032),
    m = n(434164),
    b = n(455812);
function _(e, t, n) {
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
class E extends i.PureComponent {
    renderDiskUsageCircle() {
        let { metadata: e } = this.props;
        return null != e && null != e.availableKB && null != e.totalKB
            ? (0, r.jsx)(u.Z, {
                  total: e.totalKB,
                  used: e.totalKB - e.availableKB
              })
            : null;
    }
    renderViewing() {
        let e, t;
        let { path: n, label: i, editingPath: l, isDefault: a, metadata: u } = this.props;
        return (
            null != u && ((e = null != u.availableKB ? (0, p.BU)(u.availableKB, { useKibibytes: !0 }) : null), (t = null != u.totalKB ? (0, p.BU)(u.totalKB, { useKibibytes: !0 }) : null)),
            (0, r.jsxs)(c.Z, {
                className: m.installationPath,
                align: c.Z.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(c.Z, {
                        direction: c.Z.Direction.VERTICAL,
                        className: m.__invalid_descriptionWrapper,
                        children: [
                            (0, r.jsxs)(c.Z, {
                                align: c.Z.Align.CENTER,
                                children: [
                                    (0, r.jsx)(o.X6q, {
                                        className: m.rowTitle,
                                        variant: 'heading-md/semibold',
                                        children: null != i ? i : d.Z.getLabelFromPath(n)
                                    }),
                                    a
                                        ? (0, r.jsx)('span', {
                                              className: m.defaultIndicator,
                                              children: f.NW.string(f.t.bBvAEB)
                                          })
                                        : null
                                ]
                            }),
                            null != u && null != e && null != t
                                ? (0, r.jsx)(s.Z, {
                                      className: m.rowBody,
                                      hoverText: f.NW.formatToPlainString(f.t.Fxo9e3, {
                                          available: e,
                                          total: t
                                      }),
                                      children: n
                                  })
                                : (0, r.jsx)(o.Text, {
                                      className: m.rowBody,
                                      variant: 'text-xs/normal',
                                      children: n
                                  })
                        ]
                    }),
                    (0, r.jsx)(o.zxk, {
                        size: o.zxk.Sizes.SMALL,
                        disabled: null != l,
                        color: o.zxk.Colors.PRIMARY,
                        onClick: this.handleStartEditing,
                        children: f.NW.string(f.t.bt75u7)
                    })
                ]
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: i } = this.state;
        return (0, r.jsx)(o.Zbd, {
            editable: !0,
            className: m.installationPathEditing,
            children: (0, r.jsxs)(c.Z, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(c.Z.Child, {
                        children: [
                            (0, r.jsx)(o.xJW, {
                                title: f.NW.string(f.t.AJkKCA),
                                children: (0, r.jsx)(o.oil, {
                                    value: n,
                                    placeholder: d.Z.getLabelFromPath(e),
                                    onChange: this.handleLabelChange
                                })
                            }),
                            (0, r.jsx)(o.xJW, {
                                title: f.NW.string(f.t.lnUCwc),
                                className: b.marginTop20,
                                children: (0, r.jsx)(o.oil, {
                                    disabled: !0,
                                    value: e
                                })
                            }),
                            (0, r.jsx)(o.XZJ, {
                                type: o.XZJ.Types.INVERTED,
                                value: null != i ? i : this.props.isDefault,
                                disabled: this.props.isDefault,
                                className: m.defaultLocationCheckbox,
                                onChange: this.handleToggleDefault,
                                children: f.NW.string(f.t.Z2MWuL)
                            }),
                            (0, r.jsx)(o.$i$, { className: m.separator }),
                            (0, r.jsxs)(c.Z, {
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        disabled: t || this.props.isDefault,
                                        size: o.zxk.Sizes.SMALL,
                                        color: o.zxk.Colors.RED,
                                        look: o.zxk.Looks.OUTLINED,
                                        onClick: this.handleRemoveLocation,
                                        children: f.NW.string(f.t.iBUzS0)
                                    }),
                                    (0, r.jsxs)(c.Z, {
                                        justify: c.Z.Justify.END,
                                        children: [
                                            (0, r.jsx)(o.zxk, {
                                                size: o.zxk.Sizes.SMALL,
                                                color: o.zxk.Colors.PRIMARY,
                                                look: o.zxk.Looks.LINK,
                                                onClick: this.handleStopEditing,
                                                children: f.NW.string(f.t['ETE/oK'])
                                            }),
                                            (0, r.jsx)(o.zxk, {
                                                disabled: e === this.props.path && n === this.props.label && i === this.props.isDefault,
                                                size: o.zxk.Sizes.SMALL,
                                                color: o.zxk.Colors.GREEN,
                                                onClick: this.handleSaveChanges,
                                                children: f.NW.string(f.t.R3BPHx)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
    render() {
        return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing();
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                label: void 0,
                isDefault: null
            }),
            _(this, 'handleStartEditing', () => {
                let { path: e, label: t, isDefault: n, onToggleEditing: r } = this.props;
                r(e),
                    this.setState({
                        label: t,
                        isDefault: n
                    });
            }),
            _(this, 'handleStopEditing', () => {
                let { onToggleEditing: e } = this.props;
                e(null),
                    this.setState({
                        label: void 0,
                        isDefault: null
                    });
            }),
            _(this, 'handleRemoveLocation', () => {
                (0, o.h7j)((e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.ConfirmModal,
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        _(e, t, n[t]);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (n = n =
                            {
                                header: f.NW.string(f.t.iBUzS0),
                                confirmText: f.NW.string(f.t.iBUzS0),
                                cancelText: f.NW.string(f.t['ETE/oK']),
                                onConfirm: () => {
                                    this.handleStopEditing(), (0, a.iD)(this.props.path);
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: f.NW.string(f.t['1XqeW1'])
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                });
            }),
            _(this, 'handleSaveChanges', () => {
                (0, a.Tb)(this.props.path, {
                    label: null != this.state.label ? this.state.label : this.props.label,
                    isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
                }),
                    this.handleStopEditing();
            }),
            _(this, 'handleLabelChange', (e) => {
                this.setState({ label: e });
            }),
            _(this, 'handleToggleDefault', () => {
                this.setState({ isDefault: !this.state.isDefault });
            });
    }
}
class O extends i.PureComponent {
    componentDidMount() {
        (0, a.ec)(
            this.props.installationPaths.map((e) => {
                let { path: t } = e;
                return t;
            })
        );
    }
    render() {
        let { installationPaths: e, installationPathsMetadata: t, defaultInstallationPath: n } = this.props,
            { editingPath: i } = this.state;
        return (0, r.jsxs)(o.hjN, {
            className: m.wrapper,
            title: f.NW.string(f.t.aLszkJ),
            children: [
                e.map((e) => {
                    let { path: l, label: o } = e;
                    return (0, r.jsx)(
                        E,
                        {
                            path: l,
                            label: o,
                            metadata: t[l],
                            isDefault: n === l,
                            editingPath: i,
                            hasGamesInstalledInPath: d.Z.hasGamesInstalledInPath(l),
                            onToggleEditing: this.handleToggleEditing
                        },
                        l
                    );
                }),
                (0, r.jsx)('div', {
                    className: m.buttonRowWrapper,
                    children: (0, r.jsx)(o.zxk, {
                        disabled: !h.isPlatformEmbedded,
                        onClick: this.handleAddInstallationLocation,
                        size: o.zxk.Sizes.SMALL,
                        children: f.NW.string(f.t.pnZ2ur)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', { editingPath: null }),
            _(this, 'handleAddInstallationLocation', () => {
                g.ZP.showOpenDialog(['openDirectory']).then((e) => {
                    null != e && 0 !== e.length && null != e[0] && 'undefined' !== e[0] && (0, a.RY)(e[0]);
                });
            }),
            _(this, 'handleToggleEditing', (e) => {
                this.setState({ editingPath: e });
            });
    }
}
let N = l.ZP.connectStores([d.Z], () => ({
    installationPaths: d.Z.installationPaths,
    installationPathsMetadata: d.Z.installationPathsMetadata,
    defaultInstallationPath: d.Z.defaultInstallationPath
}))(O);
