n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(544420),
    c = n(572211),
    u = n(354287),
    _ = n(769015),
    m = n(763754),
    h = n(447215),
    p = n(888675),
    g = n(320501),
    A = n(456060),
    x = n(472590),
    f = n(878831),
    C = n(768349),
    E = n(985018),
    I = n(193018),
    v = n(444282);
function b(e) {
    let { message: t, applicationName: n, iconSrc: a, channel: l, currentUserId: s, viewAction: d } = e,
        c = (0, m.Ay)(t),
        u = (0, h.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id })(c);
    return (0, i.jsx)(p.A, {
        compact: !1,
        children: E.intl.format(s === t.author.id ? E.t.anvg2q : E.t.AxVbYF, {
            username: c.nick,
            usernameHook: u,
            applicationHook: () => {
                let e = null != d ? o.MzZ : "div";
                return (0, i.jsxs)(e, {
                    onClick: d,
                    className: I.Lf,
                    children: [
                        (0, i.jsx)("img", {
                            alt: E.intl.string(E.t["2B/phM"]),
                            src: a,
                            className: r()(v.Gt, _.M.XSMALL),
                        }),
                        (0, i.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-muted", children: n }),
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
            applicationName: l,
            channel: r,
            header: _,
            currentUserId: m,
            launchableAppId: h,
            isEmbeddedApplication: p,
            tryWithGdnAction: v,
            staticBannerSrc: T,
            onClickContent: y,
            iconSrc: S,
            onView: N,
            presenceActivity: j,
            analyticsLocations: L,
            showAuthButton: R,
            requireAccountLink: P,
            startAuthorization: w,
            accountLinkButtonRef: M,
            renderAccountLinkUpsell: D,
        } = e,
        k = (0, s.bG)([g.A], () => g.A.getMessages(r.id)),
        { actions: O, hasAccountLinkButton: U } = a.useMemo(() => {
            let e = [],
                i = !0,
                a = !1;
            if (
                (P && null != h
                    ? ((e = [
                          {
                              label: E.intl.string(E.t.lw71Nf),
                              trackingArea: u.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  w({ analyticsLocations: L });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != h
                      ? (e = [
                            {
                                label: E.intl.string(E.t["s+J8Dl"]),
                                trackingArea: u.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    d.Ay.launch({ applicationId: h, embedded: p });
                                },
                            },
                        ])
                      : null != v && ((e = [v]), (i = !1)),
                e.length > 0)
            )
                if (!(0, x.p)(t.id, k, n.id, j)) return { actions: [], hasAccountLinkButton: !1 };
                else
                    R &&
                        i &&
                        (e.push({
                            label: E.intl.string(E.t.lw71Nf),
                            trackingArea: u.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                w({ analyticsLocations: L });
                            },
                            icon: o.A5T,
                            iconButton: !0,
                            buttonRef: M,
                        }),
                        (a = !0));
            return { actions: e, hasAccountLinkButton: a };
        }, [P, p, h, v, k, j, n.id, t.id, R, w, L, M]),
        B = O.some((e) => e.trackingArea === u.kY.CLOUD_PLAY);
    (0, f.A)(B, L);
    let G = O.length > 0,
        F = a.useMemo(
            () =>
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: I.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, A.BE)(t, l, r, m, G),
                }),
            [t, l, r, m, G],
        );
    return 0 === O.length
        ? (0, i.jsx)(b, { message: t, applicationName: l, iconSrc: S, channel: r, currentUserId: m, viewAction: y })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.h, {
                      header: _,
                      title: l,
                      staticBannerSrc: T,
                      onClickBanner: y,
                      bannerAspectRatio: c.u.ACTIVITY,
                      iconSrc: S ?? void 0,
                      info: F,
                      actions: O,
                      primaryActionFirst: !0,
                      onClickContent: y,
                      trackingConfig: {
                          id: n.id,
                          linkType: C.J.RICH_PRESENCE_INVITE,
                          onView: N,
                          referrerId: t.author.id,
                          guildId: r.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  U ? D() : null,
              ],
          });
}
