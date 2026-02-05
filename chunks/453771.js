"use strict";
n.d(t, {
    Aw: () => C,
    GD: () => I,
    Hb: () => T,
    Iu: () => N,
    SH: () => S,
    TX: () => A,
    VE: () => g,
    bB: () => b,
    o2: () => y,
    ww: () => m,
});
var r = n(796873),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(71393),
    l = n(287809),
    u = n(255438),
    c = n(927578),
    d = n(652215),
    _ = n(788868),
    f = n(985018);
let p = 524288e3,
    h = 524288e3;
function m(e, t) {
    return e instanceof File ? e : g(e.data.buffer, e.filename, t ?? "text/plain");
}
function g(e, t, n) {
    return new File([e], t, { type: n });
}
let E = [
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
function A(e) {
    return I(e.name, e.type);
}
function I(e, t) {
    e = e?.toLowerCase() ?? "";
    let n = s().find(E, (n) =>
        null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e),
    );
    return null != n ? n.klass : "unknown";
}
function T(e) {
    return i().filesize(e);
}
function y(e) {
    let t = l.default.getCurrentUser(),
        n = c.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = o.A.getGuild(e);
    return Math.max(null != r ? _.TG[r.premiumTier].limits.fileSize : d.TbF, n);
}
function S(e, t) {
    let n = y(t);
    return Array.from(e).some((e) => e.size > n);
}
function v(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t;
}
function C(e) {
    return v(e) > b();
}
function b() {
    let e = l.default.getCurrentUser();
    return null != e && e.isStaff() ? h : p;
}
function N(e) {
    let { guildId: t, onClick: n } = e,
        r = (0, u.Xq)(y(t) / 1024, { useKibibytes: !0 }),
        i = (0, u.Xq)(_.f3 / 1024, { useKibibytes: !0 });
    return f.intl.format(f.t.tRuxk9, { maxSize: r, premiumMaxSize: i, onClick: n });
}
