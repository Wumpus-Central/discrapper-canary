r.d(t, { ZP: () => v }), r(47120), r(192379);
var n,
    i = r(392711),
    o = r.n(i),
    a = r(442837),
    l = r(570140),
    s = r(944163),
    d = r(709054),
    c = r(116175),
    _ = r(308083);
function u(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let g = new Map(),
    p = new Map(),
    C = !1,
    f = Object.freeze({
        gameApplicationIds: new Set(),
        playstyle: _.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [_.U6, _.U6, _.U6],
        tag: '',
        verificationForm: { ...s.t },
        badgeKind: c.ZD.SWORD,
        badgePrimaryColor: void 0,
        badgeSecondaryColor: void 0,
        banner: _.qC.NIGHT_SKY,
        brandPrimaryColor: void 0,
        brandSecondaryColor: void 0,
        currentStep: _.Wy.GAMES,
        furthestStep: _.Wy.GAMES,
        requiredGameId: void 0
    });
function S(e) {
    var t;
    return null !== (t = g.get(e)) && void 0 !== t
        ? t
        : (function () {
              let e = o().cloneDeep(f);
              return (e.badgeKind = (0, c.lP)()), (e.banner = (0, _.i1)()), e;
          })();
}
function b(e, t) {
    let r = S(e);
    g.set(e, {
        ...r,
        ...t
    });
    let n = p.get(e);
    if (null != n) {
        let r = { ...n };
        Object.keys(t).forEach((e) => {
            delete r[e];
        }),
            p.set(e, r);
    }
}
class m extends (n = a.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            d.default.keys(e.progressByGuild).forEach((t) => {
                var r, n, i, o, a;
                g.set(t, {
                    gameApplicationIds: new Set((r = e.progressByGuild[t]).gameApplicationIds),
                    playstyle: r.playstyle,
                    interests: new Set(r.interests),
                    description: r.description,
                    wildcardDescriptors: null !== (n = r.wildcardDescriptors) && void 0 !== n ? n : [_.U6, _.U6, _.U6],
                    tag: r.tag,
                    verificationForm: null !== (i = r.verificationForm) && void 0 !== i ? i : { ...s.t },
                    badgeKind: null !== (o = r.badgeKind) && void 0 !== o ? o : c.ZD.SWORD,
                    badgePrimaryColor: r.badgePrimaryColor,
                    badgeSecondaryColor: r.badgeSecondaryColor,
                    banner: null !== (a = r.banner) && void 0 !== a ? a : _.qC.NIGHT_SKY,
                    brandPrimaryColor: r.brandPrimaryColor,
                    brandSecondaryColor: r.brandSecondaryColor,
                    currentStep: r.currentStep,
                    furthestStep: r.furthestStep,
                    requiredGameId: r.requiredGameId
                });
            });
    }
    getState() {
        let e = {};
        return (
            g.forEach((t, r) => {
                e[r] = {
                    gameApplicationIds: Array.from(t.gameApplicationIds),
                    playstyle: t.playstyle,
                    interests: Array.from(t.interests),
                    description: t.description,
                    wildcardDescriptors: t.wildcardDescriptors,
                    tag: t.tag,
                    verificationForm: t.verificationForm,
                    badgeKind: t.badgeKind,
                    badgePrimaryColor: t.badgePrimaryColor,
                    badgeSecondaryColor: t.badgeSecondaryColor,
                    banner: t.banner,
                    brandPrimaryColor: t.brandPrimaryColor,
                    brandSecondaryColor: t.brandSecondaryColor,
                    currentStep: t.currentStep,
                    furthestStep: t.furthestStep,
                    requiredGameId: t.requiredGameId
                };
            }),
            { progressByGuild: e }
        );
    }
    getStateForGuild(e) {
        return {
            progress: g.get(e),
            errors: p.get(e),
            submitting: C
        };
    }
    getGuildIds() {
        return [...g.keys()];
    }
}
u(m, 'displayName', 'ClanSetupStore'), u(m, 'persistKey', 'ClanSetupStore');
let v = new m(l.Z, {
    CLAN_SETUP_RESET: function () {
        g.clear(), p.clear();
    },
    CLAN_SETUP_UPDATE: function (e) {
        let { guildId: t, updates: r } = e;
        b(t, r);
    },
    CLAN_SETUP_SUBMIT: function (e) {
        let { guildId: t } = e;
        (C = !0), p.delete(t);
    },
    CLAN_SETUP_SUCCESS: function (e) {
        let { guildId: t } = e;
        (C = !1), g.delete(t), p.delete(t);
    },
    CLAN_SETUP_ERROR: function (e) {
        let { guildId: t, error: r } = e;
        (C = !1),
            p.set(t, {
                gameApplicationIds: r.getFirstFieldErrorMessage('game_application_ids'),
                playstyle: r.getFirstFieldErrorMessage('play_style'),
                description: r.getFirstFieldErrorMessage('description'),
                wildcardDescriptors: r.getFirstFieldErrorMessage('wildcard_descriptors'),
                interests: r.getFirstFieldErrorMessage('search_terms'),
                tag: r.getFirstFieldErrorMessage('tag'),
                verificationForm: r.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
            });
    },
    MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
        let t;
        let { form: r, guildId: n, isLocalUpdate: i } = e;
        i &&
            ((t =
                null == r
                    ? s.t
                    : {
                          ...S(n).verificationForm,
                          ...r
                      }),
            b(n, { verificationForm: t }));
    }
});
