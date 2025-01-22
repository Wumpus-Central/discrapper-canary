r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(594174),
    l = r(823379);
let u = [];
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        r = (0, o.Wu)(
            [s.default],
            () => {
                let n = e.participants.map((e) => s.default.getUser(e)).filter(l.lm),
                    r = n.find((n) => n.id === e.author_id),
                    i = n.filter((n) => n.id !== e.author_id);
                return null == r ? u : [...i, r];
            },
            [e]
        ),
        i = a.useMemo(() => r.slice(-n), [n, r]),
        c = i[i.length - 1],
        d = i[i.length - 2],
        f = Math.max(r.length - 1, 0);
    return {
        orderedParticipants: r,
        displayParticipants: i,
        participant1: c,
        participant2: d,
        numOtherParticipants: f
    };
}
