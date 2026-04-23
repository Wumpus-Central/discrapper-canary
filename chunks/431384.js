"use strict";
r.d(t, { A: () => A });
var a = r(26412),
    n = r(658),
    o = r(527758),
    s = r(552932),
    i = r(865977),
    l = r(761847),
    c = r(416886),
    u = r(25701),
    f = r(1139),
    b = r(64700),
    h = r(223108),
    d = r.n(h),
    p = r(708906),
    m = r(770237),
    g = r(380883),
    y = r(257341);
function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? v(Object(r), !0).forEach(function (t) {
                  (0, c.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function M(e) {
    return { expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level) };
}
var A = (function (e) {
    (0, s.A)(h, e);
    var t,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = (0, l.A)(h);
                return (
                    (e = t ? Reflect.construct(r, arguments, (0, l.A)(this).constructor) : r.apply(this, arguments)),
                    (0, i.A)(this, e)
                );
            });
    function h(e) {
        var t;
        return (
            (0, a.A)(this, h),
            (t = r.call(this, e)),
            (0, c.A)((0, o.A)(t), "handleClick", function () {
                t.props.expandable && t.setState({ expanded: !t.state.expanded });
            }),
            (t.state = M(e)),
            t
        );
    }
    return (
        (0, n.A)(h, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = M(e);
                    M(this.props).expanded !== t.expanded && this.setState(t);
                },
            },
            {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                    var r = this;
                    return (
                        !!Object.keys(e).find(function (t) {
                            return (
                                "circularCache" !== t &&
                                ("keyPath" === t ? e[t].join("/") !== r.props[t].join("/") : e[t] !== r.props[t])
                            );
                        }) || t.expanded !== this.state.expanded
                    );
                },
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.getItemString,
                        r = e.nodeTypeIndicator,
                        a = e.nodeType,
                        n = e.data,
                        o = e.hideRoot,
                        s = e.createItemString,
                        i = e.styling,
                        l = e.collectionLimit,
                        c = e.keyPath,
                        h = e.labelRenderer,
                        d = e.expandable,
                        v = this.state.expanded,
                        M =
                            v || (o && 0 === this.props.level)
                                ? (function e(t, r, a) {
                                      var n = t.nodeType,
                                          o = t.data,
                                          s = t.collectionLimit,
                                          i = t.circularCache,
                                          l = t.keyPath,
                                          c = t.postprocessValue,
                                          h = t.sortObjectKeys,
                                          d = [];
                                      return (
                                          (0, m.A)(n, o, h, s, r, a).forEach(function (r) {
                                              if (void 0 !== r.to)
                                                  d.push(
                                                      b.createElement(
                                                          y.A,
                                                          (0, f.A)({}, t, {
                                                              key: "ItemRange--".concat(r.from, "-").concat(r.to),
                                                              from: r.from,
                                                              to: r.to,
                                                              renderChildNodes: e,
                                                          }),
                                                      ),
                                                  );
                                              else {
                                                  var a = r.key,
                                                      n = r.value,
                                                      o = -1 !== i.indexOf(n);
                                                  d.push(
                                                      b.createElement(
                                                          g.A,
                                                          (0, f.A)({}, t, {
                                                              postprocessValue: c,
                                                              collectionLimit: s,
                                                              key: "Node--".concat(a),
                                                              keyPath: [a].concat((0, u.A)(l)),
                                                              value: c(n),
                                                              circularCache: [].concat((0, u.A)(i), [n]),
                                                              isCircular: o,
                                                              hideRoot: !1,
                                                          }),
                                                      ),
                                                  );
                                              }
                                          }),
                                          d
                                      );
                                  })(w(w({}, this.props), {}, { level: this.props.level + 1 }))
                                : null,
                        A = t(a, n, b.createElement("span", i("nestedNodeItemType", v), r), s(n, l), c),
                        O = [c, a, v, d];
                    return o
                        ? b.createElement(
                              "li",
                              i.apply(void 0, ["rootNode"].concat(O)),
                              b.createElement("ul", i.apply(void 0, ["rootNodeChildren"].concat(O)), M),
                          )
                        : b.createElement(
                              "li",
                              i.apply(void 0, ["nestedNode"].concat(O)),
                              d &&
                                  b.createElement(p.A, {
                                      styling: i,
                                      nodeType: a,
                                      expanded: v,
                                      onClick: this.handleClick,
                                  }),
                              b.createElement(
                                  "label",
                                  (0, f.A)({}, i.apply(void 0, [["label", "nestedNodeLabel"]].concat(O)), {
                                      onClick: this.handleClick,
                                  }),
                                  h.apply(void 0, O),
                              ),
                              b.createElement(
                                  "span",
                                  (0, f.A)({}, i.apply(void 0, ["nestedNodeItemString"].concat(O)), {
                                      onClick: this.handleClick,
                                  }),
                                  A,
                              ),
                              b.createElement("ul", i.apply(void 0, ["nestedNodeChildren"].concat(O)), M),
                          );
                },
            },
        ]),
        h
    );
})(b.Component);
(0, c.A)(A, "propTypes", {
    getItemString: d().func.isRequired,
    nodeTypeIndicator: d().any,
    nodeType: d().string.isRequired,
    data: d().any,
    hideRoot: d().bool.isRequired,
    createItemString: d().func.isRequired,
    styling: d().func.isRequired,
    collectionLimit: d().number,
    keyPath: d().arrayOf(d().oneOfType([d().string, d().number])).isRequired,
    labelRenderer: d().func.isRequired,
    shouldExpandNode: d().func,
    level: d().number.isRequired,
    sortObjectKeys: d().oneOfType([d().func, d().bool]),
    isCircular: d().bool,
    expandable: d().bool,
}),
    (0, c.A)(A, "defaultProps", { data: [], circularCache: [], level: 0, expandable: !0 });
