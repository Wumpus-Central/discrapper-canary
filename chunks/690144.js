n.d(t, { $: () => u }), n(321073);
var i = n(274372),
    s = n(399925),
    l = n(419954),
    a = n(780964),
    r = n(696016),
    o = n(985018);
let d = (() => {
        let e = [r.wN];
        for (let t = 10; t <= r.qh; t += 10) e.push(t);
        return e[e.length - 1] !== r.qh && e.push(r.qh), e;
    })(),
    u = (0, l.sN)(a.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => o.intl.string(o.t.yfsrDI),
        useSubtitle: () => o.intl.string(o.t.vlDHdC),
        minValue: r.wN,
        maxValue: r.qh,
        getInitialValue: () => i.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => s.e6(Math.floor(e)),
        markers: d,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    });
