n.d(e, { Z: () => f });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    o = n(41776),
    u = n(314897),
    c = n(924301),
    a = n(482241),
    s = n(894017),
    d = n(765305),
    g = n(388032);
function f(t) {
    let { guildEventId: e, guildId: n, recurrenceId: f } = t,
        b = (0, r.e7)([o.Z], () => o.Z.isLurking(n), [n]),
        p = (0, r.e7)([u.default], () => u.default.getId()),
        {
            rsvped: v,
            baseRsvp: E,
            recurrenceRsvp: y,
        } = (0, r.cj)(
            [c.ZP],
            () => ({
                rsvped: c.ZP.isInterestedInEventRecurrence(e, f),
                baseRsvp: c.ZP.getRsvp(e, null, p),
                recurrenceRsvp: c.ZP.getRsvp(e, f, p),
            }),
            [f, e, p],
        ),
        O = (0, s.Z)(f, e);
    if (b || (null == O ? void 0 : O.is_canceled)) return null;
    let P = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == E ? void 0 : E.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
            r = t ? null : f;
        a.Z.updateRsvp(e, r, n, l);
    };
    return (0, l.jsxs)(i.sNh, {
        id: v ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        label: v ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        action: void 0,
        children: [
            (0, l.jsx)(i.sNh, {
                id: g.intl.string(g.t.lwZCFT),
                label: g.intl.string(g.t.lwZCFT),
                action: () => P(!1),
            }),
            (0, l.jsx)(i.sNh, {
                id: g.intl.string(g.t.uoorxi),
                label: g.intl.string(g.t.uoorxi),
                action: () => P(!0),
                disabled: null != y,
            }),
        ],
    });
}
