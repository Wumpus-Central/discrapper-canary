l.d(t, { A: () => j });
var n = l(627968),
    i = l(64700),
    a = l(111956),
    s = l.n(a),
    r = l(33851),
    o = l.n(r),
    C = l(136722),
    d = l(417597),
    c = l(397927),
    u = l(576705),
    m = l(504049),
    x = l(266047),
    h = l(221950),
    g = l(289687),
    _ = l(779662),
    H = l(818348),
    p = l(985018),
    f = l(20093);
let j = i.forwardRef(function (e, t) {
    let { guild: l } = e,
        a = i.useRef(null),
        r = (0, d.bG)([x.A], () => x.A.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        j = (0, d.bG)([u.A], () => u.A.can(C.kg(H.xB.MANAGE_GUILD, H.xB.KICK_MEMBERS), l)),
        b = i.useCallback(() => {
            null != l && j && (0, c.mMO)(async () => (e) => (0, n.jsx)(g.A, { ...e, guild: l }));
        }, [l, j]),
        v = (0, d.bG)([x.A], () => x.A.getSearchStateByGuildId(l.id), [l.id], o()),
        A = (0, m.Ks)(l.id),
        [N, L] = i.useState(v.query),
        V = i.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && A(), (0, h.Ld)(l.id, { query: t });
            },
            [l.id, A],
        ),
        R = i.useMemo(() => s()(V, 300), [V]),
        M = i.useCallback(
            (e) => {
                L(e), R(e);
            },
            [R],
        ),
        D = i.useCallback(() => {
            L(""), V("");
        }, [V]);
    return (
        i.useImperativeHandle(t, () => ({
            resetSearchText() {
                L("");
            },
        })),
        (0, n.jsxs)("div", {
            className: f.db,
            children: [
                (0, n.jsx)("div", {
                    className: f.wL,
                    children: r
                        ? (0, n.jsx)(c.Heading, { variant: "heading-md/medium", children: p.intl.string(p.t.y12ALM) })
                        : (0, n.jsx)(c.Heading, { variant: "heading-md/medium", children: p.intl.string(p.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: f.Rt,
                    children: (0, n.jsx)("div", {
                        className: f.wL,
                        children: (0, n.jsx)(c.IWV, {
                            size: "sm",
                            query: N,
                            placeholder: p.intl.string(p.t["NVoAM+"]),
                            onChange: M,
                            onClear: D,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(c.YNO, {
                        targetElementRef: a,
                        animation: c.YNO.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () => (0, n.jsx)(_.default, { guildId: l.id, onClose: void 0 }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(c.Button, {
                                ...l,
                                buttonRef: a,
                                text: p.intl.string(p.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: c.JNJ,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: f.nw,
                    children:
                        j &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: f.__invalid_pruneButton,
                            children: (0, n.jsx)(c.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: p.intl.string(p.t["2mIlKQ"]),
                                onClick: b,
                                "aria-label": p.intl.string(p.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
