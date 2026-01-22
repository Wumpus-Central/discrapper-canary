n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(314116),
    s = n(397927),
    o = n(466472),
    c = n(29160),
    u = n(235986),
    d = n(212408),
    p = n(775228),
    f = n(255438),
    h = n(723702),
    A = n(837921),
    g = n(985018),
    m = n(629859),
    b = n(473169);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class E extends i.PureComponent {
    renderDiskUsageCircle() {
        let { metadata: e } = this.props;
        return null != e && null != e.availableKB && null != e.totalKB
            ? (0, r.jsx)(d.A, {
                  total: e.totalKB,
                  used: e.totalKB - e.availableKB,
              })
            : null;
    }
    renderViewing() {
        let e,
            t,
            { path: n, label: i, editingPath: l, isDefault: a, metadata: o } = this.props;
        return (
            null != o &&
                ((e =
                    null != o.availableKB
                        ? (0, f.Xq)(o.availableKB, {
                              useKibibytes: !0,
                          })
                        : null),
                (t =
                    null != o.totalKB
                        ? (0, f.Xq)(o.totalKB, {
                              useKibibytes: !0,
                          })
                        : null)),
            (0, r.jsxs)(u.A, {
                className: m.ce,
                align: u.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(u.A, {
                        direction: u.A.Direction.VERTICAL,
                        className: m.__invalid_descriptionWrapper,
                        children: [
                            (0, r.jsxs)(u.A, {
                                align: u.A.Align.CENTER,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        className: m.nM,
                                        variant: "heading-md/semibold",
                                        children: null != i ? i : p.A.getLabelFromPath(n),
                                    }),
                                    a
                                        ? (0, r.jsx)("span", {
                                              className: m.Zn,
                                              children: g.intl.string(g.t.bBvAEH),
                                          })
                                        : null,
                                ],
                            }),
                            null != o && null != e && null != t
                                ? (0, r.jsx)(c.A, {
                                      className: m.fw,
                                      hoverText: g.intl.formatToPlainString(g.t["Fxo9e+"], {
                                          available: e,
                                          total: t,
                                      }),
                                      children: n,
                                  })
                                : (0, r.jsx)(s.Text, {
                                      className: m.fw,
                                      variant: "text-xs/normal",
                                      children: n,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(s.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g.intl.string(g.t.bt75uw),
                        disabled: null != l,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: i } = this.state;
        return (0, r.jsx)(s.ZpM, {
            editable: !0,
            className: m.uP,
            children: (0, r.jsxs)(u.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(u.A.Child, {
                        children: [
                            (0, r.jsx)(s.ksK, {
                                label: g.intl.string(g.t.AJkKCB),
                                value: n,
                                placeholder: p.A.getLabelFromPath(e),
                                onChange: this.handleLabelChange,
                            }),
                            (0, r.jsx)("div", {
                                className: b.QX,
                                children: (0, r.jsx)(s.ksK, {
                                    label: g.intl.string(g.t.lnUCwX),
                                    disabled: !0,
                                    value: e,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: m.gZ,
                                children: (0, r.jsx)(s.Checkbox, {
                                    checked: null != i ? i : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: g.intl.string(g.t.Z2MWuH),
                                }),
                            }),
                            (0, r.jsx)(s.cGx, {
                                className: m.me,
                            }),
                            (0, r.jsxs)(u.A, {
                                children: [
                                    (0, r.jsx)(s.Button, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: g.intl.string(g.t.iBUzS5),
                                        disabled: t || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, r.jsx)(u.A, {
                                        justify: u.A.Justify.END,
                                        children: (0, r.jsxs)(s.ButtonGroup, {
                                            children: [
                                                (0, r.jsx)(s.Button, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: g.intl.string(g.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, r.jsx)(s.Button, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: g.intl.string(g.t["R3BPH+"]),
                                                    disabled:
                                                        e === this.props.path &&
                                                        n === this.props.label &&
                                                        i === this.props.isDefault,
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
    constructor(...e) {
        super(...e),
            _(this, "state", {
                label: void 0,
                isDefault: null,
            }),
            _(this, "handleStartEditing", () => {
                let { path: e, label: t, isDefault: n, onToggleEditing: r } = this.props;
                r(e),
                    this.setState({
                        label: t,
                        isDefault: n,
                    });
            }),
            _(this, "handleStopEditing", () => {
                let { onToggleEditing: e } = this.props;
                e(null),
                    this.setState({
                        label: void 0,
                        isDefault: null,
                    });
            }),
            _(this, "handleRemoveLocation", () => {
                (0, a.A)({
                    title: g.intl.string(g.t.iBUzS5),
                    subtitle: g.intl.string(g.t["1XqeW2"]),
                    confirmText: g.intl.string(g.t.iBUzS5),
                    onConfirm: () => {
                        this.handleStopEditing(), (0, o.JN)(this.props.path);
                    },
                });
            }),
            _(this, "handleSaveChanges", () => {
                (0, o.a8)(this.props.path, {
                    label: null != this.state.label ? this.state.label : this.props.label,
                    isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
                }),
                    this.handleStopEditing();
            }),
            _(this, "handleLabelChange", (e) => {
                this.setState({
                    label: e,
                });
            }),
            _(this, "handleToggleDefault", () => {
                this.setState({
                    isDefault: !this.state.isDefault,
                });
            });
    }
}
class O extends i.PureComponent {
    componentDidMount() {
        (0, o.UQ)(
            this.props.installationPaths.map((e) => {
                let { path: t } = e;
                return t;
            }),
        );
    }
    render() {
        let { installationPaths: e, installationPathsMetadata: t, defaultInstallationPath: n } = this.props,
            { editingPath: i } = this.state;
        return (0, r.jsx)("div", {
            className: m.iE,
            children: (0, r.jsxs)(s.D0$, {
                label: g.intl.string(g.t.aLszkC),
                children: [
                    e.map((e) => {
                        let { path: l, label: a } = e;
                        return (0, r.jsx)(
                            E,
                            {
                                path: l,
                                label: a,
                                metadata: t[l],
                                isDefault: n === l,
                                editingPath: i,
                                hasGamesInstalledInPath: p.A.hasGamesInstalledInPath(l),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            l,
                        );
                    }),
                    (0, r.jsx)("div", {
                        className: m.sW,
                        children: (0, r.jsx)(s.Button, {
                            variant: "primary",
                            size: "sm",
                            text: g.intl.string(g.t.pnZ2uk),
                            disabled: !h.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", {
                editingPath: null,
            }),
            _(this, "handleAddInstallationLocation", () => {
                A.Ay.showOpenDialog(["openDirectory"]).then((e) => {
                    null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, o.SA)(e[0]);
                });
            }),
            _(this, "handleToggleEditing", (e) => {
                this.setState({
                    editingPath: e,
                });
            });
    }
}
let y = l.Ay.connectStores([p.A], () => ({
    installationPaths: p.A.installationPaths,
    installationPathsMetadata: p.A.installationPathsMetadata,
    defaultInstallationPath: p.A.defaultInstallationPath,
}))(O);
