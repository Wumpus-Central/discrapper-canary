r.d(t, { A: () => G }), r(896048), r(264879);
var s = r(627968),
    l = r(64700),
    n = r(503698),
    i = r.n(n),
    a = r(735438),
    d = r.n(a),
    c = r(317097),
    u = r(827734),
    o = r(397927),
    C = r(830215),
    m = r(398590),
    L = r(803306),
    h = r(356343),
    x = r(713654),
    g = r(967144),
    p = r(95701),
    f = r(34457),
    v = r(287809),
    j = r(147925),
    E = r(9865),
    A = r(79680),
    N = r(651539),
    I = r(774393),
    b = r(768397),
    Z = r(652215),
    _ = r(985018),
    M = r(79048);
function G(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [r, n] = l.useState(""),
        [i, a] = l.useState(null),
        [d, c] = l.useState(null),
        u = (0, N.A)(e.code);
    l.useEffect(() => {
        !(async function () {
            let e = v.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, L.rQ)();
                } catch (e) {
                    C.A.verifySSOToken("accept_guild_template", null);
                }
            null != e && n(_.intl.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, I.A)(e);
    let x = (0, s.jsxs)(s.Fragment, {
            children: [
                t ? (0, s.jsx)(b.A, { guildTemplate: e }) : null,
                (0, s.jsx)("div", {
                    className: M.Kk,
                    children: (0, s.jsx)(h.A, {
                        icon: i,
                        onChange: a,
                    }),
                }),
                (0, s.jsx)(o.ksK, {
                    label: u.nameLabel,
                    helperText: _.intl.format(u.terms, { guidelinesURL: Z.X7G.GUIDELINES }),
                    type: "text",
                    value: r,
                    maxLength: 100,
                    onChange: n,
                    error: null == d ? void 0 : d.name,
                }),
            ],
        }),
        g = e.serializedSourceGuild.roles.map((t) => E.Wj(e.serializedSourceGuild.id, t)).filter((e) => !(0, f.Oy)(e));
    return {
        form: x,
        preview: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(o.cGx, {}),
                (0, s.jsx)(o.D0$, {
                    label: _.intl.string(_.t.Zxk1OF),
                    helperText: _.intl.string(_.t.de7DpI),
                    children: (0, s.jsx)(S, { channels: e.serializedSourceGuild.channels }),
                }),
                g.length > 0
                    ? (0, s.jsx)(o.D0$, {
                          label: _.intl.string(_.t["RJ1e/r"]),
                          children: (0, s.jsx)(T, {
                              guildId: e.serializedSourceGuild.id,
                              roles: g,
                          }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            A.A.acceptGuildTemplate(e.code, r, i)
                .then(() => {
                    (0, o.s7G)(), (0, m.bz)();
                })
                .catch((e) => c(e));
        },
    };
}
function S(e) {
    let { channels: t } = e,
        r = d()(t)
            .sortBy((e) => (null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let r = (t = e).type === Z.rbe.GUILD_CATEGORY ? j.A : (0, x.gU)((0, p.UE)(t));
                return (0, s.jsxs)(
                    "div",
                    {
                        className: i()(M.Ix, { [M.L1]: e.type === Z.rbe.GUILD_CATEGORY }),
                        children: [
                            null != r ? (0, s.jsx)(r, { className: M.p }) : null,
                            (0, s.jsx)(o.Text, {
                                className: M.be,
                                variant: "text-sm/normal",
                                children: e.name,
                            }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, s.jsx)("div", {
        className: M.oD,
        children: r,
    });
}
function T(e) {
    let { guildId: t, roles: r } = e,
        l = r
            .slice()
            .reverse()
            .map((e) =>
                (0, s.jsx)(
                    H,
                    {
                        guildId: t,
                        role: e,
                    },
                    e.id,
                ),
            );
    return (0, s.jsx)("ul", {
        className: M.F6,
        children: l,
    });
}
function H(e) {
    var t, r;
    let { guildId: l, role: n } = e,
        i = (0, o.rdh)(u.A.colors.BORDER_SUBTLE).hex(),
        a = null == n.color ? i : (0, c.Hl)(n.color),
        d = (0, g.X_)(l, n, n.colorStrings);
    return (0, s.jsxs)("li", {
        className: M.JC,
        style: {
            borderColor: null != (t = (0, c.xp)(a, 0.6)) ? t : void 0,
            backgroundColor: null != (r = (0, c.xp)(a, 0.075)) ? r : void 0,
        },
        children: [
            (0, s.jsx)(o.RYH, {
                className: M.Ni,
                color: a,
                colors: d,
            }),
            (0, s.jsx)(o.Text, {
                variant: "text-xs/medium",
                children: n.name,
            }),
        ],
    });
}
r(979217);
