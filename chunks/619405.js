n.d(t, { A: () => v });
var i = n(627968),
    l = n(456060),
    r = n(659051);
n(321073);
var a = n(64700),
    s = n(17928),
    o = n(834730),
    d = n(939249),
    c = n(141628),
    u = n(780907),
    m = n(572211),
    p = n(354287),
    A = n(140651),
    g = n(232835),
    I = n(652215),
    h = n(878831),
    C = n(768349),
    S = n(375708),
    E = n(378);
function f(e) {
    let { applicationName: t, iconSrc: n, viewAction: l } = e,
        { primaryColor: r, secondaryColor: a } = (0, A.A)(n),
        s = `linear-gradient(45deg, ${r}, ${a})`,
        c = (0, i.jsx)(o.E, { variant: "text-sm/semibold", color: "none", children: t }),
        u = null == l ? c : (0, i.jsx)(d.D, { onClick: l, className: E.Qi, children: c });
    return (0, i.jsxs)("div", {
        className: E.Xy,
        style: { background: s },
        children: [
            (0, i.jsx)(o.E, {
                variant: "text-xs/semibold",
                color: "none",
                className: E.xn,
                children: S.intl.string(S.t.pkq6Vq),
            }),
            (0, i.jsxs)("div", {
                className: E.fi,
                children: [
                    null != n ? (0, i.jsx)("img", { className: E.V$, src: n, alt: "" }) : null,
                    (0, i.jsxs)("div", {
                        className: E.Cr,
                        children: [
                            u,
                            (0, i.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "none",
                                className: E.Jl,
                                children: S.intl.string(S.t["Sq/E1I"]),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let {
            message: t,
            application: n,
            applicationName: d,
            channel: A,
            header: _,
            currentUserId: x,
            launchableAppId: T,
            isEmbeddedApplication: v,
            tryWithGdnAction: N,
            staticBannerSrc: y,
            onClickContent: k,
            iconSrc: b,
            onView: L,
            presenceActivity: R,
            analyticsLocations: P,
            showAuthButton: D,
            requireAccountLink: O,
            startAuthorization: U,
            accountLinkButtonRef: j,
            renderAccountLinkUpsell: G,
        } = e,
        M = (0, s.bG)([g.A], () => g.A.getMessages(A.id)),
        { actions: B, hasAccountLinkButton: w } = a.useMemo(() => {
            let e = [],
                i = !0,
                l = !1;
            if (
                (O && null != T
                    ? ((e = [
                          {
                              label: S.intl.string(S.t.lw71Nf),
                              trackingArea: p.kY.CONNECT_ACCOUNT,
                              onClick: () => {
                                  U({ analyticsLocations: P });
                              },
                          },
                      ]),
                      (i = !1))
                    : null != T
                      ? (e = [
                            {
                                label: S.intl.string(S.t["s+J8Dl"]),
                                trackingArea: p.kY.PLAY,
                                isDeadEnd: !0,
                                onClick: () => {
                                    u.Ay.launch({ applicationId: T, embedded: v });
                                },
                            },
                        ])
                      : null != N && ((e = [N]), (i = !1)),
                e.length > 0)
            ) {
                var a, s;
                if (
                    ((a = t.id),
                    (s = n.id),
                    M.hasAnyAfter(
                        a,
                        (e) =>
                            null != e.activity &&
                            e.application?.id === s &&
                            e.activity.type === I.xL.JOIN &&
                            !(0, r.A)(R, e, s),
                        25,
                    ))
                )
                    return { actions: [], hasAccountLinkButton: !1 };
                D &&
                    i &&
                    (e.push({
                        label: S.intl.string(S.t.lw71Nf),
                        trackingArea: p.kY.CONNECT_ACCOUNT,
                        onClick: () => {
                            U({ analyticsLocations: P });
                        },
                        icon: c.A,
                        iconButton: !0,
                        buttonRef: j,
                    }),
                    (l = !0));
            }
            return { actions: e, hasAccountLinkButton: l };
        }, [O, v, T, N, M, R, n.id, t.id, D, U, P, j]),
        V = B.some((e) => e.trackingArea === p.kY.CLOUD_PLAY);
    (0, h.A)(V, P);
    let F = B.length > 0,
        Y = a.useMemo(
            () =>
                (0, i.jsx)(o.E, {
                    variant: "text-xs/medium",
                    className: E.h_,
                    color: "none",
                    lineClamp: 3,
                    children: (0, l.BE)(t, d, A, x, F),
                }),
            [t, d, A, x, F],
        );
    return 0 === B.length
        ? (0, i.jsx)(f, { applicationName: d, iconSrc: b, viewAction: k })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.h, {
                      header: _,
                      title: d,
                      staticBannerSrc: y,
                      onClickBanner: k,
                      bannerAspectRatio: m.u.ACTIVITY,
                      iconSrc: b ?? void 0,
                      info: Y,
                      actions: B,
                      primaryActionFirst: !0,
                      onClickContent: k,
                      trackingConfig: {
                          id: n.id,
                          linkType: C.J.RICH_PRESENCE_INVITE,
                          onView: L,
                          referrerId: t.author.id,
                          guildId: A.guild_id,
                          channelId: t.channel_id,
                          messageId: t.id,
                          isDeadEnd: !0,
                      },
                  }),
                  w ? G() : null,
              ],
          });
}
var x = n(842157),
    T = n(50643);
function v(e) {
    let {
            analyticsLocations: t,
            application: n,
            channel: a,
            currentUserId: s,
            currentUserPresenceActivity: o,
            hideParty: d,
            message: c,
            onView: u,
            partyStatusElement: m,
            presenceActivity: p,
        } = e,
        {
            isEmbeddedApplication: A,
            iconSrc: g,
            applicationName: I,
            staticBannerSrc: h,
            launchableAppId: C,
            tryWithGdnAction: S,
            viewAction: E,
            accountLinkingEntryPointExperimentConfig: f,
            canStartAuthorization: v,
            hasAlreadyLinked: N,
            startAuthorizeWithToast: y,
            requireAccountLink: k,
            requireGameLaunch: b,
            accountLinkButtonRef: L,
            renderAccountLinkUpsell: R,
        } = (0, T.p)({
            analyticsLocations: t,
            application: n,
            channel: a,
            message: c,
            presenceActivity: p,
            location: "RichPresenceGameActivityInviteEmbed",
        }),
        P = !(0, r.A)(p, c, n.id),
        D = (0, l.n$)(I, c.activity?.type, P);
    return P
        ? (0, i.jsx)(_, {
              message: c,
              application: n,
              applicationName: I,
              channel: a,
              header: D,
              currentUserId: s,
              launchableAppId: C,
              isEmbeddedApplication: A,
              tryWithGdnAction: S,
              staticBannerSrc: h,
              onClickContent: E,
              iconSrc: g,
              onView: u,
              presenceActivity: p,
              analyticsLocations: t,
              showAuthButton: v && !N && f.enabled,
              requireAccountLink: k,
              startAuthorization: y,
              accountLinkButtonRef: L,
              renderAccountLinkUpsell: R,
          })
        : (0, i.jsx)(x.A, {
              message: c,
              application: n,
              applicationName: I,
              channel: a,
              header: D,
              currentUserId: s,
              launchableAppId: C,
              isEmbeddedApplication: A,
              tryWithGdnAction: S,
              staticBannerSrc: h,
              onClickContent: E,
              iconSrc: g,
              onView: u,
              presenceActivity: p,
              currentUserPresenceActivity: o,
              hideParty: d,
              partyStatusElement: m,
              analyticsLocations: t,
              showAuthButton: v && !N && f.enabled,
              requireAccountLink: k,
              requireGameLaunch: b,
              canPromptAuth: v && !N,
              startAuthorization: y,
              accountLinkButtonRef: L,
              renderAccountLinkUpsell: R,
          });
}
