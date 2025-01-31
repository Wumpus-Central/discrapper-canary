e.d(n, { Z: () => g });
var l = e(200651);
e(192379);
var i = e(442837),
    r = e(481060),
    u = e(41776),
    d = e(314897),
    a = e(924301),
    s = e(482241),
    o = e(894017),
    c = e(765305),
    E = e(388032);
function g(t) {
    let { guildEventId: n, guildId: e, recurrenceId: g } = t,
        v = (0, i.e7)([u.Z], () => u.Z.isLurking(e), [e]),
        h = (0, i.e7)([d.default], () => d.default.getId()),
        {
            rsvped: _,
            baseRsvp: f,
            recurrenceRsvp: Z
        } = (0, i.cj)(
            [a.ZP],
            () => ({
                rsvped: a.ZP.isInterestedInEventRecurrence(n, g),
                baseRsvp: a.ZP.getRsvp(n, null, h),
                recurrenceRsvp: a.ZP.getRsvp(n, g, h)
            }),
            [g, n, h]
        ),
        N = (0, o.Z)(g, n);
    if (v || (null == N ? void 0 : N.is_canceled)) return null;
    let T = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = (null == f ? void 0 : f.response) === c.gv.INTERESTED ? c.gv.UNINTERESTED : c.gv.INTERESTED,
            i = t ? null : g;
        s.Z.updateRsvp(n, i, e, l);
    };
    return (0, l.jsxs)(r.sNh, {
        id: _ ? E.intl.string(E.t['7M5gaG']) : E.intl.string(E.t.FXixvL),
        label: _ ? E.intl.string(E.t['7M5gaG']) : E.intl.string(E.t.FXixvL),
        action: void 0,
        children: [
            (0, l.jsx)(r.sNh, {
                id: E.intl.string(E.t.lwZCFR),
                label: E.intl.string(E.t.lwZCFR),
                action: () => T(!1)
            }),
            (0, l.jsx)(r.sNh, {
                id: E.intl.string(E.t.uoorxs),
                label: E.intl.string(E.t.uoorxs),
                action: () => T(!0),
                disabled: null != Z
            })
        ]
    });
}
