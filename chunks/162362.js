n.d(t, { A: () => l });
var r = n(773669);
function l(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  month: "numeric",
                  day: "numeric",
              };
    return new Date(e).toLocaleDateString(r.default.locale, t);
}
