"use strict";
n.d(t, {
    $R: () => h,
    Lf: () => _,
    P: () => l,
    Tq: () => u,
    UQ: () => a,
    aj: () => f,
    fe: () => c,
    p6: () => d,
    qQ: () => s,
    yl: () => E,
    zD: () => o,
});
var r = n(681154),
    i = n(808380);
function s(e) {
    return e?.content_type === r.ContentInventoryEntryType.PLAYED_GAME;
}
function a(e) {
    return e?.content_type === r.ContentInventoryEntryType.TOP_GAME;
}
function o(e) {
    return s(e) || a(e);
}
function l(e) {
    return e?.extra != null && "application_id" in e?.extra;
}
function u(e) {
    return e?.content_type === r.ContentInventoryEntryType.LISTENED_SESSION;
}
function d(e) {
    return e?.content_type === r.ContentInventoryEntryType.TOP_ARTIST;
}
function c(e) {
    return u(e) || d(e);
}
function _(e) {
    return e?.content_type === r.ContentInventoryEntryType.WATCHED_MEDIA;
}
function f(e) {
    return (!!o(e) && e.extra.platform === i.Y.XBOX) || (!!o(e) && e.extra.platform === i.Y.PLAYSTATION);
}
function E(e) {
    return e?.content_type === r.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
}
function h(e) {
    return o(e) || u(e) || _(e) || l(e);
}
