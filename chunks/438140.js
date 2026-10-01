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
    E = n(975571),
    h = n(666113),
    C = n(652215),
    _ = n(49999),
    g = n(680091),
    I = n(375708);
function T(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, c.yM)(),
        l = s.useCallback(() => {
            (t(_.i.TAKE_ACTION), o.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.TINY_BRONCO_POPOVER }));
        }, [t]),
        T = s.useCallback(() => {
            (t(_.i.TAKE_ACTION), o.A.openUrl(E.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)));
        }, [t]),
        p = s.useCallback(() => {
            (t(_.i.TAKE_ACTION), (0, A.openUserSettings)(u.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        N = s.useCallback(() => {
            t(_.i.USER_DISMISS);
        }, [t]),
        S = i ? I.intl.string(g.default.f7c7qE) : I.intl.string(g.default.jssaTD),
        O = i
            ? { text: I.intl.string(g.default.ZzcLhc), onClick: l, external: !1 }
            : { text: I.intl.string(g.default["Bp/1dq"]), link: h.m5, external: !0 },
        f = i
            ? { text: I.intl.string(g.default["+7NlgO"]), variant: "primary", onClick: T }
            : { text: I.intl.string(g.default.jjpcno), variant: "primary", onClick: p };
    return (0, r.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: N,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/ddff1a600b2b202b.svg", aspectRatio: "6/4" },
        title: I.intl.string(g.default.GdTVPF),
        body: S,
        textLink: O,
        actions: [f],
    });
}
