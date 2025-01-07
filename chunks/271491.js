function n() {
    return (
        (e.exports = n =
            Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var n = 1; n < arguments.length; n++) {
                          var r = arguments[n];
                          for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
                      }
                      return e;
                  }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        n.apply(null, arguments)
    );
}
(e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
