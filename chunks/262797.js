n.d(e, { default: () => M });
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(17928),
    a = n(97808),
    c = n(778712),
    o = n(428678),
    d = n(534514),
    x = n(834730),
    m = n(192308),
    u = n(640238),
    h = n(49229),
    j = n(628284),
    N = n(738188),
    _ = n(754302),
    f = n(985018);
function v() {
    return (0, i.jsxs)(_.q, {
        children: [
            (0, i.jsx)(_.B, { title: f.intl.string(f.t.fjFJFV), description: f.intl.string(f.t["8SIMPz"]), icon: j.y }),
            (0, i.jsx)(_.B, { title: f.intl.string(f.t.QCrmqS), description: f.intl.string(f.t.TKDMoN), icon: j.y }),
            (0, i.jsx)(_.B, {
                title: f.intl.string(f.t["lkm/a8"]),
                description: f.intl.string(f.t["8j3qaC"]),
                icon: N.i,
            }),
        ],
    });
}
var g = n(381689),
    E = n(632738),
    I = n(994500),
    A = n(954571),
    p = n(975571),
    C = n(562153),
    R = n(143547),
    b = n(235627),
    T = n(652215),
    k = n(261369);
function O(t) {
    let { user: e, onBlock: n, onIgnore: l, location: s, disallowIgnore: u, guildId: h, channelId: j } = t,
        N = (0, r.bG)([I.A], () => I.A.isIgnored(e.id));
    return (0, i.jsxs)("div", {
        className: k.kL,
        children: [
            (0, i.jsxs)("div", {
                className: k.RS,
                children: [
                    (0, i.jsxs)("div", {
                        className: k.zc,
                        children: [
                            (0, i.jsx)(a.eu, {
                                size: c._3.SIZE_56,
                                src: e.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, i.jsx)("div", { className: k.Kk, children: (0, i.jsx)(o.K, {}) }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.D, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: f.intl.format(f.t.CIbzHR, { username: C.Ay.getName(h, j, e) }),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: f.intl.string(f.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(v, {}),
            u || N
                ? null
                : (0, i.jsxs)("div", {
                      className: k.l_,
                      children: [
                          (0, i.jsx)(E.Y0, {
                              title: f.intl.string(f.t["+BJTcB"]),
                              children: (0, i.jsx)(E.PQ, {
                                  title: f.intl.string(f.t.hC8tcc),
                                  description: f.intl.string(f.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: f.intl.string(f.t.mxJOd9),
                                  onButtonPress: () => {
                                      A.default.track(T.HAw.USER_REMEDIATION_ACTION, {
                                          action: b.p.GOTO_IGNORE,
                                          location: s,
                                      }),
                                          (0, m.closeAllModals)(),
                                          (0, m.openModal)((t) =>
                                              (0, i.jsx)(R.default, {
                                                  ...t,
                                                  user: e,
                                                  guildId: h,
                                                  channelId: j,
                                                  onIgnore: l,
                                                  onBlock: n,
                                                  location: s,
                                              }),
                                          );
                                  },
                              }),
                          }),
                          (0, i.jsx)(x.E, {
                              variant: "text-sm/medium",
                              className: k.FV,
                              children: f.intl.format(f.t.DJN6eZ, {
                                  articleLink: p.A.getArticleURL(T.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function M(t) {
    let {
        user: e,
        onBlock: n,
        onCancel: r,
        onIgnore: a,
        location: c = "ContextMenu",
        disallowIgnore: o,
        guildId: d,
        channelId: x,
        ...m
    } = t;
    return (
        l.useLayoutEffect(
            () => () => {
                A.default.track(T.HAw.USER_REMEDIATION_ACTION, { action: b.p.DISMISS_BLOCK, location: c });
            },
            [c],
        ),
        (0, i.jsx)(u.a, {
            confirmText: f.intl.string(f.t.l4Emac),
            cancelText: f.intl.string(f.t["ETE/oC"]),
            onCancel: () => {
                A.default.track(T.HAw.USER_REMEDIATION_ACTION, { action: b.p.CANCEL_BLOCK, location: c }), r?.();
            },
            onConfirm: () => {
                n?.(),
                    h.A.blockUser(e.id, { location: c }).then(() => {
                        A.default.track(T.HAw.BLOCK_USER_CONFIRMED), g.A.showBlockSuccessToast(e.id, x ?? void 0);
                    });
            },
            impression: { impressionName: s.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...m,
            children: (0, i.jsx)(O, { user: e, guildId: d, channelId: x, onBlock: n, onIgnore: a, disallowIgnore: o }),
        })
    );
}
