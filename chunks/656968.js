function r(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function i(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
function a(e, t, n) {
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
var o = n(473749),
    s = n(169774),
    l = n(581079),
    c = n(108993),
    u = s.isBrowser("IE <= 11");
function d(e) {
    return u ? "\n" === e.textContent : "BR" === e.tagName;
}
var f = function (e) {
        return u
            ? o.createElement(
                  "span",
                  {
                      key: "A",
                      "data-text": "true",
                      ref: e,
                  },
                  "\n",
              )
            : o.createElement("br", {
                  key: "A",
                  "data-text": "true",
                  ref: e,
              });
    },
    p = function (e) {
        return u
            ? o.createElement(
                  "span",
                  {
                      key: "B",
                      "data-text": "true",
                      ref: e,
                  },
                  "\n",
              )
            : o.createElement("br", {
                  key: "B",
                  "data-text": "true",
                  ref: e,
              });
    };
e.exports = (function (e) {
    function t(t) {
        var n;
        return (
            a(r((n = e.call(this, t) || this)), "_forceFlag", void 0), a(r(n), "_node", void 0), (n._forceFlag = !1), n
        );
    }
    i(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            var t = this._node,
                n = "" === e.children;
            c(t) || l(!1);
            var r = t;
            return n ? !d(r) : r.textContent !== e.children;
        }),
        (n.componentDidMount = function () {
            this._forceFlag = !this._forceFlag;
        }),
        (n.componentDidUpdate = function () {
            this._forceFlag = !this._forceFlag;
        }),
        (n.render = function () {
            var e = this;
            return "" === this.props.children
                ? this._forceFlag
                    ? f(function (t) {
                          return (e._node = t);
                      })
                    : p(function (t) {
                          return (e._node = t);
                      })
                : o.createElement(
                      "span",
                      {
                          key: this._forceFlag ? "A" : "B",
                          "data-text": "true",
                          ref: function (t) {
                              return (e._node = t);
                          },
                      },
                      this.props.children,
                  );
        }),
        t
    );
})(o.Component);
