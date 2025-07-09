(n.d(t, { Z: () => s }), n(388685));
var r = n(73800),
    i = n(442837),
    l = n(314897),
    a = n(471253),
    o = n(590415);
function s(e) {
    let t = (0, i.e7)([l.default], () => l.default.getId()),
        n = (0, o.ZP)(t, e.id),
        s = n === o.xO.REQUESTED_TO_SPEAK || n === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [c, u] = r.useState(s);
    return (
        r.useEffect(() => {
            u(s);
        }, [s]),
        [
            c,
            function () {
                (n === o.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, a.RK)(e, !0) : (0, a.Q1)(e, !c), u(!c));
            }
        ]
    );
}
