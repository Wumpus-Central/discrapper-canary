(e.d(n, { Z: () => Z }), e(953529), e(35282));
var l = e(255367);
e(73800);
var i = e(164104),
    r = e.n(i),
    o = e(913527),
    a = e.n(o),
    c = e(593473),
    u = e(442837),
    s = e(481060),
    d = e(579806),
    g = e(957730),
    f = e(430824),
    b = e(358085),
    p = e(924301),
    v = e(79874),
    h = e(236373),
    y = e(854698),
    E = e(765305),
    O = e(981631),
    j = e(388032);
let m = 'YYYYMMDDTHHmmss',
    _ = 'YYYY-MM-DDTHH:mm:ss',
    P = /RRULE:.*/;
function Z(t, n, e, i) {
    var o, Z, T;
    let w,
        S = (0, u.e7)([p.ZP], () => p.ZP.isActive(t)),
        N = (0, v.zI)(null != t ? t : '', i),
        x = (0, u.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(t), [t]),
        D = (0, u.e7)([f.Z], () => f.Z.getGuild(n), [n]);
    if (S || null == N || null == x) return null;
    w =
        x.entity_type === E.WX.EXTERNAL
            ? x.entity_metadata.location
            : null != e && null != D
              ? j.intl.formatToPlainString(j.t['2t8L09'], {
                    channelName: e.name,
                    guildName: D.name
                })
              : j.intl.string(j.t.VSgOVl);
    let A = a()(x.scheduled_start_time),
        I = null != x.scheduled_end_time ? a()(x.scheduled_end_time) : A,
        C = null != x.description && '' !== x.description ? g.ZP.unparse(x.description, null != (o = null == e ? void 0 : e.id) ? o : O.lds, !0) : '',
        R = (0, h.KV)(x.recurrence_rule),
        M = null != R ? (0, y.Ho)(R) : null,
        { startTime: k, endTime: G } = N,
        U = null != (Z = a()(k)) ? Z : A,
        W = null != (T = a()(null != G ? G : k)) ? T : A,
        L = () => {
            let t = r()();
            (t.createEvent({
                start: A,
                end: I,
                summary: x.name,
                description: C,
                location: w,
                repeating: M
            }),
                b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(t.toString(), 'discord-event.ics') : window.open(t.toURL(), '_blank'));
        };
    return (0, l.jsxs)(s.sNh, {
        id: j.intl.string(j.t.k5pvjo),
        label: j.intl.string(j.t.k5pvjo),
        action: L,
        children: [
            (0, l.jsx)(s.sNh, {
                id: j.intl.string(j.t.JKSLRE),
                label: j.intl.string(j.t.JKSLRE),
                action: () => {
                    var t;
                    let n = null == M ? void 0 : M.toString(),
                        e = {
                            text: x.name,
                            dates: ''.concat(A.format(m), '/').concat(I.format(m)),
                            details: C,
                            action: 'TEMPLATE',
                            location: w,
                            recur: null != n ? (null == (t = P.exec(n)) ? void 0 : t[0]) : void 0
                        },
                        l = 'https://calendar.google.com/calendar/render?'.concat((0, c.stringify)(e));
                    window.open(l, '_blank');
                }
            }),
            (0, l.jsx)(s.sNh, {
                id: j.intl.string(j.t.nrBYSU),
                label: j.intl.string(j.t.nrBYSU),
                action: L
            }),
            (0, l.jsx)(s.sNh, {
                id: j.intl.string(j.t.odzaCQ),
                label: j.intl.string(j.t.odzaCQ),
                action: () => {
                    let t = {
                            v: 60,
                            title: x.name,
                            st: U.format(m),
                            et: W.format(m),
                            desc: C,
                            in_loc: w
                        },
                        n = 'https://calendar.yahoo.com/?'.concat((0, c.stringify)(t));
                    window.open(n, '_blank');
                }
            }),
            (0, l.jsx)(s.sNh, {
                id: j.intl.string(j.t.rQe8EB),
                label: j.intl.string(j.t.rQe8EB),
                action: () => {
                    let t = {
                            path: '/calendar/action/compose',
                            rru: 'addevent',
                            startdt: U.format(_),
                            enddt: W.format(_),
                            subject: x.name,
                            body: C,
                            location: w,
                            allday: !1
                        },
                        n = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, c.stringify)(t));
                    window.open(n, '_blank');
                }
            })
        ]
    });
}
