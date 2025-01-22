r.d(n, {
    Ng: function () {
        return b;
    },
    OC: function () {
        return C;
    },
    dg: function () {
        return I;
    },
    dp: function () {
        return g;
    },
    f3: function () {
        return v;
    },
    nA: function () {
        return T;
    },
    qF: function () {
        return m;
    },
    uV: function () {
        return y;
    },
    vY: function () {
        return A;
    }
});
var i = r(47120);
var a = r(112456),
    o = r.n(a),
    s = r(392711),
    l = r.n(s),
    u = r(430824),
    c = r(594174),
    d = r(74538),
    f = r(981631),
    p = r(474936);
let h = 524288000,
    _ = 524288000;
function m(e, n) {
    return e instanceof File ? e : g(e.data, e.filename, n);
}
function g(e, n, i) {
    let a = r(230318);
    if (null == n && ((n = 'unknown'), 'type' in e)) {
        let r = a.extension(e.type);
        r && (n += '.'.concat(r));
    }
    return null == i && ('type' in e && (i = e.type), (i = null != i ? i : a.lookup(n))), new File([e], n, { type: i });
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
function v(e) {
    return y(e.name, e.type);
}
function y(e, n) {
    var r;
    e = null !== (r = null == e ? void 0 : e.toLowerCase()) && void 0 !== r ? r : '';
    let i = l().find(E, (r) => (null != r.reType && null != n ? r.reType.test(n) : null != r.reName && '' !== e && r.reName.test(e)));
    return null != i ? i.klass : 'unknown';
}
function b(e) {
    return o().filesize(e);
}
function I(e) {
    let n = c.default.getCurrentUser(),
        r = d.ZP.getUserMaxFileSize(n);
    if (null == e) return r;
    let i = u.Z.getGuild(e);
    return Math.max(null != i ? p.HO[i.premiumTier].limits.fileSize : f.mBz, r);
}
function T(e, n) {
    let r = I(n);
    return Array.from(e).some((e) => e.size > r);
}
function S(e) {
    let n = 0;
    for (let r of e) n += r.size;
    return n;
}
function A(e) {
    return S(e) > C();
}
function C() {
    let e = c.default.getCurrentUser();
    return null != e && e.isStaff() ? _ : h;
}
