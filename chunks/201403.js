r.d(t, { w: () => o });
var n = r(690889),
    a = r(688560),
    i = r(824643);
let o = (0, a._I)(() => ({
    name: "ModuleMetadata",
    setup(e) {
        e.on("beforeEnvelope", (e) => {
            (0, n.gv)(e, (e, t) => {
                if ("event" === t) {
                    let t = Array.isArray(e) ? e[1] : void 0;
                    t && ((0, i.CC)(t), (e[1] = t));
                }
            });
        }),
            e.on("applyFrameMetadata", (t) => {
                if (t.type) return;
                let r = e.getOptions().stackParser;
                (0, i.GY)(r, t);
            });
    },
}));
