n.d(i, { default: () => M });
var e = n(627968),
    s = n(64700),
    r = n(110259),
    l = n(17928),
    a = n(97808),
    o = n(778712),
    c = n(428678),
    d = n(534514),
    u = n(834730),
    x = n(192308),
    m = n(640238),
    E = n(49229),
    I = n(628284),
    N = n(738188),
    g = n(754302),
    _ = n(985018);
function A() {
    return (0, e.jsxs)(g.q, {
        children: [
            (0, e.jsx)(g.B, { title: _.intl.string(_.t.fjFJFV), description: _.intl.string(_.t["8SIMPz"]), icon: I.y }),
            (0, e.jsx)(g.B, { title: _.intl.string(_.t.QCrmqS), description: _.intl.string(_.t.TKDMoN), icon: I.y }),
            (0, e.jsx)(g.B, {
                title: _.intl.string(_.t["lkm/a8"]),
                description: _.intl.string(_.t["8j3qaC"]),
                icon: N.i,
            }),
        ],
    });
}
var f = n(381689),
    j = n(632738),
    h = n(994500),
    C = n(954571),
    R = n(975571),
    O = n(562153),
    T = n(143547),
    p = n(235627),
    v = n(652215),
    k = n(261369);
function S(t) {
    let { user: i, onBlock: n, onIgnore: s, location: r, disallowIgnore: m, guildId: E, channelId: I } = t,
        N = (0, l.bG)([h.A], () => h.A.isIgnored(i.id));
    return (0, e.jsxs)("div", {
        className: k.kL,
        children: [
            (0, e.jsxs)("div", {
                className: k.RS,
                children: [
                    (0, e.jsxs)("div", {
                        className: k.zc,
                        children: [
                            (0, e.jsx)(a.eu, {
                                size: o._3.SIZE_56,
                                src: i.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, e.jsx)("div", { className: k.Kk, children: (0, e.jsx)(c.K, {}) }),
                        ],
                    }),
                    (0, e.jsxs)("div", {
                        children: [
                            (0, e.jsx)(d.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: _.intl.format(_.t.CIbzHR, { username: O.Ay.getName(E, I, i) }),
                            }),
                            (0, e.jsx)(u.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)(A, {}),
            m || N
                ? null
                : (0, e.jsxs)("div", {
                      className: k.l_,
                      children: [
                          (0, e.jsx)(j.Y0, {
                              title: _.intl.string(_.t["+BJTcB"]),
                              children: (0, e.jsx)(j.PQ, {
                                  title: _.intl.string(_.t.hC8tcc),
                                  description: _.intl.string(_.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: _.intl.string(_.t.mxJOd9),
                                  onButtonPress: () => {
                                      C.default.track(v.HAw.USER_REMEDIATION_ACTION, {
                                          action: p.p.GOTO_IGNORE,
                                          location: r,
                                      }),
                                          (0, x.closeAllModals)(),
                                          (0, x.openModal)((t) =>
                                              (0, e.jsx)(T.default, {
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
                          (0, e.jsx)(u.E, {
                              variant: "text-sm/medium",
                              className: k.FV,
                              children: _.intl.format(_.t.DJN6eZ, {
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
        location: o = "ContextMenu",
        disallowIgnore: c,
        guildId: d,
        channelId: u,
        ...x
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                C.default.track(v.HAw.USER_REMEDIATION_ACTION, { action: p.p.DISMISS_BLOCK, location: o });
            },
            [o],
        ),
        (0, e.jsx)(m.a, {
            confirmText: _.intl.string(_.t.l4Emac),
            cancelText: _.intl.string(_.t["ETE/oC"]),
            onCancel: () => {
                C.default.track(v.HAw.USER_REMEDIATION_ACTION, { action: p.p.CANCEL_BLOCK, location: o }), l?.();
            },
            onConfirm: () => {
                n?.(),
                    E.A.blockUser(i.id, { location: o }).then(() => {
                        C.default.track(v.HAw.BLOCK_USER_CONFIRMED), f.A.showBlockSuccessToast(i.id, u ?? void 0);
                    });
            },
            impression: { impressionName: r.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...x,
            children: (0, e.jsx)(S, { user: i, guildId: d, channelId: u, onBlock: n, onIgnore: a, disallowIgnore: c }),
        })
    );
}
