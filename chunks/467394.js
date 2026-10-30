n.d(t, { y: () => G });
var i = n(477900),
    s = n(582128),
    a = n(834730),
    l = n(273875),
    r = n(208756),
    c = n(798618),
    o = n(916845),
    u = n(627330),
    d = n(434544),
    A = n(661531),
    _ = n(780964),
    E = n(766075),
    p = n(975571),
    S = n(391523),
    g = n(554146);
n(826673);
var m = n(131607),
    N = n(73153),
    h = n(45498),
    f = n(677166),
    C = n(410310),
    M = n(17928),
    x = n(576705),
    y = n(652215),
    I = n(49999),
    D = n(573436),
    k = n(105292),
    R = n(22579);
function T(e) {
    let { channel: t, targetElementRef: n, position: a } = e,
        { visible: l, markAsDismissed: r } = (function (e, t) {
            let n = (function (e, t) {
                    let n = (0, h.F)(e, t),
                        i = (0, f.Hg)(null != n ? e?.guild_id : null, t),
                        s = (0, f.ao)(t),
                        { locked: a, optedOut: l } = (0, C.p)(),
                        r = (0, M.bG)(
                            [x.A],
                            () =>
                                null != e &&
                                (e.isThread()
                                    ? x.A.can(y.xBc.SEND_MESSAGES_IN_THREADS, e) &&
                                      (!e.isLockedThread() || x.A.can(y.xBc.MANAGE_THREADS, e))
                                    : x.A.can(y.xBc.SEND_MESSAGES, e)),
                            [e],
                        );
                    return null != n && r && i && s && !a && !0;
                })(e, t),
                i = (0, h.F)(e, t),
                [a, l] = (0, m.kn)(n ? [g.M.PINOT_MEMBER_COACHMARK] : [], { bypassAutoDismiss: !0 }),
                r = s.useCallback(
                    (e) => {
                        (l(e), null != i && N.h.dispatch({ type: "PINOT_MEMBER_NOTICE_ACK", channelId: i }));
                    },
                    [l, i],
                );
            return { visible: a === g.M.PINOT_MEMBER_COACHMARK, markAsDismissed: r };
        })(t, "member_coachmark");
    return l ? (0, i.jsx)(b, { guildId: t.guild_id, targetElementRef: n, position: a, markAsDismissed: r }) : null;
}
function b(e) {
    let { guildId: t, targetElementRef: n, position: a, markAsDismissed: g } = e;
    function m(e) {
        ("user:explicit" === e || "user:escape" === e) &&
            ((0, S.Yy)({ noticeType: "member_coachmark", guildId: t }, "dismiss"), g(I.i.USER_DISMISS));
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
                onRequestClose: (e, t) => m(t),
                children: (0, i.jsxs)("div", {
                    className: R._C,
                    "data-mana-component": "popover",
                    children: [
                        (0, i.jsx)(o.q, { onClick: () => m("user:explicit") }),
                        (0, i.jsx)("div", {
                            className: R.Kk,
                            children: (0, i.jsx)(d.s, { size: "lg", color: A.A.colors.ICON_STRONG, "aria-hidden": !0 }),
                        }),
                        (0, i.jsx)(u.D, {
                            className: R.wx,
                            title: k.intl.string(D.default.MrT2mn),
                            body: k.intl.string(D.default.x9NGts),
                            textLink: {
                                text: k.intl.string(k.t.hvVgAZ),
                                link: p.A.getArticleURL(y.MVz.SERVER_WEB_PAGES),
                                onClick: function () {
                                    (0, S.Yy)({ noticeType: "member_coachmark", guildId: t }, "learn_more");
                                },
                            },
                        }),
                        (0, i.jsx)(r.Z, {
                            actions: [
                                {
                                    text: k.intl.string(D.default.eJZ8MS),
                                    variant: "primary",
                                    onClick: function () {
                                        ((0, S.Yy)({ noticeType: "member_coachmark", guildId: t }, "open_settings"),
                                            g(I.i.TAKE_ACTION),
                                            (0, E.openUserSettings)(_.X.DATA_AND_PRIVACY_PANEL));
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
var P = n(948115);
function G(e) {
    let { channel: t } = e,
        n = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("span", { className: P.O, "aria-hidden": !0 }),
            (0, i.jsx)("div", {
                ref: n,
                className: P.P,
                children: (0, i.jsx)(a.E, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: k.intl.string(D.default.uneDIi),
                }),
            }),
            (0, i.jsx)(T, { channel: t, targetElementRef: n, position: "bottom" }),
        ],
    });
}
