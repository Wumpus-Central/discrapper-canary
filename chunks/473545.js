e.d(n, { Z: () => f });
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(41776),
    a = e(314897),
    c = e(924301),
    u = e(482241),
    s = e(894017),
    d = e(765305),
    g = e(388032);
function f(t) {
    let { guildEventId: n, guildId: e, recurrenceId: f } = t,
        b = (0, i.e7)([o.Z], () => o.Z.isLurking(e), [e]),
        p = (0, i.e7)([a.default], () => a.default.getId()),
        {
            rsvped: v,
            baseRsvp: h,
            recurrenceRsvp: y
        } = (0, i.cj)(
            [c.ZP],
            () => ({
                rsvped: c.ZP.isInterestedInEventRecurrence(n, f),
                baseRsvp: c.ZP.getRsvp(n, null, p),
                recurrenceRsvp: c.ZP.getRsvp(n, f, p)
            }),
            [f, n, p]
        ),
        E = (0, s.Z)(f, n);
    if (b || (null == E ? void 0 : E.is_canceled)) return null;
    let O = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == h ? void 0 : h.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
            i = t ? null : f;
        u.Z.updateRsvp(n, i, e, l);
    };
    return (0, l.jsxs)(r.sNh, {
        id: v ? g.intl.string(g.t['7M5gaG']) : g.intl.string(g.t.FXixvL),
        label: v ? g.intl.string(g.t['7M5gaG']) : g.intl.string(g.t.FXixvL),
        action: void 0,
        children: [
            (0, l.jsx)(r.sNh, {
                id: g.intl.string(g.t.lwZCFR),
                label: g.intl.string(g.t.lwZCFR),
                action: () => O(!1)
            }),
            (0, l.jsx)(r.sNh, {
                id: g.intl.string(g.t.uoorxs),
                label: g.intl.string(g.t.uoorxs),
                action: () => O(!0),
                disabled: null != y
            })
        ]
    });
}
