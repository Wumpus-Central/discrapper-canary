n.d(t, { Aw: () => N, GD: () => T, Hb: () => g, Iu: () => C, TX: () => p, VE: () => I, o2: () => S, ww: () => h });
var i = n(796873),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(71393),
    o = n(287809),
    d = n(255438),
    c = n(158045),
    u = n(292348),
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
function g(e) {
    return r().filesize(e);
}
let m = [
    [_.GuildFeatures.MAX_FILE_SIZE_100_MB, E.w6],
    [_.GuildFeatures.MAX_FILE_SIZE_50_MB, E.eZ],
];
function S(e) {
    let t = o.default.getCurrentUser(),
        n = c.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let i = l.A.getGuild(e);
    return Math.max(
        null != i
            ? m.reduce((e, t) => {
                  let [n, r] = t;
                  return i.features.has(n) && r > e ? r : e;
              }, _.TbF)
            : _.TbF,
        n,
    );
}
function N(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > (0, u.jS)({ location: "uploadSumTooLarge" })
    );
}
function C(e) {
    let { guildId: t, maxSize: n } = e,
        i = (0, d.Xq)((n ?? S(t)) / 1024, { useKibibytes: !0 }),
        r = (0, c.EJ)(E.PremiumTypes.TIER_2, { useSpace: !1 });
    return A.intl.format(A.t["+R2TzS"], { maxSize: i, premiumMaxSize: r });
}
