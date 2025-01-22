r.d(n, {
    BF: function () {
        return f;
    },
    QA: function () {
        return d;
    },
    cp: function () {
        return c;
    }
});
var i = r(367907),
    a = r(368859),
    o = r(626135),
    s = r(135899),
    l = r(981631),
    u = r(943702);
function c(e) {
    return ((0, a.Z)(e) && e.messageReference.guild_id === s.M_) || (null != e.author && e.author.id === s.c9);
}
function d() {
    return u;
}
let f = (e) => {
    o.default.track(l.rMx.USER_FLOW_TRANSITION, {
        flow_type: s.tA,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, i.hH)(e.guildId)
    });
};
