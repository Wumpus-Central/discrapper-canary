n.d(e, { A: () => I });
var s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    T = n(397927),
    c = n(49229),
    d = n(975807),
    S = n(928658),
    A = n(426190),
    u = n(662502),
    _ = n(994500),
    x = n(192311),
    E = n(278941),
    m = n(674272),
    O = n(665909),
    g = n(788099),
    h = n(403403),
    j = n(327337),
    C = n(431804),
    b = n(985018),
    L = n(691428);
function N(t) {
    let { children: e } = t;
    return (0, s.jsx)("div", { className: L.mH, children: e });
}
function R(t) {
    let { title: e, subTitle: n, buttonText: i, variant: l = "secondary", onPress: r, disabled: a } = t;
    return (0, s.jsxs)("div", {
        className: L.$l,
        children: [
            (0, s.jsxs)("div", {
                className: L.zk,
                children: [
                    (0, s.jsx)(T.Text, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    (0, s.jsx)(T.Text, { variant: "text-xs/medium", color: "text-default", children: n }),
                ],
            }),
            (0, s.jsx)(T.Button, { size: "sm", variant: l, text: i, onClick: r, disabled: a }),
        ],
    });
}
function p(t) {
    let { title: e, subTitle: n, onPress: i } = t;
    return (0, s.jsxs)(T.DUT, {
        className: r()(L.$l, L.lx),
        onClick: i,
        children: [
            (0, s.jsxs)("div", {
                className: L.zk,
                children: [
                    (0, s.jsx)(T.Text, { variant: "text-md/semibold", color: "text-strong", children: e }),
                    null != n
                        ? (0, s.jsx)(T.Text, { variant: "text-xs/medium", color: "text-default", children: n })
                        : null,
                ],
            }),
            (0, s.jsx)(T._BQ, { size: "md", color: o.A.colors.INTERACTIVE_TEXT_DEFAULT }),
        ],
    });
}
let I = function (t) {
    let { otherUserId: e, channelId: l, warningId: r, warningType: o, transitionToSlide: L } = t,
        I = (0, A.N)(),
        U = (0, A.z)(),
        F = (0, x.W)(l),
        v = null != (0, E.e)(l),
        y = (0, a.bG)([_.A], () => _.A.isIgnored(e), [e]),
        Y = (0, a.bG)([_.A], () => _.A.isBlocked(e), [e]),
        k = i.useCallback(
            (t) => {
                (0, O._$)({ channelId: l, warningId: r, senderId: e, warningType: o, cta: t, isNudgeWarning: v });
            },
            [l, r, e, o, v],
        ),
        f = i.useCallback(() => {
            (0, T.OoC)(j.V), k(O.Wm.USER_SAFETY_TOOLS_BLOCK_CONFIRM);
        }, [k]),
        W = i.useCallback(() => {
            c.A.unblockUser(e, { location: j.Ht }), k(O.Wm.USER_SAFETY_TOOLS_UNBLOCK);
        }, [e, k]),
        B = i.useCallback(() => {
            (0, T.OoC)(j.V), k(O.Wm.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM);
        }, [k]),
        P = i.useMemo(
            () => [
                {
                    type: 0,
                    title: b.intl.string(b.t.B7ZT06),
                    subTitle: b.intl.string(b.t.fCfp49),
                    buttonText: y ? b.intl.string(b.t["9e0wLn"]) : b.intl.string(b.t.B7ZT06),
                    disabled: Y,
                    onPress: () => {
                        y
                            ? (c.A.unignoreUser(e, j.cb, l), k(O.Wm.USER_SAFETY_TOOLS_UNIGNORE))
                            : (c.A.ignoreUser(e, j.cb, l), k(O.Wm.USER_SAFETY_TOOLS_IGNORE));
                    },
                },
                {
                    type: 0,
                    title: b.intl.string(b.t.oDxaKy),
                    subTitle: b.intl.string(b.t.Lj37az),
                    buttonText: Y ? b.intl.string(b.t.Hro40y) : b.intl.string(b.t.oDxaKy),
                    variant: "primary",
                    onPress: () => {
                        Y
                            ? (W(), u.A.showUnblockSuccessToast(e, l))
                            : (0, T.mMO)(async () => {
                                  let { default: t } = await n.e("62557").then(n.bind(n, 371185));
                                  return (n) => {
                                      let { transitionState: i, onClose: r } = n;
                                      return (0, s.jsx)(t, {
                                          transitionState: i,
                                          onBlock: f,
                                          onBlockAndReport: B,
                                          onCancel: () => {
                                              r?.(), k(O.Wm.USER_SAFETY_TOOLS_BLOCK_CANCEL);
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
                    title: b.intl.string(b.t.X27yhD),
                    subTitle: b.intl.string(b.t["0tydOa"]),
                    buttonText: b.intl.string(b.t.X27yhD),
                    onPress: () => {
                        (0, T.OoC)(j.V), (0, S.jJ)(F), k(O.Wm.USER_SAFETY_TOOLS_REPORT);
                    },
                },
            ],
            [y, Y, k, W, f, B, e, l, F],
        ),
        M = i.useMemo(() => {
            let t = {
                    title: b.intl.string(b.t.ZSbbMJ),
                    subTitle: b.intl.string(b.t.iNcsrW),
                    buttonText: b.intl.string(b.t.rK4Gqv),
                    onPress: () => {
                        (0, d.A)(j.x7), k(O.Wm.USER_SAFETY_TOOLS_CTL);
                    },
                },
                e = {
                    title: b.intl.string(b.t.ZSbbMJ),
                    subTitle: b.intl.string(b.t.g5uwC5),
                    buttonText: b.intl.string(b.t.rK4Gqv),
                    onPress: () => {
                        (0, d.A)(j.jR), k(O.Wm.USER_SAFETY_TOOLS_NO_FILTR);
                    },
                },
                n = {
                    title: b.intl.string(b.t.ZSbbMJ),
                    subTitle: b.intl.string(b.t.S9O1ZZ),
                    buttonText: b.intl.string(b.t.rK4Gqv),
                    onPress: () => {
                        (0, d.A)(j.CL), k(O.Wm.USER_SAFETY_TOOLS_THROUGHLINE);
                    },
                };
            return [
                {
                    type: 0,
                    title: b.intl.string(b.t.syuaPI),
                    subTitle: b.intl.string(b.t.LLBnNk),
                    buttonText: b.intl.string(b.t.rzvzyZ),
                    onPress: () => {
                        (0, m.A)({ source: C.y.KEYBIND, onClose: T.s7G }), k(O.Wm.USER_SAFETY_TOOLS_VIBING_WUMPUS);
                    },
                },
                {
                    type: 1,
                    title: b.intl.string(b.t["7LgVmt"]),
                    subTitle: b.intl.string(b.t.pwoRjc),
                    onPress: () => {
                        L(g.W.SAFETY_TIPS), k(O.Wm.USER_SAFETY_TOOLS_SAFETY_TIPS);
                    },
                },
                { type: 0, ...(I ? t : U ? n : e) },
            ];
        }, [I, U, L, k]),
        D = i.useMemo(
            () => [
                {
                    type: 1,
                    title: b.intl.string(b.t.otdt24),
                    onPress: () => {
                        L(g.W.ABOUT_SAFETY_ALERTS), k(O.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS);
                    },
                },
            ],
            [L, k],
        ),
        w = (t) => {
            if (0 === t.type) {
                let { type: e, title: n, subTitle: i, buttonText: l, onPress: r, disabled: a, variant: o } = t;
                return (0, s.jsx)(
                    R,
                    { type: e, title: n, subTitle: i, buttonText: l, variant: o, onPress: r, disabled: a },
                    n,
                );
            }
            if (1 === t.type) {
                let { type: e, title: n, subTitle: i, onPress: l } = t;
                return (0, s.jsx)(p, { type: e, title: n, subTitle: i, onPress: l }, n);
            }
            return null;
        };
    return (0, s.jsxs)(h.A, {
        children: [
            (0, s.jsx)(N, { children: P.map((t) => w(t)) }),
            (0, s.jsx)(N, { children: M.map((t) => w(t)) }),
            (0, s.jsx)(N, { children: D.map((t) => w(t)) }),
        ],
    });
};
