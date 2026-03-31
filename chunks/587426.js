"use strict";
n.d(t, { A: () => l, E: () => a });
var r = n(942381),
    i = n(265690),
    s = n(121894);
let a = (0, i.h)((e, t) => ({
        selectedUserIds: {},
        addUsers: (n, r) => {
            let { selectedUserIds: i } = t(),
                a = new Set([...(i[n] ?? new Set()), ...r]);
            (0, s.r)(() => {
                e({ selectedUserIds: { ...i, [n]: a } });
            });
        },
        removeUser: (n, r) => {
            let { selectedUserIds: i } = t(),
                a = i[n];
            if (null == a) return;
            let o = [...a].filter((e) => e !== r);
            (0, s.r)(() => {
                e({ selectedUserIds: { ...i, [n]: new Set(o) } });
            });
        },
        clearSelection: (n) => {
            let { selectedUserIds: r } = t();
            null != r &&
                (0, s.r)(() => {
                    e({ selectedUserIds: { ...r, [n]: new Set() } });
                });
        },
    })),
    o = new Set();
function l(e) {
    return a(
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
