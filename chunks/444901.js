n.d(t, { A: () => v }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
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
    I = n(609653),
    b = n(103467);
function T(e) {
    let { message: t, applicationName: n, iconSrc: r, channel: l, currentUserId: s, viewAction: d } = e,
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
                            src: r,
                            className: a()(b.Gt, _.M.XSMALL),
                        }),
                        (0, i.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-muted", children: n }),
                    ],
                });
            },
        }),
    });
}
function v(e) {
    let {
            message: t,
            application: n,
            applicationName: l,
            channel: a,
            header: _,
            currentUserId: m,
            launchableAppId: h,
            isEmbeddedApplication: p,
            tryWithGdnAction: b,
            staticBannerSrc: v,
            onClickContent: S,
            iconSrc: y,
            onView: N,
            presenceActivity: j,
            analyticsLocations: L,
            showAuthButton: R,
            startAuthorization: P,
            accountLinkButtonRef: M,
            renderAccountLinkUpsell: w,
        } = e,
        D = (0, s.bG)([g.A], () => g.A.getMessages(a.id)),
        { actions: O, hasAccountLinkButton: k } = r.useMemo(() => {
            let e = [],
                i = !0,
                r = !1;
            if (
                (null != h
                    ? (e = [
                          {
                              label: E.intl.string(E.t["s+J8Dl"]),
                              trackingArea: u.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  d.A.launch({ applicationId: h, embedded: p });
                              },
                          },
                      ])
                    : null != b && ((e = [b]), (i = !1)),
                e.length > 0)
            )
                if (!(0, x.p)(t.id, D, n.id, j)) return { actions: [], hasAccountLinkButton: !1 };
                else
                    R &&
                        i &&
                        (e.push({
                            label: E.intl.string(E.t.lw71Nf),
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
        }, [p, h, b, D, j, n.id, t.id, R, P, L, M]),
        U = O.some((e) => e.trackingArea === u.kY.CLOUD_PLAY);
    (0, f.A)(U, L);
    let G = O.length > 0,
        B = r.useMemo(
            () =>
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: I.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, A.BE)(t, l, a, m, G),
                }),
            [t, l, a, m, G],
        );
    return 0 === O.length
        ? (0, i.jsx)(T, { message: t, applicationName: l, iconSrc: y, channel: a, currentUserId: m, viewAction: S })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.h, {
                      header: _,
                      title: l,
                      staticBannerSrc: v,
                      onClickBanner: S,
                      bannerAspectRatio: c.u.ACTIVITY,
                      iconSrc: y ?? void 0,
                      info: B,
                      actions: O,
                      primaryActionFirst: !0,
                      onClickContent: S,
                      trackingConfig: {
                          id: n.id,
                          linkType: C.J.RICH_PRESENCE_INVITE,
                          onView: N,
                          referrerId: t.author.id,
                          guildId: a.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  k ? w() : null,
              ],
          });
}
