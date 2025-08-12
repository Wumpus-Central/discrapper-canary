n.d(t, { Z: () => b }), n(388685), n(583741);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    c = n.n(a),
    d = n(866442),
    u = n(692547),
    o = n(481060),
    C = n(893776),
    m = n(37234),
    L = n(232567),
    h = n(820160),
    x = n(471445),
    f = n(884902),
    g = n(131704),
    p = n(345162),
    v = n(594174),
    j = n(259580),
    N = n(539600),
    H = n(350566),
    E = n(837748),
    Z = n(971401),
    T = n(306453),
    _ = n(981631),
    M = n(388032),
    S = n(575501);
function b(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, s] = r.useState(""),
        [l, a] = r.useState(null),
        [c, d] = r.useState(null),
        u = (0, E.Z)(e.code);
    r.useEffect(() => {
        !(async function () {
            let e = v.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, L.k)();
                } catch (e) {
                    C.Z.verifySSOToken("accept_guild_template", null);
                }
            null != e && s(M.intl.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, Z.Z)(e);
    let x = (0, i.jsxs)(i.Fragment, {
            children: [
                t ? (0, i.jsx)(T.Z, { guildTemplate: e }) : null,
                (0, i.jsx)("div", {
                    className: S.icon,
                    children: (0, i.jsx)(h.Z, {
                        icon: l,
                        onChange: a,
                    }),
                }),
                (0, i.jsx)(o.xJW, {
                    title: u.nameLabel,
                    children: (0, i.jsx)(o.oil, {
                        type: "text",
                        value: n,
                        maxLength: 100,
                        onChange: s,
                        error: null == c ? void 0 : c.name,
                    }),
                }),
                (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: S.guidelines,
                    children: M.intl.format(u.terms, { guidelinesURL: _.EYA.GUIDELINES }),
                }),
            ],
        }),
        f = e.serializedSourceGuild.roles.map((t) => N.wD(e.serializedSourceGuild.id, t)).filter((e) => !(0, p.fI)(e));
    return {
        form: x,
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", { className: S.divider }),
                (0, i.jsxs)(o.xJW, {
                    className: S.previewSection,
                    title: M.intl.string(M.t.Zxk1OD),
                    children: [
                        (0, i.jsx)(G, { channels: e.serializedSourceGuild.channels }),
                        (0, i.jsxs)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: S.protip,
                            children: [
                                (0, i.jsxs)("span", {
                                    className: S.protipText,
                                    children: [M.intl.string(M.t["8tvIiI"]), ":"],
                                }),
                                " ",
                                M.intl.string(M.t.de7DpK),
                            ],
                        }),
                    ],
                }),
                f.length > 0
                    ? (0, i.jsx)(o.xJW, {
                          className: S.previewSection,
                          title: M.intl.string(M.t["RJ1e/v"]),
                          children: (0, i.jsx)(I, {
                              guildId: e.serializedSourceGuild.id,
                              roles: f,
                          }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            H.Z.acceptGuildTemplate(e.code, n, l)
                .then(() => {
                    (0, o.pTH)(), (0, m.Ou)();
                })
                .catch((e) => d(e));
        },
    };
}
function G(e) {
    let { channels: t } = e,
        n = c()(t)
            .sortBy((e) => (null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let n = (t = e).type === _.d4z.GUILD_CATEGORY ? j.Z : (0, x.KS)((0, g.q_)(t));
                return (0, i.jsxs)(
                    "div",
                    {
                        className: l()(S.channel, { [S.category]: e.type === _.d4z.GUILD_CATEGORY }),
                        children: [
                            null != n ? (0, i.jsx)(n, { className: S.channelIcon }) : null,
                            (0, i.jsx)(o.Text, {
                                className: S.channelText,
                                variant: "text-sm/normal",
                                children: e.name,
                            }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, i.jsx)("div", {
        className: S.channelsWrapper,
        children: n,
    });
}
function I(e) {
    let { guildId: t, roles: n } = e,
        r = n
            .slice()
            .reverse()
            .map((e) =>
                (0, i.jsx)(
                    R,
                    {
                        guildId: t,
                        role: e,
                    },
                    e.id,
                ),
            );
    return (0, i.jsx)("ul", {
        className: S.rolesWrapper,
        children: r,
    });
}
function R(e) {
    var t, n;
    let { guildId: r, role: s } = e,
        l = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(),
        a = null == s.color ? l : (0, d.Rf)(s.color),
        c = (0, f._f)(r, s, s.colorStrings);
    return (0, i.jsxs)("li", {
        className: S.role,
        style: {
            borderColor: null != (t = (0, d.wK)(a, 0.6)) ? t : void 0,
            backgroundColor: null != (n = (0, d.wK)(a, 0.075)) ? n : void 0,
        },
        children: [
            (0, i.jsx)(o.xko, {
                className: S.roleCircle,
                color: a,
                colors: c,
            }),
            (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                children: s.name,
            }),
        ],
    });
}
n(418757);
