n.d(t, { O: () => I });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(456268),
    o = n(863249),
    c = n(981312),
    d = n(430824),
    u = n(63063),
    g = n(999382),
    m = n(432774),
    p = n(682255),
    f = n(217472),
    h = n(202905),
    b = n(44867),
    x = n(557359),
    j = n(658666),
    _ = n(307375),
    v = n(384632),
    O = n(981631),
    C = n(388032),
    y = n(912231);
function N(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        l = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, m.k)(e), (0, p.V)(e), (0, s.le)(), (0, s.aC)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n],
        );
    switch (t.joinType) {
        case v.A.INVITE:
            return (0, r.jsx)(x.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
        case v.A.APPLY:
            return (0, r.jsx)(h.r, { pendingFields: t.pendingVerificationFields });
        case v.A.DISCOVERABLE:
            return (0, r.jsx)(b.c, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
    }
}
function E(e) {
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
                f.Z.setIsAgeRestricted(t, e);
            },
            [t],
        ),
        g = n === O.V_K.AGE_RESTRICTED && s !== O.V_K.AGE_RESTRICTED;
    return (0, r.jsx)(a.rsf, {
        label: C.intl.string(C.t.N9xEJF),
        description: C.intl.format(C.t.iyQQ62, {
            helpArticleLink: u.Z.getArticleURL(O.BhN.NSFW_SERVER_AGE_RESTRICTION),
        }),
        checked: o,
        onChange: c,
        disabled: g,
    });
}
function I() {
    let e = (0, l.e7)([g.Z], () => g.Z.getProps().guild),
        t = (0, l.e7)([j.Z], () => j.Z.pendingState),
        n = (0, c.U)();
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let s = i.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && f.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id],
    );
    if (null == e || null == t) return null;
    let { joinType: d } = t;
    return (0, r.jsxs)(a.Kqy, {
        gap: 32,
        children: [
            (0, r.jsx)(a.Heading, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: C.intl.string(C.t.YJlvBM),
            }),
            (0, r.jsx)(_.h, {
                onTypePicked: s,
                activeType: d,
                guild: e,
            }),
            (0, r.jsx)("div", { className: y.divider }),
            !n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E, { guildId: e.id }), (0, r.jsx)("div", { className: y.divider })],
                }),
            (0, r.jsx)("div", { children: (0, r.jsx)(N, { pendingState: t }) }),
        ],
    });
}
