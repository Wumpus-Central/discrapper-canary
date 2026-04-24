n.d(t, { SelectFriendsModalScreens: () => H, default: () => z });
var a,
    i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    c = n(189213),
    o = n(17928),
    d = n(732771),
    u = n(821609),
    _ = n(289873),
    m = n(803306),
    p = n(718213),
    f = n(793574),
    A = n(688810),
    g = n(994500),
    h = n(954571),
    x = n(975571),
    b = n(427262),
    C = n(326084),
    N = n(851746),
    E = n(794783),
    R = n(972007),
    I = n(772707),
    v = n(844222),
    T = n(778712),
    S = n(97808),
    j = n(834730),
    y = n(534890),
    O = n(90517),
    P = n(308528),
    M = n(854627),
    L = n(779733),
    D = n(652215),
    k = n(985018),
    U = n(494025);
let w = (e) => {
        let { recipient: t, status: n, onClose: a } = e,
            { avatarSrc: r, eventHandlers: s } = (0, M.A)({ userId: t?.id, size: T._3.SIZE_56 }),
            c = b.Ay.getName(t),
            o = n === C.o.FAIL;
        return (0, i.jsxs)("div", {
            className: U.w4,
            children: [
                (0, i.jsx)(S.eu, {
                    imageClassName: l()({ [U.jN]: o }),
                    src: r,
                    "aria-label": c,
                    size: T._3.SIZE_32,
                    ...s,
                }),
                o
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(j.E, {
                                  className: U.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, i.jsx)(j.E, {
                                  variant: "text-md/medium",
                                  className: U.nT,
                                  color: "text-strong",
                                  children: k.intl.format(k.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, i.jsx)(j.E, {
                          variant: "text-md/medium",
                          className: U.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, i.jsx)(u.$, {
                    variant: "secondary",
                    size: "sm",
                    text: k.intl.string(k.t["g33r/P"]),
                    icon: y.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, L.default)(), P.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
            ],
        });
    },
    G = (e) => {
        let { transitionState: t, results: n, onClose: a, isReminderConfirmation: s } = e,
            l = (0, o.bG)([N.A], () => N.A.getReferralsRemaining());
        h.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: c } = r.useContext(v.C);
        return null === l
            ? (0, i.jsx)(_.y, {})
            : (0, i.jsx)(I.k, {
                  graphic: c.enabled
                      ? {
                            src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                            type: "image",
                        }
                      : { rive: O.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === n.filter((e) => e.status === C.o.SUCCESS).length
                          ? k.intl.string(k.t["7VBEue"])
                          : !0 === s
                            ? k.intl.string(k.t.GP5lbq)
                            : k.intl.string(k.t.tKCltd),
                  subtitle:
                      !0 === s
                          ? k.intl.format(k.t["4gJJfD"], { helpdeskArticle: x.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) })
                          : k.intl.format(k.t.AwGSWl, { helpdeskArticle: x.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) }),
                  onClose: a,
                  transitionState: t,
                  children: (0, i.jsx)("div", {
                      className: U.Hz,
                      children: n.map((e) =>
                          (0, i.jsx)(w, { recipient: e.recipient, status: e.status, onClose: a }, e.recipient.id),
                      ),
                  }),
              });
    };
var B = n(468049);
let F = (e) => {
        let { transitionState: t, onClose: n, onShare: a } = e,
            s = (0, o.bG)([N.A], () => N.A.getReferralsRemaining()),
            m = (0, o.bG)([N.A], () => N.A.getHasEligibleFriends()),
            [f, A] = r.useState(new Map()),
            [g, h] = r.useState(""),
            C = (0, p.A)(g, 400),
            {
                eligibleUsers: I,
                fetchUsers: v,
                hasError: T,
                isFetching: S,
                resendUsers: j,
            } = (0, R.i)({ searchQuery: C, selectedUsers: f }),
            [y, O] = r.useState(!1),
            P = I.reduce((e, t) => (e.has(t.id) || e.set(t.id, t), e), new Map());
        return null === s
            ? (0, i.jsx)(_.y, {})
            : T
              ? (0, i.jsx)(c.Modal, {
                    transitionState: t,
                    size: "sm",
                    title: k.intl.string(k.t.lcuio4),
                    subtitle: k.intl.string(k.t["x09+CD"]),
                    onClose: n,
                    actions: [],
                })
              : !1 === m
                ? (0, i.jsx)(c.Modal, {
                      transitionState: t,
                      size: "sm",
                      title: k.intl.string(k.t["2YigPp"]),
                      subtitle: k.intl.format(k.t.OOCbz8, {
                          helpdeskArticle: x.A.getArticleURL(D.MVz.REFERRAL_PROGRAM),
                      }),
                      onClose: n,
                      actions: [],
                  })
                : (0, i.jsx)(c.Modal, {
                      size: "md",
                      transitionState: t,
                      title: k.intl.string(k.t["2dVCLl"]),
                      subtitle: k.intl.string(k.t.DXgoi2),
                      onClose: n,
                      input: (0, i.jsx)(d.iS, {
                          selectionMode: "multiple",
                          value: Array.from(f.values()),
                          options: Array.from(P.values()),
                          formatOption: (e) => ({ id: e.id, value: e, label: b.Ay.getName(e) }),
                          onSelectionChange: (e) => {
                              let t = Array.isArray(e) ? e : [e],
                                  n = new Map();
                              t.forEach((e) => {
                                  null != e && n.set(e.id, e);
                              }),
                                  A(n);
                          },
                          children: (0, i.jsx)("div", {
                              className: B.c,
                              children: (0, i.jsx)(d.a3, {
                                  placeholder: 0 === f.size ? k.intl.string(k.t.Kd5RaI) : "",
                                  onQueryChange: (e) => {
                                      h(e.target.value);
                                  },
                              }),
                          }),
                      }),
                      actions: [],
                      actionBarInput: ((e) => {
                          let t,
                              { eligibleRecipients: r } = e,
                              s = C.length > 0 && 0 === r.size;
                          return (
                              (t =
                                  !0 === s
                                      ? k.intl.string(k.t.wpSqAW)
                                      : f.size <= 1
                                        ? k.intl.string(k.t.ItpQxk)
                                        : k.intl.format(k.t.iW2stn, { nTrials: f.size })),
                              (0, i.jsx)("div", {
                                  className: l()(B.qr, B.h0),
                                  children: (0, i.jsx)(u.$, {
                                      variant: "primary",
                                      disabled: (0 === f.size && !s) || y,
                                      text: t,
                                      size: "md",
                                      fullWidth: !0,
                                      onClick: async () => {
                                          s ? n() : (O(!0), await a([...f.values()]), O(!1));
                                      },
                                  }),
                              })
                          );
                      })({ eligibleRecipients: P }),
                      children: ((e) => {
                          let { eligibleRecipients: t } = e;
                          return (0, i.jsx)(E.A, {
                              users: Array.from(t.values()),
                              isUserSelected: (e) => f.has(e.id),
                              onSelectionChange: (e, t) => {
                                  A((n) => {
                                      let a = new Map(n);
                                      return t ? a.set(e.id, e) : a.delete(e.id), a;
                                  });
                              },
                              isFetching: S,
                              onFetchMore: v,
                              isUserDisabled: (e) =>
                                  null !== s &&
                                  0 !== s &&
                                  [...f.values()].filter((e) => !j.has(e.id)).length >= s &&
                                  !f.has(e.id) &&
                                  !j.has(e.id),
                              searchQuery: C,
                              emptySearchContent: {
                                  header: k.intl.string(k.t["8+ywHD"]),
                                  body: k.intl.string(k.t.CgQmY2),
                              },
                              className: B.p_,
                          });
                      })({ eligibleRecipients: P }),
                  });
    },
    V = (e) => {
        let t,
            { transitionState: n, onClose: a, onShare: s } = e,
            d = (0, o.bG)([N.A], () => N.A.getRecipientStatus()),
            [_, p] = r.useState(new Map()),
            [f, A] = r.useState(new Map()),
            [h, x] = r.useState(!1);
        return (
            r.useEffect(() => {
                (async () => {
                    let e = new Map();
                    for (let [t, n] of d) {
                        if (g.A.isBlockedOrIgnored(t)) continue;
                        let a = await (0, m.wz)(t);
                        (a.referralStatus = n), e.set(a.id, a);
                    }
                    p(e);
                })();
            }, [d]),
            (0, i.jsx)(c.Modal, {
                size: "md",
                transitionState: n,
                title: k.intl.string(k.t.rKmy8I),
                subtitle: k.intl.string(k.t.VDlF6o),
                onClose: a,
                actions: [],
                actionBarInput:
                    ((t = f.size <= 1 ? k.intl.string(k.t.ItpQxk) : k.intl.format(k.t.iW2stn, { nTrials: f.size })),
                    (0, i.jsx)("div", {
                        className: l()(B.qr, B.h0),
                        children: (0, i.jsx)(u.$, {
                            variant: "primary",
                            disabled: 0 === f.size || h,
                            text: t,
                            size: "md",
                            fullWidth: !0,
                            onClick: async () => {
                                x(!0), await s([...f.values()]), x(!1);
                            },
                        }),
                    })),
                children: (0, i.jsx)(E.A, {
                    users: Array.from(_.values()),
                    isUserSelected: (e) => f.has(e.id),
                    isUserDisabled: (e) => e.referralStatus === C.aK.REDEEMED,
                    onSelectionChange: (e, t) => {
                        A((n) => {
                            let a = new Map(n);
                            return t ? a.set(e.id, e) : a.delete(e.id), a;
                        });
                    },
                    className: B.p_,
                }),
            })
        );
    };
var H =
    (((a = {})[(a.SELECT_FRIENDS = 1)] = "SELECT_FRIENDS"),
    (a[(a.CONFIRMATION = 2)] = "CONFIRMATION"),
    (a[(a.REMINDER = 3)] = "REMINDER"),
    a);
let z = (e) => {
    let { transitionState: t, onClose: n, startingScreen: a = 1 } = e,
        s = (0, o.bG)([N.A], () => N.A.getReferralsRemaining()),
        [l, c] = r.useState(a),
        [d, u] = r.useState([]),
        { analyticsLocations: m } = (0, A.Ay)([f.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]),
        p = async (e) => {
            h.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: m });
            let t = await (0, C.xm)(Object.values(e).map((e) => e.id));
            u(e.map((e) => ({ recipient: e, status: t.get(e.id) }))), c(2);
        };
    return null === s
        ? (0, i.jsx)(_.y, {})
        : 2 === l
          ? (0, i.jsx)(G, { transitionState: t, isReminderConfirmation: 3 === a, results: d, onClose: n })
          : 1 === l
            ? (0, i.jsx)(F, { transitionState: t, onClose: n, onShare: p })
            : 3 === l
              ? (0, i.jsx)(V, { transitionState: t, onClose: n, onShare: p })
              : void 0;
};
