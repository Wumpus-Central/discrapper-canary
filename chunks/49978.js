n.d(t, {
    Z: function () {
        return O;
    },
    q: function () {
        return L;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(442837),
    s = n(481060),
    c = n(153867),
    o = n(607070),
    r = n(100527),
    d = n(906732),
    u = n(895924),
    p = n(264165),
    f = n(70097),
    m = n(740492),
    g = n(592125),
    v = n(430824),
    h = n(496675),
    x = n(944486),
    b = n(566620),
    C = n(317381),
    I = n(122613),
    T = n(678173),
    _ = n(696068),
    Z = n(361213),
    S = n(778569),
    N = n(412019),
    y = n(981631),
    j = n(388032),
    E = n(791436);
function A(e) {
    return (0, l.e7)(
        [v.Z, h.Z],
        () => {
            let t = v.Z.getGuild(e);
            return null != t && h.Z.can(y.Plq.CREATE_INSTANT_INVITE, t);
        },
        [e]
    );
}
let M = ['embedded_background'];
function O(e) {
    var t, n;
    let { applicationId: r, guildId: d, selectedChannelId: u, setSelectedChannelId: h, enableSelectedTextChannelInvite: C } = e,
        I = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        y = (0, T.T)(null != d ? d : null, null != r ? r : null),
        [O, L] = a.useState(C && !m.ZP.disableInviteWithTextChannelActivityLaunch),
        w = (0, _.F)(d);
    a.useEffect(() => {
        var e;
        b.w1({ guildId: d }), h(null !== (e = (0, _.d)({ guildId: d })) && void 0 !== e ? e : void 0);
    }, [d, h]);
    let k = null == y ? void 0 : y.activity.activity_preview_video_asset_id,
        B = null != k ? (0, Z.Z)(null !== (t = null == y ? void 0 : y.application.id) && void 0 !== t ? t : '', k) : null,
        { url: D } = (0, S.Z)({
            applicationId: null !== (n = null == y ? void 0 : y.application.id) && void 0 !== n ? n : '',
            size: 1024,
            names: M
        }),
        P = (0, l.e7)([v.Z], () => v.Z.getGuild(d)),
        R = (0, l.e7)([g.Z, x.Z], () => g.Z.getChannel(x.Z.getChannelId())),
        F = A(null != d ? d : void 0);
    if ((null == y ? void 0 : y.application) == null || null == P) return null;
    let H = (null == R ? void 0 : R.name) == null || (null == R ? void 0 : R.name) === '' ? j.intl.string(j.t.PlAffn) : '#'.concat(R.name);
    return (0, i.jsxs)(s.Scroller, {
        className: E.scroll,
        children: [
            null != B || null != D
                ? (0, i.jsx)(p.Z, {
                      aspectRatio: 16 / 9,
                      className: E.imageContainer,
                      children: (0, i.jsx)(f.Z, {
                          className: E.video,
                          src: B,
                          loop: !0,
                          autoPlay: !I,
                          poster: D,
                          muted: !0
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: E.descriptionArea,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: null == y ? void 0 : y.application.name
                    }),
                    (0, i.jsx)(s.Text, {
                        className: E.descriptionAreaSubtext,
                        variant: 'text-md/normal',
                        children: null == y ? void 0 : y.application.description
                    })
                ]
            }),
            (0, i.jsx)(s.Select, {
                placeholder: j.intl.string(j.t.SUryfX),
                optionClassName: E.__invalid_option,
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
                        : (0, i.jsx)(N.O, {
                              channel: e.value.channel,
                              users: e.value.users
                          });
                },
                renderOptionLabel: (e) => {
                    let {
                        value: { channel: t, users: n }
                    } = e;
                    return (0, i.jsx)(N.O, {
                        channel: t,
                        users: n
                    });
                }
            }),
            F && C
                ? (0, i.jsxs)(s.Clickable, {
                      className: E.checkboxContainer,
                      onClick: () => {
                          let e = !O;
                          c.ZP.updatedUnsyncedSettings({ disableInviteWithTextChannelActivityLaunch: !e }), L(e);
                      },
                      children: [
                          (0, i.jsx)(s.Checkbox, {
                              type: s.Checkbox.Types.INVERTED,
                              className: E.checkbox,
                              value: O,
                              displayOnly: !0
                          }),
                          (0, i.jsxs)(s.Text, {
                              variant: 'text-sm/normal',
                              children: [j.intl.string(j.t.x3JFq6), ' ', (0, i.jsx)('strong', { children: H })]
                          })
                      ]
                  })
                : null
        ]
    });
}
function L(e) {
    let { applicationId: t, guildId: n, locationObject: a, onBack: c, onClose: o, selectedChannelId: p, enableSelectedTextChannelInvite: f } = e,
        { analyticsLocations: v } = (0, d.ZP)(r.Z.ACTIVITY_CHANNEL_SELECTOR),
        h = (0, T.T)(null != n ? n : null, null != t ? t : null),
        _ = (0, l.e7)([g.Z, x.Z], () => g.Z.getChannel(x.Z.getChannelId())),
        Z = (0, l.e7)([m.ZP], () => f && !m.ZP.disableInviteWithTextChannelActivityLaunch),
        S = (0, l.e7)([C.ZP], () => null != p && '' !== p && C.ZP.getEmbeddedActivitiesForChannel(p).some((e) => e.applicationId === t)),
        N = A(n),
        M = async () => {
            var e;
            if (null != p && '' !== p && null != h && null != n && '' !== n)
                (await (0, I.Z)({
                    targetApplicationId: null === (e = h.application) || void 0 === e ? void 0 : e.id,
                    locationObject: a,
                    channelId: p,
                    analyticsLocations: v,
                    commandOrigin: u.bB.APPLICATION_LAUNCHER
                })) &&
                    (o(),
                    null != _ &&
                        N &&
                        Z &&
                        (await b.sN({
                            activityChannelId: p,
                            invitedChannelId: _.id,
                            applicationId: h.application.id,
                            location: y.Sbl.ACTIVITY_SHELF
                        })));
        };
    return (0, i.jsx)(d.Gt, {
        value: v,
        children: (0, i.jsxs)('div', {
            className: E.footerContainer,
            children: [
                (0, i.jsx)(s.Clickable, {
                    onClick: c,
                    className: E.backToBrowse,
                    children: (0, i.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: j.intl.string(j.t['13/7kZ'])
                    })
                }),
                null == p
                    ? (0, i.jsx)('div', {})
                    : (0, i.jsx)(s.Button, {
                          className: E.launchButton,
                          onClick: M,
                          color: S ? s.Button.Colors.GREEN : void 0,
                          fullWidth: !0,
                          children: S ? j.intl.string(j.t.sqe0ho) : j.intl.string(j.t.QO7rOz)
                      })
            ]
        })
    });
}
