n.d(t, { Z: () => o });
var r = n(463424);
let i = [6, 7, 99],
    o = { get: a };
function a(e, t, n) {
    if (s(t)) {
        t.type = "image/jpeg";
        let i = n + t.JPEGInterchangeFormat.value;
        (t.image = e.buffer.slice(i, i + t.JPEGInterchangeFormatLength.value)),
            (0, r.eN)(t, "base64", function () {
                return (0, r.sq)(this.image);
            });
    }
    return t;
}
function s(e) {
    return (
        e &&
        (void 0 === e.Compression || i.includes(e.Compression.value)) &&
        e.JPEGInterchangeFormat &&
        e.JPEGInterchangeFormat.value &&
        e.JPEGInterchangeFormatLength &&
        e.JPEGInterchangeFormatLength.value
    );
}
