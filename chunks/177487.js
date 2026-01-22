n.d(t, { A: () => i });
var r = n(145282);
let i = {
    decode: a,
    TAG_HEADER_SIZE: 5,
};
function a(e, t) {
    let n = r.A.get();
    if (void 0 !== n && void 0 !== e)
        try {
            return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t));
        } catch (e) {}
    return s(t.map((e) => String.fromCharCode(e)).join(""));
}
function s(e) {
    try {
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
