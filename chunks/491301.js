e.d(r, { A: () => o });
function o(t) {
    return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
              })(t);
}
