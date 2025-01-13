n.d(t, {
    E: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(585237),
    c = n(812206),
    d = n(55563),
    u = n(73346),
    m = n(388032);
function h(e, t, n) {
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
let f = {
    DropdownSizes: s.Z.DropdownSizes,
    Sizes: s.Z.Sizes,
    Colors: s.Z.Colors,
    Looks: s.Z.Looks
};
class p extends r.PureComponent {
    render() {
        let { skus: e, children: t, applicationId: n, primarySKU: r, onSKUSelect: l, ...a } = this.props;
        return (0, i.jsx)(s.Z, {
            onClick: this.handleClick,
            onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
            onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
            ...a,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'renderContextMenu', () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, i.jsx)(a.Menu, {
                    onSelect: n,
                    navId: 'test-skus',
                    'aria-label': m.intl.string(m.t.ogxXGh),
                    onClose: o.Zy,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            a.MenuItem,
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
            h(this, 'handleContextMenu', (e) => {
                e.stopPropagation(), o.vq(e, this.renderContextMenu);
            }),
            h(this, 'handleClick', () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
t.Z = l.ZP.connectStores([d.Z, c.Z], (e) => {
    var t;
    let { applicationId: n } = e,
        i = (0, u.uF)(n, c.Z, d.Z);
    return {
        skus: (null !== (t = d.Z.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => (null != i && e.id === i.id ? -1 : null != i && t.id === i.id ? 1 : e.name >= t.name ? -1 : 1)),
        primarySKU: i
    };
})(p);
