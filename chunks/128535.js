n.d(t, { Z: () => y }), n(653041), n(47120);
var r = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    i = n(959078),
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
    N = (e, t) => (0 === e.length ? j.NW.formatToPlainString(j.t.gX0Qc3, { gameTitle: t }) : j.NW.formatToPlainString(j.t['28Ql29'], { gameTitle: t })),
    v = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: o, consoleHelpArticle: a, expiredCredentialsInteractable: c, impressionId: p } = e;
        if (0 === s.length)
            return (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: j.NW.format(j.t.GXqvCw, { gameTitle: o })
            });
        let x = [];
        (0, h.Nj)({ quest: t }) && x.push((0, d.isWeb)() ? j.NW.string(j.t['0UTkPz']) : j.NW.string(j.t.XGRUho));
        let g = [
            ...x,
            ...s.map((e) => {
                if (e.type !== i.K.EXPIRED_CREDENTIAL || !c) return e.message;
                let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, h.C9)(e),
                    o = (0, h._j)(e);
                return j.NW.format(s, {
                    account_name: null == r ? void 0 : r.name,
                    onClick: () => {
                        (0, h.fY)(
                            {
                                quest: t,
                                platformType: o
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
    y = function (e) {
        let t = e.quest.config.messages.gameTitle,
            n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            s = (0, f.k3)(e.quest.id, e.location),
            i = (0, x.n)(),
            u = (0, m.O5)(),
            d = (0, p.aM)(),
            h = (0, f.g2)({
                useReducedMotion: n,
                className: b.refreshIcon
            }),
            {
                errorHints: y,
                startingConsoleQuest: O,
                startConsoleQuest: T
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
            className: o()(b.container, { [b.inFlight]: O }),
            children: [
                (0, r.jsxs)('div', {
                    className: b.info,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.header,
                            children: [
                                (0, r.jsx)(l.P4T, {
                                    className: o()(b.headerIcon, C(y)),
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/semibold',
                                    children: N(y, t)
                                })
                            ]
                        }),
                        v({
                            quest: e.quest,
                            errors: y,
                            gameTitle: t,
                            location: e.location,
                            consoleHelpArticle: s,
                            expiredCredentialsInteractable: i,
                            impressionId: d
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: b.cta,
                    children: (0, r.jsx)(l.zxk, {
                        color: l.Ttl.PRIMARY,
                        onClick: T,
                        disabled: O,
                        children: (0, r.jsxs)('div', {
                            className: b.ctaInner,
                            children: [h.render(), j.NW.string(j.t.nPThNT)]
                        })
                    })
                })
            ]
        });
    };
