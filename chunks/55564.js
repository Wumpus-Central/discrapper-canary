i.d(s, { default: () => C });
var e = i(627968),
    n = i(64700),
    c = i(935399),
    a = i(554146),
    r = i(815021),
    l = i(297264),
    d = i(834730),
    o = i(821609),
    m = i(224640),
    g = i(793574),
    h = i(826673),
    E = i(367727),
    N = i(662388),
    x = i(892035),
    u = i(49999),
    b = i(375708),
    j = i(321513);
function C(t) {
    let { onClose: s, ...i } = t,
        C = (0, x.z$)("CollectiblesAnnouncementModal"),
        {
            leftTitle: f,
            leftBody: p,
            rightTitle: v,
            rightBody: M,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: i, showEaNonPremiumMarketing: e } = t,
                n = b.intl.string(b.t.zOtryQ),
                c = b.intl.string(b.t.azn85l);
            return i
                ? {
                      leftTitle: n,
                      leftBody: c,
                      rightTitle: b.intl.string(b.t.oSP2mU),
                      rightBody: b.intl.string(b.t["wEIT/w"]),
                  }
                : e
                  ? {
                        leftTitle: n,
                        leftBody: c,
                        rightTitle: b.intl.string(b.t["y/uSeV"]),
                        rightBody: b.intl.string(b.t.in6xhQ),
                    }
                  : s
                    ? {
                          leftTitle: n,
                          leftBody: c,
                          rightTitle: b.intl.string(b.t.Ky01Mq),
                          rightBody: b.intl.string(b.t.VgVDbe),
                      }
                    : {
                          leftTitle: n,
                          leftBody: c,
                          rightTitle: b.intl.string(b.t["47kRjL"]),
                          rightBody: b.intl.string(b.t.GcXi4M),
                      };
        })(C),
        L = b.intl.string(b.t.W3MtdV),
        T = C.showEaPremiumMarketing
            ? b.intl.string(b.t.RlBdFl)
            : C.showEaNonPremiumMarketing
              ? b.intl.string(b.t.NZe65e)
              : b.intl.string(b.t["v72/pr"]),
        S = n.useRef(!1);
    (0, c.Ay)(() => {
        (0, E.Wx)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT);
    }),
        n.useEffect(
            () => () => {
                S.current ||
                    (0, h.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                        dismissAction: u.i.AUTO_DISMISS,
                        forceTrack: !0,
                    });
            },
            [],
        );
    let y = n.useCallback(async () => {
            (S.current = !0),
                (0, h.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.USER_DISMISS,
                    forceTrack: !0,
                }),
                await s();
        }, [s]),
        _ = n.useCallback(async () => {
            (S.current = !0),
                (0, h.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, {
                    dismissAction: u.i.TAKE_ACTION,
                    forceTrack: !0,
                }),
                (0, N.Cz)({ analyticsLocations: [], analyticsSource: g.A.COLLECTIBLES_SHOP }),
                await s();
        }, [s]);
    return (0, e.jsx)(m.d, {
        ...i,
        onClose: y,
        size: "lg",
        children: (0, e.jsxs)("div", {
            className: j.Qs,
            children: [
                (0, e.jsx)("div", {
                    className: j.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/2b8d1bb8d5327e224dfc61673a13dd19c15d10b259957967f99e218b2fa327dc.jpg)",
                    },
                }),
                (0, e.jsx)("div", {
                    className: j.b,
                    children: (0, e.jsx)(r.J, { onClick: y, variant: "overlay-secondary" }),
                }),
                (0, e.jsxs)("div", {
                    className: j.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: j.gn,
                            children: [
                                (0, e.jsx)(l.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: j.DD,
                                    children: L,
                                }),
                                (0, e.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: T }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: j.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/9686f15252ecb5680ebf6ec2bbadb6b0bfc0930ce66ac6c32806a5b03b06239c.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, e.jsx)(l.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: f,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsxs)("div", {
                                    className: j.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ac2f61afc0a4de0533067bef49b716c95e9b05bba9ec10ffa634c5ed9662a533.png",
                                            alt: "",
                                            className: j.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: j.Mo,
                                            children: [
                                                (0, e.jsx)(l.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: v,
                                                }),
                                                (0, e.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: M,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, e.jsx)("div", {
                            className: j.UD,
                            children: (0, e.jsx)(o.$, {
                                variant: "primary",
                                text: b.intl.string(b.t.c7U9yf),
                                onClick: _,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
