_.d(e, { w: () => o });
var a = _(617726),
    r = _(151122),
    n = _(166394);
let o = (0, r._I)(() => ({
    name: "ModuleMetadata",
    setup(t) {
        t.on("beforeEnvelope", (t) => {
            (0, a.gv)(t, (t, e) => {
                if ("event" === e) {
                    let e = Array.isArray(t) ? t[1] : void 0;
                    e && ((0, n.CC)(e), (t[1] = e));
                }
            });
        }),
            t.on("applyFrameMetadata", (e) => {
                if (e.type) return;
                let _ = t.getOptions().stackParser;
                (0, n.GY)(_, e);
            });
    },
}));
