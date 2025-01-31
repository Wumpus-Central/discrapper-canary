function r() {
    let t = 'function' == typeof WeakSet,
        e = t ? new WeakSet() : [];
    return [
        function (a) {
            if (t) return !!e.has(a) || (e.add(a), !1);
            for (let t = 0; t < e.length; t++) if (e[t] === a) return !0;
            return e.push(a), !1;
        },
        function (a) {
            if (t) e.delete(a);
            else
                for (let t = 0; t < e.length; t++)
                    if (e[t] === a) {
                        e.splice(t, 1);
                        break;
                    }
        }
    ];
}
a.d(e, { i: () => r });
