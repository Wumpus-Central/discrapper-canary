"use strict";
r.d(t, { A: () => p });
var n = r(299146),
    i = r(1139),
    o = r(527758),
    a = r(47312);
r(655972);
var s = r(582128),
    u = r(109610);
function c(e, t) {
    var r = Object.create(null);
    return (
        e &&
            s.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                r[e.key] = t && (0, s.isValidElement)(e) ? t(e) : e;
            }),
        r
    );
}
function l(e, t, r) {
    return null != r[t] ? r[t] : e.props[t];
}
var d =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    f = (function (e) {
        function t(t, r) {
            var n = e.call(this, t, r) || this,
                i = n.handleExited.bind((0, o.A)(n));
            return (n.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), n;
        }
        (0, a.A)(t, e);
        var r = t.prototype;
        return (
            (r.componentDidMount = function () {
                (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (r.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
                var r,
                    n,
                    i = t.children,
                    o = t.handleExited;
                return {
                    children: t.firstRender
                        ? c(e.children, function (t) {
                              return (0, s.cloneElement)(t, {
                                  onExited: o.bind(null, t),
                                  in: !0,
                                  appear: l(t, "appear", e),
                                  enter: l(t, "enter", e),
                                  exit: l(t, "exit", e),
                              });
                          })
                        : (Object.keys(
                              (n = (function (e, t) {
                                  function r(r) {
                                      return r in t ? t[r] : e[r];
                                  }
                                  (e = e || {}), (t = t || {});
                                  var n,
                                      i = Object.create(null),
                                      o = [];
                                  for (var a in e) a in t ? o.length && ((i[a] = o), (o = [])) : o.push(a);
                                  var s = {};
                                  for (var u in t) {
                                      if (i[u])
                                          for (n = 0; n < i[u].length; n++) {
                                              var c = i[u][n];
                                              s[i[u][n]] = r(c);
                                          }
                                      s[u] = r(u);
                                  }
                                  for (n = 0; n < o.length; n++) s[o[n]] = r(o[n]);
                                  return s;
                              })(i, (r = c(e.children)))),
                          ).forEach(function (t) {
                              var a = n[t];
                              if ((0, s.isValidElement)(a)) {
                                  var u = t in i,
                                      c = t in r,
                                      d = i[t],
                                      f = (0, s.isValidElement)(d) && !d.props.in;
                                  c && (!u || f)
                                      ? (n[t] = (0, s.cloneElement)(a, {
                                            onExited: o.bind(null, a),
                                            in: !0,
                                            exit: l(a, "exit", e),
                                            enter: l(a, "enter", e),
                                        }))
                                      : c || !u || f
                                        ? c &&
                                          u &&
                                          (0, s.isValidElement)(d) &&
                                          (n[t] = (0, s.cloneElement)(a, {
                                              onExited: o.bind(null, a),
                                              in: d.props.in,
                                              exit: l(a, "exit", e),
                                              enter: l(a, "enter", e),
                                          }))
                                        : (n[t] = (0, s.cloneElement)(a, { in: !1 }));
                              }
                          }),
                          n),
                    firstRender: !1,
                };
            }),
            (r.handleExited = function (e, t) {
                var r = c(this.props.children);
                e.key in r ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var r = (0, i.A)({}, t.children);
                            return delete r[e.key], { children: r };
                        }));
            }),
            (r.render = function () {
                var e = this.props,
                    t = e.component,
                    r = e.childFactory,
                    i = (0, n.A)(e, ["component", "childFactory"]),
                    o = this.state.contextValue,
                    a = d(this.state.children).map(r);
                return (delete i.appear, delete i.enter, delete i.exit, null === t)
                    ? s.createElement(u.A.Provider, { value: o }, a)
                    : s.createElement(u.A.Provider, { value: o }, s.createElement(t, i, a));
            }),
            t
        );
    })(s.Component);
(f.propTypes = {}),
    (f.defaultProps = {
        component: "div",
        childFactory: function (e) {
            return e;
        },
    });
let p = f;
