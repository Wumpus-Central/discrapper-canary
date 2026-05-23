"use strict";
n.d(t, {
    Aw: () => y,
    GD: () => A,
    Hb: () => I,
    Iu: () => v,
    SH: () => N,
    TX: () => g,
    VE: () => E,
    bB: () => C,
    o2: () => S,
    ww: () => p,
});
var i = n(796873),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(228756),
    l = n(71393),
    u = n(287809),
    c = n(255438),
    d = n(428262),
    _ = n(652215),
    f = n(788868),
    h = n(375708);
function p(e, t) {
    return e instanceof File ? e : E(e.data.buffer, e.filename, t ?? "text/plain");
}
function E(e, t, n) {
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
    return r().filesize(e);
}
let T = [
    [_.GuildFeatures.MAX_FILE_SIZE_250_MB, f.q9],
    [_.GuildFeatures.MAX_FILE_SIZE_100_MB, f.w6],
    [_.GuildFeatures.MAX_FILE_SIZE_50_MB, f.eZ],
];
function S(e) {
    let t = u.default.getCurrentUser(),
        n = d.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let i = l.A.getGuild(e);
    return Math.max(
        null != i
            ? (function (e) {
                  let { enabled: t } = o.E.getConfig({ location: "getGuildMaxFileSize" });
                  return T.reduce((n, i) => {
                      let [r, s] = i;
                      return t && r === _.GuildFeatures.MAX_FILE_SIZE_250_MB ? n : e.features.has(r) && s > n ? s : n;
                  }, _.TbF);
              })(i)
            : _.TbF,
        n,
    );
}
function N(e, t) {
    let n = S(t);
    return Array.from(e).some((e) => e.size > n);
}
function y(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > C()
    );
}
function C() {
    let e = u.default.getCurrentUser();
    return null != e && e.isStaff(), 524288e3;
}
function v(e) {
    let { guildId: t, onClick: n } = e,
        i = (0, c.Xq)(S(t) / 1024, { useKibibytes: !0 }),
        r = (0, c.Xq)(f.f3 / 1024, { useKibibytes: !0 });
    return h.intl.format(h.t.tRuxk9, { maxSize: i, premiumMaxSize: r, onClick: n });
}
