n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(691540),
    r = n(857250),
    s = n(97483),
    o = n(477782),
    d = n(834730),
    c = n(231483),
    u = n(442433),
    g = n(627794),
    A = n(928348),
    h = n(53594),
    m = n(979816),
    f = n(268749),
    p = n(239705),
    E = n(264349),
    y = n(997509),
    v = n(652215),
    _ = n(411335),
    S = n(985018),
    I = n(70631);
let x = _.uh.KEYWORD;
function b(e, t) {
    let { perGuildMaxCount: n } = h.i$[x],
        { isLoading: b, saveRule: T, errorMessage: M } = (0, f.S)(),
        { createNewEditingRule: C } = (0, f.U)(),
        [D, j] = l.useState(!1),
        [N, O] = (0, A.H6)(t),
        { rulesByTriggerType: R, updateRule: L } = (0, A.wP)(t),
        w = l.useMemo(() => R[x] ?? [], [R]),
        G = 0 === w.length,
        P = n > w.length && !G;
    if (!l.useMemo(() => (0, m.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let U = e.split(" "),
        k = U.length;
    try {
        (0, g.wk)(U, _.bV);
    } catch (e) {
        return null;
    }
    let F = () => {
            null != t &&
                ((0, u.Z_)(),
                y.A.open(t, v.BEX.GUILD_AUTOMOD),
                setTimeout(() => {
                    C(t, x, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                }, 400));
        },
        H = async (t) => {
            if (((0, u.Z_)(), !(await (0, E.Zy)(t.name, e)))) return;
            let n = {
                ...t,
                triggerMetadata: {
                    ...t.triggerMetadata,
                    keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                },
            };
            await T(n, w),
                L(n),
                null != M
                    ? (0, a.P0)((0, r.o)(S.intl.string(S.t.wH6L0r), s.Ck.FAILURE))
                    : (0, a.P0)((0, r.o)(S.intl.string(S.t["0rdYm2"]), s.Ck.SUCCESS));
        },
        Z = (0, i.jsx)(o.Dr, { id: "automod-rules-loading", label: S.intl.string(S.t.ZTNur7) });
    return (
        N ||
            (Z = (0, i.jsxs)(i.Fragment, {
                children: [
                    G &&
                        (0, i.jsx)(o.Dr, {
                            id: "add-first-rule",
                            label: S.intl.string(S.t.f72Zqb),
                            action: F,
                            disabled: b,
                        }),
                    w.map((e) => {
                        let t = (0, h.J6)(x).reduce((t, n) => {
                            let i = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == i) return t;
                            let l = (0, p.x)(n, i);
                            return t + `, ${l?.headerText}`;
                        }, "");
                        return (0, i.jsx)(
                            o.iD,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, i.jsx)(d.E, {
                                    color: "text-muted",
                                    className: I.XX,
                                    variant: "text-xs/normal",
                                    children: t.slice(2),
                                }),
                                group: "automod-rule-selection",
                                checked: !1,
                                disabled: b,
                                action: () => H(e),
                            },
                            e.id,
                        );
                    }),
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.bX, {}),
                                (0, i.jsx)(o.Dr, {
                                    id: "add-another-rule",
                                    label: S.intl.string(S.t["0K5jDE"]),
                                    action: F,
                                    disabled: b,
                                }),
                            ],
                        }),
                ],
            })),
        (0, i.jsx)(o.Dr, {
            id: "guild-automod-add-selection",
            label: S.intl.formatToPlainString(S.t.Kkjv1m, { keywordCount: k }),
            leadingAccessory: { type: "icon", icon: c.l },
            onFocus: () => {
                D || (j(!0), O());
            },
            children: Z,
        })
    );
}
