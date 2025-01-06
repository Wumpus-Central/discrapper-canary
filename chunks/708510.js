n.d(t, {
    O: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(863249),
    o = n(245762),
    c = n(894376),
    d = n(446495),
    u = n(999382),
    m = n(202905),
    h = n(557359),
    g = n(307375),
    x = n(388032),
    p = n(322825);
function f(e) {
    let { pendingState: t } = e;
    switch (t.joinType) {
        case d.A.INVITE:
            return (0, i.jsx)(h.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case d.A.APPLY:
            return (0, i.jsx)(m.r, { pendingFields: t.pendingVerificationFields });
        case d.A.DISCOVERABLE:
            return null;
    }
}
function C() {
    let e = (0, l.e7)([u.Z], () => u.Z.getProps().guild),
        t = (0, l.e7)([c.Z], () => c.Z.pendingState);
    r.useEffect(() => {
        if ((null == e ? void 0 : e.id) != null) a.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = r.useCallback(
        (t) => {
            if ((null == e ? void 0 : e.id) != null) o.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: d } = t;
    return (0, i.jsxs)(s.Stack, {
        gap: 32,
        children: [
            (0, i.jsx)(s.Heading, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: x.intl.string(x.t['+hFV+P'])
            }),
            (0, i.jsx)(g.h, {
                onTypePicked: n,
                activeType: d,
                guild: e
            }),
            (0, i.jsx)('div', { className: p.divider }),
            (0, i.jsx)('div', { children: (0, i.jsx)(f, { pendingState: t }) })
        ]
    });
}
