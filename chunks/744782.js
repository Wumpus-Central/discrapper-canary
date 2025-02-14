l.d(n, { Z: () => C });
var t = l(200651);
l(192379);
var i = l(442837),
    a = l(481060),
    r = l(264229),
    s = l(366980),
    o = l(603236),
    d = l(939863),
    c = l(984933),
    u = l(430824),
    x = l(341165),
    m = l(626135),
    h = l(572004),
    v = l(971130),
    g = l(230900),
    j = l(981631),
    N = l(388032),
    f = l(504257);
let { INVITE_OPTIONS_7_DAYS: p, INVITE_OPTIONS_UNLIMITED: E } = v.ZP;
function C(e) {
    var n, l, C;
    let { onClose: I, event: T } = e,
        Z = null == T ? void 0 : T.guild_id,
        S = (0, i.e7)(
            [c.ZP],
            () => {
                var e;
                return null != Z ? (null === (e = c.ZP.getDefaultChannel(Z)) || void 0 === e ? void 0 : e.id) : null;
            },
            [Z]
        ),
        b = (0, i.e7)([u.Z], () => u.Z.getGuild(Z), [Z]),
        { channel_id: y, id: k } = null != T ? T : {},
        _ = (0, i.e7)(
            [x.Z],
            () => {
                let e = null != y ? y : S;
                return null == e ? null : x.Z.getInvite(e);
            },
            [y, S]
        );
    if (null == T) return I(), null;
    let z = null !== (n = null == b ? void 0 : b.vanityURLCode) && void 0 !== n ? n : null == _ ? void 0 : _.code,
        R =
            null != z
                ? (0, r.tV)({
                      baseCode: z,
                      guildScheduledEventId: k
                  })
                : null,
        A = null == R || null == _,
        D = (0, s.Z)(null != R ? R : ''),
        P = null !== (l = null == _ ? void 0 : _.maxAge) && void 0 !== l ? l : p.value,
        L = null !== (C = null == _ ? void 0 : _.maxUses) && void 0 !== C ? C : E.value;
    return (0, t.jsxs)('div', {
        className: f.container,
        children: [
            (0, t.jsx)(a.P3F, {
                onClick: I,
                className: f.close,
                'aria-label': N.intl.string(N.t.cpT0Cg),
                children: (0, t.jsx)(a.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, t.jsx)(d.Z, {
                children: (0, t.jsx)('div', {
                    className: f.iconContainer,
                    children: (0, t.jsx)(a.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: f.icon
                    })
                })
            }),
            (0, t.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                className: f.header,
                children: N.intl.string(N.t.UzNv7u)
            }),
            (0, t.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: f.body,
                children: N.intl.string(N.t.UetJjI)
            }),
            (0, t.jsxs)('div', {
                className: f.invite,
                children: [
                    (0, t.jsx)(o.S, {
                        value: D,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (A) return;
                            (0, h.JG)(e);
                            let n = (0, g.xC)(T.entity_type);
                            m.default.track(j.rMx.COPY_INSTANT_INVITE, {
                                server: T.guild_id,
                                channel: y,
                                channel_type: n,
                                location: j.t4x.GUILD_EVENTS,
                                code: _.code,
                                guild_scheduled_event_id: null == T ? void 0 : T.id
                            });
                        }
                    }),
                    (null == b ? void 0 : b.vanityURLCode) == null &&
                        (0, t.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: f.inviteDetail,
                            children: (0, v.Vg)(P, L)
                        })
                ]
            })
        ]
    });
}
