n.d(t, {
    Z: () => M,
    q: () => P
}),
    n(47120),
    n(266796);
var a = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    c = n(153867),
    r = n(607070),
    o = n(100527),
    d = n(906732),
    u = n(895924),
    p = n(264165),
    f = n(70097),
    g = n(740492),
    m = n(592125),
    v = n(430824),
    h = n(496675),
    b = n(944486),
    x = n(566620),
    _ = n(317381),
    C = n(122613),
    I = n(678173),
    y = n(696068),
    T = n(361213),
    j = n(778569),
    Z = n(412019),
    S = n(981631),
    N = n(388032),
    O = n(74946);
function E(e) {
    return (0, l.e7)(
        [v.Z, h.Z],
        () => {
            let t = v.Z.getGuild(e);
            return null != t && h.Z.can(S.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let A = ['embedded_background'];
function M(e) {
    var t, n;
    let { applicationId: o, guildId: d, selectedChannelId: u, setSelectedChannelId: h, enableSelectedTextChannelInvite: _ } = e,
        C = (0, l.e7)([m.Z], () => m.Z.getChannel(u)),
        S = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        M = (0, I.T)(
            {
                channel: C,
                type: 'channel'
            },
            null != d ? d : null,
            null != o ? o : null
        ),
        [P, w] = i.useState(_ && !g.ZP.disableInviteWithTextChannelActivityLaunch),
        L = (0, y.F)(d);
    i.useEffect(() => {
        var e;
        x.w1({ guildId: d }), h(null !== (e = (0, y.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, h]);
    let k = null == M ? void 0 : M.activity.activity_preview_video_asset_id,
        D = null != k ? (0, T.Z)(null !== (t = null == M ? void 0 : M.application.id) && void 0 !== t ? t : '', k) : null,
        { url: R } = (0, j.Z)({
            applicationId: null !== (n = null == M ? void 0 : M.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: A
        }),
        F = (0, l.e7)([v.Z], () => v.Z.getGuild(d)),
        W = (0, l.e7)([m.Z, b.Z], () => m.Z.getChannel(b.Z.getChannelId())),
        B = E(null != d ? d : void 0);
    if ((null == M ? void 0 : M.application) == null || null == F) return null;
    let V = (null == W ? void 0 : W.name) == null || (null == W ? void 0 : W.name) === '' ? N.NW.string(N.t.PlAffn) : '#'.concat(W.name);
    return (0, a.jsxs)(s.Ttm, {
        className: O.scroll,
        children: [
            null != D || null != R
                ? (0, a.jsx)(p.Z, {
                      aspectRatio: 16 / 9,
                      className: O.imageContainer,
                      children: (0, a.jsx)(f.Z, {
                          className: O.video,
                          src: D,
                          loop: !0,
                          autoPlay: !S,
                          poster: R,
                          muted: !0
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                className: O.descriptionArea,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: null == M ? void 0 : M.application.name
                    }),
                    (0, a.jsx)(s.Text, {
                        className: O.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == M ? void 0 : M.application.description
                    })
                ]
            }),
            (0, a.jsx)(s.PhF, {
                placeholder: N.NW.string(N.t.SUryfX),
                optionClassName: O.__invalid_option,
                options: L,
                isSelected: (e) => {
                    let { channel: t } = e;
                    return t.id === u;
                },
                select: (e) => {
                    let { channel: t } = e;
                    return h(t.id);
                },
                serialize: (e) => {
                    let { channel: t } = e;
                    return t.id;
                },
                renderOptionValue: () => {
                    let e = L.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, a.jsx)(Z.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, a.jsx)(Z.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            B && _
                ? (0, a.jsxs)(s.P3F, {
                      className: O.checkboxContainer,
                      onClick: () => {
                          let e = !P;
                          c.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), w(e);
                      },
                      children: [
                          (0, a.jsx)(s.XZJ, {
                              type: s.XZJ.Types.INVERTED,
                              className: O.checkbox,
                              value: P,
                              displayOnly: !0
                          }),
                          (0, a.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [N.NW.string(N.t.x3JFq6), ' ', (0, a.jsx)('strong', { children: V })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function P(e) {
    let { applicationId: t, guildId: n, locationObject: i, onBack: c, onClose: r, selectedChannelId: p, enableSelectedTextChannelInvite: f } = e,
        { analyticsLocations: v } = (0, d.ZP)(o.Z.ACTIVITY_CHANNEL_SELECTOR),
        h = (0, l.e7)([m.Z], () => m.Z.getChannel(p)),
        y = (0, I.T)(
            {
                channel: h,
                type: 'channel'
            },
            null != n ? n : null,
            null != t ? t : null
        ),
        T = (0, l.e7)([m.Z, b.Z], () => m.Z.getChannel(b.Z.getChannelId())),
        j = (0, l.e7)([g.ZP], () => f && !g.ZP.disableInviteWithTextChannelActivityLaunch),
        Z = (0, l.e7)([_.ZP], () => null != p && '' !== p && _.ZP.getEmbeddedActivitiesForChannel(p).some((e) => e.applicationId === t)),
        A = E(n),
        M = async () => {
            var e;
            null != p &&
                '' !== p &&
                null != y &&
                null != n &&
                '' !== n &&
                (await (0, C.Z)({
                    targetApplicationId: null === (e = y.application) || void 0 === e ? void 0 : e.id,
                    locationObject: i,
                    channelId: p,
                    analyticsLocations: v,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                (r(),
                null != T &&
                    A &&
                    j &&
                    (await x.sN({
                        activityChannelId: p,
                        invitedChannelId: T.id,
                        applicationId: y.application.id,
                        location: S.Sbl.ACTIVITY_SHELF
                    })));
        };
    return (0, a.jsx)(d.Gt, {
        value: v,
        children: (0, a.jsxs)('div', {
            className: O.footerContainer,
            children: [
                (0, a.jsx)(s.P3F, {
                    onClick: c,
                    className: O.backToBrowse,
                    children: (0, a.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: N.NW.string(N.t['13/7kZ'])
                    })
                }),
                null == p
                    ? (0, a.jsx)('div', {})
                    : (0, a.jsx)(s.zxk, {
                          className: O.launchButton,
                          onClick: M,
                          color: Z ? s.zxk.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: Z ? N.NW.string(N.t.sqe0ho) : N.NW.string(N.t.QO7rOz)
                      })
            ]
        })
    });
}
