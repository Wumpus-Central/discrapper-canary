n.d(t, { A: () => S });
var l = n(627968);
n(64700);
var i = n(311907),
    s = n(939249),
    r = n(789645),
    a = n(81466),
    d = n(534514),
    o = n(834730),
    c = n(21599),
    u = n(279208),
    x = n(708051),
    h = n(489673),
    m = n(808728),
    g = n(71393),
    v = n(958590),
    j = n(954571),
    A = n(957565),
    E = n(735547),
    p = n(9448),
    N = n(652215),
    C = n(985018),
    f = n(2472);
let { INVITE_OPTIONS_7_DAYS: y, INVITE_OPTIONS_UNLIMITED: b } = E.Ay;
function S(e) {
    let { onClose: t, event: n } = e,
        S = n?.guild_id,
        I = (0, i.bG)([m.Ay], () => (null != S ? m.Ay.getDefaultChannel(S)?.id : null), [S]),
        T = (0, i.bG)([g.A], () => g.A.getGuild(S), [S]),
        { channel_id: R, id: _ } = n ?? {},
        k = (0, i.bG)([v.A], () => {
            let e = R ?? I;
            return null == e ? null : v.A.getInvite(e);
        }, [R, I]);
    if (null == n) return t(), null;
    let D = T?.vanityURLCode ?? k?.code,
        G = null != D ? (0, c.WU)({ baseCode: D, guildScheduledEventId: _ }) : null,
        L = null == G || null == k,
        M = (0, u.A)(G ?? ""),
        P = k?.maxAge ?? y.value,
        U = k?.maxUses ?? b.value;
    return (0, l.jsxs)("div", {
        className: f.kL,
        children: [
            (0, l.jsx)(s.D, {
                onClick: t,
                className: f.VN,
                "aria-label": C.intl.string(C.t.cpT0Cq),
                children: (0, l.jsx)(r.P, { size: "md", color: "currentColor" }),
            }),
            (0, l.jsx)(h.A, {
                children: (0, l.jsx)("div", {
                    className: f.zc,
                    children: (0, l.jsx)(a.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: f.Kk,
                    }),
                }),
            }),
            (0, l.jsx)(d.D, { variant: "heading-xl/semibold", className: f.wx, children: C.intl.string(C.t.UzNv7u) }),
            (0, l.jsx)(o.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: f.rf,
                children: C.intl.string(C.t.UetJjH),
            }),
            (0, l.jsxs)("div", {
                className: f.EZ,
                children: [
                    (0, l.jsx)(x.I, {
                        value: M,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (L) return;
                            (0, A.C)(e);
                            let t = (0, p.dy)(n.entity_type);
                            j.default.track(N.HAw.COPY_INSTANT_INVITE, {
                                server: n.guild_id,
                                channel: R,
                                channel_type: t,
                                location: N.PE1.GUILD_EVENTS,
                                code: k.code,
                                guild_scheduled_event_id: n?.id,
                            });
                        },
                    }),
                    T?.vanityURLCode == null &&
                        (0, l.jsx)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: f.x6,
                            children: (0, E.Be)(P, U),
                        }),
                ],
            }),
        ],
    });
}
