n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    s = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(100527),
    d = n(266454),
    u = n(314852),
    m = n(65361),
    g = n(731722),
    p = n(441536),
    f = n(494620),
    h = n(434404),
    b = n(999382),
    x = n(585961),
    j = n(910494),
    v = n(196902),
    _ = n(423087),
    O = n(582066),
    y = n(978088),
    C = n(981631),
    N = n(921944),
    E = n(131085),
    I = n(755032),
    S = n(388032),
    T = n(565744);
let P = function () {
    var e, t, n, P;
    (0, S.useSyncMessages)(I.messagesLoader);
    let w = (0, s.e7)([b.Z], () => b.Z.getGuild()),
        R = (0, s.e7)([b.Z], () => b.Z.getGuildProfile()),
        { fetchGuildProfile: Z, fetchStatus: D } = (0, m.u)(null == w ? void 0 : w.id);
    if (
        (i.useEffect(() => {
            (0, d.Q3)(a.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: N.L.AUTO });
        }, []),
        i.useEffect(() => {
            D === u.a.NOT_FETCHED && Z();
        }, [Z, D]),
        D !== u.a.FETCHED)
    )
        return (0, r.jsx)("div", {
            className: T.spinnerContainer,
            children: (0, r.jsx)(o.$jN, {}),
        });
    if (null == w || null == R) return null;
    let A = l.Y.VISIBLE.has(R.visibility),
        L = (0, g.up)(w),
        k = !L || (null == R ? void 0 : R.tag) == null,
        G = null != (e = R.badge) ? e : E.QV["0"],
        M = null != (t = R.badgeColorPrimary) ? t : E.Ek["0"].primary,
        U = null != (n = R.badgeColorSecondary) ? n : E.Ek["0"].secondary,
        B = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(v.Z, {
                    className: T.section,
                    guildId: w.id,
                    isDisabled: k,
                    tag: null != (P = R.tag) ? P : "",
                    badge: G,
                    primaryColor: M,
                    secondaryColor: U,
                }),
                (0, r.jsx)(j.Z, {
                    className: T.section,
                    selectedBadge: G,
                    guildId: w.id,
                }),
                (0, r.jsx)(_.Z, {
                    className: T.section,
                    guildId: w.id,
                    badge: G,
                    primaryColor: M,
                    secondaryColor: U,
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.X6q, {
                className: T.title,
                variant: "heading-lg/semibold",
                children: S.intl.string(I.default.mf2OwM),
            }),
            (0, r.jsxs)("div", {
                className: T.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.leftContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.descriptionContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: S.intl.format(I.default["655Un5"], {
                                            onClickServerProfile: () => {
                                                h.Z.setSection(C.pNK.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                h.Z.setSection(C.pNK.ACCESS);
                                            },
                                        }),
                                    }),
                                    !A &&
                                        (0, r.jsx)(f.Z, {
                                            className: T.privateProfileWarning,
                                            children: (0, r.jsx)(o.Text, {
                                                variant: "text-xs/medium",
                                                children: S.intl.format(I.default.CRbkIy, {
                                                    onClickEditSetting: () =>
                                                        h.Z.setSection(C.pNK.PROFILE, C.KsC.PROFILE_VISIBILITY),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            L
                                ? (0, r.jsxs)("div", {
                                      className: T.enableSwitchContainer,
                                      children: [
                                          (0, r.jsx)("label", {
                                              htmlFor: "enable-server-tag",
                                              children: (0, r.jsx)(o.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "header-primary",
                                                  children: S.intl.string(I.default["1zams7"]),
                                              }),
                                          }),
                                          (0, r.jsx)(o.rsf, {
                                              id: "enable-server-tag",
                                              checked: !k,
                                              onChange: () => {
                                                  if (k) {
                                                      var e;
                                                      h.Z.updateGuildProfile(w.id, {
                                                          tag: null != (e = R.tag) ? e : "",
                                                          badge: G,
                                                          badgeColorPrimary: M,
                                                          badgeColorSecondary: U,
                                                      });
                                                  } else h.Z.updateGuildProfile(w.id, { tag: null });
                                              },
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)("div", {
                                      className: T.boostingLinkContainer,
                                      children: (0, r.jsx)(x.P, {
                                          onClick: () => {
                                              (0, p.Z)(w.id, c.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), h.Z.close();
                                          },
                                      }),
                                  }),
                            k
                                ? (0, r.jsx)(o.nuw, {
                                      children: (0, r.jsx)("div", {
                                          className: T.disabledForm,
                                          children: B,
                                      }),
                                  })
                                : B,
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: T.sidebarContainer,
                        children: [
                            (0, r.jsx)(y.Z, {
                                guildId: w.id,
                                tag: R.tag,
                                badge: G,
                                primaryColor: M,
                                secondaryColor: U,
                            }),
                            !k && (0, r.jsx)(O.Z, { guildId: w.id }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
