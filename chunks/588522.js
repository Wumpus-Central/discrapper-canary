s.d(e, { A: () => N });
var i = s(627968),
    a = s(64700),
    l = s(735438),
    n = s(311907),
    r = s(827734),
    c = s(397927),
    d = s(287809),
    o = s(739010),
    m = s(335891),
    x = s(645376),
    h = s(239093),
    u = s(985018),
    g = s(18861);
function N() {
    let t = (0, m.K)(),
        e = (0, n.bG)([d.default], () => d.default.getCurrentUser()),
        [s, N] = a.useState(36),
        j = a.useRef({
            [o.PN.ALL_GOOD]: null,
            [o.PN.LIMITED]: null,
            [o.PN.VERY_LIMITED]: null,
            [o.PN.AT_RISK]: null,
            [o.PN.SUSPENDED]: null,
        }),
        v = a.useCallback(() => {
            N(Math.max(Math.max(...Object.values(j.current).map((t) => t?.getBoundingClientRect().height ?? 36)), 36));
        }, []);
    a.useEffect(() => {
        v();
        let t = (0, l.debounce)(v, 100);
        return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
    }, [v]);
    let f = {
            [o.PN.ALL_GOOD]: {
                title: u.t.uaKrRi,
                description: u.intl.format(u.t.pEdBD4, {
                    termsOfService: h.d$.TOS_LINK,
                    communityGuidelines: h.d$.COMMUNITY_GUIDELINES,
                }),
                status: u.t["/Idfao"],
                Icon: c.yr3,
                color: r.A.colors.STATUS_POSITIVE,
            },
            [o.PN.LIMITED]: {
                title: u.t.epkcmS,
                description: u.intl.string(u.t["774juc"]),
                status: u.t.umleq4,
                Icon: c.EpV,
                color: r.A.colors.STATUS_WARNING,
            },
            [o.PN.VERY_LIMITED]: {
                title: u.t.crzE2X,
                description: u.intl.string(u.t["T/Ufh9"]),
                status: u.t.WBtMHf,
                Icon: c.EpV,
                color: r.A.unsafe_rawColors.ORANGE_345,
            },
            [o.PN.AT_RISK]: {
                title: u.t.XRNVzO,
                description: u.intl.string(u.t["hbH+9S"]),
                status: u.t["7f+4Lg"],
                Icon: c.EpV,
                color: r.A.colors.ICON_FEEDBACK_CRITICAL,
            },
            [o.PN.SUSPENDED]: {
                title: u.t.MExFkz,
                description: u.intl.string(u.t["2liUvt"]),
                status: u.t["0OONGB"],
                Icon: c.aXh,
                color: r.A.colors.ICON_MUTED,
            },
        },
        { title: E, description: T, color: p, Icon: A } = f[t.state],
        _ = Object.keys(f).length;
    return (0, i.jsxs)(c.ZpM, {
        className: g.kL,
        outline: !1,
        children: [
            (0, i.jsx)("div", { className: g.ME, children: (0, i.jsx)(x.A, { user: e, size: c._3J.SIZE_80 }) }),
            (0, i.jsxs)("div", {
                className: g.h5,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.DD,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: u.intl.format(E, {
                                    hook: (t) =>
                                        (0, i.jsx)(c.Text, {
                                            style: { color: p.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: t,
                                        }),
                                }),
                            }),
                            (0, i.jsx)(c.Text, { color: "text-default", variant: "text-sm/normal", children: T }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: g.vK,
                        style: { height: s },
                        children: [
                            (0, i.jsx)("div", { className: g.n8 }),
                            Object.entries(f).map((e, s) => {
                                let [a, l] = e,
                                    n = parseInt(a) === t.state;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: g.Kx,
                                        ref: (t) => {
                                            j.current[parseInt(a)] = t;
                                        },
                                        children: [
                                            n
                                                ? (0, i.jsx)(A, { className: g.xL, color: l.color })
                                                : (0, i.jsx)("div", {
                                                      className: g.xL,
                                                      style: {
                                                          marginLeft: 0 === s ? -6 : 0,
                                                          marginRight: s === _ - 1 ? -6 : 0,
                                                      },
                                                      children: (0, i.jsx)("div", { className: g.Ie }),
                                                  }),
                                            u.intl.format(l.status, {
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
