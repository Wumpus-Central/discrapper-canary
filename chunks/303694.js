n.d(t, {
    W: () => o,
    l: () => a
});
var r = n(430824),
    i = n(388032);
let a = (e) => {
        switch (e) {
            case 'home':
            case 'guide':
                return i.intl.string(i.t.VbpLyc);
            case 'browse':
                return i.intl.string(i.t.et6wam);
            case 'customize':
                return i.intl.string(i.t.h9mGOD);
            case 'linked-roles':
                return i.intl.string(i.t.ghtnsr);
        }
        return null;
    },
    o = (e, t, n) => {
        if ('linked-roles' === e) {
            var i;
            if (null == n) return null;
            let e = r.Z.getRole(n, t);
            return null == e || (null == (i = e.tags) ? void 0 : i.guild_connections) !== null ? null : e.name;
        }
        return null;
    };
