n.d(t, { default: () => H }), n(539854), n(642613), n(388685);
var i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    r = n(442837),
    d = n(952265),
    o = n(755721),
    c = n(481060),
    u = n(493683),
    h = n(700582),
    m = n(100527),
    x = n(906732),
    g = n(933557),
    _ = n(471445),
    f = n(734307),
    b = n(359110),
    v = n(752048),
    j = n(210887),
    p = n(131704),
    C = n(699516),
    Z = n(944486),
    S = n(914010),
    w = n(594174),
    y = n(186523),
    N = n(553826),
    I = n(823379),
    L = n(407316),
    P = n(937784),
    k = n(388032),
    R = n(413797),
    D = n(138715),
    T = n(979770);
function z(e) {
    let { channel: t, ChannelIcon: n, selected: l, onClick: a } = e,
        s = (0, g.ZP)(t);
    return (0, i.jsxs)(c.P3F, {
        className: R.channelRow,
        onClick: () => a(t.id),
        children: [
            l ? (0, i.jsx)(N.Z, { className: R.radioIcon }) : (0, i.jsx)(y.Z, { className: R.radioIcon }),
            (0, i.jsx)(n, {
                className: R.icon,
                size: "xs",
                color: "currentColor",
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "interactive-active",
                children: s,
            }),
        ],
    });
}
function A(e) {
    let { guildId: t, selectedChannelId: n, onSelectChannelId: a } = e,
        d = (0, r.e7)([Z.Z], () => Z.Z.getChannelId()),
        { guildChannels: o } = (0, r.cj)([f.Z], () => f.Z.getGuildWithoutChangingGuildActionRows(t)),
        u = l.useMemo(() => {
            let e = [];
            return (
                o.forEachChannel((t) => {
                    !1 !== (0, L.W)(t.id) && ((0, p.r8)(t.type) || (0, p.bw)(t.type)) && e.push(t);
                }),
                e.sort((e, t) => (e.id === d ? -1 : +(t.id === d)))
            );
        }, [o, d]);
    return 0 === u.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { className: s()(R.divider, R.bottomDivider) }),
                  (0, i.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "interactive-normal",
                      className: R.contentPadding,
                      children: k.intl.string(k.t.SOtDeX),
                  }),
                  (0, i.jsx)(c.aVo, {
                      sections: [u.length],
                      sectionHeight: 0,
                      renderRow: (e) => {
                          let { section: t, row: l } = e;
                          if (t > 0) return null;
                          let s = u[l],
                              r = (0, _.KS)(s);
                          return null == r
                              ? null
                              : (0, i.jsx)(
                                    z,
                                    {
                                        channel: s,
                                        ChannelIcon: r,
                                        selected: n === s.id,
                                        onClick: a,
                                    },
                                    s.id,
                                );
                      },
                      rowHeight: (e, t) => (e > 0 ? 0 : 56 * (null != u[t])),
                      renderSection: () => null,
                      className: s()(R.channelList, R.contentPadding),
                      fade: !0,
                  }),
              ],
          });
}
function E(e) {
    let { friends: t, searchQuery: n, disabled: a, onShareClip: d } = e,
        u = l.useMemo(
            () => (0 === n.length ? t : t.filter((e) => e.username.toLowerCase().includes(n.toLowerCase()))),
            [t, n],
        ),
        m = (0, r.e7)([j.Z], () => j.Z.theme);
    return 0 === u.length
        ? (0, i.jsxs)(c.ubH, {
              theme: m,
              className: R.emptyStateContainer,
              children: [
                  (0, i.jsx)(c.oxh, {
                      width: 415,
                      height: 75,
                      lightSrc: T,
                      darkSrc: D,
                  }),
                  (0, i.jsx)(c.OZU, { note: k.intl.string(k.t["+Zg0lZ"]) }),
              ],
          })
        : (0, i.jsx)(c.aVo, {
              sections: [u.length],
              sectionHeight: 0,
              renderRow: (e) => {
                  let { section: t, row: n } = e;
                  if (t > 0) return null;
                  let l = u[n],
                      s = u[n].username;
                  return (0, i.jsxs)(
                      "div",
                      {
                          className: R.userRow,
                          children: [
                              (0, i.jsx)(h.Z, { user: l }),
                              (0, i.jsx)(c.Text, {
                                  className: R.username,
                                  variant: "text-md/normal",
                                  children: s,
                              }),
                              (0, i.jsx)(o.zx, {
                                  disabled: a,
                                  onClick: () => d(l.id),
                                  className: R.__invalid_friendShareButton,
                                  look: o.iL.OUTLINED,
                                  size: o.Ph.SMALL,
                                  color: o.Tt.BRAND,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: "text-sm/medium",
                                      children: k.intl.string(k.t.RDE0SU),
                                  }),
                              }),
                          ],
                      },
                      l.id,
                  );
              },
              rowHeight: (e, t) => (e > 0 ? 0 : 52 * (null != u[t])),
              renderSection: () => null,
              className: s()(R.friendsList, R.contentPadding),
              fade: !0,
          });
}
function H(e) {
    let { clip: t, editMetadata: n, transitionState: a, onClose: o } = e,
        [h, g] = l.useState(""),
        [_, f] = l.useState(!1),
        [j, p] = l.useState(null),
        Z = (0, r.Wu)([C.Z], () => C.Z.getFriendIDs()),
        y = (0, r.Wu)(
            [v.Z, w.default],
            () =>
                Z.map((e) => w.default.getUser(e))
                    .filter(I.lm)
                    .sort((e, t) => {
                        var n, i, l, a;
                        return (
                            (null != (l = null == (n = v.Z.getUserAffinity(t.id)) ? void 0 : n.communicationProbability)
                                ? l
                                : 0) -
                            (null != (a = null == (i = v.Z.getUserAffinity(e.id)) ? void 0 : i.communicationProbability)
                                ? a
                                : 0)
                        );
                    }),
            [Z],
        ),
        N = (0, r.e7)([S.Z], () => S.Z.getGuildId()),
        { analyticsLocations: L } = (0, x.ZP)(m.Z.CLIPS_SHARE_MODAL);
    async function D(e) {
        let i = null != e ? e : j;
        if (null != i) {
            f(!0);
            try {
                await (0, P.e)(t, {
                    channelId: i,
                    editMetadata: n,
                    analyticsLocations: L,
                }),
                    null == e && (0, b.Kh)(i),
                    d.pT();
            } catch (e) {
            } finally {
                f(!1);
            }
        }
    }
    async function T(e) {
        let t = await u.Z.openPrivateChannel({ recipientIds: e });
        await D(t);
    }
    return (0, i.jsxs)(c.Y0X, {
        size: c.CgR.SMALL,
        transitionState: a,
        parentComponent: "ClipsShareModal",
        children: [
            (0, i.jsx)(c.X6q, {
                className: s()(R.title, R.contentPadding),
                variant: "heading-lg/semibold",
                color: "interactive-active",
                children: k.intl.string(k.t["6EcIlJ"]),
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: s()(R.subtitle, R.contentPadding),
                children: k.intl.string(k.t.Ey7mOT),
            }),
            (0, i.jsx)(c.E1j, {
                className: R.searchBar,
                query: h,
                onChange: g,
                onClear: function () {
                    g("");
                },
                placeholder: k.intl.string(k.t.CmSHY2),
            }),
            (0, i.jsx)("div", { className: s()(R.divider, R.topDivider) }),
            (0, i.jsx)(E, {
                searchQuery: h,
                friends: y,
                onShareClip: T,
                disabled: _,
            }),
            null != N &&
                (0, i.jsx)(A, {
                    guildId: N,
                    selectedChannelId: j,
                    onSelectChannelId: p,
                }),
            (0, i.jsx)(c.mzw, {
                children: (0, i.jsxs)(c.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(c.zxk, {
                            variant: "primary",
                            text: k.intl.string(k.t.I8lglZ),
                            disabled: null == j,
                            loading: _,
                            onClick: () => D(),
                        }),
                        (0, i.jsx)(c.zxk, {
                            variant: "secondary",
                            text: k.intl.string(k.t["13/7kZ"]),
                            loading: _,
                            onClick: o,
                        }),
                    ],
                }),
            }),
        ],
    });
}
