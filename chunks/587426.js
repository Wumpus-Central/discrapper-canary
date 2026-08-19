"use strict";
n.d(t, { A: () => o, E: () => s });
var i = n(462180),
    r = n(882035),
    a = n(121894);
let s = (0, r.h)((e, t) => ({
        selectedUserIds: {},
        addUsers: (n, i) => {
            let { selectedUserIds: r } = t(),
                s = new Set([...(r[n] ?? new Set()), ...i]);
            (0, a.r)(() => {
                e({ selectedUserIds: { ...r, [n]: s } });
            });
        },
        removeUser: (n, i) => {
            let { selectedUserIds: r } = t(),
                s = r[n];
            if (null == s) return;
            let l = [...s].filter((e) => e !== i);
            (0, a.r)(() => {
                e({ selectedUserIds: { ...r, [n]: new Set(l) } });
            });
        },
        clearSelection: (n) => {
            let { selectedUserIds: i } = t();
            null != i &&
                (0, a.r)(() => {
                    e({ selectedUserIds: { ...i, [n]: new Set() } });
                });
        },
    })),
    l = new Set();
function o(e) {
    return s(
        (t) => ({
            selectedUserIds: t.selectedUserIds[e] ?? l,
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
        i.x,
    );
}
