n.d(t, { y: () => k });
var i = n(477900),
    s = n(582128),
    a = n(834730),
    r = n(273875),
    l = n(208756),
    o = n(798618),
    c = n(916845),
    d = n(627330),
    u = n(434544),
    _ = n(661531),
    p = n(780964),
    A = n(766075),
    E = n(975571),
    m = n(391523),
    S = n(397306),
    g = n(652215),
    N = n(49999),
    f = n(502209),
    h = n(105292),
    x = n(22579);
function y(e) {
    let { channel: t, targetElementRef: n, position: s } = e,
        { visible: a, markAsDismissed: r } = (0, S.v)(t, "member_coachmark");
    return a ? (0, i.jsx)(C, { guildId: t.guild_id, targetElementRef: n, position: s, markAsDismissed: r }) : null;
}
function C(e) {
    let { guildId: t, targetElementRef: n, position: a, markAsDismissed: S } = e;
    function y(e) {
        ("user:explicit" === e || "user:escape" === e) &&
            ((0, m.Yy)({ noticeType: "member_coachmark", guildId: t }, "dismiss"), S(N.i.USER_DISMISS));
    }
    return (
        s.useEffect(() => {
            (0, m.Ws)({ noticeType: "member_coachmark", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(r.x, {
                targetElementRef: n,
                position: a,
                onRequestClose: (e, t) => y(t),
                children: (0, i.jsxs)("div", {
                    className: x._C,
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(c.q, { onClick: () => y("user:explicit") }),
                        (0, i.jsx)("div", {
                            className: x.Kk,
                            children: (0, i.jsx)(u.s, { size: "lg", color: _.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                        }),
                        (0, i.jsx)(d.D, {
                            className: x.wx,
                            title: h.intl.string(f.default.MrT2mn),
                            body: h.intl.string(f.default.x9NGts),
                            textLink: {
                                text: h.intl.string(h.t.hvVgAZ),
                                link: E.A.getArticleURL(g.MVz.SERVER_WEB_PAGES),
                                onClick: function () {
                                    (0, m.Yy)({ noticeType: "member_coachmark", guildId: t }, "learn_more");
                                },
                            },
                        }),
                        (0, i.jsx)(l.Z, {
                            actions: [
                                {
                                    text: h.intl.string(f.default.eJZ8MS),
                                    variant: "primary",
                                    onClick: function () {
                                        ((0, m.Yy)({ noticeType: "member_coachmark", guildId: t }, "open_settings"),
                                            S(N.i.TAKE_ACTION),
                                            (0, A.openUserSettings)(p.X.DATA_AND_PRIVACY_PANEL));
                                    },
                                },
                            ],
                        }),
                        (0, i.jsx)(o.F, {}),
                    ],
                }),
            }),
        })
    );
}
var I = n(948115);
function k(e) {
    let { channel: t } = e,
        n = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: I.O, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                ref: n,
                className: I.P,
                children: (0, i.jsx)(a.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: h.intl.string(f.default.uneDIi),
                }),
            }),
            (0, i.jsx)(y, { channel: t, targetElementRef: n, position: "bottom" }),
        ],
    });
}
