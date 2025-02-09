n.d(t, { O: () => j });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(863249),
    c = n(999382),
    d = n(209054),
    u = n(96788),
    m = n(217472),
    h = n(202905),
    g = n(44867),
    x = n(557359),
    p = n(658666),
    _ = n(307375),
    C = n(384632),
    f = n(388032),
    v = n(772962);
function N(e) {
    let { pendingState: t } = e,
        n = r.useRef(!1),
        l = r.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, d.k)(e), (0, u.V)(e), (0, a.le)(), (0, a.aC)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n]
        );
    switch (t.joinType) {
        case C.A.INVITE:
            return (0, i.jsx)(x.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case C.A.APPLY:
            return (0, i.jsx)(h.r, { pendingFields: t.pendingVerificationFields });
        case C.A.DISCOVERABLE:
            return (0, i.jsx)(g.c, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
    }
}
function j() {
    let e = (0, l.e7)([c.Z], () => c.Z.getProps().guild),
        t = (0, l.e7)([p.Z], () => p.Z.pendingState);
    r.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = r.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && m.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: a } = t;
    return (0, i.jsxs)(s.Kqy, {
        gap: 32,
        children: [
            (0, i.jsx)(s.X6q, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: f.intl.string(f.t['+hFV+P'])
            }),
            (0, i.jsx)(_.h, {
                onTypePicked: n,
                activeType: a,
                guild: e
            }),
            (0, i.jsx)('div', { className: v.divider }),
            (0, i.jsx)('div', { children: (0, i.jsx)(N, { pendingState: t }) })
        ]
    });
}
