function n(t, e, r) {
    if (!e.has(t)) throw TypeError('attempted to ' + r + ' private field on non-instance');
    return e.get(t);
}
r.d(e, { J: () => n });
