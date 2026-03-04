"use strict";
n.d(t, { A: () => T, p: () => A });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(442433),
    o = n(543594),
    E = n(587895),
    c = n(67480),
    _ = n(371794),
    d = n(985018);
let A = { DropdownSizes: o.A.DropdownSizes, Sizes: o.A.Sizes, Colors: o.A.Colors, Looks: o.A.Looks };
class u extends r.PureComponent {
    renderContextMenu = () => {
        let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
        return (0, i.jsx)(s.W1t, {
            "data-menu-migrated": !0,
            onSelect: n,
            navId: "test-skus",
            "aria-label": d.intl.string(d.t.ogxXGq),
            onClose: a.Z_,
            children: e.map((e) =>
                (0, i.jsx)(
                    s.Drp,
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
        e.stopPropagation(), a.jA(e, this.renderContextMenu);
    };
    handleClick = () => {
        let { onSKUSelect: e, primarySKU: t } = this.props;
        null != t && e?.(t);
    };
    render() {
        let { skus: e, children: t, applicationId: n, primarySKU: r, onSKUSelect: l, ...s } = this.props;
        return (0, i.jsx)(o.A, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...s,
            children: t,
        });
    }
}
let T = l.Ay.connectStores([c.A, E.A], (e) => {
    let { applicationId: t } = e,
        n = (0, _.VH)(t, E.A, c.A);
    return {
        skus: (c.A.getForApplication(t) ?? []).sort((e, t) =>
            null != n && e.id === n.id ? -1 : null != n && t.id === n.id ? 1 : e.name >= t.name ? -1 : 1,
        ),
        primarySKU: n,
    };
})(u);
