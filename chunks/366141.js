s.d(e, {
    A: () => j,
}),
    s(896048),
    s(228524);
var i = s(627968),
    n = s(64700),
    a = s(735438),
    l = s(311907),
    r = s(827734),
    c = s(397927),
    o = s(287809),
    d = s(739010),
    u = s(335891),
    m = s(645376),
    x = s(239093),
    h = s(985018),
    g = s(941708);

function j() {
    let t = (0, u.K)(),
        e = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        [s, j] = n.useState(36),
        v = n.useRef({
            [d.PN.ALL_GOOD]: null,
            [d.PN.LIMITED]: null,
            [d.PN.VERY_LIMITED]: null,
            [d.PN.AT_RISK]: null,
            [d.PN.SUSPENDED]: null,
        }),
        N = n.useCallback(() => {
            j(
                Math.max(
                    Math.max(
                        ...Object.values(v.current).map((t) => {
                            var e;
                            return null != (e = null == t ? void 0 : t.getBoundingClientRect().height) ? e : 36;
                        }),
                    ),
                    36,
                ),
            );
        }, []);
    n.useEffect(() => {
        N();
        let t = (0, a.debounce)(N, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [N]);
    let f = {
            [d.PN.ALL_GOOD]: {
                title: h.t.uaKrRi,
                description: h.intl.format(h.t.pEdBD4, {
                    termsOfService: x.d$.TOS_LINK,
                    communityGuidelines: x.d$.COMMUNITY_GUIDELINES,
                }),
                status: h.t["/Idfao"],
                Icon: c.yr3,
                color: r.A.colors.STATUS_POSITIVE,
            },
            [d.PN.LIMITED]: {
                title: h.t.epkcmS,
                description: h.intl.string(h.t["774juc"]),
                status: h.t.umleq4,
                Icon: c.EpV,
                color: r.A.colors.STATUS_WARNING,
            },
            [d.PN.VERY_LIMITED]: {
                title: h.t.crzE2X,
                description: h.intl.string(h.t["T/Ufh9"]),
                status: h.t.WBtMHf,
                Icon: c.EpV,
                color: r.A.unsafe_rawColors.ORANGE_345,
            },
            [d.PN.AT_RISK]: {
                title: h.t.XRNVzO,
                description: h.intl.string(h.t["hbH+9S"]),
                status: h.t["7f+4Lg"],
                Icon: c.EpV,
                color: r.A.colors.ICON_FEEDBACK_CRITICAL,
            },
            [d.PN.SUSPENDED]: {
                title: h.t.MExFkz,
                description: h.intl.string(h.t["2liUvt"]),
                status: h.t["0OONGB"],
                Icon: c.aXh,
                color: r.A.colors.ICON_MUTED,
            },
        },
        { title: p, description: E, color: b, Icon: O } = f[t.state],
        T = Object.keys(f).length;
    return (0, i.jsxs)(c.ZpM, {
        className: g.kL,
        outline: !1,
        children: [
            (0, i.jsx)("div", {
                className: g.ME,
                children: (0, i.jsx)(m.A, {
                    user: e,
                    size: c._3J.SIZE_80,
                }),
            }),
            (0, i.jsxs)("div", {
                className: g.h5,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.DD,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: h.intl.format(p, {
                                    hook: (t) =>
                                        (0, i.jsx)(c.Text, {
                                            style: {
                                                color: b.css,
                                            },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, i.jsx)(c.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: E,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: g.vK,
                        style: {
                            height: s,
                        },
                        children: [
                            (0, i.jsx)("div", {
                                className: g.n8,
                            }),
                            Object.entries(f).map((e, s) => {
                                let [n, a] = e,
                                    l = parseInt(n) === t.state;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: g.Kx,
                                        ref: (t) => {
                                            v.current[parseInt(n)] = t;
                                        },
                                        children: [
                                            l
                                                ? (0, i.jsx)(O, {
                                                      className: g.xL,
                                                      color: a.color,
                                                  })
                                                : (0, i.jsx)("div", {
                                                      className: g.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === T - 1 ? -6 : 0,
                                                      },
                                                      children: (0, i.jsx)("div", {
                                                          className: g.Ie,
                                                      }),
                                                  }),
                                            h.intl.format(a.status, {
                                                hook: (t) =>
                                                    (0, i.jsx)(c.Text, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: g.Rh,
                                                        children: t,
                                                    }),
                                            }),
                                        ],
                                    },
                                    s,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
