n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(544420),
    c = n(572211),
    u = n(354287),
    m = n(769015),
    _ = n(763754),
    h = n(447215),
    p = n(888675),
    g = n(320501),
    A = n(456060),
    f = n(472590),
    x = n(878831),
    E = n(768349),
    C = n(985018),
    I = n(609653),
    T = n(103467);
function v(e) {
    let { message: t, applicationName: n, iconSrc: l, channel: a, currentUserId: s, viewAction: d } = e,
        c = (0, _.Ay)(t),
        u = (0, h.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id })(c);
    return (0, i.jsx)(p.A, {
        compact: !1,
        children: C.intl.format(s === t.author.id ? C.t.anvg2q : C.t.AxVbYF, {
            username: c.nick,
            usernameHook: u,
            applicationHook: () => {
                let e = null != d ? o.MzZ : "div";
                return (0, i.jsxs)(e, {
                    onClick: d,
                    className: I.Lf,
                    children: [
                        (0, i.jsx)("img", {
                            alt: C.intl.string(C.t["2B/phM"]),
                            src: l,
                            className: r()(T.Gt, m.M.XSMALL),
                        }),
                        (0, i.jsx)(o.Text, { variant: "text-sm/semibold", color: "text-muted", children: n }),
                    ],
                });
            },
        }),
    });
}
function N(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: r,
            header: m,
            currentUserId: _,
            launchableAppId: h,
            isEmbeddedApplication: p,
            tryWithGdnAction: T,
            staticBannerSrc: N,
            onClickContent: S,
            iconSrc: b,
            onView: y,
            presenceActivity: j,
            analyticsLocations: R,
            showAuthButton: L,
            startAuthorization: M,
            accountLinkButtonRef: O,
            renderAccountLinkUpsell: P,
        } = e,
        D = (0, s.bG)([g.A], () => g.A.getMessages(r.id)),
        { actions: k, hasAccountLinkButton: U } = l.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (null != h
                    ? (e = [
                          {
                              label: C.intl.string(C.t["s+J8Dl"]),
                              trackingArea: u.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  d.A.launch({ applicationId: h, embedded: p });
                              },
                          },
                      ])
                    : null != T && ((e = [T]), (i = !1)),
                e.length > 0)
            )
                if (!(0, f.p)(t.id, D, n.id, j)) return { actions: [], hasAccountLinkButton: !1 };
                else
                    L &&
                        i &&
                        (e.push({
                            label: C.intl.string(C.t.lw71Nf),
                            trackingArea: u.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                M({ analyticsLocations: R });
                            },
                            icon: o.A5T,
                            iconButton: !0,
                            buttonRef: O,
                        }),
                        (l = !0));
            return { actions: e, hasAccountLinkButton: l };
        }, [p, h, T, D, j, n.id, t.id, L, M, R, O]),
        w = k.some((e) => e.trackingArea === u.kY.CLOUD_PLAY);
    (0, x.A)(w, R);
    let G = k.length > 0,
        B = l.useMemo(
            () =>
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    className: I.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, A.BE)(t, a, r, _, G),
                }),
            [t, a, r, _, G],
        );
    return 0 === k.length
        ? (0, i.jsx)(v, { message: t, applicationName: a, iconSrc: b, channel: r, currentUserId: _, viewAction: S })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.h, {
                      header: m,
                      title: a,
                      staticBannerSrc: N,
                      onClickBanner: S,
                      bannerAspectRatio: c.u.ACTIVITY,
                      iconSrc: b ?? void 0,
                      info: B,
                      actions: k,
                      primaryActionFirst: !0,
                      onClickContent: S,
                      trackingConfig: {
                          id: n.id,
                          linkType: E.J.RICH_PRESENCE_INVITE,
                          onView: y,
                          referrerId: t.author.id,
                          guildId: r.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  U ? P() : null,
              ],
          });
}
