n.d(t, { A: () => I }), n(321073), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(544420),
    u = n(572211),
    d = n(354287),
    f = n(769015),
    p = n(763754),
    _ = n(447215),
    h = n(888675),
    m = n(320501),
    g = n(456060),
    E = n(472590),
    b = n(878831),
    y = n(768349),
    O = n(985018),
    A = n(609653),
    v = n(103467);
function S(e) {
    let { message: t, applicationName: n, iconSrc: i, channel: a, currentUserId: o, viewAction: c } = e,
        u = (0, p.Ay)(t),
        d = (0, _.P)({
            user: t.author,
            channelId: a.id,
            guildId: a.guild_id,
            messageId: t.id,
        })(u);
    return (0, r.jsx)(h.A, {
        compact: !1,
        children: O.intl.format(o === t.author.id ? O.t.anvg2q : O.t.AxVbYF, {
            username: u.nick,
            usernameHook: d,
            applicationHook: () => {
                let e = null != c ? l.MzZ : "div";
                return (0, r.jsxs)(e, {
                    onClick: c,
                    className: A.Lf,
                    children: [
                        (0, r.jsx)("img", {
                            alt: O.intl.string(O.t["2B/phM"]),
                            src: i,
                            className: s()(v.Gt, f.M.XSMALL),
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
function I(e) {
    let {
            message: t,
            application: n,
            applicationName: a,
            channel: s,
            header: f,
            currentUserId: p,
            launchableAppId: _,
            isEmbeddedApplication: h,
            tryWithGdnAction: v,
            staticBannerSrc: I,
            onClickContent: T,
            iconSrc: C,
            onView: N,
            presenceActivity: R,
            analyticsLocations: w,
            showAuthButton: P,
            startAuthorization: D,
            accountLinkButtonRef: x,
            renderAccountLinkUpsell: L,
        } = e,
        j = (0, o.bG)([m.A], () => m.A.getMessages(s.id)),
        { actions: M, hasAccountLinkButton: k } = i.useMemo(() => {
            let e = [],
                r = !0,
                i = !1;
            if (
                (null != _
                    ? (e = [
                          {
                              label: O.intl.string(O.t["s+J8Dl"]),
                              trackingArea: d.kY.PLAY,
                              isDeadEnd: !0,
                              onClick: () => {
                                  c.A.launch({
                                      applicationId: _,
                                      embedded: h,
                                  });
                              },
                          },
                      ])
                    : null != v && ((e = [v]), (r = !1)),
                e.length > 0)
            )
                if (!(0, E.p)(t.id, j, n.id, R))
                    return {
                        actions: [],
                        hasAccountLinkButton: !1,
                    };
                else
                    P &&
                        r &&
                        (e.push({
                            label: O.intl.string(O.t.lw71Nf),
                            trackingArea: d.kY.CONNECT_ACCOUNT,
                            onClick: () => {
                                D({ analyticsLocations: w });
                            },
                            icon: l.A5T,
                            iconButton: !0,
                            buttonRef: x,
                        }),
                        (i = !0));
            return {
                actions: e,
                hasAccountLinkButton: i,
            };
        }, [h, _, v, j, R, n.id, t.id, P, D, w, x]),
        U = M.some((e) => e.trackingArea === d.kY.CLOUD_PLAY);
    (0, b.A)(U, w);
    let G = M.length > 0,
        V = i.useMemo(
            () =>
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    className: A.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, g.BE)(t, a, s, p, G),
                }),
            [t, a, s, p, G],
        );
    return 0 === M.length
        ? (0, r.jsx)(S, {
              message: t,
              applicationName: a,
              iconSrc: C,
              channel: s,
              currentUserId: p,
              viewAction: T,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.h, {
                      header: f,
                      title: a,
                      staticBannerSrc: I,
                      onClickBanner: T,
                      bannerAspectRatio: u.u.ACTIVITY,
                      iconSrc: null != C ? C : void 0,
                      info: V,
                      actions: M,
                      primaryActionFirst: !0,
                      onClickContent: T,
                      trackingConfig: {
                          id: n.id,
                          linkType: y.J.RICH_PRESENCE_INVITE,
                          onView: N,
                          referrerId: t.author.id,
                          guildId: s.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  k ? L() : null,
              ],
          });
}
