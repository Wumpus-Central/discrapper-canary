n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(314897),
    a = n(471253),
    s = n(590415);
function o(e) {
    let t = (0, i.e7)([l.default], () => l.default.getId()),
        n = (0, s.ZP)(t, e.id),
        o = n === s.xO.REQUESTED_TO_SPEAK || n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [c, u] = r.useState(o);
    return (
        r.useEffect(() => {
            u(o);
        }, [o]),
        [
            c,
            function () {
                n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, a.RK)(e, !0) : (0, a.Q1)(e, !c), u(!c);
            },
        ]
    );
}
