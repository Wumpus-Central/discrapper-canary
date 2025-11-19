_.d(e, { s: () => r });
var a = _(622916);
let r = (0, _(151122)._I)((t = {}) => {
    let e = {
        debugger: !1,
        stringify: !1,
        ...t,
    };
    return {
        name: "Debug",
        setup(t) {
            t.on("beforeSendEvent", (t, _) => {
                e.debugger,
                    (0, a.Cf)(() => {
                        e.stringify
                            ? (console.log(JSON.stringify(t, null, 2)),
                              _ && Object.keys(_).length && console.log(JSON.stringify(_, null, 2)))
                            : (console.log(t), _ && Object.keys(_).length && console.log(_));
                    });
            });
        },
    };
});
