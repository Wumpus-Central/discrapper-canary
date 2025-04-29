n.d(e, { Z: () => f });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(41776),
    c = n(314897),
    a = n(924301),
    u = n(482241),
    s = n(894017),
    d = n(765305),
    g = n(388032);
function f(t) {
    let { guildEventId: e, guildId: n, recurrenceId: f } = t,
        b = (0, r.e7)([o.Z], () => o.Z.isLurking(n), [n]),
        p = (0, r.e7)([c.default], () => c.default.getId()),
        {
            rsvped: v,
            baseRsvp: h,
            recurrenceRsvp: y
        } = (0, r.cj)(
            [a.ZP],
            () => ({
                rsvped: a.ZP.isInterestedInEventRecurrence(e, f),
                baseRsvp: a.ZP.getRsvp(e, null, p),
                recurrenceRsvp: a.ZP.getRsvp(e, f, p)
            }),
            [f, e, p]
        ),
        O = (0, s.Z)(f, e);
    if (b || (null == O ? void 0 : O.is_canceled)) return null;
    let j = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == h ? void 0 : h.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
            r = t ? null : f;
        u.Z.updateRsvp(e, r, n, l);
    };
    return (0, l.jsxs)(i.sNh, {
        id: v ? g.intl.string(g.t['7M5gaG']) : g.intl.string(g.t.FXixvL),
        label: v ? g.intl.string(g.t['7M5gaG']) : g.intl.string(g.t.FXixvL),
        action: void 0,
        children: [
            (0, l.jsx)(i.sNh, {
                id: g.intl.string(g.t.lwZCFR),
                label: g.intl.string(g.t.lwZCFR),
                action: () => j(!1)
            }),
            (0, l.jsx)(i.sNh, {
                id: g.intl.string(g.t.uoorxs),
                label: g.intl.string(g.t.uoorxs),
                action: () => j(!0),
                disabled: null != y
            })
        ]
    });
}
