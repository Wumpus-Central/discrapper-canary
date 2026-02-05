n.d(e, { A: () => G });
var l = n(627968);
n(64700);
var i = n(931773),
    r = n.n(i),
    a = n(989349),
    d = n.n(a),
    s = n(492462),
    u = n(311907),
    o = n(397927),
    c = n(77729),
    E = n(451909),
    A = n(71393),
    g = n(723702),
    _ = n(698441),
    h = n(563312),
    T = n(794782),
    f = n(974930),
    y = n(988794),
    m = n(652215),
    v = n(985018);
let p = "YYYYMMDDTHHmmss",
    N = "YYYY-MM-DDTHH:mm:ss",
    S = /RRULE:.*/;
function G(t, e, n, i) {
    let a,
        G = (0, u.bG)([_.Ay], () => _.Ay.isActive(t)),
        D = (0, h.nh)(t ?? "", i),
        b = (0, u.bG)([_.Ay], () => _.Ay.getGuildScheduledEvent(t), [t]),
        I = (0, u.bG)([A.A], () => A.A.getGuild(e), [e]);
    if (G || null == D || null == b) return null;
    a =
        b.entity_type === y.Ps.EXTERNAL
            ? b.entity_metadata.location
            : null != n && null != I
              ? v.intl.formatToPlainString(v.t["2t8L04"], { channelName: n.name, guildName: I.name })
              : v.intl.string(v.t.VSgOVg);
    let C = d()(b.scheduled_start_time),
        x = null != b.scheduled_end_time ? d()(b.scheduled_end_time) : C,
        w = null != b.description && "" !== b.description ? E.Ay.unparse(b.description, n?.id ?? m.dJq, !0) : "",
        O = (0, T.Sn)(b.recurrence_rule),
        R = null != O ? (0, f.X7)(O) : null,
        { startTime: j, endTime: L } = D,
        U = d()(j) ?? C,
        P = d()(L ?? j) ?? C,
        V = () => {
            let t = r()();
            t.createEvent({ start: C, end: x, summary: b.name, description: w, location: a, repeating: R }),
                g.isPlatformEmbedded
                    ? c.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                    : window.open(t.toURL(), "_blank");
        };
    return (0, l.jsxs)(o.Drp, {
        id: v.intl.string(v.t.k5pvjo),
        label: v.intl.string(v.t.k5pvjo),
        action: V,
        children: [
            (0, l.jsx)(o.Drp, {
                id: v.intl.string(v.t.JKSLRH),
                label: v.intl.string(v.t.JKSLRH),
                action: () => {
                    let t = R?.toString(),
                        e = {
                            text: b.name,
                            dates: `${C.format(p)}/${x.format(p)}`,
                            details: w,
                            action: "TEMPLATE",
                            location: a,
                            recur: null != t ? S.exec(t)?.[0] : void 0,
                        },
                        n = `https://calendar.google.com/calendar/render?${(0, s.stringify)(e)}`;
                    window.open(n, "_blank");
                },
            }),
            (0, l.jsx)(o.Drp, { id: v.intl.string(v.t.nrBYSe), label: v.intl.string(v.t.nrBYSe), action: V }),
            (0, l.jsx)(o.Drp, {
                id: v.intl.string(v.t.odzaCd),
                label: v.intl.string(v.t.odzaCd),
                action: () => {
                    let t = { v: 60, title: b.name, st: U.format(p), et: P.format(p), desc: w, in_loc: a },
                        e = `https://calendar.yahoo.com/?${(0, s.stringify)(t)}`;
                    window.open(e, "_blank");
                },
            }),
            (0, l.jsx)(o.Drp, {
                id: v.intl.string(v.t.rQe8EE),
                label: v.intl.string(v.t.rQe8EE),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: U.format(N),
                            enddt: P.format(N),
                            subject: b.name,
                            body: w,
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
