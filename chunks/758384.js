let n, s;
a.d(t, { A: () => D });
var i = a(627968),
    l = a(64700),
    r = a(862482),
    o = a(935462),
    c = a(534514),
    _ = a(834730),
    d = a(292666),
    u = a(821609),
    m = a(846293),
    p = a(198982),
    f = a(235986),
    E = a(780964),
    A = a(858897),
    h = a(4274),
    N = a(652215),
    b = a(985018),
    x = a(488020);
let T =
    ((n = window.GLOBAL_ENV.INVITE_HOST),
    (s = ""),
    null == n && ((n = location.host), (s = N.BVt.INVITE(""))),
    `${location.protocol}//${n}${s}/`);
function D(e) {
    let { onBack: t, onComplete: a, onConnect: n, isSlideReady: s } = e,
        [N, D] = l.useState(""),
        [j, C] = l.useState(!1),
        [I, g] = l.useState(null),
        y = l.useRef(null);
    l.useEffect(() => {
        s && y.current?.focus();
    }, [s]);
    let G = l.useCallback(
        (e) => {
            e.preventDefault();
            let t = N.trim();
            if ("" === t) return void g(b.intl.string(b.t.IRq5ah));
            g(null), C(!0);
            let n = t.split("/"),
                s = n[n.length - 1];
            m.Ay.resolveInvite(s, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((C(!1), null == t)) return void g(b.intl.string(b.t["GEYI+Z"]));
                    if (null != t.channel) {
                        let e = m.Ay.getInviteContext("Join Guild", t);
                        m.Ay.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                a(), m.Ay.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof p.Wl || e instanceof p.LG ? g((0, h.s)(e.code)) : g(b.intl.string(b.t.dDZRdy));
                        });
                    }
                },
                (e) => {
                    C(!1);
                    let t = new p.Wl(e);
                    g((0, h.s)(t.code));
                },
            );
        },
        [N, C, g, a],
    );
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.rQ, {
                    "data-migration-pending": !0,
                    className: x.wx,
                    direction: f.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, i.jsx)(c.D, {
                            variant: "heading-xl/bold",
                            color: "text-strong",
                            className: x.DD,
                            children: b.intl.string(b.t.riOUtB),
                        }),
                        (0, i.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: b.intl.string(b.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(o.$m, {
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: G,
                            className: x.$j,
                            children: (0, i.jsx)(d.k, {
                                label: b.intl.string(b.t.qreV25),
                                error: I,
                                value: N,
                                onChange: D,
                                inputRef: y,
                            }),
                        }),
                        (0, i.jsx)(_.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: b.intl.format(b.t.lHTZl2, { examples: `${T}wumpus-friends, hTKzmak` }),
                        }),
                        (0, i.jsx)(_.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: x.LR,
                            children: b.intl.format(b.t["8F/who"], {
                                onClick: () => {
                                    n(), (0, A.openUserSettings)(E.X.CONNECTIONS_PANEL);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.$, {
                    variant: "primary",
                    text: b.intl.string(b.t.VJlc0S),
                    onClick: G,
                    disabled: 0 === N.length,
                    loading: j,
                }),
                (0, i.jsx)(r.$n, {
                    "data-migration-pending": !0,
                    className: x.__invalid_skipButton,
                    look: r.$n.Looks.BLANK,
                    size: r.$n.Sizes.MIN,
                    onClick: t,
                    children: b.intl.string(b.t["13/7kX"]),
                }),
            ],
        }),
    };
}
