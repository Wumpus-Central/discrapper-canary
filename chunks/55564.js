i.d(s, { default: () => E });
var e = i(627968),
    n = i(64700),
    a = i(554146),
    c = i(815021),
    r = i(534514),
    l = i(834730),
    d = i(821609),
    o = i(224640),
    m = i(793574),
    g = i(826673),
    h = i(564064),
    x = i(892035),
    N = i(49999),
    u = i(375708),
    b = i(321513);
function E(t) {
    let { onClose: s, ...i } = t,
        E = (0, x.z$)("CollectiblesAnnouncementModal"),
        {
            leftTitle: j,
            leftBody: p,
            rightTitle: v,
            rightBody: C,
        } = (function (t) {
            let { showGiftingMarketing: s, showEaPremiumMarketing: i, showEaNonPremiumMarketing: e } = t,
                n = u.intl.string(u.t.zOtryQ),
                a = u.intl.string(u.t.azn85l);
            return i
                ? {
                      leftTitle: n,
                      leftBody: a,
                      rightTitle: u.intl.string(u.t.oSP2mU),
                      rightBody: u.intl.string(u.t["wEIT/w"]),
                  }
                : e
                  ? {
                        leftTitle: n,
                        leftBody: a,
                        rightTitle: u.intl.string(u.t["y/uSeV"]),
                        rightBody: u.intl.string(u.t.in6xhQ),
                    }
                  : s
                    ? {
                          leftTitle: n,
                          leftBody: a,
                          rightTitle: u.intl.string(u.t.Ky01Mq),
                          rightBody: u.intl.string(u.t.VgVDbe),
                      }
                    : {
                          leftTitle: n,
                          leftBody: a,
                          rightTitle: u.intl.string(u.t["47kRjL"]),
                          rightBody: u.intl.string(u.t.GcXi4M),
                      };
        })(E),
        f = u.intl.string(u.t.W3MtdV),
        M = E.showEaPremiumMarketing
            ? u.intl.string(u.t.RlBdFl)
            : E.showEaNonPremiumMarketing
              ? u.intl.string(u.t.NZe65e)
              : u.intl.string(u.t["v72/pr"]),
        S = n.useRef(!1);
    n.useEffect(
        () => () => {
            S.current || (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: N.i.AUTO_DISMISS });
        },
        [],
    );
    let y = n.useCallback(async () => {
            (S.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: N.i.USER_DISMISS }),
                await s();
        }, [s]),
        L = n.useCallback(async () => {
            (S.current = !0),
                (0, g.Dr)(a.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, { dismissAction: N.i.TAKE_ACTION }),
                (0, h.Cz)({ analyticsLocations: [], analyticsSource: m.A.COLLECTIBLES_SHOP }),
                await s();
        }, [s]);
    return (0, e.jsx)(o.d, {
        ...i,
        onClose: y,
        size: "lg",
        children: (0, e.jsxs)("div", {
            className: b.Qs,
            children: [
                (0, e.jsx)("div", {
                    className: b.Tp,
                    style: {
                        backgroundImage:
                            "url(https://cdn.discordapp.com/assets/content/2b8d1bb8d5327e224dfc61673a13dd19c15d10b259957967f99e218b2fa327dc.jpg)",
                    },
                }),
                (0, e.jsx)("div", {
                    className: b.b,
                    children: (0, e.jsx)(c.J, { onClick: y, variant: "overlay-secondary" }),
                }),
                (0, e.jsxs)("div", {
                    className: b.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: b.gn,
                            children: [
                                (0, e.jsx)(r.D, {
                                    variant: "display-md",
                                    color: "text-strong",
                                    className: b.DD,
                                    children: f,
                                }),
                                (0, e.jsx)(l.E, { variant: "text-sm/medium", color: "text-muted", children: M }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: b.kR,
                            children: [
                                (0, e.jsxs)("div", {
                                    className: b.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/9686f15252ecb5680ebf6ec2bbadb6b0bfc0930ce66ac6c32806a5b03b06239c.png",
                                            alt: "",
                                            className: b.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: b.Mo,
                                            children: [
                                                (0, e.jsx)(r.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: j,
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: p,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, e.jsxs)("div", {
                                    className: b.Nr,
                                    children: [
                                        (0, e.jsx)("img", {
                                            src: "https://cdn.discordapp.com/assets/content/ac2f61afc0a4de0533067bef49b716c95e9b05bba9ec10ffa634c5ed9662a533.png",
                                            alt: "",
                                            className: b.wP,
                                        }),
                                        (0, e.jsxs)("div", {
                                            className: b.Mo,
                                            children: [
                                                (0, e.jsx)(r.D, {
                                                    variant: "heading-md/bold",
                                                    color: "text-strong",
                                                    children: v,
                                                }),
                                                (0, e.jsx)(l.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: C,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, e.jsx)("div", {
                            className: b.UD,
                            children: (0, e.jsx)(d.$, {
                                variant: "primary",
                                text: u.intl.string(u.t.c7U9yf),
                                onClick: L,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
