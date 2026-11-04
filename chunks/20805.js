var i = n(681154),
    r = n(808380);
function a(e) {
    return e?.content_type === i.ContentInventoryEntryType.PLAYED_GAME;
}
function s(e) {
    return e?.content_type === i.ContentInventoryEntryType.TOP_GAME;
}
function l(e) {
    return a(e) || s(e);
}
function o(e) {
    return e?.extra != null && "application_id" in e?.extra;
}
function d(e) {
    return e?.content_type === i.ContentInventoryEntryType.LISTENED_SESSION;
}
function c(e) {
    return e?.content_type === i.ContentInventoryEntryType.TOP_ARTIST;
}
function u(e) {
    return e?.content_type === i.ContentInventoryEntryType.WATCHED_MEDIA;
}
n.d(
    t,
    {},
    {
        $R: function (e) {
            return l(e) || d(e) || u(e) || o(e);
        },
        Lf: u,
        P: o,
        Tq: d,
        UQ: s,
        aj: function (e) {
            return (!!l(e) && e.extra.platform === r.Y.XBOX) || (!!l(e) && e.extra.platform === r.Y.PLAYSTATION);
        },
        fe: function (e) {
            return d(e) || c(e);
        },
        p6: c,
        qQ: a,
        yl: function (e) {
            return e?.content_type === i.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
        },
        zD: l,
    },
);
