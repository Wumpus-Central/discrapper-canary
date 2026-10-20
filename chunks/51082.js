n.d(t, { Ay: () => a, y9: () => o });
var i = n(17928);
n(280450);
var l = n(360906),
    s = n(806931),
    r = n(731854);
function a(e) {
    return (
        e.type !== s.lp.ACTIVITY &&
        !!l.Ay.supports(r.O5.VIDEO) &&
        ((0, s.Ay)(e) ? null != e.streamId : (e.voiceState?.selfVideo ?? !1))
    );
}
function o(e) {
    return (0, i.bG)([l.Ay], () =>
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ay;
            return null != e && !!a(e) && !((0, s.Xw)(e) && t.isLocalVideoDisabled(e.id));
        })(e, l.Ay),
    );
}
