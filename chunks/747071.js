r.d(n, {
    Z: function () {
        return l;
    }
});
var i,
    a = r(695346),
    o = r(131951),
    s = r(36703);
function l(e) {
    let n =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (() => {
                      var e;
                      return null !== (i = null === (e = a.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== i ? i : 100;
                  })(),
        r = (0, s.P)(n) / 100;
    return Math.min(e * r * Math.min(o.Z.getOutputVolume() / 100, 1), 1);
}
