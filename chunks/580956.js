"use strict";
r.d(t, { A: () => p });
var n = r(299146),
    a = r(1139),
    s = r(527758),
    i = r(47312);
r(655972);
var o = r(64700),
    l = r(167782);
function u(e, t) {
    var r = Object.create(null);
    return (
        e &&
            o.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                r[e.key] = t && (0, o.isValidElement)(e) ? t(e) : e;
            }),
        r
    );
}
function c(e, t, r) {
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
                a = n.handleExited.bind((0, s.A)(n));
            return (n.state = { contextValue: { isMounting: !0 }, handleExited: a, firstRender: !0 }), n;
        }
        (0, i.A)(t, e);
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
                    a = t.children,
                    s = t.handleExited;
                return {
                    children: t.firstRender
                        ? u(e.children, function (t) {
                              return (0, o.cloneElement)(t, {
                                  onExited: s.bind(null, t),
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
                                      a = Object.create(null),
                                      s = [];
                                  for (var i in e) i in t ? s.length && ((a[i] = s), (s = [])) : s.push(i);
                                  var o = {};
                                  for (var l in t) {
                                      if (a[l])
                                          for (n = 0; n < a[l].length; n++) {
                                              var u = a[l][n];
                                              o[a[l][n]] = r(u);
                                          }
                                      o[l] = r(l);
                                  }
                                  for (n = 0; n < s.length; n++) o[s[n]] = r(s[n]);
                                  return o;
                              })(a, (r = u(e.children)))),
                          ).forEach(function (t) {
                              var i = n[t];
                              if ((0, o.isValidElement)(i)) {
                                  var l = t in a,
                                      u = t in r,
                                      d = a[t],
                                      f = (0, o.isValidElement)(d) && !d.props.in;
                                  u && (!l || f)
                                      ? (n[t] = (0, o.cloneElement)(i, {
                                            onExited: s.bind(null, i),
                                            in: !0,
                                            exit: c(i, "exit", e),
                                            enter: c(i, "enter", e),
                                        }))
                                      : u || !l || f
                                        ? u &&
                                          l &&
                                          (0, o.isValidElement)(d) &&
                                          (n[t] = (0, o.cloneElement)(i, {
                                              onExited: s.bind(null, i),
                                              in: d.props.in,
                                              exit: c(i, "exit", e),
                                              enter: c(i, "enter", e),
                                          }))
                                        : (n[t] = (0, o.cloneElement)(i, { in: !1 }));
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
                            var r = (0, a.A)({}, t.children);
                            return delete r[e.key], { children: r };
                        }));
            }),
            (r.render = function () {
                var e = this.props,
                    t = e.component,
                    r = e.childFactory,
                    a = (0, n.A)(e, ["component", "childFactory"]),
                    s = this.state.contextValue,
                    i = d(this.state.children).map(r);
                return (delete a.appear, delete a.enter, delete a.exit, null === t)
                    ? o.createElement(l.A.Provider, { value: s }, i)
                    : o.createElement(l.A.Provider, { value: s }, o.createElement(t, a, i));
            }),
            t
        );
    })(o.Component);
(f.propTypes = {}),
    (f.defaultProps = {
        component: "div",
        childFactory: function (e) {
            return e;
        },
    });
let p = f;
