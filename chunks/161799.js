n.d(e, { z: () => c }), n(539854);
var i = n(435064),
    l = n(39604),
    s = n(509613),
    u = n(313789),
    r = n(356659),
    a = n(388032);
let o = (() => {
        let t = [r.qb];
        for (let e = 10; e <= r.b0; e += 10) t.push(e);
        return t[t.length - 1] !== r.b0 && t.push(r.b0), t;
    })(),
    c = (0, s.UO)(u.n.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => a.intl.string(a.t.yfsrDI),
        useSubtitle: () => a.intl.string(a.t.vlDHdC),
        minValue: r.qb,
        maxValue: r.b0,
        getInitialValue: () => i.Z.getSettings().maxAutoClips,
        onValueRender: (t) => "".concat(Math.floor(t)),
        asValueChanges: (t) => l.W6(Math.floor(t)),
        markers: o,
        onMarkerRender: (t) => "".concat(Math.floor(t)),
    });
