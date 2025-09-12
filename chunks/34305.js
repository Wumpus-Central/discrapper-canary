n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(325432),
    c = n(570928),
    u = n(600164),
    d = n(579022),
    p = n(391690),
    f = n(424218),
    h = n(358085),
    g = n(998502),
    m = n(388032),
    b = n(499126),
    _ = n(197571);
function O(e, t, n) {
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
            ? (0, r.jsx)(d.Z, {
                  total: e.totalKB,
                  used: e.totalKB - e.availableKB,
              })
            : null;
    }
    renderViewing() {
        let e,
            t,
            { path: n, label: i, editingPath: l, isDefault: a, metadata: s } = this.props;
        return (
            null != s &&
                ((e = null != s.availableKB ? (0, f.BU)(s.availableKB, { useKibibytes: !0 }) : null),
                (t = null != s.totalKB ? (0, f.BU)(s.totalKB, { useKibibytes: !0 }) : null)),
            (0, r.jsxs)(u.Z, {
                className: b.installationPath,
                align: u.Z.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(u.Z, {
                        direction: u.Z.Direction.VERTICAL,
                        className: b.__invalid_descriptionWrapper,
                        children: [
                            (0, r.jsxs)(u.Z, {
                                align: u.Z.Align.CENTER,
                                children: [
                                    (0, r.jsx)(o.X6q, {
                                        className: b.rowTitle,
                                        variant: "heading-md/semibold",
                                        children: null != i ? i : p.Z.getLabelFromPath(n),
                                    }),
                                    a
                                        ? (0, r.jsx)("span", {
                                              className: b.defaultIndicator,
                                              children: m.intl.string(m.t.bBvAEB),
                                          })
                                        : null,
                                ],
                            }),
                            null != s && null != e && null != t
                                ? (0, r.jsx)(c.Z, {
                                      className: b.rowBody,
                                      hoverText: m.intl.formatToPlainString(m.t.Fxo9e3, {
                                          available: e,
                                          total: t,
                                      }),
                                      children: n,
                                  })
                                : (0, r.jsx)(o.Text, {
                                      className: b.rowBody,
                                      variant: "text-xs/normal",
                                      children: n,
                                  }),
                        ],
                    }),
                    (0, r.jsx)(o.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.bt75u7),
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
        return (0, r.jsx)(o.Zbd, {
            editable: !0,
            className: b.installationPathEditing,
            children: (0, r.jsxs)(u.Z, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, r.jsxs)(u.Z.Child, {
                        children: [
                            (0, r.jsx)(o.oil, {
                                label: m.intl.string(m.t.AJkKCA),
                                value: n,
                                placeholder: p.Z.getLabelFromPath(e),
                                onChange: this.handleLabelChange,
                            }),
                            (0, r.jsx)("div", {
                                className: _.marginTop20,
                                children: (0, r.jsx)(o.oil, {
                                    label: m.intl.string(m.t.lnUCwc),
                                    disabled: !0,
                                    value: e,
                                }),
                            }),
                            (0, r.jsx)(a.$q, {
                                type: a.M0.INVERTED,
                                value: null != i ? i : this.props.isDefault,
                                disabled: this.props.isDefault,
                                className: b.defaultLocationCheckbox,
                                onChange: this.handleToggleDefault,
                                children: m.intl.string(m.t.Z2MWuL),
                            }),
                            (0, r.jsx)(o.$i$, { className: b.separator }),
                            (0, r.jsxs)(u.Z, {
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: m.intl.string(m.t.iBUzS0),
                                        disabled: t || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, r.jsx)(u.Z, {
                                        justify: u.Z.Justify.END,
                                        children: (0, r.jsxs)(o.hE2, {
                                            children: [
                                                (0, r.jsx)(o.zxk, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: m.intl.string(m.t["ETE/oK"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, r.jsx)(o.zxk, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: m.intl.string(m.t.R3BPHx),
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
            O(this, "state", {
                label: void 0,
                isDefault: null,
            }),
            O(this, "handleStartEditing", () => {
                let { path: e, label: t, isDefault: n, onToggleEditing: r } = this.props;
                r(e),
                    this.setState({
                        label: t,
                        isDefault: n,
                    });
            }),
            O(this, "handleStopEditing", () => {
                let { onToggleEditing: e } = this.props;
                e(null),
                    this.setState({
                        label: void 0,
                        isDefault: null,
                    });
            }),
            O(this, "handleRemoveLocation", () => {
                (0, o.h7j)((e) =>
                    (0, r.jsx)(
                        o.ConfirmModal,
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
                                            O(e, t, n[t]);
                                        });
                                }
                                return e;
                            })({}, e),
                            {
                                header: m.intl.string(m.t.iBUzS0),
                                confirmText: m.intl.string(m.t.iBUzS0),
                                cancelText: m.intl.string(m.t["ETE/oK"]),
                                onConfirm: () => {
                                    this.handleStopEditing(), (0, s.iD)(this.props.path);
                                },
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: m.intl.string(m.t["1XqeW1"]),
                                }),
                            },
                        ),
                    ),
                );
            }),
            O(this, "handleSaveChanges", () => {
                (0, s.Tb)(this.props.path, {
                    label: null != this.state.label ? this.state.label : this.props.label,
                    isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault,
                }),
                    this.handleStopEditing();
            }),
            O(this, "handleLabelChange", (e) => {
                this.setState({ label: e });
            }),
            O(this, "handleToggleDefault", () => {
                this.setState({ isDefault: !this.state.isDefault });
            });
    }
}
class y extends i.PureComponent {
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
        return (0, r.jsxs)(o.hjN, {
            className: b.wrapper,
            title: m.intl.string(m.t.aLszkJ),
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
                            hasGamesInstalledInPath: p.Z.hasGamesInstalledInPath(l),
                            onToggleEditing: this.handleToggleEditing,
                        },
                        l,
                    );
                }),
                (0, r.jsx)("div", {
                    className: b.buttonRowWrapper,
                    children: (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t.pnZ2ur),
                        disabled: !h.isPlatformEmbedded,
                        onClick: this.handleAddInstallationLocation,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "state", { editingPath: null }),
            O(this, "handleAddInstallationLocation", () => {
                g.ZP.showOpenDialog(["openDirectory"]).then((e) => {
                    null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, s.RY)(e[0]);
                });
            }),
            O(this, "handleToggleEditing", (e) => {
                this.setState({ editingPath: e });
            });
    }
}
let v = l.ZP.connectStores([p.Z], () => ({
    installationPaths: p.Z.installationPaths,
    installationPathsMetadata: p.Z.installationPathsMetadata,
    defaultInstallationPath: p.Z.defaultInstallationPath,
}))(y);
