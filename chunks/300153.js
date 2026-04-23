l.d(t, { A: () => S });
var n = l(627968);
l(64700);
var i = l(311907),
    s = l(939249),
    a = l(789645),
    r = l(81466),
    d = l(534514),
    o = l(834730),
    c = l(21599),
    u = l(279208),
    x = l(708051),
    h = l(489673),
    m = l(808728),
    g = l(71393),
    v = l(958590),
    j = l(954571),
    A = l(957565),
    E = l(735547),
    p = l(9448),
    f = l(652215),
    N = l(985018),
    C = l(118888);
let { INVITE_OPTIONS_7_DAYS: y, INVITE_OPTIONS_UNLIMITED: b } = E.Ay;
function S(e) {
    let { onClose: t, event: l } = e,
        S = l?.guild_id,
        I = (0, i.bG)([m.Ay], () => (null != S ? m.Ay.getDefaultChannel(S)?.id : null), [S]),
        T = (0, i.bG)([g.A], () => g.A.getGuild(S), [S]),
        { channel_id: R, id: D } = l ?? {},
        _ = (0, i.bG)([v.A], () => {
            let e = R ?? I;
            return null == e ? null : v.A.getInvite(e);
        }, [R, I]);
    if (null == l) return t(), null;
    let k = T?.vanityURLCode ?? _?.code,
        G = null != k ? (0, c.WU)({ baseCode: k, guildScheduledEventId: D }) : null,
        L = null == G || null == _,
        M = (0, u.A)(G ?? ""),
        P = _?.maxAge ?? y.value,
        U = _?.maxUses ?? b.value;
    return (0, n.jsxs)("div", {
        className: C.kL,
        children: [
            (0, n.jsx)(s.D, {
                onClick: t,
                className: C.VN,
                "aria-label": N.intl.string(N.t.cpT0Cq),
                children: (0, n.jsx)(a.P, { size: "md", color: "currentColor" }),
            }),
            (0, n.jsx)(h.A, {
                children: (0, n.jsx)("div", {
                    className: C.zc,
                    children: (0, n.jsx)(r.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: C.Kk,
                    }),
                }),
            }),
            (0, n.jsx)(d.D, { variant: "heading-xl/semibold", className: C.wx, children: N.intl.string(N.t.UzNv7u) }),
            (0, n.jsx)(o.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: C.rf,
                children: N.intl.string(N.t.UetJjH),
            }),
            (0, n.jsxs)("div", {
                className: C.EZ,
                children: [
                    (0, n.jsx)(x.I, {
                        value: M,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (L) return;
                            (0, A.C)(e);
                            let t = (0, p.dy)(l.entity_type);
                            j.default.track(f.HAw.COPY_INSTANT_INVITE, {
                                server: l.guild_id,
                                channel: R,
                                channel_type: t,
                                location: f.PE1.GUILD_EVENTS,
                                code: _.code,
                                guild_scheduled_event_id: l?.id,
                            });
                        },
                    }),
                    T?.vanityURLCode == null &&
                        (0, n.jsx)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: C.x6,
                            children: (0, E.Be)(P, U),
                        }),
                ],
            }),
        ],
    });
}
