n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
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
    f = n(762353),
    _ = n(232186);
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
class I extends r.PureComponent {
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
        let { path: n, label: r, editingPath: l, isDefault: s, metadata: d } = this.props;
        return (
            null != d && ((e = null != d.availableKB ? (0, h.BU)(d.availableKB, { useKibibytes: !0 }) : null), (t = null != d.totalKB ? (0, h.BU)(d.totalKB, { useKibibytes: !0 }) : null)),
            (0, i.jsxs)(c.Z, {
                className: f.installationPath,
                align: c.Z.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(c.Z, {
                        direction: c.Z.Direction.VERTICAL,
                        className: f.__invalid_descriptionWrapper,
                        children: [
                            (0, i.jsxs)(c.Z, {
                                align: c.Z.Align.CENTER,
                                children: [
                                    (0, i.jsx)(a.Heading, {
                                        className: f.rowTitle,
                                        variant: 'heading-md/semibold',
                                        children: null != r ? r : u.Z.getLabelFromPath(n)
                                    }),
                                    s
                                        ? (0, i.jsx)('span', {
                                              className: f.defaultIndicator,
                                              children: g.intl.string(g.t.bBvAEB)
                                          })
                                        : null
                                ]
                            }),
                            null != d && null != e && null != t
                                ? (0, i.jsx)(o.Z, {
                                      className: f.rowBody,
                                      hoverText: g.intl.formatToPlainString(g.t.Fxo9e3, {
                                          available: e,
                                          total: t
                                      }),
                                      children: n
                                  })
                                : (0, i.jsx)(a.Text, {
                                      className: f.rowBody,
                                      variant: 'text-xs/normal',
                                      children: n
                                  })
                        ]
                    }),
                    (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        disabled: null != l,
                        color: a.Button.Colors.PRIMARY,
                        onClick: this.handleStartEditing,
                        children: g.intl.string(g.t.bt75u7)
                    })
                ]
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: r } = this.state;
        return (0, i.jsx)(a.Card, {
            editable: !0,
            className: f.installationPathEditing,
            children: (0, i.jsxs)(c.Z, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(c.Z.Child, {
                        children: [
                            (0, i.jsx)(a.FormItem, {
                                title: g.intl.string(g.t.AJkKCA),
                                children: (0, i.jsx)(a.TextInput, {
                                    value: n,
                                    placeholder: u.Z.getLabelFromPath(e),
                                    onChange: this.handleLabelChange
                                })
                            }),
                            (0, i.jsx)(a.FormItem, {
                                title: g.intl.string(g.t.lnUCwc),
                                className: _.marginTop20,
                                children: (0, i.jsx)(a.TextInput, {
                                    disabled: !0,
                                    value: e
                                })
                            }),
                            (0, i.jsx)(a.Checkbox, {
                                type: a.Checkbox.Types.INVERTED,
                                value: null != r ? r : this.props.isDefault,
                                disabled: this.props.isDefault,
                                className: f.defaultLocationCheckbox,
                                onChange: this.handleToggleDefault,
                                children: g.intl.string(g.t.Z2MWuL)
                            }),
                            (0, i.jsx)(a.FormDivider, { className: f.separator }),
                            (0, i.jsxs)(c.Z, {
                                children: [
                                    (0, i.jsx)(a.Button, {
                                        disabled: t || this.props.isDefault,
                                        size: a.Button.Sizes.SMALL,
                                        color: a.Button.Colors.RED,
                                        look: a.Button.Looks.OUTLINED,
                                        onClick: this.handleRemoveLocation,
                                        children: g.intl.string(g.t.iBUzS0)
                                    }),
                                    (0, i.jsxs)(c.Z, {
                                        justify: c.Z.Justify.END,
                                        children: [
                                            (0, i.jsx)(a.Button, {
                                                size: a.Button.Sizes.SMALL,
                                                color: a.Button.Colors.PRIMARY,
                                                look: a.Button.Looks.LINK,
                                                onClick: this.handleStopEditing,
                                                children: g.intl.string(g.t['ETE/oK'])
                                            }),
                                            (0, i.jsx)(a.Button, {
                                                disabled: e === this.props.path && n === this.props.label && r === this.props.isDefault,
                                                size: a.Button.Sizes.SMALL,
                                                color: a.Button.Colors.GREEN,
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
                (0, a.openModal)((e) =>
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
class C extends r.PureComponent {
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
            { editingPath: r } = this.state;
        return (0, i.jsxs)(a.FormSection, {
            className: f.wrapper,
            title: g.intl.string(g.t.aLszkJ),
            children: [
                e.map((e) => {
                    let { path: l, label: a } = e;
                    return (0, i.jsx)(
                        I,
                        {
                            path: l,
                            label: a,
                            metadata: t[l],
                            isDefault: n === l,
                            editingPath: r,
                            hasGamesInstalledInPath: u.Z.hasGamesInstalledInPath(l),
                            onToggleEditing: this.handleToggleEditing
                        },
                        l
                    );
                }),
                (0, i.jsx)('div', {
                    className: f.buttonRowWrapper,
                    children: (0, i.jsx)(a.Button, {
                        disabled: !m.isPlatformEmbedded,
                        onClick: this.handleAddInstallationLocation,
                        size: a.Button.Sizes.SMALL,
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
                    if (null != e && 0 !== e.length && null != e[0] && 'undefined' !== e[0]) (0, s.RY)(e[0]);
                });
            }),
            E(this, 'handleToggleEditing', (e) => {
                this.setState({ editingPath: e });
            });
    }
}
t.Z = l.ZP.connectStores([u.Z], () => ({
    installationPaths: u.Z.installationPaths,
    installationPathsMetadata: u.Z.installationPathsMetadata,
    defaultInstallationPath: u.Z.defaultInstallationPath
}))(C);
