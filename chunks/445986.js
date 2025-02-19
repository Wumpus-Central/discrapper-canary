n.d(t, {
    Q: () => f,
    Z: () => b
}),
    n(301563),
    n(653041),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
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
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e) {
    return ''.concat(e.split('?')[0], '?size=').concat(2048);
}
let _ = (e) => {
    var { index: t, items: n } = e,
        i = g(e, ['index', 'items']);
    let a = n[t],
        l = 0,
        s = [];
    for (let e of n)
        if (e.type === d.s9s.IMG) {
            let { width: t, height: n, src: r } = e;
            e === a && (l = s.length),
                s.push({
                    src: f(r),
                    width: t,
                    height: n
                });
        }
    return (0, r.jsx)(
        o.Z,
        h(m({}, i), {
            items: s,
            startWith: l
        })
    );
};
class v extends i.Component {
    render() {
        let e = this.props,
            { pageSize: t } = e,
            n = g(e, ['pageSize']),
            i = t === c.b.SMALL ? s.Z : l.Z;
        return (0, r.jsx)(i, h(m({}, n), { onCurrentItemClick: this.handleCurrentItemClick }));
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleCurrentItemClick', (e, t) => {
                e.type !== d.s9s.IMG ||
                    (0, a.$sL)() ||
                    (0, a.h7j)((e) =>
                        (0, r.jsx)(
                            a.Y0X,
                            h(
                                m(
                                    {
                                        size: a.CgR.DYNAMIC,
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
let b = v;
