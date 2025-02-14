n.d(t, { E: () => d });
var i,
    s = n(15729),
    r = n(731965),
    l = n(433517);
let a = '__DEBUG_PROFILE_EFFECTS_STORE',
    o = { profileEffects: null !== (i = l.K.get(a)) && void 0 !== i ? i : {} },
    c = (e) => {
        l.K.set(a, e.profileEffects);
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
