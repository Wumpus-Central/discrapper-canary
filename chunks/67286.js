"use strict";
n.d(t, { A: () => a });
var r = n(643479);
let i = [6, 7, 99],
    a = { get: s };
function s(e, t, n) {
    if (o(t)) {
        t.type = "image/jpeg";
        let i = n + t.JPEGInterchangeFormat.value;
        (t.image = e.buffer.slice(i, i + t.JPEGInterchangeFormatLength.value)),
            (0, r.L$)(t, "base64", function () {
                return (0, r.Zo)(this.image);
            });
    }
    return t;
}
function o(e) {
    return (
        e &&
        (void 0 === e.Compression || i.includes(e.Compression.value)) &&
        e.JPEGInterchangeFormat &&
        e.JPEGInterchangeFormat.value &&
        e.JPEGInterchangeFormatLength &&
        e.JPEGInterchangeFormatLength.value
    );
}
