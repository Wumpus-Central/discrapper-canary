n.d(t, {
    Q: () => g,
    Z: () => v,
}),
    n(35282),
    n(539854),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(33122),
    s = n(761705),
    o = n(9807),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        a,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = {},
                i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++)
            (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function g(e) {
    return "".concat(e.split("?")[0], "?size=").concat(2048);
}
let b = (e) => {
    var { index: t, items: n } = e,
        r = f(e, ["index", "items"]);
    let i = n[t],
        l = 0,
        o = [];
    for (let e of n)
        if (e.type === d.s9s.IMG) {
            let { width: t, height: n, src: a } = e;
            e === i && (l = o.length),
                o.push({
                    src: g(a),
                    width: t,
                    height: n,
                });
        }
    return (0, a.jsx)(
        s.Z,
        h(m({}, r), {
            items: o,
            startWith: l,
        }),
    );
};
class x extends r.Component {
    render() {
        let e = this.props,
            { pageSize: t } = e,
            n = f(e, ["pageSize"]),
            r = t === c.b.SMALL ? o.Z : l.Z;
        return (0, a.jsx)(r, h(m({}, n), { onCurrentItemClick: this.handleCurrentItemClick }));
    }
    constructor(...e) {
        super(...e),
            p(this, "handleCurrentItemClick", (e, t) => {
                e.type !== d.s9s.IMG ||
                    (0, i.$sL)() ||
                    (0, i.h7j)((e) =>
                        (0, a.jsx)(
                            i.Y0X,
                            h(
                                m(
                                    {
                                        size: i.CgR.DYNAMIC,
                                        "aria-label": u.intl.string(u.t.X4IxWL),
                                    },
                                    e,
                                ),
                                {
                                    parentComponent: "ApplicationStoreListingCarousel",
                                    children: (0, a.jsx)(
                                        b,
                                        h(m({}, e), {
                                            index: t,
                                            items: this.props.items,
                                        }),
                                    ),
                                },
                            ),
                        ),
                    );
            });
    }
}
let v = x;
