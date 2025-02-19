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
    r = n(153867),
    c = n(607070),
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
    N = n(412019),
    Z = n(981631),
    S = n(388032),
    O = n(367191);
function E(e) {
    return (0, l.e7)(
        [v.Z, h.Z],
        () => {
            let t = v.Z.getGuild(e);
            return null != t && h.Z.can(Z.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let A = ['embedded_background'];
function M(e) {
    var t, n;
    let { applicationId: o, guildId: d, selectedChannelId: u, setSelectedChannelId: h, enableSelectedTextChannelInvite: _ } = e,
        C = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        Z = (0, I.T)(null != d ? d : null, null != o ? o : null),
        [M, P] = i.useState(_ && !g.ZP.disableInviteWithTextChannelActivityLaunch),
        w = (0, y.F)(d);
    i.useEffect(() => {
        var e;
        x.w1({ guildId: d }), h(null !== (e = (0, y.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, h]);
    let L = null == Z ? void 0 : Z.activity.activity_preview_video_asset_id,
        k = null != L ? (0, T.Z)(null !== (t = null == Z ? void 0 : Z.application.id) && void 0 !== t ? t : '', L) : null,
        { url: D } = (0, j.Z)({
            applicationId: null !== (n = null == Z ? void 0 : Z.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: A
        }),
        W = (0, l.e7)([v.Z], () => v.Z.getGuild(d)),
        R = (0, l.e7)([m.Z, b.Z], () => m.Z.getChannel(b.Z.getChannelId())),
        F = E(null != d ? d : void 0);
    if ((null == Z ? void 0 : Z.application) == null || null == W) return null;
    let B = (null == R ? void 0 : R.name) == null || (null == R ? void 0 : R.name) === '' ? S.NW.string(S.t.PlAffn) : '#'.concat(R.name);
    return (0, a.jsxs)(s.Ttm, {
        className: O.scroll,
        children: [
            null != k || null != D
                ? (0, a.jsx)(p.Z, {
                      aspectRatio: 16 / 9,
                      className: O.imageContainer,
                      children: (0, a.jsx)(f.Z, {
                          className: O.video,
                          src: k,
                          loop: !0,
                          autoPlay: !C,
                          poster: D,
                          muted: !0
                      })
                  })
                : null,
            (0, a.jsxs)('div', {
                className: O.descriptionArea,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: null == Z ? void 0 : Z.application.name
                    }),
                    (0, a.jsx)(s.Text, {
                        className: O.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == Z ? void 0 : Z.application.description
                    })
                ]
            }),
            (0, a.jsx)(s.PhF, {
                placeholder: S.NW.string(S.t.SUryfX),
                optionClassName: O.__invalid_option,
                options: w,
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
                    let e = w.find((e) => e.value.channel.id === u);
                    return null == e
                        ? null
                        : (0, a.jsx)(N.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, a.jsx)(N.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            F && _
                ? (0, a.jsxs)(s.P3F, {
                      className: O.checkboxContainer,
                      onClick: () => {
                          let e = !M;
                          r.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), P(e);
                      },
                      children: [
                          (0, a.jsx)(s.XZJ, {
                              type: s.XZJ.Types.INVERTED,
                              className: O.checkbox,
                              value: M,
                              displayOnly: !0
                          }),
                          (0, a.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [S.NW.string(S.t.x3JFq6), ' ', (0, a.jsx)('strong', { children: B })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function P(e) {
    let { applicationId: t, guildId: n, locationObject: i, onBack: r, onClose: c, selectedChannelId: p, enableSelectedTextChannelInvite: f } = e,
        { analyticsLocations: v } = (0, d.ZP)(o.Z.ACTIVITY_CHANNEL_SELECTOR),
        h = (0, I.T)(null != n ? n : null, null != t ? t : null),
        y = (0, l.e7)([m.Z, b.Z], () => m.Z.getChannel(b.Z.getChannelId())),
        T = (0, l.e7)([g.ZP], () => f && !g.ZP.disableInviteWithTextChannelActivityLaunch),
        j = (0, l.e7)([_.ZP], () => null != p && '' !== p && _.ZP.getEmbeddedActivitiesForChannel(p).some((e) => e.applicationId === t)),
        N = E(n),
        A = async () => {
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
                (c(),
                null != y &&
                    N &&
                    T &&
                    (await x.sN({
                        activityChannelId: p,
                        invitedChannelId: y.id,
                        applicationId: h.application.id,
                        location: Z.Sbl.ACTIVITY_SHELF
                    })));
        };
    return (0, a.jsx)(d.Gt, {
        value: v,
        children: (0, a.jsxs)('div', {
            className: O.footerContainer,
            children: [
                (0, a.jsx)(s.P3F, {
                    onClick: r,
                    className: O.backToBrowse,
                    children: (0, a.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: S.NW.string(S.t['13/7kZ'])
                    })
                }),
                null == p
                    ? (0, a.jsx)('div', {})
                    : (0, a.jsx)(s.zxk, {
                          className: O.launchButton,
                          onClick: A,
                          color: j ? s.zxk.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: j ? S.NW.string(S.t.sqe0ho) : S.NW.string(S.t.QO7rOz)
                      })
            ]
        })
    });
}
