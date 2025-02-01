e.d(t, { default: () => S });
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(493683),
    r = e(239091),
    d = e(883385),
    o = e(108843),
    s = e(947440),
    u = e(100527),
    c = e(299206),
    h = e(895563),
    f = e(212205),
    x = e(62420),
    _ = e(122074),
    C = e(314897),
    g = e(858687),
    I = e(461535),
    m = e(776568),
    v = e(981631),
    N = e(388032);
let S = (0, o.Z)(
    (0, d.Z)(
        function (n) {
            let { channel: t, selected: d, onSelect: o } = n,
                u = t.isOwner(C.default.getId()),
                S = (0, I.Z)(t),
                T = (0, m.ZP)(t),
                j = (0, _.Uf)(v.aIL, t.id, 'top'),
                b = (0, g.Z)(t, d),
                E = (0, c.Z)({
                    id: t.id,
                    label: N.intl.string(N.t.gFHI3t)
                }),
                O = (0, s.Z)(t),
                Z = (0, h.l)(t),
                U = (0, h.P)(t),
                p = (0, f.Z)(t),
                A = (0, x.Z)(t);
            return null == t || t.isManaged()
                ? null
                : (0, i.jsxs)(l.v2r, {
                      navId: 'gdm-context',
                      'aria-label': N.intl.string(N.t.Xm41aW),
                      onClose: r.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsx)(l.kSQ, { children: S }),
                          (0, i.jsxs)(l.kSQ, {
                              children: [Z, p, A]
                          }),
                          (0, i.jsxs)(l.kSQ, {
                              children: [
                                  u
                                      ? (0, i.jsx)(l.sNh, {
                                            id: 'instant-invites',
                                            label: N.intl.string(N.t.ngRFjY),
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
                                              'aria-label': N.intl.string(N.t['6yrpFR']),
                                              ...n,
                                              ref: e
                                          }),
                                      label: N.intl.string(N.t['6yrpFR'])
                                  }),
                                  null != t.icon
                                      ? (0, i.jsx)(l.sNh, {
                                            id: 'remove-icon',
                                            label: N.intl.string(N.t['uY+Nk5']),
                                            action: () => a.Z.setIcon(t.id, null)
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(l.kSQ, { children: O }),
                          (0, i.jsxs)(l.kSQ, {
                              children: [T, j]
                          }),
                          (0, i.jsx)(l.kSQ, { children: b }),
                          (0, i.jsx)(l.kSQ, { children: U }),
                          (0, i.jsx)(l.kSQ, { children: E })
                      ]
                  });
        },
        { object: v.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU]
);
