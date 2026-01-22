function r(e) {
    let t = [
        "prefix is non-null and namespace is null",
        "prefix not bound to a namespace",
        "prefix inte bundet till en namnrymd",
        /Namespace prefix .+ is not defined/,
    ];
    for (let n = 0; n < t.length; n++) if (new RegExp(t[n]).test(e.message)) return !0;
    return !1;
}

function i(e) {
    let t = e.match(/<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/);
    if (!t) return e;
    let n = t[1],
        r = a(e),
        i = s(e).filter((e) => -1 === r.indexOf(e));
    return 0 === i.length ? e : c(e, n, l(i));
}

function a(e) {
    let t,
        n = [],
        r = /xmlns:([\w-]+)=["'][^"']+["']/g;
    for (; null !== (t = r.exec(e)); ) -1 === n.indexOf(t[1]) && n.push(t[1]);
    return n;
}

function s(e) {
    let t,
        n = [],
        r = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
    for (; null !== (t = r.exec(e)); ) {
        let e = t[1];
        "xmlns" !== e && "xml" !== e && -1 === n.indexOf(e) && n.push(e);
    }
    return n;
}
n.d(t, {
    E: () => i,
    g: () => r,
});
let o = {
    xmp: "http://ns.adobe.com/xap/1.0/",
    tiff: "http://ns.adobe.com/tiff/1.0/",
    exif: "http://ns.adobe.com/exif/1.0/",
    dc: "http://purl.org/dc/elements/1.1/",
    xmpMM: "http://ns.adobe.com/xap/1.0/mm/",
    stEvt: "http://ns.adobe.com/xap/1.0/sType/ResourceEvent#",
    stRef: "http://ns.adobe.com/xap/1.0/sType/ResourceRef#",
    photoshop: "http://ns.adobe.com/photoshop/1.0/",
};

function l(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = o[r] || "http://fallback.namespace/" + r;
        t.push(" xmlns:" + r + '="' + i + '"');
    }
    return t.join("");
}

function c(e, t, n) {
    let r = RegExp("<" + t + "([^>]*)>");
    return e.replace(r, "<" + t + "$1" + n + ">");
}
