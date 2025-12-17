n.d(t, { Z: () => T }), n(539854), n(953529);
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
    v = n(927997),
    S = n(811578);
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
            onClickContent: C,
            iconSrc: A,
            onView: N,
            presenceActivity: P,
            analyticsLocations: R,
            showAuthButton: w,
            startAuthorization: D,
            accountLinkButtonRef: x,
            renderAccountLinkUpsell: L,
        } = e,
        j = (0, s.e7)([h.Z], () => h.Z.getMessages(o.id)),
        { actions: M, hasAccountLinkButton: k } = i.useMemo(() => {
            let e = [],
                r = !0,
                i = !1;
            if (
                (null != _
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
                    : null != S && ((e = [S]), (r = !1)),
                e.length > 0)
            )
                if (!(0, E.b)(t.id, j, n.id, P))
                    return {
                        actions: [],
                        hasAccountLinkButton: !1,
                    };
                else
                    w &&
                        r &&
                        (e.push({
                            label: O.intl.string(O.t.lw71Nf),
                            trackingArea: d.j_.CONNECT_ACCOUNT,
                            onClick: () => {
                                D({ analyticsLocations: R });
                            },
                            icon: l.uIJ,
                            iconButton: !0,
                            buttonRef: x,
                        }),
                        (i = !0));
            return {
                actions: e,
                hasAccountLinkButton: i,
            };
        }, [m, _, S, j, P, n.id, t.id, w, D, R, x]),
        U = M.some((e) => e.trackingArea === d.j_.CLOUD_PLAY);
    (0, b.Z)(U, R);
    let G = M.length > 0,
        Z = i.useMemo(
            () =>
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: v.description,
                    color: "none",
                    lineClamp: 3,
                    children: (0, g.wR)(t, a, o, p, G),
                }),
            [t, a, o, p, G],
        );
    return 0 === M.length
        ? (0, r.jsx)(I, {
              message: t,
              applicationName: a,
              iconSrc: A,
              channel: o,
              currentUserId: p,
              viewAction: C,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.W, {
                      header: f,
                      title: a,
                      staticBannerSrc: T,
                      onClickBanner: C,
                      bannerAspectRatio: u.u.ACTIVITY,
                      iconSrc: null != A ? A : void 0,
                      info: Z,
                      actions: M,
                      primaryActionFirst: !0,
                      onClickContent: C,
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
                  }),
                  k ? L() : null,
              ],
          });
}
