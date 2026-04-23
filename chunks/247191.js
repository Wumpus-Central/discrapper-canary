n.d(e, { A: () => S });
var l = n(627968);
n(64700);
var i = n(242934),
    r = n.n(i),
    a = n(989349),
    d = n.n(a),
    s = n(492462),
    u = n(311907),
    o = n(477782),
    c = n(77729),
    g = n(47167),
    A = n(451909),
    E = n(71393),
    m = n(994500),
    f = n(287809),
    v = n(723702),
    y = n(698441),
    _ = n(563312),
    h = n(794782),
    N = n(974930),
    T = n(988794),
    b = n(652215),
    G = n(985018);
let p = "YYYYMMDDTHHmmss",
    x = "YYYY-MM-DDTHH:mm:ss",
    D = /RRULE:.*/;
function S(t, e, n, i) {
    let a,
        S = (0, u.bG)([y.Ay], () => y.Ay.isActive(t)),
        C = (0, _.nh)(t ?? "", i),
        I = (0, u.bG)([y.Ay], () => y.Ay.getGuildScheduledEvent(t), [t]),
        w = (0, u.bG)([E.A], () => E.A.getGuild(e), [e]);
    if (S || null == C || null == I) return null;
    a =
        I.entity_type === T.Ps.EXTERNAL
            ? I.entity_metadata.location
            : null != n && null != w
              ? G.intl.formatToPlainString(G.t["2t8L04"], {
                    channelName: (0, g.m1)(n, f.default, m.A),
                    guildName: w.name,
                })
              : G.intl.string(G.t.VSgOVg);
    let j = d()(I.scheduled_start_time),
        L = null != I.scheduled_end_time ? d()(I.scheduled_end_time) : j,
        M = null != I.description && "" !== I.description ? A.Ay.unparse(I.description, n?.id ?? b.dJq, !0) : "",
        P = (0, h.Sn)(I.recurrence_rule),
        U = null != P ? (0, N.X7)(P) : null,
        { startTime: O, endTime: R } = C,
        V = d()(O) ?? j,
        B = d()(R ?? O) ?? j,
        k = () => {
            let t = r()();
            t.createEvent({ start: j, end: L, summary: I.name, description: M, location: a, repeating: U }),
                v.isPlatformEmbedded
                    ? c.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                    : window.open(t.toURL(), "_blank");
        };
    return (0, l.jsxs)(o.Dr, {
        id: G.intl.string(G.t.k5pvjo),
        label: G.intl.string(G.t.k5pvjo),
        action: k,
        children: [
            (0, l.jsx)(o.Dr, {
                id: G.intl.string(G.t.JKSLRH),
                label: G.intl.string(G.t.JKSLRH),
                action: () => {
                    let t = U?.toString(),
                        e = {
                            text: I.name,
                            dates: `${j.format(p)}/${L.format(p)}`,
                            details: M,
                            action: "TEMPLATE",
                            location: a,
                            recur: null != t ? D.exec(t)?.[0] : void 0,
                        },
                        n = `https://calendar.google.com/calendar/render?${(0, s.stringify)(e)}`;
                    window.open(n, "_blank");
                },
            }),
            (0, l.jsx)(o.Dr, { id: G.intl.string(G.t.nrBYSe), label: G.intl.string(G.t.nrBYSe), action: k }),
            (0, l.jsx)(o.Dr, {
                id: G.intl.string(G.t.odzaCd),
                label: G.intl.string(G.t.odzaCd),
                action: () => {
                    let t = { v: 60, title: I.name, st: V.format(p), et: B.format(p), desc: M, in_loc: a },
                        e = `https://calendar.yahoo.com/?${(0, s.stringify)(t)}`;
                    window.open(e, "_blank");
                },
            }),
            (0, l.jsx)(o.Dr, {
                id: G.intl.string(G.t.rQe8EE),
                label: G.intl.string(G.t.rQe8EE),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: V.format(x),
                            enddt: B.format(x),
                            subject: I.name,
                            body: M,
                            location: a,
                            allday: !1,
                        },
                        e = `https://outlook.live.com/calendar/0/deeplink/compose?${(0, s.stringify)(t)}`;
                    window.open(e, "_blank");
                },
            }),
        ],
    });
}
