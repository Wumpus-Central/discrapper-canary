n.d(i, { default: () => B });
var e = n(477900),
    s = n(582128),
    l = n(562708),
    r = n(17928),
    a = n(97808),
    c = n(778712),
    o = n(428678),
    d = n(297264),
    u = n(834730),
    x = n(192308),
    m = n(640238),
    I = n(717398),
    E = n(628284),
    g = n(738188),
    h = n(754302),
    j = n(660183);
function A() {
    return (0, e.jsxs)(h.q, {
        children: [
            (0, e.jsx)(h.B, { title: j.intl.string(j.t.fjFJFV), description: j.intl.string(j.t["8SIMPz"]), icon: E.y }),
            (0, e.jsx)(h.B, { title: j.intl.string(j.t.QCrmqS), description: j.intl.string(j.t.TKDMoN), icon: E.y }),
            (0, e.jsx)(h.B, {
                title: j.intl.string(j.t["lkm/a8"]),
                description: j.intl.string(j.t["8j3qaC"]),
                icon: g.WarningIcon,
            }),
        ],
    });
}
var N = n(381689),
    C = n(632738),
    _ = n(994500),
    f = n(174459),
    p = n(975571),
    T = n(562153),
    O = n(143547),
    R = n(235627),
    k = n(652215),
    S = n(490930);
function v(t) {
    let { user: i, onBlock: n, onIgnore: s, location: l, disallowIgnore: m, guildId: I, channelId: E } = t,
        g = (0, r.bG)([_.A], () => _.A.isIgnored(i.id));
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
                                children: j.intl.format(j.t.CIbzHR, { username: T.Ay.getName(I, E, i) }),
                            }),
                            (0, e.jsx)(u.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: j.intl.string(j.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, e.jsx)(A, {}),
            m || g
                ? null
                : (0, e.jsxs)("div", {
                      className: S.l_,
                      children: [
                          (0, e.jsx)(C.Y0, {
                              title: j.intl.string(j.t["+BJTcB"]),
                              children: (0, e.jsx)(C.PQ, {
                                  title: j.intl.string(j.t.hC8tcc),
                                  description: j.intl.string(j.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: j.intl.string(j.t.mxJOd9),
                                  onButtonPress: () => {
                                      (f.default.track(k.HAw.USER_REMEDIATION_ACTION, {
                                          action: R.p.GOTO_IGNORE,
                                          location: l,
                                      }),
                                          (0, x.closeAllModals)(),
                                          (0, x.openModal)((t) =>
                                              (0, e.jsx)(O.default, {
                                                  ...t,
                                                  user: i,
                                                  guildId: I,
                                                  channelId: E,
                                                  onIgnore: s,
                                                  onBlock: n,
                                                  location: l,
                                              }),
                                          ));
                                  },
                              }),
                          }),
                          (0, e.jsx)(u.E, {
                              variant: "text-sm/medium",
                              className: S.FV,
                              children: j.intl.format(j.t.DJN6eZ, {
                                  articleLink: p.A.getArticleURL(k.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function B(t) {
    let {
        user: i,
        onBlock: n,
        onCancel: r,
        onIgnore: a,
        location: c = "ContextMenu",
        disallowIgnore: o,
        guildId: d,
        channelId: u,
        ...x
    } = t;
    return (
        s.useLayoutEffect(
            () => () => {
                f.default.track(k.HAw.USER_REMEDIATION_ACTION, { action: R.p.DISMISS_BLOCK, location: c });
            },
            [c],
        ),
        (0, e.jsx)(m.a, {
            confirmText: j.intl.string(j.t.l4Emac),
            cancelText: j.intl.string(j.t["ETE/oC"]),
            onCancel: function () {
                (f.default.track(k.HAw.USER_REMEDIATION_ACTION, { action: R.p.CANCEL_BLOCK, location: c }), r?.());
            },
            onConfirm: () => {
                (n?.(),
                    I.A.blockUser(i.id, { location: c }).then(() => {
                        (f.default.track(k.HAw.BLOCK_USER_CONFIRMED), N.A.showBlockSuccessToast(i.id, u ?? void 0));
                    }));
            },
            impression: { impressionName: l.ImpressionNames.BLOCK_USER_CONFIRMATION },
            ...x,
            children: (0, e.jsx)(v, { user: i, guildId: d, channelId: u, onBlock: n, onIgnore: a, disallowIgnore: o }),
        })
    );
}
