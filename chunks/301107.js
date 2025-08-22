r.d(t, { W: () => l }), r(413496), r(433524), r(35282), r(415506);
var n = r(647438),
    o = r(250683),
    c = r(974167);
function l(e) {
    let { fingerprintBase64: t, chunkSize: r, desiredLength: l } = e,
        i = n.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = o.toByteArray(t),
                n = (0, c.Dq)(e, l, r);
            if (null == n) return null;
            let i = RegExp(".{1,".concat(r, "}"), "g"),
                s = n.match(i);
            return null == s ? null : Array.from(s);
        }, [r, t, l]);
    if (null != t && "" !== t && null == i) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return i;
}
