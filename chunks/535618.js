e.d(n, { default: () => R }), e(388685);
var i = e(951288),
    a = e(647438),
    s = e(120356),
    o = e.n(s),
    r = e(793030),
    l = e(442837),
    c = e(544891),
    u = e(780384),
    d = e(481060),
    f = e(775644),
    x = e(410030),
    p = e(535139),
    m = e(812206),
    g = e(594174),
    C = e(877481),
    h = e(669079),
    I = e(823379),
    T = e(51144),
    E = e(579201),
    S = e(683668),
    j = e(55121),
    v = e(438926),
    y = e(981631),
    N = e(388032),
    A = e(308285),
    _ = e(167969),
    b = e(557256);
function R(t) {
    let { transitionState: n, sku: e, onClose: s, giftCode: o, channelContext: r, customGiftMessage: u } = t,
        [d, x] = a.useState({ state: "LINK" }),
        [p, g] = a.useState(!1),
        C = (0, l.e7)([m.Z], () => m.Z.getApplication(e.applicationId));
    a.useEffect(() => {
        o.redeemed &&
            "LINK" === d.state &&
            x({
                state: "ERROR",
                error: new c.yZ(N.intl.string(N.t.Iw2TUW), y.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [o, d.state]);
    let h = a.useCallback(async () => {
        try {
            g(!0),
                await f.Z.redeemGiftCode({
                    code: o.code,
                    options: { channelId: r },
                }),
                x({ state: "SUCCESS" });
        } catch (t) {
            x({
                state: "ERROR",
                error: t,
            });
        } finally {
            g(!1);
        }
    }, [o, x, r]);
    if (null == C) return null;
    switch (d.state) {
        case "LINK":
            return (0, i.jsx)(k, {
                sku: e,
                application: C,
                transitionState: n,
                onClose: s,
                successStateButtonText: N.intl.string(N.t.go1e4x),
                onSuccessButtonClick: h,
                isSuccessButtonLoading: p,
            });
        case "SUCCESS":
            return (0, i.jsx)(G, {
                transitionState: n,
                application: C,
                sku: e,
                giftCode: o,
                customGiftMessage: u,
                onClose: s,
            });
        case "ERROR":
            return (0, i.jsx)(L, {
                transitionState: n,
                onClose: s,
                error: d.error,
            });
        default:
            (0, I.vE)(d);
    }
}
let L = (t) => {
    let { transitionState: n, onClose: e, error: a } = t,
        s = g.default.getCurrentUser(),
        o = (0, h.QW)(a, s),
        l = (0, x.ZP)(),
        c = (0, u.wj)(l);
    return (0, i.jsxs)(r.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(r.xBx, {
                graphic: {
                    type: "image",
                    src: c ? _ : b,
                },
            }),
            (0, i.jsx)(r.fef, { children: o }),
        ],
    });
};
function k(t) {
    let {
            sku: n,
            application: e,
            transitionState: a,
            onClose: s,
            successStateButtonText: o,
            onSuccessButtonClick: l,
            isSuccessButtonLoading: c,
        } = t,
        { hasAlreadyLinked: u, canStartAuthorization: f, startAuthorization: x, fetched: m } = (0, p.F)(e);
    if (!m)
        return (0, i.jsx)(r.IX, {
            transitionState: a,
            onClose: s,
            children: (0, i.jsx)(r.fef, {
                children: (0, i.jsx)("div", {
                    className: A.loadingContainer,
                    children: (0, i.jsx)(d.$jN, {}),
                }),
            }),
        });
    let g = u
        ? {
              variant: "expressive",
              text: o,
              onClick: l,
              loading: c,
          }
        : {
              variant: "primary",
              text: N.intl.string(N.t["VDAhr+"]),
              onClick: x,
              icon: r.uIJ,
              disabled: !f,
          };
    return (0, i.jsx)(j.M, {
        sku: n,
        application: e,
        transitionState: a,
        onClose: s,
        hasAlreadyLinked: u,
        canStartAuthorization: f,
        primaryCTAButtonProps: g,
        bodyText: N.intl.formatToPlainString(N.t.PaYE38, { applicationName: e.name }),
        title: N.intl.string(N.t["Bn1J+a"]),
    });
}
function G(t) {
    let { transitionState: n, onClose: e, sku: a, application: s, giftCode: c, customGiftMessage: u } = t,
        f = (0, S.a)(s),
        x = (0, E.I)(s),
        p = (0, l.e7)([g.default], () => g.default.getUser(c.userId)),
        m = T.ZP.getName(p);
    if (null == f)
        return (0, i.jsx)(r.IX, {
            transitionState: n,
            onClose: e,
            children: (0, i.jsx)(r.fef, { children: (0, i.jsx)(d.$jN, {}) }),
        });
    let h =
            f && !x
                ? {
                      variant: "primary",
                      text: N.intl.string(N.t["s+J8Dl"]),
                      onClick: () => {
                          C.Z.launchGame(s.id);
                      },
                      icon: r.rgF,
                  }
                : {
                      variant: "primary",
                      text: N.intl.string(N.t.cpT0Cq),
                      onClick: e,
                  },
        I = null != u && "" !== u;
    return (0, i.jsxs)(r.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(v.y, {
                sku: a,
                title: N.intl.formatToPlainString(N.t["6yrIzU"], { sender: m }),
            }),
            (0, i.jsxs)(r.fef, {
                children: [
                    I &&
                        (0, i.jsx)(r.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: A.customGiftMessage,
                            children: u,
                        }),
                    (0, i.jsx)("div", {
                        className: o()({ [A.giftSentToGameNoticeContainerPadding]: I }),
                        children: (0, i.jsx)(r.M14, {
                            type: "success",
                            children: N.intl.formatToPlainString(N.t.W2znvX, {
                                skuName: a.name,
                                applicationName: s.name,
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsx)(r.Go$, {
                actions: [h],
                actionsFullWidth: !0,
            }),
        ],
    });
}
