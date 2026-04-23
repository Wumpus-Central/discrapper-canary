i.d(t, { A: () => o });
var n = i(9631),
    r = i(643479);
let o = {
    read: function (e, t, i) {
        return i && t[0].compressionMethod !== r.Gl
            ? (function (e, t) {
                  if (t[0].compressionMethod !== r.FH) return {};
                  let i = new DataView(e.buffer.slice(t[0].offset, t[0].offset + t[0].length));
                  return (0, r.mF)(i, t[0].compressionMethod, "utf-8", "dataview")
                      .then(a)
                      .catch(() => ({}));
              })(e, t)
            : (function (e, t) {
                  try {
                      var i;
                      let n = t.reduce((e, t) => e + t.length, 0),
                          r = new Uint8Array(n),
                          o = 0,
                          s = ((i = e), Array.isArray(i) ? new DataView(Uint8Array.from(i).buffer).buffer : i.buffer);
                      for (let e = 1; e <= t.length; e++) {
                          let i = t.find((t) => t.chunkNumber === e);
                          if (!i) throw Error(`ICC chunk ${e} not found`);
                          let n = s.slice(i.offset, i.offset + i.length),
                              a = new Uint8Array(n);
                          r.set(a, o), (o += a.length);
                      }
                      return a(new DataView(r.buffer));
                  } catch (e) {
                      return {};
                  }
              })(e, t);
    },
};
function a(e) {
    let t = e.buffer,
        i = e.getUint32();
    if (e.byteLength !== i) throw Error("ICC profile length not matching");
    if (e.byteLength < 84) throw Error("ICC profile too short");
    let o = {},
        a = Object.keys(n.x);
    for (let t = 0; t < a.length; t++) {
        let i = a[t],
            r = n.x[i],
            s = r.value(e, parseInt(i, 10)),
            l = s;
        r.description && (l = r.description(s)), (o[r.name] = { value: s, description: l });
    }
    if ("acsp" !== s(t.slice(36, 40))) throw Error("ICC profile: missing signature");
    if (t.length < 132) return o;
    let u = e.getUint32(128),
        c = 132;
    for (let i = 0; i < u; i++) {
        var d;
        if (((d = c), t.length < d + 12)) break;
        let i = (0, r.hT)(e, c, 4),
            n = e.getUint32(c + 4),
            a = e.getUint32(c + 8);
        if (n > t.length) break;
        let u = (0, r.hT)(e, n, 4);
        if ("desc" === u) {
            let r = e.getUint32(n + 8);
            if (r > a) return o;
            l(o, i, s(t.slice(n + 12, n + r + 11)));
        } else if ("mluc" === u) {
            let t = e.getUint32(n + 8),
                a = e.getUint32(n + 12),
                s = n + 16,
                u = [];
            for (let i = 0; i < t; i++) {
                let t = (0, r.hT)(e, s + 0, 2),
                    i = (0, r.hT)(e, s + 2, 2),
                    o = e.getUint32(s + 4),
                    l = e.getUint32(s + 8),
                    c = (0, r.gq)(e, n + l, o);
                u.push({ languageCode: t, countryCode: i, text: c }), (s += a);
            }
            if (1 === t) l(o, i, u[0].text);
            else {
                let e = {};
                for (let t = 0; t < u.length; t++) e[`${u[t].languageCode}-${u[t].countryCode}`] = u[t].text;
                l(o, i, e);
            }
        } else
            "text" === u ? l(o, i, s(t.slice(n + 8, n + a - 7))) : "sig " === u && l(o, i, s(t.slice(n + 8, n + 12)));
        c += 12;
    }
    return o;
}
function s(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e));
}
function l(e, t, i) {
    n.f[t] ? (e[n.f[t].name] = { value: i, description: i }) : (e[t] = { value: i, description: i });
}
