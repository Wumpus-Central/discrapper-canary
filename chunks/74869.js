n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(348327),
    a = n.n(l),
    u = n(658722),
    o = n.n(u),
    c = n(442837),
    s = n(481060),
    d = n(492435),
    p = n(353926),
    g = n(102687),
    h = n(388032);
function m(e) {
    let { id: t, experiment: n, currentBucket: i } = e;
    return (0, r.jsxs)(
        s.MenuItem,
        {
            id: t,
            label: n.title,
            action: () => (0, d.rX)(t, null),
            children: [
                n.buckets.map((e) =>
                    (0, r.jsx)(
                        s.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: g.Z.getExperimentBucketName(e),
                            checked: e === i,
                            action: () => (0, d.rX)(t, e)
                        },
                        ''.concat(e)
                    )
                ),
                (0, r.jsx)(s.MenuGroup, {
                    children:
                        -1 !== i &&
                        (0, r.jsx)(s.MenuItem, {
                            id: 'clear-override',
                            label: 'Clear Override',
                            color: 'danger',
                            icon: s.TrashIcon,
                            action: () => (0, d.rX)(t, null)
                        })
                })
            ]
        },
        t
    );
}
function x() {
    let e = (0, c.e7)(
            [p.Z, p.Z],
            () => {
                let e = p.Z.getRegisteredExperiments();
                return Object.keys(e).map((t) => {
                    let n = e[t],
                        r = p.Z.getExperimentOverrideDescriptor(t);
                    return {
                        id: t,
                        experiment: n,
                        currentBucket: null != r ? r.bucket : -1
                    };
                });
            },
            [],
            a()
        ),
        [t, n] = i.useState(''),
        [l, u] = i.useState([]);
    i.useEffect(() => {
        if (0 === t.trim().length) {
            u(e);
            return;
        }
        u(e.filter((e) => o()(t, e.experiment.title.toLowerCase())));
    }, [e, t]);
    let d = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 !== t;
                }),
            [l]
        ),
        g = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 === t;
                }),
            [l]
        ),
        x = i.useMemo(() => d.map(m), [d]),
        M = i.useMemo(() => g.map(m), [g]);
    return [
        (0, r.jsx)(
            s.MenuControlItem,
            {
                id: 'experiments-search',
                control: (e, i) =>
                    (0, r.jsx)(s.MenuSearchControl, {
                        ...e,
                        query: t,
                        onChange: n,
                        ref: i,
                        placeholder: h.intl.string(h.t['5h0QOD'])
                    })
            },
            'experiments-search'
        ),
        (0, r.jsx)(s.MenuSeparator, {}, 'separator'),
        ...x,
        x.length > 0 ? (0, r.jsx)(s.MenuSeparator, {}, 'separator-2') : null,
        ...M
    ];
}
