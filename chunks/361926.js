"use strict";
n.d(t, { Ay: () => _, E0: () => p, Vr: () => m, c5: () => c, eI: () => f });
var r = n(64700),
    i = n(485845),
    a = n(155718),
    s = n(734057),
    o = n(577700),
    l = n(264322),
    u = n(210978);
let c = "no primary app command for application",
    d = [a.kc.PRIMARY_ENTRY_POINT];
async function _(e, t) {
    let n,
        r = s.A.getChannel(e);
    if (
        (null != r &&
            null == (n = f({ channel: r, type: "channel" }, t)) &&
            (await (0, l.Zn)({ type: "application", applicationId: t }), (n = f({ channel: r, type: "channel" }, t))),
        null != n)
    )
        return n;
    throw Error(c);
}
function f(e, t) {
    return l.Ay.query(
        e,
        { commandTypes: [a.kc.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: u.M.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0,
        },
    ).commands[0];
}
function p(e, t) {
    let { commands: n, loading: i } = h(e, t),
        a = n[0],
        s = null != a;
    return (
        r.useEffect(() => {
            s || i || (0, o.$)({ type: "application", applicationId: t });
        }, [t, s, i]),
        a
    );
}
function h(e, t) {
    return (0, l.ZA)(
        e,
        { commandTypes: d },
        {
            placeholderCount: 1,
            scoreMethod: u.M.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0,
        },
    );
}
function m(e) {
    let { context: t, applicationId: n, botUserId: r } = e,
        i = p(t, n);
    return null != i && null != r && g(i);
}
function g(e) {
    if (null == e) return !1;
    let t = null != e.integration_types && e.integration_types.includes(i.b.USER_INSTALL),
        n = null != e.contexts && e.contexts.includes(a.OL.BOT_DM);
    return t && n;
}
