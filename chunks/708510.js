n.d(t, { O: () => T });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(456268),
    o = n(863249),
    c = n(981312),
    d = n(430824),
    u = n(63063),
    m = n(500496),
    g = n(999382),
    p = n(209054),
    h = n(96788),
    f = n(217472),
    x = n(202905),
    b = n(44867),
    j = n(557359),
    v = n(658666),
    _ = n(307375),
    O = n(384632),
    y = n(981631),
    C = n(388032),
    N = n(162193);
function I(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        l = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        (await (0, p.k)(e), (0, h.V)(e), (0, s.le)(), (0, s.aC)(e));
                    } finally {
                        n.current = !0;
                    }
            },
            [n]
        );
    switch (t.joinType) {
        case O.A.INVITE:
            return (0, r.jsx)(j.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case O.A.APPLY:
            return (0, r.jsx)(x.r, { pendingFields: t.pendingVerificationFields });
        case O.A.DISCOVERABLE:
            return (0, r.jsx)(b.c, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
    }
}
function E(e) {
    let { guildId: t } = e,
        { nsfwLevel: n, ownerConfiguredContentLevel: s } = (0, l.cj)([d.Z], () => {
            var e, n;
            return {
                nsfwLevel: null == (e = d.Z.getGuild(t)) ? void 0 : e.nsfwLevel,
                ownerConfiguredContentLevel: null == (n = d.Z.getGuild(t)) ? void 0 : n.ownerConfiguredContentLevel
            };
        }),
        o = (0, l.e7)([v.Z], () => {
            var e;
            return null == (e = v.Z.pendingState) ? void 0 : e.isAgeRestricted;
        }),
        c = i.useCallback(
            (e) => {
                f.Z.setIsAgeRestricted(t, e);
            },
            [t]
        ),
        m = n === y.V_K.AGE_RESTRICTED && s !== y.V_K.AGE_RESTRICTED;
    return (0, r.jsx)(a.hjN, {
        children: (0, r.jsx)(a.j7V, {
            onChange: c,
            value: o,
            hideBorder: !0,
            disabled: m,
            note: C.intl.format(C.t['iyQQ6+'], { helpArticleLink: u.Z.getArticleURL(y.BhN.NSFW_SERVER_AGE_RESTRICTION) }),
            children: C.intl.string(C.t.N9xEJC)
        })
    });
}
function S(e) {
    let { guildId: t } = e,
        n = (0, c.U)();
    return !(0, m.j0)({
        guildId: t,
        location: 'guild-settings'
    }) || n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)('div', { className: N.divider }), (0, r.jsx)(E, { guildId: t })]
          });
}
function T() {
    let e = (0, l.e7)([g.Z], () => g.Z.getProps().guild),
        t = (0, l.e7)([v.Z], () => v.Z.pendingState);
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = i.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && f.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id]
    );
    if (null == e || null == t) return null;
    let { joinType: s } = t;
    return (0, r.jsxs)(a.Kqy, {
        gap: 32,
        children: [
            (0, r.jsx)(a.X6q, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: C.intl.string(C.t.YJlvBA)
            }),
            (0, r.jsx)(_.h, {
                onTypePicked: n,
                activeType: s,
                guild: e
            }),
            (0, r.jsx)('div', { className: N.divider }),
            (0, r.jsx)('div', { children: (0, r.jsx)(I, { pendingState: t }) }),
            null != e && (0, r.jsx)(S, { guildId: e.id })
        ]
    });
}
