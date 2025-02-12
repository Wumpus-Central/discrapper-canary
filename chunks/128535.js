n.d(t, { Z: () => N }), n(653041), n(47120), n(724458);
var s = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(959078),
    r = n(442837),
    o = n(481060),
    d = n(607070),
    u = n(553795),
    c = n(358085),
    m = n(617136),
    x = n(915750),
    h = n(111382),
    g = n(113434),
    C = n(918701),
    p = n(667105),
    j = n(388032),
    T = n(994731);
let v = (e) => (0 === e.length ? T.warning : T.danger),
    E = (e, t) => (0 === e.length ? j.intl.formatToPlainString(j.t.gX0Qc3, { gameTitle: t }) : j.intl.formatToPlainString(j.t['28Ql29'], { gameTitle: t })),
    f = (e) => {
        let { quest: t, location: n, errors: i, gameTitle: l, consoleHelpArticle: r, expiredCredentialsInteractable: d, impressionId: x } = e;
        if (0 === i.length)
            return (0, s.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: j.intl.format(j.t.GXqvCw, { gameTitle: l })
            });
        let h = [];
        (0, C.Nj)({ quest: t }) && h.push((0, c.isWeb)() ? j.intl.string(j.t['0UTkPz']) : j.intl.string(j.t.XGRUho));
        let g = [
            ...h,
            ...i.map((e) => {
                if (e.type !== a.K.EXPIRED_CREDENTIAL || !d) return e.message;
                let s = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    i = (0, C.C9)(e),
                    l = (0, C._j)(e);
                return j.intl.format(i, {
                    account_name: null == s ? void 0 : s.name,
                    onClick: () => {
                        (0, C.fY)(
                            {
                                quest: t,
                                platformType: l
                            },
                            {
                                content: n,
                                ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                impressionId: x
                            }
                        );
                    }
                });
            }),
            r
        ];
        return (0, s.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: g.reduce((e, t) => [...e, t, ' '], [])
        });
    },
    N = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
            i = (0, p.k3)(e.quest.id, e.location),
            a = (0, h.n)(),
            u = (0, m.O5)(),
            c = (0, x.aM)(),
            C = (0, p.g2)({
                useReducedMotion: n,
                className: T.refreshIcon
            }),
            {
                errorHints: N,
                startingConsoleQuest: S,
                startConsoleQuest: q
            } = (0, g.GI)({
                questId: e.quest.id,
                beforeRequest: () => {
                    C.startAnimation(),
                        u({
                            questId: e.quest.id,
                            questContent: e.location,
                            questContentCTA: m.jZ.DEFIBRILLATOR
                        });
                },
                afterRequest: C.stopAnimation
            });
        return (0, s.jsxs)('div', {
            className: l()(T.container, { [T.inFlight]: S }),
            children: [
                (0, s.jsxs)('div', {
                    className: T.info,
                    children: [
                        (0, s.jsxs)('div', {
                            className: T.header,
                            children: [
                                (0, s.jsx)(o.P4T, {
                                    className: l()(T.headerIcon, v(N)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                (0, s.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    children: E(N, t)
                                })
                            ]
                        }),
                        f({
                            quest: e.quest,
                            errors: N,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: i,
                            expiredCredentialsInteractable: a,
                            impressionId: c
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: T.cta,
                    children: (0, s.jsx)(o.zxk, {
                        color: o.Ttl.PRIMARY,
                        onClick: q,
                        disabled: S,
                        children: (0, s.jsxs)('div', {
                            className: T.ctaInner,
                            children: [C.render(), j.intl.string(j.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
