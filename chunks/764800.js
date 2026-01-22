i.d(e, { $: () => T }), i(321073);
var n = i(274372),
    l = i(399925),
    s = i(419954),
    r = i(780964),
    u = i(696016),
    a = i(985018);
let o = (() => {
        let t = [u.wN];
        for (let e = 10; e <= u.qh; e += 10) t.push(e);
        return t[t.length - 1] !== u.qh && t.push(u.qh), t;
    })(),
    T = (0, s.sN)(r.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => a.intl.string(a.t.yfsrDI),
        useSubtitle: () => a.intl.string(a.t.vlDHdC),
        minValue: u.wN,
        maxValue: u.qh,
        getInitialValue: () => n.A.getSettings().maxAutoClips,
        onValueRender: (t) => "".concat(Math.floor(t)),
        asValueChanges: (t) => l.e6(Math.floor(t)),
        markers: o,
        onMarkerRender: (t) => "".concat(Math.floor(t)),
    });
