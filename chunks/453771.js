"use strict";
n.d(t, {
    Aw: () => N,
    GD: () => A,
    Hb: () => I,
    Iu: () => R,
    SH: () => y,
    TX: () => g,
    VE: () => p,
    bB: () => O,
    o2: () => S,
    ww: () => h,
});
var r = n(796873),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(228756),
    l = n(71393),
    u = n(287809),
    d = n(255438),
    c = n(927578),
    _ = n(652215),
    f = n(788868),
    E = n(985018);
function h(e, t) {
    return e instanceof File ? e : p(e.data.buffer, e.filename, t ?? "text/plain");
}
function p(e, t, n) {
    return new File([e], t, { type: n });
}
let m = [
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
function g(e) {
    return A(e.name, e.type);
}
function A(e, t) {
    e = e?.toLowerCase() ?? "";
    let n = a().find(m, (n) =>
        null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e),
    );
    return null != n ? n.klass : "unknown";
}
function I(e) {
    return i().filesize(e);
}
let T = [
    [_.GuildFeatures.MAX_FILE_SIZE_250_MB, f.q9],
    [_.GuildFeatures.MAX_FILE_SIZE_100_MB, f.w6],
    [_.GuildFeatures.MAX_FILE_SIZE_50_MB, f.eZ],
];
function S(e) {
    let t = u.default.getCurrentUser(),
        n = c.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = l.A.getGuild(e);
    return Math.max(
        null != r
            ? (function (e) {
                  let { enabled: t } = o.E.getConfig({ location: "getGuildMaxFileSize" });
                  return T.reduce((n, r) => {
                      let [i, s] = r;
                      return t && i === _.GuildFeatures.MAX_FILE_SIZE_250_MB ? n : e.features.has(i) && s > n ? s : n;
                  }, _.TbF);
              })(r)
            : _.TbF,
        n,
    );
}
function y(e, t) {
    let n = S(t);
    return Array.from(e).some((e) => e.size > n);
}
function N(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > O()
    );
}
function O() {
    let e = u.default.getCurrentUser();
    return null != e && e.isStaff(), 524288e3;
}
function R(e) {
    let { guildId: t, onClick: n } = e,
        r = (0, d.Xq)(S(t) / 1024, { useKibibytes: !0 }),
        i = (0, d.Xq)(f.f3 / 1024, { useKibibytes: !0 });
    return E.intl.format(E.t.tRuxk9, { maxSize: r, premiumMaxSize: i, onClick: n });
}
