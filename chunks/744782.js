n.d(t, { Z: () => E });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    a = n(264229),
    s = n(366980),
    o = n(603236),
    c = n(939863),
    u = n(984933),
    d = n(430824),
    x = n(341165),
    g = n(626135),
    m = n(572004),
    h = n(971130),
    v = n(230900),
    f = n(981631),
    p = n(388032),
    j = n(407865);
let { INVITE_OPTIONS_7_DAYS: y, INVITE_OPTIONS_UNLIMITED: b } = h.ZP;
function E(e) {
    var t, n, E;
    let { onClose: O, event: N } = e,
        C = null == N ? void 0 : N.guild_id,
        S = (0, r.e7)(
            [u.ZP],
            () => {
                var e;
                return null != C ? (null == (e = u.ZP.getDefaultChannel(C)) ? void 0 : e.id) : null;
            },
            [C]
        ),
        T = (0, r.e7)([d.Z], () => d.Z.getGuild(C), [C]),
        { channel_id: I, id: P } = null != N ? N : {},
        Z = (0, r.e7)(
            [x.Z],
            () => {
                let e = null != I ? I : S;
                return null == e ? null : x.Z.getInvite(e);
            },
            [I, S]
        );
    if (null == N) return (O(), null);
    let w = null != (t = null == T ? void 0 : T.vanityURLCode) ? t : null == Z ? void 0 : Z.code,
        D =
            null != w
                ? (0, a.tV)({
                      baseCode: w,
                      guildScheduledEventId: P
                  })
                : null,
        k = null == D || null == Z,
        R = (0, s.Z)(null != D ? D : ''),
        _ = null != (n = null == Z ? void 0 : Z.maxAge) ? n : y.value,
        L = null != (E = null == Z ? void 0 : Z.maxUses) ? E : b.value;
    return (0, l.jsxs)('div', {
        className: j.container,
        children: [
            (0, l.jsx)(i.P3F, {
                onClick: O,
                className: j.close,
                'aria-label': p.intl.string(p.t.cpT0Cg),
                children: (0, l.jsx)(i.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(c.Z, {
                children: (0, l.jsx)('div', {
                    className: j.iconContainer,
                    children: (0, l.jsx)(i.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: j.icon
                    })
                })
            }),
            (0, l.jsx)(i.X6q, {
                variant: 'heading-xl/semibold',
                className: j.header,
                children: p.intl.string(p.t.UzNv7u)
            }),
            (0, l.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: j.body,
                children: p.intl.string(p.t.UetJjI)
            }),
            (0, l.jsxs)('div', {
                className: j.invite,
                children: [
                    (0, l.jsx)(o.S, {
                        value: R,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (k) return;
                            (0, m.JG)(e);
                            let t = (0, v.xC)(N.entity_type);
                            g.default.track(f.rMx.COPY_INSTANT_INVITE, {
                                server: N.guild_id,
                                channel: I,
                                channel_type: t,
                                location: f.t4x.GUILD_EVENTS,
                                code: Z.code,
                                guild_scheduled_event_id: null == N ? void 0 : N.id
                            });
                        }
                    }),
                    (null == T ? void 0 : T.vanityURLCode) == null &&
                        (0, l.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: j.inviteDetail,
                            children: (0, h.Vg)(_, L)
                        })
                ]
            })
        ]
    });
}
