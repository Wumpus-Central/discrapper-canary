function r(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length >= 1 && n.length <= 5) return n;
    throw Error(
        "combination results in an invalid key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)),
    );
}

function i(e, t) {
    let n = Array.isArray(t) ? [...e, ...t] : [...e, t];
    if (n.length <= 5) return n;
    throw Error(
        "combination results in an invalid prefix key that has "
            .concat(n.length, " elements: ")
            .concat(JSON.stringify(n)),
    );
}
n.d(t, {
    $: () => i,
    h: () => r,
}),
    n(896048),
    n(65821),
    n(457529),
    n(860407);
