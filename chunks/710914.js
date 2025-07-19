(n.d(t, { Z: () => h }), n(388685), n(290780), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(497505),
    c = n(415104),
    u = n(46140),
    d = n(388032),
    p = n(204997);
function h(e) {
    let { quests: t, isFetching: n } = e,
        l = null;
    if (window.location.hash.length > 0) {
        let e = window.location.hash.slice(1);
        for (let n of t)
            if (n.id === e) {
                l = e;
                break;
            }
    }
    i.useEffect(() => {
        for (let e of t)
            if (e.id === l) {
                let e = document.getElementById('quest-tile-'.concat(l));
                null == e ||
                    e.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                break;
            }
    }, [t, l]);
    let h = null != l,
        [f, g] = i.useState(window.innerWidth);
    i.useEffect(() => {
        let e = () => {
            g(window.innerWidth);
        };
        return (
            window.addEventListener('resize', e),
            () => {
                window.removeEventListener('resize', e);
            }
        );
    }, []);
    let m = f >= 1610 ? 3 : f >= 1340 ? 2 : 1,
        b = i.useMemo(() => {
            let e = [];
            for (let r of t) {
                var n;
                r.id === u.V6 && (null == (n = r.userStatus) ? void 0 : n.claimedAt) == null ? e.unshift(r) : e.push(r);
            }
            return e;
        }, [t]);
    return n && 0 === t.length
        ? (0, r.jsx)(o.$jN, { className: p.spinner })
        : 0 === t.length
          ? (0, r.jsxs)('div', {
                className: p.emptyStateContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-xl/semibold',
                        children: d.intl.string(d.t['NqFP6+'])
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-secondary',
                        children: d.intl.string(d.t.LhD4yM)
                    })
                ]
            })
          : (0, r.jsx)(
                'div',
                {
                    className: p.container,
                    children: b.map((e, t) => {
                        let n = Math.floor(t / m);
                        return (0, r.jsx)(
                            c.Z,
                            {
                                quest: e,
                                questContent: s.jn.QUEST_HOME_DESKTOP,
                                contentPosition: t,
                                rowIndex: n,
                                className: a()(p.questTile, {
                                    [p.selected]: h && e.id === l,
                                    [p.unselected]: h && e.id !== l
                                }),
                                sourceQuestContent: s.jn.QUEST_HOME_DESKTOP
                            },
                            e.id
                        );
                    })
                },
                l
            );
}
