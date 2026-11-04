function n(e) {
    return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
r.d(
    t,
    {},
    {
        i: function (e) {
            return null !== e && "object" === n(e) && Object.prototype.hasOwnProperty.call(e, "current");
        },
    },
);
