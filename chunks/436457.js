let a, o;
n.d(t, { Z: () => N }), n(388685), n(781311), n(35282);
var i = n(54381),
    s = n(473749),
    r = n(755721),
    l = n(481060),
    c = n(447543),
    d = n(881052),
    u = n(600164),
    f = n(313789),
    p = n(518596),
    b = n(782605),
    m = n(981631),
    _ = n(388032),
    h = n(388657);
let E =
    ((a = window.GLOBAL_ENV.INVITE_HOST),
    (o = ""),
    null == a && ((a = location.host), (o = m.Z5c.INVITE(""))),
    "".concat(location.protocol, "//").concat(a).concat(o, "/"));
function N(e) {
    let { onBack: t, onComplete: n, onConnect: a, isSlideReady: o } = e,
        [N, x] = s.useState(""),
        [A, T] = s.useState(!1),
        [C, g] = s.useState(null),
        j = s.useRef(null);
    s.useEffect(() => {
        var e;
        o && (null == (e = j.current) || e.focus());
    }, [o]);
    let O = s.useCallback(
        (e) => {
            e.preventDefault();
            let t = N.trim();
            if ("" === t) return void g(_.intl.string(_.t.IRq5ah));
            g(null), T(!0);
            let a = t.split("/"),
                o = a[a.length - 1];
            c.ZP.resolveInvite(o, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((T(!1), null == t)) return void g(_.intl.string(_.t["GEYI+Z"]));
                    if (null != t.channel) {
                        let e = c.ZP.getInviteContext("Join Guild", t);
                        c.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                n(), c.ZP.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof d.yZ || e instanceof d.Hx ? g((0, b.O)(e.code)) : g(_.intl.string(_.t.dDZRdy));
                        });
                    }
                },
                (e) => {
                    T(!1);
                    let t = new d.yZ(e);
                    g((0, b.O)(t.code));
                },
            );
        },
        [N, T, g, n],
    );
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    "data-migration-pending": !0,
                    className: h.header,
                    direction: u.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-xl/bold",
                            color: "text-strong",
                            className: h.title,
                            children: _.intl.string(_.t.riOUtB),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: _.intl.string(_.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(l.hzk, {
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)("form", {
                            onSubmit: O,
                            className: h.inputForm,
                            children: (0, i.jsx)(l.oil, {
                                label: _.intl.string(_.t.qreV25),
                                error: C,
                                value: N,
                                onChange: x,
                                inputRef: j,
                            }),
                        }),
                        (0, i.jsx)(l.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: _.intl.format(_.t.lHTZl2, {
                                examples: "".concat(E).concat("wumpus-friends", ", ").concat("hTKzmak"),
                            }),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: h.connectCTA,
                            children: _.intl.format(_.t["8F/who"], {
                                onClick: () => {
                                    a(), (0, p.openUserSettings)(f.n.CONNECTIONS_PANEL, { section: m.oAB.CONNECTIONS });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t.VJlc0S),
                    onClick: O,
                    disabled: 0 === N.length,
                    loading: A,
                }),
                (0, i.jsx)(r.zx, {
                    "data-migration-pending": !0,
                    className: h.__invalid_skipButton,
                    look: r.zx.Looks.BLANK,
                    size: r.zx.Sizes.MIN,
                    onClick: t,
                    children: _.intl.string(_.t["13/7kX"]),
                }),
            ],
        }),
    };
}
