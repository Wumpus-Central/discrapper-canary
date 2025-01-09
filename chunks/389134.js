n(47120);
var i,
    r,
    l,
    s,
    a = n(392711),
    o = n.n(a),
    c = n(906280),
    d = n.n(c),
    u = n(442837),
    m = n(570140),
    h = n(944163),
    g = n(77498),
    x = n(116175),
    p = n(308083);
function f(e) {
    return new Set(Array.from(e).filter((e) => null != g.Z.getDetectableGame(e)));
}
let C = () => ({
        gameApplicationIds: new Set(),
        playstyle: p.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [p.U6, p.U6, p.U6],
        tag: '',
        verificationForm: { ...h.t },
        badgeKind: x.ZD.SWORD,
        badgePrimaryColor: x.sg['0'].primary,
        badgeSecondaryColor: x.sg['0'].secondary,
        banner: p.qC.NIGHT_SKY,
        brandPrimaryColor: p.ym['0'].primary,
        brandSecondaryColor: p.ym['0'].secondary
    }),
    v = C(),
    N = d()(v),
    _ = !1,
    I = !1,
    T = {};
class j extends (i = u.ZP.Store) {
    getState() {
        return {
            initialSettings: v,
            settings: N,
            dirty: _,
            errors: T,
            submitting: I
        };
    }
}
(s = 'ClanSettingsStore'),
    (l = 'displayName') in (r = j)
        ? Object.defineProperty(r, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = s),
    (t.Z = new j(m.Z, {
        CLAN_SETTINGS_FETCH_START: function () {
            (I = !1), (v = C()), (N = d()(v)), (_ = !1), (T = {});
        },
        CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: t } = e;
            (v = {
                ...C(),
                ...t
            }),
                ((N = d()(v)).gameApplicationIds = f(N.gameApplicationIds)),
                (_ = !1);
        },
        CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: t } = e,
                { gameApplicationIds: n } = t;
            for (let e in (null != n && (t.gameApplicationIds = f(n)),
            (N = {
                ...N,
                ...d()(t)
            }),
            t))
                delete T[e], (T = { ...T });
            _ = !o().isEqual(o().omit(N, 'verificationForm'), o().omit(v, 'verificationForm'));
        },
        CLAN_SETTINGS_SUBMIT: function () {
            (I = !0), (T = {});
        },
        CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (I = !1), (v = d()(N)), (_ = !1), (T = {});
        },
        CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: t } = e;
            (I = !1),
                (T = {
                    gameApplicationIds: t.getFirstFieldErrorMessage('game_application_ids'),
                    playstyle: t.getFirstFieldErrorMessage('play_style'),
                    description: t.getFirstFieldErrorMessage('description'),
                    wildcardDescriptors: t.getFirstFieldErrorMessage('wildcard_descriptors'),
                    interests: t.getFirstFieldErrorMessage('search_terms'),
                    tag: t.getFirstFieldErrorMessage('tag'),
                    verificationForm: t.getFirstFieldErrorMessage(['verification_form', 'form_fields'])
                });
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: t, isLocalUpdate: n } = e;
            if (null == N.verificationForm) return !1;
            if (
                ((N = {
                    ...N,
                    verificationForm: {
                        ...N.verificationForm,
                        ...t
                    }
                }),
                n)
            ) {
                var i;
                _ = !o().isEqual(N.verificationForm.formFields, null === (i = v.verificationForm) || void 0 === i ? void 0 : i.formFields);
            } else _ = !1;
        }
    }));
