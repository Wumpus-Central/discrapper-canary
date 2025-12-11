n.d(t, { O: () => S });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(456268),
    o = n(863249),
    c = n(981312),
    d = n(430824),
    u = n(63063),
    g = n(999382),
    f = n(432774),
    m = n(682255),
    b = n(217472),
    p = n(202905),
    h = n(44867),
    x = n(557359),
    j = n(658666),
    v = n(307375),
    O = n(384632),
    C = n(981631),
    y = n(388032),
    N = n(955120);
function E(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        l = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, f.k)(e), (0, m.V)(e), (0, s.le)(), (0, s.aC)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n],
        );
    switch (t.joinType) {
        case O.A.INVITE:
            return (0, r.jsx)(x.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
        case O.A.APPLY:
            return (0, r.jsx)(p.r, { pendingFields: t.pendingVerificationFields });
        case O.A.DISCOVERABLE:
            return (0, r.jsx)(h.c, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
    }
}
function I(e) {
    let { guildId: t } = e,
        { nsfwLevel: n, ownerConfiguredContentLevel: s } = (0, l.cj)([d.Z], () => {
            var e, n;
            return {
                nsfwLevel: null == (e = d.Z.getGuild(t)) ? void 0 : e.nsfwLevel,
                ownerConfiguredContentLevel: null == (n = d.Z.getGuild(t)) ? void 0 : n.ownerConfiguredContentLevel,
            };
        }),
        o = (0, l.e7)([j.Z], () => {
            var e;
            return null == (e = j.Z.pendingState) ? void 0 : e.isAgeRestricted;
        }),
        c = i.useCallback(
            (e) => {
                b.Z.setIsAgeRestricted(t, e);
            },
            [t],
        ),
        g = n === C.V_K.AGE_RESTRICTED && s !== C.V_K.AGE_RESTRICTED;
    return (0, r.jsx)(a.rsf, {
        label: y.intl.string(y.t.N9xEJF),
        description: y.intl.format(y.t.iyQQ62, {
            helpArticleLink: u.Z.getArticleURL(C.BhN.NSFW_SERVER_AGE_RESTRICTION),
        }),
        checked: o,
        onChange: c,
        disabled: g,
    });
}
function S() {
    let e = (0, l.e7)([g.Z], () => g.Z.getProps().guild),
        t = (0, l.e7)([j.Z], () => j.Z.pendingState),
        n = (0, c.U)();
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let s = i.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && b.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id],
    );
    if (null == e || null == t) return null;
    let { joinType: d } = t;
    return (0, r.jsxs)(a.Kqy, {
        gap: 32,
        children: [
            (0, r.jsx)(a.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: y.intl.string(y.t.YJlvBM),
            }),
            (0, r.jsx)(v.h, {
                onTypePicked: s,
                activeType: d,
                guild: e,
            }),
            (0, r.jsx)("div", { className: N.divider }),
            !n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(I, { guildId: e.id }), (0, r.jsx)("div", { className: N.divider })],
                }),
            (0, r.jsx)("div", { children: (0, r.jsx)(E, { pendingState: t }) }),
        ],
    });
}
