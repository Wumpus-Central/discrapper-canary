n.d(t, {
    Q: () => r,
    r: () => i
}),
    n(35282),
    n(539854),
    n(364964);
let r = /^[a-z0-9_+\-.#]+$/i;
function i(e) {
    let t,
        n = [],
        r = /\\|```/g;
    for (; null != (t = r.exec(e)); ) {
        if ('\\' === t[0]) {
            r.lastIndex += 1;
            continue;
        }
        n.push(t.index);
    }
    return n;
}
