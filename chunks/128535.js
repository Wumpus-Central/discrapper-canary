n(653041), n(47120), n(724458);
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(959078),
    o = n(442837),
    a = n(481060),
    u = n(607070),
    c = n(553795),
    d = n(358085),
    m = n(617136),
    x = n(915750),
    h = n(111382),
    C = n(113434),
    p = n(918701),
    g = n(667105),
    E = n(388032),
    j = n(882924);
let T = (e) => (0 === e.length ? j.warning : j.danger),
    f = (e, t) => (0 === e.length ? E.intl.formatToPlainString(E.t.gX0Qc3, { gameTitle: t }) : E.intl.formatToPlainString(E.t['28Ql29'], { gameTitle: t })),
    v = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: l, consoleHelpArticle: o, expiredCredentialsInteractable: u, impressionId: x } = e;
        if (0 === s.length)
            return (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: E.intl.format(E.t.GXqvCw, { gameTitle: l })
            });
        let h = [];
        (0, p.Nj)({ quest: t }) && h.push((0, d.isWeb)() ? E.intl.string(E.t['0UTkPz']) : E.intl.string(E.t.XGRUho));
        let C = [
            ...h,
            ...s.map((e) => {
                if (e.type !== r.K.EXPIRED_CREDENTIAL || !u) return e.message;
                let i = c.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, p.C9)(e),
                    l = (0, p._j)(e);
                return E.intl.format(s, {
                    account_name: null == i ? void 0 : i.name,
                    onClick: () => {
                        (0, p.fY)(
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
            o
        ];
        return (0, i.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: C.reduce((e, t) => [...e, t, ' '], [])
        });
    };
t.Z = function (e) {
    let t = e.quest.config.messages.gameTitle,
        n = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        s = (0, g.k3)(e.quest.id, e.location),
        r = (0, h.n)(),
        c = (0, m.O5)(),
        d = (0, x.aM)(),
        p = (0, g.g2)({
            useReducedMotion: n,
            className: j.refreshIcon
        }),
        {
            errorHints: S,
            startingConsoleQuest: N,
            startConsoleQuest: q
        } = (0, C.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                p.startAnimation(),
                    c({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: p.stopAnimation
        });
    return (0, i.jsxs)('div', {
        className: l()(j.container, { [j.inFlight]: N }),
        children: [
            (0, i.jsxs)('div', {
                className: j.info,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.header,
                        children: [
                            (0, i.jsx)(a.CircleWarningIcon, {
                                className: l()(j.headerIcon, T(S)),
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/semibold',
                                children: f(S, t)
                            })
                        ]
                    }),
                    v({
                        quest: e.quest,
                        errors: S,
                        gameTitle: t,
                        location: e.location,
                        consoleHelpArticle: s,
                        expiredCredentialsInteractable: r,
                        impressionId: d
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.cta,
                children: (0, i.jsx)(a.Button, {
                    color: a.ButtonColors.PRIMARY,
                    onClick: q,
                    disabled: N,
                    children: (0, i.jsxs)('div', {
                        className: j.ctaInner,
                        children: [p.render(), E.intl.string(E.t.nPThNT)]
                    })
                })
            })
        ]
    });
};
