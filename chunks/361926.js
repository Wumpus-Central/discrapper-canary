n.d(t, { Ay: () => _, E0: () => A, Vr: () => h, c5: () => c, eI: () => E });
var i = n(582128),
    r = n(485845),
    a = n(155718),
    s = n(734057),
    l = n(577700),
    o = n(264322),
    d = n(210978);
let c = "no primary app command for application",
    u = [a.kc.PRIMARY_ENTRY_POINT];
async function _(e, t) {
    let n,
        i = s.A.getChannel(e);
    if (
        (null != i &&
            null == (n = E({ channel: i, type: "channel" }, t)) &&
            (await (0, o.Zn)({ type: "application", applicationId: t }), (n = E({ channel: i, type: "channel" }, t))),
        null != n)
    )
        return n;
    throw Error(c);
}
function E(e, t) {
    return o.Ay.query(
        e,
        { commandTypes: [a.kc.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: d.M.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0,
        },
    ).commands[0];
}
function A(e, t) {
    var n, r;
    let { commands: a, loading: s } =
            ((n = e),
            (r = t),
            (0, o.ZA)(
                n,
                { commandTypes: u },
                {
                    placeholderCount: 1,
                    scoreMethod: d.M.COMMAND_ONLY,
                    applicationId: r,
                    allowFetch: !1,
                    allowApplicationState: !0,
                },
            )),
        c = a[0],
        _ = null != c;
    return (
        i.useEffect(() => {
            _ || s || (0, l.$)({ type: "application", applicationId: t });
        }, [t, _, s]),
        c
    );
}
function h(e) {
    let { context: t, applicationId: n, botUserId: i } = e,
        s = A(t, n);
    return (
        null != s &&
        null != i &&
        (function (e) {
            if (null == e) return !1;
            let t = null != e.integration_types && e.integration_types.includes(r.b.USER_INSTALL),
                n = null != e.contexts && e.contexts.includes(a.OL.BOT_DM);
            return t && n;
        })(s)
    );
}
