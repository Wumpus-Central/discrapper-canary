var i = e(582128);
let n = new Map();
e.d(
    E,
    {},
    {
        Pu: function (t) {
            i.useLayoutEffect(() => {
                if (null != t) {
                    let E;
                    return (
                        n.set(t, (n.get(t) ?? 0) + 1),
                        (E = !0),
                        () => {
                            if (!E) return;
                            E = !1;
                            let e = (n.get(t) ?? 1) - 1;
                            e > 0 ? n.set(t, e) : n.delete(t);
                        }
                    );
                }
            }, [t]);
        },
        Td: function (t) {
            return (n.get(t) ?? 0) > 0;
        },
    },
);
