let n, s;
a.d(t, { A: () => h });
var i = a(627968),
    l = a(64700),
    r = a(421380),
    o = a(397927),
    c = a(846293),
    _ = a(198982),
    d = a(235986),
    u = a(780964),
    m = a(840065),
    p = a(4274),
    f = a(652215),
    E = a(985018),
    A = a(988763);
let N =
    ((n = window.GLOBAL_ENV.INVITE_HOST),
    (s = ""),
    null == n && ((n = location.host), (s = f.BVt.INVITE(""))),
    `${location.protocol}//${n}${s}/`);
function h(e) {
    let { onBack: t, onComplete: a, onConnect: n, isSlideReady: s } = e,
        [f, h] = l.useState(""),
        [b, x] = l.useState(!1),
        [T, C] = l.useState(null),
        j = l.useRef(null);
    l.useEffect(() => {
        s && j.current?.focus();
    }, [s]);
    let D = l.useCallback(
        (e) => {
            e.preventDefault();
            let t = f.trim();
            if ("" === t) return void C(E.intl.string(E.t.IRq5ah));
            C(null), x(!0);
            let n = t.split("/"),
                s = n[n.length - 1];
            c.Ay.resolveInvite(s, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((x(!1), null == t)) return void C(E.intl.string(E.t["GEYI+Z"]));
                    if (null != t.channel) {
                        let e = c.Ay.getInviteContext("Join Guild", t);
                        c.Ay.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                a(), c.Ay.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof _.Wl || e instanceof _.LG ? C((0, p.s)(e.code)) : C(E.intl.string(E.t.dDZRdy));
                        });
                    }
                },
                (e) => {
                    x(!1);
                    let t = new _.Wl(e);
                    C((0, p.s)(t.code));
                },
            );
        },
        [f, x, C, a],
    );
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.rQ0, {
                    "data-migration-pending": !0,
                    className: A.wx,
                    direction: d.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: "heading-xl/bold",
                            color: "text-strong",
                            className: A.DD,
                            children: E.intl.string(E.t.riOUtB),
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: E.intl.string(E.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(o.$mQ, {
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: D,
                            className: A.$j,
                            children: (0, i.jsx)(o.ksK, {
                                label: E.intl.string(E.t.qreV25),
                                error: T,
                                value: f,
                                onChange: h,
                                inputRef: j,
                            }),
                        }),
                        (0, i.jsx)(o.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: E.intl.format(E.t.lHTZl2, { examples: `${N}wumpus-friends, hTKzmak` }),
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: A.LR,
                            children: E.intl.format(E.t["8F/who"], {
                                onClick: () => {
                                    n(), (0, m.openUserSettings)(u.X.CONNECTIONS_PANEL);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Button, {
                    variant: "primary",
                    text: E.intl.string(E.t.VJlc0S),
                    onClick: D,
                    disabled: 0 === f.length,
                    loading: b,
                }),
                (0, i.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: A.__invalid_skipButton,
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.MIN,
                    onClick: t,
                    children: E.intl.string(E.t["13/7kX"]),
                }),
            ],
        }),
    };
}
