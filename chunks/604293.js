n.d(t, { Wt: () => s.Wt, Lf: () => i.L, LH: () => s.LH, PL: () => m });
var i = n(275536),
    s = n(833514),
    r = n(477900),
    l = n(582128);
if (588245 != n.j) var a = n(43105);
var o = n(379257),
    c = n(306537),
    d = n(36149),
    u = n(780964),
    h = n(766075),
    C = n(975571),
    A = n(732519),
    g = n(652215),
    E = n(49999),
    p = n(834244),
    _ = n(105292);
function m(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
        i = (0, d.yM)(),
        s = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), o.A.showAgeVerificationGetStartedModal({ entryPoint: c.q1.TINY_BRONCO_POPOVER }));
        }, [t]),
        m = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), o.A.openUrl(C.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE)));
        }, [t]),
        f = l.useCallback(() => {
            (t(E.i.TAKE_ACTION), (0, h.openUserSettings)(u.X.ACCOUNT_STANDING_CATEGORY));
        }, [t]),
        T = l.useCallback(() => {
            t(E.i.USER_DISMISS);
        }, [t]),
        v = i ? _.intl.string(p.default.f7c7qE) : _.intl.string(p.default.jssaTD),
        N = i
            ? { text: _.intl.string(p.default.ZzcLhc), onClick: s, external: !1 }
            : { text: _.intl.string(p.default["Bp/1dq"]), link: A.M1, external: !0 },
        x = i
            ? { text: _.intl.string(p.default["+7NlgO"]), variant: "primary", onClick: m }
            : { text: _.intl.string(p.default.jjpcno), variant: "primary", onClick: f };
    return (0, r.jsx)(a.A, {
        targetElementRef: n,
        shouldShow: !0,
        onRequestClose: T,
        position: "top",
        caretConfig: { align: "end" },
        size: "md",
        graphic: { type: "image", src: "/assets/397709a27ee3c251.svg", aspectRatio: "6/4" },
        title: _.intl.string(p.default.GdTVPF),
        body: v,
        textLink: N,
        actions: [x],
    });
}
