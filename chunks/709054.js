r.r(n),
    r.d(n, {
        DISCORD_EPOCH: function () {
            return o.cj;
        },
        SnowflakeSequence: function () {
            return o.Tk;
        }
    });
var i = r(392711),
    a = r.n(i),
    o = r(67423);
function s(e) {
    return Object.keys(e);
}
function l(e) {
    return Object.entries(e);
}
function u(e, n) {
    for (let r in e) n(r);
}
function c(e, n) {
    a().forEach(e, (e, r) => n(e, r));
}
function d(e) {
    return o.Ol(e);
}
function f(e, n) {
    return o.P4(e, n);
}
function p(e) {
    return o.cO(e);
}
function h(e) {
    return o.B_(e);
}
function _(e) {
    return o.Lm(e);
}
function m(e, n) {
    return o.qu(e, n);
}
function g(e) {
    return o.qi(e);
}
function E(e) {
    return e;
}
function v(e) {
    return E(e);
}
function y(e) {
    return E(e);
}
function b(e) {
    return E(e);
}
n.default = {
    age: h,
    extractTimestamp: _,
    compare: m,
    atPreviousMillisecond: p,
    fromTimestamp: d,
    fromTimestampWithSequence: f,
    keys: s,
    forEach: c,
    forEachKey: u,
    entries: l,
    isProbablyAValidSnowflake: g,
    castChannelIdAsMessageId: v,
    castMessageIdAsChannelId: y,
    castGuildIdAsEveryoneGuildRoleId: b,
    cast: E
};
