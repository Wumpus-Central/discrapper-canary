n.d(t, { Z: () => i });
var r = n(217305);
let i = {
    decode: a,
    TAG_HEADER_SIZE: 5,
};
function a(e, t) {
    let n = r.Z.get();
    if (void 0 !== n && void 0 !== e)
        try {
            return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t));
        } catch (e) {}
    return o(t.map((e) => String.fromCharCode(e)).join(""));
}
function o(e) {
    try {
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
