n.d(t, { Z: () => S }), n(388685), n(583741);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    c = n.n(a),
    d = n(866442),
    u = n(692547),
    o = n(481060),
    C = n(893776),
    m = n(37234),
    L = n(232567),
    h = n(820160),
    f = n(471445),
    g = n(884902),
    x = n(131704),
    p = n(345162),
    v = n(594174),
    j = n(259580),
    H = n(539600),
    N = n(350566),
    E = n(837748),
    Z = n(971401),
    _ = n(306453),
    b = n(981631),
    M = n(388032),
    T = n(71002);
function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(""),
        [s, a] = i.useState(null),
        [c, d] = i.useState(null),
        u = (0, E.Z)(e.code);
    i.useEffect(() => {
        !(async function () {
            let e = v.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, L.k)();
                } catch (e) {
                    C.Z.verifySSOToken("accept_guild_template", null);
                }
            null != e && l(M.intl.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, Z.Z)(e);
    let f = (0, r.jsxs)(r.Fragment, {
            children: [
                t ? (0, r.jsx)(_.Z, { guildTemplate: e }) : null,
                (0, r.jsx)("div", {
                    className: T.icon,
                    children: (0, r.jsx)(h.Z, {
                        icon: s,
                        onChange: a,
                    }),
                }),
                (0, r.jsx)(o.oil, {
                    label: u.nameLabel,
                    helperText: M.intl.format(u.terms, { guidelinesURL: b.EYA.GUIDELINES }),
                    type: "text",
                    value: n,
                    maxLength: 100,
                    onChange: l,
                    error: null == c ? void 0 : c.name,
                }),
            ],
        }),
        g = e.serializedSourceGuild.roles.map((t) => H.wD(e.serializedSourceGuild.id, t)).filter((e) => !(0, p.fI)(e));
    return {
        form: f,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.izJ, {}),
                (0, r.jsx)(o.gNt, {
                    label: M.intl.string(M.t.Zxk1OD),
                    helperText: M.intl.string(M.t.de7DpK),
                    children: (0, r.jsx)(G, { channels: e.serializedSourceGuild.channels }),
                }),
                g.length > 0
                    ? (0, r.jsx)(o.gNt, {
                          label: M.intl.string(M.t["RJ1e/v"]),
                          children: (0, r.jsx)(R, {
                              guildId: e.serializedSourceGuild.id,
                              roles: g,
                          }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            N.Z.acceptGuildTemplate(e.code, n, s)
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
                let n = (t = e).type === b.d4z.GUILD_CATEGORY ? j.Z : (0, f.KS)((0, x.q_)(t));
                return (0, r.jsxs)(
                    "div",
                    {
                        className: s()(T.channel, { [T.category]: e.type === b.d4z.GUILD_CATEGORY }),
                        children: [
                            null != n ? (0, r.jsx)(n, { className: T.channelIcon }) : null,
                            (0, r.jsx)(o.Text, {
                                className: T.channelText,
                                variant: "text-sm/normal",
                                children: e.name,
                            }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("div", {
        className: T.channelsWrapper,
        children: n,
    });
}
function R(e) {
    let { guildId: t, roles: n } = e,
        i = n
            .slice()
            .reverse()
            .map((e) =>
                (0, r.jsx)(
                    I,
                    {
                        guildId: t,
                        role: e,
                    },
                    e.id,
                ),
            );
    return (0, r.jsx)("ul", {
        className: T.rolesWrapper,
        children: i,
    });
}
function I(e) {
    var t, n;
    let { guildId: i, role: l } = e,
        s = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(),
        a = null == l.color ? s : (0, d.Rf)(l.color),
        c = (0, g._f)(i, l, l.colorStrings);
    return (0, r.jsxs)("li", {
        className: T.role,
        style: {
            borderColor: null != (t = (0, d.wK)(a, 0.6)) ? t : void 0,
            backgroundColor: null != (n = (0, d.wK)(a, 0.075)) ? n : void 0,
        },
        children: [
            (0, r.jsx)(o.xko, {
                className: T.roleCircle,
                color: a,
                colors: c,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                children: l.name,
            }),
        ],
    });
}
n(418757);
