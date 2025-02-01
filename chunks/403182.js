n.d(t, {
    Ng: () => T,
    OC: () => C,
    dg: () => b,
    dp: () => E,
    f3: () => y,
    iL: () => R,
    nA: () => S,
    qF: () => g,
    uV: () => I,
    vY: () => N
}),
    n(47120),
    n(757143);
var i = n(200651),
    r = n(112456),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(430824),
    u = n(594174),
    c = n(424218),
    d = n(74538),
    f = n(981631),
    _ = n(474936),
    p = n(388032);
let h = 524288000,
    m = 524288000;
function g(e, t) {
    return e instanceof File ? e : E(e.data, e.filename, t);
}
function E(e, t, i) {
    let r = n(230318);
    if (null == t && ((t = 'unknown'), 'type' in e)) {
        let n = r.extension(e.type);
        n && (t += '.'.concat(n));
    }
    return null == i && ('type' in e && (i = e.type), (i = null != i ? i : r.lookup(t))), new File([e], t, { type: i });
}
let v = [
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
function y(e) {
    return I(e.name, e.type);
}
function I(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let i = o().find(v, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != i ? i.klass : 'unknown';
}
function T(e) {
    return a().filesize(e);
}
function b(e) {
    let t = u.default.getCurrentUser(),
        n = d.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let i = l.Z.getGuild(e);
    return Math.max(null != i ? _.HO[i.premiumTier].limits.fileSize : f.mBz, n);
}
function S(e, t) {
    let n = b(t);
    return Array.from(e).some((e) => e.size > n);
}
function A(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t;
}
function N(e) {
    return A(e) > C();
}
function C() {
    let e = u.default.getCurrentUser();
    return null != e && e.isStaff() ? m : h;
}
function R(e) {
    let { guildId: t, onClick: n } = e,
        r = (0, c.BU)(b(t) / 1024, { useKibibytes: !0 }),
        a = (0, c.BU)(_.Uq / 1024, { useKibibytes: !0 }),
        s = p.intl.formatToPlainString(p.t.q5fTZm, { maxSize: r }),
        o = p.intl.formatToPlainString(p.t.htbuIS, { premiumMaxSize: a }),
        l = p.intl.format(p.t.fjSvsL, { onClick: n });
    return (0, i.jsxs)(i.Fragment, {
        children: [s, ' ', o.replace('\n', ' '), '. ', l]
    });
}
