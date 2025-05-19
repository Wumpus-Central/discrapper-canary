n.d(t, {
    j: () => s,
    s: () => o
});
var r = n(668757),
    i = n(818083);
let a = '2025-05_libdiscore_notestore',
    o = (0, i.B)({
        kind: 'user',
        id: a,
        label: 'libdiscore NoteStore Migration',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Use libdiscore NoteStore',
                config: { enabled: !0 }
            }
        ]
    });
function s() {
    return (0, r.X6)() && (0, r.Md)().isExperimentIdEnabled(a);
}
