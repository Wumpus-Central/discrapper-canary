n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
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
    I = n(71747),
    v = n(463209);
function b(e) {
    let { message: t, applicationName: n, iconSrc: l, channel: s, currentUserId: a, viewAction: d } = e,
        c = (0, m.Ay)(t),
        u = (0, h.P)({ user: t.author, channelId: s.id, guildId: s.guild_id, messageId: t.id })(c);
    return (0, i.jsx)(p.A, {
        compact: !1,
        children: E.intl.format(a === t.author.id ? E.t.anvg2q : E.t.AxVbYF, {
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
                            src: l,
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
            applicationName: s,
            channel: r,
            header: _,
            currentUserId: m,
            launchableAppId: h,
            isEmbeddedApplication: p,
            tryWithGdnAction: v,
            staticBannerSrc: T,
            onClickContent: y,
            iconSrc: N,
            onView: S,
            presenceActivity: j,
            analyticsLocations: L,
            showAuthButton: R,
            startAuthorization: P,
            accountLinkButtonRef: D,
            renderAccountLinkUpsell: M,
        } = e,
        w = (0, a.bG)([g.A], () => g.A.getMessages(r.id)),
        { actions: k, hasAccountLinkButton: O } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (null != h
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
                if (!(0, x.p)(t.id, w, n.id, j)) return { actions: [], hasAccountLinkButton: !1 };
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
                            buttonRef: D,
                        }),
                        (l = !0));
            return { actions: e, hasAccountLinkButton: l };
        }, [p, h, v, w, j, n.id, t.id, R, P, L, D]),
        U = k.some((e) => e.trackingArea === u.kY.CLOUD_PLAY);
    (0, f.A)(U, L);
    let B = k.length > 0,
        G = l.useMemo(
            () =>
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: I.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, A.BE)(t, s, r, m, B),
                }),
            [t, s, r, m, B],
        );
    return 0 === k.length
        ? (0, i.jsx)(b, { message: t, applicationName: s, iconSrc: N, channel: r, currentUserId: m, viewAction: y })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.h, {
                      header: _,
                      title: s,
                      staticBannerSrc: T,
                      onClickBanner: y,
                      bannerAspectRatio: c.u.ACTIVITY,
                      iconSrc: N ?? void 0,
                      info: G,
                      actions: k,
                      primaryActionFirst: !0,
                      onClickContent: y,
                      trackingConfig: {
                          id: n.id,
                          linkType: C.J.RICH_PRESENCE_INVITE,
                          onView: S,
                          referrerId: t.author.id,
                          guildId: r.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  O ? M() : null,
              ],
          });
}
