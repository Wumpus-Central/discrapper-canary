(n.d(t, { Z: () => S }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(959078),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(607070),
    d = n(553795),
    f = n(358085),
    _ = n(617136),
    p = n(915750),
    h = n(111382),
    m = n(509212),
    g = n(113434),
    E = n(667105),
    b = n(388032),
    y = n(166246);
let O = 16,
    v = (e) => (0 === e.length ? y.warning : y.danger),
    I = (e, t) => (0 === e.length ? b.intl.formatToPlainString(b.t.gX0Qc3, { gameTitle: t }) : b.intl.formatToPlainString(b.t['28Ql29'], { gameTitle: t })),
    T = (e) => {
        let { quest: t, location: n, errors: i, gameTitle: o, consoleHelpArticle: s, expiredCredentialsInteractable: l, impressionId: u, sourceQuestContent: p } = e;
        if (0 === i.length)
            return (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: b.intl.format(b.t.GXqvCw, { gameTitle: o })
            });
        let h = [],
            g = [s];
        (0, m.Nj)({ quest: t }) && h.push((0, f.isWeb)() ? b.intl.string(b.t['0UTkPz']) : b.intl.string(b.t.XGRUho));
        let E = [
            ...h,
            ...i.map((e) => {
                if (e.type !== a.K.EXPIRED_CREDENTIAL || !l) return e.message;
                let r = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    i = (0, m.C9)(e),
                    o = (0, m._j)(e);
                return b.intl.format(i, {
                    account_name: null == r ? void 0 : r.name,
                    onClick: () => {
                        (0, m.fY)(
                            {
                                quest: t,
                                platformType: o
                            },
                            {
                                content: n,
                                ctaContent: _.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                impressionId: u,
                                sourceQuestContent: p
                            }
                        );
                    }
                });
            }),
            ...g
        ];
        return (0, r.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: E.reduce((e, t) => [...e, t, ' '], [])
        });
    },
    S = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            i = (0, E.k3)(e.quest.id, e.location, e.sourceQuestContent),
            a = (0, h.n)(),
            d = (0, _.O5)(),
            f = (0, p.aM)(),
            m = (0, E.g2)({
                useReducedMotion: n,
                className: y.refreshIcon
            }),
            {
                errorHints: S,
                startingConsoleQuest: A,
                startConsoleQuest: N
            } = (0, g.GI)({
                questId: e.quest.id,
                beforeRequest: () => {
                    (m.startAnimation(),
                        d({
                            questId: e.quest.id,
                            questContent: e.location,
                            questContentCTA: _.jZ.DEFIBRILLATOR,
                            sourceQuestContent: e.sourceQuestContent
                        }));
                },
                afterRequest: m.stopAnimation
            });
        return (0, r.jsxs)('div', {
            className: o()(y.container, { [y.inFlight]: A }),
            children: [
                (0, r.jsxs)('div', {
                    className: y.info,
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.header,
                            children: [
                                (0, r.jsx)(c.Mgn, {
                                    className: o()(y.headerIcon, v(S)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: O,
                                    height: O
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: I(S, t)
                                })
                            ]
                        }),
                        T({
                            quest: e.quest,
                            errors: S,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: i,
                            expiredCredentialsInteractable: a,
                            impressionId: f,
                            sourceQuestContent: e.sourceQuestContent
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: y.cta,
                    children: (0, r.jsx)(l.zx, {
                        color: l.Tt.PRIMARY,
                        onClick: N,
                        disabled: A,
                        children: (0, r.jsxs)('div', {
                            className: y.ctaInner,
                            children: [m.render(), b.intl.string(b.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
