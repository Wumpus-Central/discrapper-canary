i.d(t, {
    BF: () => m,
    QA: () => u,
    cp: () => c
});
var n = i(367907),
    a = i(368859),
    l = i(626135),
    r = i(135899),
    s = i(981631),
    o = i(943702);
function c(e) {
    return ((0, a.Z)(e) && e.messageReference.guild_id === r.M_) || (null != e.author && e.author.id === r.c9);
}
function u() {
    return o;
}
let m = (e) => {
    l.default.track(s.rMx.USER_FLOW_TRANSITION, {
        flow_type: r.tA,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.hH)(e.guildId)
    });
};
