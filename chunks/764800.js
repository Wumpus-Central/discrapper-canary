i.d(e, { $: () => d }), i(321073);
var n = i(274372),
    l = i(399925),
    s = i(419954),
    r = i(780964),
    a = i(696016),
    u = i(985018);
let o = (() => {
        let t = [a.wN];
        for (let e = 10; e <= a.qh; e += 10) t.push(e);
        return t[t.length - 1] !== a.qh && t.push(a.qh), t;
    })(),
    d = (0, s.sN)(r.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => u.intl.string(u.t.yfsrDI),
        useSubtitle: () => u.intl.string(u.t.vlDHdC),
        minValue: a.wN,
        maxValue: a.qh,
        getInitialValue: () => n.A.getSettings().maxAutoClips,
        onValueRender: (t) => `${Math.floor(t)}`,
        asValueChanges: (t) => l.e6(Math.floor(t)),
        markers: o,
        onMarkerRender: (t) => `${Math.floor(t)}`,
    });
