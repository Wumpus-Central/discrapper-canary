r.d(t, { W: () => i }), r(413496), r(433524), r(35282), r(415506);
var n = r(73800),
    o = r(250683),
    c = r(974167);
function i(e) {
    let { fingerprintBase64: t, chunkSize: r, desiredLength: i } = e,
        l = n.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = o.toByteArray(t),
                n = (0, c.Dq)(e, i, r);
            if (null == n) return null;
            let l = RegExp(".{1,".concat(r, "}"), "g"),
                a = n.match(l);
            return null == a ? null : Array.from(a);
        }, [r, t, i]);
    if (null != t && "" !== t && null == l) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return l;
}
