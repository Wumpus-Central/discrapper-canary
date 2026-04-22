"use strict";
n.d(t, { Ay: () => _, E0: () => E, Vr: () => h, c5: () => d, eI: () => f });
var r = n(64700),
    i = n(485845),
    s = n(155718),
    a = n(734057),
    o = n(577700),
    l = n(264322),
    u = n(210978);
let d = "no primary app command for application",
    c = [s.kc.PRIMARY_ENTRY_POINT];
async function _(e, t) {
    let n,
        r = a.A.getChannel(e);
    if (
        (null != r &&
            null == (n = f({ channel: r, type: "channel" }, t)) &&
            (await (0, l.Zn)({ type: "application", applicationId: t }), (n = f({ channel: r, type: "channel" }, t))),
        null != n)
    )
        return n;
    throw Error(d);
}
function f(e, t) {
    return l.Ay.query(
        e,
        { commandTypes: [s.kc.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: u.M.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0,
        },
    ).commands[0];
}
function E(e, t) {
    var n, i;
    let { commands: s, loading: a } =
            ((n = e),
            (i = t),
            (0, l.ZA)(
                n,
                { commandTypes: c },
                {
                    placeholderCount: 1,
                    scoreMethod: u.M.COMMAND_ONLY,
                    applicationId: i,
                    allowFetch: !1,
                    allowApplicationState: !0,
                },
            )),
        d = s[0],
        _ = null != d;
    return (
        r.useEffect(() => {
            _ || a || (0, o.$)({ type: "application", applicationId: t });
        }, [t, _, a]),
        d
    );
}
function h(e) {
    let { context: t, applicationId: n, botUserId: r } = e,
        a = E(t, n);
    return (
        null != a &&
        null != r &&
        (function (e) {
            if (null == e) return !1;
            let t = null != e.integration_types && e.integration_types.includes(i.b.USER_INSTALL),
                n = null != e.contexts && e.contexts.includes(s.OL.BOT_DM);
            return t && n;
        })(a)
    );
}
