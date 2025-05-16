let r;
n.d(t, { j: () => o });
var i = n(668757);
let a = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_libdiscore_notestore',
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
function o() {
    return (
        void 0 === r &&
            (r = a.getCurrentConfig(
                { location: 'default' },
                {
                    disable: !(0, i.X6)(),
                    autoTrackExposure: !0
                }
            ).enabled),
        r
    );
}
