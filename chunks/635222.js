n.d(t, { A: () => i }), n(896048);
var r = n(7584);
let i = (e) => {
    let t = new Map();
    for (let i of e) {
        var n;
        if (null != i.id) {
            t.set(i.id, i);
            continue;
        }
        let e = null != (n = r.Ay.convertSurrogateToBase(i.surrogates)) ? n : i;
        t.set(e.name, e);
    }
    return t;
};
