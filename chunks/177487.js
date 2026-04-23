i.d(t, { A: () => r });
var n = i(145282);
let r = {
    decode: function (e, t) {
        let i = n.A.get();
        if (void 0 !== i && void 0 !== e)
            try {
                return new i(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t));
            } catch (e) {}
        var r = t.map((e) => String.fromCharCode(e)).join("");
        try {
            return decodeURIComponent(escape(r));
        } catch (e) {
            return r;
        }
    },
    TAG_HEADER_SIZE: 5,
};
