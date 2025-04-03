n.d(t, { r: () => _ });
var r = n(200651),
    i = n(192379),
    s = n(580685),
    a = n(793030),
    l = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(910200),
    m = n(434404),
    g = n(600553),
    p = n(999382),
    h = n(548522),
    f = n(651390),
    b = n(981631),
    x = n(388032),
    j = n(98574);
let N = {
    id: '0',
    name: '',
    description: '',
    icon: '',
    customBanner: null,
    onlineCount: 0,
    memberCount: 0,
    traits: [],
    gameApplicationIds: [],
    gameActivity: {},
    visibility: s.k.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null
};
function _(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: _ } = (0, l.cj)([p.Z], () => ({
            guild: p.Z.getGuild(),
            guildProfile: p.Z.getGuildProfile()
        })),
        v = null == n ? void 0 : n.id,
        C = (0, l.e7)([c.Z], () => c.Z.get(v)),
        { fetchGuildProfile: O } = (0, d.u)(v),
        y = (null == _ ? void 0 : _.visibility) == null || !s.Y.VISIBLE.has(null == _ ? void 0 : _.visibility),
        I = (null == _ ? void 0 : _.visibility) === s.k.PUBLIC_WITH_RECRUITMENT,
        E = (0, g.Dj)({
            guildId: v,
            location: 'recruitment'
        });
    i.useEffect(() => {
        null != v && O();
    }, [v, O]);
    let S = i.useMemo(() => (null == n || null == _ ? N : _), [n, _]),
        T = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null && (I ? m.Z.updateGuildProfile(n.id, { visibility: s.k.PUBLIC }) : m.Z.updateGuildProfile(n.id, { visibility: s.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, I]),
        P = i.useCallback(() => {
            m.Z.setSection(b.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let w = null != t ? t : null == C ? void 0 : C.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: x.NW.string(x.t.AHJddH)
            }),
            (0, r.jsx)(a.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: j.applicationBody,
                children: x.NW.string(x.t.Z7TCtb)
            }),
            (0, r.jsx)(f.c, { guildId: n.id }),
            (0, r.jsx)('div', {
                className: j.form,
                children:
                    null != w
                        ? (0, r.jsx)(h.y, {
                              guild: n,
                              formFields: w
                          })
                        : (0, r.jsx)(o.$jN, {})
            }),
            E
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: j.divider }),
                          (0, r.jsxs)(o.hjN, {
                              className: j.twoColumnContainer,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: j.column,
                                      children: [
                                          (0, r.jsx)(o.j7V, {
                                              onChange: T,
                                              value: I,
                                              hideBorder: !0,
                                              disabled: y,
                                              children: x.NW.string(x.t['N/0239'])
                                          }),
                                          (0, r.jsx)(a.xv, {
                                              variant: 'text-sm/normal',
                                              color: 'text-secondary',
                                              children: x.NW.string(x.t['3TSZYG'])
                                          }),
                                          y &&
                                              (0, r.jsx)(a.xv, {
                                                  variant: 'text-xs/normal',
                                                  color: 'text-muted',
                                                  children: x.NW.format(x.t.Bk0VOj, {
                                                      profileLink: (e, t) =>
                                                          (0, r.jsx)(
                                                              o.eee,
                                                              {
                                                                  onClick: P,
                                                                  children: e
                                                              },
                                                              t
                                                          )
                                                  })
                                              })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      className: j.column,
                                      children: (0, r.jsxs)('div', {
                                          className: j.previewWrapper,
                                          children: [
                                              (0, r.jsx)('div', { className: j.gradient }),
                                              (0, r.jsx)(u.ZP, {
                                                  className: j.preview,
                                                  profile: S,
                                                  CTAOverride: (0, r.jsx)(o.zxk, {
                                                      className: j.previewButton,
                                                      size: o.zxk.Sizes.SMALL,
                                                      fullWidth: !0,
                                                      children: x.NW.string(x.t['7XdMW1'])
                                                  })
                                              })
                                          ]
                                      })
                                  })
                              ]
                          })
                      ]
                  })
                : null
        ]
    });
}
