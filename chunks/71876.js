n.d(t, { A: () => i });
function i(e, t, n) {
    e.assets[0].p = t;
    let i = e.layers.findIndex((e) => "flag" === e.nm);
    return (
        e.layers[i].shapes[0].it.forEach((t, l) => {
            "gr" === e.layers[i].shapes[0].it[l].ty &&
                e.layers[i].shapes[0].it[l].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                (e.layers[i].shapes[0].it[l].it[1].c.k = [...n.map((e) => e / 256), 1]);
        }),
        e
    );
}
