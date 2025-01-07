n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(348327),
    a = n.n(r),
    l = n(658722),
    c = n.n(l),
    u = n(442837),
    s = n(481060),
    d = n(492435),
    g = n(353926),
    m = n(499533),
    b = n(388032);
function p(e) {
    let { id: t, experiment: n, currentBucket: o } = e;
    return (0, i.jsxs)(
        s.MenuItem,
        {
            id: t,
            label: n.title,
            action: () => (0, d.rX)(t, null),
            children: [
                n.buckets.map((e) =>
                    (0, i.jsx)(
                        s.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: m.Z.getExperimentBucketName(e),
                            checked: e === o,
                            action: () => (0, d.rX)(t, e)
                        },
                        ''.concat(e)
                    )
                ),
                (0, i.jsx)(s.MenuGroup, {
                    children:
                        -1 !== o &&
                        (0, i.jsx)(s.MenuItem, {
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
function f() {
    let e = (0, u.e7)(
            [g.Z, g.Z],
            () => {
                let e = g.Z.getRegisteredExperiments();
                return Object.keys(e).map((t) => {
                    let n = e[t],
                        i = g.Z.getExperimentOverrideDescriptor(t);
                    return {
                        id: t,
                        experiment: n,
                        currentBucket: null != i ? i.bucket : -1
                    };
                });
            },
            [],
            a()
        ),
        [t, n] = o.useState(''),
        [r, l] = o.useState([]);
    o.useEffect(() => {
        if (0 === t.trim().length) {
            l(e);
            return;
        }
        l(e.filter((e) => c()(t, e.experiment.title.toLowerCase())));
    }, [e, t]);
    let d = o.useMemo(
            () =>
                r.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 !== t;
                }),
            [r]
        ),
        m = o.useMemo(
            () =>
                r.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 === t;
                }),
            [r]
        ),
        f = o.useMemo(() => d.map(p), [d]),
        h = o.useMemo(() => m.map(p), [m]);
    return [
        (0, i.jsx)(
            s.MenuControlItem,
            {
                id: 'experiments-search',
                control: (e, o) =>
                    (0, i.jsx)(s.MenuSearchControl, {
                        ...e,
                        query: t,
                        onChange: n,
                        ref: o,
                        placeholder: b.intl.string(b.t['5h0QOD'])
                    })
            },
            'experiments-search'
        ),
        (0, i.jsx)(s.MenuSeparator, {}, 'separator'),
        ...f,
        f.length > 0 ? (0, i.jsx)(s.MenuSeparator, {}, 'separator-2') : null,
        ...h
    ];
}
