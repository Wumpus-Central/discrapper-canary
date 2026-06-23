"use strict";
n.d(t, {
    zN: () => f,
    TG: () => d,
    cG: () => m,
    D6: () => g,
    op: () => p,
    y3: () => _,
    Tw: () => h,
    NL: () => c,
    Z2: () => E,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c = (((i = {})[(i.STANDARD = 1)] = "STANDARD"), (i[(i.GUILD = 2)] = "GUILD"), i),
    d =
        (((r = {})[(r.PNG = 1)] = "PNG"),
        (r[(r.APNG = 2)] = "APNG"),
        (r[(r.LOTTIE = 3)] = "LOTTIE"),
        (r[(r.GIF = 4)] = "GIF"),
        r),
    _ = (((s = {}).PNG = "png"), (s.APNG = "png"), (s.LOTTIE = "json"), (s.WEBP = "webp"), (s.GIF = "gif"), s);
function h(e) {
    return e !== d.PNG;
}
function f(e) {
    return e !== c.STANDARD;
}
var p = (((a = {})[(a.STICKER = 0)] = "STICKER"), (a[(a.CREATE_STICKER = 1)] = "CREATE_STICKER"), a),
    E =
        (((o = {}).PACK = "PACK"),
        (o.FAVORITE = "FAVORITE"),
        (o.RECENT = "RECENT"),
        (o.SEARCH_RESULTS = "SEARCH_RESULTS"),
        (o.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS"),
        (o.GUILD = "GUILD"),
        (o.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL"),
        (o.CREATE_STICKER = "CREATE_STICKER"),
        o),
    m =
        (((l = {})[(l.STICKER_NAME = 0)] = "STICKER_NAME"),
        (l[(l.TAG = 1)] = "TAG"),
        (l[(l.CORRELATED_EMOJI = 2)] = "CORRELATED_EMOJI"),
        (l[(l.GUILD_NAME = 3)] = "GUILD_NAME"),
        (l[(l.PACK_NAME = 4)] = "PACK_NAME"),
        l),
    g =
        (((u = {})[(u.STICKER_PICKER = 0)] = "STICKER_PICKER"),
        (u[(u.AUTOCOMPLETE = 1)] = "AUTOCOMPLETE"),
        (u[(u.BUILT_IN_INTEGRATION = 2)] = "BUILT_IN_INTEGRATION"),
        u);
