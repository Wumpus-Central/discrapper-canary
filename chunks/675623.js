n.d(e, {
    A: () => y,
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(857071),
    o = n(961350),
    a = n(698441),
    c = n(496092),
    s = n(722260),
    d = n(988794),
    g = n(985018);

function y(t) {
    let { guildEventId: e, guildId: n, recurrenceId: y } = t,
        f = (0, r.bG)([u.A], () => u.A.isLurking(n), [n]),
        b = (0, r.bG)([o.default], () => o.default.getId()),
        {
            rsvped: p,
            baseRsvp: A,
            recurrenceRsvp: v,
        } = (0, r.cf)(
            [a.Ay],
            () => ({
                rsvped: a.Ay.isInterestedInEventRecurrence(e, y),
                baseRsvp: a.Ay.getRsvp(e, null, b),
                recurrenceRsvp: a.Ay.getRsvp(e, y, b),
            }),
            [y, e, b],
        ),
        E = (0, s.A)(y, e);
    if (f || (null == E ? void 0 : E.is_canceled)) return null;
    let O = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == A ? void 0 : A.response) === d.Qi.INTERESTED ? d.Qi.UNINTERESTED : d.Qi.INTERESTED,
            r = t ? null : y;
        c.A.updateRsvp(e, r, n, l);
    };
    return (0, l.jsxs)(i.Drp, {
        id: p ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        label: p ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        action: void 0,
        children: [
            (0, l.jsx)(i.Drp, {
                id: g.intl.string(g.t.lwZCFT),
                label: g.intl.string(g.t.lwZCFT),
                action: () => O(!1),
            }),
            (0, l.jsx)(i.Drp, {
                id: g.intl.string(g.t.uoorxi),
                label: g.intl.string(g.t.uoorxi),
                action: () => O(!0),
                disabled: null != v,
            }),
        ],
    });
}
