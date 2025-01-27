r.d(n, {
    Ng: function () {
        return A;
    },
    OC: function () {
        return D;
    },
    dg: function () {
        return C;
    },
    dp: function () {
        return b;
    },
    f3: function () {
        return T;
    },
    iL: function () {
        return L;
    },
    nA: function () {
        return N;
    },
    qF: function () {
        return y;
    },
    uV: function () {
        return S;
    },
    vY: function () {
        return O;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(200651),
    s = r(112456),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(430824),
    f = r(594174),
    p = r(424218),
    h = r(74538),
    _ = r(981631),
    m = r(474936),
    g = r(388032);
let E = 524288000,
    v = 524288000;
function y(e, n) {
    return e instanceof File ? e : b(e.data, e.filename, n);
}
function b(e, n, i) {
    let a = r(230318);
    if (null == n && ((n = 'unknown'), 'type' in e)) {
        let r = a.extension(e.type);
        r && (n += '.'.concat(r));
    }
    return null == i && ('type' in e && (i = e.type), (i = null != i ? i : a.lookup(n))), new File([e], n, { type: i });
}
let I = [
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
function T(e) {
    return S(e.name, e.type);
}
function S(e, n) {
    var r;
    e = null !== (r = null == e ? void 0 : e.toLowerCase()) && void 0 !== r ? r : '';
    let i = c().find(I, (r) => (null != r.reType && null != n ? r.reType.test(n) : null != r.reName && '' !== e && r.reName.test(e)));
    return null != i ? i.klass : 'unknown';
}
function A(e) {
    return l().filesize(e);
}
function C(e) {
    let n = f.default.getCurrentUser(),
        r = h.ZP.getUserMaxFileSize(n);
    if (null == e) return r;
    let i = d.Z.getGuild(e);
    return Math.max(null != i ? m.HO[i.premiumTier].limits.fileSize : _.mBz, r);
}
function N(e, n) {
    let r = C(n);
    return Array.from(e).some((e) => e.size > r);
}
function R(e) {
    let n = 0;
    for (let r of e) n += r.size;
    return n;
}
function O(e) {
    return R(e) > D();
}
function D() {
    let e = f.default.getCurrentUser();
    return null != e && e.isStaff() ? v : E;
}
function L(e) {
    let { guildId: n, onClick: r } = e,
        i = (0, p.BU)(C(n) / 1024, { useKibibytes: !0 }),
        a = (0, p.BU)(m.Uq / 1024, { useKibibytes: !0 }),
        s = g.intl.formatToPlainString(g.t.q5fTZm, { maxSize: i }),
        l = g.intl.formatToPlainString(g.t.htbuIS, { premiumMaxSize: a }),
        u = g.intl.format(g.t.fjSvsL, { onClick: r });
    return (0, o.jsxs)(o.Fragment, {
        children: [s, ' ', l.replace('\n', ' '), '. ', u]
    });
}
