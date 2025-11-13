e.d(n, { default: () => L }), e(388685);
var a = e(951288),
    i = e(647438),
    s = e(120356),
    o = e.n(s),
    r = e(793030),
    c = e(442837),
    l = e(544891),
    d = e(780384),
    u = e(481060),
    x = e(775644),
    f = e(410030),
    m = e(535139),
    g = e(812206),
    p = e(594174),
    h = e(877481),
    C = e(669079),
    j = e(823379),
    v = e(51144),
    S = e(579201),
    I = e(683668),
    T = e(55121),
    y = e(438926),
    N = e(981631),
    b = e(388032),
    k = e(308285),
    _ = e(167969),
    R = e(557256);
function L(t) {
    let { transitionState: n, sku: e, onClose: s, giftCode: o, channelContext: r, customGiftMessage: d } = t,
        [u, f] = i.useState({ state: "LINK" }),
        [m, p] = i.useState(!1),
        h = (0, c.e7)([g.Z], () => g.Z.getApplication(e.applicationId));
    i.useEffect(() => {
        o.redeemed &&
            "LINK" === u.state &&
            f({
                state: "ERROR",
                error: new l.yZ(b.intl.string(b.t.Iw2TUW), N.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED),
            });
    }, [o, u.state]);
    let C = i.useCallback(async () => {
        try {
            p(!0),
                await x.Z.redeemGiftCode({
                    code: o.code,
                    options: { channelId: r },
                }),
                f({ state: "SUCCESS" });
        } catch (t) {
            f({
                state: "ERROR",
                error: t,
            });
        } finally {
            p(!1);
        }
    }, [o, f, r]);
    if (null == h) return null;
    switch (u.state) {
        case "LINK":
            return (0, a.jsx)(A, {
                sku: e,
                application: h,
                transitionState: n,
                onClose: s,
                successStateButtonText: b.intl.string(b.t.go1e4x),
                onSuccessButtonClick: C,
                isSuccessButtonLoading: m,
            });
        case "SUCCESS":
            return (0, a.jsx)(B, {
                transitionState: n,
                application: h,
                sku: e,
                giftCode: o,
                customGiftMessage: d,
                onClose: s,
            });
        case "ERROR":
            return (0, a.jsx)(E, {
                transitionState: n,
                onClose: s,
                error: u.error,
            });
        default:
            (0, j.vE)(u);
    }
}
let E = (t) => {
    let { transitionState: n, onClose: e, error: i } = t,
        s = p.default.getCurrentUser(),
        o = (0, C.QW)(i, s),
        c = (0, f.ZP)(),
        l = (0, d.wj)(c);
    return (0, a.jsxs)(r.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, a.jsx)(r.xBx, {
                graphic: {
                    type: "image",
                    src: l ? _ : R,
                },
            }),
            (0, a.jsx)(r.fef, { children: o }),
        ],
    });
};
function A(t) {
    let {
            sku: n,
            application: e,
            transitionState: i,
            onClose: s,
            successStateButtonText: o,
            onSuccessButtonClick: c,
            isSuccessButtonLoading: l,
        } = t,
        { hasAlreadyLinked: d, canStartAuthorization: x, startAuthorization: f, fetched: g } = (0, m.F)(e);
    if (!g)
        return (0, a.jsx)(r.IX, {
            transitionState: i,
            onClose: s,
            children: (0, a.jsx)(r.fef, {
                children: (0, a.jsx)("div", {
                    className: k.loadingContainer,
                    children: (0, a.jsx)(u.$jN, {}),
                }),
            }),
        });
    let p = d
        ? {
              variant: "expressive",
              text: o,
              onClick: c,
              loading: l,
          }
        : {
              variant: "primary",
              text: b.intl.string(b.t["VDAhr+"]),
              onClick: f,
              icon: r.uIJ,
              disabled: !x,
          };
    return (0, a.jsx)(T.M, {
        sku: n,
        application: e,
        transitionState: i,
        onClose: s,
        hasAlreadyLinked: d,
        canStartAuthorization: x,
        primaryCTAButtonProps: p,
        bodyText: b.intl.formatToPlainString(b.t.PaYE38, { applicationName: e.name }),
        title: b.intl.string(b.t["Bn1J+a"]),
    });
}
function B(t) {
    let { transitionState: n, onClose: e, sku: i, application: s, giftCode: l, customGiftMessage: d } = t,
        x = (0, I.a)(s),
        f = (0, S.I)(s),
        m = (0, c.e7)([p.default], () => p.default.getUser(l.userId)),
        g = v.ZP.getName(m);
    if (null == x)
        return (0, a.jsx)(r.IX, {
            transitionState: n,
            onClose: e,
            children: (0, a.jsx)(r.fef, { children: (0, a.jsx)(u.$jN, {}) }),
        });
    let C =
            x && !f
                ? {
                      variant: "primary",
                      text: b.intl.string(b.t["s+J8Dl"]),
                      onClick: () => {
                          h.Z.launchGame(s.id);
                      },
                      icon: r.rgF,
                  }
                : {
                      variant: "primary",
                      text: b.intl.string(b.t.cpT0Cq),
                      onClick: e,
                  },
        j = null != d && "" !== d;
    return (0, a.jsxs)(r.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, a.jsx)(y.y, {
                sku: i,
                title: b.intl.formatToPlainString(b.t["6yrIzU"], { sender: g }),
            }),
            (0, a.jsxs)(r.fef, {
                children: [
                    j &&
                        (0, a.jsx)(r.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            className: k.customGiftMessage,
                            children: d,
                        }),
                    (0, a.jsx)("div", {
                        className: o()({ [k.giftSentToGameNoticeContainerPadding]: j }),
                        children: (0, a.jsx)(r.M14, {
                            type: "success",
                            children: b.intl.formatToPlainString(b.t.W2znvX, {
                                skuName: i.name,
                                applicationName: s.name,
                            }),
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(r.Go$, {
                actions: [C],
                actionsFullWidth: !0,
            }),
        ],
    });
}
