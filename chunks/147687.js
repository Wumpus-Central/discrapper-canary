i.d(t, { A: () => a });
var n = i(668459),
    r = i(234291),
    o = i(643479);
let a = {
    read: function (e, t) {
        let i = {};
        for (let a = 0; a < t.length; a++) {
            let u = n.A.getLongAt(e, t[a] + r.vW),
                c = (0, o.hT)(e, t[a] + r.XU, r.LV);
            c === r.eZ
                ? ((i["Pixels Per Unit X"] = (function (e, t, i) {
                      if (!s(e, t, i, 0, 4)) return;
                      let o = n.A.getLongAt(e, t + r.LO + 0);
                      return { value: o, description: "" + o };
                  })(e, t[a], u)),
                  (i["Pixels Per Unit Y"] = (function (e, t, i) {
                      if (!s(e, t, i, 4, 4)) return;
                      let o = n.A.getLongAt(e, t + r.LO + 4);
                      return { value: o, description: "" + o };
                  })(e, t[a], u)),
                  (i["Pixel Units"] = (function (e, t, i) {
                      if (!s(e, t, i, 8, 1)) return;
                      let o = n.A.getByteAt(e, t + r.LO + 8);
                      return { value: o, description: 1 === o ? "meters" : "Unknown" };
                  })(e, t[a], u)))
                : c === r.J$ &&
                  (i["Modify Date"] = (function (e, t, i) {
                      if (!s(e, t, i, 0, 7)) return;
                      let o = n.A.getShortAt(e, t + r.LO),
                          a = n.A.getByteAt(e, t + r.LO + 2),
                          u = n.A.getByteAt(e, t + r.LO + 3),
                          c = n.A.getByteAt(e, t + r.LO + 4),
                          d = n.A.getByteAt(e, t + r.LO + 5),
                          f = n.A.getByteAt(e, t + r.LO + 6);
                      return {
                          value: [o, a, u, c, d, f],
                          description: `${l(o, 4)}-${l(a, 2)}-${l(u, 2)} ${l(c, 2)}:${l(d, 2)}:${l(f, 2)}`,
                      };
                  })(e, t[a], u));
        }
        return i;
    },
};
function s(e, t, i, n, o) {
    return n + o <= i && t + r.LO + n + o <= e.byteLength;
}
function l(e, t) {
    return `${"0".repeat(t - ("" + e).length)}${e}`;
}
