n.d(t, {
    JL: () => m,
    P9: () => h,
    gR: () => g,
    h_: () => y,
    p9: () => E,
    wq: () => b,
}),
    n(539854),
    n(388685);
var r = n(442837),
    i = n(622822),
    a = n(387343),
    o = n(258609),
    s = n(131704),
    l = n(984933),
    c = n(430824),
    u = n(496675),
    d = n(979651),
    f = n(934415),
    p = n(981631),
    _ = n(388032);
function m(e, t, n) {
    var r;
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let o = t.getGuild(e.getGuildId()),
        s = null != (r = null == o ? void 0 : o.maxStageVideoChannelUsers) ? r : 0;
    return (
        (!e.isGuildStageVoice() || !(s <= 0)) &&
        (!i || !!(0, a.Z)(e, n)) &&
        !!n.can(p.Plq.STREAM, e) &&
        null != o &&
        o.afkChannelId !== e.id
    );
}
function h(e) {
    switch (e) {
        case 0:
            return _.intl.string(_.t["1i3tSY"]);
        case 1:
            return _.intl.string(_.t.elyVbv);
        case 2:
            return _.intl.string(_.t.pgUTZC);
        case 3:
            return _.intl.string(_.t.b5FqhF);
        default:
            return _.intl.string(_.t["7Xq/nV"]);
    }
}
function g(e) {
    switch (e) {
        case 0:
            return "".concat(_.intl.string(_.t["7Xq/nV"]), ": ").concat(_.intl.string(_.t["1i3tSY"]));
        case 1:
            return "".concat(_.intl.string(_.t["7Xq/nV"]), ": ").concat(_.intl.string(_.t.elyVbv));
        case 2:
            return "".concat(_.intl.string(_.t["7Xq/nV"]), ": ").concat(_.intl.string(_.t.pgUTZC));
        case 3:
            return "".concat(_.intl.string(_.t["7Xq/nV"]), ": ").concat(_.intl.string(_.t.b5FqhF));
        default:
            return "".concat(_.intl.string(_.t["7Xq/nV"]), ": ").concat(_.intl.string(_.t["9C444m"]));
    }
}
function E(e, t, n, r, o) {
    let l;
    if (null == e) return [!1, 2];
    let c = t.isInChannel(e.id),
        u = e instanceof s.Sf && (0, f.rY)(e, t, n),
        d = (0, a.Z)(e, r),
        p = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId(),
        _ = (0, i.dl)() && (0, i.zd)(e.id);
    p ? (l = 0) : _ ? (l = 3) : d || c ? u && !c && (l = 1) : (l = 2);
    let m = d && !u;
    return [!__OVERLAY__ && !p && !_ && (c || m), l];
}
function b(e) {
    return (0, r.Wu)([d.Z, c.Z, u.Z, o.default], () => E(e, d.Z, c.Z, u.Z, o.default));
}
function y(e, t, n) {
    let r = [];
    for (let { channel: i } of e[l.Zb]) m(i, t, n) && r.push(i);
    return r;
}
