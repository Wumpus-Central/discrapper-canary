let l;
var i = n(350036);
let r = new Map(),
    a = new Map(),
    s = new Set(),
    o = Promise.resolve(),
    u = 0;
function d(e) {
    let t = r.get(e);
    if (null != t) return t;
    if (!(e in i.pb)) {
        let t = Promise.resolve(null);
        return (r.set(e, t), t);
    }
    let n = u;
    return (
        (o = (t = o
            .then(async () => {
                let t = await (null == l &&
                    (l = Promise.resolve()
                        .then(() => (0, i.A)())
                        .catch(() => null)
                        .then((e) => (null == e && (l = void 0), e))),
                l);
                return null == t ? null : t.loadGrammar(i.pb[e]);
            })
            .then((t) => {
                if (n !== u) return null;
                if (null == t) return (r.delete(e), a.delete(e), null);
                for (let n of (a.set(e, t), s)) n(e);
                return t;
            })
            .catch(() => (n !== u || (r.delete(e), a.delete(e)), null))).then(
            () => {},
            () => {},
        )),
        r.set(e, t),
        t
    );
}
n.d(
    t,
    {},
    {
        W6: function () {
            (u++, (l = void 0), r.clear(), a.clear());
        },
        gf: function (e) {
            return (s.add(e), () => s.delete(e));
        },
        k3: function (e) {
            return d(e);
        },
        vo: function (e) {
            return a.has(e) ? (a.get(e) ?? null) : (d(e), null);
        },
    },
);
