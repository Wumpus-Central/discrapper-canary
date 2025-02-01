var i = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
})();
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function s(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var o = (function (e) {
    function t() {
        r(this, t);
        var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (e._children = []), e;
    }
    return (
        s(t, e),
        i(t, [
            {
                key: '__addChild',
                value: function (e) {
                    0 === this._children.length && this.__attach(), this._children.push(e);
                }
            },
            {
                key: '__removeChild',
                value: function (e) {
                    var t = this._children.indexOf(e);
                    if (-1 === t) {
                        console.warn("Trying to remove a child that doesn't exist");
                        return;
                    }
                    this._children.splice(t, 1), 0 === this._children.length && this.__detach();
                }
            },
            {
                key: '__getChildren',
                value: function () {
                    return this._children;
                }
            }
        ]),
        t
    );
})(n(129629));
e.exports = o;
