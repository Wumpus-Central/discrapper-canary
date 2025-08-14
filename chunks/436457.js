let r, o;
n.d(t, { Z: () => y }), n(388685), n(781311), n(35282);
var a = n(255367),
    i = n(73800),
    s = n(120356),
    l = n.n(s),
    c = n(755721),
    u = n(481060),
    d = n(447543),
    f = n(230711),
    _ = n(881052),
    p = n(600164),
    m = n(782605),
    b = n(981631),
    h = n(388032),
    N = n(888113);
let x =
    ((r = window.GLOBAL_ENV.INVITE_HOST),
    (o = ""),
    null == r && ((r = location.host), (o = b.Z5c.INVITE(""))),
    "".concat(location.protocol, "//").concat(r).concat(o, "/"));
function y(e) {
    let { onBack: t, onComplete: n, onConnect: r, isSlideReady: o } = e,
        [s, y] = i.useState(""),
        [j, E] = i.useState(!1),
        [v, C] = i.useState(null),
        T = i.useRef(null);
    i.useEffect(() => {
        var e;
        o && (null == (e = T.current) || e.focus());
    }, [o]);
    let O = i.useCallback(
        (e) => {
            e.preventDefault();
            let t = s.trim();
            if ("" === t) return void C(h.intl.string(h.t.IRq5am));
            C(null), E(!0);
            let r = t.split("/"),
                o = r[r.length - 1];
            d.ZP.resolveInvite(o, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((E(!1), null == t)) return void C(h.intl.string(h.t["GEYI+f"]));
                    if (null != t.channel) {
                        let e = d.ZP.getInviteContext("Join Guild", t);
                        d.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                n(), d.ZP.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof _.yZ || e instanceof _.Hx ? C((0, m.O)(e.code)) : C(h.intl.string(h.t.dDZRd3));
                        });
                    }
                },
                (e) => {
                    E(!1);
                    let t = new _.yZ(e);
                    C((0, m.O)(t.code));
                },
            );
        },
        [s, E, C, n],
    );
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(u.xBx, {
                    className: N.header,
                    direction: p.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(u.X6q, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            className: N.title,
                            children: h.intl.string(h.t.riOUtL),
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: h.intl.string(h.t["7jub2t"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(u.hzk, {
                    children: [
                        (0, a.jsx)("form", {
                            onSubmit: O,
                            className: N.inputForm,
                            children: (0, a.jsx)(u.xJW, {
                                title: h.intl.string(h.t.qreV29),
                                error: v,
                                titleClassName: l()(N.formTitle, { [N.error]: null != v }),
                                children: (0, a.jsx)(c.Is, {
                                    value: s,
                                    onChange: y,
                                    className: N.input,
                                    inputClassName: N.inputInner,
                                    inputRef: T,
                                }),
                            }),
                        }),
                        (0, a.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: h.intl.format(h.t.lHTZl5, {
                                examples: "".concat(x).concat("wumpus-friends", ", ").concat("hTKzmak"),
                            }),
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: N.connectCTA,
                            children: h.intl.format(h.t["8F/who"], {
                                onClick: () => {
                                    r(), f.Z.open(b.oAB.CONNECTIONS);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
        footer: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(u.zxk, {
                    variant: "primary",
                    text: h.intl.string(h.t.VJlc0d),
                    onClick: O,
                    disabled: 0 === s.length,
                    loading: j,
                }),
                (0, a.jsx)(c.zx, {
                    className: N.__invalid_skipButton,
                    look: c.zx.Looks.BLANK,
                    size: c.zx.Sizes.MIN,
                    onClick: t,
                    children: h.intl.string(h.t["13/7kZ"]),
                }),
            ],
        }),
    };
}
