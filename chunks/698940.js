n.d(t, { y: () => C });
var i = n(477900),
    s = n(582128);
if (221552 == n.j) var a = n(683063);
if (221552 == n.j) var r = n(834730);
if (221552 == n.j) var o = n(195118);
if (221552 == n.j) var l = n(208756);
if (221552 == n.j) var c = n(31188);
if (221552 == n.j) var d = n(916845);
if (221552 == n.j) var u = n(627330);
if (221552 == n.j) var p = n(434544);
if (221552 == n.j) var m = n(646514);
var f = n(780964),
    g = n(766075),
    _ = n(975571),
    A = n(391523),
    x = n(56919),
    h = n(652215),
    j = n(49999),
    v = n(137005),
    k = n(792996),
    y = n(22579);
function b(e) {
    let { channel: t, targetElementRef: n, position: s } = e,
        { visible: a, markAsDismissed: r } = (0, x.v)(t, "member_coachmark");
    return a ? (0, i.jsx)(E, { guildId: t.guild_id, targetElementRef: n, position: s, markAsDismissed: r }) : null;
}
function E(e) {
    let { guildId: t, targetElementRef: n, position: a, markAsDismissed: r } = e;
    function x(e) {
        ("user:explicit" === e || "user:escape" === e) &&
            ((0, A.Yy)({ noticeType: "member_coachmark", guildId: t }, "dismiss"), r(j.i.USER_DISMISS));
    }
    return (
        s.useEffect(() => {
            (0, A.Ws)({ noticeType: "member_coachmark", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(o.x, {
                targetElementRef: n,
                position: a,
                onRequestClose: (e, t) => x(t),
                children: (0, i.jsxs)("div", {
                    className: y._C,
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(d.q, { onClick: () => x("user:explicit") }),
                        (0, i.jsx)("div", {
                            className: y.Kk,
                            children: (0, i.jsx)(p.s, { size: "lg", color: m.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                        }),
                        (0, i.jsx)(u.D, {
                            className: y.wx,
                            title: k.intl.string(v.default.MrT2mn),
                            body: k.intl.string(v.default.x9NGts),
                            textLink: {
                                text: k.intl.string(v.default.eJZ8MS),
                                onClick: function () {
                                    ((0, A.Yy)({ noticeType: "member_coachmark", guildId: t }, "open_settings"),
                                        (0, g.openUserSettings)(f.X.DATA_AND_PRIVACY_PANEL));
                                },
                            },
                        }),
                        (0, i.jsx)(l.Z, {
                            actions: [
                                {
                                    text: k.intl.string(k.t.hvVgAZ),
                                    variant: "primary",
                                    onClick: function () {
                                        ((0, A.Yy)({ noticeType: "member_coachmark", guildId: t }, "learn_more"),
                                            window.open(
                                                _.A.getArticleURL(h.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
                                                "_blank",
                                                "noopener,noreferrer",
                                            ));
                                    },
                                },
                            ],
                        }),
                        (0, i.jsx)(c.F, {}),
                    ],
                }),
            }),
        })
    );
}
var N = n(948115);
function C(e) {
    let { channel: t } = e,
        n = s.useRef(null),
        o = k.intl.string(v.default.uneDIi);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: N.O, "aria-hidden": !0 }),
            (0, i.jsx)(a.u, {
                title: o,
                body: k.intl.string(v.default["01KOls"]),
                position: "bottom",
                children: (0, i.jsx)("span", {
                    ref: n,
                    className: N.P,
                    tabIndex: 0,
                    children: (0, i.jsx)(r.E, { variant: "body-sm/medium", color: "text-muted", children: o }),
                }),
            }),
            (0, i.jsx)(b, { channel: t, targetElementRef: n, position: "bottom" }),
        ],
    });
}
