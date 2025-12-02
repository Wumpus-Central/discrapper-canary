n.d(e, { Z: () => c }), n(539854);
var i = n(435064),
    r = n(39604),
    l = n(509613),
    s = n(313789),
    u = n(356659),
    a = n(388032);
let o = (() => {
        let t = [u.qb];
        for (let e = 10; e <= u.b0; e += 10) t.push(e);
        return t[t.length - 1] !== u.b0 && t.push(u.b0), t;
    })(),
    c = (0, l.UO)(s.n.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => a.intl.string(a.t.yfsrDI),
        useSubtitle: () => a.intl.string(a.t.vlDHdC),
        getInitialValue: () => i.Z.getSettings().maxAutoClips,
        minValue: u.qb,
        maxValue: u.b0,
        onValueRender: (t) => "".concat(Math.floor(t)),
        asValueChanges: (t) => r.W6(Math.floor(t)),
        markers: o,
        onMarkerRender: (t) => "".concat(Math.floor(t)),
    });
