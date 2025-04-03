function k(a, i, x) {
    a.assets[0].p = i;
    let k = a.layers.findIndex((a) => 'flag' === a.nm);
    return (
        a.layers[k].shapes[0].it.forEach((i, r) => {
            'gr' === a.layers[k].shapes[0].it[r].ty && a.layers[k].shapes[0].it[r].it.findIndex((a) => 'fl' === a.ty) >= 0 && (a.layers[k].shapes[0].it[r].it[1].c.k = [...x.map((a) => a / 256), 1]);
        }),
        a
    );
}
x.d(i, { Z: () => k }), x(47120);
