(n.d(t, {
    Ng: () => O,
    OC: () => A,
    dg: () => v,
    dp: () => g,
    f3: () => b,
    iL: () => N,
    nA: () => I,
    qF: () => m,
    uV: () => y,
    vY: () => S
}),
    n(35282),
    n(388685));
var r = n(112456),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(430824),
    l = n(594174),
    c = n(424218),
    u = n(74538),
    d = n(981631),
    f = n(474936),
    _ = n(388032);
let p = 524288000,
    h = 524288000;
function m(e, t) {
    return e instanceof File ? e : g(e.data.buffer, e.filename, null != t ? t : 'text/plain');
}
function g(e, t, n) {
    return new File([e], t, { type: n });
}
let E = [
    {
        reType: /^image\/vnd.adobe.photoshop/,
        klass: 'photoshop'
    },
    {
        reType: /^image\/svg\+xml/,
        klass: 'webcode'
    },
    {
        reType: /^image\//,
        klass: 'image'
    },
    {
        reType: /^video\//,
        klass: 'video'
    },
    {
        reName: /\.pdf$/,
        klass: 'acrobat'
    },
    {
        reName: /\.ae/,
        klass: 'ae'
    },
    {
        reName: /\.sketch$/,
        klass: 'sketch'
    },
    {
        reName: /\.ai$/,
        klass: 'ai'
    },
    {
        reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
        klass: 'archive'
    },
    {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: 'code'
    },
    {
        reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
        klass: 'document'
    },
    {
        reName: /\.(?:xls|xlsx|numbers|csv)$/,
        klass: 'spreadsheet'
    },
    {
        reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
        klass: 'webcode'
    },
    {
        reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/,
        klass: 'audio'
    }
];
function b(e) {
    return y(e.name, e.type);
}
function y(e, t) {
    var n;
    e = null != (n = null == e ? void 0 : e.toLowerCase()) ? n : '';
    let r = o().find(E, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != r ? r.klass : 'unknown';
}
function O(e) {
    return i().filesize(e);
}
function v(e) {
    let t = l.default.getCurrentUser(),
        n = u.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = s.Z.getGuild(e);
    return Math.max(null != r ? f.HO[r.premiumTier].limits.fileSize : d.mBz, n);
}
function I(e, t) {
    let n = v(t);
    return Array.from(e).some((e) => e.size > n);
}
function T(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t;
}
function S(e) {
    return T(e) > A();
}
function A() {
    let e = l.default.getCurrentUser();
    return null != e && e.isStaff() ? h : p;
}
function N(e) {
    let { guildId: t, onClick: n } = e,
        r = (0, c.BU)(v(t) / 1024, { useKibibytes: !0 }),
        i = (0, c.BU)(f.Uq / 1024, { useKibibytes: !0 });
    return _.intl.format(_.t.tRuxk5, {
        maxSize: r,
        premiumMaxSize: i,
        onClick: n
    });
}
