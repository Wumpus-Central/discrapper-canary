n.d(e, { A: () => y });
var s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(834730),
    d = n(821609),
    T = n(939249),
    S = n(320448),
    u = n(192308),
    A = n(49229),
    _ = n(975807),
    x = n(928658),
    E = n(426190),
    m = n(662502),
    g = n(994500),
    h = n(192311),
    O = n(278941),
    j = n(674272),
    b = n(665909),
    C = n(788099),
    L = n(403403),
    p = n(327337),
    R = n(431804),
    N = n(985018),
    I = n(106749);
function F(t) {
    let { children: e } = t;
    return (0, s.jsx)("div", { className: I.mH, children: e });
}
function U(t) {
    let { title: e, subTitle: n, buttonText: i, variant: l = "secondary", onPress: r, disabled: a } = t;
    return (0, s.jsxs)("div", {
        className: I.$l,
        children: [
            (0, s.jsxs)("div", {
                className: I.zk,
                children: [
                    (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-default", children: n }),
                ],
            }),
            (0, s.jsx)(d.$, { size: "sm", variant: l, text: i, onClick: r, disabled: a }),
        ],
    });
}
function v(t) {
    let { title: e, subTitle: n, onPress: i } = t;
    return (0, s.jsxs)(T.D, {
        className: r()(I.$l, I.lx),
        onClick: i,
        children: [
            (0, s.jsxs)("div", {
                className: I.zk,
                children: [
                    (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    null != n
                        ? (0, s.jsx)(c.E, { variant: "text-xs/medium", color: "text-default", children: n })
                        : null,
                ],
            }),
            (0, s.jsx)(S._, { size: "md", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        ],
    });
}
let y = function (t) {
    let { otherUserId: e, channelId: l, warningId: r, warningType: o, transitionToSlide: c } = t,
        d = (0, E.N)(),
        T = (0, E.z)(),
        S = (0, h.W)(l),
        I = null != (0, O.e)(l),
        y = (0, a.bG)([g.A], () => g.A.isIgnored(e), [e]),
        k = (0, a.bG)([g.A], () => g.A.isBlocked(e), [e]),
        Y = i.useCallback(
            (t) => {
                (0, b._$)({ channelId: l, warningId: r, senderId: e, warningType: o, cta: t, isNudgeWarning: I });
            },
            [l, r, e, o, I],
        ),
        f = i.useCallback(() => {
            (0, u.closeModal)(p.V), Y(b.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [Y]),
        W = i.useCallback(() => {
            A.A.unblockUser(e, { location: p.Ht }), Y(b.Wm.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, Y]),
        M = i.useCallback(() => {
            (0, u.closeModal)(p.V), Y(b.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [Y]),
        P = i.useMemo(
            () => [
                {
                    type: 0,
                    title: N.intl.string(N.t.B7ZT06),
                    subTitle: N.intl.string(N.t.fCfp49),
                    buttonText: y ? N.intl.string(N.t["9e0wLn"]) : N.intl.string(N.t.B7ZT06),
                    disabled: k,
                    onPress: () => {
                        y
                            ? (A.A.unignoreUser(e, p.cb, l), Y(b.Wm.USER_SAFETY_TOOLS_UNIGNORE))
                            : (A.A.ignoreUser(e, p.cb, l), Y(b.Wm.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: N.intl.string(N.t.oDxaKy),
                    subTitle: N.intl.string(N.t.Lj37az),
                    buttonText: k ? N.intl.string(N.t.Hro40y) : N.intl.string(N.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        k
                            ? (W(), m.A.showUnblockSuccessToast(e, l))
                            : (0, u.openModalLazy)(async () => {
                                  let { default: t } = await n.e("62557").then(n.bind(n, 371185));
                                  return (n) => {
                                      let { transitionState: i, onClose: r } = n;
                                      return (0, s.jsx)(t, {
                                          transitionState: i,
                                          onBlock: f,
                                          onBlockAndReport: M,
                                          onCancel: () => {
                                              r?.(), Y(b.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL);
                                          },
                                          onClose: r,
                                          userId: e,
                                          channelId: l,
                                      });
                                  };
                              });
                    },
                },
                {
                    type: 0,
                    title: N.intl.string(N.t.X27yhD),
                    subTitle: N.intl.string(N.t["0tydOa"]),
                    buttonText: N.intl.string(N.t.X27yhD),
                    onPress: () => {
                        (0, u.closeModal)(p.V), (0, x.jJ)(S), Y(b.Wm.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [y, k, Y, W, f, M, e, l, S],
        ),
        B = i.useMemo(() => {
            let t = {
                    title: N.intl.string(N.t.ZSbbMJ),
                    subTitle: N.intl.string(N.t.iNcsrW),
                    buttonText: N.intl.string(N.t.rK4Gqv),
                    onPress: () => {
                        (0, _.A)(p.x7), Y(b.Wm.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: N.intl.string(N.t.ZSbbMJ),
                    subTitle: N.intl.string(N.t.g5uwC5),
                    buttonText: N.intl.string(N.t.rK4Gqv),
                    onPress: () => {
                        (0, _.A)(p.jR), Y(b.Wm.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: N.intl.string(N.t.ZSbbMJ),
                    subTitle: N.intl.string(N.t.S9O1ZZ),
                    buttonText: N.intl.string(N.t.rK4Gqv),
                    onPress: () => {
                        (0, _.A)(p.CL), Y(b.Wm.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: N.intl.string(N.t.syuaPI),
                    subTitle: N.intl.string(N.t.LLBnNk),
                    buttonText: N.intl.string(N.t.rzvzyZ),
                    onPress: () => {
                        (0, j.A)({ source: R.y.KEYBIND, onClose: u.closeAllModals }),
                            Y(b.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: N.intl.string(N.t["7LgVmt"]),
                    subTitle: N.intl.string(N.t.pwoRjc),
                    onPress: () => {
                        c(C.W.SAFETY_TIPS), Y(b.Wm.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    },
                },
                { type: 0, ...(d ? t : T ? n : e) },
            ];
        }, [d, T, c, Y]),
        D = i.useMemo(
            () => [
                {
                    type: 1,
                    title: N.intl.string(N.t.otdt24),
                    onPress: () => {
                        c(C.W.ABOUT_SAFETY_ALERTS), Y(b.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [c, Y],
        ),
        w = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: i, buttonText: l, onPress: r, disabled: a, variant: o } = t;
                return (0, s.jsx)(
                    U,
                    { type: e, title: n, subTitle: i, buttonText: l, variant: o, onPress: r, disabled: a },
                    n,
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: i, onPress: l } = t;
                return (0, s.jsx)(v, { type: e, title: n, subTitle: i, onPress: l }, n);
            }
            return null;
        };
    return (0, s.jsxs)(L.A, {
        children: [
            (0, s.jsx)(F, { children: P.map((t) => w(t)) }),
            (0, s.jsx)(F, { children: B.map((t) => w(t)) }),
            (0, s.jsx)(F, { children: D.map((t) => w(t)) }),
        ],
    });
};
