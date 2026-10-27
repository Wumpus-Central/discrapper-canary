n.d(t, { Wt: () => s.Wt, Lf: () => i.L, LH: () => s.LH, PL: () => f });
var i = n(264646),
    s = n(464192),
    r = n(477900),
    l = n(582128);
if (588245 != n.j) var a = n(43105);
var o = n(379257),
    c = n(306537),
    d = n(36149),
    u = n(780964),
    h = n(766075),
    C = n(975571),
    A = n(666113),
    g = n(652215),
    E = n(49999),
    p = n(680091),
    _ = n(105292);
function f(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, d.yM)(),
        s = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), o.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.TINY_BRONCO_POPOVER }));
        }, [t]),
        f = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), o.A.openUrl(C.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE)));
        }, [t]),
        m = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), (0, h.openUserSettings)(u.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        T = l.useCallback(() => {
            t(E.i.USER_DISMISS);
        }, [t]),
        v = i ? _.intl.string(p.default.f7c7qE) : _.intl.string(p.default.jssaTD),
        N = i
            ? { text: _.intl.string(p.default.ZzcLhc), onClick: s, external: !1 }
            : { text: _.intl.string(p.default["Bp/1dq"]), link: A.m5, external: !0 },
        x = i
            ? { text: _.intl.string(p.default["+7NlgO"]), variant: "primary", onClick: f }
            : { text: _.intl.string(p.default.jjpcno), variant: "primary", onClick: m };
    return (0, r.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: T,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/ddff1a600b2b202b.svg", aspectRatio: "6/4" },
        title: _.intl.string(p.default.GdTVPF),
        body: v,
        textLink: N,
        actions: [x],
    });
}
