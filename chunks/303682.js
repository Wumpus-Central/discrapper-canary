i.d(t, { SelectFriendsModalScreens: () => N, default: () => _ });
var s,
    a = i(477900),
    n = i(582128),
    r = i(503698),
    l = i.n(r),
    u = i(17928),
    o = i(189213),
    c = i(453318),
    d = i(821609),
    f = i(289873),
    h = i(803306),
    p = i(718213),
    A = i(793574),
    g = i(688810),
    R = i(994500),
    S = i(174459),
    m = i(975571),
    E = i(427262),
    w = i(326084),
    y = i(851746),
    C = i(794783),
    M = i(972007),
    x = i(809813),
    b = i(652215),
    v = i(375708),
    I = i(989174);
function j(e) {
    let { transitionState: t, onClose: i, onShare: s } = e,
        r = (0, u.bG)([y.A], () => y.A.getReferralsRemaining()),
        h = (0, u.bG)([y.A], () => y.A.getHasEligibleFriends()),
        [A, g] = n.useState(new Map()),
        [R, S] = n.useState(""),
        w = (0, p.A)(R, 400),
        {
            eligibleUsers: x,
            fetchUsers: j,
            hasError: z,
            isFetching: N,
            resendUsers: _,
        } = (0, M.i)({ searchQuery: w, selectedUsers: A }),
        [D, F] = n.useState(!1),
        O = x.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
    return null === r
        ? (0, a.jsx)(f.y, {})
        : z
          ? (0, a.jsx)(o.a, {
                transitionState: t,
                size: "sm",
                title: v.intl.string(v.t.lcuio4),
                subtitle: v.intl.string(v.t["x09+CD"]),
                onClose: i,
                actions: [],
            })
          : !1 === h
            ? (0, a.jsx)(o.a, {
                  transitionState: t,
                  size: "sm",
                  title: v.intl.string(v.t["2YigPp"]),
                  subtitle: v.intl.format(v.t.OOCbz8, { helpdeskArticle: m.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  actions: [],
              })
            : (0, a.jsx)(o.a, {
                  size: "md",
                  transitionState: t,
                  title: v.intl.string(v.t["2dVCLl"]),
                  subtitle: v.intl.string(v.t.DXgoi2),
                  onClose: i,
                  input: (0, a.jsx)(c.iS, {
                      selectionMode: "multiple",
                      value: Array.from(A.values()),
                      options: Array.from(O.values()),
                      formatOption: (e) => ({ id: e.id, value: e, label: E.Ay.getName(e) }),
                      onSelectionChange: (e) => {
                          let t = Array.isArray(e) ? e : [e],
                              i = new Map();
                          (t.forEach((e) => {
                              null != e && i.set(e.id, e);
                          }),
                              g(i));
                      },
                      children: (0, a.jsx)("div", {
                          className: I.c,
                          children: (0, a.jsx)(c.a3, {
                              placeholder: 0 === A.size ? v.intl.string(v.t.Kd5RaI) : "",
                              onQueryChange: (e) => {
                                  S(e.target.value);
                              },
                          }),
                      }),
                  }),
                  actions: [],
                  actionBarInput: (function (e) {
                      let t,
                          { eligibleRecipients: n } = e,
                          r = w.length > 0 && 0 === n.size;
                      return (
                          (t =
                              !0 === r
                                  ? v.intl.string(v.t.wpSqAW)
                                  : A.size <= 1
                                    ? v.intl.string(v.t.ItpQxk)
                                    : v.intl.format(v.t.iW2stn, { nTrials: A.size })),
                          (0, a.jsx)("div", {
                              className: l()(I.qr, I.h0),
                              children: (0, a.jsx)(d.$, {
                                  variant: "primary",
                                  disabled: (0 === A.size && !r) || D,
                                  text: t,
                                  size: "md",
                                  fullWidth: !0,
                                  onClick: async () => {
                                      r ? i() : (F(!0), await s([...A.values()]), F(!1));
                                  },
                              }),
                          })
                      );
                  })({ eligibleRecipients: O }),
                  children: (function (e) {
                      let { eligibleRecipients: t } = e;
                      return (0, a.jsx)(C.A, {
                          users: Array.from(t.values()),
                          isUserSelected: (e) => A.has(e.id),
                          onSelectionChange: (e, t) => {
                              g((i) => {
                                  let s = new Map(i);
                                  return (t ? s.set(e.id, e) : s.delete(e.id), s);
                              });
                          },
                          isFetching: N,
                          onFetchMore: j,
                          isUserDisabled: (e) =>
                              null !== r &&
                              0 !== r &&
                              [...A.values()].filter((e) => !_.has(e.id)).length >= r &&
                              !A.has(e.id) &&
                              !_.has(e.id),
                          searchQuery: w,
                          emptySearchContent: { header: v.intl.string(v.t["8+ywHD"]), body: v.intl.string(v.t.CgQmY2) },
                          className: I.p_,
                      });
                  })({ eligibleRecipients: O }),
              });
}
function z(e) {
    let t,
        { transitionState: i, onClose: s, onShare: r } = e,
        c = (0, u.bG)([y.A], () => y.A.getRecipientStatus()),
        [f, p] = n.useState(new Map()),
        [A, g] = n.useState(new Map()),
        [S, m] = n.useState(!1);
    return (
        n.useEffect(() => {
            !(async function () {
                let e = new Map();
                for (let [t, i] of c) {
                    if (R.A.isBlockedOrIgnored(t)) continue;
                    let s = await (0, h.wz)(t);
                    ((s.referralStatus = i), e.set(s.id, s));
                }
                p(e);
            })();
        }, [c]),
        (0, a.jsx)(o.a, {
            size: "md",
            transitionState: i,
            title: v.intl.string(v.t.rKmy8I),
            subtitle: v.intl.string(v.t.VDlF6o),
            onClose: s,
            actions: [],
            actionBarInput:
                ((t = A.size <= 1 ? v.intl.string(v.t.ItpQxk) : v.intl.format(v.t.iW2stn, { nTrials: A.size })),
                (0, a.jsx)("div", {
                    className: l()(I.qr, I.h0),
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        disabled: 0 === A.size || S,
                        text: t,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            (m(!0), await r([...A.values()]), m(!1));
                        },
                    }),
                })),
            children: (0, a.jsx)(C.A, {
                users: Array.from(f.values()),
                isUserSelected: (e) => A.has(e.id),
                isUserDisabled: (e) => e.referralStatus === w.aK.REDEEMED,
                onSelectionChange: (e, t) => {
                    g((i) => {
                        let s = new Map(i);
                        return (t ? s.set(e.id, e) : s.delete(e.id), s);
                    });
                },
                className: I.p_,
            }),
        })
    );
}
var N =
    (((s = {})[(s.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (s[(s.CONFIRMATION = 2)] = "CONFIRMATION"),
    (s[(s.REMINDER = 3)] = "REMINDER"),
    s);
let _ = function (e) {
    let { transitionState: t, onClose: i, startingScreen: s = 1 } = e,
        r = (0, u.bG)([y.A], () => y.A.getReferralsRemaining()),
        [l, o] = n.useState(s),
        [c, d] = n.useState([]),
        { analyticsLocations: h } = (0, g.Ay)([A.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    async function p(e) {
        S.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: h });
        let t = await (0, w.xm)(Object.values(e).map((e) => e.id));
        (d(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), o(2));
    }
    if (null === r) return (0, a.jsx)(f.y, {});
    switch (l) {
        case 2:
            return (0, a.jsx)(x.h, { transitionState: t, isReminderConfirmation: 3 === s, results: c, onClose: i });
        case 1:
            return (0, a.jsx)(j, { transitionState: t, onClose: i, onShare: p });
        case 3:
            return (0, a.jsx)(z, { transitionState: t, onClose: i, onShare: p });
        default:
            return;
    }
};
