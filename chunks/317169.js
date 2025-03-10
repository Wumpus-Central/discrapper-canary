t.d(n, { Z: () => a });
var r = t(442837),
    i = t(430824),
    o = t(905128);
let a = function (e) {
    var n;
    let t =
            null !==
                (n = (0, r.e7)([i.Z], () => {
                    var n;
                    return null === (n = i.Z.getGuild(e)) || void 0 === n ? void 0 : n.premiumSubscriberCount;
                })) && void 0 !== n
                ? n
                : 0,
        a = (0, r.cj)([o.Z], () => {
            var n, t;
            return null !== (t = null === (n = o.Z.getStateForGuild(e)) || void 0 === n ? void 0 : n.appliedBoosts) && void 0 !== t ? t : 0;
        });
    return {
        available: Math.max(0, t - a),
        spent: a,
        total: t
    };
};
