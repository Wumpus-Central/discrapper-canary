n.d(t, { default: () => E }), n(539854), n(642613), n(388685);
var i = n(951288),
    l = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
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
    v = n(359110),
    b = n(752048),
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
    R = n(388032),
    k = n(413797),
    D = n(138715),
    T = n(979770);
function A(e) {
    let { channel: t, ChannelIcon: n, selected: l, onClick: a } = e,
        r = (0, g.ZP)(t);
    return (0, i.jsxs)(c.P3F, {
        className: k.channelRow,
        onClick: () => a(t.id),
        children: [
            l ? (0, i.jsx)(N.Z, { className: k.radioIcon }) : (0, i.jsx)(y.Z, { className: k.radioIcon }),
            (0, i.jsx)(n, {
                className: k.icon,
                size: "xs",
                color: "currentColor",
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "interactive-active",
                children: r,
            }),
        ],
    });
}
function B(e) {
    let { guildId: t, selectedChannelId: n, onSelectChannelId: a } = e,
        d = (0, s.e7)([Z.Z], () => Z.Z.getChannelId()),
        { guildChannels: o } = (0, s.cj)([f.Z], () => f.Z.getGuildWithoutChangingGuildActionRows(t)),
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
                  (0, i.jsx)("div", { className: r()(k.divider, k.bottomDivider) }),
                  (0, i.jsx)(c.Text, {
                      variant: "eyebrow",
                      color: "interactive-normal",
                      className: k.contentPadding,
                      children: R.intl.string(R.t.SOtDeX),
                  }),
                  (0, i.jsx)(c.aVo, {
                      sections: [u.length],
                      sectionHeight: 0,
                      renderRow: (e) => {
                          let { section: t, row: l } = e;
                          if (t > 0) return null;
                          let r = u[l],
                              s = (0, _.KS)(r);
                          return null == s
                              ? null
                              : (0, i.jsx)(
                                    A,
                                    {
                                        channel: r,
                                        ChannelIcon: s,
                                        selected: n === r.id,
                                        onClick: a,
                                    },
                                    r.id,
                                );
                      },
                      rowHeight: (e, t) => (e > 0 ? 0 : 56 * (null != u[t])),
                      renderSection: () => null,
                      className: r()(k.channelList, k.contentPadding),
                      fade: !0,
                  }),
              ],
          });
}
function H(e) {
    let { friends: t, searchQuery: n, disabled: a, onShareClip: d } = e,
        u = l.useMemo(
            () => (0 === n.length ? t : t.filter((e) => e.username.toLowerCase().includes(n.toLowerCase()))),
            [t, n],
        ),
        m = (0, s.e7)([j.Z], () => j.Z.theme);
    return 0 === u.length
        ? (0, i.jsxs)(c.ubH, {
              theme: m,
              className: k.emptyStateContainer,
              children: [
                  (0, i.jsx)(c.oxh, {
                      width: 415,
                      height: 75,
                      lightSrc: T,
                      darkSrc: D,
                  }),
                  (0, i.jsx)(c.OZU, { note: R.intl.string(R.t["+Zg0lZ"]) }),
              ],
          })
        : (0, i.jsx)(c.aVo, {
              sections: [u.length],
              sectionHeight: 0,
              renderRow: (e) => {
                  let { section: t, row: n } = e;
                  if (t > 0) return null;
                  let l = u[n],
                      r = u[n].username;
                  return (0, i.jsxs)(
                      "div",
                      {
                          className: k.userRow,
                          children: [
                              (0, i.jsx)(h.Z, { user: l }),
                              (0, i.jsx)(c.Text, {
                                  className: k.username,
                                  variant: "text-md/normal",
                                  children: r,
                              }),
                              (0, i.jsx)(o.zx, {
                                  disabled: a,
                                  onClick: () => d(l.id),
                                  className: k.__invalid_friendShareButton,
                                  look: o.iL.OUTLINED,
                                  size: o.Ph.SMALL,
                                  color: o.Tt.BRAND,
                                  children: (0, i.jsx)(c.Text, {
                                      variant: "text-sm/medium",
                                      children: R.intl.string(R.t.RDE0SU),
                                  }),
                              }),
                          ],
                      },
                      l.id,
                  );
              },
              rowHeight: (e, t) => (e > 0 ? 0 : 52 * (null != u[t])),
              renderSection: () => null,
              className: r()(k.friendsList, k.contentPadding),
              fade: !0,
          });
}
function E(e) {
    let { clip: t, editMetadata: n, transitionState: a, onClose: o } = e,
        [h, g] = l.useState(""),
        [_, f] = l.useState(!1),
        [j, p] = l.useState(null),
        Z = (0, s.Wu)([C.Z], () => C.Z.getFriendIDs()),
        y = (0, s.Wu)(
            [b.Z, w.default],
            () =>
                Z.map((e) => w.default.getUser(e))
                    .filter(I.lm)
                    .sort((e, t) => {
                        var n, i, l, a;
                        return (
                            (null != (l = null == (n = b.Z.getUserAffinity(t.id)) ? void 0 : n.communicationProbability)
                                ? l
                                : 0) -
                            (null != (a = null == (i = b.Z.getUserAffinity(e.id)) ? void 0 : i.communicationProbability)
                                ? a
                                : 0)
                        );
                    }),
            [Z],
        ),
        N = (0, s.e7)([S.Z], () => S.Z.getGuildId()),
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
                    null == e && (0, v.Kh)(i),
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
            (0, i.jsx)(c.Heading, {
                className: r()(k.title, k.contentPadding),
                variant: "heading-lg/semibold",
                color: "interactive-active",
                children: R.intl.string(R.t["6EcIlJ"]),
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: r()(k.subtitle, k.contentPadding),
                children: R.intl.string(R.t.Ey7mOT),
            }),
            (0, i.jsx)("div", {
                className: k.searchBar,
                children: (0, i.jsx)(c.E1j, {
                    query: h,
                    onChange: g,
                    onClear: function () {
                        g("");
                    },
                    placeholder: R.intl.string(R.t.CmSHY2),
                }),
            }),
            (0, i.jsx)("div", { className: r()(k.divider, k.topDivider) }),
            (0, i.jsx)(H, {
                searchQuery: h,
                friends: y,
                onShareClip: T,
                disabled: _,
            }),
            null != N &&
                (0, i.jsx)(B, {
                    guildId: N,
                    selectedChannelId: j,
                    onSelectChannelId: p,
                }),
            (0, i.jsx)(c.mzw, {
                children: (0, i.jsxs)(c.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(c.Button, {
                            variant: "primary",
                            text: R.intl.string(R.t.I8lglZ),
                            disabled: null == j,
                            loading: _,
                            onClick: () => D(),
                        }),
                        (0, i.jsx)(c.Button, {
                            variant: "secondary",
                            text: R.intl.string(R.t["13/7kZ"]),
                            loading: _,
                            onClick: o,
                        }),
                    ],
                }),
            }),
        ],
    });
}
