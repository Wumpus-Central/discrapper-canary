i.d(e, { SelectFriendsModalScreens: () => K, default: () => Q });
var s,
    n = i(627968),
    a = i(64700),
    r = i(503698),
    l = i.n(r),
    o = i(189213),
    c = i(17928),
    d = i(732771),
    u = i(821609),
    m = i(289873),
    A = i(803306),
    g = i(718213),
    R = i(793574),
    p = i(688810),
    h = i(994500),
    f = i(174459),
    E = i(975571),
    S = i(427262),
    x = i(326084),
    C = i(851746),
    M = i(794783),
    j = i(972007),
    v = i(772707),
    b = i(844222),
    y = i(778712),
    _ = i(97808),
    I = i(834730),
    N = i(534890),
    z = i(90517),
    w = i(308528),
    k = i(854627),
    F = i(830543),
    L = i(652215),
    O = i(375708),
    D = i(494025);
function G(t) {
    let { recipient: e, status: i, onClose: s } = t,
        { avatarSrc: a, eventHandlers: r } = (0, k.A)({ userId: e?.id, size: y._3.SIZE_56 }),
        o = S.Ay.getName(e),
        c = i === x.o.FAIL;
    return (0, n.jsxs)("div", {
        className: D.w4,
        children: [
            (0, n.jsx)(_.eu, { imageClassName: l()({ [D.jN]: c }), src: a, "aria-label": o, size: y._3.SIZE_32, ...r }),
            c
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(I.E, {
                              className: D.E0,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: o,
                          }),
                          (0, n.jsx)(I.E, {
                              variant: "text-md/medium",
                              className: D.nT,
                              color: "text-strong",
                              children: O.intl.format(O.t.RO3T4B, { userName: o }),
                          }),
                      ],
                  })
                : (0, n.jsx)(I.E, { variant: "text-md/medium", className: D.Pm, color: "text-strong", children: o }),
            (0, n.jsx)(u.$, {
                variant: "secondary",
                size: "sm",
                text: O.intl.string(O.t["g33r/P"]),
                icon: N.o,
                onClick: () => {
                    var t;
                    return (t = e.id), void ((0, F.default)(), w.A.openPrivateChannel({ recipientIds: t }), s());
                },
            }),
        ],
    });
}
function P(t) {
    let { transitionState: e, results: i, onClose: s, isReminderConfirmation: r } = t,
        l = (0, c.bG)([C.A], () => C.A.getReferralsRemaining());
    f.default.track(L.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let { reducedMotion: o } = a.useContext(b.C);
    return null === l
        ? (0, n.jsx)(m.y, {})
        : (0, n.jsx)(v.k, {
              graphic: o.enabled
                  ? {
                        src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                        type: "image",
                    }
                  : { rive: z.l, type: "rive" },
              gradientColor: "nitro-pink",
              title:
                  0 === i.filter((t) => t.status === x.o.SUCCESS).length
                      ? O.intl.string(O.t["7VBEue"])
                      : !0 === r
                        ? O.intl.string(O.t.GP5lbq)
                        : O.intl.string(O.t.tKCltd),
              subtitle:
                  !0 === r
                      ? O.intl.format(O.t["4gJJfD"], { helpdeskArticle: E.A.getArticleURL(L.MVz.REFERRAL_PROGRAM) })
                      : O.intl.format(O.t.AwGSWl, { helpdeskArticle: E.A.getArticleURL(L.MVz.REFERRAL_PROGRAM) }),
              onClose: s,
              transitionState: e,
              children: (0, n.jsx)("div", {
                  className: D.Hz,
                  children: i.map((t) =>
                      (0, n.jsx)(G, { recipient: t.recipient, status: t.status, onClose: s }, t.recipient.id),
                  ),
              }),
          });
}
var T = i(468049);
function U(t) {
    let { transitionState: e, onClose: i, onShare: s } = t,
        r = (0, c.bG)([C.A], () => C.A.getReferralsRemaining()),
        A = (0, c.bG)([C.A], () => C.A.getHasEligibleFriends()),
        [R, p] = a.useState(new Map()),
        [h, f] = a.useState(""),
        x = (0, g.A)(h, 400),
        {
            eligibleUsers: v,
            fetchUsers: b,
            hasError: y,
            isFetching: _,
            resendUsers: I,
        } = (0, j.i)({ searchQuery: x, selectedUsers: R }),
        [N, z] = a.useState(!1),
        w = v.reduce((t, e) => (t.has(e.id) || t.set(e.id, e), t), new Map());
    return null === r
        ? (0, n.jsx)(m.y, {})
        : y
          ? (0, n.jsx)(o.Modal, {
                transitionState: e,
                size: "sm",
                title: O.intl.string(O.t.lcuio4),
                subtitle: O.intl.string(O.t["x09+CD"]),
                onClose: i,
                actions: [],
            })
          : !1 === A
            ? (0, n.jsx)(o.Modal, {
                  transitionState: e,
                  size: "sm",
                  title: O.intl.string(O.t["2YigPp"]),
                  subtitle: O.intl.format(O.t.OOCbz8, { helpdeskArticle: E.A.getArticleURL(L.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  actions: [],
              })
            : (0, n.jsx)(o.Modal, {
                  size: "md",
                  transitionState: e,
                  title: O.intl.string(O.t["2dVCLl"]),
                  subtitle: O.intl.string(O.t.DXgoi2),
                  onClose: i,
                  input: (0, n.jsx)(d.iS, {
                      selectionMode: "multiple",
                      value: Array.from(R.values()),
                      options: Array.from(w.values()),
                      formatOption: (t) => ({ id: t.id, value: t, label: S.Ay.getName(t) }),
                      onSelectionChange: (t) => {
                          let e = Array.isArray(t) ? t : [t],
                              i = new Map();
                          e.forEach((t) => {
                              null != t && i.set(t.id, t);
                          }),
                              p(i);
                      },
                      children: (0, n.jsx)("div", {
                          className: T.c,
                          children: (0, n.jsx)(d.a3, {
                              placeholder: 0 === R.size ? O.intl.string(O.t.Kd5RaI) : "",
                              onQueryChange: (t) => {
                                  f(t.target.value);
                              },
                          }),
                      }),
                  }),
                  actions: [],
                  actionBarInput: (function (t) {
                      let e,
                          { eligibleRecipients: a } = t,
                          r = x.length > 0 && 0 === a.size;
                      return (
                          (e =
                              !0 === r
                                  ? O.intl.string(O.t.wpSqAW)
                                  : R.size <= 1
                                    ? O.intl.string(O.t.ItpQxk)
                                    : O.intl.format(O.t.iW2stn, { nTrials: R.size })),
                          (0, n.jsx)("div", {
                              className: l()(T.qr, T.h0),
                              children: (0, n.jsx)(u.$, {
                                  variant: "primary",
                                  disabled: (0 === R.size && !r) || N,
                                  text: e,
                                  size: "md",
                                  fullWidth: !0,
                                  onClick: async () => {
                                      r ? i() : (z(!0), await s([...R.values()]), z(!1));
                                  },
                              }),
                          })
                      );
                  })({ eligibleRecipients: w }),
                  children: ((t) => {
                      let { eligibleRecipients: e } = t;
                      return (0, n.jsx)(M.A, {
                          users: Array.from(e.values()),
                          isUserSelected: (t) => R.has(t.id),
                          onSelectionChange: (t, e) => {
                              p((i) => {
                                  let s = new Map(i);
                                  return e ? s.set(t.id, t) : s.delete(t.id), s;
                              });
                          },
                          isFetching: _,
                          onFetchMore: b,
                          isUserDisabled: (t) =>
                              null !== r &&
                              0 !== r &&
                              [...R.values()].filter((t) => !I.has(t.id)).length >= r &&
                              !R.has(t.id) &&
                              !I.has(t.id),
                          searchQuery: x,
                          emptySearchContent: { header: O.intl.string(O.t["8+ywHD"]), body: O.intl.string(O.t.CgQmY2) },
                          className: T.p_,
                      });
                  })({ eligibleRecipients: w }),
              });
}
function H(t) {
    let e,
        { transitionState: i, onClose: s, onShare: r } = t,
        d = (0, c.bG)([C.A], () => C.A.getRecipientStatus()),
        [m, g] = a.useState(new Map()),
        [R, p] = a.useState(new Map()),
        [f, E] = a.useState(!1);
    return (
        a.useEffect(() => {
            !(async function () {
                let t = new Map();
                for (let [e, i] of d) {
                    if (h.A.isBlockedOrIgnored(e)) continue;
                    let s = await (0, A.wz)(e);
                    (s.referralStatus = i), t.set(s.id, s);
                }
                g(t);
            })();
        }, [d]),
        (0, n.jsx)(o.Modal, {
            size: "md",
            transitionState: i,
            title: O.intl.string(O.t.rKmy8I),
            subtitle: O.intl.string(O.t.VDlF6o),
            onClose: s,
            actions: [],
            actionBarInput:
                ((e = R.size <= 1 ? O.intl.string(O.t.ItpQxk) : O.intl.format(O.t.iW2stn, { nTrials: R.size })),
                (0, n.jsx)("div", {
                    className: l()(T.qr, T.h0),
                    children: (0, n.jsx)(u.$, {
                        variant: "primary",
                        disabled: 0 === R.size || f,
                        text: e,
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            E(!0), await r([...R.values()]), E(!1);
                        },
                    }),
                })),
            children: (0, n.jsx)(M.A, {
                users: Array.from(m.values()),
                isUserSelected: (t) => R.has(t.id),
                isUserDisabled: (t) => t.referralStatus === x.aK.REDEEMED,
                onSelectionChange: (t, e) => {
                    p((i) => {
                        let s = new Map(i);
                        return e ? s.set(t.id, t) : s.delete(t.id), s;
                    });
                },
                className: T.p_,
            }),
        })
    );
}
var K =
    (((s = {})[(s.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (s[(s.CONFIRMATION = 2)] = "CONFIRMATION"),
    (s[(s.REMINDER = 3)] = "REMINDER"),
    s);
let Q = function (t) {
    let { transitionState: e, onClose: i, startingScreen: s = 1 } = t,
        r = (0, c.bG)([C.A], () => C.A.getReferralsRemaining()),
        [l, o] = a.useState(s),
        [d, u] = a.useState([]),
        { analyticsLocations: A } = (0, p.Ay)([R.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    async function g(t) {
        f.default.track(L.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: A });
        let e = await (0, x.xm)(Object.values(t).map((t) => t.id));
        u(t.map((t) => ({ recipient: t, status: e.get(t.id) }))), o(2);
    }
    if (null === r) return (0, n.jsx)(m.y, {});
    switch (l) {
        case 2:
            return (0, n.jsx)(P, { transitionState: e, isReminderConfirmation: 3 === s, results: d, onClose: i });
        case 1:
            return (0, n.jsx)(U, { transitionState: e, onClose: i, onShare: g });
        case 3:
            return (0, n.jsx)(H, { transitionState: e, onClose: i, onShare: g });
        default:
            return;
    }
};
