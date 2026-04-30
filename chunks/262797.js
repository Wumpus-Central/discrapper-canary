n.d(i, { default: () => M });
var e = n(627968),
    s = n(64700),
    r = n(562708),
    l = n(17928),
    a = n(97808),
    c = n(778712),
    o = n(428678),
    d = n(534514),
    x = n(834730),
    u = n(192308),
    m = n(640238),
    E = n(717398),
    I = n(628284),
    N = n(738188),
    g = n(754302),
    A = n(375708);
function j() {
    return (0, e.jsxs)(g.q, {
        children: [
            (0, e.jsx)(g.B, { title: A.intl.string(A.t.fjFJFV), description: A.intl.string(A.t["8SIMPz"]), icon: I.y }),
            (0, e.jsx)(g.B, { title: A.intl.string(A.t.QCrmqS), description: A.intl.string(A.t.TKDMoN), icon: I.y }),
            (0, e.jsx)(g.B, {
                title: A.intl.string(A.t["lkm/a8"]),
                description: A.intl.string(A.t["8j3qaC"]),
                icon: N.i,
            }),
        ],
    });
}
var h = n(381689),
    _ = n(632738),
    f = n(994500),
    C = n(174459),
    R = n(975571),
    T = n(562153),
    O = n(143547),
    p = n(235627),
    v = n(652215),
    S = n(261369);
function k(t) {
    let { user: i, onBlock: n, onIgnore: s, location: r, disallowIgnore: m, guildId: E, channelId: I } = t,
        N = (0, l.bG)([f.A], () => f.A.isIgnored(i.id));
    return (0, e.jsxs)("div", {
        className: S.kL,
        children: [
            (0, e.jsxs)("div", {
                className: S.RS,
                children: [
                    (0, e.jsxs)("div", {
                        className: S.zc,
                        children: [
                            (0, e.jsx)(a.eu, {
                                size: c._3.SIZE_56,
                                src: i.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, e.jsx)("div", { className: S.Kk, children: (0, e.jsx)(o.K, {}) }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: A.intl.format(A.t.CIbzHR, { username: T.Ay.getName(E, I, i) }),
                            }),
                            (0, e.jsx)(x.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: A.intl.string(A.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)(j, {}),
            m || N
                ? null
                : (0, e.jsxs)("div", {
                      className: S.l_,
                      children: [
                          (0, e.jsx)(_.Y0, {
                              title: A.intl.string(A.t["+BJTcB"]),
                              children: (0, e.jsx)(_.PQ, {
                                  title: A.intl.string(A.t.hC8tcc),
                                  description: A.intl.string(A.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: A.intl.string(A.t.mxJOd9),
                                  onButtonPress: () => {
                                      C.default.track(v.HAw.USER_REMEDIATION_ACTION, {
                                          action: p.p.GOTO_IGNORE,
                                          location: r,
                                      }),
                                          (0, u.closeAllModals)(),
                                          (0, u.openModal)((t) =>
                                              (0, e.jsx)(O.default, {
                                                  ...t,
                                                  user: i,
                                                  guildId: E,
                                                  channelId: I,
                                                  onIgnore: s,
                                                  onBlock: n,
                                                  location: r,
                                              }),
                                          );
                                  },
                              }),
                          }),
                          (0, e.jsx)(x.E, {
                              variant: "text-sm/medium",
                              className: S.FV,
                              children: A.intl.format(A.t.DJN6eZ, {
                                  articleLink: R.A.getArticleURL(v.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function M(t) {
    let {
        user: i,
        onBlock: n,
        onCancel: l,
        onIgnore: a,
        location: c = "ContextMenu",
        disallowIgnore: o,
        guildId: d,
        channelId: x,
        ...u
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                C.default.track(v.HAw.USER_REMEDIATION_ACTION, { action: p.p.DISMISS_BLOCK, location: c });
            },
            [c],
        ),
        (0, e.jsx)(m.a, {
            confirmText: A.intl.string(A.t.l4Emac),
            cancelText: A.intl.string(A.t["ETE/oC"]),
            onCancel: () => {
                C.default.track(v.HAw.USER_REMEDIATION_ACTION, { action: p.p.CANCEL_BLOCK, location: c }), l?.();
            },
            onConfirm: () => {
                n?.(),
                    E.A.blockUser(i.id, { location: c }).then(() => {
                        C.default.track(v.HAw.BLOCK_USER_CONFIRMED), h.A.showBlockSuccessToast(i.id, x ?? void 0);
                    });
            },
            impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...u,
            children: (0, e.jsx)(k, { user: i, guildId: d, channelId: x, onBlock: n, onIgnore: a, disallowIgnore: o }),
        })
    );
}
