n.d(t, { Ay: () => r, y9: () => a });
var l = n(17928);
n(280450);
var i = n(505643),
    s = n(806931);
function r(e) {
    return e.type !== s.lp.ACTIVITY && ((0, s.Ay)(e) ? null != e.streamId : (e.voiceState?.selfVideo ?? !1));
}
function a(e) {
    return (0, l.bG)([i.Ay], () =>
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Ay;
            return null != e && !!r(e) && !((0, s.Xw)(e) && t.isLocalVideoDisabled(e.id));
        })(e, i.Ay),
    );
}
