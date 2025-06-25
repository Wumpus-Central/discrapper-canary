n.d(t, { O: () => T });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(456268),
    o = n(863249),
    c = n(981312),
    d = n(430824),
    u = n(63063),
    m = n(500496),
    g = n(999382),
    p = n(209054),
    f = n(96788),
    h = n(217472),
    x = n(202905),
    b = n(44867),
    j = n(557359),
    _ = n(658666),
    v = n(307375),
    O = n(384632),
    C = n(981631),
    y = n(388032),
    N = n(162193);
function I(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        l = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, p.k)(e), (0, f.V)(e), (0, a.le)(), (0, a.aC)(e);
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
        n = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getGuild(t)) ? void 0 : e.nsfwLevel;
        }),
        a = (0, l.e7)([_.Z], () => {
            var e;
            return null == (e = _.Z.pendingState) ? void 0 : e.isAgeRestricted;
        }),
        o = i.useCallback(
            (e) => {
                h.Z.setIsAgeRestricted(t, e);
            },
            [t]
        ),
        c = n === C.V_K.AGE_RESTRICTED && !a;
    return (0, r.jsx)(s.hjN, {
        children: (0, r.jsx)(s.j7V, {
            onChange: o,
            value: a,
            hideBorder: !0,
            disabled: c,
            note: y.intl.format(y.t['iyQQ6+'], { helpArticleLink: u.Z.getArticleURL(C.BhN.NSFW_SERVER_AGE_RESTRICTION) }),
            children: y.intl.string(y.t.N9xEJC)
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
        t = (0, l.e7)([_.Z], () => _.Z.pendingState);
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let n = i.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && h.Z.setSelectedJoinType(e.id, t);
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
                children: y.intl.string(y.t.YJlvBA)
            }),
            (0, r.jsx)(v.h, {
                onTypePicked: n,
                activeType: a,
                guild: e
            }),
            (0, r.jsx)('div', { className: N.divider }),
            (0, r.jsx)('div', { children: (0, r.jsx)(I, { pendingState: t }) }),
            null != e && (0, r.jsx)(S, { guildId: e.id })
        ]
    });
}
