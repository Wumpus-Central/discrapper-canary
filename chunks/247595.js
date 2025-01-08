r.d(t, {
    Z: function () {
        return M;
    }
});
var a = r(681996),
    n = r(525207),
    o = r(987609),
    s = r(332133),
    i = r(775310),
    c = r(700717),
    u = r(621028),
    l = r(259775),
    f = r(910974),
    b = r(192379),
    h = r(639519),
    d = r.n(h),
    p = r(656715),
    m = r(705605),
    g = r(422664),
    y = r(457580);
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
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? v(Object(r), !0).forEach(function (t) {
                  (0, u.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function w(e) {
    return { expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level) };
}
var M = (function (e) {
    (0, s.Z)(d, e);
    var t,
        r,
        h =
            ((t = d),
            (r = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    a = (0, c.Z)(t);
                return (e = r ? Reflect.construct(a, arguments, (0, c.Z)(this).constructor) : a.apply(this, arguments)), (0, i.Z)(this, e);
            });
    function d(e) {
        var t;
        return (
            (0, a.Z)(this, d),
            (t = h.call(this, e)),
            (0, u.Z)((0, o.Z)(t), 'handleClick', function () {
                t.props.expandable && t.setState({ expanded: !t.state.expanded });
            }),
            (t.state = w(e)),
            t
        );
    }
    return (
        (0, n.Z)(d, [
            {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                    var t = w(e);
                    w(this.props).expanded !== t.expanded && this.setState(t);
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                    var r = this;
                    return (
                        !!Object.keys(e).find(function (t) {
                            return 'circularCache' !== t && ('keyPath' === t ? e[t].join('/') !== r.props[t].join('/') : e[t] !== r.props[t]);
                        }) || t.expanded !== this.state.expanded
                    );
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        t = e.getItemString,
                        r = e.nodeTypeIndicator,
                        a = e.nodeType,
                        n = e.data,
                        o = e.hideRoot,
                        s = e.createItemString,
                        i = e.styling,
                        c = e.collectionLimit,
                        u = e.keyPath,
                        h = e.labelRenderer,
                        d = e.expandable,
                        v = this.state.expanded,
                        w =
                            v || (o && 0 === this.props.level)
                                ? (function e(t, r, a) {
                                      var n = t.nodeType,
                                          o = t.data,
                                          s = t.collectionLimit,
                                          i = t.circularCache,
                                          c = t.keyPath,
                                          u = t.postprocessValue,
                                          h = t.sortObjectKeys,
                                          d = [];
                                      return (
                                          (0, m.Z)(n, o, h, s, r, a).forEach(function (r) {
                                              if (void 0 !== r.to)
                                                  d.push(
                                                      b.createElement(
                                                          y.Z,
                                                          (0, f.Z)({}, t, {
                                                              key: 'ItemRange--'.concat(r.from, '-').concat(r.to),
                                                              from: r.from,
                                                              to: r.to,
                                                              renderChildNodes: e
                                                          })
                                                      )
                                                  );
                                              else {
                                                  var a = r.key,
                                                      n = r.value,
                                                      o = -1 !== i.indexOf(n);
                                                  d.push(
                                                      b.createElement(
                                                          g.Z,
                                                          (0, f.Z)({}, t, {
                                                              postprocessValue: u,
                                                              collectionLimit: s,
                                                              key: 'Node--'.concat(a),
                                                              keyPath: [a].concat((0, l.Z)(c)),
                                                              value: u(n),
                                                              circularCache: [].concat((0, l.Z)(i), [n]),
                                                              isCircular: o,
                                                              hideRoot: !1
                                                          })
                                                      )
                                                  );
                                              }
                                          }),
                                          d
                                      );
                                  })(Z(Z({}, this.props), {}, { level: this.props.level + 1 }))
                                : null,
                        M = t(a, n, b.createElement('span', i('nestedNodeItemType', v), r), s(n, c), u),
                        k = [u, a, v, d];
                    return o
                        ? b.createElement('li', i.apply(void 0, ['rootNode'].concat(k)), b.createElement('ul', i.apply(void 0, ['rootNodeChildren'].concat(k)), w))
                        : b.createElement(
                              'li',
                              i.apply(void 0, ['nestedNode'].concat(k)),
                              d &&
                                  b.createElement(p.Z, {
                                      styling: i,
                                      nodeType: a,
                                      expanded: v,
                                      onClick: this.handleClick
                                  }),
                              b.createElement('label', (0, f.Z)({}, i.apply(void 0, [['label', 'nestedNodeLabel']].concat(k)), { onClick: this.handleClick }), h.apply(void 0, k)),
                              b.createElement('span', (0, f.Z)({}, i.apply(void 0, ['nestedNodeItemString'].concat(k)), { onClick: this.handleClick }), M),
                              b.createElement('ul', i.apply(void 0, ['nestedNodeChildren'].concat(k)), w)
                          );
                }
            }
        ]),
        d
    );
})(b.Component);
(0, u.Z)(M, 'propTypes', {
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
    expandable: d().bool
}),
    (0, u.Z)(M, 'defaultProps', {
        data: [],
        circularCache: [],
        level: 0,
        expandable: !0
    });
