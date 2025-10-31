e.d(n, { default: () => _ }), e(388685);
var i = e(951288),
    a = e(647438),
    s = e(120356),
    o = e.n(s),
    r = e(793030),
    l = e(442837),
    c = e(780384),
    u = e(481060),
    d = e(775644),
    x = e(410030),
    f = e(535139),
    p = e(812206),
    m = e(594174),
    g = e(877481),
    C = e(669079),
    h = e(823379),
    j = e(51144),
    S = e(579201),
    T = e(683668),
    I = e(55121),
    v = e(438926),
    E = e(388032),
    y = e(308285),
    A = e(167969),
    N = e(557256);
function _(t) {
    let { transitionState: n, sku: e, onClose: s, giftCode: o, channelContext: r, customGiftMessage: c } = t,
        [u, x] = a.useState({ state: "LINK" }),
        [f, m] = a.useState(!1),
        g = (0, l.e7)([p.Z], () => p.Z.getApplication(e.applicationId)),
        C = a.useCallback(async () => {
            try {
                m(!0),
                    await d.Z.redeemGiftCode({
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
                m(!1);
            }
        }, [o, x, r]);
    if (null == g) return null;
    switch (u.state) {
        case "LINK":
            return (0, i.jsx)(k, {
                sku: e,
                application: g,
                transitionState: n,
                onClose: s,
                successStateButtonText: E.intl.string(E.t.go1e4x),
                onSuccessButtonClick: C,
                isSuccessButtonLoading: f,
            });
        case "SUCCESS":
            return (0, i.jsx)(R, {
                transitionState: n,
                application: g,
                sku: e,
                giftCode: o,
                customGiftMessage: c,
                onClose: s,
            });
        case "ERROR":
            return (0, i.jsx)(b, {
                transitionState: n,
                onClose: s,
                error: u.error,
            });
        default:
            (0, h.vE)(u);
    }
}
let b = (t) => {
    let { transitionState: n, onClose: e, error: a } = t,
        s = m.default.getCurrentUser(),
        o = (0, C.QW)(a, s),
        l = (0, x.ZP)(),
        u = (0, c.wj)(l);
    return (0, i.jsxs)(r.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(r.xBx, {
                graphic: {
                    type: "image",
                    src: u ? A : N,
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
        { hasAlreadyLinked: d, canStartAuthorization: x, startAuthorization: p, fetched: m } = (0, f.F)(e);
    if (!m)
        return (0, i.jsx)(r.IX, {
            transitionState: a,
            onClose: s,
            children: (0, i.jsx)(r.fef, {
                children: (0, i.jsx)("div", {
                    className: y.loadingContainer,
                    children: (0, i.jsx)(u.$jN, {}),
                }),
            }),
        });
    let g = d
        ? {
              variant: "expressive",
              text: o,
              onClick: l,
              loading: c,
          }
        : {
              variant: "primary",
              text: E.intl.string(E.t["VDAhr+"]),
              onClick: p,
              icon: r.uIJ,
              disabled: !x,
          };
    return (0, i.jsx)(I.M, {
        sku: n,
        application: e,
        transitionState: a,
        onClose: s,
        hasAlreadyLinked: d,
        canStartAuthorization: x,
        primaryCTAButtonProps: g,
        bodyText: E.intl.formatToPlainString(E.t.PaYE38, { applicationName: e.name }),
        title: E.intl.string(E.t["Bn1J+a"]),
    });
}
function R(t) {
    let { transitionState: n, onClose: e, sku: a, application: s, giftCode: c, customGiftMessage: d } = t,
        x = (0, T.a)(s),
        f = (0, S.I)(s),
        p = (0, l.e7)([m.default], () => m.default.getUser(c.userId)),
        C = j.ZP.getName(p);
    if (null == x)
        return (0, i.jsx)(r.IX, {
            transitionState: n,
            onClose: e,
            children: (0, i.jsx)(r.fef, { children: (0, i.jsx)(u.$jN, {}) }),
        });
    let h =
            x && !f
                ? {
                      variant: "primary",
                      text: E.intl.string(E.t["s+J8Dl"]),
                      onClick: () => {
                          g.Z.launchGame(s.id);
                      },
                      icon: r.rgF,
                  }
                : {
                      variant: "primary",
                      text: E.intl.string(E.t.cpT0Cq),
                      onClick: e,
                  },
        I = null != d && "" !== d;
    return (0, i.jsxs)(r.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(v.y, {
                sku: a,
                title: E.intl.formatToPlainString(E.t["6yrIzU"], { sender: C }),
            }),
            (0, i.jsxs)(r.fef, {
                children: [
                    I &&
                        (0, i.jsx)(r.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: y.customGiftMessage,
                            children: d,
                        }),
                    (0, i.jsx)("div", {
                        className: o()({ [y.giftSentToGameNoticeContainerPadding]: I }),
                        children: (0, i.jsx)(r.M14, {
                            type: "success",
                            children: E.intl.formatToPlainString(E.t.W2znvX, {
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
