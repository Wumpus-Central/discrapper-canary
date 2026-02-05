n.d(t, { s: () => i });
let i = (0, n(353640).v)((e, t) => ({
    openMenus: new Set(),
    isMenuOpenForMessage: (e) => Array.from(t().openMenus).some((t) => null != e && t.startsWith(`${e}:`)),
    openMenu: (t, n) => {
        let i = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.add(i), { openMenus: t };
        });
    },
    closeMenu: (t, n) => {
        let i = `${t}:${n}`;
        e((e) => {
            let t = new Set(e.openMenus);
            return t.delete(i), { openMenus: t };
        });
    },
}));
