function u(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
function n(e) {
    var t, r;
    return (
        !1 !== u(e) &&
        (void 0 === (t = e.constructor) || (!1 !== u((r = t.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")))
    );
}
r.d(t, { Q: () => n });
