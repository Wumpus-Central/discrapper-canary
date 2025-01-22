r.d(n, {
    W: function () {
        return s;
    },
    l: function () {
        return o;
    }
});
var i = r(430824),
    a = r(388032);
let o = (e) => {
        switch (e) {
            case 'home':
            case 'guide':
                return a.intl.string(a.t.VbpLyc);
            case 'browse':
                return a.intl.string(a.t.et6wam);
            case 'customize':
                return a.intl.string(a.t.h9mGOD);
            case 'linked-roles':
                return a.intl.string(a.t.ghtnsr);
        }
        return null;
    },
    s = (e, n, r) => {
        switch (e) {
            case 'linked-roles':
                var a;
                if (null == r) break;
                let o = i.Z.getRole(r, n);
                if (null == o || (null === (a = o.tags) || void 0 === a ? void 0 : a.guild_connections) !== null) break;
                return o.name;
        }
        return null;
    };
