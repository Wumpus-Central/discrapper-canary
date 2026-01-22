var r = n(834647),
    a = n(780940),
    o = n(976467).CONSTRUCTOR,
    i = n(145595),
    s = n(683570),
    l = n(309270),
    c = n(735811),
    u = i && i.prototype;
if (
    (r(
        {
            target: "Promise",
            proto: !0,
            forced: o,
            real: !0,
        },
        {
            catch: function (e) {
                return this.then(void 0, e);
            },
        },
    ),
    !a && l(i))
) {
    var d = s("Promise").prototype.catch;
    u.catch !== d &&
        c(u, "catch", d, {
            unsafe: !0,
        });
}
