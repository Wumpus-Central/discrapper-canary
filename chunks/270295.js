n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(314897),
    o = n(471253),
    a = n(590415);
function s(e) {
    let t = (0, i.e7)([l.default], () => l.default.getId()),
        n = (0, a.ZP)(t, e.id),
        s = n === a.xO.REQUESTED_TO_SPEAK || n === a.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [c, u] = r.useState(s);
    return (
        r.useEffect(() => {
            u(s);
        }, [s]),
        [
            c,
            function () {
                n === a.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, o.RK)(e, !0) : (0, o.Q1)(e, !c), u(!c);
            }
        ]
    );
}
