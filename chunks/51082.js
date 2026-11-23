var l = n(855986);
n(46653);
var i = n(988468),
    r = n(806931),
    a = n(731854);
function s(e) {
    return (
        e.type !== r.lp.ACTIVITY &&
        !!i.Ay.supports(a.O5.VIDEO) &&
        ((0, r.Ay)(e) ? null != e.streamId : (e.voiceState?.selfVideo ?? !1))
    );
}
n.d(
    t,
    {},
    {
        Ay: s,
        y9: function (e) {
            return (0, l.bG)([i.Ay], () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Ay;
                    return null != e && !!s(e) && !((0, r.Xw)(e) && t.isLocalVideoDisabled(e.id));
                })(e, i.Ay),
            );
        },
    },
);
