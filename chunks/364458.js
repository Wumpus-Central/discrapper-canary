function i(e) {
    let t = {};
    for (let n of e)
        for (let e in n)
            e in t
                ? (t[e] = {
                      ...t[e],
                      ...n[e]
                  })
                : (t[e] = { ...n[e] });
    return t;
}
n.d(t, { Z: () => i }), n(47120);
