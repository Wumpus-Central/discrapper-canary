n.d(t, {
    Aw: () => I,
    GD: () => y,
    Hb: () => O,
    Iu: () => C,
    SH: () => v,
    TX: () => b,
    VE: () => g,
    bB: () => T,
    o2: () => A,
    ww: () => m,
}),
    n(747238),
    n(896048);
var r = n(796873),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(71393),
    l = n(287809),
    c = n(255438),
    u = n(927578),
    d = n(652215),
    f = n(788868),
    p = n(985018);
let _ = 524288e3,
    h = 524288e3;

function m(e, t) {
    return e instanceof File ? e : g(e.data.buffer, e.filename, null != t ? t : "text/plain");
}

function g(e, t, n) {
    return new File([e], t, {
        type: n,
    });
}
let E = [
    {
        reType: /^image\/vnd.adobe.photoshop/,
        klass: "photoshop",
    },
    {
        reType: /^image\/svg\+xml/,
        klass: "webcode",
    },
    {
        reType: /^image\//,
        klass: "image",
    },
    {
        reType: /^video\//,
        klass: "video",
    },
    {
        reName: /\.pdf$/,
        klass: "acrobat",
    },
    {
        reName: /\.ae/,
        klass: "ae",
    },
    {
        reName: /\.sketch$/,
        klass: "sketch",
    },
    {
        reName: /\.ai$/,
        klass: "ai",
    },
    {
        reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
        klass: "archive",
    },
    {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: "code",
    },
    {
        reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
        klass: "document",
    },
    {
        reName: /\.(?:xls|xlsx|numbers|csv)$/,
        klass: "spreadsheet",
    },
    {
        reName: /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/,
        klass: "webcode",
    },
    {
        reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/,
        klass: "audio",
    },
];

function b(e) {
    return y(e.name, e.type);
}

function y(e, t) {
    var n;
    e = null != (n = null == e ? void 0 : e.toLowerCase()) ? n : "";
    let r = s().find(E, (n) =>
        null != n.reType && null != t ? n.reType.test(t) : null != n.reName && "" !== e && n.reName.test(e),
    );
    return null != r ? r.klass : "unknown";
}

function O(e) {
    return i().filesize(e);
}

function A(e) {
    let t = l.default.getCurrentUser(),
        n = u.Ay.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = o.A.getGuild(e);
    return Math.max(null != r ? f.TG[r.premiumTier].limits.fileSize : d.TbF, n);
}

function v(e, t) {
    let n = A(t);
    return Array.from(e).some((e) => e.size > n);
}

function S(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t;
}

function I(e) {
    return S(e) > T();
}

function T() {
    let e = l.default.getCurrentUser();
    return null != e && e.isStaff() ? h : _;
}

function C(e) {
    let { guildId: t, onClick: n } = e,
        r = (0, c.Xq)(A(t) / 1024, {
            useKibibytes: !0,
        }),
        i = (0, c.Xq)(f.f3 / 1024, {
            useKibibytes: !0,
        });
    return p.intl.format(p.t.tRuxk9, {
        maxSize: r,
        premiumMaxSize: i,
        onClick: n,
    });
}
