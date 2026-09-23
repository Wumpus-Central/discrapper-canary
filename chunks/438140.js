n.d(t, { Wt: () => l.Wt, Lf: () => i.L, LH: () => l.LH, PL: () => T });
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
    h = n(975571),
    E = n(666113),
    g = n(652215),
    C = n(49999),
    _ = n(680091),
    I = n(375708);
function T(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, c.yM)(),
        l = s.useCallback(() => {
            (t(C.i.TAKE_ACTION), o.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.TINY_BRONCO_POPOVER }));
        }, [t]),
        T = s.useCallback(() => {
            (t(C.i.TAKE_ACTION), o.A.openUrl(h.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE)));
        }, [t]),
        p = s.useCallback(() => {
            (t(C.i.TAKE_ACTION), (0, A.openUserSettings)(u.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        N = s.useCallback(() => {
            t(C.i.USER_DISMISS);
        }, [t]),
        S = i ? I.intl.string(_.default.f7c7qE) : I.intl.string(_.default.jssaTD),
        f = i
            ? { text: I.intl.string(_.default.ZzcLhc), onClick: l, external: !1 }
            : { text: I.intl.string(_.default["Bp/1dq"]), link: E.m5, external: !0 },
        m = i
            ? { text: I.intl.string(_.default["+7NlgO"]), variant: "primary", onClick: T }
            : { text: I.intl.string(_.default.jjpcno), variant: "primary", onClick: p };
    return (0, r.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: N,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/ddff1a600b2b202b.svg", aspectRatio: "6/4" },
        title: I.intl.string(_.default.GdTVPF),
        body: S,
        textLink: f,
        actions: [m],
    });
}
