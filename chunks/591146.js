n.d(t, {
    CL: () => a,
    Ml: () => o,
    VM: () => s
});
var r = n(338390);
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_desktop_refresh_fast_follows',
    label: 'Desktop Refresh Fast Follows',
    defaultConfig: {
        largerGuildIcons: !1,
        darkerGuildListBackground: !1,
        distinctBorders: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Larger Guild Icons',
            config: {
                largerGuildIcons: !0,
                darkerGuildListBackground: !1,
                distinctBorders: !1
            }
        },
        {
            id: 2,
            label: 'Darker Guild List Background',
            config: {
                largerGuildIcons: !1,
                darkerGuildListBackground: !0,
                distinctBorders: !1
            }
        },
        {
            id: 3,
            label: 'Larger Guild Icons and Darker Guild List Background',
            config: {
                largerGuildIcons: !0,
                darkerGuildListBackground: !0,
                distinctBorders: !1
            }
        },
        {
            id: 4,
            label: 'More Distinct Chassis Borders',
            config: {
                largerGuildIcons: !1,
                darkerGuildListBackground: !1,
                distinctBorders: !0
            }
        },
        {
            id: 5,
            label: 'Larger Guild Icons and More Distinct Chassis Borders',
            config: {
                largerGuildIcons: !0,
                darkerGuildListBackground: !1,
                distinctBorders: !0
            }
        }
    ]
});
function o(e) {
    let t = (0, r.Z)(e);
    return i.useExperiment({ location: e }).largerGuildIcons && !t;
}
function a(e) {
    return i.useExperiment({ location: e }).darkerGuildListBackground;
}
function s(e) {
    return i.useExperiment({ location: e }).distinctBorders;
}
