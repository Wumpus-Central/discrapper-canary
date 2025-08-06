e.d(n, { Z: () => x }), e(953529), e(35282);
var l = e(255367);
e(73800);
var i = e(164104),
    r = e.n(i),
    o = e(913527),
    a = e.n(o),
    c = e(593473),
    s = e(442837),
    u = e(481060),
    d = e(579806),
    g = e(957730),
    v = e(430824),
    b = e(358085),
    f = e(924301),
    p = e(79874),
    j = e(236373),
    h = e(854698),
    y = e(765305),
    Z = e(981631),
    m = e(388032);
let O = "YYYYMMDDTHHmmss",
    P = "YYYY-MM-DDTHH:mm:ss",
    w = /RRULE:.*/;
function x(t, n, e, i) {
    var o, x, E;
    let S,
        D = (0, s.e7)([f.ZP], () => f.ZP.isActive(t)),
        N = (0, p.zI)(null != t ? t : "", i),
        T = (0, s.e7)([f.ZP], () => f.ZP.getGuildScheduledEvent(t), [t]),
        _ = (0, s.e7)([v.Z], () => v.Z.getGuild(n), [n]);
    if (D || null == N || null == T) return null;
    S =
        T.entity_type === y.WX.EXTERNAL
            ? T.entity_metadata.location
            : null != e && null != _
              ? m.intl.formatToPlainString(m.t["2t8L09"], {
                    channelName: e.name,
                    guildName: _.name,
                })
              : m.intl.string(m.t.VSgOVl);
    let R = a()(T.scheduled_start_time),
        k = null != T.scheduled_end_time ? a()(T.scheduled_end_time) : R,
        C =
            null != T.description && "" !== T.description
                ? g.ZP.unparse(T.description, null != (o = null == e ? void 0 : e.id) ? o : Z.lds, !0)
                : "",
        G = (0, j.KV)(T.recurrence_rule),
        L = null != G ? (0, h.Ho)(G) : null,
        { startTime: I, endTime: M } = N,
        X = null != (x = a()(I)) ? x : R,
        Y = null != (E = a()(null != M ? M : I)) ? E : R,
        q = () => {
            let t = r()();
            t.createEvent({
                start: R,
                end: k,
                summary: T.name,
                description: C,
                location: S,
                repeating: L,
            }),
                b.isPlatformEmbedded
                    ? d.Z.fileManager.saveWithDialog(t.toString(), "discord-event.ics")
                    : window.open(t.toURL(), "_blank");
        };
    return (0, l.jsxs)(u.sNh, {
        id: m.intl.string(m.t.k5pvjo),
        label: m.intl.string(m.t.k5pvjo),
        action: q,
        children: [
            (0, l.jsx)(u.sNh, {
                id: m.intl.string(m.t.JKSLRE),
                label: m.intl.string(m.t.JKSLRE),
                action: () => {
                    var t;
                    let n = null == L ? void 0 : L.toString(),
                        e = {
                            text: T.name,
                            dates: "".concat(R.format(O), "/").concat(k.format(O)),
                            details: C,
                            action: "TEMPLATE",
                            location: S,
                            recur: null != n ? (null == (t = w.exec(n)) ? void 0 : t[0]) : void 0,
                        },
                        l = "https://calendar.google.com/calendar/render?".concat((0, c.stringify)(e));
                    window.open(l, "_blank");
                },
            }),
            (0, l.jsx)(u.sNh, {
                id: m.intl.string(m.t.nrBYSU),
                label: m.intl.string(m.t.nrBYSU),
                action: q,
            }),
            (0, l.jsx)(u.sNh, {
                id: m.intl.string(m.t.odzaCQ),
                label: m.intl.string(m.t.odzaCQ),
                action: () => {
                    let t = {
                            v: 60,
                            title: T.name,
                            st: X.format(O),
                            et: Y.format(O),
                            desc: C,
                            in_loc: S,
                        },
                        n = "https://calendar.yahoo.com/?".concat((0, c.stringify)(t));
                    window.open(n, "_blank");
                },
            }),
            (0, l.jsx)(u.sNh, {
                id: m.intl.string(m.t.rQe8EB),
                label: m.intl.string(m.t.rQe8EB),
                action: () => {
                    let t = {
                            path: "/calendar/action/compose",
                            rru: "addevent",
                            startdt: X.format(P),
                            enddt: Y.format(P),
                            subject: T.name,
                            body: C,
                            location: S,
                            allday: !1,
                        },
                        n = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, c.stringify)(t));
                    window.open(n, "_blank");
                },
            }),
        ],
    });
}
