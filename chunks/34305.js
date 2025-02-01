n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(325432),
    o = n(570928),
    c = n(600164),
    d = n(579022),
    u = n(391690),
    h = n(424218),
    m = n(358085),
    p = n(998502),
    g = n(388032),
    _ = n(762353),
    f = n(232186);
function E(e, t, n) {
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
class I extends l.PureComponent {
    renderDiskUsageCircle() {
        let { metadata: e } = this.props;
        return null != e && null != e.availableKB && null != e.totalKB
            ? (0, i.jsx)(d.Z, {
                  total: e.totalKB,
                  used: e.totalKB - e.availableKB
              })
            : null;
    }
    renderViewing() {
        let e, t;
        let { path: n, label: l, editingPath: r, isDefault: s, metadata: d } = this.props;
        return (
            null != d && ((e = null != d.availableKB ? (0, h.BU)(d.availableKB, { useKibibytes: !0 }) : null), (t = null != d.totalKB ? (0, h.BU)(d.totalKB, { useKibibytes: !0 }) : null)),
            (0, i.jsxs)(c.Z, {
                className: _.installationPath,
                align: c.Z.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(c.Z, {
                        direction: c.Z.Direction.VERTICAL,
                        className: _.__invalid_descriptionWrapper,
                        children: [
                            (0, i.jsxs)(c.Z, {
                                align: c.Z.Align.CENTER,
                                children: [
                                    (0, i.jsx)(a.X6q, {
                                        className: _.rowTitle,
                                        variant: 'heading-md/semibold',
                                        children: null != l ? l : u.Z.getLabelFromPath(n)
                                    }),
                                    s
                                        ? (0, i.jsx)('span', {
                                              className: _.defaultIndicator,
                                              children: g.intl.string(g.t.bBvAEB)
                                          })
                                        : null
                                ]
                            }),
                            null != d && null != e && null != t
                                ? (0, i.jsx)(o.Z, {
                                      className: _.rowBody,
                                      hoverText: g.intl.formatToPlainString(g.t.Fxo9e3, {
                                          available: e,
                                          total: t
                                      }),
                                      children: n
                                  })
                                : (0, i.jsx)(a.Text, {
                                      className: _.rowBody,
                                      variant: 'text-xs/normal',
                                      children: n
                                  })
                        ]
                    }),
                    (0, i.jsx)(a.zxk, {
                        size: a.zxk.Sizes.SMALL,
                        disabled: null != r,
                        color: a.zxk.Colors.PRIMARY,
                        onClick: this.handleStartEditing,
                        children: g.intl.string(g.t.bt75u7)
                    })
                ]
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: l } = this.state;
        return (0, i.jsx)(a.Zbd, {
            editable: !0,
            className: _.installationPathEditing,
            children: (0, i.jsxs)(c.Z, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(c.Z.Child, {
                        children: [
                            (0, i.jsx)(a.xJW, {
                                title: g.intl.string(g.t.AJkKCA),
                                children: (0, i.jsx)(a.oil, {
                                    value: n,
                                    placeholder: u.Z.getLabelFromPath(e),
                                    onChange: this.handleLabelChange
                                })
                            }),
                            (0, i.jsx)(a.xJW, {
                                title: g.intl.string(g.t.lnUCwc),
                                className: f.marginTop20,
                                children: (0, i.jsx)(a.oil, {
                                    disabled: !0,
                                    value: e
                                })
                            }),
                            (0, i.jsx)(a.XZJ, {
                                type: a.XZJ.Types.INVERTED,
                                value: null != l ? l : this.props.isDefault,
                                disabled: this.props.isDefault,
                                className: _.defaultLocationCheckbox,
                                onChange: this.handleToggleDefault,
                                children: g.intl.string(g.t.Z2MWuL)
                            }),
                            (0, i.jsx)(a.$i$, { className: _.separator }),
                            (0, i.jsxs)(c.Z, {
                                children: [
                                    (0, i.jsx)(a.zxk, {
                                        disabled: t || this.props.isDefault,
                                        size: a.zxk.Sizes.SMALL,
                                        color: a.zxk.Colors.RED,
                                        look: a.zxk.Looks.OUTLINED,
                                        onClick: this.handleRemoveLocation,
                                        children: g.intl.string(g.t.iBUzS0)
                                    }),
                                    (0, i.jsxs)(c.Z, {
                                        justify: c.Z.Justify.END,
                                        children: [
                                            (0, i.jsx)(a.zxk, {
                                                size: a.zxk.Sizes.SMALL,
                                                color: a.zxk.Colors.PRIMARY,
                                                look: a.zxk.Looks.LINK,
                                                onClick: this.handleStopEditing,
                                                children: g.intl.string(g.t['ETE/oK'])
                                            }),
                                            (0, i.jsx)(a.zxk, {
                                                disabled: e === this.props.path && n === this.props.label && l === this.props.isDefault,
                                                size: a.zxk.Sizes.SMALL,
                                                color: a.zxk.Colors.GREEN,
                                                onClick: this.handleSaveChanges,
                                                children: g.intl.string(g.t.R3BPHx)
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
            E(this, 'state', {
                label: void 0,
                isDefault: null
            }),
            E(this, 'handleStartEditing', () => {
                let { path: e, label: t, isDefault: n, onToggleEditing: i } = this.props;
                i(e),
                    this.setState({
                        label: t,
                        isDefault: n
                    });
            }),
            E(this, 'handleStopEditing', () => {
                let { onToggleEditing: e } = this.props;
                e(null),
                    this.setState({
                        label: void 0,
                        isDefault: null
                    });
            }),
            E(this, 'handleRemoveLocation', () => {
                (0, a.h7j)((e) =>
                    (0, i.jsx)(a.ConfirmModal, {
                        ...e,
                        header: g.intl.string(g.t.iBUzS0),
                        confirmText: g.intl.string(g.t.iBUzS0),
                        cancelText: g.intl.string(g.t['ETE/oK']),
                        onConfirm: () => {
                            this.handleStopEditing(), (0, s.iD)(this.props.path);
                        },
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: g.intl.string(g.t['1XqeW1'])
                        })
                    })
                );
            }),
            E(this, 'handleSaveChanges', () => {
                (0, s.Tb)(this.props.path, {
                    label: null != this.state.label ? this.state.label : this.props.label,
                    isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
                }),
                    this.handleStopEditing();
            }),
            E(this, 'handleLabelChange', (e) => {
                this.setState({ label: e });
            }),
            E(this, 'handleToggleDefault', () => {
                this.setState({ isDefault: !this.state.isDefault });
            });
    }
}
class C extends l.PureComponent {
    componentDidMount() {
        (0, s.ec)(
            this.props.installationPaths.map((e) => {
                let { path: t } = e;
                return t;
            })
        );
    }
    render() {
        let { installationPaths: e, installationPathsMetadata: t, defaultInstallationPath: n } = this.props,
            { editingPath: l } = this.state;
        return (0, i.jsxs)(a.hjN, {
            className: _.wrapper,
            title: g.intl.string(g.t.aLszkJ),
            children: [
                e.map((e) => {
                    let { path: r, label: a } = e;
                    return (0, i.jsx)(
                        I,
                        {
                            path: r,
                            label: a,
                            metadata: t[r],
                            isDefault: n === r,
                            editingPath: l,
                            hasGamesInstalledInPath: u.Z.hasGamesInstalledInPath(r),
                            onToggleEditing: this.handleToggleEditing
                        },
                        r
                    );
                }),
                (0, i.jsx)('div', {
                    className: _.buttonRowWrapper,
                    children: (0, i.jsx)(a.zxk, {
                        disabled: !m.isPlatformEmbedded,
                        onClick: this.handleAddInstallationLocation,
                        size: a.zxk.Sizes.SMALL,
                        children: g.intl.string(g.t.pnZ2ur)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', { editingPath: null }),
            E(this, 'handleAddInstallationLocation', () => {
                p.ZP.showOpenDialog(['openDirectory']).then((e) => {
                    null != e && 0 !== e.length && null != e[0] && 'undefined' !== e[0] && (0, s.RY)(e[0]);
                });
            }),
            E(this, 'handleToggleEditing', (e) => {
                this.setState({ editingPath: e });
            });
    }
}
let v = r.ZP.connectStores([u.Z], () => ({
    installationPaths: u.Z.installationPaths,
    installationPathsMetadata: u.Z.installationPathsMetadata,
    defaultInstallationPath: u.Z.defaultInstallationPath
}))(C);
