n.d(e, { Z: () => f });
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    u = n(41776),
    o = n(314897),
    c = n(924301),
    a = n(482241),
    s = n(894017),
    d = n(765305),
    g = n(388032);
function f(t) {
    let { guildEventId: e, guildId: n, recurrenceId: f } = t,
        b = (0, r.e7)([u.Z], () => u.Z.isLurking(n), [n]),
        v = (0, r.e7)([o.default], () => o.default.getId()),
        {
            rsvped: E,
            baseRsvp: p,
            recurrenceRsvp: Z,
        } = (0, r.cj)(
            [c.ZP],
            () => ({
                rsvped: c.ZP.isInterestedInEventRecurrence(e, f),
                baseRsvp: c.ZP.getRsvp(e, null, v),
                recurrenceRsvp: c.ZP.getRsvp(e, f, v),
            }),
            [f, e, v],
        ),
        y = (0, s.Z)(f, e);
    if (b || (null == y ? void 0 : y.is_canceled)) return null;
    let O = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == p ? void 0 : p.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
            r = t ? null : f;
        a.Z.updateRsvp(e, r, n, l);
    };
    return (0, l.jsxs)(i.sNh, {
        id: E ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL),
        label: E ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL),
        action: void 0,
        children: [
            (0, l.jsx)(i.sNh, {
                id: g.intl.string(g.t.lwZCFR),
                label: g.intl.string(g.t.lwZCFR),
                action: () => O(!1),
            }),
            (0, l.jsx)(i.sNh, {
                id: g.intl.string(g.t.uoorxs),
                label: g.intl.string(g.t.uoorxs),
                action: () => O(!0),
                disabled: null != Z,
            }),
        ],
    });
}
