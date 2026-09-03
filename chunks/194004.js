n.d(t, {
    zN: () => A,
    TG: () => u,
    cG: () => f,
    D6: () => p,
    op: () => h,
    y3: () => _,
    Tw: () => E,
    NL: () => c,
    Z2: () => I,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = (((i = {})[(i.STANDARD = 1)] = "STANDARD"), (i[(i.GUILD = 2)] = "GUILD"), i),
    u =
        (((r = {})[(r.PNG = 1)] = "PNG"),
        (r[(r.APNG = 2)] = "APNG"),
        (r[(r.LOTTIE = 3)] = "LOTTIE"),
        (r[(r.GIF = 4)] = "GIF"),
        r),
    _ = (((a = {}).PNG = "png"), (a.APNG = "png"), (a.LOTTIE = "json"), (a.WEBP = "webp"), (a.GIF = "gif"), a);
function E(e) {
    return e !== u.PNG;
}
function A(e) {
    return e !== c.STANDARD;
}
var h = (((s = {})[(s.STICKER = 0)] = "STICKER"), (s[(s.CREATE_STICKER = 1)] = "CREATE_STICKER"), s),
    I =
        (((l = {}).PACK = "PACK"),
        (l.FAVORITE = "FAVORITE"),
        (l.RECENT = "RECENT"),
        (l.SEARCH_RESULTS = "SEARCH_RESULTS"),
        (l.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS"),
        (l.GUILD = "GUILD"),
        (l.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL"),
        (l.CREATE_STICKER = "CREATE_STICKER"),
        l),
    f =
        (((o = {})[(o.STICKER_NAME = 0)] = "STICKER_NAME"),
        (o[(o.TAG = 1)] = "TAG"),
        (o[(o.CORRELATED_EMOJI = 2)] = "CORRELATED_EMOJI"),
        (o[(o.GUILD_NAME = 3)] = "GUILD_NAME"),
        (o[(o.PACK_NAME = 4)] = "PACK_NAME"),
        o),
    p =
        (((d = {})[(d.STICKER_PICKER = 0)] = "STICKER_PICKER"),
        (d[(d.AUTOCOMPLETE = 1)] = "AUTOCOMPLETE"),
        (d[(d.BUILT_IN_INTEGRATION = 2)] = "BUILT_IN_INTEGRATION"),
        d);
