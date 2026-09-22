i.d(t, { SelectFriendsModalScreens: () => H, default: () => Q });
var s,
    n = i(477900),
    a = i(582128),
    r = i(503698),
    l = i.n(r),
    c = i(189213),
    o = i(17928),
    u = i(453318),
    d = i(821609),
    f = i(289873),
    A = i(803306),
    m = i(718213),
    g = i(793574),
    h = i(688810),
    R = i(994500),
    p = i(174459),
    S = i(975571),
    E = i(427262),
    x = i(326084),
    C = i(851746),
    v = i(794783),
    M = i(972007),
    y = i(772707),
    b = i(844222),
    j = i(778712),
    w = i(97808),
    I = i(834730),
    N = i(534890),
    _ = i(90517),
    z = i(308528),
    k = i(854627),
    D = i(830543),
    F = i(652215),
    G = i(375708),
    L = i(37576);
function O(e) {
    let { recipient: t, status: i, onClose: s } = e,
        { avatarSrc: a, eventHandlers: r } = (0, k.A)({ userId: t?.id, size: j._3.SIZE_56 }),
        c = E.Ay.getName(t),
        o = i === x.o.FAIL;
    return (0, n.jsxs)("div", {
        className: L.w4,
        children: [
            (0, n.jsx)(w.eu, { imageClassName: l()({ [L.jN]: o }), src: a, "aria-label": c, size: j._3.SIZE_32, ...r }),
            o
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(I.E, {
                              className: L.E0,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: c,
                          }),
                          (0, n.jsx)(I.E, {
                              variant: "text-md/medium",
                              className: L.nT,
                              color: "text-strong",
                              children: G.intl.format(G.t.RO3T4B, { userName: c }),
                          }),
                      ],
                  })
                : (0, n.jsx)(I.E, { variant: "text-md/medium", className: L.Pm, color: "text-strong", children: c }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: G.intl.string(G.t["g33r/P"]),
                icon: N.ChatIcon,
                onClick: () => {
                    var e;
                    return ((e = t.id), void ((0, D.default)(), z.A.openPrivateChannel({ recipientIds: e }), s()));
                },
            }),
        ],
    });
}
function P(e) {
    let { transitionState: t, results: i, onClose: s, isReminderConfirmation: r } = e,
        l = (0, o.bG)([C.A], () => C.A.getReferralsRemaining());
    p.default.track(F.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let { reducedMotion: c } = a.useContext(b.C);
    return null === l
        ? (0, n.jsx)(f.y, {})
        : (0, n.jsx)(y.k, {
              graphic: c.enabled
                  ? {
                        src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                        type: "image",
                    }
                  : { rive: _.l, type: "rive" },
              gradientColor: "nitro-pink",
              title:
                  0 === i.filter((e) => e.status === x.o.SUCCESS).length
                      ? G.intl.string(G.t["7VBEue"])
                      : !0 === r
                        ? G.intl.string(G.t.GP5lbq)
                        : G.intl.string(G.t.tKCltd),
              subtitle:
                  !0 === r
                      ? G.intl.format(G.t["4gJJfD"], { helpdeskArticle: S.A.getArticleURL(F.MVz.REFERRAL_PROGRAM) })
                      : G.intl.format(G.t.AwGSWl, { helpdeskArticle: S.A.getArticleURL(F.MVz.REFERRAL_PROGRAM) }),
              onClose: s,
              transitionState: t,
              children: (0, n.jsx)("div", {
                  className: L.Hz,
                  children: i.map((e) =>
                      (0, n.jsx)(O, { recipient: e.recipient, status: e.status, onClose: s }, e.recipient.id),
                  ),
              }),
          });
}
var T = i(989174);
function U(e) {
    let { transitionState: t, onClose: i, onShare: s } = e,
        r = (0, o.bG)([C.A], () => C.A.getReferralsRemaining()),
        A = (0, o.bG)([C.A], () => C.A.getHasEligibleFriends()),
        [g, h] = a.useState(new Map()),
        [R, p] = a.useState(""),
        x = (0, m.A)(R, 400),
        {
            eligibleUsers: y,
            fetchUsers: b,
            hasError: j,
            isFetching: w,
            resendUsers: I,
        } = (0, M.i)({ searchQuery: x, selectedUsers: g }),
        [N, _] = a.useState(!1),
        z = y.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
    return null === r
        ? (0, n.jsx)(f.y, {})
        : j
          ? (0, n.jsx)(c.Modal, {
                transitionState: t,
                size: "sm",
                title: G.intl.string(G.t.lcuio4),
                subtitle: G.intl.string(G.t["x09+CD"]),
                onClose: i,
                actions: [],
            })
          : !1 === A
            ? (0, n.jsx)(c.Modal, {
                  transitionState: t,
                  size: "sm",
                  title: G.intl.string(G.t["2YigPp"]),
                  subtitle: G.intl.format(G.t.OOCbz8, { helpdeskArticle: S.A.getArticleURL(F.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  actions: [],
              })
            : (0, n.jsx)(c.Modal, {
                  size: "md",
                  transitionState: t,
                  title: G.intl.string(G.t["2dVCLl"]),
                  subtitle: G.intl.string(G.t.DXgoi2),
                  onClose: i,
                  input: (0, n.jsx)(u.iS, {
                      selectionMode: "multiple",
                      value: Array.from(g.values()),
                      options: Array.from(z.values()),
                      formatOption: (e) => ({ id: e.id, value: e, label: E.Ay.getName(e) }),
                      onSelectionChange: (e) => {
                          let t = Array.isArray(e) ? e : [e],
                              i = new Map();
                          (t.forEach((e) => {
                              null != e && i.set(e.id, e);
                          }),
                              h(i));
                      },
                      children: (0, n.jsx)("div", {
                          className: T.c,
                          children: (0, n.jsx)(u.a3, {
                              placeholder: 0 === g.size ? G.intl.string(G.t.Kd5RaI) : "",
                              onQueryChange: (e) => {
                                  p(e.target.value);
                              },
                          }),
                      }),
                  }),
                  actions: [],
                  actionBarInput: (function (e) {
                      let t,
                          { eligibleRecipients: a } = e,
                          r = x.length > 0 && 0 === a.size;
                      return (
                          (t =
                              !0 === r
                                  ? G.intl.string(G.t.wpSqAW)
                                  : g.size <= 1
                                    ? G.intl.string(G.t.ItpQxk)
                                    : G.intl.format(G.t.iW2stn, { nTrials: g.size })),
                          (0, n.jsx)("div", {
                              className: l()(T.qr, T.h0),
                              children: (0, n.jsx)(d.$, {
                                  variant: "primary",
                                  disabled: (0 === g.size && !r) || N,
                                  text: t,
                                  size: "md",
                                  fullWidth: !0,
                                  onClick: async () => {
                                      r ? i() : (_(!0), await s([...g.values()]), _(!1));
                                  },
                              }),
                          })
                      );
                  })({ eligibleRecipients: z }),
                  children: (function (e) {
                      let { eligibleRecipients: t } = e;
                      return (0, n.jsx)(v.A, {
                          users: Array.from(t.values()),
                          isUserSelected: (e) => g.has(e.id),
                          onSelectionChange: (e, t) => {
                              h((i) => {
                                  let s = new Map(i);
                                  return (t ? s.set(e.id, e) : s.delete(e.id), s);
                              });
                          },
                          isFetching: w,
                          onFetchMore: b,
                          isUserDisabled: (e) =>
                              null !== r &&
                              0 !== r &&
                              [...g.values()].filter((e) => !I.has(e.id)).length >= r &&
                              !g.has(e.id) &&
                              !I.has(e.id),
                          searchQuery: x,
                          emptySearchContent: { header: G.intl.string(G.t["8+ywHD"]), body: G.intl.string(G.t.CgQmY2) },
                          className: T.p_,
                      });
                  })({ eligibleRecipients: z }),
              });
}
function K(e) {
    let t,
        { transitionState: i, onClose: s, onShare: r } = e,
        u = (0, o.bG)([C.A], () => C.A.getRecipientStatus()),
        [f, m] = a.useState(new Map()),
        [g, h] = a.useState(new Map()),
        [p, S] = a.useState(!1);
    return (
        a.useEffect(() => {
            !(async function () {
                let e = new Map();
                for (let [t, i] of u) {
                    if (R.A.isBlockedOrIgnored(t)) continue;
                    let s = await (0, A.wz)(t);
                    ((s.referralStatus = i), e.set(s.id, s));
                }
                m(e);
            })();
        }, [u]),
        (0, n.jsx)(c.Modal, {
            size: "md",
            transitionState: i,
            title: G.intl.string(G.t.rKmy8I),
            subtitle: G.intl.string(G.t.VDlF6o),
            onClose: s,
            actions: [],
            actionBarInput:
                ((t = g.size <= 1 ? G.intl.string(G.t.ItpQxk) : G.intl.format(G.t.iW2stn, { nTrials: g.size })),
                (0, n.jsx)("div", {
                    className: l()(T.qr, T.h0),
                    children: (0, n.jsx)(d.$, {
                        variant: "primary",
                        disabled: 0 === g.size || p,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            (S(!0), await r([...g.values()]), S(!1));
                        },
                    }),
                })),
            children: (0, n.jsx)(v.A, {
                users: Array.from(f.values()),
                isUserSelected: (e) => g.has(e.id),
                isUserDisabled: (e) => e.referralStatus === x.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    h((i) => {
                        let s = new Map(i);
                        return (t ? s.set(e.id, e) : s.delete(e.id), s);
                    });
                },
                className: T.p_,
            }),
        })
    );
}
var H =
    (((s = {})[(s.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (s[(s.CONFIRMATION = 2)] = "CONFIRMATION"),
    (s[(s.REMINDER = 3)] = "REMINDER"),
    s);
let Q = function (e) {
    let { transitionState: t, onClose: i, startingScreen: s = 1 } = e,
        r = (0, o.bG)([C.A], () => C.A.getReferralsRemaining()),
        [l, c] = a.useState(s),
        [u, d] = a.useState([]),
        { analyticsLocations: A } = (0, h.Ay)([g.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    async function m(e) {
        p.default.track(F.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: A });
        let t = await (0, x.xm)(Object.values(e).map((e) => e.id));
        (d(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2));
    }
    if (null === r) return (0, n.jsx)(f.y, {});
    switch (l) {
        case 2:
            return (0, n.jsx)(P, { transitionState: t, isReminderConfirmation: 3 === s, results: u, onClose: i });
        case 1:
            return (0, n.jsx)(U, { transitionState: t, onClose: i, onShare: m });
        case 3:
            return (0, n.jsx)(K, { transitionState: t, onClose: i, onShare: m });
        default:
            return;
    }
};
