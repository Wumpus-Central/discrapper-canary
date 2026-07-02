n.d(t, { SelectFriendsModalScreens: () => V, default: () => z });
var i,
    a = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    c = n(189213),
    o = n(17928),
    d = n(732771),
    u = n(821609),
    m = n(289873),
    A = n(803306),
    g = n(718213),
    N = n(793574),
    p = n(688810),
    f = n(994500),
    E = n(174459),
    x = n(975571),
    h = n(427262),
    C = n(326084),
    R = n(851746),
    _ = n(794783),
    I = n(972007),
    T = n(772707),
    b = n(844222),
    j = n(778712),
    v = n(97808),
    S = n(834730),
    P = n(534890),
    y = n(90517),
    M = n(308528),
    O = n(854627),
    L = n(830543),
    D = n(652215),
    U = n(375708),
    k = n(494025);
function G(e) {
    let { recipient: t, status: n, onClose: i } = e,
        { avatarSrc: s, eventHandlers: r } = (0, O.A)({ userId: t?.id, size: j._3.SIZE_56 }),
        c = h.Ay.getName(t),
        o = n === C.o.FAIL;
    return (0, a.jsxs)("div", {
        className: k.w4,
        children: [
            (0, a.jsx)(v.eu, { imageClassName: l()({ [k.jN]: o }), src: s, "aria-label": c, size: j._3.SIZE_32, ...r }),
            o
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(S.E, {
                              className: k.E0,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: c,
                          }),
                          (0, a.jsx)(S.E, {
                              variant: "text-md/medium",
                              className: k.nT,
                              color: "text-strong",
                              children: U.intl.format(U.t.RO3T4B, { userName: c }),
                          }),
                      ],
                  })
                : (0, a.jsx)(S.E, { variant: "text-md/medium", className: k.Pm, color: "text-strong", children: c }),
            (0, a.jsx)(u.$, {
                variant: "secondary",
                size: "sm",
                text: U.intl.string(U.t["g33r/P"]),
                icon: P.o,
                onClick: () => {
                    var e;
                    return (e = t.id), void ((0, L.default)(), M.A.openPrivateChannel({ recipientIds: e }), i());
                },
            }),
        ],
    });
}
function w(e) {
    let { transitionState: t, results: n, onClose: i, isReminderConfirmation: r } = e,
        l = (0, o.bG)([R.A], () => R.A.getReferralsRemaining());
    E.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let { reducedMotion: c } = s.useContext(b.C);
    return null === l
        ? (0, a.jsx)(m.y, {})
        : (0, a.jsx)(T.k, {
              graphic: c.enabled
                  ? {
                        src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                        type: "image",
                    }
                  : { rive: y.l, type: "rive" },
              gradientColor: "nitro-pink",
              title:
                  0 === n.filter((e) => e.status === C.o.SUCCESS).length
                      ? U.intl.string(U.t["7VBEue"])
                      : !0 === r
                        ? U.intl.string(U.t.GP5lbq)
                        : U.intl.string(U.t.tKCltd),
              subtitle:
                  !0 === r
                      ? U.intl.format(U.t["4gJJfD"], { helpdeskArticle: x.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) })
                      : U.intl.format(U.t.AwGSWl, { helpdeskArticle: x.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) }),
              onClose: i,
              transitionState: t,
              children: (0, a.jsx)("div", {
                  className: k.Hz,
                  children: n.map((e) =>
                      (0, a.jsx)(G, { recipient: e.recipient, status: e.status, onClose: i }, e.recipient.id),
                  ),
              }),
          });
}
var F = n(468049);
function H(e) {
    let { transitionState: t, onClose: n, onShare: i } = e,
        r = (0, o.bG)([R.A], () => R.A.getReferralsRemaining()),
        A = (0, o.bG)([R.A], () => R.A.getHasEligibleFriends()),
        [N, p] = s.useState(new Map()),
        [f, E] = s.useState(""),
        C = (0, g.A)(f, 400),
        {
            eligibleUsers: T,
            fetchUsers: b,
            hasError: j,
            isFetching: v,
            resendUsers: S,
        } = (0, I.i)({ searchQuery: C, selectedUsers: N }),
        [P, y] = s.useState(!1),
        M = T.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
    return null === r
        ? (0, a.jsx)(m.y, {})
        : j
          ? (0, a.jsx)(c.Modal, {
                transitionState: t,
                size: "sm",
                title: U.intl.string(U.t.lcuio4),
                subtitle: U.intl.string(U.t["x09+CD"]),
                onClose: n,
                actions: [],
            })
          : !1 === A
            ? (0, a.jsx)(c.Modal, {
                  transitionState: t,
                  size: "sm",
                  title: U.intl.string(U.t["2YigPp"]),
                  subtitle: U.intl.format(U.t.OOCbz8, { helpdeskArticle: x.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) }),
                  onClose: n,
                  actions: [],
              })
            : (0, a.jsx)(c.Modal, {
                  size: "md",
                  transitionState: t,
                  title: U.intl.string(U.t["2dVCLl"]),
                  subtitle: U.intl.string(U.t.DXgoi2),
                  onClose: n,
                  input: (0, a.jsx)(d.iS, {
                      selectionMode: "multiple",
                      value: Array.from(N.values()),
                      options: Array.from(M.values()),
                      formatOption: (e) => ({ id: e.id, value: e, label: h.Ay.getName(e) }),
                      onSelectionChange: (e) => {
                          let t = Array.isArray(e) ? e : [e],
                              n = new Map();
                          t.forEach((e) => {
                              null != e && n.set(e.id, e);
                          }),
                              p(n);
                      },
                      children: (0, a.jsx)("div", {
                          className: F.c,
                          children: (0, a.jsx)(d.a3, {
                              placeholder: 0 === N.size ? U.intl.string(U.t.Kd5RaI) : "",
                              onQueryChange: (e) => {
                                  E(e.target.value);
                              },
                          }),
                      }),
                  }),
                  actions: [],
                  actionBarInput: (function (e) {
                      let t,
                          { eligibleRecipients: s } = e,
                          r = C.length > 0 && 0 === s.size;
                      return (
                          (t =
                              !0 === r
                                  ? U.intl.string(U.t.wpSqAW)
                                  : N.size <= 1
                                    ? U.intl.string(U.t.ItpQxk)
                                    : U.intl.format(U.t.iW2stn, { nTrials: N.size })),
                          (0, a.jsx)("div", {
                              className: l()(F.qr, F.h0),
                              children: (0, a.jsx)(u.$, {
                                  variant: "primary",
                                  disabled: (0 === N.size && !r) || P,
                                  text: t,
                                  size: "md",
                                  fullWidth: !0,
                                  onClick: async () => {
                                      r ? n() : (y(!0), await i([...N.values()]), y(!1));
                                  },
                              }),
                          })
                      );
                  })({ eligibleRecipients: M }),
                  children: ((e) => {
                      let { eligibleRecipients: t } = e;
                      return (0, a.jsx)(_.A, {
                          users: Array.from(t.values()),
                          isUserSelected: (e) => N.has(e.id),
                          onSelectionChange: (e, t) => {
                              p((n) => {
                                  let i = new Map(n);
                                  return t ? i.set(e.id, e) : i.delete(e.id), i;
                              });
                          },
                          isFetching: v,
                          onFetchMore: b,
                          isUserDisabled: (e) =>
                              null !== r &&
                              0 !== r &&
                              [...N.values()].filter((e) => !S.has(e.id)).length >= r &&
                              !N.has(e.id) &&
                              !S.has(e.id),
                          searchQuery: C,
                          emptySearchContent: { header: U.intl.string(U.t["8+ywHD"]), body: U.intl.string(U.t.CgQmY2) },
                          className: F.p_,
                      });
                  })({ eligibleRecipients: M }),
              });
}
function B(e) {
    let t,
        { transitionState: n, onClose: i, onShare: r } = e,
        d = (0, o.bG)([R.A], () => R.A.getRecipientStatus()),
        [m, g] = s.useState(new Map()),
        [N, p] = s.useState(new Map()),
        [E, x] = s.useState(!1);
    return (
        s.useEffect(() => {
            !(async function () {
                let e = new Map();
                for (let [t, n] of d) {
                    if (f.A.isBlockedOrIgnored(t)) continue;
                    let i = await (0, A.wz)(t);
                    (i.referralStatus = n), e.set(i.id, i);
                }
                g(e);
            })();
        }, [d]),
        (0, a.jsx)(c.Modal, {
            size: "md",
            transitionState: n,
            title: U.intl.string(U.t.rKmy8I),
            subtitle: U.intl.string(U.t.VDlF6o),
            onClose: i,
            actions: [],
            actionBarInput:
                ((t = N.size <= 1 ? U.intl.string(U.t.ItpQxk) : U.intl.format(U.t.iW2stn, { nTrials: N.size })),
                (0, a.jsx)("div", {
                    className: l()(F.qr, F.h0),
                    children: (0, a.jsx)(u.$, {
                        variant: "primary",
                        disabled: 0 === N.size || E,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            x(!0), await r([...N.values()]), x(!1);
                        },
                    }),
                })),
            children: (0, a.jsx)(_.A, {
                users: Array.from(m.values()),
                isUserSelected: (e) => N.has(e.id),
                isUserDisabled: (e) => e.referralStatus === C.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    p((n) => {
                        let i = new Map(n);
                        return t ? i.set(e.id, e) : i.delete(e.id), i;
                    });
                },
                className: F.p_,
            }),
        })
    );
}
var V =
    (((i = {})[(i.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (i[(i.CONFIRMATION = 2)] = "CONFIRMATION"),
    (i[(i.REMINDER = 3)] = "REMINDER"),
    i);
let z = function (e) {
    let { transitionState: t, onClose: n, startingScreen: i = 1 } = e,
        r = (0, o.bG)([R.A], () => R.A.getReferralsRemaining()),
        [l, c] = s.useState(i),
        [d, u] = s.useState([]),
        { analyticsLocations: A } = (0, p.Ay)([N.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    async function g(e) {
        E.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: A });
        let t = await (0, C.xm)(Object.values(e).map((e) => e.id));
        u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
    }
    if (null === r) return (0, a.jsx)(m.y, {});
    switch (l) {
        case 2:
            return (0, a.jsx)(w, { transitionState: t, isReminderConfirmation: 3 === i, results: d, onClose: n });
        case 1:
            return (0, a.jsx)(H, { transitionState: t, onClose: n, onShare: g });
        case 3:
            return (0, a.jsx)(B, { transitionState: t, onClose: n, onShare: g });
        default:
            return;
    }
};
