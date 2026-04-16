l.d(t, { A: () => p });
var n = l(627968),
    i = l(64700),
    s = l(111956),
    a = l.n(s),
    r = l(33851),
    C = l.n(r),
    o = l(136722),
    d = l(417597),
    c = l(397927),
    u = l(576705),
    m = l(504049),
    x = l(266047),
    h = l(221950),
    g = l(289687),
    H = l(779662),
    j = l(818348),
    _ = l(985018),
    f = l(825706);
let p = i.forwardRef(function (e, t) {
    let { guild: l } = e,
        s = i.useRef(null),
        r = (0, d.bG)([x.A], () => x.A.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        p = (0, d.bG)([u.A], () => u.A.can(o.kg(j.xB.MANAGE_GUILD, j.xB.KICK_MEMBERS), l)),
        b = i.useCallback(() => {
            null != l && p && (0, c.mMO)(async () => (e) => (0, n.jsx)(g.A, { ...e, guild: l }));
        }, [l, p]),
        v = (0, d.bG)([x.A], () => x.A.getSearchStateByGuildId(l.id), [l.id], C()),
        A = (0, m.Ks)(l.id),
        [V, L] = i.useState(v.query),
        N = i.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && A(), (0, h.Ld)(l.id, { query: t });
            },
            [l.id, A],
        ),
        R = i.useMemo(() => a()(N, 300), [N]),
        D = i.useCallback(
            (e) => {
                L(e), R(e);
            },
            [R],
        ),
        M = i.useCallback(() => {
            L(""), N("");
        }, [N]);
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
                        ? (0, n.jsx)(c.Heading, { variant: "heading-md/medium", children: _.intl.string(_.t.y12ALM) })
                        : (0, n.jsx)(c.Heading, { variant: "heading-md/medium", children: _.intl.string(_.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: f.Rt,
                    children: (0, n.jsx)("div", {
                        className: f.wL,
                        children: (0, n.jsx)(c.IWV, {
                            size: "sm",
                            query: V,
                            placeholder: _.intl.string(_.t["NVoAM+"]),
                            onChange: D,
                            onClear: M,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(c.YNO, {
                        targetElementRef: s,
                        animation: c.YNO.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () => (0, n.jsx)(H.default, { guildId: l.id, onClose: void 0 }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(c.Button, {
                                ...l,
                                buttonRef: s,
                                text: _.intl.string(_.t.XvNMNk),
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
                        p &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: f.__invalid_pruneButton,
                            children: (0, n.jsx)(c.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: _.intl.string(_.t["2mIlKQ"]),
                                onClick: b,
                                "aria-label": _.intl.string(_.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
