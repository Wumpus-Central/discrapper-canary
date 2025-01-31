function i(e, t) {
    let { style: n } = e;
    t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
    let i = t.style;
    return (
        null != i &&
            Object.keys(i).forEach((e) => {
                n[e] = i[e];
            }),
        e
    );
}
n.d(t, { b: () => i });
