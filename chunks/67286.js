i.d(t, { A: () => o });
var n = i(643479);
let r = [6, 7, 99],
    o = {
        get: function (e, t, i) {
            var o;
            if (
                (o = t) &&
                (void 0 === o.Compression || r.includes(o.Compression.value)) &&
                o.JPEGInterchangeFormat &&
                o.JPEGInterchangeFormat.value &&
                o.JPEGInterchangeFormatLength &&
                o.JPEGInterchangeFormatLength.value
            ) {
                t.type = "image/jpeg";
                let r = i + t.JPEGInterchangeFormat.value;
                (t.image = e.buffer.slice(r, r + t.JPEGInterchangeFormatLength.value)),
                    (0, n.L$)(t, "base64", function () {
                        return (0, n.Zo)(this.image);
                    });
            }
            return t;
        },
    };
