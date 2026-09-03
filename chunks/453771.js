n.d(t, {
    Aw: () => O,
    GD: () => m,
    Hb: () => g,
    Iu: () => R,
    SH: () => C,
    TX: () => T,
    VE: () => f,
    o2: () => N,
    ww: () => I,
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
    _ = n(292348),
    E = n(652215),
    A = n(202541),
    h = n(375708);
function I(e, t) {
    return e instanceof File ? e : f(e.data.buffer, e.filename, t ?? "text/plain");
}
function f(e, t, n) {
    return new File([e], t, { type: n });
}
let p = [
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
function T(e) {
    return m(e.name, e.type);
}
function m(e, t) {
    e = e?.toLowerCase() ?? "";
    let n = s().find(p, (n) =>
        null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e),
    );
    return null != n ? n.klass : "unknown";
}
function g(e) {
    return r().filesize(e);
}
let S = [
    [E.GuildFeatures.MAX_FILE_SIZE_250_MB, A.q9],
    [E.GuildFeatures.MAX_FILE_SIZE_100_MB, A.w6],
    [E.GuildFeatures.MAX_FILE_SIZE_50_MB, A.eZ],
];
function N(e) {
    let t = d.default.getCurrentUser(),
        n = u.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let i = o.A.getGuild(e);
    return Math.max(
        null != i
            ? (function (e) {
                  let { enabled: t } = l.E.getConfig({ location: "getGuildMaxFileSize" });
                  return S.reduce((n, i) => {
                      let [r, a] = i;
                      return t && r === E.GuildFeatures.MAX_FILE_SIZE_250_MB ? n : e.features.has(r) && a > n ? a : n;
                  }, E.TbF);
              })(i)
            : E.TbF,
        n,
    );
}
function C(e, t) {
    let n = N(t);
    return Array.from(e).some((e) => e.size > n);
}
function O(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > (0, _.jS)({ location: "uploadSumTooLarge" })
    );
}
function R(e) {
    let { guildId: t, onClick: n, maxSize: i, hideLearnMore: r } = e,
        a = (0, c.Xq)((i ?? N(t)) / 1024, { useKibibytes: !0 }),
        s = (0, c.Xq)(A.f3 / 1024, { useKibibytes: !0 });
    return !0 === r
        ? h.intl.format(h.t["+R2TzS"], { maxSize: a, premiumMaxSize: s })
        : h.intl.format(h.t.tRuxk9, { maxSize: a, premiumMaxSize: s, onClick: n });
}
