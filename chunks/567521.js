i.d(t, { Z: () => o });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(471253),
    d = i(146085),
    s = i(496675),
    c = i(388032);
function o(n, t) {
    let i = (0, l.e7)([s.Z], () => s.Z.can(d.yP, n), [n]);
    return null != t && i
        ? (0, e.jsx)(a.sNh, {
              id: 'end-stage',
              label: c.intl.string(c.t.saZaRU),
              color: 'danger',
              action: function () {
                  (0, a.h7j)((t) =>
                      (0, e.jsx)(a.ConfirmModal, {
                          ...t,
                          header: c.intl.string(c.t.gW9je3),
                          confirmText: c.intl.string(c.t.saZaRU),
                          cancelText: c.intl.string(c.t['ETE/oK']),
                          onConfirm: () => (0, r.NZ)(n),
                          children: (0, e.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: c.intl.string(c.t.mT7jwM)
                          })
                      })
                  );
              }
          })
        : null;
}
