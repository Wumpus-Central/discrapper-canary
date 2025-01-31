n.d(t, {
    W: () => s,
    l: () => a
});
var i = n(430824),
    r = n(388032);
let a = (e) => {
        switch (e) {
            case 'home':
            case 'guide':
                return r.intl.string(r.t.VbpLyc);
            case 'browse':
                return r.intl.string(r.t.et6wam);
            case 'customize':
                return r.intl.string(r.t.h9mGOD);
            case 'linked-roles':
                return r.intl.string(r.t.ghtnsr);
        }
        return null;
    },
    s = (e, t, n) => {
        switch (e) {
            case 'linked-roles':
                var r;
                if (null == n) break;
                let a = i.Z.getRole(n, t);
                if (null == a || (null === (r = a.tags) || void 0 === r ? void 0 : r.guild_connections) !== null) break;
                return a.name;
        }
        return null;
    };
