"use strict";
n.d(t, { A: () => l, E: () => s });
var r = n(942381),
    i = n(265690),
    a = n(121894);
let s = (0, i.h)((e, t) => ({
        selectedUserIds: {},
        addUsers: (n, r) => {
            let { selectedUserIds: i } = t(),
                s = new Set([...(i[n] ?? new Set()), ...r]);
            (0, a.r)(() => {
                e({ selectedUserIds: { ...i, [n]: s } });
            });
        },
        removeUser: (n, r) => {
            let { selectedUserIds: i } = t(),
                s = i[n];
            if (null == s) return;
            let o = [...s].filter((e) => e !== r);
            (0, a.r)(() => {
                e({ selectedUserIds: { ...i, [n]: new Set(o) } });
            });
        },
        clearSelection: (n) => {
            let { selectedUserIds: r } = t();
            null != r &&
                (0, a.r)(() => {
                    e({ selectedUserIds: { ...r, [n]: new Set() } });
                });
        },
    })),
    o = new Set();
function l(e) {
    return s(
        (t) => ({
            selectedUserIds: t.selectedUserIds[e] ?? o,
            addUsers: (n) => {
                t.addUsers(e, n);
            },
            removeUser: (n) => {
                t.removeUser(e, n);
            },
            clearSelection: () => {
                t.clearSelection(e);
            },
        }),
        r.x,
    );
}
