n.d(t, { G: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(36525),
    a = n(192308),
    o = n(198982),
    d = n(460760),
    c = n(408213),
    u = n(513461),
    m = n(709977),
    g = n(786180),
    h = n(250527),
    x = n(997509),
    _ = n(555337),
    p = n(310345),
    A = n(306846),
    E = n(894222),
    f = n(716610),
    j = n(652215),
    N = n(324580),
    I = n(985018);
function C(e) {
    let {
            pendingState: t,
            dirtyState: s,
            originalGuild: _,
            settingsGuild: A,
            settingsMetadata: C,
            settingsProfile: b,
        } = e,
        v = A.id,
        [S, T] = l.useState(!1),
        [y, R] = l.useState(null),
        L = A.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        D = (0, g.H)({ guildId: A.id }) ?? 0,
        O = l.useCallback(() => {
            R(null), x.A.init(v, j.BEX.ACCESS);
        }, [v]),
        G = l.useCallback(async (e) => {
            try {
                T(!0), await e(), R(null);
            } finally {
                T(!1);
            }
        }, []),
        M = l.useCallback(
            async (e) => {
                try {
                    await x.A.saveGuild(v, e, { throwErr: !0 });
                } catch (e) {
                    throw (
                        ("object" == typeof e && "message" in e
                            ? R(e.message)
                            : R(I.intl.formatToPlainString(I.t.aTVNes, { statusPageURL: j.qF7.STATUS })),
                        e)
                    );
                }
            },
            [v],
        ),
        k = l.useCallback(
            async (e, t, n) => {
                try {
                    await c.Ay.updateVerificationForm(v, e, t, n);
                } catch (e) {
                    throw (R(new o.LG(e).getAnyErrorMessage()), e);
                }
            },
            [v],
        ),
        U = l.useCallback(
            async (e, t, n) => {
                let i =
                    t.length > 0
                        ? [{ field_type: u.rX.TERMS, label: I.intl.string(I.t["9suSIA"]), values: t, required: !0 }]
                        : [];
                await k(i, e, n);
            },
            [k],
        ),
        w = l.useCallback(
            (e) => {
                if (
                    (t.isAgeRestricted !== (A.ownerConfiguredContentLevel === j.ftr.AGE_RESTRICTED) &&
                        G(async () => {
                            let e = t.isAgeRestricted ? j.ftr.AGE_RESTRICTED : j.ftr.DEFAULT;
                            await M({ ownerConfiguredContentLevel: e });
                        }),
                    t.joinType === E.J.INVITE)
                ) {
                    let { requireTerms: n, termRules: i = [] } = t,
                        l = i.map((e) => e.value.trim()).filter((e) => "" !== e);
                    G(async () => {
                        if (A.features.has(j.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(A.features);
                            e.delete(j.GuildFeatures.DISCOVERABLE), await M({ features: e });
                        }
                        s.verificationDirty && (await U(n, l, e));
                    });
                } else if (t.joinType === E.J.APPLY) {
                    let { pendingVerificationFields: n } = t;
                    if (null == n) return;
                    G(async () => {
                        if (A.features.has(j.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(A.features);
                            e.delete(j.GuildFeatures.DISCOVERABLE), await M({ features: e });
                        }
                        s.verificationDirty && (await k([...n], !0, e)),
                            s.profileDirty && null != b && (await (0, h._C)(A.id, { visibility: b.visibility }));
                    });
                } else if (t.joinType === E.J.DISCOVERABLE) {
                    let { requireTerms: n, termRules: i = [] } = t,
                        l = i.map((e) => e.value.trim()).filter((e) => "" !== e);
                    G(async () => {
                        if ((s.verificationDirty && (await U(n, l, e)), s.guildDirty)) {
                            (0, p.dl)(A, _);
                            let e = new Set(A.features);
                            e.add(j.GuildFeatures.DISCOVERABLE),
                                e.delete(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                                await M({
                                    features: e,
                                    discoverySplash: A.discoverySplash,
                                    description: A.description,
                                    preferredLocale: A.preferredLocale,
                                });
                            try {
                                await (0, d.Oh)({ guildId: A.id, ...C });
                            } catch (e) {
                                throw (R(new o.LG(e).getAnyErrorMessage()), e);
                            }
                        }
                    });
                }
            },
            [t, G, A, s, M, U, b, k, _, C],
        ),
        P = l.useCallback(
            () =>
                ((e) => {
                    if (t.joinType === E.J.INVITE || t.joinType === E.J.DISCOVERABLE) {
                        let { requireTerms: e, termRules: n = [] } = t;
                        if (n.map((e) => e.value.trim()).filter((e) => "" !== e).length < 1 && e)
                            return void R(I.intl.string(I.t.TCHkcd));
                    }
                    t.joinType !== E.J.APPLY || t.pendingVerificationFields?.some((e) => (0, m.OP)(e))
                        ? e()
                        : R(I.intl.string(I.t.HGVrI3));
                })(() => {
                    var e;
                    return (
                        (e = (e) => {
                            var l;
                            return (
                                (l = () => w(e)),
                                void (t.joinType === E.J.DISCOVERABLE && t.settingsView === f.v.ELIGIBLE_DISABLED
                                    ? (0, a.openModalLazy)(async () => {
                                          let { default: e } = await n.e("35125").then(n.bind(n, 60852));
                                          return (t) => (0, i.jsx)(e, { ...t, guildId: v, onConfirm: l });
                                      })
                                    : l())
                            );
                        }),
                        void (L && D > 0 && t.joinType !== E.J.APPLY
                            ? (0, a.openModalLazy)(async () => {
                                  let { default: t } = await n.e("63452").then(n.bind(n, 78903));
                                  return (n) =>
                                      (0, i.jsx)(t, {
                                          ...n,
                                          guildId: v,
                                          submittedGuildJoinRequestsCount: D,
                                          onConfirm: e,
                                      });
                              })
                            : e())
                    );
                }),
            [L, w, t, v, D],
        ),
        B = t.joinType === E.J.DISCOVERABLE && t.settingsView === f.v.ELIGIBLE_DISABLED,
        F = null != A.description && C.primaryCategoryId !== N.ig && C.keywords.length > 0;
    return (0, i.jsx)(r.A, {
        message: B ? I.intl.string(I.t.V2G2Yr) : void 0,
        onSaveText: B ? I.intl.string(I.t["qjtt/p"]) : void 0,
        submitting: S,
        errorMessage: y,
        onReset: O,
        onSave: P,
        disabled: B && !F,
    });
}
function b() {
    let { pendingState: e, dirtyState: t } = (0, s.cf)([A.A], () => ({
            pendingState: A.A.pendingState,
            dirtyState: A.A.dirtyState,
        })),
        {
            settingsGuild: n,
            settingsMetadata: l,
            originalGuild: a,
            guildProfile: o,
        } = (0, s.cf)([_.A], () => {
            let { guild: e, guildMetadata: t, originalGuild: n, profile: i } = _.A.getProps();
            return { settingsGuild: e, settingsMetadata: t, originalGuild: n, guildProfile: i };
        });
    return null == e || null == n
        ? null
        : e.joinType === E.J.DISCOVERABLE && e.settingsView === f.v.INELIGIBLE
          ? (0, i.jsx)(r.A, { message: I.intl.string(I.t.TEXwRt), onReset: () => x.A.init(n.id, j.BEX.ACCESS) })
          : (0, i.jsx)(C, {
                pendingState: e,
                dirtyState: t,
                originalGuild: a,
                settingsGuild: n,
                settingsMetadata: l,
                settingsProfile: o,
            });
}
