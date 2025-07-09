(n.d(t, { Z: () => N }), n(539854), n(388685));
var r = n(255367);
n(73800);
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
    h = n(915750),
    x = n(111382),
    g = n(113434),
    j = n(918701),
    C = n(667105),
    f = n(388032),
    b = n(166246);
let v = (e) => (0 === e.length ? b.warning : b.danger),
    y = (e, t) => (0 === e.length ? f.intl.formatToPlainString(f.t.gX0Qc3, { gameTitle: t }) : f.intl.formatToPlainString(f.t['28Ql29'], { gameTitle: t })),
    O = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: o, consoleHelpArticle: a, expiredCredentialsInteractable: l, impressionId: u, sourceQuestContent: h } = e;
        if (0 === s.length)
            return (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: f.intl.format(f.t.GXqvCw, { gameTitle: o })
            });
        let x = [];
        (0, j.Nj)({ quest: t }) && x.push((0, m.isWeb)() ? f.intl.string(f.t['0UTkPz']) : f.intl.string(f.t.XGRUho));
        let g = [
            ...x,
            ...s.map((e) => {
                if (e.type !== i.K.EXPIRED_CREDENTIAL || !l) return e.message;
                let r = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, j.C9)(e),
                    o = (0, j._j)(e);
                return f.intl.format(s, {
                    account_name: null == r ? void 0 : r.name,
                    onClick: () => {
                        (0, j.fY)(
                            {
                                quest: t,
                                platformType: o
                            },
                            {
                                content: n,
                                ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                impressionId: u,
                                sourceQuestContent: h
                            }
                        );
                    }
                });
            }),
            a
        ];
        return (0, r.jsx)(c.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: g.reduce((e, t) => [...e, t, ' '], [])
        });
    },
    N = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
            s = (0, C.k3)(e.quest.id, e.location, e.sourceQuestContent),
            i = (0, x.n)(),
            d = (0, p.O5)(),
            m = (0, h.aM)(),
            j = (0, C.g2)({
                useReducedMotion: n,
                className: b.refreshIcon
            }),
            {
                errorHints: N,
                startingConsoleQuest: T,
                startConsoleQuest: E
            } = (0, g.GI)({
                questId: e.quest.id,
                beforeRequest: () => {
                    (j.startAnimation(),
                        d({
                            questId: e.quest.id,
                            questContent: e.location,
                            questContentCTA: p.jZ.DEFIBRILLATOR,
                            sourceQuestContent: e.sourceQuestContent
                        }));
                },
                afterRequest: j.stopAnimation
            });
        return (0, r.jsxs)('div', {
            className: o()(b.container, { [b.inFlight]: T }),
            children: [
                (0, r.jsxs)('div', {
                    className: b.info,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.header,
                            children: [
                                (0, r.jsx)(c.P4T, {
                                    className: o()(b.headerIcon, v(N)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: y(N, t)
                                })
                            ]
                        }),
                        O({
                            quest: e.quest,
                            errors: N,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: s,
                            expiredCredentialsInteractable: i,
                            impressionId: m,
                            sourceQuestContent: e.sourceQuestContent
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: b.cta,
                    children: (0, r.jsx)(l.zx, {
                        color: l.Tt.PRIMARY,
                        onClick: E,
                        disabled: T,
                        children: (0, r.jsxs)('div', {
                            className: b.ctaInner,
                            children: [j.render(), f.intl.string(f.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
