var n = function (e, t) {
        return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
    },
    i = function () {
        return (i =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
            }).apply(this, arguments);
    };
r.d(
    t,
    { Cl: () => i },
    {
        C6: function (e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            (n(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
        },
        fX: function (e, t, r) {
            if (r || 2 == arguments.length)
                for (var n, i = 0, o = t.length; i < o; i++)
                    (!n && i in t) || (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
        },
    },
);
