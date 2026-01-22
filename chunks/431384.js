r.d(t, {
    A: () => O,
});
var a = r(26412),
    n = r(658),
    s = r(527758),
    o = r(552932),
    i = r(865977),
    c = r(761847),
    l = r(416886),
    u = r(25701),
    b = r(1139),
    f = r(64700),
    d = r(223108),
    h = r.n(d),
    p = r(708906),
    y = r(770237),
    g = r(380883),
    v = r(257341);

function m(e, t) {
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

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? m(Object(r), !0).forEach(function (t) {
                  (0, l.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}

function w(e) {
    return {
        expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level),
    };
}
var O = (function (e) {
    (0, o.A)(d, e);
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
                    r = (0, c.A)(d);
                return (
                    (e = t ? Reflect.construct(r, arguments, (0, c.A)(this).constructor) : r.apply(this, arguments)),
                    (0, i.A)(this, e)
                );
            });

    function d(e) {
        var t;
        return (
            (0, a.A)(this, d),
            (t = r.call(this, e)),
            (0, l.A)((0, s.A)(t), "handleClick", function () {
                t.props.expandable &&
                    t.setState({
                        expanded: !t.state.expanded,
                    });
            }),
            (t.state = w(e)),
            t
        );
    }
    return (
        (0, n.A)(d, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = w(e);
                    w(this.props).expanded !== t.expanded && this.setState(t);
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
                        s = e.hideRoot,
                        o = e.createItemString,
                        i = e.styling,
                        c = e.collectionLimit,
                        l = e.keyPath,
                        d = e.labelRenderer,
                        h = e.expandable,
                        m = this.state.expanded,
                        w =
                            m || (s && 0 === this.props.level)
                                ? (function e(t, r, a) {
                                      var n = t.nodeType,
                                          s = t.data,
                                          o = t.collectionLimit,
                                          i = t.circularCache,
                                          c = t.keyPath,
                                          l = t.postprocessValue,
                                          d = t.sortObjectKeys,
                                          h = [];
                                      return (
                                          (0, y.A)(n, s, d, o, r, a).forEach(function (r) {
                                              if (void 0 !== r.to)
                                                  h.push(
                                                      f.createElement(
                                                          v.A,
                                                          (0, b.A)({}, t, {
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
                                                      s = -1 !== i.indexOf(n);
                                                  h.push(
                                                      f.createElement(
                                                          g.A,
                                                          (0, b.A)({}, t, {
                                                              postprocessValue: l,
                                                              collectionLimit: o,
                                                              key: "Node--".concat(a),
                                                              keyPath: [a].concat((0, u.A)(c)),
                                                              value: l(n),
                                                              circularCache: [].concat((0, u.A)(i), [n]),
                                                              isCircular: s,
                                                              hideRoot: !1,
                                                          }),
                                                      ),
                                                  );
                                              }
                                          }),
                                          h
                                      );
                                  })(
                                      A(
                                          A({}, this.props),
                                          {},
                                          {
                                              level: this.props.level + 1,
                                          },
                                      ),
                                  )
                                : null,
                        O = t(a, n, f.createElement("span", i("nestedNodeItemType", m), r), o(n, c), l),
                        k = [l, a, m, h];
                    return s
                        ? f.createElement(
                              "li",
                              i.apply(void 0, ["rootNode"].concat(k)),
                              f.createElement("ul", i.apply(void 0, ["rootNodeChildren"].concat(k)), w),
                          )
                        : f.createElement(
                              "li",
                              i.apply(void 0, ["nestedNode"].concat(k)),
                              h &&
                                  f.createElement(p.A, {
                                      styling: i,
                                      nodeType: a,
                                      expanded: m,
                                      onClick: this.handleClick,
                                  }),
                              f.createElement(
                                  "label",
                                  (0, b.A)({}, i.apply(void 0, [["label", "nestedNodeLabel"]].concat(k)), {
                                      onClick: this.handleClick,
                                  }),
                                  d.apply(void 0, k),
                              ),
                              f.createElement(
                                  "span",
                                  (0, b.A)({}, i.apply(void 0, ["nestedNodeItemString"].concat(k)), {
                                      onClick: this.handleClick,
                                  }),
                                  O,
                              ),
                              f.createElement("ul", i.apply(void 0, ["nestedNodeChildren"].concat(k)), w),
                          );
                },
            },
        ]),
        d
    );
})(f.Component);
(0, l.A)(O, "propTypes", {
    getItemString: h().func.isRequired,
    nodeTypeIndicator: h().any,
    nodeType: h().string.isRequired,
    data: h().any,
    hideRoot: h().bool.isRequired,
    createItemString: h().func.isRequired,
    styling: h().func.isRequired,
    collectionLimit: h().number,
    keyPath: h().arrayOf(h().oneOfType([h().string, h().number])).isRequired,
    labelRenderer: h().func.isRequired,
    shouldExpandNode: h().func,
    level: h().number.isRequired,
    sortObjectKeys: h().oneOfType([h().func, h().bool]),
    isCircular: h().bool,
    expandable: h().bool,
}),
    (0, l.A)(O, "defaultProps", {
        data: [],
        circularCache: [],
        level: 0,
        expandable: !0,
    });
