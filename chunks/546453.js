a.d(e, { w: () => o });
var r = a(617726),
    _ = a(151122),
    n = a(166394);
let o = (0, _._I)(() => ({
    name: 'ModuleMetadata',
    setup(t) {
        (t.on('beforeEnvelope', (t) => {
            (0, r.gv)(t, (t, e) => {
                if ('event' === e) {
                    let e = Array.isArray(t) ? t[1] : void 0;
                    e && ((0, n.CC)(e), (t[1] = e));
                }
            });
        }),
            t.on('applyFrameMetadata', (e) => {
                if (e.type) return;
                let a = t.getOptions().stackParser;
                (0, n.GY)(a, e);
            }));
    }
}));
