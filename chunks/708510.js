n.d(t, { O: () => v });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(456268),
    o = n(863249),
    c = n(999382),
    d = n(209054),
    u = n(96788),
    m = n(217472),
    g = n(202905),
    p = n(44867),
    h = n(557359),
    f = n(658666),
    b = n(307375),
    x = n(384632),
    j = n(388032),
    N = n(162193);
function _(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        s = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, d.k)(e), (0, u.V)(e), (0, l.le)(), (0, l.aC)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n]
        );
    switch (t.joinType) {
        case x.A.INVITE:
            return (0, r.jsx)(h.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case x.A.APPLY:
            return (0, r.jsx)(g.r, { pendingFields: t.pendingVerificationFields });
        case x.A.DISCOVERABLE:
            return (0, r.jsx)(p.c, {
                fetchDiscoveryData: s,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
    }
}
function v() {
    let e = (0, s.e7)([c.Z], () => c.Z.getProps().guild),
        t = (0, s.e7)([f.Z], () => f.Z.pendingState);
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = i.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && m.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: l } = t;
    return (0, r.jsxs)(a.Kqy, {
        gap: 32,
        children: [
            (0, r.jsx)(a.X6q, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: j.NW.string(j.t.YJlvBA)
            }),
            (0, r.jsx)(b.h, {
                onTypePicked: n,
                activeType: l,
                guild: e
            }),
            (0, r.jsx)('div', { className: N.divider }),
            (0, r.jsx)('div', { children: (0, r.jsx)(_, { pendingState: t }) })
        ]
    });
}
