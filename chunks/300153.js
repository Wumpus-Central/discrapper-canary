n.d(t, { A: () => p });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(21599),
    r = n(279208),
    d = n(708051),
    c = n(489673),
    o = n(808728),
    u = n(71393),
    x = n(958590),
    h = n(954571),
    m = n(957565),
    g = n(735547),
    v = n(9448),
    j = n(652215),
    A = n(985018),
    N = n(619303);
let { INVITE_OPTIONS_7_DAYS: f, INVITE_OPTIONS_UNLIMITED: E } = g.Ay;
function p(e) {
    let { onClose: t, event: n } = e,
        p = n?.guild_id,
        C = (0, i.bG)([o.Ay], () => (null != p ? o.Ay.getDefaultChannel(p)?.id : null), [p]),
        T = (0, i.bG)([u.A], () => u.A.getGuild(p), [p]),
        { channel_id: y, id: b } = n ?? {},
        I = (0, i.bG)([x.A], () => {
            let e = y ?? C;
            return null == e ? null : x.A.getInvite(e);
        }, [y, C]);
    if (null == n) return t(), null;
    let S = T?.vanityURLCode ?? I?.code,
        G = null != S ? (0, a.WU)({ baseCode: S, guildScheduledEventId: b }) : null,
        k = null == G || null == I,
        _ = (0, r.A)(G ?? ""),
        R = I?.maxAge ?? f.value,
        D = I?.maxUses ?? E.value;
    return (0, l.jsxs)("div", {
        className: N.kL,
        children: [
            (0, l.jsx)(s.DUT, {
                onClick: t,
                className: N.VN,
                "aria-label": A.intl.string(A.t.cpT0Cq),
                children: (0, l.jsx)(s.PGe, { size: "md", color: "currentColor" }),
            }),
            (0, l.jsx)(c.A, {
                children: (0, l.jsx)("div", {
                    className: N.zc,
                    children: (0, l.jsx)(s.CTc, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: N.Kk,
                    }),
                }),
            }),
            (0, l.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                className: N.wx,
                children: A.intl.string(A.t.UzNv7u),
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: N.rf,
                children: A.intl.string(A.t.UetJjH),
            }),
            (0, l.jsxs)("div", {
                className: N.EZ,
                children: [
                    (0, l.jsx)(d.I, {
                        value: _,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (k) return;
                            (0, m.C)(e);
                            let t = (0, v.dy)(n.entity_type);
                            h.default.track(j.HAw.COPY_INSTANT_INVITE, {
                                server: n.guild_id,
                                channel: y,
                                channel_type: t,
                                location: j.PE1.GUILD_EVENTS,
                                code: I.code,
                                guild_scheduled_event_id: n?.id,
                            });
                        },
                    }),
                    T?.vanityURLCode == null &&
                        (0, l.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: N.x6,
                            children: (0, g.Be)(R, D),
                        }),
                ],
            }),
        ],
    });
}
