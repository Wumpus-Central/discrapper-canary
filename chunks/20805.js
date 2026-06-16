"use strict";
n.d(t, {
    $R: () => p,
    Lf: () => _,
    P: () => l,
    Tq: () => u,
    UQ: () => a,
    aj: () => h,
    fe: () => d,
    p6: () => c,
    qQ: () => s,
    yl: () => f,
    zD: () => o,
});
var i = n(681154),
    r = n(808380);
function s(e) {
    return e?.content_type === i.ContentInventoryEntryType.PLAYED_GAME;
}
function a(e) {
    return e?.content_type === i.ContentInventoryEntryType.TOP_GAME;
}
function o(e) {
    return s(e) || a(e);
}
function l(e) {
    return e?.extra != null && "application_id" in e?.extra;
}
function u(e) {
    return e?.content_type === i.ContentInventoryEntryType.LISTENED_SESSION;
}
function c(e) {
    return e?.content_type === i.ContentInventoryEntryType.TOP_ARTIST;
}
function d(e) {
    return u(e) || c(e);
}
function _(e) {
    return e?.content_type === i.ContentInventoryEntryType.WATCHED_MEDIA;
}
function h(e) {
    return (!!o(e) && e.extra.platform === r.Y.XBOX) || (!!o(e) && e.extra.platform === r.Y.PLAYSTATION);
}
function f(e) {
    return e?.content_type === i.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
}
function p(e) {
    return o(e) || u(e) || _(e) || l(e);
}
