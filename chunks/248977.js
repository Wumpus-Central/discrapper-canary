function i(e) {
    let t = '';
    for (let n of Object.keys(e)) {
        let i = e[n];
        void 0 !== i && ('boolean' == typeof i && (i = i ? 'yes' : 'no'), (t += ''.concat(n, '=').concat(i, ',')));
    }
    return t;
}
n.d(t, { Z: () => i }), n(47120);
