n.d(t, { y: () => M });
var i = n(477900),
    s = n(582128),
    a = n(683063),
    r = n(834730),
    l = n(273875),
    o = n(208756),
    c = n(798618),
    d = n(916845),
    u = n(627330),
    _ = n(434544),
    p = n(661531),
    A = n(780964),
    E = n(766075),
    m = n(975571),
    S = n(391523),
    g = n(397306),
    N = n(652215),
    f = n(49999),
    h = n(502209),
    x = n(105292),
    y = n(22579);
function C(e) {
    let { channel: t, targetElementRef: n, position: s } = e,
        { visible: a, markAsDismissed: r } = (0, g.v)(t, "member_coachmark");
    return a ? (0, i.jsx)(I, { guildId: t.guild_id, targetElementRef: n, position: s, markAsDismissed: r }) : null;
}
function I(e) {
    let { guildId: t, targetElementRef: n, position: a, markAsDismissed: r } = e;
    function g(e) {
        ("user:explicit" === e || "user:escape" === e) &&
            ((0, S.Yy)({ noticeType: "member_coachmark", guildId: t }, "dismiss"), r(f.i.USER_DISMISS));
    }
    return (
        s.useEffect(() => {
            (0, S.Ws)({ noticeType: "member_coachmark", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(l.x, {
                targetElementRef: n,
                position: a,
                onRequestClose: (e, t) => g(t),
                children: (0, i.jsxs)("div", {
                    className: y._C,
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(d.q, { onClick: () => g("user:explicit") }),
                        (0, i.jsx)("div", {
                            className: y.Kk,
                            children: (0, i.jsx)(_.s, { size: "lg", color: p.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                        }),
                        (0, i.jsx)(u.D, {
                            className: y.wx,
                            title: x.intl.string(h.default.MrT2mn),
                            body: x.intl.string(h.default.x9NGts),
                            textLink: {
                                text: x.intl.string(x.t.hvVgAZ),
                                link: m.A.getArticleURL(N.MVz.SERVER_WEB_PAGES),
                                onClick: function () {
                                    (0, S.Yy)({ noticeType: "member_coachmark", guildId: t }, "learn_more");
                                },
                            },
                        }),
                        (0, i.jsx)(o.Z, {
                            actions: [
                                {
                                    text: x.intl.string(h.default.eJZ8MS),
                                    variant: "primary",
                                    onClick: function () {
                                        ((0, S.Yy)({ noticeType: "member_coachmark", guildId: t }, "open_settings"),
                                            r(f.i.TAKE_ACTION),
                                            (0, E.openUserSettings)(A.X.DATA_AND_PRIVACY_PANEL));
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
function M(e) {
    let { channel: t } = e,
        n = s.useRef(null),
        l = x.intl.string(h.default.uneDIi);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: k.O, "aria-hidden": !0 }),
            (0, i.jsx)(a.u, {
                title: l,
                body: x.intl.string(h.default["01KOls"]),
                position: "bottom",
                children: (0, i.jsx)("span", {
                    ref: n,
                    className: k.P,
                    tabIndex: 0,
                    children: (0, i.jsx)(r.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
                }),
            }),
            (0, i.jsx)(C, { channel: t, targetElementRef: n, position: "bottom" }),
        ],
    });
}
