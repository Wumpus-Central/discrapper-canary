n.d(t, { default: () => h });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(239091),
    s = n(299206),
    o = n(726521),
    c = n(99325),
    d = n(683818),
    u = n(388032);
function h(e) {
    let { entry: t, onSelect: h, closePopout: p, hideEditButton: m = !1 } = e,
        { isEntryAdmin: f, canEdit: g, canRemove: _ } = (0, d.Z)(t),
        C = (0, s.Z)({
            id: t.guildId,
            label: u.intl.string(u.t['94lLDw']),
            onSuccess: p
        });
    l.useEffect(() => {
        g || _ || null != C || (0, r.Zy)();
    });
    let x = () => {
        c.kx(t.channelId, t.guildId);
    };
    function v() {
        (0, r.Zy)(), null == p || p();
    }
    return (0, i.jsxs)(a.v2r, {
        navId: 'guild-entry-context',
        onClose: v,
        'aria-label': u.intl.string(u.t.HpQykZ),
        onSelect: h,
        children: [
            (0, i.jsxs)(a.kSQ, {
                children: [
                    g && !m
                        ? (0, i.jsx)(a.sNh, {
                              id: 'update-entry',
                              label: u.intl.string(u.t.XnuOvL),
                              action: function () {
                                  (0, a.ZDy)(async () => {
                                      let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              entry: t
                                          });
                                  }),
                                      v();
                              }
                          })
                        : null,
                    _
                        ? (0, i.jsx)(a.sNh, {
                              id: 'remove-from-hub',
                              label: u.intl.string(u.t.KUxYWF),
                              action: function () {
                                  (0, a.h7j)((e) =>
                                      (0, i.jsx)(a.ConfirmModal, {
                                          header: u.intl.string(u.t.KUxYWF),
                                          confirmText: u.intl.string(u.t.N86XcH),
                                          cancelText: u.intl.string(u.t['ETE/oK']),
                                          onConfirm: x,
                                          ...e,
                                          children: (0, i.jsx)(a.Text, {
                                              variant: 'text-md/normal',
                                              children: u.intl.format(u.t['/5y0ub'], { guildName: t.name })
                                          })
                                      })
                                  ),
                                      v();
                              },
                              color: 'danger'
                          })
                        : null,
                    f
                        ? null
                        : (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(a.sNh, {
                                  id: 'report-server-listing',
                                  label: u.intl.string(u.t.Aen9en),
                                  action: function () {
                                      null != t && ((0, o.sq)(t), v());
                                  },
                                  icon: a.U65,
                                  color: 'danger'
                              })
                          })
                ]
            }),
            (0, i.jsx)(a.kSQ, { children: C })
        ]
    });
}
