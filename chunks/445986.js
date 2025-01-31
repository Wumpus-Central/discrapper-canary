n.d(t, {
    Q: () => m,
    Z: () => g
}),
    n(653041),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(33122),
    s = n(761705),
    o = n(9807),
    c = n(843445),
    d = n(981631),
    u = n(388032);
function m(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let h = (e) => {
    let { index: t, items: n, ...a } = e,
        r = n[t],
        l = 0,
        o = [];
    for (let e of n)
        if (e.type === d.s9s.IMG) {
            let { width: t, height: n, src: i } = e;
            e === r && (l = o.length),
                o.push({
                    src: m(i),
                    width: t,
                    height: n
                });
        }
    return (0, i.jsx)(s.Z, {
        ...a,
        items: o,
        startWith: l
    });
};
class p extends a.Component {
    render() {
        let { pageSize: e, ...t } = this.props,
            n = e === c.b.SMALL ? o.Z : l.Z;
        return (0, i.jsx)(n, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleCurrentItemClick'),
            (n = (e, t) => {
                e.type !== d.s9s.IMG ||
                    (0, r.$sL)() ||
                    (0, r.h7j)((e) =>
                        (0, i.jsx)(r.Y0X, {
                            size: r.CgR.DYNAMIC,
                            'aria-label': u.intl.string(u.t.X4IxWF),
                            ...e,
                            children: (0, i.jsx)(h, {
                                ...e,
                                index: t,
                                items: this.props.items
                            })
                        })
                    );
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let g = p;
