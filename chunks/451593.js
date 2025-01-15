n.d(t, {
    E: function () {
        return d;
    }
});
var i,
    s = n(15729),
    r = n(731965),
    a = n(433517);
let l = '__DEBUG_PROFILE_EFFECTS_STORE',
    o = { profileEffects: null !== (i = a.K.get(l)) && void 0 !== i ? i : {} },
    c = (e) => {
        a.K.set(l, e.profileEffects);
    },
    d = (0, s.U)((e) => ({
        ...o,
        upsertConfig: (t) =>
            (0, r.j)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.id] = t), c(n), n;
                });
            }),
        deleteConfig: (t) =>
            (0, r.j)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], c(n), n;
                });
            })
    }));
