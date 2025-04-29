n.d(t, { Z: () => O });
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
    m = n(341165),
    x = n(626135),
    g = n(572004),
    h = n(971130),
    v = n(230900),
    f = n(981631),
    p = n(388032),
    j = n(407865);
let { INVITE_OPTIONS_7_DAYS: b, INVITE_OPTIONS_UNLIMITED: y } = h.ZP;
function O(e) {
    var t, n, O;
    let { onClose: N, event: E } = e,
        C = null == E ? void 0 : E.guild_id,
        I = (0, r.e7)(
            [u.ZP],
            () => {
                var e;
                return null != C ? (null == (e = u.ZP.getDefaultChannel(C)) ? void 0 : e.id) : null;
            },
            [C]
        ),
        S = (0, r.e7)([d.Z], () => d.Z.getGuild(C), [C]),
        { channel_id: T, id: P } = null != E ? E : {},
        w = (0, r.e7)(
            [m.Z],
            () => {
                let e = null != T ? T : I;
                return null == e ? null : m.Z.getInvite(e);
            },
            [T, I]
        );
    if (null == E) return N(), null;
    let Z = null != (t = null == S ? void 0 : S.vanityURLCode) ? t : null == w ? void 0 : w.code,
        k =
            null != Z
                ? (0, a.tV)({
                      baseCode: Z,
                      guildScheduledEventId: P
                  })
                : null,
        _ = null == k || null == w,
        D = (0, s.Z)(null != k ? k : ''),
        R = null != (n = null == w ? void 0 : w.maxAge) ? n : b.value,
        A = null != (O = null == w ? void 0 : w.maxUses) ? O : y.value;
    return (0, l.jsxs)('div', {
        className: j.container,
        children: [
            (0, l.jsx)(i.P3F, {
                onClick: N,
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
                        value: D,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (_) return;
                            (0, g.JG)(e);
                            let t = (0, v.xC)(E.entity_type);
                            x.default.track(f.rMx.COPY_INSTANT_INVITE, {
                                server: E.guild_id,
                                channel: T,
                                channel_type: t,
                                location: f.t4x.GUILD_EVENTS,
                                code: w.code,
                                guild_scheduled_event_id: null == E ? void 0 : E.id
                            });
                        }
                    }),
                    (null == S ? void 0 : S.vanityURLCode) == null &&
                        (0, l.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: j.inviteDetail,
                            children: (0, h.Vg)(R, A)
                        })
                ]
            })
        ]
    });
}
