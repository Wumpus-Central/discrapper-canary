n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(580685),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(100527),
    d = n(266454),
    u = n(314852),
    g = n(65361),
    m = n(731722),
    p = n(441536),
    f = n(494620),
    h = n(434404),
    b = n(999382),
    x = n(465682),
    j = n(910494),
    _ = n(196902),
    v = n(423087),
    O = n(582066),
    C = n(978088),
    y = n(981631),
    N = n(921944),
    E = n(131085),
    I = n(541673),
    S = n(388032),
    T = n(764009);
let P = function () {
    var e, t, n, P;
    (0, S.useSyncMessages)(I.messagesLoader);
    let w = (0, a.e7)([b.Z], () => b.Z.getGuild()),
        Z = (0, a.e7)([b.Z], () => b.Z.getGuildProfile()),
        { fetchGuildProfile: R, fetchStatus: D } = (0, g.u)(null == w ? void 0 : w.id);
    if (
        (i.useEffect(() => {
            (0, d.Q3)(s.z.GUILD_TAG_SERVER_SETTINGS_NEW_BADGE, { dismissAction: N.L.AUTO });
        }, []),
        i.useEffect(() => {
            D === u.a.NOT_FETCHED && R();
        }, [R, D]),
        D !== u.a.FETCHED)
    )
        return (0, r.jsx)("div", {
            className: T.spinnerContainer,
            children: (0, r.jsx)(o.$jN, {}),
        });
    if (null == w || null == Z) return null;
    let A = l.Y.VISIBLE.has(Z.visibility),
        L = (0, m.up)(w),
        k = !L || (null == Z ? void 0 : Z.tag) == null,
        G = null != (e = Z.badge) ? e : E.QV["0"],
        M = null != (t = Z.badgeColorPrimary) ? t : E.Ek["0"].primary,
        U = null != (n = Z.badgeColorSecondary) ? n : E.Ek["0"].secondary,
        B = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.Z, {
                    className: T.section,
                    guildId: w.id,
                    isDisabled: k,
                    tag: null != (P = Z.tag) ? P : "",
                    badge: G,
                    primaryColor: M,
                    secondaryColor: U,
                }),
                (0, r.jsx)(j.Z, {
                    className: T.section,
                    selectedBadge: G,
                    guildId: w.id,
                }),
                (0, r.jsx)(v.Z, {
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
            (0, r.jsx)(o.Heading, {
                className: T.title,
                variant: "heading-lg/semibold",
                children: S.intl.string(I.default.mf2OwH),
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
                                        children: S.intl.format(I.default["655Uny"], {
                                            onClickServerProfile: () => {
                                                h.Z.setSection(y.pNK.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                h.Z.setSection(y.pNK.ACCESS);
                                            },
                                        }),
                                    }),
                                    !A &&
                                        (0, r.jsx)(f.Z, {
                                            className: T.privateProfileWarning,
                                            children: (0, r.jsx)(o.Text, {
                                                variant: "text-xs/medium",
                                                children: S.intl.format(I.default.CRbkIz, {
                                                    onClickEditSetting: () =>
                                                        h.Z.setSection(y.pNK.PROFILE, y.KsC.PROFILE_VISIBILITY),
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
                                                  children: S.intl.string(I.default["1zams8"]),
                                              }),
                                          }),
                                          (0, r.jsx)(o.rsf, {
                                              id: "enable-server-tag",
                                              checked: !k,
                                              onChange: () => {
                                                  if (k) {
                                                      var e;
                                                      h.Z.updateGuildProfile(w.id, {
                                                          tag: null != (e = Z.tag) ? e : "",
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
                                      children: (0, r.jsx)(x.v, {
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
                            (0, r.jsx)(C.Z, {
                                guildId: w.id,
                                tag: Z.tag,
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
