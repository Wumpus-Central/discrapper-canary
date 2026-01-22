n.d(t, { A: () => O });
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    s = n(21599),
    a = n(279208),
    o = n(708051),
    c = n(489673),
    u = n(808728),
    d = n(71393),
    g = n(958590),
    x = n(954571),
    m = n(957565),
    h = n(735547),
    j = n(9448),
    v = n(652215),
    p = n(985018),
    f = n(671353);
let { INVITE_OPTIONS_7_DAYS: b, INVITE_OPTIONS_UNLIMITED: y } = h.Ay;
function O(e) {
    var t, n, O;
    let { onClose: A, event: N } = e,
        E = null == N ? void 0 : N.guild_id,
        C = (0, r.bG)([u.Ay], () => {
            var e;
            return null != E ? (null == (e = u.Ay.getDefaultChannel(E)) ? void 0 : e.id) : null;
        }, [E]),
        P = (0, r.bG)([d.A], () => d.A.getGuild(E), [E]),
        { channel_id: S, id: T } = null != N ? N : {},
        w = (0, r.bG)([g.A], () => {
            let e = null != S ? S : C;
            return null == e ? null : g.A.getInvite(e);
        }, [S, C]);
    if (null == N) return A(), null;
    let I = null != (t = null == P ? void 0 : P.vanityURLCode) ? t : null == w ? void 0 : w.code,
        D =
            null != I
                ? (0, s.WU)({
                      baseCode: I,
                      guildScheduledEventId: T,
                  })
                : null,
        k = null == D || null == w,
        G = (0, a.A)(null != D ? D : ""),
        R = null != (n = null == w ? void 0 : w.maxAge) ? n : b.value,
        _ = null != (O = null == w ? void 0 : w.maxUses) ? O : y.value;
    return (0, l.jsxs)("div", {
        className: f.kL,
        children: [
            (0, l.jsx)(i.DUT, {
                onClick: A,
                className: f.VN,
                "aria-label": p.intl.string(p.t.cpT0Cq),
                children: (0, l.jsx)(i.PGe, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, l.jsx)(c.A, {
                children: (0, l.jsx)("div", {
                    className: f.zc,
                    children: (0, l.jsx)(i.CTc, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: f.Kk,
                    }),
                }),
            }),
            (0, l.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                className: f.wx,
                children: p.intl.string(p.t.UzNv7u),
            }),
            (0, l.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: f.rf,
                children: p.intl.string(p.t.UetJjH),
            }),
            (0, l.jsxs)("div", {
                className: f.EZ,
                children: [
                    (0, l.jsx)(o.I, {
                        value: G,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (k) return;
                            (0, m.C)(e);
                            let t = (0, j.dy)(N.entity_type);
                            x.default.track(v.HAw.COPY_INSTANT_INVITE, {
                                server: N.guild_id,
                                channel: S,
                                channel_type: t,
                                location: v.PE1.GUILD_EVENTS,
                                code: w.code,
                                guild_scheduled_event_id: null == N ? void 0 : N.id,
                            });
                        },
                    }),
                    (null == P ? void 0 : P.vanityURLCode) == null &&
                        (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: f.x6,
                            children: (0, h.Be)(R, _),
                        }),
                ],
            }),
        ],
    });
}
