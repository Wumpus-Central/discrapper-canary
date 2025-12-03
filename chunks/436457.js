let a, o;
n.d(t, { Z: () => N }), n(388685), n(781311), n(35282);
var s = n(54381),
    l = n(473749),
    i = n(755721),
    r = n(481060),
    c = n(447543),
    u = n(881052),
    d = n(600164),
    _ = n(313789),
    p = n(518596),
    f = n(782605),
    m = n(981631),
    h = n(388032),
    b = n(888113);
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
    let v = l.useCallback(
        (e) => {
            e.preventDefault();
            let t = N.trim();
            if ("" === t) return void j(h.intl.string(h.t.IRq5ah));
            j(null), T(!0);
            let a = t.split("/"),
                o = a[a.length - 1];
            c.ZP.resolveInvite(o, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((T(!1), null == t)) return void j(h.intl.string(h.t["GEYI+Z"]));
                    if (null != t.channel) {
                        let e = c.ZP.getInviteContext("Join Guild", t);
                        c.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                n(), c.ZP.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof u.yZ || e instanceof u.Hx ? j((0, f.O)(e.code)) : j(h.intl.string(h.t.dDZRdy));
                        });
                    }
                },
                (e) => {
                    T(!1);
                    let t = new u.yZ(e);
                    j((0, f.O)(t.code));
                },
            );
        },
        [N, T, j, n],
    );
    return {
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(r.xBx, {
                    className: b.header,
                    direction: d.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, s.jsx)(r.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            className: b.title,
                            children: h.intl.string(h.t.riOUtB),
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: h.intl.string(h.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, s.jsxs)(r.hzk, {
                    children: [
                        (0, s.jsx)("form", {
                            onSubmit: v,
                            className: b.inputForm,
                            children: (0, s.jsx)(r.oil, {
                                label: h.intl.string(h.t.qreV25),
                                error: C,
                                value: N,
                                onChange: x,
                                inputRef: O,
                            }),
                        }),
                        (0, s.jsx)(r.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: h.intl.format(h.t.lHTZl2, {
                                examples: "".concat(E).concat("wumpus-friends", ", ").concat("hTKzmak"),
                            }),
                        }),
                        (0, s.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: b.connectCTA,
                            children: h.intl.format(h.t["8F/who"], {
                                onClick: () => {
                                    a(), (0, p.openUserSettings)(_.n.CONNECTIONS_PANEL, { section: m.oAB.CONNECTIONS });
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
                    text: h.intl.string(h.t.VJlc0S),
                    onClick: v,
                    disabled: 0 === N.length,
                    loading: A,
                }),
                (0, s.jsx)(i.zx, {
                    className: b.__invalid_skipButton,
                    look: i.zx.Looks.BLANK,
                    size: i.zx.Sizes.MIN,
                    onClick: t,
                    children: h.intl.string(h.t["13/7kX"]),
                }),
            ],
        }),
    };
}
