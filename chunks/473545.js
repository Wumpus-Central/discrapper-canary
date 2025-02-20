n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(41776),
    c = n(314897),
    a = n(924301),
    u = n(482241),
    s = n(894017),
    d = n(765305),
    g = n(388032);
function f(e) {
    let { guildEventId: t, guildId: n, recurrenceId: f } = e,
        b = (0, l.e7)([o.Z], () => o.Z.isLurking(n), [n]),
        p = (0, l.e7)([c.default], () => c.default.getId()),
        {
            rsvped: v,
            baseRsvp: h,
            recurrenceRsvp: y
        } = (0, l.cj)(
            [a.ZP],
            () => ({
                rsvped: a.ZP.isInterestedInEventRecurrence(t, f),
                baseRsvp: a.ZP.getRsvp(t, null, p),
                recurrenceRsvp: a.ZP.getRsvp(t, f, p)
            }),
            [f, t, p]
        ),
        O = (0, s.Z)(f, t);
    if (b || (null == O ? void 0 : O.is_canceled)) return null;
    let N = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = (null == h ? void 0 : h.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
            l = e ? null : f;
        u.Z.updateRsvp(t, l, n, r);
    };
    return (0, r.jsxs)(i.sNh, {
        id: v ? g.NW.string(g.t['7M5gaG']) : g.NW.string(g.t.FXixvL),
        label: v ? g.NW.string(g.t['7M5gaG']) : g.NW.string(g.t.FXixvL),
        action: void 0,
        children: [
            (0, r.jsx)(i.sNh, {
                id: g.NW.string(g.t.lwZCFR),
                label: g.NW.string(g.t.lwZCFR),
                action: () => N(!1)
            }),
            (0, r.jsx)(i.sNh, {
                id: g.NW.string(g.t.uoorxs),
                label: g.NW.string(g.t.uoorxs),
                action: () => N(!0),
                disabled: null != y
            })
        ]
    });
}
