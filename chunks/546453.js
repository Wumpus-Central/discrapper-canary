a.d(e, { w: () => _ });
var r = a(617726),
    n = a(151122),
    o = a(166394);
let _ = (0, n._I)(() => ({
    name: 'ModuleMetadata',
    setup(t) {
        t.on('beforeEnvelope', (t) => {
            (0, r.gv)(t, (t, e) => {
                if ('event' === e) {
                    let e = Array.isArray(t) ? t[1] : void 0;
                    e && ((0, o.CC)(e), (t[1] = e));
                }
            });
        }),
            t.on('applyFrameMetadata', (e) => {
                if (e.type) return;
                let a = t.getOptions().stackParser;
                (0, o.GY)(a, e);
            });
    }
}));
