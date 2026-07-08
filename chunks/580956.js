"use strict";
r.d(t, { A: () => p });
var n = r(299146),
    i = r(1139),
    o = r(527758),
    a = r(47312);
r(655972);
var s = r(64700),
    l = r(167782);
function u(e, t) {
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
function c(e, t, r) {
    return null != r[t] ? r[t] : e.props[t];
}
var f =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    d = (function (e) {
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
                        ? u(e.children, function (t) {
                              return (0, s.cloneElement)(t, {
                                  onExited: o.bind(null, t),
                                  in: !0,
                                  appear: c(t, "appear", e),
                                  enter: c(t, "enter", e),
                                  exit: c(t, "exit", e),
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
                                  for (var l in t) {
                                      if (i[l])
                                          for (n = 0; n < i[l].length; n++) {
                                              var u = i[l][n];
                                              s[i[l][n]] = r(u);
                                          }
                                      s[l] = r(l);
                                  }
                                  for (n = 0; n < o.length; n++) s[o[n]] = r(o[n]);
                                  return s;
                              })(i, (r = u(e.children)))),
                          ).forEach(function (t) {
                              var a = n[t];
                              if ((0, s.isValidElement)(a)) {
                                  var l = t in i,
                                      u = t in r,
                                      f = i[t],
                                      d = (0, s.isValidElement)(f) && !f.props.in;
                                  u && (!l || d)
                                      ? (n[t] = (0, s.cloneElement)(a, {
                                            onExited: o.bind(null, a),
                                            in: !0,
                                            exit: c(a, "exit", e),
                                            enter: c(a, "enter", e),
                                        }))
                                      : u || !l || d
                                        ? u &&
                                          l &&
                                          (0, s.isValidElement)(f) &&
                                          (n[t] = (0, s.cloneElement)(a, {
                                              onExited: o.bind(null, a),
                                              in: f.props.in,
                                              exit: c(a, "exit", e),
                                              enter: c(a, "enter", e),
                                          }))
                                        : (n[t] = (0, s.cloneElement)(a, { in: !1 }));
                              }
                          }),
                          n),
                    firstRender: !1,
                };
            }),
            (r.handleExited = function (e, t) {
                var r = u(this.props.children);
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
                    a = f(this.state.children).map(r);
                return (delete i.appear, delete i.enter, delete i.exit, null === t)
                    ? s.createElement(l.A.Provider, { value: o }, a)
                    : s.createElement(l.A.Provider, { value: o }, s.createElement(t, i, a));
            }),
            t
        );
    })(s.Component);
(d.propTypes = {}),
    (d.defaultProps = {
        component: "div",
        childFactory: function (e) {
            return e;
        },
    });
let p = d;
