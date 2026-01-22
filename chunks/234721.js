n.d(t, { G: () => S }), n(896048), n(733351), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(397927),
    c = n(198982),
    o = n(460760),
    d = n(408213),
    u = n(513461),
    f = n(709977),
    g = n(786180),
    b = n(250527),
    m = n(997509),
    p = n(555337),
    x = n(310345),
    h = n(306846),
    j = n(894222),
    O = n(716610),
    y = n(652215),
    v = n(324580),
    A = n(985018);
function E(e) {
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
function N(e, t) {
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
function _(e) {
    var t;
    let {
            pendingState: l,
            dirtyState: p,
            originalGuild: h,
            settingsGuild: _,
            settingsMetadata: S,
            settingsProfile: T,
        } = e,
        I = _.id,
        [C, P] = i.useState(!1),
        [w, R] = i.useState(null),
        D = _.features.has(y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        G = null != (t = (0, g.H)({ guildId: _.id })) ? t : 0,
        L = i.useCallback(() => {
            R(null), m.A.init(I, y.BEX.ACCESS);
        }, [I]),
        k = i.useCallback(async (e) => {
            try {
                P(!0), await e(), R(null);
            } finally {
                P(!1);
            }
        }, []),
        M = i.useCallback(
            async (e) => {
                try {
                    await m.A.saveGuild(I, e, { throwErr: !0 });
                } catch (e) {
                    throw (
                        ("object" == typeof e && "message" in e
                            ? R(e.message)
                            : R(A.intl.formatToPlainString(A.t.aTVNes, { statusPageURL: y.qF7.STATUS })),
                        e)
                    );
                }
            },
            [I],
        ),
        U = i.useCallback(
            async (e, t, n) => {
                try {
                    await d.Ay.updateVerificationForm(I, e, t, n);
                } catch (e) {
                    throw (R(new c.LG(e).getAnyErrorMessage()), e);
                }
            },
            [I],
        ),
        F = i.useCallback(
            async (e, t, n) => {
                let r =
                    t.length > 0
                        ? [
                              {
                                  field_type: u.rX.TERMS,
                                  label: A.intl.string(A.t["9suSIA"]),
                                  values: t,
                                  required: !0,
                              },
                          ]
                        : [];
                await U(r, e, n);
            },
            [U],
        ),
        B = i.useCallback(
            (e) => {
                if (
                    (l.isAgeRestricted !== (_.ownerConfiguredContentLevel === y.ftr.AGE_RESTRICTED) &&
                        k(async () => {
                            let e = l.isAgeRestricted ? y.ftr.AGE_RESTRICTED : y.ftr.DEFAULT;
                            await M({ ownerConfiguredContentLevel: e });
                        }),
                    l.joinType === j.J.INVITE)
                ) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => "" !== e);
                    k(async () => {
                        if (_.features.has(y.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(_.features);
                            e.delete(y.GuildFeatures.DISCOVERABLE), await M({ features: e });
                        }
                        p.verificationDirty && (await F(t, r, e));
                    });
                } else if (l.joinType === j.J.APPLY) {
                    let { pendingVerificationFields: t } = l;
                    if (null == t) return;
                    k(async () => {
                        if (_.features.has(y.GuildFeatures.DISCOVERABLE)) {
                            let e = new Set(_.features);
                            e.delete(y.GuildFeatures.DISCOVERABLE), await M({ features: e });
                        }
                        p.verificationDirty && (await U([...t], !0, e)),
                            p.profileDirty && null != T && (await (0, b._C)(_.id, { visibility: T.visibility }));
                    });
                } else if (l.joinType === j.J.DISCOVERABLE) {
                    let { requireTerms: t, termRules: n = [] } = l,
                        r = n.map((e) => e.value.trim()).filter((e) => "" !== e);
                    k(async () => {
                        if ((p.verificationDirty && (await F(t, r, e)), p.guildDirty)) {
                            (0, x.dl)(_, h);
                            let e = new Set(_.features);
                            e.add(y.GuildFeatures.DISCOVERABLE),
                                e.delete(y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                                await M({
                                    features: e,
                                    discoverySplash: _.discoverySplash,
                                    description: _.description,
                                    preferredLocale: _.preferredLocale,
                                });
                            try {
                                await (0, o.Oh)(E({ guildId: _.id }, S));
                            } catch (e) {
                                throw (R(new c.LG(e).getAnyErrorMessage()), e);
                            }
                        }
                    });
                }
            },
            [l, k, _, p, M, F, T, U, h, S],
        ),
        H = i.useCallback(
            () =>
                ((e) => {
                    if (l.joinType === j.J.INVITE || l.joinType === j.J.DISCOVERABLE) {
                        let { requireTerms: e, termRules: t = [] } = l;
                        if (t.map((e) => e.value.trim()).filter((e) => "" !== e).length < 1 && e)
                            return void R(A.intl.string(A.t.TCHkcd));
                    }
                    if (l.joinType === j.J.APPLY) {
                        var t;
                        if (!(null == (t = l.pendingVerificationFields) ? void 0 : t.some((e) => (0, f.OP)(e))))
                            return void R(A.intl.string(A.t.HGVrI3));
                    }
                    e();
                })(() => {
                    var e;
                    return (
                        (e = (e) => {
                            var t;
                            return (
                                (t = () => B(e)),
                                void (l.joinType === j.J.DISCOVERABLE && l.settingsView === O.v.ELIGIBLE_DISABLED
                                    ? (0, a.mMO)(async () => {
                                          let { default: e } = await n.e("35125").then(n.bind(n, 60852));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  N(E({}, n), {
                                                      guildId: I,
                                                      onConfirm: t,
                                                  }),
                                              );
                                      })
                                    : t())
                            );
                        }),
                        void (D && G > 0 && l.joinType !== j.J.APPLY
                            ? (0, a.mMO)(async () => {
                                  let { default: t } = await n.e("63452").then(n.bind(n, 78903));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          N(E({}, n), {
                                              guildId: I,
                                              submittedGuildJoinRequestsCount: G,
                                              onConfirm: e,
                                          }),
                                      );
                              })
                            : e())
                    );
                }),
            [D, B, l, I, G],
        ),
        V = l.joinType === j.J.DISCOVERABLE && l.settingsView === O.v.ELIGIBLE_DISABLED,
        K = null != _.description && S.primaryCategoryId !== v.ig && S.keywords.length > 0;
    return (0, r.jsx)(s.A, {
        message: V ? A.intl.string(A.t.V2G2Yr) : void 0,
        onSaveText: V ? A.intl.string(A.t["qjtt/p"]) : void 0,
        submitting: C,
        errorMessage: w,
        onReset: L,
        onSave: H,
        disabled: V && !K,
    });
}
function S() {
    let { pendingState: e, dirtyState: t } = (0, l.cf)([h.A], () => ({
            pendingState: h.A.pendingState,
            dirtyState: h.A.dirtyState,
        })),
        {
            settingsGuild: n,
            settingsMetadata: i,
            originalGuild: a,
            guildProfile: c,
        } = (0, l.cf)([p.A], () => {
            let { guild: e, guildMetadata: t, originalGuild: n, profile: r } = p.A.getProps();
            return {
                settingsGuild: e,
                settingsMetadata: t,
                originalGuild: n,
                guildProfile: r,
            };
        });
    return null == e || null == n
        ? null
        : e.joinType === j.J.DISCOVERABLE && e.settingsView === O.v.INELIGIBLE
          ? (0, r.jsx)(s.A, {
                message: A.intl.string(A.t.TEXwRt),
                onReset: () => m.A.init(n.id, y.BEX.ACCESS),
            })
          : (0, r.jsx)(_, {
                pendingState: e,
                dirtyState: t,
                originalGuild: a,
                settingsGuild: n,
                settingsMetadata: i,
                settingsProfile: c,
            });
}
