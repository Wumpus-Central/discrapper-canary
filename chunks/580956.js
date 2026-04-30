"use strict";
r.d(t, { A: () => p });
var n = r(299146),
    s = r(1139),
    a = r(527758),
    o = r(47312);
r(655972);
var i = r(64700),
    u = r(167782);
function c(e, t) {
    var r = Object.create(null);
    return (
        e &&
            i.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                r[e.key] = t && (0, i.isValidElement)(e) ? t(e) : e;
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
                s = n.handleExited.bind((0, a.A)(n));
            return (n.state = { contextValue: { isMounting: !0 }, handleExited: s, firstRender: !0 }), n;
        }
        (0, o.A)(t, e);
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
                    s = t.children,
                    a = t.handleExited;
                return {
                    children: t.firstRender
                        ? c(e.children, function (t) {
                              return (0, i.cloneElement)(t, {
                                  onExited: a.bind(null, t),
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
                                      s = Object.create(null),
                                      a = [];
                                  for (var o in e) o in t ? a.length && ((s[o] = a), (a = [])) : a.push(o);
                                  var i = {};
                                  for (var u in t) {
                                      if (s[u])
                                          for (n = 0; n < s[u].length; n++) {
                                              var c = s[u][n];
                                              i[s[u][n]] = r(c);
                                          }
                                      i[u] = r(u);
                                  }
                                  for (n = 0; n < a.length; n++) i[a[n]] = r(a[n]);
                                  return i;
                              })(s, (r = c(e.children)))),
                          ).forEach(function (t) {
                              var o = n[t];
                              if ((0, i.isValidElement)(o)) {
                                  var u = t in s,
                                      c = t in r,
                                      d = s[t],
                                      f = (0, i.isValidElement)(d) && !d.props.in;
                                  c && (!u || f)
                                      ? (n[t] = (0, i.cloneElement)(o, {
                                            onExited: a.bind(null, o),
                                            in: !0,
                                            exit: l(o, "exit", e),
                                            enter: l(o, "enter", e),
                                        }))
                                      : c || !u || f
                                        ? c &&
                                          u &&
                                          (0, i.isValidElement)(d) &&
                                          (n[t] = (0, i.cloneElement)(o, {
                                              onExited: a.bind(null, o),
                                              in: d.props.in,
                                              exit: l(o, "exit", e),
                                              enter: l(o, "enter", e),
                                          }))
                                        : (n[t] = (0, i.cloneElement)(o, { in: !1 }));
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
                            var r = (0, s.A)({}, t.children);
                            return delete r[e.key], { children: r };
                        }));
            }),
            (r.render = function () {
                var e = this.props,
                    t = e.component,
                    r = e.childFactory,
                    s = (0, n.A)(e, ["component", "childFactory"]),
                    a = this.state.contextValue,
                    o = d(this.state.children).map(r);
                return (delete s.appear, delete s.enter, delete s.exit, null === t)
                    ? i.createElement(u.A.Provider, { value: a }, o)
                    : i.createElement(u.A.Provider, { value: a }, i.createElement(t, s, o));
            }),
            t
        );
    })(i.Component);
(f.propTypes = {}),
    (f.defaultProps = {
        component: "div",
        childFactory: function (e) {
            return e;
        },
    });
let p = f;
