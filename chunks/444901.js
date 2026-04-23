n.d(t, { A: () => y }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(349288),
    d = n(834730),
    c = n(141628),
    u = n(544420),
    m = n(572211),
    _ = n(354287),
    h = n(769015),
    p = n(763754),
    g = n(447215),
    A = n(888675),
    f = n(320501),
    x = n(456060),
    C = n(472590),
    E = n(878831),
    I = n(768349),
    v = n(985018),
    b = n(193018),
    T = n(444282);
function S(e) {
    let { message: t, applicationName: n, iconSrc: l, channel: a, currentUserId: r, viewAction: c } = e,
        u = (0, p.Ay)(t),
        m = (0, g.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id })(u);
    return (0, i.jsx)(A.A, {
        compact: !1,
        children: v.intl.format(r === t.author.id ? v.t.anvg2q : v.t.AxVbYF, {
            username: u.nick,
            usernameHook: m,
            applicationHook: () => {
                let e = null != c ? o.Anchor : "div";
                return (0, i.jsxs)(e, {
                    onClick: c,
                    className: b.Lf,
                    children: [
                        (0, i.jsx)("img", {
                            alt: v.intl.string(v.t["2B/phM"]),
                            src: l,
                            className: s()(T.Gt, h.M.XSMALL),
                        }),
                        (0, i.jsx)(d.E, { variant: "text-sm/semibold", color: "text-muted", children: n }),
                    ],
                });
            },
        }),
    });
}
function y(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: s,
            header: o,
            currentUserId: h,
            launchableAppId: p,
            isEmbeddedApplication: g,
            tryWithGdnAction: A,
            staticBannerSrc: T,
            onClickContent: y,
            iconSrc: N,
            onView: j,
            presenceActivity: L,
            analyticsLocations: R,
            showAuthButton: P,
            requireAccountLink: w,
            startAuthorization: D,
            accountLinkButtonRef: k,
            renderAccountLinkUpsell: O,
        } = e,
        M = (0, r.bG)([f.A], () => f.A.getMessages(s.id)),
        { actions: U, hasAccountLinkButton: G } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (w && null != p
                    ? ((e = [
                          {
                              label: v.intl.string(v.t.lw71Nf),
                              trackingArea: _.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  D({ analyticsLocations: R });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != p
                      ? (e = [
                            {
                                label: v.intl.string(v.t["s+J8Dl"]),
                                trackingArea: _.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    u.Ay.launch({ applicationId: p, embedded: g });
                                },
                            },
                        ])
                      : null != A && ((e = [A]), (i = !1)),
                e.length > 0)
            )
                if (!(0, C.p)(t.id, M, n.id, L)) return { actions: [], hasAccountLinkButton: !1 };
                else
                    P &&
                        i &&
                        (e.push({
                            label: v.intl.string(v.t.lw71Nf),
                            trackingArea: _.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                D({ analyticsLocations: R });
                            },
                            icon: c.A,
                            iconButton: !0,
                            buttonRef: k,
                        }),
                        (l = !0));
            return { actions: e, hasAccountLinkButton: l };
        }, [w, g, p, A, M, L, n.id, t.id, P, D, R, k]),
        B = U.some((e) => e.trackingArea === _.kY.CLOUD_PLAY);
    (0, E.A)(B, R);
    let F = U.length > 0,
        H = l.useMemo(
            () =>
                (0, i.jsx)(d.E, {
                    variant: "text-xs/medium",
                    className: b.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, x.BE)(t, a, s, h, F),
                }),
            [t, a, s, h, F],
        );
    return 0 === U.length
        ? (0, i.jsx)(S, { message: t, applicationName: a, iconSrc: N, channel: s, currentUserId: h, viewAction: y })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: o,
                      title: a,
                      staticBannerSrc: T,
                      onClickBanner: y,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: N ?? void 0,
                      info: H,
                      actions: U,
                      primaryActionFirst: !0,
                      onClickContent: y,
                      trackingConfig: {
                          id: n.id,
                          linkType: I.J.RICH_PRESENCE_INVITE,
                          onView: j,
                          referrerId: t.author.id,
                          guildId: s.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  G ? O() : null,
              ],
          });
}
