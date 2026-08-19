"use strict";
n.d(t, { A: () => h });
var r = n(299146),
    i = n(1139),
    a = n(527758),
    o = n(47312);
n(655972);
var s = n(582128),
    u = n(109610);
function c(e, t) {
    var n = Object.create(null);
    return (
        e &&
            s.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                n[e.key] = t && (0, s.isValidElement)(e) ? t(e) : e;
            }),
        n
    );
}
function l(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
var d =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    f = (function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this,
                i = r.handleExited.bind((0, a.A)(r));
            return (r.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), r;
        }
        (0, o.A)(t, e);
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
                var n,
                    r,
                    i = t.children,
                    a = t.handleExited;
                return {
                    children: t.firstRender
                        ? c(e.children, function (t) {
                              return (0, s.cloneElement)(t, {
                                  onExited: a.bind(null, t),
                                  in: !0,
                                  appear: l(t, "appear", e),
                                  enter: l(t, "enter", e),
                                  exit: l(t, "exit", e),
                              });
                          })
                        : (Object.keys(
                              (r = (function (e, t) {
                                  function n(n) {
                                      return n in t ? t[n] : e[n];
                                  }
                                  (e = e || {}), (t = t || {});
                                  var r,
                                      i = Object.create(null),
                                      a = [];
                                  for (var o in e) o in t ? a.length && ((i[o] = a), (a = [])) : a.push(o);
                                  var s = {};
                                  for (var u in t) {
                                      if (i[u])
                                          for (r = 0; r < i[u].length; r++) {
                                              var c = i[u][r];
                                              s[i[u][r]] = n(c);
                                          }
                                      s[u] = n(u);
                                  }
                                  for (r = 0; r < a.length; r++) s[a[r]] = n(a[r]);
                                  return s;
                              })(i, (n = c(e.children)))),
                          ).forEach(function (t) {
                              var o = r[t];
                              if ((0, s.isValidElement)(o)) {
                                  var u = t in i,
                                      c = t in n,
                                      d = i[t],
                                      f = (0, s.isValidElement)(d) && !d.props.in;
                                  c && (!u || f)
                                      ? (r[t] = (0, s.cloneElement)(o, {
                                            onExited: a.bind(null, o),
                                            in: !0,
                                            exit: l(o, "exit", e),
                                            enter: l(o, "enter", e),
                                        }))
                                      : c || !u || f
                                        ? c &&
                                          u &&
                                          (0, s.isValidElement)(d) &&
                                          (r[t] = (0, s.cloneElement)(o, {
                                              onExited: a.bind(null, o),
                                              in: d.props.in,
                                              exit: l(o, "exit", e),
                                              enter: l(o, "enter", e),
                                          }))
                                        : (r[t] = (0, s.cloneElement)(o, { in: !1 }));
                              }
                          }),
                          r),
                    firstRender: !1,
                };
            }),
            (n.handleExited = function (e, t) {
                var n = c(this.props.children);
                e.key in n ||
                    (e.props.onExited && e.props.onExited(t),
                    this.mounted &&
                        this.setState(function (t) {
                            var n = (0, i.A)({}, t.children);
                            return delete n[e.key], { children: n };
                        }));
            }),
            (n.render = function () {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    i = (0, r.A)(e, ["component", "childFactory"]),
                    a = this.state.contextValue,
                    o = d(this.state.children).map(n);
                return (delete i.appear, delete i.enter, delete i.exit, null === t)
                    ? s.createElement(u.A.Provider, { value: a }, o)
                    : s.createElement(u.A.Provider, { value: a }, s.createElement(t, i, o));
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
let h = f;
