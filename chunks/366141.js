n.d(t, {
    A: () => g,
}),
    n(896048),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(311907),
    o = n(827734),
    l = n(397927),
    c = n(287809),
    u = n(739010),
    d = n(335891),
    f = n(645376),
    p = n(239093),
    _ = n(985018),
    h = n(941708);
let m = 36;

function g() {
    let e = (0, d.K)(),
        t = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        [n, g] = i.useState(m),
        E = i.useRef({
            [u.PN.ALL_GOOD]: null,
            [u.PN.LIMITED]: null,
            [u.PN.VERY_LIMITED]: null,
            [u.PN.AT_RISK]: null,
            [u.PN.SUSPENDED]: null,
        }),
        b = i.useCallback(() => {
            g(
                Math.max(
                    Math.max(
                        ...Object.values(E.current).map((e) => {
                            var t;
                            return null != (t = null == e ? void 0 : e.getBoundingClientRect().height) ? t : m;
                        }),
                    ),
                    m,
                ),
            );
        }, []);
    i.useEffect(() => {
        b();
        let e = (0, a.debounce)(b, 100);
        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [b]);
    let y = {
            [u.PN.ALL_GOOD]: {
                title: _.t.uaKrRi,
                description: _.intl.format(_.t.pEdBD4, {
                    termsOfService: p.d$.TOS_LINK,
                    communityGuidelines: p.d$.COMMUNITY_GUIDELINES,
                }),
                status: _.t["/Idfao"],
                Icon: l.yr3,
                color: o.A.colors.STATUS_POSITIVE,
            },
            [u.PN.LIMITED]: {
                title: _.t.epkcmS,
                description: _.intl.string(_.t["774juc"]),
                status: _.t.umleq4,
                Icon: l.EpV,
                color: o.A.colors.STATUS_WARNING,
            },
            [u.PN.VERY_LIMITED]: {
                title: _.t.crzE2X,
                description: _.intl.string(_.t["T/Ufh9"]),
                status: _.t.WBtMHf,
                Icon: l.EpV,
                color: o.A.unsafe_rawColors.ORANGE_345,
            },
            [u.PN.AT_RISK]: {
                title: _.t.XRNVzO,
                description: _.intl.string(_.t["hbH+9S"]),
                status: _.t["7f+4Lg"],
                Icon: l.EpV,
                color: o.A.colors.ICON_FEEDBACK_CRITICAL,
            },
            [u.PN.SUSPENDED]: {
                title: _.t.MExFkz,
                description: _.intl.string(_.t["2liUvt"]),
                status: _.t["0OONGB"],
                Icon: l.aXh,
                color: o.A.colors.ICON_MUTED,
            },
        },
        { title: O, description: A, color: v, Icon: S } = y[e.state],
        I = Object.keys(y).length;
    return (0, r.jsxs)(l.ZpM, {
        className: h.kL,
        outline: !1,
        children: [
            (0, r.jsx)("div", {
                className: h.ME,
                children: (0, r.jsx)(f.A, {
                    user: t,
                    size: l._3J.SIZE_80,
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.h5,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.DD,
                        children: [
                            (0, r.jsx)(l.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: _.intl.format(O, {
                                    hook: (e) =>
                                        (0, r.jsx)(l.Text, {
                                            style: {
                                                color: v.css,
                                            },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: e,
                                        }),
                                }),
                            }),
                            (0, r.jsx)(l.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: A,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: h.vK,
                        style: {
                            height: n,
                        },
                        children: [
                            (0, r.jsx)("div", {
                                className: h.n8,
                            }),
                            Object.entries(y).map((t, n) => {
                                let [i, a] = t,
                                    s = parseInt(i) === e.state;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        className: h.Kx,
                                        ref: (e) => {
                                            E.current[parseInt(i)] = e;
                                        },
                                        children: [
                                            s
                                                ? (0, r.jsx)(S, {
                                                      className: h.xL,
                                                      color: a.color,
                                                  })
                                                : (0, r.jsx)("div", {
                                                      className: h.xL,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === I - 1 ? -6 : 0,
                                                      },
                                                      children: (0, r.jsx)("div", {
                                                          className: h.Ie,
                                                      }),
                                                  }),
                                            _.intl.format(a.status, {
                                                hook: (e) =>
                                                    (0, r.jsx)(l.Text, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: h.Rh,
                                                        children: e,
                                                    }),
                                            }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
