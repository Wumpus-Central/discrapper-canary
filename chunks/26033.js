n.d(t, {
    Cb: () => o,
    KF: () => u,
    Mq: () => m,
    Q0: () => a,
    Rh: () => g,
    aA: () => h,
    dU: () => c,
    dX: () => s,
    kq: () => d,
    m9: () => l,
    y0: () => f
});
var r = n(876215),
    i = n(758713);
function o(e) {
    return (null == e ? void 0 : e.content_type) === r.s.PLAYED_GAME;
}
function a(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_GAME;
}
function s(e) {
    return o(e) || a(e);
}
function l(e) {
    return (null == e ? void 0 : e.extra) != null && 'application_id' in (null == e ? void 0 : e.extra);
}
function c(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LISTENED_SESSION;
}
function u(e) {
    return (null == e ? void 0 : e.content_type) === r.s.TOP_ARTIST;
}
function d(e) {
    return c(e) || u(e);
}
function f(e) {
    return (null == e ? void 0 : e.content_type) === r.s.WATCHED_MEDIA;
}
function _(e) {
    return !!s(e) && e.extra.platform === i.z.XBOX;
}
function p(e) {
    return !!s(e) && e.extra.platform === i.z.PLAYSTATION;
}
function h(e) {
    return _(e) || p(e);
}
function m(e) {
    return (null == e ? void 0 : e.content_type) === r.s.LAUNCHED_ACTIVITY;
}
function g(e) {
    return s(e) || c(e) || f(e) || l(e);
}
