s.d(t, { A: () => T });
var r = s(627968),
    n = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(735438),
    d = s.n(a),
    c = s(192308),
    u = s(292666),
    C = s(404778),
    o = s(452027),
    L = s(834730),
    m = s(830215),
    h = s(398590),
    x = s(803306),
    g = s(356343),
    p = s(713654),
    f = s(166005),
    E = s(95701),
    j = s(34457),
    A = s(287809),
    v = s(147925),
    N = s(9865),
    I = s(79680),
    Z = s(651539),
    b = s(774393),
    M = s(768397),
    _ = s(652215),
    G = s(985018),
    S = s(274341);
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [s, l] = n.useState(""),
        [i, a] = n.useState(null),
        [d, L] = n.useState(null),
        p = (0, Z.A)(e.code);
    n.useEffect(() => {
        !(async function () {
            let e = A.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, x.rQ)();
                } catch (e) {
                    m.A.verifySSOToken("accept_guild_template", null);
                }
            null != e && l(G.intl.formatToPlainString(p.defaultName, { username: e.username }));
        })();
    }, [p.defaultName]),
        (0, b.A)(e);
    let f = (0, r.jsxs)(r.Fragment, {
            children: [
                t ? (0, r.jsx)(M.A, { guildTemplate: e }) : null,
                (0, r.jsx)("div", { className: S.Kk, children: (0, r.jsx)(g.A, { icon: i, onChange: a }) }),
                (0, r.jsx)(u.k, {
                    label: p.nameLabel,
                    helperText: G.intl.format(p.terms, { guidelinesURL: _.X7G.GUIDELINES }),
                    type: "text",
                    value: s,
                    maxLength: 100,
                    onChange: l,
                    error: d?.name,
                }),
            ],
        }),
        E = e.serializedSourceGuild.roles.map((t) => N.Wj(e.serializedSourceGuild.id, t)).filter((e) => !(0, j.Oy)(e));
    return {
        form: f,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.c, {}),
                (0, r.jsx)(o.D, {
                    label: G.intl.string(G.t.Zxk1OF),
                    helperText: G.intl.string(G.t.de7DpI),
                    children: (0, r.jsx)(H, { channels: e.serializedSourceGuild.channels }),
                }),
                E.length > 0
                    ? (0, r.jsx)(o.D, {
                          label: G.intl.string(G.t["RJ1e/r"]),
                          children: (0, r.jsx)(U, { guildId: e.serializedSourceGuild.id, roles: E }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            I.A.acceptGuildTemplate(e.code, s, i)
                .then(() => {
                    (0, c.closeAllModals)(), (0, h.bz)();
                })
                .catch((e) => L(e));
        },
    };
}
function H(e) {
    let { channels: t } = e,
        s = d()(t)
            .sortBy((e) => (null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let s = (t = e).type === _.rbe.GUILD_CATEGORY ? v.A : (0, p.gU)((0, E.UE)(t));
                return (0, r.jsxs)(
                    "div",
                    {
                        className: i()(S.Ix, { [S.L1]: e.type === _.rbe.GUILD_CATEGORY }),
                        children: [
                            null != s ? (0, r.jsx)(s, { className: S.p }) : null,
                            (0, r.jsx)(L.E, { className: S.be, variant: "text-sm/normal", children: e.name }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("div", { className: S.oD, children: s });
}
function U(e) {
    let { guildId: t, roles: s } = e,
        n = s
            .slice()
            .reverse()
            .map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(f.g1, { role: e, guildId: t }) }, e.id));
    return (0, r.jsx)("ul", { className: S.F6, children: n });
}
s(979217);
