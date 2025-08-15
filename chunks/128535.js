n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(951288);
n(647438);
var s = n(120356),
    o = n.n(s),
    i = n(959078),
    a = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(553795),
    m = n(358085),
    p = n(617136),
    g = n(915750),
    h = n(111382),
    x = n(509212),
    j = n(113434),
    C = n(667105),
    f = n(388032),
    b = n(270247);
let v = function (e) {
    let t,
        n,
        s = e.quest.config.messages.gameTitle,
        v = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        y = (0, C.k3)(e.quest.id, e.location, e.sourceQuestContent),
        O = (0, h.n)(),
        N = (0, p.O5)(),
        E = (0, g.aM)(),
        T = (0, C.g2)({
            useReducedMotion: v,
            className: b.refreshIcon,
        }),
        {
            errorHints: q,
            startingConsoleQuest: S,
            startConsoleQuest: P,
        } = (0, j.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                T.startAnimation(),
                    N({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: p.jZ.DEFIBRILLATOR,
                        sourceQuestContent: e.sourceQuestContent,
                    });
            },
            afterRequest: T.stopAnimation,
        });
    return (0, r.jsxs)("div", {
        className: o()(b.container, { [b.inFlight]: S }),
        children: [
            (0, r.jsxs)("div", {
                className: b.info,
                children: [
                    (0, r.jsxs)("div", {
                        className: b.header,
                        children: [
                            (0, r.jsx)(c.Mgn, {
                                className: o()(b.headerIcon, 0 === q.length ? b.warning : b.danger),
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                children:
                                    ((t = q),
                                    (n = s),
                                    0 === t.length
                                        ? f.intl.formatToPlainString(f.t.gX0Qc3, { gameTitle: n })
                                        : f.intl.formatToPlainString(f.t["28Ql29"], { gameTitle: n })),
                            }),
                        ],
                    }),
                    ((e) => {
                        let {
                            quest: t,
                            location: n,
                            errors: s,
                            gameTitle: o,
                            consoleHelpArticle: a,
                            expiredCredentialsInteractable: l,
                            impressionId: u,
                            sourceQuestContent: g,
                        } = e;
                        if (0 === s.length)
                            return (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: f.intl.format(f.t.GXqvCw, { gameTitle: o }),
                            });
                        let h = [];
                        (0, x.Nj)({ quest: t }) &&
                            h.push((0, m.isWeb)() ? f.intl.string(f.t["0UTkPz"]) : f.intl.string(f.t.XGRUho));
                        let j = [
                            ...h,
                            ...s.map((e) => {
                                if (e.type !== i.K.EXPIRED_CREDENTIAL || !l) return e.message;
                                let r = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                    s = (0, x.C9)(e),
                                    o = (0, x._j)(e);
                                return f.intl.format(s, {
                                    account_name: null == r ? void 0 : r.name,
                                    onClick: () => {
                                        (0, x.fY)(
                                            {
                                                quest: t,
                                                platformType: o,
                                            },
                                            {
                                                content: n,
                                                ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                impressionId: u,
                                                sourceQuestContent: g,
                                            },
                                        );
                                    },
                                });
                            }),
                            a,
                        ];
                        return (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: j.reduce((e, t) => [...e, t, " "], []),
                        });
                    })({
                        quest: e.quest,
                        errors: q,
                        gameTitle: s,
                        location: e.location,
                        consoleHelpArticle: y,
                        expiredCredentialsInteractable: O,
                        impressionId: E,
                        sourceQuestContent: e.sourceQuestContent,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: b.cta,
                children: (0, r.jsx)(l.zx, {
                    color: l.Tt.PRIMARY,
                    onClick: P,
                    disabled: S,
                    children: (0, r.jsxs)("div", {
                        className: b.ctaInner,
                        children: [T.render(), f.intl.string(f.t.nPThNT)],
                    }),
                }),
            }),
        ],
    });
};
