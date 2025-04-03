n.d(t, { Z: () => _ }), n(266796), n(301563);
var r = n(200651);
n(192379);
var l = n(916376),
    i = n.n(l),
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
    N = n(981631),
    j = n(388032);
let E = 'YYYYMMDDTHHmmss',
    m = 'YYYY-MM-DDTHH:mm:ss',
    P = /RRULE:.*/;
function _(e, t, n, l) {
    var o, _, w;
    let T,
        W = (0, u.e7)([p.ZP], () => p.ZP.isActive(e)),
        Z = (0, v.zI)(null != e ? e : '', l),
        S = (0, u.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(e), [e]),
        x = (0, u.e7)([f.Z], () => f.Z.getGuild(t), [t]);
    if (W || null == Z || null == S) return null;
    T =
        S.entity_type === O.WX.EXTERNAL
            ? S.entity_metadata.location
            : null != n && null != x
              ? j.NW.formatToPlainString(j.t['2t8L09'], {
                    channelName: n.name,
                    guildName: x.name
                })
              : j.NW.string(j.t.VSgOVl);
    let D = c()(S.scheduled_start_time),
        A = null != S.scheduled_end_time ? c()(S.scheduled_end_time) : D,
        I = null != S.description && '' !== S.description ? g.ZP.unparse(S.description, null != (o = null == n ? void 0 : n.id) ? o : N.lds, !0) : '',
        C = (0, h.KV)(S.recurrence_rule),
        R = null != C ? (0, y.Ho)(C) : null,
        { startTime: M, endTime: k } = Z,
        G = null != (_ = c()(M)) ? _ : D,
        U = null != (w = c()(null != k ? k : M)) ? w : D,
        L = () => {
            let e = i()();
            e.createEvent({
                start: D,
                end: A,
                summary: S.name,
                description: I,
                location: T,
                repeating: R
            }),
                b.isPlatformEmbedded ? d.Z.fileManager.saveWithDialog(e.toString(), 'discord-event.ics') : window.open(e.toURL(), '_blank');
        };
    return (0, r.jsxs)(s.sNh, {
        id: j.NW.string(j.t.k5pvjo),
        label: j.NW.string(j.t.k5pvjo),
        action: L,
        children: [
            (0, r.jsx)(s.sNh, {
                id: j.NW.string(j.t.JKSLRE),
                label: j.NW.string(j.t.JKSLRE),
                action: () => {
                    var e;
                    let t = null == R ? void 0 : R.toString(),
                        n = {
                            text: S.name,
                            dates: ''.concat(D.format(E), '/').concat(A.format(E)),
                            details: I,
                            action: 'TEMPLATE',
                            location: T,
                            recur: null != t ? (null == (e = P.exec(t)) ? void 0 : e[0]) : void 0
                        },
                        r = 'https://calendar.google.com/calendar/render?'.concat((0, a.stringify)(n));
                    window.open(r, '_blank');
                }
            }),
            (0, r.jsx)(s.sNh, {
                id: j.NW.string(j.t.nrBYSU),
                label: j.NW.string(j.t.nrBYSU),
                action: L
            }),
            (0, r.jsx)(s.sNh, {
                id: j.NW.string(j.t.odzaCQ),
                label: j.NW.string(j.t.odzaCQ),
                action: () => {
                    let e = {
                            v: 60,
                            title: S.name,
                            st: G.format(E),
                            et: U.format(E),
                            desc: I,
                            in_loc: T
                        },
                        t = 'https://calendar.yahoo.com/?'.concat((0, a.stringify)(e));
                    window.open(t, '_blank');
                }
            }),
            (0, r.jsx)(s.sNh, {
                id: j.NW.string(j.t.rQe8EB),
                label: j.NW.string(j.t.rQe8EB),
                action: () => {
                    let e = {
                            path: '/calendar/action/compose',
                            rru: 'addevent',
                            startdt: G.format(m),
                            enddt: U.format(m),
                            subject: S.name,
                            body: I,
                            location: T,
                            allday: !1
                        },
                        t = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, a.stringify)(e));
                    window.open(t, '_blank');
                }
            })
        ]
    });
}
