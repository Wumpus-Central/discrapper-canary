s.d(t, { A: () => k });
var r = s(477900),
    n = s(582128),
    i = s(503698),
    a = s.n(i),
    l = s(435558),
    d = s.n(l),
    c = s(192308),
    u = s(95477),
    o = s(404778),
    m = s(452027),
    h = s(834730),
    g = s(830215),
    x = s(398590),
    p = s(803306),
    f = s(356343),
    E = s(713654),
    C = s(166005),
    I = s(95701),
    N = s(34457),
    A = s(287809),
    L = s(147925),
    j = s(9865),
    v = s(620632),
    _ = s(73153),
    b = s(225123),
    S = s(345942),
    G = s(71393),
    T = s(652215);
let U = (e, t, s) => (
    _.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT", code: e }),
    new Promise((r, n) => {
        v.Bo.post({
            url: T.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
            body: { name: t, icon: s },
            oldFormErrors: !0,
            rejectWithError: (0, v.fT)(),
        }).then(
            (t) => {
                let s = t.body;
                (_.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: e, guild: s }),
                    b.A.isConnected()
                        ? G.A.addConditionalChangeListener(() => {
                              if (null != G.A.getGuild(s.id)) return ((0, S.u)(s.id), r(s), !1);
                          })
                        : ((0, S.u)(s.id), r(s)));
            },
            (t) => {
                (_.h.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: e }), n(t.body));
            },
        );
    })
);
var O = s(651539);
s(321073);
var R = s(129230),
    D = s(401755),
    Z = s(833397),
    B = s(792996),
    M = s(941094);
function k(e) {
    let t,
        s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [i, a] = n.useState(""),
        [l, d] = n.useState(null),
        [h, E] = n.useState(null),
        C = (0, O.A)(e.code);
    (n.useEffect(() => {
        !(async function () {
            let e = A.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, p.rQ)();
                } catch (e) {
                    g.A.verifySSOToken("accept_guild_template", null).catch(() => {});
                }
            null != e && a(B.intl.formatToPlainString(C.defaultName, { username: e.username }));
        })();
    }, [C.defaultName]),
        (t = n.useRef([])),
        n.useEffect(() => {
            null == e ||
                e.state === D.QB.RESOLVING ||
                t.current.includes(e.code) ||
                (t.current.push(e.code),
                R.default.track(T.HAw.CREATE_GUILD_VIEWED, {
                    guild_template_code: e.code,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId,
                }));
        }));
    let I = (0, r.jsxs)(r.Fragment, {
            children: [
                s ? (0, r.jsx)(Z.A, { guildTemplate: e }) : null,
                (0, r.jsx)("div", { className: M.Kk, children: (0, r.jsx)(f.A, { icon: l, onChange: d }) }),
                (0, r.jsx)(u.k, {
                    label: C.nameLabel,
                    helperText: B.intl.format(C.terms, { guidelinesURL: T.X7G.GUIDELINES }),
                    type: "text",
                    value: i,
                    maxLength: 100,
                    onChange: a,
                    error: h?.name,
                }),
            ],
        }),
        L = e.serializedSourceGuild.roles.map((t) => j.Wj(e.serializedSourceGuild.id, t)).filter((e) => !(0, N.Oy)(e));
    return {
        form: I,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.c, {}),
                (0, r.jsx)(m.D, {
                    label: B.intl.string(B.t.Zxk1OF),
                    helperText: B.intl.string(B.t.de7DpI),
                    children: (0, r.jsx)(y, { channels: e.serializedSourceGuild.channels }),
                }),
                L.length > 0
                    ? (0, r.jsx)(m.D, {
                          label: B.intl.string(B.t["RJ1e/r"]),
                          children: (0, r.jsx)(F, { guildId: e.serializedSourceGuild.id, roles: L }),
                      })
                    : null,
            ],
        }),
        handleSubmit: function () {
            U(e.code, i, l)
                .then(() => {
                    ((0, c.s7)(), (0, x.bz)());
                })
                .catch((e) => E(e));
        },
    };
}
function y(e) {
    let { channels: t } = e,
        s = d()(t)
            .sortBy((e) => (null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id))
            .map((e) => {
                var t;
                let s = (t = e).type === T.rbe.GUILD_CATEGORY ? L.A : (0, E.gU)((0, I.UE)(t));
                return (0, r.jsxs)(
                    "div",
                    {
                        className: a()(M.Ix, { [M.L1]: e.type === T.rbe.GUILD_CATEGORY }),
                        children: [
                            null != s ? (0, r.jsx)(s, { className: M.p }) : null,
                            (0, r.jsx)(h.E, { className: M.be, variant: "body-sm/normal", children: e.name }),
                        ],
                    },
                    e.id,
                );
            })
            .value();
    return (0, r.jsx)("div", { className: M.oD, children: s });
}
function F(e) {
    let { guildId: t, roles: s } = e,
        n = s
            .slice()
            .reverse()
            .map((e) => (0, r.jsx)("li", { children: (0, r.jsx)(C.g1, { role: e, guildId: t }) }, e.id));
    return (0, r.jsx)("ul", { className: M.F6, children: n });
}
