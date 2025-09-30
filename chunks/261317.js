n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    s = n(442837),
    a = n(704215),
    o = n(755721),
    c = n(481060),
    d = n(100527),
    u = n(266454),
    m = n(314852),
    g = n(65361),
    p = n(731722),
    f = n(441536),
    h = n(494620),
    x = n(434404),
    b = n(999382),
    j = n(585961),
    v = n(910494),
    _ = n(196902),
    O = n(423087),
    y = n(582066),
    C = n(978088),
    N = n(981631),
    E = n(921944),
    I = n(131085),
    S = n(659854),
    T = n(388032),
    P = n(764009);
let w = function () {
    var e, t, n, w;
    (0, T.useSyncMessages)(S.messagesLoader);
    let R = (0, s.e7)([b.Z], () => b.Z.getGuild()),
        D = (0, s.e7)([b.Z], () => b.Z.getGuildProfile()),
        { fetchGuildProfile: Z, fetchStatus: A } = (0, g.u)(null == R ? void 0 : R.id);
    if (
        (i.useEffect(() => {
            (0, u.Q3)(a.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: E.L.AUTO });
        }, []),
        i.useEffect(() => {
            A === m.a.NOT_FETCHED && Z();
        }, [Z, A]),
        A !== m.a.FETCHED)
    )
        return (0, r.jsx)("div", {
            className: P.spinnerContainer,
            children: (0, r.jsx)(c.$jN, {}),
        });
    if (null == R || null == D) return null;
    let L = l.Y.VISIBLE.has(D.visibility),
        k = (0, p.up)(R),
        G = !k || (null == D ? void 0 : D.tag) == null,
        M = null != (e = D.badge) ? e : I.QV["0"],
        U = null != (t = D.badgeColorPrimary) ? t : I.Ek["0"].primary,
        B = null != (n = D.badgeColorSecondary) ? n : I.Ek["0"].secondary,
        F = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.Z, {
                    className: P.section,
                    guildId: R.id,
                    isDisabled: G,
                    tag: null != (w = D.tag) ? w : "",
                    badge: M,
                    primaryColor: U,
                    secondaryColor: B,
                }),
                (0, r.jsx)(v.Z, {
                    className: P.section,
                    selectedBadge: M,
                    guildId: R.id,
                }),
                (0, r.jsx)(O.Z, {
                    className: P.section,
                    guildId: R.id,
                    badge: M,
                    primaryColor: U,
                    secondaryColor: B,
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(c.X6q, {
                className: P.title,
                variant: "heading-lg/semibold",
                children: T.intl.string(S.default.mf2OwM),
            }),
            (0, r.jsxs)("div", {
                className: P.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: P.leftContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: P.descriptionContainer,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: T.intl.format(S.default["655Un5"], {
                                            onClickServerProfile: () => {
                                                x.Z.setSection(N.pNK.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                x.Z.setSection(N.pNK.ACCESS);
                                            },
                                        }),
                                    }),
                                    !L &&
                                        (0, r.jsx)(h.Z, {
                                            className: P.privateProfileWarning,
                                            children: (0, r.jsx)(c.Text, {
                                                variant: "text-xs/medium",
                                                children: T.intl.format(S.default.CRbkIy, {
                                                    onClickEditSetting: () =>
                                                        x.Z.setSection(N.pNK.PROFILE, N.KsC.PROFILE_VISIBILITY),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            k
                                ? (0, r.jsxs)("div", {
                                      className: P.enableSwitchContainer,
                                      children: [
                                          (0, r.jsx)("label", {
                                              htmlFor: "enable-server-tag",
                                              children: (0, r.jsx)(c.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "header-primary",
                                                  children: T.intl.string(S.default["1zams7"]),
                                              }),
                                          }),
                                          (0, r.jsx)(o.T2, {
                                              id: "enable-server-tag",
                                              checked: !G,
                                              onChange: () => {
                                                  if (G) {
                                                      var e;
                                                      x.Z.updateGuildProfile(R.id, {
                                                          tag: null != (e = D.tag) ? e : "",
                                                          badge: M,
                                                          badgeColorPrimary: U,
                                                          badgeColorSecondary: B,
                                                      });
                                                  } else x.Z.updateGuildProfile(R.id, { tag: null });
                                              },
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)("div", {
                                      className: P.boostingLinkContainer,
                                      children: (0, r.jsx)(j.P, {
                                          onClick: () => {
                                              (0, f.Z)(R.id, d.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), x.Z.close();
                                          },
                                      }),
                                  }),
                            G
                                ? (0, r.jsx)(c.nuw, {
                                      children: (0, r.jsx)("div", {
                                          className: P.disabledForm,
                                          children: F,
                                      }),
                                  })
                                : F,
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: P.sidebarContainer,
                        children: [
                            (0, r.jsx)(C.Z, {
                                guildId: R.id,
                                tag: D.tag,
                                badge: M,
                                primaryColor: U,
                                secondaryColor: B,
                            }),
                            !G && (0, r.jsx)(y.Z, { guildId: R.id }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
