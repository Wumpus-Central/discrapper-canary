(n.d(t, {
    E: () => h,
    Z: () => p
}),
    n(388685),
    n(642613));
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(239091),
    a = n(585237),
    c = n(812206),
    d = n(55563),
    u = n(73346),
    _ = n(388032);
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
let h = {
    DropdownSizes: a.Z.DropdownSizes,
    Sizes: a.Z.Sizes,
    Colors: a.Z.Colors,
    Looks: a.Z.Looks
};
class I extends r.PureComponent {
    render() {
        var e, t;
        let n = this.props,
            { skus: r, children: l, applicationId: o, primarySKU: s, onSKUSelect: c } = n,
            d = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                }
                return r;
            })(n, ['skus', 'children', 'applicationId', 'primarySKU', 'onSKUSelect']);
        return (0, i.jsx)(
            a.Z,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            E(e, t, n[t]);
                        }));
                }
                return e;
            })(
                {
                    onClick: this.handleClick,
                    onDropdownClick: r.length > 0 ? this.handleContextMenu : null,
                    onContextMenu: r.length > 0 ? this.handleContextMenu : void 0
                },
                d
            )),
            (t = t = { children: l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
    constructor(...e) {
        (super(...e),
            E(this, 'renderContextMenu', () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, i.jsx)(o.v2r, {
                    onSelect: n,
                    navId: 'test-skus',
                    'aria-label': _.intl.string(_.t.ogxXGh),
                    onClose: s.Zy,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            o.sNh,
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
            E(this, 'handleContextMenu', (e) => {
                (e.stopPropagation(), s.vq(e, this.renderContextMenu));
            }),
            E(this, 'handleClick', () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            }));
    }
}
let p = l.ZP.connectStores([d.Z, c.Z], (e) => {
    var t;
    let { applicationId: n } = e,
        i = (0, u.uF)(n, c.Z, d.Z);
    return {
        skus: (null != (t = d.Z.getForApplication(n)) ? t : []).sort((e, t) => (null != i && e.id === i.id ? -1 : null != i && t.id === i.id ? 1 : e.name >= t.name ? -1 : 1)),
        primarySKU: i
    };
})(I);
