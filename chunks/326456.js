function n(e) {
    let t = [
        "prefix is non-null and namespace is null",
        "prefix not bound to a namespace",
        "prefix inte bundet till en namnrymd",
        /Namespace prefix .+ is not defined/,
    ];
    for (let i = 0; i < t.length; i++) if (new RegExp(t[i]).test(e.message)) return !0;
    return !1;
}
function r(e) {
    var t, i, n;
    let r,
        a = e.match(/<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/);
    if (!a) return e;
    let s = a[1],
        l = (function (e) {
            let t,
                i = [],
                n = /xmlns:([\w-]+)=["'][^"']+["']/g;
            for (; null !== (t = n.exec(e)); ) -1 === i.indexOf(t[1]) && i.push(t[1]);
            return i;
        })(e),
        u = (function (e) {
            let t,
                i = [],
                n = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
            for (; null !== (t = n.exec(e)); ) {
                let e = t[1];
                "xmlns" !== e && "xml" !== e && -1 === i.indexOf(e) && i.push(e);
            }
            return i;
        })(e).filter((e) => -1 === l.indexOf(e));
    return 0 === u.length
        ? e
        : ((t = e),
          (i = s),
          (n = (function (e) {
              let t = [];
              for (let i = 0; i < e.length; i++) {
                  let n = e[i],
                      r = o[n] || "http://fallback.namespace/" + n;
                  t.push(" xmlns:" + n + '="' + r + '"');
              }
              return t.join("");
          })(u)),
          (r = RegExp("<" + i + "([^>]*)>")),
          t.replace(r, "<" + i + "$1" + n + ">"));
}
i.d(t, { E: () => r, g: () => n });
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
