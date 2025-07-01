function r() {
    return 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== n.g ? n.g : 'undefined' != typeof self ? self : Object.create(null);
}
(n.d(t, { R: () => r }), n(980754));
