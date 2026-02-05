l.d(t, { A: () => o });
var n = l(942381),
    i = l(265690),
    s = l(121894);
let a = (0, i.h)((e, t) => ({
        selectedUserIds: {},
        addUsers: (l, n) => {
            let { selectedUserIds: i } = t(),
                a = new Set([...(i[l] ?? new Set()), ...n]);
            (0, s.r)(() => {
                e({ selectedUserIds: { ...i, [l]: a } });
            });
        },
        removeUser: (l, n) => {
            let { selectedUserIds: i } = t(),
                a = i[l];
            if (null == a) return;
            let r = [...a].filter((e) => e !== n);
            (0, s.r)(() => {
                e({ selectedUserIds: { ...i, [l]: new Set(r) } });
            });
        },
        clearSelection: (l) => {
            let { selectedUserIds: n } = t();
            null != n &&
                (0, s.r)(() => {
                    e({ selectedUserIds: { ...n, [l]: new Set() } });
                });
        },
    })),
    r = new Set();
function o(e) {
    return a(
        (t) => ({
            selectedUserIds: t.selectedUserIds[e] ?? r,
            addUsers: (l) => {
                t.addUsers(e, l);
            },
            removeUser: (l) => {
                t.removeUser(e, l);
            },
            clearSelection: () => {
                t.clearSelection(e);
            },
        }),
        n.x,
    );
}
