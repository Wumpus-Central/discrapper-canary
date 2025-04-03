n.d(t, {
    Q: () => f,
    Z: () => x
}),
    n(301563),
    n(653041),
    n(47120);
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(33122),
    o = n(761705),
    s = n(9807),
    c = n(843445),
    d = n(981631),
    u = n(388032);
function p(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function f(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let _ = (e) => {
    var { index: t, items: n } = e,
        a = g(e, ['index', 'items']);
    let i = n[t],
        l = 0,
        s = [];
    for (let e of n)
        if (e.type === d.s9s.IMG) {
            let { width: t, height: n, src: r } = e;
            e === i && (l = s.length),
                s.push({
                    src: f(r),
                    width: t,
                    height: n
                });
        }
    return (0, r.jsx)(
        o.Z,
        h(m({}, a), {
            items: s,
            startWith: l
        })
    );
};
class b extends a.Component {
    render() {
        let e = this.props,
            { pageSize: t } = e,
            n = g(e, ['pageSize']),
            a = t === c.b.SMALL ? s.Z : l.Z;
        return (0, r.jsx)(a, h(m({}, n), { onCurrentItemClick: this.handleCurrentItemClick }));
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleCurrentItemClick', (e, t) => {
                e.type !== d.s9s.IMG ||
                    (0, i.$sL)() ||
                    (0, i.h7j)((e) =>
                        (0, r.jsx)(
                            i.Y0X,
                            h(
                                m(
                                    {
                                        size: i.CgR.DYNAMIC,
                                        'aria-label': u.NW.string(u.t.X4IxWF)
                                    },
                                    e
                                ),
                                {
                                    children: (0, r.jsx)(
                                        _,
                                        h(m({}, e), {
                                            index: t,
                                            items: this.props.items
                                        })
                                    )
                                }
                            )
                        )
                    );
            });
    }
}
let x = b;
