n.d(t, { Z: () => E }), n(47120);
var i,
    r,
    l,
    s = n(392711),
    a = n.n(s),
    o = n(906280),
    c = n.n(o),
    d = n(442837),
    u = n(570140),
    m = n(944163),
    h = n(77498),
    g = n(116175),
    x = n(308083);
function p(e) {
    return new Set(Array.from(e).filter((e) => null != h.Z.getDetectableGame(e)));
}
let _ = () => ({
        gameApplicationIds: new Set(),
        playstyle: x.zv.NONE,
        interests: new Set(),
        description: '',
        wildcardDescriptors: [x.U6, x.U6, x.U6],
        tag: '',
        verificationForm: { ...m.t },
        badgeKind: g.ZD.SWORD,
        badgePrimaryColor: g.sg['0'].primary,
        badgeSecondaryColor: g.sg['0'].secondary,
        banner: x.qC.NIGHT_SKY,
        brandPrimaryColor: x.ym['0'].primary,
        brandSecondaryColor: x.ym['0'].secondary
    }),
    C = _(),
    f = c()(C),
    v = !1,
    N = !1,
    j = {};
class I extends (i = d.ZP.Store) {
    getState() {
        return {
            initialSettings: C,
            settings: f,
            dirty: v,
            errors: j,
            submitting: N
        };
    }
}
(l = 'ClanSettingsStore'),
    (r = 'displayName') in I
        ? Object.defineProperty(I, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[r] = l);
let E = new I(u.Z, {
    CLAN_SETTINGS_FETCH_START: function () {
        (N = !1), (C = _()), (f = c()(C)), (v = !1), (j = {});
    },
    CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
        let { settings: t } = e;
        (C = {
            ..._(),
            ...t
        }),
            ((f = c()(C)).gameApplicationIds = p(f.gameApplicationIds)),
            (v = !1);
    },
    CLAN_SETTINGS_UPDATE: function (e) {
        let { updates: t } = e,
            { gameApplicationIds: n } = t;
        for (let e in (null != n && (t.gameApplicationIds = p(n)),
        (f = {
            ...f,
            ...c()(t)
        }),
        t))
            delete j[e], (j = { ...j });
        v = !a().isEqual(a().omit(f, 'verificationForm'), a().omit(C, 'verificationForm'));
    },
    CLAN_SETTINGS_SUBMIT: function () {
        (N = !0), (j = {});
    },
    CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
        (N = !1), (C = c()(f)), (v = !1), (j = {});
    },
    CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
        let { error: t } = e;
        (N = !1),
            (j = {
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
        if (null == f.verificationForm) return !1;
        if (
            ((f = {
                ...f,
                verificationForm: {
                    ...f.verificationForm,
                    ...t
                }
            }),
            n)
        ) {
            var i;
            v = !a().isEqual(f.verificationForm.formFields, null === (i = C.verificationForm) || void 0 === i ? void 0 : i.formFields);
        } else v = !1;
    }
});
