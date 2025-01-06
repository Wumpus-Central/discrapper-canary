n.d(t, {
    O: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(863249),
    o = n(999382),
    c = n(209054),
    d = n(96788),
    u = n(217472),
    m = n(202905),
    h = n(44867),
    g = n(557359),
    x = n(658666),
    p = n(307375),
    f = n(384632),
    C = n(388032),
    v = n(322825);
function _(e) {
    let { pendingState: t } = e,
        [n, l] = r.useState(!1),
        a = r.useCallback(
            async (e) => {
                if (!n)
                    try {
                        await (0, c.k)(e), (0, d.V)(e);
                    } finally {
                        l(!0);
                    }
            },
            [n]
        );
    switch (t.joinType) {
        case f.A.INVITE:
            return (0, i.jsx)(g.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case f.A.APPLY:
            return (0, i.jsx)(m.r, { pendingFields: t.pendingVerificationFields });
        case f.A.DISCOVERABLE:
            return (0, i.jsx)(h.c, {
                fetchChecklist: a,
                settingsView: t.settingsView
            });
    }
}
function I() {
    let e = (0, l.e7)([o.Z], () => o.Z.getProps().guild),
        t = (0, l.e7)([x.Z], () => x.Z.pendingState);
    r.useEffect(() => {
        if ((null == e ? void 0 : e.id) != null) s.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = r.useCallback(
        (t) => {
            if ((null == e ? void 0 : e.id) != null) u.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: c } = t;
    return (0, i.jsxs)(a.Stack, {
        gap: 32,
        children: [
            (0, i.jsx)(a.Heading, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: C.intl.string(C.t['+hFV+P'])
            }),
            (0, i.jsx)(p.h, {
                onTypePicked: n,
                activeType: c,
                guild: e
            }),
            (0, i.jsx)('div', { className: v.divider }),
            (0, i.jsx)('div', { children: (0, i.jsx)(_, { pendingState: t }) })
        ]
    });
}
