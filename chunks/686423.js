n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(502572),
    a = n(732955),
    l = n(397927),
    o = n(688810),
    c = n(531260),
    d = n(987144),
    u = n(473145),
    _ = n(652215),
    m = n(985018),
    A = n(572523);
let g = function () {
    let e = s.useRef(null),
        { analyticsLocations: t } = (0, o.Ay)(),
        { fractionalState: g } = (0, c.A)();
    function E(n) {
        null != e.current && (0, l.OoC)(e.current),
            (0, d.g)({
                analyticsLocation: {
                    page: _.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: _.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: _.ZSU.BUTTON_CTA,
                    objectType: _.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function h() {
        e.current = await (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                return (t) => (0, i.jsx)(e, { ...t, onSelectGuild: E });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, l.OoC)(e.current);
                },
            },
        );
    }
    let p = (0, u.Nc)({ fractionalState: g });
    return (0, i.jsxs)("div", {
        className: A.iE,
        children: [
            (0, i.jsx)(l._Jp, { color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK, className: A.$J }),
            (0, i.jsx)(l.Text, {
                className: A.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: m.intl.format(m.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != p,
                            s = (0, l.Oer)(e),
                            o = (0, i.jsx)("div", {
                                className: A.lO,
                                children: (0, i.jsx)(
                                    a.QWc,
                                    { variant: "primary", onClick: n ? void 0 : h, text: s, disabled: n },
                                    t,
                                ),
                            });
                        return n
                            ? (0, i.jsx)(
                                  r.A,
                                  {
                                      text: p,
                                      "aria-label": p.toString(),
                                      children: (e) => (0, i.jsx)("span", { ...e, children: o }),
                                  },
                                  t,
                              )
                            : o;
                    },
                }),
            }),
        ],
    });
};
