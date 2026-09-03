n.d(t, {
    Aw: () => C,
    GD: () => T,
    Hb: () => m,
    Iu: () => R,
    SH: () => N,
    TX: () => p,
    VE: () => I,
    bB: () => O,
    o2: () => S,
    ww: () => h,
});
var i = n(796873),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(228756),
    o = n(71393),
    d = n(287809),
    c = n(255438),
    u = n(158045),
    _ = n(652215),
    E = n(202541),
    A = n(375708);
function h(e, t) {
    return e instanceof File ? e : I(e.data.buffer, e.filename, t ?? "text/plain");
}
function I(e, t, n) {
    return new File([e], t, { type: n });
}
let f = [
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
function p(e) {
    return T(e.name, e.type);
}
function T(e, t) {
    e = e?.toLowerCase() ?? "";
    let n = s().find(f, (n) =>
        null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e),
    );
    return null != n ? n.klass : "unknown";
}
function m(e) {
    return r().filesize(e);
}
let g = [
    [_.GuildFeatures.MAX_FILE_SIZE_250_MB, E.q9],
    [_.GuildFeatures.MAX_FILE_SIZE_100_MB, E.w6],
    [_.GuildFeatures.MAX_FILE_SIZE_50_MB, E.eZ],
];
function S(e) {
    let t = d.default.getCurrentUser(),
        n = u.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let i = o.A.getGuild(e);
    return Math.max(
        null != i
            ? (function (e) {
                  let { enabled: t } = l.E.getConfig({ location: "getGuildMaxFileSize" });
                  return g.reduce((n, i) => {
                      let [r, a] = i;
                      return t && r === _.GuildFeatures.MAX_FILE_SIZE_250_MB ? n : e.features.has(r) && a > n ? a : n;
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
function C(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > O()
    );
}
function O() {
    let e = d.default.getCurrentUser();
    return null != e && e.isStaff(), 524288e3;
}
function R(e) {
    let { guildId: t, onClick: n, maxSize: i, hideLearnMore: r } = e,
        a = (0, c.Xq)((i ?? S(t)) / 1024, { useKibibytes: !0 }),
        s = (0, c.Xq)(E.f3 / 1024, { useKibibytes: !0 });
    return !0 === r
        ? A.intl.format(A.t["+R2TzS"], { maxSize: a, premiumMaxSize: s })
        : A.intl.format(A.t.tRuxk9, { maxSize: a, premiumMaxSize: s, onClick: n });
}
