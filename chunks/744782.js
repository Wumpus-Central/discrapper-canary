t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(264229),
    s = t(366980),
    o = t(603236),
    c = t(939863),
    d = t(984933),
    u = t(430824),
    x = t(341165),
    m = t(626135),
    h = t(572004),
    g = t(971130),
    v = t(230900),
    j = t(981631),
    f = t(388032),
    N = t(880083);
let { INVITE_OPTIONS_7_DAYS: I, INVITE_OPTIONS_UNLIMITED: p } = g.ZP;
function C(e) {
    var n, t, C;
    let { onClose: E, event: T } = e,
        S = null == T ? void 0 : T.guild_id,
        Z = (0, i.e7)(
            [d.ZP],
            () => {
                var e;
                return null != S ? (null === (e = d.ZP.getDefaultChannel(S)) || void 0 === e ? void 0 : e.id) : null;
            },
            [S]
        ),
        b = (0, i.e7)([u.Z], () => u.Z.getGuild(S), [S]),
        { channel_id: y, id: _ } = null != T ? T : {},
        R = (0, i.e7)(
            [x.Z],
            () => {
                let e = null != y ? y : Z;
                return null == e ? null : x.Z.getInvite(e);
            },
            [y, Z]
        );
    if (null == T) return E(), null;
    let k = null !== (n = null == b ? void 0 : b.vanityURLCode) && void 0 !== n ? n : null == R ? void 0 : R.code,
        A =
            null != k
                ? (0, a.tV)({
                      baseCode: k,
                      guildScheduledEventId: _
                  })
                : null,
        D = null == A || null == R,
        L = (0, s.Z)(null != A ? A : ''),
        z = null !== (t = null == R ? void 0 : R.maxAge) && void 0 !== t ? t : I.value,
        B = null !== (C = null == R ? void 0 : R.maxUses) && void 0 !== C ? C : p.value;
    return (0, l.jsxs)('div', {
        className: N.container,
        children: [
            (0, l.jsx)(r.Clickable, {
                onClick: E,
                className: N.close,
                'aria-label': f.intl.string(f.t.cpT0Cg),
                children: (0, l.jsx)(r.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsx)(c.Z, {
                children: (0, l.jsx)('div', {
                    className: N.iconContainer,
                    children: (0, l.jsx)(r.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: N.icon
                    })
                })
            }),
            (0, l.jsx)(r.Heading, {
                variant: 'heading-xl/semibold',
                className: N.header,
                children: f.intl.string(f.t.UzNv7u)
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: N.body,
                children: f.intl.string(f.t.UetJjI)
            }),
            (0, l.jsxs)('div', {
                className: N.invite,
                children: [
                    (0, l.jsx)(o.S, {
                        value: L,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (D) return;
                            (0, h.JG)(e);
                            let n = (0, v.xC)(T.entity_type);
                            m.default.track(j.rMx.COPY_INSTANT_INVITE, {
                                server: T.guild_id,
                                channel: y,
                                channel_type: n,
                                location: j.t4x.GUILD_EVENTS,
                                code: R.code,
                                guild_scheduled_event_id: null == T ? void 0 : T.id
                            });
                        }
                    }),
                    (null == b ? void 0 : b.vanityURLCode) == null &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: N.inviteDetail,
                            children: (0, g.Vg)(z, B)
                        })
                ]
            })
        ]
    });
}
