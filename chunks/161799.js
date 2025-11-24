n.d(e, { Z: () => c }), n(539854);
var i = n(435064),
    r = n(39604),
    l = n(509613),
    u = n(313789),
    s = n(356659),
    a = n(388032);
let o = (() => {
        let t = [s.qb];
        for (let e = 10; e <= s.b0; e += 10) t.push(e);
        return t[t.length - 1] !== s.b0 && t.push(s.b0), t;
    })(),
    c = (0, l.UO)(u.n.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => a.intl.string(a.t.yfsrDI),
        useSubtitle: () => a.intl.string(a.t.vlDHdC),
        getInitialValue: () => i.Z.getSettings().maxAutoClips,
        minValue: s.qb,
        maxValue: s.b0,
        onValueRender: (t) => "".concat(Math.floor(t)),
        asValueChanges: (t) => r.W6(Math.floor(t)),
        markers: o,
        onMarkerRender: (t) => "".concat(Math.floor(t)),
    });
