var i = (function () {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
    };
})();
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function s(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var l = (function (e) {
    function n() {
        a(this, n);
        var e = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (e._children = []), e;
    }
    return (
        s(n, e),
        i(n, [
            {
                key: '__addChild',
                value: function (e) {
                    0 === this._children.length && this.__attach(), this._children.push(e);
                }
            },
            {
                key: '__removeChild',
                value: function (e) {
                    var n = this._children.indexOf(e);
                    if (-1 === n) {
                        console.warn("Trying to remove a child that doesn't exist");
                        return;
                    }
                    this._children.splice(n, 1), 0 === this._children.length && this.__detach();
                }
            },
            {
                key: '__getChildren',
                value: function () {
                    return this._children;
                }
            }
        ]),
        n
    );
})(r(129629));
e.exports = l;
