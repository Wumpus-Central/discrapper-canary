"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(155718),
    s = n(842209);
function a(e, t, n) {
    let { commands: a, application: o } = s.ZV(e, t, n);
    return {
        application: o,
        commands: r.useMemo(
            () =>
                a?.filter(
                    (e) =>
                        !0 !== e.nsfw &&
                        e.options?.find((e) => {
                            let { type: t } = e;
                            return t === i.n4.SUB_COMMAND || t === i.n4.SUB_COMMAND_GROUP;
                        }) == null,
                ),
            [a],
        ),
    };
}
