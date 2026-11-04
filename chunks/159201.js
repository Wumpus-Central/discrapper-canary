var i = n(767589);
n.d(
    t,
    {},
    {
        a: function (e, t, n, r, a) {
            let s = null != e ? n.fromBinary(n.toBinary(e), i.Su) : n.create();
            if (!1 === t(s)) return null;
            let l = r.create();
            return ((l[a] = s), l);
        },
        f: function (e, t) {
            let n = e.fields.find((e) => e.localName === t);
            if (null == n) throw Error(`Unknown proto field name ${String(t)}`);
            return n.T();
        },
    },
);
