n.d(t, { W: () => i }), n(413496), n(433524), n(35282), n(415506);
var r = n(647438),
    l = n(250683),
    s = n(974167);
function i(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: i } = e,
        a = r.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = l.toByteArray(t),
                r = (0, s.Dq)(e, i, n);
            if (null == r) return null;
            let a = RegExp(".{1,".concat(n, "}"), "g"),
                o = r.match(a);
            return null == o ? null : Array.from(o);
        }, [n, t, i]);
    if (null != t && "" !== t && null == a) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return a;
}
