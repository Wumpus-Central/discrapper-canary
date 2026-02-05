n.d(e, { A: () => A });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(857071),
    d = n(961350),
    s = n(698441),
    u = n(496092),
    o = n(722260),
    c = n(988794),
    E = n(985018);
function A(t) {
    let { guildEventId: e, guildId: n, recurrenceId: A } = t,
        g = (0, i.bG)([a.A], () => a.A.isLurking(n), [n]),
        _ = (0, i.bG)([d.default], () => d.default.getId()),
        {
            rsvped: h,
            baseRsvp: T,
            recurrenceRsvp: f,
        } = (0, i.cf)(
            [s.Ay],
            () => ({
                rsvped: s.Ay.isInterestedInEventRecurrence(e, A),
                baseRsvp: s.Ay.getRsvp(e, null, _),
                recurrenceRsvp: s.Ay.getRsvp(e, A, _),
            }),
            [A, e, _],
        ),
        y = (0, o.A)(A, e);
    if (g || y?.is_canceled) return null;
    let m = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = T?.response === c.Qi.INTERESTED ? c.Qi.UNINTERESTED : c.Qi.INTERESTED,
            i = t ? null : A;
        u.A.updateRsvp(e, i, n, l);
    };
    return (0, l.jsxs)(r.Drp, {
        id: h ? E.intl.string(E.t["7M5gaN"]) : E.intl.string(E.t.FXixvH),
        label: h ? E.intl.string(E.t["7M5gaN"]) : E.intl.string(E.t.FXixvH),
        action: void 0,
        children: [
            (0, l.jsx)(r.Drp, { id: E.intl.string(E.t.lwZCFT), label: E.intl.string(E.t.lwZCFT), action: () => m(!1) }),
            (0, l.jsx)(r.Drp, {
                id: E.intl.string(E.t.uoorxi),
                label: E.intl.string(E.t.uoorxi),
                action: () => m(!0),
                disabled: null != f,
            }),
        ],
    });
}
