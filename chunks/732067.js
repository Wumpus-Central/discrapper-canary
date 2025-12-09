n.d(t, { Z: () => T }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(224706),
    u = n(758199),
    d = n(914498),
    f = n(925329),
    p = n(739566),
    _ = n(942951),
    m = n(834129),
    h = n(375954),
    g = n(758371),
    E = n(810008),
    b = n(691991),
    y = n(967249),
    O = n(388032),
    v = n(837262),
    S = n(520816);
function I(e) {
    let { message: t, applicationName: n, iconSrc: i, channel: a, currentUserId: s, viewAction: c } = e,
        u = (0, p.ZP)(t),
        d = (0, _.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id,
        })(u);
    return (0, r.jsx)(m.Z, {
        compact: !1,
        children: O.intl.format(s === t.author.id ? O.t.anvg2q : O.t.AxVbYF, {
            username: u.nick,
            usernameHook: d,
            applicationHook: () => {
                let e = null != c ? l.Anchor : "div";
                return (0, r.jsxs)(e, {
                    onClick: c,
                    className: v.inlineApplicationText,
                    children: [
                        (0, r.jsx)("img", {
                            alt: O.intl.string(O.t["2B/phM"]),
                            src: i,
                            className: o()(S.gameIcon, f.A.XSMALL),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "text-muted",
                            children: n,
                        }),
                    ],
                });
            },
        }),
    });
}
function T(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: o,
            header: f,
            currentUserId: p,
            launchableAppId: _,
            isEmbeddedApplication: m,
            tryWithGdnAction: S,
            staticBannerSrc: T,
            onClickContent: A,
            iconSrc: C,
            onView: N,
            presenceActivity: P,
            analyticsLocations: R,
        } = e,
        D = (0, s.e7)([h.Z], () => h.Z.getMessages(o.id)),
        w = i.useMemo(() => {
            let e = [];
            return (null != _
                ? (e = [
                      {
                          label: O.intl.string(O.t["s+J8Dl"]),
                          trackingArea: d.j_.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              c.Z.launch({
                                  applicationId: _,
                                  embedded: m,
                              });
                          },
                      },
                  ])
                : null != S && (e = [S]),
            e.length > 0 && !(0, E.b)(t.id, D, n.id, P))
                ? []
                : e;
        }, [m, _, S, D, P, n.id, t.id]),
        x = w.some((e) => e.trackingArea === d.j_.CLOUD_PLAY);
    (0, b.Z)(x, R);
    let L = w.length > 0,
        j = i.useMemo(
            () =>
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: v.description,
                    color: "none",
                    lineClamp: 3,
                    children: (0, g.wR)(t, a, o, p, L),
                }),
            [t, a, o, p, L],
        );
    return 0 === w.length
        ? (0, r.jsx)(I, {
              message: t,
              applicationName: a,
              iconSrc: C,
              channel: o,
              currentUserId: p,
              viewAction: A,
          })
        : (0, r.jsx)(u.W, {
              header: f,
              title: a,
              staticBannerSrc: T,
              onClickBanner: A,
              bannerAspectRatio: u.u.ACTIVITY,
              iconSrc: null != C ? C : void 0,
              info: j,
              actions: w,
              onClickContent: A,
              trackingConfig: {
                  id: n.id,
                  linkType: y.U.RICH_PRESENCE_INVITE,
                  onView: N,
                  referrerId: t.author.id,
                  guildId: o.guild_id,
                  channelId: t.channel_id,
                  messageId: t.id,
                  isDeadEnd: !0,
              },
          });
}
