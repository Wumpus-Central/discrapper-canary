n.d(t, { w: () => S }), n(388685), n(781311), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(481060),
    o = n(881052),
    c = n(456268),
    d = n(863249),
    u = n(246364),
    g = n(983736),
    f = n(571728),
    m = n(699553),
    b = n(434404),
    p = n(999382),
    h = n(492064),
    x = n(658666),
    j = n(384632),
    v = n(386885),
    O = n(981631),
    C = n(128449),
    y = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t;
    let {
            pendingState: l,
            dirtyState: p,
            originalGuild: x,
            settingsGuild: I,
            settingsMetadata: S,
            settingsProfile: _,
        } = e,
        T = I.id,
        [P, w] = i.useState(!1),
        [Z, R] = i.useState(null),
        D = I.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null != (t = (0, f.A)({ guildId: I.id })) ? t : 0,
        L = i.useCallback(() => {
            R(null), b.Z.init(T, O.pNK.ACCESS);
        }, [T]),
        k = i.useCallback(async (e) => {
            try {
                w(!0), await e(), R(null);
            } finally {
                w(!1);
            }
        }, []),
        G = i.useCallback(
            async (e) => {
                try {
                    await b.Z.saveGuild(T, e, { throwErr: !0 });
                } catch (e) {
                    throw (
                        ("object" == typeof e && "message" in e
                            ? R(e.message)
                            : R(y.intl.formatToPlainString(y.t.aTVNes, { statusPageURL: O.yXt.STATUS })),
                        e)
                    );
                }
            },
            [T],
        ),
        M = i.useCallback(
            async (e, t, n) => {
                try {
                    await d.ZP.updateVerificationForm(T, e, t, n);
                } catch (e) {
                    throw (R(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [T],
        ),
        U = i.useCallback(
            async (e, t, n) => {
                let r =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.QJ.TERMS,
                                  label: y.intl.string(y.t["9suSIA"]),
                                  values: t,
                                  required: !0,
                              },
                          ]
                        : [];
                await M(r, e, n);
            },
            [M],
        ),
        B = i.useCallback(
            (e) => {
                if (
                    (l.isAgeRestricted !== (I.ownerConfiguredContentLevel === O.V_K.AGE_RESTRICTED) &&
                        k(async () => {
                            let e = l.isAgeRestricted ? O.V_K.AGE_RESTRICTED : O.V_K.DEFAULT;
                            await G({ ownerConfiguredContentLevel: e });
                        }),
                    l.joinType === j.A.INVITE)
                ) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => "" !== e);
                    k(async () => {
                        if (I.features.has(O.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(I.features);
                            e.delete(O.GuildFeatures.DISCOVERABLE), await G({ features: e });
                        }
                        p.verificationDirty && (await U(t, r, e));
                    });
                } else if (l.joinType === j.A.APPLY) {
                    let { pendingVerificationFields: t } = l;
                    if (null == t) return;
                    k(async () => {
                        if (I.features.has(O.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(I.features);
                            e.delete(O.GuildFeatures.DISCOVERABLE), await G({ features: e });
                        }
                        p.verificationDirty && (await M([...t], !0, e)),
                            p.profileDirty && null != _ && (await (0, m.pV)(I.id, { visibility: _.visibility }));
                    });
                } else if (l.joinType === j.A.DISCOVERABLE) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => "" !== e);
                    k(async () => {
                        if ((p.verificationDirty && (await U(t, r, e)), p.guildDirty)) {
                            (0, h.UA)(I, x);
                            let e = new Set(I.features);
                            e.add(O.GuildFeatures.DISCOVERABLE),
                                e.delete(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                                await G({
                                    features: e,
                                    discoverySplash: I.discoverySplash,
                                    description: I.description,
                                    preferredLocale: I.preferredLocale,
                                });
                            try {
                                await (0, c.Vv)(N({ guildId: I.id }, S));
                            } catch (e) {
                                throw (R(new o.Hx(e).getAnyErrorMessage()), e);
                            }
                        }
                    });
                }
            },
            [l, k, I, p, G, U, _, M, x, S],
        ),
        F = i.useCallback(() => {
            var e;
            if (l.joinType === j.A.INVITE || l.joinType === j.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = l;
                if (t.map((e) => e.value.trim()).filter((e) => "" !== e).length < 1 && e)
                    return void R(y.intl.string(y.t.TCHkcd));
            }
            if (
                l.joinType === j.A.APPLY &&
                !(null == (e = l.pendingVerificationFields) ? void 0 : e.some((e) => (0, g._C)(e)))
            )
                return void R(y.intl.string(y.t.HGVrI3));
            ((e) => {
                if (D && A > 0 && l.joinType !== j.A.APPLY)
                    return (0, s.ZDy)(async () => {
                        let { default: t } = await n.e("55009").then(n.bind(n, 826390));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                E(N({}, n), {
                                    guildId: T,
                                    submittedGuildJoinRequestsCount: A,
                                    onConfirm: e,
                                }),
                            );
                    });
                e();
            })((e) =>
                ((e) => {
                    if (l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED)
                        return void (0, s.ZDy)(async () => {
                            let { default: t } = await n.e("67376").then(n.bind(n, 207252));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    E(N({}, n), {
                                        guildId: T,
                                        onConfirm: e,
                                    }),
                                );
                        });
                    e();
                })(() => B(e)),
            );
        }, [D, B, l, T, A]),
        H = l.joinType === j.A.DISCOVERABLE && l.settingsView === v.U.ELIGIBLE_DISABLED,
        W = null != I.description && S.primaryCategoryId !== C.o3 && S.keywords.length > 0;
    return (0, r.jsx)(a.Z, {
        message: H ? y.intl.string(y.t.V2G2Yr) : void 0,
        onSaveText: H ? y.intl.string(y.t["qjtt/p"]) : void 0,
        submitting: P,
        errorMessage: Z,
        onReset: L,
        onSave: F,
        disabled: H && !W,
    });
}
function S() {
    let { pendingState: e, dirtyState: t } = (0, l.cj)([x.Z], () => ({
            pendingState: x.Z.pendingState,
            dirtyState: x.Z.dirtyState,
        })),
        {
            settingsGuild: n,
            settingsMetadata: i,
            originalGuild: s,
            guildProfile: o,
        } = (0, l.cj)([p.Z], () => {
            let { guild: e, guildMetadata: t, originalGuild: n, profile: r } = p.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n,
                guildProfile: r,
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === j.A.DISCOVERABLE && e.settingsView === v.U.INELIGIBLE
          ? (0, r.jsx)(a.Z, {
                message: y.intl.string(y.t.TEXwRt),
                onReset: () => b.Z.init(n.id, O.pNK.ACCESS),
            })
          : (0, r.jsx)(I, {
                pendingState: e,
                dirtyState: t,
                originalGuild: s,
                settingsGuild: n,
                settingsMetadata: i,
                settingsProfile: o,
            });
}
