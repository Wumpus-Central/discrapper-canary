n.d(t, { A: () => T, p: () => u });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(543594),
    c = n(587895),
    _ = n(67480),
    E = n(371794),
    d = n(985018);
let u = { DropdownSizes: o.A.DropdownSizes, Sizes: o.A.Sizes, Colors: o.A.Colors, Looks: o.A.Looks };
class A extends l.PureComponent {
    renderContextMenu = () => {
        let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
        return (0, i.jsx)(a.W1t, {
            "data-menu-migrated": !0,
            onSelect: n,
            navId: "test-skus",
            "aria-label": d.intl.string(d.t.ogxXGq),
            onClose: s.Z_,
            children: e.map((e) =>
                (0, i.jsx)(
                    a.Drp,
                    {
                        id: `${e.id}`,
                        label: e.name,
                        action: () => {
                            t?.(e);
                        },
                    },
                    `${e.id}`,
                ),
            ),
        });
    };
    handleContextMenu = (e) => {
        e.stopPropagation(), s.jA(e, this.renderContextMenu);
    };
    handleClick = () => {
        let { onSKUSelect: e, primarySKU: t } = this.props;
        null != t && e?.(t);
    };
    render() {
        let { skus: e, children: t, applicationId: n, primarySKU: l, onSKUSelect: r, ...a } = this.props;
        return (0, i.jsx)(o.A, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...a,
            children: t,
        });
    }
}
let T = r.Ay.connectStores([_.A, c.A], (e) => {
    let { applicationId: t } = e,
        n = (0, E.VH)(t, c.A, _.A);
    return {
        skus: (_.A.getForApplication(t) ?? []).sort((e, t) =>
            null != n && e.id === n.id ? -1 : null != n && t.id === n.id ? 1 : e.name >= t.name ? -1 : 1,
        ),
        primarySKU: n,
    };
})(A);
