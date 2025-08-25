n.d(t, { Z: () => i });
var r = n(573707);
let i = {
    decode: o,
    TAG_HEADER_SIZE: 5,
};
function o(e, t) {
    let n = r.Z.get();
    if (void 0 !== n && void 0 !== e)
        try {
            return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t));
        } catch (e) {}
    return a(t.map((e) => String.fromCharCode(e)).join(""));
}
function a(e) {
    try {
        return decodeURIComponent(escape(e));
    } catch (t) {
        return e;
    }
}
