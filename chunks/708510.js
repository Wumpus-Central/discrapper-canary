n.d(t, {
    O: function () {
        return _;
    }
});
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
    f = n(307375),
    C = n(384632),
    v = n(388032),
    I = n(350559);
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
function _() {
    let e = (0, l.e7)([c.Z], () => c.Z.getProps().guild),
        t = (0, l.e7)([p.Z], () => p.Z.pendingState);
    r.useEffect(() => {
        if ((null == e ? void 0 : e.id) != null) o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = r.useCallback(
        (t) => {
            if ((null == e ? void 0 : e.id) != null) m.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: a } = t;
    return (0, i.jsxs)(s.Stack, {
        gap: 32,
        children: [
            (0, i.jsx)(s.Heading, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: v.intl.string(v.t['+hFV+P'])
            }),
            (0, i.jsx)(f.h, {
                onTypePicked: n,
                activeType: a,
                guild: e
            }),
            (0, i.jsx)('div', { className: I.divider }),
            (0, i.jsx)('div', { children: (0, i.jsx)(N, { pendingState: t }) })
        ]
    });
}
