function l(e, t, n) {
    e.assets[0].p = t;
    let l = e.layers.findIndex((e) => "flag" === e.nm);
    return (
        e.layers[l].shapes[0].it.forEach((t, r) => {
            "gr" === e.layers[l].shapes[0].it[r].ty &&
                e.layers[l].shapes[0].it[r].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                (e.layers[l].shapes[0].it[r].it[1].c.k = [...n.map((e) => e / 256), 1]);
        }),
        e
    );
}
n.d(t, { A: () => l }), n(896048);
