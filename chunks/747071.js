n.d(t, { Z: () => o });
var i,
    r = n(695346),
    a = n(131951),
    s = n(36703);
function o(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (() => {
                  var e;
                  return null !== (i = null === (e = r.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== i ? i : 100;
              })();
    return Math.min(e * ((0, s.P)(t) / 100) * Math.min(a.Z.getOutputVolume() / 100, 1), 1);
}
