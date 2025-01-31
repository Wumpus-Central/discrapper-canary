n.d(t, {
    Cb: () => a,
    KF: () => c,
    Mq: () => m,
    Q0: () => s,
    Rh: () => g,
    aA: () => h,
    dU: () => u,
    dX: () => o,
    kq: () => d,
    m9: () => l,
    y0: () => f
});
var i = n(876215),
    r = n(758713);
function a(e) {
    return (null == e ? void 0 : e.content_type) === i.s.PLAYED_GAME;
}
function s(e) {
    return (null == e ? void 0 : e.content_type) === i.s.TOP_GAME;
}
function o(e) {
    return a(e) || s(e);
}
function l(e) {
    return (null == e ? void 0 : e.extra) != null && 'application_id' in (null == e ? void 0 : e.extra);
}
function u(e) {
    return (null == e ? void 0 : e.content_type) === i.s.LISTENED_SESSION;
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === i.s.TOP_ARTIST;
}
function d(e) {
    return u(e) || c(e);
}
function f(e) {
    return (null == e ? void 0 : e.content_type) === i.s.WATCHED_MEDIA;
}
function _(e) {
    return !!o(e) && e.extra.platform === r.z.XBOX;
}
function p(e) {
    return !!o(e) && e.extra.platform === r.z.PLAYSTATION;
}
function h(e) {
    return _(e) || p(e);
}
function m(e) {
    return (null == e ? void 0 : e.content_type) === i.s.LAUNCHED_ACTIVITY;
}
function g(e) {
    return o(e) || u(e) || f(e) || l(e);
}
