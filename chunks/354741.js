e.d(t, { default: () => S });
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(493683),
    r = e(239091),
    s = e(883385),
    o = e(108843),
    d = e(947440),
    u = e(100527),
    c = e(299206),
    h = e(895563),
    f = e(212205),
    x = e(62420),
    _ = e(122074),
    I = e(314897),
    g = e(858687),
    C = e(461535),
    v = e(776568),
    N = e(981631),
    m = e(388032);
let S = (0, o.Z)(
    (0, s.Z)(
        function (n) {
            let { channel: t, selected: s, onSelect: o } = n,
                u = t.isOwner(I.default.getId()),
                S = (0, C.Z)(t),
                T = (0, v.ZP)(t),
                j = (0, _.Uf)(N.aIL, t.id, 'top'),
                E = (0, g.Z)(t, s),
                O = (0, c.Z)({
                    id: t.id,
                    label: m.intl.string(m.t.gFHI3t)
                }),
                Z = (0, d.Z)(t),
                b = (0, h.l)(t),
                U = (0, h.P)(t),
                A = (0, f.Z)(t),
                p = (0, x.Z)(t);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(l.v2r, {
                      navId: 'gdm-context',
                      'aria-label': m.intl.string(m.t.Xm41aW),
                      onClose: r.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsx)(l.kSQ, { children: S }),
                          (0, i.jsxs)(l.kSQ, {
                              children: [b, A, p]
                          }),
                          (0, i.jsxs)(l.kSQ, {
                              children: [
                                  u
                                      ? (0, i.jsx)(l.sNh, {
                                            id: 'instant-invites',
                                            label: m.intl.string(m.t.ngRFjY),
                                            action: () =>
                                                (0, l.ZDy)(async () => {
                                                    let { default: n } = await e.e('97573').then(e.bind(e, 892382));
                                                    return (e) =>
                                                        (0, i.jsx)(n, {
                                                            channelId: t.id,
                                                            ...e
                                                        });
                                                })
                                        })
                                      : null,
                                  (0, i.jsx)(l.II_, {
                                      id: 'change-icon',
                                      showDefaultFocus: !0,
                                      control: (n, e) =>
                                          (0, i.jsx)(l.TEe, {
                                              onChange: (e) => {
                                                  var i;
                                                  a.Z.setIcon(t.id, e), null === (i = n.onClose) || void 0 === i || i.call(n);
                                              },
                                              multiple: !1,
                                              'aria-label': m.intl.string(m.t['6yrpFR']),
                                              ...n,
                                              ref: e
                                          }),
                                      label: m.intl.string(m.t['6yrpFR'])
                                  }),
                                  null != t.icon
                                      ? (0, i.jsx)(l.sNh, {
                                            id: 'remove-icon',
                                            label: m.intl.string(m.t['uY+Nk5']),
                                            action: () => a.Z.setIcon(t.id, null)
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(l.kSQ, { children: Z }),
                          (0, i.jsxs)(l.kSQ, {
                              children: [T, j]
                          }),
                          (0, i.jsx)(l.kSQ, { children: E }),
                          (0, i.jsx)(l.kSQ, { children: U }),
                          (0, i.jsx)(l.kSQ, { children: O })
                      ]
                  });
        },
        { object: N.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
