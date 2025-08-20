e.d(n, { Z: () => v });
var l = e(951288);
e(647438);
var i = e(442837),
    r = e(481060),
    o = e(41776),
    a = e(314897),
    c = e(924301),
    s = e(482241),
    u = e(894017),
    d = e(765305),
    g = e(388032);
function v(t) {
    let { guildEventId: n, guildId: e, recurrenceId: v } = t,
        b = (0, i.e7)([o.Z], () => o.Z.isLurking(e), [e]),
        f = (0, i.e7)([a.default], () => a.default.getId()),
        {
            rsvped: p,
            baseRsvp: j,
            recurrenceRsvp: h,
        } = (0, i.cj)(
            [c.ZP],
            () => ({
                rsvped: c.ZP.isInterestedInEventRecurrence(n, v),
                baseRsvp: c.ZP.getRsvp(n, null, f),
                recurrenceRsvp: c.ZP.getRsvp(n, v, f),
            }),
            [v, n, f],
        ),
        y = (0, u.Z)(v, n);
    if (b || (null == y ? void 0 : y.is_canceled)) return null;
    let Z = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == j ? void 0 : j.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
            i = t ? null : v;
        s.Z.updateRsvp(n, i, e, l);
    };
    return (0, l.jsxs)(r.sNh, {
        id: p ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL),
        label: p ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL),
        action: void 0,
        children: [
            (0, l.jsx)(r.sNh, {
                id: g.intl.string(g.t.lwZCFR),
                label: g.intl.string(g.t.lwZCFR),
                action: () => Z(!1),
            }),
            (0, l.jsx)(r.sNh, {
                id: g.intl.string(g.t.uoorxs),
                label: g.intl.string(g.t.uoorxs),
                action: () => Z(!0),
                disabled: null != h,
            }),
        ],
    });
}
