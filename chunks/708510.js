n.d(t, { O: () => T });
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
    f = n(888429),
    h = n(217472),
    b = n(202905),
    x = n(44867),
    j = n(557359),
    v = n(658666),
    _ = n(307375),
    C = n(384632),
    O = n(981631),
    y = n(388032),
    E = n(912231);
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
        case C.A.INVITE:
            return (0, r.jsx)(j.A, {
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
        case C.A.APPLY:
            return (0, r.jsx)(b.r, { pendingFields: t.pendingVerificationFields });
        case C.A.DISCOVERABLE:
            return (0, r.jsx)(x.c, {
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
        o = (0, l.e7)([v.Z], () => {
            var e;
            return null == (e = v.Z.pendingState) ? void 0 : e.isAgeRestricted;
        }),
        c = i.useCallback(
            (e) => {
                h.Z.setIsAgeRestricted(t, e);
            },
            [t],
        ),
        g = n === O.V_K.AGE_RESTRICTED && s !== O.V_K.AGE_RESTRICTED;
    return (0, r.jsx)(a.rsf, {
        label: y.intl.string(y.t.N9xEJF),
        description: y.intl.format(y.t.iyQQ62, {
            helpArticleLink: u.Z.getArticleURL(O.BhN.NSFW_SERVER_AGE_RESTRICTION),
        }),
        checked: o,
        onChange: c,
        disabled: g,
    });
}
function S(e) {
    let { guildId: t } = e,
        n = (0, c.U)();
    return !(0, f.j0)({
        guildId: t,
        location: "guild-settings",
    }) || n
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(I, { guildId: t }), (0, r.jsx)("div", { className: E.divider })],
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
            (null == e ? void 0 : e.id) != null && h.Z.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id],
    );
    if (null == e || null == t) return null;
    let { joinType: s } = t;
    return (0, r.jsxs)(a.Kqy, {
        gap: 32,
        children: [
            (0, r.jsx)(a.Heading, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: y.intl.string(y.t.YJlvBM),
            }),
            (0, r.jsx)(_.h, {
                onTypePicked: n,
                activeType: s,
                guild: e,
            }),
            (0, r.jsx)("div", { className: E.divider }),
            null != e && (0, r.jsx)(S, { guildId: e.id }),
            (0, r.jsx)("div", { children: (0, r.jsx)(N, { pendingState: t }) }),
        ],
    });
}
