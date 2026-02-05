"use strict";
n.d(t, {
    $R: () => g,
    Lf: () => _,
    P: () => l,
    Tq: () => u,
    UQ: () => s,
    aj: () => h,
    fe: () => d,
    p6: () => c,
    qQ: () => a,
    yl: () => m,
    zD: () => o,
});
var r = n(681154),
    i = n(808380);
function a(e) {
    return e?.content_type === r.ContentInventoryEntryType.PLAYED_GAME;
}
function s(e) {
    return e?.content_type === r.ContentInventoryEntryType.TOP_GAME;
}
function o(e) {
    return a(e) || s(e);
}
function l(e) {
    return e?.extra != null && "application_id" in e?.extra;
}
function u(e) {
    return e?.content_type === r.ContentInventoryEntryType.LISTENED_SESSION;
}
function c(e) {
    return e?.content_type === r.ContentInventoryEntryType.TOP_ARTIST;
}
function d(e) {
    return u(e) || c(e);
}
function _(e) {
    return e?.content_type === r.ContentInventoryEntryType.WATCHED_MEDIA;
}
function f(e) {
    return !!o(e) && e.extra.platform === i.Y.XBOX;
}
function p(e) {
    return !!o(e) && e.extra.platform === i.Y.PLAYSTATION;
}
function h(e) {
    return f(e) || p(e);
}
function m(e) {
    return e?.content_type === r.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
}
function g(e) {
    return o(e) || u(e) || _(e) || l(e);
}
