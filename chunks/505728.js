function n(t) {
    if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function i(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = r),
        t
    );
}
var o = r(192379),
    a = r(169774),
    u = r(581079),
    s = r(290724),
    c = a.isBrowser('IE <= 11');
t.exports = (function (t) {
    function e(e) {
        var r;
        return i(n((r = t.call(this, e) || this)), '_forceFlag', void 0), i(n(r), '_node', void 0), (r._forceFlag = !1), r;
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.shouldComponentUpdate = function (t) {
            var e = this._node,
                r = '' === t.children;
            return (s(e) || u(!1), r) ? (c ? '\n' !== e.textContent : 'BR' !== e.tagName) : e.textContent !== t.children;
        }),
        (r.componentDidMount = function () {
            this._forceFlag = !this._forceFlag;
        }),
        (r.componentDidUpdate = function () {
            this._forceFlag = !this._forceFlag;
        }),
        (r.render = function () {
            var t,
                e,
                r = this;
            return '' === this.props.children
                ? this._forceFlag
                    ? ((t = function (t) {
                          return (r._node = t);
                      }),
                      c
                          ? o.createElement(
                                'span',
                                {
                                    key: 'A',
                                    'data-text': 'true',
                                    ref: t
                                },
                                '\n'
                            )
                          : o.createElement('br', {
                                key: 'A',
                                'data-text': 'true',
                                ref: t
                            }))
                    : ((e = function (t) {
                          return (r._node = t);
                      }),
                      c
                          ? o.createElement(
                                'span',
                                {
                                    key: 'B',
                                    'data-text': 'true',
                                    ref: e
                                },
                                '\n'
                            )
                          : o.createElement('br', {
                                key: 'B',
                                'data-text': 'true',
                                ref: e
                            }))
                : o.createElement(
                      'span',
                      {
                          key: this._forceFlag ? 'A' : 'B',
                          'data-text': 'true',
                          ref: function (t) {
                              return (r._node = t);
                          }
                      },
                      this.props.children
                  );
        }),
        e
    );
})(o.Component);
