n.d(t, { Z: () => Z });
var r = n(951288),
    i = n(647438),
    l = n(580685),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(100527),
    d = n(266454),
    u = n(314852),
    g = n(65361),
    m = n(731722),
    p = n(892803),
    f = n(441536),
    h = n(494620),
    b = n(434404),
    x = n(999382),
    j = n(465682),
    v = n(585961),
    _ = n(910494),
    C = n(196902),
    O = n(423087),
    y = n(582066),
    E = n(978088),
    N = n(981631),
    I = n(921944),
    S = n(131085),
    T = n(659854),
    P = n(388032),
    w = n(764009);
let Z = function () {
    var e, t, n, Z;
    (0, P.useSyncMessages)(T.messagesLoader);
    let { enabled: R } = p.Z.useConfig({ location: "GuildSettingsTags" }),
        D = (0, a.e7)([x.Z], () => x.Z.getGuild()),
        A = (0, a.e7)([x.Z], () => x.Z.getGuildProfile()),
        { fetchGuildProfile: L, fetchStatus: k } = (0, g.u)(null == D ? void 0 : D.id);
    if (
        (i.useEffect(() => {
            (0, d.Q3)(s.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: I.L.AUTO });
        }, []),
        i.useEffect(() => {
            k === u.a.NOT_FETCHED && L();
        }, [L, k]),
        k !== u.a.FETCHED)
    )
        return (0, r.jsx)("div", {
            className: w.spinnerContainer,
            children: (0, r.jsx)(o.$jN, {}),
        });
    if (null == D || null == A) return null;
    let G = l.Y.VISIBLE.has(A.visibility),
        M = (0, m.up)(D),
        U = !M || (null == A ? void 0 : A.tag) == null,
        B = null != (e = A.badge) ? e : S.QV["0"],
        F = null != (t = A.badgeColorPrimary) ? t : S.Ek["0"].primary,
        H = null != (n = A.badgeColorSecondary) ? n : S.Ek["0"].secondary,
        W = () => {
            (0, f.Z)(D.id, c.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), b.Z.close();
        },
        V = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.Z, {
                    className: w.section,
                    guildId: D.id,
                    isDisabled: U,
                    tag: null != (Z = A.tag) ? Z : "",
                    badge: B,
                    primaryColor: F,
                    secondaryColor: H,
                }),
                (0, r.jsx)(_.Z, {
                    className: w.section,
                    selectedBadge: B,
                    guildId: D.id,
                }),
                (0, r.jsx)(O.Z, {
                    className: w.section,
                    guildId: D.id,
                    badge: B,
                    primaryColor: F,
                    secondaryColor: H,
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                className: w.title,
                variant: "heading-lg/semibold",
                children: P.intl.string(T.default.mf2OwM),
            }),
            (0, r.jsxs)("div", {
                className: w.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.leftContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: w.descriptionContainer,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-secondary",
                                        children: P.intl.format(T.default["655Un5"], {
                                            onClickServerProfile: () => {
                                                b.Z.setSection(N.pNK.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                b.Z.setSection(N.pNK.ACCESS);
                                            },
                                        }),
                                    }),
                                    !G &&
                                        (0, r.jsx)(h.Z, {
                                            className: w.privateProfileWarning,
                                            children: (0, r.jsx)(o.Text, {
                                                variant: "text-xs/medium",
                                                children: P.intl.format(T.default.CRbkIy, {
                                                    onClickEditSetting: () =>
                                                        b.Z.setSection(N.pNK.PROFILE, N.KsC.PROFILE_VISIBILITY),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            M
                                ? (0, r.jsxs)("div", {
                                      className: w.enableSwitchContainer,
                                      children: [
                                          (0, r.jsx)("label", {
                                              htmlFor: "enable-server-tag",
                                              children: (0, r.jsx)(o.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "header-primary",
                                                  children: P.intl.string(T.default["1zams7"]),
                                              }),
                                          }),
                                          (0, r.jsx)(o.rsf, {
                                              id: "enable-server-tag",
                                              checked: !U,
                                              onChange: () => {
                                                  if (U) {
                                                      var e;
                                                      b.Z.updateGuildProfile(D.id, {
                                                          tag: null != (e = A.tag) ? e : "",
                                                          badge: B,
                                                          badgeColorPrimary: F,
                                                          badgeColorSecondary: H,
                                                      });
                                                  } else b.Z.updateGuildProfile(D.id, { tag: null });
                                              },
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)("div", {
                                      className: w.boostingLinkContainer,
                                      children: R ? (0, r.jsx)(j.v, { onClick: W }) : (0, r.jsx)(v.P, { onClick: W }),
                                  }),
                            U
                                ? (0, r.jsx)(o.nuw, {
                                      children: (0, r.jsx)("div", {
                                          className: w.disabledForm,
                                          children: V,
                                      }),
                                  })
                                : V,
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: w.sidebarContainer,
                        children: [
                            (0, r.jsx)(E.Z, {
                                guildId: D.id,
                                tag: A.tag,
                                badge: B,
                                primaryColor: F,
                                secondaryColor: H,
                            }),
                            !U && (0, r.jsx)(y.Z, { guildId: D.id }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
