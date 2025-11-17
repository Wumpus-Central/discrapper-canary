n.d(e, { Z: () => N }), n(953529), n(35282);
var l = n(54381);
n(473749);
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
    Z = n(854698),
    h = n(765305),
    y = n(981631),
    P = n(388032);
let O = "YYYYMMDDTHHmmss",
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
        T.entity_type === h.WX.EXTERNAL
            ? T.entity_metadata.location
            : null != n && null != x
              ? P.intl.formatToPlainString(P.t["2t8L04"], {
                    channelName: n.name,
                    guildName: x.name,
                })
              : P.intl.string(P.t.VSgOVg);
    let I = o()(T.scheduled_start_time),
        C = null != T.scheduled_end_time ? o()(T.scheduled_end_time) : I,
        G =
            null != T.description && "" !== T.description
                ? g.ZP.unparse(T.description, null != (u = null == n ? void 0 : n.id) ? u : y.lds, !0)
                : "",
        L = (0, p.KV)(T.recurrence_rule),
        U = null != L ? (0, Z.Ho)(L) : null,
        { startTime: A, endTime: V } = D,
        M = null != (N = o()(A)) ? N : I,
        k = null != (_ = o()(null != V ? V : A)) ? _ : I,
        R = () => {
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
        id: P.intl.string(P.t.k5pvjo),
        label: P.intl.string(P.t.k5pvjo),
        action: R,
        children: [
            (0, l.jsx)(s.sNh, {
                id: P.intl.string(P.t.JKSLRH),
                label: P.intl.string(P.t.JKSLRH),
                action: () => {
                    var t;
                    let e = null == U ? void 0 : U.toString(),
                        n = {
                            text: T.name,
                            dates: "".concat(I.format(O), "/").concat(C.format(O)),
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
                id: P.intl.string(P.t.nrBYSe),
                label: P.intl.string(P.t.nrBYSe),
                action: R,
            }),
            (0, l.jsx)(s.sNh, {
                id: P.intl.string(P.t.odzaCd),
                label: P.intl.string(P.t.odzaCd),
                action: () => {
                    let t = {
                            v: 60,
                            title: T.name,
                            st: M.format(O),
                            et: k.format(O),
                            desc: G,
                            in_loc: w,
                        },
                        e = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
                    window.open(e, "_blank");
                },
            }),
            (0, l.jsx)(s.sNh, {
                id: P.intl.string(P.t.rQe8EE),
                label: P.intl.string(P.t.rQe8EE),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: M.format(m),
                            enddt: k.format(m),
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
