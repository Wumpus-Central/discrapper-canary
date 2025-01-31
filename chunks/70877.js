e.d(n, { Z: () => P });
var l = e(200651);
e(192379);
var i = e(916376),
    r = e.n(i),
    u = e(913527),
    d = e.n(u),
    a = e(593473),
    s = e(442837),
    o = e(481060),
    c = e(579806),
    E = e(957730),
    g = e(430824),
    v = e(358085),
    h = e(924301),
    _ = e(79874),
    f = e(236373),
    Z = e(854698),
    N = e(765305),
    T = e(981631),
    m = e(388032);
let p = 'YYYYMMDDTHHmmss',
    S = 'YYYY-MM-DDTHH:mm:ss',
    I = /RRULE:.*/;
function P(t, n, e, i) {
    var u, P, D;
    let b;
    let C = (0, s.e7)([h.ZP], () => h.ZP.isActive(t)),
        x = (0, _.zI)(null != t ? t : '', i),
        A = (0, s.e7)([h.ZP], () => h.ZP.getGuildScheduledEvent(t), [t]),
        y = (0, s.e7)([g.Z], () => g.Z.getGuild(n), [n]);
    if (C || null == x || null == A) return null;
    b =
        A.entity_type === N.WX.EXTERNAL
            ? A.entity_metadata.location
            : null != e && null != y
              ? m.intl.formatToPlainString(m.t['2t8L09'], {
                    channelName: e.name,
                    guildName: y.name
                })
              : m.intl.string(m.t.VSgOVl);
    let G = d()(A.scheduled_start_time),
        w = null != A.scheduled_end_time ? d()(A.scheduled_end_time) : G,
        j = null != A.description && '' !== A.description ? E.ZP.unparse(A.description, null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : T.lds, !0) : '',
        M = (0, f.KV)(A.recurrence_rule),
        O = null != M ? (0, Z.Ho)(M) : null,
        { startTime: U, endTime: L } = x,
        R = null !== (P = d()(U)) && void 0 !== P ? P : G,
        V = null !== (D = d()(null != L ? L : U)) && void 0 !== D ? D : G,
        W = () => {
            let t = r()();
            t.createEvent({
                start: G,
                end: w,
                summary: A.name,
                description: j,
                location: b,
                repeating: O
            }),
                v.isPlatformEmbedded ? c.Z.fileManager.saveWithDialog(t.toString(), 'discord-event.ics') : window.open(t.toURL(), '_blank');
        };
    return (0, l.jsxs)(o.sNh, {
        id: m.intl.string(m.t.k5pvjo),
        label: m.intl.string(m.t.k5pvjo),
        action: W,
        children: [
            (0, l.jsx)(o.sNh, {
                id: m.intl.string(m.t.JKSLRE),
                label: m.intl.string(m.t.JKSLRE),
                action: () => {
                    var t;
                    let n = null == O ? void 0 : O.toString(),
                        e = {
                            text: A.name,
                            dates: ''.concat(G.format(p), '/').concat(w.format(p)),
                            details: j,
                            action: 'TEMPLATE',
                            location: b,
                            recur: null != n ? (null === (t = I.exec(n)) || void 0 === t ? void 0 : t[0]) : void 0
                        },
                        l = 'https://calendar.google.com/calendar/render?'.concat((0, a.stringify)(e));
                    window.open(l, '_blank');
                }
            }),
            (0, l.jsx)(o.sNh, {
                id: m.intl.string(m.t.nrBYSU),
                label: m.intl.string(m.t.nrBYSU),
                action: W
            }),
            (0, l.jsx)(o.sNh, {
                id: m.intl.string(m.t.odzaCQ),
                label: m.intl.string(m.t.odzaCQ),
                action: () => {
                    let t = {
                            v: 60,
                            title: A.name,
                            st: R.format(p),
                            et: V.format(p),
                            desc: j,
                            in_loc: b
                        },
                        n = 'https://calendar.yahoo.com/?'.concat((0, a.stringify)(t));
                    window.open(n, '_blank');
                }
            }),
            (0, l.jsx)(o.sNh, {
                id: m.intl.string(m.t.rQe8EB),
                label: m.intl.string(m.t.rQe8EB),
                action: () => {
                    let t = {
                            path: '/calendar/action/compose',
                            rru: 'addevent',
                            startdt: R.format(S),
                            enddt: V.format(S),
                            subject: A.name,
                            body: j,
                            location: b,
                            allday: !1
                        },
                        n = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, a.stringify)(t));
                    window.open(n, '_blank');
                }
            })
        ]
    });
}
