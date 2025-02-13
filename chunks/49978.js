n.d(t, {
    Z: () => O,
    q: () => L
}),
    n(47120);
var a = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    c = n(153867),
    o = n(607070),
    r = n(100527),
    d = n(906732),
    u = n(895924),
    p = n(264165),
    m = n(70097),
    g = n(740492),
    f = n(592125),
    v = n(430824),
    h = n(496675),
    x = n(944486),
    _ = n(566620),
    b = n(317381),
    C = n(122613),
    I = n(678173),
    T = n(696068),
    Z = n(361213),
    S = n(778569),
    y = n(412019),
    N = n(981631),
    j = n(388032),
    E = n(107290);
function A(e) {
    return (0, l.e7)(
        [v.Z, h.Z],
        () => {
            let t = v.Z.getGuild(e);
            return null != t && h.Z.can(N.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let M = ['embedded_background'];
function O(e) {
    var t, n;
    let { applicationId: r, guildId: d, selectedChannelId: u, setSelectedChannelId: h, enableSelectedTextChannelInvite: b } = e,
        C = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        N = (0, I.T)(null != d ? d : null, null != r ? r : null),
        [O, L] = i.useState(b && !g.ZP.disableInviteWithTextChannelActivityLaunch),
        k = (0, T.F)(d);
    i.useEffect(() => {
        var e;
        _.w1({ guildId: d }), h(null !== (e = (0, T.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, h]);
    let w = null == N ? void 0 : N.activity.activity_preview_video_asset_id,
        P = null != w ? (0, Z.Z)(null !== (t = null == N ? void 0 : N.application.id) && void 0 !== t ? t : '', w) : null,
        { url: D } = (0, S.Z)({
            applicationId: null !== (n = null == N ? void 0 : N.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: M
        }),
        R = (0, l.e7)([v.Z], () => v.Z.getGuild(d)),
        F = (0, l.e7)([f.Z, x.Z], () => f.Z.getChannel(x.Z.getChannelId())),
        B = A(null != d ? d : void 0);
    if ((null == N ? void 0 : N.application) == null || null == R) return null;
    let V = (null == F ? void 0 : F.name) == null || (null == F ? void 0 : F.name) === '' ? j.intl.string(j.t.PlAffn) : '#'.concat(F.name);
    return (0, a.jsxs)(s.Ttm, {
        className: E.scroll,
        children: [
            null != P || null != D
                ? (0, a.jsx)(p.Z, {
                      aspectRatio: 16 / 9,
                      className: E.imageContainer,
                      children: (0, a.jsx)(m.Z, {
                          className: E.video,
                          src: P,
                          loop: !0,
                          autoPlay: !C,
                          poster: D,
                          muted: !0
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                className: E.descriptionArea,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: null == N ? void 0 : N.application.name
                    }),
                    (0, a.jsx)(s.Text, {
                        className: E.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == N ? void 0 : N.application.description
                    })
                ]
            }),
            (0, a.jsx)(s.PhF, {
                placeholder: j.intl.string(j.t.SUryfX),
                optionClassName: E.__invalid_option,
                options: k,
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
                    let e = k.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, a.jsx)(y.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, a.jsx)(y.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            B && b
                ? (0, a.jsxs)(s.P3F, {
                      className: E.checkboxContainer,
                      onClick: () => {
                          let e = !O;
                          c.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), L(e);
                      },
                      children: [
                          (0, a.jsx)(s.XZJ, {
                              type: s.XZJ.Types.INVERTED,
                              className: E.checkbox,
                              value: O,
                              displayOnly: !0
                          }),
                          (0, a.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [j.intl.string(j.t.x3JFq6), ' ', (0, a.jsx)('strong', { children: V })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function L(e) {
    let { applicationId: t, guildId: n, locationObject: i, onBack: c, onClose: o, selectedChannelId: p, enableSelectedTextChannelInvite: m } = e,
        { analyticsLocations: v } = (0, d.ZP)(r.Z.ACTIVITY_CHANNEL_SELECTOR),
        h = (0, I.T)(null != n ? n : null, null != t ? t : null),
        T = (0, l.e7)([f.Z, x.Z], () => f.Z.getChannel(x.Z.getChannelId())),
        Z = (0, l.e7)([g.ZP], () => m && !g.ZP.disableInviteWithTextChannelActivityLaunch),
        S = (0, l.e7)([b.ZP], () => null != p && '' !== p && b.ZP.getEmbeddedActivitiesForChannel(p).some((e) => e.applicationId === t)),
        y = A(n),
        M = async () => {
            var e;
            null != p &&
                '' !== p &&
                null != h &&
                null != n &&
                '' !== n &&
                (await (0, C.Z)({
                    targetApplicationId: null === (e = h.application) || void 0 === e ? void 0 : e.id,
                    locationObject: i,
                    channelId: p,
                    analyticsLocations: v,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                (o(),
                null != T &&
                    y &&
                    Z &&
                    (await _.sN({
                        activityChannelId: p,
                        invitedChannelId: T.id,
                        applicationId: h.application.id,
                        location: N.Sbl.ACTIVITY_SHELF
                    })));
        };
    return (0, a.jsx)(d.Gt, {
        value: v,
        children: (0, a.jsxs)('div', {
            className: E.footerContainer,
            children: [
                (0, a.jsx)(s.P3F, {
                    onClick: c,
                    className: E.backToBrowse,
                    children: (0, a.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: j.intl.string(j.t['13/7kZ'])
                    })
                }),
                null == p
                    ? (0, a.jsx)('div', {})
                    : (0, a.jsx)(s.zxk, {
                          className: E.launchButton,
                          onClick: M,
                          color: S ? s.zxk.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: S ? j.intl.string(j.t.sqe0ho) : j.intl.string(j.t.QO7rOz)
                      })
            ]
        })
    });
}
