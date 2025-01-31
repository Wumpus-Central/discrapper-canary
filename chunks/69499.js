n.d(t, {
    E: () => I,
    Z: () => N
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(585237),
    c = n(812206),
    u = n(55563),
    E = n(73346),
    d = n(388032);
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
let I = {
    DropdownSizes: o.Z.DropdownSizes,
    Sizes: o.Z.Sizes,
    Colors: o.Z.Colors,
    Looks: o.Z.Looks
};
class T extends l.PureComponent {
    render() {
        let { skus: e, children: t, applicationId: n, primarySKU: l, onSKUSelect: r, ...a } = this.props;
        return (0, i.jsx)(o.Z, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...a,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'renderContextMenu', () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, i.jsx)(a.v2r, {
                    onSelect: n,
                    navId: 'test-skus',
                    'aria-label': d.intl.string(d.t.ogxXGh),
                    onClose: s.Zy,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            a.sNh,
                            {
                                id: ''.concat(e.id),
                                label: e.name,
                                action: () => {
                                    null == t || t(e);
                                }
                            },
                            ''.concat(e.id)
                        )
                    )
                });
            }),
            _(this, 'handleContextMenu', (e) => {
                e.stopPropagation(), s.vq(e, this.renderContextMenu);
            }),
            _(this, 'handleClick', () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
let N = r.ZP.connectStores([u.Z, c.Z], (e) => {
    var t;
    let { applicationId: n } = e,
        i = (0, E.uF)(n, c.Z, u.Z);
    return {
        skus: (null !== (t = u.Z.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => (null != i && e.id === i.id ? -1 : null != i && t.id === i.id ? 1 : e.name >= t.name ? -1 : 1)),
        primarySKU: i
    };
})(T);
