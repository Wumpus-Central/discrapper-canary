n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var l = n(442837),
    i = n(481060),
    a = n(264229),
    s = n(366980),
    o = n(603236),
    c = n(939863),
    u = n(984933),
    d = n(430824),
    x = n(341165),
    m = n(626135),
    g = n(572004),
    v = n(971130),
    h = n(230900),
    f = n(981631),
    p = n(388032),
    j = n(407865);
let { INVITE_OPTIONS_7_DAYS: y, INVITE_OPTIONS_UNLIMITED: b } = v.ZP;
function E(e) {
    var t, n, E;
    let { onClose: O, event: N } = e,
        C = null == N ? void 0 : N.guild_id,
        T = (0, l.e7)(
            [u.ZP],
            () => {
                var e;
                return null != C ? (null == (e = u.ZP.getDefaultChannel(C)) ? void 0 : e.id) : null;
            },
            [C]
        ),
        S = (0, l.e7)([d.Z], () => d.Z.getGuild(C), [C]),
        { channel_id: I, id: Z } = null != N ? N : {},
        P = (0, l.e7)(
            [x.Z],
            () => {
                let e = null != I ? I : T;
                return null == e ? null : x.Z.getInvite(e);
            },
            [I, T]
        );
    if (null == N) return (O(), null);
    let w = null != (t = null == S ? void 0 : S.vanityURLCode) ? t : null == P ? void 0 : P.code,
        D =
            null != w
                ? (0, a.tV)({
                      baseCode: w,
                      guildScheduledEventId: Z
                  })
                : null,
        _ = null == D || null == P,
        R = (0, s.Z)(null != D ? D : ''),
        A = null != (n = null == P ? void 0 : P.maxAge) ? n : y.value,
        G = null != (E = null == P ? void 0 : P.maxUses) ? E : b.value;
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)(i.P3F, {
                onClick: O,
                className: j.close,
                'aria-label': p.intl.string(p.t.cpT0Cg),
                children: (0, r.jsx)(i.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(c.Z, {
                children: (0, r.jsx)('div', {
                    className: j.iconContainer,
                    children: (0, r.jsx)(i.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: j.icon
                    })
                })
            }),
            (0, r.jsx)(i.X6q, {
                variant: 'heading-xl/semibold',
                className: j.header,
                children: p.intl.string(p.t.UzNv7u)
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: j.body,
                children: p.intl.string(p.t.UetJjI)
            }),
            (0, r.jsxs)('div', {
                className: j.invite,
                children: [
                    (0, r.jsx)(o.S, {
                        value: R,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (_) return;
                            (0, g.JG)(e);
                            let t = (0, h.xC)(N.entity_type);
                            m.default.track(f.rMx.COPY_INSTANT_INVITE, {
                                server: N.guild_id,
                                channel: I,
                                channel_type: t,
                                location: f.t4x.GUILD_EVENTS,
                                code: P.code,
                                guild_scheduled_event_id: null == N ? void 0 : N.id
                            });
                        }
                    }),
                    (null == S ? void 0 : S.vanityURLCode) == null &&
                        (0, r.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: j.inviteDetail,
                            children: (0, v.Vg)(A, G)
                        })
                ]
            })
        ]
    });
}
