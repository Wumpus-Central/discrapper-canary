n.d(t, {
    C: () => o,
    M: () => i
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_desktop_refresh_fast_follows',
    label: 'Desktop Refresh Fast Follows',
    defaultConfig: {
        largerGuildIcons: !1,
        darkerGuildListBackground: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Larger Guild Icons',
            config: {
                largerGuildIcons: !0,
                darkerGuildListBackground: !1
            }
        },
        {
            id: 2,
            label: 'Darker Guild List Background',
            config: {
                largerGuildIcons: !1,
                darkerGuildListBackground: !0
            }
        },
        {
            id: 3,
            label: 'Larger Guild Icons and Darker Guild List Background',
            config: {
                largerGuildIcons: !0,
                darkerGuildListBackground: !0
            }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }).largerGuildIcons;
}
function o(e) {
    return r.useExperiment({ location: e }).darkerGuildListBackground;
}
