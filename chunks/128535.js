n.d(t, { Z: () => T }), n(539854), n(388685);
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(959078),
    a = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(553795),
    d = n(358085),
    m = n(617136),
    p = n(915750),
    x = n(111382),
    g = n(113434),
    h = n(918701),
    f = n(667105),
    j = n(388032),
    b = n(166246);
let C = (e) => (0 === e.length ? b.warning : b.danger),
    v = (e, t) => (0 === e.length ? j.intl.formatToPlainString(j.t.gX0Qc3, { gameTitle: t }) : j.intl.formatToPlainString(j.t['28Ql29'], { gameTitle: t })),
    y = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: i, consoleHelpArticle: a, expiredCredentialsInteractable: c, impressionId: p } = e;
        if (0 === s.length)
            return (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: j.intl.format(j.t.GXqvCw, { gameTitle: i })
            });
        let x = [];
        (0, h.Nj)({ quest: t }) && x.push((0, d.isWeb)() ? j.intl.string(j.t['0UTkPz']) : j.intl.string(j.t.XGRUho));
        let g = [
            ...x,
            ...s.map((e) => {
                if (e.type !== o.K.EXPIRED_CREDENTIAL || !c) return e.message;
                let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, h.C9)(e),
                    i = (0, h._j)(e);
                return j.intl.format(s, {
                    account_name: null == r ? void 0 : r.name,
                    onClick: () => {
                        (0, h.fY)(
                            {
                                quest: t,
                                platformType: i
                            },
                            {
                                content: n,
                                ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                impressionId: p
                            }
                        );
                    }
                });
            }),
            a
        ];
        return (0, r.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: g.reduce((e, t) => [...e, t, ' '], [])
        });
    },
    T = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            s = (0, f.k3)(e.quest.id, e.location),
            o = (0, x.n)(),
            u = (0, m.O5)(),
            d = (0, p.aM)(),
            h = (0, f.g2)({
                useReducedMotion: n,
                className: b.refreshIcon
            }),
            {
                errorHints: T,
                startingConsoleQuest: O,
                startConsoleQuest: E
            } = (0, g.GI)({
                questId: e.quest.id,
                beforeRequest: () => {
                    h.startAnimation(),
                        u({
                            questId: e.quest.id,
                            questContent: e.location,
                            questContentCTA: m.jZ.DEFIBRILLATOR
                        });
                },
                afterRequest: h.stopAnimation
            });
        return (0, r.jsxs)('div', {
            className: i()(b.container, { [b.inFlight]: O }),
            children: [
                (0, r.jsxs)('div', {
                    className: b.info,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.header,
                            children: [
                                (0, r.jsx)(l.P4T, {
                                    className: i()(b.headerIcon, C(T)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    children: v(T, t)
                                })
                            ]
                        }),
                        y({
                            quest: e.quest,
                            errors: T,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: s,
                            expiredCredentialsInteractable: o,
                            impressionId: d
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: b.cta,
                    children: (0, r.jsx)(l.zxk, {
                        color: l.Ttl.PRIMARY,
                        onClick: E,
                        disabled: O,
                        children: (0, r.jsxs)('div', {
                            className: b.ctaInner,
                            children: [h.render(), j.intl.string(j.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
