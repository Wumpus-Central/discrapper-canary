n.d(e, { Z: () => N }), n(953529), n(35282);
var l = n(951288);
n(647438);
var r = n(35149),
    i = n.n(r),
    u = n(913527),
    o = n.n(u),
    c = n(593473),
    a = n(442837),
    s = n(481060),
    d = n(579806),
    g = n(957730),
    f = n(430824),
    b = n(358085),
    v = n(924301),
    E = n(79874),
    p = n(236373),
    Z = n(954313),
    y = n(765305),
    O = n(981631),
    h = n(388032);
let P = "YYYYMMDDTHHmmss",
    m = "YYYY-MM-DDTHH:mm:ss",
    j = /RRULE:.*/;
function N(t, e, n, r) {
    var u, N, _;
    let w,
        S = (0, a.e7)([v.ZP], () => v.ZP.isActive(t)),
        D = (0, E.zI)(null != t ? t : "", r),
        T = (0, a.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(t), [t]),
        x = (0, a.e7)([f.Z], () => f.Z.getGuild(e), [e]);
    if (S || null == D || null == T) return null;
    w =
        T.entity_type === y.WX.EXTERNAL
            ? T.entity_metadata.location
            : null != n && null != x
              ? h.intl.formatToPlainString(h.t["2t8L09"], {
                    channelName: n.name,
                    guildName: x.name,
                })
              : h.intl.string(h.t.VSgOVl);
    let I = o()(T.scheduled_start_time),
        C = null != T.scheduled_end_time ? o()(T.scheduled_end_time) : I,
        G =
            null != T.description && "" !== T.description
                ? g.ZP.unparse(T.description, null != (u = null == n ? void 0 : n.id) ? u : O.lds, !0)
                : "",
        L = (0, p.KV)(T.recurrence_rule),
        U = null != L ? (0, Z.Ho)(L) : null,
        { startTime: M, endTime: V } = D,
        A = null != (N = o()(M)) ? N : I,
        R = null != (_ = o()(null != V ? V : M)) ? _ : I,
        k = () => {
            let t = i()();
            t.createEvent({
                start: I,
                end: C,
                summary: T.name,
                description: G,
                location: w,
                repeating: U,
            }),
                b.isPlatformEmbedded
                    ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                    : window.open(t.toURL(), "_blank");
        };
    return (0, l.jsxs)(s.sNh, {
        id: h.intl.string(h.t.k5pvjo),
        label: h.intl.string(h.t.k5pvjo),
        action: k,
        children: [
            (0, l.jsx)(s.sNh, {
                id: h.intl.string(h.t.JKSLRE),
                label: h.intl.string(h.t.JKSLRE),
                action: () => {
                    var t;
                    let e = null == U ? void 0 : U.toString(),
                        n = {
                            text: T.name,
                            dates: "".concat(I.format(P), "/").concat(C.format(P)),
                            details: G,
                            action: "TEMPLATE",
                            location: w,
                            recur: null != e ? (null == (t = j.exec(e)) ? void 0 : t[0]) : void 0,
                        },
                        l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(n));
                    window.open(l, "_blank");
                },
            }),
            (0, l.jsx)(s.sNh, {
                id: h.intl.string(h.t.nrBYSU),
                label: h.intl.string(h.t.nrBYSU),
                action: k,
            }),
            (0, l.jsx)(s.sNh, {
                id: h.intl.string(h.t.odzaCQ),
                label: h.intl.string(h.t.odzaCQ),
                action: () => {
                    let t = {
                            v: 60,
                            title: T.name,
                            st: A.format(P),
                            et: R.format(P),
                            desc: G,
                            in_loc: w,
                        },
                        e = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
                    window.open(e, "_blank");
                },
            }),
            (0, l.jsx)(s.sNh, {
                id: h.intl.string(h.t.rQe8EB),
                label: h.intl.string(h.t.rQe8EB),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: A.format(m),
                            enddt: R.format(m),
                            subject: T.name,
                            body: G,
                            location: w,
                            allday: !1,
                        },
                        e = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
                    window.open(e, "_blank");
                },
            }),
        ],
    });
}
