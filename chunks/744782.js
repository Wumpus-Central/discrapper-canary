n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    i = n(264229),
    s = n(366980),
    o = n(603236),
    c = n(939863),
    u = n(984933),
    d = n(430824),
    m = n(341165),
    x = n(626135),
    g = n(572004),
    h = n(971130),
    v = n(230900),
    f = n(981631),
    p = n(388032),
    j = n(407865);
let { INVITE_OPTIONS_7_DAYS: N, INVITE_OPTIONS_UNLIMITED: b } = h.ZP;
function y(e) {
    var t, n, y;
    let { onClose: O, event: E } = e,
        C = null == E ? void 0 : E.guild_id,
        I = (0, l.e7)(
            [u.ZP],
            () => {
                var e;
                return null != C ? (null == (e = u.ZP.getDefaultChannel(C)) ? void 0 : e.id) : null;
            },
            [C]
        ),
        S = (0, l.e7)([d.Z], () => d.Z.getGuild(C), [C]),
        { channel_id: T, id: P } = null != E ? E : {},
        W = (0, l.e7)(
            [m.Z],
            () => {
                let e = null != T ? T : I;
                return null == e ? null : m.Z.getInvite(e);
            },
            [T, I]
        );
    if (null == E) return O(), null;
    let w = null != (t = null == S ? void 0 : S.vanityURLCode) ? t : null == W ? void 0 : W.code,
        Z =
            null != w
                ? (0, i.tV)({
                      baseCode: w,
                      guildScheduledEventId: P
                  })
                : null,
        k = null == Z || null == W,
        _ = (0, s.Z)(null != Z ? Z : ''),
        D = null != (n = null == W ? void 0 : W.maxAge) ? n : N.value,
        R = null != (y = null == W ? void 0 : W.maxUses) ? y : b.value;
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)(a.P3F, {
                onClick: O,
                className: j.close,
                'aria-label': p.NW.string(p.t.cpT0Cg),
                children: (0, r.jsx)(a.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(c.Z, {
                children: (0, r.jsx)('div', {
                    className: j.iconContainer,
                    children: (0, r.jsx)(a.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: j.icon
                    })
                })
            }),
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                className: j.header,
                children: p.NW.string(p.t.UzNv7u)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: j.body,
                children: p.NW.string(p.t.UetJjI)
            }),
            (0, r.jsxs)('div', {
                className: j.invite,
                children: [
                    (0, r.jsx)(o.S, {
                        value: _,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (k) return;
                            (0, g.JG)(e);
                            let t = (0, v.xC)(E.entity_type);
                            x.default.track(f.rMx.COPY_INSTANT_INVITE, {
                                server: E.guild_id,
                                channel: T,
                                channel_type: t,
                                location: f.t4x.GUILD_EVENTS,
                                code: W.code,
                                guild_scheduled_event_id: null == E ? void 0 : E.id
                            });
                        }
                    }),
                    (null == S ? void 0 : S.vanityURLCode) == null &&
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: j.inviteDetail,
                            children: (0, h.Vg)(D, R)
                        })
                ]
            })
        ]
    });
}
