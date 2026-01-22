n.d(t, {
    $R: () => g,
    Lf: () => f,
    P: () => l,
    Tq: () => c,
    UQ: () => s,
    aj: () => h,
    fe: () => d,
    p6: () => u,
    qQ: () => a,
    yl: () => m,
    zD: () => o,
});
var r = n(681154),
    i = n(808380);
function a(e) {
    return (null == e ? void 0 : e.content_type) === r.I.PLAYED_GAME;
}
function s(e) {
    return (null == e ? void 0 : e.content_type) === r.I.TOP_GAME;
}
function o(e) {
    return a(e) || s(e);
}
function l(e) {
    return (null == e ? void 0 : e.extra) != null && "application_id" in (null == e ? void 0 : e.extra);
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === r.I.LISTENED_SESSION;
}
function u(e) {
    return (null == e ? void 0 : e.content_type) === r.I.TOP_ARTIST;
}
function d(e) {
    return c(e) || u(e);
}
function f(e) {
    return (null == e ? void 0 : e.content_type) === r.I.WATCHED_MEDIA;
}
function p(e) {
    return !!o(e) && e.extra.platform === i.Y.XBOX;
}
function _(e) {
    return !!o(e) && e.extra.platform === i.Y.PLAYSTATION;
}
function h(e) {
    return p(e) || _(e);
}
function m(e) {
    return (null == e ? void 0 : e.content_type) === r.I.LAUNCHED_ACTIVITY;
}
function g(e) {
    return o(e) || c(e) || f(e) || l(e);
}
