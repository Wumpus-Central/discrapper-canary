l.d(t, { Z: () => r }), l(47120);
var n = l(232713),
    a = l(65400),
    i = l(731965);
let o = (0, a.F)((e, t) => ({
        selectedUserIds: {},
        addUsers: (l, n) => {
            var a;
            let { selectedUserIds: o } = t(),
                s = new Set([...(null !== (a = o[l]) && void 0 !== a ? a : new Set()), ...n]);
            (0, i.j)(() => {
                e({
                    selectedUserIds: {
                        ...o,
                        [l]: s
                    }
                });
            });
        },
        removeUser: (l, n) => {
            let { selectedUserIds: a } = t(),
                o = a[l];
            if (null == o) return;
            let s = [...o].filter((e) => e !== n);
            (0, i.j)(() => {
                e({
                    selectedUserIds: {
                        ...a,
                        [l]: new Set(s)
                    }
                });
            });
        },
        clearSelection: (l) => {
            let { selectedUserIds: n } = t();
            null != n &&
                (0, i.j)(() => {
                    e({
                        selectedUserIds: {
                            ...n,
                            [l]: new Set()
                        }
                    });
                });
        }
    })),
    s = new Set();
function r(e) {
    return o((t) => {
        var l;
        return {
            selectedUserIds: null !== (l = t.selectedUserIds[e]) && void 0 !== l ? l : s,
            addUsers: (l) => {
                t.addUsers(e, l);
            },
            removeUser: (l) => {
                t.removeUser(e, l);
            },
            clearSelection: () => {
                t.clearSelection(e);
            }
        };
    }, n.X);
}
