n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(314897),
    r = n(471253),
    s = n(590415);
function o(e) {
    let t = (0, l.e7)([a.default], () => a.default.getId()),
        n = (0, s.ZP)(t, e.id),
        o = n === s.xO.REQUESTED_TO_SPEAK || n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
        [c, d] = i.useState(o);
    return (
        i.useEffect(() => {
            d(o);
        }, [o]),
        [
            c,
            function () {
                n === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, r.RK)(e, !0) : (0, r.Q1)(e, !c), d(!c);
            }
        ]
    );
}
