n.d(t, { Z: () => E }), n(653041), n(47120);
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(959078),
    l = n(442837),
    a = n(481060),
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
    v = n(363557);
let b = (e) => (0 === e.length ? v.warning : v.danger),
    C = (e, t) => (0 === e.length ? j.NW.formatToPlainString(j.t.gX0Qc3, { gameTitle: t }) : j.NW.formatToPlainString(j.t['28Ql29'], { gameTitle: t })),
    N = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: i, consoleHelpArticle: l, expiredCredentialsInteractable: c, impressionId: p } = e;
        if (0 === s.length)
            return (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: j.NW.format(j.t.GXqvCw, { gameTitle: i })
            });
        let x = [];
        (0, h.Nj)({ quest: t }) && x.push((0, d.isWeb)() ? j.NW.string(j.t['0UTkPz']) : j.NW.string(j.t.XGRUho));
        let g = [
            ...x,
            ...s.map((e) => {
                if (e.type !== o.K.EXPIRED_CREDENTIAL || !c) return e.message;
                let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, h.C9)(e),
                    i = (0, h._j)(e);
                return j.NW.format(s, {
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
            l
        ];
        return (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: g.reduce((e, t) => [...e, t, ' '], [])
        });
    },
    E = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            s = (0, f.k3)(e.quest.id, e.location),
            o = (0, x.n)(),
            u = (0, m.O5)(),
            d = (0, p.aM)(),
            h = (0, f.g2)({
                useReducedMotion: n,
                className: v.refreshIcon
            }),
            {
                errorHints: E,
                startingConsoleQuest: T,
                startConsoleQuest: y
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
            className: i()(v.container, { [v.inFlight]: T }),
            children: [
                (0, r.jsxs)('div', {
                    className: v.info,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, r.jsx)(a.P4T, {
                                    className: i()(v.headerIcon, b(E)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: C(E, t)
                                })
                            ]
                        }),
                        N({
                            quest: e.quest,
                            errors: E,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: s,
                            expiredCredentialsInteractable: o,
                            impressionId: d
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: v.cta,
                    children: (0, r.jsx)(a.zxk, {
                        color: a.Ttl.PRIMARY,
                        onClick: y,
                        disabled: T,
                        children: (0, r.jsxs)('div', {
                            className: v.ctaInner,
                            children: [h.render(), j.NW.string(j.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
