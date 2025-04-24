n.d(t, { O: () => O });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(863249),
    c = n(999382),
    u = n(209054),
    d = n(96788),
    m = n(217472),
    g = n(202905),
    p = n(44867),
    h = n(557359),
    f = n(658666),
    x = n(307375),
    b = n(384632),
    j = n(388032),
    _ = n(162193);
function v(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        l = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, u.k)(e), (0, d.V)(e), (0, a.le)(), (0, a.aC)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n]
        );
    switch (t.joinType) {
        case b.A.INVITE:
            return (0, r.jsx)(h.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case b.A.APPLY:
            return (0, r.jsx)(g.r, { pendingFields: t.pendingVerificationFields });
        case b.A.DISCOVERABLE:
            return (0, r.jsx)(p.c, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
    }
}
function O() {
    let e = (0, l.e7)([c.Z], () => c.Z.getProps().guild),
        t = (0, l.e7)([f.Z], () => f.Z.pendingState);
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
    let { joinType: a } = t;
    return (0, r.jsxs)(s.Kqy, {
        gap: 32,
        children: [
            (0, r.jsx)(s.X6q, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: j.intl.string(j.t.YJlvBA)
            }),
            (0, r.jsx)(x.h, {
                onTypePicked: n,
                activeType: a,
                guild: e
            }),
            (0, r.jsx)('div', { className: _.divider }),
            (0, r.jsx)('div', { children: (0, r.jsx)(v, { pendingState: t }) })
        ]
    });
}
