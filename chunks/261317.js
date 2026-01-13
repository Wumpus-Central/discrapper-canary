n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    l = n(580685),
    a = n(442837),
    s = n(481060),
    o = n(100527),
    c = n(314852),
    d = n(65361),
    u = n(731722),
    g = n(441536),
    f = n(494620),
    m = n(434404),
    b = n(999382),
    p = n(465682),
    h = n(910494),
    x = n(196902),
    j = n(423087),
    v = n(582066),
    O = n(978088),
    y = n(981631),
    C = n(131085),
    N = n(551199),
    E = n(388032),
    I = n(331867);
let S = function () {
    var e, t, n, S;
    (0, E.useSyncMessages)(N.messagesLoader);
    let _ = (0, a.e7)([b.Z], () => b.Z.getGuild()),
        T = (0, a.e7)([b.Z], () => b.Z.getGuildProfile()),
        { fetchGuildProfile: P, fetchStatus: w } = (0, d.u)(null == _ ? void 0 : _.id);
    if (
        (i.useEffect(() => {
            w === c.a.NOT_FETCHED && P();
        }, [P, w]),
        w !== c.a.FETCHED)
    )
        return (0, r.jsx)("div", {
            className: I.spinnerContainer,
            children: (0, r.jsx)(s.$jN, {}),
        });
    if (null == _ || null == T) return null;
    let Z = l.Y.VISIBLE.has(T.visibility),
        R = (0, u.up)(_),
        D = !R || (null == T ? void 0 : T.tag) == null,
        A = null != (e = T.badge) ? e : C.QV["0"],
        L = null != (t = T.badgeColorPrimary) ? t : C.Ek["0"].primary,
        k = null != (n = T.badgeColorSecondary) ? n : C.Ek["0"].secondary,
        G = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(x.Z, {
                    className: I.section,
                    guildId: _.id,
                    isDisabled: D,
                    tag: null != (S = T.tag) ? S : "",
                    badge: A,
                    primaryColor: L,
                    secondaryColor: k,
                }),
                (0, r.jsx)(h.Z, {
                    className: I.section,
                    selectedBadge: A,
                    guildId: _.id,
                }),
                (0, r.jsx)(j.Z, {
                    className: I.section,
                    guildId: _.id,
                    badge: A,
                    primaryColor: L,
                    secondaryColor: k,
                }),
            ],
        });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                className: I.title,
                variant: "heading-lg/semibold",
                children: E.intl.string(N.default.mf2OwH),
            }),
            (0, r.jsxs)("div", {
                className: I.container,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.leftContent,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.descriptionContainer,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: E.intl.format(N.default["655Uny"], {
                                            onClickServerProfile: () => {
                                                m.Z.setSection(y.pNK.PROFILE);
                                            },
                                            onClickApplyToJoin: () => {
                                                m.Z.setSection(y.pNK.ACCESS);
                                            },
                                        }),
                                    }),
                                    !Z &&
                                        (0, r.jsx)(f.Z, {
                                            className: I.privateProfileWarning,
                                            children: (0, r.jsx)(s.Text, {
                                                variant: "text-xs/medium",
                                                children: E.intl.format(N.default.CRbkIz, {
                                                    onClickEditSetting: () =>
                                                        m.Z.setSection(y.pNK.PROFILE, y.KsC.PROFILE_VISIBILITY),
                                                }),
                                            }),
                                        }),
                                ],
                            }),
                            R
                                ? (0, r.jsxs)("div", {
                                      className: I.enableSwitchContainer,
                                      children: [
                                          (0, r.jsx)("label", {
                                              htmlFor: "enable-server-tag",
                                              children: (0, r.jsx)(s.Text, {
                                                  variant: "text-md/semibold",
                                                  color: "text-strong",
                                                  children: E.intl.string(N.default["1zams8"]),
                                              }),
                                          }),
                                          (0, r.jsx)(s.rsf, {
                                              id: "enable-server-tag",
                                              checked: !D,
                                              onChange: () => {
                                                  if (D) {
                                                      var e;
                                                      m.Z.updateGuildProfile(_.id, {
                                                          tag: null != (e = T.tag) ? e : "",
                                                          badge: A,
                                                          badgeColorPrimary: L,
                                                          badgeColorSecondary: k,
                                                      });
                                                  } else m.Z.updateGuildProfile(_.id, { tag: null });
                                              },
                                          }),
                                      ],
                                  })
                                : (0, r.jsx)("div", {
                                      className: I.boostingLinkContainer,
                                      children: (0, r.jsx)(p.v, {
                                          onClick: () => {
                                              (0, g.Z)(_.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), m.Z.close();
                                          },
                                      }),
                                  }),
                            D
                                ? (0, r.jsx)(s.nuw, {
                                      children: (0, r.jsx)("div", {
                                          className: I.disabledForm,
                                          children: G,
                                      }),
                                  })
                                : G,
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: I.sidebarContainer,
                        children: [
                            (0, r.jsx)(O.Z, {
                                guildId: _.id,
                                tag: T.tag,
                                badge: A,
                                primaryColor: L,
                                secondaryColor: k,
                            }),
                            !D && (0, r.jsx)(v.Z, { guildId: _.id }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
