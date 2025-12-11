let a, o;
n.d(t, { Z: () => N }), n(388685), n(781311), n(35282);
var s = n(54381),
    l = n(473749),
    i = n(755721),
    r = n(481060),
    c = n(447543),
    d = n(881052),
    u = n(600164),
    f = n(313789),
    b = n(518596),
    p = n(782605),
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
        [N, x] = l.useState(""),
        [A, T] = l.useState(!1),
        [C, j] = l.useState(null),
        O = l.useRef(null);
    l.useEffect(() => {
        var e;
        o && (null == (e = O.current) || e.focus());
    }, [o]);
    let y = l.useCallback(
        (e) => {
            e.preventDefault();
            let t = N.trim();
            if ("" === t) return void j(_.intl.string(_.t.IRq5ah));
            j(null), T(!0);
            let a = t.split("/"),
                o = a[a.length - 1];
            c.ZP.resolveInvite(o, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((T(!1), null == t)) return void j(_.intl.string(_.t["GEYI+Z"]));
                    if (null != t.channel) {
                        let e = c.ZP.getInviteContext("Join Guild", t);
                        c.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                n(), c.ZP.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof d.yZ || e instanceof d.Hx ? j((0, p.O)(e.code)) : j(_.intl.string(_.t.dDZRdy));
                        });
                    }
                },
                (e) => {
                    T(!1);
                    let t = new d.yZ(e);
                    j((0, p.O)(t.code));
                },
            );
        },
        [N, T, j, n],
    );
    return {
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(r.xBx, {
                    className: h.header,
                    direction: u.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, s.jsx)(r.Heading, {
                            variant: "heading-xl/bold",
                            color: "text-strong",
                            className: h.title,
                            children: _.intl.string(_.t.riOUtB),
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: _.intl.string(_.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, s.jsxs)(r.hzk, {
                    children: [
                        (0, s.jsx)("form", {
                            onSubmit: y,
                            className: h.inputForm,
                            children: (0, s.jsx)(r.oil, {
                                label: _.intl.string(_.t.qreV25),
                                error: C,
                                value: N,
                                onChange: x,
                                inputRef: O,
                            }),
                        }),
                        (0, s.jsx)(r.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: _.intl.format(_.t.lHTZl2, {
                                examples: "".concat(E).concat("wumpus-friends", ", ").concat("hTKzmak"),
                            }),
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: h.connectCTA,
                            children: _.intl.format(_.t["8F/who"], {
                                onClick: () => {
                                    a(), (0, b.openUserSettings)(f.n.CONNECTIONS_PANEL, { section: m.oAB.CONNECTIONS });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
        footer: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.Button, {
                    variant: "primary",
                    text: _.intl.string(_.t.VJlc0S),
                    onClick: y,
                    disabled: 0 === N.length,
                    loading: A,
                }),
                (0, s.jsx)(i.zx, {
                    className: h.__invalid_skipButton,
                    look: i.zx.Looks.BLANK,
                    size: i.zx.Sizes.MIN,
                    onClick: t,
                    children: _.intl.string(_.t["13/7kX"]),
                }),
            ],
        }),
    };
}
