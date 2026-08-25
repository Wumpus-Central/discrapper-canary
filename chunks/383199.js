d.d(n, { A: () => _ });
var a = d(477900),
    l = d(95561),
    t = d(990474),
    c = d(174459),
    e = d(183555),
    s = d(582128),
    o = d(155718),
    p = d(842209),
    r = d(900179),
    u = d(652215),
    m = d(375708),
    h = d(915008);
function _(i) {
    let { applicationId: n, commandIds: d, guildId: _, channel: A, onClick: C } = i,
        { trackUserProfileAction: M } = (0, e.NJ)(),
        { commands: N } = (function (i, n, d) {
            let { commands: a, application: l } = p.ZV(i, n, d);
            return {
                application: l,
                commands: s.useMemo(
                    () =>
                        a?.filter(
                            (i) =>
                                !0 !== i.nsfw &&
                                i.options?.find((i) => {
                                    let { type: n } = i;
                                    return n === o.n4.SUB_COMMAND || n === o.n4.SUB_COMMAND_GROUP;
                                }) == null,
                        ),
                    [a],
                ),
            };
        })(A, n, d);
    if (null == N || 0 === N.length) return null;
    function O(i) {
        C?.(),
            M({ action: "PRESS_APP_COMMAND" }),
            c.default.track(u.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: n,
                command_id: i,
                guild_id: _,
                ...(0, l.Ou)(A.id),
            });
    }
    return (0, a.jsx)(r.A, {
        heading: m.intl.string(m.t["0hKkS+"]),
        children: (0, a.jsx)("ul", {
            className: h.p,
            children: N.map((i) =>
                (0, a.jsx)(
                    "li",
                    {
                        children: (0, a.jsx)(t.Oh, {
                            commandId: i.id,
                            commandName: i.displayName,
                            commandDescription: i.displayDescription,
                            onClick: O,
                            guildId: _,
                            channelId: A.id,
                            applicationId: i.applicationId,
                        }),
                    },
                    i.id,
                ),
            ),
        }),
    });
}
