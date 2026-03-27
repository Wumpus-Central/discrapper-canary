s.d(t, { A: () => M });
var r = s(627968),
    n = s(64700),
    i = s(503698),
    l = s.n(i),
    a = s(735438),
    d = s.n(a),
    c = s(397927),
    u = s(830215),
    C = s(398590),
    o = s(803306),
    L = s(356343),
    m = s(713654),
    h = s(166005),
    x = s(95701),
    g = s(34457),
    p = s(287809),
    f = s(147925),
    j = s(9865),
    E = s(79680),
    A = s(651539),
    v = s(774393),
    N = s(768397),
    I = s(652215),
    Z = s(985018),
    b = s(61642);
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [s, i] = n.useState(""),
        [l, a] = n.useState(null),
        [d, m] = n.useState(null),
        h = (0, A.A)(e.code);
    n.useEffect(() => {
        !(async function () {
            let e = p.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, o.rQ)();
                } catch (e) {
                    u.A.verifySSOToken("accept_guild_template", null);
                }
            null != e && i(Z.intl.formatToPlainString(h.defaultName, { username: e.username }));
        })();
    }, [h.defaultName]),
        (0, v.A)(e);
    let x = (0, r.jsxs)(r.Fragment, {
            children: [
                t ? (0, r.jsx)(N.A, { guildTemplate: e }) : null,
                (0, r.jsx)("div", { className: b.Kk, children: (0, r.jsx)(L.A, { icon: l, onChange: a }) }),
                (0, r.jsx)(c.ksK, {
                    label: h.nameLabel,
                    helperText: Z.intl.format(h.terms, { guidelinesURL: I.X7G.GUIDELINES }),
                    type: "text",
                    value: s,
                    maxLength: 100,
                    onChange: i,
                    error: d?.name,
                }),
            ],
        }),
        f = e.serializedSourceGuild.roles.map((t) => j.Wj(e.serializedSourceGuild.id, t)).filter((e) => !(0, g.Oy)(e));
    return {
        form: x,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.cGx, {}),
                (0, r.jsx)(c.D0$, {
                    label: Z.intl.string(Z.t.Zxk1OF),
                    helperText: Z.intl.string(Z.t.de7DpI),
                    children: (0, r.jsx)(_, { channels: e.serializedSourceGuild.channels }),
                }),
                f.length > 0
                    ? (0, r.jsx)(c.D0$, {
                          label: Z.intl.string(Z.t["RJ1e/r"]),
                          children: (0, r.jsx)(G, { guildId: e.serializedSourceGuild.id, roles: f }),
                      })
                    : null,
            ],
        }),
        handleSubmit: () => {
            E.A.acceptGuildTemplate(e.code, s, l)
                .then(() => {
                    (0, c.s7G)(), (0, C.bz)();
                })
                .catch((e) => m(e));
        },
    };
}
function _(e) {
    let { channels: t } = e,
        s = d()(t)
            .sortBy((e) => (null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let s = (t = e).type === I.rbe.GUILD_CATEGORY ? f.A : (0, m.gU)((0, x.UE)(t));
                return (0, r.jsxs)(
                    "div",
                    {
                        className: l()(b.Ix, { [b.L1]: e.type === I.rbe.GUILD_CATEGORY }),
                        children: [
                            null != s ? (0, r.jsx)(s, { className: b.p }) : null,
                            (0, r.jsx)(c.Text, { className: b.be, variant: "text-sm/normal", children: e.name }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("div", { className: b.oD, children: s });
}
function G(e) {
    let { guildId: t, roles: s } = e,
        n = s
            .slice()
            .reverse()
            .map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(h.g1, { role: e, guildId: t }) }, e.id));
    return (0, r.jsx)("ul", { className: b.F6, children: n });
}
s(979217);
