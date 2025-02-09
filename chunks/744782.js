t.d(n, { Z: () => E });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    s = t(264229),
    a = t(366980),
    o = t(603236),
    d = t(939863),
    c = t(984933),
    u = t(430824),
    x = t(341165),
    h = t(626135),
    m = t(572004),
    v = t(971130),
    g = t(230900),
    j = t(981631),
    N = t(388032),
    p = t(39059);
let { INVITE_OPTIONS_7_DAYS: f, INVITE_OPTIONS_UNLIMITED: C } = v.ZP;
function E(e) {
    var n, t, E;
    let { onClose: I, event: S } = e,
        T = null == S ? void 0 : S.guild_id,
        Z = (0, i.e7)(
            [c.ZP],
            () => {
                var e;
                return null != T ? (null === (e = c.ZP.getDefaultChannel(T)) || void 0 === e ? void 0 : e.id) : null;
            },
            [T]
        ),
        y = (0, i.e7)([u.Z], () => u.Z.getGuild(T), [T]),
        { channel_id: b, id: k } = null != S ? S : {},
        _ = (0, i.e7)(
            [x.Z],
            () => {
                let e = null != b ? b : Z;
                return null == e ? null : x.Z.getInvite(e);
            },
            [b, Z]
        );
    if (null == S) return I(), null;
    let R = null !== (n = null == y ? void 0 : y.vanityURLCode) && void 0 !== n ? n : null == _ ? void 0 : _.code,
        z =
            null != R
                ? (0, s.tV)({
                      baseCode: R,
                      guildScheduledEventId: k
                  })
                : null,
        A = null == z || null == _,
        D = (0, a.Z)(null != z ? z : ''),
        P = null !== (t = null == _ ? void 0 : _.maxAge) && void 0 !== t ? t : f.value,
        L = null !== (E = null == _ ? void 0 : _.maxUses) && void 0 !== E ? E : C.value;
    return (0, l.jsxs)('div', {
        className: p.container,
        children: [
            (0, l.jsx)(r.P3F, {
                onClick: I,
                className: p.close,
                'aria-label': N.intl.string(N.t.cpT0Cg),
                children: (0, l.jsx)(r.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(d.Z, {
                children: (0, l.jsx)('div', {
                    className: p.iconContainer,
                    children: (0, l.jsx)(r.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: p.icon
                    })
                })
            }),
            (0, l.jsx)(r.X6q, {
                variant: 'heading-xl/semibold',
                className: p.header,
                children: N.intl.string(N.t.UzNv7u)
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: p.body,
                children: N.intl.string(N.t.UetJjI)
            }),
            (0, l.jsxs)('div', {
                className: p.invite,
                children: [
                    (0, l.jsx)(o.S, {
                        value: D,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (A) return;
                            (0, m.JG)(e);
                            let n = (0, g.xC)(S.entity_type);
                            h.default.track(j.rMx.COPY_INSTANT_INVITE, {
                                server: S.guild_id,
                                channel: b,
                                channel_type: n,
                                location: j.t4x.GUILD_EVENTS,
                                code: _.code,
                                guild_scheduled_event_id: null == S ? void 0 : S.id
                            });
                        }
                    }),
                    (null == y ? void 0 : y.vanityURLCode) == null &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: p.inviteDetail,
                            children: (0, v.Vg)(P, L)
                        })
                ]
            })
        ]
    });
}
