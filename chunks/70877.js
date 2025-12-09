n.d(e, { Z: () => N }), n(953529), n(35282);
var l = n(54381);
n(473749);
var r = n(35149),
    i = n.n(r),
    o = n(913527),
    u = n.n(o),
    c = n(593473),
    a = n(442837),
    s = n(481060),
    d = n(579806),
    g = n(957730),
    f = n(430824),
    b = n(358085),
    p = n(924301),
    v = n(79874),
    E = n(236373),
    y = n(854698),
    O = n(765305),
    P = n(981631),
    Z = n(388032);
let h = "YYYYMMDDTHHmmss",
    j = "YYYY-MM-DDTHH:mm:ss",
    m = /RRULE:.*/;
function N(t, e, n, r) {
    var o, N, w;
    let _,
        D = (0, a.e7)([p.ZP], () => p.ZP.isActive(t)),
        S = (0, v.zI)(null != t ? t : "", r),
        x = (0, a.e7)([p.ZP], () => p.ZP.getGuildScheduledEvent(t), [t]),
        T = (0, a.e7)([f.Z], () => f.Z.getGuild(e), [e]);
    if (D || null == S || null == x) return null;
    _ =
        x.entity_type === O.WX.EXTERNAL
            ? x.entity_metadata.location
            : null != n && null != T
              ? Z.intl.formatToPlainString(Z.t["2t8L04"], {
                    channelName: n.name,
                    guildName: T.name,
                })
              : Z.intl.string(Z.t.VSgOVg);
    let I = u()(x.scheduled_start_time),
        C = null != x.scheduled_end_time ? u()(x.scheduled_end_time) : I,
        G =
            null != x.description && "" !== x.description
                ? g.ZP.unparse(x.description, null != (o = null == n ? void 0 : n.id) ? o : P.lds, !0)
                : "",
        L = (0, E.KV)(x.recurrence_rule),
        U = null != L ? (0, y.Ho)(L) : null,
        { startTime: A, endTime: M } = S,
        V = null != (N = u()(A)) ? N : I,
        k = null != (w = u()(null != M ? M : A)) ? w : I,
        R = () => {
            let t = i()();
            t.createEvent({
                start: I,
                end: C,
                summary: x.name,
                description: G,
                location: _,
                repeating: U,
            }),
                b.isPlatformEmbedded
                    ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                    : window.open(t.toURL(), "_blank");
        };
    return (0, l.jsxs)(s.sNh, {
        id: Z.intl.string(Z.t.k5pvjo),
        label: Z.intl.string(Z.t.k5pvjo),
        action: R,
        children: [
            (0, l.jsx)(s.sNh, {
                id: Z.intl.string(Z.t.JKSLRH),
                label: Z.intl.string(Z.t.JKSLRH),
                action: () => {
                    var t;
                    let e = null == U ? void 0 : U.toString(),
                        n = {
                            text: x.name,
                            dates: "".concat(I.format(h), "/").concat(C.format(h)),
                            details: G,
                            action: "TEMPLATE",
                            location: _,
                            recur: null != e ? (null == (t = m.exec(e)) ? void 0 : t[0]) : void 0,
                        },
                        l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(n));
                    window.open(l, "_blank");
                },
            }),
            (0, l.jsx)(s.sNh, {
                id: Z.intl.string(Z.t.nrBYSe),
                label: Z.intl.string(Z.t.nrBYSe),
                action: R,
            }),
            (0, l.jsx)(s.sNh, {
                id: Z.intl.string(Z.t.odzaCd),
                label: Z.intl.string(Z.t.odzaCd),
                action: () => {
                    let t = {
                            v: 60,
                            title: x.name,
                            st: V.format(h),
                            et: k.format(h),
                            desc: G,
                            in_loc: _,
                        },
                        e = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
                    window.open(e, "_blank");
                },
            }),
            (0, l.jsx)(s.sNh, {
                id: Z.intl.string(Z.t.rQe8EE),
                label: Z.intl.string(Z.t.rQe8EE),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: V.format(j),
                            enddt: k.format(j),
                            subject: x.name,
                            body: G,
                            location: _,
                            allday: !1,
                        },
                        e = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
                    window.open(e, "_blank");
                },
            }),
        ],
    });
}
