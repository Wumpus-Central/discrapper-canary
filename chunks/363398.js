n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(442433),
    s = n(627794),
    o = n(928348),
    d = n(53594),
    c = n(979816),
    u = n(268749),
    g = n(239705),
    A = n(264349),
    p = n(997509),
    m = n(652215),
    f = n(411335),
    y = n(985018),
    h = n(300328);
let E = f.uh.KEYWORD;
function S(e, t) {
    let { perGuildMaxCount: n } = d.i$[E],
        { isLoading: S, saveRule: _, errorMessage: b } = (0, u.S)(),
        { createNewEditingRule: v } = (0, u.U)(),
        [I, T] = l.useState(!1),
        [x, D] = (0, o.H6)(t),
        { rulesByTriggerType: j, updateRule: M } = (0, o.wP)(t),
        C = l.useMemo(() => j[E] ?? [], [j]),
        N = 0 === C.length,
        O = n > C.length && !N;
    if (!l.useMemo(() => (0, c.i_)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let R = e.split(" "),
        G = R.length;
    try {
        (0, s.wk)(R, f.bV);
    } catch (e) {
        return null;
    }
    let L = () => {
            null != t &&
                ((0, r.Z_)(),
                p.A.open(t, m.BEX.GUILD_AUTOMOD),
                setTimeout(() => {
                    v(t, E, { triggerMetadata: { keywordFilter: [e], regexPatterns: [], allowList: [] } });
                }, 400));
        },
        P = async (t) => {
            if (((0, r.Z_)(), !(await (0, A.Zy)(t.name, e)))) return;
            let n = {
                ...t,
                triggerMetadata: {
                    ...t.triggerMetadata,
                    keywordFilter: [...(t.triggerMetadata?.keywordFilter ?? []), e],
                },
            };
            await _(n, C),
                M(n),
                null != b
                    ? (0, a.showToast)((0, a.createToast)(y.intl.string(y.t.wH6L0r), a.ToastType.FAILURE))
                    : (0, a.showToast)((0, a.createToast)(y.intl.string(y.t["0rdYm2"]), a.ToastType.SUCCESS));
        },
        U = (0, i.jsx)(a.Drp, { id: "automod-rules-loading", label: y.intl.string(y.t.ZTNur7) });
    return (
        x ||
            (U = (0, i.jsxs)(i.Fragment, {
                children: [
                    N &&
                        (0, i.jsx)(a.Drp, {
                            id: "add-first-rule",
                            label: y.intl.string(y.t.f72Zqb),
                            action: L,
                            disabled: S,
                        }),
                    C.map((e) => {
                        let t = (0, d.J6)(E).reduce((t, n) => {
                            let i = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == i) return t;
                            let l = (0, g.x)(n, i);
                            return t + `, ${l?.headerText}`;
                        }, "");
                        return (0, i.jsx)(
                            a.iDA,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, i.jsx)(a.Text, {
                                    color: "text-muted",
                                    className: h.XX,
                                    variant: "text-xs/normal",
                                    children: t.slice(2),
                                }),
                                group: "automod-rule-selection",
                                checked: !1,
                                disabled: S,
                                action: () => P(e),
                            },
                            e.id,
                        );
                    }),
                    O &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(a.bXX, {}),
                                (0, i.jsx)(a.Drp, {
                                    id: "add-another-rule",
                                    label: y.intl.string(y.t["0K5jDE"]),
                                    action: L,
                                    disabled: S,
                                }),
                            ],
                        }),
                ],
            })),
        (0, i.jsx)(a.Drp, {
            id: "guild-automod-add-selection",
            label: y.intl.formatToPlainString(y.t.Kkjv1m, { keywordCount: G }),
            leadingAccessory: { type: "icon", icon: a.lmn },
            onFocus: () => {
                I || (T(!0), D());
            },
            children: U,
        })
    );
}
