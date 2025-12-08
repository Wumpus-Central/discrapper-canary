function l(e, t, n) {
    e.assets[0].p = t;
    let l = e.layers.findIndex((e) => "flag" === e.nm);
    return (
        e.layers[l].shapes[0].it.forEach((t, i) => {
            "gr" === e.layers[l].shapes[0].it[i].ty &&
                e.layers[l].shapes[0].it[i].it.findIndex((e) => "fl" === e.ty) >= 0 &&
                (e.layers[l].shapes[0].it[i].it[1].c.k = [...n.map((e) => e / 256), 1]);
        }),
        e
    );
}
n.d(t, { Z: () => l }), n(388685);
