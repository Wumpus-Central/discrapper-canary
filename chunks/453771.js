"use strict";
n.d(t, {
    Aw: () => O,
    GD: () => T,
    Hb: () => S,
    Iu: () => D,
    SH: () => C,
    TX: () => I,
    VE: () => g,
    bB: () => b,
    o2: () => N,
    ww: () => E,
});
var r = n(796873),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(228756),
    l = n(71393),
    u = n(287809),
    c = n(255438),
    d = n(927578),
    _ = n(652215),
    f = n(788868),
    p = n(985018);
let h = 524288e3,
    m = 524288e3;
function E(e, t) {
    return e instanceof File ? e : g(e.data.buffer, e.filename, t ?? "text/plain");
}
function g(e, t, n) {
    return new File([e], t, { type: n });
}
let A = [
    { reType: /^image\/vnd.adobe.photoshop/, klass: "photoshop" },
    { reType: /^image\/svg\+xml/, klass: "webcode" },
    { reType: /^image\//, klass: "image" },
    { reType: /^video\//, klass: "video" },
    { reName: /\.pdf$/, klass: "acrobat" },
    { reName: /\.ae/, klass: "ae" },
    { reName: /\.sketch$/, klass: "sketch" },
    { reName: /\.ai$/, klass: "ai" },
    { reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/, klass: "archive" },
    {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: "code",
    },
    { reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/, klass: "document" },
    { reName: /\.(?:xls|xlsx|numbers|csv)$/, klass: "spreadsheet" },
    { reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/, klass: "webcode" },
    { reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/, klass: "audio" },
];
function I(e) {
    return T(e.name, e.type);
}
function T(e, t) {
    e = e?.toLowerCase() ?? "";
    let n = a().find(A, (n) =>
        null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e),
    );
    return null != n ? n.klass : "unknown";
}
function S(e) {
    return i().filesize(e);
}
let y = [
    [_.GuildFeatures.MAX_FILE_SIZE_250_MB, f.q9],
    [_.GuildFeatures.MAX_FILE_SIZE_100_MB, f.w6],
    [_.GuildFeatures.MAX_FILE_SIZE_50_MB, f.eZ],
];
function v(e) {
    let { enabled: t } = o.E.getConfig({ location: "getGuildMaxFileSize" });
    return y.reduce((n, r) => {
        let [i, s] = r;
        return t && i === _.GuildFeatures.MAX_FILE_SIZE_250_MB ? n : e.features.has(i) && s > n ? s : n;
    }, _.TbF);
}
function N(e) {
    let t = u.default.getCurrentUser(),
        n = d.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = l.A.getGuild(e);
    return Math.max(null != r ? v(r) : _.TbF, n);
}
function C(e, t) {
    let n = N(t);
    return Array.from(e).some((e) => e.size > n);
}
function R(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t;
}
function O(e) {
    return R(e) > b();
}
function b() {
    let e = u.default.getCurrentUser();
    return null != e && e.isStaff() ? m : h;
}
function D(e) {
    let { guildId: t, onClick: n } = e,
        r = (0, c.Xq)(N(t) / 1024, { useKibibytes: !0 }),
        i = (0, c.Xq)(f.f3 / 1024, { useKibibytes: !0 });
    return p.intl.format(p.t.tRuxk9, { maxSize: r, premiumMaxSize: i, onClick: n });
}
