n.d(t, { y: () => D });
var i = n(477900),
    s = n(582128),
    r = n(683063),
    a = n(834730),
    o = n(273875),
    l = n(208756),
    c = n(798618),
    d = n(916845),
    u = n(627330),
    _ = n(434544),
    p = n(661531),
    A = n(780964),
    E = n(766075),
    m = n(975571),
    g = n(391523),
    S = n(397306),
    N = n(652215),
    f = n(49999),
    h = n(502209),
    x = n(105292),
    C = n(22579);
function y(e) {
    let { channel: t, targetElementRef: n, position: s } = e,
        { visible: r, markAsDismissed: a } = (0, S.v)(t, "member_coachmark");
    return r ? (0, i.jsx)(I, { guildId: t.guild_id, targetElementRef: n, position: s, markAsDismissed: a }) : null;
}
function I(e) {
    let { guildId: t, targetElementRef: n, position: r, markAsDismissed: a } = e;
    function S(e) {
        ("user:explicit" === e || "user:escape" === e) &&
            ((0, g.Yy)({ noticeType: "member_coachmark", guildId: t }, "dismiss"), a(f.i.USER_DISMISS));
    }
    return (
        s.useEffect(() => {
            (0, g.Ws)({ noticeType: "member_coachmark", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(o.x, {
                targetElementRef: n,
                position: r,
                onRequestClose: (e, t) => S(t),
                children: (0, i.jsxs)("div", {
                    className: C._C,
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(d.q, { onClick: () => S("user:explicit") }),
                        (0, i.jsx)("div", {
                            className: C.Kk,
                            children: (0, i.jsx)(_.s, { size: "lg", color: p.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                        }),
                        (0, i.jsx)(u.D, {
                            className: C.wx,
                            title: x.intl.string(h.default.MrT2mn),
                            body: x.intl.string(h.default.x9NGts),
                            textLink: {
                                text: x.intl.string(h.default.eJZ8MS),
                                onClick: function () {
                                    ((0, g.Yy)({ noticeType: "member_coachmark", guildId: t }, "open_settings"),
                                        a(f.i.TAKE_ACTION),
                                        (0, E.openUserSettings)(A.X.DATA_AND_PRIVACY_PANEL));
                                },
                            },
                        }),
                        (0, i.jsx)(l.Z, {
                            actions: [
                                {
                                    text: x.intl.string(x.t.hvVgAZ),
                                    variant: "primary",
                                    onClick: function () {
                                        ((0, g.Yy)({ noticeType: "member_coachmark", guildId: t }, "learn_more"),
                                            a(f.i.TAKE_ACTION),
                                            window.open(
                                                m.A.getArticleURL(N.MVz.DISCOVERABLE_CONTENT_ON_THE_WEB),
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
var k = n(948115);
function D(e) {
    let { channel: t } = e,
        n = s.useRef(null),
        o = x.intl.string(h.default.uneDIi);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: k.O, "aria-hidden": !0 }),
            (0, i.jsx)(r.u, {
                title: o,
                body: x.intl.string(h.default["01KOls"]),
                position: "bottom",
                children: (0, i.jsx)("span", {
                    ref: n,
                    className: k.P,
                    tabIndex: 0,
                    children: (0, i.jsx)(a.E, { variant: "text-sm/medium", color: "text-muted", children: o }),
                }),
            }),
            (0, i.jsx)(y, { channel: t, targetElementRef: n, position: "bottom" }),
        ],
    });
}
