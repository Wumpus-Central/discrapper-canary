n.d(t, { Z: () => S }), n(953529);
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
    _ = n(739566),
    p = n(942951),
    h = n(834129),
    m = n(375954),
    g = n(758371),
    E = n(810008),
    b = n(691991),
    y = n(967249),
    O = n(388032),
    v = n(837262),
    I = n(520816);
function T(e) {
    let { message: t, applicationName: n, iconSrc: i, channel: a, currentUserId: s, viewAction: c } = e,
        u = (0, _.ZP)(t),
        d = (0, p.l)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id,
        })(u);
    return (0, r.jsx)(h.Z, {
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
                            className: o()(I.gameIcon, f.A.XSMALL),
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
function S(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: o,
            header: f,
            currentUserId: _,
            launchableAppId: p,
            isEmbeddedApplication: h,
            tryWithGdnAction: I,
            staticBannerSrc: S,
            onClickContent: A,
            iconSrc: C,
            onView: N,
            presenceActivity: R,
            analyticsLocations: P,
        } = e,
        D = (0, s.e7)([m.Z], () => m.Z.getMessages(o.id)),
        w = i.useMemo(() => {
            let e = [];
            return (null != p
                ? (e = [
                      {
                          label: O.intl.string(O.t["s+J8Dl"]),
                          trackingArea: d.j_.PLAY,
                          isDeadEnd: !0,
                          onClick: () => {
                              c.Z.launch({
                                  applicationId: p,
                                  embedded: h,
                              });
                          },
                      },
                  ])
                : null != I && (e = [I]),
            e.length > 0 && !(0, E.b)(t.id, D, n.id, R))
                ? []
                : e;
        }, [h, p, I, D, R, n.id, t.id]),
        L = w.some((e) => e.trackingArea === d.j_.CLOUD_PLAY);
    (0, b.Z)(L, P);
    let x = w.length > 0,
        M = i.useMemo(
            () =>
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: v.description,
                    color: "none",
                    lineClamp: 3,
                    children: (0, g.wR)(t, a, o, _, x),
                }),
            [t, a, o, _, x],
        );
    return 0 === w.length
        ? (0, r.jsx)(T, {
              message: t,
              applicationName: a,
              iconSrc: C,
              channel: o,
              currentUserId: _,
              viewAction: A,
          })
        : (0, r.jsx)(u.W, {
              header: f,
              title: a,
              staticBannerSrc: S,
              onClickBanner: A,
              bannerAspectRatio: u.u.ACTIVITY,
              iconSrc: null != C ? C : void 0,
              info: M,
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
