"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(314116),
    a = n(534514),
    o = n(834730),
    c = n(821609),
    d = n(359778),
    h = n(292666),
    p = n(150934),
    u = n(404778),
    A = n(825484),
    m = n(452027),
    g = n(466472),
    f = n(29160),
    _ = n(235986),
    x = n(212408),
    y = n(775228),
    N = n(255438),
    C = n(723702),
    I = n(837921),
    T = n(985018),
    S = n(744832),
    b = n(818050);
class R extends s.PureComponent {
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
        (0, r.A)({
            title: T.intl.string(T.t.iBUzS5),
            subtitle: T.intl.string(T.t["1XqeW2"]),
            confirmText: T.intl.string(T.t.iBUzS5),
            onConfirm: () => {
                this.handleStopEditing(), (0, g.JN)(this.props.path);
            },
        });
    };
    handleSaveChanges = () => {
        (0, g.a8)(this.props.path, {
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
            ? (0, i.jsx)(x.A, { total: e.totalKB, used: e.totalKB - e.availableKB })
            : null;
    }
    renderViewing() {
        let e,
            t,
            { path: n, label: s, editingPath: l, isDefault: r, metadata: d } = this.props;
        return (
            null != d &&
                ((e = null != d.availableKB ? (0, N.Xq)(d.availableKB, { useKibibytes: !0 }) : null),
                (t = null != d.totalKB ? (0, N.Xq)(d.totalKB, { useKibibytes: !0 }) : null)),
            (0, i.jsxs)(_.A, {
                className: S.ce,
                align: _.A.Align.CENTER,
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(_.A, {
                        direction: _.A.Direction.VERTICAL,
                        className: S.__invalid_descriptionWrapper,
                        children: [
                            (0, i.jsxs)(_.A, {
                                align: _.A.Align.CENTER,
                                children: [
                                    (0, i.jsx)(a.D, {
                                        className: S.nM,
                                        variant: "heading-md/semibold",
                                        children: null != s ? s : y.A.getLabelFromPath(n),
                                    }),
                                    r
                                        ? (0, i.jsx)("span", { className: S.Zn, children: T.intl.string(T.t.bBvAEH) })
                                        : null,
                                ],
                            }),
                            null != d && null != e && null != t
                                ? (0, i.jsx)(f.A, {
                                      className: S.fw,
                                      hoverText: T.intl.formatToPlainString(T.t["Fxo9e+"], { available: e, total: t }),
                                      children: n,
                                  })
                                : (0, i.jsx)(o.E, { className: S.fw, variant: "text-xs/normal", children: n }),
                        ],
                    }),
                    (0, i.jsx)(c.$, {
                        variant: "secondary",
                        size: "sm",
                        text: T.intl.string(T.t.bt75uw),
                        disabled: null != l,
                        onClick: this.handleStartEditing,
                    }),
                ],
            })
        );
    }
    renderEditing() {
        let { path: e, hasGamesInstalledInPath: t } = this.props,
            { label: n, isDefault: s } = this.state;
        return (0, i.jsx)(d.Z, {
            editable: !0,
            className: S.uP,
            children: (0, i.jsxs)(_.A, {
                children: [
                    this.renderDiskUsageCircle(),
                    (0, i.jsxs)(_.A.Child, {
                        children: [
                            (0, i.jsx)(h.k, {
                                label: T.intl.string(T.t.AJkKCB),
                                value: n,
                                placeholder: y.A.getLabelFromPath(e),
                                onChange: this.handleLabelChange,
                            }),
                            (0, i.jsx)("div", {
                                className: b.QX,
                                children: (0, i.jsx)(h.k, { label: T.intl.string(T.t.lnUCwX), disabled: !0, value: e }),
                            }),
                            (0, i.jsx)("div", {
                                className: S.gZ,
                                children: (0, i.jsx)(p.S, {
                                    checked: null != s ? s : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    onChange: this.handleToggleDefault,
                                    label: T.intl.string(T.t.Z2MWuH),
                                }),
                            }),
                            (0, i.jsx)(u.c, { className: S.me }),
                            (0, i.jsxs)(_.A, {
                                children: [
                                    (0, i.jsx)(c.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: T.intl.string(T.t.iBUzS5),
                                        disabled: t || this.props.isDefault,
                                        onClick: this.handleRemoveLocation,
                                    }),
                                    (0, i.jsx)(_.A, {
                                        justify: _.A.Justify.END,
                                        children: (0, i.jsxs)(A.e, {
                                            children: [
                                                (0, i.jsx)(c.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: T.intl.string(T.t["ETE/oC"]),
                                                    onClick: this.handleStopEditing,
                                                }),
                                                (0, i.jsx)(c.$, {
                                                    variant: "active",
                                                    size: "sm",
                                                    text: T.intl.string(T.t["R3BPH+"]),
                                                    disabled:
                                                        e === this.props.path &&
                                                        n === this.props.label &&
                                                        s === this.props.isDefault,
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
class v extends s.PureComponent {
    state = { editingPath: null };
    componentDidMount() {
        (0, g.UQ)(
            this.props.installationPaths.map((e) => {
                let { path: t } = e;
                return t;
            }),
        );
    }
    handleAddInstallationLocation = () => {
        I.Ay.showOpenDialog(["openDirectory"]).then((e) => {
            null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, g.SA)(e[0]);
        });
    };
    handleToggleEditing = (e) => {
        this.setState({ editingPath: e });
    };
    render() {
        let { installationPaths: e, installationPathsMetadata: t, defaultInstallationPath: n } = this.props,
            { editingPath: s } = this.state;
        return (0, i.jsx)("div", {
            className: S.iE,
            children: (0, i.jsxs)(m.D, {
                label: T.intl.string(T.t.aLszkC),
                children: [
                    e.map((e) => {
                        let { path: l, label: r } = e;
                        return (0, i.jsx)(
                            R,
                            {
                                path: l,
                                label: r,
                                metadata: t[l],
                                isDefault: n === l,
                                editingPath: s,
                                hasGamesInstalledInPath: y.A.hasGamesInstalledInPath(l),
                                onToggleEditing: this.handleToggleEditing,
                            },
                            l,
                        );
                    }),
                    (0, i.jsx)("div", {
                        className: S.sW,
                        children: (0, i.jsx)(c.$, {
                            variant: "primary",
                            size: "sm",
                            text: T.intl.string(T.t.pnZ2uk),
                            disabled: !C.isPlatformEmbedded,
                            onClick: this.handleAddInstallationLocation,
                        }),
                    }),
                ],
            }),
        });
    }
}
let P = l.Ay.connectStores([y.A], () => ({
    installationPaths: y.A.installationPaths,
    installationPathsMetadata: y.A.installationPathsMetadata,
    defaultInstallationPath: y.A.defaultInstallationPath,
}))(v);
