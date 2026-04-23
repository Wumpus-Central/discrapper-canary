n.d(e, { A: () => A });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(857071),
    d = n(961350),
    s = n(698441),
    u = n(496092),
    o = n(722260),
    c = n(988794),
    g = n(985018);
function A(t) {
    let { guildEventId: e, guildId: n, recurrenceId: A } = t,
        E = (0, i.bG)([a.A], () => a.A.isLurking(n), [n]),
        m = (0, i.bG)([d.default], () => d.default.getId()),
        {
            rsvped: f,
            baseRsvp: v,
            recurrenceRsvp: y,
        } = (0, i.cf)(
            [s.Ay],
            () => ({
                rsvped: s.Ay.isInterestedInEventRecurrence(e, A),
                baseRsvp: s.Ay.getRsvp(e, null, m),
                recurrenceRsvp: s.Ay.getRsvp(e, A, m),
            }),
            [A, e, m],
        ),
        _ = (0, o.A)(A, e);
    if (E || _?.is_canceled) return null;
    let h = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = v?.response === c.Qi.INTERESTED ? c.Qi.UNINTERESTED : c.Qi.INTERESTED,
            i = t ? null : A;
        u.A.updateRsvp(e, i, n, l);
    };
    return (0, l.jsxs)(r.Dr, {
        id: f ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        label: f ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
        action: void 0,
        children: [
            (0, l.jsx)(r.Dr, { id: g.intl.string(g.t.lwZCFT), label: g.intl.string(g.t.lwZCFT), action: () => h(!1) }),
            (0, l.jsx)(r.Dr, {
                id: g.intl.string(g.t.uoorxi),
                label: g.intl.string(g.t.uoorxi),
                action: () => h(!0),
                disabled: null != y,
            }),
        ],
    });
}
