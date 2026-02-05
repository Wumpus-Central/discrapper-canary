n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(314116),
    s = n(397927),
    o = n(466472),
    d = n(29160),
    c = n(235986),
    u = n(212408),
    A = n(775228),
    h = n(255438),
    _ = n(723702),
    m = n(837921),
    p = n(985018),
    g = n(629859),
    E = n(473169);
class f extends r.PureComponent {
    state = { label: void 0, isDefault: null };
    handleStartEditing = () => {
        let { path: e, label: t, isDefault: n, onToggleEditing: i } = this.props;
        i(e), this.setState({ label: t, isDefault: n });
    };
    handleStopEditing = () => {
        let { onToggleEditing: e } = this.props;
        e(null), this.setState({ label: void 0, isDefault: null });
    };
    handleRemoveLocation = () => {
        (0, l.A)({
            title: p.intl.string(p.t.iBUzS5),
            subtitle: p.intl.string(p.t["1XqeW2"]),
            confirmText: p.intl.string(p.t.iBUzS5),
            onConfirm: () => {
                this.handleStopEditing(), (0, o.JN)(this.props.path);
            },
        });
    };
    handleSaveChanges = () => {
        (0, o.a8)(this.props.path, {
            label: null != this.state.label ? this.state.label : this.props.label,
            isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
        }),
            this.handleStopEditing();
    };
    handleLabelChange = (e) => {
        this.setState({ label: e });
    };
    handleToggleDefault = () => {
        this.setState({ isDefault: !this.state.isDefault });
    };
    renderDiskUsageCircle() {
        let { metadata: e } = this.props;
        return null != e && null != e.availableKB && null != e.totalKB
            ? (0, i.jsx)(u.A, { total: e.totalKB, used: e.totalKB - e.availableKB })
            : null;
    }
    renderViewing() {
        let e,
            t,
            { path: n, label: r, editingPath: a, isDefault: l, metadata: o } = this.props;
        return (
            null != o &&
                ((e = null != o.availableKB ? (0, h.Xq)(o.availableKB, { useKibibytes: !0 }) : null),
                (t = null != o.totalKB ? (0, h.Xq)(o.totalKB, { useKibibytes: !0 }) : null)),
            (0, i.jsxs)(c.A, {
                className: g.ce,
                align: c.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(c.A, {
                        direction: c.A.Direction.VERTICAL,
                        className: g.__invalid_descriptionWrapper,
                        children: [
                            (0, i.jsxs)(c.A, {
                                align: c.A.Align.CENTER,
                                children: [
                                    (0, i.jsx)(s.Heading, {
                                        className: g.nM,
                                        variant: "heading-md/semibold",
                                        children: null != r ? r : A.A.getLabelFromPath(n),
                                    }),
                                    l
                                        ? (0, i.jsx)("span", { className: g.Zn, children: p.intl.string(p.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != o && null != e && null != t
                                ? (0, i.jsx)(d.A, {
                                      className: g.fw,
                                      hoverText: p.intl.formatToPlainString(p.t["Fxo9e+"], { available: e, total: t }),
                                      children: n,
                                  })
                                : (0, i.jsx)(s.Text, { className: g.fw, variant: "text-xs/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: p.intl.string(p.t.bt75uw),
                        disabled: null != a,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: r } = this.state;
        return (0, i.jsx)(s.ZpM, {
            editable: !0,
            className: g.uP,
            children: (0, i.jsxs)(c.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(c.A.Child, {
                        children: [
                            (0, i.jsx)(s.ksK, {
                                label: p.intl.string(p.t.AJkKCB),
                                value: n,
                                placeholder: A.A.getLabelFromPath(e),
                                onChange: this.handleLabelChange,
                            }),
                            (0, i.jsx)("div", {
                                className: E.QX,
                                children: (0, i.jsx)(s.ksK, {
                                    label: p.intl.string(p.t.lnUCwX),
                                    disabled: !0,
                                    value: e,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: g.gZ,
                                children: (0, i.jsx)(s.Checkbox, {
                                    checked: null != r ? r : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: p.intl.string(p.t.Z2MWuH),
                                }),
                            }),
                            (0, i.jsx)(s.cGx, { className: g.me }),
                            (0, i.jsxs)(c.A, {
                                children: [
                                    (0, i.jsx)(s.Button, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: p.intl.string(p.t.iBUzS5),
                                        disabled: t || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, i.jsx)(c.A, {
                                        justify: c.A.Justify.END,
                                        children: (0, i.jsxs)(s.ButtonGroup, {
                                            children: [
                                                (0, i.jsx)(s.Button, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: p.intl.string(p.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, i.jsx)(s.Button, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: p.intl.string(p.t["R3BPH+"]),
                                                    disabled:
                                                        e === this.props.path &&
                                                        n === this.props.label &&
                                                        r === this.props.isDefault,
                                                    onClick: this.handleSaveChanges,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing();
    }
}
class I extends r.PureComponent {
    state = { editingPath: null };
    componentDidMount() {
        (0, o.UQ)(
            this.props.installationPaths.map((e) => {
                let { path: t } = e;
                return t;
            }),
        );
    }
    handleAddInstallationLocation = () => {
        m.Ay.showOpenDialog(["openDirectory"]).then((e) => {
            null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, o.SA)(e[0]);
        });
    };
    handleToggleEditing = (e) => {
        this.setState({ editingPath: e });
    };
    render() {
        let { installationPaths: e, installationPathsMetadata: t, defaultInstallationPath: n } = this.props,
            { editingPath: r } = this.state;
        return (0, i.jsx)("div", {
            className: g.iE,
            children: (0, i.jsxs)(s.D0$, {
                label: p.intl.string(p.t.aLszkC),
                children: [
                    e.map((e) => {
                        let { path: a, label: l } = e;
                        return (0, i.jsx)(
                            f,
                            {
                                path: a,
                                label: l,
                                metadata: t[a],
                                isDefault: n === a,
                                editingPath: r,
                                hasGamesInstalledInPath: A.A.hasGamesInstalledInPath(a),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            a,
                        );
                    }),
                    (0, i.jsx)("div", {
                        className: g.sW,
                        children: (0, i.jsx)(s.Button, {
                            variant: "primary",
                            size: "sm",
                            text: p.intl.string(p.t.pnZ2uk),
                            disabled: !_.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
}
let C = a.Ay.connectStores([A.A], () => ({
    installationPaths: A.A.installationPaths,
    installationPathsMetadata: A.A.installationPathsMetadata,
    defaultInstallationPath: A.A.defaultInstallationPath,
}))(I);
