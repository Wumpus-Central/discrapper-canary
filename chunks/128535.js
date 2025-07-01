(n.d(t, { Z: () => O }), n(539854), n(388685));
var r = n(255367);
n(73800);
var s = n(120356),
    o = n.n(s),
    i = n(959078),
    l = n(442837),
    a = n(481060),
    c = n(607070),
    u = n(553795),
    d = n(358085),
    m = n(617136),
    p = n(915750),
    h = n(111382),
    x = n(113434),
    g = n(918701),
    j = n(667105),
    C = n(388032),
    f = n(166246);
let b = (e) => (0 === e.length ? f.warning : f.danger),
    v = (e, t) => (0 === e.length ? C.intl.formatToPlainString(C.t.gX0Qc3, { gameTitle: t }) : C.intl.formatToPlainString(C.t['28Ql29'], { gameTitle: t })),
    y = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: o, consoleHelpArticle: l, expiredCredentialsInteractable: c, impressionId: p, sourceQuestContent: h } = e;
        if (0 === s.length)
            return (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: C.intl.format(C.t.GXqvCw, { gameTitle: o })
            });
        let x = [];
        (0, g.Nj)({ quest: t }) && x.push((0, d.isWeb)() ? C.intl.string(C.t['0UTkPz']) : C.intl.string(C.t.XGRUho));
        let j = [
            ...x,
            ...s.map((e) => {
                if (e.type !== i.K.EXPIRED_CREDENTIAL || !c) return e.message;
                let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, g.C9)(e),
                    o = (0, g._j)(e);
                return C.intl.format(s, {
                    account_name: null == r ? void 0 : r.name,
                    onClick: () => {
                        (0, g.fY)(
                            {
                                quest: t,
                                platformType: o
                            },
                            {
                                content: n,
                                ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                impressionId: p,
                                sourceQuestContent: h
                            }
                        );
                    }
                });
            }),
            l
        ];
        return (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: j.reduce((e, t) => [...e, t, ' '], [])
        });
    },
    O = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            s = (0, j.k3)(e.quest.id, e.location, e.sourceQuestContent),
            i = (0, h.n)(),
            u = (0, m.O5)(),
            d = (0, p.aM)(),
            g = (0, j.g2)({
                useReducedMotion: n,
                className: f.refreshIcon
            }),
            {
                errorHints: O,
                startingConsoleQuest: N,
                startConsoleQuest: T
            } = (0, x.GI)({
                questId: e.quest.id,
                beforeRequest: () => {
                    (g.startAnimation(),
                        u({
                            questId: e.quest.id,
                            questContent: e.location,
                            questContentCTA: m.jZ.DEFIBRILLATOR,
                            sourceQuestContent: e.sourceQuestContent
                        }));
                },
                afterRequest: g.stopAnimation
            });
        return (0, r.jsxs)('div', {
            className: o()(f.container, { [f.inFlight]: N }),
            children: [
                (0, r.jsxs)('div', {
                    className: f.info,
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.header,
                            children: [
                                (0, r.jsx)(a.P4T, {
                                    className: o()(f.headerIcon, b(O)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: v(O, t)
                                })
                            ]
                        }),
                        y({
                            quest: e.quest,
                            errors: O,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: s,
                            expiredCredentialsInteractable: i,
                            impressionId: d,
                            sourceQuestContent: e.sourceQuestContent
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: f.cta,
                    children: (0, r.jsx)(a.zxk, {
                        color: a.Ttl.PRIMARY,
                        onClick: T,
                        disabled: N,
                        children: (0, r.jsxs)('div', {
                            className: f.ctaInner,
                            children: [g.render(), C.intl.string(C.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
