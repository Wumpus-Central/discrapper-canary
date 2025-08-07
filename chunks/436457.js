let r, o;
n.d(t, { Z: () => y }), n(388685), n(781311), n(35282);
var a = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    c = n(755721),
    u = n(481060),
    d = n(447543),
    f = n(230711),
    _ = n(881052),
    p = n(600164),
    b = n(782605),
    m = n(981631),
    h = n(388032),
    x = n(145575);
let N =
    ((r = window.GLOBAL_ENV.INVITE_HOST),
    (o = ""),
    null == r && ((r = location.host), (o = m.Z5c.INVITE(""))),
    "".concat(location.protocol, "//").concat(r).concat(o, "/"));
function y(e) {
    let { onBack: t, onComplete: n, onConnect: r, isSlideReady: o } = e,
        [i, y] = s.useState(""),
        [v, j] = s.useState(!1),
        [E, C] = s.useState(null),
        T = s.useRef(null);
    s.useEffect(() => {
        var e;
        o && (null == (e = T.current) || e.focus());
    }, [o]);
    let g = s.useCallback(
        (e) => {
            e.preventDefault();
            let t = i.trim();
            if ("" === t) return void C(h.intl.string(h.t.IRq5am));
            C(null), j(!0);
            let r = t.split("/"),
                o = r[r.length - 1];
            d.ZP.resolveInvite(o, "Join Guild", { inputValue: t }).then(
                (e) => {
                    let { invite: t } = e;
                    if ((j(!1), null == t)) return void C(h.intl.string(h.t["GEYI+f"]));
                    if (null != t.channel) {
                        let e = d.ZP.getInviteContext("Join Guild", t);
                        d.ZP.acceptInvite({
                            inviteKey: t.code,
                            context: e,
                            callback: (e) => {
                                n(), d.ZP.transitionToInvite(e);
                            },
                        }).catch((e) => {
                            e instanceof _.yZ || e instanceof _.Hx ? C((0, b.O)(e.code)) : C(h.intl.string(h.t.dDZRd3));
                        });
                    }
                },
                (e) => {
                    j(!1);
                    let t = new _.yZ(e);
                    C((0, b.O)(t.code));
                },
            );
        },
        [i, j, C, n],
    );
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(u.xBx, {
                    className: x.header,
                    direction: p.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)(u.X6q, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            className: x.title,
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
                            onSubmit: g,
                            className: x.inputForm,
                            children: (0, a.jsx)(u.xJW, {
                                title: h.intl.string(h.t.qreV29),
                                error: E,
                                titleClassName: l()(x.formTitle, { [x.error]: null != E }),
                                children: (0, a.jsx)(c.Is, {
                                    value: i,
                                    onChange: y,
                                    className: x.input,
                                    inputClassName: x.inputInner,
                                    inputRef: T,
                                }),
                            }),
                        }),
                        (0, a.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: h.intl.format(h.t.lHTZl5, {
                                examples: "".concat(N).concat("wumpus-friends", ", ").concat("hTKzmak"),
                            }),
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: x.connectCTA,
                            children: h.intl.format(h.t["8F/who"], {
                                onClick: () => {
                                    r(), f.Z.open(m.oAB.CONNECTIONS);
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
                    onClick: g,
                    disabled: 0 === i.length,
                    loading: v,
                }),
                (0, a.jsx)(c.zx, {
                    className: x.__invalid_skipButton,
                    look: c.zx.Looks.BLANK,
                    size: c.zx.Sizes.MIN,
                    onClick: t,
                    children: h.intl.string(h.t["13/7kZ"]),
                }),
            ],
        }),
    };
}
