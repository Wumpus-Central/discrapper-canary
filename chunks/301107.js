n.d(t, { W: () => a }), n(413496), n(433524), n(35282), n(415506);
var l = n(473749),
    i = n(250683),
    r = n(974167);
function a(e) {
    let { fingerprintBase64: t, chunkSize: n, desiredLength: a } = e,
        o = l.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = i.toByteArray(t),
                l = (0, r.Dq)(e, a, n);
            if (null == l) return null;
            let o = RegExp(".{1,".concat(n, "}"), "g"),
                s = l.match(o);
            return null == s ? null : Array.from(s);
        }, [n, t, a]);
    if (null != t && "" !== t && null == o) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return o;
}
