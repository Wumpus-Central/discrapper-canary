i.d(n, { default: () => E });
var e = i(200651);
i(192379);
var o = i(990547),
    r = i(399606),
    l = i(481060),
    a = i(843931),
    s = i(1596),
    c = i(922611),
    d = i(478923),
    u = i(594174),
    x = i(626135),
    m = i(51144),
    f = i(981631),
    g = i(388032);
function E(t) {
    let { transitionState: n, onClose: i, userId: E, onCancel: I, confirmBlock: C } = t,
        N = (0, r.e7)([u.default], () => u.default.getUser(E)),
        h = m.ZP.useName(N),
        j = (0, c.Do)({ location: 'confirm_block_user_modal' }),
        _ = () => {
            C(), x.default.track(f.rMx.BLOCK_USER_CONFIRMED);
        };
    if (null != N)
        return j
            ? (0, e.jsx)(d.default, {
                  transitionState: n,
                  user: N,
                  onBlock: _,
                  onClose: i,
                  onCancel: I
              })
            : (0, e.jsx)(l.ConfirmModal, {
                  header: g.intl.formatToPlainString(g.t.x5pOn5, { name: h }),
                  confirmText: g.intl.string(g.t.l4EmaW),
                  cancelText: g.intl.string(g.t['ETE/oK']),
                  onConfirm: _,
                  onClose: i,
                  onCancel: I,
                  transitionState: n,
                  impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION },
                  children: (0, a.cC)({ location: 'confirm_block_modal' })
                      ? (0, e.jsx)(s.Z, {})
                      : (0, e.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: g.intl.format(g.t.pegItL, { name: h })
                        })
              });
}
