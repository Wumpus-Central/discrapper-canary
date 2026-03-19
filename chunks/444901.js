n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
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
    I = n(985018),
    E = n(62323),
    v = n(748921);
function b(e) {
    let { message: t, applicationName: n, iconSrc: r, channel: a, currentUserId: s, viewAction: d } = e,
        c = (0, m.Ay)(t),
        u = (0, h.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id })(c);
    return (0, i.jsx)(p.A, {
        compact: !1,
        children: I.intl.format(s === t.author.id ? I.t.anvg2q : I.t.AxVbYF, {
            username: c.nick,
            usernameHook: u,
            applicationHook: () => {
                let e = null != d ? o.MzZ : "div";
                return (0, i.jsxs)(e, {
                    onClick: d,
                    className: E.Lf,
                    children: [
                        (0, i.jsx)("img", {
                            alt: I.intl.string(I.t["2B/phM"]),
                            src: r,
                            className: l()(v.Gt, _.M.XSMALL),
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
            applicationName: a,
            channel: l,
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
            startAuthorization: P,
            accountLinkButtonRef: M,
            renderAccountLinkUpsell: w,
        } = e,
        D = (0, s.bG)([g.A], () => g.A.getMessages(l.id)),
        { actions: k, hasAccountLinkButton: O } = r.useMemo(() => {
            let e = [],
                i = !0,
                r = !1;
            if (
                (null != h
                    ? (e = [
                          {
                              label: I.intl.string(I.t["s+J8Dl"]),
                              trackingArea: u.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  d.A.launch({ applicationId: h, embedded: p });
                              },
                          },
                      ])
                    : null != v && ((e = [v]), (i = !1)),
                e.length > 0)
            )
                if (!(0, x.p)(t.id, D, n.id, j)) return { actions: [], hasAccountLinkButton: !1 };
                else
                    R &&
                        i &&
                        (e.push({
                            label: I.intl.string(I.t.lw71Nf),
                            trackingArea: u.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                P({ analyticsLocations: L });
                            },
                            icon: o.A5T,
                            iconButton: !0,
                            buttonRef: M,
                        }),
                        (r = !0));
            return { actions: e, hasAccountLinkButton: r };
        }, [p, h, v, D, j, n.id, t.id, R, P, L, M]),
        U = k.some((e) => e.trackingArea === u.kY.CLOUD_PLAY);
    (0, f.A)(U, L);
    let B = k.length > 0,
        G = r.useMemo(
            () =>
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: E.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, A.BE)(t, a, l, m, B),
                }),
            [t, a, l, m, B],
        );
    return 0 === k.length
        ? (0, i.jsx)(b, { message: t, applicationName: a, iconSrc: S, channel: l, currentUserId: m, viewAction: y })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.h, {
                      header: _,
                      title: a,
                      staticBannerSrc: T,
                      onClickBanner: y,
                      bannerAspectRatio: c.u.ACTIVITY,
                      iconSrc: S ?? void 0,
                      info: G,
                      actions: k,
                      primaryActionFirst: !0,
                      onClickContent: y,
                      trackingConfig: {
                          id: n.id,
                          linkType: C.J.RICH_PRESENCE_INVITE,
                          onView: N,
                          referrerId: t.author.id,
                          guildId: l.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  O ? w() : null,
              ],
          });
}
