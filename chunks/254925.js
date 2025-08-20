n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(100527),
    d = n(266454),
    u = n(314852),
    m = n(65361),
    g = n(731722),
    p = n(441536),
    h = n(494620),
    f = n(434404),
    b = n(999382),
    x = n(70086),
    j = n(835887),
    v = n(388661),
    _ = n(500230),
    O = n(58909),
    y = n(742409),
    C = n(981631),
    N = n(921944),
    E = n(131085),
    I = n(899926),
    S = n(388032),
    T = n(616397);
let P = function () {
    var e, t, n, P;
    (0, S.useSyncMessages)(I.messagesLoader);
    let w = (0, a.e7)([b.Z], () => b.Z.getGuild()),
        R = (0, a.e7)([b.Z], () => b.Z.getGuildProfile()),
        { fetchGuildProfile: Z, fetchStatus: D } = (0, m.u)(null == w ? void 0 : w.id);
    if (
        (i.useEffect(() => {
            (0, d.Q3)(s.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: N.L.AUTO });
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
        M = null != (e = R.badge) ? e : E.QV["0"],
        G = null != (t = R.badgeColorPrimary) ? t : E.Ek["0"].primary,
        U = null != (n = R.badgeColorSecondary) ? n : E.Ek["0"].secondary,
        B = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(v.Z, {
                    className: T.section,
                    guildId: w.id,
                    isDisabled: k,
                    tag: null != (P = R.tag) ? P : "",
                    badge: M,
                    primaryColor: G,
                    secondaryColor: U,
                }),
                (0, r.jsx)(j.Z, {
                    className: T.section,
                    selectedBadge: M,
                    guildId: w.id,
                }),
                (0, r.jsx)(_.Z, {
                    className: T.section,
                    guildId: w.id,
                    badge: M,
                    primaryColor: G,
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
                                                f.Z.setSection(C.pNK.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                f.Z.setSection(C.pNK.ACCESS);
                                            },
                                        }),
                                    }),
                                    !A &&
                                        (0, r.jsx)(h.Z, {
                                            className: T.privateProfileWarning,
                                            children: (0, r.jsx)(o.Text, {
                                                variant: "text-xs/medium",
                                                children: S.intl.format(I.default.CRbkIy, {
                                                    onClickEditSetting: () =>
                                                        f.Z.setSection(C.pNK.PROFILE, C.KsC.PROFILE_VISIBILITY),
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
                                                      f.Z.updateGuildProfile(w.id, {
                                                          tag: null != (e = R.tag) ? e : "",
                                                          badge: M,
                                                          badgeColorPrimary: G,
                                                          badgeColorSecondary: U,
                                                      });
                                                  } else f.Z.updateGuildProfile(w.id, { tag: null });
                                              },
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)("div", {
                                      className: T.boostingLinkContainer,
                                      children: (0, r.jsx)(x.P, {
                                          onClick: () => {
                                              (0, p.Z)(w.id, c.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), f.Z.close();
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
                                badge: M,
                                primaryColor: G,
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
