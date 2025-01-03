n.d(t, {
    Q: function () {
        return c;
    }
}),
    n(653041),
    n(47120);
var s = n(200651),
    i = n(192379),
    a = n(481060),
    r = n(33122),
    l = n(761705),
    o = n(9807),
    d = n(843445),
    h = n(981631),
    u = n(388032);
function c(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let m = (e) => {
    let { index: t, items: n, ...i } = e,
        a = n[t],
        r = 0,
        o = [];
    for (let e of n)
        if (e.type === h.s9s.IMG) {
            let { width: t, height: n, src: s } = e;
            e === a && (r = o.length),
                o.push({
                    src: c(s),
                    width: t,
                    height: n
                });
        }
    return (0, s.jsx)(l.Z, {
        ...i,
        items: o,
        startWith: r
    });
};
class p extends i.Component {
    render() {
        let { pageSize: e, ...t } = this.props,
            n = e === d.b.SMALL ? o.Z : r.Z;
        return (0, s.jsx)(n, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleCurrentItemClick'),
            (i = (e, t) => {
                e.type === h.s9s.IMG &&
                    !(0, a.hasAnyModalOpen)() &&
                    (0, a.openModal)((e) =>
                        (0, s.jsx)(a.ModalRoot, {
                            size: a.ModalSize.DYNAMIC,
                            'aria-label': u.intl.string(u.t.X4IxWF),
                            ...e,
                            children: (0, s.jsx)(m, {
                                ...e,
                                index: t,
                                items: this.props.items
                            })
                        })
                    );
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = p;
