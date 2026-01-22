let n, l;
a.d(t, {
    A: () => h,
}),
    a(896048),
    a(733351),
    a(747238);
var i = a(627968),
    s = a(64700),
    r = a(421380),
    c = a(397927),
    o = a(846293),
    d = a(198982),
    u = a(235986),
    f = a(780964),
    b = a(840065),
    _ = a(4274),
    m = a(652215),
    p = a(985018),
    E = a(988763);
let N =
    ((n = window.GLOBAL_ENV.INVITE_HOST),
    (l = ""),
    null == n && ((n = location.host), (l = m.BVt.INVITE(""))),
    "".concat(location.protocol, "//").concat(n).concat(l, "/"));

function h(e) {
    let { onBack: t, onComplete: a, onConnect: n, isSlideReady: l } = e,
        [h, x] = s.useState(""),
        [A, T] = s.useState(!1),
        [y, j] = s.useState(null),
        O = s.useRef(null);
    s.useEffect(() => {
        var e;
        l && (null == (e = O.current) || e.focus());
    }, [l]);
    let g = s.useCallback(
        (e) => {
            e.preventDefault();
            let t = h.trim();
            if ("" === t) return void j(p.intl.string(p.t.IRq5ah));
            j(null), T(!0);
            let n = t.split("/"),
                l = n[n.length - 1];
            o.Ay.resolveInvite(l, "Join Guild", {
                inputValue: t,
            }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((T(!1), null == t)) return void j(p.intl.string(p.t["GEYI+Z"]));
                    if (null != t.channel) {
                        let e = o.Ay.getInviteContext("Join Guild", t);
                        o.Ay.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                a(), o.Ay.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof d.Wl || e instanceof d.LG ? j((0, _.s)(e.code)) : j(p.intl.string(p.t.dDZRdy));
                        });
                    }
                },
                (e) => {
                    T(!1);
                    let t = new d.Wl(e);
                    j((0, _.s)(t.code));
                },
            );
        },
        [h, T, j, a],
    );
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.rQ0, {
                    "data-migration-pending": !0,
                    className: E.wx,
                    direction: u.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-xl/bold",
                            color: "text-strong",
                            className: E.DD,
                            children: p.intl.string(p.t.riOUtB),
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: p.intl.string(p.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(c.$mQ, {
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: g,
                            className: E.$j,
                            children: (0, i.jsx)(c.ksK, {
                                label: p.intl.string(p.t.qreV25),
                                error: y,
                                value: h,
                                onChange: x,
                                inputRef: O,
                            }),
                        }),
                        (0, i.jsx)(c.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: p.intl.format(p.t.lHTZl2, {
                                examples: "".concat(N).concat("wumpus-friends", ", ").concat("hTKzmak"),
                            }),
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: E.LR,
                            children: p.intl.format(p.t["8F/who"], {
                                onClick: () => {
                                    n(),
                                        (0, b.openUserSettings)(f.X.CONNECTIONS_PANEL, {
                                            section: m.nc_.CONNECTIONS,
                                        });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    variant: "primary",
                    text: p.intl.string(p.t.VJlc0S),
                    onClick: g,
                    disabled: 0 === h.length,
                    loading: A,
                }),
                (0, i.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: E.__invalid_skipButton,
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.MIN,
                    onClick: t,
                    children: p.intl.string(p.t["13/7kX"]),
                }),
            ],
        }),
    };
}
