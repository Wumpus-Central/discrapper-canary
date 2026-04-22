n.d(t, { A: () => a });
var i = n(64700),
    l = n(155718),
    s = n(842209);
function a(e, t, n) {
    let { commands: a, application: r } = s.ZV(e, t, n);
    return {
        application: r,
        commands: i.useMemo(
            () =>
                a?.filter(
                    (e) =>
                        !0 !== e.nsfw &&
                        e.options?.find((e) => {
                            let { type: t } = e;
                            return t === l.n4.SUB_COMMAND || t === l.n4.SUB_COMMAND_GROUP;
                        }) == null,
                ),
            [a],
        ),
    };
}
