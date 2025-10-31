n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(325432),
    o = n(570928),
    c = n(600164),
    u = n(579022),
    d = n(391690),
    p = n(424218),
    f = n(358085),
    m = n(998502),
    h = n(388032),
    g = n(499126),
    _ = n(197571);
function b(e, t, n) {
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
            ? (0, r.jsx)(u.Z, {
                  total: e.totalKB,
                  used: e.totalKB - e.availableKB,
              })
            : null;
    }
    renderViewing() {
        let e,
            t,
            { path: n, label: i, editingPath: l, isDefault: s, metadata: u } = this.props;
        return (
            null != u &&
                ((e = null != u.availableKB ? (0, p.BU)(u.availableKB, { useKibibytes: !0 }) : null),
                (t = null != u.totalKB ? (0, p.BU)(u.totalKB, { useKibibytes: !0 }) : null)),
            (0, r.jsxs)(c.Z, {
                className: g.installationPath,
                align: c.Z.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(c.Z, {
                        direction: c.Z.Direction.VERTICAL,
                        className: g.__invalid_descriptionWrapper,
                        children: [
                            (0, r.jsxs)(c.Z, {
                                align: c.Z.Align.CENTER,
                                children: [
                                    (0, r.jsx)(a.Heading, {
                                        className: g.rowTitle,
                                        variant: "heading-md/semibold",
                                        children: null != i ? i : d.Z.getLabelFromPath(n),
                                    }),
                                    s
                                        ? (0, r.jsx)("span", {
                                              className: g.defaultIndicator,
                                              children: h.intl.string(h.t.bBvAEH),
                                          })
                                        : null,
                                ],
                            }),
                            null != u && null != e && null != t
                                ? (0, r.jsx)(o.Z, {
                                      className: g.rowBody,
                                      hoverText: h.intl.formatToPlainString(h.t["Fxo9e+"], {
                                          available: e,
                                          total: t,
                                      }),
                                      children: n,
                                  })
                                : (0, r.jsx)(a.Text, {
                                      className: g.rowBody,
                                      variant: "text-xs/normal",
                                      children: n,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h.intl.string(h.t.bt75uw),
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
        return (0, r.jsx)(a.Zbd, {
            editable: !0,
            className: g.installationPathEditing,
            children: (0, r.jsxs)(c.Z, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(c.Z.Child, {
                        children: [
                            (0, r.jsx)(a.oil, {
                                label: h.intl.string(h.t.AJkKCB),
                                value: n,
                                placeholder: d.Z.getLabelFromPath(e),
                                onChange: this.handleLabelChange,
                            }),
                            (0, r.jsx)("div", {
                                className: _.marginTop20,
                                children: (0, r.jsx)(a.oil, {
                                    label: h.intl.string(h.t.lnUCwX),
                                    disabled: !0,
                                    value: e,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: g.defaultLocationCheckbox,
                                children: (0, r.jsx)(a.Checkbox, {
                                    checked: null != i ? i : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: h.intl.string(h.t.Z2MWuH),
                                }),
                            }),
                            (0, r.jsx)(a.izJ, { className: g.separator }),
                            (0, r.jsxs)(c.Z, {
                                children: [
                                    (0, r.jsx)(a.Button, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: h.intl.string(h.t.iBUzS5),
                                        disabled: t || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, r.jsx)(c.Z, {
                                        justify: c.Z.Justify.END,
                                        children: (0, r.jsxs)(a.ButtonGroup, {
                                            children: [
                                                (0, r.jsx)(a.Button, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: h.intl.string(h.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, r.jsx)(a.Button, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: h.intl.string(h.t["R3BPH+"]),
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
            b(this, "state", {
                label: void 0,
                isDefault: null,
            }),
            b(this, "handleStartEditing", () => {
                let { path: e, label: t, isDefault: n, onToggleEditing: r } = this.props;
                r(e),
                    this.setState({
                        label: t,
                        isDefault: n,
                    });
            }),
            b(this, "handleStopEditing", () => {
                let { onToggleEditing: e } = this.props;
                e(null),
                    this.setState({
                        label: void 0,
                        isDefault: null,
                    });
            }),
            b(this, "handleRemoveLocation", () => {
                (0, a.h7j)((e) =>
                    (0, r.jsx)(
                        a.ConfirmModal,
                        (function (e, t) {
                            return (
                                (t = null != t ? t : {}),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(t)).forEach(function (n) {
                                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                      }),
                                e
                            );
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            b(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, e),
                            {
                                header: h.intl.string(h.t.iBUzS5),
                                confirmText: h.intl.string(h.t.iBUzS5),
                                cancelText: h.intl.string(h.t["ETE/oC"]),
                                onConfirm: () => {
                                    this.handleStopEditing(), (0, s.iD)(this.props.path);
                                },
                                children: (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    children: h.intl.string(h.t["1XqeW2"]),
                                }),
                            },
                        ),
                    ),
                );
            }),
            b(this, "handleSaveChanges", () => {
                (0, s.Tb)(this.props.path, {
                    label: null != this.state.label ? this.state.label : this.props.label,
                    isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
                }),
                    this.handleStopEditing();
            }),
            b(this, "handleLabelChange", (e) => {
                this.setState({ label: e });
            }),
            b(this, "handleToggleDefault", () => {
                this.setState({ isDefault: !this.state.isDefault });
            });
    }
}
class O extends i.PureComponent {
    componentDidMount() {
        (0, s.ec)(
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
            className: g.wrapper,
            children: (0, r.jsxs)(a.gNt, {
                label: h.intl.string(h.t.aLszkC),
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
                                hasGamesInstalledInPath: d.Z.hasGamesInstalledInPath(l),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            l,
                        );
                    }),
                    (0, r.jsx)("div", {
                        className: g.buttonRowWrapper,
                        children: (0, r.jsx)(a.Button, {
                            variant: "primary",
                            size: "sm",
                            text: h.intl.string(h.t.pnZ2uk),
                            disabled: !f.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", { editingPath: null }),
            b(this, "handleAddInstallationLocation", () => {
                m.ZP.showOpenDialog(["openDirectory"]).then((e) => {
                    null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, s.RY)(e[0]);
                });
            }),
            b(this, "handleToggleEditing", (e) => {
                this.setState({ editingPath: e });
            });
    }
}
let I = l.ZP.connectStores([d.Z], () => ({
    installationPaths: d.Z.installationPaths,
    installationPathsMetadata: d.Z.installationPathsMetadata,
    defaultInstallationPath: d.Z.defaultInstallationPath,
}))(O);
