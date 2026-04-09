n.d(e, { A: () => I });
var l = n(627968);
n(64700);
var i = n(242934),
    r = n.n(i),
    a = n(989349),
    d = n.n(a),
    s = n(492462),
    u = n(311907),
    o = n(397927),
    c = n(77729),
    E = n(47167),
    A = n(451909),
    g = n(71393),
    _ = n(994500),
    h = n(287809),
    T = n(723702),
    f = n(698441),
    y = n(563312),
    v = n(794782),
    p = n(974930),
    m = n(988794),
    N = n(652215),
    S = n(985018);
let G = "YYYYMMDDTHHmmss",
    b = "YYYY-MM-DDTHH:mm:ss",
    D = /RRULE:.*/;
function I(t, e, n, i) {
    let a,
        I = (0, u.bG)([f.Ay], () => f.Ay.isActive(t)),
        C = (0, y.nh)(t ?? "", i),
        x = (0, u.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(t), [t]),
        w = (0, u.bG)([g.A], () => g.A.getGuild(e), [e]);
    if (I || null == C || null == x) return null;
    a =
        x.entity_type === m.Ps.EXTERNAL
            ? x.entity_metadata.location
            : null != n && null != w
              ? S.intl.formatToPlainString(S.t["2t8L04"], {
                    channelName: (0, E.m1)(n, h.default, _.A),
                    guildName: w.name,
                })
              : S.intl.string(S.t.VSgOVg);
    let O = d()(x.scheduled_start_time),
        R = null != x.scheduled_end_time ? d()(x.scheduled_end_time) : O,
        j = null != x.description && "" !== x.description ? A.Ay.unparse(x.description, n?.id ?? N.dJq, !0) : "",
        L = (0, v.Sn)(x.recurrence_rule),
        U = null != L ? (0, p.X7)(L) : null,
        { startTime: P, endTime: V } = C,
        B = d()(P) ?? O,
        M = d()(V ?? P) ?? O,
        W = () => {
            let t = r()();
            t.createEvent({ start: O, end: R, summary: x.name, description: j, location: a, repeating: U }),
                T.isPlatformEmbedded
                    ? c.A.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                    : window.open(t.toURL(), "_blank");
        };
    return (0, l.jsxs)(o.Drp, {
        id: S.intl.string(S.t.k5pvjo),
        label: S.intl.string(S.t.k5pvjo),
        action: W,
        children: [
            (0, l.jsx)(o.Drp, {
                id: S.intl.string(S.t.JKSLRH),
                label: S.intl.string(S.t.JKSLRH),
                action: () => {
                    let t = U?.toString(),
                        e = {
                            text: x.name,
                            dates: `${O.format(G)}/${R.format(G)}`,
                            details: j,
                            action: "TEMPLATE",
                            location: a,
                            recur: null != t ? D.exec(t)?.[0] : void 0,
                        },
                        n = `https://calendar.google.com/calendar/render?${(0, s.stringify)(e)}`;
                    window.open(n, "_blank");
                },
            }),
            (0, l.jsx)(o.Drp, { id: S.intl.string(S.t.nrBYSe), label: S.intl.string(S.t.nrBYSe), action: W }),
            (0, l.jsx)(o.Drp, {
                id: S.intl.string(S.t.odzaCd),
                label: S.intl.string(S.t.odzaCd),
                action: () => {
                    let t = { v: 60, title: x.name, st: B.format(G), et: M.format(G), desc: j, in_loc: a },
                        e = `https://calendar.yahoo.com/?${(0, s.stringify)(t)}`;
                    window.open(e, "_blank");
                },
            }),
            (0, l.jsx)(o.Drp, {
                id: S.intl.string(S.t.rQe8EE),
                label: S.intl.string(S.t.rQe8EE),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: B.format(b),
                            enddt: M.format(b),
                            subject: x.name,
                            body: j,
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
