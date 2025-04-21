n.d(t, { r: () => v });
var r = n(200651),
    i = n(192379),
    l = n(580685),
    s = n(793030),
    a = n(442837),
    o = n(481060),
    c = n(944163),
    d = n(65361),
    u = n(910200),
    m = n(434404),
    g = n(600553),
    p = n(999382),
    h = n(548522),
    f = n(651390),
    x = n(981631),
    b = n(388032),
    j = n(98574);
let _ = {
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
    visibility: l.k.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null
};
function v(e) {
    let { pendingFields: t } = e,
        { guild: n, guildProfile: v } = (0, a.cj)([p.Z], () => ({
            guild: p.Z.getGuild(),
            guildProfile: p.Z.getGuildProfile()
        })),
        O = null == n ? void 0 : n.id,
        C = (0, a.e7)([c.Z], () => c.Z.get(O)),
        { fetchGuildProfile: y } = (0, d.u)(O),
        N = (null == v ? void 0 : v.visibility) == null || !l.Y.VISIBLE.has(null == v ? void 0 : v.visibility),
        I = (null == v ? void 0 : v.visibility) === l.k.PUBLIC_WITH_RECRUITMENT,
        E = (0, g.Dj)({
            guildId: O,
            location: 'recruitment'
        });
    i.useEffect(() => {
        null != O && y();
    }, [O, y]);
    let S = i.useMemo(() => (null == n || null == v ? _ : v), [n, v]),
        T = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null && (I ? m.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC }) : m.Z.updateGuildProfile(n.id, { visibility: l.k.PUBLIC_WITH_RECRUITMENT }));
        }, [null == n ? void 0 : n.id, I]),
        P = i.useCallback(() => {
            m.Z.setSection(x.pNK.PROFILE);
        }, []);
    if (null == n) return null;
    let w = null != t ? t : null == C ? void 0 : C.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: b.intl.string(b.t.AHJddH)
            }),
            (0, r.jsx)(s.xv, {
                tag: 'p',
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: j.applicationBody,
                children: b.intl.string(b.t.Z7TCtb)
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
                                              disabled: N,
                                              children: b.intl.string(b.t['N/0239'])
                                          }),
                                          (0, r.jsx)(s.xv, {
                                              variant: 'text-sm/normal',
                                              color: 'text-secondary',
                                              children: b.intl.string(b.t['3TSZYG'])
                                          }),
                                          N &&
                                              (0, r.jsx)(s.xv, {
                                                  variant: 'text-xs/normal',
                                                  color: 'text-muted',
                                                  children: b.intl.format(b.t.Bk0VOj, {
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
                                                      children: b.intl.string(b.t['7XdMW1'])
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
