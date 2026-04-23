"use strict";
n.d(t, {
    zN: () => h,
    TG: () => u,
    cG: () => g,
    D6: () => p,
    op: () => m,
    y3: () => c,
    Tw: () => E,
    NL: () => _,
    Z2: () => f,
});
var i,
    r,
    s,
    a,
    o,
    l,
    d,
    _ = (((i = {})[(i.STANDARD = 1)] = "STANDARD"), (i[(i.GUILD = 2)] = "GUILD"), i),
    u =
        (((r = {})[(r.PNG = 1)] = "PNG"),
        (r[(r.APNG = 2)] = "APNG"),
        (r[(r.LOTTIE = 3)] = "LOTTIE"),
        (r[(r.GIF = 4)] = "GIF"),
        r),
    c = (((s = {}).PNG = "png"), (s.APNG = "png"), (s.LOTTIE = "json"), (s.WEBP = "webp"), (s.GIF = "gif"), s);
let E = (e) => e !== u.PNG,
    h = (e) => e !== _.STANDARD;
var m = (((a = {})[(a.STICKER = 0)] = "STICKER"), (a[(a.CREATE_STICKER = 1)] = "CREATE_STICKER"), a),
    f =
        (((o = {}).PACK = "PACK"),
        (o.FAVORITE = "FAVORITE"),
        (o.RECENT = "RECENT"),
        (o.SEARCH_RESULTS = "SEARCH_RESULTS"),
        (o.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS"),
        (o.GUILD = "GUILD"),
        (o.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL"),
        (o.CREATE_STICKER = "CREATE_STICKER"),
        o),
    g =
        (((l = {})[(l.STICKER_NAME = 0)] = "STICKER_NAME"),
        (l[(l.TAG = 1)] = "TAG"),
        (l[(l.CORRELATED_EMOJI = 2)] = "CORRELATED_EMOJI"),
        (l[(l.GUILD_NAME = 3)] = "GUILD_NAME"),
        (l[(l.PACK_NAME = 4)] = "PACK_NAME"),
        l),
    p =
        (((d = {})[(d.STICKER_PICKER = 0)] = "STICKER_PICKER"),
        (d[(d.AUTOCOMPLETE = 1)] = "AUTOCOMPLETE"),
        (d[(d.BUILT_IN_INTEGRATION = 2)] = "BUILT_IN_INTEGRATION"),
        d);
