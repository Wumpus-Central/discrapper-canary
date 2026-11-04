function u(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
r.d(
    t,
    {},
    {
        Q: function (e) {
            var t, r;
            return (
                !1 !== u(e) &&
                (void 0 === (t = e.constructor) ||
                    (!1 !== u((r = t.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")))
            );
        },
    },
);
