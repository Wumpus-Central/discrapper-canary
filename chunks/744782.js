n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(264229),
    s = n(366980),
    o = n(603236),
    c = n(939863),
    u = n(984933),
    d = n(430824),
    m = n(341165),
    h = n(626135),
    x = n(572004),
    g = n(971130),
    p = n(230900),
    f = n(981631),
    v = n(388032),
    b = n(407865);
let { INVITE_OPTIONS_7_DAYS: j, INVITE_OPTIONS_UNLIMITED: y } = g.ZP;
function N(e) {
    var t, n, N;
    let { onClose: O, event: E } = e,
        S = null == E ? void 0 : E.guild_id,
        C = (0, l.e7)(
            [u.ZP],
            () => {
                var e;
                return null != S ? (null == (e = u.ZP.getDefaultChannel(S)) ? void 0 : e.id) : null;
            },
            [S]
        ),
        P = (0, l.e7)([d.Z], () => d.Z.getGuild(S), [S]),
        { channel_id: I, id: T } = null != E ? E : {},
        w = (0, l.e7)(
            [m.Z],
            () => {
                let e = null != I ? I : C;
                return null == e ? null : m.Z.getInvite(e);
            },
            [I, C]
        );
    if (null == E) return O(), null;
    let W = null != (t = null == P ? void 0 : P.vanityURLCode) ? t : null == w ? void 0 : w.code,
        Z =
            null != W
                ? (0, a.tV)({
                      baseCode: W,
                      guildScheduledEventId: T
                  })
                : null,
        k = null == Z || null == w,
        D = (0, s.Z)(null != Z ? Z : ''),
        R = null != (n = null == w ? void 0 : w.maxAge) ? n : j.value,
        _ = null != (N = null == w ? void 0 : w.maxUses) ? N : y.value;
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)(i.P3F, {
                onClick: O,
                className: b.close,
                'aria-label': v.NW.string(v.t.cpT0Cg),
                children: (0, r.jsx)(i.Dio, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsx)(c.Z, {
                children: (0, r.jsx)('div', {
                    className: b.iconContainer,
                    children: (0, r.jsx)(i.Que, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 30,
                        width: 30,
                        className: b.icon
                    })
                })
            }),
            (0, r.jsx)(i.X6q, {
                variant: 'heading-xl/semibold',
                className: b.header,
                children: v.NW.string(v.t.UzNv7u)
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: b.body,
                children: v.NW.string(v.t.UetJjI)
            }),
            (0, r.jsxs)('div', {
                className: b.invite,
                children: [
                    (0, r.jsx)(o.S, {
                        value: D,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (k) return;
                            (0, x.JG)(e);
                            let t = (0, p.xC)(E.entity_type);
                            h.default.track(f.rMx.COPY_INSTANT_INVITE, {
                                server: E.guild_id,
                                channel: I,
                                channel_type: t,
                                location: f.t4x.GUILD_EVENTS,
                                code: w.code,
                                guild_scheduled_event_id: null == E ? void 0 : E.id
                            });
                        }
                    }),
                    (null == P ? void 0 : P.vanityURLCode) == null &&
                        (0, r.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: b.inviteDetail,
                            children: (0, g.Vg)(R, _)
                        })
                ]
            })
        ]
    });
}
