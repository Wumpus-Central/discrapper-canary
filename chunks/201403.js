n.d(t, { w: () => o });
var r = n(690889),
    i = n(688560),
    a = n(824643);
let o = (0, i._I)(() => ({
    name: "ModuleMetadata",
    setup(e) {
        e.on("beforeEnvelope", (e) => {
            (0, r.gv)(e, (e, t) => {
                if ("event" === t) {
                    let t = Array.isArray(e) ? e[1] : void 0;
                    t && ((0, a.CC)(t), (e[1] = t));
                }
            });
        }),
            e.on("applyFrameMetadata", (t) => {
                if (t.type) return;
                let n = e.getOptions().stackParser;
                (0, a.GY)(n, t);
            });
    },
}));
