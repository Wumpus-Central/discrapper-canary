n.d(t, {
    Q: function () {
        return m;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(33122),
    o = n(761705),
    s = n(9807),
    c = n(843445),
    d = n(981631),
    u = n(388032);
function m(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let p = (e) => {
    let { index: t, items: n, ...a } = e,
        r = n[t],
        l = 0,
        s = [];
    for (let e of n)
        if (e.type === d.s9s.IMG) {
            let { width: t, height: n, src: i } = e;
            e === r && (l = s.length),
                s.push({
                    src: m(i),
                    width: t,
                    height: n
                });
        }
    return (0, i.jsx)(o.Z, {
        ...a,
        items: s,
        startWith: l
    });
};
class h extends a.Component {
    render() {
        let { pageSize: e, ...t } = this.props,
            n = e === c.b.SMALL ? s.Z : l.Z;
        return (0, i.jsx)(n, {
            ...t,
            onCurrentItemClick: this.handleCurrentItemClick
        });
    }
    constructor(...e) {
        var t, n, a;
        super(...e),
            (t = this),
            (n = 'handleCurrentItemClick'),
            (a = (e, t) => {
                e.type === d.s9s.IMG &&
                    !(0, r.hasAnyModalOpen)() &&
                    (0, r.openModal)((e) =>
                        (0, i.jsx)(r.ModalRoot, {
                            size: r.ModalSize.DYNAMIC,
                            'aria-label': u.intl.string(u.t.X4IxWF),
                            ...e,
                            children: (0, i.jsx)(p, {
                                ...e,
                                index: t,
                                items: this.props.items
                            })
                        })
                    );
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = a);
    }
}
t.Z = h;
