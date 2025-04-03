n.d(t, { w: () => E }), n(47120), n(566702), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(852860),
    o = n(881052),
    c = n(456268),
    d = n(863249),
    u = n(246364),
    m = n(983736),
    g = n(571728),
    p = n(699553),
    h = n(434404),
    f = n(999382),
    b = n(654351),
    x = n(658666),
    j = n(384632),
    N = n(386885),
    _ = n(981631),
    v = n(128449),
    C = n(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
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
    let { pendingState: s, dirtyState: f, originalGuild: x, settingsGuild: I, settingsMetadata: E, settingsProfile: S } = e,
        T = I.id,
        [P, w] = i.useState(!1),
        [R, Z] = i.useState(null),
        D = I.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        A = null != (t = (0, g.A)({ guildId: I.id })) ? t : 0,
        k = i.useCallback(() => {
            Z(null), h.Z.init(T, _.pNK.ACCESS);
        }, [T]),
        W = i.useCallback(async (e) => {
            try {
                w(!0), await e(), Z(null);
            } finally {
                w(!1);
            }
        }, []),
        L = i.useCallback(
            async (e) => {
                try {
                    await h.Z.saveGuild(T, e, { throwErr: !0 });
                } catch (e) {
                    throw ('object' == typeof e && 'message' in e ? Z(e.message) : Z(C.NW.formatToPlainString(C.t.aTVNen, { statusPageURL: _.yXt.STATUS })), e);
                }
            },
            [T]
        ),
        M = i.useCallback(
            async (e, t) => {
                try {
                    await d.ZP.updateVerificationForm(T, e, t);
                } catch (e) {
                    throw (Z(new o.Hx(e).getAnyErrorMessage()), e);
                }
            },
            [T]
        ),
        G = i.useCallback(
            async (e, t) => {
                let n =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.QJ.TERMS,
                                  label: C.NW.string(C.t['9suSIC']),
                                  values: t,
                                  required: !0
                              }
                          ]
                        : [];
                await M(n, e);
            },
            [M]
        ),
        U = i.useCallback(() => {
            if (s.joinType === j.A.INVITE) {
                let { requireTerms: e, termRules: t = [] } = s,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                W(async () => {
                    if (I.hasFeature(_.oNc.DISCOVERABLE)) {
                        let e = new Set(I.features);
                        e.delete(_.oNc.DISCOVERABLE), await L({ features: e });
                    }
                    f.verificationDirty && (await G(e, n));
                });
            } else if (s.joinType === j.A.APPLY) {
                let { pendingVerificationFields: e } = s;
                if (null == e) return;
                W(async () => {
                    if (I.hasFeature(_.oNc.DISCOVERABLE)) {
                        let e = new Set(I.features);
                        e.delete(_.oNc.DISCOVERABLE), await L({ features: e });
                    }
                    f.verificationDirty && (await M([...e], !0)), f.profileDirty && null != S && (await (0, p.pV)(I.id, { visibility: S.visibility }));
                });
            } else if (s.joinType === j.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = s,
                    n = t.map((e) => e.value.trim()).filter((e) => '' !== e);
                W(async () => {
                    if ((f.verificationDirty && (await G(e, n)), f.guildDirty)) {
                        (0, b.UA)(I, x);
                        let e = new Set(I.features);
                        e.add(_.oNc.DISCOVERABLE),
                            e.delete(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                            await L({
                                features: e,
                                discoverySplash: I.discoverySplash,
                                description: I.description,
                                preferredLocale: I.preferredLocale
                            });
                        try {
                            await (0, c.Vv)(O({ guildId: I.id }, E));
                        } catch (e) {
                            throw (Z(new o.Hx(e).getAnyErrorMessage()), e);
                        }
                    }
                });
            }
        }, [s, W, I, f, L, G, S, M, x, E]),
        B = i.useCallback(() => {
            var e;
            let t = (e) => {
                    if (s.joinType === j.A.DISCOVERABLE && s.settingsView === N.U.ELIGIBLE_DISABLED)
                        return void (0, a.ZDy)(async () => {
                            let { default: t } = await n.e('67376').then(n.bind(n, 207252));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    y(O({}, n), {
                                        guildId: T,
                                        onConfirm: e
                                    })
                                );
                        });
                    e();
                },
                i = (e) => {
                    if (D && A > 0 && s.joinType !== j.A.APPLY)
                        return void (0, a.ZDy)(async () => {
                            let { default: t } = await n.e('55009').then(n.bind(n, 826390));
                            return (n) =>
                                (0, r.jsx)(
                                    t,
                                    y(O({}, n), {
                                        guildId: T,
                                        submittedGuildJoinRequestsCount: A,
                                        onConfirm: e
                                    })
                                );
                        });
                    e();
                };
            if (s.joinType === j.A.INVITE || s.joinType === j.A.DISCOVERABLE) {
                let { requireTerms: e, termRules: t = [] } = s;
                if (t.map((e) => e.value.trim()).filter((e) => '' !== e).length < 1 && e) return void Z(C.NW.string(C.t.TCHkcX));
            }
            if (s.joinType === j.A.APPLY && !(null == (e = s.pendingVerificationFields) ? void 0 : e.some((e) => (0, m._C)(e)))) return void Z(C.NW.string(C.t.HGVrIy));
            i(() => t(U));
        }, [D, U, s, T, A]),
        F = s.joinType === j.A.DISCOVERABLE && s.settingsView === N.U.ELIGIBLE_DISABLED,
        z = null != I.description && E.primaryCategoryId !== v.o3 && E.keywords.length > 0;
    return (0, r.jsx)(l.Z, {
        message: F ? C.NW.string(C.t.V2G2Ym) : void 0,
        onSaveText: F ? C.NW.string(C.t['qjtt/v']) : void 0,
        submitting: P,
        errorMessage: R,
        onReset: k,
        onSave: B,
        disabled: F && !z
    });
}
function E() {
    let { pendingState: e, dirtyState: t } = (0, s.cj)([x.Z], () => ({
            pendingState: x.Z.pendingState,
            dirtyState: x.Z.dirtyState
        })),
        {
            settingsGuild: n,
            settingsMetadata: i,
            originalGuild: a,
            guildProfile: o
        } = (0, s.cj)([f.Z], () => {
            let { guild: e, guildMetadata: t, originalGuild: n, profile: r } = f.Z.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n,
                guildProfile: r
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === j.A.DISCOVERABLE && e.settingsView === N.U.INELIGIBLE
          ? (0, r.jsx)(l.Z, {
                message: C.NW.string(C.t.TEXwRk),
                onReset: () => h.Z.init(n.id, _.pNK.ACCESS)
            })
          : (0, r.jsx)(I, {
                pendingState: e,
                dirtyState: t,
                originalGuild: a,
                settingsGuild: n,
                settingsMetadata: i,
                settingsProfile: o
            });
}
