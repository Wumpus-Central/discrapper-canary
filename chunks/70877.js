n.d(e, { Z: () => w }), n(953529), n(35282);
var l = n(200651);
n(192379);
var r = n(164104),
    i = n.n(r),
    o = n(913527),
    c = n.n(o),
    a = n(593473),
    u = n(442837),
    s = n(481060),
    d = n(579806),
    g = n(957730),
    f = n(430824),
    b = n(358085),
    p = n(924301),
    v = n(79874),
    h = n(236373),
    y = n(854698),
    O = n(765305),
    j = n(981631),
    E = n(388032);
let m = 'YYYYMMDDTHHmmss',
    P = 'YYYY-MM-DDTHH:mm:ss',
    _ = /RRULE:.*/;
function w(t, e, n, r) {
    var o, w, T;
    let Z,
        S = (0, u.e7)([p.ZP], () => p.ZP.isActive(t)),
        x = (0, v.zI)(null != t ? t : '', r),
        N = (0, u.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(t), [t]),
        D = (0, u.e7)([f.Z], () => f.Z.getGuild(e), [e]);
    if (S || null == x || null == N) return null;
    Z =
        N.entity_type === O.WX.EXTERNAL
            ? N.entity_metadata.location
            : null != n && null != D
              ? E.intl.formatToPlainString(E.t['2t8L09'], {
                    channelName: n.name,
                    guildName: D.name
                })
              : E.intl.string(E.t.VSgOVl);
    let A = c()(N.scheduled_start_time),
        I = null != N.scheduled_end_time ? c()(N.scheduled_end_time) : A,
        C = null != N.description && '' !== N.description ? g.ZP.unparse(N.description, null != (o = null == n ? void 0 : n.id) ? o : j.lds, !0) : '',
        R = (0, h.KV)(N.recurrence_rule),
        M = null != R ? (0, y.Ho)(R) : null,
        { startTime: k, endTime: G } = x,
        U = null != (w = c()(k)) ? w : A,
        W = null != (T = c()(null != G ? G : k)) ? T : A,
        L = () => {
            let t = i()();
            t.createEvent({
                start: A,
                end: I,
                summary: N.name,
                description: C,
                location: Z,
                repeating: M
            }),
                b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), 'discord-event.ics') : window.open(t.toURL(), '_blank');
        };
    return (0, l.jsxs)(s.sNh, {
        id: E.intl.string(E.t.k5pvjo),
        label: E.intl.string(E.t.k5pvjo),
        action: L,
        children: [
            (0, l.jsx)(s.sNh, {
                id: E.intl.string(E.t.JKSLRE),
                label: E.intl.string(E.t.JKSLRE),
                action: () => {
                    var t;
                    let e = null == M ? void 0 : M.toString(),
                        n = {
                            text: N.name,
                            dates: ''.concat(A.format(m), '/').concat(I.format(m)),
                            details: C,
                            action: 'TEMPLATE',
                            location: Z,
                            recur: null != e ? (null == (t = _.exec(e)) ? void 0 : t[0]) : void 0
                        },
                        l = 'https://calendar.google.com/calendar/render?'.concat((0, a.stringify)(n));
                    window.open(l, '_blank');
                }
            }),
            (0, l.jsx)(s.sNh, {
                id: E.intl.string(E.t.nrBYSU),
                label: E.intl.string(E.t.nrBYSU),
                action: L
            }),
            (0, l.jsx)(s.sNh, {
                id: E.intl.string(E.t.odzaCQ),
                label: E.intl.string(E.t.odzaCQ),
                action: () => {
                    let t = {
                            v: 60,
                            title: N.name,
                            st: U.format(m),
                            et: W.format(m),
                            desc: C,
                            in_loc: Z
                        },
                        e = 'https://calendar.yahoo.com/?'.concat((0, a.stringify)(t));
                    window.open(e, '_blank');
                }
            }),
            (0, l.jsx)(s.sNh, {
                id: E.intl.string(E.t.rQe8EB),
                label: E.intl.string(E.t.rQe8EB),
                action: () => {
                    let t = {
                            path: '/calendar/action/compose',
                            rru: 'addevent',
                            startdt: U.format(P),
                            enddt: W.format(P),
                            subject: N.name,
                            body: C,
                            location: Z,
                            allday: !1
                        },
                        e = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, a.stringify)(t));
                    window.open(e, '_blank');
                }
            })
        ]
    });
}
