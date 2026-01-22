function r(e, t) {
    return "".concat(e, ":").concat(t);
}
n.d(t, { s: () => l }), n(896048);
let l = (0, n(353640).v)((e, t) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(t().openMenus).some((t) => null != e && t.startsWith("".concat(e, ":"))),
    openMenu: (t, n) => {
        let l = r(t, n);
        e((e) => {
            let t = new Set(e.openMenus);
            return t.add(l), { openMenus: t };
        });
    },
    closeMenu: (t, n) => {
        let l = r(t, n);
        e((e) => {
            let t = new Set(e.openMenus);
            return t.delete(l), { openMenus: t };
        });
    },
}));
