var l = n(855986);
n(46653);
var i = n(754712),
    s = n(806931),
    r = n(731854);
function a(e) {
    return (
        e.type !== s.lp.ACTIVITY &&
        !!i.Ay.supports(r.O5.VIDEO) &&
        ((0, s.Ay)(e) ? null != e.streamId : (e.voiceState?.selfVideo ?? !1))
    );
}
n.d(
    t,
    {},
    {
        Ay: a,
        y9: function (e) {
            return (0, l.bG)([i.Ay], () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Ay;
                    return null != e && !!a(e) && !((0, s.Xw)(e) && t.isLocalVideoDisabled(e.id));
                })(e, i.Ay),
            );
        },
    },
);
