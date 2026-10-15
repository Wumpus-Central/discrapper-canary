n.d(t, { Wt: () => l.Wt, Lf: () => i.L, LH: () => l.LH, PL: () => I });
var i = n(264646),
    l = n(464192),
    r = n(477900),
    s = n(582128);
if (588245 != n.j) var a = n(43105);
var o = n(379257),
    d = n(306537),
    c = n(36149),
    u = n(780964),
    A = n(766075),
    E = n(975571),
    h = n(666113),
    C = n(652215),
    _ = n(49999),
    g = n(680091),
    T = n(105292);
function I(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, c.yM)(),
        l = s.useCallback(() => {
            (t(_.i.TAKE_ACTION), o.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.TINY_BRONCO_POPOVER }));
        }, [t]),
        I = s.useCallback(() => {
            (t(_.i.TAKE_ACTION), o.A.openUrl(E.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)));
        }, [t]),
        p = s.useCallback(() => {
            (t(_.i.TAKE_ACTION), (0, A.openUserSettings)(u.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        N = s.useCallback(() => {
            t(_.i.USER_DISMISS);
        }, [t]),
        S = i ? T.intl.string(g.default.f7c7qE) : T.intl.string(g.default.jssaTD),
        f = i
            ? { text: T.intl.string(g.default.ZzcLhc), onClick: l, external: !1 }
            : { text: T.intl.string(g.default["Bp/1dq"]), link: h.m5, external: !0 },
        O = i
            ? { text: T.intl.string(g.default["+7NlgO"]), variant: "primary", onClick: I }
            : { text: T.intl.string(g.default.jjpcno), variant: "primary", onClick: p };
    return (0, r.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: N,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/ddff1a600b2b202b.svg", aspectRatio: "6/4" },
        title: T.intl.string(g.default.GdTVPF),
        body: S,
        textLink: f,
        actions: [O],
    });
}
